"use client";

import { GoogleAnalytics } from '@next/third-parties/google';
import { useEffect, useState } from 'react';

export default function AnalyticsWrapper({ gaId }: { gaId: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const mount = () => setIsMounted(true);
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(mount, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(mount, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return <GoogleAnalytics gaId={gaId} />;
}