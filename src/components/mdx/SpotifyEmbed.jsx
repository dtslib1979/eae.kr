export default function SpotifyEmbed({ track, title, spotifyUrl, label }) {
  // Support both old (track) and new (spotifyUrl) prop names
  const url = spotifyUrl || track;
  const displayLabel = label || title || "Play on Spotify";

  if (!url) return null;

  // Normalize URL - if it's a track ID, convert to full URL
  const getSpotifyUrl = (input) => {
    if (!input) return null;
    
    // If it's already a full URL, return as-is
    if (input.startsWith('http://') || input.startsWith('https://')) {
      return input;
    }
    
    // If it's a spotify: URI, convert to URL
    if (input.startsWith('spotify:track:')) {
      const trackId = input.split(':')[2];
      return `https://open.spotify.com/track/${trackId}`;
    }
    
    // If it's just an ID (22 alphanumeric characters), build URL
    if (input.match(/^[a-zA-Z0-9]{22}$/)) {
      return `https://open.spotify.com/track/${input}`;
    }
    
    return input; // Return as-is if format is unknown
  };

  const finalUrl = getSpotifyUrl(url);

  return (
    <div className="my-4 w-full flex justify-center">
      <a
        href={finalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
      >
        {/* 아이콘 느낌 (텍스트로 처리, SVG 넣어도 됨) */}
        <span className="text-base">▶</span>
        <span>{displayLabel}</span>
      </a>
    </div>
  );
}
