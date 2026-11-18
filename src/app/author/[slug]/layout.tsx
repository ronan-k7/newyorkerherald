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
  const shareImageUrl = `${baseUrl}/images/news/alina-habba-image.webp`;

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
          url: shareImageUrl,
          width: 1200,
          height: 630,
          alt: author.name
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@newyorkerherald',
      creator: '@newyorkerherald',
      title,
      description: desc,
      images: [shareImageUrl]
    }
  };
}

export default function AuthorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
