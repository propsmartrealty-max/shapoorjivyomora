export const SEOLocations = [
  // Core Pune Hubs & Micro-Markets
  "hinjewadi", "mahalunge", "baner", "wakad", "balewadi",
  "pimpri-chinchwad", "aundh", "pashan", "bavdhan", "bavdhan-valley", "oxford-golf-resort", "sus",
  "punawale", "tathawade", "ravet", "kothrud", "shivaji-nagar",
  "viman-nagar", "kalyani-nagar", "koregaon-park", "kharadi", "magarpatta",
  "hadapsar", "hadapsar-annexe", "manjri", "phursungi", "wagholi", "pune-west", "pune-east", "pune-mumbai-highway", 
  
  // IT Corridor Granular Hubs & Roads
  "hinjewadi-phase-1", "hinjewadi-phase-2", "hinjewadi-phase-3", 
  "rajiv-gandhi-infotech-park", "maan-road", "marunji", "marunji-road", "infosys-circle-hinjewadi", 
  "wipro-circle-hinjewadi", "wipro-hinjewadi", "tcs-hinjewadi", "tech-mahindra-hinjewadi", "cognizant-hinjewadi", 
  "hinjewadi-metro", "bhumkar-chowk", "wakad-bridge", "baner-pashan-link-road", 
  "balewadi-high-street", "sus-road", "bavdhan-khurd", "tathawade-ravet-corridor",
  "mahalunge-township", "baner-road", "pune-ring-road", "mumbai-pune-expressway-corridor",

  // Broader Pune Limits
  "pune", "pcmc", "pune-city", "mumbai-pune-expressway",
  "bhosari", "chakan", "talegaon", "akurdi", "nigdi", "mukai-chowk",
  "kiwale", "pune-it-corridor", "pune-real-estate-market"
];

// Global NRI Targeting
export const SEONRILocations = [
  "dubai", "usa", "singapore", "uk", "london", "kuwait", "qatar", 
  "uae", "nri-investors", "foreign-investment", "global-investors", 
  "nri-real-estate-india", "nri-property-investment", "california-nri"
];

export const SEOConfigurations = [
  // Developer & Platform Brand Permutations
  "shapoorji-pallonji-pune", "shapoorji-pallonji-projects", "shapoorji-pallonji-real-estate",
  "joyville-homes", "joyville-homes-pune",
  
  // Project-Specific Permutations
  "joyville-vyomora", "joy-3.0-hinjewadi", "joyville-sensorium", "shapoorji-vanaha",
  "vanaha-golfland", "joyville-hadapsar-annexe", "joyville-celestia", "wildernest-sp-kingstown",
  "vanaha-verdant", "vanaha-springs", "golf-course-facing-homes", "river-facing-apartments",

  // Typology & Configuration Permutations
  "2bhk-in-hinjewadi", "3bhk-in-mahalunge", "4bhk-in-baner", "4bhk-in-mahalunge",
  "sky-duplex", "simplex-luxury-homes", "5bhk-sky-villas", "penthouses",
  "2bhk-flats", "3bhk-apartments", "4bhk-luxury-homes", "duplex-penthouses",
  "2-bhk-premium-flats", "3-bhk-luxury-flats", "4-bhk-premium-apartments",
  "luxury-sky-villas", "premium-residential-projects", "new-launch-projects",
  "under-construction-projects", "ready-to-move-flats", "luxury-townships",
  "premium-gated-communities", "luxury-real-estate", "spacious-balcony-flats", 
  "smart-home-apartments", "luxury-apartments", "premium-flats", "premium-homes", 
  "family-apartments", "luxury-lifestyle-apartments", "investment-property", 
  "residential-property", "best-residential-projects", "top-luxury-apartments", 
  "buy-flat", "buy-apartment", "buy-2-bhk", "buy-3-bhk", "best-flats-for-it-professionals",
  "high-roi-investment"
];

export const SEOTopics = [
  "price-trends", "price-list", "floor-plans", "masterplan", "amenities", "connectivity",
  "investment-roi", "real-estate-reviews", "location-benefits", "brochure-download",
  "site-visit", "nri-investment", "stamp-duty-registration", "home-loan-offers",
  "possession-date", "construction-update", "project-specifications",
  "rera-details", "builder-reputation", "resale-value", "capital-appreciation",
  "rental-yield", "top-schools-nearby", "future-infrastructure", "vs-godrej", 
  "vs-kolte-patil", "vs-lodha", "best-builder", "top-builders", "property-investment", 
  "real-estate-investment", "future-growth", "high-appreciation", "contact-number", 
  "payment-plan", "sample-flat-video", "best-area-to-buy-flat", "urban-lifestyle", 
  "sustainable-living", "clubhouse", "vs-joyville-sensorium", "vs-joyville-hadapsar",
  "vs-shapoorji-wildstone", "shapoorji-pallonji-pune-projects", "joyville-homes-pune",
  "cost-sheet", "all-projects-in-pune", "official-website", "sales-office", "property-enquiry"
];

