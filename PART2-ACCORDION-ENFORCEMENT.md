# Part2 Accordion System - Enforcement Guide

## Overview

This document describes the **mandatory accordion structure** for all Part2 components in the `dtslib1979/eae.kr` repository.

**Status:** ✅ **ENFORCED** - All Part2 sections in `src/content/**/*.mdx` MUST use the accordion structure.

---

## Why This Rule Exists

The accordion structure for Part2 provides:

1. **Consistent UI/UX** - All technical/system content follows the same pattern
2. **Better Mobile Experience** - Long technical content is organized into collapsible sections
3. **Progressive Disclosure** - Readers can choose which technical details to explore
4. **Standardization** - New reports automatically follow the same pattern
5. **Maintainability** - Easier to update and refactor technical content

---

## The Rule

### Primary Requirement

**ALL Part2 sections MUST contain a single `<Accordion>` as the top-level container, with content organized into `<AccordionItem>` blocks.**

### Mandatory Structure

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

  <AccordionItem title="4. Usage Examples">
    Provide 1-3 real usage examples or simple scenarios.
  </AccordionItem>

</Accordion>

</Part2>
```

### What's NOT Allowed

❌ **Plain headings and paragraphs:**
```mdx
<Part2>

## System Overview
The system does...

## Components
- Component A
- Component B

</Part2>
```

❌ **Mixed structure (some accordion, some plain):**
```mdx
<Part2>

## Introduction
Some intro text...

<Accordion>
  <AccordionItem title="Details">
    ...
  </AccordionItem>
</Accordion>

</Part2>
```

❌ **Multiple top-level components:**
```mdx
<Part2>

<Section>...</Section>
<Accordion>...</Accordion>
<Card>...</Card>

</Part2>
```

---

## Implementation Details

### Components Used

- **`<Accordion>`** - Container component (defined in `/src/components/mdx/Accordion.jsx`)
- **`<AccordionItem>`** - Individual collapsible section (defined in `/src/components/mdx/AccordionItem.jsx`)

Both components support:
- `title` (string, required) - Section heading
- `defaultOpen` (boolean, optional) - Whether section starts expanded

### Component Behavior

The accordion behavior is **fully implemented in the React components**. No custom JavaScript is needed or allowed.

Each AccordionItem:
- Starts collapsed by default (unless `defaultOpen={true}`)
- Shows ▶ when collapsed, ▼ when expanded
- Toggles on click
- Has smooth transitions
- Is accessible (ARIA attributes included)

---

## For Content Creators

### Creating New Reports

When creating a new MDX report, use this Part2 template:

```mdx
<Part2>

