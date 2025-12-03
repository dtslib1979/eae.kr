import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MDXProvider } from '@mdx-js/react'
import './index.css'
import App from './App.jsx'
import * as MDXComponents from './components/mdx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MDXProvider components={MDXComponents}>
      <App />
    </MDXProvider>
  </StrictMode>,
)
