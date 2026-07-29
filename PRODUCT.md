# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences with equal priority:
- **Recruiters / hiring managers** evaluating Johans for senior software engineering roles (full-stack, tech lead).
- **Freelance / direct clients** considering hiring him for contract project work.

Both audiences should be able to quickly assess his seniority and track record, and have a clear path to contact him or get his CV.

## Product Purpose

Personal portfolio for Johans Neira, a full-stack developer based in Chile (Viña del Mar / Villa Alemana). Its job is to establish credibility with both hiring managers and freelance clients and convert a visit into a contact (email/contact form) or a CV download.

## Positioning

Primary differentiator: **banking/fintech experience combined with technical leadership** — concretely, leading the Keycloak-to-Auth0 auth migration for 15,000+ clients and the Toku payment gateway rollout for 30,000+ clients at BICE Hipotecaria as Tech Lead, plus senior engineering work at Scotiabank Chile. This is what a generic full-stack developer profile cannot truthfully claim.

Secondary, supporting narrative (do not let it outweigh the primary one): data visualization / analytics dashboards for large enterprise clients (Diageo, Heineken, Walmart US, Intuit India, McDonald's US) via Evalueserve Chile.

## Operating Context

- Bilingual site (Spanish / English) via `next-intl`; Spanish is the base language given the target market (Chile).
- Sections: Home/Intro, About, Projects, Skills, Experience (career timeline), Contact.
- Contact form sends email via Resend; CV is downloadable as a PDF (`CV-es.pdf`, Spanish only today).
- Deployed on Vercel at johansneira.site.

## Capabilities and Constraints

- Next.js 13 (App Router) + TypeScript + Tailwind CSS.
- Functional behavior (dark mode, language switch, contact form, CV download) is **flexible for this redesign** — the user explicitly said it's fine to simplify or change current behavior if the new design justifies it. Nothing is functionally locked in.
- Current profile photo and one Open Graph image are hotlinked from external URLs (dev.to and an expired LinkedIn CDN link) — these are known fragile placeholders, not durable assets to design around.
- Existing project screenshots (`public/*.png`) are the only real project imagery on hand today.

## Brand Commitments

- Name: Johans Neira.
- Contact email: johansneirap@gmail.com.
- GitHub: github.com/johansneirap. LinkedIn: linkedin.com/in/johans-neira.
- No other locked visual/brand identity — logo, color palette, and typography are all open for the redesign.

## Evidence on Hand

- Real work history with named employers and quantified outcomes (BICE Hipotecaria, Scotiabank Chile, Evalueserve Chile — see `lib/data.ts` / `messages/*.json`), usable as-is.
- Real shipped projects with live URLs: SortedCollections (OSS lib), Datoteca (OSS lib), Falta 1 (PWA, faltauno.lat), Revius (revius.cl, still in development).
- No testimonials, client logos-as-assets, press mentions, or case-study detail beyond the short descriptions already written — do not fabricate any of these.

## Product Principles

1. Lead with the banking/fintech + technical leadership story; treat the enterprise-dashboards work as supporting evidence, not a co-equal headline.
2. Serve recruiters and freelance clients from the same narrative rather than forking the site into two paths.
3. Preserve all real content (bios, project descriptions, employer history, contact details) verbatim; only the visual world and, if useful, the surrounding functional chrome are in scope for change.
4. Treat the current template look (rounded-pill nav, pastel gradient blobs, default Tailwind grays) as an anti-reference — it is a widely recognized generic Next.js portfolio pattern, not a personal identity to preserve.

## Accessibility & Inclusion

No product-specific requirement established beyond standard web accessibility practice (contrast, keyboard navigation, semantic structure).
