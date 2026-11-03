'use client';

import React from 'react';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import { ArrowLeft, ShieldCheck, Scale, AlertCircle, Cpu, MessageSquare, Award } from 'lucide-react';

export default function EditorialPolicyPage() {
  const sections = [
    {
      icon: ShieldCheck,
      title: 'Our Mission',
      body: 'Newyorkerherald is committed to providing accurate, independent, and responsible journalism focused on the United States and its global impact. Our goal is to inform readers through reliable reporting, thoughtful analysis, and meaningful storytelling.'
    },
    {
      icon: Scale,
      title: 'Editorial Independence',
      body: 'All editorial decisions are made independently and are not influenced by advertisers, sponsors, political organizations, governments, or other outside commercial interests. We maintain a strict, inviolable separation between editorial content and commercial operations.'
    },
    {
      icon: Award,
      title: 'Accuracy and Fairness',
      body: 'We strive to ensure that all published information is accurate, properly sourced, and presented with appropriate context. Our editorial team makes exhaustive efforts to verify facts before publication and update stories promptly when new verified information becomes available.'
    },
    {
      icon: AlertCircle,
      title: 'Corrections Policy',
      body: 'If an error is identified, we review the matter promptly and transparently make corrections when necessary. Maintaining accuracy and accountability is a core part of our editorial process. Correction notices are documented clearly within the respective article text.'
    },
    {
      icon: MessageSquare,
      title: 'Opinion and Analysis',
      body: 'Opinion articles, commentary, and specialized analysis are published alongside news reporting but are strictly labeled. Such content reflects the views of the respective authors and does not necessarily represent the views or institutional positions of Newyorkerherald.'
    },
    {
      icon: Cpu,
      title: 'Use of Technology & AI',
      body: 'We may use technology, including artificial intelligence tools, to assist with research and background data synthesis. However, all published content is rigorously vetted and edited by human journalists, and complete editorial responsibility remains solely with our human editorial team.'
    },
    {
      icon: MessageSquare,
      title: 'Reader Engagement & Inquiries',
      body: 'We value feedback from our readers and encourage suggestions, questions, and correction requests. Reader input helps us improve our journalism and uphold the highest professional standards.'
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
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>Editorial Policy</span>
        </div>

        {/* Masthead Header */}
        <div style={{
          borderBottom: '2px solid var(--text-primary)',
          paddingBottom: '24px',
          marginBottom: '36px'
        }}>
          <span className="aura-pill" style={{ marginBottom: '10px' }}>
            Newsroom Charter & Code of Ethics
          </span>

          <h1 className="font-heading" style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            margin: '0 0 12px 0'
          }}>
            Editorial Policy
          </h1>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
            Last Updated: November 2026 • Document Ref: <code className="font-mono">NYH-ED-2026.11</code>
          </p>
        </div>

        {/* Main Content Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 300px',
          gap: '48px',
          alignItems: 'start'
        }}>
          
          {/* Main Policy Sections */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {sections.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <section key={idx} style={{
                    borderBottom: idx === sections.length - 1 ? 'none' : '1px solid var(--border-hairline)',
                    paddingBottom: idx === sections.length - 1 ? '0' : '28px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--bg-surface-elevated)',
                        border: '1px solid var(--border-hairline)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--brand-primary)'
                      }}>
                        <Icon size={15} />
                      </div>
                      <h2 className="font-heading" style={{
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        color: 'var(--text-primary)',
                        margin: 0
                      }}>
                        {sec.title}
                      </h2>
                    </div>
                    <p style={{
                      fontSize: '0.96rem',
                      lineHeight: 1.7,
                      color: 'var(--text-secondary)',
                      margin: 0,
                      paddingLeft: '38px'
                    }}>
                      {sec.body}
                    </p>
                  </section>
                );
              })}
            </div>

            {/* Final Commitment Box */}
            <div style={{
              marginTop: '40px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderLeft: '4px solid var(--brand-primary)',
              borderRadius: 'var(--radius-sm)',
              padding: '24px'
            }}>
              <h3 className="font-heading" style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
                Our Commitment to Readers
              </h3>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
                Newyorkerherald remains dedicated to ethical journalism, transparency, fairness, and accountability while delivering trustworthy coverage of the issues and events shaping the nation and the world.
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

            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              padding: '20px',
              borderRadius: 'var(--radius-sm)'
            }}>
              <h3 className="font-heading" style={{ fontSize: '0.92rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '10px', color: 'var(--text-primary)' }}>
                Report an Error
              </h3>
              <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 12px 0' }}>
                Notice a factual inaccuracy or missing attribution in our reporting? Submit a direct review request to our standards desk.
              </p>
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--brand-primary)',
                  color: '#FFFFFF',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                Submit Correction
              </Link>
            </div>
          </aside>

        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
