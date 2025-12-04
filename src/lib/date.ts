// src/lib/date.ts
const KST_OFFSET_MS = 9 * 60 * 60 * 1000;
const GRACE_HOURS = 24; // 24시간 이내 미래는 허용

/**
 * 게시물이 "지금 기준으로 보이는 상태"인지 판정한다.
 * - dateString 형식은 'YYYY-MM-DD' 라고 가정
 * - KST 기준으로 하루 정도 앞선 미래까지는 공개
 * - 그보다 훨씬 미래(예약 글)는 숨김 처리
 */
export function isPostVisible(dateString?: string, now: Date = new Date()): boolean {
  if (!dateString) return true;

  // 'YYYY-MM-DD' 를 로컬 날짜로 파싱
  const localDate = new Date(`${dateString}T00:00:00`);

  // KST 기준 정렬/비교를 위해 UTC ms 보정
  const postUtcMs = localDate.getTime() - KST_OFFSET_MS;
  const nowUtcMs = now.getTime();

  const diffHours = (postUtcMs - nowUtcMs) / (1000 * 60 * 60);

  // 핵심: 24시간 이내의 미래는 이미 공개된 글로 취급
  return diffHours <= GRACE_HOURS;
}
