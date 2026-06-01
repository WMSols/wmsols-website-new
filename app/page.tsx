import BottomCta from "@/components/sections/BottomCta";
import { CompanyStats } from "@/components/sections/CompanyStats";
import CoreValues from "@/components/sections/CoreValues";
import { Hero } from "@/components/sections/Hero";
import LatestInsights from "@/components/sections/LatestInsights";
import { ServicesCardsGrid } from "@/components/sections/ServiceCardsGrid";
import TrustedBrands from "@/components/sections/TustedBrands";

export default function Home() {
  return (
    <main>
      <Hero/>
      <CompanyStats/>
      <ServicesCardsGrid/>
      <TrustedBrands/>
      <CoreValues/>
      <LatestInsights/>
      <BottomCta/>
    </main>
  );
}
