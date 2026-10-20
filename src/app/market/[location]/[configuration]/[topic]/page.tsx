import { Metadata } from "next";
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

  return {
    title: content.title,
    description: content.description,
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

  const breadcrumbItems = [
    { label: "Market Insights", href: "/articles" },
    { label: location.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()), href: `/market/${location}/${SEOConfigurations[0]}/${SEOTopics[0]}` },
    { label: content.title, href: `/market/${location}/${configuration}/${topic}` }
  ];

  // Dynamic FAQ & Breadcrumb Schema Injection
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
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
        "itemListElement": breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@id": `https://www.shapoorji-vyomora.com${item.href}`,
            "name": item.label
          }
        }))
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
        <div className="mb-12">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#0A192F] prose-p:text-gray-600 prose-p:font-light max-w-none">
          <h1 className="text-3xl md:text-5xl mb-8 leading-tight">{content.h1}</h1>
          
          <div className="bg-white p-8 md:p-12 shadow-xl rounded-2xl mb-12 border border-black/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C5A059]/10 to-transparent rounded-bl-full" />
             <p className="text-lg leading-relaxed mb-6">{content.p1}</p>
             <p className="text-lg leading-relaxed">{content.p2}</p>
          </div>

          {/* Real Estate Data Matrix Table */}
          <div className="not-prose bg-white rounded-2xl border border-black/5 shadow-md p-6 md:p-8 mb-12">
            <h3 className="text-xl font-serif text-[#0A192F] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              Shapoorji Pallonji Vyomora Project Overview & Key Highlights
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600 border-collapse">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-semibold text-[#0A192F] w-1/3">Project Name</td>
                    <td className="py-3">Shapoorji Pallonji Joyville Vyomora</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 font-semibold text-[#0A192F]">Location</td>
                    <td className="py-3">Hinjewadi Phase 1, Rajiv Gandhi Infotech Park, Pune - 411057</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-semibold text-[#0A192F]">Typologies Available</td>
                    <td className="py-3">2 BHK, 3 BHK & 4 BHK Luxury Residences</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 font-semibold text-[#0A192F]">Carpet Area Range</td>
                    <td className="py-3">685 sq. ft. to 1434+ sq. ft.</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-semibold text-[#0A192F]">MahaRERA Registration</td>
                    <td className="py-3 text-[#C5A059] font-medium">PR1260002600999</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="py-3 font-semibold text-[#0A192F]">Clubhouse & Amenities</td>
                    <td className="py-3">32,000+ sq. ft. Clubhouse, Swimming Pool, Gym, Sports Arena</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-[#0A192F]">Key Connectivity</td>
                    <td className="py-3">5 Mins to Infosys Circle • 10 Mins to Mumbai-Pune Expressway</td>
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
                Call Sales Desk: +91 7744009295
              </a>
              <a
                href="/investment-calculator"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#C5A059] text-[#0A192F] text-sm font-medium rounded-lg hover:bg-[#C5A059]/10 transition-colors"
              >
                Calculate EMI & ROI →
              </a>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            {content.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
                <h3 className="text-xl font-medium mb-3 text-[#0A192F]">{faq.question}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Related Micro-Market Insights */}
          <div className="not-prose my-12 p-8 bg-white rounded-2xl border border-black/5 shadow-md">
            <h3 className="text-lg font-serif text-[#0A192F] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              Related Pune Real Estate & Typology Insights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedCombos.map((rel, idx) => {
                const relLoc = rel.location.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
                const relCfg = rel.configuration.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
                const relTop = rel.topic.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
                return (
                  <a
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
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contextual Internal Links Hub */}
          <div className="not-prose p-6 bg-[#0A192F]/5 rounded-xl border border-[#0A192F]/10">
            <h4 className="text-base font-semibold text-[#0A192F] mb-3">Explore Related Sections:</h4>
            <div className="flex flex-wrap gap-3">
              <a href="/residences" className="text-xs bg-white px-3 py-2 rounded-md text-[#0A192F] hover:text-[#C5A059] shadow-sm font-medium border border-gray-200">View Unit Floor Plans</a>
              <a href="/amenities" className="text-xs bg-white px-3 py-2 rounded-md text-[#0A192F] hover:text-[#C5A059] shadow-sm font-medium border border-gray-200">32,000 sq. ft. Clubhouse</a>
              <a href="/location" className="text-xs bg-white px-3 py-2 rounded-md text-[#0A192F] hover:text-[#C5A059] shadow-sm font-medium border border-gray-200">Hinjewadi IT Corridor Location</a>
              <a href="/articles" className="text-xs bg-white px-3 py-2 rounded-md text-[#0A192F] hover:text-[#C5A059] shadow-sm font-medium border border-gray-200">Pune Real Estate Market Reports</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
