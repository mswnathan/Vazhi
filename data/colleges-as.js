// Vazhi — Colleges Data: Assam & North-East India
// Edit this file to add/update Assam & North-East colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_AS=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Guwahati',short:'IITG',type:'Central',district:'Guwahati',state:'Assam',
  naac:'A++',nirf:'#7 Engineering · #11 Overall',affil:'Autonomous (Institute of National Importance)',website:'iitg.ac.in',
  streams:['Engineering','Arts & Science','Design','Management'],
  specialNote:'Gateway IIT for North-East India. Strong in Biosciences, Data Science and Design.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Biotechnology, Mathematics & Computing, Engineering Physics)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Design',programs:[
      {name:'B.Des (Industrial & Product Design)',exam:'UCEED',examCss:'ce-own'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'4-year B.S in Biomedical Science & Engineering (20 seats, via IAT)',exam:'IISER IAT',examCss:'ce-own'},
    ]},
  ]},

{name:'NIT Silchar',short:'NITS',type:'Central',district:'Cachar',state:'Assam',
  naac:'A',nirf:'Top 50 Engineering',affil:'National Institute of Technology',website:'nits.ac.in',
  streams:['Engineering'],
  specialNote:'NIT serving North-East India; strong ECE and CSE programmes with good placement record.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Electronics & Instrumentation)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'AIIMS Guwahati',short:'AIIMS Guwahati',type:'Central',district:'Guwahati',state:'Assam',
  naac:'Accredited',nirf:'New AIIMS — Emerging',affil:'All India Institute of Medical Sciences (MoHFW)',website:'aiimsguwahati.ac.in',
  streams:['Medical'],
  specialNote:'One of the new AIIMS under PM Swasthya Suraksha Yojana. Serving North-East India.',
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years incl. internship)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'AIIMS Nursing Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Tezpur University',short:'Tezpur Univ',type:'Central',district:'Sonitpur',state:'Assam',
  naac:'A++',nirf:'Top 100 University',affil:'Central University (UGC Act 1994)',website:'tezu.ernet.in',
  streams:['Engineering','Arts & Science','Management'],
  specialNote:'Only Central University in North-East with NAAC A++ accreditation. Strong in Science & Technology.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, Civil, Food Technology, Molecular Biology & Biotechnology)',exam:'JEE Main / CUET UG',examCss:'ce-jee'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Mathematics, Biotechnology)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (English, Mass Communication)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'Composite Regional Centre for Skill Development, Rehabilitation & Empowerment of Persons with Disabilities (CRCSRE Guwahati)',short:'CRCSRE Guwahati',type:'Central',district:'Guwahati',state:'Assam',
  naac:'',nirf:'',affil:'Ministry of Social Justice & Empowerment, Govt of India',website:'crcguwahati.nic.in',
  streams:['Medical'],
  specialNote:'Regional centre under MoSJE offering BASLP. Admission via Common Entrance Test (CET) for Persons with Disabilities — jointly conducted with NIEPMD, NIEPID, SVNIRTAR, AYJNIHH, PDUNIPPD.',
  programGroups:[
    {stream:'Allied Health & Rehabilitation',programs:[
      {name:'Bachelor in Audiology & Speech-Language Pathology / BASLP (3 years)',exam:'CET-PWD',examCss:'ce-own'},
    ]},
  ]},

{name:'National Law University and Judicial Academy, Assam (NLUJA)',short:'NLUJA',type:'Central',district:'Guwahati',state:'Assam',
  naac:'Accredited',nirf:'National Law University',affil:'National Law University (Assam)',website:'nluassam.ac.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'NID Assam',short:'NID AS',type:'Central',district:'Jorhat',state:'Assam',
  naac:'Accredited',nirf:'Top Design',affil:'National Institute of Design (Ministry of Commerce)',website:'nid.edu',
  streams:['Design'],
  programGroups:[
    {stream:'Design',programs:[
      {name:'B.Des (Industrial, Communication & Textile Design)',exam:'NID DAT',examCss:'ce-own'},
    ]},
  ]},

{name:'National Forensic Sciences University — Guwahati Campus',short:'NFSU Guwahati',type:'Central',district:'Guwahati',state:'Assam',
  naac:'Accredited',nirf:'Top Forensic Sciences',affil:'National Forensic Sciences University (Institute of National Importance — MHA)',website:'nfsu.ac.in',
  streams:['Engineering'],
  specialNote:'NFSU\'s own entrance test (NFAT/FACT) is discontinued — admission is via JEE Main.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech–M.Tech Computer Science & Engineering (Cyber Security) — 5-year integrated',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'Institute of Hotel Management, Catering Technology & Applied Nutrition, Guwahati',short:'IHM Guwahati',type:'Central',district:'Guwahati',state:'Assam',
  naac:'Accredited',nirf:'Central IHM',affil:'National Council for Hotel Management & Catering Technology (NCHMCT) — Ministry of Tourism',website:'ihmctanghy.org.in',
  streams:['Management'],
  programGroups:[
    {stream:'Hospitality & Hotel Management',programs:[
      {name:'B.Sc Hospitality & Hotel Administration (3 years)',exam:'NCHM JEE',examCss:'ce-nchm'},
    ]},
  ]},

];
