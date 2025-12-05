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
        theme: 'base',
        look: 'handDrawn',
        fontFamily: '"Annie Use Your Telescope", "Courier New", monospace',
        themeVariables: {
          primaryColor: '#ffffff',
          primaryTextColor: '#eeeeee',
          primaryBorderColor: '#cccccc',
          lineColor: '#cccccc',
          secondaryColor: '#ffffff',
          tertiaryColor: '#ffffff',
          textColor: '#eeeeee',
          mainBkg: 'transparent',
          nodeBorder: '#cccccc',
          clusterBkg: 'transparent',
          clusterBorder: '#cccccc',
          defaultLinkColor: '#cccccc',
          titleColor: '#eeeeee',
          edgeLabelBackground: '#253A2F',
          edgeLabelColor: '#eeeeee',
          fontSize: '14px',
        },
        themeCSS: `
          .node rect, .node polygon, .node circle {
            stroke-width: 2px !important;
            stroke: #ccc !important;
            fill: rgba(255,255,255,0.08) !important;
            stroke-dasharray: 3 3 !important;
          }
          .edgeLabel, .label {
            color: #eee !important;
          }
          .flowchart-link {
            stroke: #ccc !important;
            stroke-dasharray: 3 3 !important;
          }
        `,
        securityLevel: 'strict',
      });
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
      tempDiv.className = 'mermaid';
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

  return (
    <div ref={containerRef} className="mermaid-wrapper mermaid-chalk my-6 flex justify-center">
      {/* Mermaid content will be rendered here */}
    </div>
  );
}
