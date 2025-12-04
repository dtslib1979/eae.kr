import { Link, useParams } from 'react-router-dom';
import { getPostsByCategory } from '../utils/posts';

export default function Category() {
  const { slug } = useParams();
  const posts = getPostsByCategory(slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Home</Link>
      </div>
      
      <h1 className="text-4xl font-bold mb-8 capitalize">{slug}</h1>
      
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-600">No posts in this category yet.</p>
        ) : (
          posts.map(post => (
            <Link
              key={post.slug}
              to={`/category/${slug}/${post.slug}`}
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title || '(제목 없음)'}</h2>
              <p className="text-gray-600">{post.date}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
