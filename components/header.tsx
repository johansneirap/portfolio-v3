"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTranslations } from "next-intl";

function toIndex(i: number) {
  return i.toString().padStart(2, "0");
}

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const t = useTranslations("Index.Header");
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeIndex = links.findIndex((l) => l.name === activeSection);

  const handleSelect = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setMobileOpen(false);
  };

  return (
    <header className="z-[999] relative">
      {/* Desktop: clearance-dial rail */}
      <nav
        className="hidden sm:flex fixed left-0 top-0 h-screen w-16 z-[999] flex-col items-center justify-center gap-7 border-r border-steel-700/70 bg-graphite-900/90 backdrop-blur-sm"
        aria-label="Chamber navigation"
      >
        {links.map((link, i) => {
          const isActive = link.name === activeSection;
          return (
            <Link
              key={link.hash}
              href={link.hash}
              onClick={() => handleSelect(link.name)}
              className="group relative flex flex-col items-center py-1"
            >
              {isActive && (
                <motion.span
                  layoutId="dial-indicator"
                  className="absolute left-0 top-0 h-full w-[2px] bg-brass-500"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span
                className={clsx(
                  "plaque-label tabular-nums transition-colors",
                  isActive
                    ? "text-brass-500"
                    : "text-steel-600 group-hover:text-steel-400"
                )}
              >
                {toIndex(i)}
              </span>
              <span className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap border border-steel-700 bg-graphite-800 px-2.5 py-1.5 plaque-label text-steel-200 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                {t(link.name)}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile: instrument strip */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-[999] border-b border-steel-700/70 bg-graphite-900/95 backdrop-blur-sm">
        <button
          className="flex h-12 w-full items-center justify-between px-4"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
        >
          <span className="plaque-label text-brass-500 tabular-nums">
            {toIndex(Math.max(activeIndex, 0))} — {t(activeSection)}
          </span>
          <span className="plaque-label text-steel-400">
            {mobileOpen ? t("MobileClose") : t("MobileOpen")}
          </span>
        </button>
        <AnimatePresence>
          {mobileOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="overflow-hidden border-t border-steel-700/70"
            >
              {links.map((link, i) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    onClick={() => handleSelect(link.name)}
                    className={clsx(
                      "flex items-center gap-3 px-4 py-3 plaque-label border-b border-steel-700/40 last:border-b-0",
                      link.name === activeSection
                        ? "text-brass-500"
                        : "text-steel-400"
                    )}
                  >
                    <span className="tabular-nums">{toIndex(i)}</span>
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
