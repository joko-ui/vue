---
layout: home

hero:
  name: Joko-UI
  text: Vue 3 Component Library
  tagline: Pronounced like "Joko-wi". Inspired by Joko Widodo's leadership and Indonesian identity. Build with purpose. Build for the people.
  image:
    src: /assets/hero.png
    alt: Joko-UI Hero Illustration
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: View Components
      link: /components/
    - theme: alt
      text: Open Storybook →
      link: http://localhost:6006

features:
  - icon: 🏗️
    title: Infrastructure-Inspired
    details: Built like the foundations of Indonesia's development projects - solid, scalable, and made to last. Every component is a building block for your application.

  - icon: 🤝
    title: Accessible & Approachable
    details: Following Jokowi's people-first philosophy, our components are WCAG 2.1 AA compliant and designed to be intuitive for all users.

  - icon: 🚀
    title: Modern & Progressive
    details: Embracing innovation while honoring tradition. Built with Vue 3, TypeScript, and the latest web standards for exceptional developer experience.

  - icon: 🇮🇩
    title: Indonesian at Heart
    details: Featuring colors inspired by national identity, optional batik patterns, and support for Bahasa Indonesia. Celebrating local design.

  - icon: 🎨
    title: Complete Design System
    details: Comprehensive design tokens, typography scales, spacing systems, and component guidelines based on formal yet approachable aesthetics.

  - icon: 📚
    title: Well Documented
    details: Extensive documentation, live examples, Storybook integration, and code snippets. Everything you need to build with confidence.
---

<style scoped>
.philosophy-section {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 24px;
}

.philosophy-quote {
  font-size: 2rem;
  font-style: italic;
  color: var(--joko-red-600);
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  border-left: 4px solid var(--joko-red-600);
  background-color: var(--joko-red-50);
  border-radius: 0.75rem;
}

.philosophy-quote strong {
  display: block;
  margin-top: 1rem;
  font-size: 1rem;
  font-style: normal;
  color: var(--joko-neutral-700);
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.value-card {
  padding: 2rem;
  background: var(--joko-white);
  border: 1px solid var(--joko-neutral-200);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.value-card:hover {
  border-color: var(--joko-red-600);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  transform: translateY(-4px);
}

.value-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--joko-neutral-900);
  margin-bottom: 0.75rem;
}

.value-description {
  color: var(--joko-neutral-600);
  line-height: 1.6;
}

.demo-section {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 24px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, var(--joko-red-600) 30%, var(--joko-blue-600));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  text-align: center;
  color: var(--joko-neutral-600);
  font-size: 1.125rem;
  margin-bottom: 3rem;
}

.component-demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.component-card {
  padding: 2rem;
  background: var(--joko-white);
  border: 1px solid var(--joko-neutral-200);
  border-radius: 1rem;
}

.component-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--joko-neutral-900);
}

.component-preview {
  padding: 2rem;
  background: var(--joko-neutral-50);
  border-radius: 0.75rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

.color-palette-section {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 24px;
}

.color-groups {
  display: grid;
  gap: 3rem;
  margin: 3rem 0;
}

.color-group-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--joko-neutral-900);
}

.color-swatches {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

.color-swatch {
  text-align: center;
}

.color-box {
  height: 80px;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid var(--joko-neutral-200);
}

.color-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--joko-neutral-900);
}

.color-value {
  font-size: 0.75rem;
  color: var(--joko-neutral-600);
  font-family: monospace;
}

.cta-section {
  max-width: 800px;
  margin: 6rem auto;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, var(--joko-red-600) 0%, var(--joko-blue-600) 100%);
  border-radius: 1.5rem;
  text-align: center;
  color: white;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .philosophy-quote {
    font-size: 1.5rem;
    padding: 1.5rem;
  }

  .value-grid {
    grid-template-columns: 1fr;
  }

  .component-demo-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
  }
}
</style>

