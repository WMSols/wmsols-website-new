// per service dynamic page 
import React from 'react';
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import SubServiceCard from '../components/SubServiceCard';
import ServiceFaq from '../components/ServiceFaq';
import ServiceHeroCTA from '../components/ServiceHeroCta'; // 1. Import the new CTA
import { Metadata } from 'next';
import { getServiceBySlug } from '../lib/getServiceBySlug';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { getServicePlaceholder, placeholderImages } from '@/data/placeholder-images';

const serviceThumbIds = Object.keys(placeholderImages.services);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | WMsols",
    };
  }

  return {
    title: service.seo.titleTag,
    description: service.seo.metaDescription,
    keywords: service.seo.focusKeywords,
  };
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const service = getServiceBySlug(slug);
  
  if (!service) {
    notFound();
  }

  const darkGradient = "bg-[linear-gradient(to_bottom,#060053,#050109)]";

  return (
    <main className="w-full min-h-screen">
      {/* 1. Hero Section — split on lg+ */}
      <section className={`${darkGradient} min-h-screen pt-14 px-6 flex items-center`}>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center py-16 lg:py-0">
          <div className="lg:col-span-7 text-center lg:text-left text-white">
            <h1 className="text-4xl md:text-5xl  font-bold mb-6 tracking-tight">
              {service.hero.h1}
            </h1>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              {service.hero.subHeadline}
            </p>
            <div className="flex justify-center lg:justify-start">
              <ServiceHeroCTA
                ctaText={service.hero.cta}
                serviceId={service.id}
              />
            </div>
          </div>
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none lg:mx-0 2xl:max-w-none">
            <ImagePlaceholder
              src={getServicePlaceholder(service.id)}
              alt={`${service.title} visual`}
              className="w-full aspect-[16/10] md:aspect-[4/3] 2xl:aspect-square rounded-2xl max-h-[220px] md:max-h-[280px] lg:max-h-[320px] 2xl:max-h-none min-h-[160px] 2xl:min-h-[280px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. What We Offer Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {service.whatWeOffer.map((offer, index) => (
              <SubServiceCard
                key={index}
                title={offer.title}
                description={offer.description}
                imageSrc={getServicePlaceholder(
                  serviceThumbIds[index % serviceThumbIds.length] ?? service.id
                )}
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