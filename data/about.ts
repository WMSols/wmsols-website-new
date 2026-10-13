export const ourStory: string[] = [
  "Founded five years ago, WMsols began as a small group of passionate engineers determined to bridge the gap between complex technology and practical business needs. Our early days were defined by a relentless focus on solving hard technical problems with elegant, scalable solutions.",
  "Today, we have grown into a multidisciplinary global partner, serving ambitious enterprises across multiple continents. While our footprint has expanded, our core philosophy remains unchanged: technology should be an enabler, not an obstacle. We bring a bespoke approach to every challenge, ensuring that our architectural choices directly align with long-term strategic objectives.",
  "Based in San Francisco but operating with a global reach, our team combines the agility of a startup with the rigorous standards of enterprise engineering. We are united by a shared commitment to transparency, craftsmanship, and delivering tangible impact for our clients."
];

/** Shape matches what a future Strapi/CMS team member API can return. */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

/**
 * Static team roster for the About page.
 * Add/remove entries here; later swap this array for a fetch from Strapi.
 */
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600',
    bio: 'Sets product vision and client partnerships.',
  },
  {
    id: '2',
    name: 'Sara Khan',
    role: 'Head of Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600',
    bio: 'Leads architecture and delivery across web & mobile.',
  },
  {
    id: '3',
    name: 'James Okonkwo',
    role: 'Design Lead',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600',
    bio: 'Crafts product UX and design systems.',
  },
  {
    id: '4',
    name: 'Maya Patel',
    role: 'AI & Automation',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600',
    bio: 'Builds intelligent workflows and integrations.',
  },
  {
    id: '5',
    name: 'Daniel Chen',
    role: 'Full-Stack Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600',
    bio: 'Ships performant apps on modern stacks.',
  },
  {
    id: '6',
    name: 'Elena Rossi',
    role: 'Client Success',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600',
    bio: 'Keeps projects aligned and clients informed.',
  },
];
