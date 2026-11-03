'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Article, ThemeMode, FontSize, VideoItem, UserAccount } from '@/types/news';

interface NewsContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  fontScale: FontSize;
  setFontScale: (size: FontSize) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  activeVideo: VideoItem | null;
  setActiveVideo: (video: VideoItem | null) => void;
  currentUser: UserAccount | null;
  setCurrentUser: (user: UserAccount | null) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  subscribeToNewsletter: (email: string) => Promise<boolean>;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function NewsProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('light');
  const [fontScale, setFontScaleState] = useState<FontSize>('lg');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.fontSize = '17px';

    // Check user session
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setCurrentUser(data.user);
        }
      })
      .catch(() => {});
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('aura_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const setFontScale = (newScale: FontSize) => {
    setFontScaleState(newScale);
    localStorage.setItem('aura_font', newScale);
    if (newScale === 'sm') document.documentElement.style.fontSize = '14.5px';
    if (newScale === 'md') document.documentElement.style.fontSize = '15.5px';
    if (newScale === 'lg') document.documentElement.style.fontSize = '17px';
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.success && data.user) {
        setCurrentUser(data.user);
        setIsAuthModalOpen(false);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {}
    setCurrentUser(null);
  };

  const subscribeToNewsletter = async (email: string): Promise<boolean> => {
    try {
      const res = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      return data.success;
    } catch {
      return false;
    }
  };

  return (
    <NewsContext.Provider
      value={{
        theme,
        setTheme,
        fontScale,
        setFontScale,
        isSearchOpen,
        setIsSearchOpen,
        activeVideo,
        setActiveVideo,
        currentUser,
        setCurrentUser,
        isAuthModalOpen,
        setIsAuthModalOpen,
        login,
        logout,
        subscribeToNewsletter
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
}
