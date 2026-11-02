'use client';

import React from 'react';
import Link from 'next/link';
import { useNews } from '@/context/NewsContext';
import { getAllArticles } from '@/data/newsData';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';

export default function SavedArticlesDrawer() {
  const { isReadingListOpen, setIsReadingListOpen, bookmarks, toggleBookmark } = useNews();

  if (!isReadingListOpen) return null;

  const allArticles = getAllArticles();
  const savedArticles = allArticles.filter(a => bookmarks.includes(a.id));

  return (
    <div className="aura-modal-backdrop" onClick={() => setIsReadingListOpen(false)} style={{ justifyContent: 'flex-end', padding: 0 }}>
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '420px',
          height: '100vh',
          backgroundColor: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-glass)',
          boxShadow: 'var(--shadow-soft-lg)',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideLeft 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px',
          borderBottom: '1px solid var(--border-glass)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bookmark size={18} color="var(--brand-primary)" />
            <h3 className="font-heading" style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              Saved Reading List
            </h3>
            <span style={{
              backgroundColor: 'var(--brand-primary-light)',
              color: 'var(--brand-primary)',
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '2px 7px',
              borderRadius: 'var(--radius-pill)'
            }}>
              {savedArticles.length}
            </span>
          </div>

          <button
            onClick={() => setIsReadingListOpen(false)}
            style={{ color: 'var(--text-muted)', padding: '6px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)' }}
          >
            <X size={16} />
          </button>
        </div>

        {/* List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {savedArticles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
              <Bookmark size={36} color="var(--border-strong)" style={{ margin: '0 auto 12px auto' }} />
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                Your Reading List is Empty
              </h4>
              <p style={{ fontSize: '0.8rem', lineHeight: 1.4 }}>
                Bookmark articles across Newyorkerherald to read later offline or on the go.
              </p>
            </div>
          ) : (
            savedArticles.map((art) => (
              <div
                key={art.id}
                className="aura-card"
                style={{ padding: '14px', display: 'flex', gap: '12px', alignItems: 'center' }}
              >
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  style={{ width: '70px', height: '65px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <Link
                    href={`/article/${art.id}`}
                    onClick={() => setIsReadingListOpen(false)}
                    style={{ textDecoration: 'none' }}
                  >
                    <h5 className="font-heading" style={{
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      lineHeight: 1.3,
                      color: 'var(--text-primary)',
                      marginBottom: '4px'
                    }}>
                      {art.title}
                    </h5>
                  </Link>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    {art.category} • {art.readTime}
                  </span>
                </div>
                <button
                  onClick={() => toggleBookmark(art.id)}
                  style={{ color: 'var(--accent-rose)', padding: '6px' }}
                  title="Remove from saved"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
