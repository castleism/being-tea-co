import { createEntry, formatDuration, type TastingEntry } from "@brew-core";
import { useState } from "react";
import { useBrewState, useBrewStore } from "../storeContext.ts";

export function SessionScreen({
  remainingMs,
  onLog,
}: {
  remainingMs: number;
  onLog: (entry: TastingEntry) => void;
}) {
  const store = useBrewStore();
  const { activeSession, templates } = useBrewState();
  const [customSeconds, setCustomSeconds] = useState("");
  const [saveName, setSaveName] = useState("");

  if (!activeSession) {
    return (
      <div className="card">
        <h2>No active session</h2>
        <p className="muted">Choose an approved starting point or a saved reusable session from Brew.</p>
      </div>
    );
  }

  const infusion = activeSession.infusions[activeSession.currentInfusionIndex];
  const running = activeSession.timer.status === "running";
  const guidance = templates.find((template) => template.guidanceId === activeSession.guidanceId);

  return (
    <div className="stack">
      <p className="kicker">{activeSession.name}</p>
      <div className="timer-face">
        <div className="timer-ring" data-timer-status={activeSession.timer.status}>
          <strong data-testid="timer-readout">{formatDuration(remainingMs)}</strong>
        </div>
        <p className="muted" aria-live="polite">
          {infusion ? infusion.label : "User-set timer"} · {activeSession.timer.status}
        </p>
      </div>
      <div className="chips" aria-label="Infusions">
        {activeSession.infusions.map((item, index) => (
          <button
            key={`${item.label}-${index}`}
            className={`chip ${index === activeSession.currentInfusionIndex ? "active" : ""} ${index < activeSession.currentInfusionIndex ? "done" : ""}`}
            onClick={() => store.jumpToInfusion(index)}
          >
            {index + 1}. {item.durationSeconds}s
          </button>
        ))}
      </div>
      <div className="actions">
        {running ? (
          <button className="btn" onClick={() => store.timer("pause")}>Pause</button>
        ) : (
          <button className="btn" onClick={() => store.timer(activeSession.timer.status === "paused" ? "resume" : "start")}>
            {activeSession.timer.status === "paused" ? "Resume" : "Start"}
          </button>
        )}
        <button className="btn-secondary" onClick={() => store.timer("minus")}>-15s</button>
        <button className="btn-secondary" onClick={() => store.timer("plus")}>+15s</button>
        <button className="btn-ghost" onClick={() => store.timer("reset")}>Reset</button>
      </div>
      <div className="actions">
        <button className="btn-secondary" onClick={() => store.completeInfusion()}>Complete infusion</button>
        <button className="btn-ghost" onClick={() => store.addInfusion(20)}>Add infusion</button>
        <button className="btn-ghost" onClick={() => store.clearActive()}>End session</button>
      </div>
      <label>
        Set this infusion (seconds)
        <input
          inputMode="numeric"
          value={customSeconds}
          onChange={(event) => setCustomSeconds(event.target.value)}
          placeholder={String(infusion?.durationSeconds ?? 60)}
        />
      </label>
      <button
        className="btn-secondary"
        onClick={() => {
          const seconds = Number(customSeconds);
          if (Number.isFinite(seconds) && seconds >= 5) store.setInfusionDuration(seconds);
        }}
      >
        Apply duration
      </button>
      <p className="legal">
        The chime and optional haptic play while this companion is open. If you
        grant notification permission on a native build, a local infusion
        notice can be scheduled for the current run. That is not a guaranteed
        alarm after the system stops the app. Relaunch recovery always uses
        saved wall-clock state.
      </p>
      {guidance?.notes ? <p className="muted">{guidance.notes}</p> : null}
      <label>
        Save as reusable session
        <input
          value={saveName}
          onChange={(event) => setSaveName(event.target.value)}
          placeholder="Saturday oolong"
        />
      </label>
      <button className="btn-secondary" onClick={() => store.saveActiveAsReusable(saveName || undefined)}>
        Save reusable session
      </button>
      <button
        className="btn"
        onClick={() => {
          const nowIso = new Date().toISOString();
          const times = [
            ...activeSession.completedInfusionSeconds,
            Math.max(1, Math.round((infusion?.durationSeconds ?? 0) - remainingMs / 1000)),
          ];
          const entry = createEntry(
            {
              teaName: activeSession.name,
              familySlug: activeSession.familySlug,
              methodSlug: activeSession.methodSlug,
              sessionId: activeSession.id,
              guidanceId: activeSession.guidanceId,
              infusionTimesSeconds: times,
            },
            nowIso,
          );
          store.upsertEntry(entry);
          onLog(entry);
        }}
      >
        Log tasting from this session
      </button>
    </div>
  );
}
