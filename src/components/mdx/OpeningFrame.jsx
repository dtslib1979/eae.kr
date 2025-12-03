export default function OpeningFrame({ src, title = "Opening Frame" }) {
  // Extract YouTube video ID if it's a YouTube URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = getYouTubeId(src);

  return (
    <div className="opening-frame my-8 rounded-lg overflow-hidden shadow-lg">
      {youtubeId ? (
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <img 
            src={src} 
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
      )}
    </div>
  );
}
