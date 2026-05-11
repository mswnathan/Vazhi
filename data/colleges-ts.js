// Vazhi — Colleges Data: Telangana
// Edit this file to add/update Telangana colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_TS=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Hyderabad',short:'IITH',type:'Central',district:'Sangareddy',state:'Telangana',
  naac:'A+',nirf:'Top 10 Engineering',affil:'Autonomous (Institute of National Importance)',website:'iith.ac.in',
  streams:['Engineering','Arts & Science','Design'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, AI, EE, Mechanical, Civil, Chemical, Engineering Physics, Biomedical, Material Science)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Design',programs:[
      {name:'B.Des (Design)',exam:'UCEED',examCss:'ce-own'},
    ]},
  ]},

{name:'NIT Warangal',short:'NITW',type:'Central',district:'Warangal',state:'Telangana',
  naac:'A+',nirf:'Top 15 Engineering',affil:'National Institute of Technology',website:'nitw.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Metallurgical, Biotechnology)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'University of Hyderabad (UoH)',short:'UoH',type:'Central',district:'Hyderabad',state:'Telangana',
  naac:'A++',nirf:'#3 University',affil:'Central University — Act of Parliament 1974',website:'uohyd.ac.in',
  streams:['Arts & Science','Management'],
  specialNote:'Premier research university. Strong in sciences, humanities & social sciences.',
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Biotechnology, Life Sciences)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (English, History, Philosophy, Sociology, Economics, Political Science)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Com (Hons)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'NALSAR University of Law',short:'NALSAR',type:'Central',district:'Hyderabad',state:'Telangana',
  naac:'A+',nirf:'#2 Law',affil:'National Law University (Telangana State)',website:'nalsar.ac.in',
  streams:['Law'],
  specialNote:'Second-ranked NLU in India. Known for constitutional law and public policy.',
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'TISS Hyderabad',short:'TISS-HYD',type:'Central',district:'Hyderabad',state:'Telangana',
  naac:'A++',nirf:'Top Social Science',affil:'Tata Institute of Social Sciences (Deemed — Central Govt)',website:'tiss.edu/hyderabad',
  streams:['Arts & Science','Management'],
  specialNote:'Merit-only admission via TISSMAT / CUET. Subsidised fees. Focus on social work, development, and public health.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.A (Social Work, Development Studies)',exam:'CUET UG / TISSMAT',examCss:'ce-cuet'},
    ]},
    {stream:'Management (Post-UG)',programs:[
      {name:'M.A / M.Sc (various social science programmes)',exam:'TISSMAT',examCss:'ce-own'},
    ]},
  ]},

{name:'NIFT Hyderabad',short:'NIFT-HYD',type:'Central',district:'Hyderabad',state:'Telangana',
  naac:'Accredited',nirf:'Top Design',affil:'National Institute of Fashion Technology (Ministry of Textiles)',website:'nift.ac.in/hyderabad',
  streams:['Design'],
  programGroups:[
    {stream:'Design',programs:[
      {name:'B.Des (Fashion Design, Fashion Communication, Accessory Design)',exam:'NIFT Entrance',examCss:'ce-own'},
      {name:'B.F.Tech (Apparel Production)',exam:'NIFT Entrance',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// DEEMED — MERIT ONLY
// ──────────────────────────────────────────────
{name:'BITS Pilani — Hyderabad Campus',short:'BITS-HYD',type:'Deemed',district:'Hyderabad',state:'Telangana',
  naac:'A',nirf:'Top 30 Engineering',affil:'BITS Pilani (Deemed University)',website:'bits-pilani.ac.in/hyderabad',
  streams:['Engineering','Arts & Science'],
  specialNote:'Purely merit-based via BITSAT. No donations, no management quota. Located at Shameerpet, Hyderabad.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, Mechanical, Chemical, Civil, Manufacturing)',exam:'BITSAT',examCss:'ce-own'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Biology, Economics)',exam:'BITSAT',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'Osmania University',short:'OU',type:'State',district:'Hyderabad',state:'Telangana',
  naac:'A+',nirf:'Top 50 University',affil:'Osmania University (State — est. 1918)',website:'osmania.ac.in',
  streams:['Engineering','Arts & Science','Law','Management'],
  specialNote:'One of the oldest universities in India. University College of Engineering (UCE) is highly regarded in Telangana.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, Mechanical, Civil, Chemical, Metallurgical)',exam:'TS EAPCET',examCss:'ce-own'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science)',exam:'Merit / CUET',examCss:'ce-merit'},
      {name:'B.A (English, History, Economics, Political Science, Sociology)',exam:'Merit / CUET',examCss:'ce-merit'},
      {name:'B.Com (General / Computers)',exam:'Merit',examCss:'ce-merit'},
    ]},
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'TS LAWCET',examCss:'ce-own'},
    ]},
  ]},

