// Vazhi — Colleges Data: Bihar
// Edit this file to add/update Bihar colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_BR=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Patna',short:'IITP-BIH',type:'Central',district:'Patna',state:'Bihar',
  naac:'Accredited',nirf:'Emerging IIT',affil:'Autonomous (Institute of National Importance)',website:'iitp.ac.in',
  streams:['Engineering','Arts & Science'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, EE, Mechanical, Civil, Chemical, Mathematics & Computing)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'NIT Patna',short:'NITP',type:'Central',district:'Patna',state:'Bihar',
  naac:'A',nirf:'Emerging NIT',affil:'National Institute of Technology',website:'nitp.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Architecture)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'AIIMS Patna',short:'AIIMSP',type:'Central',district:'Patna',state:'Bihar',
  naac:'Accredited',nirf:'Top Medical',affil:'All India Institute of Medical Sciences (Ministry of Health)',website:'aiimspatna.org',
  streams:['Medical'],
  specialNote:'One of the new AIIMS under PM-AIIMS scheme. Highly competitive NEET cutoff.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

{name:'Chanakya National Law University (CNLU)',short:'CNLU',type:'Central',district:'Patna',state:'Bihar',
  naac:'Accredited',nirf:'Top NLU',affil:'National Law University (Bihar)',website:'cnlu.ac.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'Central University of South Bihar (CUSB)',short:'CUSB',type:'Central',district:'Gaya',state:'Bihar',
  naac:'A',nirf:'Top University',affil:'Central University — UGC Act 2009',website:'cusb.ac.in',
  streams:['Arts & Science','Management'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Environmental Science)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (English, Hindi, History, Political Science, Sociology)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'BBA (Business Administration)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'Nalanda University',short:'NALANDU',type:'Central',district:'Rajgir',state:'Bihar',
  naac:'Accredited',nirf:'New Institution',affil:'Nalanda University (Central — Act of Parliament)',website:'nalandauniv.edu.in',
  streams:['Arts & Science'],
  specialNote:'Revival of the ancient Nalanda University. International collaboration; small intake. Currently PG-only but historic UG plans underway.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'M.A / M.Sc (Buddhist Studies, History, Ecology, International Relations)',exam:'Nalanda Entrance',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'Patna Medical College & Hospital (PMCH)',short:'PMCH',type:'State',district:'Patna',state:'Bihar',
  naac:'A',nirf:'Top State Medical',affil:'Aryabhatta Knowledge University (AKU)',website:'pmch.bih.nic.in',
  streams:['Medical'],
  specialNote:'Oldest and most prestigious government medical college in Bihar (est. 1925). NEET UG admission under Bihar state quota.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

{name:'Bihar Agricultural University (BAU)',short:'BAU',type:'State',district:'Sabour',state:'Bihar',
  naac:'Accredited',nirf:'Top Agriculture',affil:'Bihar Agricultural University (State)',website:'bausabour.ac.in',
  streams:['Agriculture'],
  specialNote:'Premier state agricultural university (est. 1908, Sabour campus). ICAR AIEEA / Bihar state merit.',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Agriculture) — 4 years',exam:'ICAR AIEEA / Bihar Merit',examCss:'ce-icar'},
      {name:'B.Sc (Horticulture)',exam:'ICAR AIEEA / Bihar Merit',examCss:'ce-icar'},
    ]},
  ]},


{name:'Composite Regional Centre for Skill Development, Rehabilitation & Empowerment of Persons with Disabilities (CRCSRE Patna)',short:'CRCSRE Patna',type:'Central',district:'Patna',state:'Bihar',
  naac:'',nirf:'',affil:'Ministry of Social Justice & Empowerment',website:'disabilityaffairs.gov.in',
  streams:['Medical'],
  specialNote:'Regional centre under MoSJE offering prosthetics & orthotics programme. Admission through centralized counselling. Similar CRCSRE centres operate in other states.',
  programGroups:[
    {stream:'Allied Health & Rehabilitation',programs:[
      {name:'Bachelor in Prosthetics & Orthotics / BPO (4.5 years)',exam:'MoSJE Counselling',examCss:'ce-own'},
    ]},
  ]},

];
