// lib/analytics.ts
import { sendGAEvent } from '@next/third-parties/google';

/**
 * Base custom event tracker.
 * Wraps the official Next.js sendGAEvent function.
 */
export const trackEvent = (action: string, params?: Record<string, unknown>) => {
  sendGAEvent({ event: action, ...params });
};

/**
 * Tracks clicks on primary Call-to-Action buttons (e.g., "Start Your Project").
 */
export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent("cta_click", { 
    cta_text: ctaText, 
    location: location 
  });
};

/**
 * Tracks clicks on specific Portfolio/Case Study items.
 */
export const trackPortfolioClick = (projectName: string, category?: string) => {
  trackEvent("portfolio_item_click", { 
    project_name: projectName, 
    category: category 
  });
};

/**
 * Tracks when a user explicitly initiates contact from a specific service page.
 */
export const trackServiceInquiry = (serviceName: string) => {
  trackEvent("service_inquiry_start", { 
    service_name: serviceName 
  });
};

/**
 * Tracks clicks on main navigation items.
 */
export const trackNavClick = (linkText: string, destination: string) => {
  trackEvent("nav_click", { 
    link_text: linkText, 
    destination: destination 
  });
};