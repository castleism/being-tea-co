import type { SourceRef, StartingPoint } from "./types.ts";

const ISO: SourceRef = {
  label: "ISO tea classification",
  url: "https://www.iso.org/standard/75419.html",
};
const PROCESSED_TEA: SourceRef = {
  label: "Processed-tea review",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8605308/",
};
const MAFF_BREW: SourceRef = {
  label: "Japan MAFF brewing guide",
  url: "https://www.maff.go.jp/j/seisan/tokusan/cha/attach/pdf/ocha-5.pdf",
};
const YELLOW_PROCESS: SourceRef = {
  label: "Green and yellow tea processing study",
  url: "https://pubmed.ncbi.nlm.nih.gov/38665631/",
};
const OOLONG_BRUISE: SourceRef = {
  label: "Oolong bruising study",
  url: "https://pubmed.ncbi.nlm.nih.gov/33196171/",
};
const TAIWAN_BREW: SourceRef = {
  label: "Taiwan tea brewing methods",
  url: "https://www.tbrs.gov.tw/en/ws.php?id=1003&print=Y",
};
const TEA_USA: SourceRef = {
  label: "Tea Association of the USA fact sheet",
  url: "https://teausa.org/teausa/images/Tea_Association_Fact_Sheet_2024.pdf",
};
const TEA_CANADA_TYPES: SourceRef = {
  label: "Tea and Herbal Association of Canada",
  url: "https://www.tea.ca/learn/tea/tea-types/",
};
const TEA_CANADA_BREW: SourceRef = {
  label: "Tea and Herbal Association of Canada",
  url: "https://www.tea.ca/learn/how-to-brew/",
};
const DARK_MICROBE: SourceRef = {
  label: "Dark-tea microbial review",
  url: "https://pubmed.ncbi.nlm.nih.gov/31896450/",
};
const DARK_SAFETY: SourceRef = {
  label: "Dark-tea safety review",
  url: "https://pubmed.ncbi.nlm.nih.gov/36910180/",
};
const PUERH_GI: SourceRef = {
  label: "China–EU Pu-erh GI explainer",
  url: "https://eu.china-mission.gov.cn/eng/zgggfz/cega/202210/t20221028_10793522.htm",
};
const TEA_STORAGE: SourceRef = {
  label: "Tea storage review",
  url: "https://www.sciencedirect.com/science/article/pii/S092422442300287X",
};
const PUERH_PROCESS: SourceRef = {
  label: "Pu-erh processing review",
  url: "https://www.sciencedirect.com/science/article/abs/pii/S0963996913001488",
};
const NCCIH: SourceRef = {
  label: "NCCIH herb–medicine interactions",
  url: "https://www.nccih.nih.gov/health/tips/tips-how-herbs-can-interact-with-medicines",
};
const MAFF_COLD: SourceRef = {
  label: "Japan MAFF cold-tea guide",
  url: "https://www.maff.go.jp/j/pr/aff/1704/spe1_04.html",
};
const UJI_MATCHA: SourceRef = {
  label: "Kyoto Uji tea preparation",
  url: "https://ujicha.or.jp/en/knowledge/howto/",
};
const CHAI_RECIPE: SourceRef = {
  label: "Indian High Commission cultural recipe",
  url: "https://hcigeorgetown.gov.in/public_files/assets/pdf/Newsletter_Georgetown_05_09_2025.pdf",
};
const LIVING_TEA: SourceRef = {
  label: "Living Tea bowl guide",
  url: "https://www.livingtea.net/pages/leaves-in-a-bowl-guide",
};

const BRIEF_GONGFU_NOTE =
  "House timer start for a brief, fully decanted infusion. The approved text does not publish a second-count; lengthen only as the leaf asks.";

const RANGE_LOW_NOTE =
  "House timer start uses the low end of the published starting range. Adjust to the leaf; a chart is a starting map.";

function point(partial: StartingPoint): StartingPoint {
  return partial;
}

function seconds(values: number[]): number[] {
  return values;
}

