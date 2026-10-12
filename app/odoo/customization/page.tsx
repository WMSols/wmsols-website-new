import { Metadata } from "next";
import SubPageHero from "../components/SubPageHero";
import SubPageFeatures from "../components/SubPageFeatures";
import SubPageCTA from "../components/SubPageCTA";
import { customizationHeroData, customizationFeaturesData } from "@/data/odoo-pages/customizationData";
import { subPageCTAData } from "@/data/odoo-pages/developmentData";

export const metadata: Metadata = {
  title: "Odoo Customization Services | WMSols",
  description: "Tailor Odoo to your exact workflows. WMSols specializes in backend customization, UI enhancements, and custom report generation.",
};

export default function OdooCustomizationPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-200">
      <SubPageHero {...customizationHeroData} />
      <SubPageFeatures {...customizationFeaturesData} />
      <SubPageCTA {...subPageCTAData} />
    </main>
  );
}