import { absolutePageMetadata } from "@/lib/seo";
import SubPageHero from "../components/SubPageHero";
import SubPageFeatures from "../components/SubPageFeatures";
import SubPageCTA from "../components/SubPageCTA";
import { integrationHeroData, integrationFeaturesData } from "@/data/odoo-pages/integrationData";
import { subPageCTAData } from "@/data/odoo-pages/developmentData";

export const metadata = absolutePageMetadata({
  title: "Odoo Integration Solutions | WMsols",
  description: "Connect Odoo seamlessly with third-party software, payment gateways, and APIs. Expert API integration by WMsols developers.",
  path: "/odoo/integration",
});

export default function OdooIntegrationPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      <SubPageHero {...integrationHeroData} />
      <SubPageFeatures {...integrationFeaturesData} />
      <SubPageCTA {...subPageCTAData} />
    </div>
  );
}