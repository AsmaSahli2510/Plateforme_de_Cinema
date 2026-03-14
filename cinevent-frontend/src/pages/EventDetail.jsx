import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SAMPLE_COMMENTS = [
  { id: 1, user: 'Alice M.', rating: 5, message: 'Absolutely magical screening — loved every second!', date: '2025-08-20' },
  { id: 2, user: 'Bob K.', rating: 4, message: 'Great event, the venue was perfect.', date: '2025-08-18' },
  { id: 3, user: 'Clara S.', rating: 5, message: 'Best cinema night I have had in years.', date: '2025-08-15' },
];

const SAMPLE_EVENT = {
  id: '1',
  title: 'The Grand Illusion',
  description:
    'Join us for a special screening of Jean Renoir\'s masterpiece "The Grand Illusion" (1937), widely considered one of the greatest films ever made. This classic anti-war drama follows French prisoners of war during World War I and explores themes of class, nationality, and humanity.',
  date: '2025-09-01',
  time: '19:30',
  location: 'Hall A — CinEvent Main Theatre',
  price: 10,
  seatsAvailable: 80,
  totalSeats: 120,
  organizer: 'Cinéma Classique',
  status: 'approved',
  rating: 4.7,
  reviewCount: 32,
};

const StarRating = ({ value }) => (
  <span>
    {[1, 2, 3, 4, 5].map((s) => (
      <span key={s} className={s <= Math.round(value) ? 'text-amber-400' : 'text-gray-300'}>
        ★
      </span>
    ))}
  </span>
);

const EventDetail = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-10">
        {/* Back */}
        <Link to="/events" className="text-amber-600 hover:underline text-sm mb-6 inline-block">
          ← Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Poster placeholder */}
            <div className="w-full h-64 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-500">
              <span className="text-7xl">🎬</span>
            </div>

            <div>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h1 className="text-3xl font-bold text-gray-800">{SAMPLE_EVENT.title}</h1>
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full capitalize font-medium">
                  {SAMPLE_EVENT.status}
                </span>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <StarRating value={SAMPLE_EVENT.rating} />
                <span className="text-sm text-gray-500">
                  {SAMPLE_EVENT.rating} ({SAMPLE_EVENT.reviewCount} reviews)
                </span>
              </div>

              <p className="text-gray-600 mt-4 leading-relaxed">{SAMPLE_EVENT.description}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '📅', label: 'Date', value: SAMPLE_EVENT.date },
                { icon: '🕐', label: 'Time', value: SAMPLE_EVENT.time },
                { icon: '📍', label: 'Location', value: SAMPLE_EVENT.location },
                { icon: '🎭', label: 'Organizer', value: SAMPLE_EVENT.organizer },
                { icon: '💺', label: 'Seats Available', value: `${SAMPLE_EVENT.seatsAvailable} / ${SAMPLE_EVENT.totalSeats}` },
                { icon: '💰', label: 'Price', value: `$${SAMPLE_EVENT.price}` },
              ].map((d) => (
                <div key={d.label} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <span>{d.icon}</span>
                    <span>{d.label}</span>
                  </div>
                  <p className="font-semibold text-gray-800">{d.value}</p>
                </div>
              ))}
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Reviews</h2>
              <div className="space-y-4">
                {SAMPLE_COMMENTS.map((c) => (
                  <div key={c.id} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">{c.user}</span>
                      <span className="text-xs text-gray-400">{c.date}</span>
                    </div>
                    <StarRating value={c.rating} />
                    <p className="text-gray-600 text-sm mt-1">{c.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Book Your Seats</h2>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="seats">
                  Number of Seats
                </label>
                <select
                  id="seats"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} seat{n > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mb-4 space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Price per seat</span>
                  <span>${SAMPLE_EVENT.price}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Seats</span>
                  <span>× 1</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-gray-800">
                  <span>Total</span>
                  <span>${SAMPLE_EVENT.price}</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-3 bg-amber-400 text-gray-900 rounded-lg font-bold hover:bg-amber-300 transition-colors"
              >
                Reserve Now
              </button>

              <p className="text-xs text-gray-400 text-center mt-3">
                You must be{' '}
                <Link to="/login" className="text-amber-600 hover:underline">
                  logged in
                </Link>{' '}
                to book.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;
