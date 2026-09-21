"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Code2,
} from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import TechBadge from "@/components/ui/tech-badge";

interface Experience {
  id: string;
  index: string;
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  highlightMetric: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: "zemenay",
    index: "01",
    company: "Zemenay Tech",
    role: "Frontend Engineer Intern",
    type: "Internship",
    period: "Jul 2024 – Sep 2024",
    location: "Addis Ababa, Ethiopia",
    highlightMetric: "Campus Connect Web Application",
    description:
      "Collaborated within a team of five developers to design and engineer the Campus Connect web application from Figma wireframes to API integration.",
    achievements: [
      "Translated high-fidelity Figma designs into functional, responsive frontend views.",
      "Built reusable UI components with React.js and Tailwind CSS to ensure codebase modularity.",
      "Integrated frontend features with backend REST APIs to synchronize real-time data.",
      "Refined navigation flow, visual hierarchy, and interface usability across browser viewports.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Figma",
      "REST APIs",
    ],
  },
  {
    id: "gdsc",
    index: "02",
    company: "GDSC AASTU",
    role: "Flutter Developer Mentee",
    type: "Mentee",
    period: "Nov 2023 – May 2024",
    location: "Addis Ababa, Ethiopia",
    highlightMetric: "4th Place GDSC Club Hackathon",
    description:
      "Collaborated as a developer mentee within a 5-member team at Google Developer Student Club AASTU, engineering cross-platform mobile UI features for the Visit Addis application.",
    achievements: [
      "Trained as a Flutter developer mentee in a 5-member team, learning mobile development and team workflows.",
      "Engineered location display, venue screens, and UI layouts for the Visit Addis mobile app.",
      "Secured 4th place out of competing project teams in the GDSC AASTU annual club hackathon.",
    ],
    technologies: ["Flutter", "Dart", "Google Maps API"],
  },
];

function DossierDetailCard({ exp }: { exp: Experience }) {
  return (
    <div className="space-y-4">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-accent" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            DOSSIER // {exp.id}
          </span>
        </div>
        <span className="font-mono text-[11px] text-emerald-500 dark:text-emerald-400">
          ● VERIFIED IMPACT
        </span>
      </div>

      {/* Company & Role */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl">
            {exp.company}
          </h3>
          <span className="font-mono text-xs text-accent">
            {exp.period}
          </span>
        </div>

        <div className="mt-0.5 flex flex-wrap items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
          <span className="font-semibold text-zinc-900 dark:text-zinc-200">
            {exp.role}
          </span>
          <span className="flex items-center gap-1 font-mono text-[11px] text-zinc-400">
            <MapPin className="h-3 w-3" />
            {exp.location}
          </span>
        </div>
      </div>

      {/* Overview Description */}
      <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-sm">
        {exp.description}
      </p>

      {/* Deliverables List */}
      <div>
        <h4 className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
          Deliverables & Outcomes
        </h4>
        <div className="space-y-1.5">
          {exp.achievements.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 rounded border border-zinc-100 bg-zinc-50/60 px-3 py-2 text-xs text-zinc-700 dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:text-zinc-300"
            >
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
              <span className="leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-wrap gap-1.5">
          {exp.technologies.map((tech, i) => (
            <TechBadge key={tech} name={tech} delay={i * 0.04} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeId, setActiveId] = useState<string | null>("zemenay");
  const activeExp = experiences.find((e) => e.id === activeId) || experiences[0];

  return (
    <SectionWrapper id="experience" number="02" label="Career & Track Record">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
          Engineering <span className="text-accent">Dossier</span>.
        </h2>
        <p className="mt-2 max-w-xl text-base text-zinc-500">
          Select a position to inspect deliverables, architecture impact, and tech stack details.
        </p>
      </div>

      {/* Unique Career Dossier Matrix (2 Columns on Desktop, Accordion on Mobile) */}
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Interactive Ledger List */}
        <div className="space-y-3 min-w-0 lg:col-span-5">
          {experiences.map((exp) => {
            const isActive = exp.id === activeId;
            return (
              <div key={exp.id} className="space-y-3">
                <button
                  onClick={() => setActiveId(activeId === exp.id ? null : exp.id)}
                  className={`group relative w-full text-left rounded-md border p-4 sm:p-5 transition-all duration-300 ${
                    isActive
                      ? "border-accent bg-accent/10 shadow-md dark:border-accent dark:bg-accent/10"
                      : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-accent">
                      [{exp.index}]
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      {exp.period}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <span className="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {exp.type}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    {exp.role}
                  </p>

                  {/* Highlight Metric Pill */}
                  <div className="mt-3 inline-flex max-w-full items-center gap-1.5 rounded bg-zinc-100 px-2.5 py-1 font-mono text-[11px] text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300">
                    <Sparkles className="h-3 w-3 text-accent flex-shrink-0" />
                    <span className="truncate">{exp.highlightMetric}</span>
                  </div>

                  {/* Active Indicator Chevron */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 transition-all">
                    <ChevronRight
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isActive
                          ? "text-accent rotate-90 lg:rotate-0 lg:translate-x-1 opacity-100"
                          : "text-zinc-400 opacity-60 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </button>

                {/* Mobile Inline Description (only visible below lg breakpoint) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden lg:hidden"
                    >
                      <div className="rounded-md border border-accent/30 bg-white p-4 shadow-lg dark:border-accent/30 dark:bg-[#1a1a1e]">
                        <DossierDetailCard exp={exp} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Engineering Dossier Card (7 cols - Desktop Only) */}
        <div className="hidden min-w-0 lg:col-span-7 lg:block">
          <div className="relative overflow-hidden rounded-md border border-zinc-200 bg-white p-4 sm:p-6 shadow-lg dark:border-zinc-800 dark:bg-[#1a1a1e]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
              >
                <DossierDetailCard exp={activeExp} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
