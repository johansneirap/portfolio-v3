"use client";

import React, { useEffect, useState } from "react";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTranslations } from "next-intl";

function toIndex(i: number) {
  return i.toString().padStart(2, "0");
}

export default function Header() {
  const { activeSection } = useActiveSectionContext();
  const t = useTranslations("Index.Header");
  const [progress, setProgress] = useState(0);

  const activeIndex = links.findIndex((l) => l.name === activeSection);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-[900] h-10 border-b border-border-700 bg-ink"
      aria-label="NEIRA(1) manual navigation"
    >
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2 w-2 rounded-full border border-border-600" />
            <span className="h-2 w-2 rounded-full border border-border-600" />
            <span className="h-2 w-2 rounded-full border border-border-600" />
          </div>
          <span className="hidden font-mono text-[0.6875rem] uppercase tracking-widest2 text-fg-muted sm:inline">
            NEIRA(1) — SOFTWARE MANUAL — NEIRA(1)
          </span>
        </div>

        <span className="font-mono text-xs tabular-nums text-fg-secondary">
          {toIndex(Math.max(activeIndex, 0))} · {t(activeSection)}
        </span>
      </div>

      <div
        className="h-[2px] bg-link-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden
      />
    </header>
  );
}
