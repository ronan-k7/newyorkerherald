'use client';

import React from 'react';
import Link from 'next/link';
import { 
  LEAD_ARTICLE, 
  SECONDARY_LEAD_STORIES, 
  WIRE_STORIES, 
  TRENDING_RANKED_ARTICLES, 
  getAllArticles,
  getAuthorSlugFromName 
} from '@/data/newsData';
import { useNews } from '@/context/NewsContext';
import { 
  Bookmark, 
  Clock, 
  Activity,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function CurvedBentoHero() {
  const { bookmarks, toggleBookmark } = useNews();
  const isBookmarked = (id: string) => bookmarks.includes(id);

  const allArts = getAllArticles();
  
  // Secondary stories (3 items with good height & spacing)
  const secondaryStories = [
    ...SECONDARY_LEAD_STORIES,
    allArts.find(a => a.id === 'biz-1') || allArts[5]
  ].filter(Boolean).slice(0, 3);

  // Sub-lead companion stories below lead (2 items)
  const subLeadStories = [
    allArts.find(a => a.id === 'pol-1') || allArts[7],
    allArts.find(a => a.id === 'tech-2') || allArts[8]
  ].filter(Boolean);

  // Fast Wire Stream (Only 2 cards)
  const wireFeed = WIRE_STORIES.slice(0, 2);

  // Bottom Highlights Grid (4 items with clean spacing)
  const bottomHighlights = TRENDING_RANKED_ARTICLES.slice(0, 4);

  return (
    <section style={{ padding: '12px 0 24px 0' }}>
      <div className="aura-container">
        

        {/* 12-Column Broadsheet Command Matrix */}
        <div className="bento-hero-grid">
          
          {/* ================= COL 1: ENLARGED LEAD ARTICLE (6 Cols) ================= */}
          <div className="bento-hero-lead">
            {/* Lead Kicker & Bookmark */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span className="aura-pill">
                {LEAD_ARTICLE.category}
              </span>

              <button
                onClick={() => toggleBookmark(LEAD_ARTICLE.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: isBookmarked(LEAD_ARTICLE.id) ? 'var(--brand-primary)' : 'var(--text-muted)'
                }}
              >
                <Bookmark size={12} fill={isBookmarked(LEAD_ARTICLE.id) ? 'currentColor' : 'none'} />
                <span>{isBookmarked(LEAD_ARTICLE.id) ? 'Saved' : 'Save'}</span>
              </button>
            </div>

            {/* Enlarged Prominent Hero Image */}
            <Link href={`/article/${LEAD_ARTICLE.id}`} style={{ display: 'block', textDecoration: 'none' }}>
              <div className="aura-img-wrap hero-lead-image" style={{ width: '100%', marginBottom: '14px' }}>
                <img src={LEAD_ARTICLE.imageUrl} alt={LEAD_ARTICLE.title} className="aura-card-img" />
              </div>
            </Link>

            {/* Lead Headline */}
            <Link href={`/article/${LEAD_ARTICLE.id}`} style={{ textDecoration: 'none', marginBottom: '8px' }}>
              <h2 className="font-heading" style={{
                fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                fontWeight: 900,
                lineHeight: 1.18,
                color: 'var(--text-primary)',
                letterSpacing: '-0.035em'
              }}>
                {LEAD_ARTICLE.title}
              </h2>
            </Link>

            {/* Concise Summary (Less content clutter) */}
            <p style={{
              fontSize: '0.88rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              marginBottom: '12px'
            }}>
              {LEAD_ARTICLE.summary}
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '10px',
              borderTop: '1px solid var(--border-rule)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)'
            }}>
              <Link href={`/author/${getAuthorSlugFromName(LEAD_ARTICLE.author.name)}`} style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
                By {LEAD_ARTICLE.author.name}
              </Link>
              <span>{LEAD_ARTICLE.publishedAt} • {LEAD_ARTICLE.readTime}</span>
            </div>
          </div>

          {/* ================= COL 2: SECONDARY STORIES (3 Cols) ================= */}
          <div className="bento-hero-secondary">
            {secondaryStories.slice(0, 2).map((story, idx) => (
              <div
                key={story.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingBottom: idx !== 1 ? '16px' : '0',
                  borderBottom: idx !== 1 ? '1px solid var(--border-rule)' : 'none'
                }}
              >
                <Link href={`/article/${story.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="aura-img-wrap hero-secondary-image" style={{ width: '100%', marginBottom: '8px' }}>
                    <img src={story.imageUrl} alt={story.title} className="aura-card-img" />
                  </div>
                </Link>

                <span className="aura-pill" style={{ marginBottom: '4px', alignSelf: 'flex-start' }}>
                  {story.category}
                </span>

                <Link href={`/article/${story.id}`} style={{ textDecoration: 'none' }}>
                  <h3 className="font-heading" style={{
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    {story.title}
                  </h3>
                </Link>

                <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.35, margin: '0 0 6px 0' }}>
                  {story.summary.slice(0, 85)}...
                </p>

                <span style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>
                  By <Link href={`/author/${getAuthorSlugFromName(story.author.name)}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700 }}>{story.author.name}</Link> • {story.readTime}
                </span>
              </div>
            ))}
          </div>

          {/* ================= COL 3: FAST WIRE DISPATCHES ================= */}
          <div className="bento-hero-wire">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '2px solid var(--brand-primary)', paddingBottom: '4px' }}>
              <span className="aura-pill">
                Top Stories
              </span>
              <span style={{ fontSize: '0.64rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
                Realtime Wire
              </span>
            </div>

            {/* 2 Tall, Spacious Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {wireFeed.map((item, idx) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: idx !== wireFeed.length - 1 ? '16px' : '0',
                    borderBottom: idx !== wireFeed.length - 1 ? '1px solid var(--border-rule)' : 'none'
                  }}
                >
                  <Link href={`/article/${item.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="aura-img-wrap hero-secondary-image" style={{ width: '100%', marginBottom: '8px' }}>
                      <img src={item.imageUrl} alt={item.title} className="aura-card-img" />
                    </div>
                  </Link>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <span className="aura-pill">
                      {item.category}
                    </span>
                    <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {item.publishedAt}
                    </span>
                  </div>

                  <Link href={`/article/${item.id}`} style={{ textDecoration: 'none' }}>
                    <h5 className="font-heading" style={{
                      fontSize: '0.84rem',
                      fontWeight: 800,
                      lineHeight: 1.25,
                      color: 'var(--text-primary)',
                      margin: '2px 0 4px 0'
                    }}>
                      {item.title}
                    </h5>
                  </Link>

                  <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.35, margin: '0 0 4px 0' }}>
                    {item.summary.slice(0, 80)}...
                  </p>

                  <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>
                    By <Link href={`/author/${getAuthorSlugFromName(item.author.name)}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700 }}>{item.author.name}</Link> • {item.readTime}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= BOTTOM HIGHLIGHTS MATRIX ================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          borderTop: '2px solid var(--border-strong)',
          paddingTop: '16px'
        }}>
          {bottomHighlights.map((art) => (
            <div
              key={art.id}
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start'
              }}
            >
              <Link href={`/article/${art.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                <div className="aura-img-wrap" style={{ width: '85px', height: '75px', flexShrink: 0 }}>
                  <img src={art.imageUrl} alt={art.title} className="aura-card-img" />
                </div>
              </Link>

              <div style={{ flex: 1 }}>
                <span className="aura-pill" style={{ marginBottom: '3px' }}>
                  {art.category}
                </span>

                <Link href={`/article/${art.id}`} style={{ textDecoration: 'none' }}>
                  <h5 className="font-heading" style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                    marginBottom: '3px'
                  }}>
                    {art.title}
                  </h5>
                </Link>

                <span style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>
                  By <Link href={`/author/${getAuthorSlugFromName(art.author.name)}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700 }}>{art.author.name}</Link> • {art.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
