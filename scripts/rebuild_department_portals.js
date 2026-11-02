const fs = require('fs');

// 1. Update globals.css to define .department-portals-grid and .department-portal-img on desktop and mobile
let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Desktop definitions
const desktopRules = `
/* Department Portals System */
.department-portals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.department-portal-img {
  height: 175px;
  width: 100%;
}

.department-split-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}
`;

// Insert desktop rules before @media (max-width: 1024px)
if (!css.includes('/* Department Portals System */')) {
  css = css.replace('@media (max-width: 1024px)', `${desktopRules}\n@media (max-width: 1024px)`);
}

// In @media (max-width: 1024px)
const tabletRules = `
  .department-portals-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;
if (!css.includes('grid-template-columns: repeat(2, 1fr);')) {
  css = css.replace('@media (max-width: 1024px) {', `@media (max-width: 1024px) {\n${tabletRules}`);
}

// In @media (max-width: 768px), ensure .department-portals-grid and .department-portal-img are single-column and 180px
const mobileRules = `  /* Department Portals Grid on Mobile */
  .department-portals-grid,
  .department-split-grid {
    grid-template-columns: 1fr !important;
    gap: 18px !important;
  }

  .department-portal-img {
    height: 180px !important;
  }`;

css = css.replace(
  /\/\* Department Portals Grid on Mobile \*\/[\s\S]*?\.department-portal-img\s*\{[^}]*\}/,
  mobileRules
);

fs.writeFileSync('src/app/globals.css', css, 'utf8');
console.log('globals.css updated cleanly');

// 2. Rebuild CurvedDepartmentPortals.tsx
const deptComponent = `'use client';

import React from 'react';
import Link from 'next/link';
import { getHomepageDepartmentArticles, getArticlesByCategorySlug, getAuthorSlugFromName } from '@/data/newsData';
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
  const techTotal = getArticlesByCategorySlug('tech-ai').length;
  const entertainmentTotal = getArticlesByCategorySlug('entertainment').length;
  const sportsTotal = getArticlesByCategorySlug('sports').length;
  const scienceTotal = getArticlesByCategorySlug('health-science').length;

  const renderCard = (art: any) => (
    <div
      key={art.id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Link href={\`/article/\${art.id}\`} style={{ display: 'block', textDecoration: 'none' }}>
        <div className="aura-img-wrap department-portal-img" style={{ width: '100%', marginBottom: '8px' }}>
          <img src={art.imageUrl} alt={art.title} className="aura-card-img" />
        </div>
      </Link>

      <span className="aura-pill" style={{ marginBottom: '4px', alignSelf: 'flex-start' }}>
        {art.category}
      </span>

      <Link href={\`/article/\${art.id}\`} style={{ textDecoration: 'none' }}>
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
        <Link href={\`/author/\${getAuthorSlugFromName(art.author.name)}\`} style={{ fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none' }}>
          {art.author.name}
        </Link>
        <span>{art.readTime}</span>
      </div>
    </div>
  );

  return (
    <section style={{ padding: '16px 0 24px 0' }}>
      <div className="aura-container" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* ================= SECTION 1: U.S. POLITICS ================= */}
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

        {/* ================= SECTION 3: TECH & AI ================= */}
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
                  <Link href={\`/article/\${item.id}\`} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="aura-img-wrap" style={{ width: '85px', height: '68px', flexShrink: 0 }}>
                      <img src={item.imageUrl} alt={item.title} className="aura-card-img" />
                    </div>
                  </Link>
                  <div style={{ flex: 1 }}>
                    <Link href={\`/article/\${item.id}\`} style={{ textDecoration: 'none' }}>
                      <h5 className="font-heading" style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25, margin: '0 0 4px 0' }}>
                        {item.title}
                      </h5>
                    </Link>
                    <span style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>
                      <Link href={\`/author/\${getAuthorSlugFromName(item.author.name)}\`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700 }}>
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
                  <Link href={\`/article/\${item.id}\`} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="aura-img-wrap" style={{ width: '85px', height: '68px', flexShrink: 0 }}>
                      <img src={item.imageUrl} alt={item.title} className="aura-card-img" />
                    </div>
                  </Link>
                  <div style={{ flex: 1 }}>
                    <Link href={\`/article/\${item.id}\`} style={{ textDecoration: 'none' }}>
                      <h5 className="font-heading" style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25, margin: '0 0 4px 0' }}>
                        {item.title}
                      </h5>
                    </Link>
                    <span style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>
                      <Link href={\`/author/\${getAuthorSlugFromName(item.author.name)}\`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700 }}>
                        {item.author.name}
                      </Link> • {item.readTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SECTION 5: HEALTH & SCIENCE ================= */}
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
`;

fs.writeFileSync('src/components/CategorySection/CurvedDepartmentPortals.tsx', deptComponent, 'utf8');
console.log('CurvedDepartmentPortals rewritten cleanly');
