---
target: portfolio
slug: portfolio
date: 2026-08-31
total_score: 23
max_score: 32
na_heuristics: "7,9,10"
p0_count: 1
p1_count: 2
p2_count: 2
p3_count: 0
method: dual-agent
---

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Active-section indicator works; no loading states for images |
| 2 | Match System / Real World | 3 | Natural bilingual support; "Agradecimento" nav label unusual |
| 3 | User Control and Freedom | 4 | Nav, back-to-top, language toggle — full agency |
| 4 | Consistency and Standards | 3 | Purple-pink orbs vs orange interactive states — dual identity undocumented |
| 5 | Error Prevention | 3 | No forms; external links safe |
| 6 | Recognition Rather Than Recall | 4 | Active nav indicator, clear language toggle state |
| 7 | Flexibility and Efficiency | n/a | Portfolio in Experience mode |
| 8 | Aesthetic and Minimalist Design | 3 | 6 identical mountain.png backgrounds create visual monotony |
| 9 | Error Recovery | n/a | Read-only portfolio |
| 10 | Help and Documentation | n/a | Portfolio in Experience mode |
| **Total** | | **23/32** | **Good (72%)** |

---

## Previous Issues Resolved (15/15)

All issues from the 2026-08-30 critique have been fixed: h1 added, duplicate id removed, active nav indicator, project deep-link structure, prefers-reduced-motion, English copy, gradient orbs, nav hover redesign, card blur effect, skip-to-content, aria attributes, lang toggle, focus-visible states, dead CSS cleanup.

---

## Design Specificity Verdict

**Moving from generic to distinctive — but the identity is unresolved.**

The gradient orbs and card blur effects are the first gestures toward a distinct visual signature. The purple-pink-blue orb palette introduces a secondary chromatic identity that partially competes with "Signal Orange." The card hover blur (mountain.png behind frosted glass) is the most distinctive interaction — it feels authored, not templated.

**Caveat:** DESIGN.md says "Don't add chromatic colors beyond Signal Orange." The orbs violate this with three new colors. The nav underline gradient uses the same palette. The design is now a dual-identity system — orange for interactive states, purple-pink for ambient decoration — and neither owns the brand. A visitor would describe this as "a dark portfolio with purple blobs and orange buttons" — descriptive, not memorable.

**Deterministic scan:** 19 findings. ~11 false positives. Real issues: broken English bgImage path, off-ramp font sizes, $accent producing invisible shadows, DESIGN.md desync.

---

## Overall Impression

The design has genuine atmospheric depth now — the orbs and card blur create moments of authored beauty. But the middle of the page (Projects) is the weakest section: 6 identical cards with the same background, no real links, no visual differentiation. The hero and thanks sections are strong bookends. The biggest opportunity: make 2 real projects shine instead of 6 placeholders looking the same.

---

## What's Working

1. **The card hover interaction.** Mountain.png blur reveal with body semi-transparency creates layered depth. This is the first element that feels like it belongs to Milena specifically.

2. **Gradient orbs create genuine atmosphere.** blur(100px) + radial-gradient + float animation is well-executed. Reduced-motion fallback is correct.

3. **Accessibility fundamentals are thorough.** Skip link, aria-labels, aria-pressed, lang toggle, focus-visible, reduced-motion — comprehensive pass.

---

## Priority Issues

### [P0] English bgImage Path Broken
**What:** PT uses `images/project-bg/mountain.png` (correct), EN uses `images/mountain.png` (wrong — file is at `images/project-bg/mountain.png`). English card hover blur silently fails.
**Why it matters:** The site's most distinctive interaction is broken for all English users.
**Fix:** Change EN bgImage paths to match PT: `images/project-bg/mountain.png`.
**Suggested command:** `/impeccable clarify`

### [P1] 6 Projects Share Identical Background
**What:** All 6 cards use `mountain.png` as hover background. The blur effect becomes wallpaper.
**Why it matters:** The site's strongest design moment (card blur) is diluted by repetition. Projects feel interchangeable.
**Fix:** Use unique images per project, or remove bgImage and use a gradient fallback.
**Suggested command:** `/impeccable delight`

### [P1] Hero CTA Links to #sobre Instead of #projetos
**What:** English CTA says "See Projects" but `ctaLink` is `#sobre` (About). PT says "Sobre Mim" → `#sobre` is correct for PT.
**Why it matters:** Trust-breaking mismatch. Visitor clicks "See Projects" and lands on About.
**Fix:** Change EN `ctaLink` to `#projetos`.
**Suggested command:** `/impeccable clarify`

### [P2] Card Links Invisible on Touch
**What:** `.card-links` opacity is 0 at rest, 1 on hover. Touch users can never see project links.
**Why it matters:** Mobile/touch visitors have no path to project links.
**Fix:** Show card-links always on mobile, or add a tap-to-reveal mechanism.
**Suggested command:** `/impeccable adapt`

### [P2] DESIGN.md Desync With Implementation
**What:** DESIGN.md says "sole chromatic accent = Signal Orange." Implementation now uses purple/pink/blue orbs. The document contradicts itself.
**Why it matters:** DESIGN.md is the contract. When it lies, future edits drift further.
**Fix:** Update DESIGN.md to document the dual-palette system (orange for interaction, purple-pink-blue for ambient).
**Suggested command:** `/impeccable document`

---

## Persona Red Flags

**Jordan (recruiter, scanning):**
Will not scroll past 2 projects if they all look the same. English CTA "See Projects" going to About is a broken promise.

**Casey (developer, detail-oriented):**
Will notice DESIGN.md "Don't add chromatic colors beyond Signal Orange" contradicted by the orbs. The "Idiomas: Inglês" standalone sub-section reads as padding.

**Sam (hiring manager, skimming):**
About section is one paragraph. 6 projects with no real URLs. "Ver Projeto" and "Código" buttons exist but have no href — trust gap.

---

## Minor Observations

- `$accent: #000` still produces invisible shadows on #1f2020 background
- Hero badge reads "Milena's Portfolio" in both languages — PT should be "Portfólio da Milena"
- `styleUrl` in component decorator should be `styleUrls` (array) for Angular 20
- "Idiomas: Inglês" as standalone `<h3>` sub-section is structurally heavy for one data point
- Contact label uses `0.78rem` — off-ramp, missed by detector

---

## Questions to Consider

1. **If the orbs were removed, what's left that's distinctly Milena's?** The design relies on ambient decoration for identity. Is the brand just "dark + gradient blobs"?

2. **Would 2 real projects with real URLs be more compelling than 6 placeholder cards?** The current setup creates an illusion of depth that collapses on interaction.

3. **Is the "Midnight Studio" metaphor still holding?** The orbs read more "celestial/nebula" than "dimly-lit creative workshop."
