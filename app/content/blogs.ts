export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  dek: string;
  date: string;
  readTime: string;
  category: string;
  bodySections: Array<{ heading: string; markdown: string }>;
  sourceLinks: Array<{ label: string; url: string }>;
  imageKey: string;
  imageBrief: string;
  altText: string;
  socialExcerpts: string[];
};

export const blogs = [
  {
    "id": "B01",
    "slug": "what-is-tea-one-plant-many-paths",
    "title": "What Is Tea? One Plant, Many Paths",
    "dek": "Green, white, yellow, oolong, black, and dark tea begin with *Camellia sinensis*. Craft—not a different “tea plant” for every color—creates the paths we meet in the cup.",
    "date": "2026-08-03",
    "readTime": "7 minutes",
    "category": "Foundations",
    "bodySections": [
      {
        "heading": "",
        "markdown": "The tea shelf can look like a collection of unrelated plants. Silver buds sit beside jade-green needles; rolled oolong looks like small green stones; black tea appears coppery and dark; a pressed pu-erh cake resembles something from an archive. Yet the traditional tea families begin with the same species: *Camellia sinensis*.\n\nThe [Royal Botanic Gardens, Kew](https://www.kew.org/plants/tea-plant) describes tea as an evergreen shrub whose picked leaves may be baked, steamed, rolled, and dried. The U.S. National Center for Complementary and Integrative Health makes the essential distinction plainly: green, black, oolong, and white teas all come from *Camellia sinensis*, while “herbal teas” come from other plants ([NCCIH](https://www.nccih.nih.gov/health/tea)).\n\nThat does not make peppermint, rooibos, chamomile, or chaga lesser drinks. It simply gives us useful language. In this journal, **tea** means *Camellia sinensis*. We will use **tisane** or **herbal infusion** when the brewed plant is something else. Precision lets us appreciate both without asking one category to pretend to be another."
      },
      {
        "heading": "Six broad families",
        "markdown": "Tea is not sorted by the color of the dry leaf alone. It is sorted mainly through processing traditions. UNESCO’s account of China’s traditional tea knowledge identifies six broad categories: green, yellow, dark, white, oolong, and black tea ([UNESCO Intangible Cultural Heritage](https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884)). These are capacious families, not six single recipes.\n\n- **White tea** is generally allowed to wither and dry with comparatively little manipulation.\n- **Green tea** is heated early to limit enzymatic oxidation, then shaped and dried.\n- **Yellow tea** follows a green-tea-like path with an additional controlled “yellowing” or sealed-resting stage.\n- **Oolong tea** is deliberately bruised, rested, and heated to create a wide spectrum of partial oxidation and aromatic development.\n- **Black tea** is more extensively oxidized before drying. In Chinese terminology it is commonly called red tea, after the color of the liquor.\n- **Dark tea** includes post-fermented traditions in which microbial activity and later transformation matter. Pu-erh is one important member, not a synonym for every dark tea.\n\n“Oxidation” and “fermentation” are often blurred in casual tea language. Oxidation is the enzyme-driven browning that can begin when leaf cells are disrupted and exposed to oxygen. Microbial fermentation involves microorganisms. Some historical trade vocabularies call oxidation “fermentation,” but keeping the processes separate helps us understand what makers are actually doing."
      },
      {
        "heading": "The cultivar and the place still matter",
        "markdown": "One species does not mean one identical raw material. Tea has many cultivated varieties, local populations, and named cultivars. Elevation, shade, season, weather, soil, plant age, plucking standard, and farming choices all influence the leaf that enters the factory. Then the maker decides how far to wither it, how firmly to roll or bruise it, when to apply heat, how to roast it, and whether it should rest or age.\n\nThis is why “green tea tastes grassy” and “oolong tastes floral” are starting points, not laws. A steamed Japanese green can suggest sea greens and broth; a pan-fired Chinese green might suggest chestnut. A lightly oxidized oolong may be intensely floral, while a roasted Wuyi oolong can lean mineral, fruit-skin, and toast. Category tells us something about the route. It does not finish the tasting note for us."
      },
      {
        "heading": "A better first question",
        "markdown": "When meeting an unfamiliar tea, begin with five questions:\n\n1. What plant material is this—tea or a tisane?\n2. Where was it grown?\n3. When and how was it harvested?\n4. What processing path did it take?\n5. How does the seller know?\n\nThose questions are more useful than asking whether a tea is “fancy.” They move attention from marketing language toward plant, place, labor, and craft.\n\nThe Food and Agriculture Organization reports that tea supports millions of growers, workers, and families, with smallholders producing a major share of the world’s tea ([FAO International Tea Day](https://www.fao.org/international-tea-day/home/international-tea-day-2025/en)). Every finished leaf therefore carries both a biological story and a human one.\n\nThe next time six teas look impossibly different, place them side by side. Notice their shapes. Smell the dry leaves. Add water and compare the opened leaf. The lesson is not that all tea is the same. It is that astonishing difference can begin from one living plant."
      }
    ],
    "sourceLinks": [
      {
        "label": "Royal Botanic Gardens, Kew — Tea plant",
        "url": "https://www.kew.org/plants/tea-plant"
      },
      {
        "label": "NCCIH — Tea",
        "url": "https://www.nccih.nih.gov/health/tea"
      },
      {
        "label": "UNESCO — Traditional tea processing techniques and associated social practices in China",
        "url": "https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884"
      },
      {
        "label": "FAO — International Tea Day",
        "url": "https://www.fao.org/international-tea-day/home/international-tea-day-2025/en"
      }
    ],
    "imageKey": "b01",
    "imageBrief": "Botanical editorial still life, horizontal 3:2. A living *Camellia sinensis* branch crosses the frame and becomes six small, clearly distinct piles of finished tea—white buds, green needles, yellow curls, twisted oolong, black tea, compressed dark tea. Deep forest background, warm natural window light, restrained gold labels added later in HTML, no baked-in text. Show botanical accuracy rather than fantasy.",
    "altText": "A tea plant branch beside six visually distinct styles of finished tea.",
    "socialExcerpts": [
      "White, green, yellow, oolong, black, and dark tea are not six unrelated plants. They are six broad paths through craft.",
      "Tea or tisane? Precision is not gatekeeping—it helps us honor what is actually in the cup.",
      "Category tells us the route a leaf traveled. It does not finish the tasting note for us."
    ]
  },
  {
    "id": "B02",
    "slug": "finding-the-golden-light",
    "title": "Finding the Golden Light: How to Read a Cup of Tea",
    "dek": "Clarity, color, aroma, texture, and aftertaste can tell us how a brew is behaving. “Golden light” is our name for the moment those signals feel balanced—not a universal grade or caffeine test.",
    "date": "2026-08-17",
    "readTime": "7 minutes",
    "category": "Brewing",
    "bodySections": [
      {
        "heading": "",
        "markdown": "At Being Tea Co., **the golden light** is a way of paying attention. It is the clear, lively twinkle a well-balanced oolong or green tea can sometimes show when leaf, water, heat, time, and dilution meet well.\n\nIt is not an industry grade. It is not proof that a tea is expensive. It is not a scientific measure of caffeine, chemical safety, or health benefit. Some excellent teas brew pale green, deep red, cloudy from fine particles, or almost colorless. Golden light is our house language for a sensory moment—not a law imposed on every cup."
      },
      {
        "heading": "Color is information, not a verdict",
        "markdown": "Begin by looking through the liquor against a neutral background. Is it pale straw, yellow-green, amber, copper, or burgundy? Does light travel through it? Is the color even from top to bottom?\n\nClarity can be beautiful, but cloudiness has many causes. Tiny leaf particles may pass through a filter. Hard-water minerals can interact with tea compounds. A tea rich in suspended material may look hazy while tasting excellent. Research on green tea has found that the mineral content and pH of brewing water can change color, aroma, and taste ([Food Chemistry: X study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10192933/)).\n\nSo we do not score a cup with our eyes alone. We use the eyes to form a question: *What might have produced what I see?*"
      },
      {
        "heading": "Read the cup in five passes",
        "markdown": "**1. Look.** Note hue, depth, brightness, and any suspended leaf material. Avoid “good” and “bad” for the first ten seconds.\n\n**2. Smell.** Take one quiet breath above the cup. Then smell again after the tea cools slightly. Tea aroma is made of volatile compounds, and temperature changes what reaches us. A review from tea researchers at Zhejiang University describes aroma as a central part of sensory quality shaped by cultivar, growing environment, processing, and storage ([*Recent Advances in Volatiles of Teas*](https://pmc.ncbi.nlm.nih.gov/articles/PMC6273888/)).\n\n**3. Sip.** Move a small amount across the tongue. Notice sweetness, bitterness, acidity, savoriness, and astringency. Astringency is a drying or gripping sensation, not a flavor and not automatically a flaw.\n\n**4. Feel.** Is the liquor thin, silky, brisk, creamy, or coating? Does it seem integrated, or does one feature shout over the others?\n\n**5. Wait.** The finish matters. Does fragrance return through the nose? Does sweetness rise after swallowing? Does the mouth feel clean, dry, heavy, or refreshed?"
      },
      {
        "heading": "Balance can be adjusted",
        "markdown": "A disappointing first steep is data, not defeat.\n\nIf the cup is harsh, try one change at a time: cooler water, a shorter steep, less leaf, or more water. If it is hollow, try a little more leaf or time. If it is flat despite enough leaf, compare fresh water with the water you used. Lower-mineral, near-neutral water often presents green-tea aroma more clearly, although the best choice remains tea-specific and taste-specific ([brewing-water study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10192933/)).\n\nThis is where **dilution** can be a legitimate flavor tool. Adding a little hot water after brewing may open an overly concentrated cup. It changes concentration and sensation. It does **not** remove caffeine already extracted, and it does not make unlimited caffeine intake safe. The total caffeine in the serving remains the relevant concern."
      },
      {
        "heading": "Try the golden-light study",
        "markdown": "Choose one green tea or lightly oxidized oolong. Make three small cups with the same water and leaf:\n\n- Cup A: shorter and cooler than your usual brew\n- Cup B: your normal recipe\n- Cup C: longer or hotter\n\nWrite down only observations: color, aroma, bitterness, astringency, texture, and finish. Then choose the cup that feels most coherent. If none does, change the water or leaf-to-water ratio next time.\n\nYou are not hunting a single “correct” recipe. You are learning how this leaf responds. Published work on steeping shows that time, temperature, and leaf particle size all influence extraction and sensory results ([study of white and green teas](https://pubmed.ncbi.nlm.nih.gov/26017324/)).\n\nThe golden light is therefore less about achieving a photogenic color than developing a repeatable practice: look, smell, sip, feel, wait, adjust. A good cup becomes not a lucky accident but a conversation you can continue."
      }
    ],
    "sourceLinks": [
      {
        "label": "The types of brewing water affect tea infusion flavor",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10192933/"
      },
      {
        "label": "Recent Advances in Volatiles of Teas",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6273888/"
      },
      {
        "label": "Influence of steeping conditions on white and green teas",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26017324/"
      },
      {
        "label": "FDA — How Much Caffeine Is Too Much?",
        "url": "https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much"
      }
    ],
    "imageKey": "b02",
    "imageBrief": "Macro photograph of pale golden oolong in a thin white porcelain cup, a sharp sunlit glint on the surface and a visible clear liquor edge. A second, slightly overbrewed amber cup sits softly out of focus for comparison. Calm shadows, true-to-life liquid, no mystical aura, no text.",
    "altText": "Clear golden tea catching a small point of sunlight in a white cup.",
    "socialExcerpts": [
      "Golden light is a sensory invitation, not a universal grade: look, smell, sip, feel, wait.",
      "A disappointing first steep is data, not defeat.",
      "Dilution can rebalance flavor. It does not erase caffeine already in the cup."
    ]
  },
  {
    "id": "B03",
    "slug": "seed-to-cup-chain-of-choices",
    "title": "Seed to Cup: The Chain of Choices Inside Every Tea",
    "dek": "Cultivar, weather, plucking, withering, shaping, oxidation, heat, sorting, packing, storage, water, and service all leave fingerprints on the final infusion.",
    "date": "2026-08-31",
    "readTime": "8 minutes",
    "category": "Leaf to Cup",
    "bodySections": [
      {
        "heading": "",
        "markdown": "A cup of tea may take three minutes to brew and years to become possible.\n\nBefore the kettle, there was propagation: a seed or cutting, a nursery, a cultivar selected for local conditions and desired character. Before the package, there were harvesters, makers, sorters, tasters, exporters, importers, and shopkeepers. Tea is not a raw leaf that simply “dries.” It is an agricultural product shaped through a long chain of decisions."
      },
      {
        "heading": "1. Plant and place",
        "markdown": "*Camellia sinensis* is an evergreen, but a named tea is more specific than a species. Cultivar, plant age, elevation, shade, rainfall, temperature, soil, pests, pruning, and farming system affect growth. The season and even the weather between harvest days can alter tenderness and chemistry.\n\nTea also supports livelihoods at enormous scale. The Food and Agriculture Organization says the sector supports more than 13 million people and that smallholders produce a large share of the world’s tea ([FAO International Tea Day](https://www.fao.org/international-tea-day/home/international-tea-day-2025/en)). “Origin” is therefore not just a flavor word. It names living communities and working landscapes."
      },
      {
        "heading": "2. Harvest",
        "markdown": "Harvest standards vary. A maker may seek a bud, a bud and one leaf, a bud and two leaves, mature leaves, stems, or a mixture. Hand plucking can make selective harvests possible; mechanical harvest can increase speed and consistency across a field. Neither label alone guarantees flavor. The relevant questions are what was harvested, for which style, under what conditions, and how carefully it was handled.\n\nFresh leaf begins changing as soon as it is detached. Heat, bruising, compression, delay, and moisture loss influence what happens next."
      },
      {
        "heading": "3. Wither",
        "markdown": "Withering reduces moisture and makes leaves pliable. It also initiates important aroma changes. Duration, airflow, temperature, humidity, leaf depth, and turning can all matter. White tea may rely heavily on carefully managed withering; black tea uses withering to prepare the leaf for rolling and oxidation."
      },
      {
        "heading": "4. Shape and disrupt",
        "markdown": "Rolling, twisting, crushing, shaking, or tossing changes shape and can rupture cells. That brings enzymes and substrates together, enabling enzymatic oxidation. A pearl-rolled oolong, needle-shaped green, and twisted black tea do not merely look different: their shapes affect handling and how water later reaches the leaf."
      },
      {
        "heading": "5. Guide oxidation—or limit it",
        "markdown": "Green-tea makers apply heat relatively early to inactivate enzymes and limit oxidation. Oolong makers repeatedly bruise and rest leaves, guiding partial oxidation and aroma formation. Black-tea makers allow more extensive oxidation before drying. A Washington State University production guide summarizes common steps such as withering, rolling, oxidation, and drying while emphasizing that processing varies by tea and region ([WSU Extension](https://wpcdn.web.wsu.edu/extension/uploads/sites/25/2025/04/Tea-production-extension-guide.pdf)).\n\nThis is a good place to retire the phrase “fully oxidized.” Black tea is extensively oxidized, but “fully” implies a simple finish line that craft does not always obey."
      },
      {
        "heading": "6. Heat, dry, roast, or ferment",
        "markdown": "Heating can halt enzymatic oxidation. Drying reduces moisture so tea can be stored. Some teas receive later roasts that reshape aroma and texture. Dark teas may undergo microbial transformation; ripe pu-erh includes a deliberately managed pile-fermentation stage. These processes are distinct, even when everyday tea language calls several of them “fermentation.”"
      },
      {
        "heading": "7. Sort and evaluate",
        "markdown": "Finished leaf may be sifted by size and sorted to remove stems or uneven material, depending on the style. Makers and buyers cup samples for appearance, aroma, liquor, taste, and infused leaf. Sorting is not the moment quality magically appears; it reveals and organizes the results of every earlier decision."
      },
      {
        "heading": "8. Pack and move",
        "markdown": "Tea easily absorbs moisture and odors. Packaging must protect it from the environment while surviving warehouses, transport, and retail. A beautiful paper box may conceal a useful inner barrier—or no barrier at all. Ask whether the inner package reseals, when the tea was packed, and how the seller stores inventory."
      },
      {
        "heading": "9. Store at home",
        "markdown": "Most fresh teas benefit from protection from heat, light, moisture, oxygen, and strong smells. Aging teas require their own informed approach; “leave it open so it can breathe” is not universal advice. Storage is part of preparation because a damaged leaf cannot be rescued by a precise kettle."
      },
      {
        "heading": "10. Brew and present",
        "markdown": "Water composition, temperature, leaf-to-water ratio, vessel, agitation, and time shape extraction. The cup’s material and form influence temperature and aroma perception. Presentation—whether one mug at a desk or a shared tray—sets the social field around the drink.\n\nUNESCO describes tea knowledge in China as encompassing plantation management, picking, manual processing, drinking, and sharing ([UNESCO](https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884)). That breadth is the point. Tea culture is not only what happens after the package opens.\n\nWhen we pay fairly, ask for provenance, store carefully, brew attentively, and credit living traditions, we participate in the chain rather than pretending the cup began with us."
      }
    ],
    "sourceLinks": [
      {
        "label": "FAO — International Tea Day",
        "url": "https://www.fao.org/international-tea-day/home/international-tea-day-2025/en"
      },
      {
        "label": "Washington State University Extension — Tea Production Guide",
        "url": "https://wpcdn.web.wsu.edu/extension/uploads/sites/25/2025/04/Tea-production-extension-guide.pdf"
      },
      {
        "label": "UNESCO — Traditional tea processing techniques and associated social practices in China",
        "url": "https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884"
      },
      {
        "label": "Royal Botanic Gardens, Kew — Tea plant",
        "url": "https://www.kew.org/plants/tea-plant"
      }
    ],
    "imageKey": "b03",
    "imageBrief": "Documentary-inspired horizontal sequence on one worktable: tea seed and seedling, fresh shoot, bamboo withering tray, rolled leaf, drying basket, kraft-lined sealed package, storage tin, and poured cup. Hands of growers and makers appear without identifying a specific culture. Honest natural textures, no costume shorthand, no text.",
    "altText": "A tea seed, fresh leaves, processing tools, package, storage tin, and finished cup arranged in sequence.",
    "socialExcerpts": [
      "A cup may take three minutes to brew and years to become possible.",
      "Origin is not just a flavor word. It names living communities and working landscapes.",
      "Storage is part of preparation: a damaged leaf cannot be rescued by a precise kettle."
    ]
  },
  {
    "id": "B04",
    "slug": "tea-quality-ladder-bagged-loose-aged",
    "title": "Beyond the Tea Ladder: Bagged, Loose-Leaf, Specialty, and Aged Tea",
    "dek": "Price and leaf size can reveal something—but neither tells the whole story. Here is a more useful way to judge value from an everyday bag to a provenance-rich aged tea.",
    "date": "2026-09-07",
    "readTime": "8 minutes",
    "category": "Buying Tea",
    "bodySections": [
      {
        "heading": "",
        "markdown": "It is tempting to draw tea as a staircase: bag at the bottom, loose leaf in the middle, old pu-erh at the top. That picture is easy—and wrong often enough to mislead.\n\nA fresh, thoughtfully sourced tea bag can make a more satisfying cup than stale “premium” loose leaf. A broken-leaf breakfast tea may be exactly right with milk. A costly cake of pu-erh may be poorly stored, falsely aged, or simply not to your taste. Quality is not one vertical ladder. It is a set of relationships among material, craft, freshness or storage, brewing purpose, transparency, and price."
      },
      {
        "heading": "What a tea bag actually changes",
        "markdown": "Tea bags commonly contain smaller particles because those particles infuse quickly. Research on tea-bag infusion found that reducing particle size increases extraction rate, while the bag’s geometry and how leaf contacts water also matter ([*Swelling and infusion of tea in tea bags*](https://pmc.ncbi.nlm.nih.gov/articles/PMC5502043/)).\n\nFaster extraction can produce strength and color quickly. It can also make timing less forgiving: bitterness and astringency may arrive fast. A cramped bag gives expanding leaf less room than a basket infuser, but “bag” does not identify the garden, harvest, or care of manufacture.\n\nChoose a bag when convenience, portability, consistent strength, or easy cleanup matters. Judge it by aroma, honest labeling, freshness, and the cup it makes—not shame."
      },
      {
        "heading": "What loose leaf makes possible",
        "markdown": "Loose leaf lets you see and dose the material. A roomy basket, pot, or gaiwan gives larger leaves space to unfurl and makes repeated infusions practical. It also lets you inspect uniformity, stems, buds, roast, breakage, and the spent leaf.\n\nNone of that guarantees excellence. “Loose leaf” is a format, not a protected quality claim. Flavored commodity tea can be sold loose; exceptional tea can be packed in a sachet. The advantage is access and control."
      },
      {
        "heading": "What “specialty” should add",
        "markdown": "Specialty tea has no single globally enforced definition. For Being Tea Co., the term becomes useful when a seller adds **specific, verifiable information**:\n\n- country and region, preferably garden or producer when appropriate;\n- tea family and cultivar when known;\n- harvest season or date;\n- processing style;\n- storage history for aged tea;\n- brewing guidance that fits the leaf;\n- a price that can be explained without magical claims.\n\nTraceability does not guarantee that you will love the flavor. It gives you a fair chance to understand and repeat the experience."
      },
      {
        "heading": "Why whole leaf is not the whole answer",
        "markdown": "Leaf grading systems often describe physical size and form. They are not universal flavor scores. Smaller particles expose more surface area and tend to extract faster; larger or intact leaves often infuse more gradually. But some excellent styles are intentionally small, broken, rolled, chopped, or compressed.\n\nAsk whether the appearance is appropriate for the style. Needle-shaped tea should not be judged by the same visual rules as deeply steamed sencha, CTC Assam, or a compressed dark tea."
      },
      {
        "heading": "What age can—and cannot—add",
        "markdown": "Aging is meaningful for teas made and stored for transformation, including many raw and ripe pu-erhs and some other dark, white, or roasted teas. Time alone adds no virtue. Storage conditions, starting material, processing, authenticity, and personal preference matter.\n\nStudies of pu-erh document chemical and sensory changes during storage, but researchers also caution that the familiar “older is better” belief is empirical and not uniformly predictable ([study of long-term ripened pu-erh aging](https://pmc.ncbi.nlm.nih.gov/articles/PMC13000720/)). “Generational” is evocative marketing unless a seller can establish dates, custody, and storage.\n\nFor an aged purchase, request:\n\n1. production year and maker;\n2. raw or ripe process;\n3. region and material, if known;\n4. where and how it was stored;\n5. whether the seller has tasted this batch;\n6. a sample before a full cake, when possible."
      },
      {
        "heading": "A five-part value test",
        "markdown": "Instead of ranking formats, score a tea for your purpose:\n\n**Clarity:** Does the seller explain what it is?  \n**Condition:** Is it fresh or well stored?  \n**Craft:** Does the processing suit the intended style?  \n**Cup:** Does it taste compelling at a workable recipe?  \n**Cost per session:** How many satisfying cups or infusions does the purchase yield?\n\nAn expensive oolong that produces eight beautiful small infusions may cost less per session than its package price suggests. A low-priced bag you genuinely enjoy may be excellent value. The point is not to spend more. It is to know what the money is buying.\n\nTea education should expand pleasure, not create a new status contest. Keep the bag when it serves you. Explore loose leaf for control. Pay more when provenance, labor, craft, rarity, or trustworthy storage justifies it. And reserve the highest rung for no object at all: the cup you can understand and enjoy."
      }
    ],
    "sourceLinks": [
      {
        "label": "Swelling and infusion of tea in tea bags",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5502043/"
      },
      {
        "label": "Effect of brewing times on bagged and loose black teas",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4930538/"
      },
      {
        "label": "Decoding long-term aging of ripened Pu-erh tea",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13000720/"
      },
      {
        "label": "FAO — International Tea Day",
        "url": "https://www.fao.org/international-tea-day/home/international-tea-day-2025/en"
      }
    ],
    "imageKey": "b04",
    "imageBrief": "Four equal-status cups and their dry leaf arranged left to right: paper tea bag with fine black tea, accessible loose-leaf black tea, carefully made single-origin oolong, and a small flake from a wrapped pu-erh cake. No “bad-to-good” arrows; use increasing detail in labels applied as HTML. Warm editorial realism.",
    "altText": "Bagged tea, loose black tea, specialty oolong, and pu-erh shown side by side with brewed cups.",
    "socialExcerpts": [
      "Loose leaf is a format, not a protected quality claim.",
      "A tea bag is a tool. Judge it by freshness, transparency, and the cup—not shame.",
      "For aged tea, time alone adds no virtue. Ask for date, maker, process, custody, and storage."
    ]
  },
  {
    "id": "B05",
    "slug": "brew-tea-like-an-experiment",
    "title": "Brew Tea Like an Experiment: Ratio, Water, Temperature, and Time",
    "dek": "A repeatable cup begins with four variables and one modest habit: change only one thing at a time.",
    "date": "2026-09-21",
    "readTime": "8 minutes",
    "category": "Brewing",
    "bodySections": [
      {
        "heading": "",
        "markdown": "Brewing advice often arrives as a command: green tea at one temperature, black tea at another, oolong for exactly so many seconds. Recipes are useful starting points. They become limiting when we mistake them for laws.\n\nLeaves vary in cultivar, season, particle size, compression, roast, age, and processing. Water varies by place. Vessels lose heat differently. Your preferred strength is not a laboratory constant. A reliable brewer does not memorize one perfect chart; they learn how to run a small experiment."
      },
      {
        "heading": "First, separate recipe from method",
        "markdown": "A **recipe** records what you did: grams, water volume, temperature, time, vessel, and number of infusions. A **method** describes the larger approach.\n\nIn a larger-vessel or “Western-style” brew, a modest amount of leaf steeps for minutes and usually yields one or a few infusions. In concentrated, repeated-infusion brewing—often associated with Chinese gongfu tea—a higher leaf-to-water ratio meets shorter steeps, producing a sequence of changing cups. Grandparent-style brewing leaves tea in the drinking vessel and adds water as needed. Cold brewing uses cool water and long contact, ideally under refrigeration for food-safety prudence.\n\nThese are tools, not rankings of sophistication."
      },
      {
        "heading": "The four controllable variables",
        "markdown": "**Leaf-to-water ratio.** Weighing leaf is the fastest route to repeatability. A useful first trial for a larger pot is about 2–3 grams per 250 milliliters; for a small repeated-infusion vessel, 4–7 grams per 100 milliliters is a broad starting range. Those are test points, not universal standards. Bulky white tea and dense rolled oolong occupy volume differently, which is why a scale helps.\n\n**Water.** Tea is mostly water in the cup, and mineral composition matters. A controlled study found that water pH and minerals changed green tea’s color, taste, and volatile aroma profile; lower-mineral water near neutral pH often performed well for aroma ([brewing-water study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10192933/)). Avoid distilled water as an automatic answer—it can taste flat. Compare your tap water, filtered water, and one moderate-mineral bottled water.\n\n**Temperature.** Hotter water generally extracts soluble material more quickly, including compounds we experience as bitterness, astringency, sweetness, and aroma. Delicate is not a synonym for “must use cool water,” and dark is not a command to boil. Begin with the maker’s guidance, then adjust for the result.\n\n**Time.** Time works with all three variables above. More leaf often calls for shorter steeps. Smaller particles infuse faster. Compressed tea may begin slowly and open over successive infusions. Research on white and green teas shows that time, temperature, and particle size change both extraction and sensory experience ([steeping-conditions study](https://pubmed.ncbi.nlm.nih.gov/26017324/))."
      },
      {
        "heading": "The one-variable rule",
        "markdown": "If a cup is too bitter and you simultaneously lower temperature, shorten time, halve the leaf, and change the water, you may improve it—but you will not know why.\n\nInstead:\n\n1. Record the baseline.\n2. Name the problem in sensory terms.\n3. Change one variable.\n4. Taste at the same drinking temperature.\n5. Keep or reject the change.\n\n“Too strong” is ambiguous. Does it mean bitter, drying, roasted, smoky, thick, or highly aromatic? Precise language suggests a precise adjustment."
      },
      {
        "heading": "A practical first-pass chart",
        "markdown": "Use these broad starting points for a 250-milliliter covered vessel, then follow the leaf:\n\n| Tea family | Water | Time | Leaf |\n|---|---:|---:|---:|\n| Green | 70–85°C / 158–185°F | 1–3 min | 2–3 g |\n| White | 80–95°C / 176–203°F | 3–5 min | 2.5–4 g |\n| Oolong | 85–100°C / 185–212°F | 2–4 min | 3–5 g |\n| Black | 90–100°C / 194–212°F | 3–5 min | 2–3 g |\n| Dark / pu-erh | 95–100°C / 203–212°F | 2–5 min | 3–5 g |\n\nThese ranges are intentionally wide. A Japanese gyokuro may invite much cooler, concentrated brewing; a tightly rolled oolong may thrive in a small vessel with very short repeated steeps. The package, producer, and your palate outrank this table."
      },
      {
        "heading": "Do not use brewing myths as caffeine controls",
        "markdown": "A quick rinse does not reliably “decaffeinate” tea. Caffeine extraction varies substantially by product and conditions. A study of commercial teas found 14–61 milligrams per 6- or 8-ounce serving and no simple category trend across white, green, and black teas ([*Caffeine content of brewed teas*](https://pubmed.ncbi.nlm.nih.gov/19007524/)).\n\nIf caffeine matters, drink smaller servings, choose fewer sessions, avoid late-day tea, seek tested products, or consult a clinician for personal guidance. Do not assume cooler water or the first discarded steep makes the rest caffeine-free."
      },
      {
        "heading": "Keep a tiny log",
        "markdown": "Write one line:\n\n> Tea / grams / milliliters / water / temperature / time / result / next change\n\nAfter five brews, you will know more about that tea than a generic chart can tell you. Brewing becomes calm not because uncertainty disappears, but because you have a way to work with it."
      }
    ],
    "sourceLinks": [
      {
        "label": "The types of brewing water affect tea infusion flavor",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10192933/"
      },
      {
        "label": "Influence of steeping conditions on white and green teas",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26017324/"
      },
      {
        "label": "Caffeine content of brewed teas",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19007524/"
      },
      {
        "label": "Washington State University Extension — Tea Production Guide",
        "url": "https://wpcdn.web.wsu.edu/extension/uploads/sites/25/2025/04/Tea-production-extension-guide.pdf"
      }
    ],
    "imageKey": "b05",
    "imageBrief": "Overhead brewing lab without clinical sterility: digital scale, kettle, thermometer, timer, three white tasting cups, open gaiwan, leaf notebook, and spring water. Deep green linen and warm gold highlights; handwritten notes left blank for later editable text.",
    "altText": "Tea scale, kettle, timer, gaiwan, and three tasting cups arranged for a brewing comparison.",
    "socialExcerpts": [
      "A recipe records one success. A method helps you respond when the next leaf is different.",
      "Change one variable at a time—or improve the cup without learning why.",
      "‘Too strong’ is ambiguous. Bitter, drying, smoky, thick, and aromatic ask for different adjustments."
    ]
  },
  {
    "id": "B06",
    "slug": "oolong-is-a-spectrum",
    "title": "Oolong Is a Spectrum: From Floral Lift to Roasted Depth",
    "dek": "Partial oxidation is only the beginning. Cultivar, bruising, roast, shape, and repeated infusions make oolong one of tea’s broadest territories.",
    "date": "2026-09-28",
    "readTime": "8 minutes",
    "category": "Tea Families",
    "bodySections": [
      {
        "heading": "",
        "markdown": "“Oolong” is sometimes explained as the tea between green and black. That is true in the way a continent is between two oceans: geographically useful, experientially incomplete.\n\nOolongs are partially oxidized teas created through highly varied traditions of withering, bruising, resting, shaping, heating, roasting, and sometimes aging. A bright, ball-rolled Tieguanyin and a dark, twisted Wuyi rock tea can look and taste so different that a new drinker may not believe they share a family.\n\nUNESCO’s overview of traditional Chinese tea processing places oolong among six broad tea categories and notes the enormous diversity of products created by different natural conditions and local customs ([UNESCO](https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884))."
      },
      {
        "heading": "The craft of the edge",
        "markdown": "After harvest, oolong leaf is typically withered and deliberately disturbed—tossed, shaken, rolled, or bruised. The damage is not necessarily even. Leaf edges may oxidize more while the center stays greener. Makers alternate movement and rest, reading fragrance and leaf condition before applying heat to arrest enzymatic activity.\n\nThe result cannot be reduced to a reliable percentage printed on a package. “20% oxidized” may be a seller’s useful shorthand, but oxidation is spatially and chemically complex. Taste the tea rather than treating a number as a flavor guarantee."
      },
      {
        "heading": "Four axes that help",
        "markdown": "**Oxidation.** Lighter oxidation often preserves fresh floral or green notes; greater oxidation may bring ripe fruit, honey, and deeper color. This is a tendency, not a rule.\n\n**Roast.** Roasting can add toast, nut, caramelized, mineral, or warm spice impressions. A recent roast may sit on top of the leaf; rest can integrate it. “Dark” can therefore describe roast, oxidation, or both—ask which.\n\n**Shape.** Ball-rolled leaves open over several infusions. Twisted strips often release aroma earlier. Shape changes the pace of extraction, not merely appearance.\n\n**Place and cultivar.** Anxi Tieguanyin, Wuyi yancha, Phoenix dancong, Taiwanese high-mountain oolong, and many other traditions are not flavor presets. Each contains variation in site, cultivar, season, and maker.\n\nFAO recognizes the Anxi Tieguanyin tea culture system as a Globally Important Agricultural Heritage System, one example of the link among farming knowledge, biodiversity, community, and tea craft ([FAO](https://www.fao.org/newsroom/detail/on-international-tea-day--fao-spotlights-the-role-of-women-in-the-sector-and-their-significant-contributions/en))."
      },
      {
        "heading": "Brew for a sequence, not a single verdict",
        "markdown": "Oolong rewards repeated infusions because the leaf’s shape and aromatic development can unfold gradually.\n\nTry 5 grams in a 100-milliliter gaiwan or small pot. Begin around 90°C / 194°F for a greener oolong or near boiling for a roasted or tightly rolled one, then make a short first infusion of roughly 15–25 seconds. Pour it completely. Add time as the leaves open.\n\nThese are exploratory numbers. If the first cup is sharp, shorten or cool. If it is silent, use hotter water, more time, or more leaf. Smell the warmed dry leaf, the wet lid, the liquor, and the empty cup. Aroma compounds are shaped by cultivar, environment, processing, and storage, and some register at very low sensory thresholds ([review of tea volatiles](https://pmc.ncbi.nlm.nih.gov/articles/PMC6273888/)).\n\nRecord how the tea changes:\n\n- infusion one: first fragrance and structure;\n- two and three: expansion and peak intensity;\n- later infusions: sweetness, mineral sensation, softening, or fade.\n\nThe “best” infusion may not be the strongest."
      },
      {
        "heading": "About the golden light",
        "markdown": "Many lightly or moderately oxidized oolongs produce the clear gold Being Tea Co. uses as its signature image. Look for brightness, but do not force every oolong toward one color. Roasted and more oxidized examples may pour amber or copper; cloudy liquor may reflect particles or water chemistry rather than failure.\n\nThe golden-light question is broader: *Does this cup feel clear in its intention?* Can you distinguish aroma, taste, texture, and finish, or has one brewing variable flattened them?"
      },
      {
        "heading": "Buy with useful questions",
        "markdown": "Ask the seller:\n\n- origin and cultivar;\n- harvest season and year;\n- roast level and approximate roast date;\n- shape and recommended brewing style;\n- whether re-roasting or aging is expected.\n\nAvoid promises that a named mountain or cultivar automatically creates greatness. Provenance gives context; tasting evaluates the particular tea.\n\nOolong is not one bridge between green and black. It is a landscape of maker decisions. Enter through any cup—orchid-bright, cream-soft, fruit-rich, cliff-roasted—and let successive infusions show how wide the territory is."
      }
    ],
    "sourceLinks": [
      {
        "label": "UNESCO — Traditional tea processing techniques and associated social practices in China",
        "url": "https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884"
      },
      {
        "label": "FAO — Tea heritage systems, including Anxi Tieguanyin",
        "url": "https://www.fao.org/newsroom/detail/on-international-tea-day--fao-spotlights-the-role-of-women-in-the-sector-and-their-significant-contributions/en"
      },
      {
        "label": "Recent Advances in Volatiles of Teas",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6273888/"
      },
      {
        "label": "Washington State University Extension — Tea Production Guide",
        "url": "https://wpcdn.web.wsu.edu/extension/uploads/sites/25/2025/04/Tea-production-extension-guide.pdf"
      }
    ],
    "imageKey": "b06",
    "imageBrief": "Split-but-continuous scene: pale floral ball-rolled oolong on the left, dark twisted Wuyi-style oolong on the right, with five small infusion cups forming a color gradient between them. Elegant documentary light, accurate leaf morphology, no geographic costumes or fake calligraphy.",
    "altText": "Light rolled oolong and dark twisted oolong connected by a row of changing infusions.",
    "socialExcerpts": [
      "Calling oolong ‘between green and black’ is like locating a continent between two oceans: useful, incomplete.",
      "Oxidation, roast, shape, cultivar, and place are different axes. ‘Dark oolong’ does not tell you which one moved.",
      "The best infusion may not be the strongest. Follow the sequence."
    ]
  },
  {
    "id": "B07",
    "slug": "green-tea-without-fear",
    "title": "Green Tea Without Fear: Heat, Water, and a More Forgiving Cup",
    "dek": "Green tea is not fragile glass. Learn why steamed and pan-heated leaves behave differently, then use temperature and time as adjustable tools.",
    "date": "2026-10-05",
    "readTime": "8 minutes",
    "category": "Tea Families",
    "bodySections": [
      {
        "heading": "",
        "markdown": "Green tea has acquired an intimidating rulebook: never use boiling water, never steep beyond a minute, never make a mistake. Fear is not a useful tasting tool.\n\nGreen teas are heated relatively early in processing to limit the enzyme activity that drives oxidation. That shared step creates a family, not one flavor. Leaf material, heat method, shaping, drying, storage, and brewing can produce cups that are marine, nutty, grassy, floral, savory, sweet, brisk, or powerfully bitter."
      },
      {
        "heading": "Steamed, pan-heated, and beyond",
        "markdown": "Many Japanese green teas are steamed, a method often associated with vivid color, fresh vegetal aroma, and leaves that may become fine or fragmented. Many Chinese green teas are heated in pans or rotating drums, often bringing chestnut, bean, or toasted impressions. These are broad tendencies with many exceptions.\n\nThe important lesson is that broken-looking leaf is not automatically low quality. Deep steaming can create fine particles in excellent sencha. A flat Longjing-style leaf and a rolled gunpowder-style leaf need different visual expectations."
      },
      {
        "heading": "Why bitterness happens",
        "markdown": "Hot water and time extract many compounds at different rates. Caffeine contributes bitterness; catechins contribute bitterness and astringency; amino acids contribute savory and sweet impressions. Particle size, ratio, agitation, and water chemistry change what arrives in the cup.\n\nA study comparing steeping conditions found significant effects from time, temperature, and particle size, with milled leaf tending toward more bitter and astringent sensory results ([PubMed](https://pubmed.ncbi.nlm.nih.gov/26017324/)). That does not mean “hotter is bad.” It means hotter water is a stronger extraction choice."
      },
      {
        "heading": "Begin with a forgiving recipe",
        "markdown": "For a green tea without specific maker instructions, try:\n\n- 2.5 grams of leaf;\n- 250 milliliters of water;\n- 80°C / 176°F;\n- 90 seconds;\n- a wide basket or small pot that can drain completely.\n\nTaste as it cools. If thin, add time before adding heat. If sharply bitter, shorten the steep or lower temperature. If aromatic but weak, add a little more leaf. Change one variable at a time.\n\nFor a concentrated Japanese-style infusion, a small kyusu or shiboridashi, more leaf, cooler water, and shorter volume can emphasize sweetness and umami. For a sturdy pan-fired tea, hotter water may bring satisfying aroma. Follow the specific leaf, not a category superstition."
      },
      {
        "heading": "Water can hide the light",
        "markdown": "The same tea can look and taste different across cities. In controlled green-tea tests, water mineral content and pH affected aroma compounds, taste, and liquor color; lower-mineral water near neutral pH was often favorable for brewing ([Food Chemistry: X](https://pmc.ncbi.nlm.nih.gov/articles/PMC10192933/)).\n\nIf a trusted tea stays dull or develops a surface film, compare:\n\n1. tap water;\n2. filtered tap water;\n3. a moderate- or low-mineral bottled water.\n\nDo not chase “pure” water at any cost. Distilled water can produce a flat cup. The goal is a compatible water, not zero minerals."
      },
      {
        "heading": "Freshness and storage matter",
        "markdown": "Green tea is especially vulnerable to heat, humidity, oxygen, light, and odor. Research on Longjing aroma during storage identifies temperature, humidity, light, and oxygen among factors in deterioration ([storage study](https://pmc.ncbi.nlm.nih.gov/articles/PMC11698971/)).\n\nBuy quantities you can drink while lively. Keep the inner package tightly closed inside an opaque, odor-free container in a cool cupboard. Refrigeration can help some factory-sealed teas, but repeated removal can cause condensation; let a sealed package return to room temperature before opening. Once open, simplicity and steady use often beat elaborate storage rituals."
      },
      {
        "heading": "Iced and cold approaches",
        "markdown": "For iced tea, brew slightly concentrated and pour over a measured amount of ice, or cool promptly after brewing. For cold brew, combine leaf and cold potable water in a clean covered vessel and refrigerate. Start around 5–8 grams per liter for 6–10 hours, then strain and keep refrigerated.\n\nLong cold contact does not mean caffeine-free. Extraction differs from a brief hot steep, but caffeine remains possible and total amounts are hard to predict without testing."
      },
      {
        "heading": "Look for liveliness, not one color",
        "markdown": "Some green teas show Being Tea Co.’s “golden light”; others are yellow-green, almost clear, or hazy with tiny particles. Read aroma, taste, texture, and finish together. A cup that tastes sweet, vivid, and clean need not pass a visual purity test.\n\nGreen tea becomes easier when the rule changes from “do not ruin it” to “observe and adjust.” The leaf is not waiting to punish you. It is giving feedback."
      }
    ],
    "sourceLinks": [
      {
        "label": "NCCIH — Tea",
        "url": "https://www.nccih.nih.gov/health/tea"
      },
      {
        "label": "Influence of steeping conditions on white and green teas",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26017324/"
      },
      {
        "label": "The types of brewing water affect tea infusion flavor",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10192933/"
      },
      {
        "label": "Oxygen scavengers and Longjing aroma during storage",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11698971/"
      }
    ],
    "imageKey": "b07",
    "imageBrief": "Two green tea traditions presented side by side without claiming completeness: vivid steamed needle-like leaf and flatter pan-fired leaf, each with a pale infusion. Kettle and cooling pitcher in the center. Soft morning light, accurate greens, no neon saturation, no text.",
    "altText": "Steamed and pan-fired green teas beside pale infusions and a cooling pitcher.",
    "socialExcerpts": [
      "Green tea is not waiting to punish you. It is giving feedback.",
      "Hotter water is not morally wrong. It is a stronger extraction choice.",
      "A vivid cup may be pale, green-gold, or hazy with fine leaf. Read more than color."
    ]
  },
  {
    "id": "B08",
    "slug": "pu-erh-raw-ripe-age-provenance",
    "title": "Pu-erh Without the Myth Fog: Raw, Ripe, Age, and Provenance",
    "dek": "Old does not automatically mean excellent. Start with process, origin, storage, and the evidence behind the wrapper.",
    "date": "2026-10-19",
    "readTime": "9 minutes",
    "category": "Tea Families",
    "bodySections": [
      {
        "heading": "",
        "markdown": "Pu-erh attracts the language of wine cellars, ancient trees, hidden warehouses, and investment-grade cakes. Some of that language points toward real agricultural and cultural depth. Some sells romance by the gram.\n\nBegin with what can be known.\n\nPu-erh is associated with Yunnan and is commonly divided into **raw** (*sheng*) and **ripe** (*shou*) processes. A microbiology study describes raw pu-erh as withered, heated, rolled, sun-dried material that can then transform during storage. Ripe pu-erh adds a managed pile-fermentation stage, developed to accelerate a dark, mellow profile through microbial activity ([*The Microbiome and Metabolites in Fermented Pu-erh Tea*](https://pmc.ncbi.nlm.nih.gov/articles/PMC4918958/)).\n\nRaw does not become ripe with age. They remain different processing paths."
      },
      {
        "heading": "Raw pu-erh",
        "markdown": "Young raw pu-erh can be bright, floral, fruity, vegetal, bitter, astringent, sweet in the finish, and energetic in structure. Over time, oxidation and microbial and chemical changes may soften or transform it, depending strongly on starting material and storage environment.\n\n“Aged” is incomplete information. Ten years in a hot, humid warehouse and ten years in a cool, dry home are not the same ten years. Neither is universally better; they produce different trajectories and different risks."
      },
      {
        "heading": "Ripe pu-erh",
        "markdown": "Ripe pu-erh undergoes wet piling under controlled heat and moisture. Good examples may suggest dark wood, earth after rain, date, cocoa, or warm grain, with low sharpness and a deep red-brown liquor. Poor examples may taste muddy, fishy, stale, or contaminated. Airing can dissipate some storage aromas, but it cannot redeem mold or unsafe handling.\n\nRipe tea can change in storage, especially as fresh pile aromas settle, but it is not merely “fake old raw.” It is its own craft."
      },
      {
        "heading": "What age really does",
        "markdown": "Researchers studying long-term ripe pu-erh find measurable shifts in metabolites and sensory properties, including changes in bitterness, astringency, sweetness, thickness, and aroma. They also state that “older is better” remains an empirical belief with unanswered questions about ideal periods and consistency ([2026 aging study](https://pmc.ncbi.nlm.nih.gov/articles/PMC13000720/)).\n\nAge can add rarity because old inventory cannot be recreated. It does not certify pleasant storage, authentic labeling, good leaf, or a flavor you will enjoy.\n\nThe phrase **generational pu-erh** should therefore trigger curiosity, not automatic trust:\n\n- What is the production year?\n- Which factory, village, or producer?\n- Is it raw or ripe?\n- What material and region are claimed?\n- Who held it, and where?\n- Is the wrapper original?\n- Can the seller provide batch evidence and a sample?"
      },
      {
        "heading": "The living landscape behind the name",
        "markdown": "Pu-erh is not only a product category. UNESCO’s Cultural Landscape of Old Tea Forests of Jingmai Mountain describes a tea-growing system developed for more than a thousand years by Blang and Dai communities, integrating old tea groves, forests, villages, traditional governance, and belief ([UNESCO World Heritage Centre](https://whc.unesco.org/en/list/1665)).\n\nThat history deserves more than an “ancient tree” sticker. Respectful buying names communities and avoids turning Indigenous stewardship into anonymous luxury atmosphere."
      },
      {
        "heading": "Buy samples before stories",
        "markdown": "For a first exploration, buy 10–25 gram samples of:\n\n1. a young raw pu-erh;\n2. a raw tea with several years of documented storage;\n3. a clean, accessible ripe pu-erh.\n\nUse the same vessel and water. Try 5 grams per 100 milliliters with near-boiling water and short repeated infusions. A brief rinse can help open compressed leaf and remove loose surface dust, but it is not a reliable decaffeination method.\n\nObserve the dry leaf, warmed aroma, liquor clarity, texture, finish, and spent leaf. Stop if you see active fuzzy growth, smell a persistent musty-basement odor, or suspect contamination. White frost-like crystals and harmless aging phenomena are sometimes discussed by collectors, but a photograph is not a safety test; when in doubt, do not drink it."
      },
      {
        "heading": "Storage is part of provenance",
        "markdown": "Temperature and relative humidity shape microbial communities and chemical change in dark tea ([storage-humidity study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10534245/)). Home aging is therefore not “put it on a shelf and wait.” Excess moisture risks mold; extreme dryness can stall transformation and flatten aroma; kitchen odors can enter the leaf.\n\nFor most beginners, buying well-stored tea from a transparent specialist is safer than engineering a humid microclimate. Keep pu-erh away from odors, sunlight, condensation, and uncontrolled dampness. Monitor rather than mythologize.\n\nPu-erh becomes more interesting when the fog clears. Raw and ripe. Plant and process. Community and landscape. Custody and storage. Cup and preference. The real story is complex enough; it does not need invented age."
      }
    ],
    "sourceLinks": [
      {
        "label": "The Microbiome and Metabolites in Fermented Pu-erh Tea",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4918958/"
      },
      {
        "label": "Decoding long-term aging of ripened Pu-erh tea",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13000720/"
      },
      {
        "label": "UNESCO — Cultural Landscape of Old Tea Forests of Jingmai Mountain in Pu’er",
        "url": "https://whc.unesco.org/en/list/1665"
      },
      {
        "label": "Relative humidity, microbial diversity, and raw dark tea",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10534245/"
      }
    ],
    "imageKey": "b08",
    "imageBrief": "Archival but contemporary still life: intact wrapped pu-erh cake with generic unbranded paper, a broken cross-section, loose raw maocha, dark ripe leaf, two contrasting cups, and a simple provenance card left blank. No invented Chinese seals or legible fake writing.",
    "altText": "A wrapped pu-erh cake, loose raw and ripe leaves, and two contrasting infusions.",
    "socialExcerpts": [
      "Raw does not become ripe with age. They are different processing paths.",
      "‘Generational’ should trigger questions about date, maker, custody, and storage—not automatic trust.",
      "Buy samples before stories. The cup is evidence too."
    ]
  },
  {
    "id": "B09",
    "slug": "home-tea-storage",
    "title": "Home Tea Storage: Protect the Leaf You Paid For",
    "dek": "Tea’s enemies are ordinary—heat, moisture, oxygen, light, and odor. A calm storage system preserves more than a cupboard full of gadgets.",
    "date": "2026-10-26",
    "readTime": "7 minutes",
    "category": "Care",
    "bodySections": [
      {
        "heading": "",
        "markdown": "Good storage is quiet. It does not make tea better every morning. It prevents the environment from making tea worse.\n\nFinished tea is dry and readily takes on moisture and odor. Aroma compounds can fade or transform with oxygen, heat, and time. Light can accelerate change. The practical goal for most tea is therefore simple: keep it **cool, dark, dry, sealed, and away from smells**."
      },
      {
        "heading": "The five everyday threats",
        "markdown": "**Heat.** A cabinet above the kettle or beside the oven experiences repeated heat. Choose an interior cupboard away from appliances and sunlight.\n\n**Moisture.** Steam from a sink, dishwasher, or stove is the enemy of a dry leaf. Never scoop with a damp spoon. Close the package promptly.\n\n**Oxygen.** Every opening replaces protective packaging atmosphere with room air. Buy amounts you can finish, divide bulk tea into smaller working portions, and press excess air from barrier pouches when practical.\n\n**Light.** Clear glass looks beautiful but exposes leaf. Put clear jars inside a closed cupboard, or use opaque containers.\n\n**Odor.** Tea can absorb the smell of coffee, spices, incense, soap, wood finishes, or the cupboard itself. Airtightness matters in both directions.\n\nReviews of tea aroma describe storage as one of the factors that changes volatile compounds and sensory quality ([*Recent Advances in Volatiles of Teas*](https://pmc.ncbi.nlm.nih.gov/articles/PMC6273888/)). Studies of black tea likewise report that heat and moisture accelerate undesirable deterioration ([review of black-tea harvesting and processing](https://pmc.ncbi.nlm.nih.gov/articles/PMC10743253/))."
      },
      {
        "heading": "A three-layer system",
        "markdown": "**Layer one: the inner barrier.** Keep tea in its heat-sealed foil or high-barrier pouch when possible. Roll or press out excess air and use the closure.\n\n**Layer two: the container.** Place the pouch in an opaque, food-safe tin or canister with a sound lid. The container protects from light, puncture, and cupboard odor. Decanting loose leaf directly into a decorative tin is less useful if the lid leaks.\n\n**Layer three: the location.** Use a stable, cool cupboard away from steam, sun, spices, cleaning products, and temperature swings.\n\nLabel tea name, origin, harvest or purchase date, and opened date. This modest record prevents an unlabeled “mystery tin” from becoming permanent furniture."
      },
      {
        "heading": "Different teas, different clocks",
        "markdown": "**Green tea and very fresh oolong:** prioritize freshness, low heat, and minimal oxygen exposure. Buy small. Some unopened, factory-sealed teas benefit from refrigeration, particularly when the producer or specialist recommends it.\n\n**White, black, and roasted oolong:** generally keep sealed at stable room temperature. Some are made for aging, but do not assume every tea improves.\n\n**Scented tea:** isolate strongly scented jasmine, smoke, spice, or flavored blends so they do not perfume neighbors.\n\n**Matcha:** protect aggressively from heat, light, moisture, and oxygen; follow the maker’s storage guidance and use soon after opening.\n\n**Pu-erh and other aging dark teas:** do not automatically seal them like fresh green tea or leave them exposed. Their storage is a specialist subject shaped by climate, packaging, and intended transformation. Excess humidity can create mold; odor exposure can permanently taint them. Research shows that relative humidity changes both microbial communities and chemical components in raw dark tea ([study](https://pmc.ncbi.nlm.nih.gov/articles/PMC10534245/))."
      },
      {
        "heading": "Refrigeration without condensation",
        "markdown": "The refrigerator contains moisture and strong odors. Only refrigerate tea in a genuinely sealed, odor-proof package. When removing it, let the sealed package reach room temperature before opening; otherwise humid room air may condense on cold leaf.\n\nAvoid repeatedly moving the same open package in and out. Keep a small working portion at room temperature and a sealed reserve cold if the tea warrants it."
      },
      {
        "heading": "What to discard",
        "markdown": "Flat aroma is disappointing, not necessarily dangerous. Active mold is different. Do not drink tea with fuzzy growth, damp clumping, unexpected moisture, or a persistent moldy odor. Do not try to roast, rinse, or sun a suspect tea back to safety.\n\nFor expensive aged tea, seek expert evaluation—but do not let price pressure you into drinking something questionable."
      },
      {
        "heading": "The monthly five-minute reset",
        "markdown": "Once a month:\n\n1. close every pouch;\n2. check tins for odor and moisture;\n3. move near-expiry teas to the front;\n4. note what is open;\n5. choose one tea to finish before buying more.\n\nStorage is part of respecting labor. Growers and makers controlled moisture, heat, and time long before the leaf reached you. A clean pouch, a decent tin, and a cool cupboard carry that care the final few feet to the cup."
      }
    ],
    "sourceLinks": [
      {
        "label": "Recent Advances in Volatiles of Teas",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6273888/"
      },
      {
        "label": "Tea Harvesting and Processing Techniques and Final Quality of Black Tea",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10743253/"
      },
      {
        "label": "Relative humidity, microbial diversity, and raw dark tea",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10534245/"
      },
      {
        "label": "Oxygen scavengers and Longjing aroma during storage",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11698971/"
      }
    ],
    "imageKey": "b09",
    "imageBrief": "Beautiful but attainable tea cupboard: opaque tins with small editable labels, sealed inner pouches, one glass jar placed inside a closed dark cabinet, hygrometer near a separate pu-erh container, all far from stove and spices. Warm domestic realism, not luxury showroom.",
    "altText": "Sealed tea pouches and opaque tins organized in a cool, dark household cupboard.",
    "socialExcerpts": [
      "Good storage does not improve tea every morning. It prevents the room from making tea worse.",
      "The storage rule for most tea: cool, dark, dry, sealed, and away from smells.",
      "Price is never a reason to drink tea with suspected mold."
    ]
  },
  {
    "id": "B10",
    "slug": "teaware-field-guide",
    "title": "A Teaware Field Guide: Choose the Vessel for the Session",
    "dek": "Gaiwan, basket, kyusu, clay pot, fairness pitcher, cups, tray, and tea pet: what each tool does—and what you can skip.",
    "date": "2026-11-02",
    "readTime": "9 minutes",
    "category": "Teaware",
    "bodySections": [
      {
        "heading": "",
        "markdown": "Teaware can be a tool, an artwork, an heirloom, a status signal, or all four. A useful collection begins with a simpler question: **What kind of session do I want to make easier?**\n\nYou can brew excellent tea with a mug and a spacious basket infuser. Everything else should add function, pleasure, cultural practice, or sustained attention—not prove that you belong."
      },
      {
        "heading": "The core vessels",
        "markdown": "**Basket infuser.** The most forgiving entry tool. Choose a wide, fine-mesh basket that lets leaf expand and can be removed cleanly. It suits larger mugs, broken leaf, and daily one- or two-infusion brewing.\n\n**Gaiwan.** A Chinese lidded bowl, typically with saucer, bowl, and lid. It can brew many tea families, pours quickly, and lets you inspect leaf. Porcelain is neutral and easy to clean. Practice with cool water before handling hot liquor; a smaller gaiwan is often easier than a dramatic large one.\n\n**Glass or glazed pot.** Neutral, observable, and easy to share. A removable basket or built-in strainer prevents oversteeping. Glass loses heat relatively quickly and reveals leaf movement; glazed ceramic offers many heat-retention profiles.\n\n**Kyusu.** “Kyusu” simply means teapot in Japanese, though abroad it often refers to a side-handled pot used for Japanese green tea. Fine built-in screens suit small steamed leaves. Side handles make low, controlled pouring comfortable.\n\n**Unglazed clay pot.** Yixing and other unglazed wares can retain traces of aroma and change the brewing experience through clay, geometry, wall thickness, and heat behavior. The British Museum notes Yixing’s long history and the high esteem of its individually made red and brown stonewares ([British Museum](https://www.britishmuseum.org/collection/object/A_Franks-2459)).\n\nClay is not an automatic upgrade. Provenance is difficult, counterfeit claims are common, and porous ware requires careful cleaning without scented soap. Learn with porcelain before buying expensive clay; you will know what difference you are paying to hear."
      },
      {
        "heading": "The serving pieces",
        "markdown": "**Fairness pitcher (*gong dao bei* or *cha hai*).** Receives the entire infusion before it is divided, making each guest’s cup more even. It also prevents leaf from continuing to steep while you serve.\n\n**Cup.** Thin porcelain emphasizes immediate aroma and cools quickly. Thick stoneware holds heat and feels substantial. A tall aroma cup is used in some Taiwanese gongfu contexts; a Japanese chawan is made for whisked tea and is not simply an oversized steeped-tea cup.\n\nTea bowls carry deep histories. The Metropolitan Museum of Art notes that Chinese Jian-style “hare’s-fur” bowls became prized in Japan, especially among Buddhist monks, and inspired later Japanese production ([Met object record](https://www.metmuseum.org/art/collection/search/48115)). Objects travel and acquire new meanings; name those histories rather than calling every handmade bowl “Zen.”\n\n**Tray.** A dry tray organizes tools. A drainage tray handles generous rinsing and overflow. Neither is required. If using a drainage tray, empty and clean it promptly so the ritual does not end in stagnant tea."
      },
      {
        "heading": "Small tools and trinkets",
        "markdown": "**Scoop or spoon:** keeps hands and moisture out of storage.  \n**Tongs:** sometimes used to handle small cups; optional at home.  \n**Tea needle or pick:** separates compressed tea; use a stable surface and direct the point away from your hand.  \n**Strainer:** catches small particles between pitcher and cup.  \n**Tea towel:** handles drips and supports a clean table.  \n**Tea pet:** a small clay figure that receives rinse water in some contemporary gongfu settings. Enjoy it as table companionship, not as a universal ancient requirement.  \n**Kettle:** the most consequential “accessory.” Prioritize safe handling, a controlled pour, and temperature selection only if you will use it."
      },
      {
        "heading": "Match the tool to the leaf",
        "markdown": "- Fine steamed green tea: kyusu with a suitable screen, shiboridashi, or fine basket.\n- Ball-rolled oolong: gaiwan or pot with room to open.\n- Twisted oolong: fast-pouring gaiwan or small pot.\n- Broken black tea: basket or pot with a fine strainer.\n- Compressed pu-erh: pick, small neutral vessel, and pitcher for repeated infusions.\n- Matcha: chawan, whisk, and sifter—part of a distinct powdered-tea preparation.\n\nThese are conveniences, not prohibitions."
      },
      {
        "heading": "Respect practice, avoid costume",
        "markdown": "The Japanese practice of chanoyu is a codified art requiring years of study, not a generic label for any quiet cup. The Metropolitan Museum describes it as ritualized preparation and drinking of matcha in a specialized setting ([Met essay](https://www.metmuseum.org/pt/essays/the-japanese-tea-ceremony)). Likewise, gongfu traditions are living, varied practices—not a decorative pile of “Asian” objects.\n\nWhen demonstrating a tradition, name the place, lineage, teacher, or source. When creating your own routine, call it a tea session. Accuracy is warmer than borrowed authority."
      },
      {
        "heading": "The first useful kit",
        "markdown": "Start with:\n\n1. a reliable kettle;\n2. a gram scale;\n3. a basket infuser or 100-milliliter porcelain gaiwan;\n4. one cup you enjoy holding;\n5. a small pitcher if you share tea;\n6. a towel and a notebook.\n\nAdd the next object only when you can name the problem it solves or the practice it supports. The best tea setup is not the fullest table. It is the table that makes attention easy."
      }
    ],
    "sourceLinks": [
      {
        "label": "British Museum — Yixing ware teapot",
        "url": "https://www.britishmuseum.org/collection/object/A_Franks-2459"
      },
      {
        "label": "Metropolitan Museum of Art — Teabowl (Chawan)",
        "url": "https://www.metmuseum.org/art/collection/search/48115"
      },
      {
        "label": "Metropolitan Museum of Art — The Japanese Tea Ceremony",
        "url": "https://www.metmuseum.org/pt/essays/the-japanese-tea-ceremony"
      },
      {
        "label": "Kyoto National Museum — Tenmoku Teabowls",
        "url": "https://www.kyohaku.go.jp/eng/learn/home/dictio/touji/tenmoku/"
      }
    ],
    "imageKey": "b10",
    "imageBrief": "Museum-meets-home flat lay of a porcelain gaiwan, glass pot with basket, side-handled kyusu, small unglazed clay pot, fairness pitcher, three cup forms, bamboo tray, tongs, scoop, and one modest tea pet. Number markers added later in HTML. Accurate scale and functional spouts.",
    "altText": "A porcelain gaiwan, teapots, pitcher, cups, tray, and small tea tools arranged as a field guide.",
    "socialExcerpts": [
      "A mug and a roomy basket can make excellent tea. Every additional tool should earn its place.",
      "Learn in porcelain before buying expensive clay; know what difference you are paying to hear.",
      "When it is your own routine, call it a tea session. Accuracy is warmer than borrowed authority."
    ]
  },
  {
    "id": "B11",
    "slug": "tea-ceremony-hospitality-and-respect",
    "title": "Tea Ceremony, Hospitality, and Respectful Practice",
    "dek": "There is no single global “tea ceremony.” To learn well, name the tradition, credit its bearers, and distinguish formal practice from your personal ritual.",
    "date": "2026-11-16",
    "readTime": "9 minutes",
    "category": "Culture",
    "bodySections": [
      {
        "heading": "",
        "markdown": "“Tea ceremony” sounds singular. Tea culture is not.\n\nChina contains many regional and community practices around growing, processing, serving, and sharing tea. Japanese chanoyu is a formal, codified practice centered on matcha. Korean tea practices have their own histories and contemporary lineages. Tibetan butter tea, Moroccan mint tea, British afternoon tea, Taiwanese gongfu traditions, and the tea hospitality of Azerbaijan and Türkiye are not variations of one master script.\n\nUNESCO describes tea culture in Azerbaijan and Türkiye as a living social practice of hospitality and relationship, commonly serving hot black tea in pear-shaped cups with sweets, lemon, jams, or dried fruit ([UNESCO](https://ich.unesco.org/en/RL/culture-of-cay-tea-a-symbol-of-identity-hospitality-and-social-interaction-01685?RL=01685)). Its value is not reduced to brewing technique. It lives in hosts, guests, artisans, farmers, and repeated social acts."
      },
      {
        "heading": "Name the scale of your claim",
        "markdown": "Compare:\n\n> “In the Japanese tea ceremony, people use this bowl.”\n\nwith:\n\n> “This chawan form is used in chanoyu; the particular school, season, and gathering shape how utensils are selected.”\n\nThe second sentence leaves room for knowledge we do not possess. The Metropolitan Museum describes chanoyu as a ritualized practice with codified procedures that requires years of study ([Metropolitan Museum of Art](https://www.metmuseum.org/pt/essays/the-japanese-tea-ceremony)). A short social video can introduce it; it cannot confer mastery.\n\nGood cultural writing specifies:\n\n- country, region, or community;\n- name of the practice in its own language when known;\n- source or teacher;\n- whether the example is historical, contemporary, formal, domestic, or commercial;\n- what remains outside the writer’s experience."
      },
      {
        "heading": "Ceremony, practice, session, ritual",
        "markdown": "Use **ceremony** for a recognized ceremonial tradition or when its bearers use that term. Use **practice** for a cultivated form with teachings and repetition. Use **tea session** for a gathering organized around brewing and tasting. Use **personal ritual** for a routine you created.\n\nThese distinctions do not make an informal cup less meaningful. They prevent personal atmosphere from being marketed as inherited authority."
      },
      {
        "heading": "What Being Tea Co. learned from Deer Park",
        "markdown": "Being Tea Co.’s founder encountered tea within personal experiences at Deer Park Monastery in Escondido, California. Deer Park describes itself as a mindfulness practice and monastic training center in the Plum Village tradition founded by Zen Master Thich Nhat Hanh ([Deer Park — About Us](https://deerparkmonastery.org/about-us/)).\n\nAn archived Deer Park teaching on tea meditation describes being truly present with tea and friends, sitting together in a joyful, serene atmosphere, and allowing sharing to arise without forcing it ([Deer Park — Be Mindful in Daily Life](https://wp.deerparkmonastery.org/be-mindful-in-daily-life/)).\n\nWhat we can honestly say is personal:\n\n- slowing down changed how the founder noticed tea;\n- shared tea created space for presence and community;\n- those experiences continue to inform this independent educational project.\n\nWhat we should not say:\n\n- that Being Tea Co. represents Deer Park, Plum Village, Buddhism, or Thich Nhat Hanh;\n- that ordinary product content is an official monastic teaching;\n- that monastery imagery endorses a future shop.\n\nThe standing language is: **Inspired in part by personal experiences at Deer Park Monastery. Independent and unaffiliated.**"
      },
      {
        "heading": "Learn without flattening",
        "markdown": "Avoid the composite “Asian tea ceremony”: a Japanese whisk, Chinese gaiwan, generic bamboo, monk silhouette, and invented calligraphy assembled for mood. It turns distinct living traditions into décor.\n\nInstead, build one clearly sourced lesson at a time. Interview practitioners when possible. Pay teachers and image-makers. Pronounce terms carefully. Link to museums, cultural institutions, and community sources. Correct mistakes publicly.\n\nUNESCO’s account of Chinese tea heritage emphasizes that knowledge is transmitted through families and apprenticeships and held by farmers, producers, artists, and other community members ([UNESCO](https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884)). Credit should follow that living chain."
      },
      {
        "heading": "A respectful home tea pause",
        "markdown": "You do not need to imitate a formal ceremony to bring attention to tea.\n\n1. Clear one small space.\n2. Put away the phone for one infusion.\n3. Notice the dry leaf and water.\n4. Brew without rushing.\n5. Offer the first complete cup to your guest, if you have one.\n6. Drink in quiet for three breaths.\n7. Share what you actually notice, without performing expertise.\n\nCall this a Being Tea Co. tea pause—or simply having tea."
      },
      {
        "heading": "Hospitality before performance",
        "markdown": "In many tea cultures, the central achievement is not a flawless photograph. It is welcome. Ask whether the guest wants caffeine, how strong they like tea, whether they have allergies to accompaniments, and whether they prefer silence or conversation.\n\nThe respectful host does not trap a guest inside a ritual they did not request. The respectful learner does not claim a lineage they have not received. Tea can be deeply meaningful while our language remains modest.\n\nThe table grows larger when we name traditions accurately. Specificity does not divide tea culture; it lets each practice arrive with its people and history intact."
      }
    ],
    "sourceLinks": [
      {
        "label": "UNESCO — Culture of Çay in Azerbaijan and Türkiye",
        "url": "https://ich.unesco.org/en/RL/culture-of-cay-tea-a-symbol-of-identity-hospitality-and-social-interaction-01685?RL=01685"
      },
      {
        "label": "Metropolitan Museum of Art — The Japanese Tea Ceremony",
        "url": "https://www.metmuseum.org/pt/essays/the-japanese-tea-ceremony"
      },
      {
        "label": "Deer Park Monastery — About Us",
        "url": "https://deerparkmonastery.org/about-us/"
      },
      {
        "label": "Deer Park Monastery — Tea Meditation in Daily Life",
        "url": "https://wp.deerparkmonastery.org/be-mindful-in-daily-life/"
      },
      {
        "label": "UNESCO — Traditional tea processing and social practices in China",
        "url": "https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884"
      }
    ],
    "imageKey": "b11",
    "imageBrief": "A shared table with three distinct, non-blended vignettes separated by negative space: Chinese-style steeped tea service, Japanese matcha tools, and Turkish/Azerbaijani-style pear-shaped tea glass with accompaniments. No people in costume, no mixing tools into one invented ceremony, museum-like captions added in HTML.",
    "altText": "Three separate tea-service traditions shown side by side without combining their utensils.",
    "socialExcerpts": [
      "There is no single global tea ceremony. Name the tradition, place, people, and source.",
      "A personal ritual can be meaningful without being marketed as inherited authority.",
      "Inspired by personal experience at Deer Park. Independent and unaffiliated."
    ]
  },
  {
    "id": "B12",
    "slug": "tea-drunk-caffeine-and-clearer-language",
    "title": "“Tea Drunk,” Caffeine, and a Clearer Way to Talk About the Feeling",
    "dek": "Tea can feel bright, calm, warm, social, or intense. The experience is real to the drinker; the popular explanations are not always proven.",
    "date": "2026-11-23",
    "readTime": "9 minutes",
    "category": "Tea & Body",
    "bodySections": [
      {
        "heading": "",
        "markdown": "Tea drinkers use phrases such as “tea drunk,” *cha qi*, body feeling, energy, calm focus, floating, warmth, or a sudden social ease. These words point to subjective experience. They do not all mean the same thing, and they do not establish one proven biological mechanism.\n\nBeing Tea Co. will treat “tea drunk” as a community term for a noticeable state during or after a tea session—not as a medical condition, supernatural property, or promise that an expensive tea will alter consciousness."
      },
      {
        "heading": "What is definitely in the conversation",
        "markdown": "Tea from *Camellia sinensis* contains caffeine and many other compounds, including polyphenols and the amino acid L-theanine ([NCCIH](https://www.nccih.nih.gov/health/tea)). Caffeine is a stimulant. It can increase alertness, but too much can cause jitters, anxiety, insomnia, nausea, headache, increased heart rate, or palpitations.\n\nThe FDA cites 400 milligrams per day for most adults as an amount not generally associated with negative effects, while stressing that sensitivity and elimination vary with body, medication, and health conditions ([FDA](https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much)). That is a population-level reference, not a personal target and not permission to push until symptoms appear.\n\nPregnancy, breastfeeding, certain conditions, and some medications require individualized guidance. Children and teens need different limits. A clinician is the right source for personal medical advice."
      },
      {
        "heading": "Why the cup is hard to calculate",
        "markdown": "“White tea has the least caffeine” and similar charts are unreliable shortcuts. A study of 20 commercial teas found caffeine ranging from 14 to 61 milligrams per 6- or 8-ounce serving, with no simple category trend across white, green, and black tea ([*Caffeine content of brewed teas*](https://pubmed.ncbi.nlm.nih.gov/19007524/)).\n\nThe amount in a session depends on leaf, cultivar, harvest material, processing, dose, particle size, water temperature, time, and number of infusions. Package values, when available, are more useful than folklore, but only laboratory testing can establish a particular preparation precisely."
      },
      {
        "heading": "Dilution changes concentration, not the extracted total",
        "markdown": "Suppose a pot contains 60 milligrams of caffeine. Adding water can make each sip less concentrated and may soften flavor. If you drink the entire diluted pot, it still contains roughly the caffeine that was already extracted. Water does not neutralize caffeine.\n\nDilution can help pace a session and improve taste. It cannot make “much more caffeine than normal” safe. This distinction is central to our golden-light language: a clear, balanced-looking cup is a sensory achievement, not a caffeine safety indicator.\n\nLikewise, a quick rinse does not reliably remove most caffeine. Extraction begins quickly but continues over time; how much leaves in a rinse depends on the tea and conditions. Discarding flavor to pursue an unverified decaffeination trick is poor risk management."
      },
      {
        "heading": "What about L-theanine?",
        "markdown": "Tea’s L-theanine is often used to explain “calm focus.” A recent systematic review and meta-analysis found that L-theanine with caffeine may produce small-to-moderate improvements in some attention measures, while many confidence intervals included little or no difference and few studies used tea itself at ordinary tea-equivalent doses ([systematic review](https://pmc.ncbi.nlm.nih.gov/articles/PMC12422004/)).\n\nThat is interesting evidence, not proof that theanine cancels caffeine or makes unlimited intake safe. Supplements and a brewed cup are not interchangeable."
      },
      {
        "heading": "Context changes the experience",
        "markdown": "A long tea session also includes:\n\n- repeated warm liquid;\n- aroma and taste attention;\n- expectation and story;\n- pauses in ordinary activity;\n- quiet or conversation;\n- an empty or full stomach;\n- hydration and food;\n- the social rhythm of serving;\n- caffeine accumulated across many infusions.\n\nAny of these may shape what a person reports. We can honor the experience without pretending to isolate its cause from an armchair."
      },
      {
        "heading": "A safer session practice",
        "markdown": "If exploring concentrated, repeated infusions:\n\n1. eat beforehand unless a clinician has told you otherwise;\n2. know your usual caffeine sensitivity;\n3. use small cups and pause between infusions;\n4. keep water and simple food available;\n5. count coffee, energy drinks, medication, chocolate, and other caffeine that day;\n6. stop for palpitations, shaking, nausea, anxiety, dizziness, or feeling unwell;\n7. do not drive or take risks if you feel impaired for any reason.\n\nThis is general caution, not medical treatment. Severe or persistent symptoms require professional help."
      },
      {
        "heading": "Language that keeps wonder and honesty",
        "markdown": "Instead of:\n\n> This ancient tea’s qi lets you drink huge amounts of caffeine safely.\n\nTry:\n\n> During the fourth infusion I noticed warmth, a light feeling, and sustained attention. The session was also caffeinated, and individual responses vary.\n\nInstead of:\n\n> The golden color proves a perfect extraction.\n\nTry:\n\n> This recipe produced a clear gold cup with floral aroma, gentle grip, and a long sweet finish.\n\nSpecific sensory language is not less poetic. It is more shareable because another drinker can compare it with their own experience.\n\nTea can be moving without becoming a miracle claim. Drink for flavor, attention, craft, and company. Let unusual feelings remain reportable, discussable, and bounded by care."
      }
    ],
    "sourceLinks": [
      {
        "label": "NCCIH — Tea",
        "url": "https://www.nccih.nih.gov/health/tea"
      },
      {
        "label": "FDA — Spilling the Beans: How Much Caffeine Is Too Much?",
        "url": "https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much"
      },
      {
        "label": "Caffeine content of brewed teas",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19007524/"
      },
      {
        "label": "Systematic review: tea, L-theanine, caffeine, cognition, sleep, and mood",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12422004/"
      }
    ],
    "imageKey": "b12",
    "imageBrief": "Quiet evening tea session with several small infusion cups, water carafe, a plate with a simple snack, and an open tasting notebook showing only abstract marks. Human hands resting rather than gesturing euphorically. Warm clear light; no intoxication tropes, medical symbols, or claims in text.",
    "altText": "Several small cups, water, food, and a tasting notebook during a calm tea session.",
    "socialExcerpts": [
      "‘Tea drunk’ names a subjective experience. It does not prove one mechanism.",
      "Dilution changes caffeine concentration per sip—not the extracted total in the pot.",
      "Specific sensory language keeps the wonder and loses the miracle claim."
    ]
  }
] satisfies BlogPost[];
