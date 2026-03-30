# CarWash365 — Brand & Development Guidelines v2

> **Design Direction:** Glassmorphism + Apple/Stripe precision. Frosted glass surfaces, layered depth, cinematic gradients, and an animated hero. Every pixel should feel intentional, premium, and modern. This is a concierge amenity — the site should feel like one.

---

## 1. Brand Identity

**Company:** CarWash365
**Tagline:** Park It. We Handle the Rest.
**What we are:** A recurring, membership-based car wash service embedded inside multifamily residential buildings. We wash cars weekly in residents' own parking spots — garage-friendly, waterless, professional.
**Brand personality:** Premium, effortless, trustworthy, modern. Think Apple Store meets luxury apartment concierge — everything just works, and it looks beautiful doing it.
**Parent company:** MultiFamily Amenity Services Group
**Powered by:** TeamLynQ

---

## 2. Design Philosophy

### Core Principles

1. **Depth over flatness.** Use layered glass surfaces, soft shadows, and blurred backgrounds to create spatial hierarchy. Nothing should feel like it's sitting on a flat plane.

2. **Light as a material.** Gradients aren't decoration — they're the environment. The page should feel like surfaces are catching and refracting light.

3. **Precision at every scale.** Apple-level attention to spacing, alignment, and typography. Every element snaps to the grid. No visual accidents.

4. **Motion with purpose.** Animation tells the story of effortlessness. Things float, glide, and settle — never bounce, shake, or flash. The hero animation should make someone stop and look.

5. **Restraint.** White space is not empty space — it's breathing room. Fewer elements, more impact. If it doesn't earn its place, remove it.

---

## 3. Logo

### Files
Logo files will be provided separately via the GitHub repo. Expected assets:
- `carwash365_logo.png` — Full horizontal logo (icon + wordmark), for desktop navbar and footer
- `carwash365_logo_icon.png` — Icon only (the car-in-bubble mark), for mobile navbar and favicon

### Usage Rules
- Primary: on light/glass surfaces
- On dark gradient backgrounds: use white version
- Minimum clear space: 1.5x the icon height on all sides
- In the navbar: full logo on `md:` and up, icon-only on mobile
- Never place logo on busy backgrounds without a glass/blur surface behind it

---

## 4. Color System

### Design Intent
The palette stays rooted in CarWash365 blue but expands into rich gradients and translucent layers. The background is no longer flat white — it's a living gradient canvas that glass elements sit on top of.

### CSS Custom Properties

```css
:root {
  /* ── Brand Blues ── */
  --color-primary:            #0439D9;
  --color-primary-hover:      #0330B8;
  --color-primary-light:      #044BD9;
  --color-primary-sky:        #2561D9;
  --color-primary-soft:       #94B3F2;

  /* ── Dark Palette (for contrast sections & text) ── */
  --color-dark-900:           #0A0E27;   /* Deepest — dark section backgrounds */
  --color-dark-800:           #111640;   /* Card backgrounds on dark sections */
  --color-dark-700:           #1A2050;   /* Subtle elevation on dark */
  --color-dark-600:           #252B65;   /* Borders on dark surfaces */

  /* ── Light Palette ── */
  --color-white:              #FFFFFF;
  --color-background:         #F8FAFF;   /* Page base — very soft blue-white */
  --color-surface:            #FFFFFF;   /* Default card base (before glass effect) */

  /* ── Glass System ── */
  --glass-bg:                 rgba(255, 255, 255, 0.55);
  --glass-bg-hover:           rgba(255, 255, 255, 0.70);
  --glass-border:             rgba(255, 255, 255, 0.35);
  --glass-shadow:             0 8px 32px rgba(4, 57, 217, 0.08);
  --glass-blur:               16px;

  --glass-dark-bg:            rgba(17, 22, 64, 0.60);
  --glass-dark-bg-hover:      rgba(17, 22, 64, 0.75);
  --glass-dark-border:        rgba(255, 255, 255, 0.08);
  --glass-dark-shadow:        0 8px 32px rgba(0, 0, 0, 0.30);

  /* ── Text ── */
  --color-text-primary:       #0A0E27;
  --color-text-secondary:     #3D4263;
  --color-text-muted:         #6B7094;
  --color-text-on-dark:       #FFFFFF;
  --color-text-on-dark-muted: rgba(255, 255, 255, 0.65);
  --color-text-on-glass:      #0A0E27;

  /* ── Accent ── */
  --color-accent-yellow:      #FDD901;   /* Use sparingly — badges, special highlights only */
  --color-accent-glow:        rgba(4, 57, 217, 0.40);  /* Glow effects behind CTAs */

  /* ── Borders ── */
  --color-border-light:       rgba(4, 57, 217, 0.08);
  --color-border-hover:       rgba(4, 57, 217, 0.20);

  /* ── Gradients (as properties for reuse) ── */
  --gradient-hero:            linear-gradient(135deg, #0A0E27 0%, #111640 40%, #0439D9 100%);
  --gradient-hero-radial:     radial-gradient(ellipse at 70% 50%, rgba(4, 57, 217, 0.30) 0%, transparent 60%);
  --gradient-cta-section:     linear-gradient(135deg, #0A0E27 0%, #1A2050 50%, #0439D9 100%);
  --gradient-light-section:   linear-gradient(180deg, #F8FAFF 0%, #EEF2FF 100%);
  --gradient-mesh:            radial-gradient(at 20% 80%, rgba(4, 75, 217, 0.15) 0%, transparent 50%),
                              radial-gradient(at 80% 20%, rgba(37, 97, 217, 0.10) 0%, transparent 50%),
                              radial-gradient(at 50% 50%, rgba(148, 179, 242, 0.08) 0%, transparent 70%);
}
```

