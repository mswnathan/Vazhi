// Vazhi — Colleges Data: Uttar Pradesh
// Edit this file to add/update Uttar Pradesh colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_UP=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Kanpur',short:'IITK',type:'Central',district:'Kanpur',state:'Uttar Pradesh',
  naac:'A++',nirf:'#4 Engineering',affil:'Autonomous (Institute of National Importance)',website:'iitk.ac.in',
  streams:['Engineering','Arts & Science'],
  specialNote:'Renowned for CSE, EE and research. Strong startup and research ecosystem.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, EE, Mechanical, Civil, Chemical, Aerospace, Materials, Biological Sciences)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.S (Mathematics & Scientific Computing, Physics)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'IIT (BHU) Varanasi',short:'IITBHU',type:'Central',district:'Varanasi',state:'Uttar Pradesh',
  naac:'A++',nirf:'Top 10 Engineering',affil:'Autonomous (Institute of National Importance — within BHU)',website:'iitbhu.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EE, Mechanical, Civil, Chemical, Metallurgical, Mining, Pharmaceutical)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'MNNIT Allahabad',short:'MNNIT',type:'Central',district:'Prayagraj',state:'Uttar Pradesh',
  naac:'A+',nirf:'Top 25 Engineering',affil:'National Institute of Technology',website:'mnnit.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, IT, Mechanical, Civil, Chemical, Production & Industrial)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'IIIT Allahabad',short:'IIITA',type:'Central',district:'Prayagraj',state:'Uttar Pradesh',
  naac:'A+',nirf:'Top IIIT',affil:'Indian Institute of Information Technology Allahabad (Autonomous)',website:'iiita.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, IT, ECE, Bioinformatics)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'Banaras Hindu University (BHU)',short:'BHU',type:'Central',district:'Varanasi',state:'Uttar Pradesh',
  naac:'A',nirf:'Top 10 University',affil:'Central University — Act of Parliament 1915',website:'bhu.ac.in',
  streams:['Arts & Science','Medical','Law','Agriculture'],
  specialNote:'One of the largest residential universities in Asia. Strong in sciences, arts, and Ayurveda.',
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Botany, Zoology)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (English, Hindi, History, Political Science, Economics, Sanskrit)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Com (Hons)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Medical & Health',programs:[
      {name:'MBBS (IMS-BHU)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'BAMS (Ayurveda)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
    {stream:'Law',programs:[
      {name:'LL.B (3-year after UG)',exam:'BHU Entrance',examCss:'ce-own'},
    ]},
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Agriculture)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'Aligarh Muslim University (AMU)',short:'AMU',type:'Central',district:'Aligarh',state:'Uttar Pradesh',
  naac:'A+',nirf:'Top 10 University',affil:'Central University — Act of Parliament 1920',website:'amu.ac.in',
  streams:['Engineering','Arts & Science','Medical','Law'],
  specialNote:'Historic central university (est. 1875). Strong in engineering, medicine and humanities. B.A / B.Sc / B.Com admitted via CUET-UG since 2023. B.Tech retains AMU\'s own engineering entrance test (minority institution carve-out per Nov-2024 Supreme Court ruling). MBBS via NEET-UG.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical)',exam:'AMU Entrance',examCss:'ce-own'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (English, History, Political Science, Economics)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Com',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Medical & Health',programs:[
      {name:'MBBS — JNMC (Jawaharlal Nehru Medical College)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

{name:'Dr. Ram Manohar Lohia NLU Lucknow (RMLNLU)',short:'RMLNLU',type:'Central',district:'Lucknow',state:'Uttar Pradesh',
  naac:'Accredited',nirf:'Top NLU',affil:'National Law University (Uttar Pradesh)',website:'rmlnlu.ac.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
      {name:'B.Com LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'AIIMS Rishikesh',short:'AIIMSR',type:'Central',district:'Rishikesh',state:'Uttar Pradesh',
  naac:'Accredited',nirf:'Top Medical',affil:'All India Institute of Medical Sciences (Ministry of Health)',website:'aiimsrishikesh.edu.in',
  streams:['Medical'],
  specialNote:'Serves both Uttarakhand and UP. Highly competitive NEET cutoff.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

{name:'Sanjay Gandhi Post Graduate Institute of Medical Sciences (SGPGIMS)',short:'SGPGIMS',type:'Central',district:'Lucknow',state:'Uttar Pradesh',
  naac:'A++',nirf:'Top 5 Medical',affil:'Institute of National Importance — Ministry of Health & Family Welfare',website:'sgpgi.ac.in',
  streams:['Medical'],
  specialNote:'North India\'s premier super-specialty medical centre (est. 1983). Primarily PG/super-specialty focused, but offers UG-level nursing and allied health programmes for Class 12 students.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'B.Sc Nursing (Post Basic) — 2 years',exam:'SGPGIMS Nursing Entrance',examCss:'ce-own'},
      {name:'B.Sc (Medical Lab Technology, Radiography, OT Technology, Perfusion Technology)',exam:'SGPGIMS Allied Health Entrance',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'King George\'s Medical University (KGMU)',short:'KGMU',type:'State',district:'Lucknow',state:'Uttar Pradesh',
  naac:'A+',nirf:'Top Medical',affil:'King George\'s Medical University (State — Autonomous)',website:'kgmu.org',
  streams:['Medical'],
  specialNote:'One of India\'s oldest and most respected medical colleges (est. 1905). NEET UG admission under UP state quota.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — UP DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — UP DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — UP DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — UP DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — UP DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Chandra Shekhar Azad University of Agriculture & Technology (CSAUAT)',short:'CSAUAT',type:'State',district:'Kanpur',state:'Uttar Pradesh',
  naac:'A',nirf:'Top Agriculture',affil:'Chandra Shekhar Azad University (State)',website:'csauk.ac.in',
  streams:['Agriculture'],
  specialNote:'Major state agricultural university. CUET-UG (15% all-India quota) / UP state merit admission.',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Agriculture) — 4 years',exam:'CUET-UG (15% all-India quota) / UP Merit',examCss:'ce-cuet'},
      {name:'B.Tech (Food Technology)',exam:'CUET-UG (15% all-India quota) / UP Merit',examCss:'ce-cuet'},
    ]},
  ]},


{name:'All India Institute of Medical Sciences, Gorakhpur (AIIMS Gorakhpur)',short:'AIIMS GKP',type:'Central',district:'Gorakhpur',state:'Uttar Pradesh',
  naac:'',nirf:'',affil:'Ministry of Health & Family Welfare (AIIMS network)',website:'aiimsgorakhpur.edu.in',
  streams:['Medical'],
  specialNote:'Part of the national AIIMS network (PMSSY). Admission via NEET UG through MCC centralised counselling.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc (Nursing) — 4 years',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

{name:'Dr. Ram Manohar Lohia Institute of Medical Sciences',short:'RMLIMS Lucknow',type:'State',district:'Lucknow',state:'Uttar Pradesh',
  naac:'Accredited',nirf:'Top State Medical',affil:'Autonomous State Medical Institute under Govt of Uttar Pradesh',website:'drrmlims.ac.in',
  streams:['Medical'],
  specialNote:'Premier UP state medical & super-specialty teaching institute. UG MBBS admission via NEET UG + UP state counselling. Strong PG/DM/MCh programmes.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing / Paramedical (4 years)',exam:'NEET UG / UP State Entrance',examCss:'ce-neet'},
    ]},
  ]},

