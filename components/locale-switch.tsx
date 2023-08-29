"use client";

import { useTheme } from "@/context/theme-context";
import { useLocale } from "next-intl";
import React from "react";
import Link from "next-intl/link";

export default function ThemeSwitch() {
  const locale = useLocale();

  console.log({ locale });

  return (
    <Link href="/" locale={locale === "en" ? "es" : "en"}>
      <button className="fixed bottom-5 left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950">
        {locale === "en" ? "EN" : "ES"}
      </button>
    </Link>
  );
}