<!-- Philosophy Section -->
<div class="philosophy-section">
  <h2 class="section-title">Design Philosophy</h2>
  <p class="section-subtitle">Inspired by leadership that builds for the people</p>

  <div class="philosophy-quote">
    "Kerja, kerja, kerja"
    <strong>— Joko Widodo</strong>
  </div>

  <div class="value-grid">
    <div class="value-card">
      <h3 class="value-title">🏗️ Solid Foundation</h3>
      <p class="value-description">
        Like infrastructure projects, our components are built to last. Every element is carefully engineered for reliability and scalability.
      </p>
    </div>

    <div class="value-card">
      <h3 class="value-title">💬 Clear Communication</h3>
      <p class="value-description">
        Transparent, understandable interfaces for all users. No hidden complexity, just straightforward design that makes sense.
      </p>
    </div>

    <div class="value-card">
      <h3 class="value-title">⚡ Progressive Enhancement</h3>
      <p class="value-description">
        Modern technology serving timeless needs. We embrace innovation while maintaining accessibility and usability.
      </p>
    </div>

    <div class="value-card">
      <h3 class="value-title">🇮🇩 Cultural Identity</h3>
      <p class="value-description">
        Subtle Indonesian influences throughout. Celebrating national pride through design that honors local heritage.
      </p>
    </div>

  </div>
</div>

<!-- Live Component Demos -->
<div class="demo-section">
  <h2 class="section-title">Live Component Previews</h2>
  <p class="section-subtitle">See Joko-UI components in action</p>

  <div class="component-demo-grid">
    <div class="component-card">
      <h3 class="component-title">JButton - Action Components</h3>
      <div class="component-preview">
        <JButton variant="primary">Primary Action</JButton>
        <JButton variant="secondary">Secondary Action</JButton>
        <JButton variant="outline">Outline Button</JButton>
        <JButton variant="ghost">Ghost Button</JButton>
      </div>
      <p style="color: var(--joko-neutral-600); font-size: 0.875rem; margin-top: 1rem;">
        Presidential buttons inspired by Jokowi's bold, action-oriented leadership. Available in multiple variants and sizes.
      </p>
    </div>

    <div class="component-card">
      <h3 class="component-title">JAlert - Notifications</h3>
      <div class="component-preview">
        <JAlert variant="success" title="Success!">
          Proyek berhasil diselesaikan.
        </JAlert>
        <JAlert variant="warning" title="Perhatian">
          Harap tinjau sebelum melanjutkan.
        </JAlert>
        <JAlert variant="error" title="Error">
          Terjadi kesalahan dalam proses.
        </JAlert>
        <JAlert variant="info" title="Informasi">
          Pembaruan sistem tersedia.
        </JAlert>
      </div>
      <p style="color: var(--joko-neutral-600); font-size: 0.875rem; margin-top: 1rem;">
        Clear, accessible alerts for all types of messages. Supports Bahasa Indonesia content.
      </p>
    </div>

    <div class="component-card">
      <h3 class="component-title">JBadge - Status Indicators</h3>
      <div class="component-preview" style="flex-direction: row; flex-wrap: wrap; align-items: center;">
        <JBadge variant="primary">Featured</JBadge>
        <JBadge variant="success">Active</JBadge>
        <JBadge variant="warning">Pending</JBadge>
        <JBadge variant="error">Cancelled</JBadge>
        <JBadge variant="neutral">Draft</JBadge>
      </div>
      <p style="color: var(--joko-neutral-600); font-size: 0.875rem; margin-top: 1rem;">
        Versatile badges for status, categories, and labels. Multiple variants and sizes available.
      </p>
    </div>

  </div>

  <div style="text-align: center; margin-top: 3rem;">
    <a href="/components/" style="display: inline-flex; padding: 0.75rem 2rem; background: var(--joko-red-600); color: white; border-radius: 0.5rem; text-decoration: none; font-weight: 600; transition: all 0.2s;">
      Explore All Components →
    </a>
  </div>
</div>

