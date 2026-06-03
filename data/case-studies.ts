export interface ResultStat {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  client: string;
  industry: string;
  techStackSummary: string[];
  overview: string;
  challenge: string;
  solutionItems: string[];
  results: ResultStat[];
  fullTechStack: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "ferozsons-labs-pharmaceutical",
    title: "Ferozsons Labs Limited - Global Pharmaceutical Portal",
    description: "A multilingual, high-performance corporate portal serving international markets, featuring secure regulatory compliance modules and investor relations dashboards.",
    category: "Web Dev",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    client: "Ferozsons Labs",
    industry: "Pharma & Medicine",
    techStackSummary: ["Next.js", "Typescript", "Tailwind", "Strapi", "SQL"],
    overview: "Ferozsons Labs required a complete digital transformation of their legacy web presence. The goal was to unify their global brand identity while serving localized content across 15 different regions, all while adhering to strict pharmaceutical data compliance and accessibility standards.",
    challenge: "The client's existing infrastructure was fragmented across multiple CMS instances, leading to slow load times, security vulnerabilities, and a disjointed user experience. Managing translations and regulatory updates took marketing teams weeks instead of hours.",
    solutionItems: [
      "Architected a headless CMS infrastructure using Strapi for centralized, region-aware content management.",
      "Built a highly performant Next.js frontend utilizing Incremental Static Regeneration (ISR) for instant page loads.",
      "Implemented an automated translation and localization pipeline integrated with continuous deployment.",
      "Designed a custom Role-Based Access Control (RBAC) system for regional content editors.",
      "Migrated 10+ years of legacy PR, financial reports, and clinical trial data safely to a PostgreSQL cluster.",
      "Achieved WCAG 2.1 AA accessibility compliance across all digital assets."
    ],
    results: [
      { label: "Reduced Load Time By", value: "71.3 %" },
      { label: "Increased Performance By", value: "31.3 %" },
      { label: "Seo Ranking", value: "Top 3" }
    ],
    fullTechStack: ["Next.js", "Typescript", "Tailwind CSS", "Strapi", "PostgreSQL", "Vercel", "Docker"]
  },
  {
    id: "2",
    slug: "finedge-ai-financial-dashboard",
    title: "FinEdge - AI-Powered Financial Analytics Engine",
    description: "An enterprise-grade risk management dashboard utilizing predictive machine learning models to forecast market volatility and optimize portfolio distribution.",
    category: "AI",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    client: "FinTech Global",
    industry: "Finance",
    techStackSummary: ["React", "Python", "TensorFlow", "AWS"],
    overview: "FinTech Global sought to build an internal tool for their quantitative analysts that could ingest millions of daily trading data points and provide real-time risk assessment using custom AI models.",
    challenge: "Processing terabytes of historical financial data without causing UI freezes, and rendering complex interactive charts that update via WebSockets with absolute minimal latency during high-volume trading hours.",
    solutionItems: [
      "Deployed a distributed data processing pipeline using Apache Kafka and Python microservices.",
      "Trained custom TensorFlow models to identify anomalous trading patterns and forecast volatility.",
      "Developed a high-performance React frontend utilizing Canvas API for rendering complex time-series charts.",
      "Implemented AWS SageMaker for continuous model retraining and automated deployment."
    ],
    results: [
      { label: "Data Processing Speed", value: "+400 %" },
      { label: "Prediction Accuracy", value: "94.2 %" },
      { label: "System Uptime", value: "99.99 %" }
    ],
    fullTechStack: ["React", "Python", "TensorFlow", "AWS SageMaker", "Apache Kafka", "D3.js", "WebSockets"]
  },
  {
    id: "3",
    slug: "routemaster-mobile-inventory-tracker",
    title: "RouteMaster - Global Supply Chain Mobile Tracker",
    description: "An offline-first mobile application enabling warehouse staff and delivery drivers to scan, track, and manage global inventory seamlessly.",
    category: "Mobile",
    imageUrl: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=800",
    client: "Logistics Pro",
    industry: "Logistics",
    techStackSummary: ["React Native", "Node.js", "MongoDB"],
    overview: "Logistics Pro needed a robust mobile solution for their ground teams to replace outdated, proprietary barcode scanners. The app had to work reliably in low-connectivity areas like shipping yards and deep warehouse aisles.",
    challenge: "Ensuring zero data loss during network disconnections and maintaining accurate database synchronization across thousands of concurrent mobile devices once they reconnected to cellular or WiFi networks.",
    solutionItems: [
      "Built a cross-platform React Native application deployed simultaneously to iOS and Android.",
      "Implemented a robust offline-first architecture using WatermelonDB for local device storage.",
      "Created a conflict-resolution background synchronization engine in Node.js.",
      "Integrated native device camera APIs for high-speed, custom barcode and QR scanning algorithms."
    ],
    results: [
      { label: "Scanning Efficiency", value: "+45 %" },
      { label: "Sync Error Rate", value: "0.01 %" },
      { label: "App Store Rating", value: "4.8" }
    ],
    fullTechStack: ["React Native", "Node.js", "MongoDB", "WatermelonDB", "AWS EC2", "Redux Toolkit"]
  },
  {
    id: "4",
    slug: "cloudshift-enterprise-data-strategy",
    title: "CloudShift - Enterprise Data Strategy & Migration",
    description: "A zero-downtime migration of a monolithic on-premise database system to a modern, scalable, cloud-native microservices architecture.",
    category: "Data",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800",
    client: "TechCorp",
    industry: "Technology",
    techStackSummary: ["AWS", "PostgreSQL", "Docker", "Kubernetes"],
    overview: "TechCorp was outgrowing their physical server centers. They required a strategic roadmap and execution plan to migrate their core operational data to the cloud without disrupting daily business operations.",
    challenge: "Moving 50TB of highly relational, mission-critical data with zero tolerance for downtime or data corruption, while simultaneously refactoring legacy monolithic API endpoints.",
    solutionItems: [
      "Designed a multi-phase migration strategy using the Strangler Fig pattern to gradually replace legacy systems.",
      "Set up secure AWS VPCs and containerized legacy applications using Docker and Kubernetes.",
      "Utilized AWS Database Migration Service (DMS) for continuous data replication to the cloud.",
      "Automated CI/CD pipelines using GitHub Actions and Terraform for Infrastructure as Code (IaC)."
    ],
    results: [
      { label: "Migration Downtime", value: "0 Mins" },
      { label: "Infrastructure Cost", value: "-35 %" },
      { label: "Deployment Speed", value: "10x Faster" }
    ],
    fullTechStack: ["AWS ECS", "PostgreSQL", "Docker", "Kubernetes", "Terraform", "GitHub Actions"]
  },
  {
    id: "5",
    slug: "shopgenius-ecommerce-personalization",
    title: "ShopGenius - AI E-Commerce Personalization Engine",
    description: "Enhancing conversion rates for a major retailer through machine-learning-driven product recommendations and dynamic pricing models.",
    category: "Analytics",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    client: "RetailMax",
    industry: "E-Commerce",
    techStackSummary: ["Next.js", "Neo4j", "Redis", "Python"],
    overview: "RetailMax wanted to overhaul their static e-commerce storefront by introducing hyper-personalized user experiences based on real-time browsing habits and historical purchase data.",
    challenge: "Generating sub-second personalized product recommendations for millions of active users during peak holiday traffic events without straining the primary product database.",
    solutionItems: [
      "Integrated a graph database (Neo4j) to map complex product and user relationships.",
      "Developed a serverless Redis caching layer for instant data retrieval.",
      "Created a dynamic Next.js storefront that personalizes components via Edge Functions before the page even loads.",
      "Built an analytics dashboard for the marketing team to A/B test recommendation algorithms."
    ],
    results: [
      { label: "Conversion Rate", value: "+22 %" },
      { label: "Avg Order Value", value: "+15 %" },
      { label: "API Latency", value: "< 50ms" }
    ],
    fullTechStack: ["Next.js", "Neo4j", "Redis", "Python", "Vercel Edge Functions", "Tailwind CSS"]
  },
  {
    id: "6",
    slug: "metroflow-smart-city-infrastructure",
    title: "MetroFlow - Smart City Traffic Optimization",
    description: "A strategic data initiative utilizing IoT traffic sensors to dynamically adjust city-wide traffic grids and reduce congestion.",
    category: "Strategy",
    imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800",
    client: "Department of Transport",
    industry: "Public Sector",
    techStackSummary: ["Snowflake", "Apache Flink", "React", "Mapbox"],
    overview: "The Department of Transportation needed a scalable data warehouse to centralize information from over 10,000 smart traffic lights and road sensors.",
    challenge: "Ingesting and processing unstructured IoT data streams at an extreme scale while providing an intuitive dashboard for city planners to make real-time routing decisions.",
    solutionItems: [
      "Engineered a Snowflake data warehouse architecture optimized for complex geospatial queries.",
      "Built real-time streaming pipelines using Apache Flink to process sensor data instantly.",
      "Designed a comprehensive React-based control center with interactive WebGL map layers.",
      "Implemented predictive models to adjust traffic light timings during rush hour automatically."
    ],
    results: [
      { label: "Avg Commute Time", value: "-18 %" },
      { label: "Data Processing", value: "1M/sec" },
      { label: "Carbon Emissions", value: "-12 %" }
    ],
    fullTechStack: ["Snowflake", "Apache Flink", "React", "Mapbox GL", "Node.js", "TypeScript"]
  }
];