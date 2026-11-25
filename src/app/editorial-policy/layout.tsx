import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description: 'Review Newyorkerherald editorial standards, fact-checking methodology, sourcing guidelines, and corrections policy.',
  alternates: {
    canonical: `${SITE_URL}/editorial-policy`,
  },
};

export default function EditorialPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
