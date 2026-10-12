import Link from "next/link";
import { heroData } from "@/data/odooData";

export default function OdooHero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center pt-32 pb-20 text-center px-4">
      {/* Background Grid & Glow (Mimicking the WMSols Homepage) */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          {heroData.headlineStart}{" "}
          <span className="text-blue-500">{heroData.headlineHighlight}</span>{" "}
          <br className="hidden md:block" />
          {heroData.headlineEnd}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          {heroData.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href={heroData.primaryCTA.href}
            className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            {heroData.primaryCTA.label}
          </Link>
          <Link
            href={heroData.secondaryCTA.href}
            className="inline-flex h-12 items-center justify-center rounded-md border border-gray-700 bg-transparent px-8 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            {heroData.secondaryCTA.label}
          </Link>
        </div>
      </div>
    </section>
  );
}