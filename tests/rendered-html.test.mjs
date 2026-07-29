import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function render(pathname) {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function htmlFor(pathname) {
  const response = await render(pathname);
  assert.equal(response.status, 200, pathname);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

async function textFor(pathname, contentType) {
  const response = await render(pathname);
  assert.equal(response.status, 200, pathname);
  assert.match(response.headers.get("content-type") ?? "", contentType);
  return response.text();
}

test("server-renders the finished Being Tea Co. home page", async () => {
  const html = await htmlFor("/");
  assert.match(html, /Being Tea Co\./);
  assert.match(html, /From leaf to/);
  assert.match(html, /golden light/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("tea and brew library buttons each reference a unique image", async () => {
  const [learn, brew] = await Promise.all([htmlFor("/learn"), htmlFor("/brew")]);

  const teaImages = new Set(
    [...learn.matchAll(/\/images\/tea\/([a-z-]+)\.webp/g)].map(
      (match) => match[1],
    ),
  );
  const brewImages = new Set(
    [...brew.matchAll(/\/images\/brew\/([a-z-]+)\.webp/g)].map(
      (match) => match[1],
    ),
  );

  assert.equal(teaImages.size, 9);
  assert.equal(brewImages.size, 9);
});

test("journal index references twelve distinct article headers", async () => {
  const html = await htmlFor("/journal");
  const images = new Set(
    [...html.matchAll(/\/images\/journal\/(b\d{2})\.webp/g)].map(
      (match) => match[1],
    ),
  );

  assert.equal(images.size, 12);
  assert.doesNotMatch(
    html,
    /golden-light-oolong\.png|leaf-processing\.png|puerh-storage\.png/,
  );
});

test("public source excludes the private editorial studio and social drafts", () => {
  for (const path of [
    "../app/studio",
    "../app/content/social.ts",
    "../public/images/social",
    "../image-manifests/social-s01-s18.md",
    "../image-manifests/social-s19-s36.md",
  ]) {
    assert.equal(existsSync(new URL(path, import.meta.url)), false, path);
  }
});

test("tea, brew, and journal detail pages use their assigned images", async () => {
  const [tea, brew, journal] = await Promise.all([
    htmlFor("/tea/oolong"),
    htmlFor("/brew/gongfu"),
    htmlFor("/journal/finding-the-golden-light"),
  ]);

  assert.match(tea, /\/images\/tea\/oolong\.webp/);
  assert.match(brew, /\/images\/brew\/gongfu\.webp/);
  assert.match(journal, /\/images\/journal\/b02\.webp/);
});

test("search metadata is unique, canonical, and structured", async () => {
  const [home, about, journal] = await Promise.all([
    htmlFor("/"),
    htmlFor("/about"),
    htmlFor("/journal/finding-the-golden-light"),
  ]);

  assert.match(
    about,
    /<title>About Being Tea Co\. \| Being Tea Co\.<\/title>/,
  );
  assert.match(
    about,
    /<link rel="canonical" href="https:\/\/being-tea-co\.chriscodyak\.chatgpt\.site\/about"/,
  );
  assert.match(
    about,
    /<meta name="description" content="The story and purpose of Being Tea Co\./,
  );
  assert.match(home, /"@type":"Organization"/);
  assert.match(home, /"@type":"WebSite"/);
  assert.match(journal, /"@type":"BlogPosting"/);
  assert.match(journal, /"@type":"BreadcrumbList"/);
});

test("trust pages use five distinct page images", async () => {
  const pages = await Promise.all(
    ["about", "contact", "privacy", "terms", "disclosures"].map((path) =>
      htmlFor(`/${path}`),
    ),
  );
  const images = new Set(
    pages.flatMap((html) =>
      [...html.matchAll(/\/images\/pages\/([a-z-]+)\.webp/g)].map(
        (match) => match[1],
      ),
    ),
  );

  assert.equal(images.size, 5);
  assert.deepEqual(
    [...images].sort(),
    ["about", "contact", "disclosures", "privacy", "terms"],
  );
});

test("shop distinguishes researched candidates from active paid links", async () => {
  const html = await htmlFor("/shop");

  for (const name of [
    "TeaVivre",
    "Palais des Thés USA",
    "Art of Tea",
    "Bookshop.org",
    "The Tea Spot",
    "Teabloom",
    "Printful Quick Stores",
    "Spreadshop",
    "Zazzle Creator Store",
  ]) {
    assert.match(html, new RegExp(name.replace(/[.]/g, "\\.")));
  }

  assert.match(html, /No paid product links are active today/);
  assert.match(html, /Awin.*?\$5 refundable verification/s);
  assert.match(html, /Fourthwall.*?on hold/s);
  assert.doesNotMatch(html, /rel="sponsored"/);
});

test("sitemap lists every public route and robots excludes the studio", async () => {
  const [xml, robots] = await Promise.all([
    textFor("/sitemap.xml", /^application\/xml\b/i),
    textFor("/robots.txt", /^text\/plain\b/i),
  ]);
  const urls = [
    ...xml.matchAll(
      /<loc>https:\/\/being-tea-co\.chriscodyak\.chatgpt\.site([^<]*)<\/loc>/g,
    ),
  ].map((match) => match[1] || "/");

  assert.equal(urls.length, 41);
  assert.equal(new Set(urls).size, 41);
  assert.ok(!urls.includes("/studio"));
  assert.match(robots, /Disallow: \/studio/);
  assert.match(
    robots,
    /Sitemap: https:\/\/being-tea-co\.chriscodyak\.chatgpt\.site\/sitemap\.xml/,
  );

  const responses = await Promise.all(urls.map((path) => render(path)));
  responses.forEach((response, index) => {
    assert.equal(response.status, 200, urls[index]);
  });
});
