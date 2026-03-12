export const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <details className="accordion-item border-b border-white/20 group">
      <summary className="cursor-pointer py-3 font-semibold flex justify-between items-center list-none text-slate-100" role="button" aria-label={`Toggle ${title}`}>
        {title}
        <span className="transition-transform group-open:rotate-180 text-slate-400" aria-hidden="true">▼</span>
      </summary>

      <div className="pb-4 text-slate-300">
        {children}
      </div>
    </details>
  );
};

export const Accordion = ({ children }: { children: React.ReactNode }) => (
  <div className="accordion w-full flex flex-col gap-2 my-4">
    {children}
  </div>
);

export default Accordion;
