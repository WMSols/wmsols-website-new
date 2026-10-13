import React from 'react';
import { heroData } from '@/data/homepage';
import { CircleArrowOutUpRight } from 'lucide-react';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { placeholderImages } from '@/data/placeholder-images';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-32">
      {/* Full-bleed media plane */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          src={placeholderImages.homeHero}
          alt="WMsols team collaborating on digital products"
          className="h-full w-full"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-[#070714]/70 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-b from-[#070714]/40 via-transparent to-[#070714]/80 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 pt-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
          We <span className="text-[#3b82f6]">Build</span> Digital Experiences <br className="hidden md:block" />
          That <span className="text-[#3b82f6]">Matter</span>
        </h1>

        <p className="text-muted-foreground text-center text-lg max-w-3xl mb-10 leading-relaxed">
          {heroData.subHeadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href={heroData.actions.primary.href}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 font-sans font-medium text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-[12px] transition-all duration-300 w-full sm:w-auto"
          >
            {heroData.actions.primary.label}
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>

          <a
            href={heroData.actions.secondary.href}
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 font-sans font-medium text-gray-300 bg-transparent border border-gray-600 hover:border-gray-400 hover:text-white rounded-[12px] transition-all duration-300 w-full sm:w-auto"
          >
            {heroData.actions.secondary.label}
            <CircleArrowOutUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
