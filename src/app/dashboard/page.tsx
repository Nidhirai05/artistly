'use client';

import DashboardTable from '@/components/DashboardTable';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">📊 Manager Dashboard</h1>
        <DashboardTable />
      </div>
    </div>
  );
}
