import type { Metadata } from 'next';
import { getArticleById, getArticleUrl } from '@/data/newsData';
import { SITE_URL, parsePublishedTimeToIso } from '@/lib/siteConfig';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    return {
      title: 'Story Not Found',
      description: 'The requested article could not be found.'
    };
  }

  const baseUrl = SITE_URL;
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
