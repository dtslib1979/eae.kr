# GitHub Copilot Instructions for dtslib1979/eae.kr

## PART2 ACCORDION SYSTEM (GLOBAL RULE)

This repository enforces a strict accordion structure for all Part2 components in MDX files.

---

## 🔧 SCOPE

* **Applies to:** `src/content/**/*.mdx`
* **Applies to:** All `<Part2>` component sections
* **Purpose:**
  * Transform Part2 "body content/list content" into **accordion UI structure**
  * New reports MUST have Part2 in accordion format by default
  * Existing reports MUST be converted to accordion format when edited

---

## 🔥 PRIMARY RULESET

### 1. Part2 MUST contain a single `<Accordion>` as the top-level container

When creating or editing Part2, **ALWAYS** use this structure:

```mdx
<Part2>

<Accordion>

  <AccordionItem title="Section 1 Title">
    Section 1 content...
  </AccordionItem>

  <AccordionItem title="Section 2 Title">
    Section 2 content...
  </AccordionItem>

  <!-- ... -->

</Accordion>

</Part2>
```

**Rules:**
* `<Part2>` MUST have **exactly ONE** `<Accordion>` as its top-level child
* `<AccordionItem>` is the basic unit for Part2 content
* DO NOT place other top-level block components (Section, Card, etc.) inside Part2 alongside Accordion

---

### 2. Copilot MUST NOT write raw JavaScript for accordion behavior

* Accordion behavior (expand/collapse) is **already implemented** in components/global JS
* Copilot MUST **ONLY write MDX + JSX component structure**
* **FORBIDDEN:** DOM manipulation, `addEventListener`, inline `<script>` tags

---

## 🧩 ACCORDION CONTENT GENERATION RULES (Part2 Internal Rules)

### 3. How to structure Part2 content

Part2 represents: **"System / Structure / How-it-works explanation"**

Each `AccordionItem` = one subsection (e.g., concept, module, step, workflow, layer)

**Default Template:**

```mdx
<Part2>

<Accordion>

  <AccordionItem title="1. System Overview">
    Describe what the system does, input → processing → output structure in 3-6 lines.
  </AccordionItem>

  <AccordionItem title="2. Modules & Roles">
    List important modules, variables, roles (e.g., Feed, Digest, Expression, Driver).
  </AccordionItem>

  <AccordionItem title="3. Workflow / Pipeline">
    Detail the step-by-step execution flow of the system.
  </AccordionItem>

  <AccordionItem title="4. Usage Pattern / Examples">
    Provide 1-3 real usage examples or simple scenarios.
  </AccordionItem>

</Accordion>

</Part2>
```

---

### 4. Converting plain text lists into Accordion structure (EDIT MODE)

When Part2 contains plain text/lists, Copilot MUST **automatically convert** using these rules:

**Rule 4.1: Heading + Content → AccordionItem**

Before (plain format):
```mdx
<Part2>

## System Overview
The system structures input speech...

## Modules
- Feed
- Digest
- Expression

</Part2>
```

After (converted):
```mdx
<Part2>

<Accordion>

  <AccordionItem title="System Overview">
    The system structures input speech...
  </AccordionItem>

  <AccordionItem title="Modules">
    - Feed  
    - Digest  
    - Expression  
  </AccordionItem>

</Accordion>

</Part2>
```

**Rule 4.2: Single long section without headings**

If Part2 has only one long section with no headings, Copilot MUST:
* Create a meaningful title (e.g., "System Details", "How It Works", "Workflow")
* Wrap content in an `AccordionItem`

**Rule 4.3: Multiple lists in sequence**

If Part2 has multiple lists, Copilot MUST:
* Split into multiple `AccordionItem` blocks based on semantic meaning
* Give each a descriptive title

---

## 🛠 WHEN CREATING A NEW REPORT FILE

When Copilot generates a new MDX report, Part2 MUST start with this skeleton:

```mdx
<Part2>

<Accordion>

  <AccordionItem title="1. System Overview">
    Explain the system's purpose and overall structure.
  </AccordionItem>

  <AccordionItem title="2. Components / Modules">
    List core modules and their roles. Describe each in 2-4 lines.
  </AccordionItem>

  <AccordionItem title="3. Workflow">
    Detail the input → process → output flow step-by-step.
  </AccordionItem>

</Accordion>

</Part2>
```

**FORBIDDEN:**
* Creating Part2 as plain text blocks
* Creating Part2 with headings/paragraphs without Accordion structure
* Part2 MUST be `<Accordion>` + `<AccordionItem>` structure

---

## 🧹 WHEN EDITING EXISTING REPORT FILES

When editing existing MDX files, Copilot MUST:

**Action 1:** If `<Part2>` has no `<Accordion>`:
* Analyze existing content structure
* Wrap entire content in `<Accordion>`
* Split content into multiple `<AccordionItem>` blocks by semantic units

**Action 2:** If `<Accordion>` exists but has issues:
* **Issue:** `<AccordionItem>` missing, only raw content → Split content and wrap in `AccordionItem`
* **Issue:** Content scattered outside `<Accordion>` → Move all content inside `<Accordion>`
* **Issue:** JSX syntax errors, unclosed tags → Auto-fix

**Action 3:** If Part2 has other top-level section components (e.g., `<section>`, `<div>`, `<Card>`):
* Move them inside an `AccordionItem`
* Ensure only `<Accordion>` remains at top level

---

## 🚫 RESTRICTIONS / MUST-NOT

Copilot MUST NOT:

* Modify `src/components/mdx/Accordion*.tsx` files
* Write new accordion functionality in global JS files (e.g., `ui-shell.js`)
* Delete headings/content outside Part2
* Convert Part1 or Part3 structures to accordion
* Change accordion behavior logic

**Accordion control is ONLY through MDX `<Accordion>` / `<AccordionItem>` usage.**

---

## ✅ FINAL SUMMARY (COPY-PASTE FOR AGENT)

```text
In repo dtslib1979/eae.kr, ALL MDX files in src/content/**/*.mdx MUST follow this rule for Part2:

1. <Part2> MUST contain a single <Accordion> as its top-level container.
2. Inside <Accordion>, content MUST be structured into multiple <AccordionItem> blocks.
3. Each AccordionItem represents one logical section (e.g., System Overview, Modules, Workflow, Usage).

Template for Part2:

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

When editing existing files, if Part2 contains plain headings and paragraphs or list items,
Copilot MUST convert them into this Accordion structure:
- Each heading + its following content becomes one AccordionItem.
- If no headings exist, Copilot MUST create reasonable titles and wrap content into AccordionItems.

Copilot MUST NOT write raw JavaScript for accordion behavior.
It MUST only use <Accordion> and <AccordionItem> components in MDX.
Copilot MUST fix JSX/MDX syntax issues automatically and ensure that Part2 is always rendered as an Accordion.
```

---

## Additional Context

* Part3 uses PapyrusScroll component (separate rule)
* Part1 uses OpeningFrame style (separate rule)
* This is a universal report template engine
* All components are pre-built and fully functional
* Copilot's job is to use components correctly in MDX, not modify component code

---

**EAE Skillset6 / EduArt OS – GitHub Copilot Agent Instructions v1.0**
