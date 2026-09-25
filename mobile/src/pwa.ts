import { Capacitor } from "@capacitor/core";

/** Register the web preview service worker. Native builds skip this. */
export function registerCompanionPwa() {
  if (Capacitor.isNativePlatform()) return;
  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    void navigator.serviceWorker.register("/sw.js").catch(() => {
      // Preview still works without a service worker.
    });
  });
}
