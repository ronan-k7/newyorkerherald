'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUp, ShieldCheck } from 'lucide-react';

export default function CurvedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { name: 'U.S. News', href: '/category/us' },
    { name: 'Politics & Policy', href: '/category/politics' },
    { name: 'Business & Markets', href: '/category/business' },
    { name: 'Tech', href: '/category/tech' },
    { name: 'Culture & Entertainment', href: '/category/entertainment' },
    { name: 'Sports & Athletics', href: '/category/sports' },
    { name: 'Science', href: '/category/science' },
    { name: 'Investigation', href: '/category/investigation' },
  ];

  const editorialDesks = [
    { name: 'Editorial Board', beat: 'Governance & Institutional Voice', href: '/author/editorial-board' },
    { name: 'Washington Bureau', beat: 'National Politics & Congress', href: '/author/editorial-board' },
    { name: 'New York Financial Desk', beat: 'Global Markets & Macroeconomics', href: '/author/editorial-board' },
    { name: 'San Francisco Tech Desk', beat: 'Frontier AI & Silicon Valley', href: '/author/editorial-board' },
    { name: 'National Science Bureau', beat: 'Climate, Health & Technology', href: '/author/editorial-board' },
    { name: 'Investigative Desk', beat: 'Enterprise & In-Depth Inquiries', href: '/author/editorial-board' },
  ];

  const institutional = [
    { name: 'About Us', href: '/about' },
    { name: 'Editorial Policy', href: '/editorial-policy' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
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
                href="https://www.instagram.com/newyorker_herald/"
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
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61595450824941"
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
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://medium.com/@newyorkerherald"
                target="_blank"
                rel="noopener noreferrer"
                title="Read on Medium"
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
                  <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              <a
                href="https://substack.com/@newyorkerherald1"
                target="_blank"
                rel="noopener noreferrer"
                title="Substack"
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
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
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

          {/* Editorial Desks */}
          <div>
            <h4 style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Editorial Desks
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {editorialDesks.map((a) => (
                <li key={a.name}>
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
