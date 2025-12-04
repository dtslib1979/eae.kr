/**
 * posts.js - Single Source of Truth for MDX Content
 * 
 * This file is responsible for loading and providing access to all MDX posts in the application.
 * It automatically discovers MDX files in src/content/** and extracts their metadata.
 * 
 * Category determination:
 * - The category is extracted from the folder structure (src/content/<category>/post.mdx)
 * - The folder name becomes the category slug
 * - All posts and counts are dynamically calculated from the actual MDX files
 * 
 * To add a new category:
 * 1. Create a new folder in src/content/<new-category>/
 * 2. Add MDX files with proper frontmatter (title, date, category)
 * 3. Optionally include youtube/spotify URLs in frontmatter for automatic preset rendering
 * 4. The category will automatically appear in the home page, archive, and category pages
 * 
 * Frontmatter structure:
 * ---
 * title: "Post Title"
 * date: "YYYY-MM-DD"
 * category: "category-slug"
 * youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX" (optional)
 * spotify: "https://open.spotify.com/track/YYYYYYYYYYYYYY" (optional)
 * ---
 */

// Import all MDX files
const modules = import.meta.glob('/src/content/**/*.mdx', { eager: true });

// Parse frontmatter from MDX modules
// Ensures all required fields have fallback values
function parseFrontmatter(module) {
  const { frontmatter, default: Component } = module;
  return {
    title: frontmatter?.title || '',
    date: frontmatter?.date || '',
    category: frontmatter?.category || '',
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
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Get posts by category
export function getPostsByCategory(category) {
  return getAllPosts().filter(post => post.category === category);
}

// Get latest posts (limit)
export function getLatestPosts(limit = 3) {
  return getAllPosts().slice(0, limit);
}

// Get post by slug and category
export function getPost(category, slug) {
  return getAllPosts().find(post => post.category === category && post.slug === slug);
}

// Get category counts (dynamically calculated from all posts)
export function getCategoryCounts() {
  const posts = getAllPosts();
  const counts = {};
  
  // Dynamically count posts per category
  posts.forEach(post => {
    if (post.category) {
      counts[post.category] = (counts[post.category] || 0) + 1;
    }
  });
  
  return counts;
}
