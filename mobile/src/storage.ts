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
