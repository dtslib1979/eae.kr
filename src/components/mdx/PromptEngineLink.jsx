export default function PromptEngineLink({ 
  href = "https://parksy.kr/prompt-engine/eae-skillset6",
  label = "Prompt Engine으로 이동 →",
  title = "Prompt Engine Portal"
}) {
  return (
    <div className="prompt-engine-link my-12 p-8 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-2xl text-white">
      <div className="text-center">
        <div className="text-6xl mb-4">🚀</div>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-lg mb-6 text-indigo-100">
          이 리포트를 재생산하거나 새로운 리포트를 만들어보세요
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-white text-indigo-700 font-bold text-lg rounded-full hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg"
        >
          {label}
        </a>
      </div>
      <div className="mt-6 pt-6 border-t border-indigo-400 text-center text-sm text-indigo-200">
        <p>EAE Skillset6 / EduArt OS – Universal Report Template Engine v1.0</p>
      </div>
    </div>
  );
}
