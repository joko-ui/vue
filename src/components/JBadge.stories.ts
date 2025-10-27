import type { Meta, StoryObj } from '@storybook/vue3'
import JBadge from './JBadge.vue'

const meta = {
  title: 'Components/JBadge',
  component: JBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'neutral'],
      description: 'The visual style of the badge',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the badge',
    },
    rounded: {
      control: 'boolean',
      description: 'Whether the badge should have fully rounded corners',
    },
  },
  args: {
    variant: 'neutral',
    size: 'md',
    rounded: true,
  },
} satisfies Meta<typeof JBadge>

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
    components: { JBadge },
    setup() {
      return { args }
    },
    template: '<JBadge v-bind="args">Featured</JBadge>',
  }),
}

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => ({
    components: { JBadge },
    setup() {
      return { args }
    },
    template: '<JBadge v-bind="args">Active</JBadge>',
  }),
}

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => ({
    components: { JBadge },
    setup() {
      return { args }
    },
    template: '<JBadge v-bind="args">Pending</JBadge>',
  }),
}

export const Error: Story = {
  args: {
    variant: 'error',
  },
  render: (args) => ({
    components: { JBadge },
    setup() {
      return { args }
    },
    template: '<JBadge v-bind="args">Cancelled</JBadge>',
  }),
}

export const Neutral: Story = {
  args: {
    variant: 'neutral',
  },
  render: (args) => ({
    components: { JBadge },
    setup() {
      return { args }
    },
    template: '<JBadge v-bind="args">Draft</JBadge>',
  }),
}

// ========================================
// ALL VARIANTS
// ========================================

export const AllVariants: Story = {
  render: () => ({
    components: { JBadge },
    template: `
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
        <JBadge variant="primary">Primary</JBadge>
        <JBadge variant="success">Success</JBadge>
        <JBadge variant="warning">Warning</JBadge>
        <JBadge variant="error">Error</JBadge>
        <JBadge variant="neutral">Neutral</JBadge>
      </div>
    `,
  }),
}

// ========================================
// SIZES
// ========================================

export const Sizes: Story = {
  render: () => ({
    components: { JBadge },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start;">
          <span style="font-size: 0.75rem; font-weight: 600; color: #737373;">Small</span>
          <JBadge size="sm">Small Badge</JBadge>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start;">
          <span style="font-size: 0.75rem; font-weight: 600; color: #737373;">Medium</span>
          <JBadge size="md">Medium Badge</JBadge>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start;">
          <span style="font-size: 0.75rem; font-weight: 600; color: #737373;">Large</span>
          <JBadge size="lg">Large Badge</JBadge>
        </div>
      </div>
    `,
  }),
}

export const SizeComparison: Story = {
  render: () => ({
    components: { JBadge },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h4 style="margin-bottom: 0.75rem; font-size: 0.875rem; font-weight: 600;">Small Badges</h4>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <JBadge variant="primary" size="sm">Featured</JBadge>
            <JBadge variant="success" size="sm">Active</JBadge>
            <JBadge variant="warning" size="sm">Pending</JBadge>
            <JBadge variant="error" size="sm">Cancelled</JBadge>
            <JBadge variant="neutral" size="sm">Draft</JBadge>
          </div>
        </div>

        <div>
          <h4 style="margin-bottom: 0.75rem; font-size: 0.875rem; font-weight: 600;">Medium Badges</h4>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <JBadge variant="primary" size="md">Featured</JBadge>
            <JBadge variant="success" size="md">Active</JBadge>
            <JBadge variant="warning" size="md">Pending</JBadge>
            <JBadge variant="error" size="md">Cancelled</JBadge>
            <JBadge variant="neutral" size="md">Draft</JBadge>
          </div>
        </div>

        <div>
          <h4 style="margin-bottom: 0.75rem; font-size: 0.875rem; font-weight: 600;">Large Badges</h4>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <JBadge variant="primary" size="lg">Featured</JBadge>
            <JBadge variant="success" size="lg">Active</JBadge>
            <JBadge variant="warning" size="lg">Pending</JBadge>
            <JBadge variant="error" size="lg">Cancelled</JBadge>
            <JBadge variant="neutral" size="lg">Draft</JBadge>
          </div>
        </div>
      </div>
    `,
  }),
}

// ========================================
// ROUNDED VS SQUARE
// ========================================

