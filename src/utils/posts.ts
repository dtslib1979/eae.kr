/**
 * posts.ts - Single Source of Truth for MDX Content
 * 
 * This file is responsible for loading and providing access to all MDX posts in the application.
 * It automatically discovers MDX files in src/content/** and extracts their metadata.
 * 
 * Category determination:
 * - The category is extracted from the folder structure (src/content/<category>/post.mdx)
 * - The folder name becomes the category slug
 * - All posts and counts are dynamically calculated from the actual MDX files
 * 
 * Published status:
 * - Posts with published: false are hidden from all lists and counts
 * - Posts without a published field are treated as published: true by default
 * - Posts with dates more than 24 hours in the future (KST) are hidden
 * - Direct access to unpublished posts should be handled at the page level (404)
 * 
 * To add a new category:
 * 1. Create a new folder in src/content/<new-category>/
 * 2. Add MDX files with proper frontmatter (title, date, category, published)
 * 3. Optionally include youtube/spotify URLs in frontmatter for automatic preset rendering
 * 4. The category will automatically appear in the home page, archive, and category pages
 * 
 * Frontmatter structure:
 * ---
 * title: "Post Title"
 * date: "YYYY-MM-DD"
 * category: "category-slug"
 * published: true  # or false to hide from lists
 * youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX" (optional)
 * spotify: "https://open.spotify.com/track/YYYYYYYYYYYYYY" (optional)
 * ---
 */

import { isPostVisible } from '../lib/date';

// Type definition for MDX module
interface MDXModule {
  frontmatter?: Record<string, any>;
  default: any;
}

// Import all MDX files
const modules = import.meta.glob('/src/content/**/*.mdx', { eager: true });

// Parse frontmatter from MDX modules
// Ensures all required fields have fallback values
function parseFrontmatter(module: MDXModule) {
  const { frontmatter, default: Component } = module;
  return {
    title: frontmatter?.title || '',
    date: frontmatter?.date || '',
    category: frontmatter?.category || '',
    published: frontmatter?.published !== false, // Default to true if not specified
    youtube: frontmatter?.youtube || null,
    spotify: frontmatter?.spotify || null,
    ...frontmatter,
    Component,
  };
}

// Get all posts
export function getAllPosts() {
  const posts = Object.entries(modules).map(([path, module]) => {
    const slug = path.split('/').pop().replace('.mdx', '');
    const category = path.split('/').slice(-2, -1)[0];
    return {
      slug,
      category,
      path,
      ...parseFrontmatter(module),
    };
  });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get all published posts (filters out unpublished posts and future posts beyond grace period)
export function getPublishedPosts() {
  return getAllPosts().filter(post => 
    post.published !== false && isPostVisible(post.date)
  );
}

// Get posts by category (only published posts)
export function getPostsByCategory(category: string) {
  return getPublishedPosts().filter(post => post.category === category);
}

// Get latest posts (limit) - only published posts
export function getLatestPosts(limit = 3) {
  return getPublishedPosts().slice(0, limit);
}

// Get post by slug and category
export function getPost(category: string, slug: string) {
  return getAllPosts().find(post => post.category === category && post.slug === slug);
}

// Get category counts (dynamically calculated from published posts only)
export function getCategoryCounts() {
  const posts = getPublishedPosts();
  const counts: Record<string, number> = {};
  
  // Dynamically count posts per category
  posts.forEach(post => {
    if (post.category) {
      counts[post.category] = (counts[post.category] || 0) + 1;
    }
  });
  
  return counts;
}
