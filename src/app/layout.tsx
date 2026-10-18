import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import StructuredData from "@/components/StructuredData";
import ClientModals from "@/components/ClientModals";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
  preload: false,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "optional",
  preload: false,
  fallback: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
  adjustFontFallback: true,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shapoorji-vyomora.com'),
  alternates: {
    canonical: 'https://www.shapoorji-vyomora.com/',
    languages: {
      'en-IN': 'https://www.shapoorji-vyomora.com/',
      'en-US': 'https://www.shapoorji-vyomora.com/',
      'en-AE': 'https://www.shapoorji-vyomora.com/',
      'en-GB': 'https://www.shapoorji-vyomora.com/',
      'en-SG': 'https://www.shapoorji-vyomora.com/',
      'en-CA': 'https://www.shapoorji-vyomora.com/',
      'en-AU': 'https://www.shapoorji-vyomora.com/',
      'x-default': 'https://www.shapoorji-vyomora.com/',
    },
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Hinjewadi, Pune',
    'geo.position': '18.5913;73.7389',
    'ICBM': '18.5913, 73.7389',
    'DC.title': 'Shapoorji Pallonji Joyville Vyomora Hinjewadi Pune',
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '1 days',
  },
  applicationName: "Shapoorji Pallonji Vyomora",
  authors: [{ name: "Shapoorji Pallonji Real Estate", url: "https://shapoorjirealestate.com" }],
  creator: "Shapoorji Pallonji",
  publisher: "Shapoorji Pallonji Real Estate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Vyomora",
  },
  title: {
    default: "Shapoorji Vyomora Hinjewadi | Joyville Homes Pune | Shapoorji Pallonji Real Estate",
    template: "%s | Shapoorji Vyomora Hinjewadi",
  },
  description: "Official portal for Shapoorji Pallonji Joyville Vyomora (Joy 3.0) Hinjewadi Phase 1, Pune. Explore luxury 2, 3 & 4 BHK apartments and sky duplexes from ₹84.99 L* with 32,000+ sq.ft. clubhouse near Rajiv Gandhi Infotech Park. MahaRERA: PR1260002600999.",
  keywords: [
    "shapoorji vyomora hinjewadi",
    "shapoorji pallonji vyomora hinjewadi",
    "joyville vyomora hinjewadi",
    "joyville vyomora hinjewadi pune",
    "shapoorji joyville vyomora pune",
    "shapoorji pallonji pune",
    "joyville homes pune",
    "shapoorji pallonji real estate pune",
    "joyville homes",
    "shapoorji pune",
    "shapoorji vyomora",
    "joyville vyomora",
    "joyville vyomora hinjewadi",
    "shapoorji pallonji vyomora",
    "joy 3.0",
    "joyville 3.0",
    "joy 3.0 hinjewadi",
    "Joyville Vyomora Joy 3.0",
    "Shapoorji Joy 3.0",
    "Shapoorji Vyomora",
    "Shapoorji Pallonji Vyomora",
    "Joyville Vyomora",
    "Vyomara Hinjewadi",
    "Shapoorji Vyomora Pune",
    "Joyville Vyomora Hinjewadi",
    "Vymora by Joyville",
    "Shapoorji Pallonji Real Estate Vyomora Hinjewadi",
    "Shapoorji Pallonji Vyomora Hinjewadi", 
    "Joyville Homes Vyomora Hinjewadi", 
    "Shapoorji Pallonji Real Estate Pune",
    "Shapoorji Pallonji Real Estate Hinjewadi",
    "Shapoorji Pallonji Real Estate Mahalunge",
    "Shapoorji Pallonji Real Estate Baner",
    "Shapoorji Pallonji Real Estate Projects in Pune",
    "Shapoorji Pallonji Vyomora Pune",
    "Shapoorji Pallonji Projects in Hinjewadi",
    "Luxury Apartments Hinjewadi",
    "Premium Flats in Hinjewadi",
    "2 BHK in Hinjewadi Phase 1",
    "3 BHK in Mahalunge Pune",
    "4 BHK in Baner Mahalunge",
    "Sky Duplex Pune West",
    "Simplex Luxury Apartments Hinjewadi",
    "5 BHK Sky Villas Pune",
    "New Launch Projects Hinjewadi",
    "Apartments Near Hinjewadi IT Park",
    "Shapoorji Pallonji Vyomora Price",
    "Shapoorji Pallonji Vyomora Floor Plan",
    "Vyomora Hinjewadi Pre Launch Price",
    "Vyomora Hinjewadi Brochure Download",
    "Shapoorji Vyomora Possession Date",
    "Joyville Vyomora Phase 1 New Launch",
    "Pune Real Estate",
    "Pune Property Market",
    "Property Investment in Pune",
    "Invest in Hinjewadi",
    "Best Residential Projects in Hinjewadi",
    "Shapoorji Pallonji Pune Projects",
    "Joyville Homes Pune",
    "Joyville Sensorium Hinjewadi",
    "Joyville Hadapsar Annexe",
    "Shapoorji Pallonji Wildstone",
    "Shapoorji Pallonji Celestian",
    "Shapoorji Pallonji Vanaha Bavdhan",
    "Best Builder in Pune",
    "High ROI Investment Pune",
    "Luxury Real Estate Pune",
    "Top Properties in West Pune"
  ],
  openGraph: {
    title: "Shapoorji Pallonji Pune | Joyville Homes Pune | Joyville Vyomora Hinjewadi",
    description: "Official portal of Shapoorji Pallonji Real Estate Pune & Joyville Homes. 2, 3 & 4 BHK river-facing residences from ₹84.99 L* with 32,000 sq.ft. clubhouse. MahaRERA: PR1260002600999.",
    url: "https://www.shapoorji-vyomora.com/",
    siteName: "Shapoorji Pallonji Pune - Joyville Homes",
    images: [
      {
        url: "https://www.shapoorji-vyomora.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shapoorji Pallonji Joyville Vyomora Luxury Project in Hinjewadi",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shapoorji Pallonji Pune | Joyville Homes Pune | Joyville Vyomora",
    description: "Official portal for Shapoorji Pallonji Pune and Joyville Homes. Luxury 2, 3 & 4 BHK homes in Hinjewadi Phase 1 from ₹84.99 L*. 32,000+ sq. ft clubhouse.",
    images: ["https://www.shapoorji-vyomora.com/og-image.jpg"],
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
  verification: {
    google: '_plOwnQGpvv_iPs3H6LA4ghAOe9XbJprhoQyky_lWko',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/hero_bg_mobile.webp" type="image/webp" media="(max-width: 768px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/hero_bg.webp" type="image/webp" media="(min-width: 769px)" fetchPriority="high" />
        <link rel="alternate" type="application/rss+xml" title="Shapoorji Pallonji Joyville Vyomora RSS Feed" href="/feed.xml" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Documentation" />
        <link rel="service-doc" type="application/json" href="/.well-known/ai-catalog.json" title="AI Catalog" />
      </head>
      <body 
        className={`${inter.variable} ${playfair.variable} antialiased overflow-x-hidden max-w-full`}
        suppressHydrationWarning
      >
        <StructuredData />
        <Header />
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <ClientModals />
        <SmoothScroll />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
