---
version: alpha
name: "Sui Dark Precision"
description: "Sui is a Layer 1 blockchain platform with a dark-first, high-contrast design system built around a deep black canvas (#000000, #131518) with a signature electric blue (#298dff, #4da2ff) as the primary action and brand color. The typography is exclusively TWK Everett (with a Mono variant for technical content), rendered at large display sizes with tight negative letter-spacing for a precision-engineered aesthetic. The layout uses a fluid container system clamped between 992px and 1920px, with a systematic em-based spacing scale. The overall tone is technical, expansive, and authoritative. befitting a global financial infrastructure product."
colors:
  primary-blue: "#298dff"
  blue-light: "#4da2ff"
  orange: "#ff6c3d"
  banner-dark: "#030f1c"
  black-canvas: "#000000"
  grey-50: "#f4f5f7"
  grey-800: "#222529"
  grey-900: "#131518"
  grey-300: "#a1a7b2"
  grey-500: "#6c7584"
  white: "#ffffff"
  grey-100: "#e0e2e6"
  grey-200: "#c2c6cd"
  grey-600: "#4b515b"
  grey-700: "#343940"
typography:
  display-xl:
    fontFamily: "TWK Everett"
    fontSize: "80px"
    fontWeight: "400"
    lineHeight: "80px"
    letterSpacing: "-4.8px"
  display-l:
    fontFamily: "TWK Everett"
    fontSize: "69.33px"
    fontWeight: "400"
    lineHeight: "69.33px"
    letterSpacing: "-3.47px"
  display-m:
    fontFamily: "TWK Everett"
    fontSize: "53.33px"
    fontWeight: "400"
    lineHeight: "58.67px"
    letterSpacing: "-2.67px"
  heading-l:
    fontFamily: "TWK Everett"
    fontSize: "39.11px"
    fontWeight: "400"
    lineHeight: "43.02px"
    letterSpacing: "-1.56px"
  heading-m:
    fontFamily: "TWK Everett"
    fontSize: "24px"
    fontWeight: "400"
    lineHeight: "28.81px"
    letterSpacing: "-0.96px"
  heading-s:
    fontFamily: "TWK Everett"
    fontSize: "18.67px"
    fontWeight: "400"
    lineHeight: "22.4px"
    letterSpacing: "-0.49px"
  body-default:
    fontFamily: "TWK Everett"
    fontSize: "14.22px"
    fontWeight: "400"
    lineHeight: "17.78px"
  body-small:
    fontFamily: "TWK Everett"
    fontSize: "12.44px"
    fontWeight: "400"
    lineHeight: "15.56px"
    letterSpacing: "-0.06px"
  body-xs:
    fontFamily: "TWK Everett"
    fontSize: "12px"
    fontWeight: "400"
    lineHeight: "18px"
  ui-label:
    fontFamily: "TWK Everett"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "20.8px"
    letterSpacing: "-0.18px"
  mono-label:
    fontFamily: "TWK Everett Mono"
    fontSize: "12.44px"
    fontWeight: "400"
    lineHeight: "17.42px"
    letterSpacing: "-0.25px"
  mono-label-bold:
    fontFamily: "TWK Everett Mono"
    fontSize: "11.56px"
    fontWeight: "500"
    lineHeight: "14.44px"
    letterSpacing: "-0.75px"
rounded:
  radius-sm: "4px"
  radius-md: "9px"
  radius-pill: "100px"
spacing:
  space-2: "0.125em"
  space-4: "0.25em"
  space-6: "0.375em"
  space-8: "0.5em"
  space-10: "0.625em"
  space-12: "0.75em"
  space-16: "1em"
  space-18: "1.125em"
  space-20: "1.25em"
  space-24: "1.5em"
  space-32: "2em"
  space-40: "2.5em"
  space-48: "3em"
  space-64: "4em"
  space-80: "5em"
  space-96: "6em"
---

## Overview

