import React from 'react';

// --- DEFAULT ICON MATCHING THE SCREENSHOT ---
const DefaultCodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
    <polyline points="10 8 8 10 10 12" />
    <polyline points="14 8 16 10 14 12" />
  </svg>
);

// --- TYPES ---
export interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: 'dark' | 'light';
  href?: string;
}

// --- COMPONENT ---
export const ServiceCard: React.FC<ServiceCardProps> = ({
  title = "Web Development",
  description = "High-performance websites and web applications built on modern stacks — Next.js, React, Node.js — for speed, scale, and exceptional user experiences.",
  icon = <DefaultCodeIcon />,
  variant = "light",
  href = "#"
}) => {
  const isDark = variant === 'dark';

  return (
    <a 
      href={href}
      className={`
        group relative flex flex-col w-full max-w-[550px] min-h-[500px] sm:h-[600px] 
        rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2
        ${isDark 
          ? 'bg-[#150229] border border-[#1c028f63] shadow-2xl' 
          : 'bg-white border border-gray-200 shadow-xl drop-shadow-sm'
        }
      `}
    >
      {/* HEADER SECTION
        Light variant uses a full-width blue background block. 
        Dark variant uses a transparent background block.
      */}
      <div 
        className={`
          flex items-center justify-center gap-4 pt-16 pb-12 px-6
          ${isDark ? 'bg-transparent' : 'bg-[#3b82f6]'}
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
          {icon}
        </div>
        
        <h3 className="text-3xl font-bold text-white tracking-wide">
          {title}
        </h3>
      </div>

      {/* BODY SECTION */}
      <div className="flex flex-col grow px-10 md:px-14">
        {/* Description */}
        <div className="grow flex items-center justify-center">
          <p 
            className={`
              text-center text-[1.1rem] leading-[1.8] font-medium
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
                ? 'text-gray-300 group-hover:text-white' 
                : 'text-gray-600 group-hover:text-[#3b82f6]'
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
        </div>
      </div>
    </a>
  );
};