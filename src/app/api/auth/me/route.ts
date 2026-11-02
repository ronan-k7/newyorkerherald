import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { readDbFile } from '@/lib/serverDb';
import { UserAccount } from '@/types/news';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('aura_session');
    if (!session) {
      return NextResponse.json({ user: null });
    }

    const sessionData = JSON.parse(session.value);
    const users = readDbFile<UserAccount[]>('users.json', []);
    const user = users.find(u => u.id === sessionData.id);

    return NextResponse.json({ user: user || null });
  } catch {
    return NextResponse.json({ user: null });
  }
}
