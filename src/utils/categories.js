/**
 * Category definitions shared across the application
 * This ensures consistent category information across all pages
 */

export const CATEGORIES = [
  {
    slug: 'eae-blueprint',
    name: '🎨 EAE Univ.',
    icon: '🎨',
    // 이 카테고리는 EAE Univ. YouTube 채널의 설계 백엔드
    // 단독 콘텐츠 ❌ → YouTube 영상에 종속된 설계/구조 문서
    youtubeChannel: 'https://youtube.com/@EAE-University',
    youtubeShorts: 'https://youtu.be/6T3mibse3Q4?si=bgubKNvV6LjEobqC',
    rules: {
      requiresYouTubeLink: true,  // 반드시 YouTube 영상 링크 포함
      requiresPart123: true,       // Part1/2/3 구조 필수
      standalonePublish: false     // 단독 발행 금지
    }
  },
  { slug: 'qsketch', name: 'Quick Sketch' },
  { slug: 'penon', name: 'Penon' },
  { slug: 'mal', name: 'Mal' },
  { slug: 'patchtech', name: 'Patchtech' },
  { slug: 'eml', name: 'EML' },
  { slug: 'phl', name: 'PHL' },
];

// Get simple title for a category (without emoji/icon)
export function getCategoryTitle(slug) {
  const category = CATEGORIES.find(cat => cat.slug === slug);
  return category?.name || slug;
}
