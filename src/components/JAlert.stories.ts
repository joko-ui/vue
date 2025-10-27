import type { Meta, StoryObj } from '@storybook/vue3'
import JAlert from './JAlert.vue'
import { ref } from 'vue'

const meta = {
  title: 'Components/JAlert',
  component: JAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
      description: 'The visual style of the alert',
    },
    title: {
      control: 'text',
      description: 'The title of the alert',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
  },
  args: {
    variant: 'info',
    dismissible: false,
  },
} satisfies Meta<typeof JAlert>

export default meta
type Story = StoryObj<typeof meta>

// ========================================
// BASIC STORIES
// ========================================

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
  },
  render: (args) => ({
    components: { JAlert },
    setup() {
      return { args }
    },
    template: `
      <JAlert v-bind="args">
        Your project has been successfully submitted for review.
      </JAlert>
    `,
  }),
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
  },
  render: (args) => ({
    components: { JAlert },
    setup() {
      return { args }
    },
    template: `
      <JAlert v-bind="args">
        Please review the budget allocation before proceeding.
      </JAlert>
    `,
  }),
}

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
  },
  render: (args) => ({
    components: { JAlert },
    setup() {
      return { args }
    },
    template: `
      <JAlert v-bind="args">
        Failed to upload document. Please try again or contact support.
      </JAlert>
    `,
  }),
}

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
  },
  render: (args) => ({
    components: { JAlert },
    setup() {
      return { args }
    },
    template: `
      <JAlert v-bind="args">
        Infrastructure meeting scheduled for tomorrow at 10:00 AM.
      </JAlert>
    `,
  }),
}

// ========================================
// WITHOUT TITLE
// ========================================

