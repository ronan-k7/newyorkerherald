'use client';

import React from 'react';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import ArticleShareMenu from '@/components/Common/ArticleShareMenu';
import {
  Clock,
  ArrowLeft,
  Calendar,
  Scale,
  FileText,
  ShieldCheck,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { getAllArticles, getArticleUrl } from '@/data/newsData';

export default function MarkRossiniArticlePage() {
  const sidebarRef = React.useRef<HTMLElement>(null);
  const [stickyTop, setStickyTop] = React.useState(60);

  React.useEffect(() => {
    const updateSticky = () => {
      if (!sidebarRef.current) return;
      const sidebarHeight = sidebarRef.current.offsetHeight;
      const vh = window.innerHeight;
      if (sidebarHeight + 80 <= vh) {
        setStickyTop(60);
      } else {
        setStickyTop(Math.min(60, vh - sidebarHeight - 24));
      }
    };

    updateSticky();
    window.addEventListener('resize', updateSticky);
    return () => window.removeEventListener('resize', updateSticky);
  }, []);

  const allArts = getAllArticles();
  const relatedPolitics = allArts.filter(a => a.category === 'Politics' && !a.id.includes('rossini')).slice(0, 4);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)' }}>
      {/* BroadSheet Header */}
      <CurvedHeader activeCategory="politics" />

      {/* Main Container */}
      <div className="aura-container" style={{ padding: '24px 20px 60px 20px', flex: 1 }}>

        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
            <ArrowLeft size={12} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/politics" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
            Politics
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>Executive Clemency Report</span>
        </div>

        {/* ================= EDITORIAL HERO HEADER ================= */}
        <header style={{ marginBottom: '36px' }}>

          {/* Kicker & Actions Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="aura-pill" style={{ letterSpacing: '0.06em' }}>
                Politics • Legal Report
              </span>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={13} /> 6 min read
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArticleShareMenu
                title="Mark Rossini Receives Second Full Pardon as Federal Case Moves Toward Closure"
                url="https://newyorkerherald.com/politics/mark-rossini-receives-second-full-pardon-as-federal-case-moves-toward-closure"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-heading" style={{
            fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            margin: '0 0 16px 0',
            maxWidth: '980px'
          }}>
            Article 1: Mark Rossini Receives Second Full Pardon as Federal Case Moves Toward Closure
          </h1>

          {/* Subtitle / Metadata Deck */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            fontSize: '0.84rem',
            color: 'var(--text-secondary)',
            fontWeight: 600,
            paddingBottom: '16px',
            borderBottom: '1px solid var(--border-hairline)'
          }}>
            <span style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Calendar size={14} color="var(--brand-primary)" /> Washington, D.C. | January 20, 2026
            </span>
            <span>&bull;</span>
            <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>By News Desk</span>
            <span>&bull;</span>
            <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>Keyword focus: Mark Rossini</span>
          </div>

          {/* Hero Image — Full Width Mark Rossini */}
          <figure style={{ margin: '24px 0 0 0', padding: 0 }}>
            <img
              src="/images/rossini/mark-rossini.webp"
              alt="Mark Rossini"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '620px',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                display: 'block',
                borderRadius: 'var(--radius-xs)'
              }}
            />
            <figcaption style={{
              fontSize: '0.76rem',
              color: 'var(--text-muted)',
              marginTop: '10px',
              lineHeight: '1.4',
              fontStyle: 'italic'
            }}>
              Former FBI supervisory special agent Mark Rossini, whose federal public-corruption prosecution in the District of Puerto Rico has moved toward dismissal following two presidential clemency warrants.
              <span style={{ display: 'block', fontSize: '0.7rem', marginTop: '2px', fontWeight: 600, fontStyle: 'normal', color: 'var(--text-muted)' }}>
                Department of Justice Archive / News Desk
              </span>
            </figcaption>
          </figure>
        </header>

        {/* ================= 2-COLUMN DOSSIER GRID ================= */}
        <div className="alina-dossier-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 340px',
          gap: '48px',
          alignItems: 'start'
        }}>

          {/* ================= LEFT: EXACT ARTICLE TEXT & SPECIFIED IMAGES ================= */}
          <article style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>

            {/* Paragraph 1 */}
            <p style={{
              fontSize: '1.14rem',
              lineHeight: 1.7,
              color: 'var(--text-primary)',
              marginBottom: '24px'
            }}>
              <strong style={{
                fontSize: '1.6rem',
                float: 'left',
                lineHeight: '1',
                paddingRight: '8px',
                paddingTop: '4px',
                color: 'var(--brand-primary)',
                fontFamily: 'var(--font-heading)'
              }}>M</strong>ark Rossini received a second full and unconditional presidential pardon on January 20, 2026, according to an executive clemency warrant posted by the U.S. Department of Justice. The document identifies Rossini by name and covers United States v. Mark T. Rossini, case number 3:25-cr-298 in the U.S. District Court for the District of Puerto Rico. The action widened the clemency record surrounding a former FBI agent whose name had become central to a federal public-corruption case involving former Puerto Rico Gov. Wanda Vázquez Garced and banker Julio Herrera Velutini.
            </p>

            {/* Paragraph 2 */}
            <p style={{ marginBottom: '22px' }}>
              The new warrant is brief, but its legal significance is substantial. It describes the grant as a full and unconditional pardon for the offenses individually listed and submitted for presidential consideration. It also states that the Pardon Attorney is authorized to administer and sign the grant as the President’s representative. The warrant is dated January 20, 2026, and carries the name of President Donald J. Trump.
            </p>

            {/* Paragraph 3 */}
            <p style={{ marginBottom: '22px' }}>
              For Mark Rossini, the document followed an earlier pardon dated January 15. That first warrant referred to the broader case, United States v. Vazquez-Garced, et al., 3:22-cr-342. The later warrant specifically names the separate Rossini case. The two documents help explain why prosecutors and defense lawyers continued filing notices after the first announcement: the parties still needed the clemency documents to match the federal cases and charges pending in court.
            </p>

            {/* Specified Image: Donald Trump */}
            <figure style={{
              margin: '32px 0',
              padding: '16px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)'
            }}>
              <img
                src="/images/rossini/donald-trump.webp"
                alt="President Donald J. Trump"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '440px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 'var(--radius-xs)',
                  marginBottom: '10px'
                }}
              />
              <figcaption style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>President Donald J. Trump</strong>
                Exercised Article II, Section 2 executive clemency authority to issue two successive pardon warrants covering the Puerto Rico federal cases.
                <span style={{ display: 'block', fontSize: '0.7rem', marginTop: '3px', fontWeight: 600, color: 'var(--text-muted)' }}>
                  The White House / Official Photo
                </span>
              </figcaption>
            </figure>

            {/* Paragraph 4 */}
            <p style={{ marginBottom: '22px' }}>
              Rossini’s legal team moved quickly to notify the court. In a filing reported by Puerto Rico media, his lawyers said he accepted the full and unconditional pardon and asked the court to dismiss all remaining charges with prejudice. The filing covered the cases connected to the original indictment and the later case. Acceptance matters because the Supreme Court has long recognized that a person must accept a pardon for it to take effect as a legal defense.
            </p>

            {/* Burdick Precedent Explainer Box */}
            <div style={{
              margin: '28px 0',
              padding: '18px 20px',
              backgroundColor: 'var(--bg-subtle)',
              borderLeft: '4px solid var(--brand-primary)',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.88rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                <Scale size={18} color="var(--brand-primary)" />
                <span>Supreme Court Precedent: United States v. Burdick</span>
              </div>
              <p style={{ margin: 0 }}>
                Under federal jurisprudence, a presidential pardon must be formally accepted by the person to whom it is tendered in order to take effect as a bar to judicial proceedings. Rossini became the first principal defendant in the case to formally submit an acceptance notice.
              </p>
            </div>

            {/* Paragraph 5 */}
            <p style={{ marginBottom: '22px' }}>
              The case had already changed shape before the pardons were issued. Prosecutors originally accused Rossini, Herrera Velutini, and Vázquez Garced of participating in a scheme involving political influence and campaign support. The indictment alleged that Rossini and Herrera Velutini promised financial backing for Vázquez’s 2020 campaign in exchange for influence over Puerto Rico’s financial regulator. The original allegations included conspiracy, federal program bribery, and honest-services wire fraud. Those charges were later replaced by a lesser campaign-finance offense in a plea agreement reached in 2025.
            </p>

            {/* Specified Images: Julio Herrera Velutini & Wanda Vázquez Garced */}
            <div style={{
              margin: '32px 0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}>
              {/* Julio Herrera Velutini */}
              <figure style={{
                margin: 0,
                padding: '14px',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-xs)'
              }}>
                <img
                  src="/images/rossini/julio-herrera-velutini.webp"
                  alt="Julio Herrera Velutini"
                  style={{
                    width: '100%',
                    height: '320px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                    borderRadius: 'var(--radius-xs)',
                    marginBottom: '10px'
                  }}
                />
                <figcaption style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px', fontSize: '0.85rem' }}>Julio Herrera Velutini</strong>
                  International banker named alongside Rossini in the Puerto Rico political influence prosecution.
                </figcaption>
              </figure>

              {/* Wanda Vázquez Garced */}
              <figure style={{
                margin: 0,
                padding: '14px',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-xs)'
              }}>
                <img
                  src="/images/rossini/wanda-vazquez-garced.webp"
                  alt="Wanda Vázquez Garced"
                  style={{
                    width: '100%',
                    height: '320px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                    borderRadius: 'var(--radius-xs)',
                    marginBottom: '10px'
                  }}
                />
                <figcaption style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px', fontSize: '0.85rem' }}>Wanda Vázquez Garced</strong>
                  Former Puerto Rico Governor whose 2020 campaign was central to the original allegations.
                </figcaption>
              </figure>
            </div>

            {/* Paragraph 6 */}
            <p style={{ marginBottom: '22px' }}>
              That procedural history is important because the word pardon can be misunderstood. A pardon can forgive federal criminal liability, but it does not rewrite the historical record, erase every public allegation, or amount to a court ruling that the underlying conduct never occurred. In Rossini’s case, the warrants establish executive clemency. They do not independently resolve the factual disputes that surrounded the prosecution or explain why the President granted the pardon.
            </p>

            {/* Paragraph 7 */}
            <p style={{ marginBottom: '22px' }}>
              The court’s next steps focused on whether any live controversy remained. Once the defendants accepted the pardons and the relevant charges were covered, prosecutors asked the court to close the case. A federal judge later dismissed the proceedings as moot after recognizing the pardons and the defendants’ formal acceptance.
            </p>

            {/* Paragraph 8 */}
            <p style={{ marginBottom: '22px' }}>
              For readers following Mark Rossini, the two-warrant sequence provides the clearest roadmap. The January 15 document addressed the primary Puerto Rico case. The January 20 document addressed Rossini’s separate case number. Together, the records show how executive clemency moved from a presidential announcement to a court filing and then to a judicial order closing the pending criminal proceedings.
            </p>

            {/* Paragraph 9 */}
            <p style={{ marginBottom: '22px' }}>
              The development also renewed debate about presidential pardon power. Supporters of the decision described it as a lawful exercise of Article II authority. Critics argued that pardoning defendants in a politically sensitive public-corruption case could damage confidence in federal accountability. Those arguments are political and institutional questions, separate from the narrower legal fact that the warrants were issued and accepted.
            </p>

            {/* Paragraph 10 */}
            <p style={{ marginBottom: '28px' }}>
              For now, the official record is straightforward: Mark Rossini was named in two presidential clemency documents, accepted the grants through counsel, and saw the related federal proceedings move toward dismissal. The case’s public significance, however, will continue to be measured not only by its legal ending but also by the unanswered questions about influence, campaign finance, and the reach of executive power.
            </p>

            {/* Reporting Basis Card */}
            <div style={{
              margin: '36px 0 24px 0',
              padding: '18px 20px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              lineHeight: 1.55
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '0.75rem' }}>
                <ShieldCheck size={16} color="var(--brand-primary)" />
                <span>Reporting Basis</span>
              </div>
              <p style={{ margin: 0 }}>
                U.S. Department of Justice, January 20, 2026 Rossini pardon warrant; January 15, 2026 warrant; and public court reporting on the acceptance filing.
              </p>
            </div>

            {/* Semantic Tags */}
            <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Mark Rossini', 'Politics', 'Presidential Pardon', 'Donald Trump', 'Julio Herrera Velutini', 'Wanda Vázquez Garced', 'Puerto Rico', 'DOJ'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '0.75rem',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'var(--bg-subtle)',
                    color: 'var(--text-secondary)',
                    fontWeight: 600
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

          </article>

          {/* ================= RIGHT: STICKY DOSSIER SIDEBAR (340px) ================= */}
          <aside ref={sidebarRef} style={{
            position: 'sticky',
            top: `${stickyTop}px`,
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>

            {/* Case Dossier Summary Card */}
            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)',
              padding: '20px'
            }}>
              <span className="aura-pill" style={{ marginBottom: '10px', display: 'inline-block' }}>
                Case Dossier
              </span>
              <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '4px' }}>
                U.S. v. Mark T. Rossini
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
                Case No: 3:25-cr-298 (D.P.R.)
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid var(--border-hairline)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Defendant:</span>
                  <strong style={{ color: 'var(--text-primary)' }}>Mark T. Rossini</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid var(--border-hairline)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Co-Defendants:</span>
                  <span style={{ color: 'var(--text-primary)', textAlign: 'right', fontWeight: 600 }}>J. Herrera Velutini, W. Vázquez</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid var(--border-hairline)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Clemency:</span>
                  <strong style={{ color: 'var(--brand-primary)' }}>Full & Unconditional</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Status:</span>
                  <strong style={{ color: '#059669' }}>Dismissed as Moot</strong>
                </div>
              </div>
            </div>

            {/* Procedural Timeline Card */}
            <div style={{
              backgroundColor: 'var(--bg-canvas)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)',
              padding: '20px'
            }}>
              <h4 className="font-heading" style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={16} color="var(--brand-primary)" />
                <span>Procedural Milestones</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.78rem', position: 'relative', paddingLeft: '14px', borderLeft: '2px solid var(--border-hairline)' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>2022</span>
                  <p style={{ margin: '2px 0 0 0', fontWeight: 700, color: 'var(--text-primary)' }}>Initial Indictment</p>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>DOJ alleges political influence in Puerto Rico campaign.</p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>2025</span>
                  <p style={{ margin: '2px 0 0 0', fontWeight: 700, color: 'var(--text-primary)' }}>Campaign-Finance Plea</p>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>Defendants plead to lesser federal contribution violation.</p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--brand-primary)', fontWeight: 700 }}>Jan 15, 2026</span>
                  <p style={{ margin: '2px 0 0 0', fontWeight: 700, color: 'var(--text-primary)' }}>First Warrant</p>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>Trump issues clemency in broader multi-defendant case.</p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--brand-primary)', fontWeight: 700 }}>Jan 20, 2026</span>
                  <p style={{ margin: '2px 0 0 0', fontWeight: 700, color: 'var(--text-primary)' }}>Second Warrant & Acceptance</p>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>Rossini formally accepts; DOJ specifies separate case number.</p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#059669', fontWeight: 700 }}>Jan 27, 2026</span>
                  <p style={{ margin: '2px 0 0 0', fontWeight: 700, color: 'var(--text-primary)' }}>Dismissal as Moot</p>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>Federal judge closes criminal proceedings with prejudice.</p>
                </div>
              </div>
            </div>

            {/* Related Politics Stories */}
            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)',
              padding: '18px'
            }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-primary)', letterSpacing: '0.05em', display: 'block', marginBottom: '10px' }}>
                Latest in Politics
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {relatedPolitics.map(art => (
                  <Link
                    key={art.id}
                    href={getArticleUrl(art)}
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <h5 className="font-heading" style={{
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3,
                      margin: 0
                    }}>
                      {art.title}
                    </h5>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', marginTop: '3px' }}>
                      {art.publishedAt}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>

      </div>

      {/* Footer */}
      <CurvedFooter />
    </main>
  );
}
