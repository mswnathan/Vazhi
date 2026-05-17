// Vazhi — Internships Data
// Only government, PSU, and research internships. See agents/internship-curator.md.
// Schema: { id, name, short, body, type, for, ugStream[], duration, stipend, season, deadline, website, note, badge, bc }

const INTERNSHIPS = [

  // ── GOVERNMENT / POLICY ───────────────────────────────────────────────────

  {
    id: 'pm-internship',
    name: 'PM Internship Scheme',
    short: 'PM Internship',
    body: 'Ministry of Corporate Affairs, Govt of India',
    type: 'Government',
    for: 'Indian citizens aged 21–24 not in full-time employment or education — underserved districts prioritised',
    ugStream: ['Any'],
    duration: '12 months',
    stipend: '₹5,000/month + ₹6,000 one-time grant',
    season: 'Year-round (rolling intakes)',
    deadline: '',
    website: 'pminternship.mca.gov.in',
    note: 'Placed at top 500 companies (Reliance, TCS, L&T, ONGC etc.). Students from districts with low higher-education outcomes get priority. ₹2 lakh accident insurance included.',
    badge: 'Govt Scheme',
    bc: 'amber',
  },

  // ── INTERNATIONAL (GOVERNMENT-FUNDED) ────────────────────────────────────

  {
    id: 'meti-japan',
    name: 'METI Japan — Industrial Human Resources Development Internship',
    short: 'METI Japan',
    body: 'Ministry of Economy, Trade and Industry, Japan (METI)',
    type: 'International',
    for: 'Engineering, Technology, and Science graduates (UG/PG) from India and ASEAN countries',
    ugStream: ['Engineering', 'Science'],
    duration: '3–6 months',
    stipend: 'Provided by host company (varies)',
    season: 'Year-round (rolling applications)',
    deadline: '',
    website: 'jetro.go.jp',
    note: 'Placed at Japanese manufacturing, technology and infrastructure companies. Japanese language not required for many roles. Government-sponsored bilateral programme.',
    badge: 'Japan Govt',
    bc: 'accent',
  },

  // ── CSIR / NATIONAL LABS ──────────────────────────────────────────────────

  {
    id: 'csir-iicb',
    name: 'CSIR-IICB Skill Development Program',
    short: 'CSIR-IICB',
    body: 'CSIR — Indian Institute of Chemical Biology, Kolkata',
    type: 'Research',
    for: 'UG/PG students in Life Sciences, Chemistry, Biochemistry, Microbiology',
    ugStream: ['Science', 'Medical'],
    duration: '1–3 months',
    stipend: 'No stipend — certificate provided',
    season: 'May–July (summer program)',
    deadline: '',
    website: 'iicb.res.in',
    note: 'Hands-on training in drug discovery, molecular biology and chemical biology at one of India\'s premier biomedical research institutes. Apply through the institute portal.',
    badge: 'CSIR Lab',
    bc: 'teal',
  },

  // ── SPACE & DEFENCE / SPECIALISED RESEARCH ────────────────────────────────

  {
    id: 'ccm-composites',
    name: 'Centre for Composite Materials (CCM) Internship',
    short: 'CCM Internship',
    body: 'Centre for Composite Materials — DRDO / Defence R&D',
    type: 'Research',
    for: 'B.Tech/M.Tech students in Materials Engineering, Aerospace, Mechanical, or Chemical Engineering',
    ugStream: ['Engineering'],
    duration: '4–8 weeks',
    stipend: 'Varies',
    season: 'May–July',
    deadline: '',
    website: 'drdo.gov.in',
    note: 'Exposure to advanced composite materials for aerospace and defence applications. Check the specific DRDO lab website for current internship openings and application process.',
    badge: 'Defence R&D',
    bc: 'accent',
  },

  // ── AGRICULTURE / ENVIRONMENT ─────────────────────────────────────────────

  {
    id: 'icrisat-internship',
    name: 'ICRISAT Research Internship',
    short: 'ICRISAT',
    body: 'International Crops Research Institute for the Semi-Arid Tropics (ICRISAT)',
    type: 'Research',
    for: 'UG/PG students in Agriculture, Plant Sciences, Biotechnology, Genomics, or Data Science',
    ugStream: ['Science', 'Engineering'],
    duration: '2–6 months',
    stipend: '₹10,000–20,000/month (varies by program)',
    season: 'Year-round',
    deadline: '',
    website: 'icrisat.org',
    note: 'International research centre at Patancheru, Hyderabad. Works on drought-resistant crops for semi-arid tropics. Multinational team with strong publication and networking opportunities.',
    badge: 'Agriculture',
    bc: 'green',
  },

  {
    id: 'ias-srfp',
    name: 'Indian Academy of Sciences — Summer Research Fellowship Programme (SRFP)',
    short: 'IAS SRFP',
    body: 'Indian Academy of Sciences (Bengaluru) — jointly with INSA & NASI',
    type: 'Research',
    for: 'UG / PG / first-year PhD students in Science, Engineering and Medicine — selected nationally on merit',
    ugStream: ['Science', 'Engineering', 'Medical'],
    duration: '8 weeks (May–Jul, flexible)',
    stipend: '₹17,000 (one-time) + train fare (II AC) reimbursement',
    season: 'Summer (May–Jul)',
    deadline: '',
    website: 'web-japps.ias.ac.in/srfp',
    note: 'India\'s flagship summer research fellowship — work with Academy Fellows / Associates at IISc, IITs, IISERs, TIFR, NCBS, CSIR labs etc. Applications usually open Nov–Dec; results Feb–Mar. Single application gives access to mentors across three academies.',
    badge: 'National Merit',
    bc: 'purple',
  },

];
