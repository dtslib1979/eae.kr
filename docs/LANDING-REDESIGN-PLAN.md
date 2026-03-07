# eae.kr 랜딩 페이지 웹디자인 리팩토링 계획

> 생성일: 2026-03-07
> 보일러플레이트: parksy.kr (CAVE UI + 엘리베이터 시스템)
> YouTube: https://www.youtube.com/@BeingEduartEngineer-4

---

## 전략

parksy.kr의 CAVE UI + 엘리베이터 시스템을 보일러플레이트로 가져온다.
eae.kr은 React+Vite 스택이므로 CSS만 포팅, HTML/JS는 React 컴포넌트로 변환.

---

## 포팅 대상

```
parksy.kr → eae.kr:
├── design/cave-ui.css        → src/styles/cave-ui.css
├── design/elevator-ui.css    → React 컴포넌트로 변환
├── design/broadcast-ui.css   → src/styles/broadcast-ui.css
├── design/elevator-system.js → React hook (useElevator.js)
└── 5층 구조 메타포           → 4대 카테고리로 리매핑

가져오지 않을 것:
├── 8 페르소나 채널 (parksy.kr 전용)
├── PO Dispatch / Transform Workspace
├── B4 Office 잠금
└── 카테고리 페이지용 HTML (MDX 유지)
```

---

## 층 리매핑

```
parksy.kr                    eae.kr 교육방송
─────────                   ──────────────
1F Lobby (ON AIR, 뉴스)     1F Lobby — 방송국 입구, 최근 에피소드
B1 Channels (8채널)         B1 Curriculum — 4대 카테고리 카드
B2 Studio (5엔진)           B2 Library — editorial MDX 목록
B3 Console (플랫폼)         B3 Console — YouTube + GitHub + 방송국 연결
B4 Office (잠금)            삭제 또는 향후 확장
```

---

## 디자인 시스템 변경

```
CAVE UI 기본 (유지):
  --cave-void: #0a0a0a
  --cave-deep: #111111
  --cave-wall: #1a1a1a
  --cave-stone: #252525
  --cave-glow: #e8e8e8
  --cave-dim: #888888

액센트 변경 (parksy → 교육방송):
  --flame-core: #ff6b35  → --edu-core: #fbbf24 (amber)
  --flame-edge: #f7931e  → --edu-edge: #f59e0b
  --ember: #cc4400       → --edu-ember: #d97706

카테고리 컬러 (4개):
  --cat-editorial: #fbbf24 (amber)
  --cat-operational: #3b82f6 (blue)
  --cat-channeling: #a855f7 (purple)
  --cat-survival: #22c55e (green)
```

---

## 파일 구조

```
src/
├── styles/                   ← 신규
│   ├── cave-ui.css           parksy.kr 포팅
│   └── broadcast-ui.css      방송국 전용
├── components/
│   ├── ElevatorPanel.jsx     ← 신규 (좌측 고정 네비)
│   ├── FloorLobby.jsx       ← 신규 (1F)
│   ├── FloorCurriculum.jsx  ← 신규 (B1)
│   ├── FloorLibrary.jsx     ← 신규 (B2)
│   └── FloorConsole.jsx     ← 신규 (B3)
├── hooks/
│   └── useElevator.js       ← 신규 (층 전환)
├── pages/
│   ├── Home.jsx             ← 전면 교체
│   ├── Layout.jsx           ← nav → ElevatorPanel
│   ├── Category.jsx         ← 다크 테마 수정
│   └── Archive.jsx          ← 다크 테마 수정
└── main.jsx                 ← cave-ui.css import 추가
```

---

## 제약 조건

```
수정 금지:
  src/index.css (디자인 토큰)
  Part1.jsx, Part2.jsx, Part3.jsx
  MDX 컴포넌트 API
  repo-guard.mjs 규칙

수정 가능:
  Layout.jsx, Home.jsx, Category.jsx, Archive.jsx
  새 CSS 파일 추가
  새 컴포넌트 추가

PARKSY CHALKBOARD (#253A2F) 위에 CAVE UI 레이어링.
기존 Part 토큰과 충돌하지 않게 네임스페이스 분리.
```

---

## 구현 Phase

### Phase 1: CSS 포팅

```
[ ] src/styles/cave-ui.css — 변수 + 베이스
[ ] src/styles/broadcast-ui.css — ON AIR, 상태 표시
[ ] main.jsx import 추가
```

### Phase 2: 컴포넌트 생성

```
[ ] ElevatorPanel.jsx — 좌측 고정, 층 버튼
[ ] useElevator.js — hash routing, 층 전환 상태
[ ] FloorLobby.jsx — ON AIR + 최근 에피소드 + 퀵 액세스
[ ] FloorCurriculum.jsx — 4대 카테고리 카드
[ ] FloorLibrary.jsx — editorial MDX 스킬셋별 그룹
[ ] FloorConsole.jsx — YouTube/GitHub/방송국 링크
```

### Phase 3: 페이지 교체

```
[ ] Home.jsx — 엘리베이터 랜딩 전면 교체
[ ] Layout.jsx — ElevatorPanel 통합
[ ] Category.jsx — bg-white → 다크 테마
[ ] Archive.jsx — bg-white → 다크 테마
```

### Phase 4: 반응형 + 마감

```
[ ] 모바일: 엘리베이터 하단 바
[ ] 태블릿: 2컬럼 그리드
[ ] ON AIR 애니메이션
[ ] 층 전환 트랜지션
```

---

## 참조 파일 (parksy.kr 보일러플레이트)

```
~/parksy.kr/index.html                    메인 랜딩 (5층 구조)
~/parksy.kr/design/cave-ui.css            디자인 시스템 변수 (573줄)
~/parksy.kr/design/elevator-ui.css        엘리베이터 레이아웃 (1485줄)
~/parksy.kr/design/broadcast-ui.css       방송국 스타일 (553줄)
~/parksy.kr/design/floor-system.css       층 전환 (1050줄)
~/parksy.kr/design/elevator-system.js     네비게이션 로직
~/parksy.kr/design/CAVE-UI.md             디자인 시스템 문서
```

## 참조 파일 (eae.kr 현재)

```
~/eae.kr/src/index.css                    디자인 토큰 (수정 금지)
~/eae.kr/src/pages/Home.jsx               현재 랜딩 (교체 대상)
~/eae.kr/src/pages/Layout.jsx             레이아웃 (수정 대상)
~/eae.kr/src/pages/Category.jsx           다크 테마 수정 대상
~/eae.kr/src/pages/Archive.jsx            다크 테마 수정 대상
~/eae.kr/src/utils/categories.js          5개 카테고리
~/eae.kr/src/utils/posts.ts               MDX 로더
~/eae.kr/CLAUDE.md                        출판 에이전트 프로토콜
~/eae.kr/scripts/repo-guard.mjs           빌드 가드 10개 규칙
~/eae.kr/docs/BROADCAST-REFACTORING-PLAN.md  리팩토링 완료 기록
```

---

*신규 발명 0건. parksy.kr 패턴 복제 + React 변환.*
*2026-03-07*
