import { MetadataRoute } from 'next';
import { getAllArticles, CATEGORIES_META, AUTHORS_DATA } from '@/data/newsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newyorkerherald.com';
  const now = new Date();

  // 1. Core Institutional & Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'always',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/the-vanity-of-alina-habba-mildon`,
      lastModified: now,
      changeFrequency: 'hourly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/editorial-policy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];

  // 2. All 8 Category Hub Pages
  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(CATEGORIES_META).map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: now,
    changeFrequency: 'hourly',
    priority: 0.9,
  }));

  // 3. Author / Editorial Profile Hubs
  const authorRoutes: MetadataRoute.Sitemap = Object.keys(AUTHORS_DATA).map((slug) => ({
    url: `${baseUrl}/author/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // 4. All Published News & Investigative Articles (Unique Slugs)
  const articles = getAllArticles();
  const seenArticles = new Set<string>();
  const articleRoutes: MetadataRoute.Sitemap = [];

  for (const article of articles) {
    if (!article.id || seenArticles.has(article.id)) continue;
    seenArticles.add(article.id);

    let articleDate = now;
    if (article.publishedAt) {
      const parsed = new Date(article.publishedAt);
      if (!isNaN(parsed.getTime())) {
        articleDate = parsed;
      }
    }

    articleRoutes.push({
      url: `${baseUrl}/article/${article.id}`,
      lastModified: articleDate,
      changeFrequency: 'daily',
      priority: 0.8,
    });
  }

  return [...staticRoutes, ...categoryRoutes, ...authorRoutes, ...articleRoutes];
}
