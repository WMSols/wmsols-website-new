import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section 
      className="w-full min-h-175 flex flex-col md:flex-row bg-[linear-gradient(180deg,#050130_45%,#2776EA_55%)] md:bg-[linear-gradient(110deg,#050130_50%,#2776EA_50%)]"
    >
      {/* Left Section: Explore our Work */}
      <div className="flex-1 flex flex-col justify-center md:justify-start pt-16 md:pt-40 px-8 md:px-16 lg:px-24 text-white">
        <div className="max-w-md">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Explore our Work
          </h2>
          <p className="text-gray-300 mb-8 text-base leading-relaxed">
            See how WMsols has shaped challenges into digital solutions
          </p>
          <Link 
            href="/case-studies" 
            className="bg-[#2776EA] text-white px-7 py-3.5 group rounded-full flex items-center w-fit font-medium hover:bg-blue-600 transition-colors duration-300"
          >
            View Case Studies <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300   " />
          </Link>
        </div>
      </div>

      {/* Right Section: Have a Project in Mind ? */}
      <div className="flex-1 flex flex-col justify-center md:justify-end pb-16 md:pb-40 px-8 md:px-16 lg:px-24 text-white">
        <div className="max-w-md md:ml-12 lg:ml-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Have a Project in Mind ?
          </h2>
          <p className="text-gray-100 mb-8 text-base leading-relaxed">
            We'd love to understand your challenge. Let's explore how we can build the right solution together.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-[#050130] px-7 group py-3.5 rounded-full flex items-center w-fit font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch <ArrowRight className="ml-2 w-4 h-4 text-[#050130] group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}