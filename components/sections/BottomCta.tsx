import React from 'react';
import { X } from 'lucide-react';
import { StaggerFadeUpInView } from '../animations/StaggerFadeUpInView';

const BottomCta: React.FC = () => {
  return (
    <section className="w-full h-162.5 bg-linear-to-b  from-[#08034C] to-[#050109] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <StaggerFadeUpInView className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading Area */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight mb-8">
          Ready to Build <br /> Something <br className="hidden sm:block" /> Extraordinary?
        </h2>
        {/* Subtext */}
        <p className="text-gray-300 text-center text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Let's discuss your next project. Our team of experts is ready to turn your vision into a reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <a 
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-theme font-semibold rounded-xl hover:bg-gray-50 transition-colors text-center shadow-lg"
          >
            Contact Us Today
          </a>
          <a 
            href="/case-studies"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors text-center"
          >
            View Case Studies
          </a>
        </div>
    </StaggerFadeUpInView>
    </section>
  );
};

export default BottomCta;