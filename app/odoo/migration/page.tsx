import { Metadata } from "next";
import SubPageHero from "../components/SubPageHero";
import SubPageFeatures from "../components/SubPageFeatures";
import SubPageCTA from "../components/SubPageCTA";
import { migrationHeroData, migrationFeaturesData } from "@/data/odoo-pages/migrationData";
import { subPageCTAData } from "@/data/odoo-pages/developmentData";

export const metadata: Metadata = {
  title: "Odoo Migration Services | WMSols",
  description: "Secure, zero-data-loss migrations to modern Odoo environments. Transition smoothly from legacy systems with our expert full-stack engineers.",
};

export default function OdooMigrationPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-200">
      <SubPageHero {...migrationHeroData} />
      <SubPageFeatures {...migrationFeaturesData} />
      <SubPageCTA {...subPageCTAData} />
    </main>
  );
}