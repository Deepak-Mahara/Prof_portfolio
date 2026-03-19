export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  solution: string;
  outcome: string;
}

export const projectsData: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A high-performance storefront with headless CMS integration.",
    techStack: ["Next.js", "Tailwind", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    problem: "The client was struggling with a monolithic legacy system that caused slow page loads and poor conversion rates.",
    solution: "Architected a headless e-commerce solution using Next.js for lightning-fast edge rendering, decoupled from a robust backend CMS.",
    outcome: "Achieved a 40% increase in mobile conversion rates and reduced average page load time to under 1.2 seconds."
  },
  {
    slug: "task-management",
    title: "Task Management App",
    description: "Minimalist productivity tool with real-time syncing.",
    techStack: ["React", "Firebase", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    problem: "Most task managers were bloated with features, making simple daily planning overwhelming for casual users.",
    solution: "Designed an ultra-minimalist, distraction-free interface driven by keyboard shortcuts and real-time Firebase syncing.",
    outcome: "Gathered 5,000+ daily active users within the first month of launch with a 98% positive feedback score."
  },
  {
    slug: "ai-chat-interface",
    title: "AI Chat Interface",
    description: "Conversational UI powered by advanced language models.",
    techStack: ["Next.js", "OpenAI API", "Shadcn UI"],
    liveUrl: "#",
    githubUrl: "#",
    problem: "Traditional chatbot interfaces lacked context retention and felt highly robotic, leading to user drop-offs.",
    solution: "Built a highly responsive streaming UI using Next.js and OpenAI's API, complete with markdown rendering and conversational memory.",
    outcome: "Dramatically improved user engagement times and reduced customer support tickets by 30% for the integrated platform."
  },
  {
    slug: "portfolio-template",
    title: "Portfolio Template",
    description: "A customizable, minimal portfolio for creatives.",
    techStack: ["React", "TypeScript", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    problem: "Designers often lack the time or coding expertise to build highly performant, visually striking portfolios.",
    solution: "Created a wildly fast, accessible, and easily customizable template focusing on typography, whitespace, and smooth Framer Motion interactions.",
    outcome: "Adopted by hundreds of creatives globally, featured on multiple web design inspiration galleries."
  }
];
