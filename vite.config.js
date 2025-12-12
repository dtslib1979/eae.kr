import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeSlug from 'rehype-slug'
import { VitePWA } from 'vite-plugin-pwa'
import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'

// Copy logo to public folder before build
const logoSrc = resolve(__dirname, 'eae.kr-logo.png')
const logoDest = resolve(__dirname, 'public/eae.kr-logo.png')
if (existsSync(logoSrc) && !existsSync(logoDest)) {
  copyFileSync(logoSrc, logoDest)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx({
      remarkPlugins: [
        remarkGfm, 
        remarkFrontmatter, 
        [remarkMdxFrontmatter, { name: 'frontmatter' }]
      ],
      rehypePlugins: [rehypeSlug],
      providerImportSource: '@mdx-js/react',
    })},
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'eae.kr-logo.png'],
      manifest: {
        name: 'eae.kr',
        short_name: 'eae',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
          {
            src: '/eae.kr-logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/eae.kr-logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  build: {
    outDir: 'dist',
  }
})
