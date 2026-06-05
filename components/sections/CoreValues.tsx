import React from 'react';
import { valuesData } from '@/data/homepage';

// --- COMPONENT ---
const CoreValues: React.FC = () => {
  return (
    <section className="bg-[#F1F2FF] w-full  pt-20 pb-30  flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-5/12 text-center lg:text-left pt-10 lg:pt-0">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-[#0F172A] leading-tight mb-6">
            Values That <br className="hidden lg:block" /> Drive Excellence
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
            We believe in building more than just software. We build partnerships grounded in core principles that ensure mutual success.
          </p>
        </div>

        {/* Right Side: Cards Grid */}
        <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6 w-full max-w-2xl sm:px-16">
            {valuesData.map((card, index) => {
              const Icon = card.icon;
              // Apply a top margin/translation to the 2nd and 4th cards (index 1 and 3) on tablet/desktop
              const isEven = index % 2 !== 0; 
              
              return (
                <div 
                  key={card.id} 
                  className={`bg-white w-60 rounded-3xl p-6 group   sm:py-10  flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-black/25 ${
                    isEven ? 'sm:translate-y-16' : ''
                  }`}
                >
                  {/* Icon Wrapper */}
                  <div className="w-14 h-14 rounded-full bg-blue-500 transition-colors duration-300 flex items-center justify-center mb-6 ">
                    <Icon className="w-6 h-6 text-[#ffffff] group-hover:rotate-z-16 transition-all duration-300" strokeWidth={2} />
                  </div>
                  
                  {/* Card Content */}
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreValues;