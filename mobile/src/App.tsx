import { App as CapApp } from "@capacitor/app";
import {
  createBrewStore,
  formatDuration,
  remainingMsAt,
  type BrewState,
  type BrewStore,
  type TastingEntry,
} from "@brew-core";
import { useEffect, useState } from "react";
import { playForegroundChime, resetChimeGuard } from "./audio.ts";
import { pulseCompletion, syncInfusionNotice, syncKeepAwake } from "./runtime.ts";
import { BrewScreen } from "./screens/BrewScreen.tsx";
import { DataScreen } from "./screens/DataScreen.tsx";
import { EntryScreen } from "./screens/EntryScreen.tsx";
import { JournalScreen } from "./screens/JournalScreen.tsx";
import { SessionScreen } from "./screens/SessionScreen.tsx";
import { StateContext, StoreContext } from "./storeContext.ts";
import { createAppPersistence } from "./storage.ts";

export type Tab = "brew" | "session" | "journal" | "data";

export function App() {
  const [store, setStore] = useState<BrewStore | null>(null);
  useEffect(() => {
    let alive = true;
    void createAppPersistence().then((persistence) => {
      if (!alive) return;
      setStore(createBrewStore({ persistence }));
    });
    return () => {
      alive = false;
    };
  }, []);
  if (!store) {
    return (
      <div className="app-shell">
        <header className="topbar">
          <p>Being Tea Co.</p>
          <h1>Opening the local journal…</h1>
        </header>
      </div>
    );
  }
  return <AppReady store={store} />;
}

function AppReady({ store }: { store: BrewStore }) {
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
    let backHandle: { remove: () => void } | undefined;
    void CapApp.addListener("appStateChange", ({ isActive }) => {
      if (isActive) recover();
    }).then((handle) => {
      appHandle = handle;
    }).catch(() => {
      // Web preview has no native app plugin.
    });
    void CapApp.addListener("backButton", () => {
      if (editingEntry) {
        setEditingEntry(null);
        return;
      }
      if (tab !== "brew") {
        setTab("brew");
        return;
      }
      void CapApp.minimizeApp();
    }).then((handle) => {
      backHandle = handle;
    }).catch(() => undefined);
    return () => {
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("focus", recover);
      appHandle?.remove();
      backHandle?.remove();
    };
  }, [store, tab, editingEntry]);

  useEffect(() => {
    const timer = state.activeSession?.timer;
    if (timer?.status !== "running") return;
    const id = window.setInterval(() => setTick((value) => value + 1), 250);
    return () => window.clearInterval(id);
  }, [state.activeSession?.timer.status]);

  useEffect(() => {
    const session = state.activeSession;
    const running = session?.timer.status === "running";
    void syncKeepAwake(Boolean(running));
    void syncInfusionNotice(
      session?.timer,
      {
        infusionLabel: session?.infusions[session.currentInfusionIndex]?.label,
        sessionName: session?.name,
      },
      state.noticeEnabled,
    );
  }, [state.activeSession, state.noticeEnabled]);

  useEffect(() => {
    const session = state.activeSession;
    if (!session) return;
    const now = Date.now();
    const remaining = remainingMsAt(session.timer, now);
    if (session.timer.status === "completed" || remaining <= 0 && session.timer.status === "running") {
      const key = `${session.id}:${session.currentInfusionIndex}:${session.timer.completedAtMs ?? "done"}`;
      playForegroundChime(key);
      void pulseCompletion();
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
                  ? `Infusion ${state.activeSession.currentInfusionIndex + 1} finished while the app was away. Remaining is ${formatDuration(remaining)}. Recovery used saved wall-clock state.`
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
