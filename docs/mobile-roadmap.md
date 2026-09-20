# Mobile roadmap

Status date: 20 September 2026  
Checkout: public `being-tea-co` cloud workspace. Local phone-test prototypes
were **not** present and were not accessed.

## Milestone 1 — Brewing sessions, timer, journal

Target for this branch:

| Capability | Status | Evidence |
| --- | --- | --- |
| Reusable multi-infusion sessions from approved tea-family guidance | Implemented in `packages/brew-core` + Brew screen | `npm run test:brew-core`; mobile web smoke |
| Adjustable timer, pause/resume, relaunch recovery | Implemented; recovery is wall-clock persistence, not an OS alarm | Unit tests for pause/resume/relaunch; mobile web smoke |
| Persistent tasting journal with edit/search | Implemented; starts empty | Unit tests; mobile web smoke |
| Safe export/import | Schema allowlist, unsafe-key rejection, merge/replace, fixture labeled separately | Unit tests; fixture file `mobile/fixtures/sample-journal.v1.json` |
| Storefront preserved | No `app/` page or content edits in this milestone | Diff review |
| Android debug APK | Attempted when SDK tooling can be installed in this environment | See “Verification log” below |

### Honest limits of milestone 1

- No background / lock-screen alarm has been implemented or device-tested.
- No iOS project, signing, or TestFlight build.
- No Play or App Store submission. Store accounts may exist (Google personal);
  submissions stay later and human-gated.
- No access to founder phone prototypes or private image banks.

## Next milestones

1. **Device-lab timer notifications** — implement and test an Android
   foreground service or exact alarm only after a physical or emulator device
   run. Do not market this until that test exists.
2. **iOS debug companion** — add an iOS Capacitor target when Xcode is
   available. Keep the same brew-core store and export format.
3. **Play internal testing** — draft store listing, privacy text for on-device
   journal data, and a human-owned upload. No agent-initiated submit.
4. **Optional account sync** — only after a privacy-policy update and an
   explicit product decision. Local export remains the backup path.
5. **Editorial session packs** — additional pairings only when
   `app/content/library.ts` gains approved text.

## Blockers

- Cloud checkouts do not include founder-device prototypes or private images.
- Default cloud images may lack the Android SDK; APK production then requires
  installing command-line tools in-session or a human local build.
- iOS tooling is not available on this Linux workspace.
- Production keystores and store API tokens must stay out of the repo.
- Different debug signing keys prevent silent journal migration; export/import
  is the supported path.

## Verification log

Filled in as this branch is tested. Do not mark a row verified without the
named command or browser pass.

| Check | Result |
| --- | --- |
| `npm run test:brew-core` | Pending in this revision |
| Mobile web smoke (brew → timer pause/resume → recover → journal edit/search → export/import) | Pending |
| Storefront `npm test` | Pending; run only if storefront files change or as a regression check |
| `mobile` production build | Pending |
| Android `assembleDebug` APK | Pending |
