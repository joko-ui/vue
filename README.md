# Joko-UI

<div align="center">

**Vue 3 UI component library inspired by Joko Widodo's leadership and Indonesian identity**

[![npm version](https://img.shields.io/npm/v/@joko-ui/vue.svg)](https://www.npmjs.com/package/@joko-ui/vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

[Documentation](https://github.com/yourusername/joko-ui) • [Components](https://github.com/yourusername/joko-ui) • [Storybook](https://github.com/yourusername/joko-ui)

> **Pronunciation:** Joko-UI is pronounced like "Jokowi" (JO-ko, rhyming with "cocoa"), not "yo-ko" or "jah-ko".

</div>

---

## ✨ Features

- 🏗️ **Infrastructure-Inspired** - Built like the foundations of Indonesia's development projects
- 🤝 **Accessible** - WCAG 2.1 AA compliant with full keyboard and screen reader support
- 🚀 **Modern** - Built with Vue 3, TypeScript, and Composition API
- 🇮🇩 **Indonesian at Heart** - Colors inspired by national identity, optional batik patterns
- 🎨 **Complete Design System** - Comprehensive tokens, typography, and spacing systems
- 📦 **Tree-shakeable** - Import only what you need
- 💪 **Fully Typed** - Written in TypeScript with complete type definitions

## 📦 Installation

```bash
# pnpm
pnpm add @joko-ui/vue

# npm
npm install @joko-ui/vue

# yarn
yarn add @joko-ui/vue

# bun
bun add @joko-ui/vue
```

## 🚀 Quick Start

### 1. Import Styles

```ts
// main.ts
import '@joko-ui/vue/dist/style.css'
```

### 2. Use Components

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

## 📚 Available Components

| Component | Description | Status |
|-----------|-------------|--------|
| JButton | Presidential buttons for primary actions | ✅ Stable |
| JAlert | Clear, accessible alerts for all message types | ✅ Stable |
| JBadge | Versatile badges for status and labels | ✅ Stable |
| JInput | Form inputs and controls | 🚧 Coming Soon |
| JCard | Container component | 🚧 Coming Soon |
| JModal | Dialog overlays | 🚧 Coming Soon |

## 🎨 Design Philosophy

> **"Kerja, kerja, kerja"** (Work, work, work) - Joko Widodo

Joko-UI embodies the values of Joko Widodo's presidency:

- **Solid Foundation** - Like infrastructure projects, built to last
- **Clear Communication** - Transparent, understandable interfaces
- **Progressive Enhancement** - Modern technology serving timeless needs
- **Cultural Identity** - Celebrating Indonesian design and heritage

## 💡 Design Tokens

Use Joko-UI design tokens in your own components:

```vue
<style scoped>
.my-component {
  /* Colors */
  color: var(--joko-red-600);
  background: var(--joko-neutral-50);

  /* Spacing */
  padding: var(--joko-space-6);
  margin: var(--joko-space-4);

  /* Typography */
  font-family: var(--joko-font-sans);
  font-size: var(--joko-text-lg);

  /* Border Radius */
  border-radius: var(--joko-rounded-lg);

  /* Transitions */
  transition: all var(--joko-transition-base) var(--joko-ease-out);
}
</style>
```

## 🌈 Color Palette

### Merah Jokowi (Primary Red)
Authoritative, passionate, action-oriented
- Primary: `#dc2626` (red-600)

### Biru Pembangunan (Development Blue)
Trust, stability, progress
- Primary: `#2563eb` (blue-600)

## 📖 Documentation

Visit our [documentation](https://github.com/yourusername/joko-ui) for:

- Complete component API
- Design principles
- Design tokens reference
- Usage examples
- Accessibility guidelines

## 🛠️ TypeScript Support

Joko-UI is built with TypeScript and provides full type definitions:

```ts
import type { JButtonProps, JAlertProps } from '@joko-ui/vue'

const buttonProps: JButtonProps = {
  variant: 'primary',
  size: 'md',
  disabled: false
}
```

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guidelines](https://github.com/yourusername/joko-ui/blob/main/CONTRIBUTING.md) before submitting PRs.

## 📄 License

MIT License © [Your Name]

## 🙏 Acknowledgments

Inspired by Joko Widodo's leadership (2014-2024) and Indonesia's remarkable infrastructure development era.

---

<div align="center">

**Built with purpose. Built for the people. Build with Joko-UI.**

</div>
