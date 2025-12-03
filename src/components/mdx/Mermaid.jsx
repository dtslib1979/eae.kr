import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

export default function Mermaid({ children }) {
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

    // Render mermaid diagram
    if (containerRef.current && children) {
      const code = typeof children === 'string' ? children : children.props?.children || '';
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
  }, [children]);

  return (
    <div ref={containerRef} className="mermaid-wrapper my-6 flex justify-center">
      {/* Mermaid content will be rendered here */}
    </div>
  );
}
