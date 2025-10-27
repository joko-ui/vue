# Joko-UI Design Principles

**A Decision-Making Framework for User Experience & Interface Design**

> "To fishermen, meatball sellers, street vendors, academics, military, police, entrepreneurs, and professionals, I call for hard work, shoulder to shoulder, mutual cooperation"
> — Joko Widodo, 2014 Inaugural Speech

---

## Introduction

This document provides a philosophical and practical framework for making design decisions in Joko-UI. When facing a design challenge, refer to these principles to guide your choices.

### How to Use This Document

1. **Facing a Design Decision?** Read the relevant principle
2. **Need Examples?** See the "In Practice" sections
3. **Want to Contribute?** Use the Decision Framework
4. **Resolving Conflicts?** Follow the Priority Order

---

## The Four Pillars

Our design system rests on four pillars derived from Jokowi's leadership philosophy. When these principles conflict, they follow this priority order:

**1. Blusukan (Accessibility) → 2. Mental Revolusi (Progressive) → 3. Kerja (Practical) → 4. Infrastructure (Sustainable)**

*Rationale: Accessible components serve everyone first, then we make them modern, then practical, then sustainable.*

---

## Pillar 1: Blusukan — The Accessibility Principle

> "I often visit several regions to meet the people, to listen to their problems and aspirations, to listen to their wishes, and to know better about public interests" — Jokowi

### Core Concept

**Blusukan** is Jokowi's practice of making impromptu visits to markets, villages, and neighborhoods to directly engage with ordinary people. This wasn't performative—it was about removing barriers between leader and citizen.

**Design Translation:** Remove barriers between user and interface. Make your UI approachable, understandable, and usable by everyone, regardless of technical ability, disability, or device.

### The Blusukan Decision Framework

When designing any component, ask:

1. **Can everyone access this?**
   - Screen reader users?
   - Keyboard-only users?
   - Users with motor impairments?
   - Users with cognitive differences?
   - Users on slow connections?

2. **Is this immediately understandable?**
   - Could a non-technical user figure it out?
   - Is the purpose obvious at a glance?
   - Does it use familiar patterns?

3. **Are we using "horizontal leadership"?**
   - Flat hierarchy (no deep nesting)?
   - Direct prop names?
   - Clear event handlers?

### In Practice

#### ✅ DO: Direct, Accessible Design

```vue
<!-- Clear purpose, accessible, keyboard-friendly -->
<JButton
  variant="primary"
  @click="handleSubmit"
  :disabled="isSubmitting"
  :loading="isSubmitting"
>
  Submit Form
</JButton>
```

**Why this follows Blusukan:**
- Clear text label ("Submit Form")
- Visual loading state
- Disabled state prevents double-submission
- Semantic `<button>` element (keyboard accessible)
- Clear props (variant, disabled, loading)

#### ❌ DON'T: Obscure, Inaccessible Design

```vue
<!-- Unclear purpose, inaccessible -->
<div
  class="submit-wrapper"
  @click="() => submit()"
>
  <span class="icon"></span>
</div>
```

**Problems:**
- Not a button (breaks keyboard navigation)
- No text label (screen readers confused)
- No loading/disabled states
- Icon without alt text
- Unclear what happens on click

### Real-World Application

**Jokowi's Blusukan:** Walked through Jakarta slums to understand flooding issues firsthand.

**UI Equivalent:** User testing with actual users from diverse backgrounds. Watch them use your components. Where do they struggle? That's your "flooding issue."

### Accessibility Checklist

Every component must:

- [ ] Work with keyboard only (Tab, Enter, Space, Arrow keys)
- [ ] Announce properly to screen readers (ARIA labels, roles, live regions)
- [ ] Meet WCAG 2.1 AA color contrast ratios
- [ ] Provide non-color indicators (icons, text, patterns)
- [ ] Support reduced motion preferences
- [ ] Work on touch devices (44x44px minimum touch targets)
- [ ] Display clearly at 200% zoom
- [ ] Have clear focus indicators
- [ ] Handle errors gracefully with helpful messages

---

## Pillar 2: Mental Revolusi — The Progressive Principle

> "Indonesia requires a mental revolution to become a developed country... changing mindset from incompetent, wasteful, slow and corrupt to responsive, simple, competent, and clean"

### Core Concept

**Mental Revolusi** was Jokowi's call to break from outdated patterns and embrace a new, progressive mindset. It wasn't about rejecting the past entirely—it was about evolving beyond limitations.

**Design Translation:** Use modern technologies and patterns, but ensure they serve real user needs. Break old UI conventions when they harm UX, but don't innovate just for novelty.

