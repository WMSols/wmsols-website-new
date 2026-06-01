export const navigationData = [
  {
    item: "Home",
    href: "/"
  },
  {
    item: "Services",
    href: "/services",
    children: [
      {
        item: "Web Development",
        href: "/services/web-development",
        children: [
          { item: "Custom Web Solutions", href: "/services/web-development/custom-web-solutions" },
          { item: "WordPress to Next.Js", href: "/services/web-development/wordpress-to-nextjs" },
          { item: "Progressive Web Apps", href: "/services/web-development/progressive-web-apps" },
          { item: "Web-Based ERPs", href: "/services/web-development/web-based-erps" },
          { item: "MERN Stack Development", href: "/services/web-development/mern-stack-development" },
          { item: "NextJs Development", href: "/services/web-development/nextjs-development" },
          { item: "Shopify Development", href: "/services/web-development/shopify-development" },
          { item: "Wordpress Development", href: "/services/web-development/wordpress-development" },
          { item: "Performance Optimization", href: "/services/web-development/performance-optimization" },
          { item: "API development & integration", href: "/services/web-development/api-development-and-integration" }
        ]
      },
      {
        item: "Mobile App Development",
        href: "/services/mobile-app-development",
        children: [
          { item: "iOS App Development", href: "/services/mobile-app-development/ios-app-development" },
          { item: "Android App Development", href: "/services/mobile-app-development/android-app-development" },
          { item: "Flutter Development", href: "/services/mobile-app-development/flutter-development" },
          { item: "Mobile UI/UX Design", href: "/services/mobile-app-development/mobile-ui-ux-design" },
          { item: "App Store Optimization", href: "/services/mobile-app-development/app-store-optimization" },
          { item: "React Native Development", href: "/services/mobile-app-development/react-native-development" }
        ]
      },
      {
        item: "AI Automation",
        href: "/services/ai-automation",
        children: [
          { item: "Workflow Automations with AI", href: "/services/ai-automation/workflow-automations-with-ai" },
          { item: "Chatbots & Virtual Assistants", href: "/services/ai-automation/chatbots-and-virtual-assistants" },
          { item: "Ai-Powered Data Processing", href: "/services/ai-automation/ai-powered-data-processing" },
          { item: "Make.com Automations", href: "/services/ai-automation/make-com-automations" },
          { item: "Zapier Automations", href: "/services/ai-automation/zapier-automations" },
          { item: "N8n Automations", href: "/services/ai-automation/n8n-automations" },
          { item: "Document & Email Automations", href: "/services/ai-automation/document-and-email-automations" },
          { item: "Custom Ai Integrations", href: "/services/ai-automation/custom-ai-integrations" }
        ]
      },
      {
        item: "UI/UX Design",
        href: "/services/ui-ux-design",
        children: [
          { item: "Website Design", href: "/services/ui-ux-design/website-design" },
          { item: "Mobile UI/UX Design", href: "/services/ui-ux-design/mobile-ui-ux-design" },
          { item: "Wireframing & Prototyping", href: "/services/ui-ux-design/wireframing-and-prototyping" }
        ]
      },
      {
        item: "Database Architecture",
        href: "/services/database-architecture",
        children: [
          { item: "Database Design & Modeling", href: "/services/database-architecture/database-design-and-modeling" },
          { item: "SQL & NoSQL Solutions", href: "/services/database-architecture/sql-and-nosql-solutions" },
          { item: "Data Migrations Services", href: "/services/database-architecture/data-migrations-services" },
          { item: "Firebase & Supabase", href: "/services/database-architecture/firebase-and-supabase" },
          { item: "Query Optimization", href: "/services/database-architecture/query-optimization" }
        ]
      },
      {
        item: "Digital Strategy",
        href: "/services/digital-strategy",
        children: [
          { item: "Technology Road-mapping", href: "/services/digital-strategy/technology-road-mapping" },
          { item: "Digital Transformation", href: "/services/digital-strategy/digital-transformation" },
          { item: "Product Strategy", href: "/services/digital-strategy/product-strategy" },
          { item: "Market Analysis", href: "/services/digital-strategy/market-analysis" },
          { item: "Innovation Workshops", href: "/services/digital-strategy/innovation-workshops" }
        ]
      },
      {
        item: "Data Analytics",
        href: "/services/data-analytics",
        children: [
          { item: "Business Intelligence", href: "/services/data-analytics/business-intelligence" },
          { item: "Data Visualization", href: "/services/data-analytics/data-visualization" },
          { item: "Predictive Analytics", href: "/services/data-analytics/predictive-analytics" },
          { item: "Real-Time Dashboards", href: "/services/data-analytics/real-time-dashboards" },
          { item: "Custom Reporting", href: "/services/data-analytics/custom-reporting" }
        ]
      }
    ]
  },
  {
    item: "Case Studies",
    href: "/case-studies"
  },
  {
    item: "About",
    href: "/about"
  },
  { item: "Careers", href: "/about/careers" },
   { item: "Blogs/Newsroom", href: "/about/blogs-newsroom" },
  {
    item: "Contact",
    href: "/contact"
  }
];
export const footerData = [
  {
    item: "Useful Links",
    children: [
      { item: "About", href: "/about" },
      { item: "Services", href: "/services" },
      { item: "Case Studies", href: "/case-studies" },
      { item: "Blogs/Newsroom", href: "/blogs-newsroom" },
      { item: "Contact", href: "/contact" }
    ]
  },
  {
    item: "Services",
    children: [
      { item: "Web Development", href: "/services/web-development" },
      { item: "Mobile App Development", href: "/services/mobile-app-development" },
      { item: "AI Automation", href: "/services/ai-automation" },
      { item: "UI/UX Design", href: "/services/ui-ux-design" },
      { item: "Database Architecture", href: "/services/database-architecture" },
      { item: "Data Analytics", href: "/services/data-analytics" }
    ]
  },
  {
    item: "Contact",
    children: [
      { 
        item: "info@wmsols.com", 
        href: "mailto:info@wmsols.com" 
      },
      { 
        item: "+1 (505) 386-1888", 
        href: "tel:+15053861888" 
      },
      { 
        item: "123 Tech Avenue, San Francisco, CA 94102", 
        href: "https://maps.google.com/?q=123+Tech+Avenue,+San+Francisco,+CA+94102" // Optional: Google Maps link
      }
    ]
  }
];