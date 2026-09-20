import { App as CapApp } from "@capacitor/app";
import {
  createBrewStore,
  formatDuration,
  remainingMsAt,
  type BrewState,
  type TastingEntry,
} from "@brew-core";
import { useEffect, useMemo, useState } from "react";
import { playForegroundChime, resetChimeGuard } from "./audio.ts";
import { BrewScreen } from "./screens/BrewScreen.tsx";
import { DataScreen } from "./screens/DataScreen.tsx";
import { EntryScreen } from "./screens/EntryScreen.tsx";
import { JournalScreen } from "./screens/JournalScreen.tsx";
import { SessionScreen } from "./screens/SessionScreen.tsx";
import { StateContext, StoreContext } from "./storeContext.ts";
import { createWebPersistence } from "./storage.ts";

export type Tab = "brew" | "session" | "journal" | "data";

export function App() {
  const store = useMemo(
    () => createBrewStore({ persistence: createWebPersistence() }),
    [],
  );
  const [state, setState] = useState<BrewState>(() => store.getState());
  const [tab, setTab] = useState<Tab>(state.activeSession ? "session" : "brew");
  const [editingEntry, setEditingEntry] = useState<TastingEntry | null>(null);
  const [, setTick] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(setState);
    return () => {
      unsubscribe();
    };
  }, [store]);

  useEffect(() => {
    const recover = () => {
      store.recoverOnOpen();
    };
    recover();
    const visibility = () => {
      if (document.visibilityState === "visible") recover();
    };
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("focus", recover);
    let appHandle: { remove: () => void } | undefined;
    void CapApp.addListener("appStateChange", ({ isActive }) => {
      if (isActive) recover();
    }).then((handle) => {
      appHandle = handle;
    }).catch(() => {
      // Web preview has no native app plugin.
    });
    return () => {
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("focus", recover);
      appHandle?.remove();
    };
  }, [store]);

  useEffect(() => {
    const timer = state.activeSession?.timer;
    if (timer?.status !== "running") return;
    const id = window.setInterval(() => setTick((value) => value + 1), 250);
    return () => window.clearInterval(id);
  }, [state.activeSession?.timer.status]);

  useEffect(() => {
    const session = state.activeSession;
    if (!session) return;
    const now = Date.now();
    const remaining = remainingMsAt(session.timer, now);
    if (session.timer.status === "completed" || remaining <= 0 && session.timer.status === "running") {
      playForegroundChime(`${session.id}:${session.currentInfusionIndex}:${session.timer.completedAtMs ?? "done"}`);
    } else {
      resetChimeGuard();
    }
  }, [state.activeSession]);

  const remaining = state.activeSession
    ? remainingMsAt(state.activeSession.timer, Date.now())
    : 0;

  return (
    <StoreContext.Provider value={store}>
      <StateContext.Provider value={state}>
        <div className="app-shell">
          <header className="topbar">
            <p>Being Tea Co.</p>
            <h1>
              Brew, taste, <em>remember.</em>
            </h1>
          </header>
          <main className="page">
            {state.activeSession?.recoveredOnOpen && tab === "session" ? (
              <div className={`banner ${state.activeSession.completedWhileAway ? "warning" : ""}`}>
                <strong>Session recovered after relaunch</strong>
                {state.activeSession.completedWhileAway
                  ? `Infusion ${state.activeSession.currentInfusionIndex + 1} finished while the app was away. Remaining is ${formatDuration(remaining)}. No operating-system alarm was scheduled.`
                  : `Timer restored from saved wall-clock state. Remaining ${formatDuration(remaining)}.`}
              </div>
            ) : null}
            {tab === "brew" ? <BrewScreen onStarted={() => setTab("session")} /> : null}
            {tab === "session" ? (
              <SessionScreen
                remainingMs={remaining}
                onLog={(entry) => {
                  setEditingEntry(entry);
                  setTab("journal");
                }}
              />
            ) : null}
            {tab === "journal" ? (
              editingEntry ? (
                <EntryScreen entry={editingEntry} onClose={() => setEditingEntry(null)} />
              ) : (
                <JournalScreen onEdit={setEditingEntry} />
              )
            ) : null}
            {tab === "data" ? <DataScreen /> : null}
          </main>
          <nav className="bottom-nav">
            {(
              [
                ["brew", "Brew"],
                ["session", "Timer"],
                ["journal", "Journal"],
                ["data", "Data"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                className={tab === id ? "active" : ""}
                onClick={() => {
                  setTab(id);
                  if (id !== "journal") setEditingEntry(null);
                }}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </StateContext.Provider>
    </StoreContext.Provider>
  );
}
