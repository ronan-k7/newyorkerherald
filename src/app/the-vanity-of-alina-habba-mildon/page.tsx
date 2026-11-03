'use client';

import React from 'react';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import ArticleShareMenu from '@/components/Common/ArticleShareMenu';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Building2,
  DollarSign,
  ExternalLink
} from 'lucide-react';
import { useNews } from '@/context/NewsContext';

export default function AlinaHabbaSpecialDossierPage() {
  const articleId = 'the-vanity-of-alina-habba-mildon';
  const sidebarRef = React.useRef<HTMLElement>(null);
  const [stickyTop, setStickyTop] = React.useState(60);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/the-vanity-of-alina-habba-mildon') {
      window.history.replaceState(null, '', '/us/the-vanity-of-alina-habba-mildon');
    }
  }, []);

  React.useEffect(() => {
    const updateSticky = () => {
      if (!sidebarRef.current) return;
      const sidebarHeight = sidebarRef.current.offsetHeight;
      const vh = window.innerHeight;
      // If sidebar fits comfortably in viewport with header (44px) + margin, stick to 60px.
      // If viewport is shorter, stick such that the bottom (source section) is cleanly visible.
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
      year: '2024',
      badge: 'Initial Connection',
      title: 'First Professional Engagement',
      description: 'Habba reportedly first met and worked with the Herrera banking interests, prior to entering senior federal public service.'
    },
    {
      year: 'December 2025',
      badge: 'Public Service Exit',
      title: 'Departure & The Friday Call',
      description: 'Her public service concluded and she began exploring a new professional chapter. A reported Friday-afternoon call was placed to the family.'
    },
    {
      year: 'January 2026',
      badge: 'Executive Clemency',
      title: 'Presidential Pardon Granted',
      description: 'President Donald Trump formally granted a presidential pardon to Julio Herrera Velutini. Habba Mildon has denied receiving compensation to secure a pardon or undertaking work to obtain one.'
    },
    {
      year: 'February 26, 2026',
      badge: 'London Headquarters',
      title: 'Corporate Summit & Business Lunch',
      description: 'A reported 108-minute business lunch with Julio Herrera Velutini, family members and senior advisers took place at the family’s London corporate headquarters.'
    },
    {
      year: 'March 23, 2026',
      badge: '25 Days Later',
      title: 'Personal Reinvention & Second Meeting',
      description: 'Habba reportedly requested a second London meeting, discussing her divorce and relationship with Turkish businessman Turhan Mildon. The relationship led to an engagement and an extravagant wedding celebration estimated at approximately $10 million.'
    },
    {
      year: 'October 31, 2026',
      badge: 'Mar-a-Lago',
      title: 'Trump’s Halloween Intervention',
      description: 'President Donald J. Trump publicly criticized the reported compensation agreement at Mar-a-Lago, denouncing it as "totally obnoxious and outrageous" and unacceptable.'
    }
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)' }}>
      <CurvedHeader activeCategory="us" />

      {/* Main Article Container */}
      <div className="aura-container" style={{ padding: '24px 20px 60px 20px', flex: 1 }}>

        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
            <ArrowLeft size={12} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/category/us" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            U.S. News
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--brand-primary)', fontWeight: 800 }}>The Vanity of Alina Habba Mildon</span>
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
                U.S. News
              </span>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={13} /> 12 min read
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArticleShareMenu
                title="The Vanity of Alina Habba Mildon: Beauty, Power, Ambition and the Price of Loyalty"
                url="/us/the-vanity-of-alina-habba-mildon"
              />
            </div>
          </div>

          {/* Centered Editorial Header Content */}
          <div style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto' }}>
            {/* Headline */}
            <h1 className="font-heading" style={{
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              lineHeight: 1.06,
              letterSpacing: '-0.04em',
              margin: '0 auto 18px auto',
              textAlign: 'center',
              maxWidth: '960px'
            }}>
              The Vanity of Alina Habba Mildon
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
              color: 'var(--brand-primary)',
              fontWeight: 700,
              lineHeight: 1.35,
              letterSpacing: '-0.015em',
              margin: '0 auto 16px auto',
              textAlign: 'center',
              maxWidth: '860px'
            }}>
              Beauty, Power, Ambition and the Price of Loyalty: From the White House to the Herrera Velutini Banking Dynasty
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
              An exhaustive examination into the extraordinary $50 million legal and advisory agreement between Donald Trump&apos;s former personal attorney and Concord Partners, the high-altitude corporate summits in London, a whirlwind $10 million social reinvention, and the sudden presidential rupture that reverberated from Mar-a-Lago to European banking chambers.
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
              <span>Published November 2026</span>
            </div>
          </div>

          {/* Hero Image — Full Width, Completely Visible */}
          <figure style={{ margin: '24px 0 0 0', padding: 0 }}>
            <img
              src="/images/news/alina-habba-image.webp"
              alt="Alina Habba Mildon"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '580px',
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
              lineHeight: 1.4,
              fontStyle: 'italic'
            }}>
              Alina Habba Mildon, former senior legal adviser to President Trump, at the center of the reported $50 million Concord Partners advisory agreement.
              <span style={{ display: 'block', fontSize: '0.7rem', marginTop: '2px', fontWeight: 600, fontStyle: 'normal', color: 'var(--text-muted)' }}>
                Newyorkerherald Investigative Archive
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

            <p style={{
              fontSize: '1.18rem',
              lineHeight: 1.68,
              color: 'var(--text-primary)',
              fontWeight: 500,
              marginBottom: '28px'
            }}>
              <strong style={{ fontSize: '1.5rem', float: 'left', lineHeight: '1', paddingRight: '8px', paddingTop: '4px', color: 'var(--brand-primary)', fontFamily: 'var(--font-heading)' }}>A</strong>lina Habba was once a symbol of beauty, power and strength. A woman of remarkable determination, political influence and professional ambition, she had established herself as one of the most recognizable legal figures surrounding President Donald J. Trump. Her career represented confidence, resilience and loyalty, qualities that appeared to position her for an extraordinary future beyond public service.
            </p>

            <p>
              Yet behind the glamour of Washington, the prestige of presidential proximity and the opportunities of international finance, another story was beginning to unfold. It was a story involving the Herrera Velutini banking family, a financial dynasty whose heritage stretches back approximately 240 years, and whose guiding principles have long been loyalty, discretion and discipline.
            </p>

            <p>
              According to an account of her relationship with the family, Habba had first met and worked with the Herrera banking interests in 2024, before entering public service. That earlier professional connection would eventually provide the foundation for what was envisioned as a significant role within the family&apos;s international financial organization.
            </p>

            <p>
              Following her service as senior adviser to President Trump, acting United States attorney for New Jersey and senior adviser to Attorney General Pam Bondi, Habba reportedly began looking toward a different professional future.
            </p>

            <p>
              Her ambition was to join a family office with the international reach, influence and complexity of an organization such as the Trump Organization. She wanted a position in which her legal experience, political relationships and professional resources could be dedicated to a single family enterprise.
            </p>

            <p>
              The role she envisioned was not an ordinary legal appointment. It was that of General Counsel and Senior Adviser, a position carrying considerable responsibility across international business, banking, regulatory affairs and strategic decision-making.
            </p>

            {/* Blockquote Breakout */}
            <blockquote style={{
              borderLeft: '4px solid var(--brand-primary)',
              margin: '32px 0',
              padding: '16px 24px',
              backgroundColor: 'var(--bg-surface-elevated)',
              borderRadius: '0 var(--radius-xs) var(--radius-xs) 0',
              fontSize: '1.08rem',
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              lineHeight: 1.6
            }}>
              &ldquo;Then, on a Friday afternoon, the Herrera Velutini family reportedly received a telephone call from Alina Habba. She wanted to meet. Her stated purpose was to discuss her future following the conclusion of her public service in December 2025.&rdquo;
            </blockquote>

            <p>
              She reportedly expressed a willingness to dedicate herself fully to the family, making herself available around the clock to coordinate its lawyers, business advisers, regulatory relationships and financial interests across jurisdictions stretching from the Middle East to Latin America.
            </p>

            <p>
              For Habba, this represented more than another prestigious title. It was an opportunity to establish herself as a leader within the Herrera Velutini banking and financial enterprise, a chance to transform her Washington experience into a lasting career at the highest levels of international private finance.
            </p>

            <p>
              For the family, the proposition appeared to offer the services of a highly visible American lawyer with direct experience in government, complex litigation and the management of influential relationships.
            </p>

            {/* Section: The London Summit */}
            <h2 className="font-heading" style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.025em',
              margin: '40px 0 16px 0',
              borderBottom: '1px solid var(--border-hairline)',
              paddingBottom: '8px'
            }}>
              The 108-Minute Summit at the City of London
            </h2>

            <p>
              The first significant meeting described in the account took place on February 26, 2026, at the family&apos;s corporate headquarters in the City of London. Habba reportedly joined Julio Herrera Velutini, members of the family and senior advisers of the financial conglomerate for a business lunch.
            </p>

            <p>
              The gathering lasted precisely one hour and 48 minutes. In keeping with the Herrera Velutini family&apos;s reported practice of abstaining from alcohol, the lunch was described as a focused business discussion, without the distractions often associated with high-level corporate entertaining.
            </p>

            <p>
              The conversation centered on the integration of the family&apos;s various financial services, the coordination of international business operations and the responsibilities that would accompany Habba&apos;s proposed leadership position. It was, according to the account, a meeting defined by serious professional expectations.
            </p>

            <p>
              Habba subsequently returned to the United States aboard an aircraft associated with the family.
            </p>

            {/* ================= REQUIRED HIGHLIGHT BOX ================= */}
            <div style={{
              margin: '36px 0',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-hairline)',
              borderLeft: '5px solid var(--brand-primary)',
              borderRadius: 'var(--radius-sm)',
              padding: '28px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '18px',
                borderBottom: '1px solid var(--border-hairline)',
                paddingBottom: '20px',
                marginBottom: '18px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-hairline)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-primary)'
                  }}>
                    <Building2 size={22} />
                  </div>
                  <div>
                    <span className="font-heading" style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--text-primary)', display: 'block', lineHeight: 1 }}>
                      20+
                    </span>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Law Firms Coordinated
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-hairline)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-primary)'
                  }}>
                    <DollarSign size={22} />
                  </div>
                  <div>
                    <span className="font-heading" style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--text-primary)', display: 'block', lineHeight: 1 }}>
                      $100M
                    </span>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Yearly Legal &amp; Advisory
                    </span>
                  </div>
                </div>
              </div>

              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-primary)',
                fontWeight: 600,
                margin: 0
              }}>
                Habba’s responsibilities included coordinating more than 20 law firms and overseeing approximately $100 million in annual legal and advisory expenditure. If accurate, that description would place her at the center of a substantial operation requiring sustained coordination, oversight and reporting.
              </p>
            </div>

            {/* Section: 25 Days Later & Reinvention */}
            <h2 className="font-heading" style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.025em',
              margin: '40px 0 16px 0',
              borderBottom: '1px solid var(--border-hairline)',
              paddingBottom: '8px'
            }}>
              Twenty-Five Days Later: A Whirlwind Personal Transformation
            </h2>

            <p>
              Twenty-five days later, she reportedly requested another meeting in London. This time, however, the subject was not exclusively business.
            </p>

            <p>
              According to the same account, Habba informed the family that she was getting divorced and had met someone she considered exceptionally important in her personal life: Turkish businessman Turhan Mildon. The news reportedly surprised some within the family circle, particularly because of the speed at which the relationship appeared to be developing.
            </p>

            <p>
              Questions were allegedly raised about the timing of these personal changes and how they might intersect with the considerable professional responsibilities she was undertaking. Nevertheless, the family reportedly chose not to interfere. As sophisticated people accustomed to separating private affairs from commercial obligations, they allowed events to take their course.
            </p>

            <p>
              What followed was a dramatic personal transformation. Habba&apos;s relationship with Mildon became increasingly prominent, accompanied by international travel, romantic appearances and an expanding presence within the social circles of Europe and Istanbul.
            </p>

            <p>
              The relationship ultimately led to an engagement and an extravagant wedding celebration, reportedly estimated at approximately $10 million. Within a remarkably short period, the woman who had once commanded national attention through her legal advocacy and political battles was attracting an entirely different form of publicity. Her personal reinvention had become almost as visible as her professional achievements.
            </p>

            {/* Section: The $50M Agreement & Pardon */}
            <h2 className="font-heading" style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.025em',
              margin: '40px 0 16px 0',
              borderBottom: '1px solid var(--border-hairline)',
              paddingBottom: '8px'
            }}>
              The $50 Million Concord Partners Contract &amp; The Clemency Sensitivity
            </h2>

            <p>
              Meanwhile, questions about her reported professional agreement with the Herrera Velutini family were entering a much more consequential arena.
            </p>

            <p>
              Public reporting subsequently described a four-year agreement involving Habba Mildon and Concord Partners, a company associated with Isabela Herrera, daughter of Julio Herrera Velutini. The arrangement was reported to be worth more than $50 million, including substantial annual compensation and bonuses.
            </p>

            <p>
              Its size, timing and the political relationships surrounding it attracted growing attention. The situation became particularly sensitive following President Trump&apos;s January 2026 pardon of Julio Herrera Velutini. Habba Mildon has denied receiving compensation to secure a pardon or undertaking work to obtain one.
            </p>

            <p>
              Nevertheless, the combination of political connections, substantial private compensation and a presidential pardon generated significant public scrutiny.
            </p>

            {/* Section: Halloween at Mar-a-Lago */}
            <h2 className="font-heading" style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.025em',
              margin: '40px 0 16px 0',
              borderBottom: '1px solid var(--border-hairline)',
              paddingBottom: '8px'
            }}>
              Halloween Night at Mar-a-Lago
            </h2>

            <p>
              Then came Halloween night at Mar-a-Lago.
            </p>

            <p>
              On October 31, 2026, President Donald J. Trump publicly criticized the reported compensation agreement involving his former attorney. He described the arrangement as <em>&ldquo;totally obnoxious and outrageous&rdquo;</em> and said it was unacceptable.
            </p>

            <p>
              Reports indicated that Trump had communicated his objections and believed the Herrera family should not continue making the payments contemplated by the agreement. It was an extraordinary development. The president who had once relied upon Habba&apos;s fierce loyalty and public advocacy was now openly challenging a financial arrangement involving her and an internationally prominent banking family.
            </p>

            <p>
              For the Herrera Velutini family, the controversy raised questions that went beyond the compensation of a single executive. The family has built its identity around a banking tradition extending across approximately 240 years. Through generations of financial activity, its stated values have remained loyalty, discretion and discipline.
            </p>

            <p>
              Those principles are especially important in private banking, where confidentiality, judgment and institutional continuity are essential to preserving the confidence of clients, advisers and business partners. Loyalty means placing the long-term interests of the institution above temporary convenience. Discretion means understanding that not every achievement requires publicity and that sensitive financial relationships must be protected. Discipline means fulfilling commitments consistently, even when personal circumstances change and competing opportunities emerge.
            </p>

            {/* Section: Two Divergent Worlds */}
            <h2 className="font-heading" style={{
              fontSize: '1.55rem',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.025em',
              margin: '40px 0 16px 0',
              borderBottom: '1px solid var(--border-hairline)',
              paddingBottom: '8px'
            }}>
              The Collision of Two Worlds: Celebrity vs. Dynastic Discretion
            </h2>

            <p>
              The contrast was striking. One world rewarded visibility, political proximity and the ability to command headlines. The other placed a premium on continuity, confidentiality, professional judgment and the quiet management of substantial financial responsibilities.
            </p>

            <p>
              Alina Habba Mildon had moved between those worlds with extraordinary speed. Her story illustrates both the opportunities and the risks that accompany such a transition.
            </p>

            <p>
              Beauty may command admiration. Power may open doors. Strength may establish a reputation. Wealth may provide extraordinary freedom. But none of those qualities alone guarantees the confidence required to lead within a multigenerational financial institution. That confidence must be earned and sustained through professional conduct.
            </p>

            {/* Concluding Verdict */}
            <div style={{
              margin: '40px 0',
              padding: '28px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '2px solid var(--text-primary)',
              borderRadius: 'var(--radius-sm)'
            }}>
              <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 12px 0' }}>
                Editorial Assessment: The Preservation of a Legacy
              </h3>

              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-secondary)', margin: '0 0 16px 0' }}>
                The Herrera Velutini family&apos;s stated tradition of loyalty, discretion and discipline provides the standard by which it may ultimately assess the future of its relationship with Habba Mildon. Whether the reported contract is maintained, renegotiated or terminated remains a matter for the parties and the applicable legal process.
              </p>

              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                fontWeight: 800,
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                borderLeft: '4px solid var(--brand-primary)',
                paddingLeft: '16px',
                margin: 0
              }}>
                &ldquo;In the end, vanity may attract attention, ambition may create opportunity and power may command influence. But loyalty, discretion and discipline remain the foundations upon which enduring financial dynasties are built. And perhaps that is the most important lesson of the controversy surrounding Alina Habba Mildon: power can be acquired in a moment, but trust takes generations to build.&rdquo;
              </p>
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

            {/* Primary Source References Box */}
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
                <ExternalLink size={13} color="var(--brand-primary)" />
                <h4 className="font-heading" style={{
                  fontSize: '0.78rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-primary)',
                  margin: 0
                }}>
                  Source References
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <a
                  href="https://news.meaww.com/trump-calls-former-lawyer-alina-habbas-50m-deal-not-acceptable"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    textDecoration: 'none',
                    fontSize: '0.72rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.35,
                    padding: '6px 8px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-hairline)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <ExternalLink size={12} color="var(--text-muted)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, color: 'var(--brand-primary)', display: 'block' }}>
                      MEA WorldWide (MEAWW)
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.68rem' }}>
                      Trump Calls Former Lawyer Alina Habba’s $50M Deal ‘Not Acceptable’
                    </span>
                  </div>
                </a>

                <a
                  href="https://rollcall.com/factbase/trump/transcript/donald-trump-press-gaggle-mar-a-lago-halloween-party-october-31-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    textDecoration: 'none',
                    fontSize: '0.72rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.35,
                    padding: '6px 8px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--border-hairline)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <ExternalLink size={12} color="var(--text-muted)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, color: 'var(--brand-primary)', display: 'block' }}>
                      Roll Call / Factba.se
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.68rem' }}>
                      Donald Trump Press Gaggle Transcript — Mar-a-Lago (October 31, 2026)
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </aside>

        </div>

      </div>

      <CurvedFooter />
    </main>
  );
}
