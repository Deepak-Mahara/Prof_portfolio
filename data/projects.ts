export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  problem: string;
  solution: string;
  outcome: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "student-activity-management",
    title: "Centralized Student Activity Management System",
    description: "Centralized student activity records featuring an admin approval workflow. Enforced secure role-based access using JWT authentication alongside an analytics dashboard.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB"],
    problem: "Managing student activity records manually resulted in severely fractured and inefficient administration setups.",
    solution: "Developed a rigid, fully centralized platform using Next.js and MongoDB to eliminate paper trails directly inside a scalable dashboard.",
    outcome: "Replaced the manual process with an incredibly fast, highly automated system ensuring unshakeable record fidelity.",
    githubUrl: "https://github.com/Deepak-Mahara/Student-Activity-Platform"
  },
  {
    slug: "ayurvedic-diet-management",
    title: "Ayurvedic Diet Management System",
    description: "A robust diet management platform connecting static nutritional datasets strictly with Ayurvedic properties to automate personalized diet charts via rule-based logic.",
    tech: ["React", "MySQL", "HTML", "CSS", "Bootstrap"],
    problem: "Drafting accurately customized Ayurvedic diets by hand was notoriously inconsistent and incredibly time consuming.",
    solution: "Programmed a native algorithmic engine directly linking heavy chemical nutritional values natively with foundational Ayurvedic doctrine.",
    outcome: "Succeeded in totally supplanting standard baseline manual dietary evaluations with instantaneous structural chart generation.",
    githubUrl: "https://github.com/Deepak-Mahara/Arogypath"
  },
  {
    slug: "task-scheduler",
    title: "Task Scheduler App",
    description: "A fast, straightforward desktop application architected exclusively for scheduling and effectively tracking simple tasks.",
    tech: ["Java Swing"],
    problem: "Common bloated web-based applications carried massive interface and network overhead for extraordinarily simple daily operational scheduling.",
    solution: "Compiled a strictly native desktop application driven by Java Swing to eliminate all non-essential connection tracking.",
    outcome: "Provided immediate, functional automated event logging with definitively exactly zero offline friction."
  }
];