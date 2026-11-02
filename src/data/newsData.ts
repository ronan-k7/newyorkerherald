import { Article, LiveWireItem, OpinionColumn, VideoItem, PodcastEpisode, FactCheckItem, PhotoStory } from '@/types/news';

export const BREAKING_NEWS_ITEMS = [
  {
    id: 'brk-1',
    kicker: 'NATIONAL SECURITY',
    headline: 'White House Orders Realignment of Joint Military Exercises and Pacific Defense Deployments',
    time: '6m ago',
    url: '#lead-story'
  },
  {
    id: 'brk-2',
    kicker: 'ENERGY & MARKETS',
    headline: 'Crude Oil Approaches $90 a Barrel Amid Prolonged Diplomatic Stalemate in the Middle East',
    time: '22m ago',
    url: '#category-Business & Economy'
  }
];

export const TRENDING_TAGS = [
  '#PacificDefensePolicy',
  '#CrudeOil90',
  '#AIGovernanceHearings',
  '#SpaceXFinancials',
  '#LA28Olympics',
  '#YellowstoneResearch'
];

export const LEAD_ARTICLE: Article = {
  id: 'lead-1',
  title: 'White House Orders Realignment of Joint Military Exercises and Pacific Deployments Amid High-Stakes Diplomacy',
  kicker: 'NATIONAL SECURITY & PACIFIC DEFENSE',
  summary: 'In a significant recalibration of U.S. Indo-Pacific posture, the administration has directed targeted reductions in large-scale joint maneuvers with South Korea, seeking to preserve bilateral diplomatic channels while defense officials emphasize allied combat readiness across the region.',
  category: 'U.S. Politics',
  edition: ['US & Americas', 'Global'],
  author: {
    name: 'Sarah Mitchell & David Vance',
    role: 'Chief National Security Correspondents, Washington Bureau',
    avatar: '/images/authors/sarah_mitchell.jpg'
  },
  publishedAt: 'Updated 12 minutes ago',
  readTime: '6 min read',
  imageUrl: '/images/news/white-house-orders-realignment-of-joint-military-exercises-and-pacific-deployments-amid-high-stakes-diplomacy.webp',
  imageCaption: 'The United States Capitol in Washington, where Senate Armed Services Committee leaders convened for an emergency briefing on Indo-Pacific troop deployments.',
  imageCredit: 'Associated Press / J. Scott Applewhite',
  isLead: true,
  commentCount: 0,
  bullets: [
    'Directs a shift toward decentralized, computer-simulated command exercises to de-escalate regional tensions along the Korean Peninsula.',
    'Congressional Armed Services committees schedule bipartisan oversight hearings regarding long-term deterrence posture in the Pacific.',
    'Allied defense ministries in Seoul and Tokyo reaffirm bilateral security cooperation frameworks across missile defense tracking networks.'
  ],
  tags: ['U.S. Politics', 'National Security', 'Defense', 'Indo-Pacific']
};

export const SECONDARY_LEAD_STORIES: Article[] = [
  {
    id: 'sec-1',
    title: 'Crude Oil Climbs Toward $90 as Global Supply Concerns Mount Over Stalled Middle East Talks',
    kicker: 'ENERGY MARKETS',
    summary: 'Brent and WTI crude contracts post third consecutive weekly gains, putting renewed focus on Federal Reserve inflation benchmarks and airline operating margins.',
    category: 'Business',
    edition: ['US & Americas', 'Global'],
    author: {
      name: 'Henrik Lindqvist',
      role: 'Chief Economics Editor',
      avatar: '/images/authors/henrik_lindqvist.jpg'
    },
    publishedAt: '28m ago',
    readTime: '4 min read',
    imageUrl: '/images/news/crude-oil-climbs-toward-90-as-global-supply-concerns-mount-over-stalled-middle-east-talks.webp',
    commentCount: 0
  },
  {
    id: 'sec-2',
    title: 'Capitol Hill Intensifies AI Oversight as Frontier Labs Deploy Autonomous Agentic Software',
    kicker: 'TECH & AI GOVERNANCE',
    summary: 'Bipartisan lawmakers draft new liability frameworks following reports of autonomous models executing complex enterprise workflows and automated cybersecurity protocols.',
    category: 'Tech & AI',
    edition: ['US & Americas', 'Global'],
    author: {
      name: 'Elena Rostova',
      role: 'San Francisco Tech Bureau',
      avatar: '/images/authors/elena_rostova.jpg'
    },
    publishedAt: '42m ago',
    readTime: '5 min read',
    imageUrl: '/images/news/capitol-hill-intensifies-ai-oversight-as-frontier-labs-deploy-autonomous-agentic-software.webp',
    commentCount: 0
  }
];

export const WIRE_STORIES: Article[] = [
  {
    id: 'wire-1',
    title: 'SpaceX Releases Landmark Financial Disclosures as Starlink Orbital Network Surpasses 6,000 Satellites',
    kicker: 'COMMERCIAL SPACE',
    summary: 'In an unprecedented earnings briefing for the private aerospace pioneer, commercial satellite revenue reached profitability alongside Starship launch milestones.',
    category: 'Tech & AI',
    edition: ['US & Americas', 'Global'],
    author: { name: 'Dr. Neil Campbell', role: 'Aerospace Desk' },
    publishedAt: '18m ago',
    readTime: '4 min read',
    imageUrl: '/images/news/spacex-releases-landmark-financial-disclosures-as-starlink-orbital-network-surpasses-6-000-satellites.webp'
  },
  {
    id: 'wire-2',
    title: 'USGS Supereruption Study Reveals Multi-Pulse Magma Dynamics at Yellowstone Geological Center',
    kicker: 'EARTH SCIENCE',
    summary: 'Groundbreaking seismic tomography demonstrates that ancient volcanic supereruptions occur in sequential discrete pulses rather than a single cataclysmic blast.',
    category: 'Health & Science',
    edition: ['US & Americas', 'Global'],
    author: { name: 'Dr. Rebecca Foster', role: 'Science Bureau' },
    publishedAt: '36m ago',
    readTime: '5 min read',
    imageUrl: '/images/news/usgs-supereruption-study-reveals-multi-pulse-magma-dynamics-at-yellowstone-geological-center.webp'
  },
  {
    id: 'wire-3',
    title: 'Monumental Sports & Capital One Finalize 20-Year Deal for $800M D.C. Arena Modernization',
    kicker: 'SPORTS BUSINESS',
    summary: 'The landmark downtown Washington transformation secures the Wizards and Capitals in Chinatown through 2045 with expanded hospitality and broadcast technology.',
    category: 'Sports',
    edition: ['US & Americas'],
    author: { name: 'Marcus Sterling', role: 'Sports Business Desk' },
    publishedAt: '1h ago',
    readTime: '4 min read',
    imageUrl: '/images/news/monumental-sports-capital-one-finalize-20-year-deal-for-800m-d-c-arena-modernization.webp'
  }
];

