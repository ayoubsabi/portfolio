"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    value: profile.email,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: Github,
    value: "github.com/ayoubsabi",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
    value: "linkedin.com/in/ayoubsabi",
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
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3">
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
            className="inline-block px-8 py-3.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/90 transition-all hover:shadow-[0_0_32px_rgba(99,102,241,0.4)] mb-16"
          >
            Send me an email
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {links.map(({ label, href, icon: Icon, value }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2.5 text-muted hover:text-foreground transition-colors group"
                aria-label={label}
              >
                <Icon
                  size={18}
                  className="group-hover:text-accent transition-colors"
                />
                <span className="text-sm">{value}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