{name:'JNTU Hyderabad',short:'JNTUH',type:'State',district:'Hyderabad',state:'Telangana',
  naac:'A',nirf:'Top State Technical',affil:'Jawaharlal Nehru Technological University Hyderabad',website:'jntuh.ac.in',
  streams:['Engineering'],
  specialNote:'Major affiliating technical university in Telangana. TS EAPCET admission.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, IT, Mechanical, Civil, Chemical)',exam:'TS EAPCET',examCss:'ce-own'},
    ]},
  ]},

{name:'Kakatiya University',short:'KU',type:'State',district:'Warangal',state:'Telangana',
  naac:'A',nirf:'Top State University',affil:'Kakatiya University (State)',website:'kakatiya.ac.in',
  streams:['Arts & Science','Management'],
  specialNote:'Oldest university in Warangal region. Primarily arts, science, and commerce programmes.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Biotechnology)',exam:'Merit / CUET',examCss:'ce-merit'},
      {name:'B.A (English, History, Economics, Political Science)',exam:'Merit / CUET',examCss:'ce-merit'},
    ]},
    {stream:'Management',programs:[
      {name:'BBA (Business Administration)',exam:'Merit',examCss:'ce-merit'},
      {name:'B.Com (General / Computers)',exam:'Merit',examCss:'ce-merit'},
    ]},
  ]},

{name:'RGUKT Basar (IIIT Basar)',short:'RGUKT-BAS',type:'State',district:'Nirmal',state:'Telangana',
  naac:'Accredited',nirf:'Unique State Scheme',affil:'Rajiv Gandhi University of Knowledge Technologies',website:'rgukt.ac.in/basar',
  streams:['Engineering'],
  specialNote:'Exclusively for rural Telangana students from Govt / TS residential schools. 6-year Integrated B.Tech (2-year PUC + 4-year B.Tech). No JEE needed — merit via SSC marks.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'6-year Integrated B.Tech (CSE, ECE, Mechanical, Civil)',exam:'SSC Merit (TS Govt school students only)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Govt. Medical College Hyderabad (Osmania Medical College)',short:'OMC',type:'State',district:'Hyderabad',state:'Telangana',
  naac:'A',nirf:'Top State Medical',affil:'Kaloji Narayana Rao University of Health Sciences (KNRUHS)',website:'osmaniamedicalhyd.com',
  streams:['Medical'],
  specialNote:'One of the oldest and most prestigious government medical colleges in South India (est. 1846). NEET UG admission under Telangana quota.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

{name:'Professor Jayashankar Telangana State Agricultural University (PJTSAU)',short:'PJTSAU',type:'State',district:'Hyderabad',state:'Telangana',
  naac:'A',nirf:'Top Agriculture',affil:'Professor Jayashankar Telangana State Agricultural University',website:'pjtsau.edu.in',
  streams:['Agriculture'],
  specialNote:'Premier state agricultural university of Telangana. ICAR AIEEA / TS state merit admission.',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Agriculture) — 4 years',exam:'ICAR AIEEA / TS Merit',examCss:'ce-icar'},
      {name:'B.Sc (Horticulture)',exam:'ICAR AIEEA / TS Merit',examCss:'ce-icar'},
    ]},
  ]},

];
