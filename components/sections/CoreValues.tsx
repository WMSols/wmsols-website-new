import React from 'react';
import { valuesData } from '@/data/homepage';
import StaggerBlurView from '../animations/StaggerBlurView';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { placeholderImages } from '@/data/placeholder-images';

const CoreValues: React.FC = () => {
  return (
    <section className="relative w-full pt-20 pb-30 flex items-center overflow-hidden">
      {/* Full-section background image */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          src={placeholderImages.coreValues}
          alt="WMsols team values and collaboration"
          className="h-full w-full"
          showLabel
        />
      </div>
      <div className="absolute inset-0 bg-[#F1F2FF]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-[#F1F2FF]/95 via-[#F1F2FF]/80 to-[#F1F2FF]/55 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

        {/* Left Side: Text only */}
        <div className="w-full lg:w-5/12 text-center lg:text-left pt-10 lg:pt-0">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-[#0F172A] leading-tight mb-6">
            Values That <br className="hidden lg:block" /> Drive Excellence
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
            We believe in building more than just software. We build partnerships grounded in core principles that ensure mutual success.
          </p>
        </div>

        {/* Right Side: Cards Grid */}
        <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6 w-full max-w-2xl sm:px-16">
            {valuesData.map((card, index) => {
              const Icon = card.icon;
              const isEven = index % 2 !== 0;

              return (
                <StaggerBlurView
                  key={card.id}
                  className={`bg-white/95 backdrop-blur-sm w-60 rounded-3xl p-6 group sm:py-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:shadow-black/25 ${
                    isEven ? 'sm:translate-y-16' : ''
                  }`}
                >
                  <div className="w-14 h-14 rounded-full bg-blue-500 transition-colors duration-300 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#ffffff] group-hover:rotate-z-16 transition-all duration-300" strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {card.description}
                  </p>
                </StaggerBlurView>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
