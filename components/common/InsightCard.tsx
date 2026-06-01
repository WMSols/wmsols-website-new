import React from 'react';
import Image from 'next/image';

export interface InsightCardProps {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ 
  category, 
  date, 
  title, 
  excerpt, 
  imageUrl, 
  slug 
}) => {
  return (
    <a 
      href={`/blogs-newsroom/${slug}`} 
      className="flex flex-col w-full max-w-100 bg-white rounded-2xl border border-gray-200 shadow-sm shadow-[0_4px_25px_rgb(0,0,0,0.08)] transition-all duration-300 overflow-hidden group mx-auto"
    >
      {/* Image Container - Fixed at 380px height */}
      <div className="relative w-full h-95 overflow-hidden bg-gray-50">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      
      {/* Content Container */}
      <div className="p-6 md:p-8 flex flex-col grow bg-white">
        <div className="flex items-center text-sm mb-4">
          <span className="text-[#3b82f6] font-medium">{category}</span>
          <span className="mx-3 text-gray-300">•</span>
          <span className="text-gray-500">{date}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-500 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </div>
    </a>
  );
};

export default InsightCard;