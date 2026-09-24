import test from "node:test";
import assert from "node:assert/strict";
import { createNoticeSync } from "../src/noticeSync.ts";
import type { CompletionNotice } from "../src/notices.ts";

const notice: CompletionNotice = { id: 7125, fireAtMs: 5000, title: "Tea", body: "Ready" };
function fixture() {
  let pending: CompletionNotice[] = [];
  let allowed = true;
  let fail = false;
  let calls = 0;
  const port = {
    async cancelPending() { pending = []; },
    async permitted() { return allowed; },
    async schedule(n: CompletionNotice) {
      calls++;
      if (fail) throw new Error("plugin unavailable");
      pending.push(n);
    },
  };
  const sync = createNoticeSync(port, () => 1000);
  return { port, sync, pending: () => pending, calls: () => calls,
    allow: (value: boolean) => { allowed = value; },
    fail: (value: boolean) => { fail = value; } };
}
test("ending a session cancels reminders including infusion 26", async () => {
  const f = fixture(); await f.sync(notice); assert.equal(f.pending().length, 1);
  await f.sync(null); assert.deepEqual(f.pending(), []);
});
test("stopping while permission is pending cannot schedule stale reminder", async () => {
  const f = fixture();
  let resolve!: (value: boolean) => void;
  let entered!: () => void;
  const waiting = new Promise<void>(r => { entered = r; });
  f.port.permitted = () => { entered(); return new Promise(r => { resolve = r; }); };
  const first = f.sync(notice); await waiting;
  const stop = f.sync(null); resolve(true); await Promise.all([first, stop]);
  assert.equal(f.calls(), 0); assert.deepEqual(f.pending(), []);
});
test("latest timer wins rapid changes", async () => {
  const f = fixture();
  await Promise.all([f.sync(notice), f.sync(null), f.sync({ ...notice, fireAtMs: 9000 })]);
  assert.equal(f.calls(), 1); assert.equal(f.pending()[0].fireAtMs, 9000);
});
test("plugin failures and permission denial remain retryable", async () => {
  const f = fixture(); f.allow(false); await f.sync(notice);
  f.allow(true); f.fail(true); await f.sync(notice); assert.deepEqual(f.pending(), []);
  f.fail(false); await f.sync(notice); assert.equal(f.pending().length, 1);
});
test("unchanged notice is deduplicated; changed title is refreshed", async () => {
  const f = fixture(); await f.sync(notice); await f.sync(notice); assert.equal(f.calls(), 1);
  await f.sync({ ...notice, title: "Oolong" }); assert.equal(f.pending()[0].title, "Oolong");
});
test("expired timer is never scheduled", async () => {
  const f = fixture(); await f.sync({ ...notice, fireAtMs: 500 }); assert.equal(f.calls(), 0);
});
