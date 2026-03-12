import { useState } from "react";

export const PapyrusScroll = ({ title = "Whitepaper", children }: { title?: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/20 rounded-lg overflow-hidden my-6 bg-[#1a1a1a]/60">
      
      <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/30">
        <h3 className="text-lg font-serif text-yellow-300">📜 {title}</h3>

        <button
          onClick={() => setOpen(!open)}
          className="px-3 py-1 text-xs border border-yellow-400/40 rounded uppercase tracking-wider hover:bg-yellow-400 hover:text-black transition"
        >
          {open ? "Roll Up" : "Unroll"}
        </button>
      </div>

      <div
        className={`relative p-5 transition-all duration-700 ${
          open ? "max-h-[9999px]" : "max-h-[160px] overflow-hidden"
        }`}
      >
        <div className="prose prose-invert max-w-none">{children}</div>

        {!open && (
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none" />
        )}
      </div>
    </div>
  );
};

export default PapyrusScroll;
