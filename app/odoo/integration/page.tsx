import { Metadata } from "next";
import SubPageHero from "../components/SubPageHero";
import SubPageFeatures from "../components/SubPageFeatures";
import SubPageCTA from "../components/SubPageCTA";
import { integrationHeroData, integrationFeaturesData } from "@/data/odoo-pages/integrationData";
import { subPageCTAData } from "@/data/odoo-pages/developmentData";

export const metadata: Metadata = {
  title: "Odoo Integration Solutions | WMSols",
  description: "Connect Odoo seamlessly with third-party software, payment gateways, and APIs. Expert API integration by WMSols developers.",
};

export default function OdooIntegrationPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-200">
      <SubPageHero {...integrationHeroData} />
      <SubPageFeatures {...integrationFeaturesData} />
      <SubPageCTA {...subPageCTAData} />
    </main>
  );
}