'use client';

import React from 'react';
import Link from 'next/link';
import { Camera, MapPin, ArrowRight } from 'lucide-react';

export default function PhotojournalismGallery() {
  const photoEssays = [
    {
      id: 'photo-1',
      title: 'Dawn Over the Golden Gate: Transit Fleet Electrification',
      location: 'San Francisco, California',
      photographer: 'Elena Rostova / Visuals Bureau',
      date: 'Aug 16, 2026',
      imageUrl: '/images/news/capitol-hill-intensifies-ai-oversight-as-frontier-labs-deploy-autonomous-agentic-software.webp',
      caption: 'Automated electric transit ferries commence morning commute operations along the bay as technological corridors integrate renewable microgrids.'
    },
    {
      id: 'photo-2',
      title: 'Geothermal Borehole Telemetry in the Yellowstone Volcanic Plateau',
      location: 'Wyoming & Montana',
      photographer: 'Dr. Rebecca Foster / Science Field Desk',
      date: 'Aug 15, 2026',
      imageUrl: '/images/news/usgs-supervolcano-research-reveals-yellowstone-eruptions-occur-in-complex-multi-pulse-sequences.webp',
      caption: 'Seismic imaging sensors deploy deep borehole telemetry to map subterranean magma chamber pressure dynamics in realtime.'
    },
    {
      id: 'photo-3',
      title: 'Starbase Cryogenic Assembly Bays and Orbital Launch Mounts',
      location: 'Boca Chica, Texas',
      photographer: 'Dr. Neil Campbell / Aerospace Desk',
      date: 'Aug 14, 2026',
      imageUrl: '/images/news/spacex-releases-landmark-financial-disclosures-as-starlink-orbital-network-surpasses-6-000-satellites.webp',
      caption: 'Engineers inspect super-heavy cryogenic propellant transfer valves prior to high-altitude flight readiness tests.'
    }
  ];

  return (
    <section style={{ padding: '24px 0 32px 0' }}>
      <div className="aura-container">
        
        {/* Section Header */}
        <div className="section-header">
          <h3 className="section-title">
            Visual Journalism
          </h3>

          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Dispatch Photography From The Frontlines
          </span>
        </div>

        {/* 3-Column Photo Essay Gallery */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {photoEssays.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="aura-img-wrap" style={{ height: '220px', width: '100%', marginBottom: '10px' }}>
                <img src={item.imageUrl} alt={item.title} className="aura-card-img" />
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  color: '#FFFFFF',
                  padding: '2px 7px',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.64rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px'
                }}>
                  <MapPin size={10} />
                  <span>{item.location}</span>
                </div>
              </div>

              <h4 className="font-heading" style={{
                fontSize: '0.9rem',
                fontWeight: 800,
                lineHeight: 1.3,
                color: 'var(--text-primary)',
                marginBottom: '4px'
              }}>
                {item.title}
              </h4>

              <p style={{
                fontSize: '0.76rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.4,
                marginBottom: '8px'
              }}>
                {item.caption}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                marginTop: 'auto',
                borderTop: '1px solid var(--border-rule)',
                paddingTop: '6px'
              }}>
                <span>Photo: {item.photographer}</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
