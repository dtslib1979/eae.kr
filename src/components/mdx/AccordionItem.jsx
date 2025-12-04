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

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
        contentRef.current.style.opacity = '1';
      } else {
        contentRef.current.style.maxHeight = '0px';
        contentRef.current.style.opacity = '0';
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
          maxHeight: open ? 'none' : '0px',
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