export const TRENDING_RANKED_ARTICLES: Article[] = [
  {
    id: 'trend-1',
    title: 'Paramount-Skydance Merger Clears Regulatory Review, Triggering New Wave of Hollywood IP Deals',
    kicker: 'HOLLYWOOD & MEDIA',
    summary: 'The unified entertainment conglomerate accelerates plans to bundle prestige studio film franchises with interactive gaming universes and sports rights.',
    category: 'Entertainment',
    edition: ['US & Americas', 'Global'],
    author: { name: 'Maya Patel', role: 'Los Angeles Bureau' },
    publishedAt: '1h ago',
    readTime: '5 min read',
    imageUrl: '/images/news/paramount-skydance-merger-clears-regulatory-review-triggering-new-wave-of-hollywood-ip-deals.webp',
    commentCount: 0
  },
  {
    id: 'trend-2',
    title: 'MSG Sports Files Form 10 to Advance Corporate Spin-Off of New York Rangers from the Knicks',
    kicker: 'CORPORATE FINANCE',
    summary: 'The separation will create two distinct publicly traded pure-play sports entities on Wall Street, unlocking independent valuations for the NBA and NHL franchises.',
    category: 'Business',
    edition: ['US & Americas'],
    author: { name: 'Claire Montgomery', role: 'Wall Street Desk' },
    publishedAt: '2h ago',
    readTime: '4 min read',
    imageUrl: '/images/news/msg-sports-files-form-10-to-advance-corporate-spin-off-of-new-york-rangers-from-the-knicks.webp',
    commentCount: 0
  },
  {
    id: 'trend-3',
    title: 'LA28 Olympic Organizers Secure Multi-Billion Dollar Founding Corporate Sponsorships with Delta & Honda',
    kicker: 'GLOBAL ATHLETICS',
    summary: 'Early tier-one marketing agreements establish record private funding thresholds ahead of the 2028 Summer Games across Southern California venues.',
    category: 'Sports',
    edition: ['US & Americas', 'Global'],
    author: { name: 'Tyler Brooks', role: 'Olympic Sports Correspondent' },
    publishedAt: '3h ago',
    readTime: '4 min read',
    imageUrl: '/images/news/la28-olympic-organizers-secure-multi-billion-dollar-founding-corporate-sponsorships-with-delta-honda.webp',
    commentCount: 0
  },
  {
    id: 'trend-4',
    title: 'Meta CEO Mark Zuckerberg Publishes 6,500-Word Manifesto Championing Open-Source AI as American Strategic Engine',
    kicker: 'SILICON VALLEY',
    summary: 'The essay ignites a fierce debate across Washington and Silicon Valley over whether open neural weights strengthen or complicate national competitiveness.',
    category: 'Tech & AI',
    edition: ['US & Americas', 'Global'],
    author: { name: 'Marcus Vance', role: 'Technology Critic' },
    publishedAt: '4h ago',
    readTime: '6 min read',
    imageUrl: '/images/news/meta-ceo-mark-zuckerberg-publishes-6-500-word-manifesto-championing-open-source-ai-as-american-strategic-engine.webp',
    commentCount: 0
  },
  {
    id: 'trend-5',
    title: 'University Co-Op Programs See Student Annual Earnings Reach Record $99.5M in High-Tech and Engineering Sectors',
    kicker: 'HIGHER EDUCATION & WORKFORCE',
    summary: 'Universities report unprecedented corporate demand for paid undergraduate engineering and computer science co-op placements amid tight specialized labor markets.',
    category: 'Business',
    edition: ['US & Americas'],
    author: { name: 'Julian Thorne', role: 'Workforce Columnist' },
    publishedAt: '5h ago',
    readTime: '4 min read',
    imageUrl: '/images/news/university-co-op-programs-see-student-annual-earnings-reach-record-99-5m-in-high-tech-and-engineering-sectors.webp',
    commentCount: 0
  }
];

export const LIVE_WIRE_FEED: LiveWireItem[] = [];

export const OPINION_COLUMNS: OpinionColumn[] = [
  {
    id: 'op-1',
    authorName: 'Prof. Jonathan Ross',
    authorTitle: 'Senior Fellow, Brookings Institution',
    authorAvatar: '/images/authors/jonathan_ross.jpg',
    columnTitle: 'GLOBAL SECURITY',
    headline: 'The Recalibration in the Pacific: Why Flexible Deterrence Outweighs Static Military Maneuvers',
    quoteSnippet: 'Sovereign security in the 21st century depends far more on rapid digital communication and supply resiliency than on predictable annual maneuvers.',
    category: 'U.S. Politics',
    date: 'Aug 17, 2026',
    readTime: '5 min read'
  },
  {
    id: 'op-2',
    authorName: 'Dr. Kimberly Adams',
    authorTitle: 'Professor of Finance, Wharton School',
    authorAvatar: '/images/authors/kimberly_adams.jpg',
    columnTitle: 'MARKET DYNAMICS',
    headline: 'The Post-Merger Entertainment Landscape: How IP Monetization Redefines Media Valuation',
    quoteSnippet: 'When media companies merge, the real prize is not catalog size, but the velocity with which characters and stories can migrate across streaming, gaming, and live experiences.',
    category: 'Business',
    date: 'Aug 16, 2026',
    readTime: '6 min read'
  },
  {
    id: 'op-3',
    authorName: 'Marcus Vance',
    authorTitle: 'Technology Critic & Author',
    authorAvatar: '/images/authors/marcus_vance.jpg',
    columnTitle: 'DIGITAL SOVEREIGNTY',
    headline: 'The Open-Source Paradox: Why Decentralized AI Models Are Essential for American Innovation',
    quoteSnippet: 'Walled gardens may offer short-term comfort for corporate incumbents, but open ecosystems historically drive the foundational standards that power the world.',
    category: 'Tech & AI',
    date: 'Aug 16, 2026',
    readTime: '5 min read'
  },
  {
    id: 'op-4',
    authorName: 'Maya Lin Chen',
    authorTitle: 'Urban Historian & Sports Analyst',
    authorAvatar: '/images/authors/maya_lin_chen.jpg',
    columnTitle: 'CITIES & CIVICS',
    headline: 'The $800M Arena Rebirth: Why Downtown Stadiums Are the Anchors of Civic Revitalization',
    quoteSnippet: 'In an era of dispersed remote work, sports arenas remain the rare secular cathedrals capable of drawing hundreds of thousands of people into downtown city cores.',
    category: 'Sports',
    date: 'Aug 15, 2026',
    readTime: '6 min read'
  }
];

