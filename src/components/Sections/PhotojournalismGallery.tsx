'use client';

import React from 'react';
import Link from 'next/link';
import { Camera, MapPin } from 'lucide-react';

export default function PhotojournalismGallery() {
  const photoEssays = [
    {
      id: 'photo-1',
      title: 'Pacific Fleet Deployment: Dawn Flight Deck Operations',
      location: 'San Diego Naval Station, California',
      photographer: 'David Miller / Visuals Desk',
      date: 'Nov 2, 2026',
      imageUrl: '/images/news/white-house-orders-realignment-of-joint-military-exercises-and-pacific-deployments-amid-high-stakes-diplomacy.webp',
      caption: 'Naval aviators conduct comprehensive pre-flight safety inspections on the carrier flight deck during scheduled Pacific maneuvers.'
    },
    {
      id: 'photo-2',
      title: 'Mojave Desert Telemetry: Critical Minerals Field Testing',
      location: 'Mountain Pass, California',
      photographer: 'Dr. Rebecca Foster / Science Field Desk',
      date: 'Nov 1, 2026',
      imageUrl: '/images/news/bipartisan-congressional-coalition-finalizes-critical-minerals-strategic-stockpile-legislation.webp',
      caption: 'Geological survey engineers monitor extraction purity sensors at a domestic rare-earth refining facility in San Bernardino County.'
    },
    {
      id: 'photo-3',
      title: 'Metro Infrastructure Expansion Ahead of LA28 Games',
      location: 'Los Angeles, California',
      photographer: 'Elena Rostova / Visuals Bureau',
      date: 'Nov 1, 2026',
      imageUrl: '/images/news/la28-olympic-organizers-secure-multi-billion-dollar-founding-corporate-sponsorships-with-delta-honda.webp',
      caption: 'Transit crews install high-speed automated signaling corridors connecting downtown transit hubs with future international sports venues.'
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
        <div className="photojournalism-grid">
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
                lineHeight: 1.45,
                marginBottom: '10px'
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
                <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <Camera size={11} /> {item.photographer}
                </span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
