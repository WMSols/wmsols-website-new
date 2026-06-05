import SingleBlurView from '@/components/animations/SingleBlurView';
import StaggerBlurView from '@/components/animations/StaggerBlurView';
import React from 'react';

// --- TYPES ---
interface ValueItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

// --- DATA ---
const valuesData: ValueItem[] = [
  {
    id: 'val-1',
    number: '01',
    title: 'Craftsmanship',
    description: 'Quality in architecture and UI.'
  },
  {
    id: 'val-2',
    number: '02',
    title: 'Transparency',
    description: 'No black boxes. We communicate openly, share progress honestly, and treat our clients as true partners in the process.'
  },
  {
    id: 'val-3',
    number: '03',
    title: 'Impact',
    description: 'We build technology that solves real problems, creates real value, and makes a measurable difference for the people who use it.'
  },
  {
    id: 'val-4',
    number: '04',
    title: 'Growth',
    description: "We invest in our team's continuous learning because the best solutions come from people who never stop developing their craft."
  }
];

// --- CARD COMPONENT ---
const ValueCard: React.FC<{ data: ValueItem; index: number }> = ({ data, index }) => {
  // Check if the index is even (0, 2) to align left, or odd (1, 3) to align right
  const isEven = index % 2 === 0;

  return (
    <div 
      className={`w-full md:w-[60%]  rounded-xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-black/60   hover:-translate-y-1 ${
        isEven ? 'md:self-start' : 'md:self-end'
      }`}
      style={{
        background:"linear-gradient(to right, #408EFF 2%, #FFFFFF 2%, #FFFFFF 98%, #408EFF 96%)"
      }}
    >
      <SingleBlurView>
      <span className="text-3xl font-bold text-blue-200 mb-2 block">
        {data.number}
      </span>
      <h3 className="text-3xl font-bold text-black mb-3">
        {data.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {data.description}
      </p>
      </SingleBlurView>
    </div>
  );
};

// --- MAIN COMPONENT ---
const OurValues: React.FC = () => {
  return (
    // min-h-[900px] guarantees the height while preventing overflow breaks on smaller mobile screens
    <section className="w-full min-h-225 bg-linear-to-b from-[#050109] via-[#471793] to-[#060053] py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col">
        
        {/* Section Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white text-center mb-16 md:mb-24 tracking-wide">
          What We Stand For
        </h1>

        {/* Cards Wrapper */}
        <div className="flex flex-col gap-6 md:gap-4 w-full relative">
          {valuesData.map((val, index) => (
            <ValueCard key={val.id}  data={val} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurValues;