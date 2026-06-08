// Vazhi — Colleges Data: Himachal Pradesh
// Edit this file to add/update Himachal Pradesh colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_HP=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Mandi',short:'IITM',type:'Central',district:'Mandi',state:'Himachal Pradesh',
  naac:'Accredited',nirf:'Top 50 Engineering',affil:'Autonomous (Institute of National Importance)',website:'iitmandi.ac.in',
  streams:['Engineering','Arts & Science'],
  specialNote:'Newer IIT set in the Uhl river valley of the Himalayas. Known for sustainability research, disaster resilience and Data Science & Engineering.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Data Science & Engineering, Engineering Physics)',exam:'JEE Advanced',examCss:'ce-jee'},
      {name:'B.Tech Quantum Science & Engineering (new 2026 — India\'s first IIT BTech in quantum)',exam:'JEE Advanced',examCss:'ce-jee'},
      {name:'B.Tech Chemical Engineering with Data Analytics (new 2026)',exam:'JEE Advanced',examCss:'ce-jee'},
      {name:'B.Tech Agricultural Engineering with Data Analytics (new 2026)',exam:'JEE Advanced',examCss:'ce-jee'},
      {name:'B.Tech Microelectronics & VLSI (new 2026)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Research) — Physics, Chemistry, Mathematics, Economics',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'NIT Hamirpur',short:'NITH',type:'Central',district:'Hamirpur',state:'Himachal Pradesh',
  naac:'A',nirf:'Top 60 Engineering',affil:'National Institute of Technology',website:'nith.ac.in',
  streams:['Engineering','Design'],
  specialNote:'Well-established NIT with strong alumni in IT and core sectors. One of the few NITs with a B.Arch programme.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Material Science & Engineering)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
    {stream:'Design',programs:[
      {name:'B.Arch (5 years)',exam:'JEE Main Paper 2 / NATA',examCss:'ce-nata'},
    ]},
  ]},

{name:'AIIMS Bilaspur',short:'AIIMS Bilaspur',type:'Central',district:'Bilaspur',state:'Himachal Pradesh',
  naac:'Accredited',nirf:'New AIIMS — Emerging',affil:'All India Institute of Medical Sciences (MoHFW)',website:'aiimsbilaspur.edu.in',
  streams:['Medical'],
  specialNote:'Newest AIIMS in the Himalayan region. Inaugurated 2022. Serves Himachal Pradesh and adjoining hill districts.',
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years incl. internship)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'AIIMS Nursing Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'HPNLU Shimla',short:'HPNLU',type:'Central',district:'Shimla',state:'Himachal Pradesh',
  naac:'Accredited',nirf:'Top 15 Law',affil:'Himachal Pradesh National Law University (NLU — State Act 2009)',website:'hpnlu.ac.in',
  streams:['Law'],
  specialNote:'NLU serving the hill state. Focus on environment law, land rights and constitutional law. Scenic Shimla campus.',
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) (5-year Integrated)',exam:'CLAT',examCss:'ce-clat'},
      {name:'B.B.A LL.B (Hons) (5-year Integrated)',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'Central University of Himachal Pradesh',short:'CUHP',type:'Central',district:'Kangra',state:'Himachal Pradesh',
  naac:'B++',nirf:'Top 150 University',affil:'Central University (UGC Act 2009)',website:'cuhimachal.ac.in',
  streams:['Arts & Science','Management','Education'],
  specialNote:'Located in Dharamshala (Kangra). Known for Buddhist studies, environmental science and media programmes.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Computer Science, Environmental Science, Biotechnology, Physics',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) English, Hindi, History, Journalism & Mass Communication, Buddhist Studies',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Education',programs:[
      {name:'B.Ed (2 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'IIIT Una',short:'IIIT Una',type:'Central',district:'Una',state:'Himachal Pradesh',
  naac:'Accredited',nirf:'Emerging IIIT',affil:'Indian Institute of Information Technology Una (IIIT-Partnership Act 2017 — MoE + State Govt + Industry)',website:'iiitu.ac.in',
  streams:['Engineering'],
  specialNote:'One of the newer IIITs under the PPP model. Located in Una. Admission through JEE Main + JoSAA counselling. Growing research culture with labs in AI/ML and wireless communication.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech Computer Science & Engineering (4 years)',exam:'JEE Main',examCss:'ce-jee'},
      {name:'B.Tech Electronics & Communication Engineering (4 years)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'IIM Sirmaur',short:'IIMSI',type:'Central',district:'Sirmaur',state:'Himachal Pradesh',
  naac:'Accredited',nirf:'Emerging IIM',affil:'Indian Institute of Management (MoE — Autonomous)',website:'iimsirmaur.ac.in',
  streams:['Management'],
  specialNote:'One of the newest IIMs. Situated in Paonta Sahib. Focus on mountain economy, sustainability and rural management.',
  programGroups:[
    {stream:'Management',programs:[
      {name:'MBA (2 years)',exam:'CAT',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'Dr. Y.S. Parmar UHF Nauni',short:'UHF Nauni',type:'State',district:'Solan',state:'Himachal Pradesh',
  naac:'A',nirf:'Top 10 Agriculture',affil:'Dr. Yashwant Singh Parmar University of Horticulture & Forestry (State — ICAR recognised)',website:'yspuniversity.ac.in',
  streams:['Arts & Science'],
  specialNote:'India\'s only dedicated Horticulture & Forestry university. Renowned for apple, kiwi and temperate fruit research. Stunning hill campus at 1250 m altitude.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Horticulture (4 years)',exam:'CUET-UG (15% all-India quota)',examCss:'ce-cuet'},
      {name:'B.Sc (Hons) Forestry (4 years)',exam:'CUET-UG (15% all-India quota)',examCss:'ce-cuet'},
      {name:'B.Tech Food Technology',exam:'CUET-UG (15% all-India quota) / State Entrance',examCss:'ce-cuet'},
    ]},
  ]},

];
