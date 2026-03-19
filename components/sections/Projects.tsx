"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 hover:bg-surface-raised transition-all duration-300 hover:shadow-accent-glow"
    >
      {/* Gradient top line — subtle at rest, strong on hover */}
      <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-accent/25 to-transparent group-hover:via-accent/70 transition-all duration-500" />

      <div className="flex items-start justify-between gap-4">
        <h3 className="text-foreground font-semibold text-lg leading-snug">
          {project.title}
        </h3>
        <div className="flex items-center gap-3 shrink-0 mt-0.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-muted hover:text-foreground transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-muted hover:text-foreground transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-muted text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-accent-dim text-accent/80 border border-accent/10 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-6 bg-accent/50" />
            <p className="text-accent text-xs font-mono tracking-[0.25em] uppercase">
              Work
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Selected Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
