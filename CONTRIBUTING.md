# Contributing to Joko-UI

**Thank you for your interest in contributing to Joko-UI!**

> "Pemimpin rakyat harus lahir dari rakyat"
> *A leader of the people must be born from the people*
> — Joko Widodo

Just as this quote emphasizes leadership emerging from the people, Joko-UI is built by the community, for the community. We welcome contributions from developers of all skill levels and backgrounds.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Contribution Guidelines](#contribution-guidelines)
5. [Component Guidelines](#component-guidelines)
6. [Coding Standards](#coding-standards)
7. [Testing Requirements](#testing-requirements)
8. [Documentation Requirements](#documentation-requirements)
9. [Commit Message Guidelines](#commit-message-guidelines)
10. [Pull Request Process](#pull-request-process)

---

## Code of Conduct

### Our Values

Inspired by Joko Widodo's leadership principles, we foster a community based on:

- **Blusukan (Accessibility)** — Everyone is welcome, regardless of experience level
- **Mental Revolusi (Progressive Mindset)** — We embrace new ideas and continuous improvement
- **Kerja (Action-Oriented)** — We focus on getting things done constructively
- **Gotong Royong (Mutual Cooperation)** — We help each other succeed

### Expected Behavior

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what's best for the community
- Show empathy towards other contributors
- Be patient with newcomers

### Unacceptable Behavior

- Harassment, discrimination, or offensive comments
- Personal attacks or trolling
- Publishing others' private information
- Any conduct that violates professional standards

---

## Getting Started

### Prerequisites

- **Node.js:** ^20.19.0 or >=22.12.0
- **Package Manager:** pnpm (recommended), npm, or yarn
- **Git:** Latest version

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/vue.git
   cd vue
   ```
3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/joko-ui/vue.git
   ```

### Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install

# Using yarn
yarn install
```

### Development Commands

```bash
# Start development server
pnpm dev

# Build library
pnpm build:lib

# Run type checking
pnpm type-check

# Lint code
pnpm lint

# Format code
pnpm format

# Start Storybook
pnpm storybook

# Start documentation site
pnpm docs:dev
```

---

## Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
# Feature branch
git checkout -b feature/component-name

# Bug fix branch
git checkout -b fix/issue-description

# Documentation branch
git checkout -b docs/what-you-are-documenting
```

**Branch naming conventions:**
- `feature/` — New features or components
- `fix/` — Bug fixes
- `docs/` — Documentation updates
- `refactor/` — Code refactoring
- `test/` — Adding or updating tests
- `chore/` — Maintenance tasks

### 2. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Add tests for new functionality
- Update documentation as needed
- Ensure accessibility compliance

### 3. Test Your Changes

```bash
# Type check
pnpm type-check

# Lint and format
pnpm lint
pnpm format

# Build to ensure no errors
pnpm build:lib

# Test in Storybook
pnpm storybook

# Test in documentation
pnpm docs:dev
```

### 4. Commit Your Changes

Follow our [commit message guidelines](#commit-message-guidelines):

```bash
git add .
git commit -m "feat(JButton): add loading state with spinner"
```

### 5. Push and Create Pull Request

```bash
git push origin your-branch-name
```

Then create a Pull Request on GitHub.

---

## Contribution Guidelines

### What to Contribute

We welcome contributions in these areas:

#### 🎨 New Components
- Follow the [Component Guidelines](#component-guidelines)
- Ensure accessibility (WCAG 2.1 AA)
- Include TypeScript types
- Add Storybook stories
- Write documentation

#### 🐛 Bug Fixes
- Reference the issue number
- Include test cases
- Explain the fix in PR description

#### 📚 Documentation
- Fix typos or unclear explanations
- Add examples or use cases
- Improve accessibility documentation
- Translate documentation (Bahasa Indonesia welcome!)

#### ♿ Accessibility Improvements
- Keyboard navigation enhancements
- Screen reader improvements
- Color contrast fixes
- ARIA attribute additions

#### 🧪 Tests
- Add missing test coverage
- Improve existing tests
- Add edge case tests

#### 🎨 Design System
- Design token additions/refinements
- Typography improvements
- Spacing system enhancements

### Before You Start

For **major changes** (new components, breaking changes, significant refactors):

1. **Open an issue first** to discuss the proposal
2. Wait for maintainer feedback
3. Get approval before starting work

This prevents wasted effort on changes that may not align with the project direction.

---

## Component Guidelines

### Component Structure

All components must follow this structure:

```
src/components/
└── JComponentName/
    ├── JComponentName.vue       # Main component
    ├── JComponentName.stories.ts # Storybook stories
    ├── JComponentName.spec.ts   # Unit tests (future)
    └── index.ts                 # Export
```

### Component Template

```vue
<script setup lang="ts">
import { computed } from 'vue'

// Define props interface
export interface JComponentNameProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

// Define props with defaults
const props = withDefaults(defineProps<JComponentNameProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false
})

// Define emits
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Component logic
const componentClasses = computed(() => {
  return {
    [`j-component--${props.variant}`]: true,
    [`j-component--${props.size}`]: true,
    'j-component--disabled': props.disabled
  }
})
</script>

<template>
  <button
    class="j-component"
    :class="componentClasses"
    :disabled="disabled"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<style scoped>
.j-component {
  /* Use design tokens */
  font-family: var(--joko-font-sans);
  border-radius: var(--joko-rounded-md);
  transition: all var(--joko-transition-base) var(--joko-ease-out);
}

/* Variants */
.j-component--primary {
  background-color: var(--joko-red-600);
  color: var(--joko-white);
}

/* Sizes */
.j-component--md {
  padding: var(--joko-space-3) var(--joko-space-6);
  font-size: var(--joko-text-base);
}

/* States */
.j-component--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
```

### Component Requirements

Every component MUST:

#### 1. Accessibility (Blusukan Principle)
- [ ] Use semantic HTML elements
- [ ] Include proper ARIA attributes
- [ ] Support keyboard navigation (Tab, Enter, Space, Arrows)
- [ ] Work with screen readers
- [ ] Meet WCAG 2.1 AA color contrast ratios
- [ ] Include focus indicators
- [ ] Support reduced motion preferences

#### 2. TypeScript (Mental Revolusi Principle)
- [ ] Fully typed props interface
- [ ] Exported type definitions
- [ ] No `any` types (use `unknown` if necessary)
- [ ] Proper event typing

#### 3. Design Tokens (Infrastructure Principle)
- [ ] Use CSS custom properties from design tokens
- [ ] No hard-coded colors, sizes, or spacing
- [ ] Follow the 8px spacing grid
- [ ] Use semantic token names

#### 4. Documentation (Kerja Principle)
- [ ] JSDoc comments for props
- [ ] Clear prop descriptions
- [ ] Usage examples in documentation
- [ ] Storybook stories for all variants

#### 5. Variants & Props
- [ ] Sensible defaults (80% use case)
- [ ] Clear, predictable prop names
- [ ] Boolean props prefixed with `is`, `has`, or adjectives
- [ ] Size options: `sm`, `md`, `lg` (if applicable)
- [ ] Variant options clearly named

### Component Naming

- **Component name:** `JComponentName` (capital J prefix)
- **File name:** `JComponentName.vue`
- **CSS class prefix:** `j-component-name`
- **Props:** camelCase
- **Events:** kebab-case in template, camelCase in script

### Forbidden Patterns

❌ **DO NOT:**
- Use `div` where semantic HTML exists (`button`, `input`, etc.)
- Hard-code colors, sizes, or spacing
- Rely solely on color to convey information
- Use inline styles (except for dynamic values)
- Mutate props
- Use `v-html` without sanitization
- Skip accessibility attributes

---

## Coding Standards

### TypeScript

```typescript
// ✅ Good: Explicit types
interface ButtonProps {
  variant: 'primary' | 'secondary'
  disabled?: boolean
}

// ❌ Bad: Any types
interface ButtonProps {
  variant: any
  disabled: any
}
```

### Vue Composition API

```vue
<!-- ✅ Good: Script setup with TypeScript -->
<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>

<!-- ❌ Bad: Options API -->
<script>
export default {
  data() {
    return { count: 0 }
  }
}
</script>
```

### CSS/Styling

```vue
<style scoped>
/* ✅ Good: Design tokens */
.j-button {
  padding: var(--joko-space-4);
  color: var(--joko-red-600);
  border-radius: var(--joko-rounded-md);
}

/* ❌ Bad: Hard-coded values */
.j-button {
  padding: 16px;
  color: #dc2626;
  border-radius: 8px;
}
</style>
```

### File Organization

```typescript
// ✅ Good: Logical grouping
<script setup lang="ts">
// 1. Imports
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// 2. Props & Emits
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// 3. Composables
const router = useRouter()

// 4. State
const count = ref(0)

// 5. Computed
const doubled = computed(() => count.value * 2)

// 6. Functions
function increment() {
  count.value++
}

// 7. Lifecycle (if needed)
onMounted(() => {})
</script>
```

### Linting

We use ESLint and Oxlint for code quality:

```bash
# Auto-fix issues
pnpm lint

# Format code
pnpm format
```

**Linting rules are enforced in CI.** Your PR will not be merged if linting fails.

---

## Testing Requirements

### Unit Tests (Coming Soon)

We're currently setting up comprehensive testing. For now:

- Test your components manually in Storybook
- Test accessibility with keyboard navigation
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Test in different browsers

### Manual Testing Checklist

Before submitting a PR:

- [ ] Component renders correctly in Storybook
- [ ] All variants work as expected
- [ ] Keyboard navigation functions properly
- [ ] Focus indicators are visible
- [ ] Colors meet contrast requirements
- [ ] Works in Chrome, Firefox, Safari, Edge
- [ ] Works on mobile viewports
- [ ] No console errors or warnings

---

## Documentation Requirements

### Component Documentation

Every component needs documentation in `docs/components/`:

```markdown
# JComponentName

Brief description of what the component does and when to use it.

## Usage

\`\`\`vue
<script setup>
import { JComponentName } from '@joko-ui/vue'
</script>

<template>
  <JComponentName variant="primary">
    Content
  </JComponentName>
</template>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' | 'primary' | Visual variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Component size |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| click | MouseEvent | Emitted when clicked |

## Accessibility

- Uses semantic `<button>` element
- Full keyboard navigation support
- Proper ARIA attributes included
- Meets WCAG 2.1 AA standards

## Examples

### Basic Usage
[Example code]

### All Variants
[Example code]
```

### Storybook Stories

Every component needs Storybook stories:

```typescript
// JComponentName.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import JComponentName from './JComponentName.vue'

const meta: Meta<typeof JComponentName> = {
  title: 'Components/JComponentName',
  component: JComponentName,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary']
    }
  }
}

export default meta
type Story = StoryObj<typeof JComponentName>

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
  render: (args) => ({
    components: { JComponentName },
    setup() {
      return { args }
    },
    template: '<JComponentName v-bind="args">Button Text</JComponentName>'
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { JComponentName },
    template: `
      <div style="display: flex; gap: 1rem;">
        <JComponentName variant="primary">Primary</JComponentName>
        <JComponentName variant="secondary">Secondary</JComponentName>
      </div>
    `
  })
}
```

---

## Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat** — New feature or component
- **fix** — Bug fix
- **docs** — Documentation changes
- **style** — Code style changes (formatting, no logic change)
- **refactor** — Code refactoring
- **test** — Adding or updating tests
- **chore** — Maintenance tasks

### Scope

The scope should be the component or area affected:
- `JButton`
- `JAlert`
- `tokens`
- `docs`
- `build`

### Examples

```bash
# New feature
feat(JButton): add loading state with spinner

# Bug fix
fix(JAlert): correct icon alignment in small variant

# Documentation
docs(JBadge): add examples for all variants

# Refactor
refactor(tokens): reorganize color palette structure

# Chore
chore(deps): update Vue to 3.5.22
```

### Rules

- Use present tense ("add" not "added")
- Use imperative mood ("move" not "moves")
- Don't capitalize first letter of subject
- No period at the end of subject
- Keep subject under 72 characters
- Provide detailed body if needed

---

## Pull Request Process

### Before Submitting

1. **Update your branch** with latest main:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run all checks:**
   ```bash
   pnpm type-check
   pnpm lint
   pnpm build:lib
   ```

3. **Test thoroughly** in Storybook and docs

4. **Update documentation** if needed

### PR Title Format

Use the same format as commit messages:

```
feat(JButton): add loading state with spinner
```

### PR Description Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] New feature (feat)
- [ ] Bug fix (fix)
- [ ] Documentation (docs)
- [ ] Refactor
- [ ] Other (specify)

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
How did you test this?
- [ ] Tested in Storybook
- [ ] Tested in documentation site
- [ ] Tested keyboard navigation
- [ ] Tested with screen reader
- [ ] Tested in multiple browsers

## Checklist
- [ ] Code follows project style guidelines
- [ ] I have performed a self-review
- [ ] I have commented complex code
- [ ] I have updated documentation
- [ ] My changes generate no new warnings
- [ ] I have added Storybook stories
- [ ] Component is accessible (WCAG 2.1 AA)
- [ ] Uses design tokens (no hard-coded values)

## Screenshots (if applicable)
Add screenshots or videos demonstrating the change

## Related Issues
Closes #123
```

### Review Process

1. **Automated checks** must pass (linting, type checking, build)
2. **Maintainer review** — A maintainer will review your code
3. **Requested changes** — Address any feedback
4. **Approval** — Once approved, a maintainer will merge

### After Merge

- Your contribution will be included in the next release
- You'll be credited in the release notes
- Thank you for contributing! 🎉

---

## Recognition

### Contributors

All contributors are recognized in:
- GitHub contributors page
- Release notes
- Documentation credits

### Types of Contributions

We value all types of contributions:
- Code (components, fixes, refactors)
- Documentation (writing, examples, translations)
- Design (tokens, patterns, guidelines)
- Testing (bug reports, accessibility testing)
- Community (helping others, answering questions)

---

## Questions or Need Help?

### Get in Touch

- **GitHub Issues** — For bugs, feature requests, or questions
- **GitHub Discussions** — For general questions and community chat
- **Documentation** — [https://joko-ui.github.io/vue/](https://joko-ui.github.io/vue/)

### Tips for New Contributors

1. **Start small** — Fix a typo, improve documentation, add an example
2. **Ask questions** — No question is too basic
3. **Read existing code** — Learn from existing components
4. **Be patient** — Reviews take time
5. **Have fun!** — Enjoy the process

---

## License

By contributing to Joko-UI, you agree that your contributions will be licensed under the MIT License.

---

<div align="center">

**Thank you for contributing to Joko-UI!**

*Kerja, kerja, kerja* (Work, work, work)

Built with purpose. Built for the people. Build with Joko-UI.

</div>
