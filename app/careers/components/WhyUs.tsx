import React from 'react';

const WhyUs: React.FC = () => {
  const benefits = [
    {
      title: 'Challenging Work',
      description:
        "You'll work on real products that ship — from AI systems to consumer mobile apps — with the autonomy to architect solutions, not just implement tickets.",
    },
    {
      title: 'Growth Culture',
      description:
        'We invest in our people. Expect regular knowledge-sharing, conference allowances, learning budgets, and genuine mentorship.',
    },
    {
      title: 'Collaborative Environment',
      description:
        'Flat structure, open communication, and a culture where every voice shapes the product and the team.',
    },
    {
      title: 'Flexibility',
      description:
        'Remote-friendly and results-oriented. We care about what you build, not where you build it.',
    },
  ];

  return (
    <div className="w-full py-12 flex flex-col justify-center items-center bg-white px-6 font-sans">
      <div className="max-w-4xl w-full">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-16 md:mb-20">
          Why Build Your Career at WMsols?
        </h1>

        {/* Benefits List */}
        <div className="space-y-10 md:space-y-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row md:items-start group bg-blue-50 border p-5 rounded-lg shadow-sm hover:shadow-xl hover:shadow-black/15 transition-shadow duration-300 gap-4"
            >
              {/* Bold Sub-heading */}
              <div className="md:w-[40%] mb-2 md:mb-0">
                <h1 className="text-[17px] font-bold font-sans text-blue-500 sm:text-black group-hover:text-blue-500 transition-colors duration-300">
                  {benefit.title}
                </h1>
              </div>
              
              {/* Description Text */}
              <div className="md:w-[60%] text-gray-500 leading-relaxed text-[17px]">
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;