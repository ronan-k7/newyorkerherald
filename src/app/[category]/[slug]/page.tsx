'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import AlinaHabbaSpecialDossierPage from '@/app/the-vanity-of-alina-habba-mildon/page';
import ArticleDetailPage from '@/app/article/[id]/page';

export default function DynamicArticlePage() {
  const params = useParams();
  const slug = (params?.slug as string) || '';

  if (slug === 'the-vanity-of-alina-habba-mildon') {
    return <AlinaHabbaSpecialDossierPage />;
  }

  return <ArticleDetailPage />;
}
