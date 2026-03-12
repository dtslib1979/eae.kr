export default function Part1({ children }) {
  return (
    <section className="part1-grandpa-mode my-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">👴</span>
        <h2 className="part-title text-3xl font-bold">
          Grandpa Mode – Simple Analogies
        </h2>
      </div>
      <div className="prose prose-invert prose-lg max-w-none">
        {children}
      </div>
    </section>
  );
}
