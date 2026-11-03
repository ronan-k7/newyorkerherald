import type { Metadata } from 'next';
import { LEAD_ARTICLE } from '@/data/newsData';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newyorkerherald.com';

export const metadata: Metadata = {
  title: 'The Vanity of Alina Habba Mildon: Beauty, Power, Ambition and the Price of Loyalty',
  description: LEAD_ARTICLE.summary,
  alternates: {
    canonical: `${baseUrl}/us/the-vanity-of-alina-habba-mildon`
  },
  openGraph: {
    title: 'The Vanity of Alina Habba Mildon: Beauty, Power, Ambition and the Price of Loyalty',
    description: LEAD_ARTICLE.summary,
    url: `${baseUrl}/us/the-vanity-of-alina-habba-mildon`,
    siteName: 'Newyorkerherald',
    type: 'article',
    publishedTime: '2026-11-01T00:00:00.000Z',
    authors: ['Newyorkerherald Staff'],
    section: 'US',
    tags: ['Investigation', 'Alina Habba', 'Herrera Velutini', 'Donald Trump', 'Banking Dynasty', 'White House', 'Special Report'],
    images: [
      {
        url: `${baseUrl}/images/news/alina-habba-image.webp`,
        width: 1200,
        height: 630,
        alt: 'The Vanity of Alina Habba Mildon'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@newyorkerherald',
    creator: '@newyorkerherald',
    title: 'The Vanity of Alina Habba Mildon: Beauty, Power, Ambition and the Price of Loyalty',
    description: LEAD_ARTICLE.summary,
    images: [`${baseUrl}/images/news/alina-habba-image.webp`]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
