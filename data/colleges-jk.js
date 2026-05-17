// Vazhi — Colleges Data: Jammu & Kashmir
// Edit this file to add/update J&K colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_JK=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Jammu',short:'IITJMU',type:'Central',district:'Samba',state:'Jammu & Kashmir',
  naac:'Accredited',nirf:'Top 50 Engineering',affil:'Autonomous (Institute of National Importance)',website:'iitjammu.ac.in',
  streams:['Engineering','Arts & Science'],
  specialNote:'Established 2016. Permanent campus at Jagti near Jammu. Growing research profile in CSE, Materials and Civil Engineering.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, Mechanical, Civil, Chemical, Materials Engineering)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Research) — Mathematics, Physics, Chemistry',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'NIT Srinagar',short:'NITSRI',type:'Central',district:'Srinagar',state:'Jammu & Kashmir',
  naac:'A',nirf:'Top 55 Engineering',affil:'National Institute of Technology (est. 1960 as Regional Engineering College)',website:'nitsri.ac.in',
  streams:['Engineering'],
  specialNote:'One of India\'s oldest NITs. 15% seats reserved for J&K domicile students. Strong alumni network across India and abroad.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, IT, Metallurgical)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'SMVDU Katra',short:'SMVDU',type:'Central',district:'Reasi',state:'Jammu & Kashmir',
  naac:'A',nirf:'Top 100 University',affil:'Shri Mata Vaishno Devi University (Central — established by Act of Parliament 1999)',website:'smvdu.ac.in',
  streams:['Engineering','Arts & Science','Design','Management'],
  specialNote:'Unique university situated in the Trikuta Hills near the Vaishno Devi shrine. Strong in Technology and Architecture.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, Mechanical, Civil, Chemical, Biotechnology, Energy Technology)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
    {stream:'Design',programs:[
      {name:'B.Arch (5 years)',exam:'JEE Main Paper 2 / NATA',examCss:'ce-nata'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Physics, Chemistry, Mathematics, Computer Science',exam:'CUET UG / Merit',examCss:'ce-cuet'},
    ]},
  ]},

{name:'Central University of Kashmir',short:'CUK',type:'Central',district:'Ganderbal',state:'Jammu & Kashmir',
  naac:'B++',nirf:'Top 150 University',affil:'Central University (UGC Act 2009)',website:'cukashmir.ac.in',
  streams:['Arts & Science','Management','Education'],
  specialNote:'Located in Ganderbal (Kashmir Valley). Focus on Kashmiri language, cultural heritage and environmental studies.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Computer Science, Mathematics, Physics, Biotechnology, Environmental Science',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) Kashmiri, Urdu, English, History, Political Science, Economics',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'AIIMS Jammu',short:'AIIMS Jammu',type:'Central',district:'Samba',state:'Jammu & Kashmir',
  naac:'Accredited',nirf:'New AIIMS — Emerging',affil:'All India Institute of Medical Sciences (MoHFW)',website:'aiimsjammu.edu.in',
  streams:['Medical'],
  specialNote:'Newest AIIMS in the J&K region. Vijaypur campus (Samba). Serves Jammu division and adjoining Himachal Pradesh belt.',
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years incl. internship)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'AIIMS Nursing Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'IIM Jammu',short:'IIMJ',type:'Central',district:'Jammu',state:'Jammu & Kashmir',
  naac:'Accredited',nirf:'Emerging IIM',affil:'Indian Institute of Management (MoE — Autonomous)',website:'iimj.ac.in',
  streams:['Management'],
  specialNote:'One of the newer IIMs. Strong focus on cross-border trade, entrepreneurship and J&K\'s developing industrial ecosystem.',
  programGroups:[
    {stream:'Management',programs:[
      {name:'MBA (2 years)',exam:'CAT',examCss:'ce-own'},
      {name:'Integrated Programme in Management — IPM (5-year BBA+MBA)',exam:'IPM Aptitude Test',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'SKUAST Kashmir',short:'SKUAST-K',type:'State',district:'Srinagar',state:'Jammu & Kashmir',
  naac:'A',nirf:'Top Agriculture',affil:'Sher-e-Kashmir University of Agricultural Sciences & Technology of Kashmir (State — ICAR recognised)',website:'skuastkashmir.ac.in',
  streams:['Arts & Science'],
  specialNote:'Premier agricultural university of Kashmir. World-renowned for saffron, walnut and temperate horticulture research.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Agriculture (4 years)',exam:'CUET-UG (15% all-India quota)',examCss:'ce-cuet'},
      {name:'B.Sc (Hons) Horticulture (4 years)',exam:'CUET-UG (15% all-India quota)',examCss:'ce-cuet'},
      {name:'B.Sc Forestry (4 years)',exam:'CUET-UG (15% all-India quota)',examCss:'ce-cuet'},
      {name:'B.V.Sc & A.H (5.5 years)',exam:'CUET-UG (15% all-India quota)',examCss:'ce-cuet'},
    ]},
  ]},

{name:'Central University of Jammu',short:'CUJ',type:'Central',district:'Samba',state:'Jammu & Kashmir',
  naac:'A',nirf:'Top Central University',affil:'Central University — Act of Parliament 2009',website:'cujammu.ac.in',
  streams:['Arts & Science','Management'],
  specialNote:'Established under the Central Universities Act 2009. Located at Rahya-Suchani in Samba district. Offers integrated UG-PG programmes across humanities, sciences, and management.',
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'Integrated B.A–M.A (English, Hindi, Sanskrit, Economics, Political Science, History) — 5 years',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'Integrated B.Sc–M.Sc (Physics, Chemistry, Maths, Computer Science, Environmental Science) — 5 years',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Com (Hons)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'Integrated BBA–MBA (5 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

];
