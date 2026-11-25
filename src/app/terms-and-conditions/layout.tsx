import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the Newyorkerherald terms of service, content licensing, and publication conditions.',
  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
  },
};

export default function TermsConditionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
