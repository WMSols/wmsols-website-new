export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  shortDescription: string;
  aboutRole: string;
  whatYoullDo: string[];
  whatWereLookingFor: string[];
  niceToHave: string[];
  whatWeOffer: string[];
  skills: string[];
}

export const jobs: Job[] = [
  {
    id: "1",
    slug: "senior-react-js-developer",
    title: "Senior React JS Developer",
    department: "Web Development",
    location: "Islamabad",
    type: "Full-Time",
    shortDescription: "A Senior React Developer is an experienced front-end or full-stack engineer who designs scalable architectures, mentors junior team members, and drives high-level technical decisions. They typically have 4+ years of hands-on experience, a deep understanding of React, TypeScript, and state management, and are adept at solving complex production-level challenges",
    aboutRole: "A Senior React Developer is an experienced front-end or full-stack engineer who designs scalable architectures, mentors junior team members, and drives high-level technical decisions. They typically have 4+ years of hands-on experience, a deep understanding of React, TypeScript, and state management, and are adept at solving complex production-level challenges",
    whatYoullDo: [
      "Lead design and engineering of high-scale Next.js, React, and Node.js codebases.",
      "Author robust TypeScript structures, REST APIs, and GraphQL schemas.",
      "Audit existing client codebases and advise on modern software transformations.",
      "Collaborate closely with UI/UX designers to translate Figma layouts into responsive pixels.",
      "Mentor junior members to enforce pristine software standards."
    ],
    whatWereLookingFor: [
      "4+ years of commercial experience with React and modern JavaScript.",
      "Strong proficiency in TypeScript and state management libraries (Redux, Zustand).",
      "Experience with Next.js and Server-Side Rendering (SSR).",
      "Deep understanding of web performance optimization and accessibility.",
      "Excellent communication skills and ability to lead technical discussions."
    ],
    niceToHave: [
      "Experience with Docker, Kubernetes, or AWS serverless deployments.",
      "Active contributions to popular front-end open-source packages."
    ],
    whatWeOffer: [
      "Competitive salary (PKR140k-PKR175k) + equity options.",
      "Generous hardware allowance (M4 MacBook Pro & ultra-wide screen layout).",
      "Full health, dental, and vision insurance premiums covered.",
      "Annual learning allowance (PKR 2,5000) and unlimited tech books budget."
    ],
    skills: ["React Js", "Typescript", "Next JS", "Redux", "Tailwind"]
  },
  {
    id: "2",
    slug: "ui-ux-product-designer",
    title: "UI/UX Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-Time",
    shortDescription: "We are looking for a creative UI/UX Product Designer to shape intuitive, engaging user experiences for our enterprise SaaS products.",
    aboutRole: "As a Product Designer, you will own the end-to-end design process, from user research and wireframing to high-fidelity prototyping and handoff.",
    whatYoullDo: [
      "Conduct user research and usability testing to inform design decisions.",
      "Create wireframes, storyboards, user flows, and site maps.",
      "Design high-fidelity mockups and interactive prototypes in Figma.",
      "Maintain and evolve our internal design system."
    ],
    whatWereLookingFor: [
      "3+ years of experience in product design.",
      "Expertise in Figma and prototyping tools.",
      "A strong portfolio demonstrating problem-solving and visual design skills."
    ],
    niceToHave: [
      "Basic understanding of HTML/CSS and Tailwind.",
      "Experience designing for B2B SaaS platforms."
    ],
    whatWeOffer: [
      "Remote work flexibility.",
      "Competitive salary and wellness stipends.",
      "Creative freedom and ownership of product aesthetics."
    ],
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "UI Design"]
  },
  {
    id: "3",
    slug: "backend-node-engineer",
    title: "Backend Node.js Engineer",
    department: "Web Development",
    location: "Lahore",
    type: "Contract",
    shortDescription: "Seeking a strong Backend Engineer to build robust, scalable APIs and microservices using Node.js and PostgreSQL.",
    aboutRole: "You will be responsible for server-side logic, database architecture, and ensuring high performance and responsiveness to requests from the front-end.",
    whatYoullDo: [
      "Design and implement scalable APIs.",
      "Optimize database queries and schema design.",
      "Implement security and data protection measures."
    ],
    whatWereLookingFor: [
      "3+ years of Node.js and Express/NestJS experience.",
      "Strong SQL skills (PostgreSQL preferred).",
      "Experience with Redis and message queues."
    ],
    niceToHave: [
      "Experience with GraphQL.",
      "Knowledge of CI/CD pipelines."
    ],
    whatWeOffer: [
      "Flexible contract terms.",
      "Performance bonuses.",
      "Opportunity to transition to full-time."
    ],
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"]
  },
  {
    id: "4",
    slug: "devops-engineer",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Islamabad",
    type: "Full-Time",
    shortDescription: "Join our infrastructure team to streamline our deployment pipelines, manage cloud resources, and ensure system reliability.",
    aboutRole: "You will bridge the gap between development and operations, focusing on automation, CI/CD, and cloud infrastructure management.",
    whatYoullDo: [
      "Manage AWS infrastructure using Terraform.",
      "Maintain and improve CI/CD pipelines in GitHub Actions.",
      "Monitor system performance and set up alerting."
    ],
    whatWereLookingFor: [
      "Experience with AWS core services (EC2, RDS, S3, ECS).",
      "Proficiency in IaC tools like Terraform or CloudFormation.",
      "Strong Linux administration skills."
    ],
    niceToHave: [
      "Kubernetes certification (CKA).",
      "Experience with Datadog or Prometheus."
    ],
    whatWeOffer: [
      "Competitive salary.",
      "Paid cloud certifications.",
      "Health insurance."
    ],
    skills: ["AWS", "Terraform", "Docker", "CI/CD", "Linux"]
  },
  {
    id: "5",
    slug: "qa-automation-engineer",
    title: "QA Automation Engineer",
    department: "Quality Assurance",
    location: "Remote",
    type: "Full-Time",
    shortDescription: "Ensure the quality of our releases by building and maintaining automated test suites for our web and mobile applications.",
    aboutRole: "You will work closely with developers to integrate automated testing into the CI/CD pipeline, reducing manual QA efforts.",
    whatYoullDo: [
      "Develop and execute automated test scripts using Cypress or Playwright.",
      "Perform API testing using Postman or RestAssured.",
      "Log and track defects in Jira."
    ],
    whatWereLookingFor: [
      "2+ years of experience in test automation.",
      "Proficiency in JavaScript/TypeScript for writing test scripts.",
      "Understanding of QA methodologies and SDLC."
    ],
    niceToHave: [
      "Experience with mobile automation (Appium).",
      "Performance testing experience."
    ],
    whatWeOffer: [
      "Remote work environment.",
      "Continuous learning opportunities.",
      "Generous PTO."
    ],
    skills: ["Cypress", "Playwright", "TypeScript", "API Testing", "Jira"]
  }
];