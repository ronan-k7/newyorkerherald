'use client';

import React from 'react';
import Link from 'next/link';
import { getHomepageLongReads, getAuthorSlugFromName, getArticleUrl } from '@/data/newsData';

export default function WeekendLongReads() {
  const essays = getHomepageLongReads().map(art => ({
    id: art.id,
    title: art.title,
    author: art.author.name,
    authorRole: art.author.role,
    readTime: art.readTime,
    excerpt: art.summary,
    imageUrl: art.imageUrl
  }));

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
              <Link href={getArticleUrl(item.id)} style={{ display: 'block', textDecoration: 'none' }}>
                <div className="aura-img-wrap" style={{ height: '220px', width: '100%', marginBottom: '14px' }}>
                  <img src={item.imageUrl} alt={item.title} className="aura-card-img" />
                </div>
              </Link>

              <span style={{ fontSize: '0.66rem', fontWeight: 800, color: 'var(--brand-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Long-Form Essay
              </span>

              <Link href={getArticleUrl(item.id)} style={{ textDecoration: 'none' }}>
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
                <Link href={`/author/${getAuthorSlugFromName(item.author)}`} style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
                  By {item.author} • {item.authorRole}
                </Link>
                <span>{item.readTime}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
