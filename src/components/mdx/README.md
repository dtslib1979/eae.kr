# Universal MDX Components

**EAE Skillset6 / EduArt OS – Universal Report Template Engine v1.0**

This directory contains the universal MDX components that form the foundation of the EAE Report Template Engine.

## Components Overview

### 1. OpeningFrame
**Purpose:** Display YouTube videos or CDN media at the start of each report

**Usage:**
```jsx
<OpeningFrame 
  videoId="VIDEO_ID"
  title="Video Title"
  description="Optional description"
/>
```

Or using URL:
```jsx
<OpeningFrame 
  src="https://www.youtube.com/watch?v=VIDEO_ID" 
  title="Video Title"
/>
```

**Props:**
- `videoId` (string, optional): YouTube video ID
- `src` (string, optional): YouTube URL or image URL
- `title` (string, optional): Video/frame title
- `description` (string, optional): Brief description shown below the frame

**Note:** Either `videoId` or `src` must be provided.

**Features:**
- Automatic YouTube video ID extraction
- Fallback to image display for non-YouTube URLs
- Responsive aspect-ratio design
- Secure error handling without XSS vulnerabilities

---

### 2. Part1 (Grandpa Mode)
**Purpose:** Present content using simple analogies and storytelling (비유·서사·쉬운 설명)

**Theme:** Amber (#F59E0B)

**Usage:**
```jsx
<Part1>
  할아버지가 손주에게 이야기하듯 쉬운 비유와 서사로 설명합니다.
</Part1>
```

**Guidelines:**
- Use analogies and metaphors
- Simplify complex concepts
- Tell stories to illustrate points
- Make it accessible to complete beginners

---

### 3. Part2 (System Architect Mode)
**Purpose:** Explain technical architecture, data flow, and system structure (구조·로직·데이터 흐름)

**Theme:** Blue (#3B82F6)

**Usage:**
```jsx
<Part2>
  ## 시스템 아키텍처
  
  실제 동작 구조, 데이터 플로우, 엔지니어링 세부사항을 설명합니다.
</Part2>
```

**Guidelines:**
- Include diagrams and code blocks
- Explain data flow and system interactions
- Focus on technical accuracy
- Still keep it understandable to non-developers

---

### 4. Part3 (Theory Map)
**Purpose:** Visualize concepts using Mermaid diagrams and connect to philosophical/academic foundations (개념·세계관 도식)

**Theme:** Purple (#9333EA)

**Usage:**
```jsx
<Part3>
  ## Theory Map
  
  ```mermaid
  mindmap
    root((Central Concept))
      Category 1
        Subconcept A
        Subconcept B
      Category 2
        Subconcept C
  ```
  
  철학적 배경과 학문적 맥락을 연결합니다.
</Part3>
```

**Features:**
- Auto-renders Mermaid diagrams
- Supports mindmaps, flowcharts, sequence diagrams
- Performance optimized with debouncing
- Connects to philosophical concepts (Lévi-Strauss, Nietzsche, Foucault, etc.)

---

### 5. Mermaid (Standalone)
**Purpose:** Render Mermaid diagrams independently

**Usage:**
```jsx
<Mermaid>
graph TD
  A[Concept] --> B[Concept]
  B --> C[Result]
</Mermaid>
```

**Features:**
- Can be used outside Part3 if needed
- Auto-initializes and renders diagrams
- Supports all Mermaid diagram types

**Note:** For standard reports, use Mermaid code blocks within Part3 instead.

---

### 6. SketchCard
**Purpose:** Display Excalidraw-style SVG drawings, visual sketches, or images

**Usage:**
```jsx
<SketchCard 
  title="My Sketch"
  src="/images/sketch.png"
  caption="One-line caption"
/>
```

Or with SVG children:
```jsx
<SketchCard title="My Sketch">
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <!-- SVG content -->
  </svg>
</SketchCard>
```

**Props:**
- `title` (string, optional): Sketch title (default: "Sketch")
- `src` (string, optional): Image URL
- `caption` (string, optional): Caption shown below the image

**Features:**
- Dashed border styling
- Default placeholder when no children/src provided
- Flexible container for custom SVG or images
- Optional caption support

---

### 7. SpotifyEmbed
**Purpose:** Integrate music tracks related to the content

**Theme:** Green (#10B981)

**Usage:**
```jsx
<SpotifyEmbed 
  track="3n3Ppam7vgaVa1iaRUc9Lp" 
  title="작업 음악" 
/>
```

**Props:**
- `track` (string, required): Spotify track ID, URI, or URL
- `title` (string, optional): Music section title (default: "Music Track")

**Accepts:**
- Spotify track ID: `3n3Ppam7vgaVa1iaRUc9Lp`
- Spotify URI: `spotify:track:3n3Ppam7vgaVa1iaRUc9Lp`
- Spotify URL: `https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp`

---

### 8. PromptEngineLink
**Purpose:** Provide exit portal to Prompt Engine for report regeneration (MANDATORY at end of every report)

**Usage:**
```jsx
<PromptEngineLink 
  href="https://parksy.kr/prompt-engine/eae-skillset6" 
/>
```

Or use defaults:
```jsx
<PromptEngineLink />
```

**Props:**
- `href` (string, optional): Prompt Engine URL (has default)
- `title` (string, optional): Portal title (default: "Prompt Engine Portal")

**Important:**
- **MUST** be the last component in every report
- Required regardless of report type (A/B/C template)
- Portal for report reproduction and creation

---

## Universal Report Structure

Every EAE report MUST follow this exact sequence:

```mdx
---
title: "Report Title"
date: "YYYY-MM-DD"
category: "category-name"
---

<OpeningFrame videoId="..." title="..." />

<Part1>
  비유와 서사로 쉽게 설명
</Part1>

<Part2>
  시스템 구조와 데이터 흐름
</Part2>

<Part3>
  ```mermaid
  graph TD
    A --> B
  ```
  
  Mermaid 다이어그램과 철학적 배경
</Part3>

<SketchCard title="..." src="..." caption="..." />

<SpotifyEmbed track="..." />

<PromptEngineLink href="..." />
```

## Component Registration

All components are exported from `index.js` and provided globally via MDXProvider in `main.jsx`.

To add a new component:
1. Create the component file in this directory
2. Export it from `index.js`
3. Components automatically become available in all MDX files

## Security Guidelines

- Never use `innerHTML` - use `createElement` and `textContent` instead
- Always validate user inputs
- Add null checks before DOM manipulation
- Sanitize URLs and external content

## Performance Best Practices

- Use debouncing for expensive operations (like Mermaid rendering)
- Add cleanup functions in useEffect hooks
- Prevent multiple rapid re-renders with refs

## See Also

- [MDX Template Specification](/MDX-TEMPLATE-SPECIFICATION.md) - Complete MDX writing rules
- [BLUEPRINT.md](/BLUEPRINT.md) - Complete architecture specification
- [Sample Report](/src/content/eae-blueprint/sample-report.mdx) - Full example
