// Vazhi — Subject-Strength → UG Courses map (Phase 2 of Home Wizard)
// Drives Step 3 of the home wizard: "What are you strongest in?"
// Categories are filtered by the Step 2 subject pick (forSubjects[]).
// Within a category, courses are grouped into sub-headings (Computer Science,
// Civil…) for the slide-style categorised list output.
//
// Subject IDs in forSubjects[] match data/wizard.js WZ_SUBJ ids:
//   'PCM' | 'PCB' | 'PCMB' | 'Commerce' | 'Arts' | 'unknown'
//
// 'exam' is a short hint string. If a course name has an entry in STREAMS
// (data/courses.js) or matches a TNEA branch (data/tnea.js), the wizard will
// render a "See colleges →" deep-link; otherwise the row stays text-only.

const SUBJECT_STRENGTHS = [
  // ── 1. Mathematics-dominant ──────────────────────────────────────────────
  {
    id: 'maths',
    ico: '🧮',
    en: 'Mathematics-dominant',
    ta: 'கணிதம் சார்ந்த',
    tagline: {
      en: "Strong in Maths? These UG branches lean on logical and quantitative thinking.",
      ta: 'கணிதத்தில் வலிமை உள்ளதா? இந்த படிப்புகள் தர்க்கம் மற்றும் எண் சார்ந்த சிந்தனையை அடிப்படையாகக் கொண்டுள்ளன.'
    },
    forSubjects: ['PCM', 'PCMB', 'unknown'],
    groups: [
      {
        label: { en: 'Computer Science', ta: 'கணினி அறிவியல்' },
        courses: [
          { name: 'Computer Science and Engineering', exam: 'JEE Main / TNEA' },
          { name: 'Artificial Intelligence & Data Science', exam: 'JEE Main / TNEA' },
          { name: 'Information Technology', exam: 'TNEA' },
          { name: 'Cyber Security', exam: 'TNEA' },
          { name: 'Internet of Things (IoT)', exam: 'TNEA' },
        ],
      },
      {
        label: { en: 'Civil & Construction', ta: 'கட்டுமானம்' },
        courses: [
          { name: 'Civil Engineering', exam: 'JEE Main / TNEA' },
          { name: 'Civil and Structural Engineering', exam: 'TNEA' },
          { name: 'Civil Engineering (Environmental)', exam: 'TNEA' },
          { name: 'Geo-Informatics', exam: 'TNEA' },
        ],
      },
      {
        label: { en: 'Pure Maths & Statistics', ta: 'கணிதம் & புள்ளியியல்' },
        courses: [
          { name: 'B.Sc Mathematics (Hons)', exam: 'CUET-UG' },
          { name: 'B.Stat (ISI)', exam: 'ISI Admission Test' },
          { name: 'B.Math (Hons) — CMI', exam: 'CMI Entrance' },
          { name: 'Integrated MSc Maths — IISER / NISER', exam: 'IAT / NEST' },
        ],
      },
    ],
  },

  // ── 2. Maths + Physics ───────────────────────────────────────────────────
  {
    id: 'maths-physics',
    ico: '⚛',
    en: 'Maths + Physics',
    ta: 'கணிதம் + பௌதீகம்',
    tagline: {
      en: "Comfortable with both Maths and Physics? Core engineering branches build on this.",
      ta: 'கணிதம் & பௌதீகம் இரண்டிலும் வலிமையா? முக்கிய பொறியியல் பிரிவுகள் இவற்றை அடிப்படையாகக் கொண்டுள்ளன.'
    },
    forSubjects: ['PCM', 'PCMB', 'unknown'],
    groups: [
      {
        label: { en: 'Electronics & Electrical', ta: 'மின்னணு & மின்' },
        courses: [
          { name: 'Electronics and Communication Engineering', exam: 'JEE Main / TNEA' },
          { name: 'Electrical and Electronics Engineering', exam: 'JEE Main / TNEA' },
          { name: 'Electronics and Telecommunication Engineering', exam: 'TNEA' },
          { name: 'Instrumentation and Control Engineering', exam: 'TNEA' },
        ],
      },
      {
        label: { en: 'Mechanical & Allied', ta: 'இயந்திரம் & சார்ந்த' },
        courses: [
          { name: 'Mechanical Engineering', exam: 'JEE Main / TNEA' },
          { name: 'Mechatronics Engineering', exam: 'TNEA' },
          { name: 'Robotics and Automation', exam: 'TNEA' },
          { name: 'Automobile Engineering', exam: 'TNEA' },
          { name: 'Metallurgical Engineering', exam: 'JEE Main / TNEA' },
        ],
      },
      {
        label: { en: 'Aerospace & Marine', ta: 'வான் & கடல்' },
        courses: [
          { name: 'Aerospace Engineering', exam: 'JEE Main' },
          { name: 'Aeronautical Engineering', exam: 'TNEA' },
          { name: 'Marine Engineering', exam: 'IMU CET' },
          { name: 'Naval Architecture and Ocean Engineering', exam: 'JEE Main' },
        ],
      },
      {
        label: { en: 'Pure Physics & Research', ta: 'பௌதீகம் & ஆராய்ச்சி' },
        courses: [
          { name: 'B.Sc Physics (Hons)', exam: 'CUET-UG' },
          { name: 'Integrated MSc Physics — IISER / NISER', exam: 'IAT / NEST' },
          { name: 'BS-MS Dual Degree — IIST', exam: 'JEE Advanced' },
        ],
      },
    ],
  },

  // ── 3. Chemistry-dominant ────────────────────────────────────────────────
  {
    id: 'chemistry',
    ico: '⚗',
    en: 'Chemistry-dominant',
    ta: 'வேதியியல் சார்ந்த',
    tagline: {
      en: "Love Chemistry? These branches and degrees centre on chemical sciences.",
      ta: 'வேதியியல் பிடிக்குமா? இவை வேதியியல் அறிவியலை மையமாகக் கொண்ட படிப்புகள்.'
    },
    forSubjects: ['PCM', 'PCB', 'PCMB', 'unknown'],
    groups: [
      {
        label: { en: 'Chemical & Process Engineering', ta: 'வேதியியல் பொறியியல்' },
        courses: [
          { name: 'Chemical Engineering', exam: 'JEE Main / TNEA' },
          { name: 'Chemical and Electrochemical Engineering', exam: 'TNEA' },
          { name: 'Petrochemical Engineering', exam: 'TNEA' },
          { name: 'Petroleum Engineering', exam: 'JEE Main' },
        ],
      },
      {
        label: { en: 'Materials & Manufacturing', ta: 'பொருள் & உற்பத்தி' },
        courses: [
          { name: 'Textile Chemistry', exam: 'TNEA' },
          { name: 'Textile Technology', exam: 'JEE Main / TNEA' },
          { name: 'Ceramic Technology', exam: 'TNEA' },
          { name: 'Pharmaceutical Technology', exam: 'TNEA' },
          { name: 'Rubber and Plastic Technology', exam: 'TNEA' },
          { name: 'Handloom and Textile Technology', exam: 'TNEA' },
        ],
      },
      {
        label: { en: 'Pure Chemistry & Research', ta: 'வேதியியல் & ஆராய்ச்சி' },
        courses: [
          { name: 'B.Sc Chemistry (Hons)', exam: 'CUET-UG' },
          { name: 'Integrated MSc Chemistry — IISER / NISER', exam: 'IAT / NEST' },
        ],
      },
    ],
  },

  // ── 4. Biology (Engineering & Applied) ───────────────────────────────────
  {
    id: 'bio-applied',
    ico: '🌱',
    en: 'Biology (Engineering & Applied)',
    ta: 'உயிரியல் (பொறியியல் & பயன்பாடு)',
    tagline: {
      en: "Bio + curiosity about engineering or environment? These bridge biology and tech.",
      ta: 'உயிரியல் + பொறியியல்/சுற்றுச்சூழல் ஆர்வமா? இவை அறிவியலையும் தொழில்நுட்பத்தையும் இணைக்கின்றன.'
    },
    forSubjects: ['PCB', 'PCMB', 'unknown'],
    groups: [
      {
        label: { en: 'Biotechnology', ta: 'உயிர்த் தொழில்நுட்பம்' },
        courses: [
          { name: 'Biotechnology', exam: 'JEE Main / TNEA' },
          { name: 'Industrial Biotechnology', exam: 'TNEA' },
          { name: 'Bio Medical Engineering', exam: 'TNEA' },
          { name: 'Biotechnology and Biochemical Engineering', exam: 'TNEA' },
        ],
      },
      {
        label: { en: 'Food, Agri & Environment', ta: 'உணவு, வேளாண் & சூழல்' },
        courses: [
          { name: 'Food Technology', exam: 'TNEA / ICAR' },
          { name: 'Agriculture Engineering', exam: 'ICAR / TNEA' },
          { name: 'B.Sc Agriculture', exam: 'ICAR / TNAU' },
          { name: 'B.Sc Horticulture', exam: 'ICAR / TNAU' },
          { name: 'Environmental Engineering', exam: 'TNEA' },
          { name: 'B.Sc Fisheries', exam: 'ICAR' },
        ],
      },
      {
        label: { en: 'Pure & Research-focused Bio', ta: 'அடிப்படை & ஆராய்ச்சி' },
        courses: [
          { name: 'B.Sc Biotechnology', exam: 'CUET-UG' },
          { name: 'B.Sc Microbiology', exam: 'CUET-UG' },
          { name: 'B.Sc Marine Biology', exam: 'TN State Admissions' },
          { name: 'Integrated MSc Biology — IISER / NISER', exam: 'IAT / NEST' },
        ],
      },
    ],
  },

  // ── 5. Biology (Medical route) ───────────────────────────────────────────
  {
    id: 'bio-medical',
    ico: '🩺',
    en: 'Biology (Medical route)',
    ta: 'உயிரியல் (மருத்துவ பாதை)',
    tagline: {
      en: "Want to treat or care for people? These are the medical and allied-health degrees.",
      ta: 'மக்களை குணப்படுத்த / பராமரிக்க விரும்புகிறீர்களா? இவை மருத்துவம் & சார்ந்த படிப்புகள்.'
    },
    forSubjects: ['PCB', 'PCMB', 'unknown'],
    groups: [
      {
        label: { en: 'Modern Medicine', ta: 'நவீன மருத்துவம்' },
        courses: [
          { name: 'MBBS', exam: 'NEET-UG' },
          { name: 'BDS (Dental)', exam: 'NEET-UG' },
          { name: 'BVSc (Veterinary)', exam: 'NEET-UG (15% AIQ) / TANUVAS' },
        ],
      },
      {
        label: { en: 'AYUSH (Indian Systems)', ta: 'AYUSH (இந்திய மருத்துவம்)' },
        courses: [
          { name: 'BAMS (Ayurveda)', exam: 'NEET-UG' },
          { name: 'BHMS (Homeopathy)', exam: 'NEET-UG' },
          { name: 'BUMS (Unani)', exam: 'NEET-UG' },
          { name: 'BSMS (Siddha)', exam: 'NEET-UG' },
          { name: 'BNYS (Yoga & Naturopathy)', exam: 'NEET-UG' },
        ],
      },
      {
        label: { en: 'Pharmacy', ta: 'மருந்தியல்' },
        courses: [
          { name: 'B.Pharm', exam: 'TN State Merit / GPAT' },
          { name: 'Pharm.D (6 yrs)', exam: 'TN State Merit' },
        ],
      },
      {
        label: { en: 'Nursing & Allied Health', ta: 'நர்சிங் & சார்ந்த சுகாதாரம்' },
        courses: [
          { name: 'B.Sc Nursing', exam: 'TN DME Merit' },
          { name: 'BPT (Physiotherapy)', exam: 'TN State Merit' },
          { name: 'B.Sc Allied Health Sciences', exam: 'TN State Merit' },
          { name: 'B.Sc Medical Lab Tech / Radiology / OT Tech', exam: 'TN State Merit' },
        ],
      },
    ],
  },

  // ── 6. Numbers & Business ────────────────────────────────────────────────
  {
    id: 'numbers-business',
    ico: '📊',
    en: 'Numbers & Business',
    ta: 'எண்கள் & வணிகம்',
    tagline: {
      en: "Love numbers, money, or markets? These are the commerce, finance and management routes.",
      ta: 'எண்கள், பணம், சந்தைகள் பிடிக்குமா? இவை வணிகம், நிதி & நிர்வாக வழிகள்.'
    },
    forSubjects: ['Commerce', 'PCM', 'PCMB', 'Arts', 'unknown'],
    groups: [
      {
        label: { en: 'B.Com & Specialisations', ta: 'B.Com & சிறப்புப் பிரிவுகள்' },
        courses: [
          { name: 'B.Com (General)', exam: 'CUET-UG / State Merit' },
          { name: 'B.Com (CA / Accounting & Finance)', exam: 'CUET-UG / State Merit' },
          { name: 'B.Com (Banking & Insurance)', exam: 'State Merit' },
          { name: 'B.Com (Co-operative)', exam: 'State Merit' },
        ],
      },
      {
        label: { en: 'Professional Courses', ta: 'தொழில்முறை படிப்புகள்' },
        courses: [
          { name: 'CA Foundation (Chartered Accountancy)', exam: 'ICAI CA Foundation' },
          { name: 'CMA Foundation (Cost Accounting)', exam: 'ICMAI CMA Foundation' },
          { name: 'CS Foundation (Company Secretary)', exam: 'ICSI CSEET' },
          { name: 'Actuarial Science (IAI)', exam: 'IAI ACET' },
        ],
      },
      {
        label: { en: 'Management & Economics', ta: 'நிர்வாகம் & பொருளியல்' },
        courses: [
          { name: 'BBA (Bachelor of Business Administration)', exam: 'CUET-UG / IPMAT (IIMs)' },
          { name: 'Integrated BBA-MBA (IIMs)', exam: 'IPMAT' },
          { name: 'B.A Economics (Hons)', exam: 'CUET-UG' },
          { name: 'B.Sc Statistics', exam: 'CUET-UG' },
        ],
      },
    ],
  },

  // ── 7. Languages & Society ───────────────────────────────────────────────
  {
    id: 'languages-society',
    ico: '📜',
    en: 'Languages & Society',
    ta: 'மொழிகள் & சமூகம்',
    tagline: {
      en: "Drawn to reading, writing, people and ideas? These BA / social-science routes fit.",
      ta: 'வாசிப்பு, எழுத்து, மக்கள் & கருத்துகள் பிடிக்குமா? இந்த BA / சமூக அறிவியல் பாதைகள் பொருந்தும்.'
    },
    forSubjects: ['Arts', 'Commerce', 'unknown'],
    groups: [
      {
        label: { en: 'Languages & Literature', ta: 'மொழி & இலக்கியம்' },
        courses: [
          { name: 'B.A English Literature', exam: 'CUET-UG / State Merit' },
          { name: 'B.A Tamil', exam: 'CUET-UG / State Merit' },
          { name: 'B.A Hindi / Regional Language', exam: 'CUET-UG / State Merit' },
          { name: 'B.A Foreign Languages (French / German / Japanese)', exam: 'CUET-UG' },
        ],
      },
      {
        label: { en: 'Social Sciences', ta: 'சமூக அறிவியல்' },
        courses: [
          { name: 'B.A History', exam: 'CUET-UG' },
          { name: 'B.A Political Science', exam: 'CUET-UG' },
          { name: 'B.A Public Administration', exam: 'CUET-UG' },
          { name: 'B.A Sociology', exam: 'CUET-UG' },
          { name: 'B.A Psychology', exam: 'CUET-UG' },
          { name: 'B.A Anthropology', exam: 'CUET-UG' },
          { name: 'Bachelor of Social Work (BSW)', exam: 'CUET-UG / TISS-BAT' },
        ],
      },
      {
        label: { en: 'Media & Communication', ta: 'ஊடகம் & தொடர்பு' },
        courses: [
          { name: 'B.A Journalism & Mass Communication', exam: 'CUET-UG / IIMC-EE' },
          { name: 'BA Mass Communication & Media Studies', exam: 'CUET-UG' },
          { name: 'B.A Film Studies', exam: 'FTII / SRFTI Entrance' },
        ],
      },
    ],
  },

  // ── 8. Law & Civil Services Prep ─────────────────────────────────────────
  {
    id: 'law-civils',
    ico: '⚖',
    en: 'Law & Civil Services Prep',
    ta: 'சட்டம் & பொதுச் சேவை',
    tagline: {
      en: "Aiming for law or civil services? 5-year integrated programs and prep-friendly degrees.",
      ta: 'சட்டம் / பொதுச் சேவை இலக்கா? 5-ஆண்டு integrated programs & UPSC-தயாரிப்பு படிப்புகள்.'
    },
    forSubjects: ['Arts', 'Commerce', 'PCM', 'PCB', 'PCMB', 'unknown'],
    groups: [
      {
        label: { en: 'Integrated Law (5 years)', ta: 'integrated சட்டம் (5 ஆண்டு)' },
        courses: [
          { name: 'B.A LL.B (Hons)', exam: 'CLAT / AILET' },
          { name: 'BBA LL.B (Hons)', exam: 'CLAT' },
          { name: 'B.Com LL.B', exam: 'CLAT' },
          { name: 'B.Sc LL.B', exam: 'CLAT' },
        ],
      },
      {
        label: { en: 'Civil Services Foundation', ta: 'பொதுச் சேவை அடித்தளம்' },
        courses: [
          { name: 'B.A Public Administration', exam: 'CUET-UG' },
          { name: 'B.A Political Science (Hons)', exam: 'CUET-UG' },
          { name: 'B.A History (Hons)', exam: 'CUET-UG' },
          { name: 'B.A Economics (Hons)', exam: 'CUET-UG' },
        ],
      },
    ],
  },

  // ── 9. Design & Planning ─────────────────────────────────────────────────
  {
    id: 'design-planning',
    ico: '🎨',
    en: 'Design & Planning',
    ta: 'வடிவமைப்பு & திட்டமிடல்',
    tagline: {
      en: "Visual mind? You can design buildings, products, clothes, animations and cities.",
      ta: 'காட்சி சார்ந்த சிந்தனையா? கட்டிடம், பொருள், ஆடை, அனிமேஷன் & நகரம் வடிவமைக்கலாம்.'
    },
    forSubjects: ['PCM', 'PCB', 'PCMB', 'Commerce', 'Arts', 'unknown'],
    groups: [
      {
        label: { en: 'Architecture & Planning', ta: 'கட்டிடக்கலை & திட்டமிடல்' },
        courses: [
          { name: 'B.Arch (5 years)', exam: 'NATA / JEE Paper 2' },
          { name: 'B.Plan (Urban & Regional Planning)', exam: 'NATA' },
        ],
      },
      {
        label: { en: 'Design (NID / NIFT / Govt)', ta: 'வடிவமைப்பு' },
        courses: [
          { name: 'Bachelor of Design (B.Des)', exam: 'NID DAT / UCEED' },
          { name: 'B.Des Fashion Design', exam: 'NIFT Entrance' },
          { name: 'B.Des Communication Design', exam: 'NID DAT / NIFT' },
          { name: 'Bachelor of Fine Arts (BFA)', exam: 'State / Central Univ' },
        ],
      },
      {
        label: { en: 'Applied Design & Tech', ta: 'பயன்பாட்டு வடிவமைப்பு' },
        courses: [
          { name: 'Interior Design', exam: 'NID / State Merit' },
          { name: 'Fashion Technology', exam: 'TNEA / NIFT' },
          { name: 'Apparel Technology', exam: 'TNEA' },
          { name: 'Animation & Visual Effects', exam: 'State Merit' },
        ],
      },
    ],
  },

  // ── 10. Performing Arts & Sports ─────────────────────────────────────────
  {
    id: 'performing-sports',
    ico: '🎭',
    en: 'Performing Arts & Sports',
    ta: 'கலை & விளையாட்டு',
    tagline: {
      en: "Music, dance, theatre, film, or sport — these UG paths formalise the talent.",
      ta: 'இசை, நடனம், நாடகம், திரைப்படம், விளையாட்டு — இவற்றை முறையாகப் படிக்கலாம்.'
    },
    forSubjects: ['Arts', 'Commerce', 'PCM', 'PCB', 'PCMB', 'unknown'],
    groups: [
      {
        label: { en: 'Music & Dance', ta: 'இசை & நடனம்' },
        courses: [
          { name: 'B.A Music (Carnatic / Hindustani / Western)', exam: 'State / Central Univ' },
          { name: 'B.A Dance (Bharatanatyam etc.)', exam: 'State / Central Univ' },
          { name: 'Bachelor of Performing Arts', exam: 'State / Central Univ' },
        ],
      },
      {
        label: { en: 'Theatre, Film & TV', ta: 'நாடகம், திரை & TV' },
        courses: [
          { name: 'B.A Theatre Arts', exam: 'NSD / State' },
          { name: 'B.Sc Film & TV Production', exam: 'FTII / SRFTI Entrance' },
          { name: 'Bachelor of Visual Arts', exam: 'State Merit' },
        ],
      },
      {
        label: { en: 'Sports & Physical Education', ta: 'விளையாட்டு & உடற்கல்வி' },
        courses: [
          { name: 'B.P.E.S (Physical Education & Sports)', exam: 'TNPESU / LNIPE' },
          { name: 'B.P.Ed (Physical Education)', exam: 'State / LNIPE' },
          { name: 'B.Sc Sports Coaching', exam: 'TNPESU / LNIPE' },
        ],
      },
    ],
  },

  // ── 11. Niche / Vocational (always shown) ────────────────────────────────
  {
    id: 'niche',
    ico: '🌾',
    en: 'Niche / Stipend-paying routes',
    ta: 'அரிய & ஊதியம் தரும் வழிகள்',
    tagline: {
      en: "Stipend-paying or low-competition routes most students never hear about. Worth a look.",
      ta: 'பெரும்பாலான மாணவர்கள் கேள்விப்படாத, ஊதியம் தரும் / குறைந்த போட்டியுள்ள வழிகள்.'
    },
    forSubjects: ['PCM', 'PCB', 'PCMB', 'Commerce', 'Arts', 'unknown'],
    groups: [
      {
        label: { en: 'Defence & Stipend-paying', ta: 'பாதுகாப்பு & ஊதியம்' },
        courses: [
          { name: 'NDA — National Defence Academy', exam: 'UPSC NDA' },
          { name: 'Indian Maritime University (Marine Eng)', exam: 'IMU CET' },
          { name: 'IGCAR / BARC Training School (post-degree)', exam: 'OCES/DGFS' },
          { name: 'NPTI Power Engineering Diploma', exam: 'NPTI Entrance' },
        ],
      },
      {
        label: { en: 'Specialised Manufacturing', ta: 'சிறப்பு உற்பத்தி' },
        courses: [
          { name: 'Leather Technology', exam: 'TNEA' },
          { name: 'Printing & Packaging Technology', exam: 'TNEA' },
          { name: 'Plastic Technology (CIPET)', exam: 'CIPET JEE' },
          { name: 'Mining Engineering', exam: 'JEE Main / TNEA' },
          { name: 'Safety and Fire Engineering', exam: 'TNEA / State' },
          { name: 'Footwear Design & Technology (FDDI)', exam: 'FDDI AIST' },
        ],
      },
      {
        label: { en: 'Hospitality, Tourism & Catering', ta: 'விருந்தோம்பல் & சுற்றுலா' },
        courses: [
          { name: 'B.Sc Hospitality & Hotel Administration (IHM)', exam: 'NCHMCT JEE' },
          { name: 'BBA Tourism / Hospitality', exam: 'IITTM / State' },
          { name: 'Bachelor of Catering Technology', exam: 'State Merit' },
        ],
      },
      {
        label: { en: 'Agriculture & Co-operatives', ta: 'வேளாண் & கூட்டுறவு' },
        courses: [
          { name: 'B.Sc Sericulture', exam: 'TNAU / ICAR' },
          { name: 'B.Sc Forestry', exam: 'ICAR' },
          { name: 'B.A Co-operation', exam: 'State Merit' },
        ],
      },
    ],
  },
];
