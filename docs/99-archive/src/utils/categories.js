/**
 * Category definitions shared across the application
 * This ensures consistent category information across all pages
 */

export const CATEGORIES = [
  {
    slug: 'eae-blueprint',
    name: 'EAE Univ.',
    youtubeChannel: 'https://youtube.com/@EAE-University',
    youtubeShorts: 'https://youtu.be/6T3mibse3Q4?si=bgubKNvV6LjEobqC',
    rules: {
      requiresYouTubeLink: true,
      requiresPart123: true,
      standalonePublish: false
    }
  },
  // 4대 카테고리
  {
    slug: 'editorial',
    name: 'Editorial Technique',
    parent: null,
    youtubeChannel: 'https://www.youtube.com/@BeingEduartEngineer-4',
  },
  {
    slug: 'operational',
    name: 'Operational Technique',
    youtubeChannel: 'https://www.youtube.com/@BeingEduartEngineer-4',
  },
  {
    slug: 'channeling',
    name: 'Channeling Technique',
    youtubeChannel: 'https://www.youtube.com/@BeingEduartEngineer-4',
  },
  {
    slug: 'survival',
    name: 'Survival Technique',
    youtubeChannel: 'https://www.youtube.com/@BeingEduartEngineer-4',
  },
];

// Get simple title for a category (without emoji/icon)
export function getCategoryTitle(slug) {
  const category = CATEGORIES.find(cat => cat.slug === slug);
  return category?.name || slug;
}
