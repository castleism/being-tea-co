import type { TimerSnapshot, TimerStatus } from "./types.ts";

export const MIN_TIMER_MS = 5_000;
export const MAX_TIMER_MS = 12 * 60 * 60 * 1000;
export const ADJUST_STEP_MS = 15_000;

function clampDuration(ms: number): number {
  if (!Number.isFinite(ms)) return MIN_TIMER_MS;
  return Math.min(MAX_TIMER_MS, Math.max(MIN_TIMER_MS, Math.round(ms)));
}

export function createIdleTimer(
  durationMs: number,
  now: number,
  extras: Partial<Pick<TimerSnapshot, "sessionId" | "infusionIndex">> = {},
): TimerSnapshot {
  const duration = clampDuration(durationMs);
  return {
    status: "idle",
    durationMs: duration,
    remainingMs: duration,
    anchorAtMs: null,
    sessionId: extras.sessionId ?? null,
    infusionIndex: extras.infusionIndex ?? 0,
    updatedAtMs: now,
    completedAtMs: null,
  };
}

export function remainingMsAt(snapshot: TimerSnapshot, now: number): number {
  if (snapshot.status !== "running" || snapshot.anchorAtMs == null) {
    return Math.max(0, snapshot.remainingMs);
  }
  return Math.max(0, snapshot.remainingMs - (now - snapshot.anchorAtMs));
}

export function recoverTimer(snapshot: TimerSnapshot, now: number): TimerSnapshot {
  if (snapshot.status !== "running" || snapshot.anchorAtMs == null) {
    return snapshot;
  }
  const remaining = remainingMsAt(snapshot, now);
  if (remaining <= 0) {
    return {
      ...snapshot,
      status: "completed",
      remainingMs: 0,
      anchorAtMs: null,
      updatedAtMs: now,
      completedAtMs: snapshot.anchorAtMs + snapshot.remainingMs,
    };
  }
  return {
    ...snapshot,
    remainingMs: remaining,
    anchorAtMs: now,
    updatedAtMs: now,
  };
}

export function startTimer(snapshot: TimerSnapshot, now: number): TimerSnapshot {
  const recovered = recoverTimer(snapshot, now);
  if (recovered.status === "completed") return recovered;
  const remaining = recovered.remainingMs > 0 ? recovered.remainingMs : recovered.durationMs;
  return {
    ...recovered,
    status: "running",
    remainingMs: remaining,
    anchorAtMs: now,
    updatedAtMs: now,
    completedAtMs: null,
  };
}

export function pauseTimer(snapshot: TimerSnapshot, now: number): TimerSnapshot {
  const recovered = recoverTimer(snapshot, now);
  if (recovered.status !== "running") return recovered;
  return {
    ...recovered,
    status: "paused",
    remainingMs: remainingMsAt(recovered, now),
    anchorAtMs: null,
    updatedAtMs: now,
  };
}

export function resumeTimer(snapshot: TimerSnapshot, now: number): TimerSnapshot {
  const recovered = recoverTimer(snapshot, now);
  if (recovered.status !== "paused" || recovered.remainingMs <= 0) {
    return recovered.status === "paused" && recovered.remainingMs <= 0
      ? { ...recovered, status: "completed", remainingMs: 0, completedAtMs: now }
      : recovered;
  }
  return startTimer(recovered, now);
}

export function resetTimer(snapshot: TimerSnapshot, now: number): TimerSnapshot {
  return createIdleTimer(snapshot.durationMs, now, {
    sessionId: snapshot.sessionId,
    infusionIndex: snapshot.infusionIndex,
  });
}

export function adjustTimer(
  snapshot: TimerSnapshot,
  deltaMs: number,
  now: number,
): TimerSnapshot {
  const recovered = recoverTimer(snapshot, now);
  const currentRemaining = remainingMsAt(recovered, now);
  const nextRemaining = clampDuration(currentRemaining + deltaMs);
  const nextDuration = clampDuration(recovered.durationMs + deltaMs);
  const status: TimerStatus =
    recovered.status === "completed" ? "paused" : recovered.status === "running" ? "running" : recovered.status === "idle" ? "idle" : "paused";

  if (status === "running") {
    return {
      ...recovered,
      status,
      durationMs: nextDuration,
      remainingMs: nextRemaining,
      anchorAtMs: now,
      updatedAtMs: now,
      completedAtMs: null,
    };
  }

  return {
    ...recovered,
    status,
    durationMs: nextDuration,
    remainingMs: nextRemaining,
    anchorAtMs: null,
    updatedAtMs: now,
    completedAtMs: null,
  };
}

export function setTimerDuration(
  snapshot: TimerSnapshot,
  durationMs: number,
  now: number,
): TimerSnapshot {
  const duration = clampDuration(durationMs);
  const recovered = recoverTimer(snapshot, now);
  if (recovered.status === "running") {
    return {
      ...recovered,
      durationMs: duration,
      remainingMs: duration,
      anchorAtMs: now,
      updatedAtMs: now,
      completedAtMs: null,
    };
  }
  return {
    ...recovered,
    status: recovered.status === "completed" ? "idle" : recovered.status,
    durationMs: duration,
    remainingMs: duration,
    anchorAtMs: null,
    updatedAtMs: now,
    completedAtMs: null,
  };
}

export function formatDuration(ms: number): string {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}
