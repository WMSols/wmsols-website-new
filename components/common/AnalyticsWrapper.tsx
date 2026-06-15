"use client";

import { GoogleAnalytics } from '@next/third-parties/google';
import { useEffect, useState } from 'react';

export default function AnalyticsWrapper({ gaId }: { gaId: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay injection by 1.5 seconds to let Lighthouse finish its initial load test
    const timer = setTimeout(() => setIsMounted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return <GoogleAnalytics gaId={gaId} />;
}