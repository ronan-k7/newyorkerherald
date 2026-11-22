'use client';

import React from 'react';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import ArticleShareMenu from '@/components/Common/ArticleShareMenu';
import { ArrowLeft, Clock, Scale, ExternalLink, CheckCircle2, HelpCircle, FileText } from 'lucide-react';
import {
  VAZQUEZ_SENTENCING_TITLE,
  VAZQUEZ_SENTENCING_DECK,
  VAZQUEZ_SENTENCING_URL,
  VAZQUEZ_SENTENCING_IMAGE,
  VAZQUEZ_SENTENCING_PARAGRAPHS,
  VAZQUEZ_SENTENCING_SOURCES
} from '@/data/vazquezSentencingArticle';

/* Renders a paragraph and turns every [n] marker into a link to its source document. */
function RichParagraph({ text }: { text: string }) {
  const parts = text.split(/(\[\d+\])/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[(\d+)\]$/);
        if (!m) return <React.Fragment key={i}>{part}</React.Fragment>;
        const src = VAZQUEZ_SENTENCING_SOURCES[m[1]];
        if (!src) return <React.Fragment key={i}>{part}</React.Fragment>;
        return (
          <a
            key={i}
            href={src.url}
            target="_blank"
            rel="noopener noreferrer"
            className="vz-cite"
            title={`${src.title} (${src.date})`}
          >
            {m[1]}
          </a>
        );
      })}
    </>
  );
}

const glanceStats = [
  { value: '12 mo.', label: 'Prison term recommended by prosecutors', sub: 'October 2025' },
  { value: '6–12 mo.', label: 'Stipulated guideline range', sub: 'Plea agreement' },
  { value: '$15K–$25K', label: 'Stipulated contribution value', sub: 'For guideline purposes' },
  { value: 'Jan 8, 2026', label: 'Defense motion to strike filed', sub: 'Docket 29' }
];

