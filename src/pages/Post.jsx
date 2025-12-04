import { Link, useParams } from 'react-router-dom';
import { getPost } from '../utils/posts';
import OpeningFrame from '../components/mdx/OpeningFrame';
import SpotifyEmbed from '../components/mdx/SpotifyEmbed';

export default function Post() {
  const { slug, postSlug } = useParams();
  const post = getPost(slug, postSlug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <Link to="/" className="text-blue-500 hover:underline">Go back home</Link>
      </div>
    );
  }

  const { Component, title, date, category, youtube, spotify } = post;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to={`/category/${category}`} className="text-blue-500 hover:underline">
          &larr; Back to {category}
        </Link>
      </div>
      
      <article className="prose lg:prose-xl mx-auto max-w-4xl">
        {/* Auto-render OpeningFrame if youtube URL exists in frontmatter */}
        {youtube && <OpeningFrame src={youtube} title={title} />}
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{title || '(제목 없음)'}</h1>
          <p className="text-gray-600">{date}</p>
        </header>
        
        <div className="mt-8">
          <Component />
        </div>
        
        {/* Auto-render SpotifyEmbed if spotify URL exists in frontmatter */}
        {spotify && <SpotifyEmbed track={spotify} title={title ? `${title} - Music` : 'Music'} />}
      </article>
    </div>
  );
}
