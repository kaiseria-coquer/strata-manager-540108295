'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name, message }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      setSubmitted(true);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Contact the Committee</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border p-2"
            rows={4}
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Send
          </button>
        </form>
      ) : (
        <p className="text-green-600">Message sent successfully!</p>
      )}
    </div>
  );
}
