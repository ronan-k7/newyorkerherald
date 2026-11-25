import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CATEGORIES_META } from '@/data/newsData';
import CategoryPageClient from './CategoryPageClient';
import { SITE_URL } from '@/lib/siteConfig';

const VALID_CATEGORIES = new Set([
  'us',
  'politics',
  'business',
  'tech',
  'entertainment',
  'sports',
  'science',
  'opinion',
  'investigation',
  'tech-ai',
  'health-science'
]);

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const catLower = category?.toLowerCase();
  const resolvedSlug = catLower === 'tech-ai' ? 'tech' : catLower === 'health-science' ? 'science' : catLower;
  const meta = CATEGORIES_META[resolvedSlug] || CATEGORIES_META[catLower];
  const displayName = meta?.name || (catLower ? catLower.toUpperCase() : 'News');
  const description = meta?.description || `In-depth ${displayName} reporting, real-time intelligence, and verified news dispatches.`;
  const canonicalUrl = `${SITE_URL}/${resolvedSlug}`;
  const categoryImageUrl = resolvedSlug === 'us'
    ? `${SITE_URL}/images/news/alina-habba-image.webp`
    : `${SITE_URL}/images/rossini/mark-rossini.webp`;

  return {
    title: displayName,
    description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: `${displayName} | Newyorkerherald`,
      description,
      url: canonicalUrl,
      siteName: 'Newyorkerherald',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: categoryImageUrl,
          width: 1200,
          height: 630,
          alt: `${displayName} | Newyorkerherald`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@newyorkerherald',
      creator: '@newyorkerherald',
      title: `${displayName} | Newyorkerherald`,
      description,
      images: [categoryImageUrl]
    }
  };
}

export default async function CategoryDirectPage({ params }: Props) {
  const { category } = await params;
  const catLower = category?.toLowerCase();

  if (!catLower || !VALID_CATEGORIES.has(catLower)) {
    notFound();
  }

  return <CategoryPageClient />;
}
