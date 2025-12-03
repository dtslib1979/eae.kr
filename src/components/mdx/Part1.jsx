export default function Part1({ children }) {
  return (
    <section className="part1-grandpa-mode my-12 p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-l-4 border-amber-500 shadow-md">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">👴</span>
        <h2 className="text-3xl font-bold text-amber-900">
          Grandpa Mode – 비유·서사·쉬운 설명
        </h2>
      </div>
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
