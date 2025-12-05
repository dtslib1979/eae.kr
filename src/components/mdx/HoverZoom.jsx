import { useState } from 'react';

export default function HoverZoom({ children, scale = 1.03 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mdx-zoom-target"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? `scale(${scale})` : 'scale(1)',
        transition: 'transform 0.22s ease-out 0.45s',
        cursor: 'default',
      }}
    >
      {children}
    </div>
  );
}
