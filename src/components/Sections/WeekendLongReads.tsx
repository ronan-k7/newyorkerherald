'use client';

import React from 'react';
import Link from 'next/link';
import { getAuthorSlugFromName } from '@/data/newsData';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export default function WeekendLongReads() {
  const essays = [
    {
      id: 'ent-1',
      title: 'Paramount and Skydance Finalize Landmark $8 Billion Merger to Form Unified Entertainment Powerhouse',
      author: 'Maya Patel',
      authorRole: 'Hollywood & Entertainment Bureau Chief',
      readTime: '6 min read',
      excerpt: 'The transformative combination creates a multi-platform content titan spanning global box-office franchises, television studios, and cutting-edge interactive animation technologies.',
      imageUrl: '/images/news/paramount-skydance-merger-clears-regulatory-review-triggering-new-wave-of-hollywood-ip-deals.webp'
    },
    {
      id: 'inv-1',
      title: 'The AI Power Crunch: How Surging Data Center Demand Is Testing America’s Energy Capacity',
      author: 'Carlos Mendoza & Astrid Holm',
      authorRole: 'Investigative Projects Team',
      readTime: '9 min read',
      excerpt: 'A national investigation reveals how the explosive expansion of gigawatt-scale artificial intelligence compute clusters is colliding with aging electrical grids, sparking a fierce race for dedicated nuclear and geothermal energy contracts.',
      imageUrl: '/images/news/the-ai-power-crunch-how-surging-data-center-demand-and-grid-congestion-are-testing-america-s-energy-capacity.webp'
    }
  ];

  return (
    <section style={{ padding: '24px 0 32px 0' }}>
      <div className="aura-container">
        
        {/* Section Header */}
        <div className="section-header">
          <h3 className="section-title">
            Long-Reads
          </h3>

          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Weekend Edition • Unhurried Journalism
          </span>
        </div>

        {/* 2-Column Broad Essay Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '36px'
        }}>
          {essays.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Link href={`/article/${item.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                <div className="aura-img-wrap" style={{ height: '220px', width: '100%', marginBottom: '14px' }}>
                  <img src={item.imageUrl} alt={item.title} className="aura-card-img" />
                </div>
              </Link>

              <span style={{ fontSize: '0.66rem', fontWeight: 800, color: 'var(--brand-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Long-Form Essay
              </span>

              <Link href={`/article/${item.id}`} style={{ textDecoration: 'none' }}>
                <h4 className="font-heading" style={{
                  fontSize: '1.15rem',
                  fontWeight: 900,
                  lineHeight: 1.22,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.025em',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h4>
              </Link>

              <p className="font-serif" style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.55,
                marginBottom: '14px'
              }}>
                {item.excerpt}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                marginTop: 'auto',
                borderTop: '1px solid var(--border-rule)',
                paddingTop: '8px'
              }}>
                <div>
                  <Link href={`/author/${getAuthorSlugFromName(item.author)}`} style={{ textDecoration: 'none' }}>
                    <strong style={{ color: 'var(--text-primary)', display: 'block' }}>{item.author}</strong>
                  </Link>
                  <span style={{ fontSize: '0.64rem' }}>{item.authorRole}</span>
                </div>
                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <Clock size={11} /> {item.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
