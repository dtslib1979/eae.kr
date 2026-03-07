import { Link, useParams } from 'react-router-dom';
import { getPostsByCategory } from '../utils/posts';

export default function Category() {
  const { slug } = useParams();
  const posts = getPostsByCategory(slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="text-slate-50/90 hover:text-slate-50 hover:underline transition-colors">&larr; Back to Home</Link>
      </div>
      
      <h1 className="text-4xl font-bold mb-8 capitalize text-slate-50">{slug}</h1>
      
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-slate-300">No posts in this category yet.</p>
        ) : (
          posts.map(post => (
            <Link
              key={post.slug}
              to={`/category/${slug}/${post.slug}`}
              className="dark-card block"
            >
              <h2 className="text-xl font-semibold mb-2 text-slate-50">{post.title || '(Untitled)'}</h2>
              <p className="text-sm" style={{ color: 'var(--elevator-dim)' }}>{post.date}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
