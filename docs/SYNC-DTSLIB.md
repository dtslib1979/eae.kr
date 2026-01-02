# dtslib.kr 동기화 지침 (PR #83 이후 전체 변경분)

## 파일 1: src/index.css

### 변경 1 - Part 색상 통일
OLD:
```css
  /* Part1 - Grandpa Mode (Amber) */
  --part1-bg-from: rgba(69, 26, 3, 0.4);
  --part1-bg-to: rgba(67, 20, 7, 0.3);
  --part1-border: #f59e0b;
  --part1-title: #fbbf24;
  --part1-heading: #fcd34d;
  --part1-strong: #fde68a;
  --part1-link: #fbbf24;

  /* Part2 - System Architect (Blue) */
  --part2-bg-from: rgba(23, 37, 84, 0.4);
  --part2-bg-to: rgba(30, 27, 75, 0.3);
  --part2-border: #3b82f6;
  --part2-title: #60a5fa;
  --part2-heading: #93c5fd;
  --part2-strong: #bfdbfe;
  --part2-link: #60a5fa;

  /* Part3 - Theory Map (Purple) */
  --part3-bg-from: rgba(59, 7, 100, 0.4);
  --part3-bg-to: rgba(80, 7, 74, 0.3);
  --part3-border: #a855f7;
  --part3-title: #c084fc;
  --part3-heading: #d8b4fe;
  --part3-strong: #e9d5ff;
  --part3-link: #c084fc;
```

NEW:
```css
  /* Part1 - Grandpa Mode (Chalk) */
  --part1-bg-from: rgba(37, 58, 47, 0.6);
  --part1-bg-to: rgba(30, 45, 38, 0.4);
  --part1-border: #E6F2E8;
  --part1-title: #F7FFF5;
  --part1-heading: #E6F2E8;
  --part1-strong: #F7FFF5;
  --part1-link: #E6F2E8;

  /* Part2 - System Architect (Chalk) */
  --part2-bg-from: rgba(37, 58, 47, 0.6);
  --part2-bg-to: rgba(30, 45, 38, 0.4);
  --part2-border: #E6F2E8;
  --part2-title: #F7FFF5;
  --part2-heading: #E6F2E8;
  --part2-strong: #F7FFF5;
  --part2-link: #E6F2E8;

  /* Part3 - Theory Map (Chalk) */
  --part3-bg-from: rgba(37, 58, 47, 0.6);
  --part3-bg-to: rgba(30, 45, 38, 0.4);
  --part3-border: #E6F2E8;
  --part3-title: #F7FFF5;
  --part3-heading: #E6F2E8;
  --part3-strong: #F7FFF5;
  --part3-link: #E6F2E8;
```

### 변경 2 - Mermaid SVG 자동 크기
OLD:
```css
.mermaid-chalk svg {
  width: 100%;
  height: auto;
  max-width: 640px;
  margin: 0 auto;
  font-family: "Annie Use Your Telescope", "Courier New", monospace;
  color: #F7FFF5;
}
```

NEW:
```css
.mermaid-chalk svg {
  width: auto;
  height: auto;
  max-width: 100%;
  min-width: 300px;
  margin: 0 auto;
  font-family: "Annie Use Your Telescope", "Courier New", monospace;
  color: #F7FFF5;
}

.mermaid-wrapper {
  overflow-x: auto;
  padding: 1rem 0;
}
```

### 변경 3 - Mermaid 폰트 가독성
OLD:
```css
.mermaid-chalk .label,
.mermaid-chalk .node text,
.mermaid-chalk text {
  fill: #F7FFF5 !important;
  font-size: 0.8rem;
}
```

NEW:
```css
.mermaid-chalk .label,
.mermaid-chalk .node text,
.mermaid-chalk text {
  fill: #F7FFF5 !important;
  font-size: max(0.9rem, 14px) !important;
  font-weight: 500;
}
```

### 변경 4 - 모바일 Mermaid
OLD:
```css
  .mermaid-chalk svg {
    max-width: 100%;
  }
```

NEW:
```css
  .mermaid-chalk svg {
    min-width: 280px;
  }
```

---

## 파일 2: src/components/mdx/Mermaid.jsx

OLD:
```jsx
          fontSize: '14px',
```

NEW:
```jsx
          fontSize: '16px',
```

---

## 검증
```bash
npm run guard && npm run build
```

## 커밋
```bash
git add -A && git commit -m "feat: unify design to chalk theme + mermaid readability"
```
