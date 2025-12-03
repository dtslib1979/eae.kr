import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
      providerImportSource: '@mdx-js/react',
    })},
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icons/*.svg', 'icons/*.png'],
      manifest: {
        name: 'EAE',
        short_name: 'EAE',
        description: 'EAE PWA Site',
        theme_color: '#3B82F6',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: '/',
})
