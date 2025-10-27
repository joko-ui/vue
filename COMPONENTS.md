# Joko-UI Component Specifications & Examples

Detailed component specifications with Vue 3 implementation examples.

---

## Table of Contents

1. [Button Component](#button-component)
2. [Input Component](#input-component)
3. [Card Component](#card-component)
4. [Alert Component](#alert-component)
5. [Badge Component](#badge-component)
6. [Modal Component](#modal-component)
7. [Navigation Components](#navigation-components)
8. [Table Component](#table-component)

---

## Button Component

### Variants

#### Primary Button
```vue
<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="joko-button-spinner"></span>
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => [
  'joko-button',
  `joko-button--${props.variant}`,
  `joko-button--${props.size}`,
  {
    'joko-button--disabled': props.disabled,
    'joko-button--loading': props.loading,
    'joko-button--full-width': props.fullWidth,
  },
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.joko-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--joko-space-2);
  font-family: var(--joko-font-sans);
  font-weight: var(--joko-font-medium);
  border: none;
  cursor: pointer;
  transition: all var(--joko-transition-base) var(--joko-ease-out);
  white-space: nowrap;
  user-select: none;
}

.joko-button:focus-visible {
  outline: 2px solid var(--joko-blue-500);
  outline-offset: 2px;
}

/* Variants */
.joko-button--primary {
  background-color: var(--joko-red-600);
  color: var(--joko-white);
}

.joko-button--primary:hover:not(:disabled) {
  background-color: var(--joko-red-700);
  transform: scale(1.02);
}

.joko-button--primary:active:not(:disabled) {
  background-color: var(--joko-red-800);
  transform: scale(0.98);
}

.joko-button--secondary {
  background-color: var(--joko-blue-600);
  color: var(--joko-white);
}

.joko-button--secondary:hover:not(:disabled) {
  background-color: var(--joko-blue-700);
  transform: scale(1.02);
}

.joko-button--outline {
  background-color: transparent;
  color: var(--joko-red-600);
  border: 2px solid var(--joko-red-600);
}

.joko-button--outline:hover:not(:disabled) {
  background-color: var(--joko-red-50);
}

.joko-button--ghost {
  background-color: transparent;
  color: var(--joko-neutral-700);
}

.joko-button--ghost:hover:not(:disabled) {
  background-color: var(--joko-neutral-100);
}

.joko-button--link {
  background-color: transparent;
  color: var(--joko-blue-600);
  text-decoration: none;
}

.joko-button--link:hover:not(:disabled) {
  text-decoration: underline;
  color: var(--joko-blue-700);
}

/* Sizes */
.joko-button--xs {
  padding: var(--joko-space-1.5) var(--joko-space-3);
  font-size: var(--joko-text-xs);
  border-radius: var(--joko-rounded-md);
}

.joko-button--sm {
  padding: var(--joko-space-2) var(--joko-space-4);
  font-size: var(--joko-text-sm);
  border-radius: var(--joko-rounded-md);
}

.joko-button--md {
  padding: var(--joko-space-3) var(--joko-space-6);
  font-size: var(--joko-text-base);
  border-radius: var(--joko-rounded-lg);
}

.joko-button--lg {
  padding: var(--joko-space-4) var(--joko-space-8);
  font-size: var(--joko-text-lg);
  border-radius: var(--joko-rounded-lg);
}

.joko-button--xl {
  padding: var(--joko-space-5) var(--joko-space-10);
  font-size: var(--joko-text-xl);
  border-radius: var(--joko-rounded-xl);
}

/* States */
.joko-button--disabled,
.joko-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.joko-button--loading {
  cursor: wait;
}

.joko-button--full-width {
  width: 100%;
}

.joko-button-spinner {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: joko-spin 1s linear infinite;
}

@keyframes joko-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
```

### Usage Examples

```vue
<!-- Primary CTA -->
<JokoButton variant="primary" size="lg" @click="handleSubmit">
  Submit Application
</JokoButton>

<!-- Secondary Action -->
<JokoButton variant="secondary" @click="handleCancel">
  Cancel
</JokoButton>

<!-- Loading State -->
<JokoButton variant="primary" :loading="isSubmitting">
  <span v-if="!isSubmitting">Save Changes</span>
  <span v-else>Saving...</span>
</JokoButton>

<!-- With Icon -->
<JokoButton variant="outline">
  <IconPlus />
  Add Item
</JokoButton>

<!-- Full Width (Mobile) -->
<JokoButton variant="primary" full-width>
  Continue
</JokoButton>
```

---

## Input Component

### Text Input

```vue
<template>
  <div class="joko-input-wrapper">
    <label
      v-if="label"
      :for="inputId"
      class="joko-input-label"
    >
      {{ label }}
      <span v-if="required" class="joko-input-required">*</span>
    </label>

    <div class="joko-input-container">
      <span v-if="$slots.prefix" class="joko-input-prefix">
        <slot name="prefix" />
      </span>

      <input
        :id="inputId"
        v-model="internalValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :class="inputClasses"
        @blur="handleBlur"
        @focus="handleFocus"
      />

      <span v-if="$slots.suffix" class="joko-input-suffix">
        <slot name="suffix" />
      </span>
    </div>

    <p v-if="helperText || error" :class="helperClasses">
      {{ error || helperText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  modelValue?: string | number
  label?: string
  placeholder?: string
  helperText?: string
  error?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  disabled: false,
  readonly: false,
  required: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()

const inputId = computed(() => props.id || `joko-input-${Math.random().toString(36).slice(2)}`)
const isFocused = ref(false)

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const inputClasses = computed(() => [
  'joko-input',
  {
    'joko-input--error': props.error,
    'joko-input--disabled': props.disabled,
    'joko-input--focused': isFocused.value,
  },
])

const helperClasses = computed(() => [
  'joko-input-helper',
  {
    'joko-input-helper--error': props.error,
  },
])

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}
</script>

<style scoped>
.joko-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--joko-space-2);
}

.joko-input-label {
  font-size: var(--joko-text-sm);
  font-weight: var(--joko-font-medium);
  color: var(--joko-neutral-700);
}

.joko-input-required {
  color: var(--joko-error-600);
  margin-left: var(--joko-space-1);
}

.joko-input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.joko-input {
  width: 100%;
  padding: var(--joko-space-3) var(--joko-space-4);
  font-size: var(--joko-text-base);
  font-family: var(--joko-font-sans);
  color: var(--joko-neutral-900);
  background-color: var(--joko-white);
  border: 1px solid var(--joko-neutral-300);
  border-radius: var(--joko-rounded-lg);
  transition: all var(--joko-transition-base) var(--joko-ease-out);
}

.joko-input::placeholder {
  color: var(--joko-neutral-400);
}

.joko-input:focus {
  outline: none;
  border-color: var(--joko-blue-500);
  border-width: 2px;
  background-color: var(--joko-blue-50);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.joko-input--error {
  border-color: var(--joko-error-500);
  background-color: var(--joko-error-50);
}

.joko-input--error:focus {
  border-color: var(--joko-error-500);
  background-color: var(--joko-error-50);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.joko-input--disabled {
  background-color: var(--joko-neutral-100);
  color: var(--joko-neutral-400);
  cursor: not-allowed;
}

.joko-input-prefix,
.joko-input-suffix {
  position: absolute;
  display: flex;
  align-items: center;
  color: var(--joko-neutral-500);
}

.joko-input-prefix {
  left: var(--joko-space-4);
}

.joko-input-suffix {
  right: var(--joko-space-4);
}

.joko-input:has(+ .joko-input-prefix) {
  padding-left: var(--joko-space-12);
}

.joko-input:has(+ .joko-input-suffix) {
  padding-right: var(--joko-space-12);
}

.joko-input-helper {
  font-size: var(--joko-text-sm);
  color: var(--joko-neutral-600);
}

.joko-input-helper--error {
  color: var(--joko-error-600);
}
</style>
```

### Usage Examples

```vue
<!-- Basic Input -->
<JokoInput
  v-model="name"
  label="Full Name"
  placeholder="Enter your name"
  required
/>

<!-- Input with Helper Text -->
<JokoInput
  v-model="email"
  label="Email Address"
  type="email"
  helper-text="We'll never share your email with anyone else."
/>

<!-- Input with Error -->
<JokoInput
  v-model="password"
  label="Password"
  type="password"
  :error="passwordError"
/>

<!-- Input with Prefix Icon -->
<JokoInput
  v-model="searchQuery"
  placeholder="Search..."
>
  <template #prefix>
    <IconSearch />
  </template>
</JokoInput>
```

---

## Card Component

```vue
<template>
  <div :class="cardClasses" @click="handleClick">
    <header v-if="$slots.header || title" class="joko-card-header">
      <slot name="header">
        <h3 class="joko-card-title">{{ title }}</h3>
      </slot>
    </header>

    <div class="joko-card-body">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="joko-card-footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'elevated' | 'outlined' | 'interactive'
  title?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const cardClasses = computed(() => [
  'joko-card',
  `joko-card--${props.variant}`,
  `joko-card--padding-${props.padding}`,
])

const handleClick = (event: MouseEvent) => {
  if (props.variant === 'interactive') {
    emit('click', event)
  }
}
</script>

<style scoped>
.joko-card {
  background-color: var(--joko-white);
  border-radius: var(--joko-rounded-xl);
  transition: all var(--joko-transition-normal) var(--joko-ease-out);
}

.joko-card--default {
  border: 1px solid var(--joko-neutral-200);
  box-shadow: var(--joko-shadow-sm);
}

.joko-card--elevated {
  border: none;
  box-shadow: var(--joko-shadow-lg);
}

.joko-card--elevated:hover {
  box-shadow: var(--joko-shadow-xl);
  transform: translateY(-2px);
}

.joko-card--outlined {
  border: 2px solid var(--joko-neutral-300);
  box-shadow: none;
}

.joko-card--interactive {
  border: none;
  box-shadow: var(--joko-shadow-lg);
  cursor: pointer;
}

.joko-card--interactive:hover {
  box-shadow: var(--joko-shadow-xl);
  transform: scale(1.02) translateY(-2px);
}

.joko-card--interactive:active {
  box-shadow: var(--joko-shadow-md);
  transform: scale(1);
}

/* Padding variants */
.joko-card--padding-none {
  padding: 0;
}

.joko-card--padding-sm {
  padding: var(--joko-space-4);
}

.joko-card--padding-md {
  padding: var(--joko-space-6);
}

.joko-card--padding-lg {
  padding: var(--joko-space-8);
}

.joko-card-header {
  padding-bottom: var(--joko-space-4);
  border-bottom: 1px solid var(--joko-neutral-200);
  margin-bottom: var(--joko-space-6);
}

.joko-card-title {
  font-size: var(--joko-text-xl);
  font-weight: var(--joko-font-semibold);
  color: var(--joko-neutral-900);
  margin: 0;
}

.joko-card-body {
  color: var(--joko-neutral-700);
}

.joko-card-footer {
  padding-top: var(--joko-space-4);
  border-top: 1px solid var(--joko-neutral-200);
  margin-top: var(--joko-space-6);
  background-color: var(--joko-neutral-50);
  border-radius: 0 0 var(--joko-rounded-xl) var(--joko-rounded-xl);
  margin-left: calc(-1 * var(--joko-space-6));
  margin-right: calc(-1 * var(--joko-space-6));
  margin-bottom: calc(-1 * var(--joko-space-6));
  padding-left: var(--joko-space-6);
  padding-right: var(--joko-space-6);
  padding-bottom: var(--joko-space-6);
}
</style>
```

### Usage Examples

```vue
<!-- Basic Card -->
<JokoCard title="Infrastructure Projects">
  <p>View and manage ongoing infrastructure development projects across Indonesia.</p>
</JokoCard>

<!-- Elevated Card -->
<JokoCard variant="elevated">
  <template #header>
    <div class="flex items-center justify-between">
      <h3>Dashboard Stats</h3>
      <IconChart />
    </div>
  </template>

  <div class="stats-grid">
    <!-- Stats content -->
  </div>
</JokoCard>

<!-- Interactive Card -->
<JokoCard variant="interactive" @click="navigateToProject">
  <h4>Trans-Java Toll Road</h4>
  <p>Completed 2018 - Connecting major cities across Java island</p>
</JokoCard>

<!-- Card with Footer -->
<JokoCard title="Project Details">
  <p>Project information and description goes here.</p>

  <template #footer>
    <div class="flex gap-4">
      <JokoButton variant="primary">Approve</JokoButton>
      <JokoButton variant="outline">Review</JokoButton>
    </div>
  </template>
</JokoCard>
```

---

## Alert Component

```vue
<template>
  <div :class="alertClasses" role="alert">
    <div class="joko-alert-icon">
      <slot name="icon">
        <component :is="iconComponent" />
      </slot>
    </div>

    <div class="joko-alert-content">
      <h4 v-if="title" class="joko-alert-title">{{ title }}</h4>
      <p class="joko-alert-description">
        <slot />
      </p>
    </div>

    <button
      v-if="dismissible"
      class="joko-alert-close"
      @click="handleDismiss"
      aria-label="Close alert"
    >
      <IconX />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import IconCheckCircle from './icons/IconCheckCircle.vue'
import IconAlertTriangle from './icons/IconAlertTriangle.vue'
import IconXCircle from './icons/IconXCircle.vue'
import IconInfo from './icons/IconInfo.vue'
import IconX from './icons/IconX.vue'

interface Props {
  variant?: 'success' | 'warning' | 'error' | 'info'
  title?: string
  dismissible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'info',
  dismissible: false,
})

const emit = defineEmits<{
  dismiss: []
}>()

const alertClasses = computed(() => [
  'joko-alert',
  `joko-alert--${props.variant}`,
])

const iconComponent = computed(() => {
  const icons = {
    success: IconCheckCircle,
    warning: IconAlertTriangle,
    error: IconXCircle,
    info: IconInfo,
  }
  return icons[props.variant]
})

const handleDismiss = () => {
  emit('dismiss')
}
</script>

<style scoped>
.joko-alert {
  position: relative;
  display: flex;
  gap: var(--joko-space-4);
  padding: var(--joko-space-4);
  border-radius: var(--joko-rounded-lg);
  border-left-width: 4px;
  border-left-style: solid;
}

.joko-alert--success {
  background-color: var(--joko-success-50);
  border-left-color: var(--joko-success-600);
}

.joko-alert--success .joko-alert-icon {
  color: var(--joko-success-600);
}

.joko-alert--success .joko-alert-title {
  color: var(--joko-success-900);
}

.joko-alert--success .joko-alert-description {
  color: var(--joko-success-900);
}

.joko-alert--warning {
  background-color: var(--joko-warning-50);
  border-left-color: var(--joko-warning-600);
}

.joko-alert--warning .joko-alert-icon {
  color: var(--joko-warning-600);
}

.joko-alert--warning .joko-alert-title {
  color: var(--joko-warning-900);
}

.joko-alert--warning .joko-alert-description {
  color: var(--joko-warning-900);
}

.joko-alert--error {
  background-color: var(--joko-error-50);
  border-left-color: var(--joko-error-600);
}

.joko-alert--error .joko-alert-icon {
  color: var(--joko-error-600);
}

.joko-alert--error .joko-alert-title {
  color: var(--joko-error-900);
}

.joko-alert--error .joko-alert-description {
  color: var(--joko-error-900);
}

.joko-alert--info {
  background-color: var(--joko-info-50);
  border-left-color: var(--joko-info-600);
}

.joko-alert--info .joko-alert-icon {
  color: var(--joko-info-600);
}

.joko-alert--info .joko-alert-title {
  color: var(--joko-info-900);
}

.joko-alert--info .joko-alert-description {
  color: var(--joko-info-900);
}

.joko-alert-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}

.joko-alert-content {
  flex: 1;
}

.joko-alert-title {
  font-size: var(--joko-text-base);
  font-weight: var(--joko-font-semibold);
  margin: 0 0 var(--joko-space-2) 0;
}

.joko-alert-description {
  font-size: var(--joko-text-sm);
  margin: 0;
}

.joko-alert-close {
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: currentColor;
  opacity: 0.6;
  transition: opacity var(--joko-transition-base);
}

.joko-alert-close:hover {
  opacity: 1;
}
</style>
```

### Usage Examples

```vue
<!-- Success Alert -->
<JokoAlert variant="success" title="Success!" dismissible>
  Your project has been successfully submitted for review.
</JokoAlert>

<!-- Warning Alert -->
<JokoAlert variant="warning" title="Attention Required">
  Please review the budget allocation before proceeding.
</JokoAlert>

<!-- Error Alert -->
<JokoAlert variant="error" title="Error" dismissible @dismiss="handleDismiss">
  Failed to upload document. Please try again.
</JokoAlert>

<!-- Info Alert (no title) -->
<JokoAlert variant="info">
  Infrastructure meeting scheduled for tomorrow at 10:00 AM.
</JokoAlert>
```

---

## Badge Component

```vue
<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'neutral',
  size: 'md',
  rounded: true,
})

const badgeClasses = computed(() => [
  'joko-badge',
  `joko-badge--${props.variant}`,
  `joko-badge--${props.size}`,
  {
    'joko-badge--rounded': props.rounded,
  },
])
</script>

<style scoped>
.joko-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--joko-font-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.joko-badge--primary {
  background-color: var(--joko-red-100);
  color: var(--joko-red-800);
}

.joko-badge--success {
  background-color: var(--joko-success-100);
  color: var(--joko-success-800);
}

.joko-badge--warning {
  background-color: var(--joko-warning-100);
  color: var(--joko-warning-800);
}

.joko-badge--error {
  background-color: var(--joko-error-100);
  color: var(--joko-error-800);
}

.joko-badge--neutral {
  background-color: var(--joko-neutral-100);
  color: var(--joko-neutral-800);
}

.joko-badge--sm {
  padding: var(--joko-space-1) var(--joko-space-2);
  font-size: var(--joko-text-xs);
}

.joko-badge--md {
  padding: var(--joko-space-1) var(--joko-space-3);
  font-size: var(--joko-text-xs);
}

.joko-badge--lg {
  padding: var(--joko-space-2) var(--joko-space-4);
  font-size: var(--joko-text-sm);
}

.joko-badge--rounded {
  border-radius: var(--joko-rounded-full);
}

.joko-badge:not(.joko-badge--rounded) {
  border-radius: var(--joko-rounded-md);
}
</style>
```

### Usage Examples

```vue
<!-- Status Badges -->
<JokoBadge variant="success">Active</JokoBadge>
<JokoBadge variant="warning">Pending</JokoBadge>
<JokoBadge variant="error">Cancelled</JokoBadge>
<JokoBadge variant="primary">Featured</JokoBadge>

<!-- Sizes -->
<JokoBadge size="sm">Small</JokoBadge>
<JokoBadge size="md">Medium</JokoBadge>
<JokoBadge size="lg">Large</JokoBadge>

<!-- Not Rounded -->
<JokoBadge :rounded="false">Squared</JokoBadge>
```

---

## Modal Component

```vue
<template>
  <Teleport to="body">
    <Transition name="joko-modal">
      <div v-if="modelValue" class="joko-modal-overlay" @click="handleOverlayClick">
        <div
          :class="modalClasses"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
          @click.stop
        >
          <header v-if="$slots.header || title" class="joko-modal-header">
            <h2 :id="titleId" class="joko-modal-title">
              <slot name="header">{{ title }}</slot>
            </h2>
            <button
              v-if="closable"
              class="joko-modal-close"
              @click="handleClose"
              aria-label="Close modal"
            >
              <IconX />
            </button>
          </header>

          <div class="joko-modal-body">
            <slot />
          </div>

          <footer v-if="$slots.footer" class="joko-modal-footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import IconX from './icons/IconX.vue'

interface Props {
  modelValue: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  closable?: boolean
  closeOnOverlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  closable: true,
  closeOnOverlay: true,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const titleId = computed(() => `joko-modal-title-${Math.random().toString(36).slice(2)}`)

const modalClasses = computed(() => [
  'joko-modal',
  `joko-modal--${props.size}`,
])

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    handleClose()
  }
}

// Prevent body scroll when modal is open
watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.joko-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--joko-space-4);
  z-index: var(--joko-z-40);
  overflow-y: auto;
}

.joko-modal {
  background-color: var(--joko-white);
  border-radius: var(--joko-rounded-2xl);
  box-shadow: var(--joko-shadow-2xl);
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  z-index: var(--joko-z-50);
}

.joko-modal--sm {
  max-width: 400px;
}

.joko-modal--md {
  max-width: 500px;
}

.joko-modal--lg {
  max-width: 768px;
}

.joko-modal--xl {
  max-width: 1024px;
}

.joko-modal-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--joko-space-8);
  border-bottom: 1px solid var(--joko-neutral-200);
}

.joko-modal-title {
  font-size: var(--joko-text-2xl);
  font-weight: var(--joko-font-semibold);
  color: var(--joko-neutral-900);
  margin: 0;
  padding-right: var(--joko-space-8);
}

.joko-modal-close {
  position: absolute;
  top: var(--joko-space-8);
  right: var(--joko-space-8);
  background: none;
  border: none;
  padding: var(--joko-space-2);
  cursor: pointer;
  color: var(--joko-neutral-500);
  border-radius: var(--joko-rounded-md);
  transition: all var(--joko-transition-base);
}

.joko-modal-close:hover {
  color: var(--joko-neutral-700);
  background-color: var(--joko-neutral-100);
}

.joko-modal-body {
  padding: var(--joko-space-8);
  overflow-y: auto;
  flex: 1;
}

.joko-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--joko-space-4);
  padding: var(--joko-space-6) var(--joko-space-8);
  border-top: 1px solid var(--joko-neutral-200);
}

/* Transitions */
.joko-modal-enter-active,
.joko-modal-leave-active {
  transition: opacity var(--joko-transition-normal) var(--joko-ease-out);
}

.joko-modal-enter-active .joko-modal,
.joko-modal-leave-active .joko-modal {
  transition: all var(--joko-transition-slow) var(--joko-ease-out);
}

.joko-modal-enter-from,
.joko-modal-leave-to {
  opacity: 0;
}

.joko-modal-enter-from .joko-modal,
.joko-modal-leave-to .joko-modal {
  opacity: 0;
  transform: scale(0.95);
}
</style>
```

### Usage Examples

```vue
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const isConfirmOpen = ref(false)

const handleSubmit = () => {
  // Handle form submission
  isOpen.value = false
}
</script>

<template>
  <!-- Basic Modal -->
  <JokoModal v-model="isOpen" title="Edit Project">
    <form @submit.prevent="handleSubmit">
      <JokoInput v-model="projectName" label="Project Name" />
      <JokoInput v-model="description" label="Description" />
    </form>

    <template #footer>
      <JokoButton variant="outline" @click="isOpen = false">
        Cancel
      </JokoButton>
      <JokoButton variant="primary" @click="handleSubmit">
        Save Changes
      </JokoButton>
    </template>
  </JokoModal>

  <!-- Confirmation Modal -->
  <JokoModal
    v-model="isConfirmOpen"
    title="Confirm Deletion"
    size="sm"
    :close-on-overlay="false"
  >
    <p>Are you sure you want to delete this project? This action cannot be undone.</p>

    <template #footer>
      <JokoButton variant="ghost" @click="isConfirmOpen = false">
        Cancel
      </JokoButton>
      <JokoButton variant="primary" @click="handleDelete">
        Delete Project
      </JokoButton>
    </template>
  </JokoModal>
</template>
```

---

## Additional Components

For a complete component library, you would also implement:

- **Checkbox & Radio**: Selection controls
- **Select/Dropdown**: Choice selection
- **Textarea**: Multi-line text input
- **Toggle/Switch**: Boolean state control
- **Tabs**: Content organization
- **Accordion**: Collapsible content
- **Breadcrumbs**: Navigation path
- **Pagination**: Data navigation
- **Progress Bar**: Task completion
- **Skeleton Loader**: Loading states
- **Toast/Notification**: Temporary messages
- **Tooltip**: Contextual help
- **Table**: Data display
- **Avatar**: User representation
- **Divider**: Content separation

---

## Best Practices

### Component Development

1. **TypeScript First**: Always use TypeScript for type safety
2. **Composition API**: Use `<script setup>` for cleaner code
3. **Props Validation**: Define clear interfaces for all props
4. **Emits Declaration**: Explicitly declare all emitted events
5. **Slots**: Provide flexible content customization
6. **Accessibility**: Include ARIA attributes and keyboard support
7. **Scoped Styles**: Use scoped styles with design tokens
8. **Documentation**: Document props, emits, and slots

### Testing

```typescript
// Button.test.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import JokoButton from './JokoButton.vue'

describe('JokoButton', () => {
  it('renders with correct variant class', () => {
    const wrapper = mount(JokoButton, {
      props: { variant: 'primary' },
      slots: { default: 'Click me' },
    })

    expect(wrapper.classes()).toContain('joko-button--primary')
    expect(wrapper.text()).toBe('Click me')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(JokoButton)
    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(JokoButton, {
      props: { disabled: true },
    })
    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeFalsy()
  })
})
```

### File Structure

```
src/components/
├── Button/
│   ├── JokoButton.vue
│   ├── JokoButton.test.ts
│   ├── JokoButton.stories.ts (Storybook)
│   └── index.ts
├── Input/
│   ├── JokoInput.vue
│   ├── JokoInput.test.ts
│   └── index.ts
└── ...
```

---

*Last updated: 2025-10-27*
