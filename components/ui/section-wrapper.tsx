"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  number?: string;
  label?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  number,
  label,
  className = "",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id={id}
      className={`relative py-24 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {number && label && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16 flex items-center gap-3"
          >
            <span className="font-mono text-sm text-accent">{number}</span>
            <span className="h-px w-8 bg-accent/40" />
            <span className="font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
              {label}
            </span>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
