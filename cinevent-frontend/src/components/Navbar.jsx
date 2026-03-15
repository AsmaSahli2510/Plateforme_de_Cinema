import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent/20 bg-background-dark/95 backdrop-blur-md px-6 md:px-20 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="text-accent">
            <span className="material-symbols-outlined text-4xl">
              movie_filter
            </span>
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-white">
            CINÉ<span className="text-accent">EVENT</span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="text-white hover:text-accent font-medium text-sm transition-colors"
          >
            Home
          </Link>

          <Link
            to="/events"
            className="text-white hover:text-accent font-medium text-sm transition-colors"
          >
            Events
          </Link>

          <Link
            to="/venues"
            className="text-white hover:text-accent font-medium text-sm transition-colors"
          >
            Venues
          </Link>

          <Link
            to="/experience"
            className="text-white hover:text-accent font-medium text-sm transition-colors"
          >
            Experience
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-6 py-2 rounded-full text-white font-bold text-sm hover:bg-white/10 transition-all border border-accent/30"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-6 py-2 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;