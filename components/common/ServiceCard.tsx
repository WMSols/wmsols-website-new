import { Computer, LucideIcon } from 'lucide-react';
import React from 'react';
// --- TYPES ---
export interface ServiceCardProps {
  title?: string;
  description?: string;
  Icon?: React.ElementType; // Accepting the icon component directly
  variant?: 'dark' | 'light';
  href?: string;
}

// --- COMPONENT ---
export const ServiceCard: React.FC<ServiceCardProps> = ({
  title = "Web Development",
  description = "High-performance websites and web applications built on modern stacks — Next.js, React, Node.js — for speed, scale, and exceptional user experiences.",
  Icon = Computer ,
  variant = "light",
  href = "#"
}) => {
  const isDark = variant === 'dark';

  return (
    // 
    <a 
      href={href}
      className={`
        group relative flex flex-col w-full max-w-105 h-90 
        rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2
        ${isDark 
          ? 'bg-[#00193D] border border-[#0a009963] shadow-2xl shadow-blue-800/20' 
          : 'bg-white border border-gray-200 shadow-xl drop-shadow-sm'
        }
      `}
    >
      <div 
        className={`
          flex items-center  gap-4 pt-4 pb-3 px-6
          bg-transparent '}
        `}
      >
        {/* Icon Wrapper */}
        <div 
          className={`
            flex items-center justify-center w-14 h-14 rounded-xl shrink-0
            ${isDark 
              ? 'bg-[#3b82f6] text-white' 
              : 'bg-[#2563eb] text-white shadow-inner' // Slightly darker blue for contrast against the blue header
            }
          `}
        >
          <Icon size={30}/>
        </div>
        
        <h3 className={` text-xl ${isDark ? 'text-white' : 'text-gray-800'} font-bold tracking-wide`}>
          {title}
        </h3>
      </div>

      {/* BODY SECTION */}
      <div className="flex flex-col grow px-2 ">
        {/* Description */}
        <div className="grow flex items-center ">
          <p 
            className={`
             px-3  leading-[1.8] font-medium
              ${isDark ? 'text-gray-300' : 'text-gray-600'}
            `}
          >
            {description}
          </p>
        </div>

        {/* Footer / CTA */}
        <div className="pb-12 pt-6 flex justify-center items-center">
          <span 
            className={`
              flex items-center gap-2 text-sm font-semibold transition-colors duration-300
              ${isDark 
                ? 'text-gray-300 group-hover:text-white ' 
                : 'text-gray-600 group-hover:text-[#3b82f6] '
              }
            `}
          >
            View Details
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
         {
          !isDark &&
           <span className="absolute bottom-0 h-2 w-full bg-[#3680f8]"></span>
         }
        </div>
      </div>
    </a>
  );
};