# GitHub Copilot Agent Instructions

## Part3 PapyrusScroll System Rules

ALL MDX REPORTS MUST FOLLOW THIS RULE:
Part3 MUST be rendered using a single `<PapyrusScroll>` wrapper.

Copilot MUST generate Part3 using this exact template:

```mdx
<Part3>

<PapyrusScroll title="Whitepaper Global Summary">

**Core Summary**
- Main message compressed in 2–4 sentences.

**Drivers / Modules**
- List core drivers, modules, variables (3–6 lines).

**Mermaid Structure Summary**
Represent the structure in plain text (no rendered Mermaid):
A((Input)) --> B((Process)) --> C((Output))

**PARKSY OS Mapping**
- How this report connects to the meta system.

**Next Steps / Expansion**
- Follow-up documents or applications.

</PapyrusScroll>

</Part3>
```

### Mandatory Rules:

1. Copilot MUST NOT place any other UI components inside Part3.
2. Copilot MUST enforce collapsed initial state by using the component only.
3. Copilot MUST maintain MDX integrity and fix JSX errors automatically.
4. Copilot MUST update any non-compliant Part3 into this format when editing.
5. This rule applies to ALL files in `src/content/**.mdx`.

### Component Usage:

- `<PapyrusScroll>` is the ONLY allowed component wrapper in Part3
- NO `<Accordion>`, `<Card>`, or other Section UI components in Part3
- Part3 represents the meta/whitepaper/philosophical compression layer

### Content Structure Requirements:

Part3 MUST contain these five elements:

1. **Core Summary** - 2-4 sentence system-level compression
2. **Drivers / Modules Summary** - 3-6 lines of core modules/variables/drivers
3. **Mermaid Structure Text Summary** - Plain text representation (NOT rendered Mermaid)
4. **Relation to PARKSY OS / Meta Framework** - 2-3 lines connecting to OS layer
5. **Expansion Path** - 1-3 lines of follow-up directions

### File Integrity:

- DO NOT modify component definition files (`src/components/mdx/*.tsx`)
- DO NOT modify global styles/js (`public/*`, `src/assets/*`, `ui-shell.js`)
- DO NOT modify page routing structure
- MAY ONLY edit MDX content, maintaining frontmatter
- MUST enforce MDX component compatibility (Markdown + JSX hybrid)

### Error Handling:

Auto-correct these issues when detected:
- JSX syntax errors
- Missing `<PapyrusScroll>` closing tag
- Incorrect indentation
- Other components inside Part3 (remove and restructure)
- Part3 in essay format (convert to system concept format)
- Direct Mermaid rendering attempts (replace with text summary)
