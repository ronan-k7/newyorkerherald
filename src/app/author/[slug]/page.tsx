'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import ArticleShareMenu from '@/components/Common/ArticleShareMenu';
import { AUTHORS, AUTHORS_DATA, getAllArticles, getArticleUrl } from '@/data/newsData';
import { 
  Award, 
  GraduationCap, 
  Mail, 
  Share2, 
  Check, 
  Plus, 
  FileText, 
  Clock,
  ArrowLeft,
  MapPin
} from 'lucide-react';
import { useNews } from '@/context/NewsContext';

export default function AuthorProfilePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const author = AUTHORS_DATA[slug] || AUTHORS[slug];

  const [isFollowing, setIsFollowing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'investigations' | 'analysis'>('all');

  const allArticles = getAllArticles();
  const authorArticles = author 
    ? allArticles.filter(a => a.author.name.toLowerCase().includes(author.name.toLowerCase()) || author.name.toLowerCase().includes(a.author.name.toLowerCase()))
    : [];

  const displayArticles = authorArticles.length > 0 ? authorArticles : allArticles.slice(0, 6);

  if (!author) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <CurvedHeader />
        <div className="aura-container" style={{ padding: '80px 20px', textAlign: 'left', flex: 1 }}>
          <h2 className="font-heading" style={{ fontSize: '2rem', marginBottom: '16px' }}>Journalist Profile Not Found</h2>
          <Link href="/" className="aura-pill" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
            Return to Homepage
          </Link>
        </div>
        <CurvedFooter />
      </main>
    );
  }

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CurvedHeader />

      <div className="aura-container" style={{ padding: '20px 20px 48px 20px', flex: 1 }}>
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
            <ArrowLeft size={12} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span>Correspondents</span>
          <span>/</span>
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>{author.name}</span>
        </div>

        {/* 2-Column Split Dossier Layout (4 Cols Fixed Left / 8 Cols Main Stream) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '36px',
          alignItems: 'start'
        }}>
          
          {/* ================= LEFT COLUMN: STAFF PROFILE DOSSIER (4 Cols) ================= */}
          <aside style={{
            gridColumn: 'span 4',
            borderRight: '1px solid var(--border-rule)',
            paddingRight: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {/* Author Portrait */}
            <div>
              <img
                src={author.avatar}
                alt={author.name}
                style={{
                  width: '100%',
                  height: '240px',
                  borderRadius: '0px',
                  objectFit: 'cover',
                  border: '1px solid var(--border-rule)',
                  marginBottom: '14px'
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <span className="aura-pill">
                  Staff Correspondent
                </span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {author.articlesCount || displayArticles.length}+ Dispatches
                </span>
              </div>

              <h1 className="font-heading" style={{
                fontSize: '1.75rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                margin: '0 0 4px 0'
              }}>
                {author.name}
              </h1>

              <p style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--brand-primary)', margin: '0 0 10px 0' }}>
                {author.role}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                <MapPin size={13} color="var(--brand-primary)" />
                <span>{author.bureau || 'Washington D.C. Bureau'}</span>
              </div>

              {/* Follow & Share Actions */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
                <button
                  onClick={() => setIsFollowing(!isFollowing)}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    backgroundColor: isFollowing ? 'var(--bg-subtle)' : 'var(--badge-red-bg)',
                    color: isFollowing ? 'var(--text-primary)' : '#FFFFFF',
                    padding: '7px 12px',
                    borderRadius: '0px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    border: isFollowing ? '1px solid var(--border-rule)' : 'none'
                  }}
                >
                  {isFollowing ? <Check size={12} /> : <Plus size={12} />}
                  <span>{isFollowing ? 'Following Byline' : 'Follow Byline'}</span>
                </button>

                <ArticleShareMenu title={author ? `${author.name} — Editorial Byline & Profile` : "Editorial Byline"} triggerText="Share Profile" align="right" />
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
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
                {author.bio}
              </p>
            </div>

            {/* Academic Pedigree & Accolades */}
            <div style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span className="aura-pill">
                Credentials & Honors
              </span>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                <GraduationCap size={14} color="var(--brand-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{author.education || 'M.A. International Relations, Georgetown University'}</span>
              </div>

              {author.awards && author.awards.map((award, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                  <Award size={14} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{award}</span>
                </div>
              ))}
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

          {/* ================= RIGHT COLUMN: BYLINE STREAM (8 Cols) ================= */}
          <main style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column' }}>
            
            {/* Header & Segmented Tabs */}
            <div style={{ borderBottom: '2px solid var(--border-strong)', paddingBottom: '12px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <h2 className="section-title" style={{ fontSize: '1.25rem' }}>
                  Published Reporting ({displayArticles.length})
                </h2>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setActiveTab('all')}
                  style={{
                    padding: '4px 10px',
                    fontSize: '0.7rem',
                    fontWeight: activeTab === 'all' ? 800 : 600,
                    backgroundColor: activeTab === 'all' ? 'var(--badge-red-bg)' : 'var(--bg-subtle)',
                    color: activeTab === 'all' ? '#FFFFFF' : 'var(--text-secondary)',
                    borderRadius: '0px'
                  }}
                >
                  All Dispatches
                </button>
                <button
                  onClick={() => setActiveTab('investigations')}
                  style={{
                    padding: '4px 10px',
                    fontSize: '0.7rem',
                    fontWeight: activeTab === 'investigations' ? 800 : 600,
                    backgroundColor: activeTab === 'investigations' ? 'var(--badge-red-bg)' : 'var(--bg-subtle)',
                    color: activeTab === 'investigations' ? '#FFFFFF' : 'var(--text-secondary)',
                    borderRadius: '0px'
                  }}
                >
                  Investigations
                </button>
                <button
                  onClick={() => setActiveTab('analysis')}
                  style={{
                    padding: '4px 10px',
                    fontSize: '0.7rem',
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {displayArticles.map((art, idx) => (
                <div
                  key={art.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr',
                    gap: '18px',
                    paddingBottom: idx !== displayArticles.length - 1 ? '18px' : '0',
                    borderBottom: idx !== displayArticles.length - 1 ? '1px solid var(--border-rule)' : 'none',
                    alignItems: 'start'
                  }}
                >
                  <Link href={getArticleUrl(art)} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="aura-img-wrap" style={{ height: '120px', width: '100%' }}>
                      <img src={art.imageUrl} alt={art.title} className="aura-card-img" />
                    </div>
                  </Link>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
                      <span className="aura-pill">
                        {art.kicker}
                      </span>
                      
                    </div>

                    <Link href={getArticleUrl(art)} style={{ textDecoration: 'none' }}>
                      <h3 className="font-heading" style={{
                        fontSize: '0.98rem',
                        fontWeight: 800,
                        lineHeight: 1.25,
                        color: 'var(--text-primary)',
                        margin: '2px 0 4px 0'
                      }}>
                        {art.title}
                      </h3>
                    </Link>

                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: '0 0 8px 0' }}>
                      {art.summary}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.66rem', color: 'var(--text-muted)', marginTop: 'auto' }}>
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

          </main>

        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
