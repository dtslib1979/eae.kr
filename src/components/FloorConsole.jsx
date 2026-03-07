export default function FloorConsole() {
  return (
    <>
      <header className="floor-header">
        <span className="floor-badge">B3</span>
        <h2 className="floor-title">Console</h2>
        <p className="floor-desc">Platform Integration Hub</p>
      </header>

      {/* Platform Grid */}
      <div className="platform-grid">
        <a href="https://www.youtube.com/@BeingEduartEngineer-4" target="_blank" rel="noopener noreferrer" className="platform-card">
          <span className="platform-icon">📺</span>
          <span className="platform-name">YouTube</span>
          <span className="platform-desc">EAE Channel</span>
        </a>

        <a href="https://github.com/dtslib1979/eae.kr" target="_blank" rel="noopener noreferrer" className="platform-card">
          <span className="platform-icon">🔧</span>
          <span className="platform-name">GitHub</span>
          <span className="platform-desc">Source code</span>
        </a>

        <a href="https://eae.kr/archive" className="platform-card">
          <span className="platform-icon">📚</span>
          <span className="platform-name">Archive</span>
          <span className="platform-desc">All content</span>
        </a>

        <a href="https://eae.kr/about" className="platform-card">
          <span className="platform-icon">📋</span>
          <span className="platform-name">About</span>
          <span className="platform-desc">Mission</span>
        </a>
      </div>

      {/* Trilogy Section */}
      <div className="trilogy-section">
        <h3 className="trilogy-title">DTSLIB Trilogy</h3>
        <div className="trilogy-grid">
          <a href="https://parksy.kr" target="_blank" rel="noopener noreferrer" className="trilogy-card">
            <span className="trilogy-domain">parksy.kr</span>
            <span className="trilogy-role">Broadcast</span>
          </a>
          <a href="https://eae.kr" className="trilogy-card active">
            <span className="trilogy-domain">eae.kr</span>
            <span className="trilogy-role">Education</span>
          </a>
          <a href="https://dtslib.kr" target="_blank" rel="noopener noreferrer" className="trilogy-card">
            <span className="trilogy-domain">dtslib.kr</span>
            <span className="trilogy-role">Publishing</span>
          </a>
        </div>
      </div>
    </>
  );
}
