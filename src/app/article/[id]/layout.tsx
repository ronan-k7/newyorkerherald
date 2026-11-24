import type { Metadata } from 'next';
import { getArticleById, getArticleUrl } from '@/data/newsData';

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

function parsePublishedTimeToIso(dateStr?: string): string {
  if (!dateStr) return '2026-11-24T12:00:00.000Z';
  const trimmed = dateStr.trim();
  const lower = trimmed.toLowerCase();
  if (lower === 'today') return '2026-11-24T12:00:00.000Z';
  if (lower === 'yesterday') return '2026-11-23T12:00:00.000Z';

  const match = trimmed.match(/([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})/);
  if (match) {
    const months: Record<string, string> = {
      jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
      jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12'
    };
    const mStr = match[1].slice(0, 3).toLowerCase();
    const mm = months[mStr] || '11';
    const dd = match[2].padStart(2, '0');
    const yyyy = match[3];
    return `${yyyy}-${mm}-${dd}T12:00:00.000Z`;
  }

  try {
    const d = new Date(trimmed);
    if (!isNaN(d.getTime())) {
      const yyyy = d.getUTCFullYear();
      const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
      const dd = String(d.getUTCDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}T12:00:00.000Z`;
    }
  } catch {}
  return '2026-11-24T12:00:00.000Z';
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    return {
      title: 'Story Not Found | Newyorkerherald',
      description: 'The requested article could not be found.'
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newyorkerherald.com';
  const canonicalUrl = `${baseUrl}${getArticleUrl(article)}`;
  const imageUrl = article.imageUrl.startsWith('http')
    ? article.imageUrl
    : `${baseUrl}${article.imageUrl.startsWith('/') ? '' : '/'}${article.imageUrl}`;
  const publishedIso = parsePublishedTimeToIso(article.publishedAt);

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: canonicalUrl,
      siteName: 'Newyorkerherald',
      type: 'article',
      publishedTime: publishedIso,
      modifiedTime: publishedIso,
      authors: [article.author.name],
      section: article.category,
      tags: article.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title
        }
      ]
    },
    other: {
      'article:published_time': publishedIso,
      'article:modified_time': publishedIso,
      'publish_date': publishedIso,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@newyorkerherald',
      creator: '@newyorkerherald',
      title: article.title,
      description: article.summary,
      images: [imageUrl]
    }
  };
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
