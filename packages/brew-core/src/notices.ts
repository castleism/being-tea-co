import { remainingMsAt } from "./timer.ts";
import type { TimerSnapshot } from "./types.ts";

export const NOTICE_CHANNEL_ID = "being-tea-infusion";

export type CompletionNotice = {
  id: number;
  fireAtMs: number;
  title: string;
  body: string;
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
    id: 7100 + snapshot.infusionIndex,
    fireAtMs: now + remaining,
    title: extras.sessionName ? `${extras.sessionName}` : "Infusion ready",
    body: `${label} has finished. Open Being Tea Co. to continue. This notice is not a guaranteed background alarm.`,
  };
}
