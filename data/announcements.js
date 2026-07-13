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

  // ── COUNSELLING ──────────────────────────────────────────────────────────
  {
    id: 'josaa-2026',
    title: 'JoSAA 2026 — Counselling (IITs · NITs · IIITs)',
    category: 'counselling',
    icon: '🗓',
    date: '2026-06-20',
    endDate: '2026-07-20',
    desc: 'Online seat allocation for JEE Advanced and JEE Main qualifiers. 6 rounds.',
    link: 'josaa.nic.in',
    priority: 'high',
    tentative: true,
    level: 'National',
  },
  {
    id: 'mcc-neet-2026',
    title: 'MCC NEET-UG 2026 — Counselling',
    category: 'counselling',
    icon: '🗓',
    date: '2026-07-10',
    endDate: '2026-08-10',
    desc: 'Medical Counselling Committee — for AIIMS, JIPMER, central quota MBBS/BDS seats.',
    link: 'mcc.nic.in',
    priority: 'high',
    tentative: true,
    level: 'National',
  },
  {
    id: 'tnea-2026-counselling',
    title: 'TNEA 2026 — Counselling',
    category: 'counselling',
    icon: '🗓',
    date: '2026-07-15',
    endDate: '2026-08-15',
    desc: 'Tamil Nadu Engineering Admissions — based on Class 12 marks, no separate exam.',
    link: 'tneaonline.org',
    priority: 'high',
    tentative: true,
    level: 'State',
    state: 'Tamil Nadu',
  },

  // ── APPLICATIONS ─────────────────────────────────────────────────────────
  {
    id: 'npti-all-2026-27-application',
    title: 'NPTI 2026–27 — All PG Diploma Programmes Open (9 Campuses)',
    category: 'application',
    icon: '⚡',
    date: '2026-05-31',
    endDate: '2026-07-30',
    desc: 'National Power Training Institute (Ministry of Power) invites applications for One-Year PG Diploma courses: Renewable Energy & Grid Interface Technologies, Power Distribution & Communication Technologies, Hydro Power Plant Engineering, and Power Plant Engineering. Campuses: Faridabad, Badarpur, Nagpur, Guwahati, Nangal, Neyveli, Durgapur, Alappuzha, Shivpuri. 10% fee discount for female applicants. Last date: 30 July 2026.',
    link: 'npti.gov.in',
    priority: 'normal',
    level: 'National',
  },

];
