 export const heroData = {
  headline: "We Build Digital Experiences That Matter",
  subHeadline: "From bold ideas to production-ready software — WMsols partners with businesses to deliver web apps, mobile solutions, AI automation, and digital strategies that drive real growth.",
  actions: {
    primary: {
      label: "Start Your Project",
      href: "/contact" 
    },
    secondary: {
      label: "Explore Our Work",
      href: "/portfolio" 
    }
  },
};
 export const trustStats = [
    {
      value: 100,
      suffix: "+",
      label: "Projects Delivered"
    },
    {
      value: 98,
      suffix: "%",
      label: "Client Satisfaction"
    },
    {
      value: 5,
      suffix: "+",
      label: "Years of Expertise"
    },
    {
      value: 24, // Using 24 for the counter animation
      suffix: "/7",
      label: "Support Available"
    }
  ]

  // Define the TypeScript interface for the logo data
  interface BrandLogo {
    id: string;
    name: string;
    imageUrl: string;
  }
  
  // Mock data array - you can move this to a separate data file later
  export const brands: BrandLogo[] = [
    { id: '1', name: 'Ferozsons Laboratories', imageUrl: '/images/trustedBrands/logo.avif' },
    { id: '2', name: 'Ferozsons Laboratories', imageUrl: '/images/trustedBrands/logo.avif' },
    { id: '3', name: 'Ferozsons Laboratories', imageUrl: '/images/trustedBrands/logo.avif' },
    { id: '4', name: 'Ferozsons Laboratories', imageUrl: '/images/trustedBrands/logo.avif' },
    { id: '5', name: 'Ferozsons Laboratories', imageUrl: '/images/trustedBrands/logo.avif' },
    // Add more logos here as the list grows
  ];

  import { Zap, User, RefreshCcw, Users } from 'lucide-react';
  
  // --- TYPES ---
  interface ValueCard {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
  }
  
  // --- DATA ---
  // You can move this to your constants/data folder later
  export const valuesData: ValueCard[] = [
    {
      id: 1,
      title: 'Innovation',
      description: 'Constantly exploring new technologies to deliver cutting-edge solutions.',
      icon: Zap,
    },
    {
      id: 2,
      title: 'Client-Centric',
      description: 'Your goals are our goals. We prioritize your success in everything we do.',
      icon: User,
    },
    {
      id: 3,
      title: 'Agile',
      description: 'Flexible and responsive methodologies to adapt to changing requirements swiftly.',
      icon: RefreshCcw,
    },
    {
      id: 4,
      title: 'Collaborative',
      description: 'Working seamlessly as an extension of your internal team to achieve greatness.',
      icon: Users,
    },
  ];