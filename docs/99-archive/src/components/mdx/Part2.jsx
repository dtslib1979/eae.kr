export default function Part2({ children }) {
  return (
    <section className="part2-system-architect my-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">🏗️</span>
        <h2 className="part-title text-3xl font-bold">
          System Architect Mode – Structure & Logic
        </h2>
      </div>
      <div className="prose prose-invert prose-lg max-w-none">
        {children}
      </div>
    </section>
  );
}
