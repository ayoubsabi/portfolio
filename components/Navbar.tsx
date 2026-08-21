"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Navigation");
  const data = useTranslations("Data.profile");

  const navLinks = [
    { label: t("experience"), href: "#experience" },
    { label: t("skills"), href: "#skills" },
    { label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-border shadow-[0_1px_0_0_rgba(56,189,248,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center text-foreground font-semibold text-sm tracking-widest uppercase hover:text-accent transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {data("name")
            .split(" ")
            .map((n) => n[0])
            .join("")}
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block align-middle ml-1" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-muted text-sm hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={data("github")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Github size={14} />
              GitHub
            </a>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        {/* Mobile nav buttons */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            className="p-2 text-muted hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border"
          >
            <ul className="max-w-5xl mx-auto px-6 py-2 flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="py-3 text-muted hover:text-foreground transition-colors cursor-pointer w-full text-left text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={data("github")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 flex items-center gap-1.5 text-muted hover:text-foreground transition-colors text-sm"
                >
                  <Github size={14} />
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