### The Three Values

Based on Presidential Instruction No. 12/2016:

1. **Integrity** — Clean, honest code and design
2. **Work Ethic** — Performant, optimized, efficient
3. **Gotong Royong** — Components cooperate, composability over monoliths

### The Mental Revolusi Decision Framework

When evaluating a new pattern or technology:

1. **Is it progressive or just trendy?**
   - Does it solve a real problem?
   - Will it still make sense in 2 years?
   - Is there broad community support?

2. **Does it have integrity?**
   - Is the implementation clean?
   - Can others maintain it?
   - Are we hiding complexity or managing it?

3. **Does it improve work ethic?**
   - Is it faster?
   - Does it use fewer resources?
   - Does it reduce bundle size?

4. **Does it enable gotong royong?**
   - Can components work together?
   - Is it composable?
   - Does it follow conventions?

### In Practice

#### ✅ DO: Progressive Enhancement

```vue
<!-- Modern, but with fallbacks -->
<script setup lang="ts">
import { ref } from 'vue'
import { JButton } from '@joko-ui/vue'

// Modern: Composition API
const count = ref(0)

// But degrades gracefully if JS fails
</script>

<template>
  <div>
    <!-- Semantic HTML foundation -->
    <JButton
      @click="count++"
      :aria-label="`Clicked ${count} times`"
    >
      Count: {{ count }}
    </JButton>
  </div>
</template>
```

**Why this follows Mental Revolusi:**
- Uses modern Composition API
- TypeScript for integrity
- Accessible foundation (semantic HTML, ARIA)
- Composable pattern (import only what you need)

#### ❌ DON'T: Trendy for Trendy's Sake

```vue
<!-- Using experimental features unnecessarily -->
<script setup lang="ts">
// Using experimental decorators just because they're "cool"
@Component({
  // Overly complex pattern for simple use case
})
class MyComplexComponent extends BaseClass {
  // Harder to understand, maintain
}
</script>
```

**Problems:**
- Experimental features may change
- Adds complexity without benefit
- Harder for others to maintain
- Not following Vue community conventions

### Composition Examples

**Good Gotong Royong (Mutual Cooperation):**

```vue
<template>
  <!-- Components work together seamlessly -->
  <JAlert variant="warning" title="Confirm Action">
    <p>Are you sure you want to delete this?</p>

    <template #actions>
      <JButton variant="ghost" @click="cancel">
        Cancel
      </JButton>
      <JButton variant="primary" @click="confirm">
        Confirm
      </JButton>
    </template>
  </JAlert>
</template>
```

### Performance Benchmarks

**Mental Revolusi Standard:** Our components must be:
- **Fast:** Time to Interactive < 3s
- **Small:** < 5KB gzipped per component
- **Efficient:** No unnecessary re-renders
- **Clean:** Lighthouse Performance Score 90+

---

## Pillar 3: Kerja — The Action Principle

> "Kerja, kerja, kerja! Hard work, shoulder to shoulder, mutual cooperation... momentum for all of us to move together"

### Core Concept

**Kerja** (Work) was Jokowi's signature motto—emphasizing action over words, results over promises. It wasn't about being busy; it was about achieving tangible outcomes.

**Design Translation:** Design for getting things done. Reduce friction, minimize steps, provide clear feedback, enable user productivity.

### The Kerja Decision Framework

When designing interactions:

1. **Does this help users accomplish their goals faster?**
   - How many clicks/steps?
   - Can we reduce cognitive load?
   - Are we providing shortcuts?

2. **Is feedback immediate and clear?**
   - Do users know what happened?
   - Are loading states visible?
   - Are errors actionable?

3. **Are defaults productive?**
   - Can users start without configuration?
   - Do sensible defaults cover 80% of cases?
   - Can power users still customize?

4. **Does it feel responsive?**
   - Sub-100ms for interactions?
   - Perceived performance optimized?
   - No janky animations?

### In Practice

#### ✅ DO: Action-Oriented Design

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { JButton } from '@joko-ui/vue'

const isLoading = ref(false)

