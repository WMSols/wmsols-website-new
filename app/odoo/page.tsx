import { Metadata } from "next";
import OdooHero from "./components/odooHero";
import OdooServices from "./components/odooServices";
import OdooValueProp from "./components/odooValueProp";
import OdooCTA from "./components/odooCTA";

export const metadata: Metadata = {
  title: "Official Odoo Partner & Development Services | WMSols",
  description: "WMSols provides expert Odoo implementation, custom module development, integration, and training. Partner with our full-stack engineers to scale your business.",
  openGraph: {
    title: "Official Odoo Partner | WMSols",
    description: "Expert Odoo implementation, customization, and integration services.",
    images: ["/images/odoo/og-image.jpg"], 
  }
};

export default function OdooLandingPage() {
  return (
    <main className="min-h-screen bg-[#020617] selection:bg-blue-500/30">
      <OdooHero />
      <OdooServices />
      <OdooValueProp />
      <OdooCTA />
    </main>
  );
}