export const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <details className="border-b border-white/10 group">
      <summary className="cursor-pointer py-3 font-semibold flex justify-between items-center list-none">
        {title}
        <span className="transition-transform group-open:rotate-180">▼</span>
      </summary>

      <div className="pb-4 text-gray-300">
        {children}
      </div>
    </details>
  );
};

export const Accordion = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full flex flex-col gap-2">
    {children}
  </div>
);

export default Accordion;
