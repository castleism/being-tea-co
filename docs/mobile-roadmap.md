# Mobile roadmap

Status date: 25 September 2026  
Checkout: public `being-tea-co` cloud workspace. Local phone-test prototypes
were **not** present and were not accessed. No USB Android phone is attached
to this VM (`adb devices` is empty of physical serials).

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
- Plug in a founder phone with USB debugging and confirm sideload here

On 24 September 2026 the debug APK was installed on a headless API 34 AVD
(`being-tea-api34`). On 25 September 2026 a fresh AVD stayed **offline**
(QEMU up, guest idle, `adb` never reached `device`). PWAs were implemented
and served locally; they were not Chrome-installed onto a guest this session.

## Milestone 1 — Brewing sessions, timer, journal

| Capability | Status | Evidence |
| --- | --- | --- |
| Reusable multi-infusion sessions from approved tea-family guidance | **Verified** | `npm run test:brew-core` |
| Adjustable timer, pause/resume, relaunch recovery | **Verified** | Unit tests + Chrome 390×844 smoke |
| Persistent tasting journal with edit/search | **Verified** | Unit tests + smoke |
| Safe export/import | **Verified** | Hostile JSON rejected; fixture labeled |
| Storefront preserved | **Verified** | Education pages not restyled; PWA hooks only in `app/layout.tsx` |
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
| Local infusion notice (optional permission) | **Wired and partly observed** | Channel `being-tea-infusion` existed on the API 34 guest; logcat showed `createChannel`/`schedule`. Exact alarms were **not** allowed, so the plugin used an inexact alarm. A foreground 5s run emitted `localNotificationReceived`. A 20s backgrounded run still had `RTC_WAKEUP` pending after 22s. Shade/lock-screen pixels were not confirmed |
| Foreground haptic on completion | **Implemented, not device-observed** | Capacitor Haptics; silent on web |
| Android back button | **Implemented, not device-observed** | Capacitor `backButton` |
| In-app about/privacy | **Verified** | Data tab; `docs/mobile-privacy.md` |
| iOS Xcode project | **Added, not compiled** | `npx cap add ios`; `ITSAppUsesNonExemptEncryption` = false; no `xcodebuild` here |
| Play internal testing draft | **Draft only** | `docs/play-internal-testing-draft.md` — no upload |
| Emulator sideload | **Verified 24 Sep; blocked 25 Sep** | 24 Sep: `adb install` on API 34. 25 Sep: guest stayed offline |
| Storefront PWA | **Verified in this checkout** | Manifest + SW + 192/512 icons; storefront HTML tests; served at :3000 |
| Companion web PWA | **Verified in this checkout** | Manifest 200 + smoke; SW registered only off-native |

### Honest limits

- Local notices and keep-awake are real native wiring, not store-claimed
  background alarms. This environment created the Android 8+ channel and
  scheduled a `TimedNotificationPublisher` alarm. Exact alarms were denied on
  the AVD, so delivery after the app is backgrounded is **not** guaranteed and
  was not lock-screen confirmed.
- The APK was assembled, inspected with `aapt`, and installed on an API 34
  emulator. Permissions: `INTERNET`, `VIBRATE`, `WAKE_LOCK`,
  `POST_NOTIFICATIONS`, `RECEIVE_BOOT_COMPLETED`.
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
| `npm run test:brew-core` | **Passed** — 24 tests |
| Mobile web smoke | **Passed** — 25 Sep, including PWA manifest JSON |
| `mobile` production build | **Passed** |
| Android `assembleDebug` | **Passed** — 4.2 MB debug APK at `/opt/cursor/artifacts/being-tea-co-companion-debug.apk` |
| Storefront `npm test` | **Passed** — 11 tests, including installable-manifest check |
| Emulator `adb install` (25 Sep) | **Failed** — emulator-5554 stayed offline |
| USB phone `adb install` | **No device** |
| Chrome PWA add-to-home on guest | **Not performed** — no online Android guest |
| iOS `xcodebuild` | **Not available** |