### Section Color Strategy

| Section | Background | Card Style | Text |
|---------|-----------|------------|------|
| **Hero** | Dark gradient (`--gradient-hero`) + radial glow | N/A | White |
| **Social Proof** | Transparent / inherited from hero transition | Glass (dark variant) | White / muted |
| **How It Works** | Light (`--color-background` + mesh gradient) | Glass (light) | Dark |
| **Why CarWash365** | White to light gradient | Glass (light) | Dark |
| **Comparison** | Light gradient | Glass table | Dark |
| **Pricing** | Light (`--gradient-light-section`) | Glass (light), featured card has subtle blue glow | Dark |
| **Testimonials** | Dark gradient (`--gradient-cta-section`) | Glass (dark) | White |
| **FAQ** | White / light | No cards — clean accordion | Dark |
| **For Property Managers** | Light with blue mesh accent | Glass (light) | Dark |
| **Final CTA** | Dark gradient | N/A | White |
| **Footer** | `--color-dark-900` | N/A | White / muted |

---

## 5. Glassmorphism System

This is the core visual language. Every card, container, and interactive surface uses glass.

### Light Glass (on light/gradient backgrounds)
```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  box-shadow: var(--glass-shadow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.glass:hover {
  background: var(--glass-bg-hover);
  border-color: rgba(4, 57, 217, 0.15);
  box-shadow: 0 12px 40px rgba(4, 57, 217, 0.12);
  transform: translateY(-2px);
}
```

### Dark Glass (on dark gradient backgrounds)
```css
.glass-dark {
  background: var(--glass-dark-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-dark-border);
  border-radius: 20px;
  box-shadow: var(--glass-dark-shadow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.glass-dark:hover {
  background: var(--glass-dark-bg-hover);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.40);
  transform: translateY(-2px);
}
```

### Glass Rules
- **Always** have a gradient or textured background behind glass — glass on flat white looks like a broken border
- **Border radius:** 20px for cards, 16px for smaller elements, 24px for hero-level panels
- **Border:** always 1px, always semi-transparent white — this is the "edge catch" that sells the glass effect
- **Never** stack glass on glass (glass card inside glass container) — it kills the effect
- **Inner glow (optional):** `box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2)` for subtle top-edge highlight

---

## 6. Typography

### Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Load from Google Fonts — weights: 400, 500, 600, 700, 800 */
```

### Type Scale

| Element | Desktop | Mobile | Weight | Letter Spacing | Line Height |
|---------|---------|--------|--------|---------------|-------------|
| Hero headline | 72px / 4.5rem | 40px / 2.5rem | 800 | -0.03em | 1.05 |
| Hero subheadline | 20px / 1.25rem | 18px / 1.125rem | 400 | 0 | 1.6 |
| Section headline | 48px / 3rem | 32px / 2rem | 700 | -0.02em | 1.15 |
| Section subheadline | 18px / 1.125rem | 16px / 1rem | 400 | 0 | 1.6 |
| Card headline | 20px / 1.25rem | 18px / 1.125rem | 600 | -0.01em | 1.3 |
| Card body | 15px / 0.9375rem | 15px | 400 | 0 | 1.7 |
| Body text | 16px / 1rem | 16px | 400 | 0 | 1.7 |
| Small / caption | 14px / 0.875rem | 13px | 400 | 0 | 1.5 |
| Overline / label | 13px / 0.8125rem | 12px | 600 | 0.08em | 1.4 |
| Nav links | 15px / 0.9375rem | 16px | 500 | 0 | 1.4 |
| Button text | 15px / 0.9375rem | 15px | 600 | 0.01em | 1 |
| Price (large) | 48px / 3rem | 36px / 2.25rem | 800 | -0.02em | 1.1 |
| Price suffix | 16px / 1rem | 14px | 400 | 0 | 1 |

### Typography Rules
- Hero headlines are **significantly larger** than anything else on the page — they own the viewport
- Accent words in headings use `--color-primary` on light backgrounds, a lighter blue (`--color-primary-sky`) on dark backgrounds
- Maximum body text width: `38rem` (608px) — tighter than typical for a premium, editorial feel
- Overline labels (like "HOW IT WORKS" above a section) are uppercase, letter-spaced, small, and use `--color-primary`
- On dark backgrounds, body text uses `--color-text-on-dark-muted`, not full white — full white is reserved for headings

---

## 7. Hero Section — Animated & Interactive

### Concept
The hero is a **dark, cinematic, full-viewport section** with a gradient background and a prominent animated element. This is the money shot — it should make visitors pause.

### Background
```css
.hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: var(--gradient-hero);
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-hero-radial);
  pointer-events: none;
}
```

Add 2–3 **animated gradient orbs** behind the content:
```css
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: orb-float 8s ease-in-out infinite;
}
.hero-orb-1 {
  width: 500px; height: 500px;
  background: rgba(4, 57, 217, 0.5);
  top: 10%; right: 15%;
}
.hero-orb-2 {
  width: 400px; height: 400px;
  background: rgba(37, 97, 217, 0.3);
  bottom: 20%; left: 10%;
  animation-delay: -3s;
}
.hero-orb-3 {
  width: 300px; height: 300px;
  background: rgba(148, 179, 242, 0.25);
  top: 50%; left: 40%;
  animation-delay: -5s;
}

