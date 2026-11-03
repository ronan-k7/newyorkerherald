'use client';

import React from 'react';
import CurvedHeader from '@/components/Header/CurvedHeader';
import CurvedBentoHero from '@/components/Hero/CurvedBentoHero';
import ExecutiveDigest from '@/components/Sections/ExecutiveDigest';
import CurvedDepartmentPortals from '@/components/CategorySection/CurvedDepartmentPortals';
import InvestigativeDossier from '@/components/Sections/InvestigativeDossier';
import PhotojournalismGallery from '@/components/Sections/PhotojournalismGallery';
import WeekendLongReads from '@/components/Sections/WeekendLongReads';
import CurvedMediaTheater from '@/components/Multimedia/CurvedMediaTheater';
import CurvedOpinionStream from '@/components/Opinion/CurvedOpinionStream';
import CurvedFooter from '@/components/Footer/CurvedFooter';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CurvedHeader activeCategory="All" />
      
      <main style={{ flex: 1 }}>
        {/* 1. Main Broadsheet Hero (Top Stories Command Center + Market Strip) */}
        <CurvedBentoHero />

        {/* 2. Top Stories: Executive Speed-Read Briefing */}
        <ExecutiveDigest />

        {/* 3. Core Department Portals: U.S., Politics, Business & Economy, Tech, Entertainment, Sports, Science */}
        <CurvedDepartmentPortals />

        {/* 4. Investigation: Deep-Dive Investigative Dossier */}
        <InvestigativeDossier />

        {/* 5. Photojournalism & Visual Field Essays */}
        <PhotojournalismGallery />

        {/* 6. Weekend Long-Reads & Literary Essays */}
        <WeekendLongReads />

        {/* 7. Multimedia: Visual Documentaries & Audio Briefs */}
        <CurvedMediaTheater />

        {/* 8. Opinion: Columns & Perspectives */}
        <CurvedOpinionStream />
      </main>

      <CurvedFooter />
    </div>
  );
}
