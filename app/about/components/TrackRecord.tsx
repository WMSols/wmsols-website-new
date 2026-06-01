import React from 'react';
import { trustStats } from '@/data/homepage';

const TrackRecord: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-white flex justify-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-medium text-center text-gray-900 mb-16 tracking-tight">
          Our Track Record
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-[#F8F9FF] border border-[#Eef1FF] rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out group"
            >
              {/* Value & Suffix */}
              <div className="text-6xl font-bold text-[#3b82f6] mb-4 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {stat.value}
                <span>{stat.suffix}</span>
              </div>
              
              {/* Label */}
              <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrackRecord;