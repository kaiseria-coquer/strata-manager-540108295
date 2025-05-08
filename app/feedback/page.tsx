'use client';

import { useState } from 'react';

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [unit, setUnit] = useState('');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ unit, feedback }),
    });

    const result = await res.json();

    if (result.success) {
      setSubmitted(true);
      setUnit('');
      setFeedback('');
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Resident Feedback</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            className="w-full p-2 border rounded"
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder="Unit Number"
            name="unit"
            required
          />
          <textarea
            className="w-full p-2 border rounded"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback"
            name="feedback"
            required
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-medium">✅ Thank you for your feedback!</p>
      )}
    </div>
  );
}
