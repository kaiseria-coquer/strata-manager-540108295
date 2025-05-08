'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    async function fetchGreeting() {
      try {
        const res = await fetch('/api/edge/greeting');
        const data = await res.json();
        setGreeting(data.greeting);
      } catch (error) {
        console.error('Greeting fetch failed', error);
      }
    }

    fetchGreeting();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-8 flex flex-col items-center">
      {greeting && (
        <p className="text-lg mb-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded shadow">
          {greeting}
        </p>
      )}

      {/* Navigation buttons */}
      <div className="mb-6 flex flex-wrap justify-center gap-4">
        <Link href="/dashboard">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Dashboard</button>
        </Link>
        <Link href="/documents">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Documents</button>
        </Link>
        <Link href="/feedback">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Feedback</button>
        </Link>
        <Link href="/gallery">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Gallery</button>
        </Link>
        <Link href="/date">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Date</button>
        </Link>
        <Link href="/view-feedback">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">View Feedback (Admin)</button>
        </Link>
      </div>

      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Strata Manager 540108295</h1>
        <p className="mt-4 text-lg">
          Managing your building's communication, documents, and committee with ease.
        </p>

        <div className="mt-6 flex justify-center">
          <Image
            src="/static-web-design.webp"
            alt="Static Web Design"
            width={300}
            height={300}
            className="rounded shadow-lg"
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">Illustration: Static Web Design</p>
      </header>

      <main className="space-y-6 max-w-2xl">
        <section>
          <h2 className="text-2xl font-semibold">🏢 About This Website</h2>
          <p>
            This web application supports a strata committee in managing building operations.
            You can upload documents, review meetings, and submit feedback.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap justify-center">
            <img src="/office-svgrepo-com.svg" alt="Office" width={100} />
            <img src="/bookshelf-svgrepo-com.svg" alt="Bookshelf" width={100} />
            <img src="/pie-chart-svgrepo-com.svg" alt="Chart" width={100} />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">📄 Latest Announcements</h2>
          <ul className="list-disc ml-6">
            <li>Quarterly meeting on April 15th at 6:00 PM</li>
            <li>Fire safety inspection scheduled for April 20th</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">📬 Contact the Committee</h2>
          <p>
            For maintenance requests or general inquiries, please email us at{' '}
            <strong>committee@stratamanager.com</strong>
          </p>
        </section>
      </main>

      <footer className="mt-20 text-sm text-gray-500">
        &copy; 2025 Strata Manager | Created for INFO1111
      </footer>
    </div>
  );
}
