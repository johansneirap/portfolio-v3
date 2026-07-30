"use client";

import { useLocale } from "next-intl";
import React from "react";
import Link from "next-intl/link";

export default function LocaleSwitch() {
  const locale = useLocale();

  return (
    <Link href="/" locale={locale === "en" ? "es" : "en"}>
      <button className="fixed bottom-4 left-4 z-[900] flex h-8 items-center border border-border-600 bg-surface-900 px-2.5 font-mono text-xs text-fg-secondary transition-colors hover:border-link-500 hover:text-link-500">
        --lang={locale === "en" ? "es" : "en"}
      </button>
    </Link>
  );
}
