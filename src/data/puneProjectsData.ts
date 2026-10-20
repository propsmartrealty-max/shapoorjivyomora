export interface PuneProjectItem {
  id: string;
  slug: string;
  name: string;
  brand: "Joyville Homes" | "Shapoorji Pallonji Real Estate";
  tagline: string;
  badge: string;
  location: string;
  microMarket: "Hinjewadi" | "Maan" | "Mahalunge" | "Bavdhan" | "Hadapsar Annexe" | "Manjri";
  zone: "West Pune" | "East Pune";
  typologies: string[];
  carpetAreaRange: string;
  priceRange: string;
  startingPrice: string;
  mahaRera: string;
  reraRegistrationUrl: string;
  possessionTimeline: string;
  clubhouseArea: string;
  openSpacePercentage: string;
  amenitiesCount: string;
  heroHeadline: string;
  overview: string;
  architecturalHighlights: string[];
  keyAmenities: string[];
  connectivityHighlights: { destination: string; distance: string; time: string }[];
  floorPlanDetails: { typology: string; carpetArea: string; priceEstimate: string; features: string }[];
  faqs: { question: string; answer: string }[];
  seoKeywords: string[];
  metaTitle: string;
  metaDescription: string;
}

export const puneProjectsMasterList: PuneProjectItem[] = [
  {
    id: "vyomora",
    slug: "joyville-vyomora-hinjewadi",
    name: "Shapoorji Pallonji Joyville Vyomora (Joy 3.0)",
    brand: "Joyville Homes",
    tagline: "Flagship River-Facing Luxury Residences in Hinjewadi Phase 1",
    badge: "Joy 3.0 Flagship New Launch",
    location: "Off Maan Village Road, Hinjewadi Phase 1, Pune - 411057",
    microMarket: "Hinjewadi",
    zone: "West Pune",
    typologies: ["2 BHK Luxe", "2 BHK Grande", "3 BHK Luxury", "4 BHK Sky Duplex"],
    carpetAreaRange: "685 to 1,467+ sq. ft.",
    priceRange: "₹84.99 Lakhs to ₹2.16 Cr*",
    startingPrice: "₹84.99 Lakhs*",
    mahaRera: "PR1260002600999",
    reraRegistrationUrl: "https://maharera.mahaonline.gov.in",
    possessionTimeline: "December 2029",
    clubhouseArea: "32,000+ sq. ft.",
    openSpacePercentage: "78% Open & Landscaped Space",
    amenitiesCount: "40+ World-Class Amenities",
    heroHeadline: "Experience Joy 3.0 Luxury Living at Shapoorji Pallonji Joyville Vyomora Hinjewadi",
    overview: "Shapoorji Pallonji Joyville Vyomora (marketed as Joy 3.0) represents the pinnacle of residential master planning in West Pune. Spanning 25 acres along the tranquil Mula riverfront in Hinjewadi Phase 1, Vyomora balances intimate living with monumental community scale. Developed jointly under the prestigious Joyville Homes platform by Shapoorji Pallonji Real Estate, Actis, ADB, and IFC, Vyomora delivers meticulously engineered 2 BHK, 3 BHK, 4 BHK, and Sky Duplex apartments just 5 minutes from the Rajiv Gandhi Infotech Park and Pune Metro Line 3.",
    architecturalHighlights: [
      "Monumental 32,000+ sq. ft. multi-level luxury clubhouse with temperature-controlled indoor pool",
      "Serene Mula riverfront promenade with sunrise deck and jogging boulevard",
      "Biophilic architectural footprint with over 78% open green zones and landscaped parks",
      "State-of-the-art smart home automation with keyless entry, lighting controls, and sensor integration"
    ],
    keyAmenities: [
      "32,000+ sq. ft. Mega Clubhouse",
      "Infinity Temperature-Controlled Swimming Pool",
      "Full-Sized Cricket Pitch & Multi-Tier Sports Arena",
      "Co-Working Executive Lounge & High-Speed Wi-Fi Zones",
      "Pet Park & Dedicated Dog Agility Course",
      "Yoga & Meditation Deck along Eco-Deck Greenery",
      "Kids Play Zone with Rubberized Anti-Injury Flooring",
      "24x7 3-Tier Security with CCTV & Smart Visitor Management"
    ],
    connectivityHighlights: [
      { destination: "Rajiv Gandhi Infotech Park (Phase 1)", distance: "1.8 km", time: "5 mins" },
      { destination: "Upcoming Hinjewadi Metro Line 3 Station", distance: "1.2 km", time: "3 mins" },
      { destination: "Mumbai-Pune Expressway (Wakad Flyover)", distance: "4.5 km", time: "10 mins" },
      { destination: "Balewadi High Street Dining & Retail", distance: "7.5 km", time: "15 mins" },
      { destination: "Ruby Hall Clinic & Multi-Specialty Healthcare", distance: "5.0 km", time: "12 mins" },
      { destination: "Blue Ridge & Indira National Schools", distance: "3.5 km", time: "8 mins" }
    ],
    floorPlanDetails: [
      { typology: "2 BHK (LUXE)", carpetArea: "684.91 sq. ft.", priceEstimate: "₹84.99 L - ₹95.28 L*", features: "Efficient 2-bed layout with utility balcony and sunlit living room" },
      { typology: "2 BHK (GRANDE)", carpetArea: "780 - 785 sq. ft.", priceEstimate: "₹1.00 Cr - ₹1.09 Cr*", features: "Master bedroom with wooden finish flooring, wide river-facing balcony" },
      { typology: "3 BHK (SELECT)", carpetArea: "1,052 sq. ft.", priceEstimate: "₹1.32 Cr - ₹1.46 Cr*", features: "3 spacious bedrooms, dual master suites, cross-ventilation layout" },
      { typology: "3 BHK (IMPERIAL)", carpetArea: "1,184 - 1,186 sq. ft.", priceEstimate: "₹1.54 Cr - ₹1.70 Cr*", features: "Sprawling living-dining area with separate dry/wet kitchen setup" },
      { typology: "3/4 BHK SKY DUPLEX", carpetArea: "1,459 - 1,467 sq. ft.", priceEstimate: "₹1.89 Cr - ₹2.16 Cr*", features: "Double-height living room ceiling, private terrace, penthouse-style views" }
    ],
    faqs: [
      { question: "What is the MahaRERA number of Shapoorji Pallonji Joyville Vyomora?", answer: "Shapoorji Pallonji Joyville Vyomora (Joy 3.0) is registered under MahaRERA registration number PR1260002600999. Complete project disclosures are verifiable on the official MahaRERA portal (maharera.mahaonline.gov.in)." },
      { question: "Where is Joyville Vyomora located in Pune?", answer: "Joyville Vyomora is strategically located off Maan Village Road in Hinjewadi Phase 1, West Pune, right within the high-growth Mahalunge-Hinjewadi IT corridor, just 5 minutes from Infosys Circle and the upcoming Pune Metro Line 3 station." },
      { question: "What are the available configurations and prices at Vyomora?", answer: "Joyville Vyomora offers 2 BHK Luxe (685 sq. ft.) from ₹84.99 Lakhs*, 2 BHK Grande (785 sq. ft.) from ₹1.00 Cr*, 3 BHK residences (1,052 - 1,186 sq. ft.) from ₹1.32 Cr*, and 3/4 BHK Sky Duplexes (1,467 sq. ft.) from ₹1.89 Cr*." },
      { question: "What clubhouse and sports amenities are provided at Vyomora?", answer: "Vyomora features one of West Pune's largest residential clubhouses spanning over 32,000 sq. ft., featuring an indoor infinity pool, cricket pitch, squash court, gymnasium, executive co-working pods, and landscaped eco-deck trails." },
      { question: "How does Joyville Vyomora compare to Joyville Sensorium?", answer: "While Joyville Sensorium focuses on 5D sensory biophilic living with 2.8 acres of sensory park, Joyville Vyomora (Joy 3.0) is the newer flagship launch offering larger 4 BHK and Sky Duplex typologies, an expansive 32,000 sq. ft. clubhouse, and riverfront promenade views." }
    ],
    seoKeywords: [
      "Shapoorji Vyomora Hinjewadi", "Joyville Homes Hinjewadi", "Shapoorji Pune", "Vyomora Hinjewadi", "Joyville Vyomora Hinjewadi",
      "Shapoorji Pallonji Joyville Vyomora", "Joyville Vyomora", "Joyville Vyomora Pune",
      "Joy 3.0 Hinjewadi", "Joyville 3.0 Pune", "Shapoorji Vyomora price", "Joyville Vyomora floor plan",
      "Joyville Vyomora 2 BHK price", "Joyville Vyomora 3 BHK price", "Joyville Vyomora 4 BHK price",
      "Joyville Vyomora sky duplex", "Joyville Vyomora MahaRERA", "Joyville Vyomora brochure PDF",
      "Joyville Vyomora site visit", "Shapoorji Pallonji Hinjewadi Phase 1", "flats near Hinjewadi IT Park"
    ],
    metaTitle: "Shapoorji Vyomora Hinjewadi | Joyville Homes Hinjewadi (Joy 3.0)",
    metaDescription: "Official project portal for Shapoorji Vyomora Hinjewadi by Joyville Homes & Shapoorji Pallonji Pune. 2, 3 & 4 BHK residences & sky duplexes from ₹84.99 L* with 32,000+ sq.ft. clubhouse. MahaRERA: PR1260002600999."
  },
  {
    id: "sensorium",
    slug: "joyville-sensorium",
    name: "Shapoorji Pallonji Joyville Sensorium",
    brand: "Joyville Homes",
    tagline: "Tech-Forward Biophilic Living Near Hinjewadi IT Park",
    badge: "Tech-Forward Landmark",
    location: "Maan Road, Near Hinjewadi Phase 1, West Pune - 411057",
    microMarket: "Hinjewadi",
    zone: "West Pune",
    typologies: ["2 BHK Smart", "2 BHK Luxury", "3 BHK Grande"],
    carpetAreaRange: "700 to 1,050 sq. ft.",
    priceRange: "₹75 Lakhs to ₹1.25 Cr*",
    startingPrice: "₹75 Lakhs*",
    mahaRera: "P52100024965, P52100027244",
    reraRegistrationUrl: "https://maharera.mahaonline.gov.in",
    possessionTimeline: "Phased Handover 2025 - 2027",
    clubhouseArea: "22,000 sq. ft.",
    openSpacePercentage: "75% Open Greenery",
    amenitiesCount: "35+ Multi-Sensory Amenities",
    heroHeadline: "Experience Multi-Sensory Biophilic Living at Joyville Sensorium Hinjewadi",
    overview: "Joyville Sensorium by Shapoorji Pallonji is West Pune's premier biophilic residential project. Spanning over 10 acres in Hinjewadi Phase 1, Sensorium is engineered around the 5 senses, featuring a 2.8-acre central park, an interactive sound-and-aroma garden, rhythm walkway, and infinity edge pool. Sensorium includes renowned tower editions such as Elation, Vista, Ambrosia, Auris, Prisma, Spectra, Signia, Iris, and Helius, catering specifically to IT professionals seeking a live-work-play sanctuary.",
    architecturalHighlights: [
      "2.8-acre central multi-sensory park integrating sensory flora, water mirrors, and aroma trails",
      "Tower phases including Sensorium Elation, Vista, Ambrosia, and Helius with grand entrance lobbies",
      "Comprehensive walk-to-work proximity for Hinjewadi IT hubs like Wipro, Infosys, and Cognizant",
      "Cross-ventilated floor plans designed to maximize natural morning sunlight and valley airflow"
    ],
    keyAmenities: [
      "22,000 sq. ft. Fully Equipped Clubhouse",
      "Infinity Edge Swimming Pool & Kids Splash Pool",
      "Sensory Reflexology Garden & Aroma Walkways",
      "Outdoor Amphitheatre & Community Screening Lawn",
      "Tennis, Badminton & Futsal Multi-Courts",
      "Dedicated Indoor Work Pods & Co-Working Conference Room",
      "High-Speed EV Charging Stations for Electric Vehicles",
      "24x7 Multi-Tier Surveillance & Controlled Access"
    ],
    connectivityHighlights: [
      { destination: "Infosys Circle & IT Park Phase 1", distance: "2.0 km", time: "6 mins" },
      { destination: "Upcoming Hinjewadi Metro Station", distance: "1.5 km", time: "4 mins" },
      { destination: "Pune-Bangalore National Highway", distance: "5.5 km", time: "12 mins" },
      { destination: "Balewadi Sports Complex", distance: "8.0 km", time: "16 mins" },
      { destination: "D-Mart & Xion Mall Hinjewadi", distance: "3.2 km", time: "8 mins" }
    ],
    floorPlanDetails: [
      { typology: "2 BHK Smart", carpetArea: "700 sq. ft.", priceEstimate: "₹75 L - ₹82 L*", features: "Optimized 2 BHK design tailored for young IT engineers" },
      { typology: "2 BHK Luxury", carpetArea: "780 sq. ft.", priceEstimate: "₹85 L - ₹94 L*", features: "Large living area, utility space, premium vitrified tiles" },
      { typology: "3 BHK Grande", carpetArea: "1,050 sq. ft.", priceEstimate: "₹1.15 Cr - ₹1.25 Cr*", features: "Master bedroom suite, dual balconies with sensory park views" }
    ],
    faqs: [
      { question: "What are the sub-phases in Joyville Sensorium?", answer: "Joyville Sensorium features several distinct tower editions including Sensorium Elation, Sensorium Vista, Ambrosia, Auris, Prisma, Spectra, Signia, Iris, and Helius, each with specific configurations and MahaRERA certifications." },
      { question: "What is the MahaRERA number for Joyville Sensorium?", answer: "Joyville Sensorium phases are registered under MahaRERA numbers P52100024965 and P52100027244 with verified disclosures on the MahaRERA website." },
      { question: "Is Joyville Sensorium close to Rajiv Gandhi IT Park?", answer: "Yes, Joyville Sensorium is located on Maan Road in Hinjewadi Phase 1, less than 2 km from Infosys Circle, Wipro, TCS, and the upcoming Metro Line 3." }
    ],
    seoKeywords: [
      "Joyville Sensorium", "Shapoorji Pallonji Joyville Sensorium", "Joyville Sensorium Hinjewadi", "Joyville Sensorium price",
      "Joyville Sensorium 2 BHK", "Joyville Sensorium 3 BHK", "Joyville Sensorium floor plan", "Sensorium Elation Hinjewadi",
      "Sensorium Vista Hinjewadi", "Joyville Sensorium reviews", "Joyville Sensorium MahaRERA", "Joyville Sensorium possession date"
    ],
    metaTitle: "Joyville Sensorium Hinjewadi | Shapoorji Pallonji Pune",
    metaDescription: "Explore Joyville Sensorium by Shapoorji Pallonji in Hinjewadi Phase 1. Premium 2 & 3 BHK biophilic apartments near Rajiv Gandhi IT Park with 2.8-acre sensory park. Prices from ₹75 L*."
  },
  {
    id: "vanaha",
    slug: "shapoorji-pallonji-vanaha",
    name: "Shapoorji Pallonji Vanaha",
    brand: "Shapoorji Pallonji Real Estate",
    tagline: "1,000+ Acre Nature Valley Township Near Bavdhan, West Pune",
    badge: "1000+ Acre Mega Township",
    location: "Near Bavdhan, Oxford Golf Course Road, West Pune - 411021",
    microMarket: "Bavdhan",
    zone: "West Pune",
    typologies: ["1 BHK", "2 BHK", "3 BHK", "4 BHK Luxury", "Valley Townhouses"],
    carpetAreaRange: "500 to 2,200+ sq. ft.",
    priceRange: "₹55 Lakhs to ₹3.80 Cr+*",
    startingPrice: "₹55 Lakhs*",
    mahaRera: "P52100028033",
    reraRegistrationUrl: "https://maharera.mahaonline.gov.in",
    possessionTimeline: "Phased Deliveries 2025 - 2028",
    clubhouseArea: "50,000+ sq. ft. Total Township Amenities",
    openSpacePercentage: "Over 80% Forest & Open Greenery",
    amenitiesCount: "90+ Township Amenities",
    heroHeadline: "Live in Harmony with Nature at Shapoorji Pallonji Vanaha Bavdhan",
    overview: "Shapoorji Pallonji Vanaha is one of India's largest integrated valley townships, spanning over 1,000 acres near Bavdhan in West Pune. Bordered by the Western Ghats and adjoining the championship Oxford Golf Course, Vanaha is home to over 50,000 indigenous trees, natural freshwater streams, and an unpolluted micro-climate. The township encompasses residential clusters such as Vanaha Springs, Vanaha Verdant, and the marquee Vanaha Golfland, offering an unmatched nature-led lifestyle just minutes from Chandani Chowk and Kothrud.",
    architecturalHighlights: [
      "Master-planned 1,000+ acre ecosystem with protected nature zones and valley vistas",
      "Direct proximity to Oxford Golf Resort featuring an 18-hole championship course",
      "Low-density footprint with panoramic green horizons and perennial water bodies",
      "Comprehensive infrastructure with internal wide boulevards, schools, healthcare, and retail high street"
    ],
    keyAmenities: [
      "Grand Township Multi-Level Clubhouses",
      "Championship Golf Course Access & Driving Range",
      "Forest Trekking Trails & Bird Watching Pavilions",
      "Olympic-Length Lap Pool & Heated Leisure Pool",
      "Equestrian & Horse Riding Tracks Nearby",
      "Organic Farming Zones & Community Orchards",
      "Multi-Tier Sports Academies for Cricket & Football",
      "24x7 Emergency Healthcare Clinic & Ambulance Station"
    ],
    connectivityHighlights: [
      { destination: "Chandani Chowk Kothrud Junction", distance: "6.5 km", time: "12 mins" },
      { destination: "Mumbai-Bangalore Highway (NH-48)", distance: "5.0 km", time: "10 mins" },
      { destination: "Hinjewadi IT Park via Western Bypass", distance: "14 km", time: "22 mins" },
      { destination: "Pune University Circle", distance: "15 km", time: "25 mins" },
      { destination: "Oxford Golf Resort & Country Club", distance: "1.0 km", time: "2 mins" }
    ],
    floorPlanDetails: [
      { typology: "1 BHK Valley Flat", carpetArea: "500 sq. ft.", priceEstimate: "₹55 L - ₹62 L*", features: "Compact, peaceful forest-facing home ideal for rental income" },
      { typology: "2 BHK Nature Suite", carpetArea: "750 - 820 sq. ft.", priceEstimate: "₹82 L - ₹95 L*", features: "Wide balcony looking out onto lush green tree canopies" },
      { typology: "3 BHK Premium", carpetArea: "1,120 sq. ft.", priceEstimate: "₹1.25 Cr - ₹1.45 Cr*", features: "Corner residence with 3 sides open and double deck balconies" },
      { typology: "4 BHK / Townhouse", carpetArea: "1,850 - 2,200 sq. ft.", priceEstimate: "₹2.20 Cr - ₹3.80 Cr+*", features: "Expansive luxury villa/duplex with private gardens and valley views" }
    ],
    faqs: [
      { question: "Where is Shapoorji Pallonji Vanaha located?", answer: "Vanaha is located near Bavdhan in West Pune, along the Oxford Golf Course Road, accessible seamlessly from Chandani Chowk, Kothrud, and the Mumbai-Bangalore Highway." },
      { question: "What is the difference between Vanaha and Golfland?", answer: "Vanaha is the overarching 1,000+ acre mega township. Golfland is the ultra-luxury golf-course-facing enclave within Vanaha, offering premium golf-view apartments and townhouses." },
      { question: "What is the MahaRERA number for Shapoorji Pallonji Vanaha?", answer: "Vanaha's primary phases are registered under MahaRERA number P52100028033, with separate disclosures for specific sub-clusters on the MahaRERA portal." }
    ],
    seoKeywords: [
      "Shapoorji Pallonji Vanaha", "Vanaha Pune", "Vanaha Bavdhan", "Shapoorji Pallonji Vanaha Bavdhan",
      "Vanaha price list", "Vanaha floor plan", "Vanaha brochure", "Vanaha township master plan",
      "Vanaha Pune 2 BHK flats", "Vanaha Pune 3 BHK flats", "flats near Oxford Golf Resort", "residential projects Bavdhan"
    ],
    metaTitle: "Shapoorji Pallonji Vanaha Bavdhan | 1000+ Acre Township Pune",
    metaDescription: "Discover Shapoorji Pallonji Vanaha near Bavdhan Pune. 1, 2, 3 & 4 BHK forest-facing apartments in a 1,000-acre valley township adjoining Oxford Golf Resort. Prices from ₹55 L*."
  },
  {
    id: "golfland",
    slug: "vanaha-golfland",
    name: "Vanaha Golfland at Bavdhan",
    brand: "Shapoorji Pallonji Real Estate",
    tagline: "Exclusive Golf-Course-Facing Residences in West Pune",
    badge: "Golf-Course-Facing Homes",
    location: "Vanaha Township, Near Oxford Golf Course, Bavdhan, Pune - 411021",
    microMarket: "Bavdhan",
    zone: "West Pune",
    typologies: ["2 BHK Golf View", "3 BHK Golf View", "4 BHK Sky Suite", "Golfland Duplex"],
    carpetAreaRange: "850 to 2,100+ sq. ft.",
    priceRange: "₹1.15 Cr to ₹3.50 Cr*",
    startingPrice: "₹1.15 Cr*",
    mahaRera: "P52100030012, P52100030014",
    reraRegistrationUrl: "https://maharera.mahaonline.gov.in",
    possessionTimeline: "December 2026 - 2028",
    clubhouseArea: "35,000 sq. ft. Private Golf Club",
    openSpacePercentage: "85% Open Green & Fairway Views",
    amenitiesCount: "50+ Elite Amenities",
    heroHeadline: "Unrivalled Fairway Living at Vanaha Golfland by Shapoorji Pallonji",
    overview: "Vanaha Golfland is Pune's ultimate golf-side luxury residential community. Located within the sprawling 1,000-acre Vanaha township near Bavdhan, Golfland offers direct, unhindered vistas of the internationally acclaimed 18-hole Oxford Golf Course. Conceived for senior business leaders, golf enthusiasts, and NRI investors, Golfland combines opulent high-rise architecture with sweeping fairways, private infinity pools, golf lounges, and expansive sundecks.",
    architecturalHighlights: [
      "Perched on an elevated ridge overlooking lush golf fairways and valley greens",
      "Extra-wide sun decks and panoramic floor-to-ceiling glass fenestrations",
      "Double-height air-conditioned residential arrival lobbies with concierge services",
      "Direct cart connectivity to Oxford Golf Resort club facilities and dining pavilions"
    ],
    keyAmenities: [
      "Exclusive Golf Clubhouse & Cigar Lounge",
      "Putting Green & Golf Simulator Suite",
      "Heated Sky Pool Overlooking the Fairways",
      "Private Wine Tasting Cellar & Banquet Terrace",
      "State-of-the-Art Wellness Spa & Hydrotherapy Suites",
      "Personalized Valet Parking & EV Charging Bays",
      "High-Security Gated Perimeter with Biometric Access"
    ],
    connectivityHighlights: [
      { destination: "Oxford Golf Course Greens", distance: "0.2 km", time: "1 min" },
      { destination: "Chandani Chowk Metro & Highway Hub", distance: "6.0 km", time: "11 mins" },
      { destination: "Kothrud Commercial District", distance: "8.5 km", time: "15 mins" },
      { destination: "Baner - Balewadi High Street", distance: "13 km", time: "20 mins" }
    ],
    floorPlanDetails: [
      { typology: "2 BHK Golf View", carpetArea: "850 sq. ft.", priceEstimate: "₹1.15 Cr - ₹1.28 Cr*", features: "Fairway view deck, large dining alcove, Italian vitrified flooring" },
      { typology: "3 BHK Luxury Fairway", carpetArea: "1,250 sq. ft.", priceEstimate: "₹1.65 Cr - ₹1.95 Cr*", features: "Dual golf-view balconies, master suite with walk-in closet space" },
      { typology: "4 BHK Sky Suite", carpetArea: "1,750 sq. ft.", priceEstimate: "₹2.40 Cr - ₹2.85 Cr*", features: "Panoramic 270-degree golf course views, servant quarters" },
      { typology: "Duplex Townhouse", carpetArea: "2,100 sq. ft.", priceEstimate: "₹3.10 Cr - ₹3.50 Cr*", features: "Two-level private villa lifestyle, double-height ceiling, private lawn" }
    ],
    faqs: [
      { question: "Do all apartments at Golfland face the golf course?", answer: "Golfland is master-planned so that primary living rooms and master bedroom balconies enjoy direct or panoramic views of the adjacent Oxford Golf Course and valley greens." },
      { question: "What are the MahaRERA numbers for Vanaha Golfland?", answer: "Vanaha Golfland phases are registered under MahaRERA numbers P52100030012 and P52100030014, verified on the Maharashtra Real Estate Regulatory Authority portal." }
    ],
    seoKeywords: [
      "Vanaha Golfland", "Shapoorji Pallonji Golfland Pune", "Golfland at Vanaha Bavdhan", "Vanaha Golfland price",
      "Vanaha Golfland floor plan", "golf course facing apartments Pune", "golf view apartments Bavdhan",
      "Golfland Pune 3 BHK price", "Golfland Pune 4 BHK price", "Golfland Pune MahaRERA"
    ],
    metaTitle: "Vanaha Golfland Bavdhan | Golf View Apartments Pune",
    metaDescription: "Experience luxury golf-side living at Vanaha Golfland by Shapoorji Pallonji near Bavdhan. 2, 3 & 4 BHK residences with direct 18-hole golf course views. Prices from ₹1.15 Cr*."
  },
  {
    id: "hadapsar",
    slug: "joyville-hadapsar-annexe",
    name: "Shapoorji Pallonji Joyville Hadapsar Annexe",
    brand: "Joyville Homes",
    tagline: "East Pune's Premier 21-Acre Gated Mega Township",
    badge: "East Pune Mega Township",
    location: "Shewalewadi - Manjri, Off Pune-Solapur Highway, East Pune - 412307",
    microMarket: "Hadapsar Annexe",
    zone: "East Pune",
    typologies: ["1 BHK Smart", "2 BHK Joy", "3 BHK Grande"],
    carpetAreaRange: "430 to 890 sq. ft.",
    priceRange: "₹45 Lakhs to ₹95 Lakhs*",
    startingPrice: "₹45 Lakhs*",
    mahaRera: "P52100026451, P52100026452",
    reraRegistrationUrl: "https://maharera.mahaonline.gov.in",
    possessionTimeline: "Phased Handover 2025 - 2027",
    clubhouseArea: "35,000 sq. ft. Total Club Amenities",
    openSpacePercentage: "8.8+ Acres of Central Landscaping",
    amenitiesCount: "60+ Lifestyle Amenities",
    heroHeadline: "Celebrate Big Life at Joyville Hadapsar Annexe by Shapoorji Pallonji",
    overview: "Joyville Hadapsar Annexe is a landmark 21-acre gated residential township developed by Shapoorji Pallonji in East Pune. Situated near Shewalewadi and Manjri off the Pune-Solapur Highway, the project is purpose-built for working families and professionals employed in SP Infocity (Phursungi), Magarpatta City, and Amanora. Featuring 8.8 acres of central park greenery, multiple themed clubhouses, and over 60 lifestyle amenities, Hadapsar Annexe is one of Pune's highest-performing rental yield assets.",
    architecturalHighlights: [
      "Massive 21-acre masterplan with 8.8 acres dedicated exclusively to vehicular-free green parklands",
      "High-efficiency apartment layouts engineered for zero space wastage and maximum usable carpet",
      "Dedicated lifestyle amenities including wave pool, skating rink, and open-air amphitheatre",
      "Immediate arterial connectivity to Pune-Solapur Highway, Ring Road, and Hadapsar Railway Station"
    ],
    keyAmenities: [
      "Master Clubhouse with Multipurpose Hall & Gymnasium",
      "Unique Kids Wave Pool & Olympic-Inspired Lap Pool",
      "Cricket Pitch with Bowling Machine & Tennis Courts",
      "Skating Rink, Jogging Tracks & Cycling Boulevard",
      "Acupressure Walkways & Senior Citizen Reflexology Zone",
      "Co-Working Hub with High-Speed Internet Connectivity",
      "Convenience Retail Shopping Plaza within Township Gates",
      "24x7 Security Surveillance & Advanced Boom Barriers"
    ],
    connectivityHighlights: [
      { destination: "SP Infocity IT SEZ (Phursungi)", distance: "5.5 km", time: "10 mins" },
      { destination: "Magarpatta Cybercity", distance: "8.5 km", time: "18 mins" },
      { destination: "Amanora Town Centre & Seasons Mall", distance: "8.0 km", time: "16 mins" },
      { destination: "Hadapsar Gliding Centre & Bus Stand", distance: "6.0 km", time: "12 mins" },
      { destination: "Pune International Airport (Lohegaon)", distance: "16 km", time: "30 mins" }
    ],
    floorPlanDetails: [
      { typology: "1 BHK Joy", carpetArea: "430 sq. ft.", priceEstimate: "₹45 L - ₹50 L*", features: "Smart layout ideal for young IT couples or rental investment" },
      { typology: "2 BHK Smart", carpetArea: "619 sq. ft.", priceEstimate: "₹65 L - ₹72 L*", features: "Functional 2 BHK layout with balcony overlooking 8.8-acre central park" },
      { typology: "2 BHK Grande", carpetArea: "729 sq. ft.", priceEstimate: "₹76 L - ₹84 L*", features: "Larger master bedroom, utility space, premium bathroom fittings" },
      { typology: "3 BHK Luxury", carpetArea: "890 sq. ft.", priceEstimate: "₹88 L - ₹95 L*", features: "Full 3-bedroom residence with private foyer and panoramic greenery" }
    ],
    faqs: [
      { question: "What is the location advantage of Joyville Hadapsar Annexe?", answer: "Joyville Hadapsar Annexe is located in Shewalewadi/Manjri, offering quick 10-15 minute access to major employment hubs like SP Infocity, Magarpatta City, and Amanora Mall." },
      { question: "What are the MahaRERA numbers for Joyville Hadapsar Annexe?", answer: "Joyville Hadapsar Annexe phases are registered under MahaRERA numbers P52100026451 and P52100026452." },
      { question: "What is the rental yield potential at Hadapsar Annexe?", answer: "Due to high tenant demand from over 100,000 tech employees in SP Infocity and Magarpatta, Hadapsar Annexe delivers solid rental yields typically ranging between 4.5% to 5.5% annually." }
    ],
    seoKeywords: [
      "Joyville Hadapsar Annexe", "Shapoorji Pallonji Joyville Hadapsar", "Joyville Hadapsar Annexe Pune",
      "Joyville Hadapsar price", "Joyville Hadapsar floor plan", "Joyville Hadapsar 2 BHK",
      "flats near SP Infocity Phursungi", "flats near Magarpatta City", "residential projects Hadapsar Annexe"
    ],
    metaTitle: "Joyville Hadapsar Annexe Pune | Shapoorji Pallonji Township",
    metaDescription: "Explore Joyville Hadapsar Annexe by Shapoorji Pallonji in East Pune. 1, 2 & 3 BHK gated township flats near SP Infocity & Magarpatta with 8.8-acre park. Prices from ₹45 L*."
  },
  {
    id: "celestia",
    slug: "joyville-celestia",
    name: "Shapoorji Pallonji Joyville Celestia",
    brand: "Joyville Homes",
    tagline: "Contemporary Biophilic Residences at Hadapsar Annexe",
    badge: "Modern Biophilic High-Rise",
    location: "Manjri, Hadapsar Annexe, East Pune - 412307",
    microMarket: "Manjri",
    zone: "East Pune",
    typologies: ["2 BHK Delight", "3 BHK Grande", "Titan Tower Residences"],
    carpetAreaRange: "650 to 950 sq. ft.",
    priceRange: "₹62 Lakhs to ₹1.10 Cr*",
    startingPrice: "₹62 Lakhs*",
    mahaRera: "P52100052341",
    reraRegistrationUrl: "https://maharera.mahaonline.gov.in",
    possessionTimeline: "December 2027",
    clubhouseArea: "25,000 sq. ft. Dedicated Amenities",
    openSpacePercentage: "70% Open Space",
    amenitiesCount: "40+ Amenities",
    heroHeadline: "Elevate Everyday Living at Joyville Celestia Manjri Pune",
    overview: "Joyville Celestia is an exclusive residential sector within the broader Shapoorji Pallonji Hadapsar Annexe township in East Pune. Featuring the iconic Titan Tower, Celestia incorporates biophilic architecture, air purification green buffers, rooftop leisure lounges, and intelligent home designs. Celestia is tailored for modern families working in East Pune's IT and corporate corridors.",
    architecturalHighlights: [
      "Titan Tower signature high-rise architecture with sweeping sunrise views",
      "Biophilic elements integrating living green walls and micro-climate wind circulation",
      "Vastu-compliant apartment orientations with zero blind corridors"
    ],
    keyAmenities: [
      "Rooftop Viewing Gallery & Stargazing Deck",
      "Resort-Style Swimming Pool & Sunken Sun Loungers",
      "Modern Gymnasium with Crossfit Training Zone",
      "Indoor Squash & Badminton Courts",
      "Co-Working Pods with Video Conferencing Setup"
    ],
    connectivityHighlights: [
      { destination: "SP Infocity IT Park", distance: "6.0 km", time: "11 mins" },
      { destination: "Magarpatta Cybercity", distance: "9.0 km", time: "19 mins" },
      { destination: "Amanora Park Town", distance: "8.5 km", time: "17 mins" }
    ],
    floorPlanDetails: [
      { typology: "2 BHK Delight", carpetArea: "650 sq. ft.", priceEstimate: "₹62 L - ₹70 L*", features: "Compact, well-ventilated 2-bed design" },
      { typology: "3 BHK Grande", carpetArea: "950 sq. ft.", priceEstimate: "₹92 L - ₹1.10 Cr*", features: "Master bedroom suite with premium sanitary fittings" }
    ],
    faqs: [
      { question: "What is Titan Tower at Joyville Celestia?", answer: "Titan Tower is the signature flagship high-rise tower within the Joyville Celestia sector, featuring enhanced specifications, expansive views, and exclusive rooftop amenities." },
      { question: "What is the MahaRERA number for Joyville Celestia?", answer: "Joyville Celestia is registered under MahaRERA number P52100052341." }
    ],
    seoKeywords: [
      "Joyville Celestia", "Shapoorji Pallonji Joyville Celestia", "Joyville Celestia Manjri Pune",
      "Joyville Celestia price", "Titan Tower Joyville Celestia", "flats in Manjri Pune"
    ],
    metaTitle: "Joyville Celestia Hadapsar Annexe | Shapoorji Pallonji Pune",
    metaDescription: "Discover Joyville Celestia by Shapoorji Pallonji in Manjri, Hadapsar Annexe. 2 & 3 BHK biophilic residences featuring Titan Tower near SP Infocity. Prices from ₹62 L*."
  },
  {
    id: "wildernest",
    slug: "wildernest-sp-kingstown",
    name: "Wildernest at SP Kingstown",
    brand: "Shapoorji Pallonji Real Estate",
    tagline: "Exclusive Private Deck Forest Homes at SP Kingstown",
    badge: "Private Deck Forest Residences",
    location: "SP Kingstown, Manjri - Hadapsar Annexe, East Pune - 412307",
    microMarket: "Hadapsar Annexe",
    zone: "East Pune",
    typologies: ["3 BHK Private Deck", "4 BHK Luxury Deck Suites"],
    carpetAreaRange: "1,050 to 1,650+ sq. ft.",
    priceRange: "₹1.10 Cr to ₹2.25 Cr*",
    startingPrice: "₹1.10 Cr*",
    mahaRera: "P52100051888",
    reraRegistrationUrl: "https://maharera.mahaonline.gov.in",
    possessionTimeline: "March 2028",
    clubhouseArea: "30,000 sq. ft. Grand Club",
    openSpacePercentage: "80% Landscaped Greens",
    amenitiesCount: "45+ Luxury Amenities",
    heroHeadline: "Unfiltered Nature & Grandeur at Wildernest at SP Kingstown",
    overview: "Wildernest is the ultra-luxury flagship residential enclave within the 200+ acre SP Kingstown mega development in Hadapsar Annexe, East Pune. Conceived by Shapoorji Pallonji Real Estate as a serene forest retreat, Wildernest offers oversized 3 & 4 BHK residences distinguished by expansive 100+ sq. ft. private sun decks, forest canopy views, Italian marble finishes, and exclusive private clubhouse memberships.",
    architecturalHighlights: [
      "Signature private sky decks extending the living room out into lush tree-lined canopies",
      "Low-density footprint with only 4 residences per floor and 3 high-speed elevators",
      "Triple-height grand entrance lobby with 5-star concierge desk",
      "Designed within the master-planned SP Kingstown infrastructure ecosystem"
    ],
    keyAmenities: [
      "Private Forest Clubhouse & Heated Infinity Pool",
      "Fine Dining Restaurant & Alfresco Cafe",
      "Private Screening Cinema Theatre for Residents",
      "Full Squash, Tennis & Pickleball Sports Courts",
      "Aromatherapy Herbal Gardens & Forest Meditation Deck"
    ],
    connectivityHighlights: [
      { destination: "SP Infocity IT Park", distance: "5.0 km", time: "9 mins" },
      { destination: "Magarpatta Cybercity", distance: "8.0 km", time: "16 mins" },
      { destination: "Pune Railway Station", distance: "13 km", time: "25 mins" }
    ],
    floorPlanDetails: [
      { typology: "3 BHK Private Deck", carpetArea: "1,050 - 1,220 sq. ft.", priceEstimate: "₹1.10 Cr - ₹1.45 Cr*", features: "Private deck terrace with panoramic greenery" },
      { typology: "4 BHK Luxury Suite", carpetArea: "1,450 - 1,650 sq. ft.", priceEstimate: "₹1.75 Cr - ₹2.25 Cr*", features: "Expansive 4-bed layout, dual decks, servant quarters" }
    ],
    faqs: [
      { question: "What is SP Kingstown in Pune?", answer: "SP Kingstown is Shapoorji Pallonji's landmark 200+ acre mega township in Manjri/Hadapsar Annexe, designed to include luxury residences, commercial office parks, retail avenues, and international schools." },
      { question: "What are the MahaRERA details for Wildernest?", answer: "Wildernest at SP Kingstown is registered under MahaRERA number P52100051888." }
    ],
    seoKeywords: [
      "Wildernest at SP Kingstown", "Shapoorji Pallonji Wildernest Pune", "SP Kingstown Pune",
      "Wildernest Hadapsar Annexe price", "Wildernest floor plan", "Wildernest 3 BHK", "Wildernest 4 BHK",
      "luxury apartments Hadapsar Annexe", "Shapoorji Pallonji Kingstown Manjri"
    ],
    metaTitle: "Wildernest at SP Kingstown | Shapoorji Pallonji Pune",
    metaDescription: "Discover Wildernest at SP Kingstown by Shapoorji Pallonji in Hadapsar Annexe. Ultra-luxury 3 & 4 BHK residences with private sky decks in East Pune. Prices from ₹1.10 Cr*."
  },
  {
    id: "sky-luxe",
    slug: "joyville-sky-luxe-edition",
    name: "Joyville Sky-Luxe Edition Hadapsar",
    brand: "Joyville Homes",
    tagline: "Boutique Penthouse & Sky Terrace Residences in East Pune",
    badge: "Sky-Luxe Edition",
    location: "Hadapsar Annexe, East Pune - 412307",
    microMarket: "Hadapsar Annexe",
    zone: "East Pune",
    typologies: ["3 BHK Sky-Luxe", "3 BHK Terrace Suite"],
    carpetAreaRange: "1,000 to 1,350 sq. ft.",
    priceRange: "₹1.05 Cr to ₹1.45 Cr*",
    startingPrice: "₹1.05 Cr*",
    mahaRera: "P52100026451",
    reraRegistrationUrl: "https://maharera.mahaonline.gov.in",
    possessionTimeline: "December 2026",
    clubhouseArea: "Township Club Access + Private Sky Lounge",
    openSpacePercentage: "75% Open Space",
    amenitiesCount: "50+ Amenities",
    heroHeadline: "Private Terrace Living at Joyville Sky-Luxe Edition Hadapsar",
    overview: "The Joyville Sky-Luxe Edition represents an elite collection of penthouse and sky-terrace residences situated atop the premier towers at Hadapsar Annexe. Featuring oversized private terraces, designer fixtures, low-density floor plates, and panoramic skyline vistas, the Sky-Luxe Edition is tailored for discerning buyers who demand boutique exclusivity within a fully serviced gated township.",
    architecturalHighlights: [
      "Top-tier residential floors with private terrace gardens",
      "Double-height sky lounge with private resident party deck",
      "Upgraded specifications including imported vitrified tiling and smart door locks"
    ],
    keyAmenities: [
      "Exclusive Sky Terrace Party Deck",
      "Access to 8.8-Acre Central Park",
      "Swimming Pool & Jacuzzi Loungers",
      "State-of-the-Art Health Club",
      "24x7 Valet & Concierge Services"
    ],
    connectivityHighlights: [
      { destination: "SP Infocity IT Park", distance: "5.5 km", time: "10 mins" },
      { destination: "Magarpatta City", distance: "8.5 km", time: "18 mins" }
    ],
    floorPlanDetails: [
      { typology: "3 BHK Sky-Luxe", carpetArea: "1,000 - 1,150 sq. ft.", priceEstimate: "₹1.05 Cr - ₹1.25 Cr*", features: "Private terrace garden, master suite with French windows" },
      { typology: "3 BHK Terrace Suite", carpetArea: "1,200 - 1,350 sq. ft.", priceEstimate: "₹1.28 Cr - ₹1.45 Cr*", features: "Expanded living space with wrap-around private deck" }
    ],
    faqs: [
      { question: "What is Joyville Sky-Luxe Edition?", answer: "Joyville Sky-Luxe Edition is an exclusive limited inventory of luxury 3 BHK sky residences and penthouses featuring private terraces within the Hadapsar Annexe township." }
    ],
    seoKeywords: [
      "Joyville Sky-Luxe Edition", "Shapoorji Pallonji Sky-Luxe Edition", "Joyville Sky-Luxe Hadapsar",
      "Joyville Sky-Luxe Edition price", "Joyville Sky-Luxe 3 BHK", "luxury flats in Hadapsar Annexe"
    ],
    metaTitle: "Joyville Sky-Luxe Edition Hadapsar | Shapoorji Pallonji",
    metaDescription: "Experience private terrace living at Joyville Sky-Luxe Edition by Shapoorji Pallonji in Hadapsar Annexe. 3 BHK sky residences with private decks from ₹1.05 Cr*."
  },
  {
    id: "hinjewadi-classic",
    slug: "joyville-hinjewadi",
    name: "Shapoorji Pallonji Joyville Hinjewadi",
    brand: "Joyville Homes",
    tagline: "The Benchmark for Modern Living in Rajiv Gandhi IT Park",
    badge: "Pioneer IT Township",
    location: "Maan Road, Hinjewadi Phase 1, Pune - 411057",
    microMarket: "Hinjewadi",
    zone: "West Pune",
    typologies: ["1 BHK Smart", "2 BHK Prime", "2 BHK Luxury"],
    carpetAreaRange: "450 to 720 sq. ft.",
    priceRange: "₹52 Lakhs to ₹85 Lakhs*",
    startingPrice: "₹52 Lakhs*",
    mahaRera: "P52100018510",
    reraRegistrationUrl: "https://maharera.mahaonline.gov.in",
    possessionTimeline: "Ready to Move & Resale / Rapid Possession",
    clubhouseArea: "20,000 sq. ft. Clubhouse",
    openSpacePercentage: "75% Open Greenery",
    amenitiesCount: "30+ Amenities",
    heroHeadline: "Established Community Living at Joyville Hinjewadi Phase 1",
    overview: "Joyville Hinjewadi was the pioneer project that established the Joyville brand in Pune. Located in Hinjewadi Phase 1 near Maan Road, it has evolved into a bustling, vibrant gated community of thousands of tech families. With strong resale demand and exceptional rental yields from the adjacent IT corridor, Joyville Hinjewadi remains an evergreen benchmark for smart West Pune real estate investment.",
    architecturalHighlights: [
      "Proven master planning with ready-to-use club and sports infrastructure",
      "Walk-to-work lifestyle for IT professionals working in Phase 1 & 2",
      "High tenant retention and strong capital appreciation track record"
    ],
    keyAmenities: [
      "Operational Luxury Clubhouse & Swimming Pool",
      "Gymnasium, Aerobics & Yoga Rooms",
      "Children's Play Parks & Sand Pits",
      "Multi-Purpose Sports Court for Tennis & Basketball",
      "On-Site Daily Grocery & Convenience Mart"
    ],
    connectivityHighlights: [
      { destination: "Hinjewadi IT Park Phase 1", distance: "1.5 km", time: "4 mins" },
      { destination: "Infosys Circle", distance: "2.0 km", time: "5 mins" }
    ],
    floorPlanDetails: [
      { typology: "1 BHK Smart", carpetArea: "450 sq. ft.", priceEstimate: "₹52 L - ₹58 L*", features: "Compact, high-rental-yield unit" },
      { typology: "2 BHK Luxury", carpetArea: "680 - 720 sq. ft.", priceEstimate: "₹74 L - ₹85 L*", features: "Well-ventilated living room with master suite" }
    ],
    faqs: [
      { question: "Is Joyville Hinjewadi ready to move?", answer: "Yes, Joyville Hinjewadi has delivered multiple ready-to-move phases with active residents, making both primary and resale inventory highly sought after." },
      { question: "What is the rental return in Joyville Hinjewadi?", answer: "Rental yields in Joyville Hinjewadi range between 4.8% and 6.0% due to ongoing demand from IT professionals in Phase 1." }
    ],
    seoKeywords: [
      "Joyville Hinjewadi", "Shapoorji Pallonji Joyville Hinjewadi", "Joyville Hinjewadi price",
      "Joyville Hinjewadi resale flats", "Joyville Hinjewadi rental apartments", "flats in Hinjewadi Phase 1"
    ],
    metaTitle: "Joyville Hinjewadi Phase 1 | Shapoorji Pallonji Pune",
    metaDescription: "Discover Joyville Hinjewadi by Shapoorji Pallonji in Hinjewadi Phase 1. 1 & 2 BHK ready and resale apartments near Rajiv Gandhi IT Park with proven rental returns from ₹52 L*."
  },
  {
    id: "verdant",
    slug: "vanaha-verdant",
    name: "Shapoorji Pallonji Vanaha Verdant & Mahogany",
    brand: "Shapoorji Pallonji Real Estate",
    tagline: "Nature-Facing Sanctuary with Mahogany Luxury Specifications",
    badge: "Nature-Led Luxury",
    location: "Vanaha Township, Bavdhan, Pune - 411021",
    microMarket: "Bavdhan",
    zone: "West Pune",
    typologies: ["2 BHK Nature", "3 BHK Verdant", "Mahogany Luxury Suites"],
    carpetAreaRange: "750 to 1,200 sq. ft.",
    priceRange: "₹82 Lakhs to ₹1.55 Cr*",
    startingPrice: "₹82 Lakhs*",
    mahaRera: "P52100030012",
    reraRegistrationUrl: "https://maharera.mahaonline.gov.in",
    possessionTimeline: "December 2026",
    clubhouseArea: "Township Club Access",
    openSpacePercentage: "80% Forest Views",
    amenitiesCount: "40+ Amenities",
    heroHeadline: "Forest-Facing Tranquility at Vanaha Verdant & Mahogany",
    overview: "Vanaha Verdant is a pristine nature-facing residential cluster within the 1,000-acre Vanaha valley township near Bavdhan. Designed around lush deciduous forest canopies, Verdant includes the premium Mahogany wing, offering upgraded luxury specifications, large viewing decks, acoustic glass glazing, and direct access to Vanaha's nature trails and club amenities.",
    architecturalHighlights: [
      "Forest-facing apartment orientation with zero road noise or urban glare",
      "Mahogany tower collection with Italian marble flooring in living areas",
      "Energy-efficient sustainable architecture certified green building"
    ],
    keyAmenities: [
      "Valley Club Access & Forest Infinity Pool",
      "Canopy Walkway & Birdwatching Pavilion",
      "Zen Meditation Gardens & Waterfall Fountains",
      "State-of-the-Art Gymnasium & Yoga Hall"
    ],
    connectivityHighlights: [
      { destination: "Chandani Chowk Kothrud", distance: "6.2 km", time: "11 mins" },
      { destination: "Oxford Golf Course", distance: "1.2 km", time: "3 mins" }
    ],
    floorPlanDetails: [
      { typology: "2 BHK Nature", carpetArea: "750 sq. ft.", priceEstimate: "₹82 L - ₹94 L*", features: "Forest-facing balcony and cross ventilation" },
      { typology: "3 BHK Mahogany", carpetArea: "1,150 sq. ft.", priceEstimate: "₹1.35 Cr - ₹1.55 Cr*", features: "Mahogany premium finishes and dual view decks" }
    ],
    faqs: [
      { question: "What is Vanaha Verdant Mahogany?", answer: "Mahogany is the signature luxury tower within the Vanaha Verdant cluster, featuring upgraded interior specifications, marble flooring, and panoramic forest views." }
    ],
    seoKeywords: [
      "Vanaha Verdant", "Shapoorji Pallonji Vanaha Verdant", "Vanaha Verdant Bavdhan",
      "Vanaha Verdant Mahogany", "Vanaha Verdant price", "flats in Bavdhan Pune"
    ],
    metaTitle: "Vanaha Verdant & Mahogany Bavdhan | Shapoorji Pallonji",
    metaDescription: "Explore Vanaha Verdant and Mahogany by Shapoorji Pallonji in Bavdhan. 2 & 3 BHK forest-facing luxury residences within 1,000-acre valley township. Prices from ₹82 L*."
  },
  {
    id: "springs",
    slug: "vanaha-springs",
    name: "Shapoorji Pallonji Vanaha Springs",
    brand: "Shapoorji Pallonji Real Estate",
    tagline: "Natural Spring-Facing Residences in Bavdhan Valley",
    badge: "Valley Springs Living",
    location: "Vanaha Township, Near Oxford Golf Resort, Bavdhan, Pune - 411021",
    microMarket: "Bavdhan",
    zone: "West Pune",
    typologies: ["1 BHK", "2 BHK Springs", "3 BHK Springs"],
    carpetAreaRange: "520 to 1,080 sq. ft.",
    priceRange: "₹60 Lakhs to ₹1.30 Cr*",
    startingPrice: "₹60 Lakhs*",
    mahaRera: "P52100028033",
    reraRegistrationUrl: "https://maharera.mahaonline.gov.in",
    possessionTimeline: "December 2026",
    clubhouseArea: "Township Club Access",
    openSpacePercentage: "80% Open Greenery",
    amenitiesCount: "40+ Amenities",
    heroHeadline: "Live Along Natural Water Springs at Vanaha Springs Bavdhan",
    overview: "Vanaha Springs is situated along natural valley water bodies and perennial mountain streams within the Vanaha mega township in Bavdhan. Conceived for wellness, relaxation, and biophilic living, Springs offers 1, 2, and 3 BHK homes with serene water-facing balconies, reflexology pathways, sensory gardens, and immediate access to the Oxford Golf Resort.",
    architecturalHighlights: [
      "Positioned directly beside preserved natural freshwater springs and cascades",
      "Wide balconies oriented towards sunrise and soothing water soundscapes",
      "Low-maintenance eco-friendly construction with solar water heating"
    ],
    keyAmenities: [
      "Springside Walking Promenade & Deck",
      "Infinity Swimming Pool & Children's Wading Pool",
      "Multi-Sport Courts & Outdoor Gym",
      "Community Amphitheatre & Bonfire Deck"
    ],
    connectivityHighlights: [
      { destination: "Chandani Chowk", distance: "6.0 km", time: "11 mins" },
      { destination: "Mumbai-Pune Expressway", distance: "7.0 km", time: "13 mins" }
    ],
    floorPlanDetails: [
      { typology: "1 BHK", carpetArea: "520 sq. ft.", priceEstimate: "₹60 L - ₹68 L*", features: "Compact, nature-led layout" },
      { typology: "2 BHK Springs", carpetArea: "760 sq. ft.", priceEstimate: "₹85 L - ₹95 L*", features: "Spring-view living room and master bedroom" },
      { typology: "3 BHK Springs", carpetArea: "1,080 sq. ft.", priceEstimate: "₹1.15 Cr - ₹1.30 Cr*", features: "Spacious corner layout with 3 balconies" }
    ],
    faqs: [
      { question: "What is unique about Vanaha Springs?", answer: "Vanaha Springs is designed around natural flowing water springs within the 1,000-acre Vanaha township, providing an extraordinary sense of calm and unpolluted air quality." }
    ],
    seoKeywords: [
      "Vanaha Springs", "Shapoorji Pallonji Vanaha Springs", "Vanaha Springs Bavdhan",
      "Vanaha Springs price", "Vanaha Springs floor plan", "apartments near Bavdhan Pune"
    ],
    metaTitle: "Vanaha Springs Bavdhan | Shapoorji Pallonji Pune",
    metaDescription: "Discover Vanaha Springs by Shapoorji Pallonji near Bavdhan Pune. 1, 2 & 3 BHK spring-facing valley apartments within 1,000-acre township. Prices from ₹60 L*."
  }
];
