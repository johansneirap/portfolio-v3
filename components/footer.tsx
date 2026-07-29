import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 w-full max-w-3xl border-t border-steel-700/70 px-4 py-8 text-center">
      <p className="plaque-label text-steel-400">
        &copy; {year} Johans Neira
      </p>
      <p className="mt-2 text-xs text-steel-600">
        Built with React &amp; Next.js (App Router, Server Actions),
        TypeScript, Tailwind CSS, Framer Motion, next-intl, React Email &amp;
        Resend, hosted on Vercel.
      </p>
    </footer>
  );
}
