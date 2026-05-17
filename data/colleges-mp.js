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
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.S (Mathematics, Physics, Chemistry)',exam:'JEE Advanced',examCss:'ce-jee'},
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
      {name:'BS-MS Dual Degree (Physics, Chemistry, Maths, Biology, Earth & Environmental Science)',exam:'JEE Advanced / IAT / KVPY',examCss:'ce-jee'},
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
      {name:'IPM — Integrated Programme in Management (5-year, after Class 12)',exam:'IPMAT',examCss:'ce-own'},
      {name:'PGP (MBA) — 2 years (post-UG)',exam:'CAT',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
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

];
