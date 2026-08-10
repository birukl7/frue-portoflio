"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Dumbbell,
  Swords,
  Music,
  PenTool,
  Waves,
} from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import { ReactNode } from "react";

interface Interest {
  name: string;
  icon: ReactNode;
  color: string;
}

const interests: Interest[] = [
  { name: "Sports", icon: <Dumbbell className="h-5 w-5" />, color: "text-blue-500" },
  { name: "Martial Arts", icon: <Swords className="h-5 w-5" />, color: "text-red-500" },
  { name: "Salsa Dancing", icon: <Music className="h-5 w-5" />, color: "text-pink-500" },
  { name: "Poetry Making", icon: <PenTool className="h-5 w-5" />, color: "text-amber-500" },
  { name: "Swimming", icon: <Waves className="h-5 w-5" />, color: "text-cyan-500" },
];

export default function Interests() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <SectionWrapper id="interests" number="06" label="Interests">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">
          Beyond the code<span className="text-accent">.</span>
        </h2>
        <p className="mb-10 text-sm text-zinc-500">
          Things that keep me inspired and balanced.
        </p>

        <div ref={ref} className="flex flex-wrap justify-center gap-3">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="flex items-center gap-2.5 rounded-md border border-zinc-200 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
            >
              <span className={interest.color}>{interest.icon}</span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {interest.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
