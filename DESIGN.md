<!-- SEED: established with the user before implementation; re-run /impeccable document once the build lands to capture the actual tokens and components. -->

---
name: Johans Neira — The Vault
description: A career in access control and financial infrastructure, staged as a walk through a working vault.
colors:
  void: "#0b0c0d"
  graphite-900: "#16181b"
  graphite-800: "#1f2226"
  steel-700: "#2b2f34"
  steel-600: "#3a3f46"
  steel-400: "#818991"
  steel-200: "#b8bcc1"
  paper: "#f4f2ee"
  brass-700: "#8a6435"
  brass-500: "#b8874a"
  brass-300: "#d9b479"
  verdigris-500: "#5c8a72"
  alert-500: "#c96156"
typography:
  display:
    fontFamily: "Space Grotesk, IBM Plex Sans, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "DM Sans, IBM Plex Sans, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "112px"
components:
  button-primary:
    backgroundColor: "{colors.brass-500}"
    textColor: "{colors.void}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.brass-300}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.steel-200}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
---

# Design System: The Vault

## Overview

**Creative North Star: "The Working Vault"**

Johans's career reads as an actual vault: a graphite chamber holding polished-steel machinery, brass instrumentation, and the quiet confidence of something built to hold other people's money and identities safely. This is not a bank's marketing site — no navy, no gold leaf, no ceremonial trust badges. It's the mechanism room behind that facade: the dial, the bolts, the access log, the deposit boxes — rendered with the same precision he brought to migrating authentication for 15,000 clients and a payment gateway for 30,000 more.

The generic Next.js dev-portfolio (rounded pill nav, pastel gradient blobs, centered avatar with a wave emoji) is the named anti-reference, along with two other ruts explicitly rejected: the corporate-bank site (navy/gold, stock trust iconography) and the neon-on-black AI-portfolio default (glowing accent, near-black, SaaS energy). This system is dark, but matte and mechanical, not glowing.

Content lives in **chambers**, not sections. Inside a chamber, the work (a role, a project) sits alone — unlabeled. Context — who, when, what impact — lives only in the **threshold** band between chambers, so no text ever competes with the thing it describes.

**Key Characteristics:**
- Dark graphite ground with brushed-steel surfaces; brass is the only warm color and it is rationed to headings, active states, and engraved numerals.
- Verdigris green appears only as the "access granted" / success state — the patina that forms on aged brass, never used decoratively.
- Type is engraved (display), typed (mono labels/log lines), and read (body) — three distinct registers, never blended.
- Corners are machined, not soft: 0–4px radius everywhere. No pill shapes survive from the old system.
- Depth comes from layered steel panels and hairline bevels, never soft drop shadows or blur glows.

## Colors

Matte graphite dominates; brass is committed but rationed — it should read as scarce, engraved metal, not a UI accent color.

### Primary
- **Brass** (`#b8874a`): the vault's only warm material. Used for display-type headings, the active clearance-dial indicator, primary button fill, engraved numerals on plaques, and the vault door's mechanism.

### Secondary
- **Verdigris** (`#5c8a72`): the patina a vault's brass grows over time. Reserved exclusively for confirmed/success/"access granted" states (form submit success, active navigation confirmation) — never decorative.

### Tertiary
- **Alert Red** (`#c96156`): muted oxide red, reserved for error states only (failed form submission). Never bright or saturated — this is corrosion, not a warning light.

### Neutral
- **Void** (`#0b0c0d`): base page background — the vault's ambient darkness.
- **Graphite 900** (`#16181b`): chamber surfaces, card backgrounds.
- **Graphite 800** (`#1f2226`): raised panels, the threshold band background.
- **Steel 700 / 600** (`#2b2f34` / `#3a3f46`): borders, dividers, dial ticks, inactive nav.
- **Steel 400** (`#818991`): secondary/muted text, timestamps, tags.
- **Steel 200** (`#b8bcc1`): primary body text on dark.
- **Paper** (`#f4f2ee`): reserved for the light-mode "lighting on" state, if kept — never the default.

### Named Rules
**The Rationed Brass Rule.** Brass covers no more than ~10% of any viewport. It marks the one thing that matters (an active state, a heading, a CTA) — never a background, never a large fill.

## Typography

**Display Font:** Space Grotesk (with IBM Plex Sans, system-ui fallback)
**Body Font:** DM Sans (with IBM Plex Sans, system-ui fallback)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace fallback)

**Character:** A geometric, mechanically-drawn display face for anything "engraved" (headings, numerals, plaque titles), a plain humanist sans for anything meant to be read at length (bios, descriptions), and a monospace for anything that reads like instrumentation output (dates, tags, access-log lines, nav indices).

