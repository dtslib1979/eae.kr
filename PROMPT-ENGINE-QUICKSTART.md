# 🚀 Prompt Engine Quick Start Guide

**EduArt Engineer MDX Auto-Report Generator - Quick Reference**

---

## ⚡ Quick Usage

### Step 1: Prepare Your Input

Fill in these 8 slots:

```text
[INPUT]
1. ReportTitle: Your Report Title Here
2. Category: qsketch | penon | mal | patchtech | eml | phl
3. CoreIdea: One paragraph describing your core idea
4. Keywords: keyword1, keyword2, keyword3, keyword4, keyword5
5. YouTubeID: (optional) youtube_video_id
6. MermaidNodes: A[Node1] --> B[Node2]; B --> C[Node3]
7. MusicEmbed: (optional) spotify_track_id
8. PromptLink: https://github.com/dtslib1979/eae.kr/blob/main/PROMPT-ENGINE-SPECIFICATION.md
```

### Step 2: Use the Master Prompt

Copy and paste this into ChatGPT/Claude:

```text
You are the EduArt Engineer MDX Auto-Report Generator.

Your task:
Convert the given INPUT block into a complete MDX report page
that strictly follows the EduArt Engineer 6-phase constitution.

=== RULES ===
1. Use ONLY MDX (no HTML except Markdown).
2. Required Components (in order):
   - Frontmatter with title, date, category
   - <OpeningFrame />
   - <Part1> (children content)
   - <Part2> (children content)
   - <Part3> (children content with mermaid code block)
   - <PromptEngineLink />
   
3. Optional Components:
   - <SketchCard /> (if visual sketch is needed)
   - <SpotifyEmbed /> (if MusicEmbed exists)

4. Structure Output into 3 fixed Parts:
   Part 1 — Simple metaphor in easy English (or Korean) for general audience.
   Part 2 — System Architect mode: rigorous, structured explanation.
   Part 3 — Academic mapping + Mermaid diagram.

5. Tone: Clear, witty, concise. No academic elitist tone.

6. Mobile-first formatting always (short paragraphs 3-6 lines).

7. Mermaid diagram INSIDE Part3.

=== INPUT FORMAT ===
[Paste your 8-slot INPUT here]

=== OUTPUT FORMAT ===
Return ONLY the final MDX file content.
No explanation. No commentary.

Begin.
```

### Step 3: Save and Deploy

1. Copy the generated MDX
2. Save to `/src/content/{category}/your-file.mdx`
3. Commit and push
4. GitHub Actions deploys automatically

---

## 📋 Validation Checklist

Before deploying, verify:

- [ ] Frontmatter has title, date, category
- [ ] OpeningFrame at top
- [ ] Part1 uses simple metaphors
- [ ] Part2 explains system architecture
- [ ] Part3 has mermaid diagram
- [ ] Part3 has philosophical background
- [ ] PromptEngineLink at end
- [ ] All components use correct JSX syntax
- [ ] No HTML tags mixed in
- [ ] Mobile-optimized paragraphs

---

## 🎯 Example Input

```text
[INPUT]
1. ReportTitle: From Sketch to Software
2. Category: qsketch
3. CoreIdea: Every sketch you draw is actually a prototype of a user interface. When you organize notes on paper, you're already designing information architecture.
4. Keywords: sketch, UI design, prototyping, information architecture, visual thinking
5. YouTubeID: dQw4w9WgXcQ
6. MermaidNodes: A[Paper Sketch] --> B[Digital Mockup]; B --> C[React Component]; C --> D[Live App]
7. MusicEmbed: 3n3Ppam7vgaVa1iaRUc9Lp
8. PromptLink: https://github.com/dtslib1979/eae.kr/blob/main/PROMPT-ENGINE-SPECIFICATION.md
```

---

## 🔗 Resources

- [Full Specification](../PROMPT-ENGINE-SPECIFICATION.md)
- [MDX Template Spec](../MDX-TEMPLATE-SPECIFICATION.md)
- [Blueprint](../BLUEPRINT.md)
- [Component Docs](../src/components/mdx/README.md)

---

## 💡 Tips

1. **Keep CoreIdea concise** - One paragraph max
2. **Use 5-10 keywords** - More focused = better output
3. **Mermaid nodes simple** - Short labels, clear relationships
4. **Test locally first** - Run `npm run dev` to preview
5. **Iterate** - If output isn't perfect, refine your INPUT

---

**Happy Auto-Generating! 🎉**
