---
version: 1
product: MediaCoach Personal Site
updated: 2026-10-17
tokens:
  color.background: "#fafafa"
  color.surface: "#ffffff"
  color.ink: "#14213d"
  color.ink-muted: "#5a6578"
  color.accent: "#e85a2a"
  color.accent-soft: "#fff4ef"
  color.line: "rgba(20, 33, 61, 0.1)"
  type.font-sans: "Geist / system-ui"
  type.hero: "clamp ~2.25rem–3.75rem / semibold / text-balance"
  type.body: "1rem–1.25rem / regular / text-pretty"
  space.page-x: "1.25rem–2rem"
  space.section-y: "5rem–7rem"
  space.max-width: "64rem (max-w-5xl)"
  radius.card: "1rem (rounded-2xl)"
  radius.cta: "9999px (pill)"
  elevation.card: "shadow-sm → hover shadow-md"
  motion.entrance: "opacity + translateY, ease-out, ≤450ms scroll / ≤200ms micro"
  motion.respect: "prefers-reduced-motion → static"
---

# DESIGN.md — MediaCoach 个人介绍站

## Intent

Quiet editorial portfolio for Winnie's MediaCoach (媒策) project. Inspired by Offer Studio's bold hierarchy and white space; MediaCoach orange/navy used sparingly as signal + primary CTA only. Not neo-brutalist product chrome.

## Color

| Role | Value | Use |
|------|-------|-----|
| Background | `#fafafa` | Page |
| Surface | `#ffffff` | Cards, header blur base |
| Ink | `#14213d` | Headings, body emphasis, dark band |
| Muted | `#5a6578` | Secondary copy |
| Accent | `#e85a2a` | One primary CTA + section labels + step nums |
| Soft accent | `#fff4ef` | Soft band behind final CTA |
| Line | ink @ 10% | Borders only |

Never purple / multicolor gradients. Never glow as primary affordance. Soft orange radial glare on cards is hover-only and low opacity.

## Typography

- Headings: `text-balance`, semibold, tight leading.
- Body: `text-pretty`, muted ink.
- Mono tabular for step indices (`01`–`04`).
- No custom letter-spacing.

## Layout

- Single scroll page: Hero → 产品 → 怎么用 → 为什么 → 体验 → Footer.
- `min-h-dvh` for hero (not `h-screen`).
- Fixed max width `max-w-5xl`; generous section padding.
- Sticky header with `safe-area-inset-top`.

## Motion (baseline-ui + fixing-motion-performance)

- Animate only `transform` / `opacity`.
- Hero: SplitText word stagger (ease-out).
- Sections: ScrollReveal once-in-view fade + slight Y.
- Primary CTA: Magnet (spring pull toward cursor).
- Cards: GlareCard soft glare + 3px lift on hover (≤200ms feedback).
- Respect `prefers-reduced-motion`: disable JS motion paths.

## Components

- Pill primary button (accent fill).
- Outline secondary pill.
- Glare cards for product pillars.
- Numbered step tiles for funnel.
- Dark ink band for “why” narrative.

## Do not

- Hard 4px neo-brutalist shadows sitewide.
- Extra accent colors in one view.
- Animate width/height/top/left or large blur surfaces.
- Replace product repo UI; this site is intro-only.
