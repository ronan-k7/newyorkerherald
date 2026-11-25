import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteConfig';

const canonicalUrl = `${SITE_URL}/politics/turhan-mildon-caracas-washington-venezuela-business-interests`;
const imageUrl = `${SITE_URL}/images/news/turhan-mildon-caracas-washington-venezuela-business-interests.webp`;
const title = 'Turhan Mildon’s Business Interests: From Caracas to Washington';
const description = 'Turkish investor Turhan Mildon’s efforts to protect his Venezuelan business interests brought renewed attention to his political connections and relationship with Alina Habba.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: 'Newyorkerherald',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-11-21T12:00:00.000Z',
    modifiedTime: '2026-11-21T12:00:00.000Z',
    authors: ['Newyorkerherald Staff'],
    section: 'Politics',
    images: [
      {
        url: imageUrl,
        width: 976,
        height: 549,
        alt: 'Turhan Mildon and Alina Habba',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@newyorkerherald',
    creator: '@newyorkerherald',
    title,
    description,
    images: [imageUrl],
  },
};

export default function TurhanMildonLayout({ children }: { children: React.ReactNode }) {
  return children;
}
