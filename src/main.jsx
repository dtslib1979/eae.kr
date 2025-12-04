import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MDXProvider } from '@mdx-js/react'
import './index.css'
import App from './App.jsx'
import * as MDXComponents from './components/mdx'

/**
 * MDX Rendering Pipeline Summary:
 * 
 * 1. MDX files (*.mdx) in src/content/[category]/ contain frontmatter + JSX/Markdown
 * 2. Vite MDX plugin (vite.config.js) processes MDX with remark/rehype plugins
 * 3. MDXProvider wraps the entire app, providing global component mapping
 * 4. Components from src/components/mdx/index.js are available in all MDX files
 * 5. Post.jsx renders individual posts via <Component /> where Component is the compiled MDX
 * 6. Result: MDX authors can use <Accordion>, <ZoomOnHover>, etc. without imports
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MDXProvider components={MDXComponents}>
      <App />
    </MDXProvider>
  </StrictMode>,
)