{name:'Rajiv Gandhi National Aviation University',short:'RGNAU Amethi',type:'Central',district:'Amethi',state:'Uttar Pradesh',
  naac:'Accredited',nirf:'Specialised Aviation University',affil:'Rajiv Gandhi National Aviation University (Act of Parliament 2013 — Ministry of Civil Aviation)',website:'rgnau.ac.in',
  streams:['Engineering','Arts & Science','Management'],
  specialNote:'India\'s only national university dedicated to aviation education. Located in Fursatganj, Amethi. Unique blend of B.Tech, B.Sc and management programmes all focused on aerospace and aviation. B.Tech programmes admitted through JEE Main + JoSAA; B.Sc/BBA/BMS through CUET Score.',
  programGroups:[
    {stream:'Engineering & Technology (Aviation)',programs:[
      {name:'B.Tech Aerospace Engineering (4 years) — 30 seats',exam:'JEE Main',examCss:'ce-jee'},
      {name:'B.Tech Electronics & Communication Engineering — Avionics (4 years) — 60 seats',exam:'JEE Main',examCss:'ce-jee'},
      {name:'B.Sc AI & Data Science — Aviation System (4 years) — 60 seats',exam:'JEE Main',examCss:'ce-jee'},
    ]},
    {stream:'Arts & Science (Aviation)',programs:[
      {name:'B.Sc Aviation (4 years) — 30 seats',exam:'CUET Score',examCss:'ce-cuet'},
    ]},
    {stream:'Management (Aviation)',programs:[
      {name:'BBA Aviation Management (4 years) — 60 seats',exam:'CUET Score',examCss:'ce-cuet'},
      {name:'BMS Aviation Services & Air Cargo (4 years) — 120 seats',exam:'CUET Score',examCss:'ce-cuet'},
    ]},
  ]},

];
