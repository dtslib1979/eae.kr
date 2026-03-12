import { useEffect, useRef } from "react";

// Scroll configuration constants
const SCROLL_DISTANCE_PX = 64; // Pixels to scroll per interval
const SCROLL_INTERVAL_MS = 50; // Milliseconds between scroll updates

/**
 * BlindScrollHandle - An invisible touch zone for auto-scrolling content upward
 * 
 * Used primarily for tablet handwriting/recording sessions where the instructor
 * needs to scroll content without visible UI elements appearing in the video.
 * 
 * The handle is positioned on the left side at mid-height. When pressed and held,
 * it continuously scrolls the page upward (content moves up) until released.
 */
export function BlindScrollHandle() {
  const timerRef = useRef(null);

  // Server-side rendering guard
  if (typeof window === "undefined") {
    return null;
  }

  const startScroll = () => {
    if (typeof window === "undefined") return;
    if (timerRef.current !== null) return; // Already scrolling
    
    timerRef.current = window.setInterval(() => {
      window.scrollBy({ top: SCROLL_DISTANCE_PX, left: 0, behavior: "auto" });
    }, SCROLL_INTERVAL_MS);
  };

  const stopScroll = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Clean up interval on unmount
  useEffect(() => {
    return () => stopScroll();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-1/2 -translate-y-1/2 w-14 h-40 z-40"
      style={{ 
        background: "transparent",
        pointerEvents: "auto"
      }}
      onPointerDown={startScroll}
      onPointerUp={stopScroll}
      onPointerLeave={stopScroll}
      onPointerCancel={stopScroll}
    />
  );
}
