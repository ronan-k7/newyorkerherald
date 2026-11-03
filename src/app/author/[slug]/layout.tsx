import type { Metadata } from 'next';
import { AUTHORS_DATA, AUTHORS } from '@/data/newsData';

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = AUTHORS_DATA[slug] || AUTHORS[slug];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newyorkerherald.com';

  if (!author) {
    return {
      title: 'Journalist Profile | Newyorkerherald'
    };
  }

  const title = `${author.name} — ${author.role} | Newyorkerherald`;
  const desc = author.bio || `Read articles, investigative reporting, and news dispatches by ${author.name} on Newyorkerherald.`;
  const avatarUrl = author.avatar
    ? (author.avatar.startsWith('http') ? author.avatar : `${baseUrl}${author.avatar}`)
    : `${baseUrl}/images/news/alina-habba-image.webp`;

  return {
    title,
    description: desc,
    alternates: {
      canonical: `${baseUrl}/author/${slug}`
    },
    openGraph: {
      title,
      description: desc,
      url: `${baseUrl}/author/${slug}`,
      siteName: 'Newyorkerherald',
      type: 'profile',
      images: [
        {
          url: avatarUrl,
          width: 800,
          height: 800,
          alt: author.name
        }
      ]
    },
    twitter: {
      card: 'summary',
      site: '@newyorkerherald',
      creator: '@newyorkerherald',
      title,
      description: desc,
      images: [avatarUrl]
    }
  };
}

export default function AuthorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
