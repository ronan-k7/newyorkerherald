import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Newyorkerherald, our independent global newsroom, editorial mission, and commitment to primary-source investigative journalism.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