export const MULTIMEDIA_VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Inside SpaceX Starbase: How Next-Gen Starship Missions Prepare for Orbital Refueling Tests',
    category: 'AEROSPACE & TECH',
    duration: '14:20',
    views: '680K views',
    thumbnail: '/images/news/vid_spacex.jpg',
    videoUrl: 'https://www.youtube.com/embed/5Ld4hACcjOI',
    description: 'Exclusive access inside the Starbase rocket factory as engineers install cryogenic transfer valves for upcoming orbital propellant transfer tests.',
    publishedAt: 'Yesterday'
  },
  {
    id: 'vid-2',
    title: 'The $800M Capital One Arena Transformation: The Architecture of Downtown D.C. Sports',
    category: 'SPORTS & ARCHITECTURE',
    duration: '11:45',
    views: '420K views',
    thumbnail: '/images/news/vid_arena.jpg',
    videoUrl: 'https://www.youtube.com/embed/K-Kwxv604dQ',
    description: 'We examine architectural blueprints and structural engineering plans for modernizing Washington’s primary downtown sports and concert arena.',
    publishedAt: '2 days ago'
  },
  {
    id: 'vid-3',
    title: 'Yellowstone’s Living Magma: USGS Geologists Unpack the Physics of Volcanic Super-Pulses',
    category: 'EARTH SCIENCE',
    duration: '13:10',
    views: '510K views',
    thumbnail: '/images/news/vid_yellowstone.jpg',
    videoUrl: 'https://www.youtube.com/embed/AchvMIrqHYA',
    description: 'Geophysicists deploy high-density seismic arrays to map subterranean magma reservoirs and reveal the multi-stage nature of ancient supereruptions.',
    publishedAt: '3 days ago'
  }
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'pod-1',
    title: 'Episode 212: Pacific Posture, Oil Volatility, and the 2026 Midterms Horizon',
    showName: 'Newyorkerherald Washington Desk',
    episodeNumber: 212,
    duration: '36:40',
    thumbnail: '/images/news/pod_1.jpg',
    description: 'Sarah Mitchell and Henrik Lindqvist analyze the strategic and market implications of recent Pacific defense moves and energy price shifts.',
    publishedAt: 'Aug 17, 2026'
  },
  {
    id: 'pod-2',
    title: 'Episode 211: The Starlink Economy and Autonomous AI Governance',
    showName: 'Newyorkerherald Washington Desk',
    episodeNumber: 211,
    duration: '39:15',
    thumbnail: '/images/news/pod_2.jpg',
    description: 'A deep dive into commercial space revenue, satellite broadband connectivity, and emerging federal AI standards.',
    publishedAt: 'Aug 14, 2026'
  }
];

export const INVESTIGATIVE_FEATURE: Article = {
  id: 'inv-1',
  title: 'The AI Power Crunch: How Surging Data Center Demand and Grid Congestion Are Testing America’s Energy Capacity',
  kicker: 'NEWYORKERHERALD INVESTIGATION • SPECIAL DOSSIER',
  summary: 'A 6-month national investigation across Northern Virginia, Texas, and the Pacific Northwest reveals how the explosive expansion of gigawatt-scale artificial intelligence compute clusters is colliding with aging transmission grids, sparking a fierce race for dedicated nuclear and geothermal energy contracts.',
  category: 'Investigation',
  edition: ['US & Americas'],
  author: {
    name: 'Carlos Mendoza, Astrid Holm & Liam Gallagher',
    role: 'Investigative Projects Team',
    avatar: '/images/authors/carlos_mendoza.jpg'
  },
  publishedAt: 'Published today at 06:00 EST',
  readTime: '9 min read',
  imageUrl: '/images/news/the-ai-power-crunch-how-surging-data-center-demand-and-grid-congestion-are-testing-america-s-energy-capacity.webp',
  imageCaption: 'High-voltage transformer substation outside a major hyperscale compute campus in Loudoun County, Virginia, operating at peak load.',
  imageCredit: 'Newyorkerherald / Special Projects',
  isInvestigative: true,
  commentCount: 0,
  bullets: [
    'Data centers in key regional hubs now consume up to 26% of local grid generation capacity, prompting utility moratoriums.',
    'Technology conglomerates negotiate direct power purchase agreements with small modular reactor (SMR) startups to bypass public grid delays.',
    'Federal energy regulators draft new expedited cost-allocation rules for high-voltage transmission lines interconnecting renewable wind and solar farms.'
  ]
};

export const FACT_CHECK_ITEMS: FactCheckItem[] = [
  {
    id: 'fc-1',
    claim: 'The federal grid modernization bill includes provisions to ban natural gas furnaces in existing residential homes by 2027.',
    claimant: 'Viral Social Media Campaign',
    verdict: 'False',
    explanation: 'The text of the bipartisan legislation contains no restrictions or mandates on existing domestic residential appliances; it focuses exclusively on interstate transmission lines, nuclear licensing, and industrial energy storage.',
    source: 'Senate Legislative Counsel Draft S.4820',
    date: 'Aug 16, 2026'
  },
  {
    id: 'fc-2',
    claim: 'U.S. domestic oil and natural gas production reached all-time historical highs during the first half of 2026.',
    claimant: 'U.S. Energy Information Administration (EIA)',
    verdict: 'True',
    explanation: 'Verified EIA and federal data confirms U.S. crude production averaged 13.4 million barrels per day alongside record exports of liquefied natural gas to European and Asian partners.',
    source: 'EIA Monthly Energy Review & Bureau of Ocean Energy Management',
    date: 'Aug 15, 2026'
  }
];

export const PHOTO_STORIES: PhotoStory[] = [
  {
    id: 'photo-1',
    title: 'Dawn Over the Golden Gate',
    location: 'San Francisco, California',
    photographer: 'David Miller / Newyorkerherald Visuals',
    date: 'Aug 16, 2026',
    imageUrl: '/images/news/white-house-orders-realignment-of-joint-military-exercises-and-pacific-deployments-amid-high-stakes-diplomacy.webp',
    description: 'A morning fog bank blankets the San Francisco Bay as automated electric ferries commence commute routes.'
  }
];

