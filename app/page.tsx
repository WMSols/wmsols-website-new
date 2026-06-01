import { CompanyStats } from "@/components/sections/CompanyStats";
import CoreValues from "@/components/sections/CoreValues";
import { Hero } from "@/components/sections/Hero";
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
    </main>
  );
}
