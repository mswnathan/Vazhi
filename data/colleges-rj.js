// Vazhi — Colleges Data: Rajasthan
// Edit this file to add/update Rajasthan colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_RJ=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Jodhpur',short:'IITJ',type:'Central',district:'Jodhpur',state:'Rajasthan',
  naac:'Accredited',nirf:'Emerging IIT',affil:'Autonomous (Institute of National Importance)',website:'iitj.ac.in',
  streams:['Engineering','Arts & Science'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, AI & Data Science, EE, Mechanical, Metallurgical & Materials)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'MNIT Jaipur',short:'MNIT',type:'Central',district:'Jaipur',state:'Rajasthan',
  naac:'A+',nirf:'Top 20 Engineering',affil:'National Institute of Technology',website:'mnit.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Metallurgical)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'National Law University Jodhpur (NLU Jodhpur)',short:'NLUJ',type:'Central',district:'Jodhpur',state:'Rajasthan',
  naac:'A',nirf:'Top 5 Law',affil:'National Law University (Rajasthan)',website:'nlujodhpur.ac.in',
  streams:['Law'],
  specialNote:'Known for corporate and commercial law. One of the original NLUs.',
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
      {name:'B.B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'NIFT Jodhpur',short:'NIFT-JDH',type:'Central',district:'Jodhpur',state:'Rajasthan',
  naac:'Accredited',nirf:'Top Design',affil:'National Institute of Fashion Technology (Ministry of Textiles)',website:'nift.ac.in/jodhpur',
  streams:['Design'],
  programGroups:[
    {stream:'Design',programs:[
      {name:'B.Des (Fashion Design)',exam:'NIFT Entrance',examCss:'ce-own'},
      {name:'B.F.Tech (Apparel Production)',exam:'NIFT Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Central University of Rajasthan (CURAJ)',short:'CURAJ',type:'Central',district:'Ajmer',state:'Rajasthan',
  naac:'A',nirf:'Top University',affil:'Central University — UGC Act 2009',website:'curaj.ac.in',
  streams:['Arts & Science','Management','Law'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Environmental Science)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (English, History, Political Science, Sociology)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'AIIMS Jodhpur',short:'AIIMSJ',type:'Central',district:'Jodhpur',state:'Rajasthan',
  naac:'Accredited',nirf:'Top Medical',affil:'All India Institute of Medical Sciences (Ministry of Health)',website:'aiimsjodhpur.edu.in',
  streams:['Medical'],
  specialNote:'One of the new AIIMS under PM-AIIMS scheme. Highly competitive NEET cutoff.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

// ──────────────────────────────────────────────
// DEEMED — MERIT ONLY
// ──────────────────────────────────────────────
{name:'BITS Pilani — Pilani Campus',short:'BITS-PIL',type:'Deemed',district:'Jhunjhunu',state:'Rajasthan',
  naac:'A',nirf:'Top 25 Engineering',affil:'BITS Pilani (Deemed University)',website:'bits-pilani.ac.in/pilani',
  streams:['Engineering','Arts & Science'],
  specialNote:'The original BITS campus. Purely merit-based via BITSAT. No donations, no management quota.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, Mechanical, Chemical, Civil, Manufacturing)',exam:'BITSAT',examCss:'ce-own'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Biology, Economics)',exam:'BITSAT',examCss:'ce-own'},
      {name:'B.Pharm',exam:'BITSAT',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'SMS Medical College Jaipur',short:'SMSMCJ',type:'State',district:'Jaipur',state:'Rajasthan',
  naac:'A',nirf:'Top State Medical',affil:'Rajasthan University of Health Sciences (RUHS)',website:'smsmedicalcollege.com',
  streams:['Medical'],
  specialNote:'Largest government medical college in Rajasthan. NEET UG admission under state quota.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — Rajasthan DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — Rajasthan DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — Rajasthan DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — Rajasthan DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — Rajasthan DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Swami Keshwanand Rajasthan Agricultural University (SKRAU)',short:'SKRAU',type:'State',district:'Bikaner',state:'Rajasthan',
  naac:'A',nirf:'Top Agriculture',affil:'Swami Keshwanand Rajasthan Agricultural University (State)',website:'raubikaner.org',
  streams:['Agriculture'],
  specialNote:'Premier state agricultural university for arid zone agriculture. CUET-UG (15% all-India quota) / RJ state merit.',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Agriculture) — 4 years',exam:'CUET-UG (15% all-India quota) / RJ Merit',examCss:'ce-cuet'},
      {name:'B.Sc (Horticulture)',exam:'CUET-UG (15% all-India quota) / RJ Merit',examCss:'ce-cuet'},
    ]},
  ]},


{name:'National Institute of Ayurveda (NIA Jaipur)',short:'NIA',type:'Central',district:'Jaipur',state:'Rajasthan',
  naac:'A',nirf:'',affil:'Ministry of AYUSH (Central)',website:'nia.nic.in',
  streams:['Medical'],
  specialNote:'India\'s premier institution for Ayurvedic education and research (est. 1976). BAMS admission through NEET UG and state counselling.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'BAMS — Bachelor of Ayurvedic Medicine & Surgery (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

];