@keyframes orb-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.05); }
  66% { transform: translate(-20px, 15px) scale(0.95); }
}
```

### Animated Hero Element

**Primary option — Animated 3D car (recommended):**
Use a **CSS/SVG animated isometric car illustration** that floats with a subtle 3D tilt. The car should appear clean and gleaming, with animated sparkle/shine particles drifting off it. Built with SVG + CSS animations, no heavy 3D library needed.

Specifications:
- Isometric or 3/4 perspective view of a clean sedan/SUV
- Soft blue-white glow underneath (like it's sitting on a light surface)
- 2–3 animated sparkle particles floating upward (small diamond shapes, fade in/out, `2–4s` cycle)
- Gentle continuous float animation: `translateY(-8px)` over `4s ease-in-out infinite`
- Subtle rotation: `rotateY(2deg) rotateX(1deg)` oscillation for 3D feel
- On scroll: slight parallax (moves up slower than text) for depth

```css
.hero-car {
  animation: car-float 4s ease-in-out infinite;
  filter: drop-shadow(0 20px 40px rgba(4, 57, 217, 0.3));
}
@keyframes car-float {
  0%, 100% { transform: translateY(0) rotateY(0deg); }
  50% { transform: translateY(-12px) rotateY(2deg); }
}

.sparkle {
  position: absolute;
  width: 8px; height: 8px;
  background: white;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  animation: sparkle-float 3s ease-in-out infinite;
  opacity: 0;
}
@keyframes sparkle-float {
  0% { opacity: 0; transform: translateY(0) scale(0.5); }
  20% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-60px) scale(1); }
}
```

**Fallback option — Lottie animation:**
If a custom SVG car is too complex, use a Lottie animation of a gleaming car. Embed with `lottie-react` or `@lottiefiles/react-lottie-player`. Keep it under 200KB.

### Hero Layout
```
┌──────────────────────────────────────────────────┐
│  [dark gradient background + floating orbs]       │
│                                                   │
│     [overline badge]                              │
│     [HERO HEADLINE - 72px, white, multi-line]     │
│     [subheadline - lighter, 20px]                 │
│                                                   │
│     [CTA primary]  [CTA secondary/ghost]          │
│     [3 trust markers, inline, muted white]        │
│                                                   │
│              [animated car element]               │
│              [glow/reflection beneath]            │
│                                                   │
└──────────────────────────────────────────────────┘
```

On mobile: car element scales down and sits below the text, not overlapping.

---

## 8. Component Specifications

### 8.1 Buttons

**Primary CTA**
```css
.btn-primary {
  background: var(--color-primary);
  color: #FFFFFF;
  font-weight: 600;
  font-size: 0.9375rem;
  padding: 16px 36px;
  border-radius: 14px;
  border: none;
  box-shadow: 0 4px 20px var(--color-accent-glow),
              0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.btn-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 50%);
  pointer-events: none;
}
.btn-primary:hover {
  background: var(--color-primary-hover);
  box-shadow: 0 8px 30px var(--color-accent-glow),
              0 0 0 1px rgba(255, 255, 255, 0.15) inset;
  transform: translateY(-2px);
}
.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 12px var(--color-accent-glow);
}
```

**Ghost Button (for dark backgrounds)**
```css
.btn-ghost {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  color: #FFFFFF;
  font-weight: 600;
  font-size: 0.9375rem;
  padding: 16px 36px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}
