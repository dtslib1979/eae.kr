# eae.kr 전략 포지셔닝 — 글로벌 2트랙
> 확정: 2026-05-28 / 박씨 직접 정의
> 연관 문서: parksy-logs/docs/, OrbitPrompt/docs/, eae-univ/docs/ (동일 전략 각 레포 시각)

---

## DTSlib 정체성

> **글로벌 할머니·할아버지들의 이야기와 지혜를 편집하고 출판하는 AI 시대 대학/출판사**

---

## 2트랙 전략

| | Track A — 영미권 자동화 | Track B — 한국 로컬 |
|---|---|---|
| 대상 | 영미권 할머니·할아버지 | 한국 할머니·할아버지 |
| 언어 | 영어 (Edge Runtime 서빙) | 한국어 (로컬 허브) |
| 수익 | YouTube 고CPM 광고 | 로컬 구독/비즈니스 |
| 진입점 | eae.kr/en/ | eae.kr/ko/ |

---

## eae.kr 역할 (글로벌 배포 허브)

### 핵심 포지션
> **eae.kr = 국가별 라우팅 + Edge Runtime 서빙**
> 어디서 접속하든 해당 언어·트랙으로 자동 라우팅된다.

### Track A에서의 역할 — 영미권 진입점
```
영미권 사용자 접속
    ↓ Edge Runtime (Cloudflare Workers / Vercel Edge)
    지역 감지 → /en/ 라우팅
    OrbitPrompt 영어 콘텐츠 동적 서빙
    ↓
영미권 YouTube 채널 연결 (고CPM)
```

**영어 콘텐츠 1회 세팅 → Edge가 계속 서빙 → 무인 수익**

### Track B에서의 역할 — 한국 로컬 허브
```
한국 사용자 접속
    ↓ /ko/ 라우팅
    박씨 직접 편집한 프리미엄 강의
    ↓
한국 로컬 구독/커뮤니티 연결
```

---

## Edge Runtime 설계

### 기술 스택
```
GitHub Pages (정적 호스팅)
    + Cloudflare Workers 또는 Vercel Edge
    → 동적 라우팅 + 콘텐츠 생성 가능
```

### 라우팅 구조
```
eae.kr/
  /en/    → 영미권 콘텐츠 (Edge 동적 생성)
  /ko/    → 한국 콘텐츠 (정적 + 박씨 직접)
  /ja/    → 일본 (추후)
  /zh/    → 중화권 (추후)
```

### Edge가 하는 일
```
1. 접속자 지역 감지 (CF-IPCountry 헤더)
2. 해당 언어 OrbitPrompt 콘텐츠 로드
3. eae-univ 강의 HTML 서빙
4. YouTube 해당 채널 연결
```

---

## YouTube 채널 매핑 (youtube-setup.json 반영 필요)

| 언어 | 채널 | CPM | 운영 방식 |
|------|------|-----|---------|
| EN | eae-univ EN채널 | 고CPM ($3-8) | 자동화 |
| KO | eae-univ 기존 채널 | 중CPM | 박씨 직접 |
| JA | (예정) | 고CPM | 자동화 |

---

## 파이프라인 (이 레포 기준)

```
eae-univ (강의 HTML 완성)
    ↓ build_showcase + publish
eae.kr   ← 여기 (배포 허브)
  /en/ Edge Runtime → 영미권 YouTube
  /ko/ 정적 서빙 → 한국 로컬
    ↓
parksy-distributor.youtube (채널별 자동 업로드)
```

---

## 즉시 해야 할 것

1. **Cloudflare Workers 세팅** — eae.kr에 Edge Runtime 붙이기
2. **`/en/` 라우팅 추가** — index.html 국가별 분기
3. **`youtube-setup.json` 업데이트** — EN 채널 추가
4. **지역 감지 로직** — CF-IPCountry → 언어 자동 감지

**Track A 수익 시작 조건:**
- [ ] Edge Runtime 작동
- [ ] 영어 강의 1편 (eae-univ)
- [ ] 영어 YouTube 채널 1개

---

*문서 위치: eae.kr/docs/STRATEGY_GLOBAL_2TRACK_20260528.md*
*연관: parksy-logs/docs/STRATEGY_GLOBAL_2TRACK_20260528.md*
*연관: OrbitPrompt/docs/STRATEGY_GLOBAL_2TRACK_20260528.md*
*연관: eae-univ/docs/STRATEGY_GLOBAL_2TRACK_20260528.md*
