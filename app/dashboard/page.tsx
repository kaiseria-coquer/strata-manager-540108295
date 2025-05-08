'use client';

import { useState } from 'react';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    units: 32,
    maintenanceRequests: 5,
    unreadMessages: 2,
  });

  function refreshStats() {
    // Fake update for demo purposes
    setStats({
      units: 32,
      maintenanceRequests: Math.floor(Math.random() * 10),
      unreadMessages: Math.floor(Math.random() * 5),
    });
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Strata Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <DashboardCard label="Total Units" value={stats.units} />
        <DashboardCard label="Pending Maintenance" value={stats.maintenanceRequests} />
        <DashboardCard label="Unread Messages" value={stats.unreadMessages} />
      </div>

      <button
        onClick={refreshStats}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Refresh Stats
      </button>
    </div>
  );
}

function DashboardCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white p-4 shadow rounded border hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{label}</h2>
      <p className="text-2xl text-blue-700 mt-2">{value}</p>
    </div>
  );
}
