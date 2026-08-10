"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Copy, Check } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Split code into parts
const codeString = `const frezer = {
  name: "Frezer Metasebia Girma",
  role: "Frontend Developer",
  location: "Addis Ababa, Ethiopia",
  stack: [
    "React", "Next.js", "TypeScript",
    "Tailwind CSS", "Flutter",
  ],
  passions: [
    "Clean UI", "Accessibility",
    "Performance", "Great UX",
  ],
  availableForHire: true,
} as const;`;

// Tokenizer for TypeScript-like syntax highlighting
function tokenize(code: string) {
  const lines = code.split("\n");
  return lines.map((line, lineIdx) => {
    const tokens: { text: string; className: string }[] = [];
    let remaining = line;

    while (remaining.length > 0) {
      // Leading whitespace
      const wsMatch = remaining.match(/^(\s+)/);
      if (wsMatch) {
        tokens.push({ text: wsMatch[1], className: "" });
        remaining = remaining.slice(wsMatch[1].length);
        continue;
      }

      // Line comments
      if (remaining.startsWith("//")) {
        tokens.push({ text: remaining, className: "text-zinc-500" });
        remaining = "";
        continue;
      }

      // Strings (double quotes)
      const strMatch = remaining.match(/^"([^"\\]|\\.)*"/);
      if (strMatch) {
        tokens.push({
          text: strMatch[0],
          className: "text-emerald-400 dark:text-emerald-400 text-emerald-600",
        });
        remaining = remaining.slice(strMatch[0].length);
        continue;
      }

      // Keywords
      const kwMatch = remaining.match(
        /^(interface|const|let|var|type|function|return|import|export|from|readonly|string|number|boolean|true|false|null|undefined)\b/
      );
      if (kwMatch) {
        const kw = kwMatch[0];
        const isType = ["string", "number", "boolean", "readonly"].includes(kw);
        const isBool = ["true", "false"].includes(kw);
        tokens.push({
          text: kw,
          className: isBool
            ? "text-amber-400 dark:text-amber-400 text-amber-600"
            : isType
            ? "text-cyan-400 dark:text-cyan-400 text-cyan-600"
            : "text-purple-400 dark:text-purple-400 text-purple-600",
        });
        remaining = remaining.slice(kw.length);
        continue;
      }

      // Identifiers
      const idMatch = remaining.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*/);
      if (idMatch) {
        const id = idMatch[0];
        const isTypeName = /^[A-Z]/.test(id);
        tokens.push({
          text: id,
          className: isTypeName
            ? "text-yellow-300 dark:text-yellow-300 text-yellow-700"
            : "text-zinc-300 dark:text-zinc-300 text-zinc-700",
        });
        remaining = remaining.slice(id.length);
        continue;
      }

      // Numbers
      const numMatch = remaining.match(/^\d+/);
      if (numMatch) {
        tokens.push({
          text: numMatch[0],
          className: "text-amber-400 dark:text-amber-400 text-amber-600",
        });
        remaining = remaining.slice(numMatch[0].length);
        continue;
      }

      // Punctuation
      tokens.push({
        text: remaining[0],
        className: "text-zinc-500 dark:text-zinc-500 text-zinc-400",
      });
      remaining = remaining.slice(1);
    }

    return { lineNum: lineIdx + 1, tokens };
  });
}

const tokenizedLines = tokenize(codeString);
const totalLines = tokenizedLines.length;

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = codeString;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Dot Sheet Fabric Pattern */}
      <div className="absolute inset-0 dot-grid-bg opacity-0 pointer-events-none dark:opacity-75" />
      <div className="absolute inset-0 dot-grid-bg-light opacity-80 pointer-events-none dark:opacity-0" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-20 md:px-8 md:pt-40 w-full">
        <div className="grid items-start gap-12 lg:grid-cols-[3fr_2fr] lg:gap-12">
          {/* ─── Left Column: Text ─── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            whileInView="show"
            viewport={{ once: true }}
            className="min-w-0"
          >
            {/* Status */}
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-sm text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-3xl font-bold leading-[1.1] tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              Frontend Developer
              <br />
              <span className="text-zinc-400 dark:text-zinc-500">
                building thoughtful
              </span>
              <br />
              <span className="text-zinc-400 dark:text-zinc-500">
                digital experiences
                <span className="text-accent">.</span>
              </span>
            </motion.h1>

            {/* 1-Line Subtitle */}
            <motion.p
              variants={item}
              className="mt-6 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg"
            >
              Crafting responsive, accessible, and high-performance web experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
              >
                View Projects
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </motion.div>

          {/* ─── Right Column: Code Editor Window ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="w-full min-w-0 mt-8 lg:mt-0"
          >
            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/50 dark:border-zinc-800 dark:bg-[#1a1a1e] dark:shadow-black/30">
              {/* ── Title Bar ── */}
              <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-3 py-2.5 sm:px-4 sm:py-3 dark:border-zinc-800 dark:bg-[#1e1e22]">
                <div className="flex items-center gap-2">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-sm shadow-[#ff5f57]/30" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-sm shadow-[#febc2e]/30" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-sm shadow-[#28c840]/30" />
                  </div>
                  {/* Tab */}
                  <div className="ml-2 sm:ml-4 flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-2.5 py-0.5 sm:px-3 sm:py-1 dark:border-zinc-700 dark:bg-[#1a1a1e]">
                    <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3h7l2 2h9v15H3z" />
                    </svg>
                    <span className="font-mono text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400">
                      frezer.ts
                    </span>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-zinc-400 transition-all hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
                  aria-label="Copy code"
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

              {/* ── Code Content ── */}
              <div className="overflow-x-auto p-3 sm:p-4">
                <pre className="font-mono text-xs sm:text-[13px] leading-6">
                  <code>
                    {tokenizedLines.map((lineData) => (
                      <div key={lineData.lineNum} className="flex">
                        {/* Line Number */}
                        <span className="mr-3 sm:mr-6 inline-block w-4 sm:w-5 select-none text-right text-zinc-300 dark:text-zinc-700">
                          {lineData.lineNum}
                        </span>
                        {/* Tokens + Cursor at end of last line */}
                        <span>
                          {lineData.tokens.map((token, i) => (
                            <span key={i} className={token.className}>
                              {token.text}
                            </span>
                          ))}
                          {lineData.lineNum === totalLines && (
                            <span className="inline-block w-[2px] h-[15px] translate-y-[2px] bg-zinc-600 dark:bg-zinc-300 animate-[blink_1s_steps(2)_infinite]" />
                          )}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>

              {/* ── Status Bar ── */}
              <div className="flex items-center justify-between border-t border-zinc-200 bg-zinc-50 px-3 py-1.5 sm:px-4 dark:border-zinc-800 dark:bg-[#1e1e22]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-zinc-400">TypeScript</span>
                  <span className="font-mono text-[10px] text-zinc-400">UTF-8</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-zinc-400">Ln 27, Col 2</span>
                  <span className="font-mono text-[10px] text-zinc-400">Spaces: 2</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