// Complete Curated & Historical High-Intent Combinations for Static Pre-Rendering
import marketCombosData from "@/data/marketCombos.json";
export const TOP_CURATED_MARKET_COMBOS = marketCombosData as { location: string; configuration: string; topic: string }[];

function pseudoRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function generateSEOContent(location: string, configuration: string, topic: string) {
  const cleanLocation = location.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const cleanConfig = configuration.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const cleanTopic = topic.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  
  const seed = `${location}-${configuration}-${topic}`;
  const hash = pseudoRandom(seed);

  // Intelligent Entity Detection
  const isVanaha = configuration.includes("vanaha") || configuration.includes("golfland") || location.includes("bavdhan");
  const isSensorium = configuration.includes("sensorium");
  const isHadapsar = configuration.includes("hadapsar") || configuration.includes("celestia") || configuration.includes("wildernest") || location.includes("hadapsar") || location.includes("manjri");
  const isDeveloperBrand = configuration.includes("shapoorji") || configuration.includes("joyville");

  let p1 = "";
  let p2 = "";
  let title = "";
  let description = "";
  let h1 = "";
  let faqs = [
    { question: "", answer: "" },
    { question: "", answer: "" }
  ];

  if (isVanaha) {
    title = `${cleanConfig} in ${cleanLocation} | ${cleanTopic} | Shapoorji Pallonji Vanaha Bavdhan`;
    description = `Official guide to ${cleanConfig} at Shapoorji Pallonji Vanaha and Golfland in ${cleanLocation}. Explore ${cleanTopic}, 1000-acre green valley living, golf course views, and MahaRERA details.`;
    h1 = `Shapoorji Pallonji Vanaha & Golfland ${cleanLocation}: ${cleanConfig} & ${cleanTopic}`;
    p1 = `Shapoorji Pallonji Vanaha in ${cleanLocation} represents one of Pune's grandest master-planned township developments, nestled within a 1,000-acre green valley near the prestigious Oxford Golf Resort. Buyers evaluating ${cleanConfig} can discover a lifestyle defined by clean mountain air, sweeping views of the Sahyadri hills, and seamless access to the Mumbai-Bangalore Highway and Chandani Chowk. Vanaha's premium enclave, Vanaha Golfland, offers signature golf-course-facing residences, townhouses, and duplexes designed with high ceiling heights and expansive sundecks.`;
    p2 = `When evaluating ${cleanTopic} for ${cleanConfig} in ${cleanLocation}, Shapoorji Pallonji provides unmatched transparency with dedicated MahaRERA registrations (P52100024372 and P52100030012). From the nature-centric Vanaha Verdant and Vanaha Springs to the elite Golfland luxury towers, every phase integrates biophilic architecture, international-standard clubhouses, sports arenas, and 24x7 gated security. Schedule your private site visit or request the complete cost sheet and floor plans today.`;
    faqs = [
      {
        question: `What is the starting price and RERA number for Shapoorji Vanaha in Bavdhan?`,
        answer: `Shapoorji Pallonji Vanaha Bavdhan residences start from ₹55 Lakhs* for 1 and 2 BHKs, with luxury golf-facing residences at Golfland starting from ₹1.35 Cr*. The project is registered under MahaRERA registration numbers P52100024372 and P52100030012.`
      },
      {
        question: `How does Vanaha Bavdhan compare to Joyville Hinjewadi?`,
        answer: `Vanaha Bavdhan emphasizes serene 1000-acre green valley living, nature trails, and golf views near Kothrud, ideal for families seeking peace and clean air. Joyville Hinjewadi (Vyomora and Sensorium) prioritizes walk-to-work proximity to Rajiv Gandhi IT Park and Pune Metro Line 3.`
      }
    ];
  } else if (isSensorium) {
    title = `${cleanConfig} at Joyville Sensorium Hinjewadi | ${cleanTopic} | Shapoorji Pallonji Pune`;
    description = `Explore ${cleanConfig} at Joyville Sensorium in Hinjewadi Phase 1. Discover 2.8 acres of sensory park living, 5D theme amenities, ${cleanTopic}, and verified MahaRERA P52100024965 details.`;
    h1 = `Joyville Sensorium Hinjewadi: ${cleanConfig} Analysis & ${cleanTopic}`;
    p1 = `Joyville Sensorium by Shapoorji Pallonji Real Estate is Hinjewadi Phase 1's landmark tech-forward development. Spanning across 10.5 acres with 2.8 acres dedicated exclusively to a multi-sensory park, Sensorium engages all five human senses through rhythm walkways, floral scents, therapy gardens, and acoustic water cascades. For IT executives seeking ${cleanConfig} in ${cleanLocation}, Sensorium delivers unprecedented walk-to-work convenience to major IT campuses including Infosys, Wipro, and Cognizant.`;
    p2 = `Analyzing ${cleanTopic} at Joyville Sensorium reveals exceptional capital appreciation and rental yield prospects (projected at 4.8% to 5.4% per annum). Featuring iconic residential towers such as Elation, Vista, Ambrosia, Iris, and Aurum, the project offers smart home automation, high-speed elevators, and a 25,000 sq. ft. sensory clubhouse under MahaRERA registration number P52100024965. Connect with our dedicated Hinjewadi sales desk to review live resale inventory and new launch releases.`;
    faqs = [
      {
        question: `What makes Joyville Sensorium Hinjewadi unique?`,
        answer: `Joyville Sensorium features 2.8 acres of continuous multi-sensory central park with over 75% open landscaped greenery, interactive 5D wellness features, and immediate walking proximity to Rajiv Gandhi Infotech Park Phase 1.`
      },
      {
        question: `What are the typical configurations and prices at Sensorium?`,
        answer: `Joyville Sensorium offers luxury 2 BHK and 3 BHK apartments ranging from 700 to 1,050 sq. ft. carpet area, with pricing spanning from ₹75 Lakhs to ₹1.25 Cr*. MahaRERA registration: P52100024965.`
      }
    ];
  } else if (isHadapsar) {
    title = `${cleanConfig} at Joyville Hadapsar Annexe & Celestia | ${cleanTopic} | East Pune`;
    description = `Comprehensive guide to ${cleanConfig} at Joyville Hadapsar Annexe, Celestia, and Wildernest at SP Kingstown. Verified ${cleanTopic}, MahaRERA P52100026451, and SP Infocity proximity.`;
    h1 = `Joyville Hadapsar Annexe & East Pune: ${cleanConfig} Guide & ${cleanTopic}`;
    p1 = `Joyville Hadapsar Annexe by Shapoorji Pallonji Real Estate is East Pune's premier mega-township, sprawling across 21+ acres with 8.8 acres dedicated to continuous central greens. Located in the high-growth Manjri-Hadapsar corridor, this development serves professionals working at SP Infocity, Magarpatta Cybercity, and EON IT Park Kharadi. Discerning buyers evaluating ${cleanConfig} in ${cleanLocation} will benefit from over 60+ world-class lifestyle amenities and vehicular-free pedestrian boulevards.`;
    p2 = `Within this thriving East Pune ecosystem, Shapoorji Pallonji has also introduced Joyville Celestia (featuring the landmark Titan Tower) and Wildernest at SP Kingstown (forest-themed luxury residences). Examining ${cleanTopic} demonstrates robust rental returns averaging 4.5%–5.2% annually and low ticket-size entry from ₹43 Lakhs*. All phases operate under strict MahaRERA governance (P52100026451 and P52100031522). Request the consolidated East Pune price list and schedule your private site visit today.`;
    faqs = [
      {
        question: `Where is Joyville Hadapsar Annexe located and what is its starting price?`,
        answer: `Joyville Hadapsar Annexe is strategically located in Manjri, off the Pune-Solapur Highway, just 10 minutes from SP Infocity and Magarpatta City. Homes start from ₹43 Lakhs* for 1 BHK and ₹68 Lakhs* for 2 BHKs. MahaRERA: P52100026451.`
      },
      {
        question: `What are Joyville Celestia and Wildernest at SP Kingstown?`,
        answer: `Joyville Celestia and Wildernest represent luxury high-rise extensions within the SP Kingstown township in Hadapsar Annexe, offering upgraded 2, 3 & 4 BHK forest-themed homes and exclusive clubhouse privileges.`
      }
    ];
  } else if (isDeveloperBrand) {
    title = `${cleanConfig} | ${cleanLocation} Real Estate | ${cleanTopic} | Shapoorji Pallonji Pune`;
    description = `Discover ${cleanConfig} in ${cleanLocation}. Explore the complete 150-year legacy of Shapoorji Pallonji Real Estate and Joyville Homes in Pune with detailed ${cleanTopic} and pricing.`;
    h1 = `Shapoorji Pallonji Real Estate & Joyville Homes: ${cleanConfig} in ${cleanLocation}`;
    p1 = `Shapoorji Pallonji Real Estate represents over 150 years of world-class construction heritage, delivering iconic architectural landmarks globally and shaping Pune's real estate transformation. Across West and East Pune, the developer's residential portfolio encompasses Joyville Vyomora (Joy 3.0 Hinjewadi Phase 1), Joyville Sensorium, Vanaha Bavdhan, Vanaha Golfland, Joyville Hadapsar Annexe, and Wildernest at SP Kingstown. For buyers researching ${cleanConfig} in ${cleanLocation}, Shapoorji Pallonji delivers unmatched structural engineering with aluminium Mivan formwork and IGBC green building certifications.`;
    p2 = `Analyzing ${cleanTopic} across the Shapoorji Pallonji and Joyville Homes portfolio illustrates a track record of transparent customer service, statutory escrow account security, and superior capital appreciation. Supported by institutional partners including Actis (UK), the Asian Development Bank (ADB), and the International Finance Corporation (IFC), Joyville homes ensure timely delivery and world-class clubhouse amenities. Explore verified floor plans, live pricing schedules, and VIP site visit bookings across Pune.`;
    faqs = [
      {
        question: `What projects does Shapoorji Pallonji have in Pune?`,
        answer: `Shapoorji Pallonji's Pune portfolio includes Joyville Vyomora (Joy 3.0 Hinjewadi), Joyville Sensorium (Hinjewadi Phase 1), Vanaha & Golfland (Bavdhan), Joyville Hadapsar Annexe, Joyville Celestia, Wildernest at SP Kingstown, and the SP Infocity commercial campus in Phursungi.`
      },
      {
        question: `What is the price range of Shapoorji Pallonji homes in Pune?`,
        answer: `Prices range from ₹43 Lakhs* for 1 BHK residences at Hadapsar Annexe, ₹84.99 Lakhs* for 2 BHK luxury residences at Joyville Vyomora Hinjewadi, up to ₹2.16 Cr* for signature Sky Duplexes and Golfland townhouses in Bavdhan.`
      }
    ];
  } else {
    // Default Hinjewadi / Vyomora Core Context
    title = `${cleanConfig} in ${cleanLocation} | ${cleanTopic} | Shapoorji Pallonji Vyomora Pune`;
    description = `Explore premium ${cleanConfig} in ${cleanLocation}. In-depth insights on ${cleanTopic} at Shapoorji Pallonji Joyville Vyomora Hinjewadi Phase 1, West Pune's flagship luxury riverfront township.`;
    h1 = `Discover ${cleanConfig} in ${cleanLocation}: Complete Guide & ${cleanTopic}`;
    p1 = `The Pune Real Estate Market in ${cleanLocation} and the Mahalunge-Hinjewadi growth corridor is witnessing record demand for ${cleanConfig}. Shapoorji Pallonji Joyville Vyomora (Joy 3.0) represents the flagship luxury benchmark in West Pune, spanning 25 acres along the serene Mula riverfront just 5 minutes from Rajiv Gandhi Infotech Park Phase 1 and the upcoming Pune Metro Line 3 station.`;
    p2 = `When examining ${cleanTopic} for ${cleanConfig} in ${cleanLocation}, Vyomora stands apart with its monumental 32,000+ sq. ft. multi-level clubhouse, temperature-controlled indoor pool, and premium 2 BHK, 3 BHK, 4 BHK, and double-height Sky Duplexes. All residences are registered under MahaRERA registration number PR1260002600999 with scheduled possession for December 2029. Schedule an exclusive VIP site visit or download the official brochure today.`;
    faqs = [
      {
        question: `Why is ${cleanLocation} the top destination for ${cleanConfig}?`,
        answer: `${cleanLocation} offers prime transit connectivity to the Mumbai-Pune Expressway, Baner, and the Rajiv Gandhi IT corridor, coupled with high rental yields (4.5%–5.5%) driven by 300+ multinational technology employers.`
      },
      {
        question: `How does Shapoorji Vyomora compare to other developments in West Pune?`,
        answer: `Joyville Vyomora offers larger 2, 3, 4 BHK and Sky Duplex carpet areas, a massive 32,000+ sq. ft. clubhouse, direct riverfront promenade frontage, and the backing of Shapoorji Pallonji's 150-year engineering heritage.`
      }
    ];
  }

  return { title, description, h1, p1, p2, faqs };
}
