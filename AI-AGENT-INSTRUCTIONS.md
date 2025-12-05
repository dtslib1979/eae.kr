# AI Agent Instructions for MDX Report Generation

**EAE Skillset6 / EduArt OS – Agent Compilation Rulebook v1.0**

## Purpose

This document provides complete instructions for ChatGPT, Claude, or any AI agent to generate valid, high-quality MDX reports that follow the EAE Universal Report Template Engine specification.

---

## Quick Start

When asked to create an MDX report, follow these steps:

1. ✅ Start with valid frontmatter
2. ✅ Use OpeningFrame with YouTube video
3. ✅ Write Part1 in simple, analogical language
4. ✅ Write Part2 with technical architecture
5. ✅ Write Part3 with Mermaid diagram and philosophy
6. ✅ Add optional SketchCard (if visual needed)
7. ✅ Add optional SpotifyEmbed (if music fits)
8. ✅ End with PromptEngineLink (REQUIRED)

---

## Golden Rules (Never Break These)

### 🔴 Rule #0: Part2 MUST Use Accordion Structure

**In repo dtslib1979/eae.kr, ALL MDX files in `src/content/**/*.mdx` MUST follow this rule for Part2:**

```mdx
<Part2>

<Accordion>

  <AccordionItem title="1. System Overview">
    Explain what the system does and its overall structure.
  </AccordionItem>

  <AccordionItem title="2. Components / Modules">
    List the key modules and what they do.
  </AccordionItem>

  <AccordionItem title="3. Workflow">
    Show the step-by-step flow (input -> process -> output).
  </AccordionItem>

</Accordion>

</Part2>
```

**KEY REQUIREMENTS:**
- Part2 MUST contain a single `<Accordion>` as its top-level container
- Inside `<Accordion>`, content MUST be structured into multiple `<AccordionItem>` blocks
- Each `AccordionItem` represents one logical section
- When editing existing files with plain headings/paragraphs in Part2, convert them to this structure
- Copilot MUST NOT write raw JavaScript for accordion behavior (components handle it)
- Copilot MUST fix JSX/MDX syntax issues automatically

**This is the PRIMARY rule for Part2. All Part2 sections MUST follow this pattern.**

---

### 🔴 Rule #1: Component Order is FIXED

```mdx
1. Frontmatter (---)
2. <OpeningFrame />  
3. <Part1>...</Part1>
4. <Part2>...</Part2>
5. <Part3>...</Part3>
6. <SketchCard>...</SketchCard> (optional)
7. <SpotifyEmbed /> (optional)
8. <PromptEngineLink /> (REQUIRED)
```

**Never reorder these components.**

### 🔴 Rule #2: Always Valid MDX

- All JSX tags must close properly
- No raw HTML mixed in
- Props must use correct syntax
- Code blocks must use triple backticks

### 🔴 Rule #3: Mermaid Only in Part3

**Wrong:**
```mdx
<Mermaid>graph TD; A-->B</Mermaid>
```

**Correct:**
```mdx
<Part3>
```mermaid
graph TD
  A --> B
```
</Part3>
```

### 🔴 Rule #4: Mobile-First Content

- Keep paragraphs 3-6 lines
- Avoid long walls of text
- Use visual components
- Break up content with headings

### 🔴 Rule #5: Required Frontmatter

```mdx
---
title: "Clear, Descriptive Title"
date: "YYYY-MM-DD"
category: "category-name"
---
```

**Every MDX file MUST start with this.**

---

## Component Usage Guide

### OpeningFrame

**Accept either format:**

```mdx
<OpeningFrame 
  videoId="dQw4w9WgXcQ"
  title="Introduction to the Topic"
  description="Optional brief intro"
/>
```

Or:

```mdx
<OpeningFrame 
  src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  title="Introduction to the Topic"
/>
```

**Props:**
- `videoId` (string): YouTube video ID
- `src` (string): Full YouTube URL (alternative to videoId)
- `title` (string): Video title
- `description` (string, optional): Brief description

### Part1: Grandpa Mode

**Purpose:** Explain using analogies and simple language

