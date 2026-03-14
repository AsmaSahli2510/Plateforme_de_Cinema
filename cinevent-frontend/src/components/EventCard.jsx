import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  const {
    id = '1',
    title = 'Event Title',
    date = '2025-08-15',
    time = '20:00',
    location = 'Cinema Hall A',
    price = 12.5,
    seatsAvailable = 50,
    image = null,
    status = 'approved',
  } = event || {};

  const statusColors = {
    approved: 'bg-green-500',
    pending: 'bg-yellow-500',
    draft: 'bg-gray-500',
    cancelled: 'bg-red-500',
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
      {/* Image */}
      <div className="relative h-48 bg-gray-800 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <span className="text-5xl">🎬</span>
          </div>
        )}
        <span
          className={`absolute top-3 right-3 text-white text-xs px-2 py-1 rounded-full capitalize ${statusColors[status] || 'bg-gray-500'}`}
        >
          {status}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">{title}</h3>
        <div className="mt-2 space-y-1 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <span>📅</span>
            <span>{date} — {time}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📍</span>
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>💺</span>
            <span>{seatsAvailable} seats available</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-amber-600 font-bold text-lg">${price}</span>
          <Link
            to={`/events/${id}`}
            className="px-4 py-2 bg-amber-400 text-gray-900 rounded-lg font-medium hover:bg-amber-300 transition-colors text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
