"use client";

import { motion } from "framer-motion";
import {
  Languages as LanguagesIcon,
  Heart,
  Dumbbell,
  Swords,
  Music,
  Palette,
  Waves,
  Sparkles,
} from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import { ReactNode } from "react";

interface Language {
  name: string;
  level: string;
  description: string;
  dots: number;
}

interface Interest {
  name: string;
  icon: ReactNode;
  textColor: string;
}

const languages: Language[] = [
  {
    name: "English",
    level: "Fluent",
    description: "Strong professional written & oral communication",
    dots: 5,
  },
  {
    name: "Amharic",
    level: "Native",
    description: "Native proficiency in written & spoken language",
    dots: 5,
  },
  {
    name: "Italian",
    level: "Basic",
    description: "Basic introductory speaking & listening ability",
    dots: 1,
  },
];

const interests: Interest[] = [
  { name: "Sports", icon: <Dumbbell className="h-4 w-4" />, textColor: "text-blue-500 dark:text-blue-400" },
  { name: "Martial Arts", icon: <Swords className="h-4 w-4" />, textColor: "text-red-500 dark:text-red-400" },
  { name: "Salsa Dancing", icon: <Music className="h-4 w-4" />, textColor: "text-pink-500 dark:text-pink-400" },
  { name: "Pottery", icon: <Palette className="h-4 w-4" />, textColor: "text-amber-500 dark:text-yellow-400" },
  { name: "Swimming", icon: <Waves className="h-4 w-4" />, textColor: "text-cyan-500 dark:text-cyan-400" },
];

export default function Personal() {
  return (
    <SectionWrapper id="personal" number="05" label="Personal & Perspective">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
          Communication & <span className="text-accent">Interests</span>.
        </h2>
        <p className="mt-2 max-w-xl text-base text-zinc-500">
          Multilingual communication abilities alongside personal passions beyond software engineering.
        </p>
      </div>

      {/* 2-Column Grid: Languages Left, Interests Right */}
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Languages (7 cols) */}
        <div className="lg:col-span-7 space-y-4 min-w-0">
          <div className="flex items-center gap-2 mb-4">
            <LanguagesIcon className="h-4 w-4 text-accent" />
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Languages & Proficiency
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="group rounded-md border border-zinc-200/80 bg-white p-4 sm:p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-accent/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-zinc-900 dark:text-white">
                    {lang.name}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-accent">
                    {lang.level}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {lang.description}
                </p>

                {/* Dot Bar */}
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-full rounded-full transition-colors ${
                        i < lang.dots
                          ? "bg-accent"
                          : "bg-zinc-200 dark:bg-zinc-800"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hobbies & Interests (5 cols) */}
        <div className="lg:col-span-5 space-y-4 min-w-0">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-4 w-4 text-pink-500" />
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Beyond the Code
            </h3>
          </div>

          <div className="rounded-md border border-zinc-200/80 bg-white p-4 sm:p-6 dark:border-zinc-800/80 dark:bg-zinc-900/40">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
              Activities and creative pursuits that keep my mind inspired, disciplined, and balanced outside of work.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {interests.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-50 px-3.5 py-2 text-xs font-medium transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-800/60 dark:hover:border-zinc-700"
                >
                  <span className={item.textColor}>{item.icon}</span>
                  <span className="text-zinc-800 dark:text-zinc-200">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
