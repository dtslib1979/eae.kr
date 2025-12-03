export default function SpotifyEmbed({ track, title = "Music Track" }) {
  // Extract Spotify track ID from various URL formats
  const getSpotifyTrackId = (input) => {
    if (!input) return null;
    
    // If it's already just an ID
    if (input.match(/^[a-zA-Z0-9]{22}$/)) return input;
    
    // Extract from spotify:track:ID format
    if (input.startsWith('spotify:track:')) {
      return input.split(':')[2];
    }
    
    // Extract from URL format
    const match = input.match(/track\/([a-zA-Z0-9]{22})/);
    return match ? match[1] : null;
  };

  const trackId = getSpotifyTrackId(track);

  if (!trackId) {
    return (
      <div className="spotify-embed my-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-300">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🎵</span>
          <h3 className="text-xl font-bold text-green-800">Music Track</h3>
        </div>
        <p className="text-gray-600">Invalid Spotify track ID</p>
      </div>
    );
  }

  return (
    <div className="spotify-embed my-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-300 shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🎵</span>
        <h3 className="text-xl font-bold text-green-800">{title}</h3>
      </div>
      <iframe
        style={{ borderRadius: '12px' }}
        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
