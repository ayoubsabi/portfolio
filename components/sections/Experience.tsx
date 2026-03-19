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
      <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-surface border-2 border-accent ring-2 ring-accent/10" />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-foreground font-semibold text-lg">{item.role}</h3>
          <p className="text-accent/80 text-sm font-mono">{item.company}</p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-md bg-accent-dim text-accent/70 font-mono border border-accent/15 shrink-0 self-start sm:self-auto">
          {item.period}
        </span>
      </div>

      <p className="text-muted text-sm leading-[1.75] mb-4">
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
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-6 bg-accent/50" />
            <p className="text-accent text-xs font-mono tracking-[0.25em] uppercase">
              Background
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — gradient fade */}
          <div className="absolute left-[4px] top-2 bottom-4 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

          <div className="flex flex-col gap-14">
            {experience.map((exp, i) => (
              <ExperienceItem key={exp.company + exp.role} item={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