```

**Secondary Button (for light backgrounds)**
```css
.btn-secondary {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  color: var(--color-text-primary);
  font-weight: 600;
  font-size: 0.9375rem;
  padding: 16px 36px;
  border-radius: 14px;
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
.btn-secondary:hover {
  background: var(--glass-bg-hover);
  border-color: var(--color-border-hover);
  transform: translateY(-2px);
}
```

### 8.2 Glass Cards

**Feature Card (light background)**
```css
.card-feature {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 36px;
  box-shadow: var(--glass-shadow);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-feature:hover {
  background: var(--glass-bg-hover);
  border-color: rgba(4, 57, 217, 0.15);
  box-shadow: 0 16px 48px rgba(4, 57, 217, 0.10);
  transform: translateY(-4px);
}
```

**Pricing Card**
```css
.card-pricing {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 40px 36px;
  box-shadow: var(--glass-shadow);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}
/* Featured / Most Popular tier */
.card-pricing--featured {
  background: rgba(255, 255, 255, 0.75);
  border-color: rgba(4, 57, 217, 0.25);
  box-shadow: 0 8px 32px rgba(4, 57, 217, 0.12),
              0 0 0 1px rgba(4, 57, 217, 0.08);
  transform: scale(1.03);
}
.card-pricing--featured:hover {
  transform: scale(1.03) translateY(-4px);
}
```

**Testimonial Card (dark background)**
```css
.card-testimonial {
  background: var(--glass-dark-bg);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-dark-border);
  border-radius: 20px;
  padding: 36px;
  box-shadow: var(--glass-dark-shadow);
}
```

**How It Works Step Card**
```css
.card-step {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 32px 28px;
  box-shadow: var(--glass-shadow);
  text-align: center;
  position: relative;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-step:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(4, 57, 217, 0.10);
}
```

### 8.3 Icon Containers
```css
/* Icon container — frosted circle */
.icon-container {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(4, 57, 217, 0.12), rgba(37, 97, 217, 0.06));
  border: 1px solid rgba(4, 57, 217, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.icon-container svg {
  width: 26px;
  height: 26px;
  color: var(--color-primary);
  stroke-width: 1.8;
}
/* Parent card hover scales the icon */
.card-feature:hover .icon-container,
.card-step:hover .icon-container {
  transform: scale(1.1);
}

/* Large icon container (How It Works) */
.icon-container-lg {
  width: 72px;
  height: 72px;
  border-radius: 20px;
}
.icon-container-lg svg {
  width: 32px;
  height: 32px;
}
```

### 8.4 Step Number Badge
```css
.step-badge {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -10px;
  box-shadow: 0 4px 12px rgba(4, 57, 217, 0.35);
  z-index: 2;
}
```

### 8.5 Step Connector Lines
```css
/* Horizontal line connecting step cards (desktop only) */
.step-connector {
  position: absolute;
  top: 50%;
  left: calc(100% + 4px);
  width: calc(100% - 8px); /* gap between cards minus padding */
  height: 2px;
  background: linear-gradient(90deg, rgba(4, 57, 217, 0.25), rgba(4, 57, 217, 0.05));
  transform: translateY(-50%);
}
/* Hide on mobile/tablet */
@media (max-width: 1023px) {
  .step-connector { display: none; }
}
```

### 8.6 Overline Badge (Section Labels)
```css
.overline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 9999px;
  background: rgba(4, 57, 217, 0.08);
  border: 1px solid rgba(4, 57, 217, 0.12);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 20px;
}
/* Dark background variant */
.overline-dark {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.10);
  color: var(--color-primary-soft);
}
```

### 8.7 "Most Popular" Tag
```css
.tag-popular {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 20px;
  border-radius: 9999px;
  background: var(--color-primary);
  color: #FFFFFF;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  box-shadow: 0 4px 16px rgba(4, 57, 217, 0.4);
  white-space: nowrap;
}
```

### 8.8 Comparison Table
```css
.comparison-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 20px;
  overflow: hidden;
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}
.comparison-table th,
.comparison-table td {
  padding: 18px 24px;
  font-size: 0.875rem;
  text-align: center;
  border-bottom: 1px solid rgba(4, 57, 217, 0.06);
}
.comparison-table th {
  font-weight: 700;
  font-size: 0.9375rem;
}
.comparison-table tr:last-child td {
  border-bottom: none;
}
/* CarWash365 column highlight */
.comparison-table .cw-col {
  background: rgba(4, 57, 217, 0.04);
  color: var(--color-primary);
  font-weight: 600;
}
/* Label column */
.comparison-table .label-col {
  text-align: left;
  font-weight: 600;
  color: var(--color-text-primary);
}
/* Old way column */
.comparison-table .old-col {
  color: var(--color-text-muted);
}
```

### 8.9 FAQ Accordion
```css
.faq-item {
  border-bottom: 1px solid var(--color-border-light);
  padding: 28px 0;
}
.faq-item:last-child {
  border-bottom: none;
}
.faq-question {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  transition: color 0.2s ease;
}
.faq-question:hover {
  color: var(--color-primary);
}
.faq-question svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--color-text-muted);
}
.faq-item[open] .faq-question svg {
  transform: rotate(180deg);
  color: var(--color-primary);
}
.faq-answer {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  padding-top: 16px;
  max-width: 38rem;
}
```

### 8.10 Navbar
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: 72px;
  background: rgba(248, 250, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(4, 57, 217, 0.06);
  transition: all 0.3s ease;
}
/* When hero (dark bg) is visible, navbar should be transparent */
.navbar--hero-visible {
  background: rgba(10, 14, 39, 0.3);
  border-bottom-color: rgba(255, 255, 255, 0.06);
}
.navbar--hero-visible .nav-link {
  color: rgba(255, 255, 255, 0.85);
}
.navbar--hero-visible .nav-link:hover {
  color: #FFFFFF;
}
```

