 import { trustStats } from '@/data/homepage';
import React from 'react';

// --- TYPES ---
export interface StatItem {
  value: number | string;
  suffix: string;
  label: string;
}



// --- COMPONENT ---
export const CompanyStats: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 min-h-95 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container with automatic dividers */}
        <div className="flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          {trustStats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center  w-full md:w-1/4 py-8 md:py-0 group cursor-pointer"
            >
              <h3 className="text-4xl md:text-[3.25rem] font-bold text-theme mb-3 tracking-tight group-hover:scale-110 transition-all duration-300">
                {/* Note: Because we separated value and suffix in the data structure, 
                  you can easily wrap `stat.value` in an animation library like 
                  <CountUp end={Number(stat.value)} /> right here later if desired.
                */}
                <span>{stat.value}</span>
                <span>{stat.suffix}</span>
              </h3>
              
              <p className="text-sm sm:text-base text-gray-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
          
        </div>
        
      </div>
    </section>
  );
};