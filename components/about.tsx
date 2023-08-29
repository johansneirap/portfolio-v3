"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("Title")}</SectionHeading>
      <p className="mb-2 md:text-justify">{t("Bio1")}</p>
      <p className="mb-2 md:text-justify">{t("Bio3")}</p>
      <p className="mb-2 md:text-justify">{t("Bio2")}</p>
      <p className="md:text-justify">{t("Bio4")}</p>
    </motion.section>
  );
}
