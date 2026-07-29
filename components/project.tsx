"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number] & { index: number };

function KeyholeIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <circle cx="12" cy="9" r="4.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 13.5L8.5 21H15.5L12 13.5Z" fill="currentColor" />
    </svg>
  );
}

export default function Project({
  title,
  siteUrl,
  tags,
  imageUrl,
  index,
}: ProjectProps) {
  const t = useTranslations("Projects");
  return (
    <motion.div
      className="group border border-steel-700 bg-graphite-900 transition-transform duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.08, 0.24),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={siteUrl} target="_blank" className="block">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-steel-700 bg-void">
          <Image
            src={imageUrl}
            alt={`${title} — project screenshot`}
            quality={95}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, 50vw"
            fill
          />
          <div className="absolute inset-0 bg-void/35 transition-opacity duration-500 group-hover:opacity-0" />
        </div>

        <div className="p-5 transition-transform duration-300 sm:p-6 group-hover:translate-x-1">
          <div className="mb-2 flex items-center gap-2 plaque-label text-steel-400">
            <KeyholeIcon />
            <span>
              {t("BoxLabel", { number: (index + 1).toString().padStart(2, "0") })}
            </span>
          </div>
          <h3 className="font-display text-xl font-semibold text-steel-200 transition-colors group-hover:text-brass-300">
            {title}
          </h3>
          <p className="mt-2 leading-relaxed text-steel-400">{t(title)}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="plaque-label border border-steel-700 px-2 py-1 text-steel-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.div>
  );
}
