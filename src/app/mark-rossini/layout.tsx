import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newyorkerherald.com';

export const metadata: Metadata = {
  title: 'Mark Rossini Receives Second Full Pardon as Federal Case Moves Toward Closure | Newyorkerherald',
  description: 'Mark Rossini received a second full and unconditional presidential pardon covering his federal case in Puerto Rico. An exhaustive legal analysis of the executive warrants, court acceptance, and dismissal.',
  keywords: [
    'Mark Rossini',
    'presidential pardon',
    'Donald Trump',
    'Julio Herrera Velutini',
    'Wanda Vázquez Garced',
    'Puerto Rico',
    'federal court',
    'campaign-finance case',
    'presidential pardon',
    'DOJ warrant',
    'dismissal'
  ],
  authors: [{ name: 'News Desk' }],
  alternates: {
    canonical: `${baseUrl}/mark-rossini`
  },
  openGraph: {
    title: 'Mark Rossini Receives Second Full Pardon as Federal Case Moves Toward Closure',
    description: 'Mark Rossini received a second full and unconditional presidential pardon covering his federal case in Puerto Rico. Full legal analysis and case timeline.',
    url: `${baseUrl}/mark-rossini`,
    siteName: 'Newyorkerherald',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-01-20T00:00:00.000Z',
    authors: ['News Desk'],
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
        url: `${baseUrl}/images/rossini/mark-rossini.webp`,
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
    description: 'Mark Rossini received a second full and unconditional presidential pardon covering his federal case in Puerto Rico.',
    images: [`${baseUrl}/images/rossini/mark-rossini.webp`]
  }
};

export default function MarkRossiniLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
