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
      delay: 0.04 * index,
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
      <ul className="flex flex-wrap gap-2.5">
        {skillsData.map((skill, index) => (
          <motion.li
            className="border border-steel-700 bg-graphite-900 px-4 py-2 font-mono text-sm tracking-wide text-steel-200 transition-colors hover:border-brass-500 hover:text-brass-300"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
