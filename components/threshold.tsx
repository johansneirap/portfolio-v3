"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";

type ThresholdProps = {
  section: (typeof links)[number]["name"];
  title: string;
  context?: string;
  stat?: string;
};

function toIndex(i: number) {
  return i + 1;
}

export default function Threshold({
  section,
  title,
  context,
  stat,
}: ThresholdProps) {
  const index = links.findIndex((l) => l.name === section);

  return (
    <motion.div
      className="mb-8 mt-16 w-full border-b border-border-700 pb-3 sm:mt-24"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 className="section-head text-fg-primary">
          <span className="text-fg-muted">{toIndex(Math.max(index, 0))}.</span>{" "}
          {title}
        </h2>
        <div className="flex items-baseline gap-4 font-mono text-xs text-fg-muted">
          {context && <span>{context}</span>}
          {stat && (
            <span className="diff-add px-1.5 py-0.5">
              <span aria-hidden>+</span> {stat}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
