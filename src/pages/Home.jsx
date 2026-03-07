import useElevator from '../hooks/useElevator';
import ElevatorPanel from '../components/ElevatorPanel';
import FloorLobby from '../components/FloorLobby';
import FloorCurriculum from '../components/FloorCurriculum';
import FloorLibrary from '../components/FloorLibrary';
import FloorConsole from '../components/FloorConsole';

export default function Home() {
  const { currentFloor, navigateTo, floors } = useElevator('lobby');

  return (
    <>
      <ElevatorPanel
        floors={floors}
        currentFloor={currentFloor}
        onNavigate={navigateTo}
      />

      <div className="floor-content-area">
        <div className={currentFloor === 'lobby' ? 'floor-section active' : 'floor-section'}>
          <FloorLobby onNavigate={navigateTo} />
        </div>
        <div className={currentFloor === 'curriculum' ? 'floor-section active' : 'floor-section'}>
          <FloorCurriculum />
        </div>
        <div className={currentFloor === 'library' ? 'floor-section active' : 'floor-section'}>
          <FloorLibrary />
        </div>
        <div className={currentFloor === 'console' ? 'floor-section active' : 'floor-section'}>
          <FloorConsole />
        </div>
      </div>
    </>
  );
}
