import Link from "next/link";
import { Settings, Database, Layout, Code } from "lucide-react";
import Image from "next/image";

export default function OdooPartnershipCard() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-5xl mx-auto relative rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-10 group">
         
         <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 md:hidden pointer-events-none">
          <Image src="/images/odoo_logo.png" alt="Odoo Community Logo" width={350} height={250} className="object-contain " /> 
          </div> 
        {/* Background Floating Blurred Icons */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Top Left Icon */}
          <Settings className="absolute -top-12 -left-12 w-48 h-48 text-[#714B67]/10 blur-[3px] -rotate-12 transition-transform duration-700 group-hover:rotate-0" />
          {/* Center Right Icon */}
          <Database className="absolute top-1/2 right-[30%] w-32 h-32 text-[#714B67]/5 blur-[2px] -translate-y-1/2" />
          {/* Bottom Right Icon */}
          <Layout className="absolute -bottom-10 -right-10 w-56 h-56 text-[#714B67]/10 blur-[4px] rotate-12" />
        </div>

        {/* Left Content Area */}
        <div className="relative z-10 flex flex-col items-start text-left max-w-xl">
          <span className="text-sm font-bold tracking-widest text-[#3b82f6] uppercase mb-4">
            Explore Odoo with WMSols
          </span>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            WMSols is an Official Partner with <span className="text-[#714B67]">Odoo</span>
          </h2>
          
          <p className="text-lg text-slate-600 mb-8">
            Transform your business operations with our certified full-stack ERP integration, custom module development, and strategic migration services.
          </p>
          
          <Link 
            href="/odoo" 
            className="inline-flex h-14 items-center justify-center rounded-lg bg-[#3b82f6] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#1454ba] hover:shadow-[0_0_20px_rgba(113,75,103,0.3)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0b57a3] focus:ring-offset-2"
          >
            Explore Odoo Services
          </Link>
        </div>

        {/* Right Content - Logo Placeholder Area */}
       
         <Image src="/images/odoo_logo.png" alt="Odoo Community Logo" width={350} height={250} className="object-contain hidden md:block" /> 

      </div>
    </section>
  );
}