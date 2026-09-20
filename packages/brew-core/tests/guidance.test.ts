import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  FORBIDDEN_CLAIM_PATTERNS,
  startingPoints,
} from "../src/guidance.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const library = readFileSync(join(root, "app/content/library.ts"), "utf8");

test("every guidance quote is copied from the approved library", () => {
  assert.ok(startingPoints.length >= 12);
  for (const point of startingPoints) {
    assert.ok(
      library.includes(point.familyBrewQuote),
      `Missing family quote for ${point.id}`,
    );
    assert.ok(
      library.includes(point.methodStartingPointQuote),
      `Missing method starting point for ${point.id}`,
    );
    if (point.methodWatchQuote) {
      assert.ok(
        library.includes(point.methodWatchQuote),
        `Missing method watch quote for ${point.id}`,
      );
    }
    for (const source of point.sources) {
      assert.ok(library.includes(source.url), `Missing source URL ${source.url} for ${point.id}`);
    }
  }
});

test("guidance does not invent health claims or background alarms", () => {
  const blob = JSON.stringify(startingPoints);
  for (const pattern of FORBIDDEN_CLAIM_PATTERNS) {
    assert.equal(pattern.test(blob), false, `Forbidden claim matched: ${pattern}`);
  }
});

test("numeric house timer defaults stay inside published ranges when a range exists", () => {
  const white = startingPoints.find((point) => point.id === "white__western");
  const sencha = startingPoints.find((point) => point.id === "green__sencha-kyusu");
  const cold = startingPoints.find((point) => point.id === "green__cold-brew");
  assert.deepEqual(white?.houseTimerSeconds, [180]);
  assert.equal(sencha?.houseTimerSeconds[0], 45);
  assert.equal(cold?.houseTimerSeconds[0], 14400);
});

test("tisanes and masala chai do not ship a invented recipe timer", () => {
  const tisane = startingPoints.find((point) => point.id === "tisanes__user-set");
  const chai = startingPoints.find((point) => point.id === "black-red__masala-chai");
  assert.deepEqual(tisane?.houseTimerSeconds, []);
  assert.deepEqual(chai?.houseTimerSeconds, []);
});
