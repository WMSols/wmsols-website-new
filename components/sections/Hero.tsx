import React from 'react';
import { GradientLight } from '../common/GradientLight';
import { heroData } from '@/data/homepage';
import { CircleArrowOutUpRight } from 'lucide-react';
import { StaggerFadeUpInView } from '../animations/StaggerFadeUpInView';


export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#070714] overflow-hidden px-4 py-32">
      {/* Background Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#ffffff 1px, transparent 1px), 
            linear-gradient(90deg, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      />

      {/* Lighting Effects */}
      <GradientLight 
        size={450} 
        top="200px" 
        right="0" 
      />
      {/* Optional secondary light based on your image (left side, slightly purple) */}
      <GradientLight 
        size={500} 
        top="50px" 
        left="-150px" 
        color="rgba(76, 29, 149, 0.25)" 
      />

      {/* Main Content */}
      <div className="relative z-10  pt-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        <StaggerFadeUpInView className="relative z-10  pt-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
          We <span className="text-[#3b82f6]">Build</span> Digital Experiences <br className="hidden md:block" />
          That <span className="text-[#3b82f6]">Matter</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-gray-400 text-center md:text-xl max-w-3xl mb-10 leading-relaxed">
          {heroData.subHeadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a 
            href={heroData.actions.primary.href}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5  font-sans font-medium text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-[12px] transition-all duration-300 w-full sm:w-auto"
          >
            {heroData.actions.primary.label}
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          
          <a 
            href={heroData.actions.secondary.href}
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5  font-sans font-medium text-gray-300 bg-transparent border border-gray-600 hover:border-gray-400 hover:text-white rounded-[12px] transition-all duration-300 w-full sm:w-auto"
          >
            {heroData.actions.secondary.label}
          <CircleArrowOutUpRight size={16} />
          </a>
        </div>
        </StaggerFadeUpInView>
      </div>
    </section>
  );
};