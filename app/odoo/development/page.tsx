import { Metadata } from "next";
import SubPageHero from "../components/SubPageHero";
import SubPageFeatures from "../components/SubPageFeatures";
import SubPageCTA from "../components/SubPageCTA";
import { 
  developmentHeroData, 
  developmentFeaturesData, 
  subPageCTAData 
} from "@/data/odoo-pages/developmentData";

export const metadata: Metadata = {
  title: "Custom Odoo Development Services | WMSols",
  description: "Build custom Odoo modules and applications using Python, XML, and OWL. WMSols provides expert full-stack Odoo development tailored to your business needs.",
};

export default function OdooDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-200">
      <SubPageHero 
        title={developmentHeroData.title}
        titleHighlight={developmentHeroData.titleHighlight}
        description={developmentHeroData.description}
        imageSrc={developmentHeroData.imageSrc}
        imageAlt={developmentHeroData.imageAlt}
      />
      
      <SubPageFeatures 
        sectionTitle={developmentFeaturesData.sectionTitle}
        sectionDescription={developmentFeaturesData.sectionDescription}
        features={developmentFeaturesData.features}
      />
      
      <SubPageCTA 
        title={subPageCTAData.title}
        description={subPageCTAData.description}
        buttonLabel={subPageCTAData.buttonLabel}
        href={subPageCTAData.href}
      />
    </main>
  );
}