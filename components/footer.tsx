import React from "react";

export default function Footer() {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <footer className="mt-16 w-full max-w-3xl border-t border-border-700 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-fg-muted">
        <span>JOHANS(1)</span>
        <span>Software Manual</span>
        <span>{today}</span>
      </div>
      <p className="mt-3 text-center font-mono text-xs text-fg-muted sm:text-left">
        {
          "// built with React & Next.js (App Router, Server Actions), TypeScript, Tailwind CSS, Framer Motion, next-intl, React Email & Resend — hosted on Vercel."
        }
      </p>
    </footer>
  );
}
