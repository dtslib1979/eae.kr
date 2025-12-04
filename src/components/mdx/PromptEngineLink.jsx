export default function PromptEngineLink({ 
  href = "https://parksy.kr/prompt-engine/eae-skillset6",
  label = "Prompt Engine Portal"
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-3 py-1.5 text-sm rounded-lg border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400/20 transition-colors text-amber-100 hover:text-amber-50"
    >
      🚀 {label}
    </a>
  );
}
