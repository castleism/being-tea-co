import { createId, isSafeId } from "./ids.ts";
import type { TastingEntry } from "./types.ts";

const MAX_TEXT = 4000;
const MAX_NAME = 200;

function clip(value: string, max = MAX_TEXT): string {
  return value.trim().slice(0, max);
}

export function createEntry(
  partial: Partial<TastingEntry> & Pick<TastingEntry, "teaName">,
  nowIso: string,
): TastingEntry {
  return normalizeEntry({
    id: partial.id && isSafeId(partial.id) ? partial.id : createId("entry"),
    createdAt: partial.createdAt ?? nowIso,
    updatedAt: nowIso,
    teaName: clip(partial.teaName, MAX_NAME),
    familySlug: clip(partial.familySlug ?? "", 80),
    methodSlug: clip(partial.methodSlug ?? "", 80),
    sessionId: partial.sessionId ?? null,
    guidanceId: partial.guidanceId ?? null,
    leafAmount: clip(partial.leafAmount ?? "", 80),
    waterAmount: clip(partial.waterAmount ?? "", 80),
    temperatureObserved: clip(partial.temperatureObserved ?? "", 80),
    infusionTimesSeconds: Array.isArray(partial.infusionTimesSeconds)
      ? partial.infusionTimesSeconds.filter((value) => Number.isFinite(value)).slice(0, 24)
      : [],
    aroma: clip(partial.aroma ?? ""),
    taste: clip(partial.taste ?? ""),
    texture: clip(partial.texture ?? ""),
    finish: clip(partial.finish ?? ""),
    notes: clip(partial.notes ?? ""),
    wouldBrewAgain: typeof partial.wouldBrewAgain === "boolean" ? partial.wouldBrewAgain : null,
  });
}

export function normalizeEntry(entry: TastingEntry): TastingEntry {
  return {
    ...entry,
    teaName: clip(entry.teaName, MAX_NAME),
    familySlug: clip(entry.familySlug ?? "", 80),
    methodSlug: clip(entry.methodSlug ?? "", 80),
    leafAmount: clip(entry.leafAmount ?? "", 80),
    waterAmount: clip(entry.waterAmount ?? "", 80),
    temperatureObserved: clip(entry.temperatureObserved ?? "", 80),
    aroma: clip(entry.aroma ?? ""),
    taste: clip(entry.taste ?? ""),
    texture: clip(entry.texture ?? ""),
    finish: clip(entry.finish ?? ""),
    notes: clip(entry.notes ?? ""),
    infusionTimesSeconds: (entry.infusionTimesSeconds ?? [])
      .filter((value) => Number.isFinite(value) && value >= 0)
      .slice(0, 24),
  };
}

export function updateEntry(
  existing: TastingEntry,
  patch: Partial<TastingEntry>,
  nowIso: string,
): TastingEntry {
  return normalizeEntry({
    ...existing,
    ...patch,
    id: existing.id,
    createdAt: existing.createdAt,
    updatedAt: nowIso,
  });
}

export function searchEntries(
  entries: TastingEntry[],
  query: string,
  familySlug = "",
): TastingEntry[] {
  const needle = query.trim().toLowerCase();
  const family = familySlug.trim();
  const scoped = family ? entries.filter((entry) => entry.familySlug === family) : entries;
  const sorted = [...scoped].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  if (!needle) return sorted;
  return sorted.filter((entry) => {
    const haystack = [
      entry.teaName,
      entry.familySlug,
      entry.methodSlug,
      entry.aroma,
      entry.taste,
      entry.texture,
      entry.finish,
      entry.notes,
      entry.leafAmount,
      entry.waterAmount,
      entry.temperatureObserved,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
}

export function upsertEntry(entries: TastingEntry[], entry: TastingEntry): TastingEntry[] {
  const next = normalizeEntry(entry);
  const index = entries.findIndex((item) => item.id === next.id);
  if (index === -1) return [next, ...entries];
  const copy = entries.slice();
  copy[index] = next;
  return copy;
}

export function deleteEntry(entries: TastingEntry[], id: string): TastingEntry[] {
  return entries.filter((entry) => entry.id !== id);
}

export function entryFromSession(input: {
  teaName: string;
  familySlug: string;
  methodSlug: string;
  sessionId: string;
  guidanceId: string;
  infusionTimesSeconds: number[];
  nowIso: string;
}): TastingEntry {
  return createEntry(
    {
      teaName: input.teaName,
      familySlug: input.familySlug,
      methodSlug: input.methodSlug,
      sessionId: input.sessionId,
      guidanceId: input.guidanceId,
      infusionTimesSeconds: input.infusionTimesSeconds,
      notes: "",
    },
    input.nowIso,
  );
}