export const startingPoints: StartingPoint[] = [
  point({
    id: "white__western",
    familySlug: "white",
    familyName: "White tea",
    methodSlug: "western",
    methodName: "Western infusion",
    familyBrewQuote:
      "Start with 2.5–3.5 g per 250 mL at 80–90°C / 176–194°F for 3–5 minutes. Mature, compressed or leaf-heavy white tea may welcome hotter water.",
    methodStartingPointQuote:
      "About 2.5–3.5 g per 250 mL. Match temperature and 1.5–5 minute contact time to the tea family.",
    methodWatchQuote:
      "A brewing chart is a starting map. Particle size, roast, compression, water and taste can move every number.",
    sources: [ISO, PROCESSED_TEA, TEA_CANADA_BREW],
    infusionMode: "single",
    houseTimerSeconds: seconds([180]),
    timerNote: RANGE_LOW_NOTE,
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "white__grandpa-style",
    familySlug: "white",
    familyName: "White tea",
    methodSlug: "grandpa-style",
    methodName: "Grandpa style",
    familyBrewQuote:
      "Start with 2.5–3.5 g per 250 mL at 80–90°C / 176–194°F for 3–5 minutes. Mature, compressed or leaf-heavy white tea may welcome hotter water.",
    methodStartingPointQuote:
      "Start lightly—about 2–3 g in a 300 mL vessel—and refill before the water level falls below the leaf.",
    methodWatchQuote:
      "Avoid very small broken leaf and do not drink leaf fragments that make the experience unpleasant.",
    sources: [ISO, PROCESSED_TEA, TAIWAN_BREW],
    infusionMode: "continuous",
    houseTimerSeconds: seconds([180]),
    timerNote:
      "Grandpa style is drink-and-refill, not a single strained steep. This optional timer is only a house comfort wait; the approved method does not publish a second-count.",
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "green__western",
    familySlug: "green",
    familyName: "Green tea",
    methodSlug: "western",
    methodName: "Western infusion",
    familyBrewQuote:
      "For Chinese pan-fired green tea, start with 2–3 g per 250 mL at 75–85°C / 167–185°F for 1.5–3 minutes. Japanese styles deserve their own method and often shorter, cooler infusions.",
    methodStartingPointQuote:
      "About 2.5–3.5 g per 250 mL. Match temperature and 1.5–5 minute contact time to the tea family.",
    methodWatchQuote:
      "A brewing chart is a starting map. Particle size, roast, compression, water and taste can move every number.",
    sources: [MAFF_BREW, PROCESSED_TEA, TEA_CANADA_BREW],
    infusionMode: "single",
    houseTimerSeconds: seconds([90]),
    timerNote: `${RANGE_LOW_NOTE} This pairing uses the Chinese pan-fired range, not a Japanese recipe.`,
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "green__sencha-kyusu",
    familySlug: "green",
    familyName: "Green tea",
    methodSlug: "sencha-kyusu",
    methodName: "Sencha in a kyusu",
    familyBrewQuote:
      "For Chinese pan-fired green tea, start with 2–3 g per 250 mL at 75–85°C / 167–185°F for 1.5–3 minutes. Japanese styles deserve their own method and often shorter, cooler infusions.",
    methodStartingPointQuote:
      "A practical house start is 4–5 g per 200 mL around 70–80°C / 158–176°F for 45–90 seconds; use the producer’s style-specific guidance.",
    methodWatchQuote:
      "Fukamushi, gyokuro, bancha and hojicha need distinct handling. “Japanese green tea” is not one recipe.",
    sources: [MAFF_BREW],
    infusionMode: "multi",
    houseTimerSeconds: seconds([45, 20]),
    timerNote:
      "First infusion uses the low end of the published 45–90 second house start. The second slot is a shorter house follow-up because the method says to drain completely and shorten the second infusion; it is not a published second-count.",
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "green__matcha",
    familySlug: "green",
    familyName: "Green tea",
    methodSlug: "matcha",
    methodName: "Matcha",
    familyBrewQuote:
      "For Chinese pan-fired green tea, start with 2–3 g per 250 mL at 75–85°C / 167–185°F for 1.5–3 minutes. Japanese styles deserve their own method and often shorter, cooler infusions.",
    methodStartingPointQuote:
      "Start near 2 g matcha with roughly 60–70 mL water around 75–80°C / 167–176°F, then adjust for bowl, grade and preference.",
    methodWatchQuote:
      "Matcha is intentionally opaque. It disproves any claim that clarity or a golden twinkle is a universal test of good tea.",
    sources: [UJI_MATCHA, MAFF_BREW],
    infusionMode: "prep",
    houseTimerSeconds: seconds([]),
    timerNote:
      "Matcha is a whisked suspension, not a strained steep. No house steep timer is provided. Start a user-set timer only if you want a personal prep reminder.",
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "green__grandpa-style",
    familySlug: "green",
    familyName: "Green tea",
    methodSlug: "grandpa-style",
    methodName: "Grandpa style",
    familyBrewQuote:
      "For Chinese pan-fired green tea, start with 2–3 g per 250 mL at 75–85°C / 167–185°F for 1.5–3 minutes. Japanese styles deserve their own method and often shorter, cooler infusions.",
    methodStartingPointQuote:
      "Start lightly—about 2–3 g in a 300 mL vessel—and refill before the water level falls below the leaf.",
    sources: [MAFF_BREW, PROCESSED_TEA, TAIWAN_BREW],
    infusionMode: "continuous",
    houseTimerSeconds: seconds([90]),
    timerNote:
      "Optional house comfort wait only. Grandpa style is drink-and-refill; the approved method does not publish a second-count.",
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "green__cold-brew",
    familySlug: "green",
    familyName: "Green tea",
    methodSlug: "cold-brew",
    methodName: "Cold brew",
    familyBrewQuote:
      "For Chinese pan-fired green tea, start with 2–3 g per 250 mL at 75–85°C / 167–185°F for 1.5–3 minutes. Japanese styles deserve their own method and often shorter, cooler infusions.",
    methodStartingPointQuote:
      "For Japanese green tea, MAFF offers 10–15 g per liter refrigerated for 4–6 hours. Treat that as a style-specific beginning.",
    methodWatchQuote:
      "Cold brew is not caffeine-free. Temperature, time, tea and ratio all affect extraction.",
    sources: [MAFF_COLD, MAFF_BREW],
    infusionMode: "long-extract",
    houseTimerSeconds: seconds([4 * 60 * 60]),
    timerNote:
      "House timer start uses the 4-hour low end of the MAFF Japanese green tea refrigerated range. This is not a universal cold-brew recipe. Recovery uses saved wall-clock state while the app is closed; no operating-system notification is scheduled.",
    reusable: true,
    allowsTemperatureDisplay: false,
  }),
  point({
    id: "yellow__western",
    familySlug: "yellow",
    familyName: "Yellow tea",
    methodSlug: "western",
    methodName: "Western infusion",
    familyBrewQuote:
      "Start with 2–3 g per 250 mL at 75–85°C / 167–185°F for 2–3 minutes, then prioritize credible maker instructions.",
    methodStartingPointQuote:
      "About 2.5–3.5 g per 250 mL. Match temperature and 1.5–5 minute contact time to the tea family.",
    sources: [YELLOW_PROCESS, ISO, TEA_CANADA_BREW],
    infusionMode: "single",
    houseTimerSeconds: seconds([120]),
    timerNote: RANGE_LOW_NOTE,
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "oolong__western",
    familySlug: "oolong",
    familyName: "Oolong",
    methodSlug: "western",
    methodName: "Western infusion",
    familyBrewQuote:
      "Western start: 2.5–4 g per 250 mL at 85–100°C / 185–212°F for 2–4 minutes. Gongfu start: about 5–8 g per 100–120 mL with brief, fully decanted infusions.",
    methodStartingPointQuote:
      "About 2.5–3.5 g per 250 mL. Match temperature and 1.5–5 minute contact time to the tea family.",
    sources: [OOLONG_BRUISE, TAIWAN_BREW, TEA_CANADA_BREW],
    infusionMode: "single",
    houseTimerSeconds: seconds([120]),
    timerNote: RANGE_LOW_NOTE,
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "oolong__gongfu",
    familySlug: "oolong",
    familyName: "Oolong",
    methodSlug: "gongfu",
    methodName: "Gongfu brewing",
    familyBrewQuote:
      "Western start: 2.5–4 g per 250 mL at 85–100°C / 185–212°F for 2–4 minutes. Gongfu start: about 5–8 g per 100–120 mL with brief, fully decanted infusions.",
    methodStartingPointQuote:
      "Begin around 5–8 g per 100–120 mL with brief infusions, then adjust to density, age and the leaf’s opening pace.",
    methodWatchQuote:
      "Gongfu is a family of practices, not one universal performance. Name the cultural source and avoid claiming lineage authority.",
    sources: [OOLONG_BRUISE, TAIWAN_BREW],
    infusionMode: "multi",
    houseTimerSeconds: seconds([20, 20, 20, 25, 30, 40, 50, 60]),
    timerNote: `${BRIEF_GONGFU_NOTE} Later slots lengthen only as a reusable house sequence you can edit.`,
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "black-red__western",
    familySlug: "black-red",
    familyName: "Black tea / hongcha",
    methodSlug: "western",
    methodName: "Western infusion",
    familyBrewQuote:
      "Start with 2.5–3 g per 250 mL at 95–100°C / 203–212°F for 3–5 minutes. Broken or CTC tea usually extracts faster than large whole leaf.",
    methodStartingPointQuote:
      "About 2.5–3.5 g per 250 mL. Match temperature and 1.5–5 minute contact time to the tea family.",
    sources: [TEA_USA, TEA_CANADA_TYPES, TEA_CANADA_BREW],
    infusionMode: "single",
    houseTimerSeconds: seconds([180]),
    timerNote: RANGE_LOW_NOTE,
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "black-red__masala-chai",
    familySlug: "black-red",
    familyName: "Black tea / hongcha",
    methodSlug: "masala-chai",
    methodName: "Masala chai",
    familyBrewQuote:
      "Start with 2.5–3 g per 250 mL at 95–100°C / 203–212°F for 3–5 minutes. Broken or CTC tea usually extracts faster than large whole leaf.",
    methodStartingPointQuote:
      "Use a documented recipe as a beginning: simmer spices, add tea, then milk and sweetness according to the household style.",
    methodWatchQuote:
      "Attribute the recipe and avoid flattening Indian tea culture into a single spice mix.",
    sources: [CHAI_RECIPE, TEA_USA],
    infusionMode: "user-set",
    houseTimerSeconds: seconds([]),
    timerNote:
      "No universal Being Tea Co. simmer time or spice formula is provided. Set your own timer from the documented recipe you are using.",
    reusable: true,
    allowsTemperatureDisplay: false,
  }),
  point({
    id: "dark-heicha__western",
    familySlug: "dark-heicha",
    familyName: "Dark tea / heicha",
    methodSlug: "western",
    methodName: "Western infusion",
    familyBrewQuote:
      "Start with 3–4 g per 250 mL at 95–100°C / 203–212°F for 2–4 minutes. Compressed leaf may need time to open; pour each infusion completely.",
    methodStartingPointQuote:
      "About 2.5–3.5 g per 250 mL. Match temperature and 1.5–5 minute contact time to the tea family.",
    sources: [DARK_MICROBE, DARK_SAFETY, TEA_CANADA_BREW],
    infusionMode: "multi",
    houseTimerSeconds: seconds([120, 150]),
    timerNote: `${RANGE_LOW_NOTE} A second slot is offered because the family text says to pour each infusion completely; its length is a house start, not a published second infusion time.`,
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "puerh-sheng__gongfu",
    familySlug: "puerh-sheng",
    familyName: "Sheng Pu-erh",
    methodSlug: "gongfu",
    methodName: "Gongfu brewing",
    familyBrewQuote:
      "Use a small vessel and brief infusions as a useful starting point: about 5–7 g per 100 mL at 90–100°C / 194–212°F, adjusting to age and compression.",
    methodStartingPointQuote:
      "Begin around 5–8 g per 100–120 mL with brief infusions, then adjust to density, age and the leaf’s opening pace.",
    sources: [PUERH_GI, TEA_STORAGE, TAIWAN_BREW],
    infusionMode: "multi",
    houseTimerSeconds: seconds([20, 20, 20, 25, 30, 40, 50, 60]),
    timerNote: BRIEF_GONGFU_NOTE,
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "puerh-shou__western",
    familySlug: "puerh-shou",
    familyName: "Shou Pu-erh",
    methodSlug: "western",
    methodName: "Western infusion",
    familyBrewQuote:
      "Start near boiling. Western: 3–4 g per 250 mL for 2–4 minutes. Gongfu: 5–8 g per 100–120 mL with a quick rinse if desired for debris—not as decaffeination.",
    methodStartingPointQuote:
      "About 2.5–3.5 g per 250 mL. Match temperature and 1.5–5 minute contact time to the tea family.",
    sources: [PUERH_PROCESS, PUERH_GI, TEA_CANADA_BREW],
    infusionMode: "multi",
    houseTimerSeconds: seconds([120, 150]),
    timerNote: RANGE_LOW_NOTE,
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "puerh-shou__gongfu",
    familySlug: "puerh-shou",
    familyName: "Shou Pu-erh",
    methodSlug: "gongfu",
    methodName: "Gongfu brewing",
    familyBrewQuote:
      "Start near boiling. Western: 3–4 g per 250 mL for 2–4 minutes. Gongfu: 5–8 g per 100–120 mL with a quick rinse if desired for debris—not as decaffeination.",
    methodStartingPointQuote:
      "Begin around 5–8 g per 100–120 mL with brief infusions, then adjust to density, age and the leaf’s opening pace.",
    sources: [PUERH_PROCESS, PUERH_GI, TAIWAN_BREW],
    infusionMode: "multi",
    houseTimerSeconds: seconds([20, 20, 25, 30, 40, 50, 60, 70]),
    timerNote: BRIEF_GONGFU_NOTE,
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "tisanes__user-set",
    familySlug: "tisanes",
    familyName: "Tisanes",
    methodSlug: "western",
    methodName: "Western infusion",
    familyBrewQuote:
      "Use the supplier’s food-use directions. Delicate leaves and flowers are usually covered and infused; dense roots, bark and spices may need a short simmer. There is no safe universal recipe for every botanical.",
    methodStartingPointQuote:
      "About 2.5–3.5 g per 250 mL. Match temperature and 1.5–5 minute contact time to the tea family.",
    sources: [ISO, NCCIH],
    infusionMode: "user-set",
    houseTimerSeconds: seconds([]),
    timerNote:
      "No universal tisane recipe is offered. Set time from the supplier’s food-use directions for the exact botanical.",
    reusable: true,
    allowsTemperatureDisplay: false,
  }),
  point({
    id: "oolong__flash-chilled",
    familySlug: "oolong",
    familyName: "Oolong",
    methodSlug: "flash-chilled",
    methodName: "Flash-chilled iced tea",
    familyBrewQuote:
      "Western start: 2.5–4 g per 250 mL at 85–100°C / 185–212°F for 2–4 minutes. Gongfu start: about 5–8 g per 100–120 mL with brief, fully decanted infusions.",
    methodStartingPointQuote:
      "Use roughly double normal leaf or reduce hot water so the melting ice completes the intended final volume.",
    methodWatchQuote:
      "Ice is part of the recipe, not decoration. Weigh it or accept that each batch will dilute differently.",
    sources: [MAFF_COLD, OOLONG_BRUISE],
    infusionMode: "single",
    houseTimerSeconds: seconds([120]),
    timerNote:
      "The hot-concentrate timer uses the low end of the oolong Western range. Ice volume is part of the method and is not timed here.",
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "white__leaves-in-a-bowl",
    familySlug: "white",
    familyName: "White tea",
    methodSlug: "leaves-in-a-bowl",
    methodName: "Leaves in a bowl",
    familyBrewQuote:
      "Start with 2.5–3.5 g per 250 mL at 80–90°C / 176–194°F for 3–5 minutes. Mature, compressed or leaf-heavy white tea may welcome hotter water.",
    methodStartingPointQuote:
      "Use very little large whole leaf, comfortable-temperature water and enough room for the leaf to settle.",
    methodWatchQuote:
      "This contemporary practice source should be credited. Do not turn a simple method into an invented ancient or religious claim.",
    sources: [LIVING_TEA, ISO],
    infusionMode: "continuous",
    houseTimerSeconds: seconds([]),
    timerNote:
      "No published second-count. Start a user-set timer only if you want a personal pause before the first sip.",
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "green__flash-chilled",
    familySlug: "green",
    familyName: "Green tea",
    methodSlug: "flash-chilled",
    methodName: "Flash-chilled iced tea",
    familyBrewQuote:
      "For Chinese pan-fired green tea, start with 2–3 g per 250 mL at 75–85°C / 167–185°F for 1.5–3 minutes. Japanese styles deserve their own method and often shorter, cooler infusions.",
    methodStartingPointQuote:
      "Use roughly double normal leaf or reduce hot water so the melting ice completes the intended final volume.",
    methodWatchQuote:
      "Ice is part of the recipe, not decoration. Weigh it or accept that each batch will dilute differently.",
    sources: [MAFF_COLD, MAFF_BREW],
    infusionMode: "single",
    houseTimerSeconds: seconds([90]),
    timerNote:
      "The hot-concentrate timer uses the low end of the Chinese pan-fired green range. This is not a Japanese iced-tea recipe, and ice volume is not timed here.",
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "black-red__flash-chilled",
    familySlug: "black-red",
    familyName: "Black tea / hongcha",
    methodSlug: "flash-chilled",
    methodName: "Flash-chilled iced tea",
    familyBrewQuote:
      "Start with 2.5–3 g per 250 mL at 95–100°C / 203–212°F for 3–5 minutes. Broken or CTC tea usually extracts faster than large whole leaf.",
    methodStartingPointQuote:
      "Use roughly double normal leaf or reduce hot water so the melting ice completes the intended final volume.",
    methodWatchQuote:
      "Ice is part of the recipe, not decoration. Weigh it or accept that each batch will dilute differently.",
    sources: [MAFF_COLD, TEA_USA],
    infusionMode: "single",
    houseTimerSeconds: seconds([180]),
    timerNote:
      "The hot-concentrate timer uses the low end of the black-tea Western range. Ice volume is part of the method and is not timed here.",
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "dark-heicha__gongfu",
    familySlug: "dark-heicha",
    familyName: "Dark tea / heicha",
    methodSlug: "gongfu",
    methodName: "Gongfu brewing",
    familyBrewQuote:
      "Start with 3–4 g per 250 mL at 95–100°C / 203–212°F for 2–4 minutes. Compressed leaf may need time to open; pour each infusion completely.",
    methodStartingPointQuote:
      "Begin around 5–8 g per 100–120 mL with brief infusions, then adjust to density, age and the leaf’s opening pace.",
    methodWatchQuote:
      "Gongfu is a family of practices, not one universal performance. Name the cultural source and avoid claiming lineage authority.",
    sources: [DARK_MICROBE, DARK_SAFETY, TAIWAN_BREW],
    infusionMode: "multi",
    houseTimerSeconds: seconds([20, 20, 25, 30, 40, 50, 60, 70]),
    timerNote: BRIEF_GONGFU_NOTE,
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
  point({
    id: "green__leaves-in-a-bowl",
    familySlug: "green",
    familyName: "Green tea",
    methodSlug: "leaves-in-a-bowl",
    methodName: "Leaves in a bowl",
    familyBrewQuote:
      "For Chinese pan-fired green tea, start with 2–3 g per 250 mL at 75–85°C / 167–185°F for 1.5–3 minutes. Japanese styles deserve their own method and often shorter, cooler infusions.",
    methodStartingPointQuote:
      "Use very little large whole leaf, comfortable-temperature water and enough room for the leaf to settle.",
    methodWatchQuote:
      "This contemporary practice source should be credited. Do not turn a simple method into an invented ancient or religious claim.",
    sources: [LIVING_TEA, MAFF_BREW],
    infusionMode: "continuous",
    houseTimerSeconds: seconds([]),
    timerNote:
      "No published second-count. Start a user-set timer only if you want a personal pause before the first sip.",
    reusable: true,
    allowsTemperatureDisplay: true,
  }),
];

export function getStartingPoint(id: string): StartingPoint | undefined {
  return startingPoints.find((point) => point.id === id);
}

export function startingPointsForFamily(familySlug: string): StartingPoint[] {
  return startingPoints.filter((point) => point.familySlug === familySlug);
}

export function listFamilies(): Array<{ slug: string; name: string }> {
  const seen = new Map<string, string>();
  for (const point of startingPoints) {
    if (!seen.has(point.familySlug)) seen.set(point.familySlug, point.familyName);
  }
  return [...seen].map(([slug, name]) => ({ slug, name }));
}

export function houseInfusionsFromGuidance(point: StartingPoint): Array<{
  index: number;
  label: string;
  durationSeconds: number;
}> {
  if (point.houseTimerSeconds.length === 0) {
    return [];
  }
  return point.houseTimerSeconds.map((durationSeconds, index) => ({
    index,
    label:
      point.infusionMode === "multi"
        ? `Infusion ${index + 1}`
        : point.infusionMode === "long-extract"
          ? "Cold extraction"
          : point.infusionMode === "continuous"
            ? "Comfort wait"
            : "Infusion",
    durationSeconds,
  }));
}

export const FORBIDDEN_CLAIM_PATTERNS = [
  /antioxidant/i,
  /weight[- ]loss/i,
  /detox/i,
  /cure/i,
  /treats? (cancer|anxiety|covid)/i,
  /will notify you (even )?when the app is closed/i,
  /lock[- ]screen alarm/i,
  /cures? disease/i,
];
