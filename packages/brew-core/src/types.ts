export type SourceRef = {
  label: string;
  url: string;
};

export type InfusionMode =
  | "single"
  | "multi"
  | "continuous"
  | "prep"
  | "long-extract"
  | "user-set";

export type StartingPoint = {
  id: string;
  familySlug: string;
  familyName: string;
  methodSlug: string;
  methodName: string;
  /** Exact family `brew` sentence(s) from `app/content/library.ts`. */
  familyBrewQuote: string;
  /** Exact method `startingPoint` sentence(s) from `app/content/library.ts`. */
  methodStartingPointQuote: string;
  /** Extra approved method caution, when the pairing needs it. */
  methodWatchQuote?: string;
  sources: SourceRef[];
  infusionMode: InfusionMode;
  /**
   * House timer defaults in seconds. These are not published scientific
   * second-counts unless the quote states a numeric range. See `timerNote`.
   */
  houseTimerSeconds: number[];
  timerNote: string;
  reusable: boolean;
  allowsTemperatureDisplay: boolean;
};

export type InfusionPlan = {
  index: number;
  label: string;
  durationSeconds: number;
};

export type SessionOrigin = "approved-guidance" | "user";

export type BrewSessionTemplate = {
  id: string;
  name: string;
  origin: SessionOrigin;
  guidanceId: string;
  familySlug: string;
  methodSlug: string;
  infusions: InfusionPlan[];
  notes: string;
  createdAt: string;
  updatedAt: string;
};

export type TimerStatus = "idle" | "running" | "paused" | "completed";

export type TimerSnapshot = {
  status: TimerStatus;
  durationMs: number;
  /**
   * Remaining milliseconds at `anchorAtMs`. When status is `running`,
   * remaining at wall-clock `now` is `remainingMs - (now - anchorAtMs)`.
   */
  remainingMs: number;
  anchorAtMs: number | null;
  sessionId: string | null;
  infusionIndex: number;
  updatedAtMs: number;
  completedAtMs: number | null;
};

export type ActiveBrewSession = {
  id: string;
  templateId: string;
  name: string;
  guidanceId: string;
  familySlug: string;
  methodSlug: string;
  infusions: InfusionPlan[];
  currentInfusionIndex: number;
  completedInfusionSeconds: number[];
  timer: TimerSnapshot;
  startedAt: string;
  updatedAt: string;
  recoveredOnOpen?: boolean;
  completedWhileAway?: boolean;
};

export type TastingEntry = {
  id: string;
  createdAt: string;
  updatedAt: string;
  teaName: string;
  familySlug: string;
  methodSlug: string;
  sessionId: string | null;
  guidanceId: string | null;
  leafAmount: string;
  waterAmount: string;
  /** Drinker-recorded observation, not a Being Tea Co. temperature claim. */
  temperatureObserved: string;
  infusionTimesSeconds: number[];
  aroma: string;
  taste: string;
  texture: string;
  finish: string;
  notes: string;
  wouldBrewAgain: boolean | null;
};

export type ExportBundle = {
  schema: typeof JOURNAL_SCHEMA;
  exportedAt: string;
  app: "being-tea-co-mobile";
  fixture: boolean;
  entries: TastingEntry[];
  sessions: BrewSessionTemplate[];
};

export const JOURNAL_SCHEMA = "being-tea-co.tasting-journal.v1" as const;

export type BrewState = {
  version: 1;
  activeSession: ActiveBrewSession | null;
  templates: BrewSessionTemplate[];
  entries: TastingEntry[];
};

export type ImportPreview = {
  schema: string;
  fixture: boolean;
  entryCount: number;
  sessionCount: number;
  newEntryIds: string[];
  collidingEntryIds: string[];
  newSessionIds: string[];
  collidingSessionIds: string[];
  warnings: string[];
};

export type ImportMode = "merge" | "replace";
