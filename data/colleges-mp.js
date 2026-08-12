// Vazhi — Colleges Data: Madhya Pradesh
// Edit this file to add/update Madhya Pradesh colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_MP=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Indore',short:'IITI',type:'Central',district:'Indore',state:'Madhya Pradesh',
  naac:'A+',nirf:'Top 10 Engineering',affil:'Autonomous (Institute of National Importance)',website:'iiti.ac.in',
  streams:['Engineering','Arts & Science'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, EE, Mechanical, Civil, Chemical, Metallurgical, Astronomy, Astrophysics & Space)',exam:'JEE Advanced',examCss:'ce-jee'},
      {name:'B.Tech Biomedical Engineering & Data Science (new 2026)',exam:'JEE Advanced',examCss:'ce-jee'},
      {name:'B.Tech Environmental Economics & Sustainable Engineering (new 2026)',exam:'JEE Advanced',examCss:'ce-jee'},
      {name:'B.Tech Space Sciences & Engineering (new 2026)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.S (Mathematics, Physics, Chemistry)',exam:'JEE Advanced',examCss:'ce-jee'},
      {name:'B.S Applied & Industrial Chemistry (new 2026)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'MANIT Bhopal',short:'MANIT',type:'Central',district:'Bhopal',state:'Madhya Pradesh',
  naac:'A+',nirf:'Top 25 Engineering',affil:'National Institute of Technology',website:'manit.ac.in',
  streams:['Engineering','Design'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, IT, Mechanical, Civil, Chemical, Biotechnology, Electronics & Instrumentation)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
    {stream:'Design & Architecture',programs:[
      {name:'B.Arch',exam:'JEE Main Paper 2 / NATA',examCss:'ce-nata'},
    ]},
  ]},

{name:'IISER Bhopal',short:'IISERB',type:'Central',district:'Bhopal',state:'Madhya Pradesh',
  naac:'A++',nirf:'Top Science Research',affil:'Institute of Science Education & Research (MoE)',website:'iiserb.ac.in',
  streams:['Arts & Science'],
  specialNote:'One of the first IISERs. Particularly strong in physics and chemistry research. BS-MS dual degree.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'BS-MS Dual Degree (Physics, Chemistry, Maths, Biology, Earth & Environmental Science)',exam:'IISER IAT',examCss:'ce-own'},
    ]},
  ]},

