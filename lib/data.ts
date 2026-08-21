export const profile = {
  name: "Ayoub Sabi",
  title: "Senior Software Engineer",
  tagline: "Building high-performance backend systems with PHP, Symfony, Laravel, and Node.js with geospatial expertise.",
  bio: "Senior Software Engineer with 6+ years of experience designing and shipping production-grade web applications. Specialized in PHP, Symfony, and Laravel, with additional experience in Node.js, Express.js, and TypeScript. Deep expertise in geospatial systems, real-time dispatch, and high-throughput backend architecture. Built driver dispatch and order routing engines using PostGIS, OSRM, and Redis Geospatial. Experienced with ELK Stack for observability and Typesense for search. I leverage AI-augmented engineering (Claude Code, GitHub Copilot) to ship faster without cutting corners.",
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
      "Real-time order dispatch system that assigns delivery orders to the nearest available driver using Redis Geospatial indexes and PostGIS. Handles live driver location tracking and intelligent route calculation via OSRM for optimal assignment at scale.",
    tags: ["PHP", "Laravel", "Redis Geospatial", "PostGIS", "OSRM", "PostgreSQL"],
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
    tags: ["ELK Stack", "Elasticsearch", "Laravel", "Docker", "PHP"],
    featured: false,
  },
];

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  { category: "Backend", skills: ["PHP", "Symfony", "Laravel", "Node.js", "Express.js"] },
  { category: "Languages", skills: ["JavaScript", "TypeScript", "PHP"] },
  { category: "Frontend", skills: ["React.js", "Next.js", "Bootstrap"] },
  { category: "Databases", skills: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "Caching", skills: ["Redis", "Memcached"] },
  { category: "Search & Observability", skills: ["Typesense", "Elasticsearch", "ELK Stack"] },
  { category: "APIs & Messaging", skills: ["REST APIs", "Firebase Cloud Messaging", "OpenAPI (Swagger)"] },
  { category: "Geo Data", skills: ["Redis Geospatial", "PostGIS", "OSRM"] },
  { category: "DevOps & Tools", skills: ["Docker", "Ansible (AWX)", "GitHub Actions", "Git"] },
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
    period: "Oct 2024 — Jun 2026",
    description:
      "Engineered core infrastructure for Morocco's first super app — a platform integrating delivery, mobility, and daily services at scale. Built a real-time geospatial dispatch engine using Redis Geospatial indexes and PostGIS to automatically assign orders to the nearest available driver, significantly reducing delivery times. Optimized route calculation costs by replacing Google Routes API with a custom OSRM-based solution. Developed a calendar system to manage driver availability with precise time slots and delivery zones. Spearheaded the integration of a Logistics as a Service (LaaS) solution, enabling third-party systems to seamlessly plug into our delivery infrastructure. Delivered a real-time notification system via Firebase Cloud Messaging to keep clients, drivers, and partners informed at every stage of delivery.",
    skills: [
      "PHP",
      "Laravel",
      "PostgreSQL",
      "PostGIS",
      "OSRM",
      "Redis Geospatial",
      "Firebase Cloud Messaging",
      "Memcached",
      "ELK Stack",
    ],
  },
  {
    company: "Pyxicom",
    role: "Backend Developer",
    period: "Nov 2019 — Sep 2024",
    description:
      "Designed and delivered complex web applications and REST APIs for clients across multiple industries, managing the full project lifecycle from requirements to production deployment. Architected secure APIs using Symfony and Laravel, fully documented with OpenAPI (Swagger) to facilitate seamless integration with React and Next.js frontend teams. Led the successful migration of 5+ legacy CodeIgniter and Zend applications to modern Symfony and Laravel architectures with zero data loss or downtime. Optimized MySQL and PostgreSQL databases for high-traffic environments by restructuring schemas and refining indexes. Integrated various third-party services and payment gateways within strict business and regulatory constraints.",
    skills: ["PHP", "Symfony", "Laravel", "React.js", "Next.js", "MySQL", "PostgreSQL", "REST APIs", "OpenAPI (Swagger)"],
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
