'use client';

import React, { useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import { AUTHORS, AUTHORS_DATA, getAllArticles, getArticleUrl } from '@/data/newsData';
import { Mail, ArrowLeft, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

function getPageNumbers(current: number, total: number): (number | string)[] {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 3) {
    return [1, 2, 3, 4, '...', total];
  }
  if (current >= total - 2) {
    return [1, '...', total - 3, total - 2, total - 1, total];
  }
  return [1, '...', current - 1, current, current + 1, '...', total];
}

export default function AuthorProfilePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const author = AUTHORS_DATA[slug] || AUTHORS[slug];

  const [activeTab, setActiveTab] = useState<'all' | 'investigations' | 'analysis'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const streamTopRef = useRef<HTMLDivElement>(null);

  const allArticles = getAllArticles();
  const authorArticles = author 
    ? allArticles.filter(a => 
        a.author.name.toLowerCase().includes(author.name.toLowerCase()) || 
        author.name.toLowerCase().includes(a.author.name.toLowerCase()) ||
        slug === 'editorial-board' ||
        slug === 'staff'
      )
    : [];

  const baseArticles = authorArticles.length > 0 ? authorArticles : allArticles.slice(0, 10);
  const displayArticles = baseArticles.filter(art => {
    if (activeTab === 'investigations') {
      return art.isInvestigative || art.category?.toLowerCase().includes('politic') || art.category?.toLowerCase().includes('investigat');
    }
    if (activeTab === 'analysis') {
      return !art.isInvestigative || art.category?.toLowerCase().includes('opinion') || art.category?.toLowerCase().includes('tech') || art.category?.toLowerCase().includes('business');
    }
    return true;
  });

  const finalArticles = displayArticles.length > 0 ? displayArticles : baseArticles;

  // Pagination calculations
  const totalArticles = finalArticles.length;
  const totalPages = Math.max(1, Math.ceil(totalArticles / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = finalArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleTabChange = (tab: 'all' | 'investigations' | 'analysis') => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    if (streamTopRef.current) {
      const yOffset = -70;
      const y = streamTopRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!author) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <CurvedHeader />
        <div className="author-profile-container" style={{ padding: '80px 20px', textAlign: 'left' }}>
          <h2 className="font-heading" style={{ fontSize: '2rem', marginBottom: '16px' }}>Journalist Profile Not Found</h2>
          <Link href="/" className="aura-pill" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
            Return to Homepage
          </Link>
        </div>
        <CurvedFooter />
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CurvedHeader />

      <div className="author-profile-container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '0.72rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
            <ArrowLeft size={12} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span>Correspondents</span>
          <span>/</span>
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>{author.name}</span>
        </div>

        {/* Responsive Dossier Layout (Sidebar Aside + Main Reporting Stream) */}
        <div className="author-profile-grid">
          
          {/* ================= LEFT COLUMN: STAFF PROFILE DOSSIER ================= */}
          <aside className="author-profile-aside">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span className="aura-pill">
                  {slug === 'editorial-board' || slug === 'staff' ? 'Editorial Board' : 'Staff Correspondent'}
                </span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {author.articlesCount || baseArticles.length}+ Dispatches
                </span>
              </div>

              <h1 className="font-heading" style={{
                fontSize: '1.75rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                margin: '0 0 6px 0'
              }}>
                {author.name}
              </h1>

              <p style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--brand-primary)', margin: '0 0 10px 0' }}>
                {author.role}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                <MapPin size={13} color="var(--brand-primary)" />
                <span>{author.bureau || 'Washington D.C. Bureau'}</span>
              </div>
            </div>

            {/* Biography & Beat */}
            <div style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '16px' }}>
              <span className="aura-pill" style={{ marginBottom: '6px' }}>
                Editorial Beat
              </span>
              <p style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
                {author.beat || 'National Security, Geopolitics & Foreign Affairs'}
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {author.bio}
              </p>
            </div>

            {/* Direct Contact */}
            {author.email && (
              <div style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '16px' }}>
                <span className="aura-pill" style={{ marginBottom: '6px' }}>
                  Direct Contact
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                  <Mail size={13} color="var(--brand-primary)" />
                  <span className="font-mono">{author.email}</span>
                </div>
              </div>
            )}
          </aside>

          {/* ================= RIGHT COLUMN: BYLINE STREAM ================= */}
          <main className="author-profile-main">
            
            {/* Header & Segmented Tabs */}
            <div ref={streamTopRef} style={{ borderBottom: '2px solid var(--border-strong)', paddingBottom: '12px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <h2 className="section-title" style={{ fontSize: '1.25rem' }}>
                  Published Reporting ({totalArticles})
                </h2>
                {totalPages > 1 && (
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Page {safePage} of {totalPages}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleTabChange('all')}
                  style={{
                    padding: '5px 12px',
                    fontSize: '0.72rem',
                    fontWeight: activeTab === 'all' ? 800 : 600,
                    backgroundColor: activeTab === 'all' ? 'var(--badge-red-bg)' : 'var(--bg-subtle)',
                    color: activeTab === 'all' ? '#FFFFFF' : 'var(--text-secondary)',
                    borderRadius: '0px'
                  }}
                >
                  All Dispatches
                </button>
                <button
                  onClick={() => handleTabChange('investigations')}
                  style={{
                    padding: '5px 12px',
                    fontSize: '0.72rem',
                    fontWeight: activeTab === 'investigations' ? 800 : 600,
                    backgroundColor: activeTab === 'investigations' ? 'var(--badge-red-bg)' : 'var(--bg-subtle)',
                    color: activeTab === 'investigations' ? '#FFFFFF' : 'var(--text-secondary)',
                    borderRadius: '0px'
                  }}
                >
                  Investigations
                </button>
                <button
                  onClick={() => handleTabChange('analysis')}
                  style={{
                    padding: '5px 12px',
                    fontSize: '0.72rem',
                    fontWeight: activeTab === 'analysis' ? 800 : 600,
                    backgroundColor: activeTab === 'analysis' ? 'var(--badge-red-bg)' : 'var(--bg-subtle)',
                    color: activeTab === 'analysis' ? '#FFFFFF' : 'var(--text-secondary)',
                    borderRadius: '0px'
                  }}
                >
                  Policy & Analysis
                </button>
              </div>
            </div>

            {/* Horizontal Story Rows Spread */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {paginatedArticles.map((art, idx) => (
                <div
                  key={art.id}
                  className="author-article-row"
                  style={{
                    paddingBottom: idx !== paginatedArticles.length - 1 ? '16px' : '0',
                    borderBottom: idx !== paginatedArticles.length - 1 ? '1px solid var(--border-rule)' : 'none'
                  }}
                >
                  <Link href={getArticleUrl(art)} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="aura-img-wrap author-article-img-wrap">
                      <img src={art.imageUrl} alt={art.title} className="aura-card-img" />
                    </div>
                  </Link>

                  <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                      <span className="aura-pill">
                        {art.kicker}
                      </span>
                    </div>

                    <Link href={getArticleUrl(art)} style={{ textDecoration: 'none' }}>
                      <h3 className="font-heading author-article-title" style={{
                        fontWeight: 800,
                        lineHeight: 1.25,
                        color: 'var(--text-primary)',
                        margin: '2px 0 4px 0'
                      }}>
                        {art.title}
                      </h3>
                    </Link>

                    <p className="author-article-summary">
                      {art.summary}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.66rem', color: 'var(--text-muted)', marginTop: 'auto', flexWrap: 'wrap' }}>
                      <span style={{ fontWeight: 700, color: 'var(--brand-primary)' }}>{art.category}</span>
                      <span>•</span>
                      <span>{art.publishedAt}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div 
                className="author-pagination-bar"
                style={{
                  marginTop: '24px',
                  paddingTop: '16px',
                  borderTop: '2px solid var(--border-rule)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Showing <span style={{ color: 'var(--text-primary)', fontWeight: 800 }}>{startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, totalArticles)}</span> of <span style={{ color: 'var(--text-primary)', fontWeight: 800 }}>{totalArticles}</span> dispatches
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => handlePageChange(safePage - 1)}
                    disabled={safePage === 1}
                    aria-label="Previous Page"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '3px',
                      padding: '5px 10px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      borderRadius: '0px',
                      border: '1px solid var(--border-rule)',
                      backgroundColor: safePage === 1 ? 'var(--bg-subtle)' : 'var(--bg-canvas)',
                      color: safePage === 1 ? 'var(--text-muted)' : 'var(--text-primary)',
                      cursor: safePage === 1 ? 'not-allowed' : 'pointer',
                      opacity: safePage === 1 ? 0.5 : 1
                    }}
                  >
                    <ChevronLeft size={12} />
                    <span>Prev</span>
                  </button>

                  {getPageNumbers(safePage, totalPages).map((p, i) => {
                    if (typeof p === 'string') {
                      return (
                        <span key={`dots-${i}`} style={{ padding: '0 3px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          ...
                        </span>
                      );
                    }
                    const isActive = p === safePage;
                    return (
                      <button
                        key={p}
                        onClick={() => handlePageChange(p)}
                        style={{
                          minWidth: '28px',
                          height: '28px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.72rem',
                          fontWeight: isActive ? 800 : 600,
                          borderRadius: '0px',
                          backgroundColor: isActive ? 'var(--badge-red-bg)' : 'var(--bg-subtle)',
                          color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                          border: isActive ? 'none' : '1px solid var(--border-rule)',
                          cursor: 'pointer'
                        }}
                      >
                        {p}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => handlePageChange(safePage + 1)}
                    disabled={safePage === totalPages}
                    aria-label="Next Page"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '3px',
                      padding: '5px 10px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      borderRadius: '0px',
                      border: '1px solid var(--border-rule)',
                      backgroundColor: safePage === totalPages ? 'var(--bg-subtle)' : 'var(--bg-canvas)',
                      color: safePage === totalPages ? 'var(--text-muted)' : 'var(--text-primary)',
                      cursor: safePage === totalPages ? 'not-allowed' : 'pointer',
                      opacity: safePage === totalPages ? 0.5 : 1
                    }}
                  >
                    <span>Next</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            )}

          </main>

        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
