"use client";

import React from "react";
import Threshold from "./threshold";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const t = useTranslations("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="w-full max-w-3xl scroll-mt-24 px-4"
    >
      <Threshold section="Skills" title={t("Title")} context={t("Kicker")} />
      <p className="mb-6 font-mono text-xs text-fg-muted">
        $ cat package.json | jq .dependencies
      </p>
      <ul className="grid grid-cols-1 border border-border-700 bg-surface-900 sm:grid-cols-2">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex items-center gap-3 border-b border-border-700 px-4 py-2.5 font-mono text-sm text-fg-secondary odd:sm:border-r hover:text-link-500"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <span aria-hidden className="text-fg-muted">
              +
            </span>
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
