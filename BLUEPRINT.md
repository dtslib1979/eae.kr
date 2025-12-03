# 🏗️ EAE Universal Report Template Engine - BLUEPRINT

**EAE Skillset6 / EduArt OS – Universal Report Template Engine v1.0**

## 목적 (Purpose)

본 엔진은 단일 MDX 입력만으로 "박씨 OS 리포트(강의/교재/블로그/PWA/포맷)"를 자동 생성하며, 모든 구성요소는 텍스트 규칙 선언서에 의해 완전히 통제됩니다.

## 리포트 구조 (Universal Structure)

리포트는 반드시 다음 순서와 slot 구조를 가집니다:

```mdx
<OpeningFrame src="YouTube or CDN URI"/>
<Part1>Grandpa Mode – 비유·서사·쉬운 설명</Part1>
<Part2>System Architect Mode – 구조·로직·데이터 흐름</Part2>
<Part3>Theory Map (Mermaid) – 개념·세계관 도식</Part3>
<SketchCard />   {/* 자유 그림, Excalidraw 스타일 */}
<SpotifyEmbed track="Spotify URI" />
<PromptEngineLink href="https://parksy.kr/prompt-engine/eae-skillset6" />
```

## 콘텐츠 작동 방식 (Content Flow)

### Part1: Grandpa Mode
- 비유, 스토리텔링, 실물·감각적 예시
- 단어·문장 최대 단순화
- 초보자도 이해 가능한 직관적 설명

### Part2: System Architect Mode
- 실제 동작 구조, 데이터 플로우
- Skillset6, Repo 구조, 엔지니어링 서술
- 초보자/비개발자도 이해 가능하게 작성

### Part3: Theory Map (Mermaid)
- 학문적/철학적 배경+세계관 연결
- Mermaid mindmap/flowchart
- 레비 스트로스, 니체, 푸코 등 개념 포함 가능

### SketchCard
- Excalidraw 스타일 SVG 그림
- 자유로운 시각화

### OpeningFrame/SpotifyEmbed/PromptEngineLink
- 미디어, 음악 연계 및 리포트 재생산 포탈

## 브랜드/모바일/스타일 전역 적용 (Brand System)

### 컬러 시스템
```javascript
eae: {
  primary: '#4F46E5',     // Indigo - Main brand color
  secondary: '#7C3AED',   // Purple - Accent color
  accent: '#F59E0B',      // Amber - Highlight color
  grandpa: '#F59E0B',     // Amber - Part1 theme
  architect: '#3B82F6',   // Blue - Part2 theme
  theory: '#9333EA',      // Purple - Part3 theme
  sketch: '#6B7280',      // Gray - Sketch theme
  music: '#10B981',       // Green - Spotify theme
}
```

### 타이포그래피
- Tailwind Typography 플러그인 사용
- 한글 폰트: Pretendard
- 영문 폰트: Inter
- 모바일 최적화 및 반응형 디자인

## 컴포넌트 정의 (Universal Components)

| 컴포넌트 | 설명 | 위치 |
|---------|------|------|
| `<OpeningFrame />` | YouTube/CDN 썸네일 | `/src/components/mdx/OpeningFrame.jsx` |
| `<Part1 />` | 쉬운 비유·서사 | `/src/components/mdx/Part1.jsx` |
| `<Part2 />` | 구조/로직 핵심 설명 | `/src/components/mdx/Part2.jsx` |
| `<Part3 />` | Mermaid 도식화 (자동 렌더링) | `/src/components/mdx/Part3.jsx` |
| `<SketchCard />` | SVG 스타일 자유 그림 | `/src/components/mdx/SketchCard.jsx` |
| `<SpotifyEmbed />` | 음악 매칭 | `/src/components/mdx/SpotifyEmbed.jsx` |
| `<PromptEngineLink />` | Prompt Engine 포탈/출구 | `/src/components/mdx/PromptEngineLink.jsx` |

### 컴포넌트 사용 예시

#### OpeningFrame
```jsx
<OpeningFrame 
  src="https://www.youtube.com/watch?v=VIDEO_ID" 
  title="Video Title"
/>
```

#### Part1, Part2, Part3
```jsx
<Part1>
  여기에 할아버지처럼 쉽게 설명하는 내용을 작성합니다.
</Part1>

<Part2>
  시스템 아키텍처와 데이터 흐름을 설명합니다.
</Part2>

<Part3>
  ```mermaid
  mindmap
    root((개념))
      카테고리1
      카테고리2
  ```
</Part3>
```

