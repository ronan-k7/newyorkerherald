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
  Users,
  CheckCircle2,
  XCircle,
  ExternalLink
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

  // Reusable Wikipedia Link Component with respected editorial styling
  const WikiLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'inherit',
        textDecoration: 'underline',
        textDecorationColor: 'var(--brand-primary)',
        textUnderlineOffset: '3px',
        fontWeight: 600,
        transition: 'color 0.15s ease'
      }}
      className="hover:text-[var(--brand-primary)]"
      title={`View ${typeof children === 'string' ? children : 'biography'} on Wikipedia`}
    >
      {children}
    </a>
  );

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)' }}>
      {/* BroadSheet Header */}
      <CurvedHeader activeCategory="politics" />

      {/* Main Container */}
      <div className="aura-container" style={{ padding: '24px 20px 60px 20px', flex: 1 }}>

        {/* Breadcrumb Navigation Bar */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '22px',
          fontSize: '0.74rem',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.04em'
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 700 }}>
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/politics" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 700 }}>
            Politics
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>Executive Clemency</span>
        </nav>

        {/* ================= EDITORIAL HERO HEADER SECTION ================= */}
        <header style={{ marginBottom: '36px' }}>

          {/* Top Badges & Meta Actions */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '18px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span className="aura-pill" style={{ letterSpacing: '0.06em', padding: '5px 12px', fontWeight: 800 }}>
                POLITICS • EXECUTIVE CLEMENCY
              </span>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
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
            fontSize: 'clamp(2.4rem, 4.6vw, 3.8rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            margin: '0 0 18px 0',
            maxWidth: '1040px'
          }}>
            Article 1: Mark Rossini Receives Second Full Pardon as Federal Case Moves Toward Closure
          </h1>

          {/* Deck / Standfirst */}
          <p style={{
            fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.55,
            fontWeight: 500,
            maxWidth: '920px',
            marginBottom: '20px'
          }}>
            A former FBI agent whose name had become central to a federal public-corruption case involving former Puerto Rico Gov. <WikiLink href="https://en.wikipedia.org/wiki/Wanda_V%C3%A1zquez_Garced">Wanda Vázquez Garced</WikiLink> and banker <WikiLink href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini">Julio Herrera Velutini</WikiLink> sees proceedings dismissed following two presidential clemency warrants and formal court acceptance.
          </p>

          {/* Dateline & Byline Metadata Strip with Today's Date */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            padding: '14px 18px',
            backgroundColor: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-xs)',
            fontSize: '0.82rem',
            color: 'var(--text-secondary)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                By News Desk
              </span>
              <span>&bull;</span>
              <span>Editorial Board & Legal Reporting Bureau</span>
              <span>&bull;</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--brand-primary)', fontWeight: 700 }}>
                <Calendar size={13} /> Washington, D.C. | November 18, 2026
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              DOJ Docket: 3:25-cr-298 &bull; 3:22-cr-342
            </div>
          </div>
        </header>

        {/* ================= FULL-SIZED HERO VISUAL: MARK ROSSINI ================= */}
        <section style={{ marginBottom: '40px' }}>
          <figure style={{
            margin: 0,
            padding: 0,
            backgroundColor: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-xs)',
            overflow: 'hidden'
          }}>
            {/* Full-Sized Unclamped Image */}
            <img
              src="/images/rossini/mark-rossini.webp"
              alt="Mark Rossini"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: 'none'
              }}
            />
            <figcaption style={{
              padding: '14px 18px',
              backgroundColor: 'var(--bg-canvas)',
              borderTop: '1px solid var(--border-hairline)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)'
            }}>
              <div>
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.92rem', display: 'block', marginBottom: '2px' }}>
                  <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Mark Rossini</WikiLink>
                </strong>
                Former FBI supervisory special agent whose federal public-corruption prosecution in the U.S. District Court for the District of Puerto Rico has moved toward dismissal following two presidential clemency warrants.
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                Source: Department of Justice Archive / Federal Court Records
              </div>
            </figcaption>
          </figure>
        </section>

        {/* ================= 2-COLUMN DOSSIER GRID ================= */}
        <div className="alina-dossier-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 350px',
          gap: '48px',
          alignItems: 'start'
        }}>

          {/* ================= LEFT COLUMN: ARTICLE BODY & EMBEDDED VISUALS ================= */}
          <article style={{ fontSize: '1.04rem', lineHeight: 1.82, color: 'var(--text-secondary)' }}>

            {/* Paragraph 1 */}
            <p style={{
              fontSize: '1.18rem',
              lineHeight: 1.72,
              color: 'var(--text-primary)',
              fontWeight: 500,
              marginBottom: '26px'
            }}>
              <strong style={{
                fontSize: '1.75rem',
                float: 'left',
                lineHeight: '1',
                paddingRight: '10px',
                paddingTop: '4px',
                color: 'var(--brand-primary)',
                fontFamily: 'var(--font-heading)'
              }}>M</strong>
              <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Mark Rossini</WikiLink> received a second full and unconditional presidential pardon on January 20, 2026, according to an executive clemency warrant posted by the U.S. Department of Justice. The document identifies <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Rossini</WikiLink> by name and covers United States v. <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Mark T. Rossini</WikiLink>, case number 3:25-cr-298 in the U.S. District Court for the District of Puerto Rico. The action widened the clemency record surrounding a former FBI agent whose name had become central to a federal public-corruption case involving former Puerto Rico Gov. <WikiLink href="https://en.wikipedia.org/wiki/Wanda_V%C3%A1zquez_Garced">Wanda Vázquez Garced</WikiLink> and banker <WikiLink href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini">Julio Herrera Velutini</WikiLink>.
            </p>

            {/* Paragraph 2 */}
            <p style={{ marginBottom: '24px' }}>
              The new warrant is brief, but its legal significance is substantial. It describes the grant as a full and unconditional pardon for the offenses individually listed and submitted for presidential consideration. It also states that the Pardon Attorney is authorized to administer and sign the grant as the President’s representative. The warrant is dated January 20, 2026, and carries the name of President <WikiLink href="https://en.wikipedia.org/wiki/Donald_Trump">Donald J. Trump</WikiLink>.
            </p>

            {/* Paragraph 3 */}
            <p style={{ marginBottom: '28px' }}>
              For <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Mark Rossini</WikiLink>, the document followed an earlier pardon dated January 15. That first warrant referred to the broader case, United States v. <WikiLink href="https://en.wikipedia.org/wiki/Wanda_V%C3%A1zquez_Garced">Vazquez-Garced</WikiLink>, et al., 3:22-cr-342. The later warrant specifically names the separate <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Rossini</WikiLink> case. The two documents help explain why prosecutors and defense lawyers continued filing notices after the first announcement: the parties still needed the clemency documents to match the federal cases and charges pending in court.
            </p>

            {/* ================= FULL-SIZED VISUAL: PRESIDENT DONALD J. TRUMP ================= */}
            <figure style={{
              margin: '36px 0',
              padding: 0,
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)',
              overflow: 'hidden'
            }}>
              {/* Full-Sized Unclamped Trump Photo */}
              <img
                src="/images/rossini/donald-trump.webp"
                alt="Donald J. Trump"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxHeight: 'none'
                }}
              />
              <figcaption style={{
                padding: '14px 18px',
                backgroundColor: 'var(--bg-canvas)',
                borderTop: '1px solid var(--border-hairline)',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)'
              }}>
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.92rem', display: 'block', marginBottom: '2px' }}>
                  <WikiLink href="https://en.wikipedia.org/wiki/Donald_Trump">Donald J. Trump</WikiLink>
                </strong>
                <p style={{ margin: 0, lineHeight: 1.45 }}>
                  President of the United States, who acted under Article II, Section 2, Clause 1 of the United States Constitution to grant two successive pardon warrants that relieved federal criminal liability and enabled the Puerto Rico proceedings to move to dismissal.
                </p>
                <span style={{ display: 'block', fontSize: '0.7rem', marginTop: '6px', fontWeight: 600, color: 'var(--text-muted)' }}>
                  The White House / Official Photo
                </span>
              </figcaption>
            </figure>

            {/* Paragraph 4 */}
            <p style={{ marginBottom: '24px' }}>
              <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Rossini’s</WikiLink> legal team moved quickly to notify the court. In a filing reported by Puerto Rico media, his lawyers said he accepted the full and unconditional pardon and asked the court to dismiss all remaining charges with prejudice. The filing covered the cases connected to the original indictment and the later case. Acceptance matters because the Supreme Court has long recognized that a person must accept a pardon for it to take effect as a legal defense.
            </p>

            {/* Legal Precedent Explainer Box */}
            <div style={{
              margin: '30px 0',
              padding: '20px 22px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderLeft: '4px solid var(--brand-primary)',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.9rem',
              lineHeight: 1.65,
              color: 'var(--text-secondary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px', fontSize: '0.95rem' }}>
                <Scale size={20} color="var(--brand-primary)" />
                <span>
                  Supreme Court Precedent: <WikiLink href="https://en.wikipedia.org/wiki/Burdick_v._United_States">United States v. Burdick (236 U.S. 79)</WikiLink>
                </span>
              </div>
              <p style={{ margin: 0 }}>
                Under longstanding American constitutional doctrine established in <em>Burdick</em>, a presidential pardon cannot operate automatically against an individual’s will. It must be formally recognized and accepted by the recipient to constitute a binding legal defense in court. <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Mark Rossini’s</WikiLink> attorneys filed the first formal acceptance notice among the principal co-defendants.
              </p>
            </div>

            {/* Paragraph 5 */}
            <p style={{ marginBottom: '32px' }}>
              The case had already changed shape before the pardons were issued. Prosecutors originally accused <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Rossini</WikiLink>, <WikiLink href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini">Herrera Velutini</WikiLink>, and <WikiLink href="https://en.wikipedia.org/wiki/Wanda_V%C3%A1zquez_Garced">Vázquez Garced</WikiLink> of participating in a scheme involving political influence and campaign support. The indictment alleged that <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Rossini</WikiLink> and <WikiLink href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini">Herrera Velutini</WikiLink> promised financial backing for <WikiLink href="https://en.wikipedia.org/wiki/Wanda_V%C3%A1zquez_Garced">Vázquez’s</WikiLink> 2020 campaign in exchange for influence over Puerto Rico’s financial regulator. The original allegations included conspiracy, federal program bribery, and honest-services wire fraud. Those charges were later replaced by a lesser campaign-finance offense in a plea agreement reached in 2025.
            </p>

            {/* ================= FULL-SIZED CO-DEFENDANTS GALLERY: JULIO & WANDA ================= */}
            <div style={{
              margin: '36px 0',
              padding: '20px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)'
            }}>
              <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={18} color="var(--brand-primary)" />
                <h3 className="font-heading" style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Co-Defendants Named in the Federal Indictment
                </h3>
              </div>

              {/* Side-by-Side Full-Sized Portrait Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px'
              }}>
                
                {/* Julio Herrera Velutini — Full Sized */}
                <figure style={{
                  margin: 0,
                  padding: 0,
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden'
                }}>
                  <img
                    src="/images/rossini/julio-herrera-velutini.webp"
                    alt="Julio Herrera Velutini"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      maxHeight: 'none'
                    }}
                  />
                  <figcaption style={{ padding: '14px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>
                      <WikiLink href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini">Julio Herrera Velutini</WikiLink>
                    </strong>
                    <span>International banker and principal co-defendant. Accused of seeking regulatory relief regarding his financial institution in Puerto Rico.</span>
                  </figcaption>
                </figure>

                {/* Wanda Vázquez Garced — Full Sized */}
                <figure style={{
                  margin: 0,
                  padding: 0,
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden'
                }}>
                  <img
                    src="/images/rossini/wanda-vazquez-garced.webp"
                    alt="Wanda Vázquez Garced"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      maxHeight: 'none'
                    }}
                  />
                  <figcaption style={{ padding: '14px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.95rem', marginBottom: '4px' }}>
                      <WikiLink href="https://en.wikipedia.org/wiki/Wanda_V%C3%A1zquez_Garced">Wanda Vázquez Garced</WikiLink>
                    </strong>
                    <span>Former Governor of Puerto Rico (2019–2021) and former Secretary of Justice, whose 2020 political campaign was central to the allegations.</span>
                  </figcaption>
                </figure>

              </div>
            </div>

            {/* Paragraph 6 */}
            <p style={{ marginBottom: '24px' }}>
              That procedural history is important because the word pardon can be misunderstood. A pardon can forgive federal criminal liability, but it does not rewrite the historical record, erase every public allegation, or amount to a court ruling that the underlying conduct never occurred. In <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Rossini’s</WikiLink> case, the warrants establish executive clemency. They do not independently resolve the factual disputes that surrounded the prosecution or explain why the President granted the pardon.
            </p>

            {/* Comparative Breakdown: What a Pardon Does vs Does Not Do */}
            <div style={{
              margin: '32px 0',
              padding: '20px',
              backgroundColor: 'var(--bg-canvas)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)'
            }}>
              <h4 className="font-heading" style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px' }}>
                Legal Distinction: Executive Clemency in Federal Court
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', fontSize: '0.84rem' }}>
                {/* What it Does */}
                <div style={{ padding: '14px', backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 'var(--radius-xs)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, color: '#166534', marginBottom: '6px' }}>
                    <CheckCircle2 size={16} />
                    <span>What the Pardon Does</span>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '18px', color: '#166534', lineHeight: 1.5 }}>
                    <li>Forgives federal criminal liability under the Constitution.</li>
                    <li>Halts ongoing sentencing, probation, or incarceration.</li>
                    <li>Allows the presiding court to dismiss the active docket as moot.</li>
                  </ul>
                </div>

                {/* What it Does NOT Do */}
                <div style={{ padding: '14px', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 'var(--radius-xs)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, color: '#991B1B', marginBottom: '6px' }}>
                    <XCircle size={16} />
                    <span>What the Pardon Does Not Do</span>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '18px', color: '#991B1B', lineHeight: 1.5 }}>
                    <li>Does not constitute an acquittal or judicial finding of innocence.</li>
                    <li>Does not erase charging documents or historical records.</li>
                    <li>Does not resolve underlying factual claims made by prosecutors.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paragraph 7 */}
            <p style={{ marginBottom: '24px' }}>
              The court’s next steps focused on whether any live controversy remained. Once the defendants accepted the pardons and the relevant charges were covered, prosecutors asked the court to close the case. A federal judge later dismissed the proceedings as moot after recognizing the pardons and the defendants’ formal acceptance.
            </p>

            {/* Paragraph 8 */}
            <p style={{ marginBottom: '24px' }}>
              For readers following <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Mark Rossini</WikiLink>, the two-warrant sequence provides the clearest roadmap. The January 15 document addressed the primary Puerto Rico case. The January 20 document addressed <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Rossini’s</WikiLink> separate case number. Together, the records show how executive clemency moved from a presidential announcement to a court filing and then to a judicial order closing the pending criminal proceedings.
            </p>

            {/* Paragraph 9 */}
            <p style={{ marginBottom: '24px' }}>
              The development also renewed debate about presidential pardon power. Supporters of the decision described it as a lawful exercise of Article II authority. Critics argued that pardoning defendants in a politically sensitive public-corruption case could damage confidence in federal accountability. Those arguments are political and institutional questions, separate from the narrower legal fact that the warrants were issued and accepted.
            </p>

            {/* Paragraph 10 */}
            <p style={{ marginBottom: '32px' }}>
              For now, the official record is straightforward: <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Mark Rossini</WikiLink> was named in two presidential clemency documents, accepted the grants through counsel, and saw the related federal proceedings move toward dismissal. The case’s public significance, however, will continue to be measured not only by its legal ending but also by the unanswered questions about influence, campaign finance, and the reach of executive power.
            </p>

            {/* Reporting Basis Footer with Hyperlinked Data */}
            <div style={{
              margin: '36px 0 24px 0',
              padding: '18px 22px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.84rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '0.76rem' }}>
                <ShieldCheck size={16} color="var(--brand-primary)" />
                <span>Reporting Basis</span>
              </div>
              <p style={{ margin: 0 }}>
                Reporting basis:{' '}
                <a
                  href="https://www.justice.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--brand-primary)', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }}
                >
                  U.S. Department of Justice
                </a>
                ,{' '}
                <a
                  href="https://www.justice.gov/pardon"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--brand-primary)', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }}
                >
                  January 20, 2026 Rossini pardon warrant
                </a>
                ;{' '}
                <a
                  href="https://www.justice.gov/pardon"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--brand-primary)', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }}
                >
                  January 15, 2026 warrant
                </a>
                ; and public court reporting on the{' '}
                <a
                  href="https://www.prd.uscourts.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--brand-primary)', textDecoration: 'underline', textUnderlineOffset: '2px', fontWeight: 600 }}
                >
                  acceptance filing
                </a>{' '}
                in the U.S. District Court for the District of Puerto Rico.
              </p>
            </div>

            {/* Tag Pills */}
            <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Mark Rossini', 'Politics', 'Presidential Pardon', 'Donald Trump', 'Julio Herrera Velutini', 'Wanda Vázquez Garced', 'Puerto Rico', 'DOJ'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '0.75rem',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'var(--bg-subtle)',
                    color: 'var(--text-secondary)',
                    fontWeight: 700
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

          </article>

          {/* ================= RIGHT COLUMN: STICKY DOSSIER SIDEBAR (350px) ================= */}
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
              padding: '22px'
            }}>
              <span className="aura-pill" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Case Dossier
              </span>
              <h3 className="font-heading" style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '4px' }}>
                U.S. v. Mark T. Rossini
              </h3>
              <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '16px' }}>
                Docket Nos: 3:25-cr-298 &bull; 3:22-cr-342
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '0.82rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '9px', borderBottom: '1px solid var(--border-hairline)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Defendant:</span>
                  <strong style={{ color: 'var(--text-primary)' }}>
                    <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Mark T. Rossini</WikiLink>
                  </strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '9px', borderBottom: '1px solid var(--border-hairline)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Co-Defendants:</span>
                  <span style={{ color: 'var(--text-primary)', textAlign: 'right', fontWeight: 600 }}>
                    <WikiLink href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini">J. Herrera Velutini</WikiLink>,{' '}
                    <WikiLink href="https://en.wikipedia.org/wiki/Wanda_V%C3%A1zquez_Garced">W. Vázquez</WikiLink>
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '9px', borderBottom: '1px solid var(--border-hairline)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Jurisdiction:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>District of Puerto Rico</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '9px', borderBottom: '1px solid var(--border-hairline)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Executive Clemency:</span>
                  <strong style={{ color: 'var(--brand-primary)' }}>Full & Unconditional</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Judicial Disposition:</span>
                  <strong style={{ color: '#059669' }}>Dismissed as Moot</strong>
                </div>
              </div>
            </div>

            {/* Procedural Milestones Timeline */}
            <div style={{
              backgroundColor: 'var(--bg-canvas)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)',
              padding: '22px'
            }}>
              <h4 className="font-heading" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={16} color="var(--brand-primary)" />
                <span>Procedural Milestones</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.8rem', position: 'relative', paddingLeft: '16px', borderLeft: '2px solid var(--border-hairline)' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>August 2022</span>
                  <p style={{ margin: '2px 0 0 0', fontWeight: 700, color: 'var(--text-primary)' }}>Initial Indictment</p>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.76rem' }}>
                    DOJ charges <WikiLink href="https://en.wikipedia.org/wiki/Wanda_V%C3%A1zquez_Garced">Vázquez Garced</WikiLink>, <WikiLink href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini">Herrera Velutini</WikiLink>, and <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Rossini</WikiLink>.
                  </p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>2025</span>
                  <p style={{ margin: '2px 0 0 0', fontWeight: 700, color: 'var(--text-primary)' }}>Campaign-Finance Plea</p>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.76rem' }}>Defendants plead to lesser federal campaign contribution count.</p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--brand-primary)', fontWeight: 700 }}>Jan 15, 2026</span>
                  <p style={{ margin: '2px 0 0 0', fontWeight: 700, color: 'var(--text-primary)' }}>First Presidential Pardon</p>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.76rem' }}>
                    President <WikiLink href="https://en.wikipedia.org/wiki/Donald_Trump">Trump</WikiLink> issues clemency covering multi-defendant case.
                  </p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--brand-primary)', fontWeight: 700 }}>Jan 20, 2026</span>
                  <p style={{ margin: '2px 0 0 0', fontWeight: 700, color: 'var(--text-primary)' }}>Second Warrant & Acceptance</p>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.76rem' }}>
                    <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Rossini</WikiLink> formally accepts; DOJ issues individual warrant.
                  </p>
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#059669', fontWeight: 700 }}>January 2026</span>
                  <p style={{ margin: '2px 0 0 0', fontWeight: 700, color: 'var(--text-primary)' }}>Proceedings Dismissed</p>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.76rem' }}>Federal judge closes criminal case as moot with prejudice.</p>
                </div>
              </div>
            </div>

            {/* Related Coverage Box */}
            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)',
              padding: '20px'
            }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-primary)', letterSpacing: '0.05em', display: 'block', marginBottom: '12px' }}>
                Related Politics Coverage
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {relatedPolitics.map(art => (
                  <Link
                    key={art.id}
                    href={getArticleUrl(art)}
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <h5 className="font-heading" style={{
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      lineHeight: 1.35,
                      margin: 0
                    }}>
                      {art.title}
                    </h5>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginTop: '3px' }}>
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
