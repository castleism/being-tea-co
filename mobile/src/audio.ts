let playedForCompletion = "";

export function playForegroundChime(completionKey: string) {
  if (typeof document === "undefined" || document.hidden) return;
  if (playedForCompletion === completionKey) return;
  playedForCompletion = completionKey;
  const AudioContextCtor = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextCtor) return;
  const context = new AudioContextCtor();
  const now = context.currentTime;
  const notes = [523.25, 659.25, 783.99];
  for (const [index, frequency] of notes.entries()) {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.02 + index * 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28 + index * 0.12);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now + index * 0.12);
    oscillator.stop(now + 0.32 + index * 0.12);
  }
  window.setTimeout(() => {
    void context.close();
  }, 900);
}

export function resetChimeGuard() {
  playedForCompletion = "";
}
