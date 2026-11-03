'use client';

import React from 'react';
import Link from 'next/link';
import { getHomepageDepartmentArticles, getArticlesByCategorySlug, getAuthorSlugFromName, getArticleUrl } from '@/data/newsData';
import { ArrowRight } from 'lucide-react';

export default function CurvedDepartmentPortals() {
  // Dedicated non-repeating department stories for the homepage
  const politics = getHomepageDepartmentArticles('politics');
  const business = getHomepageDepartmentArticles('business');
  const tech = getHomepageDepartmentArticles('tech');
  const entertainment = getHomepageDepartmentArticles('entertainment');
  const sports = getHomepageDepartmentArticles('sports');
  const science = getHomepageDepartmentArticles('science');

  // Full category totals for section overview links
  const politicsTotal = getArticlesByCategorySlug('politics').length;
  const businessTotal = getArticlesByCategorySlug('business').length;
  const techTotal = getArticlesByCategorySlug('tech').length;
  const entertainmentTotal = getArticlesByCategorySlug('entertainment').length;
  const sportsTotal = getArticlesByCategorySlug('sports').length;
  const scienceTotal = getArticlesByCategorySlug('science').length;

  const renderCard = (art: any) => (
    <div
      key={art.id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Link href={getArticleUrl(art)} style={{ display: 'block', textDecoration: 'none' }}>
        <div className="aura-img-wrap department-portal-img" style={{ width: '100%', marginBottom: '8px' }}>
          <img src={art.imageUrl} alt={art.title} className="aura-card-img" />
        </div>
      </Link>

      <span className="aura-pill" style={{ marginBottom: '4px', alignSelf: 'flex-start' }}>
        {art.category}
      </span>

      <Link href={getArticleUrl(art)} style={{ textDecoration: 'none' }}>
        <h4 className="font-heading" style={{
          fontSize: '0.88rem',
          fontWeight: 800,
          lineHeight: 1.25,
          color: 'var(--text-primary)',
          marginBottom: '6px'
        }}>
          {art.title}
        </h4>
      </Link>

      <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '8px' }}>
        {art.summary.slice(0, 80)}...
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.64rem',
        color: 'var(--text-muted)',
        borderTop: '1px solid var(--border-rule)',
        paddingTop: '6px',
        marginTop: 'auto'
      }}>
        <Link href={`/author/${getAuthorSlugFromName(art.author.name)}`} style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
          {art.author.name}
        </Link>
        <span>{art.readTime}</span>
      </div>
    </div>
  );

  return (
    <section style={{ padding: '16px 0 24px 0' }}>
      <div className="aura-container" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* ================= SECTION 1: POLITICS ================= */}
        <div>
          <div className="section-header">
            <h3 className="section-title">
              Politics
            </h3>

            <Link href="/category/politics" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              color: 'var(--brand-primary)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textDecoration: 'none'
            }}>
              <span>Section Overview ({politicsTotal})</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="department-portals-grid">
            {politics.map(renderCard)}
          </div>
        </div>

        {/* ================= SECTION 2: BUSINESS & ECONOMY ================= */}
        <div>
          <div className="section-header">
            <h3 className="section-title">
              Business & Economy
            </h3>

            <Link href="/category/business" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              color: 'var(--brand-primary)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textDecoration: 'none'
            }}>
              <span>Section Overview ({businessTotal})</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="department-portals-grid">
            {business.map(renderCard)}
          </div>
        </div>

        {/* ================= SECTION 3: TECH ================= */}
        <div>
          <div className="section-header">
            <h3 className="section-title">
              Tech
            </h3>

            <Link href="/category/tech" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              color: 'var(--brand-primary)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textDecoration: 'none'
            }}>
              <span>Section Overview ({techTotal})</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="department-portals-grid">
            {tech.map(renderCard)}
          </div>
        </div>

        {/* ================= SECTION 4: 2-COLUMN SPLIT (ENTERTAINMENT & SPORTS) ================= */}
        <div className="department-split-grid">
          {/* Entertainment */}
          <div>
            <div className="section-header">
              <h4 className="section-title" style={{ fontSize: '0.92rem' }}>
                Entertainment
              </h4>
              <Link href="/category/entertainment" style={{ fontSize: '0.68rem', color: 'var(--brand-primary)', fontWeight: 700 }}>
                View All
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {entertainment.map((item, i) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    paddingBottom: i !== entertainment.length - 1 ? '12px' : '0',
                    borderBottom: i !== entertainment.length - 1 ? '1px solid var(--border-rule)' : 'none'
                  }}
                >
                  <Link href={getArticleUrl(item)} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="aura-img-wrap" style={{ width: '85px', height: '68px', flexShrink: 0 }}>
                      <img src={item.imageUrl} alt={item.title} className="aura-card-img" />
                    </div>
                  </Link>
                  <div style={{ flex: 1 }}>
                    <Link href={getArticleUrl(item)} style={{ textDecoration: 'none' }}>
                      <h5 className="font-heading" style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25, margin: '0 0 4px 0' }}>
                        {item.title}
                      </h5>
                    </Link>
                    <span style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>
                      <Link href={`/author/${getAuthorSlugFromName(item.author.name)}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700 }}>
                        {item.author.name}
                      </Link> • {item.readTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sports */}
          <div>
            <div className="section-header">
              <h4 className="section-title" style={{ fontSize: '0.92rem' }}>
                Sports
              </h4>
              <Link href="/category/sports" style={{ fontSize: '0.68rem', color: 'var(--brand-primary)', fontWeight: 700 }}>
                View All
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {sports.map((item, i) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    paddingBottom: i !== sports.length - 1 ? '12px' : '0',
                    borderBottom: i !== sports.length - 1 ? '1px solid var(--border-rule)' : 'none'
                  }}
                >
                  <Link href={getArticleUrl(item)} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="aura-img-wrap" style={{ width: '85px', height: '68px', flexShrink: 0 }}>
                      <img src={item.imageUrl} alt={item.title} className="aura-card-img" />
                    </div>
                  </Link>
                  <div style={{ flex: 1 }}>
                    <Link href={getArticleUrl(item)} style={{ textDecoration: 'none' }}>
                      <h5 className="font-heading" style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25, margin: '0 0 4px 0' }}>
                        {item.title}
                      </h5>
                    </Link>
                    <span style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>
                      <Link href={`/author/${getAuthorSlugFromName(item.author.name)}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700 }}>
                        {item.author.name}
                      </Link> • {item.readTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SECTION 5: SCIENCE ================= */}
        <div>
          <div className="section-header">
            <h3 className="section-title">
              Science
            </h3>

            <Link href="/category/science" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              color: 'var(--brand-primary)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textDecoration: 'none'
            }}>
              <span>Section Overview ({scienceTotal})</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="department-portals-grid">
            {science.map(renderCard)}
          </div>
        </div>

      </div>
    </section>
  );
}
