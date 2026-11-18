'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useNews } from '@/context/NewsContext';
import { CloudSun, Search, Menu, X, ChevronRight } from 'lucide-react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const topAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const now = new Date();
    setDateStr(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }));
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const updateHeaderOffset = () => {
      if (topAreaRef.current && headerRef.current) {
        const topHeight = topAreaRef.current.offsetHeight;
        headerRef.current.style.setProperty('--header-top-offset', `${topHeight}px`);
      }
    };

    updateHeaderOffset();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && topAreaRef.current) {
      ro = new ResizeObserver(() => {
        updateHeaderOffset();
      });
      ro.observe(topAreaRef.current);
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const topHeight = topAreaRef.current ? topAreaRef.current.offsetHeight : 134;
          // Activate compact sticky category bar once the top area has scrolled offscreen
          // Hysteresis window ensures zero oscillation or flickering
          const threshold = Math.max(topHeight - 10, 40);
          const resetThreshold = Math.max(threshold - 30, 15);

          if (scrollY >= threshold) {
            setIsScrolled(true);
          } else if (scrollY <= resetThreshold) {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateHeaderOffset, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeaderOffset);
      if (ro) ro.disconnect();
    };
  }, []);

  // EXACT same categories as the primary site
  const categories = [
    { name: 'Home', slug: '', href: '/' },
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
    <>
    <header ref={headerRef} className={`curved-header-root ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Top Collapsible Area (Top Strip + Masthead Banner) */}
      <div ref={topAreaRef} className="header-top-collapsible-area">
        {/* Top Strip */}
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
      </div>

      {/* Mobile Navigation Header Bar (Visible on mobile <= 768px) */}
      <div className="mobile-header-nav-bar">
        {/* Left: Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-hamburger-btn"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          title="Categories & Search"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Center: Brand Title */}
        <Link
          href="/"
          className="mobile-masthead-logo"
          onClick={() => setIsMobileMenuOpen(false)}
          title="Newyorker Herald Home"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--brand-primary)', display: 'inline-block', flexShrink: 0 }} />
            <span className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1 }}>
              NEWYORKERHERALD
            </span>
          </div>
          <span style={{ fontSize: '0.58rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '3px' }}>
            Independent Global Journal
          </span>
        </Link>

        {/* Right: Quick Search Button */}
        <button
          type="button"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsSearchOpen(true);
          }}
          className="mobile-search-btn"
          aria-label="Search articles"
          title="Search"
        >
          <Search size={20} color="var(--text-primary)" />
        </button>
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
              const isActive = (cat.slug === '' && (!activeCategory || activeCategory === 'All' || activeCategory === 'Home' || activeCategory === 'Top Stories')) || activeCategory === cat.slug;
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

    {/* Mobile Navigation & Search Drawer - Rendered via Portal to escape header containing block */}
    {mounted && typeof document !== 'undefined' && createPortal(
      <div
        className={`mobile-drawer-backdrop ${isMobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="mobile-drawer-sheet"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="mobile-drawer-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '7px', height: '7px', backgroundColor: 'var(--brand-primary)', display: 'inline-block' }} />
              <span className="font-heading" style={{ fontSize: '1.05rem', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                NEWYORKERHERALD
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-drawer-close-btn"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Search Box in Mobile Menu */}
          <div className="mobile-drawer-search-section">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="mobile-drawer-search-box"
              aria-label="Open search dialog"
            >
              <Search size={16} color="var(--brand-primary)" />
              <span>Search news, investigations, analysis...</span>
            </button>
          </div>

          {/* Categories List in Mobile Menu */}
          <div className="mobile-drawer-nav-section">
            <span className="mobile-drawer-section-title">
              SECTIONS & CATEGORIES
            </span>
            <nav className="mobile-drawer-nav-list">
              {categories.map((cat) => {
                const isActive = (cat.slug === '' && (!activeCategory || activeCategory === 'All' || activeCategory === 'Home' || activeCategory === 'Top Stories')) || activeCategory === cat.slug;
                return (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    onClick={() => {
                      if (onSelectCategory) onSelectCategory(cat.slug || 'All');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`mobile-drawer-nav-item ${isActive ? 'is-active' : ''}`}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className={`mobile-nav-bullet ${isActive ? 'is-active' : ''}`} />
                      <span>{cat.name}</span>
                    </div>
                    <ChevronRight size={15} color={isActive ? "var(--brand-primary)" : "var(--text-muted)"} />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer: Edition info and Social links */}
          <div className="mobile-drawer-footer">
            <div className="mobile-drawer-edition-badge">
              <span>{dateStr || 'Mon, Nov 2, 2026'}</span>
              <span>•</span>
              <span>Global Edition</span>
            </div>

            <div className="mobile-drawer-socials">
              <a href="https://www.instagram.com/newyorker_herald/" target="_blank" rel="noopener noreferrer" title="Instagram">
                Instagram
              </a>
              <span>•</span>
              <a href="https://www.facebook.com/profile.php?id=61595450824941" target="_blank" rel="noopener noreferrer" title="Facebook">
                Facebook
              </a>
              <span>•</span>
              <a href="https://medium.com/@newyorkerherald" target="_blank" rel="noopener noreferrer" title="Medium">
                Medium
              </a>
              <span>•</span>
              <a href="https://substack.com/@newyorkerherald1" target="_blank" rel="noopener noreferrer" title="Substack">
                Substack
              </a>
            </div>

            <div className="mobile-drawer-legal-links">
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="/editorial-policy" onClick={() => setIsMobileMenuOpen(false)}>Editorial Policy</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link href="/privacy" onClick={() => setIsMobileMenuOpen(false)}>Privacy</Link>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )}
    </>
  );
}
