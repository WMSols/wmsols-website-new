import React from 'react';
import {ServiceCard} from '@/components/common/ServiceCard'; // Adjust if using named imports: import { ServiceCard }
import { servicesDetailedData } from '@/data/services';
import { StaggerFadeUpInView } from '@/components/animations/StaggerFadeUpInView';

export default function ServicesGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
      <StaggerFadeUpInView className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {servicesDetailedData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            href={service.href}
            Icon={service.icon}
            variant="light"
          />
        ))}
      </StaggerFadeUpInView>
    </section>
  );
}