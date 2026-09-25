import { Capacitor } from "@capacitor/core";
import { Haptics, NotificationType } from "@capacitor/haptics";
import { LocalNotifications } from "@capacitor/local-notifications";
import { KeepAwake } from "@capacitor-community/keep-awake";
import {
  completionNotice,
  NOTICE_CHANNEL,
  NOTICE_IDS,
  type TimerSnapshot,
} from "@brew-core";

let lastNoticeKey = "";
let channelReady = false;

async function ensureNoticeChannel() {
  if (channelReady) return;
  await LocalNotifications.createChannel({
    id: NOTICE_CHANNEL.id,
    name: NOTICE_CHANNEL.name,
    description: NOTICE_CHANNEL.description,
    importance: 4,
    visibility: 1,
    vibration: true,
  });
  channelReady = true;
}

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
  enabled = true,
) {
  if (!Capacitor.isNativePlatform()) return;
  const notice = snapshot && enabled ? completionNotice(snapshot, Date.now(), extras) : null;
  const key = notice ? `${notice.id}:${notice.fireAtMs}:${notice.channelId}` : "none";
  if (key === lastNoticeKey) return;
  lastNoticeKey = key;
  try {
    await LocalNotifications.cancel({
      notifications: NOTICE_IDS.map((id) => ({ id })),
    });
    if (!notice) return;
    const permission = await LocalNotifications.requestPermissions();
    if (permission.display !== "granted") return;
    await ensureNoticeChannel();
    await LocalNotifications.schedule({
      notifications: [
        {
          id: notice.id,
          title: notice.title,
          body: notice.body,
          channelId: notice.channelId,
          extra: { notAGuaranteedAlarm: true },
          schedule: { at: new Date(notice.fireAtMs), allowWhileIdle: true },
        },
      ],
    });
  } catch {
    // Permission denial or plugin absence falls back to in-app chime only.
  }
}
