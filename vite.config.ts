import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: 'tsconfig.app.json',
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      // Entry point for the library
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'JokoUI',
      // Output file names
      fileName: (format) => `joko-ui.${format === 'es' ? 'js' : 'umd.cjs'}`,
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ['vue', 'lucide-vue-next'],
      output: {
        // Provide global variables for externalized deps in UMD build
        globals: {
          vue: 'Vue',
          'lucide-vue-next': 'LucideVueNext',
        },
        // Preserve CSS as a separate file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'style.css'
          return assetInfo.name!
        },
      },
    },
    // Generate sourcemaps for debugging
    sourcemap: true,
    // Clear the output directory before building
    emptyOutDir: true,
  },
})
