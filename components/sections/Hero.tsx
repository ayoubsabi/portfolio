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
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.p
            variants={item}
            className="text-accent text-sm font-mono tracking-widest uppercase"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-muted"
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
              className="px-6 py-3 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/90 transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] cursor-pointer"
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
            className="flex items-center gap-5 pt-2"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted hover:text-foreground transition-colors"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs tracking-widest uppercase font-mono">
          Scroll
        </span>
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
