import { Metadata } from "next";
import SubPageHero from "../components/SubPageHero";
import SubPageFeatures from "../components/SubPageFeatures";
import SubPageCTA from "../components/SubPageCTA";
import { supportHeroData, supportFeaturesData } from "@/data/odoo-pages/supportMaintenanceData";
import { subPageCTAData } from "@/data/odoo-pages/developmentData";

export const metadata: Metadata = {
  title: "Odoo Support & Maintenance | WMSols",
  description: "Keep your Odoo ERP secure and optimized. WMSols provides bug resolution, version patching, and server administration services.",
};

export default function OdooSupportPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-200">
      <SubPageHero {...supportHeroData} />
      <SubPageFeatures {...supportFeaturesData} />
      <SubPageCTA {...subPageCTAData} />
    </main>
  );
}