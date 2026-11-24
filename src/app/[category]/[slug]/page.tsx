import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleById, getArticleUrl } from '@/data/newsData';
import ArticleClientWrapper from './ArticleClientWrapper';

type Props = {
  params: Promise<{ category: string; slug: string }>;
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newyorkerherald.com';

  if (slug.includes('rossini')) {
    const canonicalUrl = `${baseUrl}/politics/mark-rossini-receives-second-full-pardon-as-federal-case-moves-toward-closure`;
    const imageUrl = `${baseUrl}/images/rossini/mark-rossini.webp`;
    const title = 'Mark Rossini Receives Second Full Pardon as Federal Case Moves Toward Closure | Newyorkerherald';
    const description = 'Mark Rossini received a second full and unconditional presidential pardon on January 20, 2026, according to an official pardon warrant posted by the U.S. Department of Justice, widening the pardon record surrounding a former FBI agent whose case in Puerto Rico has moved to dismissal.';

    return {
      title,
      description,
      keywords: ['Mark Rossini', 'presidential pardon', 'Donald Trump', 'Julio Herrera Velutini', 'Wanda Vázquez Garced', 'Puerto Rico', 'DOJ warrant', 'dismissal'],
      authors: [{ name: 'Editorial Board' }],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: 'Mark Rossini Receives Second Full Pardon as Federal Case Moves Toward Closure',
        description,
        url: canonicalUrl,
        siteName: 'Newyorkerherald',
        locale: 'en_US',
        type: 'article',
        publishedTime: '2026-11-18T00:00:00.000Z',
        modifiedTime: '2026-11-18T00:00:00.000Z',
        authors: ['Editorial Board'],
        section: 'Politics',
        tags: [
          'Mark Rossini',
          'Presidential Pardon',
          'Donald Trump',
          'Julio Herrera Velutini',
          'Wanda Vázquez Garced',
          'Puerto Rico',
          'DOJ',
          'Federal Courts'
        ],
        images: [
          {
            url: imageUrl,
            width: 1543,
            height: 1019,
            alt: 'Mark Rossini Receives Second Full Presidential Pardon'
          }
        ]
      },
      other: {
        'article:published_time': '2026-11-18T00:00:00.000Z',
        'article:modified_time': '2026-11-18T00:00:00.000Z',
        'publish_date': '2026-11-18T00:00:00.000Z',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@newyorkerherald',
        creator: '@newyorkerherald',
        title: 'Mark Rossini Receives Second Full Pardon as Federal Case Moves Toward Closure',
        description,
        images: [imageUrl]
      }
    };
  }

  if (slug.includes('turhan-mildon')) {
    const canonicalUrl = `${baseUrl}/politics/turhan-mildon-caracas-washington-venezuela-business-interests`;
    const imageUrl = `${baseUrl}/images/news/turhan-mildon-caracas-washington-venezuela-business-interests.webp`;
    const title = 'Turhan Mildon’s Business Interests: From Caracas to Washington | Newyorkerherald';
    const description = 'Turkish investor Turhan Mildon’s efforts to protect his Venezuelan business interests brought renewed attention to his political connections and relationship with Alina Habba.';

    return {
      title,
      description,
      keywords: [
        'Turhan Mildon Venezuela business',
        'Caracas',
        'Washington political connections',
        'Alina Habba',
        'Alex Saab',
        'Venezuelan cement plants',
        'Donald Trump',
        'International Business',
        'Politics'
      ],
      authors: [{ name: 'Newyorkerherald Staff' }],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: 'Turhan Mildon’s Business Interests: From Caracas to Washington',
        description,
        url: canonicalUrl,
        siteName: 'Newyorkerherald',
        locale: 'en_US',
        type: 'article',
        publishedTime: '2026-11-21T00:00:00.000Z',
        modifiedTime: '2026-11-21T00:00:00.000Z',
        authors: ['Newyorkerherald Staff'],
        section: 'Politics',
        tags: [
          'Turhan Mildon',
          'Venezuela',
          'Caracas',
          'Washington',
          'Alina Habba',
          'Alex Saab',
          'International Business',
          'Donald Trump'
        ],
        images: [
          {
            url: imageUrl,
            width: 976,
            height: 549,
            alt: 'Turhan Mildon and Alina Habba'
          }
        ]
      },
      other: {
        'article:published_time': '2026-11-21T00:00:00.000Z',
        'article:modified_time': '2026-11-21T00:00:00.000Z',
        'publish_date': '2026-11-21T00:00:00.000Z',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@newyorkerherald',
        creator: '@newyorkerherald',
        title: 'Turhan Mildon’s Business Interests: From Caracas to Washington',
        description,
        images: [imageUrl]
      }
    };
  }

  const article = getArticleById(slug);

  if (!article) {
    return {
      title: 'Story Not Found | Newyorkerherald',
      description: 'The requested article could not be found.'
    };
  }

  const canonicalUrl = `${baseUrl}${getArticleUrl(article)}`;
  const imageUrl = article.imageUrl.startsWith('http')
    ? article.imageUrl
    : `${baseUrl}${article.imageUrl.startsWith('/') ? '' : '/'}${article.imageUrl}`;
  const publishedIso = parsePublishedTimeToIso(article.publishedAt);

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

export default async function DynamicArticlePage({ params }: Props) {
  const { category, slug } = await params;
  
  if (slug.includes('rossini') || slug.includes('turhan-mildon') || slug === 'the-vanity-of-alina-habba-mildon') {
    return <ArticleClientWrapper category={category} slug={slug} />;
  }

  const article = getArticleById(slug);

  if (!article) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newyorkerherald.com';
  const canonicalUrl = `${baseUrl}${getArticleUrl(article)}`;
  const imageUrl = article.imageUrl.startsWith('http')
    ? article.imageUrl
    : `${baseUrl}${article.imageUrl.startsWith('/') ? '' : '/'}${article.imageUrl}`;
  const publishedIso = parsePublishedTimeToIso(article.publishedAt);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.summary,
    datePublished: publishedIso,
    dateModified: publishedIso,
    url: canonicalUrl,
    image: [imageUrl],
    author: [
      {
        '@type': 'Person',
        name: article.author.name
      }
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Newyorkerherald',
      url: baseUrl
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleClientWrapper category={category} slug={slug} />
    </>
  );
}