Sui is a Layer 1 blockchain platform with a dark-first, high-contrast design system built around a deep black canvas (#000000, #131518) with a signature electric blue (#298dff, #4da2ff) as the primary action and brand color. The typography is exclusively TWK Everett (with a Mono variant for technical content), rendered at large display sizes with tight negative letter-spacing for a precision-engineered aesthetic. The layout uses a fluid container system clamped between 992px and 1920px, with a systematic em-based spacing scale. The overall tone is technical, expansive, and authoritative. befitting a global financial infrastructure product.

**Signature traits:**
- Dual typeface system: Pairs TWK Everett and TWK Everett Mono across the type hierarchy.
- Soft, rounded geometry: Generous corner rounding up to 100px.

## Colors

The palette uses 15 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **surface-background** maps to `black-canvas`: Role "background" is grounded by usage context "Primary page background and hero sections".
- **border-border** maps to `grey-700`: Role "border" is grounded by usage context "Dividers, dropdown borders, subtle separators".
- **action-text** maps to `grey-500`: Role "text" is grounded by usage context "Body text, nav links, secondary labels — dominant text color".
- **content-text** maps to `grey-300`: Role "text" is grounded by usage context "Muted secondary text and captions".

### Primary Brand
- **Primary Blue** (#298dff): Primary CTA buttons, links, brand accent highlights. Role: primary.
- **Blue Light** (#4da2ff): Cookie consent buttons, hover states, secondary blue accent. Role: accent.
- **Orange** (#ff6c3d): Supplementary accent color for highlights or callouts. Role: accent.

### Text Scale
- **Grey 300** (#a1a7b2): Muted secondary text and captions. Role: text.
- **Grey 500** (#6c7584): Body text, nav links, secondary labels — dominant text color. Role: text.
- **White** (#ffffff): Heading text, CTA labels, high-contrast foreground on dark surfaces. Role: text.

### Interactive
- **Grey 100** (#e0e2e6): Light-mode border fallback, subtle outlines. Role: border.
- **Grey 200** (#c2c6cd): Hairline borders and subtle dividers. Role: border.
- **Grey 600** (#4b515b): Secondary borders and muted UI outlines. Role: border.
- **Grey 700** (#343940): Dividers, dropdown borders, subtle separators. Role: border.

### Surface & Shadows
- **Banner Dark** (#030f1c): Cookie/consent banner background. Role: background.
- **Black Canvas** (#000000): Primary page background and hero sections. Role: background.
- **Grey 50** (#f4f5f7): Lightest surface tint, footer backgrounds in light contexts. Role: background.
- **Grey 800** (#222529): Elevated card and panel surfaces. Role: background.
- **Grey 900** (#131518): Secondary surface, dropdown backgrounds, nav elements. Role: background.

## Typography

Typography uses TWK Everett, TWK Everett Mono across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes TWK Everett and TWK Everett Mono for visual contrast. Weight range spans regular, medium. Sizes range from 11.56px to 80px.

### Font Roles
- **Headline Font**: TWK Everett
- **Body Font**: TWK Everett

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Hero display headline — maximum impact, tightly tracked | TWK Everett | 80px | 400 | 80px | -4.8px | TWK Everett, Arial, sans-serif | Extracted token |
| Large section headings | TWK Everett | 69.33px | 400 | 69.33px | -3.47px | TWK Everett, Arial, sans-serif | Extracted token |
| Mid-tier display headings | TWK Everett | 53.33px | 400 | 58.67px | -2.67px | TWK Everett, Arial, sans-serif | Extracted token |
| Section headings and card titles | TWK Everett | 39.11px | 400 | 43.02px | -1.56px | TWK Everett, Arial, sans-serif | Extracted token |
| Sub-section headings | TWK Everett | 24px | 400 | 28.81px | -0.96px | TWK Everett, Arial, sans-serif | Extracted token |
| Small headings and emphasized labels | TWK Everett | 18.67px | 400 | 22.4px | -0.49px | TWK Everett, Arial, sans-serif | Extracted token |
| Primary body text, nav links, general UI copy | TWK Everett | 14.22px | 400 | 17.78px | normal | TWK Everett, Arial, sans-serif | Extracted token |
| Secondary body text, captions, metadata | TWK Everett | 12.44px | 400 | 15.56px | -0.06px | TWK Everett, Arial, sans-serif | Extracted token |
| Fine print, footnotes | TWK Everett | 12px | 400 | 18px | normal | TWK Everett, Arial, sans-serif | Extracted token |
| UI labels, button text, navigation items | TWK Everett | 16px | 400 | 20.8px | -0.18px | TWK Everett, Arial, sans-serif | Extracted token |
| Technical labels, data values, code snippets | TWK Everett Mono | 12.44px | 400 | 17.42px | -0.25px | TWK Everett Mono, Arial, sans-serif | Extracted token |
| Emphasized technical labels, tags, badges | TWK Everett Mono | 11.56px | 500 | 14.44px | -0.75px | TWK Everett Mono, Arial, sans-serif | Extracted token |

## Layout

Responsive system uses 4 breakpoint tier(s): mobile, tablet, desktop, wide.

This system uses a 8px base grid with scale values 2, 4, 6, 8, 10, 12, 16, 18, 20, 24, 32, 40, 48, 64, 80, 96, 112, 128.

### Responsive Strategy
- **mobile (<= 1280px)**: Constrain layout for small viewports and prioritize vertical stacking.
- **tablet (>= 768px)**: Increase spacing and column structure for medium-width viewports.
- **desktop (>= 1200px)**: Expand layout density and horizontal composition for wide viewports.
- **wide (>= 1920px)**: Stretch composition with generous gutters and wider layout spans.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| space-2 | 0.125em | 2 | Mapped to --gaps--gap-2 |
| space-4 | 0.25em | 4 | Mapped to --gaps--gap-4 |
| space-6 | 0.375em | 6 | Mapped to --gaps--gap-6 |
| space-8 | 0.5em | 8 | Mapped to --gaps--gap-8 |
| space-10 | 0.625em | 10 | Mapped to --gaps--gap-10 |
| space-12 | 0.75em | 12 | Mapped to --gaps--gap-12 |
| space-16 | 1em | 16 | Mapped to --gaps--gap-16 |
| space-18 | 1.125em | 18 | Mapped to --gaps--gap-18 |
| space-20 | 1.25em | 20 | Mapped to --gaps--gap-20 |
| space-24 | 1.5em | 24 | Mapped to --gaps--gap-24 |
| space-32 | 2em | 32 | Mapped to --gaps--gap-32 |
| space-40 | 2.5em | 40 | Mapped to --gaps--gap-40 |
| space-48 | 3em | 48 | Mapped to --gaps--gap-48 |
| space-64 | 4em | 64 | Mapped to --gaps--gap-64 |
| space-80 | 5em | 80 | Mapped to --gaps--gap-80 |
| space-96 | 6em | 96 | Mapped to --gaps--gap-96 |
| space-112 | 7em | 112 | Mapped to --gaps--gap-112 |
| space-128 | 8em | 128 | Mapped to --gaps--gap-128 |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| n/a | 0 | No validated shadow payload |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | backdrop-filter | blur(12px) ; blur(2.8px) ; blur(4px) |
| Light | outline-color | rgb(108, 117, 132) ; rgb(255, 255, 255) ; rgb(0, 0, 0) |
| Light | outline-width | 3px |
| Light | outline-offset | 0px |
| Light | transform | matrix(1, 0, 0, 1, 0, 0) ; matrix(1, 0, 0, 1, 0, 5) ; matrix(1, 0, 0, 1, 0, 6.21875) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| radius-sm | 4px | 4 | Subtle corner |
| radius-md | 9px | 9 | Control corner |
| radius-pill | 100px | 100 | Large surface corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| radius-sm | 4px | px |
| radius-md | 9px | px |
| radius-pill | 100px | px |

## Components

### Scroll Timeline (Innovation, Engineered)
- **Concept**: A vertical scroll-bound timeline structure for showcasing projects or stages.
- **Layout**:
  - A central vertical path (`timeline_progress`) with a dashed/dotted pattern.
  - A sliding indicator (`timeline_current`) tracking the viewport scroll progress, styled in electric blue with a center highlighted white/blue cube.
  - Cards alternating on the left (even-indexed elements) and right (odd-indexed elements).
- **Behavior**:
  - Binary height expansion (from `0px` closed height to `17em`/`18em` or full preview height) and scale/fade-in transitions triggered as the sliding progress indicator crosses each card's threshold.
  - Collapses back to `0px` if the scroll position moves back above the threshold.

### Rebound Footer
- **Concept**: An interactive equalizer-like geometric structure sitting at the bottom of the canvas.
- **Layout**:
  - A bottom-anchored SVG with vertical equalizer blocks (`rebound_blocks`) with varying opacity (e.g., 0.8, 0.6, 0.4) and linear gradient fills.
  - Vertical dotted paths (`rebound_dots`) rising above the blocks with gradient masks.
- **Behavior**:
  - Rubber-band style vertical stretching based on the scroll velocity near the page end.

## Do's and Don'ts

Guardrails protect Dual typeface system, Soft, rounded geometry without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <= 479px | screen and (max-width: 479px) |
| Mobile | <= 480px | only screen and (max-width: 480px) |
| Mobile | <= 540px | only screen and (max-width: 540px) |
| Mobile | <= 640px | only screen and (max-width: 640px) |
| Mobile | <= 673px | only screen and (max-width: 673px) |
| Mobile | <= 740px | only screen and (max-width: 740px) |
| Mobile | <= 767px | screen and (max-width: 767px) |
| Breakpoint 8 | <= 768px | (max-width: 768px) |
| Breakpoint 9 | <= 800px | only screen and (max-width: 800px) |
| Breakpoint 10 | <= 991px | screen and (max-width: 991px) |
| Breakpoint 11 | <= 1200px | (max-width: 1200px) |
| Breakpoint 12 | <= 1280px | only screen and (max-width: 1280px) |
| Tablet | >= 768px | (min-width: 768px) |
| Tablet | >= 769px | (hover: none) and (min-width: 769px) |
| Desktop | >= 1200px | (min-width: 1200px) |
| Desktop | >= 1280px | screen and (min-width: 1280px) |
| Desktop | >= 1920px | screen and (min-width: 1920px) |
| Breakpoint 18 | Unknown | (prefers-reduced-motion: reduce) |

## Agent Prompt Guide

### Example Component Prompts
- Create button component using validated primary color role and spacing tokens.
- Create card component with mapped radius role and evidence-backed elevation.
- Create form input component using inferred typography hierarchy and border roles.

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.
