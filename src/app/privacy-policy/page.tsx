'use client';

import React from 'react';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import { ArrowLeft, ShieldCheck, Lock, FileText, Database, Globe, UserCheck, AlertCircle } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: ShieldCheck,
      title: 'Introduction',
      body: 'At Newyorkerherald, we respect your privacy and are committed to protecting the personal information you may share while using our website. This Privacy Policy explains what information we collect, how it may be used, and the measures we take to safeguard it.'
    },
    {
      icon: Database,
      title: 'Information We Collect',
      body: 'When you visit Newyorkerherald, certain information may be collected automatically, such as your IP address, browser type, device information, pages visited, and other basic analytics telemetry. We may also collect information that you voluntarily provide through contact forms, email communications, newsletter subscriptions, or account registrations.'
    },
    {
      icon: FileText,
      title: 'How We Use Information',
      body: 'The information we collect helps us operate, maintain, and improve our website and journalism. It may be used to respond to inquiries, deliver morning newsletters, analyze website performance, enhance reader experience, prevent fraud or misuse, and comply with legal obligations.'
    },
    {
      icon: Globe,
      title: 'Cookies and Similar Technologies',
      body: 'Newyorkerherald may use cookies and similar technologies to improve website functionality, remember user reading preferences (such as light/dark mode and custom reading settings), analyze traffic patterns, and support advertising or analytics services. Users can manage cookie preferences directly through their web browser settings.'
    },
    {
      icon: UserCheck,
      title: 'Third-Party Services',
      body: 'We may employ third-party service providers, including cloud hosting, analytics, content delivery networks (CDNs), and newsletter distribution partners. These providers may collect and process information strictly in accordance with their respective privacy policies and applicable laws.'
    },
    {
      icon: Lock,
      title: 'Data Security',
      body: 'We take reasonable administrative, technical, and organizational measures to protect personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of data transmission across the public internet or electronic storage can be guaranteed to be 100% impenetrable.'
    },
    {
      icon: AlertCircle,
      title: 'External Links',
      body: 'Our articles and dossiers contain links to external third-party websites for reference and source attribution. Newyorkerherald is not responsible for the privacy practices, content, or policies of external sites. Readers are encouraged to review the policies of any destination they visit.'
    },
    {
      icon: ShieldCheck,
      title: "Children's Privacy",
      body: 'Newyorkerherald is not directed toward children under the age required by applicable law (including COPPA), and we do not knowingly collect personal information from minors. If such data is discovered, immediate steps will be taken to delete it.'
    },
    {
      icon: UserCheck,
      title: 'Your Rights & Data Portability',
      body: 'Depending on your jurisdiction (such as GDPR, CCPA, or state privacy frameworks), you may possess specific statutory rights regarding your personal information, including the right to access, review, correct, or request permanent deletion of your data. Requests may be submitted via our contact desk.'
    },
    {
      icon: FileText,
      title: 'Changes to This Policy',
      body: 'We may update this Privacy Policy periodically to reflect changes in legal mandates, technology, or website operations. Any revisions will be published immediately on this page with an updated effective date.'
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
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>Privacy Policy</span>
        </div>

        {/* Masthead Header */}
        <div style={{
          borderBottom: '2px solid var(--text-primary)',
          paddingBottom: '24px',
          marginBottom: '36px'
        }}>
          <span className="aura-pill" style={{ marginBottom: '10px' }}>
            Data Protection &amp; Confidentiality
          </span>

          <h1 className="font-heading" style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            margin: '0 0 12px 0'
          }}>
            Privacy Policy
          </h1>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
            Last Updated: November 2026 • Document Ref: <code className="font-mono">NYH-PRIV-2026.11</code>
          </p>
        </div>

        {/* Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 300px',
          gap: '48px',
          alignItems: 'start'
        }}>
          
          {/* Main Sections */}
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

            {/* Commitment Box */}
            <div style={{
              marginTop: '36px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderLeft: '4px solid var(--brand-primary)',
              borderRadius: 'var(--radius-sm)',
              padding: '24px'
            }}>
              <h3 className="font-heading" style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
                Our Privacy Commitment
              </h3>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: '0 0 12px 0' }}>
                By using Newyorkerherald, you acknowledge and agree to the practices described in this Privacy Policy. We remain committed to protecting user privacy and maintaining complete transparency in how information is collected, used, and safeguarded.
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                Questions? Direct your privacy questions to <a href="mailto:newyorkerherld@gmail.com" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>newyorkerherld@gmail.com</a>.
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
                  <Link href="/terms-and-conditions" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    → Terms &amp; Conditions
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
