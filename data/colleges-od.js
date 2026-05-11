// Vazhi — Colleges Data: Odisha
// Edit this file to add/update Odisha colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_OD=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'NIT Rourkela',short:'NITR',type:'Central',district:'Sundargarh',state:'Odisha',
  naac:'A++',nirf:'#14 Engineering',affil:'National Institute of Technology (Institute of National Importance)',website:'nitrkl.ac.in',
  streams:['Engineering','Design'],
  specialNote:'One of India\'s oldest and largest NITs. Strong placements in core and IT sectors.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Metallurgical, Ceramic, Mining, Biomedical, Food Process)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
    {stream:'Design',programs:[
      {name:'B.Arch',exam:'JEE Main Paper 2 / NATA',examCss:'ce-nata'},
    ]},
  ]},

{name:'IIT Bhubaneswar',short:'IITBBS',type:'Central',district:'Khurda',state:'Odisha',
  naac:'Accredited',nirf:'Top 40 Engineering',affil:'Autonomous (Institute of National Importance)',website:'iitbbs.ac.in',
  streams:['Engineering','Arts & Science'],
  specialNote:'Newer IIT with growing research profile. Campus in Argul, near Bhubaneswar.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Earth & Environmental Sciences)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Research) — Physics, Chemistry, Mathematics',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'NISER Bhubaneswar',short:'NISER',type:'Central',district:'Khurda',state:'Odisha',
  naac:'A++',nirf:'Top Science Research',affil:'National Institute of Science Education & Research (DAE — HBNI)',website:'niser.ac.in',
  streams:['Arts & Science'],
  specialNote:'Premier science research institute under Dept of Atomic Energy. Highly selective BS-MS programme.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'BS-MS Integrated (Physics, Chemistry, Biology, Mathematics, Computer Science)',exam:'NEST (own entrance)',examCss:'ce-own'},
    ]},
  ]},

{name:'AIIMS Bhubaneswar',short:'AIIMS Bhubaneswar',type:'Central',district:'Khurda',state:'Odisha',
  naac:'Accredited',nirf:'Top Medical',affil:'All India Institute of Medical Sciences (MoHFW)',website:'aiimsbhubaneswar.nic.in',
  streams:['Medical'],
  specialNote:'One of six new AIIMS under PM Swasthya Suraksha Yojana. Serves Odisha and surrounding states.',
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years incl. internship)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'AIIMS Nursing Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'IIIT Bhubaneswar',short:'IIITBBSR',type:'Central',district:'Khurda',state:'Odisha',
  naac:'Accredited',nirf:'Top 100 Engineering',affil:'International Institute of Information Technology (MoE PPP)',website:'iiit-bh.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, Electronics & Telecom)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'Central University of Odisha',short:'CUO',type:'Central',district:'Koraput',state:'Odisha',
  naac:'B++',nirf:'Top 150 University',affil:'Central University (UGC Act 2009)',website:'cuo.ac.in',
  streams:['Arts & Science','Management','Education'],
  specialNote:'Located in tribal-belt Koraput. Focus on development studies, environmental science and tribal studies.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Computer Science, Environmental Science, Life Sciences',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) Odia, English, History, Political Science',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'SVNIRTAR — Swami Vivekanand National Institute of Rehabilitation Training & Research',short:'SVNIRTAR',type:'Central',district:'Cuttack',state:'Odisha',
  naac:'Accredited',nirf:'Top Rehabilitation Institute',affil:'Ministry of Social Justice & Empowerment, Govt of India',website:'svnirtar.nic.in',
  streams:['Medical'],
  specialNote:'National centre for rehabilitation sciences under MoSJE. Trains prosthetics/orthotics technicians, occupational therapists and physiotherapists serving the differently-abled community across India.',
  programGroups:[
    {stream:'Medical & Rehabilitation',programs:[
      {name:'B.P.O. (Prosthetics & Orthotics) — 4.5 years',exam:'SVNIRTAR Entrance',examCss:'ce-own'},
      {name:'B.O.T. (Occupational Therapy) — 4.5 years',exam:'SVNIRTAR Entrance',examCss:'ce-own'},
      {name:'B.Sc Physiotherapy (BPT) — 4.5 years',exam:'SVNIRTAR Entrance',examCss:'ce-own'},
      {name:'Diploma in Vocational Rehabilitation — 1 year',exam:'Merit',examCss:'ce-merit'},
    ]},
  ]},

{name:'IIM Sambalpur',short:'IIMS',type:'Central',district:'Sambalpur',state:'Odisha',
  naac:'Accredited',nirf:'Emerging IIM',affil:'Indian Institute of Management (MoE — Autonomous)',website:'iimsambalpur.ac.in',
  streams:['Management'],
  specialNote:'One of the newer IIMs. MBA via CAT. Strong focus on sustainability and tribal development.',
  programGroups:[
    {stream:'Management',programs:[
      {name:'MBA (2 years)',exam:'CAT',examCss:'ce-own'},
    ]},
  ]},

];
