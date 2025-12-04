import { useState, useId, useRef, useEffect } from 'react';

/**
 * Accordion wrapper component for grouping multiple AccordionItem components
 * This is a simple container - the actual accordion behavior is in AccordionItem
 * Used in MDX via global MDXProvider configuration
 * 
 * Usage:
 * <Accordion>
 *   <AccordionItem title="Section 1">content</AccordionItem>
 *   <AccordionItem title="Section 2">content</AccordionItem>
 * </Accordion>
 */
export default function Accordion({ children }) {
  return (
    <div className="accordion-wrapper">
      {children}
    </div>
  );
}
