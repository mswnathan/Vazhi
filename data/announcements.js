// Vazhi — Announcements Data
// Exam dates, results, counselling windows, application deadlines
// Schema: { id, title, category, icon, date, endDate?, desc, link, priority, tentative?, level, state? }
// category:  'exam' | 'result' | 'counselling' | 'application' | 'admission' | 'news'
// priority:  'high' | 'normal'
// tentative: true — date not yet officially confirmed; shown as "Tentative" label
// date / endDate: ISO format 'YYYY-MM-DD'
// level:     'National' | 'State' — who the announcement applies to
// state:     required when level is 'State' — e.g. 'Tamil Nadu'. Omit when level is 'National'.
//
// Only CURRENT / UPCOMING items live here. Once an item's date (endDate || date)
// has passed, move it to archive/announcements-archive.js (reference only, not
// served) — use `node agents/date-consistency.js` to find passed entries.

const ANNOUNCEMENTS = [

  // ── APPLICATIONS ─────────────────────────────────────────────────────────
  {
    id: 'cat-2026-application',
    title: 'CAT 2026 — Registration (IIMs)',
    category: 'application',
    icon: '📋',
    date: '2026-08-03',
    endDate: '2026-09-15',
    desc: 'Common Admission Test registration for MBA/PGP admission to IIMs and 1000+ B-schools. Exam on 29 Nov 2026.',
    link: 'iimcat.ac.in',
    priority: 'high',
    tentative: true,
    level: 'National',
  },
  {
    id: 'gate-2027-application',
    title: 'GATE 2027 — Registration Opens (GOAPS)',
    category: 'application',
    icon: '📋',
    date: '2026-08-27',
    endDate: '2026-09-27',
    desc: 'GATE 2027 (conducted by IIT Madras) registration via GOAPS. Late-fee window until 5 Oct 2026. Exam on 6, 7, 13, 14, 20 & 21 Feb 2027.',
    link: 'gate2027.iitm.ac.in',
    priority: 'high',
    tentative: true,
    level: 'National',
  },

];
