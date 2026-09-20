# Mobile roadmap

Status date: 20 September 2026  
Checkout: public `being-tea-co` cloud workspace. Local phone-test prototypes
were **not** present and were not accessed.

## Milestone 1 — Brewing sessions, timer, journal

| Capability | Status | Evidence |
| --- | --- | --- |
| Reusable multi-infusion sessions from approved tea-family guidance | **Verified** | `npm run test:brew-core`; Brew screen uses `app/content/library.ts` quotes and source URLs |
| Adjustable timer, pause/resume, relaunch recovery | **Verified** | Unit tests plus Chrome 390×844 smoke: start, pause, resume, +15s, reload recovery banner |
| Persistent tasting journal with edit/search | **Verified** | Unit tests plus smoke: create/edit “Rock oolong Saturday”, search “stone” / “stone fruit” |
| Safe export/import | **Verified** | Hostile JSON rejected in tests; fixture merge preview labeled as sample; journal starts empty |
| Storefront preserved | **Verified** | No `app/` page or editorial content edits |
| Android debug APK | **Verified in this environment** | `./gradlew assembleDebug` succeeded. Package `co.beingtea.companion`, version 1.0, target SDK 35, 4.1 MB debug APK. Sideload only; not store-signed |

### Honest limits of milestone 1

- No background / lock-screen alarm has been implemented or device-tested. The
  APK requests `INTERNET` and `VIBRATE` only. Recovery is wall-clock
  persistence plus an in-app chime while the UI is open.
- The APK was assembled, inspected with `aapt dump badging`, and not installed
  on a physical phone in this checkout.
- No iOS project, signing, or TestFlight build.
- No Play or App Store submission. Store accounts may exist (Google personal);
  submissions stay later and human-gated.
- No access to founder phone prototypes or private image banks.

## Next milestones

1. **On-device APK install** — sideload the debug APK on a founder phone, export
   any existing local prototype notes first, then confirm timer recovery and
   journal import. Do not overwrite a differently signed install’s data.
2. **Device-lab timer notifications** — implement and test an Android
   foreground service or exact alarm only after a physical or emulator device
   run. Do not market this until that test exists.
3. **iOS debug companion** — add an iOS Capacitor target when Xcode is
   available. Keep the same brew-core store and export format.
4. **Play internal testing** — draft store listing, privacy text for on-device
   journal data, and a human-owned upload. No agent-initiated submit.
5. **Optional account sync** — only after a privacy-policy update and an
   explicit product decision. Local export remains the backup path.
6. **Editorial session packs** — additional pairings only when
   `app/content/library.ts` gains approved text.

## Blockers

- Founder-device prototypes and private images are not in this cloud checkout.
- iOS tooling is not available on this Linux workspace.
- Production keystores and store API tokens must stay out of the repo.
- Different debug signing keys prevent silent journal migration; export/import
  is the supported path.
- Physical-phone install and Play internal testing need a human with the
  device and store accounts.

## Verification log

| Check | Result |
| --- | --- |
| `npm run test:brew-core` | **Passed** — 18 tests (guidance quotes, timer recovery, sessions, journal, fixture, hostile import) |
| Mobile web smoke (brew → timer pause/resume → recover → journal edit/search → export/import) | **Passed** — `node mobile/tests/smoke.mjs` against `http://127.0.0.1:5174` at 390×844; screenshots in the draft PR |
| Manual browser pass | **Passed** — same flows in a mobile viewport, including recovery banner and fixture/export honesty |
| Storefront `npm test` | **Skipped** — no `app/` source changes; storefront architecture left in place |
| `mobile` production build | **Passed** — `npm run build` in `mobile/` |
| Android `assembleDebug` APK | **Passed** — `mobile/android/app/build/outputs/apk/debug/app-debug.apk` (copied for the PR as `being-tea-co-companion-debug.apk`) |
