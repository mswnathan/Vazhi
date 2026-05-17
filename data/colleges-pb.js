// Vazhi — Colleges Data: Punjab
// Edit this file to add/update Punjab colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_PB=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Ropar',short:'IITRPR',type:'Central',district:'Rupnagar',state:'Punjab',
  naac:'Accredited',nirf:'Emerging IIT',affil:'Autonomous (Institute of National Importance)',website:'iitrpr.ac.in',
  streams:['Engineering','Arts & Science'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, EE, Mechanical, Civil, Chemical, Biomedical, Mathematics & Computing)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'NIT Jalandhar',short:'NITJ',type:'Central',district:'Jalandhar',state:'Punjab',
  naac:'A+',nirf:'Top 30 Engineering',affil:'National Institute of Technology',website:'nitj.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, IT, Mechanical, Civil, Chemical, Industrial & Production, Leather Technology)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'IISER Mohali',short:'IISERM',type:'Central',district:'Mohali',state:'Punjab',
  naac:'A++',nirf:'Top Science Research',affil:'Institute of Science Education & Research (MoE)',website:'iisermohali.ac.in',
  streams:['Arts & Science'],
  specialNote:'One of the first IISERs. Particularly strong in biology, chemistry and data science. BS-MS dual degree.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'BS-MS Dual Degree (Physics, Chemistry, Maths, Biology, Earth & Environmental Science)',exam:'JEE Advanced / IAT / KVPY',examCss:'ce-jee'},
    ]},
  ]},

{name:'RGNUL Patiala',short:'RGNUL',type:'Central',district:'Patiala',state:'Punjab',
  naac:'A',nirf:'Top 10 Law',affil:'Rajiv Gandhi National University of Law (Punjab)',website:'rgnul.ac.in',
  streams:['Law'],
  specialNote:'Known for international trade law and ADR. State-of-the-art law school.',
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
      {name:'B.Com LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'SLIET Longowal',short:'SLIET',type:'Central',district:'Sangrur',state:'Punjab',
  naac:'A',nirf:'Top Engineering',affil:'Sant Longowal Institute of Engineering & Technology (Autonomous — MoE)',website:'sliet.ac.in',
  streams:['Engineering'],
  specialNote:'Unique lateral-entry model — Certificate → Diploma → B.Tech pathway. Also direct B.Tech via JEE Main.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Chemical, Food Technology, Instrumentation)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'Central University of Punjab (CUP)',short:'CUP',type:'Central',district:'Bathinda',state:'Punjab',
  naac:'A',nirf:'Top University',affil:'Central University — UGC Act 2009',website:'cup.edu.in',
  streams:['Arts & Science','Management','Law'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Environmental Science)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (English, History, Political Science, Punjabi, Sociology)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'IIM Amritsar',short:'IIMAMR',type:'Central',district:'Amritsar',state:'Punjab',
  naac:'Accredited',nirf:'Top Management',affil:'Institute of National Importance',website:'iimamritsar.ac.in',
  streams:['Management'],
  specialNote:'IPM (Integrated Programme in Management, 5-year after Class 12) available — direct UG-entry route alongside PGP.',
  programGroups:[
    {stream:'Management',programs:[
      {name:'IPM — Integrated Programme in Management (5-year, after Class 12)',exam:'IPMAT',examCss:'ce-own'},
      {name:'PGP (MBA) — 2 years (post-UG)',exam:'CAT',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'NSNIS Patiala',short:'NSNIS',type:'Central',district:'Patiala',state:'Punjab',
  naac:'A',nirf:'Top Sports Science',affil:'Netaji Subhas National Institute of Sports — SAI (Ministry of Youth Affairs & Sports)',website:'nsnis.org',
  streams:['Education'],
  specialNote:'India\'s premier sports science and coaching institute (est. 1961). Trains national and Olympic athletes alongside academic programmes. Admission via SAI/NSNIS entrance.',
  programGroups:[
    {stream:'Education',programs:[
      {name:'B.P.Ed (Bachelor of Physical Education) — 2 years (after UG)',exam:'NSNIS Entrance',examCss:'ce-own'},
      {name:'M.P.Ed (Master of Physical Education) — 2 years',exam:'NSNIS Entrance',examCss:'ce-own'},
      {name:'Diploma in Coaching (various sports)',exam:'NSNIS Selection',examCss:'ce-own'},
    ]},
  ]},

{name:'Punjab Agricultural University (PAU)',short:'PAU',type:'State',district:'Ludhiana',state:'Punjab',
  naac:'A+',nirf:'Top Agriculture',affil:'Punjab Agricultural University (State)',website:'pau.edu',
  streams:['Agriculture'],
  specialNote:'One of India\'s best agricultural universities. Pioneered the Green Revolution. CUET-UG (15% all-India quota) / Punjab state merit.',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Agriculture) — 4 years',exam:'CUET-UG (15% all-India quota) / Punjab Merit',examCss:'ce-cuet'},
      {name:'B.Sc (Horticulture, Food Technology, Biotechnology)',exam:'CUET-UG (15% all-India quota) / Punjab Merit',examCss:'ce-cuet'},
      {name:'B.Tech (Food Technology)',exam:'CUET-UG (15% all-India quota) / Punjab Merit',examCss:'ce-cuet'},
    ]},
  ]},

{name:'Government Medical College Amritsar',short:'GMCA-AMR',type:'State',district:'Amritsar',state:'Punjab',
  naac:'A',nirf:'Top State Medical',affil:'Baba Farid University of Health Sciences (BFUHS)',website:'gmcamritsar.ac.in',
  streams:['Medical'],
  specialNote:'Oldest and most prestigious government medical college in Punjab. NEET UG admission under Punjab state quota.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

{name:'Guru Nanak Dev University (GNDU)',short:'GNDU',type:'State',district:'Amritsar',state:'Punjab',
  naac:'A+',nirf:'Top University',affil:'Guru Nanak Dev University (State)',website:'gndu.ac.in',
  streams:['Arts & Science','Management'],
  specialNote:'Named after Guru Nanak Dev. Strong in science, humanities and sports sciences.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Biotechnology)',exam:'GNDU Entrance / Merit',examCss:'ce-own'},
      {name:'B.A (English, Punjabi, History, Political Science, Economics)',exam:'Merit',examCss:'ce-merit'},
    ]},
    {stream:'Management',programs:[
      {name:'BBA (Business Administration)',exam:'GNDU Entrance',examCss:'ce-own'},
    ]},
  ]},

];
