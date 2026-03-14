import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SAMPLE_RESERVATIONS = [
  { id: 'RES001', event: 'The Grand Illusion', date: '2025-09-01', time: '19:30', seats: 2, total: 20, status: 'confirmed' },
  { id: 'RES002', event: 'Midnight in Paris', date: '2025-09-05', time: '21:00', seats: 1, total: 12, status: 'confirmed' },
  { id: 'RES003', event: 'Cinema Paradiso', date: '2025-09-10', time: '20:00', seats: 3, total: 42, status: 'cancelled' },
];

const statusStyles = {
  confirmed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  cancelled: 'bg-red-100 text-red-700',
};

const MyReservations = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="bg-gray-900 text-white py-10 px-4 text-center">
        <h1 className="text-3xl font-bold">My Reservations</h1>
        <p className="text-gray-400 mt-1">Manage all your booked cinema events</p>
      </div>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-10">
        {SAMPLE_RESERVATIONS.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl">🎟️</span>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">No reservations yet</h3>
            <p className="text-gray-400 mt-1">Browse events and book your first ticket!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {SAMPLE_RESERVATIONS.map((r) => (
              <div key={r.id} className="bg-white rounded-xl shadow-sm p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-gray-800">{r.event}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${statusStyles[r.status]}`}>
                      {r.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div>📅 {r.date} — {r.time}</div>
                    <div>💺 {r.seats} seat{r.seats > 1 ? 's' : ''} · Total: <strong>${r.total}</strong></div>
                    <div className="text-xs text-gray-400">Booking #{r.id}</div>
                  </div>
                </div>

                <div className="flex gap-3 flex-shrink-0">
                  {r.status === 'confirmed' && (
                    <button
                      type="button"
                      className="px-4 py-2 rounded-lg border border-red-400 text-red-500 hover:bg-red-50 transition-colors text-sm font-medium"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-amber-400 text-gray-900 hover:bg-amber-300 transition-colors text-sm font-medium"
                  >
                    View Ticket
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MyReservations;
