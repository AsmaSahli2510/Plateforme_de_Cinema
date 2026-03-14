import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const STATS = [
  { label: 'Total Users', value: '1,284', icon: '👥', color: 'bg-blue-50 text-blue-600' },
  { label: 'Total Events', value: '86', icon: '🎬', color: 'bg-purple-50 text-purple-600' },
  { label: 'Reservations', value: '4,390', icon: '🎟️', color: 'bg-amber-50 text-amber-600' },
  { label: 'Total Revenue', value: '$52,480', icon: '💰', color: 'bg-green-50 text-green-600' },
];

const PENDING_EVENTS = [
  { id: '3', title: 'Cinema Paradiso', organizer: 'Cinéma Classique', date: '2025-09-10' },
  { id: '4', title: 'Amelie', organizer: 'Art House Films', date: '2025-09-12' },
];

const PENDING_ORGANIZERS = [
  { id: 'o1', name: 'Art House Films', email: 'contact@arthouse.com', applied: '2025-08-01' },
  { id: 'o2', name: 'Indie Cinema Co.', email: 'hello@indiecinema.com', applied: '2025-08-05' },
];

const RECENT_USERS = [
  { id: 'u1', name: 'Alice Martin', email: 'alice@example.com', role: 'spectator', active: true },
  { id: 'u2', name: 'Bob Koch', email: 'bob@example.com', role: 'organizer', active: true },
  { id: 'u3', name: 'Clara Stone', email: 'clara@example.com', role: 'spectator', active: false },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="bg-gray-900 text-white py-10 px-4 text-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-400 mt-1">Overview and management of the CinEvent platform</p>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10 space-y-10">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className={`rounded-xl p-5 text-center ${s.color} bg-opacity-20`}>
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-sm mt-1 opacity-80">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Events */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Pending Event Approvals</h2>
            {PENDING_EVENTS.length === 0 ? (
              <p className="text-gray-400 text-sm">No pending events.</p>
            ) : (
              <div className="space-y-3">
                {PENDING_EVENTS.map((e) => (
                  <div key={e.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{e.title}</p>
                      <p className="text-xs text-gray-500">
                        {e.organizer} · {e.date}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="px-3 py-1 text-xs bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        className="px-3 py-1 text-xs bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pending Organizers */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Pending Organizer Validations</h2>
            {PENDING_ORGANIZERS.length === 0 ? (
              <p className="text-gray-400 text-sm">No pending organizers.</p>
            ) : (
              <div className="space-y-3">
                {PENDING_ORGANIZERS.map((o) => (
                  <div key={o.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{o.name}</p>
                      <p className="text-xs text-gray-500">
                        {o.email} · Applied {o.applied}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="px-3 py-1 text-xs bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        className="px-3 py-1 text-xs bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Users</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Email</th>
                  <th className="pb-3 font-medium">Role</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {RECENT_USERS.map((u) => (
                  <tr key={u.id}>
                    <td className="py-3 font-semibold text-gray-800">{u.name}</td>
                    <td className="py-3 text-gray-600">{u.email}</td>
                    <td className="py-3 capitalize text-gray-600">{u.role}</td>
                    <td className="py-3">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          u.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {u.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="py-3">
                      <button
                        type="button"
                        className={`text-xs px-3 py-1 rounded-lg font-medium transition-colors ${
                          u.active
                            ? 'border border-red-400 text-red-500 hover:bg-red-50'
                            : 'border border-green-400 text-green-600 hover:bg-green-50'
                        }`}
                      >
                        {u.active ? 'Deactivate' : 'Activate'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
