"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import SectionWrapper from "@/components/ui/section-wrapper";

const contactLinks = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "metasbiafrezer@gmail.com",
    href: "mailto:metasbiafrezer@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+251-96-223-6586",
    href: "tel:+251962236586",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: null,
  },
  {
    icon: <GitHubIcon className="h-5 w-5" />,
    label: "GitHub",
    value: "github.com/frezermt",
    href: "https://github.com/frezermt",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" number="06" label="Contact">
      <div className="relative overflow-hidden rounded-lg border border-zinc-200 bg-white p-8 text-center transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/40 md:p-16">
        {/* Background accents */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl"
          >
            Let&apos;s build something{" "}
            <span className="text-accent">great</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-md text-base text-zinc-500"
          >
            Have a project, opportunity, or idea? I&apos;d love to hear about
            it.
          </motion.p>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-10 grid max-w-lg gap-3 sm:grid-cols-2"
          >
            {contactLinks.map((link) => {
              const Tag = link.href ? "a" : "div";
              return (
                <Tag
                  key={link.label}
                  {...(link.href
                    ? {
                        href: link.href,
                        target: link.href.startsWith("http")
                          ? "_blank"
                          : undefined,
                        rel: link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined,
                      }
                    : {})}
                  className={`flex items-center gap-3 rounded-md border border-zinc-200 bg-zinc-50 p-4 text-left transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/80 ${
                    link.href
                      ? "hover:border-accent/40 hover:bg-accent/5 dark:hover:border-accent/40 dark:hover:bg-accent/5 cursor-pointer"
                      : ""
                  }`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200/60 bg-white text-zinc-500 dark:border-zinc-700/60 dark:bg-zinc-800 dark:text-zinc-400">
                    {link.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-xs text-zinc-400">
                      {link.label}
                    </div>
                    <div className="truncate text-sm font-medium text-zinc-900 dark:text-white">
                      {link.value}
                    </div>
                  </div>
                </Tag>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <a
              href="mailto:metasbiafrezer@gmail.com"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
