/**
 * Canonical production origin and shared metadata date helpers.
 * Vercel serves HTTP 200 on https://www.newyorkerherald.com and issues a
 * 308 Permanent Redirect from the apex domain (newyorkerherald.com -> www).
 * All canonicals, sitemaps, robots.txt, and OpenGraph URLs must align with www.
 */
const rawSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.newyorkerherald.com').replace(/\/+$/, '');

export const SITE_URL =
  rawSiteUrl === 'https://newyorkerherald.com' || rawSiteUrl === 'http://newyorkerherald.com'
    ? 'https://www.newyorkerherald.com'
    : rawSiteUrl;

const MONTHS: Record<string, string> = {
  jan: '01',
  feb: '02',
  mar: '03',
  apr: '04',
  may: '05',
  jun: '06',
  jul: '07',
  aug: '08',
  sep: '09',
  oct: '10',
  nov: '11',
  dec: '12',
};

/**
 * Converts editorial display dates (e.g. "Nov 24, 2026", "Today") into a
 * timezone-stable UTC noon ISO timestamp.
 */
export function parsePublishedTimeToIso(dateStr?: string): string {
  if (!dateStr) return '2026-11-24T12:00:00.000Z';
  const trimmed = dateStr.trim();
  const lower = trimmed.toLowerCase();
  if (lower === 'today') return '2026-11-24T12:00:00.000Z';
  if (lower === 'yesterday') return '2026-11-23T12:00:00.000Z';

  const match = trimmed.match(/([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})/);
  if (match) {
    const mStr = match[1].slice(0, 3).toLowerCase();
    const mm = MONTHS[mStr] || '11';
    const dd = match[2].padStart(2, '0');
    const yyyy = match[3];
    return `${yyyy}-${mm}-${dd}T12:00:00.000Z`;
  }

  try {
    const d = new Date(trimmed);
    if (!isNaN(d.getTime())) {
      const yyyy = d.getUTCFullYear();
      const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
      const dd = String(d.getUTCDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}T12:00:00.000Z`;
    }
  } catch {
    // Fall through to default date
  }
  return '2026-11-24T12:00:00.000Z';
}
