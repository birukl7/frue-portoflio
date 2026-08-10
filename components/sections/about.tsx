"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/section-wrapper";
import { Copy, Check } from "lucide-react";

interface PhilosophySnippet {
  id: string;
  num: string;
  label: string;
  code: string;
}

const snippets: PhilosophySnippet[] = [
  {
    id: "architecture",
    num: "01",
    label: "Architecture",
    code: `const architecture = {
  stack: ["React", "Next.js", "TypeScript"],
  pattern: "Modular Components",
  typeCheck: "Strict Mode",
  apiLayer: "REST & Type-Safe Schemas",
} as const;`,
  },
  {
    id: "performance",
    num: "02",
    label: "Performance",
    code: `const performance = {
  rendering: "SSR & Dynamic Imports",
  animations: "Hardware Accelerated",
  layoutShift: "0.00 CLS",
  vitals: "Fast Load & High FPS",
} as const;`,
  },
  {
    id: "accessibility",
    num: "03",
    label: "Accessibility",
    code: `const accessibility = {
  semantics: "HTML5 Standard",
  keyboard: "Full Focus Management",
  theme: "Dark & Light Contrast",
  motion: "Prefers-Reduced-Motion",
} as const;`,
  },
];

// Simple TS tokenizer for the code window
function tokenize(code: string) {
  const lines = code.split("\n");
  return lines.map((line, lineIdx) => {
    const tokens: { text: string; className: string }[] = [];
    let remaining = line;

    while (remaining.length > 0) {
      const wsMatch = remaining.match(/^(\s+)/);
      if (wsMatch) {
        tokens.push({ text: wsMatch[1], className: "" });
        remaining = remaining.slice(wsMatch[1].length);
        continue;
      }

      const strMatch = remaining.match(/^"([^"\\]|\\.)*"/);
      if (strMatch) {
        tokens.push({
          text: strMatch[0],
          className: "text-emerald-400 dark:text-emerald-400 text-emerald-600",
        });
        remaining = remaining.slice(strMatch[0].length);
        continue;
      }

      const kwMatch = remaining.match(
        /^(const|let|var|as|readonly)\b/
      );
      if (kwMatch) {
        tokens.push({
          text: kwMatch[0],
          className: "text-purple-400 dark:text-purple-400 text-purple-600",
        });
        remaining = remaining.slice(kwMatch[0].length);
        continue;
      }

      const idMatch = remaining.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*/);
      if (idMatch) {
        tokens.push({
          text: idMatch[0],
          className: "text-zinc-300 dark:text-zinc-300 text-zinc-700",
        });
        remaining = remaining.slice(idMatch[0].length);
        continue;
      }

      tokens.push({
        text: remaining[0],
        className: "text-zinc-500 dark:text-zinc-500 text-zinc-400",
      });
      remaining = remaining.slice(1);
    }

    return { lineNum: lineIdx + 1, tokens };
  });
}

export default function About() {
  const [activeId, setActiveId] = useState("architecture");
  const [copied, setCopied] = useState(false);

  const activeSnippet = snippets.find((s) => s.id === activeId) || snippets[0];
  const tokenizedLines = tokenize(activeSnippet.code);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <SectionWrapper id="about" number="01" label="About">
      <div className="grid items-start gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
        {/* Left Column: Title & Clean Paragraph Description */}
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white md:text-4xl">
            A frontend developer who cares about the{" "}
            <span className="text-accent">details</span>.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a frontend developer and software engineering graduate from
              Addis Ababa Science and Technology University with experience building
              modern web and mobile applications that people actually enjoy using.
            </p>
            <p>
              I work primarily with{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-200">
                React.js, Next.js, TypeScript, Tailwind CSS,
              </span>{" "}
              and{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-200">
                Flutter
              </span>
              , focusing on responsive interfaces, reusable component systems,
              accessibility, and performance.
            </p>
          </div>
        </div>

        {/* Right Column: Code Window & Tab Selectors */}
        <div>
          {/* Tab Selectors above the Code Window */}
          <div className="mb-4 flex flex-wrap gap-2">
            {snippets.map((s) => {
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={`rounded-md border px-3.5 py-1.5 font-mono text-xs transition-all duration-300 ${
                    isActive
                      ? "border-accent bg-accent/10 text-accent font-medium"
                      : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400 dark:hover:border-zinc-700"
                  }`}
                >
                  <span className="mr-1.5 opacity-60">{s.num}</span>
                  {s.label}
                </button>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-md border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-[#1a1a1e]">
            {/* Title Bar */}
            <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-[#1e1e22]">
              <div className="flex items-center gap-2">
                {/* Traffic Lights */}
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                {/* Tab */}
                <div className="ml-4 flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-3 py-1 dark:border-zinc-700 dark:bg-[#1a1a1e]">
                  <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400">
                    {activeSnippet.id}.ts
                  </span>
                </div>
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-zinc-400 transition-all hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
                aria-label="Copy snippet"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Content */}
            <div className="p-4">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeSnippet.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-[13px] leading-6"
                >
                  <code>
                    {tokenizedLines.map((line) => (
                      <div key={line.lineNum} className="flex">
                        <span className="mr-6 inline-block w-5 select-none text-right text-zinc-300 dark:text-zinc-700">
                          {line.lineNum}
                        </span>
                        <span>
                          {line.tokens.map((token, i) => (
                            <span key={i} className={token.className}>
                              {token.text}
                            </span>
                          ))}
                        </span>
                      </div>
                    ))}
                  </code>
                </motion.pre>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
