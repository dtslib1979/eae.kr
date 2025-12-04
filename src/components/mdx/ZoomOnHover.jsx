import { useRef } from 'react';

/**
 * ZoomOnHover component for subtle zoom effect on hover
 * Used during chalkboard-style lectures to enhance readability
 * When user hovers with pen/mouse, text zooms in after a delay
 * 
 * Usage in MDX:
 * <ZoomOnHover>
 *   <p>This paragraph will zoom when hovered</p>
 * </ZoomOnHover>
 * 
 * Props:
 * - delayMs: delay before zoom activates (default: 700ms)
 * - children: React content to wrap
 */
export default function ZoomOnHover({
  children,
  delayMs = 700,
}) {
  const ref = useRef(null);
  const timer = useRef(null);

  const handleEnter = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      ref.current?.classList.add('zoomed');
    }, delayMs);
  };

  const handleLeave = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = null;
    ref.current?.classList.remove('zoomed');
  };

  return (
    <div
      ref={ref}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      className="zoom-hover-target"
    >
      {children}
    </div>
  );
}
