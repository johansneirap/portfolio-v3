"use client";

import { projectsData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

type ProjectProps = {
  title: string;
  tags: readonly string[];
  imageUrl: string | StaticImageData;
  siteUrl: string;
  gallery?: readonly { label: string; src: string }[];
  index: number;
};

const LANG_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  React: "#61dafb",
  Tailwind: "#38bdf8",
  NestJS: "#e0234e",
  Prisma: "#9f8fef",
  Postgres: "#336791",
  PWA: "#a78bfa",
};

export default function Project({
  title,
  siteUrl,
  tags,
  imageUrl,
  gallery,
  index,
}: ProjectProps) {
  const t = useTranslations("Projects");
  return (
    <motion.div
      className="group border border-border-700 bg-surface-900 transition-transform duration-300 hover:-translate-y-1"
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
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border-700 bg-ink">
          <Image
            src={imageUrl}
            alt={`${title} — project screenshot`}
            quality={95}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, 50vw"
            fill
          />
        </div>

        <div className="p-5 sm:p-6">
          <p className="font-mono text-xs text-fg-muted">
            johansneirap/
            <span className="text-fg-secondary group-hover:text-link-500">
              {title.toLowerCase().replace(/\s+/g, "-")}
            </span>
          </p>
          <h3 className="mt-1 font-mono text-lg font-bold text-fg-primary">
            {title}
          </h3>
          <p className="mt-2 font-body leading-relaxed text-fg-secondary">
            {t(title)}
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="flex items-center gap-1.5 font-mono text-xs text-fg-muted"
              >
                {LANG_COLORS[tag] && (
                  <span
                    aria-hidden
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: LANG_COLORS[tag] }}
                  />
                )}
                {tag}
              </li>
            ))}
          </ul>

          {gallery && gallery.length > 0 && (
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {gallery.map((shot) => (
                <li
                  key={shot.label}
                  className="overflow-hidden border border-border-700 bg-ink"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={shot.src}
                      alt={`${title} — ${shot.label} screenshot`}
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 50vw, 25vw"
                      fill
                    />
                  </div>
                  <p className="border-t border-border-700 px-2 py-1 font-mono text-[0.6875rem] text-fg-muted">
                    {shot.label}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