export const CATEGORY_ARTICLES: Record<string, Article[]> = {
  'U.S. Politics': [
    {
      id: 'pol-1',
      title: 'Supreme Court Weighs Federal Regulatory Scope Over State Infrastructure in Landmark Preemption Case',
      kicker: 'SUPREME COURT',
      summary: 'Justices hear oral arguments on whether federal interstate transit and energy mandates supersede municipal environmental permits, setting up a high-stakes constitutional precedent.',
      category: 'U.S. Politics',
      edition: ['US & Americas'],
      author: { name: 'Rachel Goldberg', role: 'Supreme Court Bureau' },
      publishedAt: '2h ago',
      readTime: '5 min read',
      imageUrl: '/images/news/supreme-court-weighs-federal-regulatory-scope-over-state-infrastructure-in-landmark-preemption-case.webp'
    },
    {
      id: 'pol-2',
      title: 'Political Analysts Map Competing Scenarios for 2026 Midterms as Economic Sentiment Evolves',
      kicker: '2026 MIDTERMS',
      summary: 'Campaign strategists in key battleground districts in Pennsylvania, Michigan, and Arizona track shifts in voter priorities around inflation, housing costs, and energy policy.',
      category: 'U.S. Politics',
      edition: ['US & Americas'],
      author: { name: 'Tyler Brooks', role: 'National Political Correspondent' },
      publishedAt: '4h ago',
      readTime: '4 min read',
      imageUrl: '/images/news/political-analysts-map-competing-scenarios-for-2026-midterms-as-economic-sentiment-evolves.webp'
    },
    {
      id: 'pol-3',
      title: 'Bipartisan Congressional Coalition Finalizes Critical Minerals Strategic Stockpile Legislation',
      kicker: 'CAPITOL HILL',
      summary: 'The compromise bill establishes $4.2B in federal procurement guarantees for domestic lithium, cobalt, and rare earth element processing hubs.',
      category: 'U.S. Politics',
      edition: ['US & Americas'],
      author: { name: 'Sarah Mitchell', role: 'Washington Bureau' },
      publishedAt: '6h ago',
      readTime: '4 min read',
      imageUrl: '/images/news/bipartisan-congressional-coalition-finalizes-critical-minerals-strategic-stockpile-legislation.webp'
    }
  ],
  'Business & Economy': [
    {
      id: 'biz-1',
      title: 'Crude Oil Advances Toward $90 a Barrel as Tightening Supply and Strong Refining Run Rates Impact Markets',
      kicker: 'COMMODITIES & ENERGY',
      summary: 'Energy benchmarks surge as international supply disruptions meet robust U.S. industrial and aviation fuel demand ahead of late-summer travel peaks.',
      category: 'Business',
      edition: ['US & Americas'],
      author: { name: 'Henrik Lindqvist', role: 'Chief Economics Editor' },
      publishedAt: '1h ago',
      readTime: '4 min read',
      imageUrl: '/images/news/crude-oil-advances-toward-90-a-barrel-as-tightening-supply-and-strong-refining-run-rates-impact-markets.webp'
    },
    {
      id: 'biz-2',
      title: 'MSG Sports Advances Corporate Separation of New York Rangers to Unlock Pure-Play NHL Franchise Value',
      kicker: 'WALL STREET & M&A',
      summary: 'The Form 10 registration filing outlines independent governance structures for the Rangers and Knicks, providing investors direct equity access to individual sports franchises.',
      category: 'Business',
      edition: ['US & Americas'],
      author: { name: 'Marcus Sterling', role: 'Markets Editor' },
      publishedAt: '3h ago',
      readTime: '5 min read',
      imageUrl: '/images/news/msg-sports-advances-corporate-separation-of-new-york-rangers-to-unlock-pure-play-nhl-franchise-value.webp'
    },
    {
      id: 'biz-3',
      title: 'University Engineering Co-Op Students Earn Record $99.5M as Tech Employers Compete for Applied Talent',
      kicker: 'WORKFORCE & INDUSTRY',
      summary: 'Cooperative education models at leading engineering universities see double-digit wage increases as employers secure pipeline talent for domestic manufacturing and software projects.',
      category: 'Business',
      edition: ['US & Americas'],
      author: { name: 'Claire Montgomery', role: 'Workforce Trends' },
      publishedAt: '5h ago',
      readTime: '4 min read',
      imageUrl: '/images/news/university-engineering-co-op-students-earn-record-99-5m-as-tech-employers-compete-for-applied-talent.webp'
    }
  ],
  'Tech & AI': [
    {
      id: 'tech-1',
      title: 'SpaceX Shares Landmark Financial Performance as Starlink Satellite Network Achieves Global Scale',
      kicker: 'COMMERCIAL AEROSPACE',
      summary: 'In an unprecedented investor briefing, SpaceX reports surging operating cash flow driven by enterprise mobility broadband contracts and next-gen Starship testing.',
      category: 'Tech & AI',
      edition: ['US & Americas', 'Global'],
      author: { name: 'Dr. Neil Campbell', role: 'Aerospace Desk' },
      publishedAt: '2h ago',
      readTime: '5 min read',
      imageUrl: '/images/news/spacex-shares-landmark-financial-performance-as-starlink-satellite-network-achieves-global-scale.webp'
    },
    {
      id: 'tech-2',
      title: 'Mark Zuckerberg’s Open-Source AI Manifesto Sparks Fierce Policy Debate in Washington and Silicon Valley',
      kicker: 'OPEN AI ECOSYSTEM',
      summary: 'The 6,500-word treatise argues that open-weight artificial intelligence is crucial for American technological primacy, drawing sharp contrasts with closed proprietary labs.',
      category: 'Tech & AI',
      edition: ['US & Americas', 'Global'],
      author: { name: 'Elena Rostova', role: 'AI Bureau' },
      publishedAt: '4h ago',
      readTime: '6 min read',
      imageUrl: '/images/news/mark-zuckerberg-s-open-source-ai-manifesto-sparks-fierce-policy-debate-in-washington-and-silicon-valley.webp'
    },
    {
      id: 'tech-3',
      title: 'Lawmakers Scrutinize Autonomous AI Cybersecurity Agents Following Unauthorized Model Exploits',
      kicker: 'AI SAFETY & POLICY',
      summary: 'Congressional committees request testimony from leading machine intelligence labs on containment protocols for autonomous reasoning systems.',
      category: 'Tech & AI',
      edition: ['US & Americas'],
      author: { name: 'David Vance', role: 'Tech Policy Desk' },
      publishedAt: '6h ago',
      readTime: '4 min read',
      imageUrl: '/images/news/lawmakers-scrutinize-autonomous-ai-cybersecurity-agents-following-unauthorized-model-exploits.webp'
    }
  ],
  'Entertainment': [
    {
      id: 'ent-1',
      title: 'Paramount-Skydance Merger Completes Formal Integration, Uniting Studio Blockbusters with Gaming Franchises',
      kicker: 'HOLLYWOOD CONSOLIDATION',
      summary: 'The newly merged entertainment powerhouse outlines an aggressive multi-platform strategy combining iconic film properties with interactive video game development and premium streaming.',
      category: 'Entertainment',
      edition: ['US & Americas', 'Global'],
      author: { name: 'Maya Patel', role: 'Hollywood Bureau' },
      publishedAt: '3h ago',
      readTime: '5 min read',
      imageUrl: '/images/news/paramount-skydance-merger-completes-formal-integration-uniting-studio-blockbusters-with-gaming-franchises.webp'
    },
    {
      id: 'ent-2',
      title: 'Interactive Gaming Surpasses Film and Television as the Leading Growth Engine for Global Entertainment IP',
      kicker: 'DIGITAL MEDIA & GAMING',
      summary: 'Industry analysis highlights how transmedia adaptations—from blockbuster game series to award-winning television dramas—dominate cultural mindshare and consumer spending.',
      category: 'Entertainment',
      edition: ['US & Americas'],
      author: { name: 'Julian Thorne', role: 'Media Columnist' },
      publishedAt: '5h ago',
      readTime: '4 min read',
      imageUrl: '/images/news/interactive-gaming-surpasses-film-and-television-as-the-leading-growth-engine-for-global-entertainment-ip.webp'
    },
    {
      id: 'ent-3',
      title: 'Art Theft Investigators Probe Stolen Renaissance Masterpieces in Sicily Valued at $92 Million',
      kicker: 'FINE ARTS & CRIME',
      summary: 'International law enforcement agencies coordinate with Italian authorities following the disappearance of four rare 15th-century paintings by Antonello da Messina.',
      category: 'Entertainment',
      edition: ['US & Americas', 'Global'],
      author: { name: 'Klaus Zimmermann', role: 'Arts & Culture Desk' },
      publishedAt: '7h ago',
      readTime: '4 min read',
      imageUrl: '/images/news/art-theft-investigators-probe-stolen-renaissance-masterpieces-in-sicily-valued-at-92-million.webp'
    }
  ],
  'Sports': [
    {
      id: 'spt-1',
      title: 'Monumental Sports and Capital One Extend D.C. Arena Partnership with $800M Historic Modernization Plan',
      kicker: 'ARENA TRANSFORMATION',
      summary: 'The 20-year agreement guarantees the Wizards and Capitals remain in downtown Washington D.C. through 2045, featuring expanded concourses and state-of-the-art broadcast bays.',
      category: 'Sports',
      edition: ['US & Americas'],
      author: { name: 'Marcus Sterling', role: 'Sports Business Desk' },
      publishedAt: '2h ago',
      readTime: '5 min read',
      imageUrl: '/images/news/monumental-sports-and-capital-one-extend-d-c-arena-partnership-with-800m-historic-modernization-plan.webp'
    },
    {
      id: 'spt-2',
      title: 'LA28 Summer Olympics Secures Tier-One Founding Partnerships with Delta Air Lines and Honda',
      kicker: 'LA28 OLYMPICS',
      summary: 'Organizers surpass early corporate marketing benchmarks as Southern California readies world-class venues for the 2028 Olympic and Paralympic Games.',
      category: 'Sports',
      edition: ['US & Americas', 'Global'],
      author: { name: 'Tyler Brooks', role: 'Olympic Sports Bureau' },
      publishedAt: '4h ago',
      readTime: '4 min read',
      imageUrl: '/images/news/la28-summer-olympics-secures-tier-one-founding-partnerships-with-delta-air-lines-and-honda.webp'
    },
    {
      id: 'spt-3',
      title: 'Major League Volleyball Announces Los Angeles Expansion Team for 2027 Season Amid Women’s Sports Boom',
      kicker: 'WOMEN’S PROFESSIONAL SPORTS',
      summary: 'Investor group backed by prominent athletes and media executives secures Southern California franchise rights following record-setting inaugural league ratings.',
      category: 'Sports',
      edition: ['US & Americas'],
      author: { name: 'Astrid Lindholm', role: 'Sports & Society' },
      publishedAt: '6h ago',
      readTime: '4 min read',
      imageUrl: '/images/news/major-league-volleyball-announces-los-angeles-expansion-team-for-2027-season-amid-women-s-sports-boom.webp'
    }
  ],
  'Health & Science': [
    {
      id: 'sci-1',
      title: 'USGS Supervolcano Research Reveals Yellowstone Eruptions Occur in Complex Multi-Pulse Sequences',
      kicker: 'GEOPHYSICAL DISCOVERY',
      summary: 'New seismic imaging and geochemical analysis show that ancient continental supereruptions were punctuated by distinct pulses over decades rather than a single uninterrupted explosion.',
      category: 'Health & Science',
      edition: ['US & Americas', 'Global'],
      author: { name: 'Dr. Rebecca Foster', role: 'Earth Science Editor' },
      publishedAt: '3h ago',
      readTime: '5 min read',
      imageUrl: '/images/news/usgs-supervolcano-research-reveals-yellowstone-eruptions-occur-in-complex-multi-pulse-sequences.webp'
    },
    {
      id: 'sci-2',
      title: 'Community Water Safety Programs in Massachusetts Expand Free Life-Saving Training for Youth',
      kicker: 'PUBLIC HEALTH & WELLNESS',
      summary: 'Medical centers and civic organizations scale regional drowning prevention initiatives, providing free swimming and water-safety instruction to thousands of children and teens.',
      category: 'Health & Science',
      edition: ['US & Americas'],
      author: { name: 'Claire Montgomery', role: 'Public Health Desk' },
      publishedAt: '5h ago',
      readTime: '4 min read',
      imageUrl: '/images/news/community-water-safety-programs-in-massachusetts-expand-free-life-saving-training-for-youth.webp'
    },
    {
      id: 'sci-3',
      title: 'Advanced Solid-State Battery Pilot Facilities Break Ground Across Midwest Clean Tech Corridors',
      kicker: 'CLEAN ENERGY TECHNOLOGY',
      summary: 'Automotive and energy storage consortiums invest $1.8B in scalable ceramic electrolyte production lines targeting electric vehicle deployment in 2027.',
      category: 'Health & Science',
      edition: ['US & Americas'],
      author: { name: 'Dr. Sean Miller', role: 'Clean Energy Bureau' },
      publishedAt: '7h ago',
      readTime: '4 min read',
      imageUrl: '/images/news/advanced-solid-state-battery-pilot-facilities-break-ground-across-midwest-clean-tech-corridors.webp'
    }
  ],
  'Opinion': [
    {
      id: 'op-art-1',
      title: 'The Recalibration in the Pacific: Why Flexible Deterrence Outweighs Static Military Maneuvers',
      kicker: 'GLOBAL SECURITY',
      summary: 'Sovereign security in the 21st century depends far more on rapid digital communication and supply resiliency than on predictable annual maneuvers.',
      category: 'Opinion',
      edition: ['US & Americas', 'Global'],
      author: { name: 'Prof. Jonathan Ross', role: 'Senior Fellow, Brookings Institution', avatar: '/images/authors/jonathan_ross.jpg' },
      publishedAt: 'Aug 17, 2026',
      readTime: '5 min read',
      imageUrl: '/images/news/white-house-orders-realignment-of-joint-military-exercises-and-pacific-deployments-amid-high-stakes-diplomacy.webp'
    },
    {
      id: 'op-art-2',
      title: 'The Post-Merger Entertainment Landscape: How IP Monetization Redefines Media Valuation',
      kicker: 'MARKET DYNAMICS',
      summary: 'When media companies merge, the real prize is not catalog size, but the velocity with which characters and stories can migrate across streaming, gaming, and live experiences.',
      category: 'Opinion',
      edition: ['US & Americas', 'Global'],
      author: { name: 'Dr. Kimberly Adams', role: 'Professor of Finance, Wharton School', avatar: '/images/authors/kimberly_adams.jpg' },
      publishedAt: 'Aug 16, 2026',
      readTime: '6 min read',
      imageUrl: '/images/news/paramount-skydance-merger-clears-regulatory-review-triggering-new-wave-of-hollywood-ip-deals.webp'
    },
    {
      id: 'op-art-3',
      title: 'The Open-Source Paradox: Why Decentralized AI Models Are Essential for American Innovation',
      kicker: 'DIGITAL SOVEREIGNTY',
      summary: 'Walled gardens may offer short-term comfort for corporate incumbents, but open ecosystems historically drive the foundational standards that power the world.',
      category: 'Opinion',
      edition: ['US & Americas', 'Global'],
      author: { name: 'Marcus Vance', role: 'Technology Critic & Author', avatar: '/images/authors/marcus_vance.jpg' },
      publishedAt: 'Aug 16, 2026',
      readTime: '5 min read',
      imageUrl: '/images/news/mark-zuckerberg-s-open-source-ai-manifesto-sparks-fierce-policy-debate-in-washington-and-silicon-valley.webp'
    },
    {
      id: 'op-art-4',
      title: 'The $800M Arena Rebirth: Why Downtown Stadiums Are the Anchors of Civic Revitalization',
      kicker: 'CITIES & CIVICS',
      summary: 'In an era of dispersed remote work, sports arenas remain the rare secular cathedrals capable of drawing hundreds of thousands of people into downtown city cores.',
      category: 'Opinion',
      edition: ['US & Americas'],
      author: { name: 'Maya Lin Chen', role: 'Urban Historian & Sports Analyst', avatar: '/images/authors/maya_lin_chen.jpg' },
      publishedAt: 'Aug 15, 2026',
      readTime: '6 min read',
      imageUrl: '/images/news/monumental-sports-and-capital-one-extend-d-c-arena-partnership-with-800m-historic-modernization-plan.webp'
    }
  ]
};

