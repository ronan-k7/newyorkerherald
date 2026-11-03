import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleById, getArticleUrl } from '@/data/newsData';
import ArticleClientWrapper from './ArticleClientWrapper';

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticleById(slug);

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

  return {
    title: article.title,
    description: article.summary,
    keywords: article.tags || [article.category, 'Journalism', 'News', 'Special Report'],
    authors: [{ name: article.author.name }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: canonicalUrl,
      siteName: 'Newyorkerherald',
      locale: 'en_US',
      type: 'article',
      publishedTime: '2026-11-01T00:00:00.000Z',
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

export default async function DynamicArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const article = getArticleById(slug);

  if (!article) {
    notFound();
  }

  return <ArticleClientWrapper category={category} slug={slug} />;
}
