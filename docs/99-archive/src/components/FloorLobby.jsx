import { Link } from 'react-router-dom';
import { getLatestPosts, getCategoryCounts } from '../utils/posts';
import { CATEGORIES } from '../utils/categories';

export default function FloorLobby({ onNavigate }) {
  const latestPosts = getLatestPosts(4);
  const counts = getCategoryCounts();
  const totalPosts = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <>
      <header className="lobby-header">
        <div className="station-masthead">
          <div className="on-air-badge">
            <span className="on-air-dot"></span>
            ON AIR
          </div>
          <h1 className="station-title">EDU x ART x<br />ENGINEER</h1>
          <p className="station-tagline">Beyond AI — Spirit, Intellect, Emotion</p>
        </div>
      </header>

      {/* Latest Episodes */}
      <section className="news-carousel">
        <div className="carousel-header">
          <h2 className="carousel-title">Latest Episodes</h2>
        </div>

        <div className="carousel-track">
          {latestPosts.map((post, i) => (
            <Link
              key={`${post.category}-${post.slug}`}
              to={`/category/${post.category}/${post.slug}`}
              className={`news-card${i === 0 ? ' featured' : ''}`}
            >
              <span className="news-tag">{post.category}</span>
              <h3 className="news-title">{post.title}</h3>
              {post.description && (
                <p className="news-excerpt">{post.description}</p>
              )}
              <time className="news-date">{post.date}</time>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section className="quick-access">
        <h2 className="section-label">Quick Access</h2>
        <div className="quick-grid">
          <div className="quick-card" onClick={() => onNavigate('curriculum')}>
            <span className="quick-icon">📺</span>
            <span className="quick-name">Curriculum</span>
            <span className="quick-count">{CATEGORIES.length} Categories</span>
          </div>
          <div className="quick-card" onClick={() => onNavigate('library')}>
            <span className="quick-icon">📚</span>
            <span className="quick-name">Library</span>
            <span className="quick-count">{totalPosts} Posts</span>
          </div>
          <Link to="/archive" className="quick-card">
            <span className="quick-icon">🗂️</span>
            <span className="quick-name">Archive</span>
            <span className="quick-count">Full Index</span>
          </Link>
          <a
            href="https://www.youtube.com/@BeingEduartEngineer-4"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-card"
          >
            <span className="quick-icon">▶️</span>
            <span className="quick-name">YouTube</span>
            <span className="quick-count">↗</span>
          </a>
        </div>
      </section>

      <footer className="lobby-footer">
        <p className="footer-philosophy">Beyond AI — Spirit, Intellect, Emotion</p>
        <p className="footer-copy">&copy; 2026 EAE Broadcasting &middot; DTSLIB Media</p>
      </footer>
    </>
  );
}
