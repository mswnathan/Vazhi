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
    id: 'acsir-jan-2027-admission',
    title: 'AcSIR — PhD & IDDP Admissions (January 2027 session)',
    category: 'application',
    icon: '🔬',
    date: '2026-10-03',
    endDate: '2026-10-31',
    desc: 'AcSIR (Institution of National Importance) invites applications for PhD (Science, Medical Research, Engineering) and IDDP (M.Tech + PhD in Engineering) for the January 2027 session. CSIR GATE/GPAT JRF positions available. Application fee ₹1,000 (General/OBC/EWS) or ₹500 (SC/ST/PwD/Women); shortlisted candidates sit a test and/or interview. Reservation as per Govt of India rules.',
    link: 'acsir.res.in/admissions',
    priority: 'normal',
    level: 'National',
  },
  {
    id: 'gate-2027-application',
    title: 'GATE 2027 — Registration (Late-Fee Window)',
    category: 'application',
    icon: '📋',
    date: '2026-08-14',
    endDate: '2026-10-12',
    desc: 'GATE 2027 (conducted by IIT Madras) registration via GOAPS. Last date without late fee was 5 Oct 2026; late-fee window (+₹500) extended to 12 Oct 2026. Exam on 6, 7, 13, 14, 20 & 21 Feb 2027.',
    link: 'gate2027.iitm.ac.in',
    priority: 'high',
    level: 'National',
  },
  {
    id: 'clat-2027-application',
    title: 'CLAT 2027 — Registration (NLUs)',
    category: 'application',
    icon: '📋',
    date: '2026-08-03',
    endDate: '2026-10-31',
    desc: 'Common Law Admission Test registration for the 5-year integrated UG law programme (and PG) at 24 National Law Universities. Exam on 6 Dec 2026.',
    link: 'consortiumofnlus.ac.in',
    priority: 'high',
    level: 'National',
  },

  // ── EXAM DATES ──────────────────────────────────────────────────────────
  {
    id: 'cat-2026-exam',
    title: 'CAT 2026 — Exam Day',
    category: 'exam',
    icon: '📝',
    date: '2026-11-29',
    desc: 'Common Admission Test for MBA/PGP admission to IIMs and 1000+ B-schools, conducted by IIM Indore. Result expected first week of January 2027.',
    link: 'iimcat.ac.in',
    priority: 'high',
    level: 'National',
  },
  {
    id: 'clat-2027-exam',
    title: 'CLAT 2027 — Exam Day',
    category: 'exam',
    icon: '📝',
    date: '2026-12-06',
    desc: 'Offline pen-and-paper exam, 2–4 PM, at designated centres nationwide. Result expected third week of December 2026.',
    link: 'consortiumofnlus.ac.in',
    priority: 'high',
    level: 'National',
  },
  {
    id: 'jee-main-2027-s1',
    title: 'JEE Main 2027 — Session 1 Exam',
    category: 'exam',
    icon: '📝',
    date: '2027-01-22',
    endDate: '2027-01-31',
    desc: 'PCM students. NTA academic calendar (released 16 Sep 2026) lists Session 1 across 22, 23, 24, 28, 29 & 30 Jan 2027, with 31 Jan as a buffer day. Registration dates not yet announced — expected to open late Oct 2026.',
    link: 'jeemain.nta.nic.in',
    priority: 'high',
    tentative: true,
    level: 'National',
  },

];
