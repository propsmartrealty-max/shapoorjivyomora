import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SEOLocations, SEONRILocations, SEOConfigurations, SEOTopics, TOP_CURATED_MARKET_COMBOS, generateSEOContent } from "@/lib/programmaticSEO";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export async function generateStaticParams() {
  return TOP_CURATED_MARKET_COMBOS.map((combo) => ({
    location: combo.location,
    configuration: combo.configuration,
    topic: combo.topic,
  }));
}

interface Props {
  params: Promise<{
    location: string;
    configuration: string;
    topic: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location, configuration, topic } = await params;

  const allLocations = [...SEOLocations, ...SEONRILocations];

  // Validate to prevent spam/junk URLs from hurting SEO
  if (!allLocations.includes(location) || !SEOConfigurations.includes(configuration) || !SEOTopics.includes(topic)) {
    return {
      title: "Market Insights | Shapoorji Pallonji Real Estate",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const content = generateSEOContent(location, configuration, topic);
  const pageCanonical = `https://www.shapoorji-vyomora.com/market/${location}/${configuration}/${topic}`;
  const ogImageUrl = `https://www.shapoorji-vyomora.com/api/og?title=${encodeURIComponent(content.h1)}&subtitle=${encodeURIComponent(content.description)}`;
  const cleanLocation = location.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const cleanConfig = configuration.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const cleanTopic = topic.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return {
    title: {
      absolute: content.title,
    },
    description: content.description,
    keywords: [
      `${cleanConfig} in ${cleanLocation}`,
      `${cleanConfig} ${cleanTopic}`,
      `${cleanConfig} in ${cleanLocation} ${cleanTopic}`,
      "shapoorji vyomora hinjewadi",
      "joyville homes hinjewadi",
      "shapoorji vyomora",
      "vyomora hinjewadi",
      "joyville vyomora hinjewadi",
      "shapoorji pallonji vyomora",
      "joy 3.0 hinjewadi",
      "shapoorji pune",
      "shapoorji pallonji pune",
      "flats in hinjewadi phase 1",
      "pune real estate market",
      "maharera pr1260002600999",
      "shapoorji vyomorar",
      "vyomorar hinjewadi"
    ],
    openGraph: {
      title: content.title,
      description: content.description,
      url: pageCanonical,
      siteName: "Shapoorji Pallonji Joyville Vyomora",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: content.title,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: pageCanonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function ProgrammaticSEOPage({ params }: Props) {
  const { location, configuration, topic } = await params;

  const allLocations = [...SEOLocations, ...SEONRILocations];

  // Validate
  if (!allLocations.includes(location) || !SEOConfigurations.includes(configuration) || !SEOTopics.includes(topic)) {
    notFound();
  }

  const content = generateSEOContent(location, configuration, topic);
  const pageCanonical = `https://www.shapoorji-vyomora.com/market/${location}/${configuration}/${topic}`;
  const cleanLocName = location.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const cleanConfig = configuration.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const cleanTopic = topic.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  const breadcrumbItems = [
    { label: "Market Intelligence", href: "/market" },
    { label: cleanLocName, href: `/market/${location}/${configuration}/${topic}` },
    { label: content.title, href: `/market/${location}/${configuration}/${topic}` }
  ];

  // Enterprise Multi-Entity Structured Schema (FAQPage + BreadcrumbList + RealEstateListing + Product/Offer)
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${pageCanonical}#faq`,
        "mainEntity": content.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageCanonical}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.shapoorji-vyomora.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Pune Market Intelligence",
            "item": "https://www.shapoorji-vyomora.com/market"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": content.title,
            "item": pageCanonical
          }
        ]
      },
      {
        "@type": "RealEstateListing",
        "@id": `${pageCanonical}#listing`,
        "name": content.h1,
        "description": content.description,
        "url": pageCanonical,
        "datePosted": "2024-01-01",
        "validThrough": "2029-12-31",
        "keywords": `shapoorji vyomora hinjewadi, joyville homes hinjewadi, shapoorji pune, vyomora hinjewadi, joy 3.0 hinjewadi, ${cleanConfig} in ${cleanLocName}`,
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": content.priceStarting.replace(/[^0-9.]/g, '') ? parseFloat(content.priceStarting.replace(/[^0-9.]/g, '')) * (content.priceStarting.includes('Cr') ? 10000000 : 100000) : 8499000,
          "offerCount": "120",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Shapoorji Pallonji Real Estate",
            "url": "https://www.shapoorji-vyomora.com"
          }
        },
        "itemOffered": {
          "@type": "Apartment",
          "name": `${content.projectName} - ${cleanLocName}`,
          "alternateName": [
            "Shapoorji Vyomora Hinjewadi",
            "Joyville Homes Hinjewadi",
            "Vyomora Hinjewadi",
            "Joy 3.0 Hinjewadi",
            "Shapoorji Pune"
          ],
          "description": content.description,
          "numberOfRooms": configuration.includes("2bhk") ? 2 : configuration.includes("3bhk") ? 3 : configuration.includes("4bhk") ? 4 : 3,
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": content.carpetAreaRange,
            "unitCode": "FTK"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hinjewadi",
            "addressRegion": "Pune, Maharashtra",
            "postalCode": "411057",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5913,
            "longitude": 73.7389
          },
          "amenityFeature": content.highlights.map(h => ({
            "@type": "LocationFeatureSpecification",
            "name": h,
            "value": true
          }))
        }
      },
      {
        "@type": "Product",
        "@id": `${pageCanonical}#product`,
        "name": `${content.projectName} (${cleanLocName})`,
        "description": content.description,
        "brand": {
          "@type": "Brand",
          "name": "Shapoorji Pallonji Real Estate"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "348",
          "bestRating": "5"
        }
      }
    ]
  };

  // Find related combinations for semantic internal linking mesh
  const relatedCombos = TOP_CURATED_MARKET_COMBOS
    .filter(c => c.location === location && (c.configuration !== configuration || c.topic !== topic))
    .slice(0, 4);

  if (relatedCombos.length < 4) {
    const fallbackCombos = TOP_CURATED_MARKET_COMBOS
      .filter(c => c.location !== location)
      .slice(0, 4 - relatedCombos.length);
    relatedCombos.push(...fallbackCombos);
  }

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="mb-10">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Quick Highlights Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs bg-[#0A192F] text-white px-3 py-1 rounded-full font-medium">
            MahaRERA: {content.reraNumber}
          </span>
          <span className="text-xs bg-[#C5A059]/15 text-[#0A192F] px-3 py-1 rounded-full font-semibold border border-[#C5A059]/30">
            Starting: {content.priceStarting}
          </span>
          <span className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full font-medium border border-gray-200">
            Carpet: {content.carpetAreaRange}
          </span>
          <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium border border-green-200">
            Verified RERA Inventory
          </span>
        </div>

        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#0A192F] prose-p:text-gray-600 prose-p:font-light max-w-none">
          <h1 className="text-3xl md:text-5xl mb-8 leading-tight">{content.h1}</h1>
          
          {/* Section 1: Strategic Location & Connectivity Rationale */}
          <div className="bg-white p-8 md:p-12 shadow-md rounded-2xl mb-8 border border-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C5A059]/10 to-transparent rounded-bl-full" />
            <h2 className="text-2xl font-serif text-[#0A192F] mb-4">
              1. Strategic Location &amp; Micro-Market Connectivity
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4">{content.p1}</p>
          </div>

          {/* Section 2: Architectural Engineering & Floor Plan Layouts */}
          <div className="bg-white p-8 md:p-12 shadow-md rounded-2xl mb-8 border border-black/5">
            <h2 className="text-2xl font-serif text-[#0A192F] mb-4">
              2. Architectural Specifications &amp; Structural Engineering
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6">{content.p2}</p>
            
            {/* Key Highlights Checklist */}
            <h3 className="text-lg font-serif text-[#0A192F] mb-4">Key Development Highlights:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm not-prose pl-0 list-none mb-6">
              {content.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#C5A059] font-bold text-base leading-none mt-0.5">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Investment ROI & Capital Growth */}
          <div className="bg-white p-8 md:p-12 shadow-md rounded-2xl mb-8 border border-black/5">
            <h2 className="text-2xl font-serif text-[#0A192F] mb-4">
              3. Investment ROI, Price Trends &amp; Rental Yield Analysis
            </h2>
            <p className="text-base md:text-lg leading-relaxed">{content.p3}</p>
          </div>

          {/* Section 4: MahaRERA Governance & Developer Pedigree */}
          <div className="bg-white p-8 md:p-12 shadow-md rounded-2xl mb-12 border border-black/5">
            <h2 className="text-2xl font-serif text-[#0A192F] mb-4">
              4. Developer Heritage &amp; Statutory MahaRERA Transparency
            </h2>
            <p className="text-base md:text-lg leading-relaxed">{content.p4}</p>
          </div>

          {/* Real Estate Data Matrix Table */}
          <div className="not-prose bg-white rounded-2xl border border-black/5 shadow-md p-6 md:p-8 mb-12">
            <h3 className="text-xl font-serif text-[#0A192F] mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
              {content.projectName} Project Factsheet
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600 border-collapse">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-semibold text-[#0A192F] w-1/3">Project Name</td>
                    <td className="py-3 font-medium text-gray-800">{content.projectName}</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 font-semibold text-[#0A192F]">Target Locality</td>
                    <td className="py-3">{cleanLocName}, Pune, Maharashtra</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-semibold text-[#0A192F]">Starting Price</td>
                    <td className="py-3 text-[#C5A059] font-bold">{content.priceStarting}</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 font-semibold text-[#0A192F]">Carpet Area Range</td>
                    <td className="py-3">{content.carpetAreaRange}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-semibold text-[#0A192F]">MahaRERA Registration</td>
                    <td className="py-3 text-[#C5A059] font-semibold">{content.reraNumber}</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 font-semibold text-[#0A192F]">Developer</td>
                    <td className="py-3">Shapoorji Pallonji Real Estate (150+ Years)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-[#0A192F]">Clubhouse &amp; Amenities</td>
                    <td className="py-3">32,000+ sq. ft. Multi-Level Clubhouse, Swimming Pool, Fitness Arena</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Direct High-Intent CTAs */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 items-center justify-between">
              <a
                href="tel:+917744009295"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0A192F] text-white text-sm font-medium rounded-lg hover:bg-[#152a4a] transition-colors shadow-sm"
              >
                Call VIP Sales Desk: +91 7744009295
              </a>
              <div className="flex gap-3">
                <Link
                  href="/investment-calculator"
                  className="inline-flex items-center justify-center px-5 py-3 border border-[#C5A059] text-[#0A192F] text-sm font-medium rounded-lg hover:bg-[#C5A059]/10 transition-colors"
                >
                  Calculate EMI &amp; ROI →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 bg-[#C5A059] text-white text-sm font-medium rounded-lg hover:bg-[#b08e4c] transition-colors"
                >
                  Request Cost Sheet
                </Link>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <h2 className="text-2xl md:text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12 not-prose">
            {content.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
                <h3 className="text-lg font-serif font-medium mb-2 text-[#0A192F]">{faq.question}</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Related Micro-Market Insights Mesh */}
          <div className="not-prose my-12 p-8 bg-white rounded-2xl border border-black/5 shadow-md">
            <h3 className="text-lg font-serif text-[#0A192F] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              Related Pune Micro-Market &amp; Typology Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedCombos.map((rel, idx) => {
                const relLoc = rel.location.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
                const relCfg = rel.configuration.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
                const relTop = rel.topic.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
                return (
                  <Link
                    key={idx}
                    href={`/market/${rel.location}/${rel.configuration}/${rel.topic}`}
                    className="p-4 rounded-xl border border-gray-100 hover:border-[#C5A059]/40 hover:bg-[#FDFBF7] transition-all group flex flex-col justify-between"
                  >
                    <span className="text-sm font-semibold text-[#0A192F] group-hover:text-[#C5A059] transition-colors">
                      {relCfg} in {relLoc}
                    </span>
                    <span className="text-xs text-gray-500 mt-1 capitalize">
                      {relTop} &rarr;
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Upward Master Directory & Authority Hub Links */}
          <div className="not-prose p-6 bg-[#0A192F]/5 rounded-xl border border-[#0A192F]/10">
            <h4 className="text-base font-semibold text-[#0A192F] mb-3">Explore Authoritative Hubs:</h4>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/projects/joyville-vyomora-hinjewadi" className="text-xs bg-[#0A192F] px-3.5 py-2 rounded-md text-white hover:bg-[#C5A059] shadow-sm font-semibold transition-colors">
                Shapoorji Vyomora Hinjewadi (Joy 3.0) →
              </Link>
              <Link href="/shapoorji-pallonji-pune-projects" className="text-xs bg-white px-3 py-2 rounded-md text-[#0A192F] hover:text-[#C5A059] shadow-sm font-medium border border-gray-200">
                All Shapoorji Pune Projects
              </Link>
              <Link href="/market" className="text-xs bg-white px-3 py-2 rounded-md text-[#0A192F] hover:text-[#C5A059] shadow-sm font-medium border border-gray-200">
                Pune Market Intelligence Hub (/market)
              </Link>
              <Link href="/sitemap" className="text-xs bg-white px-3 py-2 rounded-md text-[#0A192F] hover:text-[#C5A059] shadow-sm font-medium border border-gray-200">
                Complete HTML Sitemap Index (/sitemap)
              </Link>
              <Link href="/residences" className="text-xs bg-white px-3 py-2 rounded-md text-[#0A192F] hover:text-[#C5A059] shadow-sm font-medium border border-gray-200">
                View Unit Floor Plans (/residences)
              </Link>
              <Link href="/amenities" className="text-xs bg-white px-3 py-2 rounded-md text-[#0A192F] hover:text-[#C5A059] shadow-sm font-medium border border-gray-200">
                32,000 sq. ft. Clubhouse (/amenities)
              </Link>
              <Link href="/location" className="text-xs bg-white px-3 py-2 rounded-md text-[#0A192F] hover:text-[#C5A059] shadow-sm font-medium border border-gray-200">
                Hinjewadi Transit &amp; Metro Line 3 (/location)
              </Link>
              <Link href="/west-pune-real-estate" className="text-xs bg-white px-3 py-2 rounded-md text-[#0A192F] hover:text-[#C5A059] shadow-sm font-medium border border-gray-200">
                West Pune Real Estate Authority Hub
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
