export default function SketchCard({ children, title = "Sketch", src, caption }) {
  // Determine what to render: src takes precedence over children
  let content;
  
  if (src) {
    content = <img src={src} alt={caption || title} className="max-w-full h-auto" />;
  } else if (children) {
    content = children;
  } else {
    // Default placeholder
    content = (
      <div className="text-center">
        <svg className="mx-auto mb-2" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="80" height="60" fill="none" stroke="#4B5563" strokeWidth="2" strokeDasharray="5,5"/>
          <circle cx="30" cy="40" r="8" fill="#3B82F6"/>
          <circle cx="70" cy="40" r="8" fill="#EF4444"/>
          <path d="M 30 40 Q 50 20 70 40" stroke="#10B981" strokeWidth="2" fill="none"/>
          <text x="50" y="75" fontSize="12" textAnchor="middle" fill="#6B7280">Excalidraw Style</text>
        </svg>
        <p className="text-gray-500 text-sm">자유 그림 영역</p>
      </div>
    );
  }
  
  return (
    <div className="sketch-card my-8 p-6 bg-white rounded-xl border-2 border-dashed border-gray-300 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">✏️</span>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="sketch-content bg-gray-50 p-4 rounded-lg min-h-[200px] flex items-center justify-center">
        {content}
      </div>
      {caption && (
        <p className="mt-3 text-sm text-gray-600 text-center italic">{caption}</p>
      )}
    </div>
  );
}
