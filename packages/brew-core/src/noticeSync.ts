import type { CompletionNotice } from "./notices.ts";

type NoticePort = {
  cancelPending: () => Promise<void>;
  permitted: () => Promise<boolean>;
  schedule: (notice: CompletionNotice) => Promise<void>;
};

/** Serialize native mutations so an old permission request cannot resurrect a stopped timer. */
export function createNoticeSync(port: NoticePort, now = Date.now) {
  let revision = 0;
  let applied: string | undefined;
  let queue = Promise.resolve();
  return (notice: CompletionNotice | null): Promise<void> => {
    const current = ++revision;
    const key = JSON.stringify(notice);
    queue = queue.then(async () => {
      if (current !== revision || key === applied) return;
      // Clear the success cache before mutating; failures must remain retryable.
      applied = undefined;
      await port.cancelPending();
      if (current !== revision) return;
      if (!notice) { applied = key; return; }
      if (!await port.permitted() || current !== revision) return;
      if (notice.fireAtMs <= now()) return;
      await port.schedule(notice);
      applied = key;
    }).catch(() => {
      // A later sync retries plugin failures without breaking the queue.
      applied = undefined;
    });
    return queue;
  };
}