export interface AuthorProfile {
  slug: string;
  name: string;
  role: string;
  bureau: string;
  avatar: string;
  bio: string;
  beat: string;
  articlesCount: number;
  twitter?: string;
  email?: string;
  awards?: string[];
  education?: string;
}

export const AUTHORS_DATA: Record<string, AuthorProfile> = {
  'sarah-mitchell': {
    slug: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    role: 'Chief National Security Correspondent',
    bureau: 'Washington D.C. Bureau',
    avatar: '/images/authors/sarah_mitchell.jpg',
    bio: 'Sarah Mitchell leads national security, defense procurement, and Indo-Pacific geopolitical reporting for Newyorkerherald. Prior to joining the newsroom, she covered diplomatic summits and bilateral defense pacts across Seoul, Tokyo, and Taipei.',
    beat: 'National Security & Defense Policy',
    articlesCount: 142,
    twitter: '@mitchell_nyh',
    email: 's.mitchell@newyorkerherald.com',
    awards: ['Gerald R. Ford Award for Distinguished Reporting', 'Overseas Press Club Citation 2024'],
    education: 'M.A. International Relations, Georgetown University'
  },
  'david-vance': {
    slug: 'david-vance',
    name: 'David Vance',
    role: 'Senior Tech Policy & Defense Analyst',
    bureau: 'Washington D.C. Bureau',
    avatar: '/images/authors/david_vance.jpg',
    bio: 'David Vance investigates federal regulatory oversight of autonomous systems, cyber warfare doctrines, and bipartisan congressional tech legislation.',
    beat: 'AI Governance & Critical Infrastructure',
    articlesCount: 98,
    twitter: '@vance_security',
    email: 'd.vance@newyorkerherald.com',
    awards: ['National Press Foundation Fellow'],
    education: 'B.S. Computer Science & Public Policy, MIT'
  },
  'henrik-lindqvist': {
    slug: 'henrik-lindqvist',
    name: 'Henrik Lindqvist',
    role: 'Chief Economics Editor',
    bureau: 'New York Financial Desk',
    avatar: '/images/authors/henrik_lindqvist.jpg',
    bio: 'Henrik Lindqvist oversees global macroeconomic intelligence, Federal Reserve monetary policy, and energy commodity benchmarks. A former foreign exchange analyst on Wall Street, his columns dissect supply chain elasticity and sovereign debt.',
    beat: 'Macroeconomics, Energy & Central Banking',
    articlesCount: 215,
    twitter: '@lindqvist_econ',
    email: 'h.lindqvist@newyorkerherald.com',
    awards: ['Loeb Award Finalist for Financial Journalism 2025'],
    education: 'M.Sc. Econometrics, London School of Economics'
  },
  'elena-rostova': {
    slug: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Silicon Valley AI Bureau Chief',
    bureau: 'San Francisco Bureau',
    avatar: '/images/authors/elena_rostova.jpg',
    bio: 'Elena Rostova reports from Silicon Valley on frontier neural networks, foundation model capabilities, enterprise autonomous agents, and venture capital allocations across machine learning startups.',
    beat: 'Artificial Intelligence & Semiconductor Architectures',
    articlesCount: 164,
    twitter: '@rostova_ai',
    email: 'e.rostova@newyorkerherald.com',
    awards: ['IEEE Society Tech Journalism Honor'],
    education: 'B.S. Symbolic Systems, Stanford University'
  },
  'dr-neil-campbell': {
    slug: 'dr-neil-campbell',
    name: 'Dr. Neil Campbell',
    role: 'Commercial Aerospace Desk',
    bureau: 'Houston & Cape Canaveral',
    avatar: '/images/authors/neil_campbell.jpg',
    bio: 'Dr. Neil Campbell covers private launch vehicles, satellite broadband constellations, and deep space exploration programs. He holds a doctorate in orbital mechanics.',
    beat: 'Aerospace Engineering & Space Economy',
    articlesCount: 87,
    twitter: '@neil_aerospace',
    email: 'n.campbell@newyorkerherald.com',
    awards: ['AIAA Media Award 2024'],
    education: 'Ph.D. Aeronautics & Astronautics, Purdue University'
  },
  'dr-rebecca-foster': {
    slug: 'dr-rebecca-foster',
    name: 'Dr. Rebecca Foster',
    role: 'Earth Science & Geophysics Editor',
    bureau: 'Denver & National Science Desk',
    avatar: '/images/authors/rebecca_foster.jpg',
    bio: 'Dr. Rebecca Foster specializes in seismic tomography, volcanology, and continental geothermal systems, with extensive field experience at USGS monitoring stations.',
    beat: 'Geophysics, Volcanology & Planetary Geology',
    articlesCount: 110,
    twitter: '@foster_geophys',
    email: 'r.foster@newyorkerherald.com',
    awards: ['American Geophysical Union Excellence in Journalism'],
    education: 'Ph.D. Geophysics, UC Berkeley'
  },
  'marcus-sterling': {
    slug: 'marcus-sterling',
    name: 'Marcus Sterling',
    role: 'Senior Sports Business & Wall Street Editor',
    bureau: 'New York Bureau',
    avatar: '/images/authors/marcus_sterling.jpg',
    bio: 'Marcus Sterling covers sports franchise valuations, media broadcast rights deals, and corporate sports finance across the NBA, NHL, NFL, and European leagues.',
    beat: 'Sports Finance & Venue Infrastructure',
    articlesCount: 130,
    twitter: '@sterling_sportsbiz',
    email: 'm.sterling@newyorkerherald.com',
    education: 'MBA, Columbia Business School'
  },
  'maya-patel': {
    slug: 'maya-patel',
    name: 'Maya Patel',
    role: 'Hollywood & Entertainment Bureau Chief',
    bureau: 'Los Angeles Bureau',
    avatar: '/images/authors/maya_patel.jpg',
    bio: 'Maya Patel chronicles the transformation of the film and television industry, studio consolidation, streaming bundle economics, and cross-media video game adaptations.',
    beat: 'Hollywood Studios, Streaming & Gaming IP',
    articlesCount: 175,
    twitter: '@patel_entertainment',
    email: 'm.patel@newyorkerherald.com',
    education: 'B.A. Film & Media Studies, UCLA'
  },
  'claire-montgomery': {
    slug: 'claire-montgomery',
    name: 'Claire Montgomery',
    role: 'Workforce & Public Health Correspondent',
    bureau: 'Boston Bureau',
    avatar: '/images/authors/claire_montgomery.jpg',
    bio: 'Claire Montgomery covers workforce dynamics, technical education pipelines, biomedical innovations, and regional community health initiatives.',
    beat: 'Applied Labor Economics & Public Health',
    articlesCount: 92,
    twitter: '@montgomery_health',
    email: 'c.montgomery@newyorkerherald.com',
    education: 'M.P.H. Harvard T.H. Chan School of Public Health'
  },
  'tyler-brooks': {
    slug: 'tyler-brooks',
    name: 'Tyler Brooks',
    role: 'National Politics & Olympic Correspondent',
    bureau: 'Washington & Los Angeles',
    avatar: '/images/authors/tyler_brooks.jpg',
    bio: 'Tyler Brooks reports on congressional campaign strategies, battleground polling data, and organizing preparations for the LA28 Olympic and Paralympic Games.',
    beat: 'Electoral Politics & Olympic Athletics',
    articlesCount: 120,
    twitter: '@brooks_nyh',
    email: 't.brooks@newyorkerherald.com',
    education: 'B.A. Political Science, Northwestern University'
  },
  'carlos-mendoza': {
    slug: 'carlos-mendoza',
    name: 'Carlos Mendoza',
    role: 'Investigative Projects Lead',
    bureau: 'Special Dossier Desk',
    avatar: '/images/authors/carlos_mendoza.jpg',
    bio: 'Carlos Mendoza directs in-depth data investigations examining critical infrastructure, corporate energy procurement, and federal resource distribution.',
    beat: 'Deep-Dive Investigative Dossiers',
    articlesCount: 64,
    twitter: '@mendoza_investigates',
    email: 'c.mendoza@newyorkerherald.com',
    awards: ['Pulitzer Prize Finalist for National Reporting 2023'],
    education: 'M.S. Investigative Journalism, Columbia Journalism School'
  },
  'jonathan-ross': {
    slug: 'jonathan-ross',
    name: 'Prof. Jonathan Ross',
    role: 'Senior Fellow, Brookings Institution',
    bureau: 'Global Security & Foreign Policy',
    avatar: '/images/authors/jonathan_ross.jpg',
    bio: 'Prof. Jonathan Ross writes extensively on deterrence frameworks, maritime security in the Asia-Pacific, and multilateral defense treaties.',
    beat: 'Global Security & Pacific Geopolitics',
    articlesCount: 48,
    twitter: '@ross_geopolitics',
    email: 'j.ross@newyorkerherald.com',
    education: 'Ph.D. War Studies, King’s College London'
  },
  'kimberly-adams': {
    slug: 'kimberly-adams',
    name: 'Dr. Kimberly Adams',
    role: 'Professor of Finance, Wharton School',
    bureau: 'Financial Economics & Market Dynamics',
    avatar: '/images/authors/kimberly_adams.jpg',
    bio: 'Dr. Kimberly Adams provides market analysis on antitrust regulatory actions, media intellectual property valuations, and corporate capital structures.',
    beat: 'Media Economics & Corporate Valuation',
    articlesCount: 52,
    twitter: '@adams_wharton',
    email: 'k.adams@newyorkerherald.com',
    education: 'Ph.D. Economics, University of Chicago'
  },
  'marcus-vance': {
    slug: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Technology Critic & Author',
    bureau: 'Digital Sovereignty & AI Ethics',
    avatar: '/images/authors/marcus_vance.jpg',
    bio: 'Marcus Vance investigates open-source machine learning ecosystems, platform antitrust, and algorithmic accountability.',
    beat: 'Digital Sovereignty & Open AI',
    articlesCount: 60,
    twitter: '@vance_techcritique',
    email: 'm.vance@newyorkerherald.com',
    education: 'M.S. Computer Science, Stanford University'
  },
  'maya-lin-chen': {
    slug: 'maya-lin-chen',
    name: 'Maya Lin Chen',
    role: 'Urban Historian & Sports Analyst',
    bureau: 'Urban Architecture & Civics',
    avatar: '/images/authors/maya_lin_chen.jpg',
    bio: 'Maya Lin Chen writes on civic architecture, downtown redevelopment, and the cultural role of metropolitan stadium districts.',
    beat: 'Urban Planning & Sports Architecture',
    articlesCount: 44,
    twitter: '@mayachen_urban',
    email: 'm.chen@newyorkerherald.com',
    education: 'M.Arch, MIT'
  }
};

