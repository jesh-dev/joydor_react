// src/pages/Overview.jsx
import { useOutletContext } from 'react-router-dom';

export default function Overview() {
  const { user } = useOutletContext();
  return (
    <section className="bg-white rounded-2xl shadow p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">🙋 Profile Overview</h2>
      <div className="space-y-1 text-gray-600">
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
    </section>
  );
}