### Hierarchy
- **Display** (600, `clamp(2.25rem, 6vw, 5rem)`, 1.05): Chamber titles, the hero name/role, section-opening statements.
- **Headline** (600, `clamp(1.5rem, 3vw, 2.25rem)`, 1.15): Sub-chamber headings (e.g. a role title inside Experience).
- **Title** (500, 1.125rem, 1.3): Card/plaque titles (project names, employer names).
- **Body** (400, 1.0625rem, 1.65): Bios, project and role descriptions. Max 68ch measure.
- **Label** (500, 0.8125rem, letter-spacing 0.08em, uppercase): Threshold plaques, tags, dates, nav indices, form field labels — always mono.

### Named Rules
**The No-Blend Rule.** Display, body, and label faces never substitute for one another. A label rendered in the body face, or a heading rendered in mono, is a build error.

## Layout

Single continuous vertical corridor (no separate routes) composed of alternating **chambers** (full content, generous padding, 780–860px reading measure, wider for the hero/vault-door and project deposit-box grids) and **thresholds** (full-bleed graphite-800 bands, tighter vertical padding, mono label content only). Spacing scale: 8 / 16 / 32 / 64 / 112px. The rule that governs every heading: more space above it than below it, so headings bond downward to their content.

Desktop carries a fixed vertical clearance-dial rail (chamber index 00–05) pinned to one side; mobile collapses it to a slim top bar showing only the current chamber's index and a tap-to-expand chamber list. No floating pill nav survives.

## Elevation & Depth

No soft drop shadows or blur glows anywhere. Depth is machined: 1px steel-600 hairline borders, a subtle top-lit/bottom-shadowed bevel (two-tone border or thin inset gradient) on plaques and buttons to read as cut metal, and z-axis layering by background value (void → graphite-900 → graphite-800) rather than shadow blur.

### Named Rules
**The Flat Metal Rule.** If a panel needs to look "raised," lighten its background one graphite step and give it a hairline border — never add blur-radius shadow.

## Shapes

Machined, not soft: 0–2px radius as the default (buttons, plaques, chips), 4px only on large image containers (project screenshots, the vault-door assembly) where a hard corner would look unintentional. No pill/fully-rounded shapes anywhere — this directly reverses the previous system's rounded-full nav and buttons.

## Components

### Buttons
- **Shape:** 2px radius, rectangular.
- **Primary:** brass-500 fill, void text, 14px/32px padding, small tick-mark notch at one corner (machined-part detail).
- **Hover/Focus:** fill shifts to brass-300; focus ring is a 2px offset brass-500 outline, never a glow.
- **Secondary/Ghost:** transparent fill, steel-200 text, 1px steel-600 border; hover raises border to brass-500.

### Threshold Band (signature component)
Full-bleed graphite-800 strip between chambers. Mono label content only, three-part layout: chamber index (00–05), context line (employer/dates or project stack), one quantified impact stat where one exists (e.g. "15,000+ clients migrated"). This is the only place captions live — never inside a chamber alongside the work itself.

### Cards / Deposit Boxes (projects)
- **Corner Style:** 2px radius.
- **Background:** graphite-900 with 1px steel-700 border.
- **Interaction:** hover translates the box 4–6px on its own axis like a drawer being pulled, revealing a brass handle/keyhole glyph.
- **Internal Padding:** 24px.

### Chambers (experience)
Each role is a numbered vault chamber. The chamber body holds the description; achievement lines render as a monospace "access log" (typed-reveal on scroll into view where motion is enabled).

### Inputs / Fields (contact)
- **Style:** flat graphite-900 background, 1px steel-600 border, mono label above field, 2px radius.
- **Focus:** border shifts to brass-500, no glow.
- **Success/Error:** border and helper text switch to verdigris-500 / alert-500 respectively — the only places those colors appear.

### Navigation (clearance dial)
Vertical rail, mono numerals 00–05, steel-400 at rest, brass-500 + filled indicator dot for the active chamber. Mobile: collapses to a top strip showing only the active index; tap expands a full list.

## Do's and Don'ts

### Do:
- **Do** ration brass to ≤10% of any viewport (see Rationed Brass Rule).
- **Do** keep all captions/context in threshold bands, never layered over the work itself.
- **Do** use hairline borders and background-step layering for depth, never blur shadows.
- **Do** keep corners machined (0–4px) everywhere.

### Don't:
- **Don't** use navy or gold-leaf — that renders as literal corporate-bank, the named anti-reference.
- **Don't** use neon glow, near-black-plus-single-neon-accent — that is the generic AI-portfolio rut, also rejected.
- **Don't** bring back rounded-full/pill shapes for nav or buttons.
- **Don't** use verdigris or alert red decoratively — they are reserved for success/error states only.