<!-- Color Palette -->
<div class="color-palette-section">
  <h2 class="section-title">Indonesian-Inspired Color Palette</h2>
  <p class="section-subtitle">Presidential colors that convey authority and trust</p>

  <div class="color-groups">
    <div>
      <h3 class="color-group-title">Merah Jokowi (Primary Red)</h3>
      <p style="color: var(--joko-neutral-600); margin-bottom: 1rem;">Authoritative, passionate, action-oriented</p>
      <div class="color-swatches">
        <div class="color-swatch">
          <div class="color-box" style="background-color: #fee2e2;"></div>
          <div class="color-label">red-100</div>
          <div class="color-value">#fee2e2</div>
        </div>
        <div class="color-swatch">
          <div class="color-box" style="background-color: #fca5a5;"></div>
          <div class="color-label">red-300</div>
          <div class="color-value">#fca5a5</div>
        </div>
        <div class="color-swatch">
          <div class="color-box" style="background-color: #ef4444;"></div>
          <div class="color-label">red-500</div>
          <div class="color-value">#ef4444</div>
        </div>
        <div class="color-swatch">
          <div class="color-box" style="background-color: #dc2626; border-color: #dc2626;"></div>
          <div class="color-label">red-600 ⭐</div>
          <div class="color-value">#dc2626</div>
        </div>
        <div class="color-swatch">
          <div class="color-box" style="background-color: #b91c1c;"></div>
          <div class="color-label">red-700</div>
          <div class="color-value">#b91c1c</div>
        </div>
        <div class="color-swatch">
          <div class="color-box" style="background-color: #991b1b;"></div>
          <div class="color-label">red-800</div>
          <div class="color-value">#991b1b</div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="color-group-title">Biru Pembangunan (Development Blue)</h3>
      <p style="color: var(--joko-neutral-600); margin-bottom: 1rem;">Trust, stability, progress</p>
      <div class="color-swatches">
        <div class="color-swatch">
          <div class="color-box" style="background-color: #dbeafe;"></div>
          <div class="color-label">blue-100</div>
          <div class="color-value">#dbeafe</div>
        </div>
        <div class="color-swatch">
          <div class="color-box" style="background-color: #93c5fd;"></div>
          <div class="color-label">blue-300</div>
          <div class="color-value">#93c5fd</div>
        </div>
        <div class="color-swatch">
          <div class="color-box" style="background-color: #3b82f6;"></div>
          <div class="color-label">blue-500</div>
          <div class="color-value">#3b82f6</div>
        </div>
        <div class="color-swatch">
          <div class="color-box" style="background-color: #2563eb;"></div>
          <div class="color-label">blue-600 ⭐</div>
          <div class="color-value">#2563eb</div>
        </div>
        <div class="color-swatch">
          <div class="color-box" style="background-color: #1d4ed8;"></div>
          <div class="color-label">blue-700</div>
          <div class="color-value">#1d4ed8</div>
        </div>
        <div class="color-swatch">
          <div class="color-box" style="background-color: #1e40af;"></div>
          <div class="color-label">blue-800</div>
          <div class="color-value">#1e40af</div>
        </div>
      </div>
    </div>

  </div>

  <div style="text-align: center; margin-top: 3rem;">
    <a href="/tokens" style="display: inline-flex; padding: 0.75rem 2rem; background: transparent; color: var(--joko-red-600); border: 2px solid var(--joko-red-600); border-radius: 0.5rem; text-decoration: none; font-weight: 600; transition: all 0.2s;">
      View All Design Tokens →
    </a>
  </div>
</div>

<!-- CTA Section -->
<div class="cta-section">
  <h2 class="cta-title">Ready to Build with Joko-UI?</h2>
  <p class="cta-description">
    Start creating presidential-quality interfaces inspired by Indonesia's development era
  </p>
  <div class="cta-buttons">
    <a href="/getting-started" style="padding: 0.875rem 2rem; background: white; color: var(--joko-red-600); border-radius: 0.5rem; text-decoration: none; font-weight: 600; transition: all 0.2s;">
      Get Started →
    </a>
    <a href="http://localhost:6006" target="_blank" style="padding: 0.875rem 2rem; background: transparent; color: white; border: 2px solid white; border-radius: 0.5rem; text-decoration: none; font-weight: 600; transition: all 0.2s;">
      Open Storybook
    </a>
  </div>
</div>
