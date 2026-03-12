import { Link } from 'react-router-dom';
import { getPublishedPosts } from '../utils/posts';

export default function FloorLibrary() {
  const posts = getPublishedPosts();

  // Group by category
  const grouped = posts.reduce((acc, post) => {
    if (!acc[post.category]) acc[post.category] = [];
    acc[post.category].push(post);
    return acc;
  }, {});

  return (
    <>
      <header className="floor-header">
        <span className="floor-badge">B2</span>
        <h2 className="floor-title">Library</h2>
        <p className="floor-desc">All Published Content</p>
      </header>

      {Object.entries(grouped).map(([category, categoryPosts]) => (
        <div key={category} className="library-section">
          <h3 className="library-section-title">{category}</h3>
          <div className="library-list">
            {categoryPosts.map(post => (
              <Link
                key={`${post.category}-${post.slug}`}
                to={`/category/${post.category}/${post.slug}`}
                className="library-item"
              >
                <div>
                  <h4 className="library-item-title">{post.title}</h4>
                </div>
                <div className="library-item-meta">
                  <span className="library-item-category">{post.category}</span>
                  <time className="library-item-date">{post.date}</time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {posts.length === 0 && (
        <p style={{ color: 'var(--elevator-dim)', textAlign: 'center', padding: '3rem 0' }}>
          No published content yet.
        </p>
      )}
    </>
  );
}
