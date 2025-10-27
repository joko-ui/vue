import type { Meta, StoryObj } from '@storybook/vue3'
import JButton from './JButton.vue'
import { Plus, Download, Send } from 'lucide-vue-next'
import { h } from 'vue'

const meta = {
  title: 'Components/JButton',
  component: JButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'link'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The HTML button type',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
    type: 'button',
  },
} satisfies Meta<typeof JButton>

export default meta
type Story = StoryObj<typeof meta>

// ========================================
// BASIC STORIES
// ========================================

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    components: { JButton },
    setup() {
      return { args }
    },
    template: '<JButton v-bind="args">Primary Button</JButton>',
  }),
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    components: { JButton },
    setup() {
      return { args }
    },
    template: '<JButton v-bind="args">Secondary Button</JButton>',
  }),
}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => ({
    components: { JButton },
    setup() {
      return { args }
    },
    template: '<JButton v-bind="args">Outline Button</JButton>',
  }),
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  render: (args) => ({
    components: { JButton },
    setup() {
      return { args }
    },
    template: '<JButton v-bind="args">Ghost Button</JButton>',
  }),
}

export const Link: Story = {
  args: {
    variant: 'link',
  },
  render: (args) => ({
    components: { JButton },
    setup() {
      return { args }
    },
    template: '<JButton v-bind="args">Link Button</JButton>',
  }),
}

// ========================================
// SIZE VARIANTS
// ========================================

export const Sizes: Story = {
  render: () => ({
    components: { JButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
        <JButton size="xs">Extra Small</JButton>
        <JButton size="sm">Small</JButton>
        <JButton size="md">Medium</JButton>
        <JButton size="lg">Large</JButton>
        <JButton size="xl">Extra Large</JButton>
      </div>
    `,
  }),
}

// ========================================
// STATES
// ========================================

export const Disabled: Story = {
  render: () => ({
    components: { JButton },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <JButton variant="primary" :disabled="true">Primary Disabled</JButton>
        <JButton variant="secondary" :disabled="true">Secondary Disabled</JButton>
        <JButton variant="outline" :disabled="true">Outline Disabled</JButton>
        <JButton variant="ghost" :disabled="true">Ghost Disabled</JButton>
      </div>
    `,
  }),
}

export const Loading: Story = {
  render: () => ({
    components: { JButton },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <JButton variant="primary" :loading="true">Loading</JButton>
        <JButton variant="secondary" :loading="true">Processing</JButton>
        <JButton variant="outline" :loading="true">Submitting</JButton>
      </div>
    `,
  }),
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: (args) => ({
    components: { JButton },
    setup() {
      return { args }
    },
    template: '<JButton v-bind="args">Full Width Button</JButton>',
  }),
}

// ========================================
// WITH ICONS
// ========================================

export const WithIcon: Story = {
  render: () => ({
    components: { JButton, Plus },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <JButton variant="primary">
          <Plus :size="20" />
          Add Item
        </JButton>
        <JButton variant="secondary">
          <Plus :size="20" />
          Create New
        </JButton>
        <JButton variant="outline">
          <Plus :size="20" />
          Insert
        </JButton>
      </div>
    `,
  }),
}

export const IconOnly: Story = {
  render: () => ({
    components: { JButton, Plus, Download, Send },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <JButton variant="primary" size="sm">
          <Plus :size="16" />
        </JButton>
        <JButton variant="primary" size="md">
          <Download :size="20" />
        </JButton>
        <JButton variant="primary" size="lg">
          <Send :size="24" />
        </JButton>
      </div>
    `,
  }),
}

// ========================================
// VARIANT COMPARISON
// ========================================

export const AllVariants: Story = {
  render: () => ({
    components: { JButton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 600; color: #404040;">All Variants</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <JButton variant="primary">Primary</JButton>
            <JButton variant="secondary">Secondary</JButton>
            <JButton variant="outline">Outline</JButton>
            <JButton variant="ghost">Ghost</JButton>
            <JButton variant="link">Link</JButton>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 600; color: #404040;">Hover States</h3>
          <p style="font-size: 0.875rem; color: #737373; margin-bottom: 0.5rem;">Hover over buttons to see interactions</p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <JButton variant="primary">Hover Me</JButton>
            <JButton variant="secondary">Hover Me</JButton>
            <JButton variant="outline">Hover Me</JButton>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 600; color: #404040;">Different Sizes</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <JButton size="xs">Extra Small</JButton>
            <JButton size="sm">Small</JButton>
            <JButton size="md">Medium</JButton>
            <JButton size="lg">Large</JButton>
            <JButton size="xl">Extra Large</JButton>
          </div>
        </div>
      </div>
    `,
  }),
}

// ========================================
// INTERACTIVE STORY
// ========================================

export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    components: { JButton },
    setup() {
      const handleClick = () => {
        alert('Button clicked!')
      }
      return { args, handleClick }
    },
    template: '<JButton v-bind="args" @click="handleClick">Click Me</JButton>',
  }),
}

// ========================================
// REAL WORLD EXAMPLES
// ========================================

export const FormActions: Story = {
  render: () => ({
    components: { JButton },
    template: `
      <div style="display: flex; gap: 1rem; justify-content: flex-end;">
        <JButton variant="ghost">Cancel</JButton>
        <JButton variant="outline">Save Draft</JButton>
        <JButton variant="primary">Submit</JButton>
      </div>
    `,
  }),
}

export const CTASection: Story = {
  render: () => ({
    components: { JButton },
    template: `
      <div style="max-width: 600px; padding: 2rem; background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); border-radius: 1rem; color: white; text-align: center;">
        <h2 style="margin-bottom: 1rem; font-size: 1.875rem; font-weight: 700;">Bergabung dengan Joko-UI</h2>
        <p style="margin-bottom: 2rem; font-size: 1.125rem; opacity: 0.9;">Mulai membangun aplikasi dengan design system Indonesia</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <JButton variant="secondary" size="lg">Pelajari Lebih Lanjut</JButton>
          <JButton variant="outline" size="lg" style="background: white; color: #dc2626; border-color: white;">
            Mulai Sekarang
          </JButton>
        </div>
      </div>
    `,
  }),
}
