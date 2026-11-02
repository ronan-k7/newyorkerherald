'use client';

import React from 'react';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import { ArrowLeft, Globe, Shield, Users, Award, BookOpen } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Global Bureaus', value: '06', desc: 'D.C., London, Tokyo, Brussels, SF, NYC' },
    { label: 'Correspondents', value: '85+', desc: 'Specialized field journalists' },
    { label: 'Editorial Inception', value: '1926', desc: 'A century of verifiable journalism' },
    { label: 'Independence', value: '100%', desc: 'Reader-funded & zero sponsored influence' }
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CurvedHeader />

      <div className="aura-container" style={{ padding: '20px 20px 48px 20px', flex: 1 }}>
        
        {/* Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
            <ArrowLeft size={12} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>About Newyorkerherald</span>
        </div>

        {/* Hero Masthead */}
        <div style={{
          borderBottom: '2px solid var(--border-strong)',
          paddingBottom: '20px',
          marginBottom: '28px'
        }}>
          <span className="aura-pill" style={{ marginBottom: '8px' }}>
            Institutional Charter
          </span>

          <h1 className="font-heading" style={{
            fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.12,
            letterSpacing: '-0.035em',
            margin: '0 0 10px 0'
          }}>
            Independent Journal of Verifiable Intelligence
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '820px', lineHeight: 1.5, margin: 0 }}>
            Newyorkerherald is a digital-first international news organization committed to non-partisan enterprise investigations, primary source verification, and sovereign intelligence reporting across politics, frontier science, and global markets.
          </p>
        </div>

        {/* 4-Stat Broad Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '36px',
          borderBottom: '1px solid var(--border-rule)',
          paddingBottom: '28px'
        }}>
          {stats.map((s, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="font-mono" style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--brand-primary)', lineHeight: 1, marginBottom: '4px' }}>
                {s.value}
              </span>
              <strong style={{ fontSize: '0.86rem', color: 'var(--text-primary)', marginBottom: '2px' }}>
                {s.label}
              </strong>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                {s.desc}
              </span>
            </div>
          ))}
        </div>

        {/* 2-Column Manifesto Spread */}
        <div className="grid-12-split-5-7" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '36px',
          alignItems: 'start'
        }}>
          {/* Left Column (5 Cols) */}
          <div style={{ gridColumn: 'span 5', borderRight: '1px solid var(--border-rule)', paddingRight: '32px' }}>
            <span className="aura-pill" style={{ marginBottom: '8px' }}>
              Our Foundations
            </span>
            <h2 className="font-heading" style={{ fontSize: '1.55rem', fontWeight: 900, lineHeight: 1.25, color: 'var(--text-primary)', marginBottom: '12px' }}>
              Guiding Editorial Principles & Newsroom Integrity
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 14px 0' }}>
              In an era of hyper-accelerated information flow and fragmented algorithmic feeds, Newyorkerherald maintains an unwavering fidelity to primary-source documentation, rigorous multi-step peer verification, and contextualized geopolitical analysis.
            </p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Our correspondents operate under strict firewall protections ensuring total autonomy from commercial interests, state sponsorship, or platform monetization algorithms.
            </p>
          </div>

          {/* Right Column (7 Cols - Numbered Pillars) */}
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span className="aura-pill">Pillar 01</span>
                <h3 className="font-heading" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Primary Source Verification Standard
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Every data assertion, statistical projection, and policy quotation is authenticated through official transcripts, audited disclosures, FOIA releases, or sworn testimony.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span className="aura-pill">Pillar 02</span>
                <h3 className="font-heading" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  24/7 Global Bureau Coordination
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Our permanent newsrooms in Washington D.C., Brussels, London, and Tokyo maintain synchronous coverage of diplomatic summits, regulatory votes, and macroeconomic benchmarks.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span className="aura-pill">Pillar 03</span>
                <h3 className="font-heading" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Whistleblower & Source Confidentiality
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                We employ air-gapped cryptographic secure-drops and end-to-end encrypted communications to protect investigative sources and government whistleblowers worldwide.
              </p>
            </div>
          </div>
        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
