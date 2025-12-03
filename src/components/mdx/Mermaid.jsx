import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

export default function Mermaid({ children }) {
  const mermaidRef = useRef(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Initialize mermaid once
    if (!hasInitialized.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
      });
      hasInitialized.current = true;
    }

    // Render the diagram
    if (mermaidRef.current && children) {
      const id = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const container = document.createElement('div');
      container.className = 'mermaid';
      container.id = id;
      container.textContent = typeof children === 'string' ? children : children.toString();
      
      // Clear previous content and add new diagram
      mermaidRef.current.innerHTML = '';
      mermaidRef.current.appendChild(container);
      
      // Render with a slight delay to ensure DOM is ready
      const timer = setTimeout(() => {
        mermaid.run({ nodes: [container] });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [children]);

  return (
    <div className="mermaid-wrapper my-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200 overflow-x-auto">
      <div ref={mermaidRef} className="mermaid-container flex justify-center items-center min-h-[200px]" />
    </div>
  );
}
