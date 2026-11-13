import type { Metadata } from "next";
import BottomCta from "@/components/sections/BottomCta";
import { CompanyStats } from "@/components/sections/CompanyStats";
import CoreValues from "@/components/sections/CoreValues";
import { Hero } from "@/components/sections/Hero";
import LatestInsights from "@/components/sections/LatestInsights";
import OdooPartnershipCard from "@/components/sections/OdooPartnerCard";
import { ServicesCardsGrid } from "@/components/sections/ServiceCardsGrid";
import TrustedBrands from "@/components/sections/TustedBrands";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.wmsols.com/",
  },
};

export default function Home() {
  return (
    <>
      <Hero/>
      <CompanyStats/>
      <OdooPartnershipCard/>
      <ServicesCardsGrid/>
      <TrustedBrands/>
      <CoreValues/>
      <LatestInsights/>
      <BottomCta/>
    </>
  );
}
