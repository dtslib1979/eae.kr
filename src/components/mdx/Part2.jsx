export default function Part2({ children }) {
  return (
    <section className="part2-system-architect my-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-600 shadow-md">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">🏗️</span>
        <h2 className="text-3xl font-bold text-blue-900">
          System Architect Mode – 구조·로직·데이터 흐름
        </h2>
      </div>
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
