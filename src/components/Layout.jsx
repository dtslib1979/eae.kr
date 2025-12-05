import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

export default function Layout() {
  useEffect(() => {
    const topZone = document.getElementById('scroll-up-zone');
    const bottomZone = document.getElementById('scroll-down-zone');

    if (!topZone || !bottomZone) return;

    const handleTopClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBottomClick = () => {
      window.scrollTo({ 
        top: document.body.scrollHeight, 
        behavior: 'smooth' 
      });
    };

    topZone.addEventListener('click', handleTopClick);
    bottomZone.addEventListener('click', handleBottomClick);

    return () => {
      topZone.removeEventListener('click', handleTopClick);
      bottomZone.removeEventListener('click', handleBottomClick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <nav className="bg-white/10 backdrop-blur-sm shadow-sm">
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
      
      <main className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </main>
      
      {/* Invisible Scroll Zones */}
      <div id="scroll-up-zone" className="scroll-zone scroll-zone-top"></div>
      <div id="scroll-down-zone" className="scroll-zone scroll-zone-bottom"></div>
    </div>
  );
}
