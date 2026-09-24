import assert from "node:assert/strict";
import test from "node:test";
import { entriesToCsv } from "../src/exportImport.ts";
import { createEntry, searchEntries } from "../src/journal.ts";
import { completionNotice, NOTICE_CHANNEL_ID, NOTICE_IDS } from "../src/notices.ts";
import { createIdleTimer, startTimer } from "../src/timer.ts";

test("completion notices exist only for a running timer", () => {
  const t0 = 9_000_000;
  const idle = createIdleTimer(30_000, t0);
  assert.equal(completionNotice(idle, t0), null);
  const running = startTimer(idle, t0);
  const notice = completionNotice(running, t0, { infusionLabel: "Infusion 1", sessionName: "Oolong" });
  assert.ok(notice);
  assert.equal(notice.fireAtMs, t0 + 30_000);
  assert.equal(notice.channelId, NOTICE_CHANNEL_ID);
  assert.equal(notice.id, NOTICE_IDS[0]);
  assert.match(notice.body, /not a guaranteed background alarm/);
});

test("CSV export quotes commas and keeps fixture rows distinguishable", () => {
  const entry = createEntry(
    { teaName: "Yancha, Wuyi", taste: "roast, stone fruit", familySlug: "oolong" },
    "2026-09-20T10:00:00.000Z",
  );
  const csv = entriesToCsv([entry]);
  assert.match(csv, /"Yancha, Wuyi"/);
  assert.match(csv, /teaName/);
});

test("journal search can be scoped to one family", () => {
  const oolong = createEntry({ teaName: "Yancha", familySlug: "oolong", taste: "roast" }, "2026-09-20T10:00:00.000Z");
  const green = createEntry({ teaName: "Sencha", familySlug: "green", taste: "steam" }, "2026-09-20T11:00:00.000Z");
  assert.equal(searchEntries([oolong, green], "s", "green").length, 1);
  assert.equal(searchEntries([oolong, green], "s", "green")[0]?.teaName, "Sencha");
});
