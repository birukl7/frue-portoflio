"use client";

import { Mail } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">

      <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left */}
          <div>
            <a
              href="#"
              className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white cursor-pointer"
            >
              Frezer<span className="text-accent">.</span>
            </a>
            <p className="mt-1 text-sm text-zinc-500">
              Frontend Developer building thoughtful digital experiences.
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/frezermt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-accent hover:text-accent cursor-pointer dark:border-zinc-800 dark:text-zinc-500 dark:hover:border-accent dark:hover:text-accent"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:metasbiafrezer@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-accent hover:text-accent cursor-pointer dark:border-zinc-800 dark:text-zinc-500 dark:hover:border-accent dark:hover:text-accent"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-zinc-200 pt-8 text-center dark:border-zinc-800">
          <p className="text-xs text-zinc-400 dark:text-zinc-600">
            © 2026 Frezer Metasebia Girma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
