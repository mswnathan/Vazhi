// Vazhi — Colleges Data: Kerala
// Edit this file to add/update Kerala colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_KL=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'NIT Calicut',short:'NITC',type:'Central',district:'Kozhikode',state:'Kerala',
  naac:'A+',nirf:'#8 Engineering',affil:'National Institute of Technology',website:'nitc.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, IT, Mechanical, Civil, Chemical, Production, Biotechnology)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'IIT Palakkad',short:'IITP',type:'Central',district:'Palakkad',state:'Kerala',
  naac:'Accredited',nirf:'Emerging IIT',affil:'Autonomous (Institute of National Importance)',website:'iitpkd.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, EE, Mechanical, Civil, Data Science & Engineering)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'IIM Kozhikode',short:'IIMK',type:'Central',district:'Kozhikode',state:'Kerala',
  naac:'A+',nirf:'#5 Management',affil:'Institute of National Importance',website:'iimk.ac.in',
  streams:['Management'],
  specialNote:'PGP (MBA equivalent) is post-UG. UG students note for future planning.',
  programGroups:[
    {stream:'Management (Post-UG)',programs:[
      {name:'PGP (MBA) — 2 years',exam:'CAT',examCss:'ce-own'},
    ]},
  ]},

{name:'NIFT Kannur',short:'NIFT-KNR',type:'Central',district:'Kannur',state:'Kerala',
  naac:'Accredited',nirf:'Top Design',affil:'National Institute of Fashion Technology (Ministry of Textiles)',website:'nift.ac.in/kannur',
  streams:['Design'],
  programGroups:[
    {stream:'Design',programs:[
      {name:'B.Des (Fashion Design)',exam:'NIFT Entrance',examCss:'ce-own'},
      {name:'B.F.Tech (Apparel Production)',exam:'NIFT Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Central University of Kerala (CUKerala)',short:'CUKer',type:'Central',district:'Kasaragod',state:'Kerala',
  naac:'A',nirf:'Top University',affil:'Central University — UGC Act 2009',website:'cukerala.ac.in',
  streams:['Arts & Science','Law'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Environmental Science)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (English, Hindi, Malayalam, Sociology, Development Studies)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'National NIT, Calicut — School of Architecture (NIT Calicut)',short:'NITC-Arch',type:'Central',district:'Kozhikode',state:'Kerala',
  naac:'A+',nirf:'Top Architecture',affil:'National Institute of Technology',website:'nitc.ac.in',
  streams:['Design'],
  specialNote:'B.Arch admitted via JEE Main Paper 2 and NATA. Part of NIT Calicut.',
  programGroups:[
    {stream:'Design & Architecture',programs:[
      {name:'B.Arch — 5 years',exam:'JEE Main Paper 2 / NATA',examCss:'ce-nata'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE / AIDED
// ──────────────────────────────────────────────
{name:'Cochin University of Science and Technology (CUSAT)',short:'CUSAT',type:'State',district:'Ernakulam',state:'Kerala',
  naac:'A',nirf:'Top 100 University',affil:'Cochin University of Science and Technology (State)',website:'cusat.ac.in',
  streams:['Engineering','Arts & Science','Law'],
  specialNote:'State-funded technical university. Admission via CAT (CUSAT) — own entrance exam.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, IT, Mechanical, Civil, Chemical, Safety & Fire)',exam:'CUSAT CAT',examCss:'ce-own'},
      {name:'B.Arch',exam:'NATA / CUSAT CAT',examCss:'ce-nata'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Applied Sciences)',exam:'CUSAT CAT',examCss:'ce-own'},
    ]},
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CUSAT CAT',examCss:'ce-own'},
    ]},
  ]},

{name:'College of Engineering Thiruvananthapuram (CET)',short:'CET-TVM',type:'State',district:'Thiruvananthapuram',state:'Kerala',
  naac:'A',nirf:'Top State Engineering',affil:'APJ Abdul Kalam Technological University (KTU)',website:'cet.ac.in',
  streams:['Engineering'],
  specialNote:'Oldest engineering college in Kerala (est. 1939). KEAM admission.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Architecture)',exam:'KEAM',examCss:'ce-own'},
    ]},
  ]},

{name:'Govt. Medical College Thiruvananthapuram',short:'GMC-TVM',type:'State',district:'Thiruvananthapuram',state:'Kerala',
  naac:'A',nirf:'Top State Medical',affil:'Kerala University of Health Sciences (KUHS)',website:'gmctvm.org',
  streams:['Medical'],
  specialNote:'Premier state government medical college. NEET-UG admission under Kerala quota.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing',exam:'NEET UG / Merit',examCss:'ce-neet'},
    ]},
  ]},

{name:'Kerala Agricultural University (KAU)',short:'KAU',type:'State',district:'Thrissur',state:'Kerala',
  naac:'A',nirf:'Top Agriculture',affil:'Kerala Agricultural University (State)',website:'kau.in',
  streams:['Agriculture'],
  specialNote:'Premier state agricultural university. Admission via ICAR AIEEA and Kerala state merit.',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Agriculture) — 4 years',exam:'ICAR AIEEA / Kerala Merit',examCss:'ce-icar'},
      {name:'B.Sc (Horticulture, Forestry, Food Technology)',exam:'ICAR AIEEA / Kerala Merit',examCss:'ce-icar'},
      {name:'B.F.Sc (Fisheries)',exam:'ICAR AIEEA / Kerala Merit',examCss:'ce-icar'},
    ]},
  ]},

{name:'Kerala Veterinary and Animal Sciences University (KVASU)',short:'KVASU',type:'State',district:'Wayanad',state:'Kerala',
  naac:'A',nirf:'Top Vet',affil:'Kerala Veterinary and Animal Sciences University (State)',website:'kvasu.ac.in',
  streams:['Agriculture'],
  specialNote:'Only veterinary university in Kerala. Admission via NEET UG (Vet stream).',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.V.Sc & A.H — 5.5 years',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

{name:'LNIPE Thiruvananthapuram',short:'LNIPE-TVM',type:'Central',district:'Thiruvananthapuram',state:'Kerala',
  naac:'A',nirf:'Top Physical Education',affil:'Lakshmibai National Institute of Physical Education — South Campus (Ministry of Youth Affairs & Sports)',website:'lnipetvm.ac.in',
  streams:['Education'],
  specialNote:'Southern campus of LNIPE Gwalior. Serves South India\'s demand for qualified PE teachers, coaches and sport scientists. Admission via LNIPE entrance.',
  programGroups:[
    {stream:'Education',programs:[
      {name:'B.P.Ed (Bachelor of Physical Education) — 2 years (after UG)',exam:'LNIPE Entrance',examCss:'ce-own'},
      {name:'B.Sc (Physical Education, Health Education & Sports)',exam:'LNIPE Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Govt. Law College Thiruvananthapuram',short:'GLC-TVM',type:'State',district:'Thiruvananthapuram',state:'Kerala',
  naac:'Accredited',nirf:'Top State Law',affil:'University of Kerala',website:'glctrivandrum.ac.in',
  streams:['Law'],
  specialNote:'Oldest law college in Kerala. Admission via Kerala Law Entrance (KLEE).',
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'KLEE (Kerala Law Entrance)',examCss:'ce-own'},
      {name:'LL.B — 3-year (after UG)',exam:'KLEE',examCss:'ce-own'},
    ]},
  ]},

];
