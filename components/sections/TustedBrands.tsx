import React from 'react';
import Image from 'next/image';

import { brands } from '@/data/homepage';
import { StaggerFadeUpInView } from '../animations/StaggerFadeUpInView';

const TrustedBrands: React.FC = () => {
  const slidingBrands = [...brands, ...brands];

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <StaggerFadeUpInView>
          <div className="text-center max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Trusted by Forward-Thinking Brands
            </h2>
            <p className="text-base md:text-lg text-gray-500">
              From funded startups to established enterprises, WMsols has powered digital products across industries worldwide.
            </p>
          </div>
        </StaggerFadeUpInView>
      </div>

      <div className="relative w-full group/marquee">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-brand-marquee group-hover/marquee:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {slidingBrands.map((brand, index) => (
            <a
              key={`${brand.id}-${index}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${brand.name} website`}
              className="mx-8 sm:mx-12 flex h-24 w-40 shrink-0 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded-md"
            >
              <Image
                src={brand.imageUrl}
                alt={`${brand.name} logo`}
                width={200}
                height={200}
                className="max-h-full max-w-full h-auto w-auto object-contain rounded-md sm:grayscale sm:opacity-70 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
