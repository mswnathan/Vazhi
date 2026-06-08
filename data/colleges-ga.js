// Vazhi — Colleges Data: Goa
// Edit this file to add/update Goa colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_GA=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Goa',short:'IITGOA',type:'Central',district:'North Goa',state:'Goa',
  naac:'Accredited',nirf:'Top 50 Engineering',affil:'Autonomous (Institute of National Importance)',website:'iitgoa.ac.in',
  streams:['Engineering','Arts & Science'],
  specialNote:'Established 2016. Temporary campus at Farmagudi (Ponda). Permanent campus coming up in Sangod, Canacona. Small cohort with strong faculty.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, Mechanical, Mathematics & Computing)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Research) — Physics, Chemistry, Mathematics',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'NIT Goa',short:'NITGOA',type:'Central',district:'North Goa',state:'Goa',
  naac:'Accredited',nirf:'Top 80 Engineering',affil:'National Institute of Technology',website:'nitgoa.ac.in',
  streams:['Engineering'],
  specialNote:'Established 2010. Farmagudi campus (Ponda). One of the newer NITs with growing infrastructure and industry exposure.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'Goa University',short:'GU',type:'State',district:'North Goa',state:'Goa',
  naac:'A+',nirf:'Top 75 University',affil:'State University (est. 1985)',website:'unigoa.ac.in',
  streams:['Arts & Science','Management','Law','Education'],
  specialNote:'Premier university of Goa. Taleigao Plateau campus. Strong in Marine Sciences, Biotechnology and Portuguese Studies — unique in India.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Marine Sciences, Biotechnology, Computer Science, Chemistry, Physics, Maths)',exam:'Merit (Class 12)',examCss:'ce-merit'},
      {name:'B.A (Economics, English, History, Konkani, Portuguese)',exam:'Merit (Class 12)',examCss:'ce-merit'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'Merit (Class 12)',examCss:'ce-merit'},
    ]},
    {stream:'Law',programs:[
      {name:'LL.B (3 years)',exam:'Merit (Class 12)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Goa College of Engineering',short:'GCE Goa',type:'State',district:'North Goa',state:'Goa',
  naac:'A',nirf:'Top Government Engineering',affil:'Goa University (est. 1965 — oldest engineering college in Goa)',website:'gec.ac.in',
  streams:['Engineering'],
  specialNote:'Oldest and most established government engineering college in Goa. Farmagudi (Ponda). Strong alumni in IT and infrastructure.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, Mechanical, Civil, IT)',exam:'JEE Main / State CET',examCss:'ce-jee'},
    ]},
  ]},

{name:'Goa Medical College',short:'GMC Goa',type:'State',district:'North Goa',state:'Goa',
  naac:'A',nirf:'Top Government Medical',affil:'Goa University / State Health Dept (est. 1963)',website:'gmc.goa.gov.in',
  streams:['Medical'],
  specialNote:'Goa\'s only government medical college. Attached to Goa Medical College & Hospital, Bambolim — one of the largest hospitals in Western India.',
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years incl. internship)',exam:'NEET UG (Goa state counselling)',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'NEET UG / State Entrance',examCss:'ce-neet'},
    ]},
  ]},

];
