import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { parseImport } from "../src/exportImport.ts";

test("the checked-in sample file is a labeled fixture, not live journal data", () => {
  const raw = readFileSync(
    join(dirname(fileURLToPath(import.meta.url)), "../../../mobile/fixtures/sample-journal.v1.json"),
    "utf8",
  );
  const parsed = parseImport(raw);
  assert.equal(parsed.bundle.fixture, true);
  assert.match(parsed.bundle.entries[0]?.teaName ?? "", /Fixture/);
  assert.ok(parsed.warnings.some((warning) => /fixture/i.test(warning)));
});
