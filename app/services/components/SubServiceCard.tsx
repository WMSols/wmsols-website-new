import React from 'react';

interface SubServiceCardProps {
  title: string;
  description: string;
}

export default function SubServiceCard({ title, description }: SubServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
      <h3 className="text-xl font-semibold text-[#4F8BFF] mb-4">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-gray-700">
        {description}
      </p>
    </div>
  );
}