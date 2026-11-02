'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useNews } from '@/context/NewsContext';
import { getAllArticles } from '@/data/newsData';
import { Search, X, ArrowRight, FileText } from 'lucide-react';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useNews();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const allArticles = getAllArticles();
  const filtered = query.trim()
    ? allArticles.filter(a => 
        a.title.toLowerCase().includes(query.toLowerCase()) || 
        a.summary.toLowerCase().includes(query.toLowerCase()) ||
        a.category.toLowerCase().includes(query.toLowerCase())
      )
    : allArticles.slice(0, 5);

  return (
    <div className="aura-modal-backdrop" onClick={() => setIsSearchOpen(false)}>
      <div className="aura-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px', padding: '24px' }}>
        
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: 'var(--bg-subtle)',
          borderRadius: 'var(--radius-pill)',
          padding: '10px 18px',
          marginBottom: '20px',
          border: '1px solid var(--border-subtle)'
        }}>
          <Search size={18} color="var(--brand-primary)" />
          <input
            type="text"
            autoFocus
            placeholder="Search news, investigations, analysis..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontSize: '0.94rem',
              outline: 'none'
            }}
          />
          {query && (
            <button onClick={() => setQuery('')} style={{ color: 'var(--text-muted)' }}>
              <X size={16} />
            </button>
          )}
        </div>

        {/* Results */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            {query.trim() ? `Search Results (${filtered.length})` : 'Trending Articles'}
          </span>

          {filtered.map((art) => (
            <Link
              key={art.id}
              href={`/article/${art.id}`}
              onClick={() => setIsSearchOpen(false)}
              style={{
                display: 'flex',
                gap: '12px',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-glass)',
                textDecoration: 'none',
                alignItems: 'center',
                transition: 'var(--transition-fast)'
              }}
              className="aura-card-interactive"
            >
              <img
                src={art.imageUrl}
                alt={art.title}
                style={{ width: '64px', height: '54px', borderRadius: '10px', objectFit: 'cover', flexShrink: 0 }}
              />
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--brand-primary)', textTransform: 'uppercase' }}>
                  {art.category}
                </span>
                <h5 className="font-heading" style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-primary)', margin: '2px 0 0 0', lineHeight: 1.3 }}>
                  {art.title}
                </h5>
              </div>
              <ArrowRight size={14} color="var(--text-muted)" />
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
