# Part3 PapyrusScroll System - Implementation Guide

## Overview

This document describes the Part3 PapyrusScroll system that has been implemented in the EAE.KR repository to standardize how meta-level whitepaper summaries are presented in MDX reports.

## What Changed

### 1. New GitHub Copilot Instructions

**File:** `.github/copilot-instructions.md`

This file contains specific instructions for GitHub Copilot to automatically apply Part3 PapyrusScroll formatting rules when creating or editing MDX files.

**Key Rules:**
- Part3 MUST be wrapped in `<PapyrusScroll>` component
- NO other UI components (Accordion, Card, etc.) inside Part3
- Mermaid diagrams must be TEXT SUMMARIES, not rendered
- Initial collapsed state is automatic (component handles it)

### 2. Updated AI Agent Instructions

**File:** `AI-AGENT-INSTRUCTIONS.md`

Updated the comprehensive AI agent guidelines to include:
- Part3 structure requirements in "Golden Rules" section
- Detailed PapyrusScroll component usage guide
- Updated complete template with new Part3 format
- Updated quality checklist with Part3 validation items
- Added common mistakes section for Part3

### 3. Updated Gold Template

**File:** `src/content/eae-blueprint/gold-template.mdx`

Updated the reference template to demonstrate the new Part3 structure with:
- Core Summary
- Drivers / Modules
- Mermaid Structure Summary (text format)
- PARKSY OS Mapping
- Next Steps / Expansion

## Part3 Structure

### Required Format

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

### Five Required Elements

1. **Core Summary** - System-level message (2-4 sentences)
   - Purpose: Compress the entire report into a concise system statement
   - Perspective: Architect/designer viewpoint
   - Style: Technical but accessible

2. **Drivers / Modules** - Core technical components (3-6 lines)
   - Purpose: List key modules, variables, or drivers covered in the report
   - Format: Bullet points with brief descriptions
   - Focus: Technical components and their roles

3. **Mermaid Structure Summary** - Plain text diagram representation
   - Purpose: Provide structural overview without rendering
   - Format: Text-based node and arrow notation
   - Example: `A((Input)) --> B((Process)) --> C((Output))`
   - **Important:** NOT a rendered Mermaid diagram

4. **PARKSY OS Mapping** - Connection to meta framework (2-3 lines)
   - Purpose: Explain how this report fits into the broader PARKSY OS ecosystem
   - Context: Which layer/domain it belongs to
   - Integration: How it connects to other parts of the system

5. **Expansion Path** - Future directions (1-3 lines)
   - Purpose: Outline next steps or related work
   - Format: Follow-up documents, applications, or extensions
   - Vision: Future development paths

## Design Principles

### Why PapyrusScroll?

The PapyrusScroll component provides:
- **Collapsible UI**: Starts collapsed to reduce visual clutter
- **Unified Style**: Consistent emerald/green theme matching PARKSY OS aesthetics
- **Meta Context**: Visual separation indicating "this is the whitepaper layer"
- **Professional Presentation**: Elegant scroll-like UI with shadows and gradients

### Why Text-Based Mermaid Summaries?

Part3 uses text-based Mermaid summaries instead of rendered diagrams because:
- **Quick Reference**: Faster to scan than visual diagrams
- **System Focus**: Emphasizes conceptual structure over visual detail
- **Consistent Format**: Easier to maintain uniformity across reports
- **Architect Perspective**: Focuses on relationships and flow

### Part3 as Meta Layer

Part3 represents the **highest-level view** of a report:
- **Part1**: Sensory/Analogical (Grandpa Mode)
- **Part2**: Structural/Technical (Architect Mode)
- **Part3**: Meta/Whitepaper/Philosophical (Designer Mode)

Part3 answers: "What is this from a system designer's perspective?"

## File Integrity Rules

### What Copilot MUST NOT Modify

- Component definition files (`src/components/mdx/*.tsx`)
- Global styles/js (`public/*`, `src/assets/*`, `ui-shell.js`)
- Page routing structure
- Build configuration

### What Copilot MAY Modify

- MDX file content
- Frontmatter (while preserving required fields)
- Part1/Part2/Part3 internal content
- Component usage within MDX files

## Error Handling

Copilot will automatically correct these issues:

1. **Missing PapyrusScroll Wrapper**
   - Auto-wrap Part3 content in `<PapyrusScroll>`

2. **Other Components in Part3**
   - Remove `<Accordion>`, `<Card>`, or other UI components
   - Restructure content to fit PapyrusScroll format

3. **Rendered Mermaid Diagrams**
   - Convert to text-based summaries
   - Extract structure and represent as text arrows

4. **Missing Required Elements**
   - Add placeholder sections for missing elements
   - Prompt for content completion

5. **JSX Syntax Errors**
   - Fix unclosed tags
   - Correct indentation
   - Validate component props

## Usage Examples

### Creating a New MDX Report