{name:'ABV-IIITM Gwalior',short:'IIITMG',type:'Central',district:'Gwalior',state:'Madhya Pradesh',
  naac:'A+',nirf:'Top IIIT',affil:'ABV Indian Institute of IT & Management (Autonomous — MoE)',website:'iiitm.ac.in',
  streams:['Engineering','Management'],
  specialNote:'One of the oldest IIITs in India. Unique dual-degree in IT + Management. Admission via JEE Main.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, IT)',exam:'JEE Main',examCss:'ce-jee'},
      {name:'Integrated B.Tech + MBA (IT & Management)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'AIIMS Bhopal',short:'AIIMSB',type:'Central',district:'Bhopal',state:'Madhya Pradesh',
  naac:'Accredited',nirf:'Top Medical',affil:'All India Institute of Medical Sciences (Ministry of Health)',website:'aiimsbhopal.edu.in',
  streams:['Medical'],
  specialNote:'One of the new AIIMS under PM-AIIMS scheme. Highly competitive NEET cutoff.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

{name:'National Law Institute University Bhopal (NLIU)',short:'NLIU',type:'Central',district:'Bhopal',state:'Madhya Pradesh',
  naac:'A',nirf:'Top 10 Law',affil:'National Law University (Madhya Pradesh)',website:'nliu.ac.in',
  streams:['Law'],
  specialNote:'One of the original NLUs. Known for constitutional law and intellectual property.',
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'LNIPE Gwalior',short:'LNIPE',type:'Central',district:'Gwalior',state:'Madhya Pradesh',
  naac:'A',nirf:'Top Physical Education',affil:'Lakshmibai National Institute of Physical Education (Ministry of Youth Affairs & Sports)',website:'lnipe.edu.in',
  streams:['Education'],
  specialNote:'India\'s only central institute for physical education. Produces coaches, sport science graduates and PE teachers.',
  programGroups:[
    {stream:'Education',programs:[
      {name:'B.P.E (Bachelor of Physical Education) — 3 years',exam:'LNIPE Entrance',examCss:'ce-own'},
      {name:'B.Sc (Exercise Science & Coaching)',exam:'LNIPE Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'IIM Indore',short:'IIMIN',type:'Central',district:'Indore',state:'Madhya Pradesh',
  naac:'A++',nirf:'Top 5 Management',affil:'Institute of National Importance',website:'iimidr.ac.in',
  streams:['Management'],
  specialNote:'Offers IPM — Integrated Programme in Management (5-year BBA+MBA after Class 12). Direct UG-entry management programme.',
  programGroups:[
    {stream:'Management',programs:[
      {name:'IPM — Integrated Programme in Management (5-year, after Class 12)',exam:'IPMAT Indore',examCss:'ce-own'},
      {name:'PGP (MBA) — 2 years (post-UG)',exam:'CAT',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'Sanchi University of Buddhist-Indic Studies',short:'SUBIS',type:'State',district:'Raisen',state:'Madhya Pradesh',
  naac:'',nirf:'',affil:'Sanchi University of Buddhist-Indic Studies Act, 2012 (State)',website:'sanchiuniv.edu.in',
  streams:['Arts & Science'],
  specialNote:'India\'s only state university dedicated to Buddhist & Indic studies; campus sits beside the UNESCO World Heritage Sanchi Stupas. Admission via the university\'s own entrance exam.',
  programGroups:[
    {stream:'Buddhist & Indic Studies',programs:[
      {name:'B.A. Buddhist Studies',exam:'University Entrance Exam',examCss:'ce-own'},
      {name:'B.A. Pali',exam:'University Entrance Exam',examCss:'ce-own'},
      {name:'B.A. Sanskrit',exam:'University Entrance Exam',examCss:'ce-own'},
    ]},
  ]},

{name:'Gandhi Medical College Bhopal',short:'GMCB',type:'State',district:'Bhopal',state:'Madhya Pradesh',
  naac:'A',nirf:'Top State Medical',affil:'Madhya Pradesh Medical Science University (MPMSU)',website:'gmcbhopal.nic.in',
  streams:['Medical'],
  specialNote:'Premier state government medical college. NEET UG admission under MP state quota.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — MP DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — MP DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — MP DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — MP DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — MP DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Jawaharlal Nehru Krishi Vishwa Vidyalaya (JNKVV)',short:'JNKVV',type:'State',district:'Jabalpur',state:'Madhya Pradesh',
  naac:'A',nirf:'Top Agriculture',affil:'Jawaharlal Nehru Krishi Vishwa Vidyalaya (State)',website:'jnkvv.org',
  streams:['Agriculture'],
  specialNote:'Premier state agricultural university for Madhya Pradesh. CUET-UG (15% all-India quota) / MP state merit admission.',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Agriculture) — 4 years',exam:'CUET-UG (15% all-India quota) / MP Merit',examCss:'ce-cuet'},
      {name:'B.Sc (Horticulture, Forestry)',exam:'CUET-UG (15% all-India quota) / MP Merit',examCss:'ce-cuet'},
    ]},
  ]},

{name:'School of Planning & Architecture Bhopal (SPA Bhopal)',short:'SPA-BPL',type:'Central',district:'Bhopal',state:'Madhya Pradesh',
  naac:'Accredited',nirf:'Top Architecture',affil:'Autonomous (Central Govt — Ministry of Education)',website:'spabhopal.ac.in',
  streams:['Design'],
  programGroups:[
    {stream:'Design & Architecture',programs:[
      {name:'B.Arch — 5 years',exam:'JEE Main Paper 2 / NATA',examCss:'ce-nata'},
      {name:'B.Planning — 4 years',exam:'JEE Main Paper 2',examCss:'ce-jee'},
    ]},
  ]},

{name:'Shri G S Institute of Technology & Science',short:'SGSITS Indore',type:'Aided',district:'Indore',state:'Madhya Pradesh',
  naac:'A',nirf:'Top State Engineering',affil:'Govt-Aided Autonomous Institute (1952) — affiliated to RGPV / DAVV Indore',website:'sgsits.ac.in',
  streams:['Engineering'],
  specialNote:'One of the oldest govt-aided engineering institutes in MP. Admission via JEE Main + MP DTE counselling. Strong placement record.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech CSE / IT',exam:'JEE Main / MP DTE',examCss:'ce-jee'},
      {name:'B.Tech ECE / EEE',exam:'JEE Main / MP DTE',examCss:'ce-jee'},
      {name:'B.Tech Mechanical / Civil / Chemical / Industrial Production',exam:'JEE Main / MP DTE',examCss:'ce-jee'},
    ]},
  ]},

{name:'Dharmashastra National Law University (DNLU)',short:'DNLU',type:'Central',district:'Jabalpur',state:'Madhya Pradesh',
  naac:'Accredited',nirf:'National Law University',affil:'National Law University (Madhya Pradesh)',website:'dnlu.ac.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'NID Madhya Pradesh',short:'NID MP',type:'Central',district:'Bhopal',state:'Madhya Pradesh',
  naac:'Accredited',nirf:'Top Design',affil:'National Institute of Design (Ministry of Commerce)',website:'nid.edu',
  streams:['Design'],
  programGroups:[
    {stream:'Design',programs:[
      {name:'B.Des (Industrial, Communication & Textile Design)',exam:'NID DAT',examCss:'ce-own'},
    ]},
  ]},

{name:'NIFT Bhopal',short:'NIFT-BPL',type:'Central',district:'Bhopal',state:'Madhya Pradesh',
  naac:'Accredited',nirf:'Top Design',affil:'National Institute of Fashion Technology (Ministry of Textiles)',website:'nift.ac.in/bhopal',
  streams:['Design'],
  programGroups:[
    {stream:'Design',programs:[
      {name:'B.Des (Fashion, Textile, Accessory, Communication, Leather)',exam:'NIFT Entrance',examCss:'ce-own'},
      {name:'B.F.Tech (Apparel Production)',exam:'NIFT Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'National Forensic Sciences University — Bhopal Campus',short:'NFSU Bhopal',type:'Central',district:'Bhopal',state:'Madhya Pradesh',
  naac:'Accredited',nirf:'Top Forensic Sciences',affil:'National Forensic Sciences University (Institute of National Importance — MHA)',website:'nfsu.ac.in',
  streams:['Arts & Science'],
  specialNote:'NFSU\'s own entrance test (NFAT/FACT) is discontinued — admission is via CUET UG.',
  programGroups:[
    {stream:'Forensic & Security Sciences',programs:[
      {name:'B.Sc.–M.Sc. Forensic Science — 5-year integrated',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'Regional Institute of Education, Bhopal (NCERT)',short:'RIE Bhopal',type:'Central',district:'Bhopal',state:'Madhya Pradesh',
  naac:'',nirf:'',affil:'NCERT — Ministry of Education, Govt of India',website:'riebhopal.ncert.gov.in',
  streams:['Education'],
  specialNote:'One of 5 NCERT Regional Institutes of Education nationwide. 150 total ITEP seats. Admission via NCET percentile.',
  programGroups:[
    {stream:'Education',programs:[
      {name:'B.Sc B.Ed — ITEP (dual major: Education + Physics/Chemistry/Maths/Zoology/Botany, 4 years)',exam:'NCET',examCss:'ce-ncet'},
      {name:'B.A B.Ed — ITEP (dual major: Education + English/Hindi/Gujarati/Marathi/Urdu/History/Political Science/Geography/Economics, 4 years)',exam:'NCET',examCss:'ce-ncet'},
    ]},
  ]},

{name:'Institute of Hotel Management, Bhopal',short:'IHM Bhopal',type:'Central',district:'Bhopal',state:'Madhya Pradesh',
  naac:'Accredited',nirf:'Central IHM',affil:'National Council for Hotel Management & Catering Technology (NCHMCT) — Ministry of Tourism',website:'ihmbhopal.ac.in',
  streams:['Management'],
  programGroups:[
    {stream:'Hospitality & Hotel Management',programs:[
      {name:'B.Sc Hospitality & Hotel Administration (3 years)',exam:'NCHM JEE',examCss:'ce-nchm'},
    ]},
  ]},

{name:'Institute of Hotel Management, Gwalior',short:'IHM Gwalior',type:'Central',district:'Gwalior',state:'Madhya Pradesh',
  naac:'Accredited',nirf:'Central IHM',affil:'National Council for Hotel Management & Catering Technology (NCHMCT) — Ministry of Tourism',website:'ihmgwalior.org',
  streams:['Management'],
  specialNote:'Also offers M.Sc Hospitality Administration and PG Diploma in Accommodation Operations & Management.',
  programGroups:[
    {stream:'Hospitality & Hotel Management',programs:[
      {name:'B.Sc Hospitality & Hotel Administration (3 years)',exam:'NCHM JEE',examCss:'ce-nchm'},
    ]},
  ]},

{name:'State Institute of Hotel Management, Indore',short:'SIHM Indore',type:'State',district:'Indore',state:'Madhya Pradesh',
  naac:'Accredited',nirf:'State IHM',affil:'National Council for Hotel Management & Catering Technology (NCHMCT), Madhya Pradesh Tourism',website:'sihmind.mp.gov.in',
  streams:['Management'],
  programGroups:[
    {stream:'Hospitality & Hotel Management',programs:[
      {name:'B.Sc Hospitality & Hotel Administration (3 years)',exam:'NCHM JEE',examCss:'ce-nchm'},
    ]},
  ]},

{name:'State Institute of Hotel Management, Jabalpur',short:'SIHM Jabalpur',type:'State',district:'Jabalpur',state:'Madhya Pradesh',
  naac:'Accredited',nirf:'State IHM',affil:'National Council for Hotel Management & Catering Technology (NCHMCT), Madhya Pradesh Tourism',website:'sihmjbp.mp.gov.in',
  streams:['Management'],
  programGroups:[
    {stream:'Hospitality & Hotel Management',programs:[
      {name:'B.Sc Hospitality & Hotel Administration (3 years)',exam:'NCHM JEE',examCss:'ce-nchm'},
    ]},
  ]},

];
