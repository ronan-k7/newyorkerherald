'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import { ArrowLeft, Shield, Lock, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('sec1');

  const navItems = [
    { id: 'sec1', label: '1. Zero-Tracking Commitment' },
    { id: 'sec2', label: '2. Member Account Data' },
    { id: 'sec3', label: '3. Whistleblower Protections' },
    { id: 'sec4', label: '4. Third-Party Firewalls' },
    { id: 'sec5', label: '5. Rights & Data Portability' },
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
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>Privacy Policy</span>
        </div>

        {/* Masthead Header */}
        <div style={{
          borderBottom: '2px solid var(--border-strong)',
          paddingBottom: '20px',
          marginBottom: '28px'
        }}>
          <span className="aura-pill" style={{ marginBottom: '8px' }}>
            Data Protection & Charter
          </span>

          <h1 className="font-heading" style={{
            fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.12,
            letterSpacing: '-0.035em',
            margin: '0 0 10px 0'
          }}>
            Reader Privacy & Source Confidentiality
          </h1>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
            Effective: August 17, 2026 • Document Ref: <code className="font-mono">DOM-PRIV-2026.08</code>
          </p>
        </div>

        {/* 2-Column Split: Sticky TOC on Left (3 Cols) + Legal Articles on Right (9 Cols) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '36px',
          alignItems: 'start'
        }}>
          {/* Left Sticky TOC Sidebar */}
          <aside style={{ gridColumn: 'span 3', borderRight: '1px solid var(--border-rule)', paddingRight: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span className="aura-pill" style={{ marginBottom: '4px' }}>
              Index of Articles
            </span>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: activeSection === item.id ? 800 : 600,
                  color: activeSection === item.id ? 'var(--brand-primary)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  padding: '4px 0',
                  borderLeft: activeSection === item.id ? '2px solid var(--brand-primary)' : '2px solid transparent',
                  paddingLeft: '8px'
                }}
              >
                {item.label}
              </a>
            ))}
          </aside>

          {/* Right Main Legal Text */}
          <section style={{ gridColumn: 'span 9', display: 'flex', flexDirection: 'column', gap: '28px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.68 }}>
            
            <div id="sec1">
              <span className="aura-pill" style={{ marginBottom: '6px' }}>Article 01</span>
              <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Zero-Tracking Commitment
              </h3>
              <p style={{ margin: 0 }}>
                Newyorkerherald maintains an absolute zero-tracking operational posture across all editorial dispatches. We do not deploy third-party programmatic tracking beacons, behavioral retargeting pixels, or surveillance telemetry. Your reading journey across our journalism remains confidential.
              </p>
            </div>

            <div id="sec2" style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '20px' }}>
              <span className="aura-pill" style={{ marginBottom: '6px' }}>Article 02</span>
              <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Member Account & Reading List Data
              </h3>
              <p style={{ margin: 0 }}>
                Information collected during voluntary account registration—including username, encrypted credential hashes, and saved bookmarks—is utilized exclusively for account state synchronicity. Newyorkerherald will never monetize or syndicate member preferences to external commercial brokers.
              </p>
            </div>

            <div id="sec3" style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '20px' }}>
              <span className="aura-pill" style={{ marginBottom: '6px' }}>Article 03</span>
              <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Whistleblower & Investigative Source Protections
              </h3>
              <p style={{ margin: 0 }}>
                Submissions routed through our investigative secure drop are ingested via air-gapped cryptographic protocols. Metadata headers, hardware MAC identifiers, and originating IP routes are permanently stripped in memory prior to storage.
              </p>
            </div>

            <div id="sec4" style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '20px' }}>
              <span className="aura-pill" style={{ marginBottom: '6px' }}>Article 04</span>
              <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Third-Party Firewalls & Syndication Limits
              </h3>
              <p style={{ margin: 0 }}>
                External service integrations are strictly limited to foundational hosting infrastructure, audio synthesis, and secure payment processing. No third party is granted access to reader identity databases.
              </p>
            </div>

            <div id="sec5" style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '20px' }}>
              <span className="aura-pill" style={{ marginBottom: '6px' }}>Article 05</span>
              <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Rights of Erasure & Data Portability
              </h3>
              <p style={{ margin: 0 }}>
                Members maintain an unconditional right under international privacy frameworks (including GDPR and CCPA) to request complete export or permanent deletion of their account records at any time through account settings or direct contact with our compliance team.
              </p>
            </div>

          </section>
        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
