import { Link, useParams } from 'react-router-dom';
import { getPost } from '../utils/posts';
import OpeningFrame from '../components/mdx/OpeningFrame';
import SpotifyEmbed from '../components/mdx/SpotifyEmbed';
import { ScrollBlindButton } from '../components/ui/ScrollBlindButton';

export default function Post() {
  const { slug, postSlug } = useParams();
  const post = getPost(slug, postSlug);

  // Check if teacher scroll is enabled via environment variable
  const teacherScrollEnabled =
    typeof import.meta !== "undefined" &&
    import.meta.env.VITE_TEACHER_SCROLL === "1";

  // Return 404 if post not found or unpublished
  if (!post || post.published === false) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <Link to="/" className="text-blue-500 hover:underline">Go back home</Link>
      </div>
    );
  }

  const { Component, title, date, category, youtube, spotify } = post;

  // Extract URL from youtube/spotify if they are objects, with fallback
  const youtubeUrl = youtube?.url ?? youtube ?? "";
  const spotifyUrl = spotify?.url ?? spotify ?? "";

  return (
    <>
      {/* Render ScrollBlindButton for teacher/recording mode */}
      {teacherScrollEnabled && (
        <>
          <ScrollBlindButton direction="up" debug={false} />
          <ScrollBlindButton direction="down" debug={false} />
        </>
      )}
      
      <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to={`/category/${category}`} className="text-slate-50/90 hover:text-slate-50 hover:underline transition-colors">
          &larr; Back to {category}
        </Link>
      </div>
      
      <article className="px-4 py-6 md:px-8">
        {/* Auto-render OpeningFrame if youtube URL exists in frontmatter */}
        {youtubeUrl && <OpeningFrame src={youtubeUrl} title={title} />}
        
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-50">{title || '(제목 없음)'}</h1>
          <p className="text-sm text-slate-300 mb-6">{date}</p>
        </header>
        
        <div className="mdx-content prose prose-invert max-w-none">
          <Component />
        </div>
        
        {/* Auto-render SpotifyEmbed if spotify URL exists in frontmatter */}
        {spotifyUrl && <SpotifyEmbed track={spotifyUrl} title={title ? `${title} - Music` : 'Music'} />}
      </article>
    </div>
    </>
  );
}
