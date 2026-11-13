import { absolutePageMetadata } from "@/lib/seo";
import SubPageHero from "../components/SubPageHero";
import SubPageFeatures from "../components/SubPageFeatures";
import SubPageCTA from "../components/SubPageCTA";
import OdooRelatedLinks from "../components/OdooRelatedLinks";
import { supportHeroData, supportFeaturesData } from "@/data/odoo-pages/supportMaintenanceData";
import { subPageCTAData } from "@/data/odoo-pages/developmentData";

export const metadata = absolutePageMetadata({
  title: "Odoo Support & Maintenance | WMsols",
  description: "Keep your Odoo ERP secure and optimized. WMsols provides bug resolution, version patching, and server administration services.",
  path: "/odoo/support-maintenance",
});

export default function OdooSupportPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      <SubPageHero {...supportHeroData} />
      <SubPageFeatures {...supportFeaturesData} />
      <SubPageCTA {...subPageCTAData} />
      <OdooRelatedLinks currentPath="/odoo/support-maintenance" />
    </div>
  );
}