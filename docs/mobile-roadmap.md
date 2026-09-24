# Mobile roadmap

Status date: 24 September 2026  
Checkout: public `being-tea-co` cloud workspace. Local phone-test prototypes
were **not** present and were not accessed.

## What Cursor can still not do

These remain human-gated. They are not unfinished coding tasks in this repo:

- Sideload on a founder phone and confirm a differently signed prototype
  journal via export/import
- Observe a local infusion notice after process death, Doze, or a physical
  device lock-screen
- Compile or run the iOS target (no Xcode / CocoaPods here)
- Publish a public privacy URL, create a Play internal track, or upload an AAB
- Start account sync or any paid service
- Add pairings that are not already supported by `app/content/library.ts`

An Android emulator was started in an earlier session of this environment.
QEMU came up, but `adb` stayed **offline**, so the APK was not installed on a
running guest. This continuation also has no Android SDK / `adb` on PATH
unless those tools are reinstalled. That is an environment limit, not missing
app code.

## Milestone 1 — Brewing sessions, timer, journal

| Capability | Status | Evidence |
| --- | --- | --- |
| Reusable multi-infusion sessions from approved tea-family guidance | **Verified** | `npm run test:brew-core` |
| Adjustable timer, pause/resume, relaunch recovery | **Verified** | Unit tests + Chrome 390×844 smoke |
| Persistent tasting journal with edit/search | **Verified** | Unit tests + smoke |
| Safe export/import | **Verified** | Hostile JSON rejected; fixture labeled |
| Storefront preserved | **Verified** | No `app/` page rewrites |
| Android debug APK | **Verified** | `assembleDebug`; `co.beingtea.companion` |

## Milestone 2 — Everything else this environment can finish

| Capability | Status | Evidence |
| --- | --- | --- |
| Additional pairings justified by existing library text | **Verified** | Green/black/white/yellow flash-chill; dark-tea gongfu; white/green/yellow/oolong leaves-in-a-bowl; yellow/oolong grandpa; quote tests still pass |
| Native Preferences persistence + localStorage fallback | **Implemented** | `mobile/src/storage.ts` |
| Native share/export and CSV | **Verified** | `entriesToCsv` unit test; Data screen share/CSV |
| Journal family filter + user-session editor | **Verified** | Unit tests + UI; empty vs no-match copy |
| Entry family/method selectors | **Verified** | Smoke asserts oolong after logging a session |
| Keep-awake while a timer is running | **Implemented, not device-observed** | `@capacitor-community/keep-awake`; APK includes `WAKE_LOCK` |
| Local infusion notice (optional permission) | **Implemented, not device-observed** | Android 8+ channel `being-tea-infusion`; `createChannel` + `channelId`; status-bar icon `ic_stat_tea`; in-app toggle; schedule/cancel logic unit-tested. UI says this is not a guaranteed alarm |
| Foreground haptic on completion | **Implemented, not device-observed** | Capacitor Haptics; silent on web |
| Android back button | **Implemented, not device-observed** | Capacitor `backButton` |
| In-app about/privacy | **Verified** | Data tab; `docs/mobile-privacy.md` |
| iOS Xcode project | **Added, not compiled** | `npx cap add ios`; `ITSAppUsesNonExemptEncryption` = false; no `xcodebuild` here |
| Play internal testing draft | **Draft only** | `docs/play-internal-testing-draft.md` — no upload |
| Emulator sideload | **Blocked** | Earlier session: emulator process started; adb remained offline. This session: SDK/`adb` not on PATH |

### Honest limits

- Local notices and keep-awake are real native wiring, not store-claimed
  background alarms. They have not been watched on a booted Android guest or
  phone. Creating a notification channel does not prove lock-screen delivery.
- The APK was assembled and inspected with `aapt` (`INTERNET`, `VIBRATE`,
  `WAKE_LOCK`, `POST_NOTIFICATIONS`, `RECEIVE_BOOT_COMPLETED`). It was not
  installed on a running Android OS in this checkout.
- iOS needs a Mac, CocoaPods, and Xcode.
- Store accounts exist (Google personal). Submissions stay human-gated.

## Next human milestones

1. Sideload the debug APK. Export any older prototype journal first.
2. Grant notification permission and time one infusion with the app
   backgrounded, then after a force-stop. Only then decide whether to
   market a notice.
3. Open `mobile/ios` in Xcode and produce a debug build.
4. Publish a companion privacy URL and, if desired, a Play internal track.
5. New session packs only when `app/content/library.ts` gains approved text.

## Verification log

| Check | Result |
| --- | --- |
| `npm run test:brew-core` | **Passed** — 24 tests (24 Sep 2026 continuation; confirm after this revision) |
| Mobile web smoke | **Pending this revision** — family filter, entry selects, notice toggle |
| `mobile` production build | **Pending this revision** |
| Android `assembleDebug` | **Pending this revision** if SDK is present |
| iOS `xcodebuild` | **Not available** |
| Emulator `adb install` | **Failed / unavailable** |
| Storefront `npm test` | **Skipped** — no `app/` source changes |
