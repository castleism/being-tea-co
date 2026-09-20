import { getStartingPoint, houseInfusionsFromGuidance, startingPoints } from "./guidance.ts";
import { createId } from "./ids.ts";
import {
  adjustTimer,
  createIdleTimer,
  pauseTimer,
  recoverTimer,
  remainingMsAt,
  resetTimer,
  resumeTimer,
  setTimerDuration,
  startTimer,
} from "./timer.ts";
import type {
  ActiveBrewSession,
  BrewSessionTemplate,
  InfusionPlan,
  StartingPoint,
} from "./types.ts";

export function templateFromGuidance(
  point: StartingPoint,
  nowIso: string,
  extras: Partial<Pick<BrewSessionTemplate, "id" | "name" | "origin" | "notes">> = {},
): BrewSessionTemplate {
  const infusions = houseInfusionsFromGuidance(point);
  return {
    id: extras.id ?? `guidance_${point.id}`,
    name: extras.name ?? `${point.familyName} · ${point.methodName}`,
    origin: extras.origin ?? "approved-guidance",
    guidanceId: point.id,
    familySlug: point.familySlug,
    methodSlug: point.methodSlug,
    infusions,
    notes: extras.notes ?? point.timerNote,
    createdAt: nowIso,
    updatedAt: nowIso,
  };
}

export function listBuiltInTemplates(nowIso: string): BrewSessionTemplate[] {
  return startingPoints
    .filter((point) => point.reusable)
    .map((point) => templateFromGuidance(point, nowIso));
}

export function duplicateTemplate(
  template: BrewSessionTemplate,
  nowIso: string,
  name?: string,
): BrewSessionTemplate {
  return {
    ...template,
    id: createId("session"),
    origin: "user",
    name: name ?? `${template.name} (saved)`,
    createdAt: nowIso,
    updatedAt: nowIso,
  };
}

export function updateTemplateInfusions(
  template: BrewSessionTemplate,
  infusions: InfusionPlan[],
  nowIso: string,
): BrewSessionTemplate {
  return {
    ...template,
    infusions: infusions.map((infusion, index) => ({
      ...infusion,
      index,
      durationSeconds: Math.max(5, Math.round(infusion.durationSeconds)),
    })),
    origin: template.origin === "approved-guidance" ? "user" : template.origin,
    id: template.origin === "approved-guidance" ? createId("session") : template.id,
    updatedAt: nowIso,
    createdAt: template.origin === "approved-guidance" ? nowIso : template.createdAt,
  };
}

export function startSessionFromTemplate(
  template: BrewSessionTemplate,
  nowMs: number,
): ActiveBrewSession {
  const infusion = template.infusions[0];
  const durationMs = (infusion?.durationSeconds ?? 0) * 1000;
  const nowIso = new Date(nowMs).toISOString();
  return {
    id: createId("active"),
    templateId: template.id,
    name: template.name,
    guidanceId: template.guidanceId,
    familySlug: template.familySlug,
    methodSlug: template.methodSlug,
    infusions: template.infusions.map((item) => ({ ...item })),
    currentInfusionIndex: 0,
    completedInfusionSeconds: [],
    timer:
      durationMs > 0
        ? createIdleTimer(durationMs, nowMs, { sessionId: template.id, infusionIndex: 0 })
        : createIdleTimer(60_000, nowMs, { sessionId: template.id, infusionIndex: 0 }),
    startedAt: nowIso,
    updatedAt: nowIso,
  };
}

export function recoverSession(
  session: ActiveBrewSession,
  nowMs: number,
): ActiveBrewSession {
  const timer = recoverTimer(session.timer, nowMs);
  const completedWhileAway =
    session.timer.status === "running" && timer.status === "completed";
  return {
    ...session,
    timer,
    recoveredOnOpen: true,
    completedWhileAway: session.completedWhileAway || completedWhileAway,
    updatedAt: new Date(nowMs).toISOString(),
  };
}

