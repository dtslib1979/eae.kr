import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface PapyrusScrollProps {
  title?: string;
  subtitle?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function PapyrusScroll({
  title = "Full Whitepaper – Raw Text Version (EN)",
  subtitle = "Tap to unroll the full log (voice → text, no edit mode).",
  defaultOpen = false,
  children,
}: PapyrusScrollProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="my-12 w-full">
      {/* Header Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-2xl border border-white/6 bg-black/20 px-8 py-6 transition-all hover:bg-black/30 hover:border-white/10"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 text-left">
            {/* Overline */}
            <div className="mb-2 text-xs font-medium uppercase tracking-widest text-emerald-200/80">
              Prompt Engine · Scroll
            </div>
            
            {/* Title */}
            <div className="mb-1 text-lg font-semibold text-emerald-50">
              {title}
            </div>
            
            {/* Subtitle */}
            <div className="text-xs text-emerald-100/60 transition-colors hover:text-emerald-100/80">
              {subtitle}
            </div>
          </div>

          {/* Chevron Icon */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/20"
          >
            <ChevronDown className="h-5 w-5 text-emerald-300" />
          </motion.div>
        </div>
      </button>

      {/* Papyrus Panel - Animated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 48 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="relative mx-auto max-w-3xl rounded-[32px] border border-emerald-100/12 shadow-[0_32px_120px_rgba(0,0,0,0.85)]">
              {/* Top Shadow (Scroll Edge) */}
              <div className="absolute -top-1 left-[10%] right-[10%] h-4 rounded-full bg-black/40 blur-xl" />
              
              {/* Main Papyrus Container */}
              <div
                className="relative rounded-[32px] px-8 py-12 sm:px-12 sm:py-16"
                style={{
                  background: `
                    radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
                    #151f19
                  `,
                }}
              >
                {/* Content with Prose Styling */}
                <div className="prose prose-invert prose-sm max-w-none prose-headings:text-emerald-50 prose-p:text-emerald-50/80 prose-strong:text-emerald-50 prose-li:text-emerald-50/80 prose-code:text-emerald-200 prose-a:text-emerald-300 prose-a:no-underline hover:prose-a:text-emerald-200">
                  {children}
                </div>
              </div>

              {/* Bottom Shadow (Scroll Edge) */}
              <div className="absolute -bottom-1 left-[10%] right-[10%] h-4 rounded-full bg-black/40 blur-xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
