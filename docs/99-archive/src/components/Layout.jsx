import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';

  return (
    <div className="min-h-screen">
      {/* Show top nav only on non-home pages */}
      {!isHome && (
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
      )}

      <main className={isHome ? '' : 'min-h-[calc(100vh-64px)] relative z-[150]'}>
        <Outlet />
      </main>
    </div>
  );
}
