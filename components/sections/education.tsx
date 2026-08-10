"use client";

import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";

export default function Education() {
  return (
    <SectionWrapper id="education" number="05" label="Education">
      <div className="mx-auto max-w-2xl">
        <div className="relative rounded-md border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900/40 md:p-10">
          {/* Accent Top Line */}
          <div className="absolute left-0 top-0 h-1 w-full rounded-t-md bg-gradient-to-r from-accent via-accent/60 to-transparent" />

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md border border-accent/20 bg-accent/10 text-accent">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                Addis Ababa Science and Technology University
              </h3>
              <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                Software Engineering
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  May 2022 – Present
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  Addis Ababa, Ethiopia
                </span>
              </div>

              {/* GPA Highlight */}
              <div className="mt-6 inline-flex items-center gap-3 rounded-md border border-accent/20 bg-accent/5 px-4 py-3">
                <Award className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-lg font-bold text-zinc-900 dark:text-white">
                    3.54 <span className="text-sm font-normal text-zinc-500">/ 4.00</span>
                  </div>
                  <div className="text-xs text-zinc-500">Cumulative GPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
