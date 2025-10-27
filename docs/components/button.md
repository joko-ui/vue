# JButton

Presidential buttons for primary actions—solid, trustworthy, and action-oriented.

**[→ View in Storybook](http://localhost:6006/?path=/docs/components-jbutton--docs)**

---

## Philosophy

> "Kerja, kerja, kerja" — Work, work, work

Buttons are the most direct way users take action. Like Jokowi's emphasis on tangible results, JButton is designed to be clear, immediate, and effective. Every button state provides feedback, every variant has purpose, and every interaction feels solid and trustworthy.

---

## Basic Usage

```vue
<script setup lang="ts">
import { JButton } from '@joko-ui/vue'
</script>

<template>
  <JButton @click="handleClick">
    Click Me
  </JButton>
</template>
```

---

## Variants

### Primary (Merah Presiden)
For main actions and primary CTAs. Uses the authoritative presidential red.

<JButton variant="primary">Primary Button</JButton>

```vue
<JButton variant="primary">Primary Button</JButton>
```

### Secondary (Biru Pembangunan)
For secondary actions. Uses the trustworthy development blue.

<JButton variant="secondary">Secondary Button</JButton>

```vue
<JButton variant="secondary">Secondary Button</JButton>
```

### Outline
For tertiary actions and cancel buttons. Minimal but clear.

<JButton variant="outline">Outline Button</JButton>

```vue
<JButton variant="outline">Outline Button</JButton>
```

### Ghost
For low-priority actions and navigation. Subtle and unobtrusive.

<JButton variant="ghost">Ghost Button</JButton>

```vue
<JButton variant="ghost">Ghost Button</JButton>
```

### Link
For inline actions that behave like links.

<JButton variant="link">Link Button</JButton>

```vue
<JButton variant="link">Link Button</JButton>
```

---

## Sizes

Buttons come in five sizes to fit different contexts.

<div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin: 1rem 0;">
  <JButton size="xs">Extra Small</JButton>
  <JButton size="sm">Small</JButton>
  <JButton size="md">Medium (Default)</JButton>
  <JButton size="lg">Large</JButton>
  <JButton size="xl">Extra Large</JButton>
</div>

```vue
<JButton size="xs">Extra Small</JButton>
<JButton size="sm">Small</JButton>
<JButton size="md">Medium (Default)</JButton>
<JButton size="lg">Large</JButton>
<JButton size="xl">Extra Large</JButton>
```

---

## States

### Loading
Shows a spinner and disables interaction. Perfect for async actions.

<JButton :loading="true">Loading...</JButton>

```vue
<script setup>
import { ref } from 'vue'

const isLoading = ref(false)

async function handleSubmit() {
  isLoading.value = true
  try {
    await saveData()
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <JButton :loading="isLoading" @click="handleSubmit">
    Save Changes
  </JButton>
</template>
```

### Disabled
Prevents interaction and reduces opacity.

<JButton :disabled="true">Disabled Button</JButton>

```vue
<JButton :disabled="true">Disabled Button</JButton>
```

### Full Width
Stretches to fill container width. Great for mobile layouts.

<JButton :full-width="true">Full Width Button</JButton>

```vue
<JButton :full-width="true">Full Width Button</JButton>
```

---

## With Icons

Buttons can contain any content, including icons.

```vue
<script setup>
import { Save, Download, Trash } from 'lucide-vue-next'
</script>

<template>
  <JButton variant="primary">
    <Save :size="20" />
    Save Changes
  </JButton>

  <JButton variant="secondary">
    <Download :size="20" />
    Download
  </JButton>

  <JButton variant="outline">
    <Trash :size="20" />
    Delete
  </JButton>
</template>
```

---

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary'` \| `'secondary'` \| `'outline'` \| `'ghost'` \| `'link'` | `'primary'` | Visual style variant |
| `size` | `'xs'` \| `'sm'` \| `'md'` \| `'lg'` \| `'xl'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disables button interaction |
| `loading` | `boolean` | `false` | Shows spinner and disables button |
| `fullWidth` | `boolean` | `false` | Makes button fill container width |
| `type` | `'button'` \| `'submit'` \| `'reset'` | `'button'` | HTML button type attribute |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@click` | `MouseEvent` | Emitted when button is clicked (not emitted when disabled or loading) |

---

## Accessibility

JButton is built with accessibility in mind:

- ✅ **Semantic HTML** — Uses `<button>` element
- ✅ **Keyboard accessible** — Tab to focus, Enter/Space to activate
- ✅ **Focus visible** — Clear blue outline on keyboard focus
- ✅ **Screen reader support** — Proper role and state announced
- ✅ **Loading announced** — `aria-busy` attribute when loading
- ✅ **Disabled announced** — `disabled` attribute prevents interaction
- ✅ **Touch targets** — Minimum 44x44px hit area (WCAG guideline)

### Best Practices

**✅ DO:**
- Use descriptive button text ("Save Changes" not "Click Here")
- Include icon + text for clarity
- Use loading state for async actions
- Disable when action isn't available
- Group related buttons with consistent spacing

**❌ DON'T:**
- Use buttons for navigation (use links instead)
- Have vague button text
- Forget to handle loading states
- Rely only on color to convey state
- Make buttons too small (< 44x44px)

---

## Examples

### Form Actions

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <!-- Form fields -->

    <div class="form-actions">
      <JButton variant="ghost" type="button" @click="handleCancel">
        Cancel
      </JButton>
      <JButton variant="primary" type="submit" :loading="isSubmitting">
        Save Changes
      </JButton>
    </div>
  </form>
</template>

<style scoped>
.form-actions {
  display: flex;
  gap: var(--joko-space-4);
  justify-content: flex-end;
  margin-top: var(--joko-space-6);
}
</style>
```

### CTA Section

```vue
<template>
  <section class="cta-section">
    <h2>Ready to build something amazing?</h2>
    <p>Get started with Joko-UI today</p>

    <div class="cta-buttons">
      <JButton variant="primary" size="lg">
        Get Started
      </JButton>
      <JButton variant="outline" size="lg">
        View Documentation
      </JButton>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  text-align: center;
  padding: var(--joko-space-16);
}

