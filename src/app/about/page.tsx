'use client';

import React from 'react';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import { ArrowLeft, CheckCircle2, Shield, Eye, FileText, Globe } from 'lucide-react';

export default function AboutPage() {
  const highlights = [
    {
      title: 'Verified Reporting',
      desc: 'Rigorous fact-checking, primary documentation, and on-the-record attribution across every story.',
      icon: Shield,
    },
    {
      title: 'Fast & Clear Updates',
      desc: 'Rapid breaking news reporting paired with clear prose and meaningful context.',
      icon: Globe,
    },
    {
      title: 'Uncompromised Analysis',
      desc: 'Deep-dive coverage that questions underlying assumptions rather than recycling press releases.',
      icon: FileText,
    },
    {
      title: 'Holistic American & World Life',
      desc: 'Comprehensive coverage of societal, scientific, and cultural developments, not just flashpoints.',
      icon: Eye,
    },
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CurvedHeader />

      <div className="aura-container" style={{ padding: '24px 20px 56px 20px', flex: 1 }}>
        
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
            <ArrowLeft size={12} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>About Us</span>
        </div>

        {/* Header Masthead */}
        <div style={{
          borderBottom: '2px solid var(--text-primary)',
          paddingBottom: '24px',
          marginBottom: '36px'
        }}>
          <span className="aura-pill" style={{ marginBottom: '10px' }}>
            Our Mission & Standards
          </span>

          <h1 className="font-heading" style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            margin: '0 0 12px 0'
          }}>
            About Newyorkerherald
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '820px', lineHeight: 1.55, margin: 0 }}>
            Delivering the latest breaking news, accurate reporting, and timely headlines from across the nation and around the world, keeping readers informed and empowered.
          </p>
        </div>

        {/* Main Content Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 300px',
          gap: '48px',
          alignItems: 'start'
        }}>
          
          {/* Narrative Body */}
          <div style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
            
            {/* Section 1: What We Do */}
            <section style={{ marginBottom: '36px' }}>
              <h2 className="font-heading" style={{
                fontSize: '1.45rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '12px'
              }}>
                What We Do
              </h2>
              <p>
                We report news that matters across the United States and the international stage. We cover politics, the economy, technology and AI, culture and entertainment, sports, health, and frontier science. Every day, we publish breaking headlines and deep reporting you can use to understand the fast-evolving world around you.
              </p>
            </section>

            {/* Section 2: Why We Do It */}
            <section style={{ marginBottom: '36px' }}>
              <h2 className="font-heading" style={{
                fontSize: '1.45rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '12px'
              }}>
                Why We Do It
              </h2>
              <p>
                Modern readers rarely see reporting that goes beyond clichés, soundbites, and polarized surface-level takes. At Newyorkerherald, we believe journalism should question assumptions, examine complex policy mechanisms, and present a fuller, more authentic picture of what is happening on the ground across our communities, institutions, and global hubs.
              </p>
            </section>

            {/* Section 3: How We Work */}
            <section style={{ marginBottom: '36px' }}>
              <h2 className="font-heading" style={{
                fontSize: '1.45rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '12px'
              }}>
                How We Work
              </h2>
              <p>
                We write fast. We write clear. But we also verify facts, confirm primary sources, and weigh documentary evidence before we publish. We do not guess, we do not exaggerate, and we do not chase sensationalist headlines merely for clicks. Every report undergoes meticulous editorial review.
              </p>
            </section>

            {/* Section 4: Our Audience */}
            <section style={{ marginBottom: '36px' }}>
              <h2 className="font-heading" style={{
                fontSize: '1.45rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '12px'
              }}>
                Our Audience
              </h2>
              <p>
                You might be a student, a business leader, an engineer, a public policy analyst, an expat, or a curious citizen. You want news that explains events rather than merely repeating them. You want context, historical depth, and clarity — not partisan noise.
              </p>
            </section>

            {/* Section 5: What We Believe */}
            <section style={{ marginBottom: '36px' }}>
              <h2 className="font-heading" style={{
                fontSize: '1.45rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '12px'
              }}>
                What We Believe
              </h2>
              <p>
                Facts matter. Fairness matters. Accountability matters. We believe citizens and readers should see the economic, political, and cultural forces shaping our era clearly — without filters, corporate distortion, or institutional spin.
              </p>
            </section>

            {/* Section 6: What You'll See Here */}
            <section style={{ marginBottom: '36px' }}>
              <h2 className="font-heading" style={{
                fontSize: '1.45rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '16px'
              }}>
                What You&apos;ll See Here
              </h2>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} color="var(--brand-primary)" style={{ marginTop: '4px', flexShrink: 0 }} />
                  <span><strong>Verified reporting</strong> from trusted, on-the-record primary sources.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} color="var(--brand-primary)" style={{ marginTop: '4px', flexShrink: 0 }} />
                  <span><strong>Fast updates</strong> on breaking national and international developments.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} color="var(--brand-primary)" style={{ marginTop: '4px', flexShrink: 0 }} />
                  <span><strong>Insightful analysis</strong> that refuses to cut corners or compromise nuance.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} color="var(--brand-primary)" style={{ marginTop: '4px', flexShrink: 0 }} />
                  <span><strong>Broad coverage</strong> of cultural, economic, and scientific life, not just daily controversies.</span>
                </li>
              </ul>

              <p style={{ fontStyle: 'italic', color: 'var(--text-primary)', borderLeft: '3px solid var(--brand-primary)', paddingLeft: '14px', margin: '20px 0 0 0' }}>
                Newyorkerherald aims to be the journal you turn to when you want serious, verifiable news — delivered without hype, without bias, and without guesswork.
              </p>
            </section>

          </div>

          {/* Sidebar */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              padding: '20px',
              borderRadius: 'var(--radius-sm)'
            }}>
              <h3 className="font-heading" style={{ fontSize: '0.92rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '14px', color: 'var(--text-primary)' }}>
                Editorial Pillars
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {highlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <div key={i} style={{ display: 'flex', gap: '12px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-hairline)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: 'var(--brand-primary)'
                      }}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '2px' }}>
                          {h.title}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                          {h.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              padding: '20px',
              borderRadius: 'var(--radius-sm)'
            }}>
              <h3 className="font-heading" style={{ fontSize: '0.92rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '12px', color: 'var(--text-primary)' }}>
                Institutional Links
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.78rem' }}>
                <li>
                  <Link href="/editorial-policy" style={{ color: 'var(--brand-primary)', textDecoration: 'none', fontWeight: 700 }}>
                    → Editorial Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    → Contact Newsroom
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    → Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    → Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </aside>

        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
