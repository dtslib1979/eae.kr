import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              EAE
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link to="/archive" className="text-gray-700 hover:text-blue-600">
                Archive
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </main>
    </div>
  );
}
