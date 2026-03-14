import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-red-500">
        CinEvent
      </Link>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-red-400 transition-colors">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
