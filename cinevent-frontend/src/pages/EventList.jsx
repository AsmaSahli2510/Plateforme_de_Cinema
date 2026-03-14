import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

const SAMPLE_EVENTS = [
  { id: '1', title: 'The Grand Illusion', date: '2025-09-01', time: '19:30', location: 'Hall A', price: 10, seatsAvailable: 80, status: 'approved' },
  { id: '2', title: 'Midnight in Paris', date: '2025-09-05', time: '21:00', location: 'Hall B', price: 12, seatsAvailable: 60, status: 'approved' },
  { id: '3', title: 'Cinema Paradiso', date: '2025-09-10', time: '20:00', location: 'Hall C', price: 14, seatsAvailable: 40, status: 'approved' },
  { id: '4', title: 'Amelie', date: '2025-09-12', time: '18:00', location: 'Hall A', price: 11, seatsAvailable: 55, status: 'approved' },
  { id: '5', title: 'La La Land', date: '2025-09-15', time: '20:30', location: 'Hall D', price: 13, seatsAvailable: 70, status: 'approved' },
  { id: '6', title: 'Parasite', date: '2025-09-20', time: '21:00', location: 'Hall B', price: 15, seatsAvailable: 30, status: 'approved' },
];

const CATEGORIES = ['All', 'Drama', 'Comedy', 'Thriller', 'Romance', 'Action'];

const EventList = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = SAMPLE_EVENTS.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gray-900 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">All Cinema Events</h1>
        <p className="text-gray-400">Find and book your next favorite screening</p>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800 bg-white"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === c
                  ? 'bg-amber-400 text-gray-900'
                  : 'bg-white border border-gray-300 text-gray-600 hover:border-amber-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-gray-500 text-sm mb-6">{filtered.length} event{filtered.length !== 1 ? 's' : ''} found</p>

        {/* Events Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="text-5xl">🎬</span>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">No events found</h3>
            <p className="text-gray-400 mt-1">Try adjusting your search or filters.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default EventList;
