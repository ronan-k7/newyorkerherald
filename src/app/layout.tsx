import type { Metadata } from 'next';
import './globals.css';
import { NewsProvider } from '@/context/NewsContext';
import AuthModal from '@/components/Modals/AuthModal';
import VideoModal from '@/components/Modals/VideoModal';
import SavedArticlesDrawer from '@/components/Modals/SavedArticlesDrawer';
import SearchModal from '@/components/Modals/SearchModal';

export const metadata: Metadata = {
  title: 'Newyorkerherald | Independent Global Journal & Intelligence',
  description: 'Curated global journalism, economic analysis, tech breakthroughs, and visual documentaries.',
  keywords: ['Politics', 'Business', 'Tech', 'AI', 'Culture', 'Sports', 'Health', 'Journalism'],
  authors: [{ name: 'Newyorkerherald Editorial Board' }],
  openGraph: {
    title: 'Newyorkerherald — Independent Global Journal',
    description: 'Independent reporting, investigations, and real-time news dispatches.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Newyorkerherald'
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
          <AuthModal />
          <VideoModal />
          <SavedArticlesDrawer />
          <SearchModal />
        </NewsProvider>
      </body>
    </html>
  );
}
