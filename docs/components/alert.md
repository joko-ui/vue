# JAlert

Clear, accessible alerts for communicating important information to users.

**[→ View in Storybook](http://localhost:6006/?path=/docs/components-jalert--docs)**

---

## Philosophy

> "Clear communication is essential for good governance"

Alerts must communicate clearly and immediately. Like Jokowi's direct communication style during Blusukan visits, JAlert ensures users understand what's happening—whether it's success, a warning, an error, or general information. Every alert is accessible, dismissible, and impossible to miss.

---

## Basic Usage

```vue
<script setup lang="ts">
import { JAlert } from '@joko-ui/vue'
</script>

<template>
  <JAlert variant="success" title="Success!">
    Your changes have been saved successfully.
  </JAlert>
</template>
```

---

## Variants

### Success
For positive feedback and successful operations.

<JAlert variant="success" title="Success">
  Your changes have been saved successfully.
</JAlert>

```vue
<JAlert variant="success" title="Success">
  Your changes have been saved successfully.
</JAlert>
```

### Warning
For important notices that require attention but aren't errors.

<JAlert variant="warning" title="Warning">
  This action cannot be undone. Please review before proceeding.
</JAlert>

```vue
<JAlert variant="warning" title="Warning">
  This action cannot be undone. Please review before proceeding.
</JAlert>
```

### Error
For errors and problems that need immediate attention.

<JAlert variant="error" title="Error">
  Failed to save changes. Please try again or contact support.
</JAlert>

```vue
<JAlert variant="error" title="Error">
  Failed to save changes. Please try again or contact support.
</JAlert>
```

### Info
For general information and helpful tips.

<JAlert variant="info" title="Info">
  You can save your progress at any time using Ctrl+S.
</JAlert>

```vue
<JAlert variant="info" title="Info">
  You can save your progress at any time using Ctrl+S.
</JAlert>
```

---

## Dismissible

Make alerts dismissible to let users clear them when done reading.

<JAlert variant="info" title="Tip" :dismissible="true">
  Click the X button to dismiss this alert.
</JAlert>

```vue
<script setup>
import { ref } from 'vue'

const showAlert = ref(true)
</script>

<template>
  <JAlert
    v-if="showAlert"
    variant="info"
    title="Tip"
    :dismissible="true"
    @dismiss="showAlert = false"
  >
    Click the X button to dismiss this alert.
  </JAlert>
</template>
```

---

## Without Title

Alerts don't require a title if the message is clear.

<JAlert variant="success">
  Changes saved successfully.
</JAlert>

```vue
<JAlert variant="success">
  Changes saved successfully.
</JAlert>
```

---

## Custom Icon

Override the default icon with a custom one.

```vue
<script setup>
import { JAlert } from '@joko-ui/vue'
import { Rocket } from 'lucide-vue-next'
</script>

<template>
  <JAlert variant="info" title="New Feature">
    <template #icon>
      <Rocket :size="24" />
    </template>
    We've launched a new feature! Check it out in settings.
  </JAlert>
</template>
```

---

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'success'` \| `'warning'` \| `'error'` \| `'info'` | `'info'` | Visual style and semantic meaning |
| `title` | `string` | `undefined` | Optional title/heading for the alert |
| `dismissible` | `boolean` | `false` | Shows close button if true |

---

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@dismiss` | none | Emitted when close button is clicked |

---

## Slots

| Slot | Description |
|------|-------------|
| `default` | Main alert content/message |
| `icon` | Custom icon (replaces default variant icon) |

---

## Accessibility

JAlert is designed for maximum accessibility:

- ✅ **ARIA role** — Uses `role="alert"` for screen reader announcements
- ✅ **Semantic colors** — Color + icon + text (not color alone)
- ✅ **Keyboard accessible** — Close button is keyboard focusable
- ✅ **Clear labels** — Close button has `aria-label="Close alert"`
- ✅ **High contrast** — Meets WCAG AA standards
- ✅ **Focus visible** — Clear focus indicators on interactive elements

### Best Practices

**✅ DO:**
- Keep messages concise and actionable
- Use appropriate variant for context
- Provide next steps in error messages
- Make important alerts dismissible
- Test with screen readers

**❌ DON'T:**
- Use alerts for non-important information
- Rely only on color to convey meaning
- Auto-dismiss important errors
- Show multiple alerts at once (stack them)
- Use vague error messages

---

## Examples

### Form Validation

```vue
<script setup>
import { ref } from 'vue'

const email = ref('')
const error = ref('')

function validateEmail() {
  if (!email.value.includes('@')) {
    error.value = 'Please enter a valid email address'
  } else {
    error.value = ''
  }
}
</script>

<template>
  <form>
    <JAlert
      v-if="error"
      variant="error"
      title="Validation Error"
      :dismissible="true"
      @dismiss="error = ''"
    >
      {{ error }}
    </JAlert>

    <input
      v-model="email"
      type="email"
      @blur="validateEmail"
      placeholder="Email address"
    />
  </form>
</template>
```

### Success Feedback

```vue
<script setup>
import { ref } from 'vue'

const showSuccess = ref(false)

async function saveChanges() {
  await api.save()
  showSuccess.value = true

  // Auto-dismiss after 3 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 3000)
}
</script>

<template>
  <div>
    <JAlert
      v-if="showSuccess"
      variant="success"
      title="Saved!"
      :dismissible="true"
      @dismiss="showSuccess = false"
    >
      Your changes have been saved successfully.
    </JAlert>

    <JButton @click="saveChanges">
      Save Changes
    </JButton>
  </div>
</template>
```

### Multi-Line Content

```vue
<template>
  <JAlert variant="warning" title="Important Notice">
    <p>This action will affect multiple resources:</p>
    <ul>
      <li>3 projects will be archived</li>
      <li>12 files will be moved</li>
      <li>5 users will lose access</li>
    </ul>
    <p>This cannot be undone.</p>
  </JAlert>
</template>
```

### Alert Stack

```vue
<script setup>
import { ref } from 'vue'

const alerts = ref([
  { id: 1, variant: 'success', message: 'File uploaded successfully' },
  { id: 2, variant: 'warning', message: 'Large file size detected' },
  { id: 3, variant: 'info', message: 'Processing may take a few minutes' }
])

function removeAlert(id) {
  alerts.value = alerts.value.filter(a => a.id !== id)
}
</script>

<template>
  <div class="alert-stack">
    <JAlert
      v-for="alert in alerts"
      :key="alert.id"
      :variant="alert.variant"
      :dismissible="true"
      @dismiss="removeAlert(alert.id)"
    >
      {{ alert.message }}
    </JAlert>
  </div>
</template>

<style scoped>
.alert-stack {
  display: flex;
  flex-direction: column;
  gap: var(--joko-space-4);
  max-width: 600px;
}
</style>
```

---

## TypeScript

Full TypeScript support with exported types:

```ts
import type { JAlertProps } from '@joko-ui/vue'

const alertConfig: JAlertProps = {
  variant: 'success',
  title: 'Operation Complete',
  dismissible: true
}
```

---

## Design Tokens

JAlert uses these design tokens. Override them for customization:

```css
/* Colors - Success */
--joko-success-50   /* Background */
--joko-success-600  /* Border and icon */
--joko-success-900  /* Text */

/* Colors - Warning */
--joko-warning-50   /* Background */
--joko-warning-600  /* Border and icon */
--joko-warning-900  /* Text */

/* Colors - Error */
--joko-error-50     /* Background */
--joko-error-600    /* Border and icon */
--joko-error-900    /* Text */

/* Colors - Info */
--joko-info-50      /* Background */
--joko-info-600     /* Border and icon */
--joko-info-900     /* Text */

/* Spacing */
--joko-space-4   /* Internal padding and gap */

/* Border Radius */
--joko-rounded-lg  /* Alert corners */
```

---

## Related Components

- **[JButton](/components/button)** — Often used alongside alerts for actions
- **[JBadge](/components/badge)** — For inline status indicators

---

## Philosophy in Action

JAlert embodies all four pillars:

- **🚶 Blusukan** — Clear, direct communication accessible to everyone
- **🔄 Mental Revolusi** — Clean, semantic variants with proper ARIA roles
- **💪 Kerja** — Immediate feedback with clear next steps
- **🌉 Infrastructure** — Consistent design tokens across all variants

---

<div align="center">

*"Clear communication builds trust"*

**Every alert is an opportunity to help users understand what's happening.**

</div>
