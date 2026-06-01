import React from 'react';
import InsightCard, { InsightCardProps } from '@/components/common/InsightCard';
import { insightsData } from '@/data/homepage';


const LatestInsights: React.FC = () => {
  return (
    // min-h-[1000px] ensures it hits your height requirement while allowing flex centering
    <section className="w-full bg-white min-h-250 py-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
              Insights from the WMsols Team
            </h2>
            <p className="text-lg text-gray-400">
              Stay updated with our latest thoughts on technology, design, and digital strategy.
            </p>
          </div>
          
          {/* CTA Button */}
          <a 
            href="/blogs-newsroom"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-gray-300 text-[#3b82f6] font-medium text-sm hover:border-[#3b82f6] hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            View All Posts
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
          {insightsData.map((post, index) => (
            <InsightCard 
              key={index}
              category={post.category}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
              slug={post.slug}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestInsights;