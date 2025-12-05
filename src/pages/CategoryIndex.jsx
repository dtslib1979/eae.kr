import { Link } from 'react-router-dom';
import { getCategoryCounts } from '../utils/posts';
import { CATEGORIES } from '../utils/categories';

export default function CategoryIndex() {
  const counts = getCategoryCounts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="text-slate-50/90 hover:text-slate-50 hover:underline transition-colors">&larr; Back to Home</Link>
      </div>
      
      <h1 className="text-4xl font-bold mb-8 text-slate-50">Categories</h1>
      
      <ul className="space-y-4">
        {CATEGORIES.map((cat) => (
          <li key={cat.slug}>
            <Link
              to={`/category/${cat.slug}`}
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-slate-900">{cat.name}</h2>
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {counts[cat.slug] || 0} posts
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
