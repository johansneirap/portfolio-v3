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

const BOOT_DELAY = 1.1;

function BootSequence({
  verifyLine,
  lockedLabel,
  unlockedLabel,
  onDone,
}: {
  verifyLine: string;
  lockedLabel: string;
  unlockedLabel: string;
  onDone: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const [granted, setGranted] = useState(!!reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      onDone();
      return;
    }
    const timer = setTimeout(() => {
      setGranted(true);
      onDone();
    }, BOOT_DELAY * 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion]);

  return (
    <div className="flex w-full max-w-md flex-col items-start gap-1.5 border border-border-700 bg-surface-900 px-5 py-4 font-mono text-xs sm:text-sm">
      <p className="text-fg-secondary">
        <span className="text-link-500">$</span> {verifyLine}
      </p>
      <p className={granted ? "text-fg-muted" : "text-fg-muted caret"}>
        {lockedLabel}
      </p>
      {granted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="diff-add flex w-full items-center gap-2 px-2 py-1"
        >
          <span aria-hidden>+</span> {unlockedLabel}
        </motion.p>
      )}
    </div>
  );
}

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const t = useTranslations("Intro");
  const [revealed, setRevealed] = useState(false);

  return (
    <section
      ref={ref}
      id="home"
      className="flex min-h-[92vh] w-full max-w-2xl flex-col items-center justify-center gap-8 px-4 py-20 text-center"
    >
      <BootSequence
        verifyLine="auth verify --user=johans-neira"
        lockedLabel={t("StatusLocked")}
        unlockedLabel={t("StatusUnlocked")}
        onDone={() => setRevealed(true)}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={revealed ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex w-full flex-col items-start gap-4 border border-border-700 bg-surface-900 px-5 py-5 text-left sm:px-8 sm:py-7"
      >
        <div>
          <p className="label text-fg-muted">NAME</p>
          <h1 className="mt-1 font-mono text-xl font-bold text-fg-primary sm:text-2xl">
            {t("Title")}
          </h1>
        </div>
        <div>
          <p className="label text-fg-muted">DESCRIPTION</p>
          <p className="mt-1 font-body text-base leading-7 text-fg-secondary">
            {t.rich("Text", {
              b: (chunks) => (
                <span className="font-semibold text-fg-primary">{chunks}</span>
              ),
              i: (chunks) => <span className="italic">{chunks}</span>,
              u: (chunks) => <span className="text-link-500">{chunks}</span>,
            })}
          </p>
        </div>
        <div>
          <p className="label text-fg-muted">SYNOPSIS</p>
          <p className="mt-1 font-mono text-sm text-fg-secondary">
            neira [--hire] [--contract] [--contact]
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-3 sm:flex-row"
        initial={{ opacity: 0, y: 16 }}
        animate={revealed ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15, duration: 0.45 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-1 border border-border-600 px-6 py-3 font-mono text-sm text-fg-primary transition-colors hover:bg-fg-primary hover:text-ink"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <span aria-hidden>[</span>
          {t("Contact")}
          <span aria-hidden>]</span>
        </Link>

        <a
          className="group flex items-center gap-1 border border-border-600 px-6 py-3 font-mono text-sm text-fg-primary transition-colors hover:bg-fg-primary hover:text-ink"
          href="/CV-es.pdf"
          download
        >
          <span aria-hidden>[</span>
          {t("Download")}
          <HiDownload className="opacity-70" aria-hidden />
          <span aria-hidden>]</span>
        </a>

        <div className="flex items-center gap-2">
          <a
            className="flex h-[3rem] w-[3rem] items-center justify-center border border-border-600 text-fg-secondary transition-colors hover:border-link-500 hover:text-link-500"
            href="https://www.linkedin.com/in/johans-neira/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>

          <a
            className="flex h-[3rem] w-[3rem] items-center justify-center border border-border-600 text-[1.35rem] text-fg-secondary transition-colors hover:border-link-500 hover:text-link-500"
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
