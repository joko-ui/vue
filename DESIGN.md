# Joko-UI Design Guidelines

> "Pemimpin rakyat harus lahir dari rakyat"
> *A leader of the people must be born from the people*
> — Joko Widodo

---

## Table of Contents
1. [Brand Philosophy](#brand-philosophy)
2. [The Four Pillars](#the-four-pillars)
3. [Design Principles](#design-principles)
4. [Color System](#color-system)
5. [Typography](#typography)
6. [Spacing & Grid System](#spacing--grid-system)
7. [Component Guidelines](#component-guidelines)
8. [Visual Language](#visual-language)
8. [Accessibility](#accessibility)
9. [Design Tokens](#design-tokens)
10. [Design Evolution](#design-evolution)

---

## Brand Philosophy

### The Vision

**Joko-UI** is more than a component library—it's a design philosophy rooted in transformative leadership. Just as Joko Widodo (Jokowi), Indonesia's 7th President (2014-2024), built infrastructure that connected islands and elevated millions, this design system builds UI infrastructure that connects users to their goals with dignity and efficiency.

### The Man Behind the System

Jokowi rose from furniture businessman in Solo to become Indonesia's most infrastructure-focused president. His leadership style was unique:

- **Walked among the people** (Blusukan) — unannounced visits to markets, villages, slums
- **Called for mental revolution** (Revolusi Mental) — transforming outdated mindsets
- **Emphasized relentless work** (Kerja, Kerja, Kerja) — his signature campaign slogan
- **Built lasting foundations** — 2,700km toll roads, 366,000km village roads, 43 dams, 50 airports

This wasn't performative politics—it was genuine belief that leaders must understand the people they serve, that Indonesia needed modern thinking, that work speaks louder than words, and that infrastructure unlocks prosperity for generations.

### Design as Infrastructure

> "Infrastructure projects are the vehicle for growth... enhancing competitiveness and connectivity... benefits felt directly by the people" — Jokowi

Just as roads connect cities and bridges span rivers, **design systems connect users to outcomes** and **components bridge intention to action**. Our approach:

- **Build once, benefit many** — Like highways that serve millions, reusable components serve countless users
- **Equitable distribution** — From Java-centric to Indonesia-centric development; from desktop-only to device-agnostic design
- **Long-term thinking** — Roads last decades; our components should too
- **Connectivity** — Components work together seamlessly, like transportation networks

---

## The Four Pillars

Our design system rests on four pillars derived from Jokowi's documented leadership philosophy:

### Pillar 1: Blusukan — Accessibility & Ground-Level Engagement

> "I walked and walked and walked when I was the mayor of Solo... the visits enabled me to have heart-to-heart conversations with the people" — Jokowi

**Blusukan** (Javanese: impromptu visits) was Jokowi's practice of descending with his retinue upon slum neighborhoods or street markets to listen to the wong cilik (small folk). This wasn't observation—it was participation. He'd sit on the ground, share meals, listen without barriers.

**Design Translation:**
- Remove barriers between user and interface
- WCAG 2.1 AA compliance minimum
- Keyboard navigation everywhere
- Screen reader support first-class
- Clear, direct language (no jargon)
- Horizontal leadership (flat component hierarchy)
- Humble aesthetics (sugih tanpa bandha — rich without possessions)

**Visual Metaphor:** The leader walking at ground level, not viewing from above.

---

### Pillar 2: Mental Revolusi — Progressive & Clean Systems

> "Indonesia requires a mental revolution to become a developed country... changing mindset from incompetent, wasteful, slow and corrupt to responsive, simple, competent, and clean"

Jokowi formalized this in **Presidential Instruction No. 12/2016**, defining three values: **Integrity, Work Ethic, Gotong Royong** (mutual cooperation).

**The Challenge:** Most Indonesians had a negative mindset stuck in repressive New Order traditions—corruption, intolerance, greed, law violations, opportunism.

**The Solution:** Transform bureaucracy from serving itself to serving public interests. Modern, clean, competent systems.

**Design Translation:**
- Modern technologies (Vue 3, TypeScript, Composition API)
- Clean code with integrity (well-documented, maintainable)
- Performant & efficient (work ethic in code)
- Composable components (gotong royong — components cooperate)
- Progressive enhancement (modern features, graceful fallbacks)
- Break old UI patterns when they harm UX

**Visual Metaphor:** Old ways discarded, new systems rising—but built on solid values.

---

### Pillar 3: Kerja, Kerja, Kerja — Action & Results

> "To fishermen, meatball sellers, street vendors, academics, military, police, entrepreneurs, and professionals, I call for hard work, shoulder to shoulder, mutual cooperation" — 2014 Inaugural Speech

**Kerja** (Work) wasn't just a slogan—it was a relentless focus on tangible outcomes. Less talk, more action. Measure by results, not rhetoric.

**Design Translation:**
- Action-oriented design (buttons look clickable, forms look fillable)
- Productive defaults (sensible out-of-the-box configuration)
- Clear feedback (loading states, success confirmations, actionable errors)
- Developer velocity (quick install, quick understand, quick implement)
- User efficiency (minimal clicks, reduced cognitive load)
- Results over process (focus on outcomes)

**Visual Metaphor:** Hands working, tools in motion, things getting built.

---

### Pillar 4: Infrastructure — Foundation Building for Generations

> "We sought to enhance our competitiveness through these infrastructure projects, ensuring that their benefits are felt directly by the people"

**The Numbers:** During 2014-2024, Indonesia built 2,432km toll roads, 366,000km village roads, 43 dams, 50 airports, improved from 54th to 27th in global infrastructure ranking. Investment outside Java dominated for the first time (50.1% in 2024 Q1).

**The Philosophy:** Build foundations that last. Think decades, not quarters. Distribute benefits equitably. Connect everything.

**Design Translation:**
- Design token system (single source of truth)
- Semantic versioning & backward compatibility
- Responsive design (works across devices)
- Component composition (pieces connect)
- Maintainable code (others can build on it)
- Documented evolution (migration guides)

**Visual Metaphor:** Bridges connecting, roads extending, foundations deepening.

---

## Design Principles

These principles operationalize the four pillars into concrete design decisions:

### 1. Formal & Presidential (Infrastructure Pillar)
Components convey authority and trustworthiness through:
- Clean, structured layouts — Like well-planned cities
- Consistent hierarchies — Clear organization of power and information
- Professional color applications — Indonesian presidential branding
- Refined typography — Legible, authoritative, modern

**Why:** Presidential authority isn't about intimidation—it's about trustworthiness. Users trust systems that look organized, thoughtful, official.

---

### 2. Accessible & Approachable (Blusukan Pillar)
While formal, the UI remains welcoming through:
- Clear visual feedback — Users always know what happened
- Generous touch targets — 44x44px minimum (WCAG)
- Readable text sizes — 16px minimum, good contrast
- Thoughtful error states — Helpful, not blaming

**Why:** Like Jokowi walking through slums, our UI must work for everyone—the tech-savvy and tech-nervous, the sighted and blind, the mobile user and desktop user.

---

### 3. Built to Scale (Infrastructure Pillar)
Infrastructure-inspired modularity:
- Reusable components — Build once, use everywhere
- Predictable patterns — Learn once, apply everywhere
- Systematic token usage — Change once, update everywhere
- Responsive by default — Works on all devices

**Why:** Infrastructure scales. One highway serves millions. One well-designed button serves thousands of developers and millions of users.

---

### 4. Action-Oriented (Kerja Pillar)
Work, work, work—getting things done:
- Immediate feedback on all interactions
- Loading states that show progress
- Defaults that let you start coding immediately
- Error messages that tell you how to fix issues

**Why:** "Kerja" means don't make users wait wondering. Show them what's happening. Help them accomplish their goals.

---

### 5. Progressive & Clean (Mental Revolusi Pillar)
Modern technology, clean implementation:
- TypeScript for type safety (integrity)
- Vue 3 Composition API (modern patterns)
- Optimized bundles (work ethic in performance)
- Composable architecture (gotong royong)

**Why:** A mental revolution means adopting better ways. We use modern tech not for novelty, but because it genuinely serves users better.

---

### 6. Indonesian at Heart
Subtle cultural touches:
- Color palette inspired by national identity (Merah Putih)
- Names reference Indonesian concepts (Biru Pembangunan)
- Optional batik-pattern accents for special occasions
- Support for Bahasa Indonesia
- Pride in local design heritage

**Why:** Design systems should reflect their cultural context. Indonesian solutions for Indonesian (and global) needs.

---

## Color System

### Primary Colors

Our primary palette draws from Jokowi's campaign branding and Indonesian national identity:

#### Merah Jokowi (Jokowi Red)
**Primary brand color** - Authoritative, passionate, action-oriented

```css
--joko-red-50:  #fef2f2
--joko-red-100: #fee2e2
--joko-red-200: #fecaca
--joko-red-300: #fca5a5
--joko-red-400: #f87171
--joko-red-500: #ef4444  /* Primary */
--joko-red-600: #dc2626  /* Default button state */
--joko-red-700: #b91c1c
--joko-red-800: #991b1b
--joko-red-900: #7f1d1d
--joko-red-950: #450a0a
```

#### Biru Pembangunan (Development Blue)
**Secondary brand color** - Trust, stability, progress

```css
--joko-blue-50:  #eff6ff
--joko-blue-100: #dbeafe
--joko-blue-200: #bfdbfe
--joko-blue-300: #93c5fd
--joko-blue-400: #60a5fa
--joko-blue-500: #3b82f6  /* Primary */
--joko-blue-600: #2563eb  /* Default button state */
--joko-blue-700: #1d4ed8
--joko-blue-800: #1e40af
--joko-blue-900: #1e3a8a
--joko-blue-950: #172554
```

#### Putih Indonesia (Indonesian White)
**Base color** - Cleanliness, clarity, foundation

```css
--joko-white: #ffffff
--joko-white-soft: #fafafa
```

### Neutral Palette

Professional grays for text, borders, and backgrounds:

```css
--joko-neutral-50:  #fafafa
--joko-neutral-100: #f5f5f5
--joko-neutral-200: #e5e5e5
--joko-neutral-300: #d4d4d4
--joko-neutral-400: #a3a3a3
--joko-neutral-500: #737373
--joko-neutral-600: #525252
--joko-neutral-700: #404040
--joko-neutral-800: #262626
--joko-neutral-900: #171717
--joko-neutral-950: #0a0a0a
```

### Semantic Colors

#### Success - Hijau Pertumbuhan (Growth Green)
For positive actions, success states, growth metrics

```css
--joko-success-50:  #f0fdf4
--joko-success-100: #dcfce7
--joko-success-500: #22c55e  /* Primary */
--joko-success-600: #16a34a  /* Default state */
--joko-success-700: #15803d
--joko-success-900: #14532d
```

#### Warning - Kuning Hati-hati (Caution Yellow)
For warnings, important notices, pending states

```css
--joko-warning-50:  #fefce8
--joko-warning-100: #fef9c3
--joko-warning-500: #eab308  /* Primary */
--joko-warning-600: #ca8a04  /* Default state */
--joko-warning-700: #a16207
--joko-warning-900: #713f12
```

#### Error - Merah Bahaya (Danger Red)
For errors, destructive actions, critical alerts

```css
--joko-error-50:  #fef2f2
--joko-error-100: #fee2e2
--joko-error-500: #ef4444  /* Primary */
--joko-error-600: #dc2626  /* Default state */
--joko-error-700: #b91c1c
--joko-error-900: #7f1d1d
```

#### Info - Biru Informasi (Information Blue)
For informational messages, help text

```css
--joko-info-50:  #f0f9ff
--joko-info-100: #e0f2fe
--joko-info-500: #0ea5e9  /* Primary */
--joko-info-600: #0284c7  /* Default state */
--joko-info-700: #0369a1
--joko-info-900: #0c4a6e
```

### Color Usage Guidelines

1. **Primary Actions**: Use Jokowi Red (600) for main CTAs
2. **Secondary Actions**: Use Development Blue (600) for secondary CTAs
3. **Text**:
   - Primary text: neutral-900
   - Secondary text: neutral-600
   - Disabled text: neutral-400
4. **Backgrounds**:
   - Page background: white or neutral-50
   - Card backgrounds: white
   - Hover states: neutral-100
5. **Borders**: neutral-200 (default), neutral-300 (emphasized)

---

## Typography

### Font Families

#### Primary: Inter
Modern, highly readable sans-serif for UI elements

```css
--joko-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
                  Roboto, 'Helvetica Neue', Arial, sans-serif;
```

**Characteristics**:
- Excellent readability at all sizes
- Professional and contemporary
- Wide language support including Indonesian
- Optimized for screens

#### Headings: Poppins (Optional)
For larger headings and display text, adds personality

```css
--joko-font-heading: 'Poppins', 'Inter', sans-serif;
```

**Characteristics**:
- Geometric, modern
- Strong visual presence
- Works well for titles and hero sections

#### Monospace: JetBrains Mono
For code, data, and technical content

```css
--joko-font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

### Type Scale

Based on a 1.25 (Major Third) modular scale:

```css
--joko-text-xs:   0.75rem   /* 12px */
--joko-text-sm:   0.875rem  /* 14px */
--joko-text-base: 1rem      /* 16px - body text default */
--joko-text-lg:   1.125rem  /* 18px */
--joko-text-xl:   1.25rem   /* 20px */
--joko-text-2xl:  1.5rem    /* 24px */
--joko-text-3xl:  1.875rem  /* 30px */
--joko-text-4xl:  2.25rem   /* 36px */
--joko-text-5xl:  3rem      /* 48px */
--joko-text-6xl:  3.75rem   /* 60px */
```

### Font Weights

```css
--joko-font-light:    300
--joko-font-normal:   400
--joko-font-medium:   500
--joko-font-semibold: 600
--joko-font-bold:     700
--joko-font-extrabold: 800
```

### Line Heights

```css
--joko-leading-none:    1
--joko-leading-tight:   1.25
--joko-leading-snug:    1.375
--joko-leading-normal:  1.5    /* Body text default */
--joko-leading-relaxed: 1.625
--joko-leading-loose:   2
```

### Typography Usage

#### Headings
```css
h1: 3xl-4xl, font-heading, bold, leading-tight
h2: 2xl-3xl, font-heading, semibold, leading-tight
h3: xl-2xl, font-heading, semibold, leading-snug
h4: lg-xl, font-sans, semibold, leading-snug
h5: base-lg, font-sans, medium, leading-normal
h6: base, font-sans, medium, leading-normal
```

#### Body Text
```css
Body Large: lg, font-sans, normal, leading-relaxed
Body Default: base, font-sans, normal, leading-normal
Body Small: sm, font-sans, normal, leading-normal
Caption: xs, font-sans, normal, leading-normal
```

#### Special Text
```css
Label: sm-base, font-sans, medium, leading-normal, uppercase, tracking-wider
Code: sm-base, font-mono, normal, leading-normal
```

---

## Spacing & Grid System

### Base Unit

All spacing follows an **8px base unit** for consistency:

```css
--joko-space-0:  0
--joko-space-1:  0.25rem  /* 4px */
--joko-space-2:  0.5rem   /* 8px - base unit */
--joko-space-3:  0.75rem  /* 12px */
--joko-space-4:  1rem     /* 16px */
--joko-space-5:  1.25rem  /* 20px */
--joko-space-6:  1.5rem   /* 24px */
--joko-space-8:  2rem     /* 32px */
--joko-space-10: 2.5rem   /* 40px */
--joko-space-12: 3rem     /* 48px */
--joko-space-16: 4rem     /* 64px */
--joko-space-20: 5rem     /* 80px */
--joko-space-24: 6rem     /* 96px */
--joko-space-32: 8rem     /* 128px */
```

### Container Widths

```css
--joko-container-sm:  640px
--joko-container-md:  768px
--joko-container-lg:  1024px
--joko-container-xl:  1280px
--joko-container-2xl: 1536px
```

### Breakpoints

Mobile-first responsive design:

```css
--joko-screen-sm:  640px   /* Tablets */
--joko-screen-md:  768px   /* Small laptops */
--joko-screen-lg:  1024px  /* Desktops */
--joko-screen-xl:  1280px  /* Large desktops */
--joko-screen-2xl: 1536px  /* Extra large screens */
```

### Grid System

12-column grid with configurable gutters:

```css
--joko-grid-columns: 12
--joko-grid-gap: var(--joko-space-6)  /* 24px default */
```

### Component Spacing Guidelines

- **Card padding**: space-6 (24px)
- **Button padding**: space-3 space-6 (12px 24px)
- **Input padding**: space-3 space-4 (12px 16px)
- **Section spacing**: space-16 to space-24 (64px-96px)
- **Element margin**: space-4 to space-6 (16px-24px)

---

## Component Guidelines

### Buttons

Buttons are the primary interaction points, designed to feel solid and trustworthy.

#### Variants

**1. Primary (Jokowi Red)**
- Default state: red-600 background, white text
- Hover: red-700 background
- Active: red-800 background
- Disabled: neutral-300 background, neutral-500 text
- Usage: Main CTAs, primary actions

**2. Secondary (Development Blue)**
- Default state: blue-600 background, white text
- Hover: blue-700 background
- Active: blue-800 background
- Disabled: neutral-300 background, neutral-500 text
- Usage: Secondary actions, alternative paths

**3. Outline**
- Default state: transparent background, red-600 border, red-600 text
- Hover: red-50 background
- Active: red-100 background
- Usage: Tertiary actions, cancel buttons

**4. Ghost**
- Default state: transparent background, neutral-700 text
- Hover: neutral-100 background
- Active: neutral-200 background
- Usage: Low-priority actions, navigation

**5. Link**
- Default state: transparent background, blue-600 text
- Hover: blue-700 text, underline
- Usage: Inline actions, text links

#### Sizes

```css
xs:   text-xs, px-3 py-1.5, rounded-md
sm:   text-sm, px-4 py-2, rounded-md
md:   text-base, px-6 py-3, rounded-lg   /* Default */
lg:   text-lg, px-8 py-4, rounded-lg
xl:   text-xl, px-10 py-5, rounded-xl
```

#### States

- **Default**: Base appearance
- **Hover**: Slightly darker background, subtle scale (1.02)
- **Active/Pressed**: Darker background, slight scale down (0.98)
- **Focus**: 2px outline in primary color with offset
- **Disabled**: Reduced opacity (0.6), no pointer events
- **Loading**: Spinner icon, disabled state, "Processing..." text

#### Best Practices

- Use Primary sparingly for main conversion actions
- Group related buttons with consistent spacing (space-4)
- Full-width buttons on mobile for better touch targets
- Icon + text buttons should have space-2 gap
- Minimum touch target: 44x44px (WCAG guidelines)

---

### Forms

Forms should feel professional and guide users clearly through input.

#### Input Fields

**Text Input**
```css
Base:
- Border: 1px solid neutral-300
- Background: white
- Padding: space-3 space-4
- Border radius: rounded-lg
- Font: text-base

States:
- Focus: blue-500 border (2px), blue-50 background, outline ring
- Error: error-500 border, error-50 background
- Disabled: neutral-100 background, neutral-400 text
- Success: success-500 border, success-50 background
```

**Textarea**
Same as text input, minimum height: 120px

**Select**
- Chevron icon on right
- Same styling as text input
- Dropdown: white background, neutral-200 border, shadow-lg

#### Labels

```css
- Font: text-sm, font-medium
- Color: neutral-700
- Margin bottom: space-2
- Required indicator: red-600 asterisk
```

#### Helper Text

```css
- Font: text-sm
- Color: neutral-600 (default), error-600 (error), success-600 (success)
- Margin top: space-2
```

#### Checkboxes & Radio Buttons

```css
Size: 20x20px
Border: 2px solid neutral-400
Checked: red-600 background, white checkmark/dot
Focus: blue-500 outline ring
```

#### Form Layout

- Stack labels above inputs (mobile-friendly)
- Space between fields: space-6
- Group related fields with fieldset
- Error messages appear below field immediately on blur

---

### Cards

Cards are containers that group related content, inspired by building blocks of infrastructure.

#### Base Card

```css
Background: white
Border: 1px solid neutral-200
Border radius: rounded-xl (12px)
Padding: space-6 (24px)
Shadow: shadow-sm
```

#### Variants

**1. Elevated**
```css
Border: none
Shadow: shadow-lg
Hover: shadow-xl, subtle lift (translateY(-2px))
```

**2. Outlined**
```css
Border: 2px solid neutral-300
Shadow: none
```

**3. Interactive**
```css
Base: Elevated variant
Hover: shadow-xl, scale-102, cursor-pointer
Active: shadow-md, scale-100
```

#### Card Sections

**Header**
- Padding: space-6
- Border bottom: 1px solid neutral-200
- Typography: text-xl, font-semibold

**Body**
- Padding: space-6

**Footer**
- Padding: space-6
- Border top: 1px solid neutral-200
- Background: neutral-50 (optional)

---

### Alerts & Notifications

Alerts communicate important information clearly and accessibly.

#### Variants

**Success Alert**
```css
Background: success-50
Border-left: 4px solid success-600
Icon color: success-600
Text color: success-900
```

**Warning Alert**
```css
Background: warning-50
Border-left: 4px solid warning-600
Icon color: warning-600
Text color: warning-900
```

**Error Alert**
```css
Background: error-50
Border-left: 4px solid error-600
Icon color: error-600
Text color: error-900
```

**Info Alert**
```css
Background: info-50
Border-left: 4px solid info-600
Icon color: info-600
Text color: info-900
```

#### Structure

- Icon (24x24px) on left
- Title (text-base, font-semibold)
- Description (text-sm)
- Optional close button
- Optional action button(s)
- Padding: space-4

---

### Navigation

#### Top Navigation Bar

```css
Height: 64px (mobile), 72px (desktop)
Background: white
Border bottom: 1px solid neutral-200
Shadow: shadow-sm
Padding: space-4 space-6
```

**Layout**:
- Logo/Brand (left)
- Navigation links (center on desktop)
- User actions (right)
- Mobile: Hamburger menu

#### Sidebar Navigation

```css
Width: 280px
Background: neutral-50
Border right: 1px solid neutral-200
```

**Nav Items**:
```css
Padding: space-3 space-4
Border radius: rounded-lg
Default: transparent, neutral-700 text
Hover: neutral-100 background
Active: red-50 background, red-700 text, red-600 left border (4px)
Icon + text spacing: space-3
```

#### Breadcrumbs

```css
Font: text-sm
Color: neutral-600
Separator: "/" or chevron icon
Active item: neutral-900, font-medium
Spacing: space-2 between items
```

---

### Badges & Tags

Small components for labels, statuses, and categories.

#### Badge

```css
Font: text-xs, font-medium, uppercase, tracking-wide
Padding: space-1 space-3
Border radius: rounded-full
```

**Variants**:
- Primary: red-100 background, red-800 text
- Success: success-100 background, success-800 text
- Warning: warning-100 background, warning-800 text
- Error: error-100 background, error-800 text
- Neutral: neutral-100 background, neutral-800 text

#### Tag

```css
Font: text-sm, font-normal
Padding: space-2 space-3
Border radius: rounded-md
Border: 1px solid neutral-300
Background: white
Removable: X icon on right
```

---

### Modals & Dialogs

Modals interrupt workflow for important decisions or information.

#### Structure

**Overlay**
```css
Background: rgba(0, 0, 0, 0.5)
Backdrop filter: blur(4px)
```

**Modal Container**
```css
Background: white
Border radius: rounded-2xl
Max width: 500px (small), 768px (medium), 1024px (large)
Shadow: shadow-2xl
Padding: space-8
```

**Modal Header**
```css
Title: text-2xl, font-semibold, neutral-900
Close button: top-right, ghost button
Margin bottom: space-6
```

**Modal Body**
```css
Text: text-base, neutral-700
Max height: 60vh (scrollable if needed)
```

**Modal Footer**
```css
Margin top: space-8
Buttons: right-aligned, space-4 gap
Border top: 1px solid neutral-200, padding-top: space-6
```

#### Animation

- Fade in overlay (200ms)
- Scale + fade in modal (300ms, ease-out)
- Exit: reverse animation (200ms)

---

### Loading States

#### Spinner

```css
Border: 3px solid neutral-200
Border-top-color: red-600
Border radius: rounded-full
Animation: spin 1s linear infinite

Sizes:
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
```

#### Skeleton Loader

```css
Background: neutral-200
Animation: pulse (shimmer effect)
Border radius: matches content (rounded-lg for cards, etc.)
```

#### Progress Bar

```css
Container:
- Height: 8px
- Background: neutral-200
- Border radius: rounded-full

Fill:
- Background: gradient(red-600 to red-400)
- Border radius: rounded-full
- Transition: width 300ms ease
```

---

### Data Display

#### Tables

**Table Container**
```css
Border: 1px solid neutral-200
Border radius: rounded-xl
Overflow: hidden
```

**Table Header**
```css
Background: neutral-50
Border bottom: 2px solid neutral-300
Font: text-sm, font-semibold, uppercase, tracking-wide
Color: neutral-700
Padding: space-4
```

**Table Row**
```css
Border bottom: 1px solid neutral-200
Hover: neutral-50 background
Padding: space-4
```

**Table Cell**
```css
Font: text-base
Color: neutral-900
Padding: space-4
Vertical align: middle
```

#### Lists

**Unordered/Ordered**
```css
Margin: space-4 0
Padding-left: space-6
Li spacing: space-2
Color: neutral-700
```

**Description List**
```css
dt: font-semibold, neutral-900, margin-bottom: space-2
dd: neutral-700, margin-bottom: space-4
```

---

## Visual Language

### Icons

**Icon System**: Use a consistent icon family (recommended: Heroicons, Lucide, or Phosphor)

**Sizing**:
```css
--joko-icon-xs:  12px
--joko-icon-sm:  16px
--joko-icon-md:  20px
--joko-icon-lg:  24px
--joko-icon-xl:  32px
--joko-icon-2xl: 48px
```

**Style**:
- Stroke-based (2px stroke width)
- Rounded corners
- Consistent visual weight

**Usage**:
- Always pair icons with text for clarity
- Use semantic icons (trash for delete, plus for add)
- Color matches text color in context

### Illustrations

**Style Guidelines**:
- **Infrastructure themes**: Buildings, bridges, roads, development projects
- **Flat design**: Minimal shadows, clean shapes
- **Color usage**: Primary palette (reds, blues), accent with neutrals
- **Cultural touches**: Subtle Indonesian architectural elements

**Use cases**:
- Empty states
- Error pages (404, 500)
- Onboarding flows
- Hero sections

### Imagery

**Photography style**:
- High-quality, professional
- People-focused when possible (reflecting Jokowi's people-first approach)
- Infrastructure and development themes
- Indonesian settings and subjects
- Natural lighting, authentic moments

**Image treatments**:
```css
Border radius: rounded-xl
Aspect ratios: 16:9 (landscape), 4:3 (standard), 1:1 (square), 9:16 (portrait)
Overlay for text: rgba(0, 0, 0, 0.4) to rgba(0, 0, 0, 0.6)
```

### Patterns

**Batik-inspired patterns** (optional, for special occasions):
- Use as subtle backgrounds (opacity: 0.05-0.1)
- Geometric interpretations of traditional patterns
- Colors: single-color (neutral-900 or red-600)
- Usage: hero sections, decorative elements, special events

---

## Accessibility

Joko-UI is committed to WCAG 2.1 Level AA compliance.

### Color Contrast

**Minimum contrast ratios**:
- Normal text (< 18pt): 4.5:1
- Large text (≥ 18pt or ≥ 14pt bold): 3:1
- UI components and graphics: 3:1

**Tested combinations**:
- ✅ red-600 on white: 4.85:1
- ✅ blue-600 on white: 5.12:1
- ✅ neutral-900 on white: 16.2:1
- ✅ neutral-700 on white: 7.8:1

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Visible focus indicators (outline ring)
- Logical tab order
- Skip links for main content
- Escape key closes modals/dropdowns

### Screen Readers

- Semantic HTML elements
- ARIA labels where needed
- Alt text for all images
- Form labels properly associated
- Live regions for dynamic content

### Touch Targets

- Minimum size: 44x44px
- Spacing between targets: 8px minimum
- Larger targets on mobile

### Motion & Animation

- Respect `prefers-reduced-motion`
- Optional animations only
- No auto-playing videos
- Pause/stop controls for moving content

---

## Design Tokens

### Token Architecture

Design tokens should be organized in three tiers:

**1. Primitive Tokens** (base values)
```css
/* Colors */
--primitive-red-600: #dc2626;
--primitive-blue-600: #2563eb;
/* Spacing */
--primitive-space-4: 1rem;
/* etc. */
```

**2. Semantic Tokens** (meaning-based)
```css
/* Purpose-driven */
--color-primary: var(--primitive-red-600);
--color-action-primary: var(--primitive-red-600);
--color-text-body: var(--primitive-neutral-900);
--spacing-component: var(--primitive-space-6);
```

**3. Component Tokens** (component-specific)
```css
/* Component overrides */
--button-primary-bg: var(--color-action-primary);
--button-padding-x: var(--primitive-space-6);
--card-padding: var(--spacing-component);
```

### Implementation

**CSS Variables**
```css
:root {
  /* All tokens defined here */
}

[data-theme="dark"] {
  /* Dark mode overrides */
}
```

**Vue Composables (Recommended)**
```typescript
// useDesignTokens.ts
export const useDesignTokens = () => {
  const colors = {
    primary: {
      50: '#fef2f2',
      // ... all shades
      600: '#dc2626',
    },
    // ... all color systems
  }

  const spacing = {
    0: '0',
    1: '0.25rem',
    // ... all spacing values
  }

  return { colors, spacing, /* ... other tokens */ }
}
```

---

## Getting Started

### For Designers

1. **Review** this design guideline thoroughly
2. **Use** the color palette and spacing system in your designs
3. **Reference** component specifications for detailed styling
4. **Export** design tokens from Figma/Sketch for developer handoff
5. **Test** designs for accessibility (contrast, touch targets)

### For Developers

1. **Implement** design tokens as CSS variables or Vue composables
2. **Build** components following specifications in this guide
3. **Test** for accessibility compliance
4. **Document** component props and usage
5. **Contribute** improvements back to the design system

### File Structure (Recommended)

```
src/
├── styles/
│   ├── tokens/
│   │   ├── colors.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   └── index.css
│   ├── components/
│   │   ├── button.css
│   │   ├── card.css
│   │   └── ...
│   └── base.css
├── components/
│   ├── Button/
│   │   ├── Button.vue
│   │   ├── Button.test.ts
│   │   └── index.ts
│   └── ...
└── composables/
    └── useDesignTokens.ts
```

---

## Design Evolution

### How This System Grows

Like Indonesia's infrastructure development—which moved from Java-centric to equitable distribution across all islands—this design system must evolve thoughtfully, serving more users while maintaining its core philosophy.

### Evolution Principles

**1. Preserve the Foundation (Infrastructure Pillar)**
- Breaking changes require major version bumps
- Deprecated features get migration guides
- Design tokens remain backward compatible within major versions
- Core philosophy stays constant even as implementation evolves

**2. Listen to Users (Blusukan Pillar)**
- Feature requests come from real user needs, not trends
- Accessibility improvements take priority
- Pain points get addressed before new features
- Community feedback shapes direction

**3. Adopt Better Ways (Mental Revolusi Pillar)**
- Embrace new technologies when they solve real problems
- Refactor without fear when it improves maintainability
- Performance improvements are always welcome
- Clean up technical debt progressively

**4. Work Incrementally (Kerja Pillar)**
- Small, frequent releases over large, rare ones
- Each component ships when it's ready, not on arbitrary timelines
- Measure success by user outcomes, not feature counts
- Document as you build, not after

### Roadmap Philosophy

**We Don't Have a Fixed Roadmap** — Like Jokowi's infrastructure planning, which responded to on-the-ground needs:

> "We prioritize infrastructure projects based on connectivity needs and regional equity, not political considerations"

**Instead, we have priorities:**

1. **Complete the Core** — Essential components (Button, Input, Form, Modal, etc.)
2. **Enhance Accessibility** — Continuous improvement toward WCAG AAA where possible
3. **Improve Developer Experience** — Better documentation, more examples, clearer errors
4. **Expand Thoughtfully** — New components only when they serve genuine needs

### Contributing to Evolution

**Proposing New Components:**
- Show real use case
- Explain how it aligns with the four pillars
- Provide examples from other systems
- Consider if existing components could be extended instead

**Proposing Changes:**
- Describe the problem clearly
- Show how current solution fails users
- Propose solution aligned with philosophy
- Consider backward compatibility

**Philosophy Check:**
- ✅ **Blusukan:** Does this make the system more accessible?
- ✅ **Mental Revolusi:** Does this modernize without breaking trust?
- ✅ **Kerja:** Does this help users get things done faster?
- ✅ **Infrastructure:** Does this build on solid foundations?

---

## Version History

- **v1.0.0** (2025) - Initial release with core components (JButton, JAlert, JBadge)

---

## Credits

**Design Philosophy**: Inspired by Joko Widodo's leadership and presidency (2014-2024)

**Key Achievements Referenced**:
- 2,432km toll roads connecting major cities
- 366,000km village roads bringing equitable development
- 43 dams improving water management
- 50 new airports and ports enhancing connectivity
- Infrastructure ranking improvement: 54th → 27th globally

**Core Leadership Principles**:
- Blusukan — Ground-level engagement, listening to the people
- Mental Revolusi — Progressive thinking, clean systems, mutual cooperation
- Kerja, Kerja, Kerja — Action-oriented, results-focused leadership
- Infrastructure Building — Foundations that last generations

**Created by**: Joko-UI Team

---

## Feedback & Contributions

This is a living document. As Joko-UI evolves, these guidelines will be updated to reflect new components, patterns, and best practices.

Just as Jokowi's infrastructure projects responded to feedback from regions and communities, this design system responds to feedback from developers and users.

### Related Documents
- [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) — Comprehensive brand identity guide
- [DESIGN_PRINCIPLES.md](./DESIGN_PRINCIPLES.md) — Decision-making framework for UX/UI
- [TOKENS.md](./TOKENS.md) — Complete design token reference

For questions, suggestions, or contributions, please refer to the project's contribution guidelines.

---

<div align="center">

*"Kerja, kerja, kerja" (Work, work, work) — Joko Widodo*

**Build with purpose. Build for the people. Build with Joko-UI.**

</div>