---

## 9. Spacing System

### Base: 4px grid

```
4px    — micro gaps
8px    — tight spacing
12px   — compact padding
16px   — default
24px   — card internal gaps
32px   — between related elements
36px   — card padding
48px   — sub-section breaks
64px   — section padding mobile
80px   — section padding tablet
120px  — section padding desktop
```

### Section Spacing
| Section | Desktop `py` | Mobile `py` |
|---------|-------------|-------------|
| Hero | Full viewport (`min-h-screen`) | Full viewport |
| Social Proof | 36px | 28px |
| Standard content section | 120px | 64px |
| FAQ | 100px | 56px |
| Final CTA | 120px | 80px |
| Footer | 56px | 40px |

### Container
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
/* sm: px-24, lg: px-32 */
```

Max-width is 1200px (slightly narrower than typical) for a more focused, premium feel.

---

## 10. Layout & Grid

### Breakpoints
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

### Grid Patterns
| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| How It Works (4 steps) | 4 columns | 2x2 grid | 1 column |
| Features (6 cards) | 3 columns | 2 columns | 1 column |
| Pricing (3 tiers) | 3 columns, center scaled up | Stack 3 | 1 column |
| Testimonials (3 quotes) | 3 columns | 1 column | 1 column |
| Comparison table | Full table | Full table | Horizontal scroll |

### Grid Gaps
- Cards: `gap: 20px` mobile, `gap: 28px` desktop
- Step cards: `gap: 24px`

---

## 11. Iconography

**Library:** Lucide React (`lucide-react`)
**Stroke width:** `1.8` (slightly thinner than default for a refined feel)

### Icon Sizes
| Context | Size |
|---------|------|
| Feature card | 26px |
| How It Works step | 32px |
| Inline trust markers | 16px |
| FAQ chevron | 20px |
| CTA arrow | 20px |
| Navbar mobile menu | 24px |

### Icon Map

**How It Works:**
1. Sign Up → `UserPlus`
2. Tell Us About Your Car → `Car`
3. Drop Your Pin → `MapPin`
4. Walk Out to a Clean Car → `Sparkles`

**Why CarWash365:**
- One Wash Night → `CalendarCheck`
- Notifications → `BellRing`
- Professional Care → `ShieldCheck`
- Time Savings → `Clock`
- Phone Management → `Smartphone`
- Eco-Friendly → `Leaf`

**Other:**
- Checkmarks → `Check`
- CTA arrows → `ArrowRight`
- FAQ expand → `ChevronDown`
- Quote marks (testimonials) → `Quote`
- Hero badge → `Sparkles`

---

## 12. Animation & Motion

### Easing
```css
/* CSS — for continuous keyframe loops */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
```
```tsx
// Framer Motion — use array notation for cubic-bezier
ease: [0.16, 1, 0.3, 1]    // Apple ease-out-expo — scroll reveals, entrances
ease: [0.4, 0, 0.2, 1]     // Smooth — hovers, toggles, accordions
```

### Scroll Reveal (Framer Motion)
Use the `<AnimatedSection>` component defined in Section 15.4. Key parameters:
- `initial`: `{ opacity: 0, y: 30 }`
- `animate`: `{ opacity: 1, y: 0 }`
- `duration`: `0.8s`
- `ease`: `[0.16, 1, 0.3, 1]`
- `margin`: `"-15% 0px"` (trigger when 15% into viewport)
- `once`: `true` (animate only on first appearance)
- Stagger siblings by `0.08s` delay increments

### Hero Animations
- **Orbs:** CSS `@keyframes`, `8s ease-in-out infinite`, subtle position + scale oscillation
- **Car float:** CSS `@keyframes`, `4s ease-in-out infinite`, `translateY(-12px)`
- **Sparkles:** CSS `@keyframes`, `3s ease-in-out infinite`, offset start times, fade in/out + float up
- **Text entrance:** Framer Motion `motion.div` / `motion.h1`, staggered `delay` values (`0.1s`, `0.2s`, `0.3s`, `0.4s`), `duration: 0.8s`, `ease: [0.16, 1, 0.3, 1]`

### Interaction Animations
- **Card hover:** Framer Motion `whileHover={{ y: -4 }}` + CSS shadow transition, `0.35s ease [0.4, 0, 0.2, 1]`
- **Button hover:** CSS `translateY(-2px)` + glow increase, `0.25s`
- **FAQ accordion:** Framer Motion `animate={{ height: isOpen ? "auto" : 0 }}`, `0.3s ease [0.4, 0, 0.2, 1]`
- **Icon scale on card hover:** CSS `transform: scale(1.1)`, `0.3s`
- **Navbar transition** (dark ↔ light): CSS `transition: all 0.3s ease`
- **Mobile menu:** Framer Motion `AnimatePresence` + `motion.nav` for enter/exit

### Reduced Motion
```css
/* CSS fallback */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
Additionally, Framer Motion respects the OS-level reduced motion setting automatically. To be explicit, you can add `reducedMotion="user"` to `<LazyMotion>` or individual `motion` components.

