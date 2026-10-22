import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Story from "@/components/home/Story";
import Amenities from "@/components/home/Amenities";
import MasterLayout from "@/components/home/MasterLayout";
import Pricing from "@/components/home/Pricing";
import GoogleReviews from "@/components/home/GoogleReviews";
import Specifications from "@/components/home/Specifications";
import Location from "@/components/home/Location";
import Connectivity from "@/components/home/Connectivity";
import ShapoorjiPuneEcosystem from "@/components/home/ShapoorjiPuneEcosystem";
import AboutDeveloper from "@/components/home/AboutDeveloper";
import HomeFAQ from "@/components/home/HomeFAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Shapoorji Vyomora Hinjewadi | Official Joyville Homes Portal",
  },
  description: "Official portal for Shapoorji Vyomora Hinjewadi by Joyville Homes & Shapoorji Pallonji. Luxury 2, 3, 4 BHK & Sky Duplexes from ₹84.99 L* in Hinjewadi Phase 1, Pune. MahaRERA: PR1260002600999.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/",
    languages: {
      "en-IN": "https://www.shapoorji-vyomora.com/",
      "en-US": "https://www.shapoorji-vyomora.com/",
      "en-AE": "https://www.shapoorji-vyomora.com/",
      "en-GB": "https://www.shapoorji-vyomora.com/",
      "en-SG": "https://www.shapoorji-vyomora.com/",
      "en-CA": "https://www.shapoorji-vyomora.com/",
      "en-AU": "https://www.shapoorji-vyomora.com/",
      "x-default": "https://www.shapoorji-vyomora.com/",
    },
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Story />
      <Amenities />
      <MasterLayout />
      <Pricing />
      <GoogleReviews />
      <Specifications />
      <Location />
      <Connectivity />
      <ShapoorjiPuneEcosystem />
      <AboutDeveloper />
      <HomeFAQ />
    </>
  );
}
