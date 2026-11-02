'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import { Mail, MapPin, Phone, ShieldCheck, Check, Send, ArrowLeft, Lock, FileText } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [department, setDepartment] = useState('investigative');
  const [formData, setFormData] = useState({ name: '', email: '', message: '', isConfidential: false });

  const bureaus = [
    {
      city: 'Washington D.C.',
      role: 'Global Headquarters & National Security Desk',
      address: '1400 K Street NW, Suite 900, Washington, D.C. 20005',
      email: 'dc.newsroom@newyorkerherald.com',
      phone: '+1 (202) 555-0194'
    },
    {
      city: 'London',
      role: 'European & Middle East Financial Bureau',
      address: '10 Fleet Street, EC4Y 1AU, London, United Kingdom',
      email: 'london.bureau@newyorkerherald.com',
      phone: '+44 20 7946 0921'
    },
    {
      city: 'Tokyo',
      role: 'Asia-Pacific Tech & Geopolitics Desk',
      address: 'Roppongi Hills Mori Tower, Minato-ku, Tokyo 106-6108',
      email: 'tokyo.bureau@newyorkerherald.com',
      phone: '+81 3 5555 0143'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>Newsroom Directory</span>
        </div>

        {/* Hero Masthead */}
        <div style={{
          borderBottom: '2px solid var(--border-strong)',
          paddingBottom: '20px',
          marginBottom: '28px'
        }}>
          <span className="aura-pill" style={{ marginBottom: '8px' }}>
            Bureau Communications
          </span>

          <h1 className="font-heading" style={{
            fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.12,
            letterSpacing: '-0.035em',
            margin: '0 0 10px 0'
          }}>
            Global Newsroom Directory & Secure Drop
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '820px', lineHeight: 1.5, margin: 0 }}>
            Direct transmission lines for confidential investigative tips, editorial correspondence, sovereign data requests, and subscriber services.
          </p>
        </div>

        {/* 3-Column Bureau Cards Spread */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '36px',
          borderBottom: '1px solid var(--border-rule)',
          paddingBottom: '32px'
        }}>
          {bureaus.map((b, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="aura-pill" style={{ alignSelf: 'flex-start' }}>
                Bureau {i + 1}
              </span>
              <h3 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>
                {b.city}
              </h3>
              <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--brand-primary)', margin: 0 }}>
                {b.role}
              </p>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                <MapPin size={14} color="var(--brand-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{b.address}</span>
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                <Mail size={14} color="var(--brand-primary)" style={{ flexShrink: 0 }} />
                <span className="font-mono">{b.email}</span>
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                <Phone size={14} color="var(--brand-primary)" style={{ flexShrink: 0 }} />
                <span>{b.phone}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Transmission Form & Encryption Protocol */}
        <div className="grid-12-split-5-7" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '36px',
          alignItems: 'start'
        }}>
          {/* Left Column: Secure Encryption Info (5 Cols) */}
          <div style={{ gridColumn: 'span 5', borderRight: '1px solid var(--border-rule)', paddingRight: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <Lock size={14} color="var(--brand-primary)" />
              <span className="aura-pill">Encrypted Channel</span>
            </div>
            <h2 className="font-heading" style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '10px' }}>
              Investigative Source Confidentiality
            </h2>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
              For sensitive government disclosures or whistleblower submissions, our transmission pipeline operates over ephemeral end-to-end cryptographic relays. IP logs and routing fingerprints are automatically purged upon ingestion.
            </p>
            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '12px', borderLeft: '3px solid var(--brand-primary)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              <strong>PGP Key Fingerprint:</strong><br />
              <span className="font-mono">8F2A 91BC 44E2 09D1 7720 EE81 405A 669B</span>
            </div>
          </div>

          {/* Right Column: Transmission Form (7 Cols) */}
          <div style={{ gridColumn: 'span 7' }}>
            <span className="aura-pill" style={{ marginBottom: '8px' }}>
              Direct Transmission Form
            </span>

            {submitted ? (
              <div style={{ padding: '24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--brand-primary)', marginBottom: '8px' }}>
                  <Check size={18} />
                  <strong style={{ fontSize: '1.1rem' }}>Dispatch Encrypted & Transmitted</strong>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Your message has been assigned tracking hash <code className="font-mono">DOM-8840-X</code>. An editor will review the intelligence shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="contact-inputs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      Name / Source Alias
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '8px 10px',
                        border: '1px solid var(--border-rule)',
                        backgroundColor: 'var(--bg-surface)',
                        color: 'var(--text-primary)',
                        fontSize: '0.84rem',
                        borderRadius: '0px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      Secure Contact Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '8px 10px',
                        border: '1px solid var(--border-rule)',
                        backgroundColor: 'var(--bg-surface)',
                        color: 'var(--text-primary)',
                        fontSize: '0.84rem',
                        borderRadius: '0px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    Target Department Desk
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      border: '1px solid var(--border-rule)',
                      backgroundColor: 'var(--bg-surface)',
                      color: 'var(--text-primary)',
                      fontSize: '0.84rem',
                      borderRadius: '0px',
                      outline: 'none'
                    }}
                  >
                    <option value="investigative">Investigative Projects Desk</option>
                    <option value="politics">U.S. Politics & Capitol Hill Bureau</option>
                    <option value="business">Global Markets & Commodities Desk</option>
                    <option value="tech">AI & Frontier Technology Bureau</option>
                    <option value="general">Editorial Board & Reader Inquiries</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    Dispatch Memorandum / Confidential Tip
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide detailed background, primary documentation references, or story pitches..."
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      border: '1px solid var(--border-rule)',
                      backgroundColor: 'var(--bg-surface)',
                      color: 'var(--text-primary)',
                      fontSize: '0.84rem',
                      borderRadius: '0px',
                      outline: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    backgroundColor: 'var(--badge-red-bg)',
                    color: '#FFFFFF',
                    padding: '9px 18px',
                    borderRadius: '0px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    alignSelf: 'flex-start'
                  }}
                >
                  <Send size={13} />
                  <span>Transmit to Bureau</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
