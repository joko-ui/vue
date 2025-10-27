# Components

Joko-UI provides a comprehensive set of Vue 3 components inspired by Joko Widodo's leadership and Indonesian identity.

## Available Components

### Action Components

<div class="component-grid">
  <div class="component-card">
    <div class="component-icon">🔘</div>
    <h3>JButton</h3>
    <p>Presidential buttons for primary actions. Multiple variants, sizes, and states.</p>
    <div class="component-links">
      <a href="/components/button">Documentation →</a>
      <a href="http://localhost:6006/?path=/docs/components-jbutton--docs" target="_blank">Storybook ↗</a>
    </div>
  </div>
</div>

### Feedback Components

<div class="component-grid">
  <div class="component-card">
    <div class="component-icon">📢</div>
    <h3>JAlert</h3>
    <p>Clear, accessible alerts for success, warning, error, and info messages.</p>
    <div class="component-links">
      <a href="/components/alert">Documentation →</a>
      <a href="http://localhost:6006/?path=/docs/components-jalert--docs" target="_blank">Storybook ↗</a>
    </div>
  </div>
</div>

### Display Components

<div class="component-grid">
  <div class="component-card">
    <div class="component-icon">🏷️</div>
    <h3>JBadge</h3>
    <p>Versatile badges for status indicators, labels, and counts.</p>
    <div class="component-links">
      <a href="/components/badge">Documentation →</a>
      <a href="http://localhost:6006/?path=/docs/components-jbadge--docs" target="_blank">Storybook ↗</a>
    </div>
  </div>
</div>

## Component Principles

All Joko-UI components follow these core principles:

### 🏗️ Built to Last
Like infrastructure projects, components are engineered for reliability and long-term use.

### 🤝 Accessible by Default
WCAG 2.1 AA compliant with keyboard navigation, screen reader support, and proper ARIA attributes.

### 🎨 Themeable
Consistent use of design tokens allows easy customization while maintaining the design system.

### 📱 Responsive
All components work seamlessly across devices from mobile to desktop.

### ⚡ Performance-Focused
Optimized bundle sizes, tree-shakeable exports, and efficient rendering.

### 🔧 Developer-Friendly
Full TypeScript support, clear props, emitted events, and comprehensive documentation.

## Usage Patterns

### Import Individual Components

```ts
import { JButton, JAlert } from '@joko-ui/vue'
```

### Use with TypeScript

```ts
import type { JButtonProps, JAlertProps } from '@joko-ui/vue'
```

### Customize with Design Tokens

```vue
<style scoped>
.my-component {
  --joko-red-600: #your-custom-color;
}
</style>
```

## Coming Soon

We're actively working on expanding the component library. Upcoming components include:

- **JInput** - Text inputs, textareas, and form controls
- **JSelect** - Dropdown selection component
- **JCheckbox & JRadio** - Selection controls
- **JCard** - Container component for grouped content
- **JModal** - Dialog and modal overlays
- **JTable** - Data tables with sorting and pagination
- **JTabs** - Tabbed navigation component
- **And more!**

Want to request a component? [Open an issue on GitHub](https://github.com/yourusername/joko-ui/issues)

## Component Status

| Component | Status | Version |
|-----------|--------|---------|
| JButton | ✅ Stable | 1.0.0 |
| JAlert | ✅ Stable | 1.0.0 |
| JBadge | ✅ Stable | 1.0.0 |
| JInput | 🚧 In Progress | - |
| JCard | 📋 Planned | - |
| JModal | 📋 Planned | - |

---

<style scoped>
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.component-card {
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: var(--joko-rounded-xl);
  transition: all var(--joko-transition-normal);
}

.component-card:hover {
  border-color: var(--joko-red-600);
  box-shadow: var(--joko-shadow-lg);
  transform: translateY(-4px);
}

.component-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.component-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: var(--vp-c-text-1);
}

.component-card p {
  color: var(--vp-c-text-2);
  margin: 0.5rem 0 1rem;
  line-height: 1.6;
}

.component-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.component-links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--joko-blue-600);
  text-decoration: none;
}

.component-links a:hover {
  color: var(--joko-red-600);
}
</style>
