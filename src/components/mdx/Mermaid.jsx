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
        fontFamily: 'system-ui, -apple-system, sans-serif',
        themeVariables: {
          primaryColor: '#0a1e16',
          primaryTextColor: '#ffffff',
          primaryBorderColor: '#F7FFF5',
          lineColor: '#F7FFF5',
          secondaryColor: '#0a1e16',
          tertiaryColor: '#0a1e16',
          textColor: '#ffffff',
          mainBkg: '#0a1e16',
          nodeBorder: '#F7FFF5',
          clusterBkg: 'rgba(10, 30, 22, 0.6)',
          clusterBorder: '#F7FFF5',
          defaultLinkColor: '#F7FFF5',
          titleColor: '#ffffff',
          edgeLabelBackground: '#253A2F',
          edgeLabelColor: '#ffffff',
          fontSize: '18px',
        },
        themeCSS: `
          .node rect, .node polygon, .node circle {
            stroke-width: 3px !important;
            stroke: #F7FFF5 !important;
            fill: rgba(10, 30, 22, 0.95) !important;
          }
          .nodeLabel, .label, text {
            font-size: 18px !important;
            font-weight: 700 !important;
            fill: #ffffff !important;
          }
          .cluster-label .nodeLabel {
            font-size: 20px !important;
            font-weight: 800 !important;
          }
          .edgeLabel, .label {
            color: #fff !important;
          }
          .flowchart-link, .edgePath path {
            stroke: #F7FFF5 !important;
            stroke-width: 2.5px !important;
          }
          .cluster rect {
            stroke-width: 2.5px !important;
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
