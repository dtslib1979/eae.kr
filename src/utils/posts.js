// Import all MDX files
const modules = import.meta.glob('/src/content/**/*.mdx', { eager: true });

// Parse frontmatter from MDX modules
function parseFrontmatter(module) {
  const { frontmatter, default: Component } = module;
  return {
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

// Get category counts
export function getCategoryCounts() {
  const posts = getAllPosts();
  const counts = {};
  
  ['qsketch', 'penon', 'mal', 'patchtech', 'eml', 'phl', 'eae-blueprint'].forEach(cat => {
    counts[cat] = posts.filter(post => post.category === cat).length;
  });
  
  return counts;
}
