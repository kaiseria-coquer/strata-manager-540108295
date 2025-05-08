import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Mark as Edge Function

export async function GET() {
  const greeting = `👋 Welcome to Strata Manager!`;
  return NextResponse.json({ greeting });  // <- MUST return a valid JSON object
}
