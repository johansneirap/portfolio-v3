"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTranslations } from "next-intl";

const BOLT_COUNT = 8;
const DIAL_DURATION = 1.3;

function VaultDoor({
  lockedLabel,
  unlockedLabel,
}: {
  lockedLabel: string;
  unlockedLabel: string;
}) {
  const reduceMotion = useReducedMotion();
  const [unlocked, setUnlocked] = useState(!!reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setTimeout(() => setUnlocked(true), DIAL_DURATION * 1000);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative h-48 w-48 sm:h-60 sm:w-60">
        {/* outer ring */}
        <div className="bevel absolute inset-0 rounded-full bg-graphite-900 bg-brushed-steel" />

        {/* bolts */}
        {Array.from({ length: BOLT_COUNT }).map((_, i) => {
          const angle = (360 / BOLT_COUNT) * i;
          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 h-6 w-2 rounded-sm"
              style={{
                transformOrigin: "center",
                transform: `rotate(${angle}deg) translateY(-6.4rem)`,
              }}
              initial={{
                backgroundColor: "#b8874a",
                scaleY: 1.25,
                opacity: 1,
              }}
              animate={{
                backgroundColor: "#3a3f46",
                scaleY: 1,
                opacity: 0.7,
              }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : 0.15 + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          );
        })}

        {/* dial face */}
        <div className="bevel-inset absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-graphite-800">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 h-3 w-[1.5px] bg-steel-600"
              style={{
                transformOrigin: "center",
                transform: `rotate(${i * 30}deg) translate(-50%, -3.1rem)`,
              }}
            />
          ))}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[2px] w-11 -translate-y-1/2 bg-brass-500"
            style={{ transformOrigin: "left center" }}
            initial={{ rotate: -150 }}
            animate={{ rotate: 0 }}
            transition={{
              duration: reduceMotion ? 0 : DIAL_DURATION,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass-500" />
        </div>
      </div>

      <motion.p
        className="plaque-label flex items-center gap-2"
        initial={false}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
            unlocked ? "bg-verdigris-500" : "bg-alert-500"
          }`}
        />
        <span
          className={`transition-colors duration-500 ${
            unlocked ? "text-verdigris-500" : "text-alert-500"
          }`}
        >
          {unlocked ? unlockedLabel : lockedLabel}
        </span>
      </motion.p>
    </div>
  );
}

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const t = useTranslations("Intro");
  return (
    <section
      ref={ref}
      id="home"
      className="flex min-h-[92vh] w-full max-w-[46rem] flex-col items-center justify-center px-4 py-20 text-center"
    >
      <VaultDoor
        lockedLabel={t("StatusLocked")}
        unlockedLabel={t("StatusUnlocked")}
      />

      <motion.h1
        className="mb-8 mt-10 font-display text-2xl font-semibold !leading-[1.4] text-steel-200 sm:text-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-brass-500">{t("Title")}</span>{" "}
        <span className="font-body text-lg font-normal text-steel-400 sm:text-xl">
          {t.rich("Text", {
            b: (chunks) => (
              <span className="font-medium text-steel-200">{chunks}</span>
            ),
            i: (chunks) => <span className="italic">{chunks}</span>,
            u: (chunks) => <span className="text-brass-300">{chunks}</span>,
          })}
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center gap-3 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.5 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 bg-brass-500 px-7 py-3 text-sm font-medium uppercase tracking-wide text-void transition-colors hover:bg-brass-300"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {t("Contact")}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>

        <a
          className="group flex items-center gap-2 border border-steel-600 px-7 py-3 text-sm font-medium uppercase tracking-wide text-steel-200 transition-colors hover:border-brass-500 hover:text-brass-500"
          href="/CV-es.pdf"
          download
        >
          {t("Download")}
          <HiDownload className="opacity-70 transition-transform group-hover:translate-y-0.5" />
        </a>

        <div className="flex items-center gap-2">
          <a
            className="flex h-[3.1rem] w-[3.1rem] items-center justify-center border border-steel-600 text-steel-400 transition-colors hover:border-brass-500 hover:text-brass-500"
            href="https://www.linkedin.com/in/johans-neira/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>

          <a
            className="flex h-[3.1rem] w-[3.1rem] items-center justify-center border border-steel-600 text-[1.35rem] text-steel-400 transition-colors hover:border-brass-500 hover:text-brass-500"
            href="https://github.com/johansneirap"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
