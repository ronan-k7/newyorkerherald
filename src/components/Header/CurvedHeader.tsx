'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useNews } from '@/context/NewsContext';
import { CloudSun, Search } from 'lucide-react';

interface CurvedHeaderProps {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function CurvedHeader({ activeCategory = 'All', onSelectCategory }: CurvedHeaderProps) {
  const {
    setIsSearchOpen
  } = useNews();

  const [dateStr, setDateStr] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const now = new Date();
    setDateStr(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }));
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Hysteresis window: collapse when scrolled past 60px, expand back only when scrolled back above 20px
          // This completely prevents oscillation, shivering, or rapid state toggling
          if (scrollY > 60) {
            setIsScrolled(true);
          } else if (scrollY < 20) {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // EXACT same categories as the primary site
  const categories = [
    { name: 'Top Stories', slug: '', href: '/' },
    { name: 'U.S.', slug: 'us', href: '/category/us' },
    { name: 'Politics', slug: 'politics', href: '/category/politics' },
    { name: 'Business & Economy', slug: 'business', href: '/category/business' },
    { name: 'Tech', slug: 'tech', href: '/category/tech' },
    { name: 'Entertainment', slug: 'entertainment', href: '/category/entertainment' },
    { name: 'Sports', slug: 'sports', href: '/category/sports' },
    { name: 'Science', slug: 'science', href: '/category/science' },
    { name: 'Opinion', slug: 'opinion', href: '/category/opinion' },
    { name: 'Investigation', slug: 'investigation', href: '/category/investigation' },
  ];

  return (
    <header className={`curved-header-root ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Top Strip - collapsed smoothly when scrolled */}
      <div className="header-top-strip">
        <div className="aura-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Left: Date & Weather */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 700, color: 'var(--text-primary)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '0px', backgroundColor: 'var(--brand-primary)', display: 'inline-block' }} />
              <span>{dateStr || 'Mon, Nov 2, 2026'}</span>
            </div>

            <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)' }}>
              <CloudSun size={13} color="var(--accent-amber)" />
              <span>24°C • Global Edition</span>
            </div>
          </div>

          {/* Right: Social Media */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="hidden-mobile" style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              paddingRight: "10px",
              borderRight: "1px solid var(--border-rule)"
            }}>
              <a
                href="https://www.instagram.com/newyorker_herald/"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Instagram"
                style={{
                  color: "var(--text-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px",
                  transition: "color var(--transition-fast)"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61595450824941"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Facebook"
                style={{
                  color: "var(--text-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px",
                  transition: "color var(--transition-fast)"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://medium.com/@newyorkerherald"
                target="_blank"
                rel="noopener noreferrer"
                title="Read on Medium"
                style={{
                  color: "var(--text-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px",
                  transition: "color var(--transition-fast)"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
              <a
                href="https://substack.com/@newyorkerherald1"
                target="_blank"
                rel="noopener noreferrer"
                title="Substack"
                style={{
                  color: "var(--text-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px",
                  transition: "color var(--transition-fast)"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Masthead Banner - collapsed smoothly when scrolled */}
      <div className="header-masthead-banner">
        <div className="aura-container masthead-banner-container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <Link href="/" className="masthead-title-link" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
            <h1 className="font-heading masthead-logo" style={{
              fontSize: 'clamp(1.85rem, 3.2vw, 2.45rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              margin: 0
            }}>
              NEWYORKERHERALD
            </h1>
            <span style={{
              display: 'block',
              fontSize: '0.7rem',
              fontWeight: 800,
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginTop: '5px'
            }}>
              Independent Global Journal • Edition 2026
            </span>
          </Link>

          {/* Quick Search in Masthead */}
          <div
            onClick={() => setIsSearchOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-rule)',
              padding: '9px 16px',
              borderRadius: '0px',
              color: 'var(--text-muted)',
              fontSize: '0.82rem',
              cursor: 'pointer',
              minWidth: '220px'
            }}
            className="header-search-bar"
          >
            <Search size={14} color="var(--text-muted)" />
            <span>Search</span>
          </div>
        </div>
      </div>

      {/* Category Bar - transforms into slim sticky header bar */}
      <div className="header-category-bar">
        <div
          className="aura-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%'
          }}
        >
          {/* Left: Compact brand logo when scrolled */}
          <div className="header-compact-logo">
            <Link
              href="/"
              className="font-heading"
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontWeight: 900,
                fontSize: '0.94rem',
                letterSpacing: '-0.03em',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                paddingRight: '12px',
                marginRight: '6px',
                borderRight: '1px solid var(--border-rule)',
                lineHeight: 1
              }}
              title="Newyorker Herald Home"
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  backgroundColor: 'var(--brand-primary)',
                  display: 'inline-block',
                  flexShrink: 0
                }}
              />
              <span>NEWYORKERHERALD</span>
            </Link>
          </div>

          {/* Center: Scrollable Categories */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              flex: 1,
              minWidth: 0,
              height: '100%'
            }}
          >
            {categories.map((cat) => {
              const isActive = (cat.slug === '' && (!activeCategory || activeCategory === 'All' || activeCategory === 'Top Stories')) || activeCategory === cat.slug;
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  onClick={() => {
                    if (onSelectCategory) onSelectCategory(cat.slug || 'All');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px 11px',
                    fontSize: '0.75rem',
                    fontWeight: isActive ? 900 : 700,
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    color: isActive ? 'var(--brand-primary)' : 'var(--text-secondary)',
                    borderBottom: isActive ? '2px solid var(--brand-primary)' : '2px solid transparent',
                    transition: 'color var(--transition-fast)'
                  }}
                >
                  <span>{cat.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Compact Search button when scrolled */}
          <div className="header-compact-search">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search articles"
              title="Search"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-rule)',
                borderRadius: '0px',
                padding: '5px 11px',
                color: 'var(--text-secondary)',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all var(--transition-fast)',
                lineHeight: 1,
                marginLeft: '6px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--text-secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-rule)';
              }}
            >
              <Search size={13} color="currentColor" />
              <span className="hidden-mobile">Search</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
