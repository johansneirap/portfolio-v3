"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import toast from "react-hot-toast";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

type PaletteItem = {
  id: string;
  label: string;
  hint: string;
  run: () => void;
};

function highlight(label: string, query: string) {
  if (!query) return label;
  const i = label.toLowerCase().indexOf(query.toLowerCase());
  if (i === -1) return label;
  return (
    <>
      {label.slice(0, i)}
      <span className="text-link-500">{label.slice(i, i + query.length)}</span>
      {label.slice(i + query.length)}
    </>
  );
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Index.Header");
  const p = useTranslations("Palette");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const items: PaletteItem[] = useMemo(() => {
    const sectionItems: PaletteItem[] = links.map((link) => ({
      id: `section-${link.hash}`,
      label: t(link.name),
      hint: link.hash,
      run: () => {
        setActiveSection(link.name);
        setTimeOfLastClick(Date.now());
        window.location.hash = link.hash;
      },
    }));

    const actionItems: PaletteItem[] = [
      {
        id: "download-cv",
        label: p("DownloadCv"),
        hint: "--flag=cv",
        run: () => {
          const a = document.createElement("a");
          a.href = "/CV-es.pdf";
          a.download = "CV-es.pdf";
          a.click();
        },
      },
      {
        id: "copy-email",
        label: p("CopyEmail"),
        hint: "--flag=email",
        run: () => {
          navigator.clipboard.writeText("johansneirap@gmail.com");
          toast.success(p("CopiedEmail"));
        },
      },
      {
        id: "toggle-lang",
        label: locale === "en" ? p("SwitchToEs") : p("SwitchToEn"),
        hint: "--flag=lang",
        run: () => {
          router.push(locale === "en" ? "/es" : "/");
        },
      },
      {
        id: "open-github",
        label: p("OpenGithub"),
        hint: "github.com/johansneirap",
        run: () => window.open("https://github.com/johansneirap", "_blank"),
      },
      {
        id: "open-linkedin",
        label: p("OpenLinkedin"),
        hint: "in/johans-neira",
        run: () =>
          window.open("https://www.linkedin.com/in/johans-neira/", "_blank"),
      },
    ];

    return [...sectionItems, ...actionItems];
  }, [t, p, locale, router, setActiveSection, setTimeOfLastClick]);

  const filtered = useMemo(() => {
    if (!query) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.hint.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    setCursor(0);
  }, [query, open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const isMeta = e.metaKey || e.ctrlKey;
      if (isMeta && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor((c) => Math.min(c + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor((c) => Math.max(c - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = filtered[cursor];
        if (item) {
          item.run();
          setOpen(false);
          setQuery("");
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, cursor]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onOpenEvent() {
      setOpen(true);
    }
    window.addEventListener("open-command-palette", onOpenEvent);
    return () => window.removeEventListener("open-command-palette", onOpenEvent);
  }, []);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[1000] flex items-start justify-center bg-ink/80 px-4 pt-24 sm:pt-32"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg border border-border-600 bg-surface-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-border-700 px-4 py-3">
              <span aria-hidden className="font-mono text-link-500">
                &gt;
              </span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={p("Placeholder")}
                className="w-full bg-transparent font-mono text-sm text-fg-primary outline-none placeholder:text-fg-muted"
              />
            </div>
            <ul className="max-h-80 overflow-y-auto">
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-center font-mono text-sm text-fg-muted">
                  {p("NoResults")}
                </li>
              )}
              {filtered.map((item, index) => (
                <li key={item.id}>
                  <button
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-left font-mono text-sm transition-colors ${
                      index === cursor
                        ? "bg-surface-800 text-fg-primary"
                        : "text-fg-secondary"
                    }`}
                    onMouseEnter={() => setCursor(index)}
                    onClick={() => {
                      item.run();
                      setOpen(false);
                      setQuery("");
                    }}
                  >
                    <span>{highlight(item.label, query)}</span>
                    <span className="text-fg-muted">{item.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
