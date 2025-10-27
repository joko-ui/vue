# Design Principles

A decision-making framework for user experience and interface design.

**[→ View Full Design Principles Document](https://github.com/yourusername/joko-ui/blob/main/DESIGN_PRINCIPLES.md)**

---

## The Four Pillars

When facing any design decision, these principles guide our choices:

###  1. Blusukan — Accessibility First

> "I walked and walked and walked when I was the mayor of Solo"

**The Principle:** Remove barriers between user and interface. Just as Jokowi walked among the people, our UI must work for everyone.

**Ask yourself:**
- Can everyone access this? (screen readers, keyboard, mobile)
- Is this immediately understandable?
- Are we using horizontal leadership (flat, clear hierarchy)?

---

### 2. Mental Revolusi — Progressive & Clean

> "Changing mindset from incompetent, wasteful, slow to responsive, simple, competent, and clean"

**The Principle:** Use modern approaches with integrity. Build systems that are performant and composable.

**Ask yourself:**
- Is this progressive or just trendy?
- Does it have integrity (clean, maintainable code)?
- Does it enable cooperation (composable)?

---

### 3. Kerja — Action-Oriented

> "Kerja, kerja, kerja! Hard work, shoulder to shoulder, mutual cooperation"

**The Principle:** Help users get things done. Every interaction should be clear, immediate, and productive.

**Ask yourself:**
- Does this help users accomplish goals faster?
- Is feedback immediate and clear?
- Are defaults productive?

---

### 4. Infrastructure — Built to Last

> "Infrastructure projects are the vehicle for growth"

**The Principle:** Build robust foundations using design tokens, maintain consistency, plan for scale.

**Ask yourself:**
- Is this foundation solid (uses tokens, scalable)?
- Does it connect well (component composition)?
- Is it maintainable long-term?

---

## Decision Framework

### Priority Order

When principles conflict:

1. **Accessibility** (Blusukan) → Everyone must use it
2. **Progressive** (Mental Revolusi) → Modern but with fallbacks
3. **Practical** (Kerja) → Get core job done first
4. **Sustainable** (Infrastructure) → Long-term thinking

---

## Practical Examples

### Example 1: Auto-Save in Forms

**Question:** Should forms include auto-save?

**Framework Application:**
- ✅ **Blusukan:** Reduces data loss (helps everyone), but must announce to screen readers
- ✅ **Mental Revolusi:** Modern feature, can optimize with debouncing
- ✅ **Kerja:** Reduces user effort, clear feedback required
- ⚠️ **Infrastructure:** Needs backend support, must handle conflicts

**Decision:** ✅ **Include it**, but make it opt-in with clear feedback.

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
- ✅ **Blusukan:** Children allow flexible content (icons + text), more accessible
- ✅ **Kerja:** Children are Vue/React standard, familiar to developers
- ✅ **Infrastructure:** Children enable composition (JButton + JBadge)

**Decision:** ✅ **Use children (slots)**, it's more flexible and conventional.

```vue
<!-- Good: Flexible composition -->
<JButton variant="primary">
  <Icon name="save" />
  Save Changes
</JButton>
```

---

## Accessibility Checklist

Every component must:

- [ ] Work with keyboard only (Tab, Enter, Space, Arrows)
- [ ] Announce properly to screen readers (ARIA)
- [ ] Meet WCAG 2.1 AA color contrast (4.5:1 minimum)
- [ ] Provide non-color indicators
- [ ] Support reduced motion preferences
- [ ] Work on touch devices (44x44px minimum)
- [ ] Display clearly at 200% zoom
- [ ] Have clear focus indicators
- [ ] Handle errors gracefully with helpful messages

---

## Component Evaluation

When reviewing components or pull requests, check against each pillar:

- [ ] **Blusukan:** Accessible (WCAG AA, keyboard, screen reader tested)
- [ ] **Mental Revolusi:** Modern patterns, clean code, performant
- [ ] **Kerja:** Clear purpose, good defaults, helpful feedback
- [ ] **Infrastructure:** Uses tokens, documented, tested, consistent

---

## Learn More

The full DESIGN_PRINCIPLES.md document includes:

- Detailed explanations of each pillar
- Decision-making frameworks
- Multiple real-world examples
- Composition patterns
- Performance benchmarks
- Contribution guidelines

**[→ Read Full Design Principles](https://github.com/yourusername/joko-ui/blob/main/DESIGN_PRINCIPLES.md)**

---

## Related Documents

- **[Philosophy](/philosophy)** — Understanding Jokowi's leadership principles
- **[Brand Guidelines](/brand-guidelines)** — Visual identity and voice
- **[Design Tokens](/tokens)** — The foundation of our system
- **[Components](/components/)** — See principles in action

---

<div align="center">

*"Pemimpin rakyat harus lahir dari rakyat"*

*A leader of the people must be born from the people—and a design system must be built for the people.*

</div>
