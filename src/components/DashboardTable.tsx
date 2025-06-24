'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { Switch } from '@/components/ui/switch';
import submissionsData from '@/data/submissions.json'; // ✅ static JSON import

interface Submission {
  id: string;
  name: string;
  category: string;
  location: string;
  fee: string;
}

export default function DashboardTable() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [statuses, setStatuses] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      try {
        setSubmissions(submissionsData);

        const initialStatus = Object.fromEntries(
          submissionsData.map((artist: Submission) => [artist.id, true])
        );
        setStatuses(initialStatus);
      } catch (err) {
        console.error('Error loading submissions:', err);
        toast.error('Error loading submissions.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleToggleStatus = (id: string) => {
    setStatuses((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    toast(`Toggled status for artist #${id}`);
  };

  const handleView = (name: string) => {
    toast.info(`Viewing artist: ${name}`);
  };

  return (
    <Card className="overflow-x-auto bg-neutral-800 text-white p-4">
      <h2 className="text-lg font-semibold mb-4">Artist Submissions</h2>
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-neutral-700 text-neutral-400">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Fee</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6} className="text-center py-4">Loading...</td>
            </tr>
          ) : submissions.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-4">No artist submissions found.</td>
            </tr>
          ) : (
            submissions.map((artist) => (
              <tr key={artist.id} className="border-b border-neutral-700">
                <td className="px-4 py-3">{artist.name}</td>
                <td className="px-4 py-3">{artist.category}</td>
                <td className="px-4 py-3">{artist.location}</td>
                <td className="px-4 py-3">{artist.fee}</td>
                <td className="px-4 py-3">
                  <Switch
                    checked={statuses[artist.id]}
                    onCheckedChange={() => handleToggleStatus(artist.id)}
                  />
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <Button variant="secondary" size="sm" onClick={() => handleView(artist.name)}>
                    View
                  </Button>
                  <Button variant="ghost" size="sm" disabled>
                    Edit
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Card>
  );
}


