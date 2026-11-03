import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CATEGORIES_META } from '@/data/newsData';
import CategoryPageClient from './CategoryPageClient';

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
  const meta = CATEGORIES_META[catLower];
  const title = meta?.name ? `${meta.name} | Newyorkerherald` : `${catLower ? catLower.toUpperCase() : 'News'} | Newyorkerherald`;
  const description = meta?.description || `In-depth ${meta?.name || category} reporting, real-time intelligence, and verified news dispatches.`;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newyorkerherald.com';

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${catLower}`
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${catLower}`,
      siteName: 'Newyorkerherald',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: `${baseUrl}/images/news/alina-habba-image.webp`,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@newyorkerherald',
      creator: '@newyorkerherald',
      title,
      description,
      images: [`${baseUrl}/images/news/alina-habba-image.webp`]
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
