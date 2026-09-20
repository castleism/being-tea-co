# Being Tea Co. mobile companion

Local-first brewing sessions, an adjustable infusion timer, and a tasting
journal. Starting points are copied from `app/content/library.ts`. This
directory does not replace the public storefront.

Phone-test prototypes on founder devices are **not** in this cloud checkout.

## What is implemented

- Reusable multi-infusion sessions from approved tea-family / method pairings.
- Adjustable timer with pause, resume, ±15 seconds, custom duration, and
  relaunch recovery from persisted wall-clock state.
- Persistent tasting journal with edit, search, delete, and safe JSON
  export/import (schema allowlist, key rejection, merge or replace).
- An in-app foreground chime only. **No operating-system alarm is scheduled.**
- A labeled fixture file for import testing. The journal starts empty.

## Web preview (smoke and daily use)

```bash
cd mobile
npm install
npm run dev
```

Open `http://127.0.0.1:5174`. Production-like preview:

```bash
npm run build
npm run preview
```

## Android debug APK

The committed `android/` project is a Capacitor shell around `mobile/dist`.
It is a **debug** artifact for sideload testing. Store submission is out of
scope.

Requirements:

- Node.js 22.13+
- JDK 17 or 21
- Android SDK platform 35, build-tools, and platform-tools
- `ANDROID_HOME` or `ANDROID_SDK_ROOT` pointing at the SDK

```bash
cd mobile
npm install
npm run android:apk
```

The debug APK is written to:

`mobile/android/app/build/outputs/apk/debug/app-debug.apk`

If the SDK is missing, the web build still verifies the same logic. Do not
claim an APK exists unless that file was actually produced.

### Signing and user data

Debug APKs use the local debug keystore. A differently signed build is a
different Android app and will not see the previous local journal. Export
from the old install, then import into the new one. Side-by-side install is
possible only if application ids differ; this project keeps
`co.beingtea.companion`.

## Tests

From the repository root:

```bash
npm run test:brew-core
```

That suite checks approved-quote integrity, timer recovery, reusable
sessions, journal search/edit, and hostile import rejection.

## What this is not

- Not a store listing, TestFlight build, or Play upload.
- Not a background alarm or lock-screen notification product.
- Not a source of invented temperatures or health claims.
- Not a host for private founder images.
