# JBadge

Versatile badges for status indicators, labels, and counts.

**[→ View in Storybook](http://localhost:6006/?path=/docs/components-jbadge--docs)**

---

## Philosophy

> "Small but clear markers of status and progress"

Badges are small but mighty—they convey status at a glance. Like the labels on Indonesia's infrastructure projects marking progress and completion, JBadge provides clear, immediate visual feedback about status, categories, and counts.

---

## Basic Usage

```vue
<script setup lang="ts">
import { JBadge } from '@joko-ui/vue'
</script>

<template>
  <JBadge>New</JBadge>
</template>
```

---

## Variants

### Primary (Merah Presiden)
For primary status or featured items.

<JBadge variant="primary">Primary</JBadge>

```vue
<JBadge variant="primary">Primary</JBadge>
```

### Success (Hijau Pertumbuhan)
For completed, active, or positive status.

<JBadge variant="success">Success</JBadge>

```vue
<JBadge variant="success">Success</JBadge>
```

### Warning (Kuning Hati-hati)
For pending, in-progress, or cautionary status.

<JBadge variant="warning">Warning</JBadge>

```vue
<JBadge variant="warning">Warning</JBadge>
```

### Error (Merah Bahaya)
For errors, failed, or critical status.

<JBadge variant="error">Error</JBadge>

```vue
<JBadge variant="error">Error</JBadge>
```

### Neutral (Default)
For general labels and categories.

<JBadge variant="neutral">Neutral</JBadge>

```vue
<JBadge variant="neutral">Neutral</JBadge>
<!-- or simply -->
<JBadge>Neutral</JBadge>
```

---

## Sizes

Badges come in three sizes for different contexts.

<div style="display: flex; align-items: center; gap: 1rem; margin: 1rem 0;">
  <JBadge size="sm">Small</JBadge>
  <JBadge size="md">Medium (Default)</JBadge>
  <JBadge size="lg">Large</JBadge>
</div>

```vue
<JBadge size="sm">Small</JBadge>
<JBadge size="md">Medium (Default)</JBadge>
<JBadge size="lg">Large</JBadge>
```

---

## Shapes

### Rounded (Default)
Fully rounded ends for a pill-like appearance.

<JBadge :rounded="true">Rounded</JBadge>

```vue
<JBadge :rounded="true">Rounded</JBadge>
<!-- or simply -->
<JBadge>Rounded</JBadge>
```

### Square
More geometric, modern appearance.

<JBadge :rounded="false">Square</JBadge>

```vue
<JBadge :rounded="false">Square</JBadge>
```

---

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary'` \| `'success'` \| `'warning'` \| `'error'` \| `'neutral'` | `'neutral'` | Visual style and semantic meaning |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Badge size |
| `rounded` | `boolean` | `true` | Fully rounded (pill) vs. square corners |

---

## Common Use Cases

### Status Indicators

```vue
<template>
  <div class="project-card">
    <h3>Infrastructure Project</h3>
    <JBadge variant="success">Active</JBadge>
  </div>

  <div class="project-card">
    <h3>Highway Construction</h3>
    <JBadge variant="warning">In Progress</JBadge>
  </div>

  <div class="project-card">
    <h3>Bridge Repair</h3>
    <JBadge variant="error">Delayed</JBadge>
  </div>

  <div class="project-card">
    <h3>Port Expansion</h3>
    <JBadge variant="primary">Completed</JBadge>
  </div>
</template>
```

### Labels & Categories

```vue
<template>
  <article>
    <h2>Article Title</h2>
    <div class="tags">
      <JBadge variant="neutral">Infrastructure</JBadge>
      <JBadge variant="neutral">Development</JBadge>
      <JBadge variant="neutral">Indonesia</JBadge>
    </div>
  </article>
</template>

<style scoped>
.tags {
  display: flex;
  gap: var(--joko-space-2);
  flex-wrap: wrap;
}
</style>
```

### Notification Counts

```vue
<template>
  <button class="notification-button">
    <Bell :size="20" />
    Notifications
    <JBadge variant="error" size="sm">3</JBadge>
  </button>

  <button class="inbox-button">
    <Mail :size="20" />
    Inbox
    <JBadge variant="primary" size="sm">12</JBadge>
  </button>
</template>

<style scoped>
.notification-button,
.inbox-button {
  display: inline-flex;
  align-items: center;
  gap: var(--joko-space-2);
}
</style>
```

### Table Status

```vue
<template>
  <table>
    <thead>
      <tr>
        <th>Project</th>
        <th>Status</th>
        <th>Progress</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Trans-Java Toll Road</td>
        <td><JBadge variant="success">Completed</JBadge></td>
        <td>100%</td>
      </tr>
      <tr>
        <td>MRT Jakarta</td>
        <td><JBadge variant="success">Operational</JBadge></td>
        <td>100%</td>
      </tr>
      <tr>
        <td>New Capital City</td>
        <td><JBadge variant="warning">In Progress</JBadge></td>
        <td>45%</td>
      </tr>
    </tbody>
  </table>
</template>
```

### User Roles

```vue
<template>
  <div class="user-list">
    <div class="user">
      <img src="/avatar1.jpg" alt="User" />
      <span>Joko Widodo</span>
      <JBadge variant="primary" size="sm">Admin</JBadge>
    </div>

    <div class="user">
      <img src="/avatar2.jpg" alt="User" />
      <span>Ma'ruf Amin</span>
      <JBadge variant="success" size="sm">Moderator</JBadge>
    </div>

    <div class="user">
      <img src="/avatar3.jpg" alt="User" />
      <span>Guest User</span>
      <JBadge variant="neutral" size="sm">Member</JBadge>
    </div>
  </div>
</template>
```

### Version Labels

```vue
<template>
  <div class="feature">
    <h3>
      Dark Mode Support
      <JBadge variant="primary" size="sm">New</JBadge>
    </h3>
    <p>Switch between light and dark themes.</p>
  </div>

  <div class="feature">
    <h3>
      API v2
      <JBadge variant="warning" size="sm">Beta</JBadge>
    </h3>
    <p>Try our new REST API.</p>
  </div>

  <div class="feature">
    <h3>
      Old Dashboard
      <JBadge variant="error" size="sm">Deprecated</JBadge>
    </h3>
    <p>This feature will be removed in v3.0.</p>
  </div>
</template>
```

---

## Examples

### Status Dashboard

```vue
<script setup>
const projects = [
  { name: 'Trans-Java Toll Road', status: 'completed', progress: 100 },
  { name: 'Jakarta-Bandung High Speed Rail', status: 'operational', progress: 100 },
  { name: 'Trans-Sumatra Toll Road', status: 'in-progress', progress: 67 },
  { name: 'New Capital City (IKN)', status: 'in-progress', progress: 45 },
]

const statusVariant = {
  'completed': 'success',
  'operational': 'primary',
  'in-progress': 'warning',
  'delayed': 'error'
}
</script>

<template>
  <div class="dashboard">
    <h2>Infrastructure Projects</h2>

    <div class="project-grid">
      <div
        v-for="project in projects"
        :key="project.name"
        class="project-card"
      >
        <h3>{{ project.name }}</h3>
        <div class="project-meta">
          <JBadge :variant="statusVariant[project.status]">
            {{ project.status }}
          </JBadge>
          <span class="progress">{{ project.progress }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: var(--joko-space-8);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--joko-space-6);
  margin-top: var(--joko-space-6);
}

.project-card {
  padding: var(--joko-space-6);
  background: var(--joko-white);
  border: 1px solid var(--joko-neutral-200);
  border-radius: var(--joko-rounded-lg);
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--joko-space-4);
}

.progress {
  font-weight: var(--joko-font-semibold);
  color: var(--joko-neutral-700);
}
</style>
```

---

## TypeScript

Full TypeScript support with exported types:

```ts
import type { JBadgeProps } from '@joko-ui/vue'

const badgeConfig: JBadgeProps = {
  variant: 'success',
  size: 'md',
  rounded: true
}
```

---

## Accessibility

JBadge is designed with accessibility in mind:

- ✅ **Semantic HTML** — Uses `<span>` element (inline)
- ✅ **High contrast** — Meets WCAG AA standards
- ✅ **Screen reader friendly** — Text content is announced properly
- ✅ **Not interactive** — Badges are display-only (use buttons for actions)

### Best Practices

**✅ DO:**
- Keep badge text short (1-2 words max)
- Use semantic variants appropriately
- Combine with icons when helpful
- Test color contrast in different themes

**❌ DON'T:**
- Make badges interactive (use buttons instead)
- Use badges for long text
- Rely only on color to convey meaning
- Use too many badges at once

---

## Design Tokens

JBadge uses these design tokens. Override them for customization:

```css
/* Colors - Primary */
--joko-red-100  /* Background */
--joko-red-800  /* Text */

/* Colors - Success */
--joko-success-100  /* Background */
--joko-success-800  /* Text */

/* Colors - Warning */
--joko-warning-100  /* Background */
--joko-warning-800  /* Text */

/* Colors - Error */
--joko-error-100    /* Background */
--joko-error-800    /* Text */

/* Colors - Neutral */
--joko-neutral-100  /* Background */
--joko-neutral-800  /* Text */

/* Spacing */
--joko-space-1  /* Padding Y (sm) */
--joko-space-2  /* Padding X (sm) */
--joko-space-3  /* Padding X (md) */
--joko-space-4  /* Padding X (lg) */

/* Typography */
--joko-font-sans    /* Font family */
--joko-font-medium  /* Font weight */
--joko-text-xs      /* Font size (sm/md) */
--joko-text-sm      /* Font size (lg) */

/* Border Radius */
--joko-rounded-md    /* Square badges */
--joko-rounded-full  /* Rounded badges */
```

---

## Related Components

- **[JButton](/components/button)** — For interactive actions
- **[JAlert](/components/alert)** — For larger status messages

---

## Philosophy in Action

JBadge embodies all four pillars:

- **🚶 Blusukan** — Clear, readable text with high contrast
- **🔄 Mental Revolusi** — Clean, semantic variants
- **💪 Kerja** — Immediate visual feedback at a glance
- **🌉 Infrastructure** — Consistent design tokens across variants

---

<div align="center">

*"Small markers of big progress"*

**Every badge tells a story of status and progress.**

</div>
