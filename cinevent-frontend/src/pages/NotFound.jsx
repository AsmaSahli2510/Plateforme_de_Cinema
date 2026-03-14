import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <span className="text-8xl mb-4">🎬</span>
        <h1 className="text-8xl font-extrabold text-amber-400">404</h1>
        <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The scene you&apos;re looking for doesn&apos;t exist in our film reel.
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-amber-400 text-gray-900 rounded-xl font-bold hover:bg-amber-300 transition-colors"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
