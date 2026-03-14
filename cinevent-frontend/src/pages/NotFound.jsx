import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-400 mb-8">Page not found</p>
      <Link
        to="/"
        className="px-6 py-2 bg-red-600 rounded hover:bg-red-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
