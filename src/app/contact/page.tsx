'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import { ArrowLeft, Mail, AlertCircle, Send, CheckCircle2, MessageSquare, Newspaper, Megaphone } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'general',
    subject: '',
    message: ''
  });

  const channels = [
    {
      icon: Mail,
      title: 'General & Newsroom Inquiries',
      email: 'newyorkerherld@gmail.com',
      desc: 'Questions about our content, editorial standards, partnerships, or general readership matters.'
    },
    {
      icon: Newspaper,
      title: 'News Tips & Story Leads',
      email: 'newyorkerherld@gmail.com',
      desc: 'Have a story we should investigate? Share tips, documents, and leads directly with our editors.'
    },
    {
      icon: AlertCircle,
      title: 'Corrections & Accuracy Desk',
      email: 'newyorkerherld@gmail.com',
      desc: 'If you notice a factual error, provide the headline, article URL, and evidence for editorial review.'
    },
    {
      icon: MessageSquare,
      title: 'Media & Press Inquiries',
      email: 'newyorkerherld@gmail.com',
      desc: 'Journalists and media outlets seeking interviews, statements, or editorial commentary.'
    },
    {
      icon: Megaphone,
      title: 'Advertising & Partnerships',
      email: 'newyorkerherld@gmail.com',
      desc: 'Inquiries regarding corporate sponsorships, syndication licenses, and brand partnerships.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.message) {
      setSubmitted(true);
    }
  };

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
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>Contact Us</span>
        </div>

        {/* Masthead Header */}
        <div style={{
          borderBottom: '2px solid var(--text-primary)',
          paddingBottom: '24px',
          marginBottom: '36px'
        }}>
          <span className="aura-pill" style={{ marginBottom: '10px' }}>
            Newsroom Directory &amp; Communications
          </span>

          <h1 className="font-heading" style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            margin: '0 0 12px 0'
          }}>
            Contact Us
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '820px', lineHeight: 1.55, margin: 0 }}>
            At Newyorkerherald, we value our readers, sources, contributors, and partners. Whether you have a news tip, feedback about our reporting, a correction request, or a business inquiry, reach out directly at <strong style={{ color: 'var(--text-primary)' }}>newyorkerherld@gmail.com</strong>.
          </p>
        </div>

        {/* Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
          gap: '40px',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Direct Inquiries Form */}
          <div>
            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-sm)',
              padding: '28px'
            }}>
              <h2 className="font-heading" style={{
                fontSize: '1.3rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                marginBottom: '6px'
              }}>
                Send a Direct Message
              </h2>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                We strive to respond to all inquiries within 2–5 business days. Direct inbox: <strong style={{ color: 'var(--brand-primary)' }}>newyorkerherld@gmail.com</strong>
              </p>

              {submitted ? (
                <div style={{
                  padding: '24px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-xs)',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={32} color="var(--accent-emerald)" style={{ margin: '0 auto 10px auto' }} />
                  <h3 className="font-heading" style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 6px 0', color: 'var(--text-primary)' }}>
                    Message Received
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Thank you for contacting Newyorkerherald. Your submission has been forwarded to our editorial team at newyorkerherld@gmail.com.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px', color: 'var(--text-primary)' }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          fontSize: '0.82rem',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-hairline)',
                          backgroundColor: 'var(--bg-surface)',
                          color: 'var(--text-primary)',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px', color: 'var(--text-primary)' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          fontSize: '0.82rem',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-hairline)',
                          backgroundColor: 'var(--bg-surface)',
                          color: 'var(--text-primary)',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px', color: 'var(--text-primary)' }}>
                        Department Desk
                      </label>
                      <select
                        value={formData.department}
                        onChange={e => setFormData({ ...formData, department: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          fontSize: '0.82rem',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-hairline)',
                          backgroundColor: 'var(--bg-surface)',
                          color: 'var(--text-primary)',
                          outline: 'none'
                        }}
                      >
                        <option value="general">General Inquiries</option>
                        <option value="editorial">News Tips &amp; Stories</option>
                        <option value="corrections">Corrections &amp; Accuracy</option>
                        <option value="press">Media &amp; Press</option>
                        <option value="advertising">Advertising &amp; Partnerships</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px', color: 'var(--text-primary)' }}>
                        Subject Line
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Inquiry topic"
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          fontSize: '0.82rem',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-hairline)',
                          backgroundColor: 'var(--bg-surface)',
                          color: 'var(--text-primary)',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px', color: 'var(--text-primary)' }}>
                      Detailed Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please provide as much detail as possible, including links or references where applicable..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        fontSize: '0.82rem',
                        lineHeight: 1.5,
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid var(--border-hairline)',
                        backgroundColor: 'var(--bg-surface)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      alignSelf: 'flex-start',
                      backgroundColor: 'var(--brand-primary)',
                      color: '#FFFFFF',
                      padding: '8px 20px',
                      borderRadius: 'var(--radius-xs)',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      border: 'none'
                    }}
                  >
                    <Send size={14} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Corrections Instructions Card */}
            <div style={{
              marginTop: '24px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderLeft: '4px solid var(--accent-amber)',
              borderRadius: 'var(--radius-sm)',
              padding: '20px'
            }}>
              <h3 className="font-heading" style={{ fontSize: '0.98rem', fontWeight: 800, margin: '0 0 6px 0', color: 'var(--text-primary)' }}>
                Submitting a Correction
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 8px 0' }}>
                When submitting an error or factual dispute to <strong style={{ color: 'var(--brand-primary)' }}>newyorkerherld@gmail.com</strong>, please include:
              </p>
              <ul style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li>The exact article headline</li>
                <li>The article URL</li>
                <li>A specific description of the issue or discrepancy</li>
                <li>Supporting documentation, records, or authoritative links</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Dedicated Contact & Social Directory */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 className="font-heading" style={{
              fontSize: '1.15rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              margin: 0
            }}>
              Editorial Contact
            </h2>

            {channels.map((chan, idx) => {
              const Icon = chan.icon;
              return (
                <div key={idx} style={{
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '3px',
                      backgroundColor: 'var(--bg-surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand-primary)'
                    }}>
                      <Icon size={13} />
                    </div>
                    <h3 className="font-heading" style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      {chan.title}
                    </h3>
                  </div>

                  <a
                    href={`mailto:${chan.email}`}
                    style={{
                      display: 'inline-block',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--brand-primary)',
                      textDecoration: 'none',
                      marginBottom: '4px'
                    }}
                  >
                    {chan.email}
                  </a>

                  <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: 0 }}>
                    {chan.desc}
                  </p>
                </div>
              );
            })}

            {/* Official Social Channels */}
            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-sm)',
              padding: '16px'
            }}>
              <h3 className="font-heading" style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 6px 0' }}>
                Follow Newyorkerherald
              </h3>
              <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: '0 0 12px 0' }}>
                Stay informed with real-time news, commentary, and dispatches across our official publication channels:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.78rem', fontWeight: 700 }}>
                <a
                  href="https://www.instagram.com/newyorker_herald/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--brand-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>→ Instagram:</span>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>@newyorker_herald</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61595450824941"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--brand-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>→ Facebook:</span>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Newyorkerherald Official</span>
                </a>
                <a
                  href="https://medium.com/@newyorkerherald"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--brand-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>→ Medium:</span>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>@newyorkerherald</span>
                </a>
                <a
                  href="https://substack.com/@newyorkerherald1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--brand-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>→ Substack:</span>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>@newyorkerherald1</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
