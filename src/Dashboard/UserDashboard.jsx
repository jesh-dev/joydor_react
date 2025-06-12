// src/components/Layout.jsx
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

export default function Layout() {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setUser({ name: 'John Doe', email: 'john@example.com' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center bg-white px-4 py-3 shadow">
        <h2 className="text-lg font-bold text-blue-600">Dashboard</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600">☰</button>
      </div>

      {/* Sidebar */}
      <aside className={`bg-white shadow-lg md:w-64 w-full md:block ${sidebarOpen ? 'block' : 'hidden'} md:relative absolute z-10`}>
        <div className="p-6 space-y-4 text-gray-700">
          <h2 className="text-xl font-bold text-blue-600">Dashboard</h2>
          <nav className="space-y-3">
            <Link to="/" className="block hover:text-blue-600">🏠 Overview</Link>
            <Link to="/payment" className="block hover:text-blue-600">💳 Make Payment</Link>
            <Link to="/history" className="block hover:text-blue-600">📄 Payment History</Link>
            <Link to="/logout" className="block hover:text-blue-600">📄 Logout</Link>
          </nav>
        </div>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-4 md:p-6 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome, {user?.name}</h1>
        <Outlet context={{ user }} />
      </main>
    </div>
  );
}