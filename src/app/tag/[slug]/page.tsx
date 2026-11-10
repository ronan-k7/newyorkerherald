'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import { getAllArticles, getArticleUrl, getAuthorSlugFromName } from '@/data/newsData';
import { Article } from '@/types/news';
import { ArrowLeft, Clock, ArrowRight, Tag as TagIcon, Sparkles } from 'lucide-react';

const TAG_NAMES: Record<string, string> = {
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

const POPULAR_TAGS = [
  { name: 'Alina Habba', slug: 'alina-habba' },
  { name: 'Alina Habba Mildon', slug: 'alina-habba-mildon' },
  { name: 'Donald Trump', slug: 'donald-trump' },
  { name: 'Trump Administration', slug: 'trump-administration' },
  { name: 'Banking Controversy', slug: 'banking-controversy' },
  { name: 'Concord Partners', slug: 'concord-partners' }
];

export default function TagPage() {
  const params = useParams();
  const slug = (params?.slug as string) || '';
  const tagName = TAG_NAMES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const allArticles = getAllArticles();

  // Find matching articles
  const matchingArticles: Article[] = React.useMemo(() => {
    const slugLower = slug.toLowerCase();
    const tagLower = tagName.toLowerCase();

    const matched = allArticles.filter(art => {
      // Check tags
      if (art.tags && art.tags.some(t => {
        const tLower = t.toLowerCase();
        const tSlug = t.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return tLower === tagLower || tSlug === slugLower || tLower.includes(tagLower);
      })) {
        return true;
      }
      // Check title / summary keywords
      const titleLower = art.title.toLowerCase();
      const summaryLower = art.summary.toLowerCase();
      if (titleLower.includes(tagLower) || summaryLower.includes(tagLower)) {
        return true;
      }
      // Specific keywords for Alina Habba / Trump / Concord
      if (slugLower.includes('alina') && (titleLower.includes('habba') || summaryLower.includes('habba'))) return true;
      if (slugLower.includes('trump') && (titleLower.includes('trump') || summaryLower.includes('trump'))) return true;
      if (slugLower.includes('concord') && (titleLower.includes('concord') || summaryLower.includes('concord') || art.id.includes('habba'))) return true;
      if (slugLower.includes('banking') && (titleLower.includes('banking') || summaryLower.includes('banking') || art.id.includes('habba'))) return true;
      return false;
    });

    // Dedup by id
    const seen = new Set<string>();
    return matched.filter(art => {
      if (seen.has(art.id)) return false;
      seen.add(art.id);
      return true;
    });
  }, [allArticles, slug, tagName]);

  const displayedArticles = matchingArticles.length > 0 ? matchingArticles : allArticles.slice(0, 4);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)' }}>
      <CurvedHeader />

      <div className="aura-container" style={{ padding: '24px 20px 60px 20px', flex: 1 }}>
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--text-muted)' }}>Tags</span>
          <span>/</span>
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>{tagName}</span>
        </div>

        {/* Masthead Banner */}
        <div style={{
          backgroundColor: 'var(--bg-surface-elevated)',
          border: '1px solid var(--border-hairline)',
          borderRadius: 'var(--radius-sm)',
          padding: '28px 24px',
          marginBottom: '32px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span className="aura-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <TagIcon size={11} />
              <span>TOPIC ARCHIVE</span>
            </span>
            <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              {matchingArticles.length} Verified {matchingArticles.length === 1 ? 'Dispatch' : 'Dispatches'}
            </span>
          </div>

          <h1 className="font-heading" style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            margin: '0 0 10px 0',
            lineHeight: 1.15
          }}>
            {tagName}
          </h1>

          <p style={{
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            margin: '0 0 20px 0',
            maxWidth: '720px',
            lineHeight: 1.55
          }}>
            In-depth enterprise reporting, verified legal documentation, and real-time dispatches tagged under {tagName}.
          </p>

          {/* Related Tag Cloud */}
          <div style={{
            paddingTop: '16px',
            borderTop: '1px solid var(--border-hairline)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-primary)' }}>
              Related Topics:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {POPULAR_TAGS.map(t => {
                const isActive = t.slug === slug;
                return (
                  <Link
                    key={t.slug}
                    href={`/tag/${t.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      border: `1px solid ${isActive ? 'var(--text-primary)' : 'var(--border-hairline)'}`,
                      backgroundColor: isActive ? 'var(--text-primary)' : 'var(--bg-surface)',
                      color: isActive ? '#ffffff' : 'var(--text-secondary)',
                      fontSize: '0.72rem',
                      fontWeight: isActive ? 700 : 500,
                      textDecoration: 'none',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {t.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Articles List / Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {displayedArticles.map((art, idx) => {
            const articleUrl = getArticleUrl(art);
            const isFeatured = idx === 0;

            if (isFeatured) {
              return (
                <article
                  key={art.id}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '24px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                  }}
                >
                  <Link href={articleUrl} style={{ position: 'relative', display: 'block', overflow: 'hidden', minHeight: '280px' }}>
                    <img
                      src={art.imageUrl}
                      alt={art.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      backgroundColor: 'rgba(0,0,0,0.75)',
                      backdropFilter: 'blur(6px)',
                      color: '#fff',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      Featured Coverage
                    </div>
                  </Link>

                  <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <span className="aura-pill">
                        {art.kicker || art.category}
                      </span>
                      <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                        {art.publishedAt}
                      </span>
                    </div>

                    <h2 className="font-heading" style={{
                      fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                      fontWeight: 900,
                      lineHeight: 1.2,
                      letterSpacing: '-0.025em',
                      margin: '0 0 12px 0'
                    }}>
                      <Link href={articleUrl} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                        {art.title}
                      </Link>
                    </h2>

                    <p style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      margin: '0 0 18px 0'
                    }}>
                      {art.summary}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        By {art.author.name}
                      </span>
                      <Link
                        href={articleUrl}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          color: 'var(--brand-primary)',
                          textDecoration: 'none'
                        }}
                      >
                        <span>Read Full Report</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={art.id}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '20px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '20px',
                  alignItems: 'center'
                }}
              >
                <Link href={articleUrl} style={{ position: 'relative', display: 'block', overflow: 'hidden', borderRadius: 'var(--radius-xs)', maxHeight: '180px' }}>
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </Link>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span className="aura-pill">
                      {art.category}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {art.publishedAt}
                    </span>
                  </div>

                  <h3 className="font-heading" style={{
                    fontSize: '1.18rem',
                    fontWeight: 800,
                    lineHeight: 1.3,
                    letterSpacing: '-0.02em',
                    margin: '0 0 8px 0'
                  }}>
                    <Link href={articleUrl} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                      {art.title}
                    </Link>
                  </h3>

                  <p style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    margin: '0 0 12px 0'
                  }}>
                    {art.summary.slice(0, 160)}...
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      By {art.author.name}
                    </span>
                    <Link
                      href={articleUrl}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: 'var(--brand-primary)',
                        textDecoration: 'none'
                      }}
                    >
                      <span>Read Story</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
