import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CreateEvent = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="bg-gray-900 text-white py-10 px-4 text-center">
        <h1 className="text-3xl font-bold">Create New Event</h1>
        <p className="text-gray-400 mt-1">Fill in the details to schedule a cinema event</p>
      </div>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">
                Event Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="e.g. The Grand Illusion — Special Screening"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                placeholder="Describe the event, the film, and what attendees can expect..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800 resize-none"
              />
            </div>

            {/* Movie Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="movie">
                Movie Name
              </label>
              <input
                id="movie"
                type="text"
                placeholder="e.g. The Grand Illusion"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="date">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="time">
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="location">
                Location / Venue
              </label>
              <input
                id="location"
                type="text"
                placeholder="e.g. Hall A — CinEvent Main Theatre"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
              />
            </div>

            {/* Price & Seats */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="price">
                  Ticket Price ($)
                </label>
                <input
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="seats">
                  Available Seats
                </label>
                <input
                  id="seats"
                  type="number"
                  min="1"
                  placeholder="100"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="image">
                Poster Image URL (optional)
              </label>
              <input
                id="image"
                type="url"
                placeholder="https://example.com/poster.jpg"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 justify-end pt-2">
              <Link
                to="/organizer/dashboard"
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-8 py-3 bg-amber-400 text-gray-900 rounded-lg font-bold hover:bg-amber-300 transition-colors"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateEvent;
