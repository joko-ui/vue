<template>
  <button :class="buttonClasses" :disabled="disabled || loading" :type="type" @click="handleClick">
    <span v-if="loading" class="j-button__spinner"></span>
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface JButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<JButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
  type: 'button',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => [
  'j-button',
  `j-button--${props.variant}`,
  `j-button--${props.size}`,
  {
    'j-button--disabled': props.disabled,
    'j-button--loading': props.loading,
    'j-button--full-width': props.fullWidth,
  },
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.j-button {
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

.j-button:focus-visible {
  outline: 2px solid var(--joko-blue-500);
  outline-offset: 2px;
}

/* ========================================
 * VARIANTS
 * ======================================== */

/* Primary - Jokowi Red */
.j-button--primary {
  background-color: var(--joko-red-600);
  color: var(--joko-white);
}

.j-button--primary:hover:not(:disabled) {
  background-color: var(--joko-red-700);
  transform: scale(1.02);
}

.j-button--primary:active:not(:disabled) {
  background-color: var(--joko-red-800);
  transform: scale(0.98);
}

/* Secondary - Development Blue */
.j-button--secondary {
  background-color: var(--joko-blue-600);
  color: var(--joko-white);
}

.j-button--secondary:hover:not(:disabled) {
  background-color: var(--joko-blue-700);
  transform: scale(1.02);
}

.j-button--secondary:active:not(:disabled) {
  background-color: var(--joko-blue-800);
  transform: scale(0.98);
}

/* Outline */
.j-button--outline {
  background-color: transparent;
  color: var(--joko-red-600);
  border: 2px solid var(--joko-red-600);
}

.j-button--outline:hover:not(:disabled) {
  background-color: var(--joko-red-50);
}

.j-button--outline:active:not(:disabled) {
  background-color: var(--joko-red-100);
}

/* Ghost */
.j-button--ghost {
  background-color: transparent;
  color: var(--joko-neutral-700);
}

.j-button--ghost:hover:not(:disabled) {
  background-color: var(--joko-neutral-100);
}

.j-button--ghost:active:not(:disabled) {
  background-color: var(--joko-neutral-200);
}

/* Link */
.j-button--link {
  background-color: transparent;
  color: var(--joko-blue-600);
  text-decoration: none;
}

.j-button--link:hover:not(:disabled) {
  text-decoration: underline;
  color: var(--joko-blue-700);
}

/* ========================================
 * SIZES
 * ======================================== */

.j-button--xs {
  padding: calc(var(--joko-space-1) * 1.5) var(--joko-space-3);
  font-size: var(--joko-text-xs);
  border-radius: var(--joko-rounded-md);
}

.j-button--sm {
  padding: var(--joko-space-2) var(--joko-space-4);
  font-size: var(--joko-text-sm);
  border-radius: var(--joko-rounded-md);
}

.j-button--md {
  padding: var(--joko-space-3) var(--joko-space-6);
  font-size: var(--joko-text-base);
  border-radius: var(--joko-rounded-lg);
}

.j-button--lg {
  padding: var(--joko-space-4) var(--joko-space-8);
  font-size: var(--joko-text-lg);
  border-radius: var(--joko-rounded-lg);
}

.j-button--xl {
  padding: var(--joko-space-5) var(--joko-space-10);
  font-size: var(--joko-text-xl);
  border-radius: var(--joko-rounded-xl);
}

/* ========================================
 * STATES
 * ======================================== */

.j-button--disabled,
.j-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.j-button--loading {
  cursor: wait;
}

.j-button--full-width {
  width: 100%;
}

/* ========================================
 * LOADING SPINNER
 * ======================================== */

.j-button__spinner {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: j-button-spin 1s linear infinite;
}

@keyframes j-button-spin {
  to {
    transform: rotate(360deg);
  }
}

/* ========================================
 * ACCESSIBILITY
 * ======================================== */

@media (prefers-reduced-motion: reduce) {
  .j-button {
    transition: none;
  }

  .j-button:hover:not(:disabled) {
    transform: none;
  }

  .j-button:active:not(:disabled) {
    transform: none;
  }

  .j-button__spinner {
    animation-duration: 2s;
  }
}
</style>
