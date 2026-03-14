import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

const FEATURED_EVENTS = [
  { id: '1', title: 'The Grand Illusion', date: '2025-09-01', time: '19:30', location: 'Hall A', price: 10, seatsAvailable: 80, status: 'approved' },
  { id: '2', title: 'Midnight in Paris', date: '2025-09-05', time: '21:00', location: 'Hall B', price: 12, seatsAvailable: 60, status: 'approved' },
  { id: '3', title: 'Cinema Paradiso', date: '2025-09-10', time: '20:00', location: 'Hall C', price: 14, seatsAvailable: 40, status: 'approved' },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4">
            Experience Cinema <span className="text-amber-400">Like Never Before</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Discover unique screenings, book your seats, and enjoy the magic of cinema events near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="px-8 py-3 bg-amber-400 text-gray-900 rounded-xl font-bold hover:bg-amber-300 transition-colors text-lg"
            >
              Browse Events
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 border-2 border-amber-400 text-amber-400 rounded-xl font-bold hover:bg-amber-400 hover:text-gray-900 transition-colors text-lg"
            >
              Join Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: '🎟️', title: 'Easy Booking', desc: 'Reserve seats in seconds with our simple booking system.' },
            { icon: '🎬', title: 'Curated Events', desc: 'Hand-picked cinema screenings and special events.' },
            { icon: '💳', title: 'Secure Payments', desc: 'Fast and secure payment processing for every booking.' },
          ].map((f) => (
            <div key={f.title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-10 px-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Events</h2>
          <Link to="/events" className="text-amber-600 font-medium hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center mt-auto">
        <h2 className="text-3xl font-bold mb-3">
          Are you an <span className="text-amber-400">Organizer</span>?
        </h2>
        <p className="text-gray-300 mb-6">Create and manage your own cinema events and reach thousands of cinephiles.</p>
        <Link
          to="/register"
          className="px-8 py-3 bg-amber-400 text-gray-900 rounded-xl font-bold hover:bg-amber-300 transition-colors"
        >
          Get Started
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
