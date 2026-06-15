"use client"; // Required because we are adding an onClick event for analytics

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { trackPortfolioClick } from '@/lib/analytics'; // Import the tracking function

export interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  techStack: string[] | string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  title,
  description,
  imageUrl,
  slug,
  techStack
}) => {
  // 1. Normalize the tech stack data BEFORE rendering.
  // This prevents the browser from running .split() multiple times during the render cycle.
  const parsedTechStack = useMemo(() => {
    return typeof techStack === 'string' ? techStack.split(', ') : techStack;
  }, [techStack]);

  return (
    <div className="flex flex-col w-full bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden group">
      {/* Image Container */}
      <div className="relative w-full h-56 overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={`${title} project thumbnail`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          // 2. Optimized sizes for a standard responsive grid 
          // (1 column on mobile, 2 on tablet, 3 on desktop)
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
       </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow bg-white">
        <span className="text-blue-500 text-xs font-semibold uppercase tracking-wider mb-2">
          {category}
        </span>

        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* 3. Cleaned up Tech Stack JSX */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-blue-400/70 mb-6 grow">
          {parsedTechStack.map((tech, idx) => (
            <React.Fragment key={idx}>
              <span>{tech}</span>
              {idx < parsedTechStack.length - 1 && <span>•</span>}
            </React.Fragment>
          ))}
        </div>

        <Link
          href={`/case-studies/${slug}`}
          // 4. Analytics wired up to track exactly which projects are getting clicked
          onClick={() => trackPortfolioClick(title, category)}
          className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 rounded-full transition-colors text-sm"
        >
          View Case Study
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;