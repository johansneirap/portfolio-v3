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
  return i.toString().padStart(2, "0");
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
      className="relative left-1/2 my-16 w-screen -translate-x-1/2 border-y border-steel-700/60 bg-graphite-800 py-6 sm:my-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-4 sm:flex-row sm:items-baseline sm:justify-between sm:px-8">
        <div className="flex items-baseline gap-4">
          <span className="plaque-label tabular-nums text-brass-500">
            {toIndex(Math.max(index, 0))}
          </span>
          <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-steel-200 sm:text-xl">
            {title}
          </h2>
        </div>
        <div className="flex items-baseline gap-4 plaque-label text-steel-400">
          {context && <span>{context}</span>}
          {stat && <span className="text-brass-300">{stat}</span>}
        </div>
      </div>
    </motion.div>
  );
}
