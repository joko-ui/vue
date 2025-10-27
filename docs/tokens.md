# Design Tokens

Design tokens are the foundation of Joko-UI's visual language—the primitive values that ensure consistency across all components.

**[→ View Complete Token Reference](https://github.com/yourusername/joko-ui/blob/main/TOKENS.md)**

---

## What Are Design Tokens?

Design tokens are named variables that store visual design decisions. Instead of hard-coding values like `#dc2626` or `16px`, we use semantic names like `--joko-red-600` or `--joko-space-4`.

### Why Tokens Matter

> "Like infrastructure connecting islands, design tokens connect all visual elements in a consistent system"

- **Consistency** — Change once, update everywhere
- **Scalability** — Add dark mode or themes easily
- **Maintainability** — Semantic names explain purpose
- **Efficiency** — Developers work faster with clear patterns

---

## Quick Reference

### Most Commonly Used Tokens

#### Colors

```css
/* Primary Actions */
--joko-red-600: #dc2626;       /* Buttons, important elements */
--joko-blue-600: #2563eb;      /* Links, secondary actions */

/* Text */
--joko-neutral-900: #171717;   /* Primary text */
--joko-neutral-600: #525252;   /* Secondary text */
--joko-neutral-400: #a3a3a3;   /* Disabled text */

/* Backgrounds */
--joko-white: #ffffff;         /* Card backgrounds */
--joko-neutral-50: #fafafa;    /* Page backgrounds */
--joko-neutral-100: #f5f5f5;   /* Hover states */
```

#### Spacing

```css
/* Based on 8px grid */
--joko-space-2: 0.5rem;   /* 8px - tight spacing */
--joko-space-4: 1rem;     /* 16px - default spacing */
--joko-space-6: 1.5rem;   /* 24px - component padding */
--joko-space-8: 2rem;     /* 32px - section spacing */
```

#### Typography

```css
/* Font Families */
--joko-font-sans: 'Inter', sans-serif;
--joko-font-heading: 'Poppins', 'Inter', sans-serif;
--joko-font-mono: 'JetBrains Mono', monospace;

/* Sizes */
--joko-text-sm: 0.875rem;  /* 14px */
--joko-text-base: 1rem;     /* 16px - default */
--joko-text-lg: 1.125rem;   /* 18px */
--joko-text-xl: 1.25rem;    /* 20px */
```

#### Border Radius

```css
--joko-rounded-md: 0.375rem;  /* 6px - small elements */
--joko-rounded-lg: 0.5rem;    /* 8px - default */
--joko-rounded-xl: 0.75rem;   /* 12px - cards */
--joko-rounded-full: 9999px;  /* Fully rounded */
```

---

## Usage Examples

### In Components

```vue
<template>
  <div class="custom-card">
    <h3>Card Title</h3>
    <p>Card content goes here</p>
  </div>
</template>

<style scoped>
.custom-card {
  /* Colors */
  background: var(--joko-white);
  border: 1px solid var(--joko-neutral-200);

  /* Spacing */
  padding: var(--joko-space-6);
  margin-bottom: var(--joko-space-4);

  /* Border Radius */
  border-radius: var(--joko-rounded-lg);

  /* Shadow */
  box-shadow: var(--joko-shadow-md);
}

.custom-card h3 {
  /* Typography */
  font-family: var(--joko-font-heading);
  font-size: var(--joko-text-xl);
  font-weight: var(--joko-font-semibold);
  color: var(--joko-neutral-900);
  margin-bottom: var(--joko-space-3);
}

.custom-card p {
  color: var(--joko-neutral-700);
  line-height: var(--joko-leading-normal);
}
</style>
```

### Benefits of This Approach

✅ **Themeable** — Override tokens for dark mode or custom themes
✅ **Consistent** — All cards use same spacing and colors
✅ **Maintainable** — Change `--joko-space-6` once, all cards update
✅ **Semantic** — Names explain purpose, not just values

---

## Token Categories

The complete token system includes:

### Colors
- **Primary palette** (Red, Blue)
- **Semantic colors** (Success, Warning, Error, Info)
- **Neutral scale** (Grays from white to black)

### Typography
- **Font families** (Sans, Heading, Mono)
- **Type scale** (xs to 6xl)
- **Font weights** (Light to Extrabold)
- **Line heights** (None to Loose)

### Spacing
- **Space scale** (0 to 32, based on 8px grid)
- **Container widths** (sm to 2xl)
- **Breakpoints** (Responsive design)

### Shadows
- **Elevation system** (sm to 2xl)
- **Consistent depth** across components

### Borders
- **Border radius scale** (md to full)
- **Border widths** (Consistent stroke weights)

### Transitions
- **Durations** (Fast, Base, Slow)
- **Easing functions** (In, Out, In-Out)

---

## Complete Reference

For the full token reference including all shades, sizes, and usage guidelines:

**[→ View Complete Token Documentation](https://github.com/yourusername/joko-ui/blob/main/TOKENS.md)**

The complete reference includes:
- All color scales (50-950 shades)
- Complete spacing system
- Typography specifications
- Shadow values
- Transition timings
- Usage recommendations

---

## Philosophy

> "Infrastructure serves everyone, everywhere. Design tokens serve every component, every page."

Like Jokowi's infrastructure projects that used consistent standards across thousands of kilometers, design tokens ensure consistency across thousands of components. They are the foundation that makes the entire system work together seamlessly.

---

## Related Documents

- **[Philosophy](/philosophy)** — Understanding the four pillars
- **[Design Principles](/design-principles)** — How to use tokens in decisions
- **[Brand Guidelines](/brand-guidelines)** — Complete visual identity system
- **[Components](/components/)** — See tokens in action