export default function VazquezSentencingArticlePage() {
  const paras = VAZQUEZ_SENTENCING_PARAGRAPHS;
  const first = paras[0];

  const articleParagraph = (text: string, key: number) => (
    <p key={key} className="vz-p">
      <RichParagraph text={text} />
    </p>
  );

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)' }}>
      <style>{`
        .vz-masthead { display: grid; grid-template-columns: minmax(0, 1fr) 330px; gap: 48px; align-items: center; }
        .vz-glance { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); }
        .vz-glance > div { padding: 18px 20px; border-right: 1px solid var(--border-hairline); }
        .vz-glance > div:last-child { border-right: none; }
        .vz-split { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0; }
        .vz-sources { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
        .vz-p { font-family: var(--font-serif); font-size: 1.2rem; line-height: 1.85; color: var(--text-secondary); margin: 0 0 24px 0; }
        .vz-p:first-of-type::first-letter { font-family: var(--font-heading); font-weight: 900; font-size: 4.1rem; line-height: 0.82; float: left; padding: 6px 12px 0 0; color: var(--brand-primary); }
        .vz-cite { display: inline-flex; align-items: center; justify-content: center; min-width: 20px; height: 18px; padding: 0 5px; margin: 0 2px; font-family: var(--font-heading); font-size: 0.66rem; font-weight: 800; line-height: 1; color: var(--brand-primary); background: var(--brand-primary-light); border: 1px solid var(--brand-primary); border-radius: 9999px; text-decoration: none; vertical-align: super; transition: all 0.15s ease; }
        .vz-cite:hover { background: var(--brand-primary); color: var(--text-inverse); }
        .vz-source-card { display: flex; gap: 14px; padding: 16px; text-decoration: none; background: var(--bg-surface-elevated); border: 1px solid var(--border-hairline); border-radius: var(--radius-sm); transition: all 0.15s ease; }
        .vz-source-card:hover { border-color: var(--brand-primary); transform: translateY(-1px); }
        @media (max-width: 960px) {
          .vz-masthead { grid-template-columns: 1fr; gap: 28px; }
          .vz-masthead-figure { order: -1; max-width: 300px; margin: 0 auto; }
          .vz-glance { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .vz-glance > div:nth-child(2) { border-right: none; }
          .vz-glance > div:nth-child(-n+2) { border-bottom: 1px solid var(--border-hairline); }
        }
        @media (max-width: 680px) {
          .vz-split, .vz-sources { grid-template-columns: 1fr; }
          .vz-split > div:first-child { border-right: none !important; border-bottom: 1px solid var(--border-hairline); }
          .vz-p { font-size: 1.08rem; line-height: 1.78; }
        }
      `}</style>

      <CurvedHeader activeCategory="opinion" />

      <div className="aura-container" style={{ padding: '24px 20px 70px 20px', flex: 1 }}>
        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '26px', fontSize: '0.72rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
            <ArrowLeft size={12} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/category/opinion" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Opinion</Link>
          <span>/</span>
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>Sentencing Dispute Analysis</span>
        </nav>

        {/* ================= MASTHEAD: headline left, portrait right ================= */}
        <header style={{ borderTop: '4px solid var(--text-primary)', paddingTop: '22px' }}>
          <div className="vz-masthead">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '18px' }}>
                <span className="aura-pill">Opinion &amp; Analysis</span>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--brand-primary)' }}>
                  Lawfare Series &middot; No. 06
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.1rem, 4.2vw, 3.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: '-0.025em',
                  color: 'var(--text-primary)',
                  margin: '0 0 20px 0'
                }}
              >
                {VAZQUEZ_SENTENCING_TITLE}
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.05rem, 1.5vw, 1.3rem)',
                  lineHeight: 1.5,
                  color: 'var(--text-secondary)',
                  margin: '0 0 24px 0',
                  paddingLeft: '18px',
                  borderLeft: '3px solid var(--brand-primary)',
                  maxWidth: '680px'
                }}
              >
                {VAZQUEZ_SENTENCING_DECK}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '14px', borderTop: '1px solid var(--border-hairline)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                  <span style={{ fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>By Newyorkerherald Staff</span>
                  <span>&bull;</span>
                  <span>Published November 22, 2026</span>
                  <span>&bull;</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> 5 min read</span>
                </div>
                <ArticleShareMenu title={VAZQUEZ_SENTENCING_TITLE} url={VAZQUEZ_SENTENCING_URL} />
              </div>
            </div>

            <figure
              className="vz-masthead-figure"
              style={{
                margin: 0,
                width: '100%',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden'
              }}
            >
              <img
                src={VAZQUEZ_SENTENCING_IMAGE}
                alt="Wanda Vázquez Garced"
                style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <figcaption style={{ padding: '10px 14px', fontSize: '0.74rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-hairline)', lineHeight: 1.4 }}>
                Wanda Vázquez Garced, former governor of Puerto Rico.
                <span style={{ display: 'block', marginTop: '2px', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-muted)' }}>Newyorkerherald Archive</span>
              </figcaption>
            </figure>
          </div>
        </header>

        {/* ================= AT-A-GLANCE FIGURES ================= */}
        <section
          aria-label="Key figures"
          style={{ margin: '40px 0 48px 0', border: '1px solid var(--border-hairline)', borderTop: '3px solid var(--brand-primary)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-surface-elevated)' }}
        >
          <div className="vz-glance">
            {glanceStats.map((s) => (
              <div key={s.label}>
                <span className="font-heading" style={{ display: 'block', fontSize: 'clamp(1.35rem, 2.2vw, 1.9rem)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                  {s.value}
                </span>
                <span style={{ display: 'block', marginTop: '6px', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{s.label}</span>
                <span style={{ display: 'block', marginTop: '2px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{s.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ARTICLE BODY (single reading column) ================= */}
        <article style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* P1 – P2 */}
          {articleParagraph(first, 0)}
          {articleParagraph(paras[1], 1)}

          {/* Opposing positions panel */}
          <section
            aria-label="Opposing legal positions"
            style={{ margin: '12px 0 36px 0', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', backgroundColor: 'var(--bg-canvas)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', backgroundColor: 'var(--text-primary)', color: 'var(--text-inverse)' }}>
              <Scale size={15} />
              <span className="font-heading" style={{ fontSize: '0.74rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Two Opposing Legal Positions</span>
            </div>
            <div className="vz-split">
              <div style={{ padding: '18px 20px', borderRight: '1px solid var(--border-hairline)' }}>
                <span className="aura-pill" style={{ marginBottom: '10px', display: 'inline-block' }}>Prosecution</span>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  <li>Recommended twelve months in prison in October 2025.</li>
                  <li>Presented a broader account of consultant expenditures and communications.</li>
                  <li>Continued to regard the underlying conduct as serious.</li>
                </ul>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <span className="aura-pill" style={{ marginBottom: '10px', display: 'inline-block' }}>Defense</span>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  <li>Filed a motion to strike on January 8, 2026.</li>
                  <li>Argued the presentation undermined the negotiated bargain.</li>
                  <li>Objected to reliance on substantially larger expenditures.</li>
                </ul>
              </div>
            </div>
            <div style={{ padding: '10px 18px', fontSize: '0.74rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-hairline)', backgroundColor: 'var(--bg-surface-elevated)' }}>
              These were opposing legal positions, rather than a judicial determination of breach.
            </div>
          </section>

          {/* P3 – P4 */}
          {articleParagraph(paras[2], 2)}
          {articleParagraph(paras[3], 3)}

          {/* P5 */}
          {articleParagraph(paras[4], 4)}

          {/* Pull quote — taken verbatim from paragraph 5 */}
          <blockquote
            style={{
              margin: '40px 0',
              padding: '28px 0',
              borderTop: '1px solid var(--text-primary)',
              borderBottom: '1px solid var(--text-primary)',
              textAlign: 'center'
            }}
          >
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.35rem, 2.6vw, 1.85rem)', fontStyle: 'italic', fontWeight: 600, lineHeight: 1.35, color: 'var(--text-primary)', margin: 0 }}>
              &ldquo;The authority to seek punishment carries an obligation to make the basis of the request clear.&rdquo;
            </p>
          </blockquote>

          {/* P6 – P7 */}
          {articleParagraph(paras[5], 5)}
          {articleParagraph(paras[6], 6)}

          {/* Established vs disputed */}
          <section aria-label="Established and disputed points" style={{ margin: '12px 0 36px 0', display: 'grid', gap: '14px' }}>
            <div style={{ padding: '18px 20px', borderLeft: '4px solid var(--accent-emerald)', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--accent-emerald)' }}>
                <CheckCircle2 size={16} />
                <span className="font-heading" style={{ fontSize: '0.74rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase' }}>On the record</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                <li>She pleaded guilty in August 2025 to accepting a promised foreign national campaign contribution.</li>
                <li>The stipulated guideline range was six to twelve months.</li>
                <li>The promised contribution was valued above $15,000 and at no more than $25,000 for guideline purposes.</li>
                <li>January 2026 presidential pardons led to dismissal of her federal cases.</li>
              </ul>
            </div>
            <div style={{ padding: '18px 20px', borderLeft: '4px solid var(--accent-amber)', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--accent-amber)' }}>
                <HelpCircle size={16} />
                <span className="font-heading" style={{ fontSize: '0.74rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Still disputed</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                <li>Whether the sentencing presentation breached the agreement, a question clemency ended without deciding.</li>
                <li>The defense objection to the government&apos;s reliance on substantially larger expenditures than the stipulated value.</li>
                <li>Clemency did not convert the disputed claim into a finding of prosecutorial misconduct.</li>
              </ul>
            </div>
          </section>

          {/* P8 – P9 */}
          {articleParagraph(paras[7], 7)}
          {articleParagraph(paras[8], 8)}

          {/* Tags */}
          <div style={{ margin: '40px 0 0 0', paddingTop: '20px', borderTop: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <span className="font-heading" style={{ fontSize: '0.84rem', fontWeight: 900, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-primary)', paddingTop: '6px', flexShrink: 0 }}>Tags</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 10px', flex: 1 }}>
              {[
                { name: 'Wanda Vázquez', href: '/tag/wanda-vazquez' },
                { name: 'Lawfare', href: '/tag/lawfare' },
                { name: 'Sentencing', href: '/tag/sentencing' },
                { name: 'Plea Agreement', href: '/tag/plea-agreement' },
                { name: 'Presidential Pardon', href: '/tag/presidential-pardon' },
                { name: 'Puerto Rico', href: '/tag/puerto-rico' },
                { name: 'Opinion', href: '/tag/opinion' }
              ].map((tag) => (
                <Link
                  key={tag.name}
                  href={tag.href}
                  style={{ display: 'inline-flex', alignItems: 'center', padding: '5px 14px', borderRadius: '9999px', border: '1px solid var(--border-hairline)', color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 500, textDecoration: 'none' }}
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* ================= SOURCES (wide, below the article) ================= */}
        <section id="sources" aria-label="Sources" style={{ maxWidth: '980px', margin: '56px auto 0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '2px solid var(--text-primary)', paddingBottom: '10px', marginBottom: '18px' }}>
            <FileText size={17} color="var(--brand-primary)" />
            <h2 className="font-heading" style={{ fontSize: '1rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-primary)', margin: 0 }}>
              Sources &amp; Documents
            </h2>
          </div>
          <div className="vz-sources">
            {Object.values(VAZQUEZ_SENTENCING_SOURCES).map((s) => (
              <a key={s.n} href={s.url} target="_blank" rel="noopener noreferrer" className="vz-source-card" title={`Open ${s.title}`}>
                <span
                  className="font-heading"
                  style={{ flexShrink: 0, width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: 'var(--brand-primary)', color: 'var(--text-inverse)', fontSize: '0.78rem', fontWeight: 900 }}
                >
                  {s.n}
                </span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: 'block', fontSize: '0.86rem', fontWeight: 800, lineHeight: 1.3, color: 'var(--text-primary)' }}>{s.title}</span>
                  <span style={{ display: 'block', margin: '3px 0 6px 0', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{s.date}</span>
                  <span style={{ display: 'block', fontSize: '0.74rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{s.note}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '8px', fontSize: '0.72rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
                    Open source <ExternalLink size={12} />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>

      <CurvedFooter />
    </main>
  );
}