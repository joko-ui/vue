<template>
  <div :class="alertClasses" role="alert">
    <div class="j-alert__icon">
      <slot name="icon">
        <component :is="iconComponent" :size="24" />
      </slot>
    </div>

    <div class="j-alert__content">
      <h4 v-if="title" class="j-alert__title">{{ title }}</h4>
      <div class="j-alert__description">
        <slot />
      </div>
    </div>

    <button
      v-if="dismissible"
      class="j-alert__close"
      @click="handleDismiss"
      aria-label="Close alert"
    >
      <X :size="20" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CheckCircle, AlertTriangle, XCircle, Info, X } from 'lucide-vue-next'

export interface JAlertProps {
  variant?: 'success' | 'warning' | 'error' | 'info'
  title?: string
  dismissible?: boolean
}

const props = withDefaults(defineProps<JAlertProps>(), {
  variant: 'info',
  dismissible: false,
})

const emit = defineEmits<{
  dismiss: []
}>()

const alertClasses = computed(() => ['j-alert', `j-alert--${props.variant}`])

const iconComponent = computed(() => {
  const icons = {
    success: CheckCircle,
    warning: AlertTriangle,
    error: XCircle,
    info: Info,
  }
  return icons[props.variant]
})

const handleDismiss = () => {
  emit('dismiss')
}
</script>

<style scoped>
.j-alert {
  position: relative;
  display: flex;
  gap: var(--joko-space-4);
  padding: var(--joko-space-4);
  border-radius: var(--joko-rounded-lg);
  border-left-width: 4px;
  border-left-style: solid;
}

/* ========================================
 * VARIANTS
 * ======================================== */

/* Success */
.j-alert--success {
  background-color: var(--joko-success-50);
  border-left-color: var(--joko-success-600);
}

.j-alert--success .j-alert__icon {
  color: var(--joko-success-600);
}

.j-alert--success .j-alert__title {
  color: var(--joko-success-900);
}

.j-alert--success .j-alert__description {
  color: var(--joko-success-900);
}

/* Warning */
.j-alert--warning {
  background-color: var(--joko-warning-50);
  border-left-color: var(--joko-warning-600);
}

.j-alert--warning .j-alert__icon {
  color: var(--joko-warning-600);
}

.j-alert--warning .j-alert__title {
  color: var(--joko-warning-900);
}

.j-alert--warning .j-alert__description {
  color: var(--joko-warning-900);
}

/* Error */
.j-alert--error {
  background-color: var(--joko-error-50);
  border-left-color: var(--joko-error-600);
}

.j-alert--error .j-alert__icon {
  color: var(--joko-error-600);
}

.j-alert--error .j-alert__title {
  color: var(--joko-error-900);
}

.j-alert--error .j-alert__description {
  color: var(--joko-error-900);
}

/* Info */
.j-alert--info {
  background-color: var(--joko-info-50);
  border-left-color: var(--joko-info-600);
}

.j-alert--info .j-alert__icon {
  color: var(--joko-info-600);
}

.j-alert--info .j-alert__title {
  color: var(--joko-info-900);
}

.j-alert--info .j-alert__description {
  color: var(--joko-info-900);
}

/* ========================================
 * ALERT ELEMENTS
 * ======================================== */

.j-alert__icon {
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
}

.j-alert__content {
  flex: 1;
  min-width: 0;
}

.j-alert__title {
  font-size: var(--joko-text-base);
  font-weight: var(--joko-font-semibold);
  margin: 0 0 var(--joko-space-2) 0;
  line-height: var(--joko-leading-snug);
}

.j-alert__description {
  font-size: var(--joko-text-sm);
  line-height: var(--joko-leading-normal);
}

.j-alert__close {
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: currentColor;
  opacity: 0.6;
  transition: opacity var(--joko-transition-base) var(--joko-ease-out);
  display: flex;
  align-items: flex-start;
}

.j-alert__close:hover {
  opacity: 1;
}

.j-alert__close:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
  border-radius: var(--joko-rounded-sm);
}
</style>
