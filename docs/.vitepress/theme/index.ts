import DefaultTheme from 'vitepress/theme'
import './style.css'
import '../../../src/styles/base.css'

// Import Joko-UI components for live demos
import { JButton, JAlert, JBadge } from '../../../src/components'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register Joko-UI components globally
    app.component('JButton', JButton)
    app.component('JAlert', JAlert)
    app.component('JBadge', JBadge)
  }
}
