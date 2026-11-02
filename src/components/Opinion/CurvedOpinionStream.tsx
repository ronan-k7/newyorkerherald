'use client';

import React from 'react';
import Link from 'next/link';
import { OPINION_COLUMNS, getAuthorSlugFromName } from '@/data/newsData';
import { Feather, Clock, ArrowRight } from 'lucide-react';

export default function CurvedOpinionStream() {
  return (
    <section style={{ padding: '24px 0 32px 0' }}>
      <div className="aura-container">
        
        {/* Section Header */}
        <div className="section-header">
          <h3 className="section-title">
            Opinion
          </h3>

          <Link href="/category/opinion" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            color: 'var(--brand-primary)',
            fontSize: '0.72rem',
            fontWeight: 700,
            textDecoration: 'none'
          }}>
            <span>Section Overview</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* 4-Column Opinion Stream (No Card Outlines) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {OPINION_COLUMNS.map((col) => (
            <div
              key={col.id}
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Link href={`/author/${getAuthorSlugFromName(col.authorName)}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img
                    src={col.authorAvatar}
                    alt={col.authorName}
                    style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                      {col.authorName}
                    </strong>
                    <span style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                      {col.authorTitle}
                    </span>
                  </div>
                </Link>
              </div>

              <span className="aura-pill" style={{ marginBottom: '4px' }}>
                {col.columnTitle}
              </span>

              <h4 className="font-heading" style={{
                fontSize: '0.88rem',
                fontWeight: 800,
                lineHeight: 1.28,
                color: 'var(--text-primary)',
                marginBottom: '6px'
              }}>
                {col.headline}
              </h4>

              <p className="font-serif" style={{ fontStyle: 'italic', fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: '0 0 10px 0', borderLeft: '2px solid var(--border-rule)', paddingLeft: '8px' }}>
                &ldquo;{col.quoteSnippet}&rdquo;
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.66rem',
                color: 'var(--text-muted)',
                marginTop: 'auto',
                borderTop: '1px solid var(--border-rule)',
                paddingTop: '6px'
              }}>
                <span>{col.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <Clock size={10} /> {col.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
