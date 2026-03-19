"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16">
      {/* Cold mesh + dot grid background */}
      <div className="absolute inset-0 pointer-events-none bg-mesh-cold bg-dot-grid" />

      {/* Primary glow — top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-accent/8 blur-[100px] pointer-events-none" />
      {/* Secondary glow — bottom right */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <p className="text-accent text-xs font-mono tracking-[0.25em] uppercase">
              Available for Work
            </p>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground/60"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            variants={item}
            className="text-muted text-lg max-w-xl leading-relaxed"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-accent text-bg rounded-full text-sm font-medium hover:bg-accent/90 transition-all hover:shadow-[0_0_24px_rgba(56,189,248,0.4)] cursor-pointer"
            >
              View Projects
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 border border-border text-foreground rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-all cursor-pointer"
            >
              Get in Touch
            </button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center gap-3 pt-2"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-muted hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-muted hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="p-2 text-muted hover:text-foreground transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
