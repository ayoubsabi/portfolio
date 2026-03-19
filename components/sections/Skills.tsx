"use client";

import { motion } from "framer-motion";
import { skills, type SkillCategory } from "@/lib/data";

function SkillGroup({ item, index }: { item: SkillCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <p className="text-muted text-xs font-mono tracking-[0.2em] uppercase mb-3">
        {item.category}
      </p>
      <div className="flex flex-wrap gap-2">
        {item.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-3 py-1.5 rounded-full bg-surface border border-border text-foreground/70 font-mono hover:border-accent/40 hover:text-foreground transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
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
              Expertise
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {skills.map((item, i) => (
            <SkillGroup key={item.category} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
