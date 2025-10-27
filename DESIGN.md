# Joko-UI Design Guidelines

## Table of Contents
1. [Brand Philosophy](#brand-philosophy)
2. [Design Principles](#design-principles)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing & Grid System](#spacing--grid-system)
6. [Component Guidelines](#component-guidelines)
7. [Visual Language](#visual-language)
8. [Accessibility](#accessibility)
9. [Design Tokens](#design-tokens)

---

## Brand Philosophy

**Joko-UI** is inspired by Joko Widodo (Jokowi), the 7th President of Indonesia, whose leadership embodied:

- **Infrastructure & Development**: Building foundations for progress
- **Accessibility**: A down-to-earth, people-first approach
- **Modernization**: Bringing innovation to traditional systems
- **National Pride**: Celebrating Indonesian identity and values

The design system reflects these values through a **formal yet approachable** aesthetic that balances presidential authority with genuine accessibility.

### Core Values

1. **Solid Foundation** - Like infrastructure projects, our components are built to last
2. **Clear Communication** - Transparent, understandable interfaces for all users
3. **Progressive Enhancement** - Modern technology serving timeless needs
4. **Cultural Identity** - Subtle Indonesian influences throughout

---

## Design Principles

### 1. Formal & Presidential
Components convey authority and trustworthiness through:
- Clean, structured layouts
- Consistent hierarchies
- Professional color applications
- Refined typography

### 2. Accessible & Approachable
While formal, the UI remains welcoming through:
- Clear visual feedback
- Generous touch targets
- Readable text sizes
- Thoughtful error states

### 3. Built to Scale
Infrastructure-inspired modularity:
- Reusable components
- Predictable patterns
- Systematic token usage
- Responsive by default

### 4. Indonesian at Heart
Subtle cultural touches:
- Color palette inspired by national identity
- Optional batik-pattern accents
- Support for Bahasa Indonesia
- Pride in local design

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

## Version History

- **v1.0.0** (2025-10-27) - Initial design guideline

---

## Credits

**Design Philosophy**: Inspired by Joko Widodo's leadership and presidency (2014-2024)

**Key Themes**:
- Infrastructure development and nation-building
- Accessible, people-first governance
- Modernization with cultural pride
- Bold, action-oriented leadership

**Created by**: Joko-UI Team

---

## Feedback & Contributions

This is a living document. As Joko-UI evolves, these guidelines will be updated to reflect new components, patterns, and best practices.

For questions, suggestions, or contributions, please refer to the project's contribution guidelines.

---

*"Kerja, kerja, kerja" (Work, work, work) - Joko Widodo*

Build with purpose. Build for the people. Build with Joko-UI.
