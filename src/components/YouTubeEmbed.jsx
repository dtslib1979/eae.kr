// src/components/YouTubeEmbed.jsx
import { useState } from "react";

function normalizeYouTubeUrl(input) {
  if (!input) return null;

  try {
    // Shorts, watch, embed 모두 처리
    // 예:
    // https://youtube.com/shorts/MEGM9SO6QPg?si=...
    // https://www.youtube.com/watch?v=MEGM9SO6QPg
    // https://www.youtube.com/embed/MEGM9SO6QPg
    const url = new URL(input);
    let videoId = null;

    if (url.pathname.startsWith("/shorts/")) {
      videoId = url.pathname.split("/shorts/")[1].split("/")[0];
    } else if (url.pathname === "/watch") {
      videoId = url.searchParams.get("v");
    } else if (url.pathname.startsWith("/embed/")) {
      videoId = url.pathname.split("/embed/")[1].split("/")[0];
    }

    if (!videoId) return null;

    const base = `https://www.youtube.com/embed/${videoId}`;
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      loop: "1",
      playlist: videoId,
      controls: "0",
      modestbranding: "1",
      playsinline: "1",
      fs: "0",
      disablekb: "1",
      iv_load_policy: "3",
      rel: "0",
    });

    return `${base}?${params.toString()}`;
  } catch {
    return null;
  }
}

export function YouTubeEmbed({ url, title = "YouTube video", className = "" }) {
  const [loaded, setLoaded] = useState(false);
  const embedUrl = normalizeYouTubeUrl(url);

  if (!embedUrl) return null;

  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border border-soft bg-card aspect-video " +
        (loaded ? "opacity-100" : "opacity-0") +
        " transition-opacity duration-150 pointer-events-none " +
        className
      }
    >
      <iframe
        src={embedUrl}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        onLoad={() => setLoaded(true)}
        frameBorder="0"
      />
    </div>
  );
}
