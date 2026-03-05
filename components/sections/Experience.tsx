"use client";

import { motion } from "framer-motion";
import { experience, type Experience } from "@/lib/data";

function ExperienceItem({
  item,
  index,
}: {
  item: Experience;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-surface border-2 border-accent" />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="text-foreground font-semibold text-lg">{item.role}</h3>
          <p className="text-accent text-sm font-medium">{item.company}</p>
        </div>
        <span className="text-muted text-sm font-mono shrink-0">
          {item.period}
        </span>
      </div>

      <p className="text-muted text-sm leading-relaxed mb-4">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {item.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2.5 py-1 rounded-full bg-surface border border-border text-muted font-mono"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[4px] top-2 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-12">
            {experience.map((exp, i) => (
              <ExperienceItem key={exp.company + exp.role} item={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
