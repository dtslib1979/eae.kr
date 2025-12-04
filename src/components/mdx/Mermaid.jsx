import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

// Excalidraw-like sketchy style configuration
const MERMAID_CONFIG = {
  startOnLoad: false,
  theme: 'dark',
  flowchart: {
    curve: 'basis',        // Smooth curved lines instead of straight
    padding: 12,
    htmlLabels: true,
  },
  themeVariables: {
    fontFamily: "'Annie Use Your Telescope', system-ui",
    primaryColor: '#111827',
    primaryBorderColor: '#EEF8F2',
    primaryTextColor: '#EEF8F2',
    lineColor: '#EEF8F2',
    secondaryColor: '#111827',
    tertiaryColor: '#111827',
  },
  securityLevel: 'strict',
};

// Delay to wait for Mermaid SVG rendering before applying animations
const PULSE_ANIMATION_DELAY = 150;

export default function Mermaid({ children, chart }) {
  const containerRef = useRef(null);
  const hasRendered = useRef(false);

  useEffect(() => {
    // Initialize mermaid only once
    if (!hasRendered.current) {
      mermaid.initialize(MERMAID_CONFIG);
      hasRendered.current = true;
    }

    // Support both 'chart' prop and 'children' for backwards compatibility
    const content = chart || children;

    // Render mermaid diagram only if conditions are met
    if (!containerRef.current || !content) {
      return undefined;
    }

    try {
      const code = typeof content === 'string' ? content : content.props?.children || '';
      
      // Skip rendering if code is empty or whitespace only
      if (!code || !code.trim()) {
        return undefined;
      }
      
      const id = `mermaid-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
      
      // Create a temporary div for mermaid content
      const tempDiv = document.createElement('div');
      tempDiv.className = 'mermaid text-white';
      tempDiv.textContent = code.trim();
      tempDiv.id = id;
      
      // Clear previous content and append new
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(tempDiv);
      
      // Use timeout to prevent rapid re-renders
      const timer = setTimeout(() => {
        mermaid.run({ nodes: [tempDiv] }).catch(error => {
          console.error('Mermaid rendering error:', error);
          // Display error message instead of breaking the page (safe from XSS)
          if (containerRef.current) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'text-red-500 p-4 border border-red-500 rounded';
            errorDiv.textContent = `Mermaid diagram error: ${error.message}`;
            containerRef.current.innerHTML = '';
            containerRef.current.appendChild(errorDiv);
          }
        });
      }, 100);

      return () => clearTimeout(timer);
    } catch (error) {
      console.error('Mermaid setup error:', error);
      return undefined;
    }
  }, [children, chart]);

  // Add pulse animation to the first node after SVG is rendered
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Wait for mermaid to fully render the SVG
    const pulseTimer = setTimeout(() => {
      const firstNode = containerRef.current?.querySelector('.node');
      if (firstNode && !firstNode.classList.contains('node--pulse')) {
        firstNode.classList.add('node--pulse');
      }
    }, PULSE_ANIMATION_DELAY);

    return () => clearTimeout(pulseTimer);
  }, [children, chart]);

  return (
    <div ref={containerRef} className="mermaid-wrapper mermaid-sketchy my-6 flex justify-center">
      {/* Mermaid content will be rendered here */}
    </div>
  );
}
