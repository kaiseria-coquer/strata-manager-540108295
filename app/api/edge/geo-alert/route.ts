import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
  regions: ['all'],
};

export async function GET(req: Request) {
  const country = (req as any).geo?.country || 'Unknown';
  const allowed = country === 'AU';
  return NextResponse.json({
    access: allowed ? 'Allowed' : 'Blocked or logged',
    country,
  });
}
