// Vazhi — Colleges Data: Haryana
// Edit this file to add/update Haryana colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_HR=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'NIT Kurukshetra',short:'NITKKR',type:'Central',district:'Kurukshetra',state:'Haryana',
  naac:'A+',nirf:'#27 Engineering',affil:'National Institute of Technology',website:'nitkkr.ac.in',
  streams:['Engineering'],
  specialNote:'One of the older NITs (est. 1963). Strong in ECE, EEE and Computer Science. Good placement record.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, IT, Mechanical, Civil, Chemical, Industrial & Production)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'Central University of Haryana',short:'CUH',type:'Central',district:'Mahendergarh',state:'Haryana',
  naac:'B++',nirf:'Top 150 University',affil:'Central University (UGC Act 2009)',website:'cuh.ac.in',
  streams:['Arts & Science','Management','Education','Engineering'],
  specialNote:'Located in Mahendergarh. Focus on environment, media studies and teacher education.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Physics, Chemistry, Mathematics, Computer Science, Environmental Science',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) English, Hindi, History, Economics, Geography, Journalism',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Education',programs:[
      {name:'B.Ed (2 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'NIFTEM Kundli',short:'NIFTEM',type:'Central',district:'Sonipat',state:'Haryana',
  naac:'A',nirf:'Top Food Tech',affil:'National Institute of Food Technology Entrepreneurship & Management (MoFPI)',website:'niftem.ac.in',
  streams:['Engineering'],
  specialNote:'India\'s only central institute dedicated to food technology and food entrepreneurship. Excellent industry tie-ups with FMCG sector.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (Food Technology, Food Engineering)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'IIM Rohtak',short:'IIMR',type:'Central',district:'Rohtak',state:'Haryana',
  naac:'Accredited',nirf:'Top 15 Management',affil:'Indian Institute of Management (MoE — Autonomous)',website:'iimrohtak.ac.in',
  streams:['Management'],
  specialNote:'Newer IIM with one of the largest campuses. Strong focus on entrepreneurship. MBA via CAT.',
  programGroups:[
    {stream:'Management',programs:[
      {name:'MBA (2 years)',exam:'CAT',examCss:'ce-own'},
      {name:'Integrated Programme in Management — IPM (5-year BBA+MBA)',exam:'IPM Aptitude Test',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'Pt. B.D. Sharma PGIMS Rohtak',short:'PGIMS Rohtak',type:'State',district:'Rohtak',state:'Haryana',
  naac:'A',nirf:'Top Government Medical',affil:'Pt. B.D. Sharma University of Health Sciences, Rohtak',website:'uhsrohtak.ac.in',
  streams:['Medical'],
  specialNote:'Haryana\'s premier government medical institution (est. 1960). One of the largest hospital-attached medical colleges in North India.',
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years incl. internship)',exam:'NEET UG (Haryana state counselling)',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'NEET UG / State Entrance',examCss:'ce-neet'},
    ]},
  ]},

{name:'Maharshi Dayanand University',short:'MDU Rohtak',type:'State',district:'Rohtak',state:'Haryana',
  naac:'A+',nirf:'Top 60 University',affil:'State University (est. 1976)',website:'mdu.ac.in',
  streams:['Arts & Science','Management','Law','Engineering'],
  specialNote:'Major affiliating university covering most of Haryana\'s colleges. Direct B.Tech and Law programmes on campus.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, IT, Mechanical, Civil)',exam:'JEE Main / State counselling',examCss:'ce-jee'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Mathematics, Computer Science, Biotechnology)',exam:'Merit-based',examCss:'ce-merit'},
      {name:'B.A (Hons) (Economics, English, History, Political Science)',exam:'Merit-based',examCss:'ce-merit'},
    ]},
    {stream:'Law',programs:[
      {name:'LL.B (3-year)',exam:'State Entrance / Merit',examCss:'ce-merit'},
    ]},
  ]},

{name:'CCS Haryana Agricultural University',short:'CCSHAU',type:'State',district:'Hisar',state:'Haryana',
  naac:'A+',nirf:'Top 10 Agriculture',affil:'Chaudhary Charan Singh Haryana Agricultural University (State — ICAR recognised)',website:'hau.ac.in',
  streams:['Arts & Science'],
  specialNote:'One of India\'s leading agricultural universities. Renowned for wheat and rice variety development crucial to Green Revolution.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Agriculture (4 years)',exam:'ICAR AIEEA',examCss:'ce-icar'},
      {name:'B.Sc (Hons) Horticulture (4 years)',exam:'ICAR AIEEA',examCss:'ce-icar'},
      {name:'B.Tech Food Technology',exam:'ICAR AIEEA / State Entrance',examCss:'ce-icar'},
    ]},
  ]},

];
