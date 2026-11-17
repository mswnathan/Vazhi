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
    id: 'jee-main-2027-s1-application',
    title: 'JEE Main 2027 — Session 1 Registration',
    category: 'application',
    icon: '📋',
    date: '2026-10-24',
    endDate: '2026-11-22',
    desc: 'NTA registration for JEE Main 2027 Session 1 (B.E./B.Tech for NITs, IIITs, GFTIs and JoSAA; also the gateway to JEE Advanced). Last date 22 Nov 2026, 11:50 pm. Correction window 27–29 Nov. City intimation slip 30 Dec 2026; admit card from 13 Jan 2027. Session 2 registration is expected to open in January 2027.',
    link: 'jeemain.nta.nic.in',
    priority: 'high',
    level: 'National',
  },
  {
    id: 'niftee-2027-application',
    title: 'NIFT Entrance 2027 — Registration (B.Des / B.F.Tech)',
    category: 'application',
    icon: '👗',
    date: '2026-10-16',
    endDate: '2026-11-21',
    desc: 'NTA registration for NIFTEE 2027 — B.Des and B.F.Tech at NIFT campuses (also M.Des / M.F.M / M.F.Tech / PhD). Regular-fee deadline (16 Nov) has passed — late registration is open until 21 Nov 2026 with a ₹5,000 late fee. Correction window 22–25 Nov. Exam on 10 Jan 2027.',
    link: 'exams.nta.nic.in/niftee',
    priority: 'high',
    level: 'National',
  },
  {
    id: 'nid-dat-2027-application',
    title: 'NID DAT 2027 — Registration (B.Des / M.Des)',
    category: 'application',
    icon: '✏️',
    date: '2026-09-10',
    endDate: '2026-11-30',
    desc: 'NID admissions for 2027-28 — B.Des (4-year) and M.Des via the Design Aptitude Test. Last date 30 Nov 2026, 11:59 pm; edit window 1–3 Dec. DAT Prelims on 20 Dec 2026; shortlisted candidates sit DAT Mains.',
    link: 'admissions.nid.edu',
    priority: 'high',
    level: 'National',
  },
  {
    id: 'xat-2027-application',
    title: 'XAT 2027 — Registration (XLRI & partner B-schools)',
    category: 'application',
    icon: '📋',
    date: '2026-07-15',
    endDate: '2026-12-06',
    desc: 'XLRI registration for XAT 2027 (MBA / PGDM after graduation, accepted by XLRI Jamshedpur and many other B-schools). Last date 6 Dec 2026. Computer-based exam on 3 Jan 2027.',
    link: 'xatonline.in',
    priority: 'normal',
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
    id: 'ugc-net-dec-2026-exam',
    title: 'UGC NET December 2026 — Exam Days',
    category: 'exam',
    icon: '📝',
    date: '2026-12-14',
    endDate: '2026-12-21',
    desc: 'NTA computer-based test for Assistant Professor / JRF eligibility (after PG). Exam from 14 Dec 2026, with the last days on 18/19 Dec and a buffer day on 21 Dec — the subject-wise schedule, city slip and admit card are released on ugcnet.nta.nic.in. Registration is closed.',
    link: 'ugcnet.nta.nic.in',
    priority: 'normal',
    tentative: true,
    level: 'National',
  },
  {
    id: 'gate-2027-exam',
    title: 'GATE 2027 — Exam Days',
    category: 'exam',
    icon: '📝',
    date: '2027-02-06',
    endDate: '2027-02-21',
    desc: 'Conducted by IIT Madras on 6, 7, 13, 14, 20 & 21 Feb 2027 (registration closed 12 Oct 2026). Qualifying score opens M.Tech admissions at IITs/NITs and PSU recruitment.',
    link: 'gate2027.iitm.ac.in',
    priority: 'high',
    level: 'National',
  },
  {
    id: 'iit-jam-2027-exam',
    title: 'IIT JAM 2027 — Exam Day',
    category: 'exam',
    icon: '📝',
    date: '2027-02-14',
    desc: 'Joint Admission Test for M.Sc at IITs, conducted by IIT Kharagpur in two shifts (registration closed 12 Oct 2026). Result expected 18 Mar 2027.',
    link: 'jam.iitkgp.ac.in',
    priority: 'normal',
    level: 'National',
  },
  {
    id: 'jee-main-2027-s1',
    title: 'JEE Main 2027 — Session 1 Exam',
    category: 'exam',
    icon: '📝',
    date: '2027-01-20',
    endDate: '2027-01-28',
    desc: 'PCM students. Per the NTA Session 1 notification (24 Oct 2026), the exam is held on 20, 21, 22, 23, 24 & 28 Jan 2027. Registration closes 22 Nov 2026. Session 2 is expected in early April 2027.',
    link: 'jeemain.nta.nic.in',
    priority: 'high',
    level: 'National',
  },

];
