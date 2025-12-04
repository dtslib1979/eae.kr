# MDX Authoring Guide for eae.kr

## Overview

This guide provides best practices and requirements for creating MDX posts in the eae.kr repository. Follow these guidelines to ensure your posts render correctly and maintain consistency across the site.

---

## File Naming Convention

### ✅ **REQUIRED**: Filename must match the slug in frontmatter

**File naming rule:**
- Use kebab-case (lowercase with hyphens)
- Filename (without `.mdx` extension) must match the `slug` field in frontmatter
- Place files in the appropriate category folder: `src/content/{category-name}/`

**Example:**
```
Frontmatter slug: "eduart-engineer-blueprint-parksy-os-v1"
Filename: eduart-engineer-blueprint-parksy-os-v1.mdx
Path: src/content/eae-blueprint/eduart-engineer-blueprint-parksy-os-v1.mdx
```

**❌ Common mistakes:**
- Using spaces in filename: `EAE blueprint.mdx` (WRONG)
- Mismatching filename and slug
- Using uppercase letters

---

## Frontmatter Structure

### Required Fields

```yaml
---
title: "Your Post Title"
slug: "your-post-slug"
date: "YYYY-MM-DD"
category: "category-slug"
---
```

### Optional Fields

```yaml
---
# ... required fields above ...
published: true  # or false to hide from listings (default: true)
youtube:
  url: "https://www.youtube.com/watch?v=VIDEO_ID"
  autoplay: false
spotify:
  url: "https://open.spotify.com/track/TRACK_ID"
  mode: "button"
tags:
  - "tag1"
  - "tag2"
summary: "A brief description of your post"
---
```

### Field Details

- **`title`** (required): Display title of the post
- **`slug`** (required): URL-friendly identifier (must match filename)
- **`date`** (required): Publication date in YYYY-MM-DD format
  - Posts dated more than 24 hours in the future will be hidden
  - Use current or tomorrow's date for immediate visibility
- **`category`** (required): Category slug (must match folder name)
- **`published`** (optional): Set to `false` to hide from listings
- **`youtube`** (optional): YouTube video configuration
  - `url`: Full YouTube URL or leave empty `""`
  - `autoplay`: Boolean (default: false)
- **`spotify`** (optional): Spotify track configuration
  - `url`: Full Spotify track URL or leave empty `""`
  - `mode`: "button" or "embed" (default: "button")
- **`tags`** (optional): Array of tag strings
- **`summary`** (optional): Short description for SEO and previews

---

## Available Custom Components

All custom components are automatically available in MDX files via MDXProvider. You can use them directly without imports.

### 1. OpeningFrame

Display a YouTube video or image at the top of your post.

**Usage with YouTube:**
```jsx
<OpeningFrame 
  videoId="dQw4w9WgXcQ" 
  title="Video Title"
/>
```

**Usage with image:**
```jsx
<OpeningFrame 
  src="/path/to/image.jpg" 
  title="Image Title"
  description="Optional description"
/>
```

**Props:**
- `videoId` (optional): YouTube video ID (11 characters)
- `src` (optional): Image URL or YouTube URL
- `title` (optional): Title for the frame (default: "Opening Frame")
- `description` (optional): Caption text below the frame

**Note:** If both `videoId` and `src` are empty strings (`""`), the component will not render.

---

### 2. Mermaid

Render flowcharts, diagrams, and visualizations using Mermaid.js.

**Usage (recommended - using `chart` prop):**
```jsx
<Mermaid
  chart={`
    graph TD
      A[Start] --> B[Process]
      B --> C[End]
  `}
/>
```

**Alternative usage (using children):**
```jsx
<Mermaid>
{`
  graph LR
    A --> B
    B --> C
`}
</Mermaid>
```

