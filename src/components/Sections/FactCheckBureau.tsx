'use client';

import React from 'react';
import { FACT_CHECKS } from '@/data/newsData';
import { CheckCircle2, XCircle, AlertTriangle, HelpCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export default function FactCheckBureau() {
  const factChecks = FACT_CHECKS || [];

  const getVerdictBadge = (verdict?: string) => {
    const v = (verdict || '').toLowerCase();
    if (v.includes('false')) {
      return (
        <span className="aura-pill">
          <XCircle size={11} />
          <span>Verdict: False</span>
        </span>
      );
    }
    if (v.includes('true')) {
      return (
        <span className="aura-pill">
          <CheckCircle2 size={11} />
          <span>Verdict: True</span>
        </span>
      );
    }
    return (
      <span className="aura-pill">
        <AlertTriangle size={11} />
        <span>Verdict: Context Needed</span>
      </span>
    );
  };

  return (
    <section style={{ padding: '24px 0 32px 0' }}>
      <div className="aura-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="aura-pill">
              <ShieldCheck size={12} />
              <span>Truth Meter</span>
            </span>
            <h3 className="section-title">
              Fact Check
            </h3>
          </div>

          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Non-Partisan Primary Source Verification
          </span>
        </div>

        {/* 3-Column Fact-Check Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {factChecks.slice(0, 3).map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderTop: '2px solid var(--border-rule)',
                paddingTop: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  Target: {item.claimant}
                </span>
                {getVerdictBadge(item.verdict)}
              </div>

              <h4 className="font-heading" style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                lineHeight: 1.3,
                color: 'var(--text-primary)',
                marginBottom: '8px'
              }}>
                &ldquo;{item.claim}&rdquo;
              </h4>

              <p style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.45,
                marginBottom: '12px'
              }}>
                {item.verdictSummary}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                marginTop: 'auto',
                borderTop: '1px solid var(--border-rule)',
                paddingTop: '6px'
              }}>
                <span>Source: {item.source || 'Public Records'}</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