**Style Guidelines:**
- Use everyday metaphors
- Tell mini-stories
- Avoid technical jargon
- 3-4 sentence paragraphs
- Make it conversational

**Example:**
```mdx
<Part1>

## Let me explain it simply

Imagine you have a toolbox. Each tool inside has a special purpose.

A hammer for nails. A screwdriver for screws. A wrench for bolts.

Skillset6 is like that toolbox, but for your ideas and creativity.

</Part1>
```

### Part2: System Architect Mode

**Purpose:** Explain technical structure and flow

**🔴 CRITICAL RULE: Part2 MUST use Accordion Structure**

ALL Part2 sections MUST follow this mandatory structure:

```mdx
<Part2>

<Accordion>

  <AccordionItem title="1. System Overview">
    Explain what the system does and its overall structure.
  </AccordionItem>

  <AccordionItem title="2. Components / Modules">
    List the key modules and what they do.
  </AccordionItem>

  <AccordionItem title="3. Workflow">
    Show the step-by-step flow (input -> process -> output).
  </AccordionItem>

</Accordion>

</Part2>
```

**Style Guidelines:**
- Part2 MUST contain a single `<Accordion>` as its top-level container
- Inside `<Accordion>`, content MUST be structured into multiple `<AccordionItem>` blocks
- Each `AccordionItem` represents one logical section (e.g., System Overview, Modules, Workflow, Usage)
- Include architecture diagrams (ASCII or description) inside AccordionItems
- Show data flow in appropriate AccordionItems
- List tech stack in dedicated AccordionItem
- Use code blocks for structure within AccordionItems
- Still keep accessible to non-developers

**Complete Example:**
```mdx
<Part2>

<Accordion>

  <AccordionItem title="1. System Overview">
    
    This system processes MDX content through a React-based pipeline, transforming 
    structured content into beautiful, interactive web pages.

  </AccordionItem>

  <AccordionItem title="2. Data Flow">

    ```
    Input → Processing → Output
      ↓         ↓          ↓
    Feed → Digest → Expression
    ```

    The system takes MDX input, transforms it with React components, applies 
    Tailwind styling, and outputs a complete web application.

  </AccordionItem>

  <AccordionItem title="3. Tech Stack">

    - **React 18** - UI framework
    - **Vite** - Build tool
    - **Tailwind CSS** - Styling
    - **MDX** - Content format

  </AccordionItem>

  <AccordionItem title="4. How It Works">

    The MDX files are parsed and converted to React components, which are then 
    rendered with custom styling and interactive features like accordions and hover effects.

  </AccordionItem>

</Accordion>

</Part2>
```

**Converting Existing Part2 Sections:**

When editing existing MDX files, if Part2 contains plain headings and paragraphs:

1. Each heading + its following content becomes one `AccordionItem`
2. If no headings exist, create reasonable titles and wrap content into `AccordionItem`s
3. Ensure all content is inside the `<Accordion>` wrapper

**Example Conversion:**

Before:
```mdx
<Part2>

## System Overview
The system processes data...

## Modules
- Feed
- Digest
- Expression

</Part2>
```

After:
```mdx
<Part2>

<Accordion>

  <AccordionItem title="System Overview">
    The system processes data...
  </AccordionItem>

  <AccordionItem title="Modules">
    - Feed
    - Digest
    - Expression
  </AccordionItem>

</Accordion>

</Part2>
```

### Part3: Theory Map

**Purpose:** Connect to academic/philosophical foundations

**Required Elements:**
1. One Mermaid diagram
2. 3-5 concepts or scholars
3. 3-6 lines of philosophical explanation

**Mermaid Types to Use:**
- `mindmap` - for concept relationships
- `graph TD` - for hierarchies
- `graph LR` - for processes

**Example:**
```mdx
<Part3>

## Theory Map

```mermaid
mindmap
  root((Central Concept))
    Branch 1
      Sub-concept A
      Sub-concept B
    Branch 2
      Sub-concept C
      Sub-concept D