---

## 13. Accessibility

- **Contrast:** All text passes WCAG AA minimum (4.5:1). `--color-primary` (#0439D9) on white = 7.2:1 (passes AAA). White text on `--color-dark-900` (#0A0E27) = 16.8:1.
- **Glass readability:** On glass surfaces, text must still meet 4.5:1 contrast against the *worst-case* background showing through. Use `--color-text-primary` (#0A0E27), never light gray on glass.
- **Focus states:** `outline: 2px solid var(--color-primary); outline-offset: 3px;` on all interactive elements. Never remove — restyle only.
- **Keyboard nav:** Tab-navigable FAQ, skip-to-content link, logical focus order.
- **Semantic HTML:** `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`. Sections have `aria-label` or visible heading.
- **Reduced motion:** All animations wrapped appropriately (see above).
- **Images:** All decorative images have `alt=""`, all content images have descriptive alt text.

---

## 14. SEO & Meta

```html
<title>CarWash365 — Weekly Car Wash Membership | Professional Washing at Your Building</title>
<meta name="description" content="CarWash365 brings professional car washing to your building's garage every week. Sign up once, park your car, and wake up to a spotless ride. Plans from $79.95/mo. Cancel anytime.">
<meta property="og:title" content="CarWash365 — Your Car, Cleaned Weekly in Your Own Parking Spot">
<meta property="og:description" content="Professional weekly car washing right at your building. No scheduling, no driving, no hassle. Plans from $79.95/month.">
<meta property="og:type" content="website">
<meta property="og:image" content="/og_CarWash365_1200x630.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://carwash365.com/">
```

---

## 15. Development Specification

> **IMPORTANT FOR CLAUDE CODE:** Follow this section precisely. It defines the exact tech stack, project structure, packages, and build rules. Do not deviate or substitute technologies.

### 15.1 Tech Stack (locked — do not change)

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | **Next.js** (App Router) | latest stable (15.x+) |
| Language | **TypeScript** | strict mode |
| Styling | **Tailwind CSS** | v4 |
| Icons | **lucide-react** | latest |
| Fonts | **Inter** via `@fontsource-variable/inter` | variable font |
| Animations | **Framer Motion** for scroll reveals, entrance animations, and layout transitions | latest (11.x+) |
| Hero animation | Inline SVG + CSS keyframes (continuous loops) + Framer Motion (entrance sequence) | — |
| Linting | ESLint (Next.js defaults) | — |
| Deployment | **Vercel** (connect GitHub repo → auto-deploy) | — |

**Do NOT install:** GSAP, Three.js, Lottie, Styled Components, Emotion, CSS Modules, or any animation/styling library not listed above. Framer Motion is the ONLY animation library. CSS keyframes handle continuous loops (floating orbs, sparkles, car hover). Framer Motion handles everything triggered by user interaction or viewport entry.

### 15.2 Project Setup

Initialize with:
```bash
npx create-next-app@latest carwash365-website --typescript --tailwind --eslint --app --src-dir --no-import-alias
```

Then install only these additional packages:
```bash
npm install lucide-react @fontsource-variable/inter framer-motion
```

That's it. No other packages.

### 15.3 Project Structure

```
carwash365-website/
├── public/
│   ├── images/
│   │   ├── carwash365_logo.png          # Full logo (provided)
│   │   ├── carwash365_logo_icon.png     # Icon only (provided)
│   │   ├── carwash365_logo_white.png    # White version (provided)
│   │   ├── og_CarWash365_1200x630.jpg   # OG share image (provided)
│   │   └── partners/                    # Partner logos (Alfred, AMLI, etc.)
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # Root layout (fonts, metadata, global styles)
│   │   ├── page.tsx                     # Landing page — assembles all sections
│   │   └── globals.css                  # Tailwind directives + CSS custom properties + keyframes
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx                     # Dark gradient hero + animated car SVG + sparkles
│       ├── HeroCar.tsx                  # SVG car illustration component with animation
│       ├── SocialProof.tsx
│       ├── HowItWorks.tsx
│       ├── Features.tsx                 # "Why CarWash365" section
│       ├── Comparison.tsx               # vs. Traditional car wash table
│       ├── Pricing.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx                      # Accordion with useState
│       ├── PropertyManagers.tsx         # B2B section
│       ├── FinalCTA.tsx
│       ├── Footer.tsx
│       └── AnimatedSection.tsx         # Reusable Framer Motion scroll-reveal wrapper
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

### 15.4 Key Rules for Claude Code

**One component per section.** Each section of the landing page gets its own file in `src/components/`. The `page.tsx` file simply imports and stacks them in order. This makes it easy to modify individual sections later without touching the whole page.

**All copy lives in the component files directly.** Do not create a separate content/copy JSON file. Hardcode the text inside each component. This is a single landing page, not a CMS.

**`globals.css` must contain:**
1. Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`)
2. All CSS custom properties from Section 4 of this document (the `:root { }` block)
3. All `@keyframes` definitions (orb-float, float, sparkle-float)
4. The `@media (prefers-reduced-motion: reduce)` block
5. The Inter font import

**Tailwind config must contain** all the custom theme extensions defined below (colors, shadows, border-radius, animations, etc.). Use `tailwind.config.ts` (TypeScript).

**"use client" directive:** Add `"use client"` to components that use Framer Motion or React state:
- `Navbar.tsx` (scroll-based style changes + mobile menu state)
- `Hero.tsx` (Framer Motion entrance sequence)
- `FAQ.tsx` (accordion open/close state + Framer Motion expand/collapse)
- `Pricing.tsx` (if tier selection is interactive)
- `AnimatedSection.tsx` (Framer Motion scroll trigger)
- Any component using `motion.*` elements or `useInView`

All other components can be server components (no directive needed). However, if a server component is wrapped by `AnimatedSection`, it still animates — the wrapper handles the motion.

**AnimatedSection component (Framer Motion):** Build a reusable `<AnimatedSection>` wrapper using Framer Motion's `motion.div` and `useInView`. This replaces the manual Intersection Observer approach.

```tsx
// src/components/AnimatedSection.tsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple ease-out-expo
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

Use `<AnimatedSection>` to wrap content groups within each section. Stagger sibling `<AnimatedSection>` elements by passing `delay={0}`, `delay={0.08}`, `delay={0.16}`, etc.

**Framer Motion usage patterns for this project:**

```tsx
// Scroll reveal (most common — use AnimatedSection wrapper)
<AnimatedSection delay={0.1}>
  <h2>Section Title</h2>
</AnimatedSection>

// Staggered card grid
{cards.map((card, i) => (
  <AnimatedSection key={i} delay={i * 0.08}>
    <CardComponent {...card} />
  </AnimatedSection>
))}

// Hero entrance sequence (direct motion.div, not wrapped)
<motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
>
  Park It. We Handle the Rest.
</motion.h1>

// FAQ accordion expand/collapse
<motion.div
  initial={false}
  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
  style={{ overflow: "hidden" }}
>
  <p>{answer}</p>
</motion.div>

// Card hover lift (use whileHover)
<motion.div
  whileHover={{ y: -4, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } }}
  className="glass-card"