export interface CategoryMeta {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
  topics: string[];
  editorInChief: string;
  bureau: string;
}

export const CATEGORIES_META: Record<string, CategoryMeta> = {
  'politics': {
    slug: 'politics',
    name: 'U.S. Politics & Policy',
    tagline: 'Capitol Hill, Executive Directives & Supreme Court Jurisprudence',
    description: 'Authoritative, nonpartisan reporting on American governance, legislative developments, judicial rulings, and national security policy.',
    accentColor: 'var(--accent-primary)',
    topics: ['Capitol Hill', 'White House', 'Supreme Court', '2026 Midterms', 'National Security', 'Federal Regulation'],
    editorInChief: 'Sarah Mitchell',
    bureau: 'Washington D.C. Bureau'
  },
  'business': {
    slug: 'business',
    name: 'Business & Economy',
    tagline: 'Macroeconomic Benchmarks, Wall Street M&A and Labor Trends',
    description: 'Comprehensive financial intelligence covering Federal Reserve monetary policy, commodity benchmarks, corporate restructurings, and employment markets.',
    accentColor: 'var(--accent-green)',
    topics: ['Commodities & Oil', 'Federal Reserve', 'Wall Street M&A', 'Corporate Earnings', 'Housing & Mortgages', 'Workforce & Co-Op'],
    editorInChief: 'Henrik Lindqvist',
    bureau: 'New York Financial Desk'
  },
  'tech-ai': {
    slug: 'tech-ai',
    name: 'Tech & Artificial Intelligence',
    tagline: 'Frontier AI Labs, Silicon Architectures & Commercial Space',
    description: 'In-depth reporting on the frontier models powering machine intelligence, autonomous systems, quantum computing, and commercial aerospace infrastructure.',
    accentColor: 'var(--accent-primary)',
    topics: ['Autonomous Agents', 'Open-Source AI', 'Semiconductors', 'SpaceX & Starlink', 'Cybersecurity', 'AI Governance'],
    editorInChief: 'Elena Rostova',
    bureau: 'San Francisco & Silicon Valley Bureau'
  },
  'entertainment': {
    slug: 'entertainment',
    name: 'Entertainment & Culture',
    tagline: 'Hollywood Consolidation, Gaming IP & High Culture',
    description: 'Critical coverage and insider analysis of media mergers, blockbuster franchise adaptations, streaming economics, and global fine arts.',
    accentColor: 'var(--accent-copper)',
    topics: ['Hollywood Consolidation', 'Gaming Franchises', 'Streaming Economics', 'Fine Arts & Museum Crime', 'Film Reviews'],
    editorInChief: 'Maya Patel',
    bureau: 'Los Angeles Bureau'
  },
  'sports': {
    slug: 'sports',
    name: 'Sports & Athletics',
    tagline: 'Franchise Governance, Stadium Architecture & Olympic Preparation',
    description: 'Authoritative sports journalism tracking franchise transactions, arena modernizations, women’s professional leagues, and the road to LA28.',
    accentColor: 'var(--accent-gold)',
    topics: ['Arena Modernization', 'LA28 Olympics', 'Women’s Professional Leagues', 'Power Rankings', 'Franchise Valuation'],
    editorInChief: 'Marcus Sterling',
    bureau: 'National Sports Desk'
  },
  'health-science': {
    slug: 'health-science',
    name: 'Health & Science',
    tagline: 'Earth Science, Clinical Discoveries & Clean Tech',
    description: 'Rigorous coverage of geophysical breakthroughs, public health prevention initiatives, clinical therapeutics, and energy storage innovations.',
    accentColor: 'var(--accent-live)',
    topics: ['Earth Science & Geophysics', 'Yellowstone Magma Studies', 'Public Health Training', 'Solid-State Clean Tech', 'Biomedical Innovation'],
    editorInChief: 'Dr. Rebecca Foster',
    bureau: 'National Science Desk'
  },
  'opinion': {
    slug: 'opinion',
    name: 'Opinion & Editorial Columns',
    tagline: 'Independent Analysis, Geopolitical Essays & Cultural Perspectives',
    description: 'Distinguished columnists and guest scholars offer incisive perspectives on sovereignty, technological independence, media economics, and urban civic life.',
    accentColor: 'var(--accent-primary)',
    topics: ['Global Security', 'Market Dynamics', 'Digital Sovereignty', 'Civic Architecture', 'Editorial Board'],
    editorInChief: 'Prof. Jonathan Ross',
    bureau: 'Editorial Board'
  },
  'investigation': {
    slug: 'investigation',
    name: 'Investigative Dossiers',
    tagline: 'Deep-Dive Data Journalism & Enterprise Inquiries',
    description: 'Long-term investigative projects examining systemic bottlenecks, energy capacity limits, and regulatory enforcement across the United States.',
    accentColor: 'var(--accent-copper)',
    topics: ['The AI Power Crunch', 'Grid Modernization', 'Data Center Infrastructure', 'Resource Equity'],
    editorInChief: 'Carlos Mendoza',
    bureau: 'Special Dossier Desk'
  }
};

