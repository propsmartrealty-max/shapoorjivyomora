import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import EnquiryModal from "@/components/EnquiryModal";
import ExitIntentModal from "@/components/ExitIntentModal";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import StructuredData from "@/components/StructuredData";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shapoorji-vyomora.com'),
  alternates: {
    canonical: 'https://www.shapoorji-vyomora.com/',
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
  title: "Shapoorji Pallonji Joyville Vyomora Hinjewadi (Joy 3.0) | Official Website Pune",
  description: "Official portal for Shapoorji Pallonji Joyville Vyomora (Joy 3.0) Hinjewadi Phase 1, Pune. Luxury 2, 3 & 4 BHK apartments from ₹84.99 L* near Rajiv Gandhi Infotech Park. 32,000+ sq. ft. clubhouse, river-facing towers. Possession Dec 2029. MahaRERA: PR1260002600999.",
  keywords: [
    "Joy 3.0",
    "Joyville 3.0",
    "Joy 3.0 Hinjewadi",
    "Joyville Vyomora Joy 3.0",
    "Shapoorji Joy 3.0",
    "Shapoorji Vyomora",
    "Shapoorji Pallonji Vyomora",
    "Joyville Vyomora",
    "Vyomara Hinjewadi",
    "Shapoorji Vyomara Pune",
    "Joyville Vyomara Hinjewadi",
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
    title: "Shapoorji Pallonji Joyville Vyomora Hinjewadi | Joy 3.0 Luxury Residences",
    description: "Official portal of Shapoorji Pallonji Joyville Vyomora (Joy 3.0) Hinjewadi Phase 1, Pune. 2, 3 & 4 BHK river-facing residences from ₹84.99 L* with 32,000 sq.ft. clubhouse. MahaRERA: PR1260002600999.",
    url: "https://www.shapoorji-vyomora.com/",
    siteName: "Shapoorji Pallonji Vyomora",
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
    title: "Shapoorji Pallonji Joyville Vyomora Hinjewadi (Joy 3.0) | Pune",
    description: "Luxury 2, 3 & 4 BHK homes in Hinjewadi Phase 1 from ₹84.99 L*. 32,000+ sq. ft clubhouse.",
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
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased overflow-x-hidden max-w-full`}>
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingCTA />
          <EnquiryModal />
          <ExitIntentModal />
          <WhatsAppWidget />
        </SmoothScroll>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
