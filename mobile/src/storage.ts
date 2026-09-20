import { Capacitor } from "@capacitor/core";
import { Preferences } from "@capacitor/preferences";
import { STORAGE_KEY, type Persistence } from "@brew-core";

export function createWebPersistence(): Persistence {
  return {
    load() {
      try {
        return window.localStorage.getItem(STORAGE_KEY);
      } catch {
        return null;
      }
    },
    save(value: string) {
      try {
        window.localStorage.setItem(STORAGE_KEY, value);
      } catch {
        // Private-mode or quota failures must not crash a brewing session.
      }
    },
  };
}

export async function createAppPersistence(): Promise<Persistence> {
  const web = createWebPersistence();
  if (!Capacitor.isNativePlatform()) return web;

  let cached = web.load();
  try {
    const stored = await Preferences.get({ key: STORAGE_KEY });
    if (stored.value) {
      cached = stored.value;
    } else if (cached) {
      await Preferences.set({ key: STORAGE_KEY, value: cached });
    }
  } catch {
    return web;
  }

  return {
    load() {
      return cached;
    },
    save(value: string) {
      cached = value;
      web.save(value);
      void Preferences.set({ key: STORAGE_KEY, value }).catch(() => {
        // Preferences failures must not stop the in-memory session.
      });
    },
  };
}
