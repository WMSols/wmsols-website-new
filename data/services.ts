
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

import { 
  Paintbrush, 
  Lightbulb, 
  LineChart,
  Monitor,
  type LucideIcon
} from "lucide-react";

export interface SEOData {
  titleTag: string;
  metaDescription: string;
  focusKeywords: string[];
  url: string;
}

export interface HeroSection {
  h1: string;
  subHeadline: string;
  cta: string;
}

export interface Offering {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  title: string;
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  seo: SEOData;
  hero: HeroSection;
  whatWeOffer: Offering[];
  technologies?: string[];
  faq?: FAQ[];
  ourProcess?: ProcessStep[];
}

export const servicesDetailedData: ServiceData[] = [
  {
    id: "web-development",
    title: "Web Development",
    name: "Web Development",
    description: "We engineer high-performance web applications — from complex SaaS platforms to lightning-fast marketing sites — using the most battle-tested modern stacks.",
    href: "/services/web-development",
    icon: FolderCode,
    seo: {
      titleTag: "Web Development Services | Custom Web Apps — WMsols",
      metaDescription: "WMsols delivers custom web development — from Next.js web apps to WordPress migrations, PWAs, ERPs, and API integrations. Built for performance, scale, and results.",
      focusKeywords: [
        "custom web development services",
        "Next.js development agency",
        "web application development",
        "full stack web developers"
      ],
      url: "wmsols.com/services/web-development"
    },
    hero: {
      h1: "Custom Web Development Built for Scale",
      subHeadline: "We engineer high-performance web applications — from complex SaaS platforms to lightning-fast marketing sites — using the most battle-tested modern stacks.",
      cta: "Start Your Web Project"
    },
    whatWeOffer: [
      {
        title: "Custom Web Solutions",
        description: "Bespoke web applications built from the ground up, architected for your specific workflows, users, and business logic — not constrained by off-the-shelf limitations."
      },
      {
        title: "WordPress to Next.js Migration",
        description: "Supercharge your existing WordPress site by migrating to Next.js — unlocking dramatically faster load times, better Core Web Vitals scores, and full flexibility over your codebase."
      },
      {
        title: "Progressive Web Apps (PWAs)",
        description: "Deliver app-like experiences in the browser — offline-capable, installable, and fast — without the friction of an app store submission."
      },
      {
        title: "Web-Based ERPs",
        description: "Custom enterprise resource planning systems designed around your business processes, integrating operations, finance, HR, and more into a single unified platform."
      },
      {
        title: "Performance Optimisation",
        description: "Audit, diagnose, and fix performance bottlenecks — improving Core Web Vitals, reducing Time to First Byte, and delivering measurably better user experiences."
      },
      {
        title: "API Development & Integration",
        description: "Design and build robust RESTful and GraphQL APIs, and integrate third-party services — payment gateways, CRMs, ERPs, data providers — cleanly and securely."
      }
    ],
    technologies: [
      "Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", 
      "Prisma", "Tailwind CSS", "REST APIs", "GraphQL", "AWS", "Vercel", 
      "Docker", "WordPress"
    ],
    faq: [
      {
        question: "How long does a web development project take?",
        answer: "Timelines vary by scope. A marketing website typically takes 4–8 weeks. A complex SaaS web app may take 3–6 months. We provide a detailed timeline estimate during our discovery phase."
      },
      {
        question: "Do you work with existing codebases?",
        answer: "Yes — we regularly audit, refactor, and extend existing applications. We'll assess your codebase and recommend the most pragmatic path forward."
      },
      {
        question: "What is the difference between a website and a web application?",
        answer: "A website is primarily informational. A web application is interactive — with user authentication, databases, business logic, and dynamic content. We build both, and everything in between."
      }
    ],
    ourProcess: [
      {
        title: "Discovery & Requirements",
        description: "Understanding your users, goals, and technical constraints"
      },
      {
        title: "Architecture & Planning",
        description: "Choosing the right stack, data model, and infrastructure"
      },
      {
        title: "Design & Prototyping",
        description: "Wireframes and interactive prototypes validated with stakeholders"
      },
      {
        title: "Development",
        description: "Agile sprints with regular demos and transparent progress tracking"
      },
      {
        title: "QA & Performance Testing",
        description: "Automated tests, browser compatibility, and Core Web Vitals checks"
      },
      {
        title: "Launch & Handover",
        description: "Production deployment, documentation, and team training"
      },
      {
        title: "Ongoing Support",
        description: "Monitoring, updates, and continuous improvement"
      }
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    name: "Mobile Development",
    description: "From concept to App Store we design and develop iOS, Android, and cross-platform mobile applications that combine beautiful UX with engineering excellence.",
    href: "/services/mobile-development",
    icon: Smartphone,
    seo: {
      titleTag: "Mobile App Development | iOS, Android & Flutter - WMsols",
      metaDescription: "WMsols builds native and cross-platform mobile apps for iOS and Android. Expert Flutter development, UI/UX design, and App Store Optimisation for impactful mobile products.",
      focusKeywords: [
        "mobile app development agency",
        "iOS app development",
        "Android app development",
        "Flutter app developers",
        "cross-platform mobile apps"
      ],
      url: "wmsols.com/services/mobile-development"
    },
    hero: {
      h1: "Mobile Apps That Users Love to Use",
      subHeadline: "From concept to App Store we design and develop iOS, Android, and cross-platform mobile applications that combine beautiful UX with engineering excellence.",
      cta: "Build Your Mobile App"
    },
    whatWeOffer: [
      {
        title: "iOS App Development",
        description: "Native Swift applications built for Apple's ecosystem optimised for performance, privacy, and the full range of iPhone and iPad capabilities."
      },
      {
        title: "Android App Development",
        description: "Kotlin-based Android apps engineered to work flawlessly across the vast Android device landscape, from budget phones to flagship tablets."
      },
      {
        title: "Flutter Development",
        description: "A single, beautiful codebase that deploys to iOS and Android simultaneously. Flutter delivers near-native performance with significantly reduced development time and cost."
      },
      {
        title: "Mobile UI/UX Design",
        description: "Mobile-first design that follows platform conventions (iOS HIG, Material Design) while maintaining your brand identity creating experiences that feel intuitive from the first tap."
      },
      {
        title: "App Store Optimisation (ASO)",
        description: "Maximise your app's discoverability on the App Store and Google Play with keyword-optimised descriptions, compelling screenshots, and strategic ratings strategies."
      }
    ],
    technologies: [
      "Flutter", "Dart", "Swift", "Kotlin", "Firebase", "Supabase", "GetX",
      "REST APIs", "Push Notifications", "In-App Purchases", "Stripe",
      "Google Maps SDK", "App Store Connect", "Google Play Console"
    ],
    faq: [
      {
        question: "Should I build a native or cross-platform app?",
        answer: "For most businesses, Flutter is the right choice offering near-native performance at a fraction of the cost of building two separate apps. If you need deep platform-specific features (ARKit, health data, NFC), native may be preferred. We'll help you choose."
      },
      {
        question: "How much does it cost to build a mobile app?",
        answer: "A simple MVP app typically starts from $10,000-$25,000. More complex apps with custom backends, integrations, and advanced features range from $40,000 upwards. We provide transparent fixed-price quotes after scoping."
      }
    ],
    ourProcess: [] 
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    name: "AI Automation",
    description: "We build AI-powered automation systems that eliminate bottlenecks, accelerate workflows, and free your team to focus on what only humans can do.",
    href: "/services/ai-automation",
    icon: Brain,
    seo: {
      titleTag: "AI Automation Services | Intelligent Workflows & Chatbots -WMsols",
      metaDescription: "WMsols builds AI automation solutions - intelligent workflow automation, chatbots, AI-powered data processing, document automation, and custom AI integrations for modern businesses.",
      focusKeywords: [
        "AI automation services",
        "workflow automation",
        "business process automation",
        "AI chatbot development",
        "custom AI integration"
      ],
      url: "wmsols.com/services/ai-automation"
    },
    hero: {
      h1: "Automate the Repetitive. Amplify the Human.",
      subHeadline: "We build AI-powered automation systems that eliminate bottlenecks, accelerate workflows, and free your team to focus on what only humans can do.",
      cta: "Explore AI Solutions"
    },
    whatWeOffer: [
      {
        title: "Workflow Automation with AI",
        description: "Intelligent automation of multi-step business processes from lead routing to invoice processing - reducing manual effort by up to 80% and eliminating human error."
      },
      {
        title: "Chatbots & Virtual Assistants",
        description: "Context-aware AI chatbots for customer support, internal helpdesks, lead qualification, and onboarding trained on your data, branded for your business."
      },
      {
        title: "AI-Powered Data Processing",
        description: "Extract, classify, and transform unstructured data at scale from PDFs and images to emails and forms using state-of-the-art AI models."
      },
      {
        title: "Document & Email Automation",
        description: "Auto-generate contracts, reports, and emails. Parse incoming documents and route actions automatically. Reduce manual handling of repetitive document workflows."
      },
      {
        title: "Custom AI Integrations",
        description: "Integrate AI capabilities OpenAI, Anthropic Claude, Gemini, Hugging Face directly into your existing software stack, CRMS, ERPs, or custom applications."
      }
    ],
    technologies: [
      "OpenAI API", "Anthropic Claude", "LangChain", "Python", "n8n",
      "Zapier", "Make (Integromat)", "Pinecone", "Weaviate", "Node.js",
      "FastAPI", "Webhooks", "REST APIs"
    ],
    faq: [
      {
        question: "Do I need a large dataset to benefit from AI automation?",
        answer: "Not necessarily. Many of our automation solutions use pre-trained foundation models (like GPT-4 or Claude) that require little to no custom training. We assess your data situation during discovery."
      },
      {
        question: "How do you ensure AI outputs are accurate and reliable?",
        answer: "We build human-in-the-loop checkpoints, confidence thresholds, and fallback mechanisms into every AI system. Reliability and auditability are core design requirements, not afterthoughts."
      }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    name: "UI/UX Design",
    description: "We create user interfaces that are not just beautiful - they're purposeful, accessible, and engineered to drive engagement, retention, and conversion.",
    href: "/services/ui-ux-design",
    icon: Palette,
    seo: {
      titleTag: "UI/UX Design Services | Website & App Design WMsols",
      metaDescription: "WMsols creates intuitive, beautiful UI/UX designs for websites and mobile apps. Wireframing, prototyping, design systems, and user research design that converts.",
      focusKeywords: [
        "UI/UX design agency",
        "website design services",
        "mobile app UI design",
        "wireframing and prototyping",
        "user experience design"
      ],
      url: "wmsols.com/services/ui-ux-design"
    },
    hero: {
      h1: "Design That Converts. Experiences That Delight.",
      subHeadline: "We create user interfaces that are not just beautiful - they're purposeful, accessible, and engineered to drive engagement, retention, and conversion.",
      cta: "Start With Design"
    },
    whatWeOffer: [
      {
        title: "Website Design",
        description: "Strategic web design that balances brand expression with conversion optimisation every layout decision backed by UX best practices and user psychology."
      },
      {
        title: "Mobile UI/UX Design",
        description: "Pixel-perfect mobile designs following iOS and Android platform guidelines, delivering interfaces that feel native, fluid, and effortless to use."
      },
      {
        title: "Wireframing & Prototyping",
        description: "Low and high-fidelity wireframes and interactive prototypes that validate concepts early, align stakeholders, and reduce costly development rework."
      }
    ],
    technologies: [
      "Figma", "Adobe XD", "Framer", "Zeplin", "Maze (user testing)",
      "Hotjar", "Storybook", "Tailwind CSS", "Material Design", "Apple HIG"
    ]
  },
  {
    id: "database-architecture",
    title: "Database Architecture",
    name: "Database Architecture",
    description: "The right database architecture is the backbone of every great application. We design, build, and optimise database systems that perform reliably now and as you grow.",
    href: "/services/database-architecture",
    icon: Database,
    seo: {
      titleTag: "Database Architecture Services | SQL, NoSQL & Cloud DB WMsols",
      metaDescription: "WMsols designs and builds scalable, secure database systems - SQL, NoSQL, Firebase, Supabase, data migrations, and query optimisation for high-performance applications.",
      focusKeywords: [
        "database architecture services",
        "SQL database design",
        "NoSQL solutions",
        "Firebase development",
        "Supabase",
        "data migration services"
      ],
      url: "wmsols.com/services/database-architecture"
    },
    hero: {
      h1: "Databases Built for Speed, Scale & Security",
      subHeadline: "The right database architecture is the backbone of every great application. We design, build, and optimise database systems that perform reliably now and as you grow.",
      cta: "Discuss Your Data Needs"
    },
    whatWeOffer: [
      {
        title: "Database Design & Modelling",
        description: "Entity-relationship modelling, schema design, and normalisation creating data structures that are logically sound, developer-friendly, and built to last."
      },
      {
        title: "SQL & NoSQL Solutions",
        description: "We architect both relational (PostgreSQL, MySQL) and document-oriented (MongoDB) databases, choosing the right tool based on your data access patterns and consistency requirements."
      },
      {
        title: "Data Migration Services",
        description: "Safe, zero-downtime migrations between databases, cloud providers, or schema versions with comprehensive rollback strategies and data validation throughout."
      },
      {
        title: "Firebase & Supabase",
        description: "Real-time, scalable backend infrastructure using Firebase Firestore or Supabase - ideal for mobile apps, startups, and products that need to ship fast without sacrificing reliability."
      },
      {
        title: "Query Optimisation",
        description: "Diagnose slow queries, missing indexes, and schema inefficiencies and implement targeted optimisations that dramatically improve application response times."
      }
    ],
    technologies: [
      "PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore", "Supabase",
      "Redis", "Prisma ORM", "Sequelize", "PlanetScale", "Neon",
      "AWS RDS", "Google Cloud Spanner"
    ]
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    name: "Digital Strategy",
    description: "Technology decisions are business decisions. We help you cut through the noise, align your technology investments with your goals, and build a roadmap that actually gets executed.",
    href: "/services/digital-strategy",
    icon: Lightbulb,
    seo: {
      titleTag: "Digital Strategy Services | Technology Roadmapping & Transformation - WMsols",
      metaDescription: "WMsols helps businesses navigate digital transformation with strategic technology roadmaps, product strategy, market analysis, and innovation workshops. Build smarter, grow faster.",
      focusKeywords: [
        "digital strategy consulting",
        "technology roadmap",
        "digital transformation services",
        "product strategy agency",
        "innovation workshops"
      ],
      url: "wmsols.com/services/digital-strategy"
    },
    hero: {
      h1: "Build a Digital Strategy That Drives Real Growth",
      subHeadline: "Technology decisions are business decisions. We help you cut through the noise, align your technology investments with your goals, and build a roadmap that actually gets executed.",
      cta: "Book a Strategy Session"
    },
    whatWeOffer: [
      {
        title: "Technology Roadmapping",
        description: "A structured, prioritised plan for your technology initiatives aligned with your business objectives, capacity, and budget. No fluff, no vendor lock-in."
      },
      {
        title: "Digital Transformation",
        description: "End-to-end transformation programmes that modernise legacy systems, digitise manual processes, and embed a culture of continuous digital improvement."
      },
      {
        title: "Product Strategy",
        description: "From ideation to GTM defining your product vision, user personas, core features, and success metrics to maximise the chances of market success."
      },
      {
        title: "Market Analysis",
        description: "Competitive benchmarking, technology landscape analysis, and market opportunity sizing to inform smarter investment and product positioning decisions."
      },
      {
        title: "Innovation Workshops",
        description: "Facilitated sessions that unlock your team's creative potential, align stakeholders around shared visions, and generate actionable ideas with clear next steps."
      }
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    name: "Data Analytics",
    description: "We build analytics infrastructure and data products that surface the insights your team needs to make faster, better-informed decisions every day.",
    href: "/services/data-analytics",
    icon: LineChart,
    seo: {
      titleTag: "Data Analytics Services | BI, Dashboards & Predictive Analytics WMsols",
      metaDescription: "WMsols transforms raw data into actionable business intelligence. Business intelligence, data visualisation, predictive analytics, real-time dashboards, and custom reporting solutions.",
      focusKeywords: [
        "data analytics services",
        "business intelligence solutions",
        "data visualisation",
        "predictive analytics",
        "real-time dashboards",
        "custom reporting"
      ],
      url: "wmsols.com/services/data-analytics"
    },
    hero: {
      h1: "Turn Your Data Into a Competitive Advantage",
      subHeadline: "We build analytics infrastructure and data products that surface the insights your team needs to make faster, better-informed decisions every day.",
      cta: "Explore Analytics Solutions"
    },
    whatWeOffer: [
      {
        title: "Business Intelligence",
        description: "Connect your data sources, build unified data models, and deliver BI dashboards that give decision-makers a clear view of business performance in real time."
      },
      {
        title: "Data Visualisation",
        description: "Transform complex datasets into clear, compelling visual narratives charts, graphs, maps, and custom components that make data instantly understandable."
      },
      {
        title: "Predictive Analytics",
        description: "Apply machine learning and statistical modelling to forecast trends, predict customer behaviour, and identify opportunities before they become obvious."
      },
      {
        title: "Real-Time Dashboards",
        description: "Live dashboards that update in seconds built for operations teams, executives, and customer-facing applications where data freshness is critical."
      },
      {
        title: "Custom Reporting",
        description: "Automated, scheduled reports delivered in the format your stakeholders actually use PDF, email, Slack, or embedded in your existing tools."
      }
    ],
    technologies: [
      "Power BI", "Tableau", "Metabase", "Grafana", "Apache Superset",
      "dbt", "BigQuery", "Snowflake", "Redshift", "Python (Pandas, Scikit-learn)",
      "D3.js", "Chart.js", "Recharts"
    ]
  }
];