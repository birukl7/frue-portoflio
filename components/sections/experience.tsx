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
    id: "peak12",
    index: "01",
    company: "Peak 12",
    role: "Frontend Development Lead",
    type: "Cofounder",
    period: "Dec 2025 – May 2026",
    location: "Addis Ababa, Ethiopia",
    highlightMetric: "5,000+ Grade 12 Students Served",
    description:
      "Cofounded and engineered the frontend architecture for Peak 12, an exam preparation and challenge platform designed to prepare Ethiopian Grade 12 students for University Entrance Examinations.",
    achievements: [
      "Integrated frontend applications with REST APIs for real-time exam questions, authentication, user progress, and analytics.",
      "Optimized client-side rendering performance for seamless operation across low-bandwidth mobile networks.",
      "Architected a reusable component library using React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Delivered a production-ready application serving more than 5,000 active Ethiopian Grade 12 students.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    id: "zemenay",
    index: "02",
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
    index: "03",
    company: "GDSC AASTU",
    role: "Flutter Developer",
    type: "Member",
    period: "Nov 2023 – May 2024",
    location: "Addis Ababa, Ethiopia",
    highlightMetric: "4th Place GDSC Club Hackathon",
    description:
      "Engineered cross-platform mobile UI features for Visit Addis and reorganized developer trainee workflows at Google Developer Student Club AASTU.",
    achievements: [
      "Reorganized and mentored a group of five developer trainees, improving team workflow continuity.",
      "Engineered location display, interactive map integration, and UI views for Visit Addis mobile app.",
      "Achieved 4th place out of competing project teams in the GDSC AASTU annual club hackathon.",
    ],
    technologies: ["Flutter", "Dart", "Google Maps API"],
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState<string>("peak12");
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

      {/* Unique Career Dossier Matrix (2 Columns) */}
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Interactive Ledger List (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {experiences.map((exp) => {
            const isActive = exp.id === activeId;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`group relative w-full text-left rounded-md border p-5 transition-all duration-300 ${
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
                <div className="mt-3 inline-flex items-center gap-1.5 rounded bg-zinc-100 px-2.5 py-1 font-mono text-[11px] text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300">
                  <Sparkles className="h-3 w-3 text-accent" />
                  <span className="truncate">{exp.highlightMetric}</span>
                </div>

                {/* Active Indicator Chevron */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 md:block">
                  <ChevronRight
                    className={`h-5 w-5 transition-transform ${
                      isActive ? "text-accent translate-x-1 opacity-100" : "text-zinc-400"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Engineering Dossier Card (7 cols) */}
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-md border border-zinc-200 bg-white p-5 shadow-lg dark:border-zinc-800 dark:bg-[#1a1a1e] md:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-accent" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      DOSSIER // {activeExp.id}
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
                      {activeExp.company}
                    </h3>
                    <span className="font-mono text-xs text-accent">
                      {activeExp.period}
                    </span>
                  </div>

                  <div className="mt-0.5 flex flex-wrap items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                      {activeExp.role}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px] text-zinc-400">
                      <MapPin className="h-3 w-3" />
                      {activeExp.location}
                    </span>
                  </div>
                </div>

                {/* Overview Description */}
                <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-sm">
                  {activeExp.description}
                </p>

                {/* Deliverables List */}
                <div>
                  <h4 className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    Deliverables & Outcomes
                  </h4>
                  <div className="space-y-1.5">
                    {activeExp.achievements.map((item, idx) => (
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
                    {activeExp.technologies.map((tech, i) => (
                      <TechBadge key={tech} name={tech} delay={i * 0.04} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
