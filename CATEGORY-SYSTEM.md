# Category System Documentation

## Overview

The EAE.kr website uses an automatic category system that discovers and organizes all MDX content files based on their folder structure. All 7 content folders are treated equally with the same rules for automatic rollup and deployment.

## Categories

The following 7 categories are available:

1. **eae-blueprint** - EAE Blueprint
2. **eml** - EML
3. **mal** - MAL
4. **patchtech** - PatchTech
5. **penon** - Penon
6. **phl** - PHL
7. **qsketch** - QSketch

## How It Works

### Automatic Discovery

The system uses Vite's `import.meta.glob` to automatically discover all `.mdx` files in the `src/content/` directory:

```javascript
const modules = import.meta.glob('/src/content/**/*.mdx', { eager: true });
```

### Category Detection

Categories are automatically extracted from the folder structure:
- File: `src/content/qsketch/my-post.mdx`
- Category: `qsketch`
- Slug: `my-post`

### URL Structure

- **Category Index**: `/category` - Shows all 7 categories
- **Category List**: `/category/{category-name}` - Shows all published posts in that category
- **Individual Post**: `/category/{category-name}/{post-slug}` - Shows the full post

## Adding New Content

### 1. Create an MDX File

Add your `.mdx` file to the appropriate category folder:

```
src/content/{category-name}/your-post-name.mdx
```

### 2. Required Frontmatter

Every MDX file must have these required fields in the frontmatter:

```yaml
---
title: "Your Post Title"
date: "2025-12-05"
category: "category-name"  # Must match the folder name
published: true  # or false to hide from lists
---
```

### 3. Optional Frontmatter Fields

```yaml
---
title: "Your Post Title"
date: "2025-12-05"
category: "category-name"
published: true
youtube:
  url: "https://youtube.com/embed/VIDEO_ID"
  autoplay: true
spotify:
  url: "https://open.spotify.com/track/TRACK_ID"
  mode: "button"
tags:
  - "tag1"
  - "tag2"
summary: "Brief description of your post"
---
```

### 4. Automatic Deployment

Once you commit your changes:
1. The file is automatically discovered by the build system
2. It appears in the category list at `/category/{category-name}`
3. It's accessible at `/category/{category-name}/{post-slug}`
4. The post count on the home page updates automatically

## Publishing Control

### Draft Posts

Set `published: false` in frontmatter to hide posts from lists:

```yaml
---
title: "Draft Post"
date: "2025-12-05"
category: "qsketch"
published: false  # This post won't appear in lists
---
```

Draft posts:
- Don't appear in category lists
- Don't appear in the latest posts section
- Don't count toward category totals
- Can still be accessed directly if you know the URL

### Future Posts

Posts with dates more than 24 hours in the future (KST timezone) are automatically hidden from lists until their publish date.

## Category Frontmatter Rules

**IMPORTANT**: The `category` field in frontmatter must match the folder name exactly:

✅ **Correct**:
- File: `src/content/phl/my-post.mdx`
- Frontmatter: `category: "phl"`

❌ **Incorrect**:
- File: `src/content/phl/my-post.mdx`
- Frontmatter: `category: "eae-blueprint"` ← Wrong category!

The system uses the `category` field from frontmatter, not the folder path, so they must match.

## Example: Adding a New Post

1. Create file: `src/content/qsketch/my-sketch.mdx`

```yaml
---
title: "My Amazing Sketch"
date: "2025-12-05"
category: "qsketch"
published: true
tags:
  - "sketch"
  - "art"
summary: "A quick sketch about..."
---

# My Amazing Sketch

Your content here...
```

2. Commit and push:
```bash
git add src/content/qsketch/my-sketch.mdx
git commit -m "Add new qsketch post: My Amazing Sketch"
git push
```

3. After deployment:
- View category list: https://eae.kr/category/qsketch
- View post: https://eae.kr/category/qsketch/my-sketch

## Technical Details

### File: `src/utils/posts.ts`

This is the single source of truth for MDX content. It provides:

- `getAllPosts()` - Get all posts (including unpublished)
- `getPublishedPosts()` - Get only published, visible posts
- `getPostsByCategory(category)` - Get posts for a specific category
- `getLatestPosts(limit)` - Get recent published posts
- `getPost(category, slug)` - Get a specific post
- `getCategoryCounts()` - Get post counts per category

### Routing: `src/App.jsx`

```jsx
<Route path="category" element={<CategoryIndex />} />
<Route path="category/:slug" element={<Category />} />
<Route path="category/:slug/:postSlug" element={<Post />} />
```

### Pages

- `src/pages/CategoryIndex.jsx` - Shows all 7 categories with counts
- `src/pages/Category.jsx` - Shows posts for a specific category
- `src/pages/Post.jsx` - Renders individual MDX post
- `src/pages/Home.jsx` - Shows categories and latest posts

## Maintenance

### Checking Post Status

To see which posts are published/unpublished in each category:

```bash
for cat in eae-blueprint eml mal patchtech penon phl qsketch; do
  echo "=== $cat ==="
  grep -l "published: false" src/content/$cat/*.mdx | wc -l | xargs echo "  Unpublished:"
  echo "  Total: $(ls src/content/$cat/*.mdx | wc -l)"
done
```

### Verifying Category Frontmatter

To check if any posts have incorrect category frontmatter:

```bash
for dir in src/content/*/; do
  folder=$(basename "$dir")
  echo "=== Checking $folder ==="
  for file in "$dir"*.mdx; do
    category=$(grep "^category:" "$file" | sed 's/category: *"\?\([^"]*\)"\?/\1/')
    if [ "$category" != "$folder" ]; then
      echo "  ❌ $(basename $file): category='$category' (should be '$folder')"
    fi
  done
done
```

## Troubleshooting

### Post not appearing in category list?

1. Check frontmatter has `published: true` (or no published field)
2. Check date is not more than 24 hours in the future
3. Check category field matches folder name exactly
4. Rebuild the site: `npm run build`

### Wrong category showing for a post?

1. Open the MDX file
2. Check the `category` field in frontmatter
3. Ensure it matches the folder name
4. Rebuild: `npm run build`

### Post accessible directly but not in list?

This is expected behavior for:
- Posts with `published: false`
- Posts with future dates beyond the grace period