export function getAllArticles(): Article[] {
  const all: Article[] = [
    LEAD_ARTICLE,
    ...SECONDARY_LEAD_STORIES,
    ...WIRE_STORIES,
    ...TRENDING_RANKED_ARTICLES,
    INVESTIGATIVE_FEATURE
  ];

  Object.values(CATEGORY_ARTICLES).forEach(articles => {
    articles.forEach(art => {
      if (!all.some(a => a.id === art.id)) {
        all.push(art);
      }
    });
  });

  return all;
}

export function getCategorySlugFromCategoryName(name: string): string {
  if (name.includes('Politics')) return 'politics';
  if (name.includes('Business')) return 'business';
  if (name.includes('Tech') || name.includes('AI')) return 'tech-ai';
  if (name.includes('Entertainment')) return 'entertainment';
  if (name.includes('Sports')) return 'sports';
  if (name.includes('Health') || name.includes('Science')) return 'health-science';
  if (name.includes('Opinion')) return 'opinion';
  if (name.includes('Investigation')) return 'investigation';
  return 'politics';
}

export function getAuthorSlugFromName(name: string): string {
  const clean = name.split('&')[0].trim().toLowerCase()
    .replace('prof. ', '')
    .replace('dr. ', '')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  if (clean.includes('sarah')) return 'sarah-mitchell';
  if (clean.includes('david')) return 'david-vance';
  if (clean.includes('henrik')) return 'henrik-lindqvist';
  if (clean.includes('elena')) return 'elena-rostova';
  if (clean.includes('campbell')) return 'dr-neil-campbell';
  if (clean.includes('foster')) return 'dr-rebecca-foster';
  if (clean.includes('sterling')) return 'marcus-sterling';
  if (clean.includes('maya-patel') || clean === 'maya-patel') return 'maya-patel';
  if (clean.includes('claire') || clean.includes('montgomery')) return 'claire-montgomery';
  if (clean.includes('tyler') || clean.includes('brooks')) return 'tyler-brooks';
  if (clean.includes('carlos') || clean.includes('mendoza')) return 'carlos-mendoza';
  if (clean.includes('jonathan') || clean.includes('ross')) return 'jonathan-ross';
  if (clean.includes('kimberly') || clean.includes('adams')) return 'kimberly-adams';
  if (clean.includes('marcus-vance') || clean.includes('vance')) return 'marcus-vance';
  if (clean.includes('maya-lin') || clean.includes('chen')) return 'maya-lin-chen';
  
  return 'sarah-mitchell';
}

