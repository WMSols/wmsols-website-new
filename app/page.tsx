import { CompanyStats } from "@/components/sections/CompanyStats";
import { Hero } from "@/components/sections/Hero";
import { ServicesCardsGrid } from "@/components/sections/ServiceCardsGrid";

export default function Home() {
  return (
    <main>
      <Hero/>
      <CompanyStats/>
      <ServicesCardsGrid/>
    </main>
  );
}
