import { isSafeId } from "./ids.ts";
import { normalizeEntry } from "./journal.ts";
import type {
  BrewSessionTemplate,
  ExportBundle,
  ImportMode,
  ImportPreview,
  TastingEntry,
} from "./types.ts";
import { JOURNAL_SCHEMA } from "./types.ts";

const MAX_ENTRIES = 5000;
const MAX_SESSIONS = 500;
const ALLOWED_SCHEMAS = new Set([JOURNAL_SCHEMA]);

export class ImportError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ImportError";
  }
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function readBooleanOrNull(value: unknown): boolean | null {
  return typeof value === "boolean" ? value : null;
}

function sanitizeEntry(value: unknown): TastingEntry | null {
  if (!isPlainObject(value)) return null;
  const id = readString(value.id);
  if (!isSafeId(id)) return null;
  const teaName = readString(value.teaName);
  if (!teaName) return null;
  const infusionTimesSeconds = Array.isArray(value.infusionTimesSeconds)
    ? value.infusionTimesSeconds.filter((item): item is number => typeof item === "number" && Number.isFinite(item))
    : [];
  return normalizeEntry({
    id,
    createdAt: readString(value.createdAt) || new Date().toISOString(),
    updatedAt: readString(value.updatedAt) || new Date().toISOString(),
    teaName,
    familySlug: readString(value.familySlug),
    methodSlug: readString(value.methodSlug),
    sessionId: typeof value.sessionId === "string" && isSafeId(value.sessionId) ? value.sessionId : null,
    guidanceId: typeof value.guidanceId === "string" ? value.guidanceId : null,
    leafAmount: readString(value.leafAmount),
    waterAmount: readString(value.waterAmount),
    temperatureObserved: readString(value.temperatureObserved),
    infusionTimesSeconds,
    aroma: readString(value.aroma),
    taste: readString(value.taste),
    texture: readString(value.texture),
    finish: readString(value.finish),
    notes: readString(value.notes),
    wouldBrewAgain: readBooleanOrNull(value.wouldBrewAgain),
  });
}

function sanitizeSession(value: unknown): BrewSessionTemplate | null {
  if (!isPlainObject(value)) return null;
  const id = readString(value.id);
  if (!isSafeId(id)) return null;
  const name = readString(value.name);
  if (!name) return null;
  const infusions = Array.isArray(value.infusions)
    ? value.infusions
        .map((item, index) => {
          if (!isPlainObject(item)) return null;
          const durationSeconds = Number(item.durationSeconds);
          if (!Number.isFinite(durationSeconds) || durationSeconds < 5) return null;
          return {
            index,
            label: readString(item.label, `Infusion ${index + 1}`).slice(0, 80),
            durationSeconds: Math.round(durationSeconds),
          };
        })
        .filter((item): item is NonNullable<typeof item> => item !== null)
    : [];
  return {
    id,
    name: name.slice(0, 200),
    origin: value.origin === "approved-guidance" ? "approved-guidance" : "user",
    guidanceId: readString(value.guidanceId),
    familySlug: readString(value.familySlug),
    methodSlug: readString(value.methodSlug),
    infusions,
    notes: readString(value.notes).slice(0, 4000),
    createdAt: readString(value.createdAt) || new Date().toISOString(),
    updatedAt: readString(value.updatedAt) || new Date().toISOString(),
  };
}

export function createExportBundle(input: {
  entries: TastingEntry[];
  sessions: BrewSessionTemplate[];
  nowIso: string;
  fixture?: boolean;
}): ExportBundle {
  return {
    schema: JOURNAL_SCHEMA,
    exportedAt: input.nowIso,
    app: "being-tea-co-mobile",
    fixture: Boolean(input.fixture),
    entries: input.entries.map((entry) => normalizeEntry(entry)),
    sessions: input.sessions.filter((session) => session.origin === "user"),
  };
}

export function parseImport(raw: string): { bundle: ExportBundle; preview: ImportPreview; warnings: string[] } {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new ImportError("The file is not valid JSON.");
  }
  if (!isPlainObject(parsed)) {
    throw new ImportError("The file must contain a JSON object.");
  }
  if (Object.prototype.hasOwnProperty.call(parsed, "__proto__") || Object.prototype.hasOwnProperty.call(parsed, "constructor")) {
    throw new ImportError("The file contains unsafe keys and was rejected.");
  }
  const schema = readString(parsed.schema);
  if (!ALLOWED_SCHEMAS.has(schema as typeof JOURNAL_SCHEMA)) {
    throw new ImportError(`Unsupported journal schema: ${schema || "(missing)"}.`);
  }
  if (!Array.isArray(parsed.entries)) {
    throw new ImportError("The file is missing an entries array.");
  }
  if (parsed.entries.length > MAX_ENTRIES) {
    throw new ImportError(`Too many entries (max ${MAX_ENTRIES}).`);
  }
  const sessionsIn = Array.isArray(parsed.sessions) ? parsed.sessions : [];
  if (sessionsIn.length > MAX_SESSIONS) {
    throw new ImportError(`Too many saved sessions (max ${MAX_SESSIONS}).`);
  }

  const warnings: string[] = [];
  const entries = parsed.entries
    .map((item, index) => {
      const entry = sanitizeEntry(item);
      if (!entry) {
        warnings.push(`Skipped unreadable entry at index ${index}.`);
        return null;
      }
      return entry;
    })
    .filter((item): item is TastingEntry => item !== null);

  const sessions = sessionsIn
    .map((item, index) => {
      const session = sanitizeSession(item);
      if (!session) {
        warnings.push(`Skipped unreadable session at index ${index}.`);
        return null;
      }
      return session;
    })
    .filter((item): item is BrewSessionTemplate => item !== null);

  if (parsed.fixture === true) {
    warnings.push("This file is marked as a fixture/sample. Importing it will not replace real journal identity; treat it as test data.");
  }

  const bundle: ExportBundle = {
    schema: JOURNAL_SCHEMA,
    exportedAt: readString(parsed.exportedAt) || new Date().toISOString(),
    app: "being-tea-co-mobile",
    fixture: parsed.fixture === true,
    entries,
    sessions,
  };

  return {
    bundle,
    preview: {
      schema: bundle.schema,
      fixture: bundle.fixture,
      entryCount: entries.length,
      sessionCount: sessions.length,
      newEntryIds: entries.map((entry) => entry.id),
      collidingEntryIds: [],
      newSessionIds: sessions.map((session) => session.id),
      collidingSessionIds: [],
      warnings,
    },
    warnings,
  };
}

