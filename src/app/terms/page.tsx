'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import { ArrowLeft, BookOpen, Shield, Award, FileText } from 'lucide-react';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('term1');

  const navItems = [
    { id: 'term1', label: '1. Syndication & Copyright' },
    { id: 'term2', label: '2. Civic Forum Standards' },
    { id: 'term3', label: '3. Member Subscriptions' },
    { id: 'term4', label: '4. AI Scraping Restrictions' },
    { id: 'term5', label: '5. Jurisdiction & Governance' },
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
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>Terms of Service</span>
        </div>

        {/* Masthead Header */}
        <div style={{
          borderBottom: '2px solid var(--border-strong)',
          paddingBottom: '20px',
          marginBottom: '28px'
        }}>
          <span className="aura-pill" style={{ marginBottom: '8px' }}>
            Legal Framework
          </span>

          <h1 className="font-heading" style={{
            fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.12,
            letterSpacing: '-0.035em',
            margin: '0 0 10px 0'
          }}>
            Terms of Service & Syndicate Usage
          </h1>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
            Effective: August 17, 2026 • Document Ref: <code className="font-mono">DOM-TERMS-2026.08</code>
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
              Index of Terms
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
            
            <div id="term1">
              <span className="aura-pill" style={{ marginBottom: '6px' }}>Section 01</span>
              <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Syndication & Intellectual Property
              </h3>
              <p style={{ margin: 0 }}>
                All investigative dossiers, dispatch reporting, high-resolution photojournalism, charts, and proprietary datasets produced by Newyorkerherald are protected by international copyright laws. Reproduction, redistribution, or commercial syndication without prior written agreement is strictly prohibited.
              </p>
            </div>

            <div id="term2" style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '20px' }}>
              <span className="aura-pill" style={{ marginBottom: '6px' }}>Section 02</span>
              <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Civic Forum & Discussion Guidelines
              </h3>
              <p style={{ margin: 0 }}>
                Participation in Newyorkerherald reader dialogue and comment threads requires adherence to fact-based civility. Harassment, unauthorized commercial promotion, coordinated disinformation campaigns, or hate speech will result in immediate termination of commenting privileges.
              </p>
            </div>

            <div id="term3" style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '20px' }}>
              <span className="aura-pill" style={{ marginBottom: '6px' }}>Section 03</span>
              <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Membership Subscriptions & Billing
              </h3>
              <p style={{ margin: 0 }}>
                Reader memberships grant unrestricted access to audio synthesis dispatches, deep-dive archival investigations, and executive briefing alerts. Subscriptions renew automatically at the specified billing period and can be modified or cancelled at any time through member settings.
              </p>
            </div>

            <div id="term4" style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '20px' }}>
              <span className="aura-pill" style={{ marginBottom: '6px' }}>Section 04</span>
              <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Automated Scraping & AI Model Training
              </h3>
              <p style={{ margin: 0 }}>
                Automated extraction of Newyorkerherald content, including full-text scraping, RSS mining for commercial AI model training, and bulk ingestion, is explicitly prohibited without an enterprise licensing agreement under our standard API governance framework.
              </p>
            </div>

            <div id="term5" style={{ borderTop: '1px solid var(--border-rule)', paddingTop: '20px' }}>
              <span className="aura-pill" style={{ marginBottom: '6px' }}>Section 05</span>
              <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Jurisdiction & Governing Law
              </h3>
              <p style={{ margin: 0 }}>
                These terms are governed by and construed in accordance with the laws of the District of Columbia, United States, without regard to its conflict of law provisions. Any legal disputes arising under these terms shall be subject to the exclusive jurisdiction of courts located in Washington, D.C.
              </p>
            </div>

          </section>
        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
