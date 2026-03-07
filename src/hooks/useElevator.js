import { useState, useCallback, useEffect } from 'react';

const FLOORS = [
  { id: 'lobby', level: '1F', name: 'Lobby', icon: '📡' },
  { id: 'curriculum', level: 'B1', name: 'Curriculum', icon: '📺' },
  { id: 'library', level: 'B2', name: 'Library', icon: '📚' },
  { id: 'console', level: 'B3', name: 'Console', icon: '🖥️' },
];

export default function useElevator(initialFloor = 'lobby') {
  const [currentFloor, setCurrentFloor] = useState(() => {
    const hash = window.location.hash.replace('#floor-', '');
    const valid = FLOORS.find(f => f.id === hash);
    return valid ? hash : initialFloor;
  });

  const navigateTo = useCallback((floorId) => {
    const floor = FLOORS.find(f => f.id === floorId);
    if (!floor) return;
    setCurrentFloor(floorId);
    window.history.pushState(null, '', `#floor-${floorId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const hash = window.location.hash.replace('#floor-', '');
      const valid = FLOORS.find(f => f.id === hash);
      if (valid) {
        setCurrentFloor(hash);
      } else {
        setCurrentFloor('lobby');
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return { currentFloor, navigateTo, floors: FLOORS };
}
