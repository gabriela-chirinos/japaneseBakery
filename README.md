# React + Vite

PAN 製パン所

An editorial website for a fictional Japanese artisan bakery based in Niigata, Japan. Built as a design-forward single-page experience with vertical scroll, a whimsical mobile menu, and layered parallax on the hero.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19.x |
| Build tool | Vite | 8.x |
| Styling | Tailwind CSS | 3.x |
| Animation (mascot / menu) | Framer Motion | 12.x |
| Parallax / scroll | Vanilla JS (`scroll` event) | — |
| Testing | Vitest + Testing Library | 4.x |
| Fonts | DM Sans, Cormorant Garamond | Google Fonts |

> **"The Ugly" below.

---
---

## The Good

### Design system

All colors live as CSS custom properties — no raw hex values in components.

### Editorial typography
Cormorant Garamond (`font-display`) paired with DM Sans (`font-body`) gives the site a print-editorial register that feels expensive without being precious. Japanese kanji characters use a dedicated `font-kanji` class, keeping the multilingual hierarchy intentional rather than accidental.

### PanKun — the mascot
The bread roll mascot was drawn as a hand-crafted SVG path and animated with Framer Motion's spring physics — a bounce-in on mount, then an infinite 3-second float. He appears in:
- The desktop header bar (centered, 28px, floating permanently)
- The hero section (two instances, both floating)
- The philosophy and products panels (sitting, static)
- The mobile menu overlay (bounces in when the menu opens)

The component is clean: `animate={true}` enables FM spring animations, `animate={false}` returns a plain SVG with zero overhead.

### Whimsical hamburger menu
The three-line hamburger animates to an × using a spring cubic-bezier (`0.34, 1.56, 0.64, 1`) with a slight overshoot. The full-screen overlay slides down from the top with:
- Staggered nav links that fade and rise in sequence
- CopperCrescent decorations that spin into frame from the corners
- PanKun bouncing into the bottom-right corner
- Micro-copy ("EST. 1967", "NIIGATA, JAPAN") that drifts up last

The entire overlay is CSS transitions — no library, just cubic-bezier easing.

### Parallax (hero section)
Three depth layers driven by a single passive scroll listener:

| Layer | Element | Speed ratio | Effect |
|---|---|---|---|
| Slow | Hero background image | `scrollY × 0.28` | Drifts up lazily — dreamlike depth |
| Medium | CopperCrescent decorations | `−scrollY × 0.12` | Float upward — feel lighter |
| Fast | PanKun mascots | `−scrollY × 0.08` | Barely move — feel grounded |
| None | Wordmark "PAN / 製パン所" | — | Anchored — brand is the fixed point |

All transforms are `translateY()` only — no layout properties, no reflow. Fully disabled when `prefers-reduced-motion` is on.

### Accessibility baseline
- Skip-to-content link at the top of the page
- All sections and the mobile menu have descriptive `aria-label`
- Decorative images and mascots are `aria-hidden="true"`
- Hamburger button has `aria-expanded` and `aria-controls`
- `prefers-reduced-motion` respected at every animation site
- `:focus-visible` rings use the brand copper color

---

## The Ugly

### The horizontal scroll saga
The original concept was a 4-panel horizontal editorial layout — full-viewport panels that slide left/right like a magazine spread. A significant amount of development time went into this:

- **GSAP** handled the inter-panel slide transitions (700ms, `power3.out` easing)
- **Framer Motion** handled content entrance animations inside each panel

The two libraries were on different DOM layers so they never directly conflicted, but **Framer Motion 12 has a known "at rest" bug** that broke the whole system.

**The bug**: FM 12 treats a component mounted with `initial="hidden"` and `animate="hidden"` as already settled. When `animate` later changes to `"visible"`, FM silently ignores it. Because the windowed renderer pre-mounts adjacent panels in the hidden state before they're ever navigated to, *every forward navigation* hit this bug. Backward navigation worked fine — those panels had previously been in `"visible"` state, so FM tracked the change.

Three fix attempts were made before giving up:

1. **`justEntered` prop** — fired after GSAP's `onComplete` callback. FM still missed the state change.
2. **`useAnimation()` controls** — imperative `controls.start('visible')`. Also unreliable in FM 12.38.
3. **Delay baked into variant** — `delay: 0.65s` in the `visible` variant, using `isActive` immediately so FM sees `hidden → visible` on mount. Closest to working, but panel pre-mounting in the windowed renderer introduced race conditions. Stable variant references (module-level constants instead of inline factory functions) partially helped — FM 12 uses reference equality for change detection.

The decision was eventually made to abandon the horizontal scroll and ship a vertical layout. The concept was beautiful; fighting two animation systems for control of the same timing window was not.

### Dead code left in place
The following files are fully orphaned but were kept to preserve development history:

| File | What it was |
|---|---|
| `src/components/layout/PanelContainer.jsx` | Horizontal scroll engine, windowed renderer |
| `src/components/layout/PersistentUI.jsx` | Fixed UI overlay (dot nav, corner labels) |
| `src/components/layout/DotIndicator.jsx` | Mobile panel dot indicators |
| `src/components/layout/VerticalNav.jsx` | Right-side vertical navigation |
| `src/hooks/useHorizontalScroll.js` | Mouse wheel → panel index logic |
| `src/hooks/useSwipe.js` | Touch swipe detection |

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── SiteHeader.jsx       # Fixed top nav — desktop links + mobile hamburger
│   │   ├── MobileMenu.jsx       # Full-screen overlay with staggered nav + PanKun
│   │   ├── PanelContainer.jsx   # ⚠️ Unused — horizontal scroll era
│   │   ├── PersistentUI.jsx     # ⚠️ Unused — horizontal scroll era
│   │   ├── DotIndicator.jsx     # ⚠️ Unused — horizontal scroll era
│   │   └── VerticalNav.jsx      # ⚠️ Unused — horizontal scroll era
│   ├── mascot/
│   │   ├── PanKun.jsx           # SVG bread roll — animate prop controls FM float
│   │   └── CopperCrescent.jsx   # SVG crescent — animate prop controls FM spin
│   ├── panels/
│   │   ├── HeroPanel.jsx        # Full-viewport hero with parallax layers
│   │   ├── ProductsPanel.jsx    # Product grid — 2-col desktop, 1-col mobile
│   │   ├── PhilosophyPanel.jsx  # Brand story / editorial quote section
│   │   └── FooterPanel.jsx      # Logistics + indigo footer
│   └── ui/
│       ├── Button.jsx
│       ├── ProductCard.jsx
│       ├── RotatingBadge.jsx
│       └── SectionLabel.jsx
├── data/
│   └── products.js              # Product catalogue with image paths
├── hooks/
│   ├── useScrollY.js            # Passive scroll listener for parallax
│   ├── useIsMobile.js           # Breakpoint hook (< 768px)
│   ├── useHorizontalScroll.js   # ⚠️ Unused
│   └── useSwipe.js              # ⚠️ Unused
└── styles/
    └── globals.css              # CSS tokens, reset, scroll-behavior, noise grain
```

---

## What Would Come Next

- **Remove dead code** — delete the horizontal scroll files and uninstall GSAP
- **Image optimisation** — convert PNGs to WebP/AVIF for better Core Web Vitals
- **Scroll-reveal animations** — intersection observer–based fade-ins for Products and Philosophy sections
- **Contact form** — wire up the Inquiry section with a real form submission
- **Router** — add a client-side router if the site grows beyond one page
