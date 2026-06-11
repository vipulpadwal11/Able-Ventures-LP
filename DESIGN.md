---
name: Able Ventures Design System
description: Modern, premium editorial visual design system for the Able Ventures speculative redesign.
colors:
  primary: "#F93A3E"
  neutral-bg: "#F6F4EE"
  neutral-ink: "#1A1B1D"
  neutral-border: "#E3DFD5"
  accent: "#F93A3E"
typography:
  display:
    fontFamily: "var(--font-display), Geist, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "var(--font-sans), Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "12px"
  lg: "24px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#D82C30"
---

# Design System: Able Ventures

## 1. Overview

**Creative North Star: "The Modern Venture Chronicle"**

Able Ventures' visual identity is designed to read like a premium modern publication—marrying editorial space, high-contrast structural blocks, and refined layouts to communicate longevity and absolute credibility. The system is built for founders, operators, and strategic partners, establishing an immediate sense of scale and focus.

This system rejects the hyper-saturated gradients, generic stock photos, and neon accents common to modern SaaS startups. Instead, it relies on structured whitespace, a restricted palette, and precise, functional micro-interactions.

**Key Characteristics:**
* **Asymmetrical balance**: Leverages generous whitespace and high-contrast dark-mode panels.
* **Restrained palette**: Powered by verified logo colors (vibrant coral red on warm sand paper).
* **Flat architecture**: Focuses on typographic scale and borders rather than heavy drop shadows.

## 2. Colors

The color system is derived directly from the official logo badge to preserve brand identity while establishing a professional tone.

### Primary
- **Vibrant Coral Red** (#F93A3E / oklch(0.645 0.221 16.4)): Derived from the logo square. Used selectively as an active accent, high-impact CTA, or validation signifier.

### Neutral
- **Warm Sand/Alabaster** (#F6F4EE / oklch(0.970 0.035 33.3)): Derived from the logo text. Used as the main body background to establish a clean, editorial paper texture.
- **Deep Slate/Ink** (#1A1B1D / oklch(0.223 0.004 10.4)): Used for crisp body text and dark-themed hero/footer backgrounds.
- **Subtle Sand Border** (#E3DFD5 / oklch(0.895 0.015 33.3)): A darker tone of the cream background used for visual grid lines and component borders.

### Named Rules
**The 10% Accent Rule.** The Vibrant Coral Red primary is used on less than 10% of any given screen. Its rarity is what gives it visual impact and directs attention.
**The Absolute Contrast Rule.** Do not overlay dark text on red fills. Saturated red fills must always carry white or warm-cream text.

## 3. Typography

**Display Font:** Geist Sans (or fallback system sans-serif)
**Body Font:** Geist Sans (or fallback system sans-serif)
**Label/Mono Font:** Geist Mono

### Hierarchy
- **Display** (Regular 400, clamp(2.25rem, 5vw, 4.5rem), 1.1): Used for main hero headlines. Should use negative letter-spacing (-0.02em to -0.03em) but never exceed the -0.04em overlap limit.
- **Headline** (Medium 500, 2rem, 1.2): Used for major section headers. Uses `text-wrap: balance` to prevent awkward line breaks.
- **Title** (Semibold 600, 1.25rem, 1.4): Used for card titles and category headers.
- **Body** (Regular 400, 1rem, 1.6): Used for primary copy. Limited to a max line length of 65–75ch for readable layouts.
- **Label** (Medium 500, 0.875rem, 0.05em letter-spacing): Used for eyebrows, metrics, and navigation links.

### Named Rules
**The balance-and-pretty Rule.** All display and headline typography must use `text-wrap: balance` to ensure clean line breaks. Long body prose must use `text-wrap: pretty` to eliminate typographic orphans.

## 4. Elevation

The system is flat-by-default, emphasizing structured border grids and crisp lines rather than shadows. Depth is conveyed using high-contrast color shifts (e.g. laying warm sand blocks over deep slate fields) rather than gradients or atmospheric glows.

### Shadow Vocabulary
- **Active Focus Shadow** (`box-shadow: 0 4px 12px rgba(26, 27, 29, 0.05)`): A very subtle, low-opacity slate shadow used exclusively when hovering over clickable cards.

### Named Rules
**The Flat-By-Rest Rule.** Buttons, cards, and panels are completely flat at rest. Subtle shadows appear only as active state responses (hover, active focus).

## 5. Components

### Buttons
- **Shape:** Softly curved corners (6px radius) or full pill-shape.
- **Primary:** Vibrant Coral Red background with Warm Sand text, padding (12px 24px).
- **Hover/Focus:** Transitions to a deeper red shade (#D82C30) with a slight translateY(-1px) slide.

### Cards / Containers
- **Corner Style:** Rounded edges (12px radius).
- **Background:** White (#FFFFFF) or light cream, framed with 1px border (#E3DFD5).
- **Shadow Strategy:** Zero shadow at rest. Interactive cards lift slightly and receive the Active Focus Shadow on hover.

### Inputs / Fields
- **Style:** 1px borders in deep slate or muted border tone, matching the 6px rounded style.
- **Focus:** Highlighted with a crisp 1.5px border colored in Vibrant Coral Red.

### Navigation
- **Style:** Flat top header with navigation links in Geist Sans (Medium 500, 0.875rem), transitioning to Vibrant Coral Red on hover. Mobile layouts use a full-width slide-down panel with a matching flat background.

## 6. Do's and Don'ts

### Do:
- **Do** use pure, solid backgrounds with crisp `#E3DFD5` borders to define structures.
- **Do** pair Vibrant Coral Red as a surgical accent color against deep slate and warm sand backdrops.
- **Do** maintain a strict 65–75ch character width constraint for readable content blocks.

### Don't:
- **Don't** use neon gradients, dark futuristic grids, or overused tech startup illustrations.
- **Don't** use both a solid 1px border and a heavy drop shadow on the same card (avoid "ghost-cards").
- **Don't** use a border-left greater than 1px as a colored accent stripe on cards or callouts.
- **Don't** put lowercase wide-spaced eyebrows above sections; keep eyebrows clean, readable, and structured.
