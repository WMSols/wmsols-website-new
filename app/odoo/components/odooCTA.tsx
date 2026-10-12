import Link from "next/link";
import { ctaData } from "@/data/odooData";

export default function OdooCTA() {
  return (
    <section className="w-full py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-gray-800 p-10 md:p-16 text-center">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {ctaData.title}
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl">
              {ctaData.description}
            </p>
            <Link
              href={ctaData.href}
              className="inline-flex h-14 items-center justify-center rounded-md bg-blue-600 px-10 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              {ctaData.buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}