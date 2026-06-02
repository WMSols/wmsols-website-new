export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Used for the dynamic single page
  category: string;
  date: string;
  imageUrl: string;
  isFeatured: boolean;
  readTime: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "navigating-tech-landscape-2026",
    title: "Navigating the Changing Tech Landscape: Insights for Modern Enterprises",
    excerpt: "Discover the critical emerging technology shifts shaping digital architecture this year, from headless CMS solutions like Strapi to automated integration layers.",
    content: "<p>The tech landscape is shifting rapidly. As companies look to decouple their front-ends for lightning-fast presentation layers using frameworks like Next.js, headless architectures have taken center stage.</p><p>Building applications that are highly resilient, scalable, and responsive requires rethinking traditional monolith stacks. In this piece, we explore how integrating headless CMS platforms can cut operational maintenance times in half while increasing delivery speed across distributed teams.</p>",
    category: "Insights",
    date: "May 28, 2026",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    isFeatured: true,
    readTime: "5 min read",
    author: { name: "Sarah Jenkins", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" }
  },
  {
    id: "2",
    slug: "maximizing-efficiency-strapi-nextjs",
    title: "Maximizing Content Efficiency with Strapi and Next.js App Router",
    excerpt: "Learn how modern enterprise brands manage localized application workflows across multiple zones globally using modern headless architecture frameworks.",
    content: "<p>Strapi provides an exceptional developer experience coupled with absolute content freedom for editors. When paired with Next.js dynamic routes, the performance gains are unmatched.</p>",
    category: "Insights",
    date: "May 24, 2026",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600",
    isFeatured: false,
    readTime: "4 min read",
    author: { name: "Alex Rivera", avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150" }
  },
  {
    id: "3",
    slug: "future-of-ui-ux-design-systems",
    title: "The Future of Scalable UI/UX Design Systems for Enterprise ERPs",
    excerpt: "A deep dive into constructing high-performance component design assets that synchronize gracefully across complex multi-layered data tables and administrative forms.",
    content: "<p>Design systems are the unsung heroes of corporate consistency. By configuring standard guidelines around layout grids and density styles, interfaces remain intuitive regardless of product scale.</p>",
    category: "Design",
    date: "May 19, 2026",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600",
    isFeatured: false,
    readTime: "6 min read",
    author: { name: "Emma Watson", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150" }
  },
  {
    id: "4",
    slug: "understanding-erp-ledgers-and-stock-flows",
    title: "Understanding Complex ERP Financial Ledgers and Serial Tracking Flows",
    excerpt: "Breaking down how double-entry automation helps corporate warehouses prevent sync errors when matching purchase invoices to real-time stock balances.",
    content: "<p>Inventory synchronization requires deterministic validation states. Here is a breakdown of programmatic safety barriers inside automated accounting loops.</p>",
    category: "Insights",
    date: "May 12, 2026",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
    isFeatured: false,
    readTime: "7 min read",
    author: { name: "Marcus Vance", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" }
  },
  {
    id: "5",
    slug: "announcing-wmsols-partnership-2026",
    title: "Announcing Our Strategic Cloud Alliance for Distributed Data Architectures",
    excerpt: "We are thrilled to reveal a new technical relationship built to expand international deployment optimizations for client custom network runtimes globally.",
    content: "<p>This infrastructure expansion guarantees reduced latency across five continents, introducing closer edge-computing capabilities for dynamic API routing paths.</p>",
    category: "News",
    date: "May 05, 2026",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600",
    isFeatured: false,
    readTime: "3 min read",
    author: { name: "Media Team", avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" }
  },
  {
    id: "6",
    slug: "building-secure-rest-apis-node-express",
    title: "Best Practices for Securing Production-Grade Node and Express Runtimes",
    excerpt: "How to properly configure security layers, rate limiting blocks, and authorization checks to successfully defend structural applications against modern script threats.",
    content: "<p>Securing open web servers demands rigid header handling policies and parameter verification methods. Let us map out ideal security recipes step-by-step.</p>",
    category: "Insights",
    date: "April 29, 2026",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600",
    isFeatured: false,
    readTime: "5 min read",
    author: { name: "Alex Rivera", avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150" }
  },
  {
    id: "7",
    slug: "minimizing-layout-shifts-tailwind-css",
    title: "How to Minimize Cumulative Layout Shifts Using Fixed Tailwind Form Factors",
    excerpt: "A direct look at preventing layout shifts by ensuring correct aspect-ratio dimensions on dynamic image loaders and server-side containers.",
    content: "<p>Layout shifting degrades core web metrics instantly. Forcing precise aspect limits removes page reflows entirely during state shifts.</p>",
    category: "Design",
    date: "April 15, 2026",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600",
    isFeatured: false,
    readTime: "4 min read",
    author: { name: "Emma Watson", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150" }
  },
  {
    id: "8",
    slug: "quarterly-company-milestones-q1-2026",
    title: "WMsols Q1 2026 Wrap-Up: Highlighting Our Growth and Product Milestones",
    excerpt: "Celebrating engineering updates, project handoffs, and looking over our growing portfolio as we move deeper into the current year.",
    content: "<p>Our team expanded significantly this quarter, introducing dedicated capabilities across headless architecture management and cloud optimization workflows.</p>",
    category: "News",
    date: "April 02, 2026",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600",
    isFeatured: false,
    readTime: "3 min read",
    author: { name: "Media Team", avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" }
  },
  {
    id: "9",
    slug: "intro-to-finite-automata-in-networking",
    title: "Applying Deterministic Finite Automata to Modern Network Stream Monitoring",
    excerpt: "An educational exploration into mapping structural communication patterns using mathematical automata rules for precise data routing validation.",
    content: "<p>Automata models offer rigid, predictable state tracking systems perfectly suited for analyzing binary token streams efficiently over live protocols.</p>",
    category: "Insights",
    date: "March 22, 2026",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600",
    isFeatured: false,
    readTime: "8 min read",
    author: { name: "Sarah Jenkins", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" }
  },
  {
    id: "10",
    slug: "dockerization-made-simple-for-fresher-developers",
    title: "Dockerization Made Simple: A Practical Guide for Modern Entry-Level Engineers",
    excerpt: "Demystifying virtualization environments, local networks, volumes, and container files to help you launch multi-tiered development instances smoothly.",
    content: "<p>Containers ensure absolute uniformity across staging environments. Learning to sandbox local databases speeds up onboarding workflows dramatically.</p>",
    category: "Insights",
    date: "March 11, 2026",
    imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600",
    isFeatured: false,
    readTime: "5 min read",
    author: { name: "Alex Rivera", avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150" }
  }
];