import React from 'react';
import { ServiceCard } from "@/components/common/ServiceCard"
import { servicesData } from '@/data/services';

export const ServicesCardsGrid: React.FC = () => {
  return (
    <section className="bg-linear-to-b from-[#030015] from-0% via-[#18022D] via-40% to-[#080112] to-100% py-20 md:py-32 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <span className="text-[#3b82f6] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-2xl">
            Solutions Engineered for Your Success
          </h2>
        </div>

        {/* --- GRID SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-6 lg:px-8 justify-items-center">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              href={service.href}
              Icon={service.icon}
              variant="dark"
            />
          ))}
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <a 
            href="/services" 
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            Explore All Services 
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};