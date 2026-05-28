# eae.kr 리팩토링 계획
> 확정: 2026-05-28 / 박씨 직접 정의
> 연관: parksy-logs/docs/, OrbitPrompt/docs/, eae-univ/docs/ (동일 플랜 각 레포 시각)

---

## 3축 정의

| 축 | 정의 |
|----|------|
| **리걸 엔터티** | 글로벌 배포 플랫폼 — Track A(영미권) + Track B(한국) 운영사 |
| **공정 (FAB)** | RT-δ — GitHub Pages + Edge Runtime → 국가별 라우팅 → 서빙 |
| **소설 단위** | 4부 "세계에 출판하다" |

파이프라인 위치: **level 1** — 최종 배포 (하류, 소비자 접점)

```
parksy-logs → OrbitPrompt → eae-univ
                                  ↓
                            eae.kr ← 여기 (글로벌 배포)
                                  ↓
                  영미권 사용자 / 한국 사용자 / 글로벌
```

---

## 현황 진단

### 이 레포가 담당해야 할 것 (올바른 위치)
```
index.html          ← 글로벌 랜딩 (말하는 자서전, 2트랙 진입점)
public/             ← CNAME, favicon, manifest, robots, sitemap
youtube-setup.json  ← YouTube 채널 매핑 SSOT (이 레포만 관리)
docs/               ← 전략/계획 문서
.github/workflows/  ← GitHub Pages 자동 배포
```

### 문제 1: design/ 레거시 파일
```
현재 (사용하지 않음):
  design/broadcast-ui.css
  design/cave-ui.css
  design/chalk-particles.js
  design/eae-broadcast.css
  design/elevator-system.js
  design/elevator-ui.css

이유: 2026-05-28 index.html 리라이트로 새 랜딩은 인라인 CSS
→ design/ → docs/99-archive/design/ 이동
```

### 문제 2: index-legacy.html
```
현재: eae.kr/index-legacy.html (이전 다크 칠판 테마)
→ docs/99-archive/index-legacy.html 이동
  이유: 서사(소설) 기록 보존 원칙 — 삭제 금지, 아카이브
```

### 문제 3: youtube-setup.json SSOT 확정 + EN 채널 추가
```
현재: OrbitPrompt, eae-univ, eae.kr 3곳 분산
→ 이 레포(eae.kr)가 SSOT로 확정
→ 나머지 2곳 삭제

현재 내용 부족:
  EN 채널 항목 없음 (Track A 시작 안 됨)
→ EN 채널 추가 필요:
  {
    "lang": "en",
    "channel": "eae-univ EN채널",
    "handle": "@EAE-University",
    "track": "A",
    "cpm": "high",
    "mode": "automated"
  }
```

### 문제 4: Clipped_image 파일 루트에
```
eae.kr/Clipped_image_20250424_024545(1).png
→ docs/99-archive/ 이동
```

---

## 액션 플랜

### Phase 1 — 즉시
| 항목 | 액션 |
|------|------|
| youtube-setup.json SSOT 확정 | EN 채널 항목 추가 |
| 00_TRUTH 레벨 수정 | level 2 → level 1, type 수정 |

### Phase 2 — 다음 세션
| 항목 | 액션 |
|------|------|
| design/ → docs/99-archive/design/ | 레거시 아카이브 |
| index-legacy.html → docs/99-archive/ | 서사 보존 아카이브 |
| Clipped_image → docs/99-archive/ | 루트 정리 |

### Phase 3 — Track A 구현
| 항목 | 액션 |
|------|------|
| /en/ 라우팅 추가 | index.html 국가별 분기 강화 |
| Cloudflare Workers 세팅 | Edge Runtime 붙이기 |
| CF-IPCountry 감지 로직 | 지역 자동 감지 |

---

## youtube-setup.json 목표 구조

```json
{
  "version": "2.0",
  "ssot": "eae.kr",
  "channels": [
    {
      "lang": "ko",
      "track": "B",
      "channel": "EAE Univ. 기존 채널",
      "handle": "@EAE-University",
      "cpm": "medium",
      "mode": "direct"
    },
    {
      "lang": "en",
      "track": "A",
      "channel": "EAE Univ. EN채널",
      "handle": "@EAE-University",
      "cpm": "high",
      "mode": "automated"
    },
    {
      "lang": "ja",
      "track": "A",
      "channel": "(예정)",
      "cpm": "high",
      "mode": "automated",
      "status": "planned"
    }
  ]
}
```

---

## 00_TRUTH 재정의

```json
{
  "repo": "eae.kr",
  "level": 1,
  "parent": "dtslib-papyrus",
  "type": "global-distributor",
  "pipeline_position": "downstream",
  "receives_from": ["eae-univ"],
  "feeds_into": ["global-users"],
  "inherit": {
    "immutable": "strict",
    "defaults": "override-allowed"
  },
  "created": "2026-01-26"
}
```

---

## 소설 서사 구조

```
4부 — "세계에 출판하다"

챕터 1: index.html 초기     — 편집술 강의실 (다크 칠판, KO only)
챕터 2: index-legacy.html   — 전환 직전의 모습 (서사 보존)
챕터 3: index.html 현재     — 말하는 자서전 (따뜻한 랜딩, 2트랙)
챕터 4: /ko/ + /en/ 라우팅  — 세계로 문이 열리다
챕터 5: Edge Runtime        — 어디서 접속해도 내 언어로

이 레포의 클라이맥스:
  어느 나라 할머니·할아버지가 접속해도
  자신의 언어로 "말하는 자서전"의 문이 열린다.
```

---

## 이 레포의 경계 (침범 금지)

```
담당 O: 글로벌 랜딩, 국가별 라우팅, Edge Runtime, youtube-setup.json SSOT
담당 X: 강의 HTML 생산 (eae-univ)
담당 X: PHL 프로토콜 (OrbitPrompt)
담당 X: 원자재 수집 (parksy-logs)
담당 X: 콘텐츠 직접 편집 (eae-univ에서 전기)
```

---

*문서 위치: eae.kr/docs/REFACTORING_PLAN_20260528.md*
*연관: parksy-logs/docs/REFACTORING_PLAN_20260528.md*
*연관: OrbitPrompt/docs/REFACTORING_PLAN_20260528.md*
*연관: eae-univ/docs/REFACTORING_PLAN_20260528.md*
