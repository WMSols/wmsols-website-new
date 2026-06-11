import React from 'react';
import Image from 'next/image';

import { brands } from '@/data/homepage';
import { StaggerFadeUpInView } from '../animations/StaggerFadeUpInView';
import { div } from 'motion/react-client';

const TrustedBrands: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <StaggerFadeUpInView>
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
              <div key={brand.id} className="w-full flex flex-col items-center gap-2">
                {/* 1. Set a fixed height (e.g., h-24) or max-height on the container 
        so the images have a defined space to fit into.
      */}
                <div className="relative w-full max-w-40 h-24 flex items-center justify-center group">

                  {/* 2. Removed 'fill'.
          3. Added arbitrary width/height (Next.js uses these for the intrinsic aspect ratio).
          4. Added 'w-auto h-auto max-w-full max-h-full' so the tag perfectly wraps the logo.
          5. 'rounded-md' now accurately clips the edges of the image itself.
        */}
                  <Image
                    src={brand.imageUrl}
                    alt={`${brand.name} logo`}
                    width={200}
                    height={200}
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-md grayscale opacity-70 transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 cursor-pointer"
                  />
                </div>
                <p className="text-muted-foreground text-xs">{brand.name}</p>
              </div>
            ))}
          </div>
        </StaggerFadeUpInView>
      </div>
    </section>
  );
};

export default TrustedBrands;