# 발행인 운영 매뉴얼

> **이 문서는 설명서가 아니다.**
> **판단이 흔들릴 때 읽는 체크리스트다.**
> **읽고 그대로 하면 된다.**

---

## 새 글 쓸 때

```
eae.kr 출판 모드.
카테고리: [7개 중 선택]
제목: "제목"
[내용 던지기]
```

끝. 나머지는 Claude가 한다.

---

## 카테고리 목록

| 카테고리 | 용도 |
|---------|------|
| **eae-blueprint** | ⚠️ ArtRemix w/AI YouTube 설계 백엔드 |
| patchtech | 기술 해결책 |
| qsketch | 빠른 스케치 |
| penon | Penon |
| mal | Mal |
| eml | EML |
| phl | PHL |

### ⚠️ eae-blueprint 특수 규칙

이 카테고리 = **ArtRemix w/AI YouTube 채널** 종속
- YouTube 링크 필수
- 단독 발행 금지
- 영상의 설계/구조 문서만

**채널:** https://youtube.com/@eduart-engineer

---

## 미디어 붙일 때

```
YouTube: https://youtu.be/xxxxx
음원: spotify:track:xxxxx
```

URL만 던지면 Claude가 알아서 끼워넣음.

---

## 수정할 때

```
[URL] 이 글에서 Part2 수정해줘.
[수정 내용]
```

---

## 세션 새로 열렸을 때

```
eae.kr 출판 모드.
```

이 한 줄이면 Claude가 CLAUDE.md 읽고 즉시 작업 모드.

---

## ✅ 너만 할 수 있는 것

- 카테고리 결정
- 발행 여부 결정
- URL 제공 (YouTube, 음원)
- 방향 결정

---

## 🚫 안 해도 되는 것

- MDX 문법
- Git 명령어
- 파일 경로
- 배포 버튼
- 복사 붙여넣기

---

## 역할 분업

| 주체 | 역할 |
|------|------|
| 박씨 | 결정 / 승인 / 방향 |
| ChatGPT | 백서 구조화 / 설계 |
| Grok | YouTube 알고리즘 / 마케팅 |
| Claude | MDX 작성 / Git / 배포 |
| GitHub | 장기 기억 / 인쇄소 |

---

## 핵심 원칙

```
AI가 기억하는 게 아니다.
GitHub가 저장하고, AI는 읽어서 실행한다.
```

---

*이 문서는 내부 운영용입니다.*
