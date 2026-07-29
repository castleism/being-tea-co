export type Source = {
  label: string;
  url: string;
};

export type TeaFamily = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  definition: string;
  process: string[];
  styles: string[];
  cup: string;
  brew: string;
  storage: string;
  questions: string[];
  sources: Source[];
};

export const teaFamilies: TeaFamily[] = [
  {
    slug: "white",
    name: "White tea",
    eyebrow: "Wither · Dry",
    tagline: "Transformation through time, airflow and gentle handling.",
    definition:
      "White tea is generally withered and dried with little or no rolling and without the early fixation used for green tea. It is often described as minimally processed, but that does not mean chemically unchanged or completely unoxidized.",
    process: ["Pluck buds and/or leaves", "Wither with controlled airflow", "Dry to stabilize", "Sort or compress when desired"],
    styles: ["Baihao Yinzhen / Silver Needle", "Bai Mudan / White Peony", "Gong Mei", "Shou Mei", "Fresh and intentionally aged white tea"],
    cup:
      "Bud-heavy teas may emphasize downy texture and delicate aromatics; leafier grades can be deeper, fruitier and more structured. Neither is automatically the superior experience.",
    brew:
      "Start with 2.5–3.5 g per 250 mL at 80–90°C / 176–194°F for 3–5 minutes. Mature, compressed or leaf-heavy white tea may welcome hotter water.",
    storage:
      "For freshness, keep sealed, dry, cool, dark and odor-free. Treat intentional aging as a controlled storage project, not permission for humidity or contamination.",
    questions: ["What was harvested—buds, leaves, or both?", "When and where was it made?", "Is an age claim supported by storage history?"],
    sources: [
      { label: "ISO tea classification", url: "https://www.iso.org/standard/75419.html" },
      { label: "Processed-tea review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8605308/" },
    ],
  },
  {
    slug: "green",
    name: "Green tea",
    eyebrow: "Fix · Shape · Dry",
    tagline: "One family, from pan-fired chestnut to steamed ocean air.",
    definition:
      "Green tea receives early heat fixation—often pan-firing or steaming—to slow enzymatic oxidation before shaping and drying. Style, cultivar, shading and finishing create an enormous sensory range.",
    process: ["Pluck", "Heat-fix early", "Roll or shape", "Dry; sometimes roast or blend"],
    styles: ["Longjing and Chinese pan-fired greens", "Sencha and fukamushi", "Gyokuro and kabusecha", "Tencha and matcha", "Bancha, hojicha and genmaicha"],
    cup:
      "Pan-fired greens can be nutty and sweet; steamed Japanese greens may be grassy, marine and umami-rich. Matcha is a suspension of finely milled tencha, not a strained infusion.",
    brew:
      "For Chinese pan-fired green tea, start with 2–3 g per 250 mL at 75–85°C / 167–185°F for 1.5–3 minutes. Japanese styles deserve their own method and often shorter, cooler infusions.",
    storage:
      "Protect from heat, air, light, moisture and odor. Freshness matters especially for delicate steamed tea and matcha; follow the producer’s refrigeration guidance for sealed product.",
    questions: ["Was the tea steamed or pan-fired?", "What harvest and packaging dates are supplied?", "For matcha, is the origin and milling information specific?"],
    sources: [
      { label: "Japan MAFF brewing guide", url: "https://www.maff.go.jp/j/seisan/tokusan/cha/attach/pdf/ocha-5.pdf" },
      { label: "Tea-processing review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8605308/" },
    ],
  },
  {
    slug: "yellow",
    name: "Yellow tea",
    eyebrow: "Fix · Yellow · Dry",
    tagline: "A rare family defined by a deliberate warm, humid stage.",
    definition:
      "Yellow tea begins in a green-tea-like direction, then undergoes controlled yellowing: fixed leaf is held or wrapped under warm, moist conditions. It is not simply old or stale green tea.",
    process: ["Pluck", "Heat-fix", "Hold or wrap for controlled yellowing", "Shape and dry"],
    styles: ["Junshan Yinzhen", "Mengding Huangya", "Huoshan Huangya", "Regional bud and leaf yellow teas"],
    cup:
      "The controlled yellowing can soften a greener edge and build round, warm aromas. Production is limited and category labeling can be inconsistent.",
    brew:
      "Start with 2–3 g per 250 mL at 75–85°C / 167–185°F for 2–3 minutes, then prioritize credible maker instructions.",
    storage:
      "Treat like a freshness-oriented delicate tea: tightly sealed, cool, dry, dark and isolated from odor.",
    questions: ["What yellowing method is described?", "Is the origin named?", "Does the seller distinguish yellow tea from yellow-looking green tea?"],
    sources: [
      { label: "Green and yellow tea processing study", url: "https://pubmed.ncbi.nlm.nih.gov/38665631/" },
      { label: "ISO tea classification", url: "https://www.iso.org/standard/75419.html" },
    ],
  },
  {
    slug: "oolong",
    name: "Oolong",
    eyebrow: "Wither · Bruise · Oxidize · Fix",
    tagline: "Not one midpoint, but many traditions of controlled transformation.",
    definition:
      "Oolong uses selective bruising and carefully managed partial oxidation before fixation, shaping and drying. Oxidation, roast, cultivar, shape and region are separate dimensions—not one simple light-to-dark ladder.",
    process: ["Wither", "Shake or bruise in stages", "Manage oxidation", "Fix with heat", "Shape, dry and sometimes roast"],
    styles: ["Anxi and ball-rolled oolong", "Wuyi rock tea / yancha", "Phoenix / Dancong", "Taiwanese high-mountain and Baozhong", "Dong Ding and Oriental Beauty"],
    cup:
      "Oolong can move from spring flowers and cream to stone fruit, wood, spice and roast. The opened leaf across later infusions is part of the lesson.",
    brew:
      "Western start: 2.5–4 g per 250 mL at 85–100°C / 185–212°F for 2–4 minutes. Gongfu start: about 5–8 g per 100–120 mL with brief, fully decanted infusions.",
    storage:
      "Keep sealed, dry, cool and odor-free. Greener oolongs often reward freshness; well-roasted teas can settle and evolve, but storage quality still matters.",
    questions: ["Which regional style and cultivar?", "How oxidized and roasted is it?", "When was it made or last re-roasted?"],
    sources: [
      { label: "Oolong bruising study", url: "https://pubmed.ncbi.nlm.nih.gov/33196171/" },
      { label: "Taiwan tea brewing methods", url: "https://www.tbrs.gov.tw/en/ws.php?id=1003&print=Y" },
    ],
  },
  {
    slug: "black-red",
    name: "Black tea / hongcha",
    eyebrow: "Wither · Roll · Oxidize · Dry",
    tagline: "The English black-tea family is hongcha—red tea—in Chinese.",
    definition:
      "Black tea is withered, rolled or macerated, extensively oxidized, then dried. In Chinese it is hongcha, “red tea,” after the liquor; heicha, “dark tea,” names the separate post-fermented family.",
    process: ["Wither", "Roll, twist or CTC-macerate", "Allow extensive enzymatic oxidation", "Dry and sort"],
    styles: ["Qimen / Keemun and Dianhong", "Zhengshan Xiaozhong", "Assam and Darjeeling", "Ceylon regional teas", "Kenyan black tea and Japanese wakocha"],
    cup:
      "Whole-leaf orthodox tea and small CTC particles extract very differently. Malt, fruit, flowers, honey, wood and brisk tannin can all belong to this family.",
    brew:
      "Start with 2.5–3 g per 250 mL at 95–100°C / 203–212°F for 3–5 minutes. Broken or CTC tea usually extracts faster than large whole leaf.",
    storage:
      "Use an airtight, opaque, odor-free container in a cool, dry place. Black tea is often stable, but it is not immune to stale air, moisture or kitchen odors.",
    questions: ["Orthodox leaf or CTC?", "What origin and harvest?", "Are grade letters being used as size descriptors or unsupported quality claims?"],
    sources: [
      { label: "Tea Association of the USA fact sheet", url: "https://teausa.org/teausa/images/Tea_Association_Fact_Sheet_2024.pdf" },
      { label: "Tea and Herbal Association of Canada", url: "https://www.tea.ca/learn/tea/tea-types/" },
    ],
  },
  {
    slug: "dark-heicha",
    name: "Dark tea / heicha",
    eyebrow: "Fix · Roll · Ferment · Dry",
    tagline: "The family where microbial transformation becomes central.",
    definition:
      "Dark tea is a family whose manufacture includes microbial solid-state fermentation or post-fermentation. Regional sequences vary; piling, compression and later storage can all matter, but they are not the same process.",
    process: ["Heat-fix and roll", "Controlled microbial transformation", "Dry or compress", "Store according to the style"],
    styles: ["Liu Bao", "Fu brick / Fuzhuan", "Anhua dark tea", "Qingzhuan and Kangzhuan", "Shou Pu-erh"],
    cup:
      "Earth, wood, grain, dried fruit and mellow textures are common, but “fermented” never means that uncontrolled mold or unsafe odor should be accepted.",
    brew:
      "Start with 3–4 g per 250 mL at 95–100°C / 203–212°F for 2–4 minutes. Compressed leaf may need time to open; pour each infusion completely.",
    storage:
      "Protect from contamination, uncontrolled humidity and odor. Visible mold, pests or an unsafe smell are reasons to stop and contact the seller.",
    questions: ["Which regional process?", "Producer, batch and year?", "What storage history is known?"],
    sources: [
      { label: "Dark-tea microbial review", url: "https://pubmed.ncbi.nlm.nih.gov/31896450/" },
      { label: "Dark-tea safety review", url: "https://pubmed.ncbi.nlm.nih.gov/36910180/" },
    ],
  },
  {
    slug: "puerh-sheng",
    name: "Sheng Pu-erh",
    eyebrow: "Sun-dried maocha · Compress · Transform",
    tagline: "Raw Pu-erh changes slowly; storage becomes part of its biography.",
    definition:
      "Sheng uses Yunnan large-leaf material made into sun-dried green maocha, then sold loose or steamed and compressed. Young sheng and well-stored aged sheng can be radically different, but sheng does not simply become shou.",
    process: ["Make sun-dried green maocha", "Sort and blend if desired", "Steam and compress", "Allow gradual storage transformation"],
    styles: ["Young sheng", "Naturally stored aged sheng", "Factory recipes and batches", "Single-origin and blended productions"],
    cup:
      "Young examples may be fragrant, bright, bitter and returning-sweet; aged examples can deepen toward dried fruit, wood, camphor or medicinal notes depending on material and storage.",
    brew:
      "Use a small vessel and brief infusions as a useful starting point: about 5–7 g per 100 mL at 90–100°C / 194–212°F, adjusting to age and compression.",
    storage:
      "Stable conditions and clean airflow matter. Do not improvise humidification as a beginner, and never confuse mustiness or visible mold with valuable age.",
    questions: ["Producer, region, year and batch?", "Raw material and compression date?", "What climates and containers shaped its storage?"],
    sources: [
      { label: "China–EU Pu-erh GI explainer", url: "https://eu.china-mission.gov.cn/eng/zgggfz/cega/202210/t20221028_10793522.htm" },
      { label: "Tea storage review", url: "https://www.sciencedirect.com/science/article/pii/S092422442300287X" },
    ],
  },
  {
    slug: "puerh-shou",
    name: "Shou Pu-erh",
    eyebrow: "Maocha · Wet pile · Dry · Compress",
    tagline: "A deliberate microbial process, not a shortcut that copies old sheng.",
    definition:
      "Shou receives an additional warm, humid pile-fermentation process—wo dui—followed by drying and often compression. It creates a dark, mellow profile more quickly but does not duplicate decades of sheng aging.",
    process: ["Begin with sun-dried green material", "Moisten and pile under controlled conditions", "Turn through microbial succession", "Dry, sort and often compress"],
    styles: ["Loose shou", "Pressed cakes, bricks and tuos", "Factory recipes", "Small-batch fermentations"],
    cup:
      "Clean shou can suggest damp forest floor without tasting moldy: look for wood, cacao, grain, dates and a rounded texture rather than fishiness or contamination.",
    brew:
      "Start near boiling. Western: 3–4 g per 250 mL for 2–4 minutes. Gongfu: 5–8 g per 100–120 mL with a quick rinse if desired for debris—not as decaffeination.",
    storage:
      "Keep clean, stable and odor-free. Further storage may change it, but age cannot repair poor material, faulty fermentation or contamination.",
    questions: ["Who fermented it and when?", "Is the batch identified?", "Does the aroma read as clean fermentation rather than damp storage?"],
    sources: [
      { label: "Pu-erh processing review", url: "https://www.sciencedirect.com/science/article/abs/pii/S0963996913001488" },
      { label: "China–EU Pu-erh GI explainer", url: "https://eu.china-mission.gov.cn/eng/zgggfz/cega/202210/t20221028_10793522.htm" },
    ],
  },
  {
    slug: "tisanes",
    name: "Tisanes",
    eyebrow: "Herb · Fruit · Root · Spice",
    tagline: "A neighboring world of infusions—not one seventh tea family.",
    definition:
      "Peppermint, chamomile, rooibos, ginger, hibiscus and similar drinks are tisanes rather than Camellia sinensis tea. Their brewing, caffeine and safety profiles depend on the exact plant and plant part.",
    process: ["Identify the botanical and part", "Choose infusion or decoction", "Use food-grade material", "Follow ingredient-specific cautions"],
    styles: ["Leaves and flowers", "Fruit and calyces", "Roots and rhizomes", "Bark, seeds and spices", "Caffeinated mate, guayusa and yaupon"],
    cup:
      "A tisane can be delicate, tart, spicy, sweet or bitter. “Herbal” does not mean caffeine-free, medicine-free or automatically safe in concentrated amounts.",
    brew:
      "Use the supplier’s food-use directions. Delicate leaves and flowers are usually covered and infused; dense roots, bark and spices may need a short simmer. There is no safe universal recipe for every botanical.",
    storage:
      "Keep dry, sealed and correctly identified. Discard material with insects, moisture damage or mold, and respect the shorter shelf life of aromatic ingredients.",
    questions: ["What is the full botanical name?", "Which plant part is used?", "Are there ingredient-specific medicine, allergy or pregnancy cautions?"],
    sources: [
      { label: "ISO tea classification", url: "https://www.iso.org/standard/75419.html" },
      { label: "NCCIH herb–medicine interactions", url: "https://www.nccih.nih.gov/health/tips/tips-how-herbs-can-interact-with-medicines" },
    ],
  },
];

