import type { Metadata } from 'next';
import { AUTHORS_DATA, AUTHORS } from '@/data/newsData';
import { SITE_URL } from '@/lib/siteConfig';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = AUTHORS_DATA[slug] || AUTHORS[slug];
  const baseUrl = SITE_URL;

  if (!author) {
    return {
      title: 'Journalist Profile',
      alternates: {
        canonical: `${baseUrl}/author/${slug}`
      }
    };
  }

  const cleanTitle = `${author.name} — ${author.role}`;
  const desc = author.bio || `Read articles, investigative reporting, and news dispatches by ${author.name} on Newyorkerherald.`;
  const shareImageUrl = `${baseUrl}/images/news/alina-habba-image.webp`;

  return {
    title: cleanTitle,
    description: desc,
    alternates: {
      canonical: `${baseUrl}/author/${slug}`
    },
    openGraph: {
      title: `${cleanTitle} | Newyorkerherald`,
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
      title: `${cleanTitle} | Newyorkerherald`,
      description: desc,
      images: [shareImageUrl]
    }
  };
}

export default function AuthorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
