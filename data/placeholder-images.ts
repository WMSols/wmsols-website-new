/**
 * Temporary stock / Unsplash URLs for layout finalization.
 * Replace these with real assets when ready — components stay the same.
 */
export const placeholderImages = {
  homeHero:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600',
  coreValues:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200',
  servicesListingHero:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600',
  aboutHero:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600',
  ourStory:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200',
  careersHero:
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600',
  whyUsCulture:
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600',
  caseStudyCover:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600',
  services: {
    'web-development':
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200',
    'mobile-development':
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200',
    'ai-automation':
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200',
    'ui-ux-design':
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200',
    'database-architecture':
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200',
    'digital-strategy':
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200',
    'data-analytics':
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
  } as Record<string, string>,
} as const;

export function getServicePlaceholder(serviceId: string): string {
  return (
    placeholderImages.services[serviceId] ??
    placeholderImages.services['web-development']
  );
}
