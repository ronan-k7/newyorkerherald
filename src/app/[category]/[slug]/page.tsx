import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleById, getArticleUrl } from '@/data/newsData';
import ArticleClientWrapper from './ArticleClientWrapper';

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

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
        publishedTime: '2026-01-20T00:00:00.000Z',
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
  
  if (slug.includes('rossini') || slug.includes('turhan-mildon') || slug === 'the-vanity-of-alina-habba-mildon') {
    return <ArticleClientWrapper category={category} slug={slug} />;
  }

  const article = getArticleById(slug);

  if (!article) {
    notFound();
  }

  return <ArticleClientWrapper category={category} slug={slug} />;
}
