import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

const STATS = [
  { label: 'Total Events', value: '12', icon: '🎬' },
  { label: 'Total Reservations', value: '348', icon: '🎟️' },
  { label: 'Revenue', value: '$4,260', icon: '💰' },
  { label: 'Avg. Rating', value: '4.6 ★', icon: '⭐' },
];

const MY_EVENTS = [
  { id: '1', title: 'The Grand Illusion', date: '2025-09-01', time: '19:30', location: 'Hall A', price: 10, seatsAvailable: 80, status: 'approved' },
  { id: '2', title: 'Midnight in Paris', date: '2025-09-05', time: '21:00', location: 'Hall B', price: 12, seatsAvailable: 0, status: 'cancelled' },
  { id: '5', title: 'La La Land', date: '2025-09-15', time: '20:30', location: 'Hall D', price: 13, seatsAvailable: 70, status: 'pending' },
];

const OrganizerDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="bg-gray-900 text-white py-10 px-4 text-center">
        <h1 className="text-3xl font-bold">Organizer Dashboard</h1>
        <p className="text-gray-400 mt-1">Manage your events and track performance</p>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10 space-y-10">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white rounded-xl shadow-sm p-5 text-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-2xl font-bold text-gray-800">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4">
          <Link
            to="/organizer/create-event"
            className="px-6 py-3 bg-amber-400 text-gray-900 rounded-lg font-bold hover:bg-amber-300 transition-colors"
          >
            + Create New Event
          </Link>
          <Link
            to="/profile"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Edit Profile
          </Link>
        </div>

        {/* My Events */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-5">My Events</h2>
          {MY_EVENTS.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl">
              <span className="text-4xl">🎬</span>
              <p className="text-gray-500 mt-3">You haven&apos;t created any events yet.</p>
              <Link
                to="/organizer/create-event"
                className="inline-block mt-4 px-6 py-2 bg-amber-400 text-gray-900 rounded-lg font-bold hover:bg-amber-300 transition-colors"
              >
                Create Your First Event
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MY_EVENTS.map((event) => (
                <div key={event.id} className="relative">
                  <EventCard event={event} />
                  <div className="absolute top-2 left-2 flex gap-1">
                    <button
                      type="button"
                      className="bg-white text-xs px-2 py-1 rounded-md shadow hover:bg-gray-50 font-medium text-gray-600"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="bg-white text-xs px-2 py-1 rounded-md shadow hover:bg-red-50 font-medium text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrganizerDashboard;