export const WithoutTitle: Story = {
  render: () => ({
    components: { JAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <JAlert variant="success">
          Operation completed successfully.
        </JAlert>
        <JAlert variant="warning">
          Your session will expire in 5 minutes.
        </JAlert>
        <JAlert variant="error">
          Unable to connect to the server.
        </JAlert>
        <JAlert variant="info">
          New updates are available.
        </JAlert>
      </div>
    `,
  }),
}

// ========================================
// DISMISSIBLE
// ========================================

export const Dismissible: Story = {
  render: () => ({
    components: { JAlert },
    setup() {
      const showSuccess = ref(true)
      const showWarning = ref(true)
      const showError = ref(true)
      const showInfo = ref(true)

      return {
        showSuccess,
        showWarning,
        showError,
        showInfo,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <JAlert
          v-if="showSuccess"
          variant="success"
          title="Dismissible Success"
          :dismissible="true"
          @dismiss="showSuccess = false"
        >
          Click the X button to dismiss this alert.
        </JAlert>

        <JAlert
          v-if="showWarning"
          variant="warning"
          title="Dismissible Warning"
          :dismissible="true"
          @dismiss="showWarning = false"
        >
          This alert can be dismissed by clicking the close button.
        </JAlert>

        <JAlert
          v-if="showError"
          variant="error"
          title="Dismissible Error"
          :dismissible="true"
          @dismiss="showError = false"
        >
          You can close this error message when you're done reading it.
        </JAlert>

        <JAlert
          v-if="showInfo"
          variant="info"
          title="Dismissible Info"
          :dismissible="true"
          @dismiss="showInfo = false"
        >
          Dismiss this information when you no longer need it.
        </JAlert>

        <div v-if="!showSuccess && !showWarning && !showError && !showInfo" style="padding: 2rem; text-align: center; color: #737373;">
          All alerts dismissed. Refresh the page to see them again.
        </div>
      </div>
    `,
  }),
}

// ========================================
// LONG CONTENT
// ========================================

export const LongContent: Story = {
  render: () => ({
    components: { JAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <JAlert variant="success" title="Project Submission Successful">
          Your infrastructure development project "Trans-Java Toll Road Expansion Phase 2" has been successfully submitted to the review committee. The estimated review time is 5-7 business days. You will receive an email notification once the review is complete. In the meantime, you can track the status of your submission in the dashboard.
        </JAlert>

        <JAlert variant="info" title="System Maintenance Notice" :dismissible="true">
          <p style="margin-bottom: 0.5rem;">
            We will be performing scheduled maintenance on our systems on Saturday, December 2nd, from 2:00 AM to 6:00 AM WIB.
          </p>
          <p style="margin-bottom: 0.5rem;">
            During this time, the following services will be unavailable:
          </p>
          <ul style="margin-left: 1.5rem; margin-bottom: 0.5rem;">
            <li>Project submission portal</li>
            <li>Document upload services</li>
            <li>Real-time status tracking</li>
          </ul>
          <p>
            We apologize for any inconvenience. Please plan your submissions accordingly.
          </p>
        </JAlert>
      </div>
    `,
  }),
}

// ========================================
// ALL VARIANTS
// ========================================

export const AllVariants: Story = {
  render: () => ({
    components: { JAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <h3 style="margin-bottom: 0.75rem; font-size: 1rem; font-weight: 600; color: #171717;">Success Alerts</h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <JAlert variant="success" title="Success with title">
              This is a success alert with a title.
            </JAlert>
            <JAlert variant="success">
              This is a success alert without a title.
            </JAlert>
            <JAlert variant="success" title="Dismissible" :dismissible="true">
              This success alert can be dismissed.
            </JAlert>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 0.75rem; font-size: 1rem; font-weight: 600; color: #171717;">Warning Alerts</h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <JAlert variant="warning" title="Warning with title">
              This is a warning alert with a title.
            </JAlert>
            <JAlert variant="warning">
              This is a warning alert without a title.
            </JAlert>
            <JAlert variant="warning" title="Attention Required" :dismissible="true">
              This warning alert can be dismissed.
            </JAlert>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 0.75rem; font-size: 1rem; font-weight: 600; color: #171717;">Error Alerts</h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <JAlert variant="error" title="Error with title">
              This is an error alert with a title.
            </JAlert>
            <JAlert variant="error">
              This is an error alert without a title.
            </JAlert>
            <JAlert variant="error" title="Action Failed" :dismissible="true">
              This error alert can be dismissed.
            </JAlert>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 0.75rem; font-size: 1rem; font-weight: 600; color: #171717;">Info Alerts</h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <JAlert variant="info" title="Info with title">
              This is an info alert with a title.
            </JAlert>
            <JAlert variant="info">
              This is an info alert without a title.
            </JAlert>
            <JAlert variant="info" title="FYI" :dismissible="true">
              This info alert can be dismissed.
            </JAlert>
          </div>
        </div>
      </div>
    `,
  }),
}

// ========================================
// REAL WORLD EXAMPLES
// ========================================

export const FormValidation: Story = {
  render: () => ({
    components: { JAlert },
    template: `
      <div style="max-width: 600px;">
        <form style="display: flex; flex-direction: column; gap: 1rem;">
          <JAlert variant="error" title="Form Validation Error" :dismissible="true">
            Please correct the following errors before submitting:
            <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
              <li>Email address is invalid</li>
              <li>Password must be at least 8 characters</li>
              <li>Phone number is required</li>
            </ul>
          </JAlert>

          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email</label>
            <input type="email" style="width: 100%; padding: 0.5rem; border: 1px solid #e5e5e5; border-radius: 0.5rem;" />
          </div>

          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Password</label>
            <input type="password" style="width: 100%; padding: 0.5rem; border: 1px solid #e5e5e5; border-radius: 0.5rem;" />
          </div>
        </form>
      </div>
    `,
  }),
}

export const SystemNotifications: Story = {
  render: () => ({
    components: { JAlert },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 700px;">
        <JAlert variant="success" title="Proyek Berhasil Disetujui">
          Proyek infrastruktur "Jalan Tol Trans-Sumatra" telah disetujui oleh komite. Pembangunan dapat dimulai pada bulan depan.
        </JAlert>

        <JAlert variant="info" title="Pembaruan Sistem" :dismissible="true">
          Versi baru dari sistem telah tersedia. Silakan perbarui aplikasi Anda untuk mendapatkan fitur-fitur terbaru.
        </JAlert>

        <JAlert variant="warning" title="Tenggat Waktu Mendekati">
          Laporan proyek Anda akan jatuh tempo dalam 3 hari. Pastikan untuk mengirimkan laporan tepat waktu.
        </JAlert>
      </div>
    `,
  }),
}
