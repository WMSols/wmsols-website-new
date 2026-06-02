import React from 'react';
import Link from 'next/link';
import { GradientLight } from '@/components/common/GradientLight'; 

const OpenApplicationCTA: React.FC = () => {
  return (
    <section className="relative w-full h-162.5 flex items-center justify-center overflow-hidden bg-linear-to-b from-[#060053] to-[#050109] font-sans">
      
      {/* Subtle light effect at bottom left */}
      <div className="absolute -bottom-32 -left-32 pointer-events-none opacity-70">
        <GradientLight />
      </div>

      {/* Inner Content Box */}
      <div className="relative z-10 w-full max-w-4xl mx-4 px-6 py-16 md:py-24 bg-white/2 border border-white/5 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm shadow-2xl">
        
        <h2 className="text-3xl md:text-[42px] font-medium text-white mb-5 text-center tracking-wide">
          Don’t See the Right Role yet ?
        </h2>
        
        <p className="text-gray-400 text-center max-w-lg mb-10 text-[15px] md:text-base leading-relaxed">
          Let's discuss how our engineering expertise can help accelerate
          your business goals.
        </p>
        
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-7 rounded-md transition-all duration-200 text-sm focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#050109]"
        >
          Send an Open Application &rarr;
        </Link>
        
      </div>
    </section>
  );
};

export default OpenApplicationCTA;