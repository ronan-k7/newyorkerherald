import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

const tagNames: Record<string, string> = {
  'alina-habba': 'Alina Habba',
  'alina-habba-mildon': 'Alina Habba Mildon',
  'donald-trump': 'Donald Trump',
  'trump-administration': 'Trump Administration',
  'us-politics': 'U.S. Politics',
  'banking-controversy': 'Banking Controversy',
  'financial-contracts': 'Financial Contracts',
  'legal-affairs': 'Legal Affairs',
  'concord-partners': 'Concord Partners',
  'political-controversy': 'Political Controversy',
  'us-legal-news': 'U.S. Legal News',
  'banking-industry': 'Banking Industry'
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tagName = tagNames[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newyorkerherald.com';

  return {
    title: `${tagName} — News, Dispatches & Analysis | Newyorkerherald`,
    description: `Explore all investigative reporting, verified dispatches, and in-depth coverage tagged with ${tagName} on Newyorkerherald.`,
    alternates: {
      canonical: `${baseUrl}/tag/${slug}`
    },
    openGraph: {
      title: `${tagName} — News & Reporting`,
      description: `All articles and investigations tagged with ${tagName}.`,
      url: `${baseUrl}/tag/${slug}`,
      siteName: 'Newyorkerherald',
      type: 'website'
    }
  };
}

export default function TagLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
