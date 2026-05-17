// Vazhi — Colleges Data: Maharashtra
// Edit this file to add/update Maharashtra colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_MH=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Bombay',short:'IITB',type:'Central',district:'Mumbai',state:'Maharashtra',
  naac:'A++',nirf:'#3 Engineering · #3 Overall',affil:'Autonomous (Institute of National Importance)',website:'iitb.ac.in',
  streams:['Engineering','Arts & Science','Design'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, EE, Mechanical, Civil, Chemical, Aerospace, Engineering Physics, Metallurgical, Earth Sciences)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Design',programs:[
      {name:'B.Des (Industrial Design)',exam:'UCEED',examCss:'ce-own'},
    ]},
  ]},

{name:'VNIT Nagpur',short:'VNIT',type:'Central',district:'Nagpur',state:'Maharashtra',
  naac:'A+',nirf:'Top 20 Engineering',affil:'National Institute of Technology',website:'vnit.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Electronics & Communication)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'IISER Pune',short:'IISERP',type:'Central',district:'Pune',state:'Maharashtra',
  naac:'A++',nirf:'Top Science Research',affil:'Institute of Science Education & Research (MoE)',website:'iiserpune.ac.in',
  streams:['Arts & Science'],
  specialNote:'Premier research university for basic sciences. BS-MS dual degree — top choice for research careers.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'BS-MS Dual Degree (Physics, Chemistry, Maths, Biology, Earth & Climate Science)',exam:'JEE Advanced / IAT / KVPY',examCss:'ce-jee'},
    ]},
  ]},

