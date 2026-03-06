export const profile = {
  name: "Ayoub Sabi",
  title: "Software Engineer",
  tagline: "5+ years building robust, scalable, and high-performance web applications.",
  bio: "Software Engineer with 6+ years of experience building robust, scalable, and high-performance web applications. Expert in PHP and JavaScript frameworks, with a focus on clean, maintainable code and performance optimization for mission-critical projects. Passionate about continuous learning and exploring the latest technologies — including AI-augmented engineering with tools like Claude Code and GitHub Copilot.",
  email: "ayoubsabi@gmail.com",
  github: "https://github.com/ayoubsabi",
  linkedin: "https://www.linkedin.com/in/ayoubsabi/",
  location: "Morocco",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application built with Next.js and PostgreSQL. Features real-time updates, authentication, and a responsive dashboard.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/ayoubsabi/project-alpha",
    live: "https://project-alpha.vercel.app",
    featured: true,
  },
  {
    title: "Project Beta",
    description:
      "An open-source CLI tool that automates repetitive development tasks. Used by over 200 developers to streamline their workflow.",
    tags: ["Node.js", "TypeScript", "CLI"],
    github: "https://github.com/ayoubsabi/project-beta",
    featured: true,
  },
  {
    title: "Project Gamma",
    description:
      "A REST API service handling thousands of requests per day, built with Express and Redis for caching. Fully documented with OpenAPI.",
    tags: ["Node.js", "Express", "Redis", "Docker"],
    github: "https://github.com/ayoubsabi/project-gamma",
    live: "https://project-gamma.vercel.app",
    featured: false,
  },
  {
    title: "Project Delta",
    description:
      "A mobile-first e-commerce storefront with cart, checkout, and Stripe payment integration. Optimized for Core Web Vitals.",
    tags: ["React", "Stripe", "Next.js", "Prisma"],
    github: "https://github.com/ayoubsabi/project-delta",
    live: "https://project-delta.vercel.app",
    featured: false,
  },
];

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  { category: "Backend", skills: ["PHP", "Laravel", "Symfony", "Python"] },
  { category: "Frontend", skills: ["React.js", "JavaScript", "Bootstrap"] },
  { category: "Databases", skills: ["PostgreSQL", "MySQL"] },
  { category: "Caching", skills: ["Redis", "Memcached"] },
  { category: "Search & Observability", skills: ["Typesense", "ElasticSearch", "ELK Stack"] },
  { category: "APIs & Messaging", skills: ["REST APIs", "Firebase Cloud Messaging"] },
  { category: "Geo Data", skills: ["Redis Geospatial", "PostGIS", "PgRouting"] },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
};

export const experience: Experience[] = [
  {
    company: "Done",
    role: "Senior Software Engineer",
    period: "Oct 2024 — Present",
    description:
      "Working on Morocco's first super app, a platform integrating multiple services to simplify daily life. Key contributions include designing a granular permission system, building a real-time notification system for order lifecycle events and advertising push notifications via Firebase Cloud Messaging (FCM), and developing an intelligent geospatial dispatch system using Redis Geospatial Indexes to assign orders to the nearest available driver. Also implemented Redis Geospatial for real-time driver tracking, Typesense for fast and relevant search, and ELK Stack for centralized monitoring and observability.",
    skills: [
      "PHP",
      "Laravel",
      "PostgreSQL",
      "PostGIS",
      "PgRouting",
      "Redis Geospatial",
      "Firebase Cloud Messaging",
      "Memcached",
      "ELK Stack",
      "Typesense",
    ],
  },
  {
    company: "Pyxicom",
    role: "Software Engineer",
    period: "Oct 2019 — Oct 2024",
    description:
      "Designed and developed complex web applications for multiple clients over nearly 5 years. Built secure and efficient REST APIs, integrated new modules, and maintained existing features. Focused on performance optimization and production deployments across Symfony and Laravel-based projects.",
    skills: ["PHP", "Symfony", "Laravel", "React.js", "MySQL", "PostgreSQL", "REST APIs"],
  },
  {
    company: "Fondation Med VI pour la Réinsertion des Détenus",
    role: "Web Developer Intern",
    period: "Dec 2018 — May 2019",
    description:
      "Developed an internal expense management application from requirements analysis through delivery. Handled both back-end development with Symfony and front-end implementation with Bootstrap and modern JavaScript.",
    skills: ["PHP", "Symfony", "JavaScript", "MySQL", "Bootstrap"],
  },
];
