import { Metadata } from "next";
import MasterLayout from "@/components/home/MasterLayout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: {
    absolute: "Masterplan & Site Layout | Shapoorji Vyomora Hinjewadi",
  },
  description: "View the 25-acre riverfront masterplan and tower layout of Shapoorji Vyomora Hinjewadi (Joy 3.0) near Rajiv Gandhi IT Park Phase 1, Pune. MahaRERA: PR1260002600999.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/masterplan",
  }
};

export default function MasterplanPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumbs items={[{ label: "Masterplan", href: "/masterplan" }]} />
      </div>
      <MasterLayout />
    </div>
  );
}
