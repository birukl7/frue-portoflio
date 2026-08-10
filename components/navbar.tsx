"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 pointer-events-none"
      >
        <div
          className={`pointer-events-auto transition-all duration-500 ${
            scrolled
              ? "mt-4 w-full max-w-4xl rounded-full border border-zinc-200/80 bg-white/75 p-2 px-4 sm:px-6 shadow-xl shadow-black/5 backdrop-blur-2xl dark:border-zinc-800/80 dark:bg-zinc-950/75 dark:shadow-black/40"
              : "mt-0 w-full max-w-6xl border-b border-transparent bg-transparent py-4 px-4 sm:px-6 md:px-8"
          }`}
        >
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="text-lg font-semibold tracking-tight text-zinc-900 transition-colors hover:text-accent dark:text-white cursor-pointer"
            >
              Frezer<span className="text-accent">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs font-medium text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-white cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 cursor-pointer dark:border-zinc-800 dark:bg-zinc-900"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                ) : (
                  <Menu className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl dark:bg-zinc-950/95 md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-2xl font-medium text-zinc-900 transition-colors hover:text-accent dark:text-white cursor-pointer"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
