import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

export default function Layout() {
  useEffect(() => {
    const topZone = document.getElementById('scroll-up-zone');
    const bottomZone = document.getElementById('scroll-down-zone');

    if (!topZone || !bottomZone) return;

    // Calculate step size: 40% of viewport height
    const SCROLL_STEP_RATIO = 0.4;
    const getStep = () => {
      return window.innerHeight * SCROLL_STEP_RATIO;
    };

    const handleTopClick = () => {
      const step = getStep();
      window.scrollBy({
        top: -step,
        behavior: 'smooth',
      });
    };

    const handleBottomClick = () => {
      const step = getStep();
      window.scrollBy({
        top: step,
        behavior: 'smooth',
      });
    };

    const handleTopKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleTopClick();
      }
    };

    const handleBottomKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleBottomClick();
      }
    };

    topZone.addEventListener('click', handleTopClick);
    bottomZone.addEventListener('click', handleBottomClick);
    topZone.addEventListener('keydown', handleTopKeyDown);
    bottomZone.addEventListener('keydown', handleBottomKeyDown);

    return () => {
      if (topZone) {
        topZone.removeEventListener('click', handleTopClick);
        topZone.removeEventListener('keydown', handleTopKeyDown);
      }
      if (bottomZone) {
        bottomZone.removeEventListener('click', handleBottomClick);
        bottomZone.removeEventListener('keydown', handleBottomKeyDown);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <nav className="bg-white/10 backdrop-blur-sm shadow-sm relative z-[200]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-slate-50 leading-tight">
              EAE
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="text-slate-50/90 hover:text-slate-50 transition-colors">
                Home
              </Link>
              <Link to="/archive" className="text-slate-50/90 hover:text-slate-50 transition-colors">
                Archive
              </Link>
              <Link to="/about" className="text-slate-50/90 hover:text-slate-50 transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="min-h-[calc(100vh-64px)] relative z-[150]">
        <Outlet />
      </main>
      
      {/* Invisible Scroll Zones */}
      <div 
        id="scroll-up-zone" 
        className="scroll-zone scroll-zone-top"
        role="button"
        aria-label="Scroll to top"
        tabIndex={0}
      ></div>
      <div 
        id="scroll-down-zone" 
        className="scroll-zone scroll-zone-bottom"
        role="button"
        aria-label="Scroll to bottom"
        tabIndex={0}
      ></div>
    </div>
  );
}
