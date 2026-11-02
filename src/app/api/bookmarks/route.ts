import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { readDbFile, writeDbFile } from '@/lib/serverDb';

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get('aura_session');
  const userId = session ? JSON.parse(session.value).id : 'guest';

  const bookmarksDb = readDbFile<Record<string, string[]>>('bookmarks.json', {});
  const userBookmarks = bookmarksDb[userId] || [];

  return NextResponse.json({ bookmarks: userBookmarks });
}

export async function POST(req: Request) {
  try {
    const { articleId, action } = await req.json();
    const cookieStore = await cookies();
    const session = cookieStore.get('aura_session');
    const userId = session ? JSON.parse(session.value).id : 'guest';

    const bookmarksDb = readDbFile<Record<string, string[]>>('bookmarks.json', {});
    const currentList = bookmarksDb[userId] || [];

    let updatedList: string[];
    if (action === 'add') {
      updatedList = Array.from(new Set([...currentList, articleId]));
    } else {
      updatedList = currentList.filter(id => id !== articleId);
    }

    bookmarksDb[userId] = updatedList;
    writeDbFile('bookmarks.json', bookmarksDb);

    return NextResponse.json({ success: true, bookmarks: updatedList });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
