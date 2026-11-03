export type ArticleCategory = 
  | 'US'
  | 'Politics'
  | 'U.S. Politics'
  | 'Business' 
  | 'Tech & AI' 
  | 'Entertainment' 
  | 'Sports' 
  | 'Health & Science'
  | 'Investigation'
  | 'Opinion';

export type Edition = 'Global' | 'US & Americas' | 'Europe' | 'Asia-Pacific' | 'Middle East';

export type ThemeMode = 'light' | 'dark' | 'sand';
export type FontSize = 'sm' | 'md' | 'lg';

export interface Author {
  name: string;
  role: string;
  avatar?: string;
  bureau?: string;
  bio?: string;
  beat?: string;
  articlesCount?: number;
  twitter?: string;
  email?: string;
  awards?: string[];
  education?: string;
}

export interface Article {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  body?: string;
  category: ArticleCategory;
  edition?: string[];
  author: Author;
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  imageCaption?: string;
  imageCredit?: string;
  isLead?: boolean;
  isBreaking?: boolean;
  isInvestigative?: boolean;
  bullets?: string[];
  audioDuration?: string;
  commentCount?: number;
  tags?: string[];
  views?: string;
}

export interface LiveWireItem {
  id: string;
  time: string;
  date: string;
  kicker: string;
  headline: string;
  category: ArticleCategory;
  isUrgent?: boolean;
  summary?: string;
  readUrl?: string;
  imageUrl?: string;
}

export interface OpinionColumn {
  id: string;
  authorName: string;
  authorTitle: string;
  authorAvatar: string;
  columnTitle: string;
  headline: string;
  quoteSnippet: string;
  category: string;
  date: string;
  readTime: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  views: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  publishedAt: string;
  showName?: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  showName: string;
  episodeNumber: number;
  duration: string;
  publishedAt: string;
  description: string;
  thumbnail: string;
  audioUrl?: string;
  hostName?: string;
  hostRole?: string;
}

export interface FactCheckItem {
  id: string;
  claimant: string;
  claim: string;
  verdict?: string;
  ruling?: string;
  verdictSummary?: string;
  explanation?: string;
  source?: string;
  date: string;
  author?: string;
  sourcesCount?: number;
}

export interface PhotoStory {
  id: string;
  title: string;
  photographer?: string;
  credit?: string;
  location?: string;
  date?: string;
  photoCount?: number;
  coverImage?: string;
  imageUrl?: string;
  caption?: string;
  description?: string;
}

export interface Comment {
  id: string;
  articleId: string;
  authorName: string;
  authorRole: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
  likes: number;
}

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  createdAt: string;
}
