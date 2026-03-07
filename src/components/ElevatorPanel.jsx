export default function ElevatorPanel({ floors, currentFloor, onNavigate }) {
  const currentLevel = floors.find(f => f.id === currentFloor)?.level || '1F';

  return (
    <nav className="elevator-panel" id="elevator">
      <div className="elevator-shaft">
        <div className="elevator-indicator">
          <span className="current-floor">{currentLevel}</span>
        </div>

        <div className="elevator-buttons">
          {floors.map(floor => (
            <button
              key={floor.id}
              className={`elevator-btn${currentFloor === floor.id ? ' active' : ''}`}
              onClick={() => onNavigate(floor.id)}
              data-floor={floor.id}
            >
              <span className="btn-level">{floor.level}</span>
              <span className="btn-icon">{floor.icon}</span>
              <span className="btn-label">{floor.name}</span>
            </button>
          ))}
        </div>

        <div className="elevator-brand">
          <span className="brand-logo">E</span>
          <span className="brand-name">EAE.KR</span>
        </div>
      </div>
    </nav>
  );
}
