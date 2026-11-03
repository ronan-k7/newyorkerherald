'use client';

import React from 'react';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import { ArrowLeft, CheckCircle2, ShieldAlert, FileText, Globe, Scale, AlertTriangle } from 'lucide-react';

export default function TermsAndConditionsPage() {
  const sections = [
    {
      icon: CheckCircle2,
      title: 'Acceptance of Terms',
      body: 'By accessing and using Newyorkerherald, you agree to be bound by these Terms & Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you should immediately discontinue use of the website.'
    },
    {
      icon: Globe,
      title: 'Use of the Website',
      body: 'Newyorkerherald is provided for informational, educational, and journalistic purposes. Users agree to use the website lawfully and in a manner that does not interfere with its operation, security, server stability, or accessibility for other visitors.'
    },
    {
      icon: Scale,
      title: 'Intellectual Property Rights',
      body: 'All content published on Newyorkerherald — including articles, investigations, text, graphics, logos, images, audio, video, and design elements — is protected by applicable copyright, trademark, and intellectual property laws. Unauthorized reproduction, distribution, scraping, modification, or commercial exploitation of content is strictly prohibited without prior written permission.'
    },
    {
      icon: ShieldAlert,
      title: 'User Responsibilities',
      body: 'Users are responsible for ensuring that any information, comments, or submissions they provide to the website are accurate and lawful. Any attempt to compromise site security, introduce malicious code, gain unauthorized access, or harass other users may result in immediate termination of access and civil or criminal liability.'
    },
    {
      icon: FileText,
      title: 'Third-Party Links',
      body: 'Newyorkerherald may contain links to external third-party websites for reference and convenience. We do not control or endorse the content, products, services, or privacy practices of external entities and assume no responsibility for third-party materials.'
    },
    {
      icon: AlertTriangle,
      title: 'Disclaimer of Warranties',
      body: 'The content on Newyorkerherald is provided on an "as is" and "as available" basis. While we strive to maintain accurate, verified, and timely reporting, we make no representations or warranties of any kind regarding completeness, fitness for a particular purpose, or uninterrupted availability.'
    },
    {
      icon: Scale,
      title: 'Limitation of Liability',
      body: 'To the fullest extent permitted by law, Newyorkerherald, its publisher, editors, journalists, affiliates, and partners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of, or inability to use, the platform and its reports.'
    },
    {
      icon: FileText,
      title: 'Modifications to Service & Terms',
      body: 'We reserve the right to modify, suspend, or discontinue any aspect of the service at any time without prior notice. We may update these Terms & Conditions periodically; continued use of Newyorkerherald following posted revisions constitutes acceptance of the modified terms.'
    },
    {
      icon: Scale,
      title: 'Governing Law',
      body: 'These Terms & Conditions shall be governed by and construed in accordance with the laws of the United States. Any disputes arising in connection with the website shall be resolved before courts of competent jurisdiction.'
    }
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
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>Terms &amp; Conditions</span>
        </div>

        {/* Masthead Header */}
        <div style={{
          borderBottom: '2px solid var(--text-primary)',
          paddingBottom: '24px',
          marginBottom: '36px'
        }}>
          <span className="aura-pill" style={{ marginBottom: '10px' }}>
            Legal Framework &amp; Usage Rights
          </span>

          <h1 className="font-heading" style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            margin: '0 0 12px 0'
          }}>
            Terms &amp; Conditions
          </h1>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
            Last Updated: November 2026 • Document Ref: <code className="font-mono">NYH-TOS-2026.11</code>
          </p>
        </div>

        {/* Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 300px',
          gap: '48px',
          alignItems: 'start'
        }}>
          
          {/* Main Terms Sections */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {sections.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <section key={idx} style={{
                    borderBottom: idx === sections.length - 1 ? 'none' : '1px solid var(--border-hairline)',
                    paddingBottom: idx === sections.length - 1 ? '0' : '24px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <div style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--bg-surface-elevated)',
                        border: '1px solid var(--border-hairline)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--brand-primary)'
                      }}>
                        <Icon size={14} />
                      </div>
                      <h2 className="font-heading" style={{
                        fontSize: '1.2rem',
                        fontWeight: 900,
                        color: 'var(--text-primary)',
                        margin: 0
                      }}>
                        {sec.title}
                      </h2>
                    </div>
                    <p style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      color: 'var(--text-secondary)',
                      margin: 0,
                      paddingLeft: '36px'
                    }}>
                      {sec.body}
                    </p>
                  </section>
                );
              })}
            </div>

            {/* Agreement Box */}
            <div style={{
              marginTop: '36px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderLeft: '4px solid var(--brand-primary)',
              borderRadius: 'var(--radius-sm)',
              padding: '24px'
            }}>
              <h3 className="font-heading" style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
                User Agreement
              </h3>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: '0 0 12px 0' }}>
                By continuing to access and use Newyorkerherald, you acknowledge that you have read, understood, and agreed to these Terms &amp; Conditions in full.
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                If you have legal inquiries, reach out through our <Link href="/contact" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Contact Us</Link> portal.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                  <Link href="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    → About Us
                  </Link>
                </li>
                <li>
                  <Link href="/editorial-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    → Editorial Policy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    → Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    → Contact Newsroom
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
