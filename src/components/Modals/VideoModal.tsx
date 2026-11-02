'use client';

import React, { useRef, useEffect } from 'react';
import { useNews } from '@/context/NewsContext';
import { X, ExternalLink, Play, Film } from 'lucide-react';

export default function VideoModal() {
  const { activeVideo, setActiveVideo } = useNews();

  if (!activeVideo) return null;

  const isYouTube = activeVideo.videoUrl.includes('youtube.com') || activeVideo.videoUrl.includes('youtu.be');
  const youtubeWatchUrl = isYouTube ? activeVideo.videoUrl.replace('/embed/', '/watch?v=') : null;

  return (
    <div className="aura-modal-backdrop" onClick={() => setActiveVideo(null)}>
      <div 
        className="aura-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '860px',
          backgroundColor: '#0A0E1A',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="aura-pill aura-pill-blue" style={{ fontSize: '0.68rem' }}>
              {activeVideo.category}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
              {activeVideo.duration}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {youtubeWatchUrl && (
              <a
                href={youtubeWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <span>YouTube</span>
                <ExternalLink size={11} />
              </a>
            )}
            <button
              onClick={() => setActiveVideo(null)}
              style={{ color: '#94A3B8', padding: '6px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Video Player (Direct YouTube Frame) */}
        <div style={{ position: 'relative', width: '100%', backgroundColor: '#000000', paddingBottom: '56.25%' }}>
          <iframe
            src={`${activeVideo.videoUrl}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={activeVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
          />
        </div>

        {/* Description */}
        <div style={{ padding: '24px' }}>
          <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '8px' }}>
            {activeVideo.title}
          </h3>

          <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '14px' }}>
            {activeVideo.description}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.74rem', color: '#64748B', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '12px' }}>
            <span>Published {activeVideo.publishedAt}</span>
            <span>{activeVideo.views}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
