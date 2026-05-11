// Vazhi — Colleges Data: Karnataka
// Edit this file to add/update Karnataka colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_KA=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'Indian Institute of Science (IISc)',short:'IISc',type:'Central',district:'Bengaluru',state:'Karnataka',
  naac:'A++',nirf:'#1 University · #1 Research',affil:'Institute of National Importance (UGC)',website:'iisc.ac.in',
  streams:['Engineering','Arts & Science'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.S (Research) — Physics, Chemistry, Maths, Materials, Earth & Climate, Electrical, Mechanical, Chemical, Computational Science',exam:'JEE Advanced / KVPY',examCss:'ce-jee'},
    ]},
  ]},

{name:'IIT Dharwad',short:'IITDH',type:'Central',district:'Dharwad',state:'Karnataka',
  naac:'Accredited',nirf:'Emerging IIT',affil:'Autonomous (Institute of National Importance)',website:'iitdh.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, EE, Mechanical, Mathematics & Computing)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'NIT Karnataka (NIT Surathkal)',short:'NITK',type:'Central',district:'Mangaluru',state:'Karnataka',
  naac:'A+',nirf:'#7 Engineering',affil:'National Institute of Technology',website:'nitk.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EE, IT, Mechanical, Civil, Chemical, Mining, Metallurgical)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'IIIT Bengaluru',short:'IIITB',type:'Central',district:'Bengaluru',state:'Karnataka',
  naac:'A',nirf:'Top 100 Engg',affil:'IIIT Bangalore (Autonomous — Govt of India & Industry PPP)',website:'iiitb.ac.in',
  streams:['Engineering'],
  specialNote:'No direct B.Tech. UG-entry Integrated M.Tech (5 years) is the primary UG route.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'Integrated M.Tech (CSE, ECE, Data Science) — 5-year UG entry',exam:'JEE Main / IIITB Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'National Law School of India University (NLSIU)',short:'NLSIU',type:'Central',district:'Bengaluru',state:'Karnataka',
  naac:'A++',nirf:'#1 Law',affil:'National Law University (Autonomous)',website:'nls.ac.in',
  streams:['Law'],
  specialNote:'Top-ranked NLU in India. Highly competitive CLAT cutoff for Bengaluru seats.',
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'NIMHANS',short:'NIMHANS',type:'Central',district:'Bengaluru',state:'Karnataka',
  naac:'A++',nirf:'Top Medical',affil:'Institute of National Importance — Ministry of Health',website:'nimhans.ac.in',
  streams:['Medical'],
  specialNote:'India\'s premier neuroscience & mental health institute. PG-dominant; limited UG-level Allied Health seats.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'B.Sc (Allied Health Sciences) — Neuroscience, Psychiatric Nursing',exam:'NIMHANS Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'NIFT Bengaluru',short:'NIFT-BLR',type:'Central',district:'Bengaluru',state:'Karnataka',
  naac:'Accredited',nirf:'Top Design',affil:'National Institute of Fashion Technology (Ministry of Textiles)',website:'nift.ac.in/bangalore',
  streams:['Design'],
  programGroups:[
    {stream:'Design',programs:[
      {name:'B.Des (Fashion Design, Lifestyle Accessory, Knitwear, Leather)',exam:'NIFT Entrance',examCss:'ce-own'},
      {name:'B.F.Tech (Apparel Production)',exam:'NIFT Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Central University of Karnataka (CUK)',short:'CUK',type:'Central',district:'Kalaburagi',state:'Karnataka',
  naac:'A',nirf:'Top University',affil:'Central University — UGC Act 2009',website:'cuk.ac.in',
  streams:['Arts & Science','Management','Law'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (English, History, Sociology, Political Science)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE / AIDED
// ──────────────────────────────────────────────
{name:'University Visvesvaraya College of Engineering (UVCE)',short:'UVCE',type:'State',district:'Bengaluru',state:'Karnataka',
  naac:'A',nirf:'Top State Engineering',affil:'Bangalore University',website:'uvce.ac.in',
  streams:['Engineering'],
  specialNote:'One of India\'s oldest engineering colleges (est. 1917). Admitted via KCET.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, Civil, Mechanical, Chemical, Industrial & Production)',exam:'KCET',examCss:'ce-own'},
    ]},
  ]},

{name:'BMS College of Engineering',short:'BMSCE',type:'Aided',district:'Bengaluru',state:'Karnataka',
  naac:'A+',nirf:'Top 50 Engineering',affil:'VTU (Government Aided — grant-funded autonomous)',website:'bmsce.ac.in',
  streams:['Engineering'],
  specialNote:'Government-aided autonomous college under VTU. Low fees due to grant funding.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, IT, Mechanical, Civil, Industrial & Production, Biotechnology)',exam:'KCET',examCss:'ce-own'},
    ]},
  ]},

{name:'Mysore Medical College & Research Institute (MMCRI)',short:'MMCRI',type:'State',district:'Mysuru',state:'Karnataka',
  naac:'A',nirf:'Top State Medical',affil:'Rajiv Gandhi University of Health Sciences (RGUHS)',website:'mmcmysore.ac.in',
  streams:['Medical'],
  specialNote:'One of Karnataka\'s oldest government medical colleges (est. 1924). NEET-UG admission.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing',exam:'NEET UG / Merit',examCss:'ce-neet'},
    ]},
  ]},

{name:'Sri Jayachamarajendra College of Engineering (SJCE)',short:'SJCE',type:'State',district:'Mysuru',state:'Karnataka',
  naac:'A+',nirf:'Top State Engineering',affil:'JSS Science and Technology University (State)',website:'sjce.ac.in',
  streams:['Engineering'],
  specialNote:'Government engineering college under JSS Science & Technology University. KCET admission.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, Mechanical, Civil, Industrial)',exam:'KCET',examCss:'ce-own'},
    ]},
  ]},

{name:'University of Agricultural Sciences Bengaluru (UASB)',short:'UASB',type:'State',district:'Bengaluru',state:'Karnataka',
  naac:'A',nirf:'Top Agriculture',affil:'University of Agricultural Sciences, Bengaluru',website:'uasbangalore.edu.in',
  streams:['Agriculture'],
  specialNote:'Premier state agricultural university. ICAR / Karnataka state merit admission.',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Agriculture) — 4 years',exam:'ICAR AIEEA / Karnataka Merit',examCss:'ce-icar'},
      {name:'B.Sc (Horticulture) — 4 years',exam:'ICAR AIEEA / Karnataka Merit',examCss:'ce-icar'},
    ]},
  ]},

];
