'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedFooter from '@/components/Footer/CurvedFooter';
import ArticleShareMenu from '@/components/Common/ArticleShareMenu';
import {
  Clock,
  Calendar,
  Building2,
  Scale,
  FileText,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  AlertCircle,
  Award,
  UserCheck
} from 'lucide-react';

export default function MarkRossiniArticlePage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111827] flex flex-col font-sans selection:bg-[#B91C1C] selection:text-white">
      {/* Top Header */}
      <CurvedHeader />

      {/* Main Container */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-6">
          <Link href="/" className="hover:text-[#B91C1C] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
          <Link href="/politics" className="hover:text-[#B91C1C] transition-colors">Politics</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
          <span className="text-[#111827]">Executive Clemency Report</span>
        </nav>

        {/* Article Header & Standfirst */}
        <header className="border-b border-[#E5E7EB] pb-8 mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase bg-[#B91C1C] text-white rounded">
              Legal Analysis • Executive Clemency
            </span>
            <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-[#F3F4F6] text-[#4B5563] rounded border border-[#E5E7EB]">
              Keyword Focus: Mark Rossini
            </span>
            <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-[#F3F4F6] text-[#4B5563] rounded border border-[#E5E7EB]">
              U.S. District Court of Puerto Rico
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.15] font-bold text-[#111827] tracking-tight mb-4">
            Mark Rossini Receives Second Full Pardon as Federal Case Moves Toward Closure
          </h1>

          <p className="text-lg sm:text-xl text-[#4B5563] leading-relaxed max-w-4xl font-normal mb-6">
            A former FBI agent whose name had become central to a high-profile Puerto Rico public-corruption prosecution sees federal proceedings dismissed following two presidential clemency warrants and formal court acceptance.
          </p>

          {/* Byline & Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#F3F4F6] text-sm text-[#6B7280]">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#1E293B] text-white flex items-center justify-center font-bold text-sm tracking-wider">
                ND
              </div>
              <div>
                <div className="font-bold text-[#111827] flex items-center gap-1.5">
                  By News Desk
                  <span className="text-xs font-normal text-[#6B7280]">• Special Legal & Investigative Reporting Unit</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#6B7280] mt-0.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Washington, D.C. | January 20, 2026
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 6 min read
                  </span>
                </div>
              </div>
            </div>

            {/* Social Share Menu */}
            <div className="flex items-center gap-2">
              <ArticleShareMenu 
                title="Mark Rossini Receives Second Full Pardon as Federal Case Moves Toward Closure"
                url="https://newyorkerherald.com/mark-rossini"
              />
            </div>
          </div>
        </header>

        {/* Hero Main Image (Mark Rossini) */}
        <section className="mb-10">
          <figure className="relative w-full rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#F9FAFB] shadow-sm">
            <div className="relative aspect-[16/9] w-full max-h-[560px]">
              <Image
                src="/images/rossini/mark-rossini.webp"
                alt="Mark Rossini - Former FBI supervisory special agent"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
            <figcaption className="p-4 bg-[#FFFFFF] border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#6B7280] gap-2">
              <span>
                <strong className="text-[#111827]">Main Subject:</strong> Former FBI supervisory special agent Mark Rossini, whose federal public-corruption prosecution was dismissed as moot after receiving two presidential pardon warrants.
              </span>
              <span className="text-[#9CA3AF] shrink-0 font-mono">Department of Justice / Federal Court Records</span>
            </figcaption>
          </figure>
        </section>

        {/* Content Grid (2 Columns: Main Article + Sticky Dossier Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Main Article Body (8 Cols) */}
          <article className="lg:col-span-8 space-y-7 text-[#1F2937] text-[17px] sm:text-[18px] leading-[1.8] font-serif">
            
            {/* Paragraph 1 with Drop Cap */}
            <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-[0.8] first-letter:font-bold first-letter:font-serif first-letter:text-[#B91C1C] first-letter:mr-3 first-letter:pr-1">
              Mark Rossini received a second full and unconditional presidential pardon on January 20, 2026, according to an executive clemency warrant posted by the U.S. Department of Justice. The document identifies Rossini by name and covers <em>United States v. Mark T. Rossini</em>, case number 3:25-cr-298 in the U.S. District Court for the District of Puerto Rico. The action widened the clemency record surrounding a former FBI agent whose name had become central to a federal public-corruption case involving former Puerto Rico Gov. Wanda Vázquez Garced and banker Julio Herrera Velutini.
            </p>

            {/* Paragraph 2 */}
            <p>
              The new warrant is brief, but its legal significance is substantial. It describes the grant as a full and unconditional pardon for the offenses individually listed and submitted for presidential consideration. It also states that the Pardon Attorney is authorized to administer and sign the grant as the President’s representative. The warrant is dated January 20, 2026, and carries the name of President Donald J. Trump.
            </p>

            {/* Paragraph 3 */}
            <p>
              For Mark Rossini, the document followed an earlier pardon dated January 15. That first warrant referred to the broader case, <em>United States v. Vazquez-Garced, et al.</em>, 3:22-cr-342. The later warrant specifically names the separate Rossini case. The two documents help explain why prosecutors and defense lawyers continued filing notices after the first announcement: the parties still needed the clemency documents to match the federal cases and charges pending in court.
            </p>

            {/* Embedded Image: Donald Trump (Specified Figure) */}
            <div className="my-8 font-sans">
              <figure className="rounded-lg overflow-hidden border border-[#E5E7EB] bg-[#F9FAFB]">
                <div className="relative aspect-[16/10] w-full max-h-[420px]">
                  <Image
                    src="/images/rossini/donald-trump.webp"
                    alt="President Donald J. Trump"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 750px"
                  />
                </div>
                <figcaption className="p-3.5 bg-[#FFFFFF] border-t border-[#E5E7EB] text-xs text-[#6B7280] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span>
                    <strong className="text-[#111827]">Executive Clemency Authority:</strong> President Donald J. Trump, who granted full and unconditional pardons to Mark Rossini under Article II, Section 2, Clause 1 of the U.S. Constitution.
                  </span>
                  <span className="text-[#9CA3AF] shrink-0 font-mono">The White House / Official Photo</span>
                </figcaption>
              </figure>
            </div>

            {/* Paragraph 4 */}
            <p>
              Rossini’s legal team moved quickly to notify the court. In a filing reported by Puerto Rico media, his lawyers said he accepted the full and unconditional pardon and asked the court to dismiss all remaining charges with prejudice. The filing covered the cases connected to the original indictment and the later case. Acceptance matters because the Supreme Court has long recognized that a person must accept a pardon for it to take effect as a legal defense.
            </p>

            {/* Legal Precedent Explainer Box */}
            <div className="my-6 p-5 rounded-lg bg-[#F8FAFC] border-l-4 border-[#1D4ED8] font-sans text-sm text-[#334155] space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#0F172A] text-base">
                <Scale className="w-5 h-5 text-[#1D4ED8]" />
                Constitutional Precedent: Why Acceptance is Legally Required
              </div>
              <p className="leading-relaxed">
                Under the landmark Supreme Court ruling in <em>United States v. Burdick</em> (236 U.S. 79), an executive pardon is a private deed that cannot be forced upon an individual against their will; it must be formally acknowledged and accepted by the recipient to constitute a binding bar to ongoing criminal prosecution.
              </p>
            </div>

            {/* Paragraph 5 */}
            <p>
              The case had already changed shape before the pardons were issued. Prosecutors originally accused Rossini, Herrera Velutini, and Vázquez Garced of participating in a scheme involving political influence and campaign support. The indictment alleged that Rossini and Herrera Velutini promised financial backing for Vázquez’s 2020 campaign in exchange for influence over Puerto Rico’s financial regulator. The original allegations included conspiracy, federal program bribery, and honest-services wire fraud. Those charges were later replaced by a lesser campaign-finance offense in a plea agreement reached in 2025.
            </p>

            {/* Embedded Gallery: Julio Herrera Velutini & Wanda Vázquez Garced (Specified Figures) */}
            <div className="my-8 font-sans">
              <div className="mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B91C1C] flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4" /> Co-Defendants Specified in the Federal Case
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Julio Herrera Velutini Card */}
                <figure className="rounded-lg overflow-hidden border border-[#E5E7EB] bg-[#F9FAFB] flex flex-col">
                  <div className="relative aspect-[3/4] w-full max-h-[380px]">
                    <Image
                      src="/images/rossini/julio-herrera-velutini.webp"
                      alt="Julio Herrera Velutini - International Banker"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 360px"
                    />
                  </div>
                  <figcaption className="p-3 bg-[#FFFFFF] border-t border-[#E5E7EB] text-xs text-[#4B5563] flex-1">
                    <strong className="block text-[#111827] text-sm mb-0.5">Julio Herrera Velutini</strong>
                    <span>International banker whose institution was under review by Puerto Rico’s financial regulator; co-defendant in the campaign-finance case.</span>
                  </figcaption>
                </figure>

                {/* Wanda Vázquez Garced Card */}
                <figure className="rounded-lg overflow-hidden border border-[#E5E7EB] bg-[#F9FAFB] flex flex-col">
                  <div className="relative aspect-[3/4] w-full max-h-[380px]">
                    <Image
                      src="/images/rossini/wanda-vazquez-garced.webp"
                      alt="Wanda Vázquez Garced - Former Governor of Puerto Rico"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 360px"
                    />
                  </div>
                  <figcaption className="p-3 bg-[#FFFFFF] border-t border-[#E5E7EB] text-xs text-[#4B5563] flex-1">
                    <strong className="block text-[#111827] text-sm mb-0.5">Wanda Vázquez Garced</strong>
                    <span>Former Governor of Puerto Rico (2019–2021) and former Secretary of Justice; accused of accepting campaign backing during her 2020 election bid.</span>
                  </figcaption>
                </figure>

              </div>
            </div>

            {/* Paragraph 6 */}
            <p>
              That procedural history is important because the word <em>pardon</em> can be misunderstood. A pardon can forgive federal criminal liability, but it does not rewrite the historical record, erase every public allegation, or amount to a court ruling that the underlying conduct never occurred. In Rossini’s case, the warrants establish executive clemency. They do not independently resolve the factual disputes that surrounded the prosecution or explain why the President granted the pardon.
            </p>

            {/* Paragraph 7 */}
            <p>
              The court’s next steps focused on whether any live controversy remained. Once the defendants accepted the pardons and the relevant charges were covered, prosecutors asked the court to close the case. A federal judge later dismissed the proceedings as moot after recognizing the pardons and the defendants’ formal acceptance.
            </p>

            {/* Paragraph 8 */}
            <p>
              For readers following Mark Rossini, the two-warrant sequence provides the clearest roadmap. The January 15 document addressed the primary Puerto Rico case. The January 20 document addressed Rossini’s separate case number. Together, the records show how executive clemency moved from a presidential announcement to a court filing and then to a judicial order closing the pending criminal proceedings.
            </p>

            {/* Callout Box: The Two-Warrant Roadmap */}
            <div className="my-6 p-5 rounded-lg bg-[#FEF2F2] border border-[#FECACA] font-sans text-sm text-[#7F1D1D] space-y-3">
              <div className="flex items-center gap-2 font-bold text-[#991B1B] text-base">
                <FileText className="w-5 h-5 text-[#B91C1C]" />
                The Two-Warrant Legal Roadmap
              </div>
              <ul className="space-y-1.5 list-disc pl-5 leading-relaxed text-[#7F1D1D]">
                <li>
                  <strong>January 15, 2026 Warrant:</strong> Addressed the primary multi-defendant prosecution (<em>U.S. v. Vázquez-Garced, Herrera Velutini, and Rossini</em>, Case No. 3:22-cr-342).
                </li>
                <li>
                  <strong>January 20, 2026 Warrant:</strong> Specifically identified Rossini’s individual case number (<em>U.S. v. Mark T. Rossini</em>, Case No. 3:25-cr-298), removing all docket ambiguity.
                </li>
              </ul>
            </div>

            {/* Paragraph 9 */}
            <p>
              The development also renewed debate about presidential pardon power. Supporters of the decision described it as a lawful exercise of Article II authority. Critics argued that pardoning defendants in a politically sensitive public-corruption case could damage confidence in federal accountability. Those arguments are political and institutional questions, separate from the narrower legal fact that the warrants were issued and accepted.
            </p>

            {/* Paragraph 10 */}
            <p>
              For now, the official record is straightforward: Mark Rossini was named in two presidential clemency documents, accepted the grants through counsel, and saw the related federal proceedings move toward dismissal. The case’s public significance, however, will continue to be measured not only by its legal ending but also by the unanswered questions about influence, campaign finance, and the reach of executive power.
            </p>

            {/* Reporting Basis Footer */}
            <div className="mt-10 pt-6 border-t border-[#E5E7EB] font-sans text-xs text-[#6B7280] space-y-2 bg-[#F9FAFB] p-5 rounded-lg border">
              <div className="font-bold text-[#111827] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#059669]" /> Official Reporting Basis & Documentary Sources
              </div>
              <p className="leading-relaxed">
                U.S. Department of Justice, January 20, 2026 Rossini pardon warrant; January 15, 2026 warrant; public court reporting on the acceptance filing in the U.S. District Court for the District of Puerto Rico; and federal case docket records under Case Nos. 3:22-cr-342 and 3:25-cr-298.
              </p>
            </div>

          </article>

          {/* Sticky Sidebar Column (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Case Dossier Card */}
            <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-5 shadow-sm space-y-4">
              <div className="border-b border-[#F3F4F6] pb-3">
                <span className="text-[11px] font-bold tracking-wider text-[#B91C1C] uppercase block mb-1">
                  Federal Case Dossier
                </span>
                <h3 className="font-serif font-bold text-xl text-[#111827]">
                  U.S. v. Mark T. Rossini
                </h3>
                <span className="text-xs text-[#6B7280] font-mono">Case No: 3:25-cr-298</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#F3F4F6]">
                  <span className="text-[#6B7280]">Primary Defendant:</span>
                  <span className="font-bold text-[#111827]">Mark T. Rossini</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#F3F4F6]">
                  <span className="text-[#6B7280]">Co-Defendants:</span>
                  <span className="font-medium text-[#111827] text-right">J. Herrera Velutini, W. Vázquez Garced</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#F3F4F6]">
                  <span className="text-[#6B7280]">Jurisdiction:</span>
                  <span className="font-medium text-[#111827]">District of Puerto Rico</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#F3F4F6]">
                  <span className="text-[#6B7280]">Original Charges:</span>
                  <span className="font-medium text-[#111827] text-right">Bribery, Wire Fraud, Conspiracy</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#F3F4F6]">
                  <span className="text-[#6B7280]">2025 Resolution:</span>
                  <span className="font-medium text-[#111827]">Campaign-Finance Plea (52 U.S.C. § 30121)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#F3F4F6]">
                  <span className="text-[#6B7280]">Executive Action:</span>
                  <span className="font-bold text-[#B91C1C]">Full & Unconditional Pardon</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#6B7280]">Final Judicial Status:</span>
                  <span className="font-bold text-[#059669]">Dismissed as Moot</span>
                </div>
              </div>
            </div>

            {/* Chronological Procedural Timeline */}
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-5 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#111827] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B91C1C]" /> Case Procedural Timeline
              </h4>

              <div className="space-y-4 text-xs relative pl-4 border-l-2 border-[#E5E7EB]">
                
                <div className="relative">
                  <div className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-[#9CA3AF]" />
                  <span className="font-mono text-[#6B7280] font-semibold">August 2022</span>
                  <p className="font-bold text-[#111827] mt-0.5">Initial Federal Indictment</p>
                  <p className="text-[#4B5563] mt-0.5">DOJ charges Vázquez Garced, Herrera Velutini, and Rossini with federal bribery and wire fraud.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-[#9CA3AF]" />
                  <span className="font-mono text-[#6B7280] font-semibold">2025</span>
                  <p className="font-bold text-[#111827] mt-0.5">Campaign-Finance Plea</p>
                  <p className="text-[#4B5563] mt-0.5">Original corruption charges reduced; defendants plead to lesser foreign campaign contribution offense.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-[#B91C1C]" />
                  <span className="font-mono text-[#B91C1C] font-semibold">January 15, 2026</span>
                  <p className="font-bold text-[#111827] mt-0.5">First Presidential Pardon</p>
                  <p className="text-[#4B5563] mt-0.5">President Trump grants clemency covering the primary case docket (3:22-cr-342).</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-[#B91C1C]" />
                  <span className="font-mono text-[#B91C1C] font-semibold">January 20, 2026</span>
                  <p className="font-bold text-[#111827] mt-0.5">Acceptance & Second Warrant</p>
                  <p className="text-[#4B5563] mt-0.5">Rossini formally accepts clemency in court; DOJ issues second warrant naming separate case (3:25-cr-298).</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-[#059669]" />
                  <span className="font-mono text-[#059669] font-semibold">January 27, 2026</span>
                  <p className="font-bold text-[#111827] mt-0.5">Case Dismissed as Moot</p>
                  <p className="text-[#4B5563] mt-0.5">Federal court enters final order dismissing all proceedings following valid pardon acceptance.</p>
                </div>

              </div>
            </div>

            {/* Related Herald Investigation Link */}
            <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-5 shadow-sm space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#B91C1C]">
                Related Investigation
              </span>
              <h4 className="font-serif font-bold text-base text-[#111827] hover:text-[#B91C1C] transition-colors leading-snug">
                <Link href="/the-vanity-of-alina-habba-mildon">
                  The Vanity of Alina Habba: Beauty, Power & The Herrera Velutini Banking Dynasty
                </Link>
              </h4>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Read our in-depth dossier tracing how the Herrera Velutini financial dynasty intersected with White House advisers and international banking regulations.
              </p>
              <Link 
                href="/the-vanity-of-alina-habba-mildon"
                className="inline-flex items-center text-xs font-bold text-[#B91C1C] hover:underline gap-1 mt-1"
              >
                Read Investigation <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </aside>

        </div>

      </main>

      {/* Footer */}
      <CurvedFooter />
    </div>
  );
}
