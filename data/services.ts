
// Data for homepage services section
import { 
  FolderCode, 
  Smartphone, 
  Brain, 
  Palette, 
  Database, 
  Target 
} from "lucide-react";

// 1. Define the exact shape of your data
export interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType; // This tells TS it's a renderable component
}

export const servicesData: ServiceItem[] = [
  {
    title: "Web Development",
    description: "High-performance websites and web applications built on modern stacks — Next.js, React, Node.js — for speed, scale, and exceptional user experiences.",
    href: "/services/web-development",
    icon: FolderCode 
  },
  {
    title: "Mobile Development",
    description: "Native iOS, Android, and cross-platform Flutter apps crafted for seamless performance and intuitive design, from MVP to enterprise scale.",
    href: "/services/mobile-development",
    icon: Smartphone
  },
  {
    title: "AI Automation",
    description: "Intelligent workflow automation, AI-powered chatbots, and custom integrations that eliminate bottlenecks and unlock new operational efficiency.",
    href: "/services/ai-automation",
    icon: Brain
  },
  {
    title: "UI/UX Design",
    description: "User-centred design that blends beautiful aesthetics with purposeful functionality — from wireframes to polished, pixel-perfect interfaces.",
    href: "/services/ui-ux-design",
    icon: Palette
  },
  {
    title: "Database Architecture",
    description: "Scalable, secure database solutions — SQL, NoSQL, Firebase, Supabase — designed for reliability and optimised for speed.",
    href: "/services/database-architecture",
    icon: Database
  },
  {
    title: "Digital Strategy",
    description: "Technology roadmaps, digital transformation consulting, and market analysis to align your tech investments with business goals.",
    href: "/services/digital-strategy",
    icon: Target
  }
  
];