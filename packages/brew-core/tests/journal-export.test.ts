import assert from "node:assert/strict";
import test from "node:test";
import { applyImport, createExportBundle, parseImport } from "../src/exportImport.ts";
import { createEntry, searchEntries, updateEntry } from "../src/journal.ts";
import { createBrewStore } from "../src/store.ts";

test("journal entries can be edited and searched without fixtures", () => {
  const first = createEntry({ teaName: "Wuyi yancha", familySlug: "oolong", taste: "roast, stone fruit" }, "2026-09-20T10:00:00.000Z");
  const second = createEntry({ teaName: "Sencha", familySlug: "green", notes: "steamed, short steep" }, "2026-09-20T11:00:00.000Z");
  const edited = updateEntry(first, { notes: "calmer on infusion 4" }, "2026-09-20T12:00:00.000Z");
  const hits = searchEntries([edited, second], "infusion 4");
  assert.equal(hits.length, 1);
  assert.equal(hits[0].id, first.id);
  assert.equal(hits[0].notes, "calmer on infusion 4");
});

test("safe export/import merges by id and rejects hostile payloads", () => {
  const entry = createEntry({ teaName: "Shou cake 2024", familySlug: "puerh-shou" }, "2026-09-20T10:00:00.000Z");
  const bundle = createExportBundle({
    entries: [entry],
    sessions: [],
    nowIso: "2026-09-20T12:00:00.000Z",
  });
  const raw = JSON.stringify(bundle);
  const parsed = parseImport(raw);
  assert.equal(parsed.bundle.entries[0].teaName, "Shou cake 2024");

  const merged = applyImport({ entries: [entry], sessions: [] }, parsed.bundle, "merge");
  assert.equal(merged.entries.length, 1);

  assert.throws(() => parseImport("{not json"), /not valid JSON/);
  assert.throws(
    () => parseImport(JSON.stringify({ schema: "evil.v0", entries: [] })),
    /Unsupported journal schema/,
  );
  assert.throws(
    () => parseImport(`{"schema":"${bundle.schema}","entries":[],"__proto__":{"polluted":true}}`),
    /unsafe keys/,
  );
});

test("store hydrates an empty journal and never auto-loads fixture entries", () => {
  const memory = { value: null as string | null };
  const store = createBrewStore({
    persistence: {
      load: () => memory.value,
      save: (value) => {
        memory.value = value;
      },
    },
    now: () => Date.parse("2026-09-20T08:00:00.000Z"),
  });
  assert.equal(store.getState().entries.length, 0);
  assert.ok(store.getState().templates.some((template) => template.origin === "approved-guidance"));
  assert.equal(JSON.parse(memory.value ?? "{}").entries.length, 0);
});

test("store recovers a running timer from persistence", () => {
  const startedAt = Date.parse("2026-09-20T08:00:00.000Z");
  let now = startedAt;
  const memory = { value: null as string | null };
  const first = createBrewStore({
    persistence: {
      load: () => memory.value,
      save: (value) => {
        memory.value = value;
      },
    },
    now: () => now,
  });
  const template = first.getState().templates.find((item) => item.guidanceId === "white__western");
  assert.ok(template);
  first.startTemplate(template);
  first.timer("start");
  now = startedAt + 30_000;

  const reopened = createBrewStore({
    persistence: {
      load: () => memory.value,
      save: (value) => {
        memory.value = value;
      },
    },
    now: () => now,
  });
  const active = reopened.getState().activeSession;
  assert.ok(active);
  assert.equal(active.recoveredOnOpen, true);
  assert.equal(active.timer.status, "running");
  assert.ok(active.timer.remainingMs <= 150_000);
  assert.ok(active.timer.remainingMs >= 140_000);
});

test("user-saved sessions can be renamed and have infusions edited", () => {
  const store = createBrewStore({ now: () => Date.parse("2026-09-20T08:00:00.000Z") });
  const template = store.getState().templates.find((item) => item.guidanceId === "oolong__gongfu");
  assert.ok(template);
  store.startTemplate(template);
  store.saveActiveAsReusable("Saturday oolong");
  const saved = store.getState().templates.find((item) => item.origin === "user");
  assert.ok(saved);
  store.renameUserTemplate(saved.id, "Sunday oolong");
  store.setUserTemplateInfusions(saved.id, [15, 25, 35]);
  const updated = store.getState().templates.find((item) => item.id === saved.id);
  assert.equal(updated?.name, "Sunday oolong");
  assert.deepEqual(updated?.infusions.map((item) => item.durationSeconds), [15, 25, 35]);
});
