"use client";

import React from "react";
import Threshold from "./threshold";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const t = useTranslations("Experience");
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

      <ol className="relative">
        <div
          aria-hidden
          className="absolute left-[0.6rem] top-2 bottom-2 w-px bg-steel-700 sm:left-[0.9rem]"
        />
        {items.map((item, index) => (
          <motion.li
            key={item.title}
            className="relative mb-6 pl-8 last:mb-0 sm:pl-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.45,
              delay: Math.min(index * 0.06, 0.3),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="absolute left-0 top-2 h-3 w-3 -translate-x-[5px] rounded-full border-2 border-brass-500 bg-graphite-900 sm:-translate-x-[7px]" />
            <div className="bevel-inset bg-graphite-900">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-steel-700/70 bg-graphite-800 px-5 py-3">
                <h3 className="font-display text-base font-semibold text-steel-200 sm:text-lg">
                  {t(`${item.title}.Title`)}
                </h3>
                <span className="plaque-label tabular-nums text-brass-500">
                  {item.date}
                </span>
              </div>
              <div className="px-5 py-5 sm:px-8 sm:py-6">
                <p className="plaque-label mb-3 text-steel-400">
                  {item.location}
                </p>
                <p className="leading-7 text-steel-200">
                  {t(`${item.title}.Description`)}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
