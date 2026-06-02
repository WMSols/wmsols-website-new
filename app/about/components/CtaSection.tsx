import React from 'react';
import { GradientLight } from '@/components/common/GradientLight';

const CtaSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-150 flex items-center justify-center bg-linear-to-b from-[#060053] to-[#050109]  overflow-hidden px-4 py-20">
      
      {/* Background Lighting Effects */}
      {/* Top Left Purple Light */}
      <GradientLight 
        size={500} 
        top="-30%" 
        left="-15%" 
        color="rgba(147, 51, 234, 0.25)" // Purple hue
        className="z-0"
      />
      
      {/* Bottom Right Teal Light */}
      <GradientLight 
        size={400} 
        bottom="-10%" 
        right="-10%" 
        top="auto" // Override default top value
        color="rgba(20, 184, 166, 0.2)" // Teal hue
        className="z-0"
      />

      {/* Main Glass Card */}
      <div className="relative z-10 w-full max-w-4xl  border border-white/4 backdrop-blur-md rounded-[2rem] p-10 md:p-20 flex flex-col items-center shadow-2xl">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center mb-6 tracking-tight leading-tight">
          Want to Work With a Team That <br className="hidden md:block" /> Cares?
        </h2>
        
        <p className="text-gray-400 text-center text-base md:text-lg mb-10 max-w-2xl leading-relaxed">
          Let's discuss how our engineering expertise can help accelerate
          your business goals.
        </p>
        
        <a 
          href="/contact"
          className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium px-8 py-3.5 rounded-md transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          Let's Talk <span aria-hidden="true">&rarr;</span>
        </a>
        
      </div>
    </section>
  );
};

export default CtaSection;