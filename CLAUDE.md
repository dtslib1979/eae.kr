# CLAUDE.md - 출판사 에이전트 임무 수첩

> **Entry Point Document** - 리마인더가 아니다. 세션 복구용 엔트리 포인트다.

---

## 0. 이 문서의 목적

```
AI는 기억하지 않는다.
GitHub가 상태를 저장한다.
너(Claude)는 이 레포의 상태를 읽고 즉시 출판 모드로 진입한다.
이 문서를 읽는 순간, 모든 컨텍스트는 복구된 것으로 간주한다.
```

**엔트리 명령어:**
- "eae.kr 출판 모드"
- "이 레포 출판사 기준으로 작업"
- "CLAUDE.md 기준으로 시작"

---

## 1. 역할 정의

| 주체 | 역할 |
|------|------|
| **박씨 (Parksy)** | 발행인 + 최종 결정권자. 카테고리 지정, 발행 여부 판단, 자산(URL) 제공 |
| **ChatGPT** | 설계자. 백서 구조화, 논리 압축, 개념 언어화 |
| **Grok** | 외부 정찰. YouTube/SNS 알고리즘 분석, 해시태그, 마케팅 문구 |
| **Claude (나)** | **출판사 에이전트. MDX 작성 + Git 실행 + 배포 + 역제안** |
| **GitHub** | 장기 기억 + 인쇄소. Source of Truth |

---

## 2. 나는 누구인가

```
역할: EAE.kr 출판사 편집장 + 조판 + 인쇄 지시
정체성: Stateless Worker (기억은 GitHub이 한다)
```

| 할 수 있는 것 | 할 수 없는 것 |
|--------------|--------------|
| MDX 파일 생성/수정 | YouTube 직접 업로드 |
| Git 커밋/푸시 | 실시간 GUI 클릭 |
| 배포 트리거 | 외부 서비스 로그인 |
| 코드 수정 | 장기 기억 유지 |
| 역제안 | - |

---

## 3. 레포지토리 구조

```
eae.kr/
├── src/content/{category}/{slug}.mdx  ← 콘텐츠 생성 위치
├── src/components/mdx/                 ← Part1, Part2, Part3 등
├── src/utils/categories.js             ← 카테고리 목록
├── .github/workflows/deploy.yml        ← main 푸시 → 자동 배포
├── scripts/repo-guard.mjs              ← 빌드 전 품질 검사
└── CLAUDE.md                           ← 이 파일
```

---

## 4. 카테고리 목록

| slug | 이름 |
|------|------|
| eae-blueprint | EAE Blueprint (핵심 설계) |
| patchtech | Patchtech (기술 패치) |
| qsketch | Quick Sketch |
| penon | Penon |
| mal | Mal |
| eml | EML |
| phl | PHL |

---

## 5. MDX 템플릿

```mdx
---
title: "제목"
title_en: "English Title"
date: "YYYY-MM-DD"
category: "카테고리-slug"
published: true
---

<Part1>
## 쉽게 설명하면? / In Simple Terms
[비유적 설명 - 한글]
[Analogy - English]
</Part1>

<Part2>
## 시스템 구조 / System Architecture
<Accordion>
  <AccordionItem title="1. 개요">...</AccordionItem>
</Accordion>
</Part2>

<Part3>
## 개념 지도 / Concept Map
```mermaid
[다이어그램]
```
## 이론적 배경 / Theoretical Background
[한글]
[English]
</Part3>
```

---

## 6. 사용 가능한 MDX 컴포넌트

| 컴포넌트 | 용도 |
|---------|------|
| `<Part1>` | Grandpa Mode - 비유적 설명 (Amber) |
| `<Part2>` | System Architect - 기술 구조 (Blue) |
| `<Part3>` | Theory Map - Mermaid + 철학 (Purple) |
| `<Accordion>` + `<AccordionItem>` | 펼치기/접기 |
| `<YouTubeEmbed id="xxx"/>` | YouTube 임베드 |
| `<SpotifyEmbed track="xxx"/>` | Spotify 임베드 |
| `<OpeningFrame videoId="xxx"/>` | 오프닝 영상 |
| `<SketchCard>` | Excalidraw 스타일 카드 |
| `<Mermaid>` | 다이어그램 |
| `<HoverZoom>` | 호버 줌 이미지 |

---

## 7. 배포 파이프라인

```
MDX 파일 생성
    ↓
git add + commit + push (main)
    ↓
GitHub Actions 자동 트리거
    ↓
npm run guard (품질 검사)
    ↓
vite build (MDX → HTML)
    ↓
GitHub Pages 배포
    ↓
https://eae.kr 라이브
```

---

## 8. 작업 규칙

### 입력
- 카테고리
- 텍스트/백서
- URL (YouTube, 이미지, 음원)

### 출력
- ❌ 설명
- ❌ 대화
- ⭕ **MDX 파일**

### 미디어 처리
- **YouTube/Video**: URL → 자동 embed, 설명 금지
- **Audio**: SoundCloud/YouTube/CDN → 출판 부품으로 조립
- **마케팅 제안 (Grok)**: frontmatter, meta, description으로 변환

---

## 9. 세션 종료 처리

```
세션이 닫혀도 문제 없다.
다시 시작할 때 필요한 말:

"eae.kr 출판 모드"

그 외 필요 없음:
❌ 리마인더 업로드
❌ 장황한 설명
❌ 백서 재설명
```

---

## 10. 금지 사항

- PWA 관련 코드 추가 금지 (repo-guard 차단)
- 루트에 README.md, CLAUDE.md 외 .md 금지
- 사용자에게 복붙 요청 금지 (직접 Write/Edit)
- 불필요한 확인 질문 금지 (판단 후 실행)

---

## 11. 세션 시작 시 자동 로딩

이 파일을 읽으면 묻지 말고 자동으로 확인:
- `src/utils/categories.js` (카테고리)
- `src/content/eae-blueprint/gold-template.mdx` (템플릿 참조)
- `git branch` (현재 브랜치)

---

## 12. 최종 원칙

```
AI가 기억하는 게 아니다.
시스템이 저장하고, 너는 읽어서 실행한다.

이 문서를 읽은 시점부터,
너(Claude)는 출판사 에이전트로서 즉시 실행 가능 상태다.
```

---

*버전: 2.0*
*마지막 업데이트: 2026-01-02*
