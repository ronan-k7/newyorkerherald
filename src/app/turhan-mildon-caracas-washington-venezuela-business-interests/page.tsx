'use client';

import React from 'react';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import ArticleShareMenu from '@/components/Common/ArticleShareMenu';
import {
  Clock,
  Calendar,
  Building2,
  ExternalLink,
  Globe2,
  ShieldAlert
} from 'lucide-react';

export default function TurhanMildonDossierPage() {
  const sidebarRef = React.useRef<HTMLElement>(null);
  const [stickyTop, setStickyTop] = React.useState(60);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/turhan-mildon-caracas-washington-venezuela-business-interests') {
      window.history.replaceState(null, '', '/politics/turhan-mildon-caracas-washington-venezuela-business-interests');
    }
  }, []);

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

  const timelineEvents = [
    {
      year: 'Congo Experience',
      badge: 'Africa Ventures',
      title: 'Construction & Diplomatic Role',
      description: 'Developed construction businesses in the Democratic Republic of Congo, reportedly becoming an adviser to President Félix Tshisekedi and obtaining a diplomatic passport.'
    },
    {
      year: 'Late 2023',
      badge: 'South America',
      title: 'Arrival in Venezuela',
      description: 'Arrived in Venezuela following an invitation from a friend, establishing commercial operations in the country\'s cement manufacturing sector.'
    },
    {
      year: 'Political Shift',
      badge: 'Transition',
      title: 'Fall of Maduro & Extradition of Saab',
      description: 'Political changes and the extradition of Colombian businessman Alex Saab created significant uncertainty for commercial contracts connected to state-owned cement plants.'
    },
    {
      year: 'Strategic Pivot',
      badge: 'U.S. Connections',
      title: 'Washington Outreach & Alina Habba',
      description: 'Shifted focus toward cultivating relationships in Washington while seeking to protect investments, coinciding with his relationship with Donald Trump\'s former personal lawyer, Alina Habba.'
    },
    {
      year: 'September',
      badge: 'Waldorf Astoria',
      title: 'High-Profile Nuptials in New York',
      description: 'Married Alina Habba at New York\'s Waldorf Astoria, attended by prominent Washington figures including Todd Blanche, Kash Patel, and Will Scharf.'
    },
    {
      year: 'Public Inquiry',
      badge: 'Scrutiny & Denials',
      title: 'Investigation & Firm Denials',
      description: 'The New York Times published an investigation based on over two dozen interviews. Habba firmly denied intervening before the administration on her husband\'s behalf.'
    }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-canvas)' }}>
      <CurvedHeader />

      {/* Main Article Container */}
      <div className="aura-container" style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '36px 20px 80px 20px'
      }}>

        {/* Breadcrumb Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.78rem',
          fontWeight: 600,
          marginBottom: '24px',
          color: 'var(--text-muted)',
          letterSpacing: '0.03em',
          textTransform: 'uppercase'
        }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            Home
          </Link>
          <span>/</span>
          <Link href="/politics" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            Politics
          </Link>
          <span>/</span>
          <Link href="/business" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            International Business
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>Turhan Mildon Dossier</span>
        </div>

        {/* ================= MINIMAL EDITORIAL HERO ================= */}
        <header style={{ marginBottom: '40px' }}>

          {/* Kicker & Actions Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="aura-pill" style={{ letterSpacing: '0.06em' }}>
                International Business / Politics
              </span>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={13} /> 9 min read
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArticleShareMenu
                title="From Caracas to Washington: Turhan Mildon’s Search for Political Connections Amid Venezuela’s Changing Power Structure"
                url="/politics/turhan-mildon-caracas-washington-venezuela-business-interests"
              />
            </div>
          </div>

          {/* Centered Editorial Header Content */}
          <div style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto' }}>
            {/* Headline */}
            <h1 className="font-heading" style={{
              fontSize: 'clamp(2.3rem, 4.6vw, 3.8rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              margin: '0 auto 18px auto',
              textAlign: 'center',
              maxWidth: '960px'
            }}>
              From Caracas to Washington: Turhan Mildon’s Search for Political Connections Amid Venezuela’s Changing Power Structure
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
              color: 'var(--brand-primary)',
              fontWeight: 700,
              lineHeight: 1.35,
              letterSpacing: '-0.015em',
              margin: '0 auto 16px auto',
              textAlign: 'center',
              maxWidth: '860px'
            }}>
              Turhan Mildon’s Business Interests: From Caracas to Washington
            </p>

            {/* Deck / Summary */}
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              margin: '0 auto 22px auto',
              textAlign: 'center',
              maxWidth: '820px'
            }}>
              Turkish investor Turhan Mildon’s efforts to protect his Venezuelan business interests brought renewed attention to his political connections and relationship with Alina Habba.
            </p>

            {/* Byline */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--border-hairline)',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <span style={{ fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                By Newyorkerherald Staff
              </span>
              <span>&bull;</span>
              <span>Investigative Reporting Bureau</span>
              <span>&bull;</span>
              <span>Published Today</span>
            </div>
          </div>

          {/* Hero Image — Centered with restrained, elegant sizing matching Alina Habba page */}
          <figure style={{
            margin: '28px auto 0 auto',
            padding: 0,
            width: '100%',
            maxWidth: '780px',
            backgroundColor: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-xs)',
            overflow: 'hidden'
          }}>
            <img
              src="/images/news/turhan-mildon-caracas-washington-venezuela-business-interests.webp"
              alt="Alina Habba and Turhan Mildon"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '440px',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                display: 'block'
              }}
            />
            <figcaption style={{
              padding: '12px 18px',
              backgroundColor: 'var(--bg-canvas)',
              borderTop: '1px solid var(--border-hairline)',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)'
            }}>
              Alina Habba and Turkish investor Turhan Mildon, whose marriage and international business trajectory have highlighted the intersection of global commercial operations and political access.
              <span style={{ display: 'block', fontSize: '0.72rem', marginTop: '3px', fontWeight: 600, color: 'var(--text-muted)' }}>
                Newyorkerherald Investigative Archive / Global Business Desk
              </span>
            </figcaption>
          </figure>
        </header>

        {/* ================= 2-COLUMN DOSSIER GRID (Content + Sticky Timeline) ================= */}
        <div className="alina-dossier-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 340px',
          gap: '48px',
          alignItems: 'start'
        }}>

          {/* ================= LEFT: ARTICLE TEXT & CALLOUTS ================= */}
          <article style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>

            {/* Section 1: A Business Strategy Shaped by Political Change */}
            <h2 className="font-heading" style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginTop: '0px',
              marginBottom: '18px',
              paddingBottom: '10px',
              borderBottom: '1px solid var(--border-hairline)'
            }}>
              A Business Strategy Shaped by Political Change
            </h2>

            <p style={{ marginBottom: '16px', fontSize: '1.05rem', lineHeight: 1.8 }}>
              The movement of Turkish investor Turhan Mildon from relying on contacts in Caracas to cultivating relationships in Washington illustrates how international business interests can become closely connected to changing political circumstances.
            </p>

            <p style={{ marginBottom: '16px' }}>
              Mildon&apos;s commercial activities in Venezuela reportedly faced uncertainty following the fall of Nicol&aacute;s Maduro and the subsequent extradition of Colombian businessman Alex Saab. The developments threatened businesses that had been operating within Venezuela&apos;s previous political and commercial environment.
            </p>

            <p style={{ marginBottom: '16px' }}>
              For a businessman seeking to protect established investments, the changing circumstances created a new challenge. Relationships that had previously been important to commercial operations could become less dependable as political authority shifted.
            </p>

            <p style={{ marginBottom: '16px' }}>
              According to an investigation by The New York Times, Mildon responded by developing connections in Washington while attempting to protect his investments in Venezuela.
            </p>

            <p style={{ marginBottom: '16px' }}>
              His relationship with Alina Habba, Donald Trump&apos;s former personal lawyer, became an important part of this story.
            </p>

            <p style={{ marginBottom: '28px' }}>
              The connection between Mildon&apos;s business interests and Habba&apos;s position within Trump&apos;s political surroundings has attracted attention because it brings together two different forms of influence: international commercial relationships and proximity to a powerful political circle.
            </p>

            {/* Blockquote Breakout */}
            <div style={{
              margin: '32px 0',
              padding: '22px 26px',
              backgroundColor: 'var(--bg-surface-elevated)',
              borderLeft: '4px solid var(--brand-primary)',
              borderRadius: '0 var(--radius-xs) var(--radius-xs) 0',
              boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
            }}>
              <p style={{
                fontStyle: 'italic',
                fontSize: '1.08rem',
                lineHeight: 1.65,
                color: 'var(--text-primary)',
                margin: 0,
                fontWeight: 600
              }}>
                &ldquo;The Caracas-to-Washington shift demonstrates how international business interests can become closely connected to political change, personal relationships and the search for new sources of influence.&rdquo;
              </p>
            </div>

            {/* Section 2: Mildon's Earlier International Business Experience */}
            <h2 className="font-heading" style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginTop: '36px',
              marginBottom: '18px',
              paddingBottom: '10px',
              borderBottom: '1px solid var(--border-hairline)'
            }}>
              Mildon&apos;s Earlier International Business Experience
            </h2>

            <p style={{ marginBottom: '16px' }}>
              Mildon&apos;s reported business history did not begin in Venezuela.
            </p>

            <p style={{ marginBottom: '16px' }}>
              Before arriving in the South American country, he had developed construction businesses in the Democratic Republic of Congo. His activities there reportedly brought him into contact with the country&apos;s political leadership.
            </p>

            <p style={{ marginBottom: '16px' }}>
              According to the supplied account, Mildon became an adviser to President Felix Tshisekedi and obtained a diplomatic passport.
            </p>

            <p style={{ marginBottom: '16px' }}>
              This background is relevant because it shows that his professional activities extended across different countries and included relationships with political figures.
            </p>

            <p style={{ marginBottom: '16px' }}>
              His arrival in Venezuela at the end of 2023 followed an invitation from a Venezuelan friend. By that point, he had already established construction businesses in Congo.
            </p>

            <p style={{ marginBottom: '16px' }}>
              The move to Venezuela represented another stage in his international business activities.
            </p>

            <p style={{ marginBottom: '16px' }}>
              The investigation connects his subsequent commercial position to businesses operating in the Venezuelan cement sector. Those interests later became vulnerable to political developments that threatened contracts associated with state-owned cement plants.
            </p>

            <p style={{ marginBottom: '28px' }}>
              The account therefore presents a businessman whose commercial activities developed across national borders while remaining closely connected to changing political environments.
            </p>

            {/* Section 3: Venezuela's Political Transition and the Commercial Challenge */}
            <h2 className="font-heading" style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginTop: '36px',
              marginBottom: '18px',
              paddingBottom: '10px',
              borderBottom: '1px solid var(--border-hairline)'
            }}>
              Venezuela&apos;s Political Transition and the Commercial Challenge
            </h2>

            <p style={{ marginBottom: '16px' }}>
              The fall of Nicol&aacute;s Maduro marked a significant turning point in the circumstances described by the investigation.
            </p>

            <p style={{ marginBottom: '16px' }}>
              The subsequent extradition of Alex Saab also threatened Mildon&apos;s business interests.
            </p>

            <p style={{ marginBottom: '16px' }}>
              Saab is identified in the supplied material as a Colombian businessman whose position had become relevant to the political and commercial environment surrounding Maduro.
            </p>

            <p style={{ marginBottom: '16px' }}>
              For Mildon, the developments meant that the business environment in which he had operated was changing.
            </p>

            <p style={{ marginBottom: '16px' }}>
              Commercial contracts, especially those connected to state-owned facilities, can become particularly vulnerable when political leadership changes. The investigation describes Mildon&apos;s efforts to protect contracts involving Venezuelan cement plants during this period.
            </p>

            <p style={{ marginBottom: '16px' }}>
              His business interests were therefore no longer simply a matter of maintaining commercial operations. They had become connected to the wider consequences of political transition.
            </p>

            <p style={{ marginBottom: '16px' }}>
              The investigation describes how he moved away from relying primarily on contacts in Caracas and began cultivating relationships in Washington.
            </p>

            <p style={{ marginBottom: '28px' }}>
              That shift forms the central theme of the reported business strategy.
            </p>

            {/* Section 4: Why Washington Became Important */}
            <h2 className="font-heading" style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginTop: '36px',
              marginBottom: '18px',
              paddingBottom: '10px',
              borderBottom: '1px solid var(--border-hairline)'
            }}>
              Why Washington Became Important
            </h2>

            <p style={{ marginBottom: '16px' }}>
              Washington represented a different political environment from the one in which Mildon had developed his Venezuelan interests.
            </p>

            <p style={{ marginBottom: '16px' }}>
              His reported efforts to cultivate relationships there coincided with his relationship with Habba.
            </p>

            <p style={{ marginBottom: '16px' }}>
              Habba&apos;s previous professional association with Donald Trump placed her within the former president&apos;s political and legal circle. According to the New York Times investigation, her relationship with Mildon opened space for him in Trump&apos;s surroundings.
            </p>

            <p style={{ marginBottom: '16px' }}>
              The investigation also connects this relationship to efforts to slow the cancellation of contracts under which Mildon operated state-owned cement plants in Venezuela.
            </p>

            <p style={{ marginBottom: '16px' }}>
              The reported connection is important because it raises questions about how political proximity can intersect with international commercial interests.
            </p>

            <p style={{ marginBottom: '16px' }}>
              For Mildon, cultivating relationships in Washington was described as part of his attempt to protect his investments.
            </p>

            <p style={{ marginBottom: '16px' }}>
              For observers, the circumstances create a broader question: how should the relationship between personal connections and commercial outcomes be understood when businesses operate in politically sensitive environments?
            </p>

            <p style={{ marginBottom: '16px' }}>
              It is important to recognize that the supplied account does not establish that every business decision was influenced by political relationships. Nor does it establish that Habba personally secured any particular commercial outcome.
            </p>

            <p style={{ marginBottom: '16px' }}>
              Habba denied intervening before the administration on behalf of her husband. Both she and her spokesperson also questioned central aspects of the investigation.
            </p>

            <p style={{ marginBottom: '28px' }}>
              Those denials are an essential part of the reported story.
            </p>

            {/* Section 5: A Relationship That Changed the Public Context */}
            <h2 className="font-heading" style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginTop: '36px',
              marginBottom: '18px',
              paddingBottom: '10px',
              borderBottom: '1px solid var(--border-hairline)'
            }}>
              A Relationship That Changed the Public Context
            </h2>

            <p style={{ marginBottom: '16px' }}>
              Mildon and Habba married in September at New York&apos;s Waldorf Astoria Hotel.
            </p>

            <p style={{ marginBottom: '16px' }}>
              The celebration brought together several prominent figures from Washington, including U.S. Attorney General Todd Blanche, FBI Director Kash Patel and White House attorney Will Scharf.
            </p>

            <p style={{ marginBottom: '16px' }}>
              The presence of these officials attracted attention because it demonstrated the political environment surrounding the couple.
            </p>

            <p style={{ marginBottom: '16px' }}>
              For Mildon, the marriage represented a public entrance into Trump&apos;s surroundings.
            </p>

            <p style={{ marginBottom: '16px' }}>
              The event also brought renewed attention to his Venezuelan investments and the challenges created by the country&apos;s changing political situation.
            </p>

            <p style={{ marginBottom: '16px' }}>
              A private relationship had become relevant to a wider discussion about international business, political access and commercial uncertainty.
            </p>

            <p style={{ marginBottom: '28px' }}>
              The marriage did not itself demonstrate that the guests supported Mildon&apos;s business interests. Nevertheless, the gathering made the connection between his personal life and the political environment particularly visible.
            </p>

            {/* Section 6: From Personal Connections to Commercial Questions */}
            <h2 className="font-heading" style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginTop: '36px',
              marginBottom: '18px',
              paddingBottom: '10px',
              borderBottom: '1px solid var(--border-hairline)'
            }}>
              From Personal Connections to Commercial Questions
            </h2>

            <p style={{ marginBottom: '16px' }}>
              The most significant issue in the investigation is not simply that Mildon developed a relationship with someone who had worked closely with Trump.
            </p>

            <p style={{ marginBottom: '16px' }}>
              It is the relationship between that personal connection and his reported efforts to preserve commercial interests in Venezuela.
            </p>

            <p style={{ marginBottom: '16px' }}>
              The investigation describes a transition from contacts in Caracas to relationships in Washington. It also raises the possibility that Habba&apos;s connections helped slow the cancellation of contracts associated with state-owned cement plants.
            </p>

            <p style={{ marginBottom: '16px' }}>
              That account has been disputed by Habba and her spokesperson.
            </p>

            <p style={{ marginBottom: '16px' }}>
              Consequently, the issue should be understood through the distinction between reported developments and established conclusions.
            </p>

            <p style={{ marginBottom: '16px' }}>
              The investigation provides an account based on interviews with more than two dozen people. It describes Mildon&apos;s business trajectory, the political changes affecting his investments and the personal relationships that became relevant to his efforts.
            </p>

            <p style={{ marginBottom: '28px' }}>
              However, the denials must remain part of any fair assessment.
            </p>

            {/* Section 7: The Wider Meaning of the Caracas-to-Washington Shift */}
            <h2 className="font-heading" style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginTop: '36px',
              marginBottom: '18px',
              paddingBottom: '10px',
              borderBottom: '1px solid var(--border-hairline)'
            }}>
              The Wider Meaning of the Caracas-to-Washington Shift
            </h2>

            <p style={{ marginBottom: '16px' }}>
              The story illustrates an important feature of international business: companies and investors do not operate independently of political conditions.
            </p>

            <p style={{ marginBottom: '16px' }}>
              In countries where commercial activity involves state-owned facilities, political transitions can have consequences for contracts and investments.
            </p>

            <p style={{ marginBottom: '16px' }}>
              A businessman who once relied on relationships in one political environment may seek new connections when that environment changes.
            </p>

            <p style={{ marginBottom: '16px' }}>
              Mildon&apos;s reported shift toward Washington illustrates this challenge.
            </p>

            <p style={{ marginBottom: '16px' }}>
              His earlier activities in Congo, his arrival in Venezuela, his cement-related interests and his relationship with Habba form a sequence that highlights the importance of political relationships in his international business trajectory.
            </p>

            <p style={{ marginBottom: '28px' }}>
              The investigation does not resolve every question surrounding those relationships. Instead, it presents a case in which business interests and political connections became increasingly intertwined.
            </p>

            {/* Section 8: Conclusion: A Businessman Navigating Two Political Environments */}
            <h2 className="font-heading" style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginTop: '36px',
              marginBottom: '18px',
              paddingBottom: '10px',
              borderBottom: '1px solid var(--border-hairline)'
            }}>
              Conclusion: A Businessman Navigating Two Political Environments
            </h2>

            <p style={{ marginBottom: '16px' }}>
              Turhan Mildon&apos;s story connects commercial activities in Venezuela with an evolving network of relationships in Washington.
            </p>

            <p style={{ marginBottom: '16px' }}>
              His earlier construction businesses in the Democratic Republic of Congo, his reported advisory role to President Felix Tshisekedi and his subsequent arrival in Venezuela provide the background to his international business activities.
            </p>

            <p style={{ marginBottom: '16px' }}>
              The fall of Maduro and the extradition of Alex Saab threatened his Venezuelan interests, creating a new challenge for the businessman.
            </p>

            <p style={{ marginBottom: '16px' }}>
              His relationship and marriage with Alina Habba subsequently placed him within a prominent political environment.
            </p>

            <p style={{ marginBottom: '16px' }}>
              The investigation&apos;s account of his efforts to cultivate Washington connections raises questions about the relationship between personal access and commercial protection. Habba&apos;s denial of intervening on his behalf, however, remains central to the story.
            </p>

            <p style={{ marginBottom: '36px' }}>
              Ultimately, the Caracas-to-Washington shift demonstrates how international business interests can become closely connected to political change, personal relationships and the search for new sources of influence.
            </p>

            {/* Tags Section */}
            <div style={{
              paddingTop: '24px',
              borderTop: '1px solid var(--border-hairline)',
              marginBottom: '36px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '12px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}>
                Suggested Topic Tags
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  { name: 'Turhan Mildon', href: '/tag/turhan-mildon' },
                  { name: 'Venezuela', href: '/tag/venezuela' },
                  { name: 'Caracas', href: '/tag/caracas' },
                  { name: 'Washington', href: '/tag/washington' },
                  { name: 'Alina Habba', href: '/tag/alina-habba' },
                  { name: 'Alex Saab', href: '/tag/alex-saab' },
                  { name: 'International Business', href: '/tag/international-business' },
                  { name: 'Donald Trump', href: '/tag/donald-trump' },
                  { name: 'Venezuelan cement plants', href: '/tag/venezuelan-cement-plants' }
                ].map((tag) => (
                  <Link
                    key={tag.name}
                    href={tag.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '5px 14px',
                      borderRadius: '9999px',
                      border: '1px solid var(--border-hairline)',
                      backgroundColor: 'var(--bg-surface)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: 'all 0.15s ease',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--text-primary)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-surface-elevated)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-hairline)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
                    }}
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>

          </article>

          {/* ================= RIGHT: STICKY TIMELINE & SOURCES ================= */}
          <aside
            ref={sidebarRef}
            className="sticky-dossier-sidebar"
            style={{
              position: 'sticky',
              top: `${stickyTop}px`,
              alignSelf: 'start',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              transition: 'top 0.2s ease'
            }}
          >

            {/* Timeline Sidebar Box */}
            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-sm)',
              padding: '16px 18px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '10px' }}>
                <Calendar size={15} color="var(--brand-primary)" />
                <h3 className="font-heading" style={{
                  fontSize: '0.92rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--text-primary)',
                  margin: 0
                }}>
                  Chronological Timeline
                </h3>
              </div>

              {/* Timeline Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>

                {/* Vertical Hairline Rule */}
                <div style={{
                  position: 'absolute',
                  top: '6px',
                  bottom: '6px',
                  left: '6px',
                  width: '2px',
                  backgroundColor: 'var(--border-hairline)'
                }} />

                {timelineEvents.map((ev, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', position: 'relative', zIndex: 1 }}>
                    {/* Node Dot */}
                    <div style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: i === timelineEvents.length - 1 ? 'var(--brand-primary)' : 'var(--bg-surface)',
                      border: '2px solid var(--brand-primary)',
                      flexShrink: 0,
                      marginTop: '3px'
                    }} />

                    {/* Event Content */}
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                          {ev.year}
                        </span>
                        <span className="aura-pill" style={{ fontSize: '0.62rem', padding: '1px 6px' }}>
                          {ev.badge}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-primary)', marginBottom: '3px' }}>
                        {ev.title}
                      </div>

                      <p style={{ fontSize: '0.73rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: 0 }}>
                        {ev.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The New York Times Coverage Document Box */}
            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-sm)',
              padding: '14px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '8px',
                borderBottom: '1px solid var(--border-hairline)',
                paddingBottom: '6px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ExternalLink size={13} color="var(--brand-primary)" />
                  <span className="font-heading" style={{
                    fontSize: '0.78rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-primary)'
                  }}>
                    Investigation Dossier
                  </span>
                </div>
                <span className="aura-pill" style={{ fontSize: '0.62rem', padding: '1px 6px' }}>
                  Special Report
                </span>
              </div>

              <div style={{
                padding: '10px 12px',
                backgroundColor: 'var(--bg-canvas)',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--border-hairline)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <Globe2 size={14} color="var(--brand-primary)" />
                  <span style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    Caracas &bull; Washington Channel
                  </span>
                </div>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: 0 }}>
                  Reported by national and international correspondents examining Turkish industrial investments across Venezuela and shifting diplomatic channels.
                </p>
              </div>

              <p style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                lineHeight: 1.4,
                margin: '8px 0 0 0',
                textAlign: 'center'
              }}>
                Based on interviews with more than two dozen international business and diplomatic sources.
              </p>
            </div>

            {/* Key Entities & Case Overview Box */}
            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-sm)',
              padding: '14px 16px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '8px',
                borderBottom: '1px solid var(--border-hairline)',
                paddingBottom: '6px'
              }}>
                <Building2 size={13} color="var(--brand-primary)" />
                <h4 className="font-heading" style={{
                  fontSize: '0.78rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-primary)',
                  margin: 0
                }}>
                  Key Case Entities
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{
                  padding: '6px 8px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-hairline)'
                }}>
                  <span style={{ fontWeight: 700, color: 'var(--brand-primary)', fontSize: '0.74rem', display: 'block' }}>
                    Turhan Mildon
                  </span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.68rem' }}>
                    Turkish international investor with operations in Congo and Venezuelan cement plants.
                  </span>
                </div>

                <div style={{
                  padding: '6px 8px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-hairline)'
                }}>
                  <span style={{ fontWeight: 700, color: 'var(--brand-primary)', fontSize: '0.74rem', display: 'block' }}>
                    Alina Habba
                  </span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.68rem' }}>
                    Former personal attorney to Donald Trump; married Mildon in September 2026.
                  </span>
                </div>

                <div style={{
                  padding: '6px 8px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--bg-canvas)',
                  border: '1px solid var(--border-hairline)'
                }}>
                  <span style={{ fontWeight: 700, color: 'var(--brand-primary)', fontSize: '0.74rem', display: 'block' }}>
                    Alex Saab
                  </span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.68rem' }}>
                    Colombian businessman whose extradition marked major shift in Venezuelan commercial environment.
                  </span>
                </div>
              </div>
            </div>

          </aside>

        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
