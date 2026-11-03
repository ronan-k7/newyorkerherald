'use client';

import React from 'react';
import Link from 'next/link';
import { CATEGORY_ARTICLES } from '@/data/newsData';
import { Atom, Dna, Sparkles, ArrowRight } from 'lucide-react';

export default function FrontierScienceGrid() {
  const scienceStories = CATEGORY_ARTICLES['Science'] || CATEGORY_ARTICLES['health-science'] || [];

  return (
    <section style={{ padding: '24px 0 32px 0' }}>
      <div className="aura-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="aura-pill aura-pill-emerald">
              <Atom size={12} />
              <span>Frontier Science</span>
            </span>
            <h3 className="section-title">
              Deep Tech, Clean Energy & Planetary Sciences
            </h3>
          </div>

          <Link href="/category/science" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            color: 'var(--brand-primary)',
            fontSize: '0.72rem',
            fontWeight: 700,
            textDecoration: 'none'
          }}>
            <span>Science Archive</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* 4-Column Broadsheet Science Showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {scienceStories.slice(0, 4).map((art) => (
            <div
              key={art.id}
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="aura-img-wrap" style={{ height: '140px', width: '100%', marginBottom: '10px' }}>
                <img src={art.imageUrl} alt={art.title} className="aura-card-img" />
              </div>

              <span className="aura-pill" style={{ marginBottom: '4px' }}>
                {art.kicker}
              </span>

              <Link href={`/article/${art.id}`} style={{ textDecoration: 'none' }}>
                <h4 className="font-heading" style={{
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  lineHeight: 1.28,
                  color: 'var(--text-primary)',
                  marginBottom: '6px'
                }}>
                  {art.title}
                </h4>
              </Link>

              <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '10px', marginTop: 'auto' }}>
                {art.summary.slice(0, 95)}...
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.68rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-rule)', paddingTop: '6px' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{art.author.name}</span>
                <span>{art.readTime}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
