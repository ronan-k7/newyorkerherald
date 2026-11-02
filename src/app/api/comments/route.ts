import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { readDbFile, writeDbFile } from '@/lib/serverDb';
import { Comment } from '@/types/news';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const articleId = searchParams.get('articleId');

  const commentsDb = readDbFile<Record<string, Comment[]>>('comments.json', {});
  const articleComments = articleId ? (commentsDb[articleId] || []) : [];

  return NextResponse.json({ comments: articleComments, count: articleComments.length });
}

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('aura_session');

    if (!session) {
      return NextResponse.json({ success: false, message: 'Authentication required to post comments' }, { status: 401 });
    }

    const user = JSON.parse(session.value);
    const { articleId, content } = await req.json();

    if (!articleId || !content.trim()) {
      return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
    }

    const commentsDb = readDbFile<Record<string, Comment[]>>('comments.json', {});
    const list = commentsDb[articleId] || [];

    const newComment: Comment = {
      id: 'cmt_' + Date.now(),
      articleId,
      authorName: user.name,
      authorRole: user.role,
      authorAvatar: '/images/authors/sarah_mitchell.jpg',
      content: content.trim(),
      createdAt: new Date().toISOString(),
      likes: 0
    };

    list.unshift(newComment);
    commentsDb[articleId] = list;
    writeDbFile('comments.json', commentsDb);

    return NextResponse.json({ success: true, comment: newComment });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
