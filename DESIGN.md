<!-- SEED: established with the user before implementation; re-run /impeccable document once the build lands to capture the actual tokens and components. -->

---
name: Johans Neira — The Manual
description: A career read as a technical document — man page, RFC, and git log — proven by real numbers, not a marketing hero.
colors:
  ink: "#0a0a0a"
  surface-900: "#111214"
  surface-800: "#17181b"
  border-700: "#262a2e"
  border-600: "#30363d"
  fg-muted: "#747c87"
  fg-secondary: "#9198a1"
  fg-primary: "#e4e4e0"
  link-500: "#58a6ff"
  diff-add-500: "#3fb950"
  diff-add-bg: "rgba(63,185,80,0.08)"
  diff-remove-500: "#f85149"
  diff-remove-bg: "rgba(248,81,73,0.08)"
typography:
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  sectionHead:
    fontFamily: "{typography.mono.fontFamily}"
    fontSize: "0.9375rem"
    fontWeight: 700
    letterSpacing: "0.02em"
    textTransform: "uppercase"
  label:
    fontFamily: "{typography.mono.fontFamily}"
    fontSize: "0.8125rem"
    fontWeight: 500
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "112px"
components:
  button-flag:
    border: "1px solid {colors.border-600}"
    textColor: "{colors.fg-primary}"
    fontFamily: "{typography.mono.fontFamily}"
    padding: "13px 28px"
  button-flag-hover:
    backgroundColor: "{colors.fg-primary}"
    textColor: "{colors.ink}"
---

# Design System: The Manual

## Overview

**Creative North Star: "The Manual"**

Johans's career reads as a real piece of engineering documentation — a `man` page, an RFC, a `git log --graph` — not a marketing page wearing a developer costume. The proof of seniority is that the artifact itself is built the way a senior engineer builds things: precisely, with real interaction (a working command palette, a self-drawing commit graph), zero decoration for its own sake, and every claim rendered in the register that claim actually belongs to — a diff for a number, a commit for a role, a cross-reference for a related technology.

This replaces "The Vault" (graphite/brass/banking-vault skeuomorphism) entirely. The vault told a story *about* Johans through a metaphor; The Manual demonstrates his actual daily craft by *being* one of the artifacts he produces. Two ruts are explicitly rejected and must not resurface: the generic AI/dev-portfolio default (near-black + single glowing neon accent, blurred edges, `const dev = {...}` hero, fake bash-prompt typing a "whoami" gag), and the previous graphite/brass/banking-mechanism system. Nothing here glows, blurs, or role-plays a terminal typing a joke command — it is typeset like real technical prose and instrumented like a real tool.

**Key Characteristics:**
- Near-black ink ground, off-white monospace-first type — the register of real terminal/doc output, not a "hacker aesthetic" skin.
- Exactly two accent colors, both borrowed from tools this audience uses daily and never used decoratively: GitHub-blue for interactive/link state, git diff green/red reserved *only* for quantified stat callouts (additions) and legacy/removed states.
- Career history renders as an actual commit graph (git log --graph), not a timeline with dots-and-line filler.
- Navigation is a real, working command palette (⌘K / Ctrl K) — the primary wayfinding device, not a decorative affordance layered over conventional nav.
- Zero border-radius, zero drop shadow, zero blur/glow anywhere. Depth comes only from background-value steps (ink → surface-900 → surface-800) and 1px hairline borders.

## Colors

### Primary
- **Ink** (`#0a0a0a`): base page background.
- **Fg Primary** (`#e4e4e0`): primary text and structural/mono content on ink.

### Secondary (interactive accent)
- **Link Blue** (`#58a6ff`): the one interactive-state color — active palette result, focused input border, external link text, active section marker. Never a fill, never a background.

### Tertiary (semantic diff, never decorative)
- **Diff Add** (`#3fb950` on `rgba(63,185,80,0.08)`): reserved for quantified positive stats only (e.g. `+ 15,000 clients migrated`) and success/sent states. A `+` gutter mark always accompanies it.
- **Diff Remove** (`#f85149` on `rgba(248,81,73,0.08)`): reserved for error/failed-submission states and "legacy/replaced" callouts (e.g. `- Keycloak on-premise`). A `-` gutter mark always accompanies it.

### Neutral
- **Surface 900 / 800** (`#111214` / `#17181b`): card and raised-panel backgrounds, stepped by one value each.
- **Border 700 / 600** (`#262a2e` / `#30363d`): hairline dividers, card borders, rules under section heads.
- **Fg Muted** (`#747c87`): comments, timestamps, hashes, placeholder text.
- **Fg Secondary** (`#9198a1`): secondary body copy, tag labels.

### Named Rules
**The Two-Accent Rule.** Only link-blue and the diff pair carry color. Everything else is grayscale. A third decorative color, or diff-green/red used outside a quantified stat or a state, is a build error.

## Typography

**Mono Font:** JetBrains Mono (fallback `ui-monospace`, monospace) — every structural element: section heads, nav, labels, hashes, code-like values, buttons, form labels.
**Body Font:** Inter (fallback `system-ui`, sans-serif) — long-form reading only: bios, role/project descriptions. This is the "rendered markdown" register — prose reads like a pretty-printed README, structure reads like raw doc source.