```

### Philosophical Background

This structure draws from **Lévi-Strauss's structuralism**, analyzing patterns like myths.

It embodies **Nietzsche's perspectivism** - viewing the same content from multiple angles.

Following **Foucault's discourse analysis**, each report reveals knowledge production mechanisms.

</Part3>
```

### SketchCard (Optional)

**Use when:** Visual sketch would help understanding

**Two modes:**

Mode 1 - Image URL:
```mdx
<SketchCard 
  title="Flow Diagram"
  src="/images/sketch.png"
  caption="How data flows through the system"
/>
```

Mode 2 - Inline SVG (demonstrated in gold-template.mdx):
```mdx
<SketchCard title="Custom Sketch">
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="100" height="60" fill="#3B82F6" rx="5"/>
    <text x="100" y="85" fontSize="14" textAnchor="middle" fill="white">Box</text>
  </svg>
</SketchCard>
```

**Note:** When both `src` and `children` are provided, `src` takes precedence.

### SpotifyEmbed (Optional)

**Use when:** Music/atmosphere enhances the content

```mdx
<SpotifyEmbed 
  track="3n3Ppam7vgaVa1iaRUc9Lp"
  title="Background Music"
/>
```

**Track ID formats accepted:**
- ID only: `3n3Ppam7vgaVa1iaRUc9Lp`
- URI: `spotify:track:3n3Ppam7vgaVa1iaRUc9Lp`
- URL: `https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp`

### Accordion & AccordionItem (Optional)

**Use when:** Organizing long content into collapsible sections

**Basic Accordion:**
```mdx
<Accordion title="Section Title">

Content that can be collapsed and expanded.

</Accordion>
```

**Accordion with defaultOpen:**
```mdx
<Accordion title="Important Section" defaultOpen={true}>

This section starts expanded by default.

</Accordion>
```

**Nested AccordionItem:**
```mdx
<Accordion title="Main Section">

<AccordionItem title="Subsection 1">

Content for subsection 1.

</AccordionItem>

<AccordionItem title="Subsection 2" defaultOpen={true}>

Content for subsection 2. This one starts open!

</AccordionItem>

</Accordion>
```

**Props (both Accordion and AccordionItem):**
- `title` (string, required): Section heading
- `defaultOpen` (boolean, optional): Whether section starts expanded (default: false)

**Best practices:**
- Use for long documentation or educational content
- Keep titles concise and descriptive
- Use AccordionItem for hierarchical organization within an Accordion

### Hover Zoom Effect (Optional)

**Use when:** Emphasizing content blocks for focus and readability

Add the `mdx-zoom-target` className to any content block for a subtle hover zoom effect:

```mdx
<div className="mdx-zoom-target p-4 bg-slate-800 rounded-lg my-4">

### Important Section

This content will slightly scale up (1.03x) when hovered, with a smooth 0.45s delay.
Perfect for highlighting key sections in long-form content.

</div>
```

**Effect details:**
- Scale: 1.03x (subtle, professional)
- Transition: 0.22s ease-out
- Delay: 0.45s (prevents accidental triggers)
- Recommended scale range: 1.02 - 1.04

**Best practices:**
- Use selectively on important content blocks
- Don't overuse - can cause eye strain if applied globally
- Works great for educational content on projectors/tablets
- Helps readers maintain focus during scrolling

### PromptEngineLink (REQUIRED)

**Always use at the end:**

```mdx
<PromptEngineLink href="https://parksy.kr/prompt-engine/eae-skillset6" />
```

Or use default:

```mdx
<PromptEngineLink />
```

---

## Content Writing Guidelines

### Language

- **Part1:** Simple, conversational (English or Korean)
- **Part2:** Technical but accessible
- **Part3:** Academic/philosophical

### Length

- **Part1:** 4-8 paragraphs
- **Part2:** 6-12 paragraphs + diagrams
- **Part3:** Mermaid + 3-6 paragraphs

### Tone

- **Part1:** Friendly grandfather
- **Part2:** Professional architect
- **Part3:** Thoughtful scholar

---

## Common Mistakes to Avoid

### ❌ Wrong: Mermaid as standalone component
```mdx
<Mermaid>graph TD; A-->B</Mermaid>
```

