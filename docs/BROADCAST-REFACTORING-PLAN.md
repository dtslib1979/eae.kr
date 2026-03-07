# eae.kr 방송국 리팩토링 계획 — 4대 카테고리 확장

> 생성일: 2026-03-07
> 대상 레포: eae.kr (이 레포)
> 소스: broadcast/21C-BROADCAST-CURRICULUM.md (eae-univ PR #29)
> YouTube: https://www.youtube.com/@BeingEduartEngineer-4
> 원칙: 새로 만들지 않는다. 28개 레포 기존 자산을 조합한다.

---

## 0. 현재 상태

### eae.kr = 방송국이다

```
eae-univ = 백엔드 OS (비공개, 엔진/원본/매니페스트)
eae.kr   = 방송국 (공개, MDX 출판, GitHub Pages)

eae-univ가 공급한다. eae.kr이 방송한다.
eae.kr은 eae-univ보다 넓다 — eae-univ는 공급원 중 하나일 뿐.
```

### 현재 카테고리 (7개)

```
eae-blueprint  ← EAE Univ. YouTube 설계 백엔드 (특수 규칙)
qsketch, penon, mal, patchtech, eml, phl  ← 6 스킬셋 (편집술 하위)
```

문제: 6개 스킬셋은 전부 편집술 소속. 방송국 전체 커리큘럼이 아니다.

---

## 1. 리팩토링 목표

### 변경 후 카테고리 구조

```
eae.kr 방송국
│
├── 편집술 (editorial)       ← 만든다
│   ├── eml                  기존 유지
│   ├── qsketch              기존 유지
│   ├── mal                  기존 유지
│   ├── penon                기존 유지
│   ├── phl                  기존 유지
│   └── patchtech            기존 유지
│
├── 운영술 (operational)     ← 돌린다 (폰프레스 ERP)
├── 생존술 (survival)        ← 복제한다 (프랜차이즈)
├── 접신술 (channeling)      ← 사람을 읽는다 (IP 생성)
│
└── eae-blueprint            ← 메타/설계 (기존 유지, 특수 규칙 유지)
```

### 4대 카테고리 = 파이프라인

```
편집술 (생산) → 운영술 (시스템) → 접신술 (소재 확보) → 생존술 (사업 확장)
                                                          │
순환: 생존술의 새 노드가 → 편집술부터 다시 시작 ←──────────┘
```

---

## 2. 28개 레포 자산 매핑

### 편집술 — 만든다

| 소스 레포 | 자산 | 대상 | 유형 |
|-----------|------|------|------|
| eae-univ | broadcast/games/ (6×5탭+BOSS) | 전체 | 게임 |
| eae-univ | phl/ (compiler, 46 tests) | PHL | 코드 |
| parksy-audio | Phase 6~8 실패, piano_expression.py | EML | RWA |
| parksy-image | 웹툰 엔진, PSE 폰트, Liner | QSketch | 파이프라인 |
| OrbitPrompt | 프롬프트 편집 도구 | PHL | 도구 |
| dtslib-cloud-appstore | 13개 브라우저 도구 | Patchtech | 소재 제작 |
| dtslib-apk-lab | 10개 APK, CI | Patchtech | 앱 편집 |

### 운영술 — 돌린다

| 소스 레포 | 자산 | 소재 |
|-----------|------|------|
| 전 레포 CLAUDE.md × 23개 | 헌법 체계 | 운영 매뉴얼 |
| termux-bridge | CDP, QA, GitHub Actions | MES 도구 |
| dtslib-apk-lab | CI, 5-Stage Pipeline | 제조 공정 |
| dtslib-cloud-appstore | Browser=Studio | 도구 운영 |
| parksy-audio | deploy-musician.sh | 오케스트레이터 |
| eae-univ | sync 스크립트 3종 | 크로스레포 |
| eae-univ | 매트릭스 아키텍처 | 프레임워크 |
| phoneparis | F-Droid, Variable OS | 배포 인프라 |
| dtslib-papyrus | HQ 백서 | 경영 문서 |

### 접신술 — 사람을 읽는다

| 소스 | 소재 |
|------|------|
| 남원골 브랜치들 | 지인 캐릭터 원본 |
| gohsy-fashion | 고씨 캐릭터 브랜드 IP |
| 3 Google 계정 | 페르소나 A/B/C 세계관 |
| YouTube 5+채널 | 캐릭터별 방송 채널 |
| eae-univ Pentagon | 5인 구조 |
| parksy-image | 캐릭터 비주얼 + PSE 서명 |

### 생존술 — 복제한다

| 소스 | 소재 |
|------|------|
| 3계정 멀티 구조 | Quantum Jump 실증 |
| 28개 레포 | 프랜차이즈 패키지 |
| CLAUDE.md × 23개 | 운영 매뉴얼 |
| GitHub Actions CI | 이식 가능 공정 |
| gohsy-fashion | 커머스 4채널 루프백 |
| phoneparis | Variable OS |
| dtslib-papyrus | 프랜차이즈 설계서 |

### 접신술 → 생존술 파이프라인

```
접신술 (입력)              →  생존술 (출력)
───────────────────────────────────────────
지인 미러링                   캐릭터 IP 저작권
그 사람이 됨                  브랜드 프랜차이즈
관점/질문 추출                레포 구조 복제 이식
남원골 브랜치                 엑시트 전략
```

---

## 3. 에피소드 소재 (전부 기존 자산)

### 편집술

```
EDITORSHIP-MANIFEST.md 영문 변환
6 스킬셋별 RWA 에피소드 (실패 기록 기반)
```

### 운영술

```
EP01: "스마트폰 하나로 레포 28개 돌리기" — Termux + Claude Code
EP02: "커밋은 전표다" — 매트릭스 아키텍처 ERP축
EP03: "deploy-musician.sh 해부" — 4단계 배포 오케스트레이터
EP04: "GitHub Actions APK 공장" — dtslib-apk-lab CI
EP05: "브라우저가 스튜디오다" — cloud-appstore 13개 도구
EP06: "크로스레포 동기화" — sync 스크립트 4종 패턴
EP07: "CLAUDE.md가 헌법이다" — 23개 레포 운영 매뉴얼
EP08: "3계정 × 3방송국" — 멀티 계정 운영 구조
```

### 접신술

```
EP01: "접신 vs 공감" — 디자인 씽킹과의 차이
EP02: "3계정 = 3인격" — 멀티 페르소나 운영법
EP03: "고씨를 읽다" — gohsy-fashion IP 생성
EP04: "Pentagon 5인 구조" — 슬롯별 캐릭터 설계
EP05: "AI에게 타인의 질문을 시키다" — 관점 위임 기법
```

### 생존술

```
EP01: "28개 레포 = 프랜차이즈 패키지"
EP02: "Quantum Jump" — 계정 전환 + 레포 이식
EP03: "CLAUDE.md = 프랜차이즈 매뉴얼"
EP04: "Variable OS" — phoneparis 개념
EP05: "4채널 루프백" — 커머스 수익 구조
EP06: "10-20년 호흡" — 구조적 생존
```

---

## 4. 구현 결과 (2026-03-07 완료)

### Phase 1: 코드 변경 — 완료

```
[x] src/utils/categories.js — 5개 카테고리 확정
    eae-blueprint, editorial, operational, channeling, survival
[x] 6 스킬셋 카테고리(eml,qsketch,mal,penon,phl,patchtech) 삭제
    → editorial로 흡수 (하이어라키 수정)
[x] Home.jsx 다크 테마 수정 (bg-white → bg-slate-800/60)
[x] CategoryIndex.jsx 다크 테마 + 카테고리 설명 추가
[x] About.jsx 4대 카테고리 + 철학 반영
[x] placeholder 20개 삭제 (13 스킬셋 + 7 테스트/빈 파일)
[x] CLAUDE.md 카테고리 섹션 업데이트
```

### Phase 2: MDX 투입 — 완료

```
editorial/ (8개):
  [x] editorial-manifesto.mdx — 편집술 선언
  [x] emotion-music-editorial.mdx — EML
  [x] speed-draw-units.mdx — QSketch
  [x] authentic-language.mdx — MAL
  [x] pen-on-structure.mdx — PENON
  [x] concept-token-compression.mdx — PHL
  [x] tech-material-editorial.mdx — Patchtech
  [x] loop-author.mdx — 루프 오서

operational/ (3개):
  [x] phonepress-erp.mdx — 폰프레스 ERP
  [x] commit-is-voucher.mdx — 매트릭스 ERP축
  [x] browser-is-studio.mdx — 브라우저 스튜디오

channeling/ (2개):
  [x] channeling-vs-empathy.mdx — 접신 vs 공감
  [x] multi-persona-operation.mdx — 3계정 운영

survival/ (2개):
  [x] quantum-jump.mdx — Quantum Jump
  [x] franchise-manual.mdx — CLAUDE.md 프랜차이즈
```

### Phase 3: 크로스레포 연결 — 완료

```
[x] eae-univ/broadcast/scripts/publish-eae-kr.sh — 4대 카테고리 전기 파이프라인
[x] eae-univ/broadcast/21C-BROADCAST-ARCHITECTURE.md — 연결 설정 문서
[x] eae.kr/docs/BROADCAST-REFACTORING-PLAN.md — 이 문서 (쌍)
```

---

## 5. 최종 구조

```
eae.kr 방송국 (5개 카테고리, 20개 MDX)
├── eae-blueprint (5)    메타/설계
├── editorial (8)        편집술 (6 스킬셋 흡수)
├── operational (3)      운영술
├── channeling (2)       접신술
└── survival (2)         생존술
```

### 신규 발명: 0건

```
모든 콘텐츠 = 28개 레포 기존 자산의 영문 MDX 변환
모든 스크립트 = deploy-musician.sh 패턴 복제
```

---

*eae.kr은 방송국이다. 이 문서는 방송국 리팩토링 완료 기록이다.*
*2026-03-07*