When creating a new report, Copilot will:
1. Generate frontmatter with slug, date, category
2. Add OpeningFrame component
3. Create Part1 with analogical content
4. Create Part2 with technical content
5. **Create Part3 with PapyrusScroll wrapper and all 5 required elements**
6. Add optional components (SketchCard, SpotifyEmbed)
7. Add required PromptEngineLink

### Editing an Existing Report

When editing an existing report, Copilot will:
1. Check if Part3 has PapyrusScroll wrapper
2. If missing, automatically add it
3. Check for all 5 required elements
4. If missing, add placeholders or auto-generate from context
5. Fix any JSX syntax errors
6. Ensure no other UI components in Part3

## Quality Assurance

### Pre-Commit Checklist

Before committing MDX files, verify:
- [ ] Part3 exists in the file
- [ ] Part3 is wrapped in `<PapyrusScroll>`
- [ ] All 5 required elements are present
- [ ] No `<Accordion>`, `<Card>`, or other UI components in Part3
- [ ] Mermaid summary is text-based, not rendered
- [ ] Content uses architect/designer perspective
- [ ] JSX syntax is valid
- [ ] File builds successfully

### Build Verification

Run the build command to verify:
```bash
npm run build
```

Successful build indicates:
- All MDX files are syntactically correct
- Component usage is valid
- No breaking changes introduced

## Migration Guide

### For Existing MDX Files

To update existing MDX files to the new Part3 format:

1. **Locate Part3 section**
   ```bash
   grep -n "Part3\|Part 3" your-file.mdx
   ```

2. **Backup current Part3 content**
   - Copy the existing content
   - Save in a temporary file

3. **Replace with PapyrusScroll structure**
   ```mdx
   <Part3>
   
   <PapyrusScroll title="Whitepaper Global Summary">
   
   <!-- Adapt existing content to 5-element structure -->
   
   </PapyrusScroll>
   
   </Part3>
   ```

4. **Adapt content to required elements**
   - Extract core message → Core Summary
   - Identify technical components → Drivers / Modules
   - Convert Mermaid diagram → Text summary
   - Add OS mapping context
   - Add expansion path

5. **Test build**
   ```bash
   npm run build
   ```

### Automated Migration (Future)

A migration script could be created to:
- Scan all MDX files
- Identify Part3 sections
- Auto-wrap in PapyrusScroll
- Extract content for 5 elements
- Validate structure

## Benefits

### For Content Creators

- **Standardized Format**: No need to decide on Part3 structure
- **Automatic Formatting**: Copilot handles the wrapper and structure
- **Focus on Content**: Spend time on substance, not formatting
- **Consistent Quality**: All reports have professional meta summaries

### For Readers

- **Predictable Location**: Know where to find meta summaries
- **Consistent Experience**: All reports look and feel similar
- **Quick Access**: Collapsed by default, expand when needed
- **Professional Presentation**: Elegant scroll UI

### For System Maintenance

- **Easier Updates**: Single component to update for styling changes
- **Better Validation**: Clear rules for automated checks
- **Reduced Errors**: Fewer formatting mistakes
- **Scalable**: Works for any number of MDX files

## Troubleshooting

### Build Fails After Adding PapyrusScroll

**Problem:** MDX file won't build after adding PapyrusScroll

**Solutions:**
1. Check for unclosed tags
2. Verify proper indentation
3. Ensure no raw HTML mixed with JSX
4. Validate frontmatter syntax

### PapyrusScroll Not Rendering

**Problem:** Component doesn't appear on the page

**Solutions:**
1. Verify component is imported (should be automatic via MDX provider)
2. Check browser console for errors
3. Verify Part3 component is rendering
4. Clear build cache: `rm -rf dist node_modules/.vite && npm install && npm run build`

### Content Not Fitting in PapyrusScroll

**Problem:** Content looks awkward or doesn't fit well

**Solutions:**
1. Break long paragraphs into bullet points
2. Use the 5-element structure strictly
3. Keep Core Summary to 2-4 sentences
4. Use concise language for Mermaid text summary

## Future Enhancements

Potential improvements to the system:

1. **Validation Script**: Automated checker for Part3 structure
2. **Migration Tool**: Batch update existing MDX files
3. **Content Suggestions**: AI-powered content generation for 5 elements
4. **Visual Editor**: GUI for editing Part3 content
5. **Analytics**: Track which reports have proper Part3 structure

## References

- **Component Source**: `src/components/mdx/PapyrusScroll.tsx`
- **Example Usage**: `src/content/eae-blueprint/gold-template.mdx`
- **AI Instructions**: `AI-AGENT-INSTRUCTIONS.md`
- **Copilot Rules**: `.github/copilot-instructions.md`

## Support

For questions or issues:
1. Check this guide
2. Review example files (gold-template.mdx)
3. Check component implementation (PapyrusScroll.tsx)
4. Review AI agent instructions
5. Create an issue if problem persists

---

**Version:** 1.0  
**Last Updated:** 2025-12-05  
**Maintained By:** EAE.KR Team
