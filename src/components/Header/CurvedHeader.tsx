'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useNews } from '@/context/NewsContext';
import { 
  CloudSun, 
  Bookmark, 
  Search, 
  User, 
  LogOut, 
  Compass, 
  ShieldAlert,
  Flame
} from 'lucide-react';

interface CurvedHeaderProps {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function CurvedHeader({ activeCategory = 'All', onSelectCategory }: CurvedHeaderProps) {
  const { 
    bookmarks, 
    setIsReadingListOpen, 
    setIsSearchOpen, 
    currentUser, 
    setIsAuthModalOpen, 
    logout 
  } = useNews();

  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const now = new Date();
    setDateStr(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }));
  }, []);

  // EXACT same categories as the primary site
  const categories = [
    { name: 'Top Stories', slug: '', href: '/' },
    { name: 'U.S.', slug: 'us', href: '/category/us' },
    { name: 'Politics', slug: 'politics', href: '/category/politics' },
    { name: 'Business & Economy', slug: 'business', href: '/category/business' },
    { name: 'Tech & AI', slug: 'tech-ai', href: '/category/tech-ai' },
    { name: 'Entertainment', slug: 'entertainment', href: '/category/entertainment' },
    { name: 'Sports', slug: 'sports', href: '/category/sports' },
    { name: 'Health & Science', slug: 'health-science', href: '/category/health-science' },
    { name: 'Opinion', slug: 'opinion', href: '/category/opinion' },
    { name: 'Investigation', slug: 'investigation', href: '/category/investigation' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg-glass)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-rule)',
      transition: 'var(--transition-smooth)'
    }}>
      {/* Top Strip */}
      <div style={{
        borderBottom: '1px solid var(--border-rule)',
        padding: '5px 0',
        fontSize: '0.72rem',
        color: 'var(--text-secondary)'
      }}>
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

          {/* Right: Social Media, Bookmarks, Account */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Social Media Links */}
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
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
                  <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              <a
                href="https://substack.com/@newyorkerherald1"
                target="_blank"
                rel="noopener noreferrer"
                title="Subscribe on Substack"
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
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </a>
            </div>

            {/* Saved Drawer */}
            <button
              onClick={() => setIsReadingListOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                border: '1px solid var(--border-rule)',
                padding: '3px 8px',
                borderRadius: '0px',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: 'var(--text-primary)'
              }}
            >
              <Bookmark size={11} color={bookmarks.length > 0 ? 'var(--brand-primary)' : 'currentColor'} />
              <span>Saved</span>
              {bookmarks.length > 0 && (
                <span className="aura-pill" style={{ padding: '1px 4px', fontSize: '0.6rem' }}>
                  {bookmarks.length}
                </span>
              )}
            </button>

            {/* Member Sign In */}
            {currentUser ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--text-primary)',
                  padding: '3px 8px',
                  borderRadius: '0px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  border: '1px solid var(--border-rule)'
                }}>
                  {currentUser.name.split(' ')[0]}
                </span>
                <button onClick={() => logout()} style={{ color: 'var(--text-muted)', padding: '2px' }} title="Sign Out">
                  <LogOut size={12} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: 'var(--badge-red-bg)',
                  color: '#FFFFFF',
                  padding: '3px 10px',
                  borderRadius: '0px',
                  fontSize: '0.72rem',
                  fontWeight: 700
                }}
              >
                <User size={11} />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Masthead Banner */}
      <div style={{ padding: '28px 0' }}>
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

          {/* Quick Search */}
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
            }} className="header-search-bar">
            <Search size={14} color="var(--text-muted)" />
            <span>Search reporting...</span>
          </div>
        </div>
      </div>

      {/* Synchronized Exact Category Bar */}
      <div style={{
        borderTop: '1px solid var(--border-rule)',
        backgroundColor: 'var(--bg-surface)'
      }}>
        <div className="aura-container">
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            overflowX: 'auto',
            scrollbarWidth: 'none'
          }}>
            {categories.map((cat) => {
              const isActive = (cat.slug === '' && (!activeCategory || activeCategory === 'All' || activeCategory === 'Top Stories')) || activeCategory === cat.slug;
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 12px',
                    fontSize: '0.76rem',
                    fontWeight: isActive ? 900 : 700,
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    color: isActive ? 'var(--brand-primary)' : 'var(--text-secondary)',
                    borderBottom: isActive ? '2px solid var(--brand-primary)' : '2px solid transparent'
                  }}
                >
                  <span>{cat.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
