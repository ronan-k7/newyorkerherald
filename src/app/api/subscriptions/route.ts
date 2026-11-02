import { NextResponse } from 'next/server';
import { readDbFile, writeDbFile } from '@/lib/serverDb';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ success: false, message: 'Invalid email' }, { status: 400 });
    }

    const subs = readDbFile<any[]>('subscriptions.json', []);
    if (!subs.some(s => s.email.toLowerCase() === email.toLowerCase())) {
      subs.push({
        id: 'sub_' + Date.now(),
        email: email.toLowerCase(),
        frequency: 'daily',
        subscribedAt: new Date().toISOString()
      });
      writeDbFile('subscriptions.json', subs);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
