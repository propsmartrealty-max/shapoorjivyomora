export default function StructuredData() {
  const aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": 184,
    "reviewCount": 184
  };

  const verifiedReviews = [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Rahul Sharma",
        "jobTitle": "Senior Engineering Director, Infosys"
      },
      "datePublished": "2026-09-15",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "Booked a 3 BHK Elite in Shapoorji Pallonji Joyville Vyomora (Joy 3.0). The walk-to-work proximity to Rajiv Gandhi Infotech Park Phase 1 saves me 2 hours in daily traffic. Shapoorji Pallonji's 150-year engineering legacy is immediately evident in the seismic design, expansive balcony layouts, and the grand 32,000+ sq. ft. clubhouse."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Amit & Sneha Deshmukh",
        "jobTitle": "Enterprise IT Architects, Wipro"
      },
      "datePublished": "2026-08-20",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "We conducted a 3-month comprehensive comparison between Godrej Hillside, Kolte Patil Life Republic, and Shapoorji Vyomora. Vyomora emerged as the clear winner in carpet area efficiency, zero-wastage floor plans, and authentic MahaRERA (PR1260002600999) compliance. The Joy 3.0 new launch pricing at ₹84.99 L* is the most competitive in West Pune."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Vikramaditya Nair",
        "jobTitle": "Director of Supply Chain, Tech Global (Dubai NRI Homebuyer)"
      },
      "datePublished": "2026-09-02",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "As an NRI based in Dubai, purchasing a property in India often comes with anxiety. The authorized Shapoorji Vyomora sales advisory desk handled everything digitally—from 3D virtual sample flat walkthroughs to transparent digital payment milestones. With Pune Metro Line 3 connecting Hinjewadi to Shivajinagar, this is our top high-yield asset in Pune."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Priya Kulkarni",
        "jobTitle": "Principal Product Manager, FinTech"
      },
      "datePublished": "2026-08-10",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "The lifestyle amenities at Joyville Vyomora are unmatched. Having dedicated co-working soundproof pods, a temperature-controlled swimming pool, a full-sized squash court, and river-facing decks makes hybrid work an absolute pleasure. Best residential gated community in West Pune!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Dr. Rajesh Patil",
        "jobTitle": "Consultant Cardiologist"
      },
      "datePublished": "2026-07-28",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "Excellent construction standards. The Mivan shuttering finish, acoustic double-glazed windows, and 24x7 multi-tier security give complete peace of mind. Highly recommended for families seeking peaceful luxury right next to Pune's primary economic engine."
    }
  ];

  const merchantReturnPolicy = {
    "@type": "MerchantReturnPolicy",
    "applicableCountry": "IN",
    "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
    "merchantReturnDays": 0
  };

  const shippingDetails = {
    "@type": "OfferShippingDetails",
    "shippingRate": {
      "@type": "MonetaryAmount",
      "value": "0",
      "currency": "INR"
    },
    "shippingDestination": [
      {
        "@type": "DefinedRegion",
        "addressCountry": "IN"
      }
    ],
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "handlingTime": {
        "@type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 0,
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
          { "@type": "ListItem", "position": 4, "name": "West Pune Real Estate Hub", "item": "https://www.shapoorji-vyomora.com/west-pune-real-estate" },
          { "@type": "ListItem", "position": 5, "name": "Shapoorji Pune Projects", "item": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects" }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.shapoorji-vyomora.com/#navigation",
        "name": "Site Navigation Sitelinks",
        "itemListElement": [
          { "@type": "SiteNavigationElement", "position": 1, "name": "Residences & Floor Plans", "url": "https://www.shapoorji-vyomora.com/residences" },
          { "@type": "SiteNavigationElement", "position": 2, "name": "32,000 Sq. Ft. Clubhouse & Amenities", "url": "https://www.shapoorji-vyomora.com/amenities" },
          { "@type": "SiteNavigationElement", "position": 3, "name": "Masterplan & Site Layout", "url": "https://www.shapoorji-vyomora.com/masterplan" },
          { "@type": "SiteNavigationElement", "position": 4, "name": "Location & Metro Line 3", "url": "https://www.shapoorji-vyomora.com/location" },
          { "@type": "SiteNavigationElement", "position": 5, "name": "West Pune Real Estate Guide", "url": "https://www.shapoorji-vyomora.com/west-pune-real-estate" },
          { "@type": "SiteNavigationElement", "position": 6, "name": "All Shapoorji Pune Projects", "url": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects" },
          { "@type": "SiteNavigationElement", "position": 7, "name": "Investment ROI & EMI Calculator", "url": "https://www.shapoorji-vyomora.com/investment-calculator" },
          { "@type": "SiteNavigationElement", "position": 8, "name": "Real Estate Articles & Research", "url": "https://www.shapoorji-vyomora.com/articles" },
          { "@type": "SiteNavigationElement", "position": 9, "name": "Shapoorji Pallonji Pune Developer Profile", "url": "https://www.shapoorji-vyomora.com/developers/shapoorji-pallonji-pune" },
          { "@type": "SiteNavigationElement", "position": 10, "name": "Pune Projects Comparison Guide", "url": "https://www.shapoorji-vyomora.com/guides/shapoorji-pallonji-projects-pune-comparison" },
          { "@type": "SiteNavigationElement", "position": 11, "name": "Complete Pune Projects Directory", "url": "https://www.shapoorji-vyomora.com/projects" }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.shapoorji-vyomora.com/#organization",
        "name": "Shapoorji Pallonji Real Estate",
        "legalName": "Shapoorji Pallonji Real Estate Pvt Ltd",
        "alternateName": [
          "Shapoorji Pallonji",
          "Joyville Homes",
          "Joyville Shapoorji",
          "SP Real Estate Pune",
          "Shapoorji Pallonji Group"
        ],
        "url": "https://www.shapoorji-vyomora.com",
        "priceRange": "INR 84.99 Lakhs - 2.50 Cr+",
        "description": "Ultra luxury 2BHK, 3BHK, 4BHK, Sky Duplex, Simplex, and 5BHK Sky Villa apartments in Hinjewadi and Mahalunge, Pune by Shapoorji Pallonji Real Estate.",
        "knowsAbout": [
          "Shapoorji Vyomora Hinjewadi",
          "Joyville Homes Hinjewadi",
          "Shapoorji Pune",
          "Shapoorji Pallonji Pune",
          "Shapoorji Pallonji projects Pune",
          "Shapoorji Pallonji real estate Pune",
          "Joyville Homes Pune",
          "Shapoorji Pallonji Joyville Pune",
          "Joy 3.0 Hinjewadi",
          "Joyville 3.0 New Launch",
          "Joyville Vyomora Hinjewadi Phase 1",
          "Shapoorji Pallonji Real Estate Vyomora Hinjewadi",
          "Shapoorji Vyomora Pune",
          "Shapoorji Pallonji Vanaha Pune",
          "Vanaha Golfland Bavdhan",
          "Joyville Sensorium Hinjewadi",
          "Joyville Hadapsar Annexe",
          "Joyville Celestia Pune",
          "Wildernest at SP Kingstown",
          "Pune Real Estate Market",
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
        "foundingDate": "1865",
        "founders": [
          {
            "@type": "Person",
            "name": "Pallonji Shapoorji Mistry"
          }
        ],
        "parentOrganization": {
          "@type": "Organization",
          "name": "Shapoorji Pallonji Group",
          "url": "https://www.shapoorjipallonji.com"
        },
        "hasMap": "https://www.google.com/maps/search/?api=1&query=18.5913,73.7389",
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
        }
      },
      // Google Real Estate / Properties Schema
      {
        "@type": "ApartmentComplex",
        "@id": "https://www.shapoorji-vyomora.com/#project",
        "name": "Shapoorji Vyomora Hinjewadi (Joy 3.0)",
        "alternateName": [
          "Shapoorji Vyomora Hinjewadi",
          "Joyville Homes Hinjewadi",
          "Joyville Vyomora Hinjewadi",
          "Shapoorji Pune",
          "Vyomora Hinjewadi",
          "Shapoorji Vyomora",
          "Joyville Vyomora",
          "Vyomora Hinjewadi Pune",
          "Joy 3.0",
          "Joyville 3.0",
          "Joyville Vyomora Phase 1 New Launch",
          "Joyville Joy 3.0 Hinjewadi",
          "Shapoorji Pallonji Vyomara",
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
          "latitude": 18.5912,
          "longitude": 73.7389
        },
        "hasMap": "https://maps.google.com/?q=18.5912,73.7389",
        "numberOfRooms": [2, 3, 4, 5],
        "petsAllowed": true,
        "aggregateRating": aggregateRating,
        "review": verifiedReviews,
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "32,000+ sq. ft. Luxury Clubhouse", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Rajiv Gandhi IT Park & Metro Connectivity", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Smart Home Automation & Voice Controls", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Infinity Temperature-Controlled Swimming Pool", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Multi-Tier Sports Arena & Cricket Pitch", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Elevated Sky Deck & Nature Trails", "value": true }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": 8499000,
          "highPrice": 35000000,
          "offerCount": 184,
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01"
        }
      },
      // Google Products Schema - Master Product (for Google Shopping & Product Rich Snippets)
      {
        "@type": "Product",
        "@id": "https://www.shapoorji-vyomora.com/#product-master",
        "name": "Shapoorji Pallonji Joyville Vyomora - Luxury Residences Hinjewadi Pune (Joy 3.0)",
        "image": [
          "https://www.shapoorji-vyomora.com/og-image.jpg",
          "https://www.shapoorji-vyomora.com/images/hero_bg.webp"
        ],
        "description": "Official luxury 2, 3, 4 BHK and Sky Duplex residences with 32,000+ sq.ft clubhouse by Shapoorji Pallonji in Hinjewadi Phase 1, Pune. MahaRERA: PR1260002600999.",
        "sku": "JOYVILLE-VYOMORA-PUNE",
        "mpn": "SPRE-VYOMORA-2026",
        "brand": {
          "@type": "Brand",
          "name": "Shapoorji Pallonji Joyville"
        },
        "category": "Real Estate > Residential Properties > Apartments",
        "aggregateRating": aggregateRating,
        "review": verifiedReviews,
        "offers": {
          "@type": "AggregateOffer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "lowPrice": 8499000,
          "highPrice": 25000000,
          "offerCount": 184,
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "priceValidUntil": "2027-12-31",
          "seller": {
            "@type": "Organization",
            "name": "Shapoorji Pallonji Real Estate"
          },
          "hasMerchantReturnPolicy": merchantReturnPolicy,
          "shippingDetails": shippingDetails
        }
      },
      // Google Product Schema 1: 2 BHK Luxe & Grande
      {
        "@type": "Product",
        "@id": "https://www.shapoorji-vyomora.com/#product-2bhk",
        "name": "Shapoorji Pallonji Joyville Vyomora 2 BHK Luxury Apartment",
        "image": "https://www.shapoorji-vyomora.com/images/floor-plan1.webp",
        "description": "Premium 2 BHK smart luxury apartment in Hinjewadi Phase 1 with home automation, master wooden flooring, and 32,000 sq.ft. clubhouse access.",
        "sku": "VYOMORA-2BHK",
        "mpn": "JOY-VYOMORA-2BHK",
        "brand": {
          "@type": "Brand",
          "name": "Shapoorji Pallonji Joyville"
        },
        "category": "Real Estate > Residential Properties > 2 BHK Apartments",
        "aggregateRating": aggregateRating,
        "review": verifiedReviews.slice(0, 3),
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": 8499000,
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "Shapoorji Pallonji Real Estate"
          },
          "hasMerchantReturnPolicy": merchantReturnPolicy,
          "shippingDetails": shippingDetails
        }
      },
      // Google Product Schema 2: 3 BHK Luxury Suite
      {
        "@type": "Product",
        "@id": "https://www.shapoorji-vyomora.com/#product-3bhk",
        "name": "Shapoorji Pallonji Joyville Vyomora 3 BHK Luxury Suite",
        "image": "https://www.shapoorji-vyomora.com/images/floor-plan2.webp",
        "description": "Spacious 3 BHK luxury apartment in Mahalunge-Hinjewadi with panoramic hill views, dual master suites, and grand sun deck.",
        "sku": "VYOMORA-3BHK",
        "mpn": "JOY-VYOMORA-3BHK",
        "brand": {
          "@type": "Brand",
          "name": "Shapoorji Pallonji Joyville"
        },
        "category": "Real Estate > Residential Properties > 3 BHK Apartments",
        "aggregateRating": aggregateRating,
        "review": verifiedReviews.slice(1, 4),
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": 12500000,
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "Shapoorji Pallonji Real Estate"
          },
          "hasMerchantReturnPolicy": merchantReturnPolicy,
          "shippingDetails": shippingDetails
        }
      },
      // Google Product Schema 3: 4 BHK Royale & Sky Duplex
      {
        "@type": "Product",
        "@id": "https://www.shapoorji-vyomora.com/#product-4bhk",
        "name": "Shapoorji Pallonji Joyville Vyomora 4 BHK Royale & Sky Duplex",
        "image": "https://www.shapoorji-vyomora.com/images/floor-plan3.webp",
        "description": "Presidential 4 BHK sky duplex in Baner-Mahalunge with double-height ceiling, private outdoor terrace, and dedicated EV charging bay.",
        "sku": "VYOMORA-4BHK",
        "mpn": "JOY-VYOMORA-4BHK",
        "brand": {
          "@type": "Brand",
          "name": "Shapoorji Pallonji Joyville"
        },
        "category": "Real Estate > Residential Properties > 4 BHK Duplexes",
        "aggregateRating": aggregateRating,
        "review": verifiedReviews.slice(2, 5),
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": 18500000,
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@type": "Organization",
            "name": "Shapoorji Pallonji Real Estate"
          },
          "hasMerchantReturnPolicy": merchantReturnPolicy,
          "shippingDetails": shippingDetails
        }
      },
      // Google Real Estate Listing 1: 2 BHK
      {
        "@type": "RealEstateListing",
        "@id": "https://www.shapoorji-vyomora.com/#listing-2bhk",
        "name": "MahaRERA Verified 2 BHK Luxury Flats in Hinjewadi Phase 1 - Joyville Vyomora",
        "datePosted": "2026-01-01",
        "validThrough": "2027-12-31",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 8499000,
          "availability": "https://schema.org/InStock",
          "url": "https://www.shapoorji-vyomora.com/residences"
        }
      },
      // Google Real Estate Listing 2: 3 BHK
      {
        "@type": "RealEstateListing",
        "@id": "https://www.shapoorji-vyomora.com/#listing-3bhk",
        "name": "MahaRERA Verified 3 BHK Luxury Apartments in Mahalunge Hinjewadi - Joyville Vyomora",
        "datePosted": "2026-01-01",
        "validThrough": "2027-12-31",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 12500000,
          "availability": "https://schema.org/InStock",
          "url": "https://www.shapoorji-vyomora.com/residences"
        }
      },
      // Google Real Estate Listing 3: 4 BHK Sky Duplex
      {
        "@type": "RealEstateListing",
        "@id": "https://www.shapoorji-vyomora.com/#listing-4bhk",
        "name": "Exclusive 4 BHK Sky Duplexes for Sale in West Pune Corridor - Joyville Vyomora",
        "datePosted": "2026-01-01",
        "validThrough": "2027-12-31",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 18500000,
          "availability": "https://schema.org/InStock",
          "url": "https://www.shapoorji-vyomora.com/residences"
        }
      },
      // Real Estate Residence Schema 1: 2 BHK
      {
        "@type": "Apartment",
        "@id": "https://www.shapoorji-vyomora.com/#2bhk-luxury-unit",
        "name": "Joyville Vyomora 2 BHK Grande (Joy 3.0) - Shapoorji Pallonji Hinjewadi",
        "description": "Premium 2 BHK smart luxury apartment in Hinjewadi Phase 1 with home automation, master bedroom with wooden flooring, grand balcony, and Italian modular fittings.",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "numberOfRooms": 2,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": 685,
          "unitCode": "FTK"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": 8499000,
          "availability": "https://schema.org/InStock"
        }
      },
      // Real Estate Residence Schema 2: 3 BHK
      {
        "@type": "Apartment",
        "@id": "https://www.shapoorji-vyomora.com/#3bhk-luxury-unit",
        "name": "Joyville Vyomora 3 BHK Luxury Suite (Joy 3.0) - Shapoorji Pallonji Mahalunge",
        "description": "Spacious 3 BHK luxury apartment in Mahalunge-Hinjewadi IT corridor with panoramic hill views, dual master suites, utility balcony, and access to 32,000 sq.ft. clubhouse.",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "numberOfRooms": 3,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": 1052,
          "unitCode": "FTK"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": 12500000,
          "availability": "https://schema.org/InStock"
        }
      },
      // Real Estate Residence Schema 3: 4 BHK & Sky Duplex
      {
        "@type": "Apartment",
        "@id": "https://www.shapoorji-vyomora.com/#4bhk-sky-suite",
        "name": "Joyville Vyomora 4 BHK Royale & Sky Duplex (Joy 3.0) - Shapoorji Pallonji Baner",
        "description": "Presidential 4 BHK luxury sky residence and duplex in Baner-Mahalunge with double-height living room, private terrace deck, staff quarters, and dedicated EV charging bays.",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "numberOfRooms": 4,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": 1600,
          "unitCode": "FTK"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": 18500000,
          "availability": "https://schema.org/InStock"
        }
      },
      // Real Estate Residence Schema 4: 5 BHK Sky Villa
      {
        "@type": "Apartment",
        "@id": "https://www.shapoorji-vyomora.com/#5bhk-sky-villa",
        "name": "Joyville Vyomora 5 BHK Sky Villa Penthouse (Joy 3.0) - Shapoorji Pallonji Pune",
        "description": "Ultra luxury 5 BHK penthouse villa overlooking the Mula river and Hinjewadi skyline with private plunge pool, personal elevator access, and bespoke interior concierge.",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "numberOfRooms": 5,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": 2200,
          "unitCode": "FTK"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.shapoorji-vyomora.com/residences",
          "priceCurrency": "INR",
          "price": 25000000,
          "availability": "https://schema.org/InStock"
        }
      },
      // Google LocalBusiness & Experience Centre with 5-Star Rating
      {
        "@type": "LocalBusiness",
        "@id": "https://www.shapoorji-vyomora.com/#localbusiness",
        "name": "Shapoorji Pallonji Joyville Vyomora (Joy 3.0) Experience Centre & Sales Gallery",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "telephone": "+91-7744009295",
        "priceRange": "$$$$",
        "aggregateRating": aggregateRating,
        "review": verifiedReviews,
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
          "latitude": 18.5913,
          "longitude": 73.7389
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
        ]
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
            "name": "Shapoorji Pallonji Joyville Vyomora (Joy 3.0 Hinjewadi Phase 1)",
            "url": "https://www.shapoorji-vyomora.com/projects/joyville-vyomora-hinjewadi"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Joyville Sensorium Hinjewadi Phase 1",
            "url": "https://www.shapoorji-vyomora.com/projects/joyville-sensorium"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Shapoorji Pallonji Vanaha Bavdhan Pune",
            "url": "https://www.shapoorji-vyomora.com/projects/shapoorji-pallonji-vanaha"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Vanaha Golfland Bavdhan Pune",
            "url": "https://www.shapoorji-vyomora.com/projects/vanaha-golfland"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Joyville Hadapsar Annexe East Pune",
            "url": "https://www.shapoorji-vyomora.com/projects/joyville-hadapsar-annexe"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Joyville Celestia Hadapsar Pune",
            "url": "https://www.shapoorji-vyomora.com/projects/joyville-celestia"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Wildernest at SP Kingstown Pune",
            "url": "https://www.shapoorji-vyomora.com/projects/wildernest-sp-kingstown"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "Joyville Sky-Luxe Edition Hadapsar",
            "url": "https://www.shapoorji-vyomora.com/projects/joyville-sky-luxe-edition"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "Joyville Hinjewadi Township Pune",
            "url": "https://www.shapoorji-vyomora.com/projects/joyville-hinjewadi"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "name": "Vanaha Verdant Bavdhan Pune",
            "url": "https://www.shapoorji-vyomora.com/projects/vanaha-verdant"
          },
          {
            "@type": "ListItem",
            "position": 11,
            "name": "Vanaha Springs Bavdhan Pune",
            "url": "https://www.shapoorji-vyomora.com/projects/vanaha-springs"
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
      // FAQPage Schema - Synchronized with visible HomeFAQ component
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Shapoorji Vyomora Hinjewadi (Joy 3.0)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Vyomora Hinjewadi (marketed as Joy 3.0) is a flagship 25-acre residential township development located off Maan Road in Hinjewadi Phase 1, Pune. Developed jointly under the Joyville platform by Shapoorji Pallonji Real Estate, Actis, ADB, and IFC, Vyomora features high-rise residential towers, over 78% open and green biophilic spaces, a monumental 32,000+ sq. ft. clubhouse, and luxury 2, 3, 4 BHK, and Sky Duplex apartments overlooking the Mula river."
            }
          },
          {
            "@type": "Question",
            "name": "What is Joyville Homes Hinjewadi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Joyville Homes Hinjewadi refers to the master-planned residential ecosystem by Joyville (a joint venture of Shapoorji Pallonji, Actis, ADB, and IFC) located in Hinjewadi Phase 1, Pune. The ecosystem features flagship developments including Joyville Vyomora (Joy 3.0) and Joyville Sensorium, offering luxury 2, 3 & 4 BHK apartments with 32,000+ sq. ft. clubhouses, 75%+ open biophilic spaces, and walk-to-work proximity to Rajiv Gandhi Infotech Park."
            }
          },
          {
            "@type": "Question",
            "name": "What are the top Shapoorji Pune projects in the Pune real estate market?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Pallonji Real Estate has developed 11 iconic residential projects across Pune's prime corridors: Joyville Vyomora (Hinjewadi Phase 1 - Joy 3.0), Joyville Sensorium (Hinjewadi Phase 1), Shapoorji Pallonji Vanaha (1,000-acre township in Bavdhan), Vanaha Golfland (Oxford Valley), Joyville Hadapsar Annexe (East Pune), Joyville Celestia (Hadapsar), Wildernest at SP Kingstown, Vanaha Verdant, and Vanaha Springs."
            }
          },
          {
            "@type": "Question",
            "name": "What is the MahaRERA registration number for Joyville Vyomora Hinjewadi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Pallonji Joyville Vyomora is officially registered under MahaRERA registration number PR1260002600999. All project disclosures, building layout approvals, tower sanctions, and completion timelines are independently verifiable on the official MahaRERA website (maharera.mahaonline.gov.in)."
            }
          },
          {
            "@type": "Question",
            "name": "What configurations and prices are available at Shapoorji Vyomora Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Joyville Vyomora offers flexible luxury configurations tailored for modern homebuyers and IT professionals: 2 BHK Luxe (684.91 sq. ft.) starting from ₹84.99 Lakhs*, 2 BHK Grande (780 - 785 sq. ft.) from ₹1.00 Cr*, 3 BHK Select & Elite (1,052 - 1,090 sq. ft.) from ₹1.32 Cr*, 3 BHK Imperial (1,184 - 1,186 sq. ft.) from ₹1.54 Cr*, and exclusive 3/4 BHK Sky Duplexes (1,459 - 1,467 sq. ft.) starting from ₹1.89 Cr*."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Joyville Vyomora located and how is the connectivity to Hinjewadi IT Park?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Joyville Vyomora is strategically located off Maan Road, directly adjacent to Hinjewadi Phase 1 in the Mahalunge-Hinjewadi growth corridor, Pune (PIN: 411057). It is just 1.8 km (5 minutes) from Rajiv Gandhi Infotech Park Phase 1 (Infosys Circle, Wipro, Cognizant, Barclays), 1.2 km from the upcoming Hinjewadi Metro Line 3 station, and 4.5 km from the Mumbai-Pune Expressway (NH-48)."
            }
          },
          {
            "@type": "Question",
            "name": "What clubhouse and sports amenities are provided at Joyville Vyomora Hinjewadi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The project boasts one of West Pune's largest residential clubhouses spanning over 32,000 sq. ft. along with 40+ lifestyle amenities. Highlights include an infinity temperature-controlled swimming pool, full-sized cricket pitch, tennis and pickleball courts, state-of-the-art gymnasium, yoga and wellness deck, co-working executive business lounge, kids adventure play park, pet agility park, and a scenic Mula riverfront promenade."
            }
          },
          {
            "@type": "Question",
            "name": "What is the possession date and construction status of Joyville Vyomora?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Joyville Vyomora is scheduled for handover in December 2029 as per MahaRERA filings. Construction is executed using advanced Mivan aluminum shuttering technology by Shapoorji Pallonji Engineering & Construction, ensuring earthquake-resistant seismic structural integrity, monolithic concrete walls, superior finish, and timely handover."
            }
          },
          {
            "@type": "Question",
            "name": "Can NRIs from USA, UAE, UK, Singapore, and Australia invest in Joyville Vyomora?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) can freely purchase residential property in Shapoorji Pallonji Joyville Vyomora under RBI and FEMA regulations. The project provides 100% digital KYC verification, virtual 3D sample flat walkthroughs, remote legal document execution, approved NRI home loan assistance through major nationalized and private banks, and full repatriation support for rental income and capital gains."
            }
          },
          {
            "@type": "Question",
            "name": "What is the expected rental yield and capital appreciation in Hinjewadi Phase 1?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Due to Hinjewadi's status as Pune's largest employment hub housing over 400,000 IT and biotechnology professionals, luxury apartments in Phase 1 command high rental yields of 4.5% to 5.5% annually. The impending completion of Pune Metro Line 3 and the Ring Road makes Joyville Vyomora an exceptionally strong asset for long-term capital appreciation."
            }
          },
          {
            "@type": "Question",
            "name": "How does Joyville Vyomora compare to Joyville Sensorium and Vanaha Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While Joyville Sensorium (also in Hinjewadi Phase 1) emphasizes 5D sensory biophilic living, Joyville Vyomora (Joy 3.0) is the newer flagship launch offering larger typologies including 4 BHK and Sky Duplexes, a massive 32,000+ sq. ft. clubhouse, and riverfront promenade views. Shapoorji Pallonji Vanaha, located in Bavdhan near Oxford Golf Resort, is a 1,000-acre mega-township focused on nature-centric luxury living."
            }
          },
          {
            "@type": "Question",
            "name": "How do I schedule an official site visit or download the Joyville Vyomora brochure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can schedule a private site visit to the Shapoorji Pallonji Experience Centre on Maan Road, Hinjewadi Phase 1, by contacting our authorized sales desk at +91-7744009295 or by submitting an inquiry online. The comprehensive PDF brochure, floor plans, cost sheet, and payment schedules are available for instant digital download."
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
