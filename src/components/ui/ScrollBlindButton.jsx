import { useEffect, useRef } from "react";

/**
 * ScrollBlindButton - An invisible touch zone for bidirectional auto-scrolling
 * 
 * Used primarily for tablet handwriting/recording sessions where the instructor
 * needs to scroll content without visible UI elements appearing in the video.
 * 
 * Features:
 * - Completely transparent (opacity-0) unless debug mode is enabled
 * - Supports both up and down scrolling
 * - Smooth scrolling behavior
 * - Positioned on the left side
 * - Works with pointer events (pen/touch/mouse)
 * 
 * @param {Object} props
 * @param {"up" | "down"} props.direction - Scroll direction
 * @param {number} [props.step=40] - Pixels to scroll per tick
 * @param {number} [props.intervalMs=80] - Milliseconds between scroll ticks
 * @param {boolean} [props.debug=false] - Show semi-transparent red box for debugging
 */
export function ScrollBlindButton({
  direction,
  step = 40,
  intervalMs = 80,
  debug = false,
}) {
  const timerRef = useRef(null);

  const clear = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const start = () => {
    clear();
    const delta = direction === "down" ? step : -step;
    timerRef.current = window.setInterval(() => {
      window.scrollBy({ top: delta, left: 0, behavior: "smooth" });
    }, intervalMs);
  };

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  // Position buttons vertically - each occupies exactly 1/3 of screen height:
  // - "up" button: from top-0 to top-1/3 (first third of screen)
  // - "down" button: from top-1/3 to top-2/3 (second third of screen)
  const positionClasses = direction === "up" 
    ? ["top-0", "h-1/3"]
    : ["top-1/3", "h-1/3"];

  return (
    <button
      type="button"
      aria-hidden="true"
      onPointerDown={start}
      onPointerUp={clear}
      onPointerLeave={clear}
      onPointerCancel={clear}
      className={[
        "fixed",
        "left-0",
        ...positionClasses,
        "w-10",           // ~40px wide
        "z-50",
        "bg-transparent",
        "border-none",
        "p-0",
        "m-0",
        "outline-none",
        "touch-none",
        debug ? (direction === "up" ? "bg-blue-500/20" : "bg-red-500/20") : "opacity-0",
      ].join(" ")}
    >
      {/* Screen reader only - nothing visible on screen */}
      <span className="sr-only">
        {direction === "down" ? "Scroll down" : "Scroll up"}
      </span>
    </button>
  );
}
