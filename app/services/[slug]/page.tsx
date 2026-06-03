import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { servicesDetailedData } from '@/data/services';
import SubServiceCard from '../components/SubServiceCard';
import ServiceFaq from '../components/ServiceFaq';

// For Next.js 15, params in server components are asynchronous
export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Find the service based on the slug (id)
  const service = servicesDetailedData.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  // The custom dark gradient from your screenshots
  const darkGradient = "bg-[linear-gradient(to_bottom,#060053,#050109)]";

  return (
    <main className="w-full min-h-screen">
      {/* 1. Hero Section */}
      <section className={`${darkGradient} pt-32 pb-24 px-6`}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            {service.hero.h1}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            {service.hero.subHeadline}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2776EA] text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(39,118,234,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {service.hero.cta}
          </Link>
        </div>
      </section>

      {/* 2. What We Offer Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {service.whatWeOffer.map((offer, index) => (
              <SubServiceCard
                key={index}
                title={offer.title}
                description={offer.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Process Section (Only for Web Development) */}
      {service.id === "web-development" && service.ourProcess && service.ourProcess.length > 0 && (
        <section className={`${darkGradient} py-20 px-6`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              How We Build Web Products
            </h2>
            <div className="space-y-0 pl-4 md:pl-0">
              {service.ourProcess.map((step, index) => (
                <div key={index} className="flex relative pb-10 last:pb-0 group">
                  {/* Vertical Connecting Line */}
                  {index !== service.ourProcess!.length - 1 && (
                    <div className="absolute top-8 left-2.75 bottom-0 w-px bg-[#4F8BFF]/30 group-hover:bg-[#4F8BFF]/60 transition-colors duration-300" />
                  )}
                  {/* Icon */}
                  <div className="shrink-0 mr-6 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#050109] flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-[#8b5cf6]" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="pt-0.5">
                    <p className="text-lg md:text-xl text-gray-300">
                      <span className="font-semibold text-white mr-2">
                        {step.title}
                      </span>
                      — {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Technologies Section */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 rounded-full bg-[#Eef2ff] text-indigo-900 font-medium text-sm md:text-base border border-indigo-100 hover:bg-indigo-100 hover:shadow-sm transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <section className={`${darkGradient} py-20 px-6`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-14">
              Frequently Asked Questions
            </h2>
            <ServiceFaq faqs={service.faq} />
          </div>
        </section>
      )}
    </main>
  );
}