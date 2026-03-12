import { Link } from 'react-router-dom';
import { CATEGORIES } from '../utils/categories';
import { getCategoryCounts } from '../utils/posts';

const CATEGORY_META = {
  'eae-blueprint': { icon: '🎨', desc: 'YouTube lecture structure & design', accent: 'var(--cat-blueprint)' },
  'qsketch': { icon: '✏️', desc: 'Quick visual sketches & ideas', accent: 'var(--cat-qsketch)' },
  'penon': { icon: '🖊️', desc: 'Written essays & reflections', accent: 'var(--cat-penon)' },
  'mal': { icon: '💬', desc: 'Language & communication', accent: 'var(--cat-mal)' },
  'patchtech': { icon: '🔧', desc: 'Technical patches & solutions', accent: 'var(--cat-patchtech)' },
  'eml': { icon: '📧', desc: 'Email-style messages & letters', accent: 'var(--cat-eml)' },
  'phl': { icon: '🧠', desc: 'Philosophy & deep thinking', accent: 'var(--cat-phl)' },
};

export default function FloorCurriculum() {
  const counts = getCategoryCounts();

  return (
    <>
      <header className="floor-header">
        <span className="floor-badge">B1</span>
        <h2 className="floor-title">Curriculum</h2>
        <p className="floor-desc">Content Categories</p>
      </header>

      <div className="curriculum-grid">
        {CATEGORIES.map(cat => {
          const meta = CATEGORY_META[cat.slug] || { icon: '📄', desc: '', accent: 'var(--elevator-accent)' };
          return (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="curriculum-card"
              style={{ '--card-accent': meta.accent }}
            >
              <span className="card-icon">{meta.icon}</span>
              <div className="card-info">
                <h3 className="card-name">{cat.name}</h3>
                <p className="card-desc">{meta.desc}</p>
              </div>
              <span className="card-count">{counts[cat.slug] || 0}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
