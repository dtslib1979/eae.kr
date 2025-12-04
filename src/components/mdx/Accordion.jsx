import { useState, useId } from 'react';

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const uniqueId = useId();
  const id = `accordion-${uniqueId}`;

  return (
    <div className="my-2 border-b border-slate-600 pb-2">
      <button
        id={id}
        onClick={() => setOpen(!open)}
        className="w-full text-left font-semibold py-1 text-slate-100 hover:text-amber-400 transition-colors flex items-center gap-2"
        aria-expanded={open}
      >
        <span className="text-xs">{open ? "▼" : "▶"}</span>
        <span>{title}</span>
      </button>
      {open && (
        <div className="mt-2 pl-4" style={{ color: 'rgba(255,255,255,0.25)' }} role="region" aria-labelledby={id}>
          {children}
        </div>
      )}
    </div>
  );
}