>
  ...
</motion.div>

// Mobile nav menu slide
<motion.nav
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: "auto" }}
  exit={{ opacity: 0, height: 0 }}
  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
>
  ...
</motion.nav>
```

**Animation responsibility split:**
| Animation Type | Technology | Why |
|---------------|-----------|-----|
| Scroll reveal / entrance | Framer Motion (`useInView` + `motion.div`) | Cleaner than manual IntersectionObserver, handles staggering elegantly |
| Card/button hover | Framer Motion (`whileHover`) or CSS `:hover` | Either works — Framer adds spring physics, CSS is lighter |
| FAQ expand/collapse | Framer Motion (`animate` height) | Smooth height animation to/from `auto` — CSS can't do this |
| Hero text entrance | Framer Motion (`initial` + `animate`) | Sequenced stagger on page load |
| Hero car float | CSS `@keyframes` | Continuous infinite loop — Framer Motion is wasteful for infinite CSS-level loops |
| Hero orbs float | CSS `@keyframes` | Same — continuous ambient animation |
| Hero sparkles | CSS `@keyframes` | Same — lightweight infinite particles |
| Navbar dark↔light | CSS `transition` | Simple property transition based on class toggle |
| Reduced motion | CSS `@media` + Framer Motion `reducedMotion` prop | Both need to respect user preference |

**Smooth scrolling:** Add `scroll-behavior: smooth` to `html` in `globals.css`. Navbar links should scroll to section IDs (`#how-it-works`, `#pricing`, `#features`, `#faq`).

**No page reloads.** All navigation is in-page anchor scrolling. The "Get Started" and "Start Your Membership" buttons should link to `https://www.carwash365.com/signup`. The "Log In" link should point to `https://www.carwash365.com/login`. Use `<a>` tags with full URLs for these external links.

**Mobile menu:** The navbar needs a hamburger menu on mobile (`md:` breakpoint and below) that opens a slide-down or slide-in panel with the nav links. Use `useState` for open/close.