export function applySessionTimer(
  session: ActiveBrewSession,
  nowMs: number,
  action: "start" | "pause" | "resume" | "reset" | "plus" | "minus",
): ActiveBrewSession {
  const current = recoverTimer(session.timer, nowMs);
  let timer = current;
  if (action === "start") timer = startTimer(current, nowMs);
  if (action === "pause") timer = pauseTimer(current, nowMs);
  if (action === "resume") timer = resumeTimer(current, nowMs);
  if (action === "reset") timer = resetTimer(current, nowMs);
  if (action === "plus") timer = adjustTimer(current, 15_000, nowMs);
  if (action === "minus") timer = adjustTimer(current, -15_000, nowMs);
  return { ...session, timer, updatedAt: new Date(nowMs).toISOString() };
}

export function setSessionInfusionDuration(
  session: ActiveBrewSession,
  durationSeconds: number,
  nowMs: number,
): ActiveBrewSession {
  const infusions = session.infusions.map((infusion, index) =>
    index === session.currentInfusionIndex
      ? { ...infusion, durationSeconds: Math.max(5, Math.round(durationSeconds)) }
      : infusion,
  );
  return {
    ...session,
    infusions,
    timer: setTimerDuration(session.timer, Math.max(5, durationSeconds) * 1000, nowMs),
    updatedAt: new Date(nowMs).toISOString(),
  };
}

export function completeCurrentInfusion(
  session: ActiveBrewSession,
  nowMs: number,
): ActiveBrewSession {
  const usedSeconds = Math.max(
    1,
    Math.round((session.infusions[session.currentInfusionIndex]?.durationSeconds ?? 0) -
      remainingMsAt(recoverTimer(session.timer, nowMs), nowMs) / 1000),
  );
  const completed = [...session.completedInfusionSeconds, usedSeconds];
  const nextIndex = session.currentInfusionIndex + 1;
  const next = session.infusions[nextIndex];
  if (!next) {
    return {
      ...session,
      completedInfusionSeconds: completed,
      timer: {
        ...recoverTimer(session.timer, nowMs),
        status: "completed",
        remainingMs: 0,
        anchorAtMs: null,
        completedAtMs: nowMs,
        updatedAtMs: nowMs,
      },
      updatedAt: new Date(nowMs).toISOString(),
    };
  }
  return {
    ...session,
    currentInfusionIndex: nextIndex,
    completedInfusionSeconds: completed,
    completedWhileAway: false,
    timer: createIdleTimer(next.durationSeconds * 1000, nowMs, {
      sessionId: session.templateId,
      infusionIndex: nextIndex,
    }),
    updatedAt: new Date(nowMs).toISOString(),
  };
}

export function jumpToInfusion(
  session: ActiveBrewSession,
  infusionIndex: number,
  nowMs: number,
): ActiveBrewSession {
  const infusion = session.infusions[infusionIndex];
  if (!infusion) return session;
  return {
    ...session,
    currentInfusionIndex: infusionIndex,
    completedWhileAway: false,
    timer: createIdleTimer(infusion.durationSeconds * 1000, nowMs, {
      sessionId: session.templateId,
      infusionIndex,
    }),
    updatedAt: new Date(nowMs).toISOString(),
  };
}

export function addInfusionSlot(
  session: ActiveBrewSession,
  durationSeconds: number,
  nowIso: string,
): ActiveBrewSession {
  const next: InfusionPlan = {
    index: session.infusions.length,
    label: `Infusion ${session.infusions.length + 1}`,
    durationSeconds: Math.max(5, Math.round(durationSeconds)),
  };
  return {
    ...session,
    infusions: [...session.infusions, next],
    updatedAt: nowIso,
  };
}

export function saveSessionAsReusable(
  session: ActiveBrewSession,
  nowIso: string,
  name?: string,
): BrewSessionTemplate {
  return {
    id: createId("session"),
    name: name ?? `${session.name} (adjusted)`,
    origin: "user",
    guidanceId: session.guidanceId,
    familySlug: session.familySlug,
    methodSlug: session.methodSlug,
    infusions: session.infusions.map((infusion, index) => ({ ...infusion, index })),
    notes: "Saved from a live brewing session. Times are your house sequence, not a published recipe.",
    createdAt: nowIso,
    updatedAt: nowIso,
  };
}

export function guidanceForSession(session: { guidanceId: string }): StartingPoint | undefined {
  return getStartingPoint(session.guidanceId);
}
