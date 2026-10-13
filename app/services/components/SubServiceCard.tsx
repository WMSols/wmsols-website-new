import React from 'react';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';

interface SubServiceCardProps {
  title: string;
  description: string;
  imageSrc?: string;
}

export default function SubServiceCard({ title, description, imageSrc }: SubServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">
      {imageSrc && (
        <ImagePlaceholder
          src={imageSrc}
          alt={title}
          className="w-full h-24 sm:h-28 2xl:h-32 shrink-0"
          showLabel={false}
        />
      )}
      <div className="p-6 sm:p-8 flex flex-col items-center text-center grow">
        <h1 className="text-xl font-sans font-semibold text-[#4F8BFF] mb-4">
          {title}
        </h1>
        <p className="text-[15px] leading-relaxed text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}
