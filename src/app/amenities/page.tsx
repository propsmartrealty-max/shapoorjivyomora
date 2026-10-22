import { Metadata } from "next";
import Amenities from "@/components/home/Amenities";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: {
    absolute: "32,000 Sq. Ft. Luxury Clubhouse & Amenities | Shapoorji Vyomora",
  },
  description: "Explore 32,000+ sq. ft. of luxury clubhouse amenities, temperature-controlled infinity pool & 40+ lifestyle features at Shapoorji Vyomora Hinjewadi (Joy 3.0).",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/amenities",
  }
};

export default function AmenitiesPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumbs items={[{ label: "Amenities", href: "/amenities" }]} />
      </div>
      <Amenities />
    </div>
  );
}
