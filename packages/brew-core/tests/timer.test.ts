import assert from "node:assert/strict";
import test from "node:test";
import {
  adjustTimer,
  createIdleTimer,
  formatDuration,
  pauseTimer,
  recoverTimer,
  remainingMsAt,
  resetTimer,
  resumeTimer,
  startTimer,
} from "../src/timer.ts";

test("pause and resume keep remaining time without leaking elapsed pause", () => {
  const t0 = 1_000_000;
  let timer = startTimer(createIdleTimer(60_000, t0), t0);
  timer = pauseTimer(timer, t0 + 10_000);
  assert.equal(timer.status, "paused");
  assert.equal(timer.remainingMs, 50_000);
  timer = resumeTimer(timer, t0 + 40_000);
  assert.equal(timer.status, "running");
  assert.equal(remainingMsAt(timer, t0 + 40_000), 50_000);
  assert.equal(remainingMsAt(timer, t0 + 45_000), 45_000);
});

test("relaunch recovery uses wall clock, not interval ticks", () => {
  const t0 = 5_000_000;
  const running = startTimer(createIdleTimer(120_000, t0), t0);
  const recovered = recoverTimer(running, t0 + 40_000);
  assert.equal(recovered.status, "running");
  assert.equal(recovered.remainingMs, 80_000);
  assert.equal(recovered.anchorAtMs, t0 + 40_000);
});

test("relaunch after the infusion ended marks completed and records completion time", () => {
  const t0 = 8_000_000;
  const running = startTimer(createIdleTimer(30_000, t0), t0);
  const recovered = recoverTimer(running, t0 + 45_000);
  assert.equal(recovered.status, "completed");
  assert.equal(recovered.remainingMs, 0);
  assert.equal(recovered.completedAtMs, t0 + 30_000);
});

test("adjusting a running timer changes remaining from now", () => {
  const t0 = 2_000_000;
  let timer = startTimer(createIdleTimer(60_000, t0), t0);
  timer = adjustTimer(timer, 15_000, t0 + 20_000);
  assert.equal(timer.status, "running");
  assert.equal(remainingMsAt(timer, t0 + 20_000), 55_000);
});

test("reset returns the original duration", () => {
  const t0 = 3_000_000;
  let timer = startTimer(createIdleTimer(90_000, t0), t0);
  timer = pauseTimer(timer, t0 + 10_000);
  timer = resetTimer(timer, t0 + 12_000);
  assert.equal(timer.status, "idle");
  assert.equal(timer.remainingMs, 90_000);
});

test("formatDuration handles hours for long cold-brew waits", () => {
  assert.equal(formatDuration(4 * 60 * 60 * 1000), "4:00:00");
  assert.equal(formatDuration(90_000), "1:30");
});
