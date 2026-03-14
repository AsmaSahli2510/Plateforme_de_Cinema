import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-amber-400 text-2xl">🎬</span>
            <span className="text-xl font-bold tracking-wide">CinEvent</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-amber-400 font-semibold' : 'hover:text-amber-300 transition-colors'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? 'text-amber-400 font-semibold' : 'hover:text-amber-300 transition-colors'
              }
            >
              Events
            </NavLink>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-lg bg-amber-400 text-gray-900 hover:bg-amber-300 transition-colors font-medium"
            >
              Register
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block py-2 hover:text-amber-300 transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            onClick={() => setMenuOpen(false)}
            className="block py-2 hover:text-amber-300 transition-colors"
          >
            Events
          </NavLink>
          <div className="flex gap-3 pt-2">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center py-2 rounded-lg border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center py-2 rounded-lg bg-amber-400 text-gray-900 hover:bg-amber-300 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
