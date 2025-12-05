/**
 * Category definitions shared across the application
 * This ensures consistent category information across all pages
 */

export const CATEGORIES = [
  { 
    slug: 'eae-blueprint', 
    name: '🏗️ EAE Blueprint', 
    icon: '🏗️',
    // YouTube video for EAE Blueprint category card
    youtubeShorts: 'https://youtu.be/6T3mibse3Q4?si=bgubKNvV6LjEobqC'
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
