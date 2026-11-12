import { absolutePageMetadata } from "@/lib/seo";
import OdooHero from "./components/odooHero";
import OdooServices from "./components/odooServices";
import OdooValueProp from "./components/odooValueProp";
import OdooCTA from "./components/odooCTA";

export const metadata = absolutePageMetadata({
  title: "Official Odoo Partner & Development Services | WMsols",
  description: "WMsols provides expert Odoo implementation, custom module development, integration, and training. Partner with our full-stack engineers to scale your business.",
  path: "/odoo",
});

export default function OdooLandingPage() {
  return (
    <div className="min-h-screen bg-[#020617] selection:bg-blue-500/30">
      <OdooHero />
      <OdooServices />
      <OdooValueProp />
      <OdooCTA />
    </div>
  );
}