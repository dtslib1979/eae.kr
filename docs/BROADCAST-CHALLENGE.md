# EAE Broadcasting Station — Content Challenge

> 생성일: 2026-03-07
> 상태: OPEN
> 담당: Claude Code (세션별 자동 픽업)

---

## 현황 진단

건물은 지었다. 프로그램이 없다.

```
방송국 인프라 (완료):
  ✅ CAVE UI + 엘리베이터 시스템
  ✅ 4층 구조 (1F Lobby → B1 Curriculum → B2 Library → B3 Console)
  ✅ ON AIR 뱃지 + 캐러셀 + 퀵 액세스
  ✅ 7개 카테고리 카드 + 다크 테마
  ✅ 반응형 (모바일 하단 바)

콘텐츠 밀도 (부족):
  ❌ 1F 캐러셀이 살아보이려면 최소 4개 최신 포스트
  ❌ B1 카운트가 대부분 0
  ❌ B2 라이브러리가 텅 빔
  ❌ 방문자가 "여기 뭐가 있지?" 느끼는 밀도 미달
```

---

## Challenge: 편성표 채우기

### Phase A: 최소 생존 편성 (MVP Lineup)

카테고리당 최소 1개. 1F 캐러셀이 돌아가는 상태.

```
[ ] eae-blueprint × 1  — YouTube 영상 + Part1/2/3 (필수 규칙)
[ ] patchtech × 1      — 기술 패치 아무거나
[ ] qsketch × 1        — 빠른 스케치 1건
[ ] penon × 1          — 에세이 1건
[ ] mal × 1            — 언어/커뮤니케이션 1건
[ ] eml × 1            — 이메일 스타일 1건
[ ] phl × 1            — 철학 1건
```

**완료 조건:** B1 카운트 전부 1 이상. 1F 캐러셀 4개 이상 표시.

### Phase B: 채널 밀도 (Channel Density)

카테고리당 3개 이상. 방송국처럼 보이기 시작하는 시점.

```
[ ] eae-blueprint × 3  — YouTube 시리즈 3편
[ ] patchtech × 3      — 기술 패치 시리즈
[ ] qsketch × 3        — 스케치 시리즈
[ ] 나머지 4개 × 2 이상
```

**완료 조건:** 총 게시물 15개 이상. B2 라이브러리가 스크롤 가능한 상태.

### Phase C: 라이브 연동 (Live Integration)

```
[ ] ON AIR 뱃지: YouTube API 연동 → 실제 라이브 상태 반영
[ ] 1F 캐러셀: 최신 YouTube 영상 자동 동기화
[ ] B1 카운트: 실시간 업데이트 (이미 동적이지만 볼륨이 필요)
[ ] B3 Console: YouTube Studio 통계 위젯 (선택)
```

---

## 스케줄링 규칙

### Claude Code 세션 시작 시

```
1. 이 문서 확인
2. 현재 Phase 판단 (A/B/C)
3. 발행인(Parksy)이 백서/텍스트/URL 제공하면 → MDX 발행
4. 발행 후 이 문서의 체크리스트 업데이트
```

### 콘텐츠 발행 우선순위

```
1순위: eae-blueprint (YouTube 영상 있을 때만)
2순위: patchtech, qsketch (빠르게 쌓을 수 있음)
3순위: penon, phl (깊이 있는 콘텐츠)
4순위: mal, eml (상황에 따라)
```

### 발행 기준

```
모든 MDX:
  - 영문 전용 (repo-guard 강제)
  - Part1/2/3 구조 권장 (eae-blueprint은 필수)
  - Mermaid 컴포넌트 사용 (마크다운 코드블록 금지)
  - youtube frontmatter는 비디오 URL만 (채널 URL 금지)
```

---

## 현재 진행 상태

```
Phase A: [ ] 미완료
Phase B: [ ] 미시작
Phase C: [ ] 미시작

최종 업데이트: 2026-03-07
```

---

*건물은 지었다. 이제 편성표를 채워라.*
*방송국은 프로그램이 돌아야 방송국이다.*
