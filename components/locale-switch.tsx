"use client";

import { useLocale } from "next-intl";
import React from "react";
import Link from "next-intl/link";

export default function LocaleSwitch() {
  const locale = useLocale();

  return (
    <Link href="/" locale={locale === "en" ? "es" : "en"}>
      <button className="fixed bottom-5 right-5 z-[999] flex h-11 w-11 items-center justify-center border border-steel-600 bg-graphite-900/95 font-mono text-xs font-medium tracking-wide text-steel-400 backdrop-blur-sm transition-colors hover:border-brass-500 hover:text-brass-500">
        {locale === "en" ? "ES" : "EN"}
      </button>
    </Link>
  );
}
