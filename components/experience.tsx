"use client";

import React from "react";
import Threshold from "./threshold";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

function slugRef(key: string) {
  const match = key.match(/ at (.+)$/i);
  const base = match ? match[1] : key;
  return base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function shortHash(key: string) {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h = (Math.imul(h, 31) + key.charCodeAt(i)) >>> 0;
  }
  return h.toString(16).padStart(7, "0").slice(0, 7);
}

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const t = useTranslations("Experience");
  const reduceMotion = useReducedMotion();
  const items = [...experiencesData].reverse();

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full max-w-3xl scroll-mt-24 px-4"
    >
      <Threshold
        section="Experience"
        title={t("Title")}
        context={t("Kicker")}
        stat={t("Stat")}
      />

      <p className="mb-6 font-mono text-xs text-fg-muted">
        $ git log --graph --oneline --branches
      </p>

      <ol className="relative">
        <motion.div
          aria-hidden
          className="absolute left-[0.6rem] top-2 bottom-2 w-px origin-top bg-border-600 sm:left-[0.9rem]"
          initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        {items.map((item, index) => {
          const isHead = index === 0;
          const branchRef = slugRef(item.title);
          const hash = shortHash(item.title);
          return (
            <motion.li
              key={item.title}
              className="relative mb-6 pl-8 last:mb-0 sm:pl-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.08, 0.4),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span
                aria-hidden
                className={`absolute left-0 top-2 h-3 w-3 -translate-x-[5px] rounded-full border-2 bg-ink sm:-translate-x-[7px] ${
                  isHead ? "border-link-500" : "border-fg-muted"
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs">
                <span className="text-fg-muted">{hash}</span>
                <span className={isHead ? "text-link-500" : "text-fg-muted"}>
                  ({isHead ? "HEAD -> " : ""}
                  {branchRef})
                </span>
                <span className="ml-auto tabular-nums text-fg-muted">
                  {item.date}
                </span>
              </div>
              <div className="mt-1.5 border border-border-700 bg-surface-900 px-5 py-4 sm:px-6">
                <h3 className="font-mono text-base font-bold text-fg-primary">
                  {t(`${item.title}.Title`)}
                </h3>
                <p className="label mt-1 text-fg-muted">{item.location}</p>
                <p className="mt-3 font-body leading-7 text-fg-secondary">
                  {t(`${item.title}.Description`)}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
