<script setup lang="ts">
import { JButton } from './components'
</script>

<template>
  <div style="padding: 2rem; max-width: 800px; margin: 0 auto;">
    <h1 style="margin-bottom: 2rem;">JButton Styling Test</h1>
    <p style="margin-bottom: 2rem;">This tests if the JButton styling appears correctly after the fix.</p>
    
    <section style="margin-bottom: 2rem;">
      <h2 style="margin-bottom: 1rem;">Button Variants</h2>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <JButton variant="primary">Primary Button</JButton>
        <JButton variant="secondary">Secondary Button</JButton>
        <JButton variant="outline">Outline Button</JButton>
        <JButton variant="ghost">Ghost Button</JButton>
        <JButton variant="link">Link Button</JButton>
      </div>
    </section>
    
    <section style="margin-bottom: 2rem;">
      <h2 style="margin-bottom: 1rem;">Button Sizes</h2>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <JButton size="xs">Extra Small</JButton>
        <JButton size="sm">Small</JButton>
        <JButton size="md">Medium</JButton>
        <JButton size="lg">Large</JButton>
        <JButton size="xl">Extra Large</JButton>
      </div>
    </section>
    
    <section style="margin-bottom: 2rem;">
      <h2 style="margin-bottom: 1rem;">Button States</h2>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <JButton variant="primary" :disabled="true">Disabled</JButton>
        <JButton variant="secondary" :loading="true">Loading</JButton>
        <JButton variant="outline" full-width>Full Width</JButton>
      </div>
    </section>
  </div>
</template>

<style scoped>
section {
  padding: 1rem;
  border: 1px solid var(--joko-neutral-200);
  border-radius: var(--joko-rounded-lg);
}
</style>