{name:'Maharashtra National Law University Mumbai (MNLU Mumbai)',short:'MNLU-MUM',type:'Central',district:'Mumbai',state:'Maharashtra',
  naac:'Accredited',nirf:'Top NLU',affil:'National Law University (Maharashtra)',website:'mnlumumbai.edu.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'TISS Mumbai',short:'TISS',type:'Central',district:'Mumbai',state:'Maharashtra',
  naac:'A++',nirf:'Top Social Science',affil:'Tata Institute of Social Sciences (Deemed — Central Govt)',website:'tiss.edu',
  streams:['Arts & Science','Management'],
  specialNote:'Merit-only via TISSMAT / CUET. Subsidised fees. India\'s top institution for social work and public policy.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.A (Social Work, Development Studies, Media & Cultural Studies)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'NIFT Mumbai',short:'NIFT-MUM',type:'Central',district:'Mumbai',state:'Maharashtra',
  naac:'Accredited',nirf:'Top Design',affil:'National Institute of Fashion Technology (Ministry of Textiles)',website:'nift.ac.in/mumbai',
  streams:['Design'],
  programGroups:[
    {stream:'Design',programs:[
      {name:'B.Des (Fashion Design, Fashion Communication, Leather)',exam:'NIFT Entrance',examCss:'ce-own'},
      {name:'B.F.Tech (Apparel Production)',exam:'NIFT Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'IIM Mumbai',short:'IIMMUM',type:'Central',district:'Mumbai',state:'Maharashtra',
  naac:'A++',nirf:'Top 10 Management',affil:'Indian Institute of Management Mumbai (formerly NITIE) — Institute of National Importance',website:'iimmumbai.ac.in',
  streams:['Management','Engineering'],
  specialNote:'Renamed from NITIE Mumbai in 2023. India\'s only IIM with deep roots in industrial engineering and operations research. IPM (5-year after Class 12) available. MBA via CAT; M.Tech via GATE.',
  programGroups:[
    {stream:'Management',programs:[
      {name:'IPM — Integrated Programme in Management (5-year, after Class 12)',exam:'IPMAT / IIM Mumbai Entrance',examCss:'ce-own'},
      {name:'MBA (Industrial Management / Operations) — 2 years',exam:'CAT',examCss:'ce-cat'},
    ]},
    {stream:'Engineering & Technology (PG)',programs:[
      {name:'M.Tech (Industrial Engineering & Operations Research)',exam:'GATE',examCss:'ce-gate'},
    ]},
  ]},

{name:'IIM Nagpur',short:'IIMNAG',type:'Central',district:'Nagpur',state:'Maharashtra',
  naac:'Accredited',nirf:'Top Management',affil:'Institute of National Importance',website:'iimnagpur.ac.in',
  streams:['Management'],
  specialNote:'PGP (MBA equivalent) is post-UG. UG students note for future planning.',
  programGroups:[
    {stream:'Management (Post-UG)',programs:[
      {name:'PGP (MBA) — 2 years',exam:'CAT',examCss:'ce-own'},
    ]},
  ]},

{name:'AIIMS Nagpur',short:'AIIMSNAG',type:'Central',district:'Nagpur',state:'Maharashtra',
  naac:'Accredited',nirf:'Top Medical',affil:'All India Institute of Medical Sciences (Ministry of Health)',website:'aiimsnagpur.edu.in',
  streams:['Medical'],
  specialNote:'One of the new AIIMS established under PM-AIIMS scheme. Highly competitive NEET cutoff.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

{name:'Institute of Chemical Technology (ICT) Mumbai',short:'ICT',type:'Central',district:'Mumbai',state:'Maharashtra',
  naac:'A++',nirf:'Top 10 Engineering',affil:'ICT Mumbai (Deemed — Institute of National Importance)',website:'ictmumbai.edu.in',
  streams:['Engineering'],
  specialNote:'Globally ranked for chemical engineering and technology. Admission via JEE Main + ICT own merit.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Chem.Engg (Chemical Engineering) — 4 years',exam:'JEE Main + ICT Merit',examCss:'ce-jee'},
      {name:'B.Tech (Pharmaceutical Sciences & Technology, Food Engineering)',exam:'JEE Main + ICT Merit',examCss:'ce-jee'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE / AIDED
// ──────────────────────────────────────────────
{name:'VJTI Mumbai',short:'VJTI',type:'Aided',district:'Mumbai',state:'Maharashtra',
  naac:'A+',nirf:'Top State Engineering',affil:'University of Mumbai (Govt Aided Autonomous)',website:'vjti.ac.in',
  streams:['Engineering'],
  specialNote:'Government-aided institute — one of Mumbai\'s oldest and most respected engineering colleges (est. 1887). MHT CET admission.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, IT, Mechanical, Civil, Production)',exam:'JEE Main / MHT CET',examCss:'ce-own'},
    ]},
  ]},

{name:'College of Engineering Pune (COEP)',short:'COEP',type:'State',district:'Pune',state:'Maharashtra',
  naac:'A+',nirf:'Top State Engineering',affil:'Savitribai Phule Pune University (Autonomous)',website:'coep.org.in',
  streams:['Engineering'],
  specialNote:'One of India\'s oldest engineering colleges (est. 1854). State-funded autonomous. MHT CET admission.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EE, Mechanical, Civil, Metallurgical, Instrumentation)',exam:'JEE Main / MHT CET',examCss:'ce-own'},
    ]},
  ]},

