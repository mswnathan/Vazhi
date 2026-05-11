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

];
