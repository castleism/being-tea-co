import { applyImport, createExportBundle, parseImport, previewImport } from "./exportImport.ts";
import { deleteEntry, searchEntries, updateEntry, upsertEntry } from "./journal.ts";
import {
  addInfusionSlot,
  applySessionTimer,
  completeCurrentInfusion,
  jumpToInfusion,
  listBuiltInTemplates,
  recoverSession,
  saveSessionAsReusable,
  setSessionInfusionDuration,
  startSessionFromTemplate,
} from "./sessions.ts";
import type {
  ActiveBrewSession,
  BrewSessionTemplate,
  BrewState,
  ExportBundle,
  ImportMode,
  ImportPreview,
  TastingEntry,
} from "./types.ts";

export const STORAGE_KEY = "being-tea-co.mobile.v1";

export function emptyState(nowIso: string): BrewState {
  return {
    version: 1,
    activeSession: null,
    templates: listBuiltInTemplates(nowIso),
    entries: [],
  };
}

export function hydrateState(raw: unknown, nowIso: string, nowMs: number): BrewState {
  const base = emptyState(nowIso);
  if (!raw || typeof raw !== "object") return base;
  const value = raw as Partial<BrewState>;
  const userTemplates = Array.isArray(value.templates)
    ? value.templates.filter((template) => template && template.origin === "user")
    : [];
  const builtInIds = new Set(base.templates.map((template) => template.id));
  const templates = [
    ...base.templates,
    ...userTemplates.filter((template) => !builtInIds.has(template.id)),
  ];
  let activeSession = value.activeSession ?? null;
  if (activeSession) {
    activeSession = recoverSession(activeSession, nowMs);
  }
  return {
    version: 1,
    activeSession,
    templates,
    entries: Array.isArray(value.entries) ? value.entries : [],
  };
}

export type Persistence = {
  load(): string | null;
  save(value: string): void;
};

export function createBrewStore(options: {
  persistence?: Persistence;
  now?: () => number;
} = {}) {
  const nowMs = () => (options.now ? options.now() : Date.now());
  const nowIso = () => new Date(nowMs()).toISOString();
  let state = emptyState(nowIso());
  if (options.persistence) {
    const raw = options.persistence.load();
    if (raw) {
      try {
        state = hydrateState(JSON.parse(raw), nowIso(), nowMs());
      } catch {
        state = emptyState(nowIso());
      }
    }
    options.persistence.save(JSON.stringify(state));
  }

  const listeners = new Set<(next: BrewState) => void>();

  function persist() {
    options.persistence?.save(JSON.stringify(state));
  }

  function commit(next: BrewState) {
    state = next;
    persist();
    for (const listener of listeners) listener(state);
    return state;
  }

  return {
    getState(): BrewState {
      return state;
    },
    subscribe(listener: (next: BrewState) => void) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    recoverOnOpen() {
      if (!state.activeSession) return state;
      return commit({
        ...state,
        activeSession: recoverSession(state.activeSession, nowMs()),
      });
    },
    startTemplate(template: BrewSessionTemplate) {
      return commit({
        ...state,
        activeSession: startSessionFromTemplate(template, nowMs()),
      });
    },
    timer(action: "start" | "pause" | "resume" | "reset" | "plus" | "minus") {
      if (!state.activeSession) return state;
      return commit({
        ...state,
        activeSession: applySessionTimer(state.activeSession, nowMs(), action),
      });
    },
    setInfusionDuration(seconds: number) {
      if (!state.activeSession) return state;
      return commit({
        ...state,
        activeSession: setSessionInfusionDuration(state.activeSession, seconds, nowMs()),
      });
    },
    completeInfusion() {
      if (!state.activeSession) return state;
      return commit({
        ...state,
        activeSession: completeCurrentInfusion(state.activeSession, nowMs()),
      });
    },
    jumpToInfusion(index: number) {
      if (!state.activeSession) return state;
      return commit({
        ...state,
        activeSession: jumpToInfusion(state.activeSession, index, nowMs()),
      });
    },
    addInfusion(seconds: number) {
      if (!state.activeSession) return state;
      return commit({
        ...state,
        activeSession: addInfusionSlot(state.activeSession, seconds, nowIso()),
      });
    },
    saveActiveAsReusable(name?: string) {
      if (!state.activeSession) return state;
      const template = saveSessionAsReusable(state.activeSession, nowIso(), name);
      return commit({
        ...state,
        templates: [...state.templates.filter((item) => item.id !== template.id), template],
      });
    },
    removeTemplate(id: string) {
      return commit({
        ...state,
        templates: state.templates.filter(
          (template) => template.id !== id || template.origin === "approved-guidance",
        ),
      });
    },
    clearActive() {
      return commit({ ...state, activeSession: null });
    },
    upsertEntry(entry: TastingEntry) {
      return commit({
        ...state,
        entries: upsertEntry(state.entries, { ...entry, updatedAt: nowIso() }),
      });
    },
    editEntry(id: string, patch: Partial<TastingEntry>) {
      const current = state.entries.find((entry) => entry.id === id);
      if (!current) return state;
      return commit({
        ...state,
        entries: upsertEntry(state.entries, updateEntry(current, patch, nowIso())),
      });
    },
    removeEntry(id: string) {
      return commit({
        ...state,
        entries: deleteEntry(state.entries, id),
      });
    },
    search(query: string): TastingEntry[] {
      return searchEntries(state.entries, query);
    },
    exportBundle(fixture = false): ExportBundle {
      return createExportBundle({
        entries: state.entries,
        sessions: state.templates,
        nowIso: nowIso(),
        fixture,
      });
    },
    previewImport(raw: string): { preview: ImportPreview; bundle: ExportBundle } {
      const parsed = parseImport(raw);
      return {
        bundle: parsed.bundle,
        preview: previewImport(state.entries, state.templates, parsed.bundle),
      };
    },
    applyImport(bundle: ExportBundle, mode: ImportMode) {
      const next = applyImport(
        { entries: state.entries, sessions: state.templates },
        bundle,
        mode,
      );
      return commit({
        ...state,
        entries: next.entries,
        templates: [
          ...state.templates.filter((template) => template.origin === "approved-guidance"),
          ...next.sessions.filter((template) => template.origin === "user"),
        ],
      });
    },
    replaceActive(session: ActiveBrewSession | null) {
      return commit({ ...state, activeSession: session });
    },
  };
}

export type BrewStore = ReturnType<typeof createBrewStore>;
