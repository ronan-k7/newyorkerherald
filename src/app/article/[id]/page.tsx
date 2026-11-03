'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import { getArticleById, getAllArticles, AUTHORS_DATA, getAuthorSlugFromName, getArticleUrl } from '@/data/newsData';
import { useNews } from '@/context/NewsContext';
import { 
  Clock, 
  Share2, 
  ArrowLeft, 
  Plus, 
  Check, 
  Flame, 
  TrendingUp, 
  FileText 
} from 'lucide-react';

export default function ArticleDetailPage() {
  const params = useParams();
  const articleId = (params?.slug || params?.id) as string;
  const article = getArticleById(articleId);

  const [copied, setCopied] = useState(false);
  const [isFollowingAuthor, setIsFollowingAuthor] = useState(false);

  if (!article) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <CurvedHeader />
        <div className="aura-container" style={{ padding: '80px 20px', textAlign: 'left', flex: 1 }}>
          <h2 className="font-heading" style={{ fontSize: '2rem', marginBottom: '16px' }}>Story Not Found</h2>
          <Link href="/" className="aura-pill" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
            Return to Homepage
          </Link>
        </div>
        <CurvedFooter />
      </main>
    );
  }

  const allArts = getAllArticles();
  const relatedArticles = allArts.filter(a => a.id !== article.id && (a.category === article.category || a.kicker === article.kicker)).slice(0, 5);
  const trendingSidebar = allArts.filter(a => a.id !== article.id).slice(0, 4);

  const authorProfile = Object.values(AUTHORS_DATA).find(
    a => a.name.toLowerCase().includes(article.author.name.toLowerCase()) || article.author.name.toLowerCase().includes(a.name.toLowerCase())
  );

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CurvedHeader activeCategory={article.category} />

      {/* Main Left-Aligned Layout Spread */}
      <div className="aura-container" style={{ padding: '20px 20px 48px 20px', flex: 1 }}>
        
        {/* Breadcrumb Navigation - Left Aligned */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
            <ArrowLeft size={12} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href={`/category/${article.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            {article.category}
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>Dispatch</span>
        </div>

        {/* 12-Column Left-Aligned Broadsheet Grid */}
        <div className="grid-12-split-8-4" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          alignItems: 'start'
        }}>
          
          {/* ================= LEFT MAIN COLUMN (8 COLS / LEFT ALIGNED) ================= */}
          <article style={{ gridColumn: 'span 8', borderRight: '1px solid var(--border-rule)', paddingRight: '32px' }}>
            
            {/* Kicker & Top Actions */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span className="aura-pill">
                {article.kicker || article.category}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                

                <button
                  onClick={handleShare}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)'
                  }}
                >
                  <Share2 size={12} />
                  <span>{copied ? 'Copied' : 'Share'}</span>
                </button>
              </div>
            </div>

            {/* Left Aligned Main Headline */}
            <h1 className="font-heading" style={{
              fontSize: 'clamp(1.85rem, 3.2vw, 2.7rem)',
              fontWeight: 900,
              lineHeight: 1.14,
              color: 'var(--text-primary)',
              letterSpacing: '-0.035em',
              margin: '0 0 12px 0',
              textAlign: 'left'
            }}>
              {article.title}
            </h1>

            {/* Sub-headline / Summary */}
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.48,
              margin: '0 0 16px 0',
              textAlign: 'left'
            }}>
              {article.summary}
            </p>

            {/* Byline Strip */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '8px',
              borderTop: '1px solid var(--border-rule)',
              borderBottom: '1px solid var(--border-rule)',
              padding: '10px 0',
              marginBottom: '20px',
              fontSize: '0.74rem',
              color: 'var(--text-muted)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Link href={`/author/${getAuthorSlugFromName(article.author.name)}`} style={{ fontWeight: 800, color: 'var(--text-primary)', textDecoration: 'none' }}>
                  By {article.author.name}
                </Link>
                <span>•</span>
                <span>{article.author.role || 'Staff Correspondent'}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>{article.publishedAt}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Large Featured Image */}
            <div style={{ width: '100%', marginBottom: '20px' }}>
              <div className="aura-img-wrap" style={{ height: 'clamp(200px, 35vw, 380px)', width: '100%', marginBottom: '6px' }}>
                <img src={article.imageUrl} alt={article.title} className="aura-card-img" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                <span>Newyorkerherald Photojournalism Syndicate / AP Wire</span>
                <span>Archival Transmission • Verified Dispatch</span>
              </div>
            </div>

            {/* Key Takeaways Box */}
            {article.bullets && (
              <div style={{
                backgroundColor: 'var(--bg-subtle)',
                borderLeft: '3px solid var(--badge-red-bg)',
                padding: '14px 16px',
                marginBottom: '24px'
              }}>
                <span className="aura-pill" style={{ marginBottom: '6px' }}>
                  Key Developments
                </span>
                <ul style={{ listStyle: 'disc', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  {article.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Editorial Body Prose */}
            <div style={{
              fontSize: '0.98rem',
              lineHeight: 1.75,
              color: 'var(--text-primary)',
              marginBottom: '36px'
            }}>
              {article.body ? (
                article.body.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx} style={{ marginBottom: '18px' }}>
                    {paragraph}
                  </p>
                ))
              ) : (
                <>
                  <p style={{ marginBottom: '18px' }}>
                    {article.summary}
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    Senior policy advisers and technical analysts across the national security and industrial technology apparatus have underscored the strategic implications of these shifts. As regulatory frameworks adapt to unprecedented computing demands and geopolitical competition, institutional stakeholders are accelerating procurement cycles.
                  </p>

                  {/* Left-Aligned Pull Quote */}
                  <blockquote style={{
                    borderLeft: '3px solid var(--border-strong)',
                    padding: '10px 0 10px 18px',
                    margin: '24px 0',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    lineHeight: 1.35,
                    color: 'var(--text-primary)',
                    textAlign: 'left'
                  }}>
                    &ldquo;The sheer scale of infrastructure deployment required over the next twenty-four months exceeds any peacetime industrial mobilization of the past four decades.&rdquo;
                  </blockquote>
                </>
              )}
              <p style={{ marginBottom: '18px' }}>
                Congressional testimony scheduled for later this month is expected to address cross-agency coordination, focusing specifically on supply chain resiliency, sovereign compute clusters, and long-term capital allocation strategies designed to safeguard domestic competitiveness.
              </p>
            </div>

          </article>

          {/* ================= RIGHT STICKY SIDEBAR (4 COLS) ================= */}
          <aside style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* 1. Author Dossier Card */}
            <div style={{ borderBottom: '1px solid var(--border-rule)', paddingBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span className="aura-pill">
                  About The Byline
                </span>
                <button
                  onClick={() => setIsFollowingAuthor(!isFollowingAuthor)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    color: isFollowingAuthor ? 'var(--text-primary)' : 'var(--brand-primary)'
                  }}
                >
                  {isFollowingAuthor ? <Check size={11} /> : <Plus size={11} />}
                  <span>{isFollowingAuthor ? 'Following' : 'Follow'}</span>
                </button>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '8px' }}>
                {authorProfile?.avatar && (
                  <img
                    src={authorProfile.avatar}
                    alt={article.author.name}
                    style={{ width: '48px', height: '48px', borderRadius: '0px', objectFit: 'cover', border: '1px solid var(--border-rule)' }}
                  />
                )}
                <div>
                  <Link href={`/author/${getAuthorSlugFromName(article.author.name)}`} style={{ textDecoration: 'none' }}>
                    <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--text-primary)' }}>
                      {article.author.name}
                    </strong>
                  </Link>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                    {authorProfile?.bureau || article.author.role}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: '0 0 10px 0' }}>
                {authorProfile?.bio?.slice(0, 140) || 'Staff correspondent covering breaking national dispatches, defense investigations, and policy developments.'}...
              </p>

              <Link href={`/author/${getAuthorSlugFromName(article.author.name)}`} style={{ fontSize: '0.7rem', color: 'var(--brand-primary)', fontWeight: 700, textDecoration: 'none' }}>
                View Full Byline Archive →
              </Link>
            </div>

            {/* 2. Realtime Related Wire Stories */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '2px solid var(--brand-primary)', paddingBottom: '4px' }}>
                <span className="aura-pill">
                  More in {article.category}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {relatedArticles.map((rel, idx) => (
                  <div
                    key={rel.id}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      paddingBottom: idx !== relatedArticles.length - 1 ? '12px' : '0',
                      borderBottom: idx !== relatedArticles.length - 1 ? '1px solid var(--border-rule)' : 'none'
                    }}
                  >
                    <Link href={getArticleUrl(rel)} style={{ display: 'block', textDecoration: 'none' }}>
                      <div className="aura-img-wrap" style={{ width: '75px', height: '60px', flexShrink: 0 }}>
                        <img src={rel.imageUrl} alt={rel.title} className="aura-card-img" />
                      </div>
                    </Link>

                    <div style={{ flex: 1 }}>
                      <span className="aura-pill" style={{ marginBottom: '2px' }}>
                        {rel.kicker}
                      </span>
                      <Link href={getArticleUrl(rel)} style={{ textDecoration: 'none' }}>
                        <h4 className="font-heading" style={{ fontSize: '0.78rem', fontWeight: 800, lineHeight: 1.25, color: 'var(--text-primary)', margin: '2px 0 2px 0' }}>
                          {rel.title}
                        </h4>
                      </Link>
                      <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>
                        {rel.publishedAt} • {rel.readTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Trending Global Dispatches */}
            <div style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                <span className="aura-pill">
                  Trending
                </span>
                <strong style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>Most Read Today</strong>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {trendingSidebar.map((trend, i) => (
                  <div key={trend.id} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span className="font-mono" style={{ fontSize: '0.85rem', fontWeight: 900, color: 'var(--brand-primary)', width: '18px' }}>
                      0{i + 1}
                    </span>
                    <Link href={getArticleUrl(trend)} style={{ textDecoration: 'none', flex: 1 }}>
                      <p style={{ fontSize: '0.76rem', fontWeight: 700, lineHeight: 1.3, color: 'var(--text-primary)', margin: 0 }}>
                        {trend.title}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </aside>

        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
