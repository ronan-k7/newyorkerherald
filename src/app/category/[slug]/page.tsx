'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import { CATEGORIES_META, getAllArticles, getArticlesByCategorySlug, getAuthorSlugFromName } from '@/data/newsData';
import { Clock, ArrowLeft, Bookmark, ArrowRight, Zap, Filter, Flame } from 'lucide-react';
import { useNews } from '@/context/NewsContext';

export default function CategoryPage() {
  const params = useParams();
  const slug = (params?.slug as string) || 'politics';
  const allArts = getAllArticles();

  const [activeFilter, setActiveFilter] = useState('All Reporting');

  const categoryArticles = getArticlesByCategorySlug(slug);
  const articles = categoryArticles.length > 0 ? categoryArticles : allArts;
  const resolvedSlug = slug === 'tech-ai' ? 'tech' : slug === 'health-science' ? 'science' : slug;
  const categoryMeta = CATEGORIES_META[resolvedSlug] || CATEGORIES_META[slug];
  const info = {
    name: categoryMeta?.name || slug.replace(/-/g, ' ').toUpperCase(),
    description: categoryMeta?.description || 'Curated field reporting, investigative analyses, and primary-source verified journalism from the Newyorkerherald global newsroom.',
    accentColor: categoryMeta?.accentColor || 'var(--brand-primary)'
  };

  const { bookmarks, toggleBookmark } = useNews();
  const isBookmarked = (id: string) => bookmarks.includes(id);

  const lead = articles[0] || allArts[0];
  const streamStories = articles.length > 1 ? articles.slice(1, 4) : allArts.filter(a => a.id !== lead.id).slice(0, 3);
  const sidebarDispatches = articles.length > 4 ? articles.slice(4, 8) : allArts.filter(a => a.id !== lead.id && !streamStories.some(s => s.id === a.id)).slice(0, 4);
  const bottomArchive = articles.length > 8 ? articles.slice(8) : articles.slice(1);

  const filterTabs = ['All Reporting', 'Investigations', 'Policy Briefs', 'Spotlights', 'Full Archive'];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CurvedHeader activeCategory={slug} />

      <div className="aura-container" style={{ padding: '20px 20px 48px 20px', flex: 1 }}>
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
            <ArrowLeft size={12} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>{info.name}</span>
        </div>

        {/* Department Masthead */}
        <div style={{
          borderBottom: '2px solid var(--border-strong)',
          paddingBottom: '16px',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              {articles.length} Verified Dispatches • Live Wire Active
            </span>
          </div>

          <h1 className="font-heading" style={{
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            margin: '0 0 8px 0'
          }}>
            {info.name}
          </h1>

          <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 0 16px 0', lineHeight: 1.45 }}>
            {info.description}
          </p>

          {/* Sub-Topic Navigation Strip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', paddingTop: '10px', borderTop: '1px solid var(--border-rule)' }}>
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  padding: '3px 10px',
                  fontSize: '0.68rem',
                  fontWeight: activeFilter === tab ? 800 : 600,
                  backgroundColor: activeFilter === tab ? 'var(--badge-red-bg)' : 'var(--bg-subtle)',
                  color: activeFilter === tab ? '#FFFFFF' : 'var(--text-secondary)',
                  borderRadius: '0px',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ================= SECTION 1: FULL-WIDTH ASYMMETRICAL LEAD SPREAD ================= */}
        {lead && (
          <div className="grid-12-split-7-5" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '28px',
            marginBottom: '36px',
            borderBottom: '2px solid var(--border-strong)',
            paddingBottom: '28px',
            alignItems: 'center'
          }}>
            {/* Left Photo (7 Cols) */}
            <div style={{ gridColumn: 'span 7' }}>
              <Link href={`/article/${lead.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                <div className="aura-img-wrap" style={{ height: 'clamp(200px, 32vw, 360px)', width: '100%', marginBottom: '6px' }}>
                  <img src={lead.imageUrl} alt={lead.title} className="aura-card-img" />
                </div>
              </Link>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                <span>Lead Investigation Photo • Newyorkerherald Wire</span>
                <span>Verified Primary Dispatch</span>
              </div>
            </div>

            {/* Right Headline & Summary (5 Cols) */}
            <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="aura-pill">
                  {lead.kicker}
                </span>
                <button
                  onClick={() => toggleBookmark(lead.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    color: isBookmarked(lead.id) ? 'var(--brand-primary)' : 'var(--text-muted)'
                  }}
                >
                  <Bookmark size={11} fill={isBookmarked(lead.id) ? 'currentColor' : 'none'} />
                  <span>{isBookmarked(lead.id) ? 'Saved' : 'Save'}</span>
                </button>
              </div>

              <Link href={`/article/${lead.id}`} style={{ textDecoration: 'none', marginBottom: '10px' }}>
                <h2 className="font-heading" style={{
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.035em'
                }}>
                  {lead.title}
                </h2>
              </Link>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.48, marginBottom: '14px' }}>
                {lead.summary}
              </p>

              {lead.bullets && (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px', borderLeft: '2px solid var(--badge-red-bg)', paddingLeft: '10px' }}>
                  {lead.bullets.slice(0, 2).map((b, idx) => (
                    <li key={idx} style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.35 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-rule)', paddingTop: '8px', marginTop: 'auto' }}>
                <Link href={`/author/${getAuthorSlugFromName(lead.author.name)}`} style={{ fontWeight: 800, color: 'var(--text-primary)', textDecoration: 'none' }}>
                  By {lead.author.name}
                </Link>
                <span>{lead.publishedAt} • {lead.readTime}</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= SECTION 2: 2:1 BROADSHEET STREAM & DISPATCH SIDEBAR ================= */}
        <div className="grid-12-split-8-4" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          marginBottom: '36px',
          borderBottom: '1px solid var(--border-rule)',
          paddingBottom: '32px',
          alignItems: 'start'
        }}>
          {/* Left 8 Cols: Curated In-Depth Story Stream */}
          <div style={{ gridColumn: 'span 8', borderRight: '1px solid var(--border-rule)', paddingRight: '32px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid var(--brand-primary)', paddingBottom: '4px', marginBottom: '4px' }}>
              <h3 className="section-title" style={{ fontSize: '1.1rem' }}>
                Featured {info.name} Dispatches
              </h3>
            </div>

            {streamStories.map((story, idx) => (
              <div
                key={story.id}
                className="category-stream-item" style={{
                  display: 'grid',
                  gridTemplateColumns: '220px 1fr',
                  gap: '20px',
                  paddingBottom: idx !== streamStories.length - 1 ? '20px' : '0',
                  borderBottom: idx !== streamStories.length - 1 ? '1px solid var(--border-rule)' : 'none',
                  alignItems: 'start'
                }}
              >
                <Link href={`/article/${story.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="aura-img-wrap category-stream-img" style={{ height: '140px', width: '100%' }}>
                    <img src={story.imageUrl} alt={story.title} className="aura-card-img" />
                  </div>
                </Link>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="aura-pill" style={{ marginBottom: '4px' }}>
                    {story.kicker}
                  </span>

                  <Link href={`/article/${story.id}`} style={{ textDecoration: 'none' }}>
                    <h3 className="font-heading" style={{
                      fontSize: '1rem',
                      fontWeight: 800,
                      lineHeight: 1.25,
                      color: 'var(--text-primary)',
                      marginBottom: '4px'
                    }}>
                      {story.title}
                    </h3>
                  </Link>

                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: '0 0 10px 0' }}>
                    {story.summary}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: 'auto' }}>
                    <Link href={`/author/${getAuthorSlugFromName(story.author.name)}`} style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
                      {story.author.name}
                    </Link>
                    <span>{story.publishedAt} • {story.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right 4 Cols: Realtime Wire Deck */}
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid var(--brand-primary)', paddingBottom: '4px' }}>
              <span className="aura-pill">
                Live Feed
              </span>
              <span style={{ fontSize: '0.64rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
                Realtime Wire
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {sidebarDispatches.map((disp, idx) => (
                <div
                  key={disp.id}
                  style={{
                    paddingBottom: idx !== sidebarDispatches.length - 1 ? '12px' : '0',
                    borderBottom: idx !== sidebarDispatches.length - 1 ? '1px solid var(--border-rule)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                    <span className="aura-pill">
                      {disp.kicker}
                    </span>
                    <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>
                      {disp.publishedAt}
                    </span>
                  </div>

                  <Link href={`/article/${disp.id}`} style={{ textDecoration: 'none' }}>
                    <h5 className="font-heading" style={{
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      lineHeight: 1.25,
                      color: 'var(--text-primary)',
                      margin: '2px 0 3px 0'
                    }}>
                      {disp.title}
                    </h5>
                  </Link>

                  <span style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>
                    By <Link href={`/author/${getAuthorSlugFromName(disp.author.name)}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700 }}>{disp.author.name}</Link> • {disp.readTime}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SECTION 3: 5-COLUMN FULL CATALOG ================= */}
        <div>
          <div className="section-header">
            <h3 className="section-title">
              Complete {info.name} Dispatches
            </h3>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Exhaustive Journalistic Record
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {bottomArchive.map((art) => (
              <div
                key={art.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Link href={`/article/${art.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="aura-img-wrap" style={{ height: '115px', width: '100%', marginBottom: '8px' }}>
                    <img src={art.imageUrl} alt={art.title} className="aura-card-img" />
                  </div>
                </Link>

                <span className="aura-pill" style={{ marginBottom: '4px' }}>
                  {art.kicker}
                </span>

                <Link href={`/article/${art.id}`} style={{ textDecoration: 'none' }}>
                  <h4 className="font-heading" style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    {art.title}
                  </h4>
                </Link>

                <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.35, marginBottom: '8px', marginTop: 'auto' }}>
                  {art.summary.slice(0, 75)}...
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.64rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-rule)', paddingTop: '4px' }}>
                  <Link href={`/author/${getAuthorSlugFromName(art.author.name)}`} style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
                    {art.author.name}
                  </Link>
                  <span>{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
