import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
