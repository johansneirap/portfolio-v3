"use client";

import React from "react";
import Threshold from "./threshold";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("About");
  return (
    <section ref={ref} id="about" className="w-full max-w-3xl scroll-mt-24 px-4">
      <Threshold section="About" title={t("Title")} context={t("Kicker")} />
      <motion.div
        className="bevel-inset space-y-4 bg-graphite-900 px-6 py-8 leading-7 text-steel-200 sm:px-10 sm:py-10 sm:text-[1.0625rem] sm:leading-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <p>{t("Bio1")}</p>
        <p>{t("Bio3")}</p>
        <p>{t("Bio2")}</p>
        <p>{t("Bio4")}</p>
      </motion.div>
    </section>
  );
}
