import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface InsightCardProps {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  readTime?: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ 
  category, 
  date, 
  title, 
  excerpt, 
  imageUrl, 
  slug,
  readTime = "5 min read"
}) => {
  return (
    <Link 
      href={`/blogs-newsroom/${slug}`} 
      className="flex flex-col w-full bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 overflow-hidden group hover:shadow-md hover:border-gray-200"
    >
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden bg-gray-50">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-103 transition-transform duration-500 ease-in-out"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      
      {/* Content Container */}
      <div className="p-6 flex flex-col justify-between grow bg-white">
        <div>
          <div className="flex items-center text-xs font-medium tracking-wide uppercase mb-3">
            <span className="text-blue-500">{category}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-400">{date}</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
            {excerpt}
          </p>
        </div>

        <div className="text-xs text-gray-400 font-medium">
          {readTime}
        </div>
      </div>
    </Link>
  );
};

export default InsightCard;