### 15.5 Tailwind Config (complete)

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0439D9',
          hover: '#0330B8',
          light: '#044BD9',
          sky: '#2561D9',
          soft: '#94B3F2',
        },
        dark: {
          900: '#0A0E27',
          800: '#111640',
          700: '#1A2050',
          600: '#252B65',
        },
        brand: {
          yellow: '#FDD901',
          bg: '#F8FAFF',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.55)',
          'light-hover': 'rgba(255, 255, 255, 0.70)',
          dark: 'rgba(17, 22, 64, 0.60)',
          'dark-hover': 'rgba(17, 22, 64, 0.75)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        'glass': '20px',
        'glass-lg': '24px',
        'btn': '14px',
        'icon': '16px',
        'icon-lg': '20px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(4, 57, 217, 0.08)',
        'glass-hover': '0 16px 48px rgba(4, 57, 217, 0.10)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.30)',
        'glass-dark-hover': '0 12px 40px rgba(0, 0, 0, 0.40)',
        'btn-glow': '0 4px 20px rgba(4, 57, 217, 0.40)',
        'btn-glow-hover': '0 8px 30px rgba(4, 57, 217, 0.50)',
        'popular-tag': '0 4px 16px rgba(4, 57, 217, 0.40)',
        'card-featured': '0 8px 32px rgba(4, 57, 217, 0.12), 0 0 0 1px rgba(4, 57, 217, 0.08)',
      },
      backdropBlur: {
        'glass': '16px',
        'navbar': '20px',
      },
      maxWidth: {
        'content': '1200px',
        'text': '38rem',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'orb': 'orb-float 8s ease-in-out infinite',
        'sparkle': 'sparkle-float 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'orb-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.95)' },
        },
        'sparkle-float': {
          '0%': { opacity: '0', transform: 'translateY(0) scale(0.5)' },
          '20%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(-60px) scale(1)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
```

### 15.6 globals.css Template

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import '@fontsource-variable/inter';

:root {
  /* Paste the FULL :root block from Section 4 of this document here */
  /* It contains all color, glass, gradient, and text custom properties */
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--color-background);
  color: var(--color-text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/*
  Scroll reveal animations are handled by Framer Motion (AnimatedSection component).
  No manual .reveal / .visible CSS classes needed.

  CSS @keyframes below are ONLY for continuous infinite-loop animations
  that run independently of scroll position (hero orbs, car float, sparkles).
  These are also defined in tailwind.config.ts — the CSS below is a fallback
  for elements that use raw CSS classes instead of Tailwind utilities.
*/

/* Reduced motion — disables CSS keyframe loops */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 15.7 Deployment (Vercel)

1. Push the project to a GitHub repository
2. Go to vercel.com → New Project → Import the GitHub repo
3. Vercel auto-detects Next.js — no config needed
4. Click Deploy

That's it. Every future `git push` to `main` triggers an automatic redeploy.

**Environment variables:** None needed for the landing page. No API keys, no backend.

**Domain:** After initial deploy, connect the custom domain (`carwash365.com`) in Vercel's dashboard under Project → Settings → Domains.

### 15.8 Future Expansion Notes

When you need additional pages later (FAQ standalone, blog, property-specific pages):
- Add new files to `src/app/` — e.g., `src/app/faq/page.tsx`, `src/app/blog/page.tsx`
- Next.js App Router creates routes automatically from the folder structure
- Shared components (Navbar, Footer) are already in the layout, so new pages get them for free
- No config changes needed — just add the file and deploy

---

## 16. Asset Checklist

### Logo Files (upload to repo)
- [ ] `carwash365_logo.png` — Full logo, transparent bg
- [ ] `carwash365_logo_icon.png` — Icon only, transparent bg
- [ ] `carwash365_logo_white.png` — White version for dark sections
- [ ] Favicons (32x32, 16x16, apple-touch-icon)
- [ ] `og_CarWash365_1200x630.jpg` — OG share image

### Hero Animation Assets
- [ ] SVG car illustration (isometric/3/4 view) OR Lottie JSON
- [ ] SVG sparkle shape (small star/diamond)

### Partner Logos (Social Proof)
- [ ] Alfred
- [ ] AMLI Residential
- [ ] The Hayworth
- [ ] Arabella
- [ ] (Use white/monochrome versions for dark section display)

---

## 17. Do's and Don'ts

### Do
- Use glass/frosted surfaces on EVERY card and container — this is the visual identity
- Keep the hero dark and cinematic — it's the first impression
- Use the Apple easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for scroll reveals
- Let elements breathe — generous padding inside cards, generous gaps between sections
- Make the animated car element the centerpiece of the hero
- Use `backdrop-filter: blur()` consistently — it's what sells the glass effect
- Alternate between dark and light sections for visual rhythm
- Keep border-radius at 20px for cards, 14px for buttons — consistency matters

### Don't
- Don't use flat white cards with simple borders — that's the old design
- Don't use the blue gradient orbs on light sections — save them for the dark hero and CTA
- Don't stack glass on glass (no glass cards inside glass containers)
- Don't make cards smaller than `padding: 32px` — cramped glass looks cheap
- Don't use heavy drop shadows — glass shadows are always soft and diffused
- Don't use serif fonts anywhere
- Don't animate everything at once — stagger reveals, one group at a time
- Don't forget the mesh gradient background on light sections — flat `#F8FAFF` alone looks empty
- Don't put yellow (#FDD901) on anything except tiny accent details
- Don't use `border-radius` below 14px on any glass surface — small radius breaks the frosted look
