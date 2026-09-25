import { remainingMsAt } from "./timer.ts";
import type { TimerSnapshot } from "./types.ts";

export const NOTICE_CHANNEL = {
  id: "being-tea-infusion",
  name: "Infusion timer",
  description:
    "Optional notice when an infusion finishes. Not a guaranteed alarm after the system stops the app.",
} as const;

export const NOTICE_CHANNEL_ID = NOTICE_CHANNEL.id;

/** Reserved local-notice ids for the current session’s infusion slots. */
export const NOTICE_IDS = [7100, 7101, 7102, 7103, 7104, 7105, 7106, 7107, 7108, 7109] as const;

export type CompletionNotice = {
  id: number;
  fireAtMs: number;
  title: string;
  body: string;
  channelId: typeof NOTICE_CHANNEL_ID;
};

/**
 * Local notice for an infusion that is currently running.
 * This is a scheduled OS notification request, not a guaranteed alarm after
 * process death, Doze, or a force-stop.
 */
export function completionNotice(
  snapshot: TimerSnapshot,
  now: number,
  extras: { infusionLabel?: string; sessionName?: string } = {},
): CompletionNotice | null {
  if (snapshot.status !== "running" || snapshot.anchorAtMs == null) return null;
  const remaining = remainingMsAt(snapshot, now);
  if (remaining <= 0) return null;
  const label = extras.infusionLabel ?? `Infusion ${snapshot.infusionIndex + 1}`;
  return {
    id: NOTICE_IDS[Math.min(snapshot.infusionIndex, NOTICE_IDS.length - 1)] ?? NOTICE_IDS[0],
    fireAtMs: now + remaining,
    title: extras.sessionName ? `${extras.sessionName}` : "Infusion ready",
    body: `${label} has finished. Open Being Tea Co. to continue. This notice is not a guaranteed background alarm.`,
    channelId: NOTICE_CHANNEL_ID,
  };
}
