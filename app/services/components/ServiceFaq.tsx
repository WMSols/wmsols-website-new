"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '@/data/services'; // Adjust import based on your actual types location

export default function ServiceFaq({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mx-auto w-full space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="border border-[#2a2656] rounded-lg overflow-hidden transition-colors duration-300 hover:border-[#4F8BFF]"
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full px-6 py-5 flex justify-between items-center text-left bg-[#08021c]/50 focus:outline-none"
          >
            <span className="text-lg md:text-xl text-gray-100 font-medium pr-4">
              {faq.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-[#4F8BFF] shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#4F8BFF] shrink-0" />
            )}
          </button>
          
          <div 
            className={`grid transition-all duration-300 ease-in-out ${
              openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-6 pt-2 text-gray-300 text-sm md:text-base leading-relaxed bg-[#08021c]/50">
                <div className="w-12 h-px bg-gray-600 mb-4"></div>
                {faq.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}