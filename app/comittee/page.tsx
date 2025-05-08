'use client';

import { useState } from 'react';

export default function CommitteePage() {
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  
  console.log("ENV on client:", process.env.NEXT_PUBLIC_ADMIN_PASSWORD);

  const handleLogin = () => {
    if (input === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="p-8">
      {!authenticated ? (
        <div className="space-y-4 max-w-md">
          <h1 className="text-2xl font-bold">Committee Login</h1>
          <input
            type="password"
            placeholder="Enter password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border p-2"
          />
          <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-2">Welcome, Committee Member!</h1>
          <p>This page is protected by a password.</p>
        </div>
      )}
    </div>
  );
}