**Supported Mermaid diagram types:**
- Flowcharts (`graph`, `flowchart`)
- Sequence diagrams (`sequenceDiagram`)
- Class diagrams (`classDiagram`)
- State diagrams (`stateDiagram`)
- Entity relationship diagrams (`erDiagram`)
- Gantt charts (`gantt`)
- Pie charts (`pie`)
- Mindmaps (`mindmap`)
- And more (see [Mermaid documentation](https://mermaid.js.org/))

**Best practices:**
- Use template literals with backticks
- Indent diagram code for readability
- Test complex diagrams in [Mermaid Live Editor](https://mermaid.live/)

---

### 3. PromptEngineLink

Add a call-to-action link to the Prompt Engine portal.

**Usage:**
```jsx
<PromptEngineLink 
  href="https://eae.kr/prompt-engine/your-post-slug" 
  title="Custom Title"
/>
```

**Props:**
- `href` (optional): Target URL (default: "https://parksy.kr/prompt-engine/eae-skillset6")
- `title` (optional): Display title (default: "Prompt Engine Portal")

**Typical placement:** End of the post, after main content

---

### 4. SpotifyEmbed

Embed a Spotify track link button.

**Usage:**
```jsx
<SpotifyEmbed 
  track="3n3Ppam7vgaVa1iaRUc9Lp" 
  title="Background Music"
/>
```

**Props:**
- `track` (required): Spotify track ID or full URL
- `title` (optional): Button label
- `spotifyUrl` (optional): Alternative prop name for track URL
- `label` (optional): Alternative prop name for title

**Supported formats:**
- Track ID: `3n3Ppam7vgaVa1iaRUc9Lp`
- Full URL: `https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp`
- Spotify URI: `spotify:track:3n3Ppam7vgaVa1iaRUc9Lp`

---

### 5. Part1, Part2, Part3

Structural components for organizing content (used in some templates).

**Usage:**
```jsx
<Part1>
## Grandpa Mode
Easy explanation content...
</Part1>

<Part2>
## System Architect Mode
Technical details...
</Part2>

<Part3>
## Theory Map
Conceptual frameworks...
</Part3>
```

---

### 6. SketchCard

Display custom SVG sketches or illustrations.

**Usage:**
```jsx
<SketchCard title="Flow Diagram">
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="80" height="60" fill="#F59E0B" rx="5"/>
    <text x="90" y="85" fontSize="14" textAnchor="middle" fill="white">Feed</text>
  </svg>
</SketchCard>
```

---

### 7. YouTubeEmbed

Embed a YouTube video player.

**Usage:**
```jsx
<YouTubeEmbed 
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
  title="Video Title"
/>
```

**Note:** `OpeningFrame` is usually preferred for opening videos, as it provides better styling and fallback options.

---

## Standard Markdown Support

All standard Markdown syntax is supported:

### Headings
```md
# H1 Heading
## H2 Heading
### H3 Heading
```

### Lists
```md
- Unordered list item
- Another item

1. Ordered list item
2. Another item
```

### Links and Images
```md
[Link text](https://example.com)
![Alt text](/path/to/image.jpg)
```

### Code Blocks
````md
```javascript
const greeting = "Hello, world!";
console.log(greeting);
```
````

### Blockquotes
```md
> This is a blockquote
> It can span multiple lines
```

### Tables
```md
| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

---

## JSX and HTML Support

You can use JSX and HTML directly in MDX files.

### Using className
```jsx
<div className="my-6 p-4 rounded-2xl border border-soft bg-card">
  Custom styled content
</div>
```

### Available Tailwind classes
The project uses Tailwind CSS. Common utility classes:
- Spacing: `my-6`, `p-4`, `mx-auto`
- Layout: `flex`, `grid`, `container`
- Colors: `bg-card`, `text-white`, `border-soft`
- Typography: `text-xl`, `font-bold`, `prose`

---

## Complete Example

Here's a complete example of a well-structured MDX post:

```mdx
---
title: "My Awesome Post"
slug: "my-awesome-post"
date: "2025-12-04"
category: "eae-blueprint"
youtube:
  url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  autoplay: false
spotify:
  url: "https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp"
  mode: "button"
tags:
  - "tutorial"
  - "examples"
summary: "A comprehensive guide to creating awesome posts."
---

<OpeningFrame 
  videoId="dQw4w9WgXcQ" 
  title="Introduction Video"
/>

# Main Content

This is the main content of my post. I can use **bold** and *italic* text.

## System Architecture

Here's how the system works:

<Mermaid
  chart={`
    graph TD
      A[User Input] --> B[Processing]
      B --> C[Output]
      C --> D[Feedback]
      D --> A
  `}
/>

## Key Points

- Point one
- Point two
- Point three

<div className="my-6 p-4 rounded-2xl border border-soft bg-card">
  <Mermaid
    chart={`
      pie title Project Distribution
        "Research" : 30
        "Development" : 50
        "Testing" : 20
    `}
  />
</div>

## Conclusion

This wraps up the main content.

<PromptEngineLink href="https://eae.kr/prompt-engine/my-awesome-post" />
```

---

## Troubleshooting

### Post not appearing in listings
- Check that `published` is not set to `false`
- Verify `date` is not more than 24 hours in the future
- Ensure frontmatter is valid YAML

### Page renders blank
- Check browser console for JavaScript errors
- Verify all custom component names are spelled correctly
- Ensure Mermaid diagram syntax is valid

### Mermaid diagram not rendering
- Verify the diagram syntax at [Mermaid Live Editor](https://mermaid.live/)
- Check that you're using template literals with backticks
- Ensure there are no unescaped special characters

### YouTube/Spotify not showing
- If using frontmatter `youtube`/`spotify`, ensure they have a `url` property
- Empty URLs (`""`) will not render the component
- Verify URL format is correct

---

## Best Practices

1. **Test locally** before committing
   - Run `npm run dev` and check your post at `http://localhost:5173`

2. **Use semantic structure**
   - Use proper heading hierarchy (H1 → H2 → H3)
   - Don't skip heading levels

3. **Keep it readable**
   - Break long paragraphs into smaller chunks
   - Use lists for enumeration
   - Add visual elements (diagrams, images) to break up text

4. **Optimize media**
   - Use appropriate image sizes
   - Prefer YouTube hosting for videos
   - Use Spotify IDs rather than full URLs when possible

5. **Consistent naming**
   - Follow kebab-case for slugs and filenames
   - Use descriptive, SEO-friendly slugs

6. **Version control**
   - Commit one post at a time
   - Write descriptive commit messages

---

## Quick Checklist

Before publishing, verify:

- [ ] Filename matches slug in frontmatter
- [ ] All required frontmatter fields are present
- [ ] Date format is YYYY-MM-DD
- [ ] Date is within 24 hours of current time (if you want immediate visibility)
- [ ] Category matches an existing folder
- [ ] YouTube/Spotify URLs are valid (or empty if not used)
- [ ] Mermaid diagrams render correctly
- [ ] No JavaScript errors in browser console
- [ ] Content displays properly on both desktop and mobile
- [ ] All links work correctly

---

## Getting Help

If you encounter issues:

1. Check the browser console for error messages
2. Verify your MDX syntax in a Markdown validator
3. Test Mermaid diagrams in [Mermaid Live Editor](https://mermaid.live/)
4. Review working examples in `src/content/eae-blueprint/`
5. Check the MDX documentation: https://mdxjs.com/

---

**Last updated:** 2025-12-04  
**Version:** 1.0
