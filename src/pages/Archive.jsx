import { Link } from 'react-router-dom';
import { getPublishedPosts } from '../utils/posts';

export default function Archive() {
  const posts = getPublishedPosts();

  // Group posts by category
  const postsByCategory = posts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="text-slate-50/90 hover:text-slate-50 hover:underline transition-colors">&larr; Back to Home</Link>
      </div>
      
      <h1 className="text-4xl font-bold mb-8 text-slate-50">Archive</h1>
      
      <div className="space-y-8">
        {Object.entries(postsByCategory).map(([category, categoryPosts]) => (
          <div key={category}>
            <h2 className="text-2xl font-bold mb-4 capitalize text-slate-50">{category}</h2>
            <div className="space-y-2">
              {categoryPosts.map(post => (
                <Link
                  key={`${post.category}-${post.slug}`}
                  to={`/category/${post.category}/${post.slug}`}
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
