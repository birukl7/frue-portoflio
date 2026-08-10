"use client";

import { Languages as LanguagesIcon } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";

const languages = [
  {
    name: "English",
    level: "Fluent",
    description: "Strong written and oral communication",
    dots: 5,
  },
  {
    name: "Amharic",
    level: "Native",
    description: "Strong written and oral communication",
    dots: 5,
  },
  {
    name: "Italian",
    level: "Conversational",
    description: "Conversational proficiency",
    dots: 3,
  },
];

export default function Languages() {
  return (
    <SectionWrapper id="languages" number="05" label="Languages">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center gap-3 mb-8">
          <LanguagesIcon className="h-5 w-5 text-accent" />
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Communication
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="rounded-md border border-zinc-200 bg-white p-5 transition-all duration-300 hover:border-accent/40 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-accent/40"
            >
              <div className="text-base font-semibold text-zinc-900 dark:text-white">
                {lang.name}
              </div>
              <div className="mt-1 font-mono text-xs text-accent">
                {lang.level}
              </div>
              <p className="mt-2 text-sm text-zinc-500">
                {lang.description}
              </p>
              {/* Dot Indicator */}
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-4 rounded-full ${
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
    </SectionWrapper>
  );
}
