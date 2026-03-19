export const profile = {
  name: "Ayoub Sabi",
  title: "Senior Software Engineer",
  tagline: "Building high-performance backend systems with PHP, Laravel, Symfomy & geospatial expertise.",
  bio: "Senior Software Engineer with 6+ years of experience designing and shipping production-grade web applications. Specialized in PHP, Laravel, and Symfony with deep expertise in geospatial systems, real-time dispatch, and high-throughput backend architecture. Built driver dispatch and order routing engines using PostGIS, PgRouting, and Redis Geospatial. Experienced with ELK Stack for observability and Typesense for search. I leverage AI-augmented engineering (Claude Code, GitHub Copilot) to ship faster without cutting corners.",
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
    title: "Geospatial Dispatch Engine",
    description:
      "Real-time order dispatch system that assigns delivery orders to the nearest available driver using Redis Geospatial indexes and PostGIS. Handles live driver location tracking and intelligent routing via PgRouting for optimal assignment at scale.",
    tags: ["PHP", "Laravel", "Redis Geospatial", "PostGIS", "PgRouting", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Real-time Notification Service",
    description:
      "Event-driven push notification platform built on Firebase Cloud Messaging (FCM). Handles order lifecycle events, promotional broadcasts, and transactional alerts. Designed for high throughput with queued delivery and delivery tracking.",
    tags: ["PHP", "Laravel", "Firebase Cloud Messaging", "Redis", "REST APIs"],
    featured: true,
  },
  {
    title: "Multi-tenant REST API Platform",
    description:
      "Scalable multi-tenant REST API with granular role-based permission system, Redis caching, and Typesense-powered full-text search. Built with Laravel and fully documented with OpenAPI. Deployed across multiple client projects at Pyxicom.",
    tags: ["PHP", "Laravel", "Symfony", "PostgreSQL", "Redis", "Typesense", "REST APIs"],
    featured: false,
  },
  {
    title: "Observability & Monitoring Stack",
    description:
      "Centralized logging and monitoring setup using the ELK Stack (Elasticsearch, Logstash, Kibana) integrated into a Laravel application. Provides real-time error tracking, request tracing, and performance dashboards for production systems.",
    tags: ["ELK Stack", "ElasticSearch", "Laravel", "Docker", "PHP"],
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
      "Engineering core infrastructure for Morocco's first super app — a platform integrating delivery, mobility, and daily services at scale. Designed a granular role-based permission system for multi-service operations. Built a real-time geospatial dispatch engine using Redis Geospatial indexes and PostGIS to assign orders to the nearest available driver, with live driver tracking. Delivered a high-throughput push notification system via Firebase Cloud Messaging for order events and ad campaigns. Integrated Typesense for fast, relevant in-app search and deployed the ELK Stack for centralized observability across microservices.",
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
      "Designed and delivered complex web applications for clients across multiple industries over nearly 5 years. Architected and built secure, well-documented REST APIs, implemented new product features, and owned performance optimization for production systems. Worked primarily with Symfony and Laravel on both greenfield and legacy projects, collaborating closely with frontend teams using React.js.",
    skills: ["PHP", "Symfony", "Laravel", "React.js", "MySQL", "PostgreSQL", "REST APIs"],
  },
  {
    company: "Fondation Med VI pour la Réinsertion des Détenus",
    role: "Web Developer Intern",
    period: "Dec 2018 — May 2019",
    description:
      "Built an internal expense management application end-to-end, from requirements analysis to production delivery. Developed the back-end with Symfony and the front-end with Bootstrap and vanilla JavaScript. First exposure to full project ownership and working within institutional constraints.",
    skills: ["PHP", "Symfony", "JavaScript", "MySQL", "Bootstrap"],
  },
];