export const RoundedVsSquare: Story = {
  render: () => ({
    components: { JBadge },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h4 style="margin-bottom: 0.75rem; font-size: 0.875rem; font-weight: 600;">Rounded (Default)</h4>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <JBadge variant="primary" :rounded="true">Primary</JBadge>
            <JBadge variant="success" :rounded="true">Success</JBadge>
            <JBadge variant="warning" :rounded="true">Warning</JBadge>
            <JBadge variant="error" :rounded="true">Error</JBadge>
            <JBadge variant="neutral" :rounded="true">Neutral</JBadge>
          </div>
        </div>

        <div>
          <h4 style="margin-bottom: 0.75rem; font-size: 0.875rem; font-weight: 600;">Square</h4>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <JBadge variant="primary" :rounded="false">Primary</JBadge>
            <JBadge variant="success" :rounded="false">Success</JBadge>
            <JBadge variant="warning" :rounded="false">Warning</JBadge>
            <JBadge variant="error" :rounded="false">Error</JBadge>
            <JBadge variant="neutral" :rounded="false">Neutral</JBadge>
          </div>
        </div>
      </div>
    `,
  }),
}

// ========================================
// REAL WORLD EXAMPLES
// ========================================

export const StatusBadges: Story = {
  render: () => ({
    components: { JBadge },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: white; border: 1px solid #e5e5e5; border-radius: 0.5rem;">
          <span style="font-weight: 500;">Trans-Java Toll Road</span>
          <JBadge variant="success">Completed</JBadge>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: white; border: 1px solid #e5e5e5; border-radius: 0.5rem;">
          <span style="font-weight: 500;">MRT Jakarta Phase 2</span>
          <JBadge variant="warning">In Progress</JBadge>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: white; border: 1px solid #e5e5e5; border-radius: 0.5rem;">
          <span style="font-weight: 500;">High-Speed Rail Project</span>
          <JBadge variant="primary">Priority</JBadge>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: white; border: 1px solid #e5e5e5; border-radius: 0.5rem;">
          <span style="font-weight: 500;">Coastal Road Development</span>
          <JBadge variant="neutral">Planned</JBadge>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: white; border: 1px solid #e5e5e5; border-radius: 0.5rem;">
          <span style="font-weight: 500;">Bridge Renovation</span>
          <JBadge variant="error">Cancelled</JBadge>
        </div>
      </div>
    `,
  }),
}

export const WithNumbers: Story = {
  render: () => ({
    components: { JBadge },
    template: `
      <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-weight: 500;">Notifications</span>
          <JBadge variant="error" size="sm">12</JBadge>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-weight: 500;">Messages</span>
          <JBadge variant="primary" size="sm">5</JBadge>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-weight: 500;">Tasks</span>
          <JBadge variant="warning" size="sm">23</JBadge>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-weight: 500;">Completed</span>
          <JBadge variant="success" size="sm">156</JBadge>
        </div>
      </div>
    `,
  }),
}

export const ProjectCategories: Story = {
  render: () => ({
    components: { JBadge },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h3 style="margin-bottom: 1rem; font-size: 1.25rem; font-weight: 600;">Infrastructure Projects</h3>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <JBadge variant="primary">Transportation</JBadge>
            <JBadge variant="success">Energy</JBadge>
            <JBadge variant="neutral">Water Supply</JBadge>
            <JBadge variant="warning">Telecommunication</JBadge>
            <JBadge variant="primary">Education</JBadge>
            <JBadge variant="success">Healthcare</JBadge>
            <JBadge variant="neutral">Housing</JBadge>
          </div>
        </div>

        <div style="padding: 1.5rem; background: white; border: 1px solid #e5e5e5; border-radius: 0.75rem;">
          <h4 style="margin-bottom: 0.75rem; font-weight: 600;">Proyek Jalan Tol Trans-Sumatra</h4>
          <p style="margin-bottom: 1rem; color: #737373; font-size: 0.875rem;">
            Pembangunan infrastruktur jalan tol sepanjang pulau Sumatra untuk meningkatkan konektivitas antar wilayah.
          </p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <JBadge variant="primary" size="sm">Featured</JBadge>
            <JBadge variant="success" size="sm">Active</JBadge>
            <JBadge variant="neutral" size="sm">Transportation</JBadge>
            <JBadge variant="neutral" size="sm">2024</JBadge>
          </div>
        </div>
      </div>
    `,
  }),
}

// ========================================
// INTERACTIVE
// ========================================

export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    rounded: true,
  },
  render: (args) => ({
    components: { JBadge },
    setup() {
      return { args }
    },
    template: '<JBadge v-bind="args">Customizable Badge</JBadge>',
  }),
}
