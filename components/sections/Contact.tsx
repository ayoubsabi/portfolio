"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto"
        >
          {/* Vertical anchor line */}
          <div className="flex justify-center mb-4">
            <div className="h-12 w-px bg-gradient-to-b from-transparent to-accent/40" />
          </div>

          <p className="text-accent text-xs font-mono tracking-[0.25em] uppercase mb-3">
            Say Hello
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-muted leading-relaxed mb-12">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind, a question, or just want to say hi — my inbox is
            always open.
          </p>

          <motion.a
            href={`mailto:${profile.email}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-accent text-bg rounded-full text-sm font-semibold hover:bg-accent/90 transition-all hover:shadow-[0_0_32px_rgba(56,189,248,0.3)] mb-16"
          >
            <Mail size={16} />
            Send an Email
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 min-h-[44px] text-muted hover:text-foreground transition-colors group"
                aria-label={label}
              >
                <Icon
                  size={18}
                  className="group-hover:text-accent transition-colors"
                />
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
