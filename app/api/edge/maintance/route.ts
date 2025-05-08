import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export async function GET() {
  const hour = new Date().getHours();
  if (hour >= 0 && hour <= 5) {
    return new Response("🛠️ Site is under maintenance. Please return later.", {
      status: 503,
    });
  }
  return NextResponse.json({ status: "Site operational" });
}
