'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import CategoryPage from '@/app/category/[slug]/page';

const VALID_CATEGORIES = new Set([
  'us',
  'politics',
  'business',
  'tech',
  'entertainment',
  'sports',
  'science',
  'opinion',
  'investigation',
  'tech-ai',
  'health-science'
]);

export default function CategoryDirectPage() {
  const params = useParams();
  const category = (params?.category as string)?.toLowerCase();

  if (!category || !VALID_CATEGORIES.has(category)) {
    notFound();
  }

  return <CategoryPage />;
}
