"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Sparkles, Smartphone } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import Image from "next/image";
import SectionWrapper from "@/components/ui/section-wrapper";
import TechBadge from "@/components/ui/tech-badge";

export default function Projects() {
  const featuredRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const featuredInView = useInView(featuredRef, {
    once: true,
    margin: "-100px",
  });
  const mobileInView = useInView(mobileRef, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="projects" number="03" label="Projects">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
        Featured <span className="text-accent">work</span>.
      </h2>
      <p className="mb-16 max-w-xl text-base text-zinc-500 dark:text-zinc-500">
        A selection of projects that showcase my approach to building modern,
        user-focused applications.
      </p>

      {/* ──── PROJECT 01 — Skill-Chain (Featured Large) ──── */}
      <motion.div
        ref={featuredRef}
        initial={{ opacity: 0, y: 40 }}
        animate={featuredInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
      >
        {/* Project Number */}
        <div className="absolute right-6 top-6 z-10 font-mono text-sm text-zinc-300 dark:text-zinc-700">
          01
        </div>

        <div className="grid lg:grid-cols-2">
          {/* Info Column */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                Featured Project
              </span>
            </div>

            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
              Skill-Chain
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
              AI-powered job matching platform
            </p>

            <p className="mt-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Developed the frontend of an AI-powered job matching platform
              designed to streamline recruitment for employers and job seekers
              through intelligent matching algorithms.
            </p>

            {/* Features */}
            <ul className="mt-6 grid grid-cols-2 gap-2">
              {[
                "AI-based job recommendations",
                "Telegram bot integration",
                "Real-time messaging",
                "Video interviews",
                "Responsive interfaces",
                "Employer & seeker flows",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-500"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Tech */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "REST APIs",
              ].map((t, i) => (
                <TechBadge key={t} name={t} delay={i * 0.05} />
              ))}
            </div>

            {/* Links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/frezermt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:border-accent hover:text-accent dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-accent dark:hover:text-accent"
              >
                <GitHubIcon className="h-4 w-4" />
                Source
              </a>
            </div>

            <span className="mt-6 font-mono text-xs text-zinc-400 dark:text-zinc-600">
              August 2025 – June 2026
            </span>
          </div>

          {/* Image Column */}
          <div className="relative flex items-center justify-center overflow-hidden bg-zinc-100 p-8 dark:bg-zinc-800/30 lg:p-12">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative w-full overflow-hidden rounded-xl shadow-2xl"
            >
              <Image
                src="/skillchain-mockup.png"
                alt="Skill-Chain AI-powered job matching platform dashboard showing job recommendations and candidate profiles"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-transparent to-transparent dark:from-zinc-900/50" />
          </div>
        </div>
      </motion.div>

      {/* ──── PROJECT 02 — Visit Addis (Mobile Mockup) ──── */}
      <motion.div
        ref={mobileRef}
        initial={{ opacity: 0, y: 40 }}
        animate={mobileInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="group mt-8 overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
      >
        {/* Project Number */}
        <div className="absolute right-6 top-6 z-10 font-mono text-sm text-zinc-300 dark:text-zinc-700">
          02
        </div>

        <div className="grid items-center lg:grid-cols-2">
          {/* Phone Mockup Column */}
          <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 p-12 dark:from-amber-950/20 dark:to-orange-950/20 lg:order-1 lg:p-16">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Phone Frame */}
              <div className="relative mx-auto w-56 overflow-hidden rounded-[2.5rem] border-[6px] border-zinc-800 bg-zinc-900 shadow-2xl dark:border-zinc-600 md:w-64">
                {/* Notch */}
                <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-zinc-900 dark:bg-zinc-800" />
                <video
                  src="/visit_addis.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-auto w-full object-cover pointer-events-none select-none"
                />
              </div>
            </motion.div>
          </div>

          {/* Info Column */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:order-0">
            <div className="mb-4 flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-amber-500" />
              <span className="font-mono text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Mobile App
              </span>
            </div>

            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
              Visit Addis
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
              Explore Addis Ababa with confidence
            </p>

            <p className="mt-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Developed Visit Addis, a Flutter-based mobile application designed
              to help tourists and residents explore Addis Ababa through event
              discovery, hotel listings, and integrated maps.
            </p>

            {/* Features */}
            <ul className="mt-6 space-y-2">
              {[
                "Event discovery & hotel listings",
                "User reviews & ratings",
                "Integrated maps & navigation",
                "Personalized exploration",
                "Responsive mobile interfaces",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-500"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-amber-500" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Tech */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Flutter", "Dart", "Maps", "Firebase"].map((t, i) => (
                <TechBadge key={t} name={t} delay={i * 0.05} />
              ))}
            </div>

            {/* Links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://github.com/frezermt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:border-amber-500 hover:text-amber-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-amber-500 dark:hover:text-amber-400"
              >
                <GitHubIcon className="h-4 w-4" />
                Source
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
