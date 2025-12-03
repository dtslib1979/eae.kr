import { Link } from 'react-router-dom';
import { getCategoryCounts, getLatestPosts } from '../utils/posts';

const categories = [
  { slug: 'eae-blueprint', name: '🏗️ EAE Blueprint', icon: '🏗️' },
  { slug: 'qsketch', name: 'Quick Sketch' },
  { slug: 'penon', name: 'Penon' },
  { slug: 'mal', name: 'Mal' },
  { slug: 'patchtech', name: 'Patchtech' },
  { slug: 'eml', name: 'EML' },
  { slug: 'phl', name: 'PHL' },
];

export default function Home() {
  const counts = getCategoryCounts();
  const latestPosts = getLatestPosts(3);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">EAE</h1>
      
      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map(category => (
          <Link
            key={category.slug}
            to={`/category/${category.slug}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {counts[category.slug] || 0}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Latest Posts */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
        <div className="space-y-4">
          {latestPosts.map(post => (
            <Link
              key={`${post.category}-${post.slug}`}
              to={`/category/${post.category}/${post.slug}`}
              className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.category}</p>
                </div>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
