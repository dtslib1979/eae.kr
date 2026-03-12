// src/lib/date.ts
const GRACE_HOURS = 24; // 24시간 이내 미래는 허용

/**
 * 게시물이 "지금 기준으로 보이는 상태"인지 판정한다.
 * - dateString 형식은 'YYYY-MM-DD' 라고 가정
 * - KST 기준으로 하루 정도 앞선 미래까지는 공개
 * - 그보다 훨씬 미래(예약 글)는 숨김 처리
 */
export function isPostVisible(dateString?: string, now: Date = new Date()): boolean {
  if (!dateString) return true;

  // Parse 'YYYY-MM-DD' as local midnight
  const postDate = new Date(`${dateString}T00:00:00`);
  
  // Calculate the difference in hours
  const diffMs = postDate.getTime() - now.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);
  
  // Post is visible if it's not more than GRACE_HOURS in the future
  // (past posts and near-future posts within grace period are visible)
  return diffHours <= GRACE_HOURS;
}
