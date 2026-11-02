'use client';

import React from 'react';
import Link from 'next/link';
import { getHomepageExecutiveBriefing } from '@/data/newsData';
import { ListOrdered, ArrowRight, Zap, Clock } from 'lucide-react';

export default function ExecutiveDigest() {
  const articles = getHomepageExecutiveBriefing();

  return (
    <section style={{ padding: '24px 0 32px 0' }}>
      <div className="aura-container">
        
        {/* Section Header */}
        <div className="section-header">
          <h3 className="section-title">
            Top Stories Briefing
          </h3>

          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            4 Core Developments in 2 Minutes
          </span>
        </div>

        {/* 4-Column Numbered Stream */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {articles.map((art, idx) => (
            <div
              key={art.id}
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start'
              }}
            >
              {/* Big Bold Number */}
              <span className="font-heading" style={{
                fontSize: '1.75rem',
                fontWeight: 900,
                color: 'var(--border-rule)',
                lineHeight: 1,
                width: '32px',
                flexShrink: 0
              }}>
                0{idx + 1}
              </span>

              <div style={{ flex: 1 }}>
                <span className="aura-pill" style={{ marginBottom: '4px' }}>
                  {art.category}
                </span>

                <Link href={`/article/${art.id}`} style={{ textDecoration: 'none' }}>
                  <h4 className="font-heading" style={{
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    {art.title}
                  </h4>
                </Link>

                <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: '0 0 6px 0' }}>
                  {art.summary.slice(0, 85)}...
                </p>

                <span style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                  {art.publishedAt} • {art.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
