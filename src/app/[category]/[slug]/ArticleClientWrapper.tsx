'use client';

import React from 'react';
import AlinaHabbaSpecialDossierPage from '@/app/the-vanity-of-alina-habba-mildon/page';
import MarkRossiniArticlePage from '@/components/Article/MarkRossiniArticlePage';
import ArticleDetailPage from '@/app/article/[id]/page';

export default function ArticleClientWrapper({ category, slug }: { category: string; slug: string }) {
  if (slug === 'the-vanity-of-alina-habba-mildon') {
    return <AlinaHabbaSpecialDossierPage />;
  }
  if (slug.includes('rossini')) {
    return <MarkRossiniArticlePage />;
  }

  return <ArticleDetailPage />;
}
