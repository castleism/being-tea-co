# Being Tea Co. agent guide

This repository is the public Being Tea Co. project: an independent tea-culture
education site plus a local-first mobile brewing companion. GitHub is the public
source of truth. Do not treat missing local prototypes, private image banks, or
unpublished studio files as available in a cloud checkout.

## What this repo is

- `app/` — the public storefront and educational site (Next.js / Vinext).
- `app/content/library.ts` — approved tea-family and brew-method guidance with
  source references. This is the editorial source for brewing starting points.
- `app/content/blogs.ts` — approved journal essays.
- `packages/brew-core/` — shared brewing-session, timer, and tasting-journal
  logic used by the mobile companion. No React. No invented temperatures.
- `mobile/` — Capacitor companion app (web UI + optional Android project).
- `docs/mobile-roadmap.md` — mobile milestone status, next work, and blockers.
- `tests/` — storefront render and disclosure checks.

The owner-only editorial studio, unpublished social captions, and their image
bank are intentionally excluded. Do not access, copy, or publish private founder
images.

## Product rules

- Keep the existing storefront architecture and approved copy. Do not restyle or
  re-home the public site to ship mobile work.
- Use existing approved tea-family guidance and source references. Quote or
  derive timer defaults only from stated ranges. Label house timer defaults as
  house timer defaults.
- Do not invent temperature, health, caffeine, medicinal, or safety claims.
- Do not claim background alarms, lock-screen notifications, or store
  availability unless those are implemented and actually tested.
- Separate real functionality from fixtures. Never seed a user’s journal from
  sample data without an explicit import action.
- Preserve user data. If Android signing keys differ between debug builds,
  document export/import rather than pretending storage will migrate.
- Do not merge, deploy, publish to app stores, change account permissions, use
  production secrets, or start paid services unless a human explicitly asks.

## Mobile companion scope

The first mobile milestone is local-only:

1. Reusable multi-infusion brewing sessions built from approved guidance.
2. An adjustable infusion timer with pause/resume and relaunch recovery.
3. A persistent tasting journal with edit, search, and safe export/import.

Timer recovery uses persisted wall-clock state. It is not an operating-system
alarm. An in-app chime may play only while the companion is open in the
foreground.

Existing phone-test prototypes, if any, are local to the founder’s devices and
are not in this cloud checkout. Do not claim access to them.

## Verification

- Storefront: `npm test` (build + rendered HTML checks). Do not break it.
- Brew core: `npm run test:brew-core`.
- Mobile web smoke: run `mobile` with Vite and exercise brew, timer recovery,
  journal edit/search, and export/import in a mobile viewport.
- Android debug APK: follow `mobile/README.md` when the Android SDK is present.
  Record the exact commands and whether the APK was actually produced.

## Accounts and publishing

Store listing accounts may exist (Google Play personal; Apple later). That is
not permission to submit, change permissions, or use production signing
secrets. Submissions are a later human-gated milestone.