### Hierarchy
- **Section Head** (700, 0.9375rem, uppercase, mono, 0.02em tracking): `N. TITLE` man-page-style headers. Always paired with a hairline rule directly beneath.
- **Display Line** (600, `clamp(1.75rem, 4.5vw, 3rem)`, mono, 1.2): the NAME/SYNOPSIS hero line only. This is the single place mono type is allowed to run large — never repeated as a generic "big heading" elsewhere.
- **Body** (400, 1.0625rem, Inter, 1.7): bios, descriptions. Max 70ch measure.
- **Label** (500, 0.8125rem, mono): tags, dates, hashes, form labels, palette hints.

### Named Rules
**The Register Rule.** Mono is structure and instrumentation; Inter is prose meant to be read at length. A paragraph of bio set in mono, or a section head set in Inter, is a build error — this replaces the old system's No-Blend Rule under the new type pair.

## Layout

Single continuous document (no separate routes), read top to bottom like a man page: NAME → SYNOPSIS → DESCRIPTION (About) → EXPERIENCE (commit graph) → PROJECTS → SKILLS → CONTACT/BUGS → colophon footer. Spacing scale: 8 / 16 / 32 / 64 / 112px, more space above a section head than below it.

Navigation is not a persistent rail or dial: a slim terminal-titlebar strip stays fixed at the top (traffic-light dots, running header, palette trigger) at every breakpoint — desktop and mobile share the same nav pattern, because the command palette is the real navigation surface, not the strip.

## Elevation & Depth

No shadows, no blur, no glow anywhere — not even the accent colors. Depth is background-value stepping (ink → surface-900 → surface-800) plus 1px hairline borders, exactly as strict as the previous system's Flat Metal Rule, now called the Flat Terminal Rule.

### Named Rules
**The Flat Terminal Rule.** If a panel needs to look "raised," step its background one surface value and add a 1px border-700 line. Never add shadow, blur, or a glowing ring — including on the accent colors, which stay matte.

## Shapes

Zero border-radius everywhere, no exceptions — sharper than the previous system's 0–4px allowance. Every panel, button, input, image container, and tag is a hard rectangle. This is load-bearing: it is what keeps the mono/doc register from sliding into generic "dark SaaS" territory.

## Components

### Terminal Titlebar (nav)
Fixed top strip, all breakpoints: three inert traffic-light dots (decorative chrome, not window controls), centered running header (`JOHANS(1) — SOFTWARE MANUAL — JOHANS(1)`), a palette-trigger button (`⌘K`) right-aligned. A 2px link-blue scroll-progress line sits on the strip's bottom edge.

### Command Palette (signature component)
Modal overlay, ⌘K/Ctrl+K or tap-to-open. Fuzzy-filters a flat list of sections, projects, and actions (download CV, copy email, toggle language, open GitHub/LinkedIn). Matched substrings highlight in link-blue; arrow keys + Enter drive it; Esc closes. This is the primary navigation mechanism — no duplicate nav pattern should exist alongside it beyond the minimal section index in the titlebar.

### Section Head (signature component)
`N. TITLE` mono uppercase, hairline rule beneath, optional right-aligned kicker and one diff-styled stat when a quantified fact exists. Replaces the old Threshold Band; no full-bleed color fill, a rule is enough.

### Commit Graph (Experience — signature component)
Each role renders as a commit node on a single mainline SVG branch, connected by a straight vertical line that draws itself (stroke-dasharray reveal) on scroll into view. Node label carries a decorative short-hash, the role title as commit message, date as author date, employer as a ref tag (`HEAD -> bice-hipotecaria` on the current role). Body expands below with the real description and any diff-styled stat.

### Repo Cards (Projects)
Title set as `namespace/project` in mono. Tag pills carry a small language-color dot (reused, non-decorative: same hue always maps to the same technology). No fabricated metrics (no star/fork counts) — only real tags, description, and an outbound link.

### Inputs / Fields (contact)
Flat surface-900 background, 1px border-600, bracket-prefixed mono label (`> email`), blinking block caret on focus via a step animation, no glow. Border and helper text switch to diff-add/diff-remove on success/error — the only place those colors move outside a stat.

### Buttons
Rectangular, mono, bracket-flag styling (`[--hire]`, `[--contract]`). Default: transparent fill, border-600, fg-primary text. Hover/focus: fully inverts (fg-primary fill, ink text) — a real terminal selection-invert, not a tint shift.

## Do's and Don'ts

### Do:
- **Do** keep color to exactly link-blue plus the diff pair (see Two-Accent Rule).
- **Do** let the command palette be the real navigation, not an add-on beside a fuller nav.
- **Do** render every quantified claim as a diff-styled callout, never as prose alone.
- **Do** keep every corner sharp (0px) and every depth cue a hairline + value step.

### Don't:
- **Don't** add a glow, blur, or gradient to any accent — including the diff colors and link-blue.
- **Don't** revive graphite/brass/vault language, tokens, or components from the previous system.
- **Don't** open with a fake bash prompt typing a joke command (`$ whoami`, `const dev = {...}`) — that is the named, rejected generic-portfolio default.
- **Don't** fabricate metrics (stars, forks, commit counts) anywhere real numbers aren't on hand.
