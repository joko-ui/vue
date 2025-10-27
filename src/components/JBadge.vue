<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface JBadgeProps {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
}

const props = withDefaults(defineProps<JBadgeProps>(), {
  variant: 'neutral',
  size: 'md',
  rounded: true,
})

const badgeClasses = computed(() => [
  'j-badge',
  `j-badge--${props.variant}`,
  `j-badge--${props.size}`,
  {
    'j-badge--rounded': props.rounded,
  },
])
</script>

<style scoped>
.j-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--joko-font-sans);
  font-weight: var(--joko-font-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  line-height: 1;
}

/* ========================================
 * VARIANTS
 * ======================================== */

/* Primary */
.j-badge--primary {
  background-color: var(--joko-red-100);
  color: var(--joko-red-800);
}

/* Success */
.j-badge--success {
  background-color: var(--joko-success-100);
  color: var(--joko-success-800);
}

/* Warning */
.j-badge--warning {
  background-color: var(--joko-warning-100);
  color: var(--joko-warning-800);
}

/* Error */
.j-badge--error {
  background-color: var(--joko-error-100);
  color: var(--joko-error-800);
}

/* Neutral */
.j-badge--neutral {
  background-color: var(--joko-neutral-100);
  color: var(--joko-neutral-800);
}

/* ========================================
 * SIZES
 * ======================================== */

.j-badge--sm {
  padding: var(--joko-space-1) var(--joko-space-2);
  font-size: var(--joko-text-xs);
}

.j-badge--md {
  padding: var(--joko-space-1) var(--joko-space-3);
  font-size: var(--joko-text-xs);
}

.j-badge--lg {
  padding: var(--joko-space-2) var(--joko-space-4);
  font-size: var(--joko-text-sm);
}

/* ========================================
 * ROUNDED
 * ======================================== */

.j-badge--rounded {
  border-radius: var(--joko-rounded-full);
}

.j-badge:not(.j-badge--rounded) {
  border-radius: var(--joko-rounded-md);
}
</style>
