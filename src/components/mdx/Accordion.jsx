import { useState } from 'react';

export function AccordionItem({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="mdx-accordion-item border-b border-soft/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-3 md:py-4 text-left"
      >
        <span className="font-semibold text-lg text-[color:var(--fg)]">
          {title}
        </span>
        <span
          className={`transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        >
          ▸
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 md:pb-5 text-[color:var(--fg)] space-y-3">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function Accordion({ children }) {
  return <div className="mdx-accordion divide-y divide-soft/30">{children}</div>;
}