{name:'Grant Medical College & Sir JJ Hospital Mumbai',short:'GMC-MUM',type:'State',district:'Mumbai',state:'Maharashtra',
  naac:'A',nirf:'Top State Medical',affil:'Maharashtra University of Health Sciences (MUHS)',website:'gmcjjhmumbai.org',
  streams:['Medical'],
  specialNote:'One of India\'s oldest medical colleges (est. 1845). NEET UG admission under Maharashtra state quota.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — Maharashtra DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — Maharashtra DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — Maharashtra DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — Maharashtra DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — Maharashtra DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'BJ Medical College Pune',short:'BJMC',type:'State',district:'Pune',state:'Maharashtra',
  naac:'A',nirf:'Top State Medical',affil:'Maharashtra University of Health Sciences (MUHS)',website:'bjmcpune.org',
  streams:['Medical'],
  specialNote:'Highly sought-after government medical college. NEET UG admission under Maharashtra state quota.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — Maharashtra DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — Maharashtra DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — Maharashtra DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — Maharashtra DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — Maharashtra DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'DIAT — Defence Institute of Advanced Technology',short:'DIAT',type:'Central',district:'Pune',state:'Maharashtra',
  naac:'A',nirf:'Top Defence Research',affil:'Deemed University — Ministry of Defence, Govt of India',website:'diat.ac.in',
  streams:['Engineering'],
  specialNote:'Pune-based deemed university under MoD. Primarily PG and PhD; limited UG seats. Programmes in defence-critical technologies: missiles, avionics, explosives, cyber defence.',
  programGroups:[
    {stream:'Engineering & Technology (PG / PhD)',programs:[
      {name:'M.Tech (Armament Technology, Explosives, Avionics, Cyber Defence, Propulsion)',exam:'GATE + DIAT Interview',examCss:'ce-gate'},
      {name:'PhD (Engineering & Defence Sciences)',exam:'GATE / NET + DIAT Interview',examCss:'ce-gate'},
    ]},
  ]},

{name:'Maharashtra National Law University Aurangabad (MNLU Aurangabad)',short:'MNLU-AUR',type:'State',district:'Aurangabad',state:'Maharashtra',
  naac:'Accredited',nirf:'Top NLU',affil:'National Law University (Maharashtra)',website:'mnlua.ac.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'Kavikulaguru Kalidas Sanskrit University',short:'KKSU',type:'State',district:'Nagpur',state:'Maharashtra',
  naac:'B++',nirf:'Specialised University',affil:'State University — Government of Maharashtra (est. 1997)',website:'sanskrit.ac.in',
  streams:['Arts & Science'],
  specialNote:'India\'s dedicated Sanskrit university for the Vidarbha region. Offers classical and modern-application programmes in Sanskrit, Vedic Studies and Indian Knowledge Systems (IKS).',
  programGroups:[
    {stream:'Arts & Humanities',programs:[
      {name:'B.A (Sanskrit, Vedic Studies, Indian Philosophy, Prakrit)',exam:'CUET UG / Merit',examCss:'ce-cuet'},
      {name:'Shastri (equivalent to B.A) — 3 years',exam:'University Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Dr. Punjabrao Deshmukh Krishi Vidyapeeth (PDKV)',short:'PDKV',type:'State',district:'Akola',state:'Maharashtra',
  naac:'A',nirf:'Top Agriculture',affil:'Dr. Punjabrao Deshmukh Krishi Vidyapeeth (State)',website:'pdkv.ac.in',
  streams:['Agriculture'],
  specialNote:'Premier state agricultural university for Vidarbha region. CUET-UG (15% all-India quota) / MH state merit.',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Agriculture) — 4 years',exam:'CUET-UG (15% all-India quota) / MH Merit',examCss:'ce-cuet'},
    ]},
  ]},


{name:'Ali Yavar Jung National Institute of Speech & Hearing Disabilities (AYJNISHD)',short:'AYJNISHD',type:'Central',district:'Mumbai',state:'Maharashtra',
  naac:'',nirf:'',affil:'Ministry of Social Justice & Empowerment',website:'ayjnishd.gov.in',
  streams:['Medical'],
  specialNote:'National institute for speech and hearing disabilities. Regional centres in Kolkata, Chennai, Delhi & Secunderabad also offer BASLP. Admission through centralized MoSJE counselling.',
  programGroups:[
    {stream:'Allied Health & Rehabilitation',programs:[
      {name:'Bachelor in Audiology & Speech-Language Pathology / BASLP (3 years)',exam:'MoSJE Counselling',examCss:'ce-own'},
    ]},
  ]},

];
