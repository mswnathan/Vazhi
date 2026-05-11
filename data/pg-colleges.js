// Vazhi — PG Universities & Colleges
// Same schema as colleges-tn.js but for PG programs
//
// New examCss values for PG:
//   ce-gate    — GATE
//   ce-cat     — CAT / XAT / GMAT (management)
//   ce-jam     — IIT JAM
//   ce-net     — CSIR-NET / UGC-NET / JEST
//   ce-cuetpg  — CUET-PG (central universities)
//   ce-neetpg  — NEET-PG / INI-CET
//   ce-own     — Institute's own entrance (existing)
//   ce-merit   — Merit / interview (existing)
//
// type: 'Central' | 'State' | 'Deemed' | 'INI'
//   INI = Institute of National Importance (IISc, TISS etc.)

const PG_COLLEGES = [

  // ═══════════════════════════════════════════════
  // CENTRAL UNIVERSITIES
  // ═══════════════════════════════════════════════

  {
    name: 'Jawaharlal Nehru University',
    short: 'JNU Delhi',
    type: 'Central',
    district: 'New Delhi',
    state: 'Delhi',
    naac: 'A++',
    nirf: 'Rank 2 (University) — NIRF 2024',
    affil: 'Central University — established 1969',
    website: 'jnu.ac.in',
    streams: ['Arts & Science', 'Law', 'Management', 'Engineering'],
    specialNote: 'India\'s premier university for Social Sciences, International Studies, and Sciences. Strong fellowship & scholarship culture. CUET-PG for most programs.',
    programGroups: [
      {
        stream: 'Social Sciences & Humanities',
        programs: [
          { name: 'M.A. Economics', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'M.A. History', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'M.A. Political Science', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'M.A. Sociology', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'M.A. International Relations', exam: 'CUET-PG / JNU own', examCss: 'ce-cuetpg' },
        ],
      },
      {
        stream: 'Sciences',
        programs: [
          { name: 'M.Sc Physics / Chemistry / Maths / Life Sciences', exam: 'CUET-PG / IIT JAM', examCss: 'ce-cuetpg' },
          { name: 'M.Sc Computer Science', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'M.Sc Environmental Sciences', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
        ],
      },
      {
        stream: 'Research (PhD)',
        programs: [
          { name: 'PhD — All disciplines', exam: 'CSIR-NET / UGC-NET / GATE + Interview', examCss: 'ce-net' },
        ],
      },
    ],
  },

  {
    name: 'University of Hyderabad',
    short: 'UoH Hyderabad',
    type: 'Central',
    district: 'Hyderabad',
    state: 'Telangana',
    naac: 'A+',
    nirf: 'Rank 6 (University) — NIRF 2024',
    affil: 'Central University — established 1974',
    website: 'uohyd.ac.in',
    streams: ['Arts & Science', 'Engineering', 'Management'],
    specialNote: 'One of India\'s top central universities for Science, Social Science and Humanities research. Strong PhD programs with fellowships.',
    programGroups: [
      {
        stream: 'Sciences',
        programs: [
          { name: 'M.Sc Physics', exam: 'CUET-PG / IIT JAM', examCss: 'ce-jam' },
          { name: 'M.Sc Chemistry', exam: 'CUET-PG / IIT JAM', examCss: 'ce-jam' },
          { name: 'M.Sc Mathematics & Statistics', exam: 'CUET-PG / IIT JAM', examCss: 'ce-jam' },
          { name: 'M.Sc Biochemistry / Biotechnology / Life Sciences', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'M.Sc Computer Science', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
        ],
      },
      {
        stream: 'Social Sciences & Humanities',
        programs: [
          { name: 'M.A. Economics / Sociology / History / Political Science', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'M.A. English / Telugu / Hindi / Urdu', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
        ],
      },
      {
        stream: 'Engineering & Technology',
        programs: [
          { name: 'M.Tech Computer Science (5-year integrated PhD possible)', exam: 'GATE', examCss: 'ce-gate' },
        ],
      },
      {
        stream: 'Research (PhD)',
        programs: [
          { name: 'PhD — Sciences, Social Sciences, Humanities', exam: 'CSIR-NET / UGC-NET / GATE + Interview', examCss: 'ce-net' },
        ],
      },
    ],
  },

  {
    name: 'Banaras Hindu University',
    short: 'BHU Varanasi',
    type: 'Central',
    district: 'Varanasi',
    state: 'Uttar Pradesh',
    naac: 'A',
    nirf: 'Rank 5 (University) — NIRF 2024',
    affil: 'Central University — established 1916',
    website: 'bhu.ac.in',
    streams: ['Arts & Science', 'Engineering', 'Medical', 'Management', 'Law'],
    specialNote: 'One of Asia\'s largest residential universities. Strong in Sciences, Humanities, Law and Sanskrit studies. IIT-BHU (on campus) for engineering.',
    programGroups: [
      {
        stream: 'Sciences',
        programs: [
          { name: 'M.Sc Physics / Chemistry / Maths / Botany / Zoology', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'M.Sc Computer Science', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
        ],
      },
      {
        stream: 'Humanities & Social Sciences',
        programs: [
          { name: 'M.A. Economics / History / Political Science / Philosophy', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'LL.M.', exam: 'CLAT-PG / BHU Law entrance', examCss: 'ce-own' },
        ],
      },
      {
        stream: 'Engineering (IIT-BHU)',
        programs: [
          { name: 'M.Tech — all engineering disciplines', exam: 'GATE', examCss: 'ce-gate' },
        ],
      },
      {
        stream: 'Management',
        programs: [
          { name: 'MBA (Faculty of Management)', exam: 'CAT', examCss: 'ce-cat' },
        ],
      },
    ],
  },

  {
    name: 'Pondicherry University',
    short: 'Pondicherry Univ',
    type: 'Central',
    district: 'Puducherry',
    state: 'Puducherry',
    naac: 'A',
    nirf: 'Rank 38 (University) — NIRF 2024',
    affil: 'Central University — established 1985',
    website: 'pondiuni.edu.in',
    streams: ['Arts & Science', 'Engineering', 'Management', 'Law'],
    specialNote: 'Closest central university to Tamil Nadu — preferred by TN students. Strong Tamil & French studies, Sciences, Management. CUET-PG for most programs.',
    programGroups: [
      {
        stream: 'Sciences & Computer Science',
        programs: [
          { name: 'M.Sc Computer Science / IT', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'M.Sc Physics / Chemistry / Maths / Statistics', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'M.Sc Biochemistry / Biotechnology / Microbiology', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
        ],
      },
      {
        stream: 'Humanities & Social Sciences',
        programs: [
          { name: 'M.A. Tamil / English / French / Linguistics', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'M.A. Economics / Sociology / History / Political Science', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'M.A. Tourism Administration', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
        ],
      },
      {
        stream: 'Management & Law',
        programs: [
          { name: 'MBA', exam: 'CAT / CUET-PG', examCss: 'ce-cat' },
          { name: 'LL.M.', exam: 'CLAT-PG', examCss: 'ce-own' },
        ],
      },
      {
        stream: 'Engineering',
        programs: [
          { name: 'M.Tech (various disciplines)', exam: 'GATE', examCss: 'ce-gate' },
        ],
      },
    ],
  },

  {
    name: 'Jamia Millia Islamia',
    short: 'JMI Delhi',
    type: 'Central',
    district: 'New Delhi',
    state: 'Delhi',
    naac: 'A++',
    nirf: 'Rank 8 (University) — NIRF 2024',
    affil: 'Central University — established 1920',
    website: 'jmi.ac.in',
    streams: ['Engineering', 'Arts & Science', 'Law', 'Management'],
    specialNote: 'Strong in Engineering, Social Sciences, Mass Communication and Law. Notable for Mass Communication and Journalism programs.',
    programGroups: [
      {
        stream: 'Engineering & Technology',
        programs: [
          { name: 'M.Tech (ECE, CSE, Civil, Mechanical)', exam: 'GATE', examCss: 'ce-gate' },
        ],
      },
      {
        stream: 'Social Sciences & Humanities',
        programs: [
          { name: 'M.A. Mass Communication / Journalism', exam: 'JMI own entrance', examCss: 'ce-own' },
          { name: 'M.A. Economics / Sociology / Political Science', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
          { name: 'M.A. English / Hindi / Urdu', exam: 'CUET-PG', examCss: 'ce-cuetpg' },
        ],
      },
      {
        stream: 'Law',
        programs: [
          { name: 'LL.M.', exam: 'CLAT-PG / JMI own', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'English and Foreign Languages University',
    short: 'EFLU Hyderabad',
    type: 'Central',
    district: 'Hyderabad',
    state: 'Telangana',
    naac: 'A++',
    nirf: 'Rank 39 (University) — NIRF 2024',
    affil: 'Central University — established 1958',
    website: 'efluniversity.ac.in',
    streams: ['Arts & Science'],
    specialNote: 'India\'s only central university specialising in languages and linguistics. Top destination for English literature, translation and language teaching.',
    programGroups: [
      {
        stream: 'Language & Literature',
        programs: [
          { name: 'M.A. English Language & Literature', exam: 'EFLU Entrance / CUET-PG', examCss: 'ce-own' },
          { name: 'M.A. Linguistics', exam: 'EFLU Entrance', examCss: 'ce-own' },
          { name: 'M.A. Applied Linguistics & ELT', exam: 'EFLU Entrance', examCss: 'ce-own' },
          { name: 'M.A. Translation Studies (English–Tamil/Hindi/Telugu)', exam: 'EFLU Entrance', examCss: 'ce-own' },
          { name: 'M.A. French / German / Spanish / Russian / Chinese / Arabic / Japanese', exam: 'EFLU Entrance', examCss: 'ce-own' },
        ],
      },
      {
        stream: 'Research (PhD)',
        programs: [
          { name: 'PhD — English, Linguistics, Translation, Foreign Languages', exam: 'UGC-NET + Interview', examCss: 'ce-net' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // INSTITUTES OF NATIONAL IMPORTANCE & PREMIER DEEMED
  // ═══════════════════════════════════════════════

  {
    name: 'Indian Institute of Science',
    short: 'IISc Bangalore',
    type: 'INI',
    district: 'Bangalore',
    state: 'Karnataka',
    naac: 'A++',
    nirf: 'Rank 1 (Research) — NIRF 2024 · Rank 1 Overall',
    affil: 'Institute of National Importance — Deemed University under Dept. of Science & Technology',
    website: 'iisc.ac.in',
    streams: ['Engineering', 'Arts & Science', 'Management'],
    specialNote: 'India\'s #1 research university. Monthly fellowship: ₹12,400–70,000 depending on program. No tuition fee for most programs. Globally recognised PhD.',
    programGroups: [
      {
        stream: 'Engineering & Technology',
        programs: [
          { name: 'M.Tech (all engineering disciplines)', exam: 'GATE', examCss: 'ce-gate' },
          { name: 'M.Tech (Research) — 2 years', exam: 'GATE', examCss: 'ce-gate' },
        ],
      },
      {
        stream: 'Sciences',
        programs: [
          { name: 'M.Sc (Research) — Physics, Chemistry, Maths, Biology', exam: 'IIT JAM / CSIR-NET / JEST', examCss: 'ce-jam' },
          { name: 'Integrated PhD (M.Sc + PhD) — Sciences', exam: 'GATE / CSIR-NET / JEST / IIT JAM', examCss: 'ce-net' },
        ],
      },
      {
        stream: 'Management',
        programs: [
          { name: 'MBA (Management Studies)', exam: 'CAT + IISc own screening', examCss: 'ce-cat' },
        ],
      },
      {
        stream: 'Research (PhD)',
        programs: [
          { name: 'PhD — Engineering, Sciences, Design', exam: 'GATE / CSIR-NET / JEST + Interview', examCss: 'ce-net' },
        ],
      },
    ],
  },

  {
    name: 'Tata Institute of Social Sciences',
    short: 'TISS Mumbai',
    type: 'Deemed',
    district: 'Mumbai',
    state: 'Maharashtra',
    naac: 'A',
    nirf: 'Rank 10 (University) — NIRF 2024',
    affil: 'Deemed University — funded by Govt. of India (Ministry of Education)',
    website: 'tiss.edu',
    streams: ['Arts & Science', 'Management'],
    specialNote: 'India\'s premier institution for Social Work, Public Policy and Human Rights. Campuses in Mumbai, Hyderabad, Tuljapur, Guwahati. Admission via TISSNET.',
    programGroups: [
      {
        stream: 'Social Work & Human Development',
        programs: [
          { name: 'M.A. Social Work (Specialisations: Community, HR, Medical, Family)', exam: 'TISSNET', examCss: 'ce-own' },
          { name: 'M.A. Education (Leadership & Management)', exam: 'TISSNET', examCss: 'ce-own' },
          { name: 'M.A. Women\'s Studies', exam: 'TISSNET', examCss: 'ce-own' },
          { name: 'M.A. Disability Studies & Action', exam: 'TISSNET', examCss: 'ce-own' },
        ],
      },
      {
        stream: 'Policy, Management & Law',
        programs: [
          { name: 'M.A. Public Policy & Governance', exam: 'TISSNET', examCss: 'ce-own' },
          { name: 'M.A. Human Rights & Humanitarian Action', exam: 'TISSNET', examCss: 'ce-own' },
          { name: 'M.A. Media & Cultural Studies', exam: 'TISSNET', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'AIIMS — All India Institute of Medical Sciences',
    short: 'AIIMS Delhi',
    type: 'INI',
    district: 'New Delhi',
    state: 'Delhi',
    naac: 'A++',
    nirf: 'Rank 1 (Medical) — NIRF 2024',
    affil: 'Institute of National Importance — 21 AIIMS campuses under Ministry of Health & Family Welfare',
    website: 'aiims.edu',
    streams: ['Medical'],
    specialNote: 'India\'s #1 medical institution. MD/MS via INI-CET — most competitive PG medical entrance in India. All AIIMS campuses (including Mangalagiri in AP, relevant for South India) use INI-CET.',
    programGroups: [
      {
        stream: 'Medical PG',
        programs: [
          { name: 'MD / MS — all clinical specialities', exam: 'INI-CET (Jan & July)', examCss: 'ce-neetpg' },
          { name: 'M.Sc (Anatomy, Physiology, Biochemistry, Microbiology)', exam: 'AIIMS own entrance', examCss: 'ce-own' },
          { name: 'M.Sc Nursing', exam: 'AIIMS Nursing PG Entrance', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'National Institute of Design',
    short: 'NID (Ahmedabad + campuses)',
    type: 'INI',
    district: 'Ahmedabad',
    state: 'Gujarat',
    naac: 'Accredited',
    nirf: '',
    affil: 'Autonomous body under DPIIT, Ministry of Commerce — established 1961. Also: NID Bengaluru, Jorhat, Amaravati + 4 more regional NIDs',
    website: 'nid.edu',
    streams: ['Design'],
    specialNote: 'India\'s premier design institution. M.Des via NID DAT PG — studio aptitude test + written. Campuses: Ahmedabad, Bengaluru + 6 regional NIDs across India.',
    programGroups: [
      {
        stream: 'Design (PG)',
        programs: [
          { name: 'M.Des Graphic Design / Product Design / Communication Design', exam: 'NID DAT PG', examCss: 'ce-own' },
          { name: 'M.Des Film & Video / Animation Film Design', exam: 'NID DAT PG', examCss: 'ce-own' },
          { name: 'M.Des Textile Design / Furniture & Interior Design / Ceramics & Glass', exam: 'NID DAT PG', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'NIFT — National Institute of Fashion Technology (PG)',
    short: 'NIFT PG Programs',
    type: 'Central',
    district: 'New Delhi',
    state: 'Delhi',
    naac: 'Accredited',
    nirf: '',
    affil: 'Autonomous body under Ministry of Textiles — 17 campuses including Chennai, Hyderabad, Bengaluru',
    website: 'nift.ac.in',
    streams: ['Design'],
    specialNote: 'PG programs via NIFT PG Entrance (NTA) — written test + situation test + GD/PI. Chennai campus is the South India hub for fashion & design PG.',
    programGroups: [
      {
        stream: 'Fashion & Design (PG)',
        programs: [
          { name: 'M.Des (Fashion Design / Textile Design / Accessory Design / Leather Design)', exam: 'NIFT PG Entrance (NTA)', examCss: 'ce-own' },
          { name: 'M.F.M. (Master of Fashion Management)', exam: 'NIFT PG Entrance (NTA)', examCss: 'ce-own' },
          { name: 'M.F.Tech. (Master of Fashion Technology)', exam: 'NIFT PG Entrance (NTA)', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'School of Planning and Architecture',
    short: 'SPA Delhi / Bhopal / Vijayawada',
    type: 'INI',
    district: 'New Delhi',
    state: 'Delhi',
    naac: 'A',
    nirf: '',
    affil: 'Institutes of National Importance — under Ministry of Education. Three SPAs: Delhi (1955), Bhopal (2008), Vijayawada (2008)',
    website: 'spa.ac.in',
    streams: ['Architecture'],
    specialNote: 'India\'s premier institutions for M.Arch and Urban Planning PG. Admission via GATE Architecture (AR) paper. SPA Vijayawada is closest to Tamil Nadu.',
    programGroups: [
      {
        stream: 'Architecture & Planning (PG)',
        programs: [
          { name: 'M.Arch (Urban Design / Architectural Conservation / Housing / Landscape)', exam: 'GATE Architecture (AR)', examCss: 'ce-gate' },
          { name: 'M.Plan (Urban & Regional Planning / Transport Planning / Housing)', exam: 'GATE Architecture (AR) / SPA own', examCss: 'ce-gate' },
          { name: 'M.Tech Urban Planning / Environmental Planning', exam: 'GATE', examCss: 'ce-gate' },
        ],
      },
    ],
  },

  {
    name: 'NIPER — National Institute of Pharmaceutical Education and Research',
    short: 'NIPER (7 campuses)',
    type: 'INI',
    district: 'Mohali',
    state: 'Punjab',
    naac: 'Accredited',
    nirf: '',
    affil: 'Institutes of National Importance — 7 NIPER campuses: Mohali, Hyderabad, Ahmedabad, Guwahati, Hajipur, Kolkata, Raebareli',
    website: 'niper.gov.in',
    streams: ['Pharmacy'],
    specialNote: 'India\'s apex pharmacy research institutions. M.S.(Pharm) via GPAT score. NIPER Hyderabad is the South India campus — preferred by TN pharmacy graduates.',
    programGroups: [
      {
        stream: 'Pharmacy & Pharmaceutical Sciences',
        programs: [
          { name: 'M.S. (Pharm) — Medicinal Chemistry / Pharmacology / Pharmaceutics / Natural Products', exam: 'GPAT (NTA)', examCss: 'ce-own' },
          { name: 'M.B.A. Pharmaceutical Management', exam: 'GPAT + GD/PI', examCss: 'ce-own' },
          { name: 'M.Tech Pharmaceutical Engineering / Biotechnology', exam: 'GATE / GPAT', examCss: 'ce-gate' },
        ],
      },
    ],
  },

  {
    name: 'ICAR Agricultural Universities (PG)',
    short: 'ICAR PG — All India',
    type: 'Central',
    district: 'New Delhi',
    state: 'Delhi',
    naac: 'Accredited',
    nirf: '',
    affil: 'IARI Delhi, NDRI Karnal, IVRI Bareilly + 65 ICAR-State Agricultural Universities (SAUs) under Ministry of Agriculture',
    website: 'icar.org.in',
    streams: ['Agriculture'],
    specialNote: 'ICAR AIEEA-PG is the gateway to M.Sc Agriculture, M.V.Sc and M.F.Sc at all ICAR institutes and SAUs. JRF fellowship ₹31,000/month for ICAR-NET qualifiers.',
    programGroups: [
      {
        stream: 'Agriculture & Allied Sciences (PG)',
        programs: [
          { name: 'M.Sc Agriculture (Agronomy, Genetics, Plant Pathology, Soil Science, 20+ disciplines)', exam: 'ICAR AIEEA-PG', examCss: 'ce-icar' },
          { name: 'M.V.Sc (Veterinary Science)', exam: 'ICAR AIEEA-PG', examCss: 'ce-icar' },
          { name: 'M.F.Sc (Fisheries Science)', exam: 'ICAR AIEEA-PG', examCss: 'ce-icar' },
          { name: 'PhD Agriculture (with JRF fellowship)', exam: 'ICAR-NET + Interview', examCss: 'ce-icar' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // TAMIL NADU STATE UNIVERSITIES
  // ═══════════════════════════════════════════════

  {
    name: 'University of Madras',
    short: 'Madras University',
    type: 'State',
    district: 'Chennai',
    state: 'Tamil Nadu',
    naac: 'A+',
    nirf: 'Rank 19 (University) — NIRF 2024',
    affil: 'State University — established 1857 · Oldest university in South India',
    website: 'unom.ac.in',
    streams: ['Arts & Science', 'Law', 'Management'],
    specialNote: 'One of the oldest and most prestigious universities in India. Strong Tamil & classical studies, Sciences, Law. Affiliates 130+ colleges across Chennai region.',
    programGroups: [
      {
        stream: 'Sciences',
        programs: [
          { name: 'M.Sc Physics / Chemistry / Mathematics / Statistics', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Computer Science / IT / Data Science', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Biochemistry / Biotechnology / Microbiology', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Environmental Science', exam: 'University Entrance', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Humanities & Social Sciences',
        programs: [
          { name: 'M.A. Tamil / English / Hindi / Sanskrit / Linguistics', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.A. History / Sociology / Economics / Political Science', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.S.W. (Master of Social Work)', exam: 'University Entrance', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Management & Law',
        programs: [
          { name: 'MBA / M.Com', exam: 'TANCET / Merit', examCss: 'ce-own' },
          { name: 'M.L. / LL.M.', exam: 'University Entrance', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'Bharathiar University',
    short: 'Bharathiar Univ',
    type: 'State',
    district: 'Coimbatore',
    state: 'Tamil Nadu',
    naac: 'A+',
    nirf: 'Rank 24 (University) — NIRF 2024',
    affil: 'State University — established 1982',
    website: 'b-u.ac.in',
    streams: ['Arts & Science', 'Engineering', 'Management'],
    specialNote: 'Strong in Sciences, Computer Science and Distance Education. One of TN\'s top universities for M.Sc and MBA. Major centre for distance PG programs.',
    programGroups: [
      {
        stream: 'Sciences & Technology',
        programs: [
          { name: 'M.Sc Computer Science / Software Engineering / IT', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Physics / Chemistry / Mathematics / Statistics', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Biotechnology / Biochemistry / Microbiology', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Humanities & Social Sciences',
        programs: [
          { name: 'M.A. Tamil / English / Economics / History', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Psychology', exam: 'University Entrance', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Management',
        programs: [
          { name: 'MBA (Regular & Distance)', exam: 'TANCET / Merit', examCss: 'ce-own' },
          { name: 'M.Com', exam: 'Merit', examCss: 'ce-merit' },
        ],
      },
    ],
  },

  {
    name: 'Madurai Kamaraj University',
    short: 'MKU Madurai',
    type: 'State',
    district: 'Madurai',
    state: 'Tamil Nadu',
    naac: 'A+',
    nirf: 'Rank 31 (University) — NIRF 2024',
    affil: 'State University — established 1966',
    website: 'mkuniversity.ac.in',
    streams: ['Arts & Science', 'Management', 'Law'],
    specialNote: 'One of TN\'s top state universities. Renowned for Tamil literature & classical studies, Sciences, and robust Distance Education programs (DDE). Affiliates 170+ colleges.',
    programGroups: [
      {
        stream: 'Sciences',
        programs: [
          { name: 'M.Sc Physics / Chemistry / Mathematics / Statistics / Computer Science', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Biotechnology / Biochemistry / Microbiology / Zoology / Botany', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Humanities & Social Sciences',
        programs: [
          { name: 'M.A. Tamil / English / Hindi / Archaeology / History', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.A. Sociology / Economics / Political Science', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Management & Law',
        programs: [
          { name: 'MBA / MCA', exam: 'TANCET / Merit', examCss: 'ce-own' },
          { name: 'M.L. (Master of Laws)', exam: 'University Entrance', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'Bharathidasan University',
    short: 'BDU Trichy',
    type: 'State',
    district: 'Trichy',
    state: 'Tamil Nadu',
    naac: 'A',
    nirf: 'Rank 42 (University) — NIRF 2024',
    affil: 'State University — established 1982',
    website: 'bdu.ac.in',
    streams: ['Arts & Science', 'Engineering', 'Management'],
    specialNote: 'Strong in Sciences, Biosciences and Computer Applications. Central region of TN\'s major teaching university. Affiliates 120+ colleges in Trichy, Thanjavur, Pudukkottai regions.',
    programGroups: [
      {
        stream: 'Sciences & Technology',
        programs: [
          { name: 'M.Sc Computer Science / Information Technology', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Physics / Chemistry / Maths / Statistics', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Bioinformatics / Biotechnology / Biochemistry', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Humanities',
        programs: [
          { name: 'M.A. Tamil / English / Economics / History', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Management',
        programs: [
          { name: 'MBA / MCA', exam: 'TANCET / Merit', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'Anna University',
    short: 'Anna Univ Chennai',
    type: 'State',
    district: 'Chennai',
    state: 'Tamil Nadu',
    naac: 'A++',
    nirf: 'Rank 4 (Engineering) — NIRF 2024',
    affil: 'State Technical University — established 1978 · Affiliates 500+ engineering colleges in TN',
    website: 'annauniv.edu',
    streams: ['Engineering', 'Management'],
    specialNote: 'Tamil Nadu\'s apex technical university. M.E./M.Tech at Anna University campuses (CEG, MIT, ACT, SAP) is among the most prestigious PG engineering seats in South India.',
    programGroups: [
      {
        stream: 'Engineering & Technology (PG)',
        programs: [
          { name: 'M.E. Computer Science & Engineering', exam: 'GATE / TANCET', examCss: 'ce-gate' },
          { name: 'M.E. VLSI Design / Embedded Systems / Communication Systems', exam: 'GATE / TANCET', examCss: 'ce-gate' },
          { name: 'M.E. Structural Engineering / Environmental Engineering', exam: 'GATE / TANCET', examCss: 'ce-gate' },
          { name: 'M.E. Manufacturing / Industrial Engineering', exam: 'GATE / TANCET', examCss: 'ce-gate' },
          { name: 'M.E. Power Electronics & Drives / Energy Engineering', exam: 'GATE / TANCET', examCss: 'ce-gate' },
        ],
      },
      {
        stream: 'Management',
        programs: [
          { name: 'MBA (Anna University Business School)', exam: 'TANCET / CAT / Merit', examCss: 'ce-cat' },
        ],
      },
    ],
  },

  {
    name: 'Annamalai University',
    short: 'Annamalai Univ',
    type: 'State',
    district: 'Chidambaram',
    state: 'Tamil Nadu',
    naac: 'A',
    nirf: 'Listed',
    affil: 'State University — established 1929 · One of the largest residential universities in Asia',
    website: 'annamalaiuniversity.ac.in',
    streams: ['Arts & Science', 'Engineering', 'Medical', 'Management'],
    specialNote: 'One of India\'s largest residential universities. Strong in Medicine, Dentistry, Engineering and Arts. Also offers widely-used Distance Education programs (DDE) across India.',
    programGroups: [
      {
        stream: 'Sciences',
        programs: [
          { name: 'M.Sc Physics / Chemistry / Mathematics / Computer Science', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Biotechnology / Biochemistry / Marine Biology', exam: 'University Entrance', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Engineering',
        programs: [
          { name: 'M.E. / M.Tech (all disciplines)', exam: 'GATE / TANCET', examCss: 'ce-gate' },
        ],
      },
      {
        stream: 'Medical & Allied',
        programs: [
          { name: 'MD / MS / MDS — Medical & Dental PG', exam: 'NEET-PG / INI-CET', examCss: 'ce-neetpg' },
          { name: 'M.Pharm / M.P.T. (Physiotherapy)', exam: 'University Entrance', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Management',
        programs: [
          { name: 'MBA / MCA', exam: 'TANCET / Merit', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'Periyar University',
    short: 'Periyar Univ Salem',
    type: 'State',
    district: 'Salem',
    state: 'Tamil Nadu',
    naac: 'A+',
    nirf: 'Rank 68 (University) — NIRF 2024',
    affil: 'State University — established 1997',
    website: 'periyaruniversity.ac.in',
    streams: ['Arts & Science', 'Management'],
    specialNote: 'Serves Salem, Namakkal, Dharmapuri and Krishnagiri districts. Good for M.Sc and MBA programs for students in central-western TN.',
    programGroups: [
      {
        stream: 'Sciences',
        programs: [
          { name: 'M.Sc Computer Science / IT / MCA', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Physics / Chemistry / Maths / Statistics', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Biotechnology / Biochemistry / Microbiology', exam: 'University Entrance', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Humanities',
        programs: [
          { name: 'M.A. Tamil / English / Economics / History / Sociology', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Management',
        programs: [
          { name: 'MBA / M.Com', exam: 'TANCET / Merit', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'Thiruvalluvar University',
    short: 'TVU Vellore',
    type: 'State',
    district: 'Vellore',
    state: 'Tamil Nadu',
    naac: 'A',
    nirf: 'Listed',
    affil: 'State University — established 2002',
    website: 'tvu.edu.in',
    streams: ['Arts & Science', 'Management'],
    specialNote: 'Serves Vellore, Ranipet, Tirupattur and Tiruvannamalai districts. Growing university with focus on Tamil classical studies and Sciences.',
    programGroups: [
      {
        stream: 'Sciences',
        programs: [
          { name: 'M.Sc Computer Science / IT / Mathematics / Physics / Chemistry', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Biotechnology / Biochemistry', exam: 'University Entrance', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Humanities',
        programs: [
          { name: 'M.A. Tamil / English / History / Economics', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Management',
        programs: [
          { name: 'MBA / MCA / M.Com', exam: 'TANCET / Merit', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'Manonmaniam Sundaranar University',
    short: 'MSU Tirunelveli',
    type: 'State',
    district: 'Tirunelveli',
    state: 'Tamil Nadu',
    naac: 'A',
    nirf: 'Listed',
    affil: 'State University — established 1990',
    website: 'msuniv.ac.in',
    streams: ['Arts & Science', 'Management'],
    specialNote: 'Serves the southern districts of TN — Tirunelveli, Thoothukudi, Nagercoil, Kanyakumari. Known for Tamil & regional language programs and Marine Sciences.',
    programGroups: [
      {
        stream: 'Sciences',
        programs: [
          { name: 'M.Sc Computer Science / IT / Mathematics / Physics / Chemistry', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Marine Biology / Oceanography', exam: 'University Entrance', examCss: 'ce-merit' },
          { name: 'M.Sc Biotechnology / Biochemistry', exam: 'University Entrance', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Humanities',
        programs: [
          { name: 'M.A. Tamil / English / History / Economics / Sociology', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Management',
        programs: [
          { name: 'MBA / MCA / M.Com', exam: 'TANCET / Merit', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'Mother Teresa Women\'s University',
    short: 'MTWU Kodaikanal',
    type: 'State',
    district: 'Dindigul',
    state: 'Tamil Nadu',
    naac: 'A',
    nirf: 'Listed',
    affil: 'State University (Women only) — established 1984',
    website: 'motherteresawomen.ac.in',
    streams: ['Arts & Science', 'Management'],
    specialNote: 'Tamil Nadu\'s dedicated state university for women. Offers PG programs exclusively for women students. Scenic Kodaikanal campus. Strong in Home Science, Social Work and Women\'s Studies.',
    programGroups: [
      {
        stream: 'Sciences & Technology',
        programs: [
          { name: 'M.Sc Computer Science / IT / Mathematics / Chemistry', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.Sc Home Science (Food & Nutrition / Textile)', exam: 'University Entrance', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Humanities & Social Sciences',
        programs: [
          { name: 'M.A. Tamil / English / Economics / History / Social Work', exam: 'University Entrance / Merit', examCss: 'ce-merit' },
          { name: 'M.A. Women\'s Studies', exam: 'University Entrance', examCss: 'ce-merit' },
        ],
      },
      {
        stream: 'Management',
        programs: [
          { name: 'MBA / M.Com', exam: 'TANCET / Merit', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'Tamil Nadu Agricultural University',
    short: 'TNAU Coimbatore',
    type: 'State',
    district: 'Coimbatore',
    state: 'Tamil Nadu',
    naac: 'A++',
    nirf: 'Rank 1 (Agricultural University) — NIRF 2024',
    affil: 'State Agricultural University — established 1971. Campuses: Coimbatore, Madurai, Trichy, Ooty, Karur',
    website: 'tnau.ac.in',
    streams: ['Agriculture'],
    specialNote: 'India\'s top-ranked agricultural university and the go-to destination for TN students pursuing M.Sc Agriculture. Admission via ICAR AIEEA-PG or TNAU\'s own entrance.',
    programGroups: [
      {
        stream: 'Agriculture & Allied Sciences (PG)',
        programs: [
          { name: 'M.Sc Agriculture (15+ specialisations — Agronomy, Genetics, Horticulture, Plant Pathology…)', exam: 'ICAR AIEEA-PG / TNAU PG Entrance', examCss: 'ce-icar' },
          { name: 'M.Sc Horticulture / Forestry / Biotechnology', exam: 'ICAR AIEEA-PG / TNAU entrance', examCss: 'ce-icar' },
          { name: 'M.Tech Agricultural Engineering / Food Technology', exam: 'GATE / TNAU entrance', examCss: 'ce-gate' },
          { name: 'M.B.A. Agribusiness Management', exam: 'TNAU entrance / CAT', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'Institute for Social and Economic Change (ISEC)',
    short: 'ISEC Bengaluru',
    type: 'State',
    district: 'Bengaluru',
    state: 'Karnataka',
    naac: 'A',
    nirf: 'Leading Social Science Research Institute',
    affil: 'Autonomous Institute — ICSSR grant-in-aid & Government of Karnataka',
    website: 'isec.ac.in',
    streams: ['Arts & Science'],
    specialNote: 'Premier social science research institution in South India (est. 1972). Focused on economics, demography, sociology and public policy. PhD/Post-doc only; no UG programmes.',
    programGroups: [
      {
        stream: 'Social Sciences (PhD / Post-Doc)',
        programs: [
          { name: 'PhD (Economics, Sociology, Demography, Population Studies, Ecology)', exam: 'UGC-NET / CSIR-NET + Interview', examCss: 'ce-net' },
          { name: 'Post-Doctoral Fellowship', exam: 'ISEC Selection / ICSSR Fellowship', examCss: 'ce-own' },
        ],
      },
    ],
  },

  {
    name: 'BRIC — Rajiv Gandhi Centre for Biotechnology (RGCB)',
    short: 'BRIC-RGCB',
    type: 'Central',
    district: 'Thiruvananthapuram',
    state: 'Kerala',
    naac: 'A',
    nirf: 'Top Biotechnology Research',
    affil: 'Biotechnology Research and Innovation Council (BRIC) — Dept of Biotechnology, Govt of India',
    website: 'rgcb.res.in',
    streams: ['Arts & Science'],
    specialNote: 'One of India\'s top biotechnology research centres. Offers integrated M.Sc–PhD programme for BSc graduates — no separate M.Sc exit; designed for full research career track.',
    programGroups: [
      {
        stream: 'Biotechnology & Life Sciences (PG / PhD)',
        programs: [
          { name: 'Integrated M.Sc–PhD (Molecular Biology, Cell Biology, Biochemistry, Neuroscience)', exam: 'RGCB Entrance + Interview', examCss: 'ce-own' },
          { name: 'PhD (Life Sciences / Biotechnology)', exam: 'CSIR-NET / DBT-JRF + Interview', examCss: 'ce-net' },
        ],
      },
    ],
  },

  {
    name: 'INMAS — Institute of Nuclear Medicine & Allied Sciences',
    short: 'INMAS Delhi',
    type: 'Central',
    district: 'Delhi',
    state: 'Delhi',
    naac: 'Accredited',
    nirf: 'Specialised Defence Research',
    affil: 'Defence Research & Development Organisation (DRDO) — Ministry of Defence',
    website: 'drdo.gov.in/labs-and-establishments/institute-nuclear-medicine-allied-sciences-inmas',
    streams: ['Medical'],
    specialNote: 'DRDO\'s only institute focused on nuclear medicine, radiation biology and laser biomedical research. PhD is through affiliated universities (Delhi University / DIAT). No standalone UG programmes.',
    programGroups: [
      {
        stream: 'Medical & Life Sciences (PhD)',
        programs: [
          { name: 'PhD (Nuclear Medicine, Radiation Biology, Laser Biomedical Research)', exam: 'CSIR-NET / UGC-NET / GATE + DRDO Interview', examCss: 'ce-net' },
        ],
      },
    ],
  },

  {
    name: 'NITTTR Chennai — National Institute of Technical Teachers Training & Research',
    short: 'NITTTR Chennai',
    type: 'Central',
    district: 'Chennai',
    state: 'Tamil Nadu',
    naac: 'A',
    nirf: 'Top Technical Education Institute',
    affil: 'Ministry of Education — Govt of India (est. 1967)',
    website: 'nitttrc.ac.in',
    streams: ['Engineering', 'Education'],
    specialNote: 'One of four NITTTR campuses in India (Chennai serves South & Central India). Trains serving technical college faculty. M.Tech and PG Diploma programmes; no UG intake.',
    programGroups: [
      {
        stream: 'Technical Education (PG)',
        programs: [
          { name: 'M.Tech (Computer Science, Electronics, Mechanical, Civil, Electrical Engineering Education)', exam: 'GATE / NITTTR Entrance', examCss: 'ce-gate' },
          { name: 'PG Diploma in Technical Education — 1 year', exam: 'NITTTR Entrance', examCss: 'ce-own' },
          { name: 'PhD (Engineering / Education)', exam: 'GATE / UGC-NET + Interview', examCss: 'ce-net' },
        ],
      },
    ],
  },

  {
    name: 'Thiagarajar College of Engineering',
    short: 'TCE Madurai',
    type: 'Aided',
    district: 'Madurai',
    state: 'Tamil Nadu',
    naac: 'A+',
    nirf: '',
    affil: 'Anna University (Government-Aided — Thiagarajar group)',
    website: 'tce.edu',
    streams: ['Arts & Science', 'Engineering'],
    specialNote: 'Prestigious government-aided engineering college (est. 1957) offering M.Sc Data Science alongside M.E./M.Tech programs. Admission via TANCET or university entrance.',
    programGroups: [
      {
        stream: 'Arts & Science (PG)',
        programs: [
          { name: 'M.Sc Data Science (2 years)', exam: 'TANCET / University Entrance', examCss: 'ce-own' },
        ],
      },
      {
        stream: 'Engineering (PG)',
        programs: [
          { name: 'M.E. / M.Tech (CSE, ECE, Structural, CAD/CAM, Power Electronics — 2 years)', exam: 'GATE / TANCET', examCss: 'ce-gate' },
        ],
      },
    ],
  },

  {
    name: 'Tamil Nadu Teachers Education University',
    short: 'TNTEU Chennai',
    type: 'State',
    district: 'Chennai',
    state: 'Tamil Nadu',
    naac: 'A',
    nirf: '',
    affil: 'State University — established 2008 under Govt of Tamil Nadu',
    website: 'tnteu.ac.in',
    streams: ['Education'],
    specialNote: 'TN\'s dedicated teachers education university. M.Ed is mandatory for graduates aspiring to teach at secondary / higher-secondary level in govt schools. Admission via TANCET.',
    programGroups: [
      {
        stream: 'Education (PG)',
        programs: [
          { name: 'M.Ed (Master of Education)', exam: 'TANCET / University Entrance', examCss: 'ce-own' },
          { name: 'M.Phil Education', exam: 'University Entrance', examCss: 'ce-merit' },
          { name: 'PhD Education', exam: 'UGC-NET + University Interview', examCss: 'ce-net' },
        ],
      },
    ],
  },

];
