import assert from "node:assert/strict";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const shots = process.env.SMOKE_SHOTS || "/opt/cursor/artifacts/screenshots";
mkdirSync(shots, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--window-size=390,844"],
});

const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
page.setDefaultTimeout(15000);

async function shot(name) {
  const dest = join(shots, name);
  await page.screenshot({ path: dest, fullPage: true });
  return dest;
}

try {
  const manifestRes = await page.goto("http://127.0.0.1:5174/manifest.webmanifest", {
    waitUntil: "networkidle0",
  });
  assert.equal(manifestRes?.ok(), true);
  const manifest = await manifestRes.json();
  assert.equal(manifest.display, "standalone");
  assert.ok(manifest.icons?.length >= 2);

  await page.goto("http://127.0.0.1:5174/", { waitUntil: "networkidle0" });
  await page.waitForFunction(() => document.body.innerText.includes("Tea family"));
  const title = await page.$eval(".topbar h1", (el) => el.textContent);
  assert.match(title ?? "", /Brew, taste/);
  await shot("01-brew-home.png");

  await page.select("select", "oolong");
  await page.waitForSelector('[data-guidance="oolong__gongfu"]');
  await page.click('[data-guidance="oolong__gongfu"]');
  await page.waitForFunction(() => document.body.innerText.includes("Gongfu brewing"));
  await page.click("button.btn");
  await page.waitForSelector('[data-testid="timer-readout"]');
  await shot("02-oolong-gongfu-timer.png");

  await page.click("button.btn");
  await page.waitForFunction(() => document.querySelector("[data-timer-status]")?.getAttribute("data-timer-status") === "running");
  await page.waitForFunction(() => document.body.innerText.includes("Pause"));
  await page.evaluate(() => {
    const buttons = [...document.querySelectorAll("button")];
    buttons.find((button) => button.textContent === "Pause")?.click();
  });
  await page.waitForFunction(() => document.body.innerText.includes("Resume"));
  await shot("03-timer-paused.png");

  await page.reload({ waitUntil: "networkidle0" });
  await page.waitForSelector('[data-testid="timer-readout"]');
  const recovered = await page.evaluate(() => document.body.innerText);
  assert.match(recovered, /Session recovered after relaunch|Timer restored from saved wall-clock state|paused|Resume/);
  await shot("04-relaunch-recovery.png");

  await page.evaluate(() => {
    [...document.querySelectorAll("button")].find((button) => button.textContent === "Log tasting from this session")?.click();
  });
  await page.waitForSelector('[data-testid="entry-family"]');
  const familyValue = await page.$eval('[data-testid="entry-family"]', (el) => el.value);
  assert.equal(familyValue, "oolong");
  await page.evaluate(() => {
    const name = document.querySelector("input");
    if (name) {
      name.focus();
      name.value = "";
    }
  });
  const nameInput = await page.$("label:first-of-type input, label input");
  await nameInput.click({ clickCount: 3 });
  await nameInput.type("Rock oolong Saturday");
  const tasteBox = (await page.$$("textarea"))[1];
  await tasteBox.type("roast, stone fruit — personal note");
  await page.evaluate(() => {
    [...document.querySelectorAll("button")].find((button) => button.textContent === "Save tasting")?.click();
  });
  await page.waitForFunction(() => document.body.innerText.includes("Rock oolong Saturday"));
  await shot("05-journal-list.png");

  await page.type('input[placeholder="oolong, roast, sencha…"]', "stone fruit");
  await page.waitForFunction(() => document.body.innerText.includes("Rock oolong Saturday"));
  await shot("06-journal-search.png");

  await page.evaluate(() => {
    [...document.querySelectorAll(".chips button")].find((button) => button.textContent === "Green tea")?.click();
  });
  await page.waitForSelector('[data-testid="journal-no-matches"]');
  await page.evaluate(() => {
    [...document.querySelectorAll(".chips button")].find((button) => button.textContent === "All")?.click();
  });
  await page.waitForFunction(() => document.body.innerText.includes("Rock oolong Saturday"));

  await page.evaluate(() => {
    [...document.querySelectorAll(".bottom-nav button")].find((button) => button.textContent === "Data")?.click();
  });
  await page.waitForFunction(() => document.body.innerText.includes("Export my journal"));
  const noticeToggle = await page.$('[data-testid="notice-enabled"]');
  assert.ok(noticeToggle);
  const noticeOn = await page.$eval('[data-testid="notice-enabled"]', (el) => el.checked);
  assert.equal(noticeOn, true);
  await page.waitForFunction(() => document.body.innerText.includes("Yellow tea · Grandpa style"));
  const fixture = join(root, "fixtures/sample-journal.v1.json");
  const fileInput = await page.$('input[type="file"]');
  await fileInput.uploadFile(fixture);
  await page.waitForFunction(() => document.body.innerText.includes("This file is a fixture"));
  await shot("07-import-preview.png");
  await page.evaluate(() => {
    [...document.querySelectorAll("button")].find((button) => button.textContent === "Merge")?.click();
  });
  await page.waitForFunction(() => document.body.innerText.includes("Merged import"));
  await page.evaluate(() => {
    [...document.querySelectorAll(".bottom-nav button")].find((button) => button.textContent === "Journal")?.click();
  });
  const search = await page.$('input[placeholder="oolong, roast, sencha…"]');
  await search.click({ clickCount: 3 });
  await search.type("Fixture oolong");
  await page.waitForFunction(() => document.body.innerText.includes("Fixture oolong"));
  await shot("08-fixture-imported.png");

  const emptyCheck = await page.evaluate(() => localStorage.getItem("being-tea-co.mobile.v1"));
  assert.ok(emptyCheck && emptyCheck.includes("Rock oolong Saturday"));
  assert.ok(emptyCheck.includes("Fixture oolong"));

  writeFileSync(
    join(shots, "smoke-log.txt"),
    [
      "Mobile web smoke passed at 390x844.",
      "Flows: brew oolong gongfu, start/pause timer, reload recovery, journal edit/search/family-filter, entry family select, notice toggle, fixture import merge.",
      "No operating-system alarm was invoked.",
      "Founder phone prototypes were not used.",
    ].join("\n"),
  );
  console.log("SMOKE_OK");
} finally {
  await browser.close();
}
