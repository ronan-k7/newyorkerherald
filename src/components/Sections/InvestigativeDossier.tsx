'use client';

import React from 'react';
import Link from 'next/link';
import { INVESTIGATIVE_FEATURE } from '@/data/newsData';
import { ShieldAlert, FileText, ArrowRight, Clock, Award, CheckCircle2 } from 'lucide-react';

export default function InvestigativeDossier() {
  if (!INVESTIGATIVE_FEATURE) return null;

  return (
    <section style={{ padding: '24px 0 32px 0' }}>
      <div className="aura-container">
        
        {/* Section Header */}
        <div className="section-header">
          <h3 className="section-title">
            Investigation
          </h3>

          <Link href="/category/investigation" style={{
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

        {/* Investigative Layout: 2:1 Broadsheet Split */}
        <div className="grid-12-split-8-4" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          alignItems: 'start'
        }}>
          {/* Main Dossier (8 cols) */}
          <div style={{ gridColumn: 'span 8', borderRight: '1px solid var(--border-rule)', paddingRight: '32px' }}>
            <Link href={`/article/${INVESTIGATIVE_FEATURE.id}`} style={{ display: 'block', textDecoration: 'none' }}>
              <div className="aura-img-wrap" style={{ height: 'clamp(200px, 30vw, 320px)', width: '100%', marginBottom: '16px' }}>
                <img src={INVESTIGATIVE_FEATURE.imageUrl} alt={INVESTIGATIVE_FEATURE.title} className="aura-card-img" />
              </div>
            </Link>

            <span style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--brand-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '4px' }}>
              {INVESTIGATIVE_FEATURE.kicker}
            </span>

            <Link href={`/article/${INVESTIGATIVE_FEATURE.id}`} style={{ textDecoration: 'none' }}>
              <h2 className="font-heading" style={{
                fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                letterSpacing: '-0.035em',
                marginBottom: '12px'
              }}>
                {INVESTIGATIVE_FEATURE.title}
              </h2>
            </Link>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '16px' }}>
              {INVESTIGATIVE_FEATURE.summary}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-rule)', paddingTop: '10px', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              <Link href="/author/carlos-mendoza" style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
                Reporting by {INVESTIGATIVE_FEATURE.author.name}
              </Link>
              <span>{INVESTIGATIVE_FEATURE.publishedAt} • {INVESTIGATIVE_FEATURE.readTime}</span>
            </div>
          </div>

          {/* Side Evidence & Findings Box (4 cols) */}
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <h4 className="font-heading" style={{ fontSize: '0.88rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px', borderBottom: '1px solid var(--border-rule)', paddingBottom: '4px' }}>
                Key Evidence Findings
              </h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45, marginBottom: '12px' }}>
                A 6-month cross-border investigation combining satellite telemetry, freedom of information records, and confidential regulatory filings.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ borderLeft: '2px solid var(--brand-primary)', paddingLeft: '10px' }}>
                <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                  Grid Capacity Deficits
                </strong>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                  Regional transmission operators face unprecedented 300% load surges driven by high-density compute facilities.
                </span>
              </div>

              <div style={{ borderLeft: '2px solid var(--accent-amber)', paddingLeft: '10px' }}>
                <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                  Regulatory Divergence
                </strong>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                  State utilities draft conflicting interconnection tariffs as federal oversight committees schedule subpoenas.
                </span>
              </div>

              <div style={{ borderLeft: '2px solid var(--accent-emerald)', paddingLeft: '10px' }}>
                <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                  Whistleblower Testimony
                </strong>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                  Internal communications reveal supply-chain bottlenecks across high-voltage step-up transformer manufacturing.
                </span>
              </div>
            </div>

            <Link
              href={`/article/${INVESTIGATIVE_FEATURE.id}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--brand-primary)',
                fontSize: '0.78rem',
                fontWeight: 800,
                textDecoration: 'none',
                marginTop: '8px'
              }}
            >
              <span>Read Full Multi-Part Dossier</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
