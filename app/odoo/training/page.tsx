import { absolutePageMetadata } from "@/lib/seo";
import SubPageHero from "../components/SubPageHero";
import SubPageFeatures from "../components/SubPageFeatures";
import SubPageCTA from "../components/SubPageCTA";
import { trainingHeroData, trainingFeaturesData } from "@/data/odoo-pages/trainingData";
import { subPageCTAData } from "@/data/odoo-pages/developmentData";

export const metadata = absolutePageMetadata({
  title: "Odoo User & Admin Training | WMsols",
  description: "Comprehensive Odoo training programs to ensure high adoption rates and smooth workflows for your team and administrators.",
  path: "/odoo/training",
});

export default function OdooTrainingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      <SubPageHero {...trainingHeroData} />
      <SubPageFeatures {...trainingFeaturesData} />
      <SubPageCTA {...subPageCTAData} />
    </div>
  );
}