import { Capacitor } from "@capacitor/core";
import { Haptics, NotificationType } from "@capacitor/haptics";
import { LocalNotifications } from "@capacitor/local-notifications";
import { KeepAwake } from "@capacitor-community/keep-awake";
import { completionNotice, type TimerSnapshot } from "@brew-core";

let lastNoticeKey = "";

export async function syncKeepAwake(running: boolean) {
  if (!Capacitor.isNativePlatform()) return;
  try {
    if (running) await KeepAwake.keepAwake();
    else await KeepAwake.allowSleep();
  } catch {
    // Keep-awake is best-effort while a timer is in the foreground.
  }
}

export async function pulseCompletion() {
  if (!Capacitor.isNativePlatform()) return;
  try {
    await Haptics.notification({ type: NotificationType.Success });
  } catch {
    // Web and some emulators have no haptic hardware.
  }
}

export async function syncInfusionNotice(
  snapshot: TimerSnapshot | undefined,
  extras: { infusionLabel?: string; sessionName?: string } = {},
) {
  if (!Capacitor.isNativePlatform() || !snapshot) return;
  const notice = completionNotice(snapshot, Date.now(), extras);
  const key = notice ? `${notice.id}:${notice.fireAtMs}` : "none";
  if (key === lastNoticeKey) return;
  lastNoticeKey = key;
  try {
    await LocalNotifications.cancel({ notifications: [{ id: 7100 }, { id: 7101 }, { id: 7102 }, { id: 7103 }, { id: 7104 }, { id: 7105 }, { id: 7106 }, { id: 7107 }, { id: 7108 }, { id: 7109 }] });
    if (!notice) return;
    const permission = await LocalNotifications.requestPermissions();
    if (permission.display !== "granted") return;
    await LocalNotifications.schedule({
      notifications: [
        {
          id: notice.id,
          title: notice.title,
          body: notice.body,
          schedule: { at: new Date(notice.fireAtMs) },
        },
      ],
    });
  } catch {
    // Permission denial or plugin absence falls back to in-app chime only.
  }
}
