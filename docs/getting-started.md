# Getting Started

Get up and running with Joko-UI in minutes. This guide will help you install and start using the component library in your Vue 3 project.

## Installation

::: code-group

```sh [pnpm]
pnpm add @joko-ui/vue
```

```sh [npm]
npm install @joko-ui/vue
```

```sh [yarn]
yarn add @joko-ui/vue
```

```sh [bun]
bun add @joko-ui/vue
```

:::

## Basic Usage

### 1. Import Global Styles

Import the Joko-UI base styles in your `main.ts` or `main.js`:

```ts
import { createApp } from 'vue'
import App from './App.vue'

// Import Joko-UI base styles
import '@joko-ui/vue/dist/style.css'

createApp(App).mount('#app')
```

### 2. Import Components

You can import components individually for optimal tree-shaking:

```vue
<script setup lang="ts">
import { JButton, JAlert, JBadge } from '@joko-ui/vue'
</script>

<template>
  <div>
    <JButton variant="primary" @click="handleClick">
      Click Me
    </JButton>

    <JAlert variant="success" title="Success!">
      Your action was completed successfully.
    </JAlert>

    <JBadge variant="primary">New</JBadge>
  </div>
</template>
```

### 3. Register Components Globally (Optional)

If you prefer to register components globally:

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { JButton, JAlert, JBadge } from '@joko-ui/vue'
import '@joko-ui/vue/dist/style.css'

const app = createApp(App)

// Register components globally
app.component('JButton', JButton)
app.component('JAlert', JAlert)
app.component('JBadge', JBadge)

app.mount('#app')
```

Then use them without imports:

```vue
<template>
  <JButton variant="primary">Click Me</JButton>
</template>
```

## TypeScript Support

Joko-UI is built with TypeScript and provides full type definitions. Type support works automatically when using the components:

```vue
<script setup lang="ts">
import { JButton } from '@joko-ui/vue'
import type { JButtonProps } from '@joko-ui/vue'

// Props are fully typed
const buttonProps: JButtonProps = {
  variant: 'primary',
  size: 'md',
  disabled: false
}
</script>
```

## Using Design Tokens

Joko-UI provides a comprehensive set of CSS custom properties (design tokens) that you can use in your own components:

```vue
<style scoped>
.my-component {
  /* Use Joko-UI color tokens */
  color: var(--joko-red-600);
  background-color: var(--joko-neutral-50);

  /* Use spacing tokens */
  padding: var(--joko-space-6);
  margin-bottom: var(--joko-space-4);

  /* Use typography tokens */
  font-family: var(--joko-font-sans);
  font-size: var(--joko-text-lg);
  font-weight: var(--joko-font-semibold);

  /* Use border radius tokens */
  border-radius: var(--joko-rounded-lg);

  /* Use transition tokens */
  transition: all var(--joko-transition-base) var(--joko-ease-out);
}
</style>
```

See the [Design Tokens](/tokens) page for a complete reference.

## Quick Example

Here's a complete example of a simple form using Joko-UI components:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { JButton, JAlert } from '@joko-ui/vue'

const showSuccess = ref(false)

const handleSubmit = () => {
  // Handle form submission
  showSuccess.value = true

  // Hide alert after 3 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 3000)
}
</script>

<template>
  <div class="form-container">
    <h2>Proyek Baru</h2>

    <JAlert
      v-if="showSuccess"
      variant="success"
      title="Berhasil!"
      :dismissible="true"
      @dismiss="showSuccess = false"
    >
      Proyek Anda telah berhasil dibuat.
    </JAlert>

    <form @submit.prevent="handleSubmit">
      <!-- Your form fields here -->

      <div class="form-actions">
        <JButton variant="ghost" type="button">
          Batal
        </JButton>
        <JButton variant="primary" type="submit">
          Buat Proyek
        </JButton>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: var(--joko-space-8);
}

h2 {
  font-family: var(--joko-font-heading);
  font-size: var(--joko-text-3xl);
  font-weight: var(--joko-font-semibold);
  color: var(--joko-neutral-900);
  margin-bottom: var(--joko-space-6);
}

.form-actions {
  display: flex;
  gap: var(--joko-space-4);
  justify-content: flex-end;
  margin-top: var(--joko-space-8);
}
</style>
```

## Browser Support

Joko-UI supports all modern browsers:

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)

## Next Steps

- **[Explore Components](/components/)** - Browse all available components
- **[Design Principles](/design-principles)** - Learn about the design philosophy
- **[Design Tokens](/tokens)** - Reference for all design tokens
- **[Storybook](http://localhost:6006)** - Interactive component playground

## Need Help?

- 📚 Check our [component documentation](/components/)
- 🎨 Browse [Storybook examples](http://localhost:6006)
- 🐛 Report issues on [GitHub](https://github.com/yourusername/joko-ui/issues)

---

*"Kerja, kerja, kerja" - Start building with Joko-UI today!*
