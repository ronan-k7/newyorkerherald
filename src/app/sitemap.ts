import { MetadataRoute } from 'next';
import { getAllArticles, CATEGORIES_META, AUTHORS_DATA, getArticleUrl } from '@/data/newsData';
import { SITE_URL, parsePublishedTimeToIso } from '@/lib/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const now = new Date();

  // 1. Core Institutional & Static Pages (unique canonical URLs only)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'always',
      priority: 1.0,
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

  // 2. Canonical Category Hub Pages (avoid duplicate /category/* entries)
  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(CATEGORIES_META).map((slug) => ({
    url: `${baseUrl}/${slug}`,
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

  // 4. All Published News & Investigative Articles (Unique Canonical URLs)
  const articles = getAllArticles();
  const seenUrls = new Set<string>();
  const articleRoutes: MetadataRoute.Sitemap = [];

  for (const article of articles) {
    if (!article.id) continue;
    const articleUrlPath = getArticleUrl(article);
    const fullUrl = `${baseUrl}${articleUrlPath}`;
    if (seenUrls.has(fullUrl)) continue;
    seenUrls.add(fullUrl);

    const articleDate = article.publishedAt
      ? new Date(parsePublishedTimeToIso(article.publishedAt))
      : now;

    articleRoutes.push({
      url: fullUrl,
      lastModified: articleDate,
      changeFrequency: 'daily',
      priority: article.id === 'the-vanity-of-alina-habba-mildon' ? 0.95 : 0.8,
    });
  }

  return [...staticRoutes, ...categoryRoutes, ...authorRoutes, ...articleRoutes];
}
