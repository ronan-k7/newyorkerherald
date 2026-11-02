import { NextResponse } from 'next/server';
import { readDbFile } from '@/lib/serverDb';
import { UserAccount } from '@/types/news';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const users = readDbFile<UserAccount[]>('users.json', []);
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    }

    const res = NextResponse.json({ success: true, user });
    res.cookies.set('aura_session', JSON.stringify({ id: user.id, email: user.email, name: user.name, role: user.role }), {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    });
    return res;
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
