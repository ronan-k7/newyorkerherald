'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useNews } from '@/context/NewsContext';
import { Sparkles, ArrowUp, Check, ShieldCheck } from 'lucide-react';

export default function CurvedFooter() {
  const { subscribeToNewsletter } = useNews();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      await subscribeToNewsletter(email.trim());
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { name: 'Politics & Policy', href: '/category/politics' },
    { name: 'Business & Markets', href: '/category/business' },
    { name: 'Tech & Frontier AI', href: '/category/tech-ai' },
    { name: 'Culture & Entertainment', href: '/category/entertainment' },
    { name: 'Sports & Athletics', href: '/category/sports' },
    { name: 'Health & Science', href: '/category/health-science' },
  ];

  const authors = [
    { name: 'Sarah Mitchell', beat: 'National Security Desk', href: '/author/sarah-mitchell' },
    { name: 'David Vance', beat: 'AI Governance Bureau', href: '/author/david-vance' },
    { name: 'Henrik Lindqvist', beat: 'Chief Economics Desk', href: '/author/henrik-lindqvist' },
    { name: 'Elena Rostova', beat: 'Silicon Valley AI', href: '/author/elena-rostova' },
    { name: 'Dr. Rebecca Foster', beat: 'Science & Geology', href: '/author/rebecca-foster' },
    { name: 'Marcus Sterling', beat: 'Sports Finance Desk', href: '/author/marcus-sterling' },
  ];

  const institutional = [
    { name: 'About Newyorkerherald', href: '/about' },
    { name: 'Contact Newsroom', href: '/contact' },
    { name: 'Reader Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer style={{
      backgroundColor: 'var(--bg-surface)',
      borderTop: '2px solid var(--text-primary)',
      padding: '32px 0 20px 0',
      marginTop: '32px',
      transition: 'var(--transition-smooth)'
    }}>
      <div className="aura-container">
        
        {/* Flat Newsletter Strip */}
        <div className="footer-newsletter-box" style={{
          backgroundColor: 'var(--bg-surface-elevated)',
          border: '1px solid var(--border-hairline)',
          borderRadius: 'var(--radius-sm)',
          padding: '18px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '28px'
        }}>
          <div>
            <h3 className="font-heading" style={{ fontSize: '1rem', fontWeight: 900, margin: '0 0 2px 0', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
              Subscribe to our Newsletter
            </h3>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: 0 }}>
              Verified policy analysis, economic data, and daily reporting delivered at 6:00 AM EST.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: 'var(--accent-emerald)',
                fontWeight: 700,
                fontSize: '0.78rem'
              }}>
                <Check size={14} />
                <span>Subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '6px' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--border-hairline)',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-primary)',
                    fontSize: '0.78rem',
                    outline: 'none',
                    minWidth: '220px'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: 'var(--brand-primary)',
                    color: '#FFFFFF',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-xs)',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Directory Grid with Hairline Dividers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          borderBottom: '1px solid var(--border-hairline)',
          paddingBottom: '24px',
          marginBottom: '16px'
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '4px',
                backgroundColor: 'var(--brand-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <Sparkles size={12} />
              </div>
              <h2 className="font-heading" style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>
                NEWYORKERHERALD
              </h2>
            </div>

            <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '8px' }}>
              Independent digital journal delivering real-time news intelligence and deep investigative reports.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
              <ShieldCheck size={11} color="var(--brand-primary)" />
              <span>Independent Newsroom • 2026</span>
            </div>

            {/* Social Media Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on X"
                style={{
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '3px',
                  transition: 'color var(--transition-fast)'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Facebook"
                style={{
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '3px',
                  transition: 'color var(--transition-fast)'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on LinkedIn"
                style={{
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '3px',
                  transition: 'color var(--transition-fast)'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Instagram"
                style={{
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '3px',
                  transition: 'color var(--transition-fast)'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Subscribe on YouTube"
                style={{
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '3px',
                  transition: 'color var(--transition-fast)'
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Departments */}
          <div>
            <h4 style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Departments
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {categories.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Journalists */}
          <div>
            <h4 style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Journalists
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {authors.map((a) => (
                <li key={a.href}>
                  <Link href={a.href} style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>
                    <span>{a.name}</span>
                    <span style={{ display: 'block', fontSize: '0.66rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                      {a.beat}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Institutional
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {institutional.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          fontSize: '0.7rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 Newyorkerherald Media Group. All rights reserved. Broadsheet Editorial Architecture.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              border: '1px solid var(--border-hairline)',
              padding: '3px 8px',
              borderRadius: 'var(--radius-xs)',
              color: 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '0.68rem'
            }}
          >
            <ArrowUp size={10} />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
