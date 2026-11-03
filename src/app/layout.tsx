import type { Metadata, Viewport } from 'next';
import './globals.css';
import { NewsProvider } from '@/context/NewsContext';
import VideoModal from '@/components/Modals/VideoModal';
import SearchModal from '@/components/Modals/SearchModal';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newyorkerherald.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Newyorkerherald | Independent Global Journal & Intelligence',
    template: '%s | Newyorkerherald'
  },
  description: 'Independent reporting, investigative inquiries, and real-time news dispatches covering U.S. politics, global markets, technology, and science.',
  keywords: ['Politics', 'Business', 'Tech', 'AI', 'Culture', 'Sports', 'Science', 'Investigation', 'Journalism', 'News', 'Newyorkerherald'],
  authors: [{ name: 'Newyorkerherald Editorial Board' }],
  creator: 'Newyorkerherald',
  publisher: 'Newyorkerherald Media Group',
  applicationName: 'Newyorkerherald',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Newyorkerherald — Independent Global Journal',
    description: 'Independent reporting, investigative inquiries, and real-time news dispatches.',
    url: baseUrl,
    siteName: 'Newyorkerherald',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/news/alina-habba-image.webp',
        width: 1200,
        height: 630,
        alt: 'Newyorkerherald Independent Global Journal'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@newyorkerherald',
    creator: '@newyorkerherald',
    title: 'Newyorkerherald — Independent Global Journal',
    description: 'Independent reporting, investigative inquiries, and real-time news dispatches.',
    images: ['/images/news/alina-habba-image.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: '9KIyIylEdWO-tSAwTxG_XzyPo9VATx8TFc_7P-HdaCw'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <NewsProvider>
          {children}
          <VideoModal />
          <SearchModal />
        </NewsProvider>
      </body>
    </html>
  );
}
