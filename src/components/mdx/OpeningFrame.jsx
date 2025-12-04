import { YouTubeEmbed } from '../YouTubeEmbed';

export default function OpeningFrame({ src, videoId, title = "Opening Frame", description }) {
  // Extract YouTube video ID from various URL formats or use videoId prop
  const getYouTubeId = (url) => {
    if (!url) return null;
    try {
      // Pattern matches: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID, etc.
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    } catch (error) {
      console.error('Error parsing YouTube URL:', error);
      return null;
    }
  };

  // Priority: videoId prop > extracted from src
  // Filter out empty strings by treating them as falsy
  const cleanVideoId = (videoId && typeof videoId === 'string' && videoId.trim() !== '') ? videoId : null;
  const cleanSrc = (src && typeof src === 'string' && src.trim() !== '') ? src : null;
  const youtubeId = cleanVideoId || getYouTubeId(cleanSrc);

  // If no valid video ID or src, don't render anything (graceful degradation)
  if (!youtubeId && !cleanSrc) {
    return null;
  }

  return (
    <div className="opening-frame my-8 rounded-lg overflow-hidden shadow-lg">
      {youtubeId ? (
        <YouTubeEmbed 
          url={`https://www.youtube.com/watch?v=${youtubeId}`}
          title={title}
        />
      ) : cleanSrc ? (
        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <img 
            src={cleanSrc} 
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const fallback = document.createElement('div');
              fallback.className = 'text-white text-2xl font-bold';
              fallback.textContent = 'Opening Frame';
              e.target.parentElement.replaceChild(fallback, e.target);
            }}
          />
        </div>
      ) : null}
      {description && (
        <div className="p-4 bg-gray-50 text-gray-700 text-sm">
          {description}
        </div>
      )}
    </div>
  );
}