.cta-buttons {
  display: flex;
  gap: var(--joko-space-4);
  justify-content: center;
  margin-top: var(--joko-space-8);
}
</style>
```

### Button Group

```vue
<template>
  <div class="button-group">
    <JButton variant="outline" :class="{ active: view === 'grid' }" @click="view = 'grid'">
      Grid
    </JButton>
    <JButton variant="outline" :class="{ active: view === 'list' }" @click="view = 'list'">
      List
    </JButton>
  </div>
</template>

<style scoped>
.button-group {
  display: inline-flex;
  gap: 2px;
}

.button-group .j-button {
  border-radius: 0;
}

.button-group .j-button:first-child {
  border-radius: var(--joko-rounded-lg) 0 0 var(--joko-rounded-lg);
}

.button-group .j-button:last-child {
  border-radius: 0 var(--joko-rounded-lg) var(--joko-rounded-lg) 0;
}

.button-group .j-button.active {
  background: var(--joko-red-600);
  color: white;
}
</style>
```

---

## TypeScript

Full TypeScript support with exported types:

```ts
import type { JButtonProps } from '@joko-ui/vue'

const buttonConfig: JButtonProps = {
  variant: 'primary',
  size: 'lg',
  loading: false,
  disabled: false,
  fullWidth: false,
  type: 'submit'
}
```

---

## Design Tokens

JButton uses these design tokens. Override them for customization:

```css
/* Colors */
--joko-red-600  /* Primary background */
--joko-blue-600 /* Secondary background */
--joko-white    /* Primary text */

/* Spacing */
--joko-space-2  /* Icon gap */
--joko-space-3  /* Padding Y (sm) */
--joko-space-6  /* Padding X (md) */

/* Typography */
--joko-font-sans       /* Font family */
--joko-font-medium     /* Font weight */
--joko-text-sm         /* Font size (sm) */
--joko-text-base       /* Font size (md) */

/* Border Radius */
--joko-rounded-md  /* xs-sm buttons */
--joko-rounded-lg  /* md-lg buttons */
--joko-rounded-xl  /* xl buttons */

/* Transitions */
--joko-transition-base  /* Hover/active timing */
--joko-ease-out         /* Easing function */
```

---

## Related Components

- **[JAlert](/components/alert)** — For feedback and notifications
- **[JBadge](/components/badge)** — For status indicators that can appear alongside buttons

---

## Philosophy in Action

JButton embodies all four pillars:

- **🚶 Blusukan** — Accessible to keyboard, screen reader, and touch users
- **🔄 Mental Revolusi** — Modern, clean code with loading states
- **💪 Kerja** — Clear actions, immediate feedback, productive defaults
- **🌉 Infrastructure** — Built on design tokens, consistent across the system

---

<div align="center">

*"Kerja, kerja, kerja"*

**Every button is an opportunity for action. Make it count.**

</div>
