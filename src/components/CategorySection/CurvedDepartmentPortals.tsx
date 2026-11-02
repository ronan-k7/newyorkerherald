'use client';

import React from 'react';
import Link from 'next/link';
import { CATEGORY_ARTICLES, getAllArticles, getAuthorSlugFromName } from '@/data/newsData';
import { ArrowRight } from 'lucide-react';

export default function CurvedDepartmentPortals() {
  const allArts = getAllArticles();

  // Get department stories with fallbacks to ensure 5 stories per department
  const politics = (CATEGORY_ARTICLES['U.S. Politics'] || CATEGORY_ARTICLES['politics'] || []).concat(
    allArts.filter(a => a.category === 'U.S. Politics' && !CATEGORY_ARTICLES['U.S. Politics']?.some(p => p.id === a.id))
  );

  const business = (CATEGORY_ARTICLES['Business & Economy'] || CATEGORY_ARTICLES['business'] || []).concat(
    allArts.filter(a => a.category === 'Business' && !CATEGORY_ARTICLES['Business & Economy']?.some(b => b.id === a.id))
  );

  const tech = (CATEGORY_ARTICLES['Tech & AI'] || CATEGORY_ARTICLES['tech-ai'] || []).concat(
    allArts.filter(a => a.category === 'Tech & AI' && !CATEGORY_ARTICLES['Tech & AI']?.some(t => t.id === a.id))
  );

  const entertainment = (CATEGORY_ARTICLES['Entertainment'] || CATEGORY_ARTICLES['entertainment'] || []).concat(
    allArts.filter(a => a.category === 'Entertainment' && !CATEGORY_ARTICLES['Entertainment']?.some(e => e.id === a.id))
  );

  const sports = (CATEGORY_ARTICLES['Sports'] || CATEGORY_ARTICLES['sports'] || []).concat(
    allArts.filter(a => a.category === 'Sports' && !CATEGORY_ARTICLES['Sports']?.some(s => s.id === a.id))
  );

  const science = (CATEGORY_ARTICLES['Health & Science'] || CATEGORY_ARTICLES['health-science'] || []).concat(
    allArts.filter(a => a.category === 'Health & Science' && !CATEGORY_ARTICLES['Health & Science']?.some(sc => sc.id === a.id))
  );

  return (
    <section style={{ padding: '16px 0 24px 0' }}>
      <div className="aura-container" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        
        {/* ================= SECTION 1: U.S. POLITICS (Narrow Width 5-Card Grid) ================= */}
        <div>
          <div className="section-header">
            <h3 className="section-title">
              U.S. Politics
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
              <span>Section Overview ({politics.length})</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          {/* Narrow 5-Card Grid (Width Less) */}
          <div className="department-portals-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {politics.slice(0, 5).map((art) => (
              <div
                key={art.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Link href={`/article/${art.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="aura-img-wrap department-portal-img" style={{ height: '110px', width: '100%', marginBottom: '6px' }}>
                    <img src={art.imageUrl} alt={art.title} className="aura-card-img" />
                  </div>
                </Link>

                <span className="aura-pill" style={{ marginBottom: '3px', alignSelf: 'flex-start' }}>
                  {art.category}
                </span>

                <Link href={`/article/${art.id}`} style={{ textDecoration: 'none' }}>
                  <h4 className="font-heading" style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    {art.title}
                  </h4>
                </Link>

                <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.35, marginBottom: '6px', marginTop: 'auto' }}>
                  {art.summary.slice(0, 70)}...
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.64rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-rule)', paddingTop: '4px' }}>
                  <Link href={`/author/${getAuthorSlugFromName(art.author.name)}`} style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
                    {art.author.name}
                  </Link>
                  <span>{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: BUSINESS & ECONOMY (Narrow Width 5-Card Grid) ================= */}
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
              <span>Section Overview ({business.length})</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="department-portals-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {business.slice(0, 5).map((art) => (
              <div
                key={art.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Link href={`/article/${art.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="aura-img-wrap department-portal-img" style={{ height: '110px', width: '100%', marginBottom: '6px' }}>
                    <img src={art.imageUrl} alt={art.title} className="aura-card-img" />
                  </div>
                </Link>

                <span className="aura-pill" style={{ marginBottom: '3px', alignSelf: 'flex-start' }}>
                  {art.category}
                </span>

                <Link href={`/article/${art.id}`} style={{ textDecoration: 'none' }}>
                  <h4 className="font-heading" style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    {art.title}
                  </h4>
                </Link>

                <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.35, marginBottom: '6px', marginTop: 'auto' }}>
                  {art.summary.slice(0, 70)}...
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.64rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-rule)', paddingTop: '4px' }}>
                  <Link href={`/author/${getAuthorSlugFromName(art.author.name)}`} style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
                    {art.author.name}
                  </Link>
                  <span>{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 3: TECH & AI (Narrow Width 5-Card Grid) ================= */}
        <div>
          <div className="section-header">
            <h3 className="section-title">
              Tech & AI
            </h3>

            <Link href="/category/tech-ai" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              color: 'var(--brand-primary)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textDecoration: 'none'
            }}>
              <span>Section Overview ({tech.length})</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="department-portals-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {tech.slice(0, 5).map((art) => (
              <div
                key={art.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Link href={`/article/${art.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="aura-img-wrap department-portal-img" style={{ height: '110px', width: '100%', marginBottom: '6px' }}>
                    <img src={art.imageUrl} alt={art.title} className="aura-card-img" />
                  </div>
                </Link>

                <span className="aura-pill" style={{ marginBottom: '3px', alignSelf: 'flex-start' }}>
                  {art.category}
                </span>

                <Link href={`/article/${art.id}`} style={{ textDecoration: 'none' }}>
                  <h4 className="font-heading" style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    {art.title}
                  </h4>
                </Link>

                <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.35, marginBottom: '6px', marginTop: 'auto' }}>
                  {art.summary.slice(0, 70)}...
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.64rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-rule)', paddingTop: '4px' }}>
                  <Link href={`/author/${getAuthorSlugFromName(art.author.name)}`} style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
                    {art.author.name}
                  </Link>
                  <span>{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 4: 2-COLUMN SPLIT (ENTERTAINMENT & SPORTS) ================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {entertainment.slice(0, 3).map((item, i) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    paddingBottom: i !== 2 ? '10px' : '0',
                    borderBottom: i !== 2 ? '1px solid var(--border-rule)' : 'none'
                  }}
                >
                  <Link href={`/article/${item.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="aura-img-wrap" style={{ width: '75px', height: '60px', flexShrink: 0 }}>
                      <img src={item.imageUrl} alt={item.title} className="aura-card-img" />
                    </div>
                  </Link>
                  <div style={{ flex: 1 }}>
                    <Link href={`/article/${item.id}`} style={{ textDecoration: 'none' }}>
                      <h5 className="font-heading" style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25, margin: '0 0 2px 0' }}>
                        {item.title}
                      </h5>
                    </Link>
                    <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {sports.slice(0, 3).map((item, i) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    paddingBottom: i !== 2 ? '10px' : '0',
                    borderBottom: i !== 2 ? '1px solid var(--border-rule)' : 'none'
                  }}
                >
                  <Link href={`/article/${item.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="aura-img-wrap" style={{ width: '75px', height: '60px', flexShrink: 0 }}>
                      <img src={item.imageUrl} alt={item.title} className="aura-card-img" />
                    </div>
                  </Link>
                  <div style={{ flex: 1 }}>
                    <Link href={`/article/${item.id}`} style={{ textDecoration: 'none' }}>
                      <h5 className="font-heading" style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25, margin: '0 0 2px 0' }}>
                        {item.title}
                      </h5>
                    </Link>
                    <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>
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

        {/* ================= SECTION 5: HEALTH & SCIENCE (Narrow Width 5-Card Grid) ================= */}
        <div>
          <div className="section-header">
            <h3 className="section-title">
              Health & Science
            </h3>

            <Link href="/category/health-science" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              color: 'var(--brand-primary)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textDecoration: 'none'
            }}>
              <span>Section Overview ({science.length})</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="department-portals-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {science.slice(0, 5).map((art) => (
              <div
                key={art.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Link href={`/article/${art.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="aura-img-wrap department-portal-img" style={{ height: '110px', width: '100%', marginBottom: '6px' }}>
                    <img src={art.imageUrl} alt={art.title} className="aura-card-img" />
                  </div>
                </Link>

                <span className="aura-pill" style={{ marginBottom: '3px', alignSelf: 'flex-start' }}>
                  {art.category}
                </span>

                <Link href={`/article/${art.id}`} style={{ textDecoration: 'none' }}>
                  <h4 className="font-heading" style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    {art.title}
                  </h4>
                </Link>

                <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.35, marginBottom: '6px', marginTop: 'auto' }}>
                  {art.summary.slice(0, 70)}...
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.64rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-rule)', paddingTop: '4px' }}>
                  <Link href={`/author/${getAuthorSlugFromName(art.author.name)}`} style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
                    {art.author.name}
                  </Link>
                  <span>{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
