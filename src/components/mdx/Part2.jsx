export default function Part2({ children }) {
  return (
    <section className="part2-system-architect my-12 p-8 bg-gradient-to-br from-blue-950/40 to-indigo-950/30 rounded-2xl border-l-4 border-blue-500 shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">🏗️</span>
        <h2 className="text-3xl font-bold text-blue-400">
          System Architect Mode – 구조·로직·데이터 흐름
        </h2>
      </div>
      <div className="prose prose-invert prose-lg max-w-none prose-headings:text-blue-300 prose-p:text-slate-200 prose-strong:text-blue-200 prose-a:text-blue-400">
        {children}
      </div>
    </section>
  );
}
