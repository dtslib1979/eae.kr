import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeSlug from 'rehype-slug'

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
  ],
  build: {
    outDir: 'dist',
  }
})
