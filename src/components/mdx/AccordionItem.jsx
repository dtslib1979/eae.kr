import { useState, useId, useRef, useEffect } from 'react';

/**
 * AccordionItem component for nested collapsible sections within Accordion
 * Provides smooth height/opacity animations and ARIA-compliant keyboard navigation
 * Used in MDX via global MDXProvider configuration
 */
export default function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const uniqueId = useId();
  const id = `accordion-item-${uniqueId}`;
  const contentRef = useRef(null);
  const [height, setHeight] = useState(defaultOpen ? 'auto' : '0px');

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        // Set to scrollHeight to trigger animation
        const scrollHeight = contentRef.current.scrollHeight;
        setHeight(scrollHeight + 'px');
        // After animation, set to auto for dynamic content
        setTimeout(() => {
          if (open) setHeight('auto');
        }, 300);
      } else {
        // Set to exact height first
        setHeight(contentRef.current.scrollHeight + 'px');
        // Then animate to 0
        setTimeout(() => {
          setHeight('0px');
        }, 10);
      }
    }
  }, [open]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(!open);
    }
  };

  return (
    <div className="my-2 border-b border-slate-600 pb-2">
      <button
        id={id}
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        className="w-full text-left font-semibold py-1 text-slate-100 hover:text-amber-400 transition-colors flex items-center gap-2"
        aria-expanded={open}
        aria-controls={`${id}-content`}
      >
        <span className="text-xs transition-transform duration-200" style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}>
          ▶
        </span>
        <span>{title}</span>
      </button>
      <div
        id={`${id}-content`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: height,
          opacity: open ? 1 : 0,
        }}
        role="region"
        aria-labelledby={id}
      >
        <div className="mt-2 pl-4 text-fg-soft">
          {children}
        </div>
      </div>
    </div>
  );
}
