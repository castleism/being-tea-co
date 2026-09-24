import { Capacitor } from "@capacitor/core";
import { Haptics, NotificationType } from "@capacitor/haptics";
import { LocalNotifications } from "@capacitor/local-notifications";
import { KeepAwake } from "@capacitor-community/keep-awake";
import { completionNotice, type TimerSnapshot } from "@brew-core";

import { createNoticeSync } from "../../packages/brew-core/src/noticeSync.ts";

const syncNotice = createNoticeSync({
  async cancelPending() {
    // This app schedules only infusion notices. Include every pending ID,
    // including long sessions and notices left by a previous app process.
    const { notifications } = await LocalNotifications.getPending();
    if (notifications.length) await LocalNotifications.cancel({ notifications });
  },
  async permitted() {
    return (await LocalNotifications.requestPermissions()).display === "granted";
  },
  async schedule(notice) {
    await LocalNotifications.schedule({ notifications: [{
      id: notice.id, title: notice.title, body: notice.body,
      schedule: { at: new Date(notice.fireAtMs) },
    }] });
  },
});

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
  if (!Capacitor.isNativePlatform()) return;
  await syncNotice(snapshot ? completionNotice(snapshot, Date.now(), extras) : null);
}
