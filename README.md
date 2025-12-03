# EAE PWA Site

A fully functional Progressive Web App built with React, Vite, MDX, TailwindCSS, and deployed on GitHub Pages.

**Live Site:** [www.eae.kr](https://www.eae.kr)

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **MDX** - Markdown with JSX support
  - `@mdx-js/react` - React integration
  - `@mdx-js/rollup` - Rollup plugin
  - `remark-gfm` - GitHub Flavored Markdown
  - `rehype-slug` - Add IDs to headings
- **TailwindCSS v4** - Utility-first CSS framework
- **vite-plugin-pwa** - PWA support with Workbox
- **GitHub Actions** - CI/CD for automated deployment

## Project Structure

```
.
├── .github/workflows/    # GitHub Actions deployment
├── public/
│   ├── icons/           # Category and PWA icons
│   └── CNAME            # Custom domain configuration
├── src/
│   ├── components/      # React components (Layout)
│   │   └── mdx/        # MDX-specific components
│   ├── content/         # MDX content organized by category
│   │   ├── eae-blueprint/ # EAE architecture & templates
│   │   ├── qsketch/    # Quick Sketch posts
│   │   ├── penon/      # Penon posts
│   │   ├── mal/        # Mal posts
│   │   ├── patchtech/  # Patchtech posts
│   │   ├── eml/        # EML posts
│   │   └── phl/        # PHL posts
│   ├── pages/          # Page components
│   │   ├── Home.jsx    # Homepage with categories and latest posts
│   │   ├── Category.jsx # Category listing page
│   │   ├── Post.jsx    # Individual post page
│   │   ├── Archive.jsx # Archive page with all posts
│   │   └── About.jsx   # About page
│   ├── utils/          # Utility functions
│   │   └── posts.js    # MDX import and processing
│   └── App.jsx         # Router configuration
├── PROMPT-ENGINE-SPECIFICATION.md  # Prompt Generation Engine v1.0
├── PROMPT-ENGINE-QUICKSTART.md     # Quick start guide
├── BLUEPRINT.md                     # Universal Report Template Engine
├── MDX-TEMPLATE-SPECIFICATION.md   # MDX component specifications
├── vite.config.js      # Vite configuration with MDX and PWA
├── tailwind.config.js  # TailwindCSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Features

### Pages

- **Home (/)** - Displays 6 categories with post counts and latest 3 posts
- **Category (/category/:slug)** - Lists all posts in a category
- **Post (/category/:slug/:post)** - Individual post rendered from MDX
- **Archive (/archive)** - All posts grouped by category
- **About (/about)** - About page with site information

### Categories

1. **eae-blueprint** - EAE architecture, templates, and prompt engine
2. **qsketch** - Quick Sketch
3. **penon** - Penon
4. **mal** - Mal
5. **patchtech** - Patchtech
6. **eml** - EML
7. **phl** - PHL

### Prompt Generation Engine v1.0

- ✅ **Automated MDX Report Generation** - AI-powered content creation
- ✅ **8-Slot Input System** - Standardized input format
- ✅ **3-Part Structure** - Grandpa Mode, Architect Mode, Theory Map
- ✅ **Master Prompt Template** - Ready-to-use LLM prompt
- ✅ **Full MDX Component Support** - OpeningFrame, Parts, Mermaid, etc.
- ✅ **Quick Start Guide** - Easy onboarding for new users

See [PROMPT-ENGINE-SPECIFICATION.md](./PROMPT-ENGINE-SPECIFICATION.md) for details.

### PWA Features

- ✅ Service Worker with Workbox
- ✅ Web App Manifest
- ✅ Offline support
- ✅ Installable on mobile and desktop
- ✅ 192x192 and 512x512 app icons

### GitHub Pages Deployment

- ✅ Automated deployment via GitHub Actions
- ✅ Custom domain support (www.eae.kr)
- ✅ SPA routing support (404.html fallback)
- ✅ Asset optimization and minification

## Development

### Prerequisites

- Node.js 20.x or higher
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Runs the app in development mode at `http://localhost:5173`

### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.  
Also copies `index.html` to `404.html` for SPA routing support.

### Preview

```bash
npm run preview
```

Preview the production build locally at `http://localhost:4173`

### Lint

```bash
npm run lint
```

Runs ESLint to check code quality.

## Adding Content

### Create a New Post (Manual Method)

1. Navigate to the appropriate category folder in `src/content/`
2. Create a new `.mdx` file with frontmatter:

```mdx
---
title: "Your Post Title"
date: "2025-01-15"
category: "qsketch"
---

# Your Post Title

Your content here with full MDX support...
```

3. The post will automatically appear in the category list and home page

### Create a New Post (Automated with Prompt Engine)

Use the **Prompt Generation Engine v1.0** to automatically generate MDX reports:

1. Read [PROMPT-ENGINE-QUICKSTART.md](./PROMPT-ENGINE-QUICKSTART.md)
2. Prepare your 8-slot INPUT:
   - ReportTitle
   - Category
   - CoreIdea
   - Keywords
   - YouTubeID (optional)
   - MermaidNodes
   - MusicEmbed (optional)
   - PromptLink
3. Use the master prompt with ChatGPT/Claude
4. Save the generated MDX to `src/content/{category}/`
5. Commit and push to deploy

See [PROMPT-ENGINE-SPECIFICATION.md](./PROMPT-ENGINE-SPECIFICATION.md) for full details.

### Create a New Category

1. Add a new folder under `src/content/`
2. Update `src/utils/posts.js` to include the new category in `getCategoryCounts()`
3. Update `src/pages/Home.jsx` to add the category to the categories array
4. Create placeholder MDX files in the new category folder

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Prerequisites

**Important:** GitHub Pages must be enabled in the repository settings before deployment will work.

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save the settings

The workflow will fail with a 404 error if GitHub Pages is not enabled.

### GitHub Actions Workflow

The deployment workflow:
1. Checks out the code
2. Sets up Node.js 20
3. Installs dependencies with `npm ci`
4. Builds the project with `npm run build`
5. Uploads the `dist` folder as a Pages artifact
6. Deploys to GitHub Pages

### Custom Domain

The CNAME file in the `public` folder configures the custom domain `www.eae.kr`.

## License

MIT
