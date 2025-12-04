import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

export default function Mermaid({ children, chart }) {
  const containerRef = useRef(null);
  const hasRendered = useRef(false);

  useEffect(() => {
    // Initialize mermaid only once
    if (!hasRendered.current) {
      mermaid.initialize({ 
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'strict',
      });
      hasRendered.current = true;
    }

    // Support both 'chart' prop and 'children' for backwards compatibility
    const content = chart || children;

    // Render mermaid diagram
    if (containerRef.current && content) {
      const code = typeof content === 'string' ? content : content.props?.children || '';
      const id = `mermaid-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
      
      // Create a temporary div for mermaid content
      const tempDiv = document.createElement('div');
      tempDiv.className = 'mermaid';
      tempDiv.textContent = code.trim();
      tempDiv.id = id;
      
      // Clear previous content and append new
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(tempDiv);
      
      // Use timeout to prevent rapid re-renders
      const timer = setTimeout(() => {
        mermaid.run({ nodes: [tempDiv] });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [children, chart]);

  return (
    <div ref={containerRef} className="mermaid-wrapper my-6 flex justify-center">
      {/* Mermaid content will be rendered here */}
    </div>
  );
}
