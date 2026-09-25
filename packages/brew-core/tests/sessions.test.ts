import assert from "node:assert/strict";
import test from "node:test";
import { getStartingPoint } from "../src/guidance.ts";
import {
  completeCurrentInfusion,
  listBuiltInTemplates,
  recoverSession,
  saveSessionAsReusable,
  startSessionFromTemplate,
  templateFromGuidance,
} from "../src/sessions.ts";
import { startTimer } from "../src/timer.ts";

test("built-in templates are reusable and come from approved guidance", () => {
  const templates = listBuiltInTemplates("2026-09-20T00:00:00.000Z");
  assert.ok(templates.length >= 12);
  assert.ok(templates.every((template) => template.origin === "approved-guidance"));
  const oolong = templates.find((template) => template.guidanceId === "oolong__gongfu");
  assert.ok(oolong);
  assert.ok(oolong.infusions.length >= 6);
  assert.equal(oolong.infusions[0].durationSeconds, 20);
});

test("a multi-infusion session advances and can be saved as a user template", () => {
  const point = getStartingPoint("oolong__gongfu");
  assert.ok(point);
  const template = templateFromGuidance(point, "2026-09-20T00:00:00.000Z");
  let session = startSessionFromTemplate(template, 10_000);
  assert.equal(session.currentInfusionIndex, 0);
  session = completeCurrentInfusion(session, 20_000);
  assert.equal(session.currentInfusionIndex, 1);
  session = completeCurrentInfusion(session, 30_000);
  const saved = saveSessionAsReusable(session, "2026-09-20T00:01:00.000Z", "Saturday oolong");
  assert.equal(saved.origin, "user");
  assert.equal(saved.name, "Saturday oolong");
  assert.equal(saved.infusions.length, template.infusions.length);
  assert.match(saved.notes, /not a published recipe/);
});

test("recovering a killed session flags completion that happened while away", () => {
  const point = getStartingPoint("white__western");
  assert.ok(point);
  const template = templateFromGuidance(point, "2026-09-20T00:00:00.000Z");
  let session = startSessionFromTemplate(template, 1_000);
  session = { ...session, timer: startTimer(session.timer, 1_000) };
  const recovered = recoverSession(session, 1_000 + 200_000);
  assert.equal(recovered.timer.status, "completed");
  assert.equal(recovered.completedWhileAway, true);
  assert.equal(recovered.recoveredOnOpen, true);
});