export function getArticlesByCategorySlug(slug: string): Article[] {
  const all = getAllArticles();
  if (slug === 'politics') {
    return all.filter(a => a.category === 'U.S. Politics' || a.tags?.includes('U.S. Politics'));
  }
  if (slug === 'business') {
    return all.filter(a => a.category === 'Business');
  }
  if (slug === 'tech-ai' || slug === 'tech') {
    return all.filter(a => a.category === 'Tech & AI');
  }
  if (slug === 'entertainment') {
    return all.filter(a => a.category === 'Entertainment');
  }
  if (slug === 'sports') {
    return all.filter(a => a.category === 'Sports');
  }
  if (slug === 'health-science' || slug === 'science') {
    return all.filter(a => a.category === 'Health & Science');
  }
  if (slug === 'opinion') {
    return all.filter(a => a.category === 'Opinion');
  }
  if (slug === 'investigation') {
    return all.filter(a => a.isInvestigative || a.category === 'Investigation' || a.id === 'inv-1');
  }
  return all.filter(a => a.category === 'U.S. Politics');
}

export function getArticlesByAuthorSlug(slug: string): Article[] {
  const all = getAllArticles();
  const authorProfile = AUTHORS_DATA[slug];
  if (!authorProfile) return all.slice(0, 4);

  const namePieces = authorProfile.name.toLowerCase().split(' ');
  return all.filter(a => {
    const authorName = (a.author?.name || '').toLowerCase();
    return namePieces.some(p => p.length > 2 && authorName.includes(p));
  });
}

export function getArticleById(id: string): Article | undefined {
  const all = getAllArticles();
  return all.find(a => a.id === id);
}

export function getRelatedArticles(currentId: string, category: string): Article[] {
  const all = getAllArticles();
  return all
    .filter(a => a.id !== currentId && (a.category === category || a.tags?.includes(category)))
    .slice(0, 3);
}

export const AUTHORS = AUTHORS_DATA;
export const CATEGORY_INFO = CATEGORIES_META;
export const LIVE_WIRE_DISPATCHES = WIRE_STORIES;

export const FACT_CHECKS = [
  {
    id: 'fc-1',
    claim: 'Federal energy subsidies for AI datacenter cooling exceed $40B in 2026.',
    claimant: 'Senate Commerce Hearing Statement',
    verdict: 'Misleading',
    verdictSummary: 'Federal incentives across clean energy tax credits total $12.4B, with private enterprise funding over 78% of immersion cooling infrastructure.',
    source: 'Congressional Research Service (CRS Report R48120)',
    date: 'Aug 16, 2026'
  },
  {
    id: 'fc-2',
    claim: 'Yellowstone magma chamber pressure has exceeded critical eruption thresholds.',
    claimant: 'Viral Social Media Report',
    verdict: 'False',
    verdictSummary: 'USGS Volcano Observatory continuous GPS and strainmeter telemetry confirms ground deformation remains within normal historical baseline oscillations.',
    source: 'USGS Yellowstone Volcano Observatory (YVO Monthly Update)',
    date: 'Aug 15, 2026'
  },
  {
    id: 'fc-3',
    claim: 'Major U.S. airlines have formalized Tier-One sponsorship agreements for LA28 Olympic Games.',
    claimant: 'Olympic Organizing Committee Press Briefing',
    verdict: 'True',
    verdictSummary: 'LA28 Organizing Committee SEC and commercial filing confirmations establish multi-year aviation partnership contracts.',
    source: 'International Olympic Committee (IOC Commercial Registry)',
    date: 'Aug 14, 2026'
  }
];