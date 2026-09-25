# Progressive Web Apps

Status: implemented in this repository. A public HTTPS deploy is still a
human publishing step. This does not restyle the storefront.

## Storefront

- Manifest: `public/manifest.webmanifest`
- Service worker: `public/sw.js` (network-first pages, cache-first images)
- Icons: `public/icons/pwa-192.png` and `pwa-512.png` from the existing seal
- Registration: inline script in `app/layout.tsx`

Chrome/Edge can install the site as a standalone window when it is served
from HTTPS or localhost. The PWA is the education site, not the brewing
journal.

## Companion web preview

- Manifest: `mobile/public/manifest.webmanifest`
- Service worker: `mobile/public/sw.js`
- Registered only when the preview is not a Capacitor native build

Use `cd mobile && npm run preview` then install from the browser. Journal
data stays in that origin’s storage. A differently signed APK will not see
it; export/import is the migration path.

## What this is not

- Not a Play or App Store listing
- Not a background alarm
- Not a substitute for sideloading `co.beingtea.companion`