export type BrewMethod = {
  slug: string;
  name: string;
  bestFor: string;
  promise: string;
  kit: string[];
  startingPoint: string;
  steps: string[];
  watch: string;
  source: Source;
};

export const brewMethods: BrewMethod[] = [
  {
    slug: "western",
    name: "Western infusion",
    bestFor: "Everyday cups and larger pots",
    promise: "A moderate leaf-to-water ratio and one longer, complete infusion.",
    kit: ["Kettle", "Scale or teaspoon", "Pot or mug", "Strainer", "Timer"],
    startingPoint: "About 2.5–3.5 g per 250 mL. Match temperature and 1.5–5 minute contact time to the tea family.",
    steps: ["Warm the vessel if useful.", "Measure leaf and fresh potable water.", "Steep for a deliberate time.", "Remove or fully decant the leaf.", "Adjust one variable next time."],
    watch: "A brewing chart is a starting map. Particle size, roast, compression, water and taste can move every number.",
    source: { label: "Tea and Herbal Association of Canada", url: "https://www.tea.ca/learn/how-to-brew/" },
  },
  {
    slug: "gongfu",
    name: "Gongfu brewing",
    bestFor: "Oolong, Pu-erh and teas worth following across infusions",
    promise: "More leaf, less water and a sequence of short, fully decanted infusions.",
    kit: ["Gaiwan or small pot", "Scale", "Kettle", "Fairness pitcher if sharing", "Small cups"],
    startingPoint: "Begin around 5–8 g per 100–120 mL with brief infusions, then adjust to density, age and the leaf’s opening pace.",
    steps: ["Preheat and measure.", "Smell the warmed dry leaf.", "Add water with controlled agitation.", "Decant completely.", "Repeat, lengthening only as the leaf asks."],
    watch: "Gongfu is a family of practices, not one universal performance. Name the cultural source and avoid claiming lineage authority.",
    source: { label: "Taiwan Tea Research and Extension Station", url: "https://www.tbrs.gov.tw/en/ws.php?id=1003&print=Y" },
  },
  {
    slug: "grandpa-style",
    name: "Grandpa style",
    bestFor: "Large-leaf green, white and easygoing tea",
    promise: "Leaf floats freely in a glass or mug while you drink and refill.",
    kit: ["Heat-safe glass or mug", "Kettle", "Open leaf"],
    startingPoint: "Start lightly—about 2–3 g in a 300 mL vessel—and refill before the water level falls below the leaf.",
    steps: ["Add leaf.", "Pour suitable-temperature water.", "Wait for leaf to settle and liquor to become comfortable.", "Drink around the leaf.", "Top up repeatedly."],
    watch: "Avoid very small broken leaf and do not drink leaf fragments that make the experience unpleasant.",
    source: { label: "Taiwan direct-cup method", url: "https://www.tbrs.gov.tw/en/ws.php?id=1003&print=Y" },
  },
  {
    slug: "cold-brew",
    name: "Cold brew",
    bestFor: "Refrigerated, low-agitation extraction",
    promise: "Time replaces heat for a cool, often softer-tasting infusion.",
    kit: ["Clean covered pitcher", "Refrigerator", "Fine strainer"],
    startingPoint: "For Japanese green tea, MAFF offers 10–15 g per liter refrigerated for 4–6 hours. Treat that as a style-specific beginning.",
    steps: ["Use fresh potable cold water.", "Combine in a clean covered vessel.", "Refrigerate throughout extraction.", "Strain cleanly.", "Keep cold and drink promptly."],
    watch: "Cold brew is not caffeine-free. Temperature, time, tea and ratio all affect extraction.",
    source: { label: "Japan MAFF cold-tea guide", url: "https://www.maff.go.jp/j/pr/aff/1704/spe1_04.html" },
  },
  {
    slug: "sencha-kyusu",
    name: "Sencha in a kyusu",
    bestFor: "Japanese steamed green tea",
    promise: "Measured cooling, a brief infusion and an even final pour.",
    kit: ["Kyusu", "Cups", "Kettle", "Scale"],
    startingPoint: "A practical house start is 4–5 g per 200 mL around 70–80°C / 158–176°F for 45–90 seconds; use the producer’s style-specific guidance.",
    steps: ["Use cups to cool and measure the water.", "Add sencha to the kyusu.", "Infuse without aggressive stirring.", "Alternate between cups if sharing.", "Drain to the last drop; shorten the second infusion."],
    watch: "Fukamushi, gyokuro, bancha and hojicha need distinct handling. “Japanese green tea” is not one recipe.",
    source: { label: "Japan MAFF Nihoncha guide", url: "https://www.maff.go.jp/j/seisan/tokusan/cha/attach/pdf/ocha-5.pdf" },
  },
  {
    slug: "matcha",
    name: "Matcha",
    bestFor: "Whisked tencha powder",
    promise: "A suspension of tea, not a strained infusion.",
    kit: ["Matcha bowl", "Fine sieve", "Bamboo whisk", "Scoop or scale"],
    startingPoint: "Start near 2 g matcha with roughly 60–70 mL water around 75–80°C / 167–176°F, then adjust for bowl, grade and preference.",
    steps: ["Warm and dry the bowl.", "Sift the matcha.", "Add measured water.", "Whisk briskly from the wrist.", "Drink before particles settle."],
    watch: "Matcha is intentionally opaque. It disproves any claim that clarity or a golden twinkle is a universal test of good tea.",
    source: { label: "Kyoto Uji tea preparation", url: "https://ujicha.or.jp/en/knowledge/howto/" },
  },
  {
    slug: "masala-chai",
    name: "Masala chai",
    bestFor: "Tea simmered with milk, spice and sweetness",
    promise: "A family of household and regional recipes—not one universal authentic formula.",
    kit: ["Saucepan", "Fine strainer", "Black tea", "Milk or alternative", "Whole spices"],
    startingPoint: "Use a documented recipe as a beginning: simmer spices, add tea, then milk and sweetness according to the household style.",
    steps: ["Crush fresh whole spices.", "Simmer them in water.", "Add robust black tea.", "Add milk and sweetener if used.", "Bring together without scorching; strain."],
    watch: "Attribute the recipe and avoid flattening Indian tea culture into a single spice mix.",
    source: { label: "Indian High Commission cultural recipe", url: "https://hcigeorgetown.gov.in/public_files/assets/pdf/Newsletter_Georgetown_05_09_2025.pdf" },
  },
  {
    slug: "flash-chilled",
    name: "Flash-chilled iced tea",
    bestFor: "Bright iced tea brewed to full aroma",
    promise: "Brew a concentrate hot, then chill it immediately over measured ice.",
    kit: ["Brewing vessel", "Heat-safe pitcher", "Scale", "Plenty of ice"],
    startingPoint: "Use roughly double normal leaf or reduce hot water so the melting ice completes the intended final volume.",
    steps: ["Measure the final water-plus-ice volume.", "Brew a controlled hot concentrate.", "Strain immediately over ice.", "Stir until evenly chilled.", "Serve without long warm holding."],
    watch: "Ice is part of the recipe, not decoration. Weigh it or accept that each batch will dilute differently.",
    source: { label: "Japan MAFF iced-tea method", url: "https://www.maff.go.jp/j/pr/aff/1704/spe1_04.html" },
  },
  {
    slug: "leaves-in-a-bowl",
    name: "Leaves in a bowl",
    bestFor: "Large, clean leaves and quiet direct drinking",
    promise: "Tea, water and an open bowl with almost nothing between them.",
    kit: ["Wide tea bowl", "Large whole leaf", "Kettle"],
    startingPoint: "Use very little large whole leaf, comfortable-temperature water and enough room for the leaf to settle.",
    steps: ["Warm the bowl.", "Add a sparse layer of leaf.", "Pour gently.", "Wait and observe.", "Drink slowly; add water as needed."],
    watch: "This contemporary practice source should be credited. Do not turn a simple method into an invented ancient or religious claim.",
    source: { label: "Living Tea bowl guide", url: "https://www.livingtea.net/pages/leaves-in-a-bowl-guide" },
  },
];
