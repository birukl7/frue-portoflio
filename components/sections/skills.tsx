"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/section-wrapper";
import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  TailwindIcon,
  JavaScriptIcon,
  Html5Icon,
  Css3Icon,
  FlutterIcon,
  DartIcon,
  FigmaIcon,
  GitIcon,
  GitHubIcon,
  RestApiIcon,
} from "@/components/ui/icons";
import { ReactNode } from "react";

interface SkillItem {
  name: string;
  category: "frontend" | "mobile" | "tools";
  icon: ReactNode;
  textColor: string;
}

const skillItems: SkillItem[] = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: <ReactIcon className="h-4 w-4" />,
    textColor: "text-cyan-500 dark:text-cyan-400",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: <NextjsIcon className="h-4 w-4" />,
    textColor: "text-zinc-900 dark:text-zinc-100",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: <TypeScriptIcon className="h-4 w-4" />,
    textColor: "text-blue-500 dark:text-blue-400",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: <TailwindIcon className="h-4 w-4" />,
    textColor: "text-sky-500 dark:text-sky-400",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: <JavaScriptIcon className="h-4 w-4" />,
    textColor: "text-amber-500 dark:text-yellow-400",
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: <Html5Icon className="h-4 w-4" />,
    textColor: "text-orange-500 dark:text-orange-400",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: <Css3Icon className="h-4 w-4" />,
    textColor: "text-blue-500 dark:text-blue-400",
  },

  // Mobile
  {
    name: "Flutter",
    category: "mobile",
    icon: <FlutterIcon className="h-4 w-4" />,
    textColor: "text-sky-500 dark:text-sky-400",
  },
  {
    name: "Dart",
    category: "mobile",
    icon: <DartIcon className="h-4 w-4" />,
    textColor: "text-indigo-500 dark:text-indigo-400",
  },

  // Tools & Design
  {
    name: "Figma",
    category: "tools",
    icon: <FigmaIcon className="h-4 w-4" />,
    textColor: "text-pink-500 dark:text-pink-400",
  },
  {
    name: "Git",
    category: "tools",
    icon: <GitIcon className="h-4 w-4" />,
    textColor: "text-red-500 dark:text-red-400",
  },
  {
    name: "GitHub",
    category: "tools",
    icon: <GitHubIcon className="h-4 w-4" />,
    textColor: "text-zinc-900 dark:text-zinc-100",
  },
  {
    name: "REST APIs",
    category: "tools",
    icon: <RestApiIcon className="h-4 w-4" />,
    textColor: "text-purple-500 dark:text-purple-400",
  },
];

const categories = [
  { id: "all", label: "All Stack" },
  { id: "frontend", label: "Frontend Core" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "tools", label: "Design & Tools" },
];

export default function Skills() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? skillItems
      : skillItems.filter((item) => item.category === filter);

  return (
    <SectionWrapper id="skills" number="04" label="Skills">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
            Technologies I <span className="text-accent">work with</span>.
          </h2>
          <p className="mt-2 text-base text-zinc-500">
            A curated list of frameworks, languages, and tools I use daily.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-1 rounded-md border border-zinc-200 bg-white p-1 max-w-full dark:border-zinc-800 dark:bg-zinc-900/60">
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`rounded px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[11px] sm:text-xs transition-all duration-200 ${
                  isActive
                    ? "bg-accent text-white font-medium shadow-sm"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Minimal Pill Badges Layout */}
      <motion.div layout className="flex flex-wrap gap-2.5 sm:gap-3">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((tech) => (
            <motion.div
              layout
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group cursor-pointer inline-flex items-center gap-2.5 rounded-full border border-zinc-200/80 bg-white px-4 py-2.5 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-md hover:shadow-accent/5 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-accent/40"
            >
              {/* Standalone Brand Icon */}
              <span className={`flex-shrink-0 ${tech.textColor}`}>
                {tech.icon}
              </span>

              {/* Tech Name */}
              <span className="text-sm font-medium text-zinc-800 transition-colors group-hover:text-zinc-900 dark:text-zinc-200 dark:group-hover:text-white">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
