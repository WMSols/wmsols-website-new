import { absolutePageMetadata } from "@/lib/seo";
import SubPageHero from "../components/SubPageHero";
import SubPageFeatures from "../components/SubPageFeatures";
import SubPageCTA from "../components/SubPageCTA";
import OdooRelatedLinks from "../components/OdooRelatedLinks";
import { migrationHeroData, migrationFeaturesData } from "@/data/odoo-pages/migrationData";
import { subPageCTAData } from "@/data/odoo-pages/developmentData";

export const metadata = absolutePageMetadata({
  title: "Odoo Migration Services | WMsols",
  description: "Secure, zero-data-loss migrations to modern Odoo environments. Transition smoothly from legacy systems with our expert full-stack engineers.",
  path: "/odoo/migration",
});

export default function OdooMigrationPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      <SubPageHero {...migrationHeroData} />
      <SubPageFeatures {...migrationFeaturesData} />
      <SubPageCTA {...subPageCTAData} />
      <OdooRelatedLinks currentPath="/odoo/migration" />
    </div>
  );
}