#### SketchCard
```jsx
<SketchCard title="내 스케치">
  <!-- SVG 코드 또는 이미지 -->
</SketchCard>
```

#### SpotifyEmbed
```jsx
<SpotifyEmbed 
  track="3n3Ppam7vgaVa1iaRUc9Lp" 
  title="작업 음악" 
/>
```

#### PromptEngineLink
```jsx
<PromptEngineLink 
  href="https://parksy.kr/prompt-engine/eae-skillset6" 
/>
```

## Prompt Engine 통합 (Prompt Engine Integration)

리포트 마지막은 Portal 역할의 slot(프롬프트 엔진 출구):

```mdx
<PromptEngineLink href="https://parksy.kr/prompt-engine/eae-skillset6" />
```

해당 slot은 **포맷/카테고리/A/B/C 템플릿 타입에 관계없이 필수**입니다.

## 확장성 (Extensibility)

3가지 템플릿 타입 지원 (공통 Slot+구조):
- **A-Type:** 교육(EAE)
- **B-Type:** 창작(Art Remix)
- **C-Type:** 시스템엔지니어(DTSLIB)

각 Part1/2/3 및 컴포넌트 내용 변형만 허용합니다.

## 배포 모델 (Deploy Model)

```
MDX → React 컴포넌트 변환 → Vite 빌드 → GitHub Pages 자동배포
```

- 모바일 PWA 지원
- 카테고리 자동 분류
- 자동 repo sync (커밋 시 반영)
- 목표: "Markdown → OS 리포트 자동생성"

## 기술 스택

- **React 18** - UI 라이브러리
- **Vite** - 빌드 도구
- **MDX** - Markdown + JSX
- **Tailwind CSS** - 유틸리티 CSS
- **Mermaid** - 다이어그램 렌더링
- **GitHub Actions** - CI/CD
- **GitHub Pages** - 호스팅

## 새 리포트 작성 방법

1. `/src/content/{category}/` 폴더에 새 MDX 파일 생성
2. Frontmatter 작성:
   ```mdx
   ---
   title: "리포트 제목"
   date: "2025-12-03"
   category: "카테고리명"
   ---
   ```
3. Universal Components를 사용하여 리포트 작성
4. 커밋 & 푸시하면 자동 배포

## 샘플 리포트

샘플 리포트는 `/src/content/eae-blueprint/sample-report.mdx`에서 확인할 수 있습니다.

이 샘플은 모든 Universal Components를 사용하여 작성되었습니다:
- OpeningFrame with YouTube
- Part1: Grandpa Mode
- Part2: System Architect Mode
- Part3: Theory Map with Mermaid
- SketchCard with SVG
- SpotifyEmbed
- PromptEngineLink

## 출력 규칙 (Output Standard For Agents/LLM)

- 설명 장황 X / 구조·패턴·Slot·컴포넌트 명확히
- Part1=직관 설명 / Part2=정확 엔지니어링 / Part3=Mermaid mindmap
- 브랜드·스타일 일관 적용(Tailwind 등)
- **항상 MDX 유효성 보장(컴파일 에러 예방)**
- Prompt Engine URL 무조건 마지막에

## 세션 경계 (Session Boundary)

**6회차 학습 세션 시퀀스:**
1. 아키텍처 선언(본 문서) ✅
2. 브랜드+CSS/모바일 최적화 ✅
3. MDX 컴포넌트 코드화 ✅
4. 샘플 리포트 1개 생성 ✅
5. GitHub 배포 아키텍처 통합 ✅
6. 프롬프트 엔진 로직+포탈 규칙 설계 ✅

---

## ✔️ 만점 BLUEPRINT – 작업 지시 체크리스트

- [x] 인스트럭션/아키텍처/슬롯 모두 명확
- [x] 실제 코드 설계·리포트 자동화에 완벽하게 적용 가능
- [x] 확장/ 커스텀/후속 세션 즉시 연결 가능
- [x] LLM, Agent, 개발팀 모두 그대로 따라야 함
- [x] 실전 엔진·배포·세계관 모두 일치

---

**EAE Skillset6 / EduArt OS – Universal Report Template Engine v1.0**