<Accordion>

  <AccordionItem title="1. System Overview">
    
    [Describe the system's purpose and high-level architecture in 3-6 lines]

  </AccordionItem>

  <AccordionItem title="2. Components / Modules">
    
    [List and briefly explain the key components/modules]
    
    - **Module A** - What it does
    - **Module B** - What it does
    - **Module C** - What it does

  </AccordionItem>

  <AccordionItem title="3. Workflow / Pipeline">
    
    [Explain the step-by-step process]
    
    ```
    Input → Processing → Output
      ↓         ↓          ↓
    Step A → Step B → Step C
    ```

  </AccordionItem>

  <AccordionItem title="4. Tech Stack">
    
    - **Technology 1** - Purpose
    - **Technology 2** - Purpose
    - **Technology 3** - Purpose

  </AccordionItem>

  <AccordionItem title="5. Usage Examples">
    
    [Provide 1-3 concrete usage scenarios]

  </AccordionItem>

</Accordion>

</Part2>
```

### Converting Existing Reports

If you encounter an old Part2 with plain structure, convert it:

**Before:**
```mdx
<Part2>

## System Architecture

The system has three layers...

## Data Flow

Data flows through:
1. Input layer
2. Processing layer
3. Output layer

## Technologies

- React
- Vite
- Tailwind

</Part2>
```

**After:**
```mdx
<Part2>

<Accordion>

  <AccordionItem title="System Architecture">
    The system has three layers...
  </AccordionItem>

  <AccordionItem title="Data Flow">
    Data flows through:
    1. Input layer
    2. Processing layer
    3. Output layer
  </AccordionItem>

  <AccordionItem title="Technologies">
    - React
    - Vite
    - Tailwind
  </AccordionItem>

</Accordion>

</Part2>
```

---

## For AI Agents / GitHub Copilot

### Instructions for Automated Content Generation

When an AI agent or GitHub Copilot is asked to:
- Create a new MDX report
- Edit an existing MDX report
- Generate Part2 content

It MUST:

1. **Always use Accordion structure** - No exceptions
2. **Create meaningful AccordionItem titles** - Based on content semantics
3. **Group related content** - Each AccordionItem should represent one logical section
4. **Fix syntax errors** - Ensure all JSX tags are properly closed
5. **NOT write custom JavaScript** - Only use the provided components

### Conversion Rules

1. **Heading + Content → AccordionItem**
   - Each `## Heading` becomes an `AccordionItem title`
   - Content under the heading becomes the AccordionItem children

2. **No headings → Create logical sections**
   - If Part2 has no structure, analyze content and create 3-5 AccordionItems
   - Give each a descriptive title (e.g., "Overview", "Implementation", "Usage")

3. **Mixed content → Consolidate into Accordion**
   - Move all Part2 content inside `<Accordion>`
   - Remove any non-Accordion top-level elements

---

## Documentation References

### Primary Documentation

- **AI Agent Instructions:** `/AI-AGENT-INSTRUCTIONS.md` (Rule #0)
- **GitHub Copilot Instructions:** `/.github/copilot-instructions.md`
- **Component Guide:** `/ACCORDION-AND-HOVER-ZOOM-GUIDE.md`

### Example Files

- **Gold Template:** `/src/content/eae-blueprint/gold-template.mdx`
- **Sample Report:** `/src/content/eae-blueprint/sample-report.mdx`
- **Accordion Demo:** `/src/content/eae-blueprint/accordion-demo.mdx`

### Component Source

- **Accordion Component:** `/src/components/mdx/Accordion.jsx`
- **AccordionItem Component:** `/src/components/mdx/AccordionItem.jsx`
- **Component Index:** `/src/components/mdx/index.js`

---

## Enforcement

### Automated Checks

Currently, enforcement is through:
- AI Agent instructions
- GitHub Copilot instructions
- Code review process
- Developer documentation

### Future Enhancements

Potential automated enforcement mechanisms:
- ESLint rule for MDX structure validation
- Pre-commit hook to check Part2 structure
- CI/CD pipeline check
- MDX linter with custom rules

---

## FAQ

### Q: Can I use Part2 without Accordion?

**A:** No. All Part2 sections MUST use the Accordion structure. This is a repository-wide rule.

### Q: What if my Part2 content is very short?

**A:** Even short content should use Accordion with 2-3 AccordionItems. This maintains consistency.

### Q: Can I mix Accordion with plain content in Part2?

**A:** No. The entire Part2 content must be inside `<Accordion>` → `<AccordionItem>` structure.

### Q: Can I use nested Accordions in Part2?

**A:** Yes, you can nest `<AccordionItem>` inside an `<Accordion>`, which is the recommended pattern.

### Q: What about Part1 and Part3?

**A:** This rule only applies to Part2. Part1 and Part3 have different structures:
- Part1 = Simple, analogical content (no mandatory structure)
- Part3 = PapyrusScroll with Mermaid diagrams (separate rule)

### Q: Can I modify the Accordion components?

**A:** No. Content creators should NOT modify `/src/components/mdx/Accordion*.jsx`. Use the components as-is.

### Q: Can I add custom JavaScript for accordion behavior?

**A:** No. The accordion behavior is fully handled by the React components. Do NOT add custom JS.

---

## Version History

- **v1.0** (2025-12-05) - Initial enforcement documentation
- **Status:** Active enforcement

---

**EAE Skillset6 / EduArt OS - Part2 Accordion Enforcement Guide v1.0**
