"use client";

import React from 'react';
import Link from 'next/link';
import { trackServiceInquiry } from '@/lib/analytics';

interface ServiceHeroCTAProps {
  ctaText: string;
  serviceId: string;
}

export default function ServiceHeroCTA({ ctaText, serviceId }: ServiceHeroCTAProps) {
  return (
    <Link
      href="/contact"
      // Fire the tracking event with the specific service they are looking at
      onClick={() => trackServiceInquiry(serviceId)}
      className="inline-block bg-[#2776EA] text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(39,118,234,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
    >
      {ctaText}
    </Link>
  );
}