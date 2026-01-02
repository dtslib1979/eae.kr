# eae.kr

AI 협업 기반 MDX 출판 시스템

**Live:** https://eae.kr

---

## 이 레포는 뭐냐

- MDX 기반 콘텐츠 출판 플랫폼
- AI 에이전트 협업 구조 (Claude, ChatGPT, Grok)
- 자동 배포 파이프라인 (GitHub Actions → GitHub Pages)

---

## 구조

```
src/content/     → MDX 콘텐츠
src/components/  → Part1/2/3 등 컴포넌트
CLAUDE.md        → AI 에이전트 엔트리 포인트
```

---

## 배포

```
MDX 작성 → git push main → 자동 빌드 → eae.kr 라이브
```

---

## 기술 스택

React 18 · Vite 5 · MDX · TailwindCSS 3 · GitHub Pages

---

## 로컬 개발

```bash
npm install
npm run dev     # localhost:5173
npm run build   # guard + vite build
```
