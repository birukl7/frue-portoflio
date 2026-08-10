import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  delay?: number;
}

export default function TechBadge({ name, delay = 0 }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 font-mono text-xs text-zinc-600 transition-colors dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"
    >
      {name}
    </motion.span>
  );
}
