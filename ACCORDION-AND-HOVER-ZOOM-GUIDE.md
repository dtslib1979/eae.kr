# Accordion Component & Hover Zoom Guide

This guide explains how to use the Accordion/AccordionItem components and the hover zoom effect in your MDX content.

## Accordion Components

### Basic Accordion

Use `<Accordion>` for simple collapsible sections:

```mdx
<Accordion title="Section Title">

Your content goes here. It can include markdown formatting, lists, code blocks, etc.

</Accordion>
```

### Nested AccordionItem

For hierarchical content organization, use `<AccordionItem>` inside an `<Accordion>`:

```mdx
<Accordion title="Main Topic">

<AccordionItem title="Subtopic 1">

Content for the first subtopic.

</AccordionItem>

<AccordionItem title="Subtopic 2" defaultOpen={true}>

Content for the second subtopic. This one starts open!

</AccordionItem>

<AccordionItem title="Subtopic 3">

Content for the third subtopic.

</AccordionItem>

</Accordion>
```

### Component Props

**Both Accordion and AccordionItem:**
- `title` (string, required): The section heading
- `defaultOpen` (boolean, optional): Whether the section starts expanded (default: false)

**Examples:**
```mdx
<Accordion title="Main Section" defaultOpen={true}>
This accordion starts open!
</Accordion>

<AccordionItem title="Subsection" defaultOpen={true}>
This subsection starts open!
</AccordionItem>
```

### When to Use Accordions

✅ **Good use cases:**
- Long documentation that needs organization
- Blueprint/whitepaper content with multiple sections
- Educational content with progressive disclosure
- FAQ sections
- Table of contents with expandable details

❌ **Avoid using for:**
- Very short content (< 3 paragraphs)
- Critical information that should always be visible
- Content users need to compare side-by-side

## Hover Zoom Effect

### Overview

The `mdx-zoom-target` class adds a subtle zoom effect (1.03x scale) when users hover over content blocks. This helps:

1. **Focus Enhancement** - Draws attention to the section being read
2. **Readability Boost** - Especially useful on projectors and tablets
3. **Interactive Feedback** - Provides visual cue for interactive elements

### How to Use

Add `className="mdx-zoom-target"` to any content block:

```mdx
<div className="mdx-zoom-target p-4 bg-slate-800 rounded-lg my-4">

### Important Section

This content will zoom slightly when hovered.

</div>
```

### Technical Details

**Effect Specifications:**
- **Scale:** 1.03x (3% larger)
- **Transition:** 0.22s ease-out
- **Delay:** 0.45s (prevents accidental triggers while scrolling)
- **Recommended Range:** 1.02 - 1.04 for subtle, professional effect

**CSS Implementation:**
```css
.mdx-zoom-target {
  transition: transform 0.22s ease-out 0.45s;
  cursor: default;
}

.mdx-zoom-target:hover {
  transform: scale(1.03);
}
```

### Best Practices

✅ **Good practices:**
- Use selectively on important content blocks
- Apply to paragraph groupings in long-form content
- Combine with background colors for better visual hierarchy
- Use in educational/presentation contexts

❌ **Avoid:**
- Applying globally to all elements (causes eye strain)
- Using on small elements like buttons or links
- Over-using - select only 2-3 key sections per page
- Applying to elements that already have hover effects

### Example Usage

```mdx
<Part2>

## System Architecture

<div className="mdx-zoom-target p-4 bg-slate-800 rounded-lg my-4">

### Core Components

The system consists of three main layers:
- Presentation Layer (React + MDX)
- Processing Layer (Vite + Transformers)
- Storage Layer (GitHub + Git)

</div>

Regular content here without zoom effect.

<div className="mdx-zoom-target p-4 bg-slate-700 rounded-lg my-4">

### Data Flow

Input flows through the processing pipeline:
1. MDX files are parsed
2. Components are rendered
3. Output is bundled and deployed

</div>

</Part2>
```

## Combining Both Features

You can use Accordions and hover zoom together for maximum organization and readability:

```mdx
<Accordion title="Advanced Topics">

<AccordionItem title="Performance Optimization">

<div className="mdx-zoom-target p-4 bg-slate-800 rounded-lg my-4">

### Key Performance Metrics

- Build time: < 10 seconds
- Page load: < 2 seconds
- Bundle size: < 1 MB

</div>

</AccordionItem>

<AccordionItem title="Security Considerations">

<div className="mdx-zoom-target p-4 bg-slate-700 rounded-lg my-4">

### Security Best Practices

- Content Security Policy enabled
- HTTPS only
- Regular dependency updates

</div>

</AccordionItem>

</Accordion>
```

## Demo File

See `/src/content/eae-blueprint/accordion-demo.mdx` for a complete working example showcasing all features.

---

**EAE Skillset6 / EduArt OS - Component Guide v1.0**
