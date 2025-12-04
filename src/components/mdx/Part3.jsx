import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

export default function Part3({ children }) {
  const mermaidRef = useRef(null);
  const hasRendered = useRef(false);

  useEffect(() => {
    // Initialize mermaid only once
    if (!hasRendered.current) {
      mermaid.initialize({ 
        startOnLoad: true,
        theme: 'neutral',
        look: 'handDrawn',
        fontFamily: 'Marker Felt, Cabin Sketch, Comic Sans MS',
        securityLevel: 'strict',
      });
      hasRendered.current = true;
    }

    // Render mermaid diagrams
    if (mermaidRef.current) {
      const mermaidElements = mermaidRef.current.querySelectorAll('.language-mermaid, pre code.language-mermaid');
      mermaidElements.forEach((element, index) => {
        const code = element.textContent;
        const id = `mermaid-${Date.now()}-${index}`;
        const container = document.createElement('div');
        container.className = 'mermaid';
        container.id = id;
        container.textContent = code;
        
        // Check if parentElement exists before replacing
        if (element.parentElement) {
          element.parentElement.replaceWith(container);
        }
      });
      
      // Use timeout to prevent rapid re-renders
      const timer = setTimeout(() => {
        mermaid.run();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [children]);

  return (
    <section className="part3-theory-map my-12 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-l-4 border-purple-600 shadow-md">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">🗺️</span>
        <h2 className="text-3xl font-bold text-purple-900">
          Theory Map (Mermaid) – 개념·세계관 도식
        </h2>
      </div>
      <div ref={mermaidRef} className="prose prose-lg max-w-none text-gray-800 leading-relaxed mermaid-container">
        {children}
      </div>
    </section>
  );
}