async function submit() {
  isLoading.value = true
  try {
    await saveData()
    // Immediate feedback
    showSuccessToast()
  } catch (error) {
    // Actionable error
    showError('Failed to save. Try again or contact support.')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <!-- Clear action, immediate feedback -->
  <JButton
    @click="submit"
    :loading="isLoading"
    :disabled="isLoading"
  >
    {{ isLoading ? 'Saving...' : 'Save Changes' }}
  </JButton>
</template>
```

**Why this follows Kerja:**
- Clear action verb ("Save")
- Immediate visual feedback (loading state)
- Prevents double-submission (disabled)
- Changes text to show progress
- Handles errors with actionable messages

#### ❌ DON'T: Passive, Unclear Design

```vue
<!-- Vague, no feedback -->
<button @click="doSomething">
  Click Here
</button>
```

**Problems:**
- Vague text ("Click Here" — for what?)
- No loading state (did it work?)
- No error handling (what if it fails?)
- Not disabled (can double-click)

### Multi-Step Processes

**Kerja Principle:** Show progress, allow shortcuts, remember context.

```vue
<template>
  <!-- Good: Clear progress, ability to skip -->
  <div class="wizard">
    <div class="steps">
      <span class="active">1. Details</span>
      <span>2. Review</span>
      <span>3. Confirm</span>
    </div>

    <form @submit="nextStep">
      <!-- Form content -->

      <div class="actions">
        <JButton variant="ghost" @click="previousStep">
          Back
        </JButton>
        <JButton variant="link" @click="saveDraft">
          Save Draft
        </JButton>
        <JButton variant="primary" type="submit">
          Next
        </JButton>
      </div>
    </form>
  </div>
</template>
```

**Kerja Elements:**
- Visible progress (which step are you on?)
- Can go back (not forced forward)
- Can save draft (don't lose work)
- Clear next action

### Loading & Feedback States

Every action must have:

1. **Initiation:** Button press, enter key
2. **Acknowledgment:** Immediate visual change (< 100ms)
3. **Progress:** Loading spinner, progress bar
4. **Completion:** Success message, next step, or error with recovery

---

## Pillar 4: Infrastructure — The Foundation Principle

> "Infrastructure projects are the vehicle for growth... enhancing competitiveness and connectivity... benefits felt directly by the people"

### Core Concept

**Infrastructure** was the cornerstone of Jokowi's presidency—building roads, bridges, ports, and dams that would serve Indonesia for generations. It wasn't flashy, but it was essential.

**Design Translation:** Build robust foundations. Use design tokens, maintain consistency, plan for scale, ensure longevity. Think beyond the immediate feature.

### The Infrastructure Decision Framework

When building systems:

1. **Is this foundation solid?**
   - Does it use design tokens?
   - Will it work at scale?
   - Can it adapt to future needs?

2. **Does it connect things?**
   - Do components share a design language?
   - Can data flow between them?
   - Do they use consistent patterns?

3. **Is it maintainable long-term?**
   - Will someone understand this in 2 years?
   - Is it documented?
   - Does it follow conventions?

4. **Does it distribute benefits equitably?**
   - Works across devices?
   - Works in different contexts?
   - Works for all users?

### In Practice

#### ✅ DO: Token-Based Design

```vue
<style scoped>
/* Good: Uses design tokens */
.custom-card {
  /* Foundation: Design tokens */
  padding: var(--joko-space-6);
  margin: var(--joko-space-4);
  background: var(--joko-neutral-50);
  border-radius: var(--joko-rounded-lg);

  /* Connectivity: Consistent shadows */
  box-shadow: var(--joko-shadow-md);

  /* Longevity: Smooth transitions */
  transition: all var(--joko-transition-base) var(--joko-ease-out);
}

.custom-card:hover {
  /* Scales: Consistent hover pattern */
  box-shadow: var(--joko-shadow-lg);
  transform: translateY(-2px);
}
</style>
```

**Why this follows Infrastructure:**
- Uses design tokens (single source of truth)
- Consistent with other components (shadows, transitions)
- Easy to theme (change tokens, all instances update)
- Maintainable (clear what values mean)

#### ❌ DON'T: Hard-Coded Values

```vue
<style scoped>
/* Bad: Hard-coded values */
.custom-card {
  padding: 24px;  /* Why 24? Should it change?*/
  margin: 16px;   /* Inconsistent with system */
  background: #f7f7f7;  /* Not in palette */
  border-radius: 12px;  /* Different from other components */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);  /* Unique shadow */
}
```

**Problems:**
- Hard-coded values (can't theme)
- Inconsistent with design system
- Hard to maintain (find/replace all instances)
- No semantic meaning (why these specific values?)

### Design Token Hierarchy

**Infrastructure = Layered System**

```
Primitive Tokens (Foundation)
↓
--color-red-600: #dc2626
--spacing-6: 1.5rem
--font-size-lg: 1.125rem

Semantic Tokens (Purpose)
↓
--color-primary: var(--color-red-600)
--button-padding: var(--spacing-6)
--button-font-size: var(--font-size-lg)

Component Tokens (Application)
↓
.j-button-primary {
  background: var(--color-primary);
  padding: var(--button-padding);
  font-size: var(--button-font-size);
}
```

**Benefits:**
- Change primitive = updates everywhere
- Semantic layer provides context
- Component layer enables customization
- Scales to hundreds of components

### Versioning & Migration

**Infrastructure Thinking:** Plan for upgrades.

```ts
// Good: Deprecated with migration path
export interface JButtonProps {
  variant?: 'primary' | 'secondary'

  /** @deprecated Use variant="ghost" instead. Will be removed in v2.0 */
  outlined?: boolean
}

// Implementation provides backward compatibility
const computedVariant = computed(() => {
  if (props.outlined) {
    console.warn('JButton: "outlined" prop is deprecated. Use variant="ghost"')
    return 'ghost'
  }
  return props.variant || 'primary'
})
```

---

## Decision Matrix

When principles conflict, use this matrix:

| Scenario | Priority | Reasoning |
|----------|----------|-----------|
| Accessibility vs. Aesthetics | **Blusukan** | Everyone must be able to use it |
| Modern tech vs. Stability | **Mental Revolusi** | Progressive, but with fallbacks |
| Quick solution vs. Best solution | **Infrastructure** | Long-term thinking |
| Feature richness vs. Simplicity | **Kerja** | Get core job done well first |
| Customization vs. Consistency | **Infrastructure** | System coherence matters |
| Performance vs. Features | **Mental Revolusi** | Fast & clean |

---

## Practical Examples

### Example 1: Designing a New Form Component

**Question:** Should we include auto-save functionality?

**Framework Application:**

1. **Blusukan (Accessibility):**
   - ✅ Auto-save reduces data loss (helps everyone)
   - ⚠️ Must announce to screen readers
   - ⚠️ Must be disableable for users with cognitive differences

2. **Mental Revolusi (Progressive):**
   - ✅ Modern feature users expect
   - ✅ Can optimize with debouncing
   - ✅ Composable (opt-in via prop)

3. **Kerja (Action):**
   - ✅ Reduces user effort (don't need to click Save)
   - ✅ Clear feedback ("Saving...", "Saved at 3:42pm")
   - ✅ Handles errors gracefully

4. **Infrastructure (Foundation):**
   - ⚠️ Needs backend support
   - ⚠️ Must handle conflicts
   - ✅ Can use token for debounce timing

**Decision:** ✅ **Include it**, but make it opt-in and ensure clear feedback.

```vue
<JForm
  :auto-save="true"
  :auto-save-delay="2000"
  @saving="handleSaving"
  @saved="handleSaved"
  @save-error="handleError"
>
  <!-- Form fields -->
</JForm>
```

---

### Example 2: Component API Design

**Question:** Should JButton accept children or a `label` prop?

**Framework Application:**

1. **Blusukan:** Children allow flexible content (icons + text), more accessible

2. **Kerja:** Children are Vue/React standard, familiar to developers

3. **Infrastructure:** Children enable composition (JButton + JBadge)

**Decision:** ✅ **Use children (slots)**, it's more flexible and conventional.

```vue
<!-- Good: Flexible composition -->
<JButton variant="primary">
  <Icon name="save" />
  Save Changes
</JButton>

<!-- Not: Rigid prop -->
<JButton label="Save Changes" icon="save" />
```

---

## Contribution Guidelines

### Proposing New Components

When proposing a new component, answer these questions:

1. **Blusukan:** How does this serve users better? Who benefits?

2. **Mental Revolusi:** Is this progressive? Does it have integrity?

3. **Kerja:** Does this help users get work done? Is it action-oriented?

4. **Infrastructure:** Does this fit the system? Is it maintainable?

### Reviewing Pull Requests

Check against each pillar:

- [ ] **Blusukan:** Accessible (WCAG AA, keyboard, screen reader)
- [ ] **Mental Revolusi:** Modern patterns, clean code, performant
- [ ] **Kerja:** Clear purpose, good defaults, helpful feedback
- [ ] **Infrastructure:** Uses tokens, documented, tested, consistent

---

## Closing Thoughts

These principles aren't just abstract philosophy—they're practical tools for building better user interfaces. Like Jokowi's infrastructure projects, good design systems:

- **Serve everyone** (Blusukan)
- **Use modern approaches** (Mental Revolusi)
- **Get things done** (Kerja)
- **Last for generations** (Infrastructure)

When in doubt, return to these principles. They'll guide you to decisions that honor both users and the craft of design.

---

*"Pemimpin rakyat harus lahir dari rakyat"*

*A leader of the people must be born from the people—and a design system must be built for the people.*