### ✅ Correct: Mermaid inside Part3
```mdx
<Part3>
```mermaid
graph TD
  A --> B
```
</Part3>
```

---

### ❌ Wrong: Missing frontmatter
```mdx
<OpeningFrame src="..." />
```

### ✅ Correct: Always start with frontmatter
```mdx
---
title: "Report Title"
date: "2025-12-03"
category: "eae"
---

<OpeningFrame src="..." />
```

---

### ❌ Wrong: Components out of order
```mdx
<Part2>...</Part2>
<Part1>...</Part1>  <!-- Wrong order! -->
```

### ✅ Correct: Fixed order
```mdx
<Part1>...</Part1>
<Part2>...</Part2>
<Part3>...</Part3>
```

---

### ❌ Wrong: Missing PromptEngineLink
```mdx
<SpotifyEmbed track="..." />
<!-- End of file - missing PromptEngineLink! -->
```

### ✅ Correct: Always end with PromptEngineLink
```mdx
<SpotifyEmbed track="..." />

<PromptEngineLink />
```

---

## Complete Template

Use this as your starting point:

```mdx
---
title: "Your Report Title"
date: "2025-12-03"
category: "category-name"
---

<OpeningFrame 
  videoId="YOUTUBE_ID"
  title="Opening Title"
/>

<Part1>

## Simple Explanation

Use analogies and simple language here...

Tell a story that makes it easy to understand...

</Part1>

<Part2>

<Accordion>

  <AccordionItem title="1. System Overview">
    Explain what the system does and its overall structure.
  </AccordionItem>

  <AccordionItem title="2. Components / Modules">
    List the key modules and what they do.
  </AccordionItem>

  <AccordionItem title="3. Workflow">
    
    ```
    Data Flow:
    Input → Process → Output
    ```
    
    Explain the step-by-step flow.

  </AccordionItem>

  <AccordionItem title="4. Tech Stack">
    - Tool 1
    - Tool 2
  </AccordionItem>

</Accordion>

</Part2>

<Part3>

## Theory Map

```mermaid
mindmap
  root((Concept))
    Branch 1
    Branch 2
```

### Philosophical Context

Connect to academic theories...

Reference 3-5 scholars or concepts...

</Part3>

<SketchCard title="Visual Diagram">
  <svg viewBox="0 0 400 300">
    <!-- SVG content -->
  </svg>
</SketchCard>

<SpotifyEmbed track="SPOTIFY_TRACK_ID" />

<PromptEngineLink />
```

---

## Quality Checklist

Before submitting your generated MDX, verify:

- [ ] Valid frontmatter with title, date, category
- [ ] Components in correct order
- [ ] OpeningFrame has videoId or src
- [ ] Part1 uses simple language and analogies
- [ ] **Part2 contains single `<Accordion>` with multiple `<AccordionItem>` blocks**
- [ ] **Part2 has NO plain headings/paragraphs outside Accordion structure**
- [ ] Part2 has technical structure and flow inside AccordionItems
- [ ] Part3 has Mermaid diagram and philosophy
- [ ] Mermaid is INSIDE Part3, not standalone
- [ ] PromptEngineLink is at the end
- [ ] No HTML tags mixed with MDX
- [ ] All JSX components properly closed
- [ ] Mobile-friendly paragraph lengths
- [ ] No code blocks outside Part2 (except Mermaid in Part3)
- [ ] Accordion/AccordionItem properly nested if used
- [ ] mdx-zoom-target class used sparingly (not on every element)

---

## Example References

See these example templates:
- `/src/content/eae-blueprint/gold-template.mdx` - Perfect structure and style
- `/src/content/eae-blueprint/accordion-demo.mdx` - Accordion and hover zoom examples

---

## Final Reminder

**Your mission:** Generate MDX that any developer can copy-paste and it will compile without errors and look beautiful on mobile and desktop.

**The goal:** "Title + Key Message + Mermaid Idea" → AI generates complete MDX → Auto-deploy to GitHub Pages

You are part of making this seamless!

---

**EAE Skillset6 / EduArt OS – AI Agent Instruction Manual v1.0**
