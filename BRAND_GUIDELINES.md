# Joko-UI Brand Guidelines

**Version 1.0 | 2025**

> "Pemimpin rakyat harus lahir dari rakyat"
> *A leader of the people must be born from the people*
> — Joko Widodo

---

## Table of Contents

1. [Brand Philosophy](#brand-philosophy)
2. [Visual Identity](#visual-identity)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Voice & Tone](#voice--tone)
6. [Usage Guidelines](#usage-guidelines)
7. [Digital Applications](#digital-applications)

---

## Brand Philosophy

### The Foundation: Jokowi's Leadership Principles

Joko-UI is not just a component library—it's a design philosophy rooted in the transformative leadership of Indonesia's 7th President, Joko Widodo (2014-2024). Our design system embodies four core principles that defined his presidency:

#### 1. **Blusukan** — Ground-Level Engagement
*Javanese: "impromptu visits to connect with ordinary people"*

**Leadership Principle:**
> "I walked and walked and walked... the visits enabled me to have heart-to-heart conversations with the people" — Jokowi

**Design Translation:**
- **Accessibility First**: Every component must be WCAG 2.1 AA compliant
- **Direct Communication**: Clear, unambiguous prop names and documentation
- **Horizontal Leadership**: Flat component hierarchy, no unnecessary nesting
- **Servant Design**: Components serve developers, not the other way around
- **Humble Aesthetics**: No flashy effects that distract from content (sugih tanpa bandha)

**In Practice:**
- Components have obvious, predictable APIs
- Documentation starts with simple examples, not complex theory
- Error messages are helpful, not technical
- Keyboard navigation works everywhere
- Screen readers receive proper context

---

#### 2. **Mental Revolusi** — Mental Revolution
*Presidential Instruction No. 12/2016: Integrity, Work Ethic, Gotong Royong*

**Leadership Principle:**
> "Indonesia requires a mental revolution to become a developed country... changing mindset from incompetent, wasteful, slow and corrupt to responsive, simple, competent, and clean"

**Design Translation:**
- **Progressive Enhancement**: Build for the future while supporting the present
- **Break Old Patterns**: Challenge outdated UI conventions when they harm UX
- **Integrity in Code**: Clean, maintainable, well-documented source code
- **Responsive Systems**: Fast load times, efficient rendering, optimized bundles
- **Gotong Royong (Mutual Cooperation)**: Composable components that work together seamlessly

**In Practice:**
- TypeScript for type safety and integrity
- Tree-shakeable exports for performance
- Modern Vue 3 Composition API
- Composable patterns over monolithic components
- Progressive complexity (simple defaults, advanced options available)

---

#### 3. **Kerja, Kerja, Kerja** — Work, Work, Work
*The 2014-2024 administration motto*

**Leadership Principle:**
> "Hard work, shoulder to shoulder, mutual cooperation... momentum for all of us to move together"

**Design Translation:**
- **Action-Oriented Design**: Buttons look clickable, forms look fillable
- **Get Things Done**: No unnecessary steps or cognitive overhead
- **Productive Defaults**: Sensible configuration out of the box
- **Developer Velocity**: Quick to install, quick to understand, quick to implement
- **Results Over Process**: Focus on user outcomes, not technical showmanship

**In Practice:**
- One-line imports
- Minimal required props
- Smart defaults for 80% use cases
- Loading states and feedback built-in
- Comprehensive examples in documentation

---

#### 4. **Infrastructure & Foundation Building**
*2,700km toll roads, 366,000km village roads, 43 dams — Building for generations*

**Leadership Principle:**
> "Infrastructure projects are the vehicle for growth... enhancing competitiveness and connectivity... benefits felt directly by the people"

**Design Translation:**
- **Solid Foundations**: Robust design token system
- **Long-Term Thinking**: Semantic versioning, backward compatibility
- **Equitable Distribution**: Works across devices, browsers, screen sizes
- **Connectivity**: Components communicate through events and context
- **Competitive Edge**: Performance and DX on par with global UI libraries

**In Practice:**
- Design tokens provide single source of truth
- Versioned releases with migration guides
- Mobile-first responsive design
- Event-driven architecture for component communication
- Benchmarked performance against industry leaders

---

## Visual Identity

### Logo & Name

**Joko-UI** should always be written with:
- Capital "J"
- Lowercase "oko"
- Hyphen
- Capital "UI"

**Component Prefix:** All components use the `J` prefix (JButton, JAlert, JBadge)

**Pronunciation:**
- **Joko-UI** is pronounced /ˈdʒɔː.kɔ/ — like "Jokowi" (JO-ko, rhyming with "cocoa")
- **NOT** "yo-ko" or "jah-ko"
- The pronunciation honors **Joko Widodo's** name, where "Jokowi" is a combination of "Joko" and "Widodo"
- Maintain consistent pronunciation in presentations, videos, and spoken communication

**Rationale:**
- Honors "Joko" (the given name, showing respect and familiarity)
- "-UI" clearly denotes it's a user interface library
- Single-letter prefix prevents naming conflicts and maintains brevity

### Visual Motifs

**Primary Motifs:**
1. **Roads & Bridges** — Representing infrastructure and connectivity
2. **Village & City** — Representing equitable distribution (Java-centric → Indonesia-centric)
3. **Hands Joined** — Representing gotong royong (mutual cooperation)
4. **Forward Arrow** — Representing progress and work ethic

**Usage in Documentation:**
- Hero sections can feature subtle road/bridge patterns
- Section dividers can use connectivity motifs
- Success states can reference building/construction metaphors
- Navigation can use pathway/journey metaphors

---

## Color System

### The Philosophy of Color

Our color palette tells the story of Indonesia's transformation:

#### Primary: Merah Presiden (Presidential Red)
**#dc2626** (red-600)

- **Symbolism**: Authority, action, passion, transformation
- **Usage**: Primary buttons, active states, key CTAs, important alerts
- **Accessibility**: Meets WCAG AA against white backgrounds
- **Cultural Context**: Red of the Indonesian flag (Merah Putih)

#### Secondary: Biru Pembangunan (Development Blue)
**#2563eb** (blue-600)

- **Symbolism**: Trust, stability, progress, infrastructure
- **Usage**: Secondary actions, informational elements, links, headers
- **Accessibility**: Meets WCAG AA standards
- **Cultural Context**: Blue of Indonesian waters connecting thousands of islands

#### Semantic Colors

**Success** — Green shades represent growth, food security, prosperity
**Warning** — Amber shades represent caution and careful planning
**Error** — Red shades represent problems requiring attention
**Neutral** — Gray scale represents pragmatic, balanced governance

### Color Scales

Each color has a 50-900 scale following Tailwind conventions:
- **50-100**: Subtle backgrounds
- **200-300**: Hover states, borders
- **400-600**: Primary usage (600 is default)
- **700-800**: Active states, emphasis
- **900**: Maximum contrast, headers

### Accessibility Requirements

**All color combinations must:**
- Meet WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text)
- Work with both light and dark modes
- Provide non-color indicators (icons, text) for critical information
- Support colorblind users

---

## Typography

### Font Philosophy

**Primary Font: Inter**
- **Rationale**: Clean, modern, highly legible, excellent at small sizes
- **Usage**: UI components, body text, labels, form inputs
- **Characteristics**: Neutral, professional, accessible

**Heading Font: Poppins**
- **Rationale**: Geometric, bold, confident, slightly warmer than Inter
- **Usage**: Page headers, section titles, marketing copy
- **Characteristics**: Authoritative yet approachable

**Monospace: JetBrains Mono**
- **Rationale**: Designed for code, excellent readability
- **Usage**: Code blocks, technical documentation, API references
- **Characteristics**: Clear, distinctive, developer-friendly

### Type Scale

Following an 8px base unit system:

| Token | Size | Usage |
|-------|------|-------|
| `text-xs` | 12px | Captions, helper text |
| `text-sm` | 14px | Secondary UI text |
| `text-base` | 16px | Body text (default) |
| `text-lg` | 18px | Emphasized text |
| `text-xl` | 20px | Small headings |
| `text-2xl` | 24px | Section headings |
| `text-3xl` | 30px | Page headings |
| `text-4xl` | 36px | Hero headings |

### Font Weights

| Token | Weight | Usage |
|-------|--------|-------|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Subtle emphasis |
| `font-semibold` | 600 | Buttons, labels |
| `font-bold` | 700 | Headings |

---

## Voice & Tone

### Brand Voice Attributes

Our communication embodies Jokowi's leadership style:

1. **Direct & Clear** (Blusukan)
   - No jargon or corporate speak
   - Say what you mean
   - Short sentences, active voice

2. **Action-Oriented** (Kerja, Kerja, Kerja)
   - Use verbs and imperatives
   - Focus on what users can DO
   - Examples over explanations

3. **Progressive Yet Humble** (Mental Revolusi)
   - Confident but not arrogant
   - Modern but not trendy
   - Innovative but not disruptive for disruption's sake

4. **Practical & Long-Term** (Infrastructure)
   - Solutions that last
   - Think about maintenance
   - Real-world examples

### Writing Examples

**✅ DO:**
- "Click to submit your form"
- "This button triggers the save action"
- "Get started in 3 steps"
- "Built to last, easy to maintain"

**❌ DON'T:**
- "Leverage our synergistic components"
- "Paradigm-shifting UI experiences"
- "Disruptive design patterns"
- "Next-generation ecosystem"

### Documentation Tone

- **Tutorials**: Encouraging, step-by-step, "Let's build together"
- **Reference**: Precise, complete, "Here's everything you need"
- **Examples**: Practical, real-world, "Here's how others use it"
- **Error Messages**: Helpful, actionable, "Here's what went wrong and how to fix it"

---

## Usage Guidelines

### Component Naming

**Pattern:** `J` + `ComponentName`

**Examples:**
- ✅ `JButton`, `JAlert`, `JBadge`
- ❌ `Button`, `JokoButton`, `Btn`

**Internal Files:**
- Component files: `JComponentName.vue`
- Story files: `JComponentName.stories.ts`
- Test files: `JComponentName.spec.ts`

### Prop Naming

**Principles:**
- Clear over short
- Predictable over clever
- Boolean props start with `is` or `has` or use adjectives

**Examples:**
- ✅ `variant`, `size`, `disabled`, `fullWidth`
- ❌ `var`, `sz`, `dis`, `full`

### Event Naming

**Pattern:** Descriptive verb in present tense

**Examples:**
- ✅ `@click`, `@dismiss`, `@submit`, `@change`
- ❌ `@handleClick`, `@onDismiss`, `@submitted`

---

## Digital Applications

### Documentation Site

**Structure (Blusukan Principle):**
- Navigation must be immediately obvious
- Search must be prominent
- Quick start guide on homepage
- Examples before API reference

**Performance (Mental Revolusi):**
- Lighthouse score 90+ on all metrics
- First Contentful Paint < 1.5s
- Time to Interactive < 3s

**Content (Kerja Focus):**
- Get to the code quickly
- Interactive examples
- Copy-paste ready snippets

### Component Library

**Structure (Infrastructure Principle):**
```
src/
├── components/      # Individual components
├── styles/          # Design tokens & base
└── utils/           # Shared utilities
```

**Exports (Accessibility Principle):**
```ts
// Named exports for tree-shaking
export { JButton, JAlert, JBadge }
export type { JButtonProps, JAlertProps }
```

### Storybook

**Organization:**
- Group by function (Action, Feedback, Display)
- Show all variants in one story
- Include real-world composition examples

**Stories Must Include:**
1. Default state
2. All variants
3. Loading/Disabled states
4. Real-world usage example
5. Accessibility notes

---

## Do's and Don'ts

### Visual Design

**✅ DO:**
- Use design tokens for all values
- Maintain consistent spacing (8px grid)
- Test with keyboard navigation
- Test with screen readers
- Use semantic HTML elements

**❌ DON'T:**
- Hard-code colors or sizes
- Use arbitrary spacing values
- Rely only on color for information
- Use divs where buttons should be
- Sacrifice accessibility for aesthetics

### Component Design

**✅ DO:**
- Provide sensible defaults
- Make common cases easy
- Make complex cases possible
- Document edge cases
- Emit clear events

**❌ DON'T:**
- Require many props for basic usage
- Make simple things complicated
- Hide important options
- Leave behavior undocumented
- Mutate props

### Documentation

**✅ DO:**
- Show code examples first
- Include copy-paste snippets
- Explain the "why" behind design decisions
- Link to related components
- Update examples when API changes

**❌ DON'T:**
- Only describe props in text
- Use outdated examples
- Assume prior knowledge
- Skip edge cases
- Write without testing

---

## Version History

- **v1.0** (2025) — Initial brand guidelines established

---

## Contact & Contribution

This is a living document. As the library evolves, so too will these guidelines—much like Indonesia's continuous development under infrastructure-focused governance.

For questions, suggestions, or contributions to these guidelines, please open an issue or pull request in our repository.

---

<div align="center">

**Built with purpose. Built for the people. Build with Joko-UI.**

*"Pemimpin rakyat harus lahir dari rakyat"*

</div>
