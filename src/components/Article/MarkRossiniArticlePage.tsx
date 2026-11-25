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
  FileText,
  ShieldCheck
} from 'lucide-react';

export default function MarkRossiniArticlePage() {
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
                POLITICS
              </span>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={13} /> 6 min read
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArticleShareMenu
                title="Mark Rossini Receives Second Full Pardon as Federal Case Moves Toward Closure"
                url="https://www.newyorkerherald.com/politics/mark-rossini-receives-second-full-pardon-as-federal-case-moves-toward-closure"
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
            Mark Rossini Receives Second Full Pardon as Federal Case Moves Toward Closure
          </h1>

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
              <Link
                href="/author/editorial-board"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                className="hover:text-[var(--brand-primary)]"
              >
                <span style={{ fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  By Newyorkerherald Staff
                </span>
              </Link>
              <span>&bull;</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--brand-primary)', fontWeight: 700 }}>
                <Calendar size={13} /> Washington, D.C. | November 18, 2026
              </span>
            </div>
          </div>
        </header>

        {/* ================= HERO VISUAL: MARK ROSSINI ================= */}
        <section style={{ marginBottom: '36px', display: 'flex', justifyContent: 'center' }}>
          <figure style={{
            margin: '0 auto',
            padding: 0,
            width: '100%',
            maxWidth: '780px',
            backgroundColor: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-xs)',
            overflow: 'hidden'
          }}>
            <img
              src="/images/rossini/mark-rossini.webp"
              alt="Mark Rossini"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '480px',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block'
              }}
            />
            <figcaption style={{
              padding: '12px 18px',
              backgroundColor: 'var(--bg-canvas)',
              borderTop: '1px solid var(--border-hairline)',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)'
            }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.94rem' }}>
                <WikiLink href="https://en.wikipedia.org/wiki/Mark_Rossini">Mark Rossini</WikiLink>
              </strong>
              <span style={{ color: 'var(--text-muted)', marginLeft: '6px' }}>— Former FBI Supervisory Special Agent</span>
            </figcaption>
          </figure>
        </section>

        {/* ================= 2-COLUMN DOSSIER GRID ================= */}
        <div className="alina-dossier-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 350px',
          gap: '48px',
          alignItems: 'stretch'
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
              ark Rossini received a second full and unconditional presidential pardon on January 20, 2026, according to an official pardon warrant posted by the U.S. Department of Justice. The document identifies Rossini by name and covers United States v. Mark T. Rossini, case number 3:25-cr-298 in the U.S. District Court for the District of Puerto Rico. The action widened the pardon record surrounding a former FBI agent whose name had become central to a federal public-corruption case involving former Puerto Rico Gov. Wanda Vázquez Garced and banker Julio Herrera Velutini.
            </p>

            {/* Paragraph 2 */}
            <p style={{ marginBottom: '24px' }}>
              The new warrant is brief, but its legal significance is substantial. It describes the grant as a full and unconditional pardon for the offenses individually listed and submitted for presidential consideration. It also states that the Pardon Attorney is authorized to administer and sign the grant as the President’s representative. The warrant is dated January 20, 2026, and carries the name of President Donald J. Trump.
            </p>

            {/* Paragraph 3 */}
            <p style={{ marginBottom: '28px' }}>
              For Mark Rossini, the document followed an earlier pardon dated January 15. That first warrant referred to the broader case, United States v. Vazquez-Garced, et al., 3:22-cr-342. The later warrant specifically names the separate Rossini case. The two documents help explain why prosecutors and defense lawyers continued filing notices after the first announcement: the parties still needed the pardon documents to match the federal cases and charges pending in court.
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
                padding: '12px 18px',
                backgroundColor: 'var(--bg-canvas)',
                borderTop: '1px solid var(--border-hairline)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)'
              }}>
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.94rem' }}>
                  <WikiLink href="https://en.wikipedia.org/wiki/Donald_Trump">Donald J. Trump</WikiLink>
                </strong>
                <span style={{ color: 'var(--text-muted)', marginLeft: '6px' }}>— President of the United States</span>
              </figcaption>
            </figure>

            {/* Paragraph 4 */}
            <p style={{ marginBottom: '24px' }}>
              Rossini’s legal team moved quickly to notify the court. In a filing reported by Puerto Rico media, his lawyers said he accepted the full and unconditional pardon and asked the court to dismiss all remaining charges with prejudice. The filing covered the cases connected to the original indictment and the later case. Acceptance matters because the Supreme Court has long recognized that a person must accept a pardon for it to take effect as a legal defense.
            </p>

            {/* Paragraph 5 */}
            <p style={{ marginBottom: '32px' }}>
              The case had already changed shape before the pardons were issued. Prosecutors originally accused Rossini, Herrera Velutini, and Vázquez Garced of participating in a scheme involving political influence and campaign support. The indictment alleged that Rossini and Herrera Velutini promised financial backing for Vázquez’s 2020 campaign in exchange for influence over Puerto Rico’s financial regulator. The original allegations included conspiracy, federal program bribery, and honest-services wire fraud. Those charges were later replaced by a lesser campaign-finance offense in a plea agreement reached in 2025.
            </p>

            {/* ================= CO-DEFENDANTS GALLERY: JULIO & WANDA ================= */}
            <div style={{
              margin: '36px 0',
              padding: '20px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)'
            }}>
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
                  <figcaption style={{ padding: '12px 14px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.94rem' }}>
                      <WikiLink href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini">Julio Herrera Velutini</WikiLink>
                    </strong>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem', marginTop: '2px' }}>
                      International Banker
                    </span>
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
                  <figcaption style={{ padding: '12px 14px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.94rem' }}>
                      <WikiLink href="https://en.wikipedia.org/wiki/Wanda_V%C3%A1zquez_Garced">Wanda Vázquez Garced</WikiLink>
                    </strong>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem', marginTop: '2px' }}>
                      Former Governor of Puerto Rico
                    </span>
                  </figcaption>
                </figure>

              </div>
            </div>

            {/* Paragraph 6 */}
            <p style={{ marginBottom: '24px' }}>
              That procedural history is important because the word pardon can be misunderstood. A pardon can forgive federal criminal liability, but it does not rewrite the historical record, erase every public allegation, or amount to a court ruling that the underlying conduct never occurred. In Rossini’s case, the warrants establish a presidential pardon. They do not independently resolve the factual disputes that surrounded the prosecution or explain why the President granted the pardon.
            </p>

            {/* Paragraph 7 */}
            <p style={{ marginBottom: '24px' }}>
              The court’s next steps focused on whether any live controversy remained. Once the defendants accepted the pardons and the relevant charges were covered, prosecutors asked the court to close the case. A federal judge later dismissed the proceedings as moot after recognizing the pardons and the defendants’ formal acceptance.
            </p>

            {/* Paragraph 8 */}
            <p style={{ marginBottom: '24px' }}>
              For readers following Mark Rossini, the two-warrant sequence provides the clearest roadmap. The January 15 document addressed the primary Puerto Rico case. The January 20 document addressed Rossini’s separate case number. Together, the records show how the presidential pardon moved from a presidential announcement to a court filing and then to a judicial order closing the pending criminal proceedings.
            </p>

            {/* Paragraph 9 */}
            <p style={{ marginBottom: '24px' }}>
              The development also renewed debate about presidential pardon power. Supporters of the decision described it as a lawful exercise of Article II authority. Critics argued that pardoning defendants in a politically sensitive public-corruption case could damage confidence in federal accountability. Those arguments are political and institutional questions, separate from the narrower legal fact that the warrants were issued and accepted.
            </p>

            {/* Paragraph 10 */}
            <p style={{ marginBottom: '32px' }}>
              For now, the official record is straightforward: Mark Rossini was named in two presidential pardon documents, accepted the grants through counsel, and saw the related federal proceedings move toward dismissal. The case’s public significance, however, will continue to be measured not only by its legal ending but also by the unanswered questions about influence, campaign finance, and the reach of executive power.
            </p>

            {/* Source */}
            <div style={{
              margin: '36px 0 24px 0',
              padding: '18px 22px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.84rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '0.76rem' }}>
                <ShieldCheck size={16} color="var(--brand-primary)" />
                <span>Source</span>
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                <a
                  href="https://www.justice.gov/pardon/media/1425091/dl?inline="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--brand-primary)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '2px',
                    fontWeight: 600
                  }}
                >
                  U.S. Department of Justice, January 20, 2026 Rossini pardon warrant
                </a>
                {'; '}
                <a
                  href="https://www.justice.gov/pardon/media/1424221/dl?inline="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--brand-primary)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '2px',
                    fontWeight: 600
                  }}
                >
                  January 15, 2026 warrant
                </a>
                {'; and public court reporting on the acceptance filing.'}
              </p>
            </div>
          </article>

          {/* ================= RIGHT COLUMN: STICKY DOSSIER SIDEBAR (350px) ================= */}
          <aside style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            position: 'relative'
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
              <h3 className="font-heading" style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '14px' }}>
                U.S. v. Mark T. Rossini
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '0.82rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '9px', borderBottom: '1px solid var(--border-hairline)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Defendant:</span>
                  <strong style={{ color: 'var(--text-primary)' }}>Mark T. Rossini</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '9px', borderBottom: '1px solid var(--border-hairline)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Co-Defendants:</span>
                  <span style={{ color: 'var(--text-primary)', textAlign: 'right', fontWeight: 600 }}>J. Herrera Velutini, W. Vázquez</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '9px', borderBottom: '1px solid var(--border-hairline)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Jurisdiction:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>District of Puerto Rico</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '9px', borderBottom: '1px solid var(--border-hairline)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Pardon Status:</span>
                  <strong style={{ color: 'var(--brand-primary)' }}>Full & Unconditional</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Judicial Disposition:</span>
                  <strong style={{ color: '#059669' }}>Dismissed as Moot</strong>
                </div>
              </div>
            </div>

            {/* Sticky Procedural Milestones Timeline (Completely Seen on Scrolling) */}
            <div style={{
              flex: 1,
              position: 'relative'
            }}>
              <div style={{
                position: 'sticky',
                top: '76px',
                zIndex: 10
              }}>
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
                        DOJ charges Vázquez Garced, Herrera Velutini, and Rossini.
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
                        President Trump issues pardon covering multi-defendant case.
                      </p>
                    </div>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--brand-primary)', fontWeight: 700 }}>Jan 20, 2026</span>
                      <p style={{ margin: '2px 0 0 0', fontWeight: 700, color: 'var(--text-primary)' }}>Second Warrant & Acceptance</p>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.76rem' }}>
                        Rossini formally accepts; DOJ issues individual warrant.
                      </p>
                    </div>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#059669', fontWeight: 700 }}>January 2026</span>
                      <p style={{ margin: '2px 0 0 0', fontWeight: 700, color: 'var(--text-primary)' }}>Proceedings Dismissed</p>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.76rem' }}>Federal judge closes criminal case as moot with prejudice.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* At Last: Editorial Bureau Container */}
            <div style={{
              marginTop: 'auto',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-xs)',
              padding: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span className="aura-pill" style={{ fontSize: '0.66rem', letterSpacing: '0.05em' }}>
                  Editorial Bureau
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Washington, D.C.
                </span>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <Link
                  href="/author/editorial-board"
                  style={{
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    fontWeight: 800,
                    fontSize: '0.96rem',
                    display: 'block',
                    marginBottom: '2px'
                  }}
                  className="hover:text-[var(--brand-primary)]"
                >
                  Newyorkerherald Staff
                </Link>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Editorial Board &amp; Investigative Bureau
                </span>
              </div>

              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: '0 0 14px 0' }}>
                The Newyorkerherald editorial staff and legal reporting bureau produce real-time reporting, in-depth investigations, policy intelligence, and verified news dispatches.
              </p>

              <Link
                href="/author/editorial-board"
                style={{
                  fontSize: '0.76rem',
                  color: 'var(--brand-primary)',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                className="hover:underline"
              >
                <span>View Full Editorial Archive</span>
                <span>&rarr;</span>
              </Link>
            </div>

          </aside>

        </div>

      </div>

      {/* Footer */}
      <CurvedFooter />
    </main>
  );
}
