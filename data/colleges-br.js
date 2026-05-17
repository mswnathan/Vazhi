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
  specialNote:'Premier state agricultural university (est. 1908, Sabour campus). CUET-UG (15% all-India quota) / Bihar state merit.',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Agriculture) — 4 years',exam:'CUET-UG (15% all-India quota) / Bihar Merit',examCss:'ce-cuet'},
      {name:'B.Sc (Horticulture)',exam:'CUET-UG (15% all-India quota) / Bihar Merit',examCss:'ce-cuet'},
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

{name:'Institute of Hotel Management, Hajipur',short:'IHM Hajipur',type:'Central',district:'Vaishali',state:'Bihar',
  naac:'Accredited',nirf:'NCHMCT Central IHM',affil:'National Council for Hotel Management & Catering Technology (NCHMCT) — Ministry of Tourism',website:'ihmhajipur.net',
  streams:['Management'],
  specialNote:'Central IHM under Ministry of Tourism. Offers diploma-level hospitality courses in addition to NCHM JEE based degree programmes.',
  programGroups:[
    {stream:'Hospitality & Hotel Management',programs:[
      {name:'B.Sc Hospitality & Hotel Administration (3 years)',exam:'NCHM JEE',examCss:'ce-nchm'},
      {name:'Diploma in Food Production / F&B Service / Bakery & Confectionery / Housekeeping',exam:'Merit (Class 12)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Indian Institute of Information Technology Bhagalpur',short:'IIIT Bhagalpur',type:'Central',district:'Bhagalpur',state:'Bihar',
  naac:'Accredited',nirf:'IIIT Network',affil:'Institute of National Importance (IIIT Act 2017) — Ministry of Education',website:'iiitbh.ac.in',
  streams:['Engineering'],
  specialNote:'One of the 25 IIITs under PPP model. Admission via JEE Main and JoSAA counselling.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech CSE (4 years)',exam:'JEE Main',examCss:'ce-jee'},
      {name:'B.Tech ECE (4 years)',exam:'JEE Main',examCss:'ce-jee'},
      {name:'B.Tech Mechatronics & Automation',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'Mahatma Gandhi Central University (MGCU)',short:'MGCU',type:'Central',district:'East Champaran',state:'Bihar',
  naac:'Accredited',nirf:'Top Central University',affil:'Central University — Act of Parliament 2014',website:'mgcub.ac.in',
  streams:['Arts & Science','Management'],
  specialNote:'Established at Motihari, East Champaran — the site of Mahatma Gandhi\'s 1917 Champaran Satyagraha. Offers integrated UG-PG programmes across humanities, sciences, and commerce.',
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'Integrated B.A–M.A (English, Hindi, Sanskrit, History, Political Science, Economics) — 5 years',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'Integrated B.Sc–M.Sc (Physics, Chemistry, Maths, Computer Science, Life Science) — 5 years',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'Integrated B.Com–M.Com — 5 years',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'Integrated BBA–MBA (5 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

];
