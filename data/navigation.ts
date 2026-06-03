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
          { item: "Custom Web Solutions", href: "/services/web-development" },
          { item: "WordPress to Next.Js", href: "/services/web-development" },
          { item: "Progressive Web Apps", href: "/services/web-development" },
          { item: "Web-Based ERPs", href: "/services/web-development" },
          { item: "MERN Stack Development", href: "/services/web-development" },
          { item: "NextJs Development", href: "/services/web-development" },
          { item: "Shopify Development", href: "/services/web-development" },
          { item: "Wordpress Development", href: "/services/web-development" },
          { item: "Performance Optimization", href: "/services/web-development" },
          { item: "API development & integration", href: "/services/web-development" }
        ]
      },
      {
        item: "Mobile App Development",
        href: "/services/mobile-app-development",
        children: [
          { item: "iOS App Development", href: "/services/mobile-app-development" },
          { item: "Android App Development", href: "/services/mobile-app-development" },
          { item: "Flutter Development", href: "/services/mobile-app-development" },
          { item: "Mobile UI/UX Design", href: "/services/mobile-app-development" },
          { item: "App Store Optimization", href: "/services/mobile-app-development" },
          { item: "React Native Development", href: "/services/mobile-app-development" }
        ]
      },
      {
        item: "AI Automation",
        href: "/services/ai-automation",
        children: [
          { item: "Workflow Automations with AI", href: "/services/ai-automation" },
          { item: "Chatbots & Virtual Assistants", href: "/services/ai-automation" },
          { item: "Ai-Powered Data Processing", href: "/services/ai-automation" },
          { item: "Make.com Automations", href: "/services/ai-automation" },
          { item: "Zapier Automations", href: "/services/ai-automation" },
          { item: "N8n Automations", href: "/services/ai-automation" },
          { item: "Document & Email Automations", href: "/services/ai-automation" },
          { item: "Custom Ai Integrations", href: "/services/ai-automation" }
        ]
      },
      {
        item: "UI/UX Design",
        href: "/services/ui-ux-design",
        children: [
          { item: "Website Design", href: "/services/ui-ux-design" },
          { item: "Mobile UI/UX Design", href: "/services/ui-ux-design" },
          { item: "Wireframing & Prototyping", href: "/services/ui-ux-design" }
        ]
      },
      {
        item: "Database Architecture",
        href: "/services/database-architecture",
        children: [
          { item: "Database Design & Modeling", href: "/services/database-architecture" },
          { item: "SQL & NoSQL Solutions", href: "/services/database-architecture" },
          { item: "Data Migrations Services", href: "/services/database-architecture" },
          { item: "Firebase & Supabase", href: "/services/database-architecture" },
          { item: "Query Optimization", href: "/services/database-architecture" }
        ]
      },
      {
        item: "Digital Strategy",
        href: "/services/digital-strategy",
        children: [
          { item: "Technology Road-mapping", href: "/services/digital-strategy" },
          { item: "Digital Transformation", href: "/services/digital-strategy" },
          { item: "Product Strategy", href: "/services/digital-strategy" },
          { item: "Market Analysis", href: "/services/digital-strategy" },
          { item: "Innovation Workshops", href: "/services/digital-strategy" }
        ]
      },
      {
        item: "Data Analytics",
        href: "/services/data-analytics",
        children: [
          { item: "Business Intelligence", href: "/services/data-analytics" },
          { item: "Data Visualization", href: "/services/data-analytics" },
          { item: "Predictive Analytics", href: "/services/data-analytics" },
          { item: "Real-Time Dashboards", href: "/services/data-analytics" },
          { item: "Custom Reporting", href: "/services/data-analytics" }
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
  {
    item: "Contact",
    href: "/contact"
  },
  { item: "Careers", href: "/careers" },
  { item: "Blogs/Newsroom", href: "/blogs-newsroom" }
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