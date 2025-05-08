'use client';

import { useEffect, useState } from 'react';

export default function ViewFeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    async function loadFeedback() {
      const res = await fetch('/api/view-feedback');
      const data = await res.json();
      setFeedbacks(data);
    }

    loadFeedback();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Submitted Feedback</h1>
      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <ul className="space-y-4">
          {feedbacks.map((entry: any) => (
            <li key={entry.id} className="border p-4 rounded shadow">
              <p><strong>Unit:</strong> {entry.unit}</p>
              <p><strong>Message:</strong> {entry.message}</p>
              <p className="text-sm text-gray-500">Submitted: {new Date(entry.submitted_at).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
