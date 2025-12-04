export default function SpotifyEmbed({ track, title, spotifyUrl, label }) {
  // Support both old (track) and new (spotifyUrl) prop names
  const url = spotifyUrl || track;
  const displayLabel = label || title || "Play on Spotify";

  if (!url) return null;

  // Normalize URL - if it's a track ID, convert to full URL
  const getSpotifyUrl = (input) => {
    if (!input) return null;
    
    // If it's already a full URL, validate it's a Spotify URL
    if (input.startsWith('http://') || input.startsWith('https://')) {
      try {
        const urlObj = new URL(input);
        // Only accept open.spotify.com URLs
        if (urlObj.hostname === 'open.spotify.com') {
          return input;
        }
      } catch (e) {
        // Invalid URL
        if (process.env.NODE_ENV === 'development') {
          console.warn('[SpotifyEmbed] Invalid URL:', input);
        }
      }
      return null;
    }
    
    // If it's a spotify: URI, convert to URL
    if (input.startsWith('spotify:track:')) {
      const trackId = input.split(':')[2];
      if (trackId && trackId.match(/^[a-zA-Z0-9]{22}$/)) {
        return `https://open.spotify.com/track/${trackId}`;
      }
      if (process.env.NODE_ENV === 'development') {
        console.warn('[SpotifyEmbed] Invalid spotify URI:', input);
      }
      return null;
    }
    
    // If it's just an ID (22 alphanumeric characters), build URL
    if (input.match(/^[a-zA-Z0-9]{22}$/)) {
      return `https://open.spotify.com/track/${input}`;
    }
    
    // Unknown format
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[SpotifyEmbed] Invalid Spotify track ID or URL:', input,
        '\nExpected format: https://open.spotify.com/track/TRACK_ID, spotify:track:TRACK_ID, or a 22-character track ID'
      );
    }
    return null;
  };

  const finalUrl = getSpotifyUrl(url);

  if (!finalUrl) return null;

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
