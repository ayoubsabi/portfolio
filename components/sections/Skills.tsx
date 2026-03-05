"use client";

import { motion } from "framer-motion";
import { skills, type SkillCategory } from "@/lib/data";

function SkillCard({ item, index }: { item: SkillCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="flex flex-col gap-4 p-6 rounded-2xl bg-surface border border-border"
    >
      <p className="text-accent text-xs font-mono tracking-widest uppercase">
        {item.category}
      </p>
      <div className="flex flex-wrap gap-2">
        {item.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2.5 py-1 rounded-full bg-bg border border-border text-muted font-mono hover:border-accent/50 hover:text-foreground transition-colors"
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
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((item, i) => (
            <SkillCard key={item.category} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
