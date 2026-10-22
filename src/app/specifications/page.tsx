import { Metadata } from "next";
import Specifications from "@/components/home/Specifications";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: {
    absolute: "Specifications & Mivan Engineering | Shapoorji Vyomora",
  },
  description: "Detailed construction and luxury finishing specifications for Shapoorji Vyomora Hinjewadi: aluminium Mivan formwork, vitrified marble flooring & smart home tech.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/specifications",
  }
};

export default function SpecificationsPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumbs items={[{ label: "Specifications", href: "/specifications" }]} />
      </div>
      <Specifications />
    </div>
  );
}
