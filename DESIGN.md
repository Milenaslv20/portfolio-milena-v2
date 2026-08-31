---
name: Milena Medeiros Portfolio
description: Dark professional portfolio showcasing systems development with ambient gradient atmosphere
colors:
  primary: "#E6501B"
  ambient-purple: "#7c3aed"
  ambient-pink: "#ec4899"
  ambient-blue: "#3b82f6"
  neutral-bg: "#1f2020"
  neutral-surface: "#2d2d2d"
  neutral-text: "#ffffff"
  neutral-muted: "rgba(255,255,255,0.8)"
  neutral-subtle: "rgba(255,255,255,0.12)"
typography:
  display:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "2px"
rounded:
  sm: "12px"
  md: "16px"
  lg: "20px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "{colors.neutral-text}"
    textColor: "{colors.neutral-bg}"
  skill-chip:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.pill}"
    padding: "7px 17px"
  card:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.md}"
    padding: "24px"
  contact-item:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text}"
    rounded: "14px"
    padding: "17px 22px"
---

# Design System: Milena Medeiros Portfolio

## Overview

**Creative North Star: "The Midnight Studio"**

This portfolio embodies a refined, dimly-lit creative workshop where craft is revealed through careful illumination. The dark canvas (#1f2020) creates a focused, distraction-free environment that puts Milena's work center stage. Professional warmth emerges not through decoration but through precise, human-centered interactions — every hover state, every transition, every glow effect serves a purpose.

The aesthetic philosophy uses a dual-palette system: Signal Orange for interactive direction, and a purple-pink-blue ambient palette for atmospheric depth. Technical competence is demonstrated through clean code and smooth animations, while human approachability lives in the soft, tactile component language and warm ambient glow.

**Key Characteristics:**
- Dark, focused canvas that eliminates visual noise
- Signal Orange (#E6501B) for interactive highlights and directional cues
- Ambient gradient orbs (purple, pink, blue) for atmospheric depth
- Soft, pill-shaped components with dramatic hover interactions
- Bilingual support (PT/EN) with seamless toggle

## Colors

A dual-palette system: Signal Orange for interactive direction, ambient gradient colors for atmospheric depth.

### Primary (Interactive)
- **Signal Orange** (#E6501B): Interactive highlights — focus-visible outlines, card hover shadows, contact hover glows, section title accents. Used for states that respond to user action.

### Ambient (Atmospheric)
- **Orb Purple** (#7c3aed): Hero and section gradient orbs, nav underline gradient start. Decorative, not interactive.
- **Orb Pink** (#ec4899): Hero and section gradient orbs, nav underline gradient end. Decorative, not interactive.
- **Orb Blue** (#3b82f6): Hero gradient orb. Decorative, not interactive.

### Neutral
- **Deep Canvas** (#1f2020): The primary background. A warm-dark gray that reads as black without being harsh. Used for body background and card surfaces.
- **Surface** (#2d2d2d): Elevated surfaces — cards, header backdrop, skill chips, contact items. One step lighter than canvas to create tonal layering.
- **Pure White** (#ffffff): Primary text color. Full contrast on the dark canvas.
- **Muted Text** (rgba(255,255,255,0.8)): Secondary text, paragraph content, descriptions. Slightly dimmed for hierarchy.
- **Subtle Border** (rgba(255,255,255,0.12)): Dividers, card borders, input borders. Visible enough to define edges without competing.

### Named Rules
**The Signal Orange Rule.** The primary accent appears on ≤15% of any given screen. Its rarity is the point — it draws the eye to interactive moments, not decorative surfaces.
**The Ambient Rule.** Gradient orbs are decorative atmosphere, not interactive signals. They never carry clickable content or state changes.

## Typography

**Display Font:** Segoe UI (with system fallbacks: Tahoma, Geneva, Verdana, sans-serif)
**Body Font:** Segoe UI (same family — system font stack)

**Character:** A clean, legible system font that prioritizes readability over personality. The weight hierarchy (700 for headlines, 400 for body, 600 for labels) creates structure without decorative typography.

### Hierarchy
- **Display** (700, clamp(2.2rem, 5vw, 3.6rem), 1.15): Hero title and main headlines. Fluid scaling for responsive impact.
- **Title** (700, 1.2rem, 1.3): Section titles and card headings. Consistent across breakpoints.
- **Body** (400, 1rem, 1.75): Paragraphs and descriptions. Comfortable 1.75 line-height for extended reading.
- **Label** (600, 0.8rem, 2px letter-spacing): Badges, section labels, category tags. Uppercase treatment for emphasis.

### Named Rules
**The System Font Rule.** Typography stays in the system font stack — no external font loads. Performance and consistency across platforms outweigh decorative ambition.

## Layout

A centered, single-column layout with two-column split grids for content sections. The container (max-width: 1100px) provides generous margins while maintaining focus.

### Structure
- **Container:** max-width 1100px, centered with auto margins, 1.5rem horizontal padding
- **Sections:** 5rem vertical padding (reduced to 4rem on mobile)
- **Split Grid:** Two-column layout (0.85fr / 1.15fr) for about and contact sections
- **Hero Grid:** Two-column layout (1.2fr / 0.8fr) for hero text and media

### Responsive Behavior
- **≤860px:** Single-column layout, split grids stack vertically
- **≤680px:** Nav wraps, header centers, brand name hides, reduced hero padding

### Spacing Rhythm
- **Vertical section rhythm:** 5rem between major sections
- **Component internal padding:** 1rem–1.5rem (buttons, cards, contact items)
- **Element gaps:** 0.75rem–1.5rem (skill chips, card tags, contact list)

## Elevation & Depth

The system uses **ambient depth** — gradient orbs, deep shadows, and blurred image reveals create atmospheric layering rather than sharp material elevation. Surfaces are flat at rest; shadows and blur appear primarily as a response to interaction and as ambient environmental effects.

### Shadow Vocabulary
- **Gradient Orbs** (hero, about sections): Large (450–600px) blurred radial-gradient circles in purple, pink, and blue. Float with subtle animation. Create atmospheric depth behind content.
- **Card Hover Glow** (`box-shadow: 0 16px 40px rgba(0,0,0,0.5)`): Dark shadow lift on card hover. Cards also reveal a blurred background image (frosted glass effect).
- **Contact Hover Glow** (`box-shadow: 0 9px 24px rgba(230,80,27,0.4)`): Subtle orange shadow on contact item hover.
- **Button Hover Glow** (`box-shadow: 0 12px 28px rgba(0,0,0,0.5)`): Dark shadow lift on button hover.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows and blur effects appear only as a response to state (hover, elevation, focus) or as ambient environmental effects (gradient orbs).

## Shapes

A soft, approachable form language defined by generous border-radius and pill-shaped elements. The consistent use of rounded corners creates visual warmth that balances the dark, technical palette.

### Corner Strategy
- **Pill (999px):** Buttons, skill chips, tags, language toggle, hero badge. Full rounding for soft, approachable feel.
- **Large (20px):** Media frames, image containers. Generous rounding for framed content.
- **Medium (16px):** Project cards. Structural rounding for content containers.
- **Small (14px):** Contact items. Slight rounding for list items.
- **Micro (12px):** Contact icons. Small rounding for icon containers.

### Named Rules
**The Pill Shape Rule.** Interactive elements that trigger actions (buttons, toggles, chips) use pill shapes. Content containers (cards, contact items) use softer but not full rounding.

## Components

### Buttons
- **Shape:** Pill-shaped (999px radius)
- **Primary:** Surface background (#2d2d2d) with white text, 12px 32px padding
- **Hover:** White background with dark text, slide-in gradient effect, 3px upward lift, dark ambient shadow
- **Focus:** Orange glow border (0 0 16px rgba(255,255,255,0.25))

### Chips / Tags
- **Style:** Surface background, white text, pill-shaped, 7px 17px padding
- **State:** Invert to white background with dark text on hover, 4px upward lift

### Cards
- **Corner Style:** 16px radius
- **Background:** Deep Canvas (#1f2020)
- **Hover Effect:** Background image blurs in (frosted glass), body becomes semi-transparent, dark shadow lift
- **Border:** 1px solid rgba(255,255,255,0.1), brightens on hover
- **Internal Padding:** 24px (card body)
- **Links:** Hidden at rest, revealed on hover with slide-up animation

### Contact Items
- **Style:** Surface background, left-aligned icon + text layout, 14px radius
- **Hover:** 8px rightward shift, orange glow, icon rotates and brightens

### Navigation
- **Style:** Sticky header with backdrop blur (12px), surface background at 85% opacity
- **Typography:** 1rem, muted white, transitions to full white on hover
- **Hover State:** Purple-pink gradient underline animates from left (scaleX transform)
- **Active State:** Gradient underline visible for current section
- **Mobile:** Wraps to center, reduces font size to 0.9rem

### Language Toggle
- **Style:** Transparent background, white text, 1px border, pill-shaped
- **Hover:** White fill slides up from bottom, text inverts to dark, subtle glow

### Media Frames
- **Corner Style:** 20px radius
- **Border:** 1px solid rgba(255,255,255,0.12) with inset shadow
- **Shadow:** Deep ambient shadow (0 24px 48px rgba(0,0,0,0.45))
- **Hover:** Image scales 4% with smooth transition

## Do's and Don'ts

### Do:
- **Do** use Signal Orange for interactive highlights and directional cues (focus, hover states, active indicators)
- **Do** use ambient gradient orbs (purple, pink, blue) for atmospheric depth — decorative, never interactive
- **Do** maintain the pill shape (999px radius) for all interactive triggers (buttons, chips, toggles)
- **Do** use ambient depth (gradient orbs, hover shadows, card blur) to create atmospheric layering
- **Do** keep the near-monochrome base — the dark canvas is the brand identity
- **Do** use smooth, deliberate transitions (0.3s–0.6s) for all interactive states
- **Do** center content in the 1100px container with generous vertical rhythm (5rem sections)

### Don't:
- **Don't** use Signal Orange for decorative purposes — it's for interactive states only
- **Don't** use ambient orb colors for interactive elements — they're atmospheric, not functional
- **Don't** use sharp corners on interactive elements — pill shapes are the component language
- **Don't** apply shadows at rest — flat surfaces are the default state
- **Don't** exceed 15% screen coverage with the orange accent — its rarity is the point
- **Don't** use decorative typography — the system font stack is a performance and consistency choice
- **Don't** break the vertical rhythm — 5rem section spacing creates the breathing room
