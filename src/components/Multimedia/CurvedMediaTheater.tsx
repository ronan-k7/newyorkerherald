'use client';

import React from 'react';
import { MULTIMEDIA_VIDEOS, PODCAST_EPISODES } from '@/data/newsData';
import { useNews } from '@/context/NewsContext';
import { Play, Film, Radio, Clock } from 'lucide-react';

export default function CurvedMediaTheater() {
  const { setActiveVideo } = useNews();

  return (
    <section style={{ padding: '24px 0 32px 0' }}>
      <div className="aura-container">
        
        {/* Section Header */}
        <div className="section-header">
          <h3 className="section-title">
            Multimedia
          </h3>

          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Curated Studio & Newsroom Video
          </span>
        </div>

        {/* 3 Video Columns (No Card Outlines) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '24px'
        }}>
          {MULTIMEDIA_VIDEOS.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="aura-card-interactive"
            >
              {/* Frame */}
              <div style={{ position: 'relative', height: '160px', width: '100%', marginBottom: '8px', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                <img src={vid.thumbnail} alt={vid.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}>
                  <Play size={14} fill="#FFFFFF" style={{ marginLeft: '2px' }} />
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '6px',
                  right: '6px',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  color: '#FFFFFF',
                  padding: '2px 6px',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px'
                }}>
                  <Clock size={9} />
                  <span>{vid.duration}</span>
                </div>
              </div>

              <span className="aura-pill" style={{ marginBottom: '4px' }}>
                {vid.category} • {vid.views}
              </span>

              <h4 className="font-heading" style={{ fontSize: '0.88rem', fontWeight: 800, lineHeight: 1.25, color: 'var(--text-primary)', marginBottom: '4px' }}>
                {vid.title}
              </h4>

              <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.35, marginTop: 'auto', margin: 0 }}>
                {vid.description.slice(0, 85)}...
              </p>
            </div>
          ))}
        </div>

        {/* Podcasts Stream (No Outlines) */}
        <div style={{
          borderTop: '1px solid var(--border-rule)',
          paddingTop: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
            <Radio size={13} color="var(--brand-primary)" />
            <h4 className="font-heading" style={{ fontSize: '0.86rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)', textTransform: 'uppercase' }}>
              Daily Intelligence Audio Streams
            </h4>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px'
          }}>
            {PODCAST_EPISODES.map((pod) => (
              <div
                key={pod.id}
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
              >
                <img src={pod.thumbnail} alt={pod.title} style={{ width: '44px', height: '44px', borderRadius: '4px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.62rem', color: 'var(--brand-primary)', fontWeight: 700, display: 'block' }}>
                    {pod.showName} • Ep. {pod.episodeNumber}
                  </span>
                  <h5 className="font-heading" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2, margin: '1px 0' }}>
                    {pod.title}
                  </h5>
                  <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>{pod.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