export function previewImport(
  existingEntries: TastingEntry[],
  existingSessions: BrewSessionTemplate[],
  bundle: ExportBundle,
): ImportPreview {
  const existingEntryIds = new Set(existingEntries.map((entry) => entry.id));
  const existingSessionIds = new Set(existingSessions.map((session) => session.id));
  const collidingEntryIds = bundle.entries.filter((entry) => existingEntryIds.has(entry.id)).map((entry) => entry.id);
  const collidingSessionIds = bundle.sessions
    .filter((session) => existingSessionIds.has(session.id))
    .map((session) => session.id);
  return {
    schema: bundle.schema,
    fixture: bundle.fixture,
    entryCount: bundle.entries.length,
    sessionCount: bundle.sessions.length,
    newEntryIds: bundle.entries.filter((entry) => !existingEntryIds.has(entry.id)).map((entry) => entry.id),
    collidingEntryIds,
    newSessionIds: bundle.sessions.filter((session) => !existingSessionIds.has(session.id)).map((session) => session.id),
    collidingSessionIds,
    warnings: bundle.fixture
      ? ["This file is marked as a fixture/sample, not a live user journal."]
      : [],
  };
}

export function applyImport(
  existing: { entries: TastingEntry[]; sessions: BrewSessionTemplate[] },
  bundle: ExportBundle,
  mode: ImportMode,
): { entries: TastingEntry[]; sessions: BrewSessionTemplate[] } {
  if (mode === "replace") {
    return {
      entries: bundle.entries.map((entry) => normalizeEntry(entry)),
      sessions: [
        ...existing.sessions.filter((session) => session.origin === "approved-guidance"),
        ...bundle.sessions,
      ],
    };
  }

  const entriesById = new Map(existing.entries.map((entry) => [entry.id, entry]));
  for (const incoming of bundle.entries) {
    const current = entriesById.get(incoming.id);
    if (!current || incoming.updatedAt >= current.updatedAt) {
      entriesById.set(incoming.id, normalizeEntry(incoming));
    }
  }

  const sessionsById = new Map(existing.sessions.map((session) => [session.id, session]));
  for (const incoming of bundle.sessions) {
    const current = sessionsById.get(incoming.id);
    if (!current || incoming.updatedAt >= current.updatedAt) {
      sessionsById.set(incoming.id, incoming);
    }
  }

  return {
    entries: [...entriesById.values()],
    sessions: [...sessionsById.values()],
  };
}

export function exportFilename(now: Date, fixture = false): string {
  const stamp = now.toISOString().slice(0, 10);
  return fixture
    ? `being-tea-co-journal-fixture-${stamp}.json`
    : `being-tea-co-tasting-journal-${stamp}.json`;
}

function csvEscape(value: string): string {
  if (/[",\n]/.test(value)) return `"${value.replaceAll('"', '""')}"`;
  return value;
}

export function entriesToCsv(entries: TastingEntry[]): string {
  const header = [
    "id",
    "updatedAt",
    "teaName",
    "familySlug",
    "methodSlug",
    "leafAmount",
    "waterAmount",
    "temperatureObserved",
    "infusionTimesSeconds",
    "aroma",
    "taste",
    "texture",
    "finish",
    "notes",
    "wouldBrewAgain",
  ];
  const rows = entries.map((entry) =>
    [
      entry.id,
      entry.updatedAt,
      entry.teaName,
      entry.familySlug,
      entry.methodSlug,
      entry.leafAmount,
      entry.waterAmount,
      entry.temperatureObserved,
      entry.infusionTimesSeconds.join(" "),
      entry.aroma,
      entry.taste,
      entry.texture,
      entry.finish,
      entry.notes,
      entry.wouldBrewAgain === null ? "" : entry.wouldBrewAgain ? "yes" : "no",
    ]
      .map((value) => csvEscape(String(value)))
      .join(","),
  );
  return [header.join(","), ...rows].join("\n");
}
