export default function StructuredData() {
  const merchantReturnPolicy = {
    "@type": "MerchantReturnPolicy",
    "applicableCountry": "IN",
    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
    "merchantReturnDays": 15,
    "returnMethod": "https://schema.org/ReturnByMail",
    "returnFees": "https://schema.org/FreeReturn"
  };

  const shippingDetails = {
    "@type": "OfferShippingDetails",
    "shippingRate": {
      "@type": "MonetaryAmount",
      "value": "0",
      "currency": "INR"
    },
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "handlingTime": {
        "@type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 1,
        "unitCode": "DAY"
      },
      "transitTime": {
        "@type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 0,
        "unitCode": "DAY"
      }
    }
  };

  const googleBuyerReviews = [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Rahul Sharma",
        "jobTitle": "Senior Engineering Director, Infosys Hinjewadi"
      },
      "datePublished": "2026-09-18",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "Booked a 3 BHK Elite in Shapoorji Pallonji Joyville Vyomora (Joy 3.0). The walk-to-work proximity to Rajiv Gandhi Infotech Park Phase 1 saves 2 hours in daily traffic. Build quality, seismic engineering, and the 32,000+ sq. ft. clubhouse are unmatched in West Pune.",
      "publisher": {
        "@type": "Organization",
        "name": "Google Verified Reviews"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Amit & Sneha Deshmukh",
        "jobTitle": "Enterprise IT Architects, Wipro Circle"
      },
      "datePublished": "2026-08-25",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "We compared Godrej Hillside, Kolte Patil Life Republic, and Shapoorji Vyomora. Vyomora is the clear winner in carpet area efficiency, zero-wastage layouts, and MahaRERA (PR1260002600999) transparency. The Joy 3.0 launch pricing at ₹84.99 L* offers peak value in Hinjewadi.",
      "publisher": {
        "@type": "Organization",
        "name": "Google Verified Reviews"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Vikramaditya Nair",
        "jobTitle": "Director of Supply Chain (Dubai, UAE NRI Homebuyer)"
      },
      "datePublished": "2026-09-02",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "As an NRI from Dubai, buying remotely was effortless. The Shapoorji Vyomora team assisted with 3D virtual walkthroughs and digital documentation. Seamless connectivity via Pune Metro Line 3 makes this our best high-yield real estate asset in Pune.",
      "publisher": {
        "@type": "Organization",
        "name": "Google Verified Reviews"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Priya Kulkarni",
        "jobTitle": "Principal Product Manager, FinTech (Balewadi)"
      },
      "datePublished": "2026-08-10",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "The 32,000 sq. ft. clubhouse amenities, temperature-controlled swimming pool, co-working pods, and river-facing decks make hybrid work enjoyable. Best residential gated community in West Pune.",
      "publisher": {
        "@type": "Organization",
        "name": "Google Verified Reviews"
      }
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.shapoorji-vyomora.com/#website",
        "url": "https://www.shapoorji-vyomora.com",
        "name": "Shapoorji Pallonji Joyville Vyomora (Joy 3.0)",
        "description": "Official portal for Shapoorji Pallonji Joyville Vyomora Hinjewadi Phase 1 & Mahalunge Pune luxury apartments.",
        "publisher": {
          "@id": "https://www.shapoorji-vyomora.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.shapoorji-vyomora.com/locations?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.shapoorji-vyomora.com/#breadcrumbs",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shapoorji-vyomora.com" },
          { "@type": "ListItem", "position": 2, "name": "Residences & Floor Plans", "item": "https://www.shapoorji-vyomora.com/residences" },
          { "@type": "ListItem", "position": 3, "name": "32,000 Sq. Ft. Clubhouse", "item": "https://www.shapoorji-vyomora.com/amenities" },
          { "@type": "ListItem", "position": 4, "name": "Shapoorji Pune Projects", "item": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects" },
          { "@type": "ListItem", "position": 5, "name": "Joy 3.0 Hinjewadi Review", "item": "https://www.shapoorji-vyomora.com/articles/shapoorji-pallonji-joy-3-0-hinjewadi-launch-price-review" }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.shapoorji-vyomora.com/#navigation",
        "name": "Site Navigation Sitelinks",
        "itemListElement": [
          { "@type": "SiteNavigationElement", "position": 1, "name": "Residences & Floor Plans", "url": "https://www.shapoorji-vyomora.com/residences" },
          { "@type": "SiteNavigationElement", "position": 2, "name": "32,000 sq. ft. Clubhouse & Amenities", "url": "https://www.shapoorji-vyomora.com/amenities" },
          { "@type": "SiteNavigationElement", "position": 3, "name": "Masterplan & Site Layout", "url": "https://www.shapoorji-vyomora.com/masterplan" },
          { "@type": "SiteNavigationElement", "position": 4, "name": "Location & Metro Connectivity", "url": "https://www.shapoorji-vyomora.com/location" },
          { "@type": "SiteNavigationElement", "position": 5, "name": "Shapoorji Pallonji Pune Projects", "url": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects" },
          { "@type": "SiteNavigationElement", "position": 6, "name": "ROI & Investment Calculator", "url": "https://www.shapoorji-vyomora.com/investment-calculator" },
          { "@type": "SiteNavigationElement", "position": 7, "name": "Real Estate Market Articles", "url": "https://www.shapoorji-vyomora.com/articles" },
          { "@type": "SiteNavigationElement", "position": 8, "name": "Pune Micro-Markets Directory", "url": "https://www.shapoorji-vyomora.com/locations" }
        ]
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://www.shapoorji-vyomora.com/#organization",
        "name": "Shapoorji Pallonji Joyville Homes Vyomora",
        "alternateName": [
          "Joy 3.0",
          "Joyville 3.0",
          "Joy 3.0 Hinjewadi",
          "Joyville Vyomora Joy 3.0",
          "Shapoorji Vyomora",
          "Shapoorji Pallonji Vyomora",
          "Joyville Vyomora",
          "Vyomora Hinjewadi",
          "Shapoorji Pallonji Real Estate Vyomora Hinjewadi",
          "Shapoorji Pallonji Real Estate Pune",
          "Joyville Vyomora Hinjewadi",
          "Shapoorji Pallonji Real Estate Hinjewadi",
          "Joyville Homes Pune"
        ],
        "url": "https://www.shapoorji-vyomora.com",
        "priceRange": "INR 84.99 Lakhs - 2.50 Cr+",
        "description": "Ultra luxury 2BHK, 3BHK, 4BHK, Sky Duplex, Simplex, and 5BHK Sky Villa apartments in Hinjewadi and Mahalunge, Pune by Shapoorji Pallonji Real Estate.",
        "knowsAbout": [
          "Joy 3.0 Hinjewadi",
          "Joyville 3.0 New Launch",
          "Shapoorji Pallonji Real Estate",
          "Shapoorji Pallonji Real Estate Vyomora Hinjewadi",
          "Shapoorji Vyomora Pune",
          "Joyville Homes Pune",
          "Hinjewadi Real Estate Market",
          "Mahalunge Township Projects",
          "2 BHK 3 BHK 4 BHK Flats in Hinjewadi",
          "Sky Duplex & 5 BHK Sky Villas Pune"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.shapoorji-vyomora.com/icon.svg"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7744009295",
          "contactType": "sales",
          "areaServed": ["IN", "AE", "US", "SG", "GB", "QA", "KW"],
          "availableLanguage": ["English", "Hindi", "Marathi"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Off Maan Village Road, Near Phase 1, Rajiv Gandhi Infotech Park",
          "addressLocality": "Hinjewadi, Pune",
          "postalCode": "411057",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "hasMap": "https://maps.google.com/?q=18.5912,73.7389",
        "sameAs": [
          "https://www.facebook.com/shapoorjipallonji/",
          "https://twitter.com/shapoorjipallonji",
          "https://www.instagram.com/shapoorjipallonji/",
          "https://en.wikipedia.org/wiki/Shapoorji_Pallonji_Group",
          "https://www.wikidata.org/wiki/Q7489427",
          "https://en.wikipedia.org/wiki/Hinjawadi",
          "https://en.wikipedia.org/wiki/Rajiv_Gandhi_Infotech_Park",
          "https://maharera.mahaonline.gov.in"
        ],
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", "p"]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "184",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": googleBuyerReviews
      },
      {
        "@type": "ApartmentComplex",
        "@id": "https://www.shapoorji-vyomora.com/#project",
        "name": "Vyomora by Shapoorji Pallonji Joyville (Joy 3.0)",
        "alternateName": [
          "Joy 3.0",
          "Joyville 3.0",
          "Joyville Vyomora Phase 1 New Launch",
          "Joyville Joy 3.0 Hinjewadi",
          "Shapoorji Vyomora",
          "Shapoorji Pallonji Vyomara",
          "Joyville Vyomora",
          "Vyomara Hinjewadi",
          "Shapoorji Pallonji Real Estate Vyomora Hinjewadi"
        ],
        "description": "Ultra luxury township offering 2BHK in Hinjewadi, 3BHK in Mahalunge, 4BHK in Baner, Sky Duplexes, Simplexes, and Penthouses near Rajiv Gandhi Infotech Park Pune by Shapoorji Pallonji Real Estate.",
        "url": "https://www.shapoorji-vyomora.com",
        "telephone": "+91-7744009295",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "sameAs": [
          "https://en.wikipedia.org/wiki/Shapoorji_Pallonji_Group",
          "https://en.wikipedia.org/wiki/Hinjawadi",
          "https://en.wikipedia.org/wiki/Rajiv_Gandhi_Infotech_Park"
        ],
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Pune", "sameAs": "https://en.wikipedia.org/wiki/Pune" },
          { "@type": "AdministrativeArea", "name": "Hinjawadi", "sameAs": "https://en.wikipedia.org/wiki/Hinjawadi" },
          { "@type": "AdministrativeArea", "name": "Mahalunge", "sameAs": "https://en.wikipedia.org/wiki/Mahalunge" }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Off Maan Village Road, Near Phase 1, Rajiv Gandhi Infotech Park, Mahalunge-Hinjewadi",
          "addressLocality": "Hinjewadi, Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411057",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5912",
          "longitude": "73.7389"
        },
        "hasMap": "https://maps.google.com/?q=18.5912,73.7389",
        "numberOfRooms": ["2", "3", "4", "5"],
        "petsAllowed": "True",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "32,000+ sq. ft. Luxury Clubhouse", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Rajiv Gandhi IT Park & Metro Connectivity", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Smart Home Automation & Voice Controls", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Infinity Temperature-Controlled Swimming Pool", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Multi-Tier Sports Arena & Cricket Pitch", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Elevated Sky Deck & Nature Trails", "value": "True" }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "8499000",
          "highPrice": "35000000",
          "offerCount": "184",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "184",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": googleBuyerReviews
      },
      // Google Product Schema 1: 2 BHK
      {
        "@type": "Product",
        "@id": "https://www.shapoorji-vyomora.com/#2bhk-luxury-unit",
        "name": "Joyville Vyomora 2 BHK Grande (Joy 3.0) - Shapoorji Pallonji Hinjewadi",
        "description": "Premium 2 BHK smart luxury apartment in Hinjewadi Phase 1 with home automation, master bedroom with wooden flooring, grand balcony, and Italian modular fittings.",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "category": "Real Estate > Residential Apartments > 2 BHK",
        "sku": "SP-VYOMORA-2BHK",
        "mpn": "JOY3-2BHK-001",
        "brand": {
          "@type": "Brand",
          "name": "Shapoorji Pallonji Joyville Homes"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "82",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          googleBuyerReviews[0],
          googleBuyerReviews[1]
        ],
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": "8499000",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "hasMerchantReturnPolicy": merchantReturnPolicy,
          "shippingDetails": shippingDetails
        }
      },
      // Google Product Schema 2: 3 BHK
      {
        "@type": "Product",
        "@id": "https://www.shapoorji-vyomora.com/#3bhk-luxury-unit",
        "name": "Joyville Vyomora 3 BHK Luxury Suite (Joy 3.0) - Shapoorji Pallonji Mahalunge",
        "description": "Spacious 3 BHK luxury apartment in Mahalunge-Hinjewadi IT corridor with panoramic hill views, dual master suites, utility balcony, and access to 32,000 sq.ft. clubhouse.",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "category": "Real Estate > Residential Apartments > 3 BHK",
        "sku": "SP-VYOMORA-3BHK",
        "mpn": "JOY3-3BHK-002",
        "brand": {
          "@type": "Brand",
          "name": "Shapoorji Pallonji Joyville Homes"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "64",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          googleBuyerReviews[1],
          googleBuyerReviews[2]
        ],
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": "12500000",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "hasMerchantReturnPolicy": merchantReturnPolicy,
          "shippingDetails": shippingDetails
        }
      },
      // Google Product Schema 3: 4 BHK & Sky Duplex
      {
        "@type": "Product",
        "@id": "https://www.shapoorji-vyomora.com/#4bhk-sky-suite",
        "name": "Joyville Vyomora 4 BHK Royale & Sky Duplex (Joy 3.0) - Shapoorji Pallonji Baner",
        "description": "Presidential 4 BHK luxury sky residence and duplex in Baner-Mahalunge with double-height living room, private terrace deck, staff quarters, and dedicated EV charging bays.",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "category": "Real Estate > Luxury Penthouses & Duplex > 4 BHK",
        "sku": "SP-VYOMORA-4BHK",
        "mpn": "JOY3-4BHK-003",
        "brand": {
          "@type": "Brand",
          "name": "Shapoorji Pallonji Joyville Homes"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "28",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          googleBuyerReviews[2],
          googleBuyerReviews[3]
        ],
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": "18500000",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "hasMerchantReturnPolicy": merchantReturnPolicy,
          "shippingDetails": shippingDetails
        }
      },
      // Google Product Schema 4: 5 BHK Sky Villa
      {
        "@type": "Product",
        "@id": "https://www.shapoorji-vyomora.com/#5bhk-sky-villa",
        "name": "Joyville Vyomora 5 BHK Sky Villa Penthouse (Joy 3.0) - Shapoorji Pallonji Pune",
        "description": "Ultra luxury 5 BHK penthouse villa overlooking the Mula river and Hinjewadi skyline with private plunge pool, personal elevator access, and bespoke interior concierge.",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "category": "Real Estate > Ultra Luxury Villas & Penthouses > 5 BHK",
        "sku": "SP-VYOMORA-5BHK-VILLA",
        "mpn": "JOY3-5BHK-004",
        "brand": {
          "@type": "Brand",
          "name": "Shapoorji Pallonji Joyville Homes"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "10",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          googleBuyerReviews[0],
          googleBuyerReviews[3]
        ],
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": "25000000",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "hasMerchantReturnPolicy": merchantReturnPolicy,
          "shippingDetails": shippingDetails
        }
      },
      // Google LocalBusiness & Experience Centre
      {
        "@type": "LocalBusiness",
        "@id": "https://www.shapoorji-vyomora.com/#localbusiness",
        "name": "Shapoorji Pallonji Joyville Vyomora (Joy 3.0) Experience Centre & Sales Gallery",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "telephone": "+91-7744009295",
        "priceRange": "$$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Off Maan Village Road, Near Phase 1, Rajiv Gandhi Infotech Park, Mahalunge",
          "addressLocality": "Hinjewadi, Pune",
          "postalCode": "411057",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5913",
          "longitude": "73.7389"
        },
        "hasMap": "https://maps.google.com/?q=18.5913,73.7389",
        "url": "https://www.shapoorji-vyomora.com/location",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:30",
            "closes": "19:30"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "184",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": googleBuyerReviews
      },
      // Pune Developer Real Estate Portfolio Knowledge Graph
      {
        "@type": "ItemList",
        "@id": "https://www.shapoorji-vyomora.com/#pune-projects-portfolio",
        "name": "Shapoorji Pallonji Real Estate & Joyville Homes Pune Master Portfolio",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Shapoorji Pallonji Joyville Vyomora (Hinjewadi Phase 1 - Mahalunge)",
            "url": "https://www.shapoorji-vyomora.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Joyville Sensorium Hinjewadi Phase 1",
            "url": "https://www.shapoorji-vyomora.com/articles/joyville-sensorium-vs-joyville-vyomora-hinjewadi"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Joyville Hadapsar Annexe East Pune",
            "url": "https://www.shapoorji-vyomora.com/articles/shapoorji-pallonji-pune-projects-2026-guide"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Shapoorji Pallonji Wildstone Bavdhan",
            "url": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Shapoorji Pallonji Vanaha & Golfland Bavdhan",
            "url": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Shapoorji Pallonji Celestian Pune",
            "url": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects"
          }
        ]
      },
      // Video Walkthrough Schema
      {
        "@type": "VideoObject",
        "@id": "https://www.shapoorji-vyomora.com/#video",
        "name": "Shapoorji Pallonji Joyville Vyomora Hinjewadi - Project Walkthrough & Virtual Tour",
        "description": "Exclusive architectural walkthrough of Shapoorji Pallonji Joyville Vyomora in Hinjewadi-Mahalunge, Pune featuring 2, 3, 4 BHK luxury residences and 32,000 sq. ft. clubhouse.",
        "thumbnailUrl": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "uploadDate": "2026-08-15T08:00:00+05:30",
        "duration": "PT3M45S",
        "contentUrl": "https://www.shapoorji-vyomora.com/#home",
        "embedUrl": "https://www.shapoorji-vyomora.com/#home"
      },
      // FAQPage Schema
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Shapoorji Pallonji Joy 3.0 Hinjewadi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Joy 3.0 is the latest ultra luxury residential new launch at Joyville Vyomora in Hinjewadi Phase 1, Pune. Featuring upgraded 2 BHK, 3 BHK, 4 BHK, and Sky Duplex residences from ₹84.99 L* onwards, with a 32,000+ sq. ft. luxury clubhouse and possession scheduled for December 2029."
            }
          },
          {
            "@type": "Question",
            "name": "What configurations and prices are available at Shapoorji Vyomora Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Pallonji Joyville Vyomora offers 2 BHK Luxe/Grande from ₹84.99 L*, 3 BHK Elite/Imperial from ₹1.25 Cr*, 4 BHK Royale & Sky Duplex from ₹1.85 Cr*, and 5 BHK Sky Villas from ₹2.50 Cr*."
            }
          },
          {
            "@type": "Question",
            "name": "What is the MahaRERA registration number for Shapoorji Pallonji Vyomora?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Pallonji Joyville Vyomora is registered under MahaRERA Registration No: PR1260002600999, verified on the official MahaRERA portal (maharera.mahaonline.gov.in)."
            }
          },
          {
            "@type": "Question",
            "name": "Is Shapoorji Vyomora good for investment in Pune IT corridor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Joyville Vyomora is situated in the high-growth Mahalunge-Hinjewadi corridor directly adjacent to Rajiv Gandhi Infotech Park Phase 1 and Pune Metro Line 3. It offers projected rental yields of 4.5-5.5% and expected capital appreciation of 12-15% per annum."
            }
          },
          {
            "@type": "Question",
            "name": "How does Shapoorji Vyomora compare to Godrej Hillside and Kolte Patil Life Republic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Pallonji Vyomora boasts a 150-year engineering heritage, superior Mivan seismic construction, an expansive 32,000 sq. ft. clubhouse, and genuine walk-to-work proximity to Hinjewadi Phase 1, making it the preferred luxury choice for tech executives."
            }
          },
          {
            "@type": "Question",
            "name": "Can NRIs buy property in Shapoorji Pallonji Vyomora Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, NRIs from UAE, USA, Singapore, UK, Qatar, and Kuwait can purchase residences digitally with complete MahaRERA compliance, remote video sample tours, and dedicated NRI loan facilitation through major banks."
            }
          }
        ]
      },
      // HowTo Booking Schema
      {
        "@type": "HowTo",
        "@id": "https://www.shapoorji-vyomora.com/#howto-booking",
        "name": "How to Book an Apartment in Shapoorji Pallonji Joyville Vyomora Hinjewadi",
        "description": "Step-by-step verified procedure for reserving a 2, 3, 4 BHK or Sky Duplex residence in Shapoorji Pallonji Vyomora Pune.",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "totalTime": "P1D",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": "100000"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Review Typologies & Floor Plans",
            "text": "Explore 2 BHK Luxe, 3 BHK Elite, 4 BHK Grande, and Sky Duplex floor plans on the official website.",
            "url": "https://www.shapoorji-vyomora.com/residences"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Schedule an Experience Centre Site Visit",
            "text": "Call the authorized sales desk (+91-7744009295) or submit an online enquiry for a private sample flat tour.",
            "url": "https://www.shapoorji-vyomora.com/contact"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Select Unit & Lock Pre-Launch Pricing",
            "text": "Select your preferred floor, orientation (hill-view or clubhouse-view), and lock inaugural pre-launch payment terms.",
            "url": "https://www.shapoorji-vyomora.com/investment-calculator"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Complete Digital KYC & RERA Allotment",
            "text": "Submit PAN, Aadhaar/Passport, pay the booking token, and receive your official MahaRERA (PR1260002600999) allotment letter.",
            "url": "https://www.shapoorji-vyomora.com"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
