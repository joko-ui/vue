# The Philosophy

> "Pemimpin rakyat harus lahir dari rakyat"
>
> *A leader of the people must be born from the people*
>
> — Joko Widodo

---

## Why Philosophy Matters

Every line of code in Joko-UI is guided by principle, not preference. We're not just building components—we're building infrastructure for user experiences that serve everyone, work efficiently, and last for generations.

::: tip Pronunciation
**Joko-UI** is pronounced like "Jokowi" — /ˈdʒɔː.kɔ/ (JO-ko, rhyming with "cocoa"), not "yo-ko" or "jah-ko".
:::

This philosophy comes from **Joko Widodo (Jokowi)**, Indonesia's 7th President (2014-2024), whose leadership transformed a nation through:

- **Walking among the people** to understand their needs
- **Calling for mental revolution** to modernize systems
- **Emphasizing relentless work** to achieve tangible results
- **Building lasting infrastructure** that serves generations

---

## The Four Pillars

<div class="pillar-grid">

<div class="pillar">

### 🚶 Blusukan
**Accessibility & Ground-Level Engagement**

> "I walked and walked and walked... the visits enabled me to have heart-to-heart conversations with the people"

**What it means:** Jokowi would make unannounced visits to markets, villages, and slums—sitting on the ground, sharing meals, listening without barriers.

**In our design:**
- WCAG 2.1 AA compliant minimum
- Keyboard navigation works everywhere
- Screen readers get first-class support
- Clear, direct language (no jargon)
- Flat component hierarchy
- Everyone can use our components

</div>

<div class="pillar">

### 🔄 Mental Revolusi
**Progressive & Clean Systems**

> "Indonesia requires a mental revolution... changing from incompetent, wasteful, slow to responsive, simple, competent, and clean"

**What it means:** Breaking from outdated patterns. Modern systems with integrity. Cooperation over competition.

**In our design:**
- Modern technologies (Vue 3, TypeScript)
- Clean, maintainable code
- Performant & efficient
- Composable components that work together
- Progressive enhancement
- Integrity in implementation

</div>

<div class="pillar">

### 💪 Kerja, Kerja, Kerja
**Action & Results**

> "Hard work, shoulder to shoulder, mutual cooperation"

**What it means:** Work, work, work—his signature slogan. Less talk, more action. Measure by results, not rhetoric.

**In our design:**
- Action-oriented interfaces
- Productive defaults
- Clear, immediate feedback
- Developer velocity optimized
- User efficiency prioritized
- Results over process

</div>

<div class="pillar">

### 🌉 Infrastructure
**Foundation Building for Generations**

> "Infrastructure projects are the vehicle for growth... benefits felt directly by the people"

**What it means:** Build foundations that last. During 2014-2024: 2,700km toll roads, 366,000km village roads, 43 dams, 50 airports. Think decades.

**In our design:**
- Design token system
- Semantic versioning
- Backward compatibility
- Responsive design
- Component composition
- Documentation & migration guides

</div>

</div>

---

## How This Guides Us

### When Designing Components

**Before we add any feature, we ask:**

1. **Blusukan:** Can everyone access this? Screen readers? Keyboard users? Mobile users?
2. **Mental Revolusi:** Is this modern and clean? Does it have integrity?
3. **Kerja:** Does this help users get work done faster?
4. **Infrastructure:** Does this build on solid foundations? Will it last?

### When Making Decisions

**If principles conflict, this is the priority:**

1. **Accessibility first** (Blusukan) — Everyone must be able to use it
2. **Then progressive** (Mental Revolusi) — Make it modern and clean
3. **Then practical** (Kerja) — Make it work efficiently
4. **Then sustainable** (Infrastructure) — Make it last

### Real Example

**Question:** Should buttons have loading states?

**Analysis:**
- ✅ **Blusukan:** Yes—screen readers need to announce status changes
- ✅ **Mental Revolusi:** Yes—modern pattern users expect
- ✅ **Kerja:** Yes—provides immediate feedback, reduces user anxiety
- ✅ **Infrastructure:** Yes—reusable pattern across all action components

**Decision:** ✅ Yes, all action components include loading states.

---

## From Leadership to Code

| Jokowi's Leadership | Our Component Design |
|---------------------|---------------------|
| Walked through Jakarta slums to understand flooding | User testing with diverse groups to find UX issues |
| Built village roads connecting remote areas | Components work across devices and abilities |
| "Kerja, kerja, kerja" (Work, work, work) | Clear CTAs, immediate feedback, efficient workflows |
| 2,432km toll roads serving millions | Reusable components serving countless users |
| Mental revolution for clean bureaucracy | Clean code, modern patterns, documented systems |
| Infrastructure ranking: 54th → 27th globally | Performance benchmarks, continuous optimization |

---

## The Result

When you use Joko-UI, you're using components that:

- **Serve everyone** — Including users with disabilities, slow connections, older devices
- **Work efficiently** — Fast load times, clear actions, productive workflows
- **Have integrity** — Clean code, good documentation, honest about limitations
- **Last long** — Backward compatible, well-maintained, built to scale

---

## Learn More

Dive deeper into our philosophy:

- **[Design Principles](/design-principles)** — Decision-making framework for UX/UI
- **[Brand Guidelines](/brand-guidelines)** — Visual identity and design system
- **[Design Tokens](/tokens)** — The foundation of our design system

Or jump straight to:

- **[Get Started](/getting-started)** — Install and start building
- **[Components](/components/)** — Browse all components
- **[Storybook](http://localhost:6006)** — Interactive component playground

---

<div align="center">

*"Kerja, kerja, kerja" — Work, work, work*

**Build with purpose. Build for the people. Build with Joko-UI.**

</div>

<style scoped>
.pillar-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.pillar {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-left: 4px solid var(--joko-red-600);
  border-radius: 8px;
  transition: all var(--joko-transition-normal);
}

.pillar:hover {
  border-left-color: var(--joko-blue-600);
  box-shadow: var(--joko-shadow-lg);
  transform: translateY(-2px);
}

.pillar h3 {
  margin-top: 0;
  color: var(--joko-red-600);
  font-size: 1.25rem;
}

.pillar blockquote {
  font-size: 0.9rem;
  font-style: italic;
  color: var(--vp-c-text-2);
  border-left-color: var(--joko-neutral-300);
  margin: 1rem 0;
}

.pillar ul {
  font-size: 0.95rem;
  line-height: 1.6;
}

table {
  font-size: 0.95rem;
}

table th {
  background: var(--vp-c-bg-soft);
  color: var(--joko-red-600);
}

table td {
  padding: 0.75rem;
}
</style>
