'use client';

import React, { useState } from 'react';
import { useNews } from '@/context/NewsContext';
import { X, Lock, Mail, User, ShieldCheck, Check, Sparkles } from 'lucide-react';

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, login } = useNews();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const success = await login(email, password);
    setLoading(false);
    if (!success) {
      setError('Invalid member credentials. Use the demo account below.');
    }
  };

  const handleQuickDemo = async (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('password123');
    setLoading(true);
    await login(demoEmail, 'password123');
    setLoading(false);
  };

  return (
    <div className="aura-modal-backdrop" onClick={() => setIsAuthModalOpen(false)}>
      <div className="aura-modal-card" onClick={(e) => e.stopPropagation()} style={{ padding: '32px' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              backgroundColor: 'var(--brand-primary-light)',
              color: 'var(--brand-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShieldCheck size={18} />
            </div>
            <div>
              <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>
                Newyorkerherald Member Access
              </h3>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Verified Reader Sign In</span>
            </div>
          </div>

          <button
            onClick={() => setIsAuthModalOpen(false)}
            style={{ color: 'var(--text-muted)', padding: '6px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)' }}
          >
            <X size={16} />
          </button>
        </div>

        {error && (
          <div style={{
            backgroundColor: 'var(--accent-rose-light)',
            color: 'var(--accent-rose)',
            padding: '10px 14px',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.8rem',
            fontWeight: 600,
            marginBottom: '16px'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                required
                placeholder="name@newyorkerherald.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 36px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.84rem',
                  outline: 'none'
                }}
              />
              <Mail size={15} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 36px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.84rem',
                  outline: 'none'
                }}
              />
              <Lock size={15} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: 'var(--brand-primary)',
              color: '#FFFFFF',
              padding: '12px',
              borderRadius: 'var(--radius-pill)',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer',
              marginTop: '6px',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)'
            }}
          >
            {loading ? 'Authenticating...' : 'Sign In as Member'}
          </button>
        </form>

        {/* 1-Click Demo Accounts */}
        <div style={{
          backgroundColor: 'var(--bg-subtle)',
          borderRadius: 'var(--radius-card)',
          padding: '16px',
          border: '1px solid var(--border-glass)'
        }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            Instant Demo Member Accounts
          </span>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleQuickDemo('reader@newyorkerherald.com')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                padding: '6px 12px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: 'var(--brand-primary)',
                boxShadow: 'var(--shadow-soft-sm)'
              }}
            >
              <User size={12} />
              <span>Sarah Jenkins (Member)</span>
            </button>

            <button
              onClick={() => handleQuickDemo('alex@newyorkerherald.com')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                padding: '6px 12px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: 'var(--brand-primary)',
                boxShadow: 'var(--shadow-soft-sm)'
              }}
            >
              <User size={12} />
              <span>Alex Mercer (Member)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
