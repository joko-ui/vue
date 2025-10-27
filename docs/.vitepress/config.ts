import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Joko-UI',
  description: 'Vue 3 UI component library inspired by Joko Widodo\'s leadership and Indonesian identity',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/getting-started' },
      { text: 'Philosophy', link: '/philosophy' },
      { text: 'Components', link: '/components/' },
      { text: 'Storybook', link: 'http://localhost:6006', target: '_blank' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Quick Start', link: '/getting-started' },
          { text: 'The Philosophy', link: '/philosophy' }
        ]
      },
      {
        text: 'Design System',
        collapsed: false,
        items: [
          { text: 'Design Principles', link: '/design-principles' },
          { text: 'Brand Guidelines', link: '/brand-guidelines' },
          { text: 'Design Tokens', link: '/tokens' }
        ]
      },
      {
        text: 'Components',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/components/' },
          { text: 'JButton', link: '/components/button' },
          { text: 'JAlert', link: '/components/alert' },
          { text: 'JBadge', link: '/components/badge' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/joko-ui' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Inspired by Joko Widodo\'s leadership • "Kerja, kerja, kerja" (Work, work, work)'
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
})
