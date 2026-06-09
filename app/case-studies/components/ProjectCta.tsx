import React from 'react';
import Link from 'next/link';

const ProjectCTA: React.FC = () => {
  return (
    <section 
      className="w-full h-125 flex items-center px-6 sm:px-12 md:px-20 lg:px-32 font-sans relative overflow-hidden"
      style={{
        // 135deg provides the exact diagonal slant shown in the design
        background: 'linear-gradient(135deg, #2776EA 54%, #050130 54%)'
      }}
    >
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-[42px] font-semibold text-white mb-4 tracking-wide">
          Have a similar challenge ?
        </h2>
        
        <p className="text-white/80 text-base md:text-[17px] mb-10 max-w-md leading-relaxed font-light">
          Let's discuss how our engineering expertise can help accelerate
          your business goals.
        </p>
        
        <Link 
        aria-label="Contact us to discuss your project"
          href="/contact"
          className="inline-flex items-center justify-center bg-[#050130] hover:bg-[#08024d] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#2776EA]"
        >
          Let's Talk <span className="ml-2 font-bold">&rarr;</span>
        </Link>
      </div>
<div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-black/20 via-65% to-black" />
 </section>
  );
};

export default ProjectCTA;