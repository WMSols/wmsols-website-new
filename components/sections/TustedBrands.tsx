import React from 'react';
import Image from 'next/image';

import { brands } from '@/data/homepage';

const TrustedBrands: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Heading Section */}
        <div className="text-center max-w-4xl mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Trusted by Forward-Thinking Brands
          </h2>
          <p className="text-base md:text-lg text-gray-500">
            From funded startups to established enterprises, WMsols has powered digital products across industries worldwide.
          </p>
        </div>

        {/* Logos Grid Section */}
        {/* grid-cols-2 for mobile, md:grid-cols-4 for tablet, lg:grid-cols-5 for desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center w-full">
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              className="relative w-full max-w-40 h-16 flex items-center justify-center group"
            >
              {/* Using Next.js Image component for optimization.
                The grayscale and opacity classes handle the default state,
                while the group-hover classes handle the colored state.
              */}
              <Image
                src={brand.imageUrl}
                alt={`${brand.name} logo`}
                fill
                className="object-contain grayscale opacity-60 transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 cursor-pointer"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedBrands;