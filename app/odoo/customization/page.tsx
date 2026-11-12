import { absolutePageMetadata } from "@/lib/seo";
import SubPageHero from "../components/SubPageHero";
import SubPageFeatures from "../components/SubPageFeatures";
import SubPageCTA from "../components/SubPageCTA";
import { customizationHeroData, customizationFeaturesData } from "@/data/odoo-pages/customizationData";
import { subPageCTAData } from "@/data/odoo-pages/developmentData";

export const metadata = absolutePageMetadata({
  title: "Odoo Customization Services | WMsols",
  description: "Tailor Odoo to your exact workflows. WMsols specializes in backend customization, UI enhancements, and custom report generation.",
  path: "/odoo/customization",
});

export default function OdooCustomizationPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      <SubPageHero {...customizationHeroData} />
      <SubPageFeatures {...customizationFeaturesData} />
      <SubPageCTA {...subPageCTAData} />
    </div>
  );
}