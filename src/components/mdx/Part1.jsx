export default function Part1({ children }) {
  return (
    <section className="part1-grandpa-mode my-12 p-8 bg-gradient-to-br from-amber-950/40 to-orange-950/30 rounded-2xl border-l-4 border-amber-500 shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">👴</span>
        <h2 className="text-3xl font-bold text-amber-400">
          Grandpa Mode – 비유·서사·쉬운 설명
        </h2>
      </div>
      <div className="prose prose-invert prose-lg max-w-none prose-headings:text-amber-300 prose-p:text-slate-200 prose-strong:text-amber-200 prose-a:text-amber-400">
        {children}
      </div>
    </section>
  );
}
