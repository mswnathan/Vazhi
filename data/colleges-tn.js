// Vazhi — Colleges Data: Tamil Nadu & Puducherry
// Edit this file to add/update colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

// Program entry: {name, exam, examCss}
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm
// streams: array of stream ids this college belongs to (for filter)

const COLLEGES=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Madras',short:'IITM',type:'Central',district:'Chennai',state:'Tamil Nadu',
  naac:'A++',nirf:'#1 Engineering',affil:'Autonomous (Institute of National Importance)',website:'iitm.ac.in',
  streams:['Engineering','Arts & Science'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, AI, Data Science, EE, ME, Civil, Chemical, Aerospace, Naval, Ocean, Biotech, Engineering Design)',exam:'JEE Advanced',examCss:'ce-jee'},
      {name:'B.S Research (Physics, Chemistry, Maths, Humanities)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Online / Distance',programs:[
      {name:'BS Data Science & Applications (Online)',exam:'Qualifier Exam (no JEE)',examCss:'ce-own'},
    ]},
  ]},

{name:'NIT Trichy',short:'NITT',type:'Central',district:'Trichy',state:'Tamil Nadu',
  naac:'A++',nirf:'#9 Engineering',affil:'National Institute of Technology',website:'nitt.edu',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Civil, Mechanical, Chemical, Production, ICE, Metallurgical)',exam:'JEE Main',examCss:'ce-jee'},
      {name:'B.Arch',exam:'JEE Main Paper 2 / NATA',examCss:'ce-nata'},
    ]},
  ]},

{name:'IIITDM Kancheepuram',short:'IIITDM',type:'Central',district:'Kancheepuram',state:'Tamil Nadu',
  naac:'A+',nirf:'Top 100 Engg',affil:'Indian Institute of IT, Design & Manufacturing (Autonomous)',website:'iiitdm.ac.in',
  streams:['Engineering','Design'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, Mechanical)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
    {stream:'Design',programs:[
      {name:'B.Des (Smart Manufacturing)',exam:'UCEED',examCss:'ce-own'},
    ]},
  ]},

{name:'Central University of Tamil Nadu (CUTN)',short:'CUTN',type:'Central',district:'Thiruvarur',state:'Tamil Nadu',
  naac:'A+',nirf:'#83 University',affil:'Central University — UGC Act 2009',website:'cutn.ac.in',
  streams:['Arts & Science','Law','Education','Management'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (Hons) Physics, Chemistry, Mathematics, Biotechnology, Computer Science',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Sc B.Ed (Integrated 4-year)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.P.A Music (Integrated)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Law',programs:[
      {name:'B.A LLB (5-year Integrated)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'NIFT Chennai',short:'NIFT Chennai',type:'Central',district:'Chennai',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Design',affil:'National Institute of Fashion Technology (under MoT)',website:'nift.ac.in/chennai',
  streams:['Design'],
  programGroups:[
    {stream:'Design & Fashion',programs:[
      {name:'B.Des (Fashion Design, Textile Design, Knitwear Design, Fashion Communication, Accessory Design)',exam:'NIFT Entrance (NTA)',examCss:'ce-own'},
      {name:'B.F.Tech (Apparel Production)',exam:'NIFT Entrance (NTA)',examCss:'ce-own'},
    ]},
  ]},

{name:'IHM Chennai',short:'IHM Chennai',type:'Central',district:'Chennai',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Hospitality',affil:'Central Institute of Hotel Management (NCHMCT)',website:'ihmchennai.com',
  streams:['Management'],
  programGroups:[
    {stream:'Hospitality & Hotel Management',programs:[
      {name:'B.Sc Hospitality & Hotel Administration (3 years)',exam:'NCHM JEE',examCss:'ce-nchm'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'Anna University — CEG Campus',short:'AU-CEG',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'A++',nirf:'#20 University / #14 Engg',affil:'Anna University (State Technical University)',website:'annauniv.edu',
  streams:['Engineering','Design'],
  programGroups:[
    {stream:'Engineering & Technology (B.E / B.Tech)',programs:[
      {name:'B.E CSE, AI & Data Science, ECE, EEE, Civil, Mechanical, Chemical',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.Plan (Urban & Regional Planning)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
    {stream:'Architecture',programs:[
      {name:'B.Arch (via SAP campus)',exam:'JEE Main Paper 2 / NATA',examCss:'ce-nata'},
    ]},
  ]},

{name:'Anna University — MIT Campus',short:'AU-MIT',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'A++',nirf:'#14 Engg (Anna Univ)',affil:'Anna University — Madras Institute of Technology',website:'mitindia.edu',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (Aeronautical, Automobile, ECE, CSE, IT, Rubber & Plastics)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Anna University — ACT Campus',short:'AU-ACT',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'A++',nirf:'#14 Engg (Anna Univ)',affil:'Anna University — Alagappa College of Technology',website:'actindia.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (Chemical, Industrial Biotech, Petroleum, Textile, Leather, Polymer)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Madras Medical College',short:'MMC',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Medical',affil:'The Tamil Nadu Dr. MGR Medical University',website:'mmc.ac.in',
  streams:['Medical'],
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS',exam:'NEET UG',examCss:'ce-neet'},
      {name:'BDS',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'B.Sc Allied Health Sciences — Radiology, MLT, Physiotherapy (4 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Govt. Law College Chennai',short:'GLC Chennai',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Law TN',affil:'The Tamil Nadu Dr. Ambedkar Law University',website:'glcchennai.ac.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.L (3-year LLB)',exam:'TNLCET / Merit',examCss:'ce-own'},
      {name:'B.A B.L (5-year Integrated)',exam:'TNLCET / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'School of Excellence in Law (SOEL)',short:'SOEL Chennai',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Law TN',affil:'The Tamil Nadu Dr. Ambedkar Law University',website:'tnadalu.ac.in',
  streams:['Law'],
  specialNote:'Premium law campus of Tamil Nadu Dr. Ambedkar Law University. Offers Honors degrees with specializations — BBA LLB and BCA LLB. Ideal for students wanting law + management or law + technology combinations.',
  programGroups:[
    {stream:'Law (Integrated — 5 years)',programs:[
      {name:'BBA LLB (Hons) — Law + Management',exam:'TNLCET / TNADALU Entrance',examCss:'ce-own'},
      {name:'BCA LLB (Hons) — Law + Computer Applications',exam:'TNLCET / TNADALU Entrance',examCss:'ce-own'},
      {name:'BA LLB (Hons)',exam:'TNLCET / TNADALU Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Tamil Nadu Dr. Ambedkar Law University (TNDALU)',short:'TNDALU',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'A',nirf:'Top State Law University',affil:'State Law University (est. 1997) — parent body of all TN Govt Law Colleges',website:'tnadalu.ac.in',
  streams:['Law'],
  specialNote:'Parent state law university in Chennai. Affiliates all seven Government Law Colleges across TN and the School of Excellence in Law. Admission to UG programmes through TNLCET conducted by TNDALU.',
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.L (3-year LLB)',exam:'TNLCET',examCss:'ce-own'},
      {name:'B.A B.L (5-year Integrated)',exam:'TNLCET',examCss:'ce-own'},
    ]},
  ]},

{name:'Dr. Ambedkar Government Law College, Pudupakkam',short:'DAGLC Pudupakkam',type:'State',district:'Chengalpattu',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Law TN',affil:'The Tamil Nadu Dr. Ambedkar Law University',website:'tnadalu.ac.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.L (3-year LLB)',exam:'TNLCET / Merit',examCss:'ce-own'},
      {name:'B.A B.L (5-year Integrated)',exam:'TNLCET / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Government Law College, Coimbatore',short:'GLC Coimbatore',type:'State',district:'Coimbatore',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Law TN',affil:'The Tamil Nadu Dr. Ambedkar Law University',website:'tnadalu.ac.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.L (3-year LLB)',exam:'TNLCET / Merit',examCss:'ce-own'},
      {name:'B.A B.L (5-year Integrated)',exam:'TNLCET / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Government Law College, Madurai',short:'GLC Madurai',type:'State',district:'Madurai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Law TN',affil:'The Tamil Nadu Dr. Ambedkar Law University',website:'tnadalu.ac.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.L (3-year LLB)',exam:'TNLCET / Merit',examCss:'ce-own'},
      {name:'B.A B.L (5-year Integrated)',exam:'TNLCET / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Government Law College, Tiruchirappalli',short:'GLC Trichy',type:'State',district:'Tiruchirappalli',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Law TN',affil:'The Tamil Nadu Dr. Ambedkar Law University',website:'tnadalu.ac.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.L (3-year LLB)',exam:'TNLCET / Merit',examCss:'ce-own'},
      {name:'B.A B.L (5-year Integrated)',exam:'TNLCET / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Government Law College, Tirunelveli',short:'GLC Tirunelveli',type:'State',district:'Tirunelveli',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Law TN',affil:'The Tamil Nadu Dr. Ambedkar Law University',website:'tnadalu.ac.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.L (3-year LLB)',exam:'TNLCET / Merit',examCss:'ce-own'},
      {name:'B.A B.L (5-year Integrated)',exam:'TNLCET / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Government Law College, Vellore',short:'GLC Vellore',type:'State',district:'Vellore',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Law TN',affil:'The Tamil Nadu Dr. Ambedkar Law University',website:'tnadalu.ac.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.L (3-year LLB)',exam:'TNLCET / Merit',examCss:'ce-own'},
      {name:'B.A B.L (5-year Integrated)',exam:'TNLCET / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Govt. College of Technology, Coimbatore',short:'GCT Coimbatore',type:'State',district:'Coimbatore',state:'Tamil Nadu',
  naac:'A++',nirf:'Top Govt Engg TN',affil:'Anna University',website:'gct.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, Civil, Mechanical, Production, Textile)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Coimbatore Institute of Technology',short:'CIT',type:'Aided',district:'Coimbatore',state:'Tamil Nadu',
  naac:'A++',nirf:'Top Aided Engg TN',affil:'Anna University',website:'cit.edu.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, Civil, Mechanical, Chemical)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Govt. College of Engineering, Salem',short:'GCE Salem',type:'State',district:'Salem',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Govt Engg TN',affil:'Anna University',website:'gcesalem.edu.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, Civil, Mechanical)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Government College of Engineering, Tirunelveli',short:'GCE Tirunelveli',type:'State',district:'Tirunelveli',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Engg TN',affil:'Anna University',website:'gcetly.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Government College of Engineering, Thanjavur',short:'GCE Thanjavur',type:'State',district:'Thanjavur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Engg TN',affil:'Anna University',website:'gcethanjavur.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Government College of Engineering, Dharmapuri',short:'GCE Dharmapuri',type:'State',district:'Dharmapuri',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Engg TN',affil:'Anna University',website:'gced.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Government College of Engineering, Bargur',short:'GCE Bargur',type:'State',district:'Krishnagiri',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Engg TN',affil:'Anna University',website:'gceb.ac.in',
  streams:['Engineering'],
  specialNote:'Serves Krishnagiri & Vellore region students.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Government College of Engineering, Bodinayakanur',short:'GCE Bodinayakanur',type:'State',district:'Theni',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Engg TN',affil:'Anna University',website:'gcebodi.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Government College of Engineering, Kannur',short:'GCE Kannur',type:'State',district:'Dindigul',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Engg TN',affil:'Anna University',website:'gcekannur.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Government College of Engineering, Ariyalur',short:'GCE Ariyalur',type:'State',district:'Ariyalur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Engg TN',affil:'Anna University',website:'gcea.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Government College of Engineering, Tiruppur',short:'GCE Tiruppur',type:'State',district:'Tiruppur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Engg TN',affil:'Anna University',website:'gcetup.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Government College of Engineering, Nagapattinam',short:'GCE Nagapattinam',type:'State',district:'Nagapattinam',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Engg TN',affil:'Anna University',website:'gcen.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Government College of Engineering, Srirangam',short:'GCE Srirangam',type:'State',district:'Trichy',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Engg TN',affil:'Anna University',website:'gcesrirangam.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Government College of Engineering, Villupuram',short:'GCE Villupuram',type:'State',district:'Villupuram',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Engg TN',affil:'Anna University',website:'gcev.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Government College of Engineering, Erode',short:'GCE Erode',type:'State',district:'Erode',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Engg TN',affil:'Anna University',website:'gceerode.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'TNPESU — Tamil Nadu Physical Education & Sports University',short:'TNPESU',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'A+',nirf:'Sports',affil:'State University (Govt of TN)',website:'tnpesu.org',
  streams:['Education'],
  programGroups:[
    {stream:'Physical Education & Sports',programs:[
      {name:'B.P.Ed (Bachelor of Physical Education)',exam:'TNPESU Entrance + Physical Fitness Test',examCss:'ce-own'},
      {name:'B.Sc Physical Education, Exercise & Sports Sciences',exam:'TNPESU Entrance',examCss:'ce-own'},
      {name:'B.Sc Yoga',exam:'TNPESU Entrance',examCss:'ce-own'},
      {name:'B.Sc Sports Biomechanics',exam:'TNPESU Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Government College of Fine Arts, Chennai',short:'GCFA Chennai',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'A',nirf:'Premier Fine Arts TN',affil:'University of Madras',website:'gcfachennai.ac.in',
  streams:['Arts & Science','Design'],
  specialNote:'One of India\'s oldest fine arts institutions — established 1850. Offers specialized BFA programs in Textile Design, Ceramic Design, and Visual Communication. Careers in art direction, cinema, textile industry, and ceramic technology.',
  programGroups:[
    {stream:'Bachelor of Fine Arts (BFA)',programs:[
      {name:'BFA Painting (4 years)',exam:'State Fine Arts Entrance / Merit',examCss:'ce-own'},
      {name:'BFA Sculpture (4 years)',exam:'State Fine Arts Entrance / Merit',examCss:'ce-own'},
      {name:'BFA Applied Art / Visual Communication (4 years)',exam:'State Fine Arts Entrance / Merit',examCss:'ce-own'},
      {name:'BFA Textile Design (4 years)',exam:'State Fine Arts Entrance / Merit',examCss:'ce-own'},
      {name:'BFA Ceramic Design (4 years)',exam:'State Fine Arts Entrance / Merit',examCss:'ce-own'},
      {name:'BFA Art History & Aesthetics (4 years)',exam:'State Fine Arts Entrance / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Government College of Fine Arts, Kumbakonam',short:'GCFA Kumbakonam',type:'State',district:'Thanjavur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Fine Arts TN',affil:'Bharathidasan University',website:'gcfakumbakonam.ac.in',
  streams:['Arts & Science','Design'],
  specialNote:'Historic government fine arts college — over 150 years old. Premier arts institution in the Kaveri delta region. BFA programs in classical and applied art forms.',
  programGroups:[
    {stream:'Bachelor of Fine Arts (BFA)',programs:[
      {name:'BFA Painting (4 years)',exam:'State Fine Arts Entrance / Merit',examCss:'ce-own'},
      {name:'BFA Sculpture (4 years)',exam:'State Fine Arts Entrance / Merit',examCss:'ce-own'},
      {name:'BFA Applied Art (4 years)',exam:'State Fine Arts Entrance / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Government College of Fine Arts, Madurai',short:'GCFA Madurai',type:'State',district:'Madurai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Fine Arts TN',affil:'Madurai Kamaraj University',website:'artandculture.tn.gov.in',
  streams:['Arts & Science','Design'],
  specialNote:'Government fine arts college serving southern Tamil Nadu. Administered by TN Art & Culture Dept. Admissions via state application portal (artandculture.tn.gov.in).',
  programGroups:[
    {stream:'Bachelor of Fine Arts (BFA)',programs:[
      {name:'BFA Painting (4 years)',exam:'State Fine Arts Entrance / Merit',examCss:'ce-own'},
      {name:'BFA Sculpture (4 years)',exam:'State Fine Arts Entrance / Merit',examCss:'ce-own'},
      {name:'BFA Applied Art (4 years)',exam:'State Fine Arts Entrance / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Government Music Colleges (Chennai, Coimbatore, Madurai, Thiruvaiyaru)',short:'Govt Music Colleges TN',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Classical Music TN',affil:'Tamil Nadu Dr. J. Jayalalithaa Music & Fine Arts University',website:'artandculture.tn.gov.in',
  streams:['Arts & Science'],
  specialNote:'Four government music colleges across TN — Chennai, Coimbatore, Madurai, and Thiruvaiyaru (birthplace of Saint Thyagaraja). Specialize in Carnatic vocal, veena, violin, mridangam, nadaswaram. Admissions via state portal (artandculture.tn.gov.in) — audition + merit. Affiliated to TNMFA University.',
  programGroups:[
    {stream:'Music (Bachelor of Performing Arts)',programs:[
      {name:'B.A / B.P.A Music — Vocal (Carnatic)',exam:'Audition + Merit',examCss:'ce-own'},
      {name:'B.A / B.P.A Music — Veena',exam:'Audition + Merit',examCss:'ce-own'},
      {name:'B.A / B.P.A Music — Violin',exam:'Audition + Merit',examCss:'ce-own'},
      {name:'B.A / B.P.A Music — Mridangam',exam:'Audition + Merit',examCss:'ce-own'},
      {name:'B.A / B.P.A Music — Nadaswaram (Thiruvaiyaru only)',exam:'Audition + Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Government College of Architecture & Sculpture, Mamallapuram',short:'GCAS Mamallapuram',type:'State',district:'Chengalpattu',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Heritage Architecture TN',affil:'Tamil Nadu Dr. J. Jayalalithaa Music & Fine Arts University',website:'artandculture.tn.gov.in',
  streams:['Arts & Science','Design'],
  specialNote:'The only government college in India dedicated to traditional temple architecture and stone sculpture (Shilpa Shastra). Located in the UNESCO World Heritage site Mamallapuram. Preserves the ancient Pallava-era sthapathy tradition. Admissions via state portal (artandculture.tn.gov.in).',
  programGroups:[
    {stream:'Traditional Architecture & Sculpture',programs:[
      {name:'Diploma in Traditional Architecture (Vaastu / Shilpa Shastra)',exam:'State Entrance / Merit',examCss:'ce-own'},
      {name:'Diploma in Traditional Sculpture (Stone Carving)',exam:'State Entrance / Merit',examCss:'ce-own'},
      {name:'Diploma in Wood Carving',exam:'State Entrance / Merit',examCss:'ce-own'},
      {name:'Diploma in Bronze Icon Casting',exam:'State Entrance / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Tamil Nadu Dr. J. Jayalalithaa Music & Fine Arts University',short:'TNMFA University',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Classical Arts University',affil:'State University (Govt of TN)',website:'tnmfu.ac.in',
  streams:['Arts & Science','Design'],
  specialNote:'India\'s only state university dedicated exclusively to classical music, dance, and fine arts. Established 2013. Affiliating university for all TN government music colleges, fine arts colleges, and the Mamallapuram architecture & sculpture college. Offers university-department UG programs in addition to affiliated-college admissions.',
  programGroups:[
    {stream:'Music & Performing Arts',programs:[
      {name:'B.P.A Music — Carnatic Vocal / Veena / Violin / Mridangam',exam:'Audition + Merit',examCss:'ce-own'},
      {name:'B.P.A Bharatanatyam',exam:'Audition + Merit',examCss:'ce-own'},
    ]},
    {stream:'Fine Arts & Architecture',programs:[
      {name:'BFA Painting / Sculpture / Applied Art',exam:'Entrance / Merit',examCss:'ce-own'},
      {name:'Traditional Architecture & Sculpture programs (Mamallapuram campus)',exam:'Entrance / Merit',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVT ARTS & SCIENCE COLLEGES (DCE)
// ──────────────────────────────────────────────

{name:'Presidency College (Autonomous), Chennai',short:'Presidency College',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Govt Arts College TN',affil:'University of Madras',website:'presidency.unom.ac.in',
  streams:['Arts & Science'],
  specialNote:'One of India\'s oldest colleges (est. 1840) — premier government autonomous college in Tamil Nadu.',
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A History (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Zoology (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Botany (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Com (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Autonomous), Coimbatore',short:'GAC Coimbatore',type:'State',district:'Coimbatore',state:'Tamil Nadu',
  naac:'A',nirf:'Govt Arts College TN',affil:'Bharathiar University',website:'gaccoimbatore.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Nandanam, Chennai',short:'GAC Nandanam',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'University of Madras',website:'gacnandanam.com',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Economics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Com (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Salem',short:'GAC Salem',type:'State',district:'Salem',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Periyar University',website:'gacsalem.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Trichy',short:'GAC Trichy',type:'State',district:'Trichy',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathidasan University',website:'gactrichy.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Tiruvannamalai',short:'GAC Tiruvannamalai',type:'State',district:'Tiruvannamalai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Thiruvalluvar University',website:'gactiruvannamalai.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Cuddalore',short:'GAC Cuddalore',type:'State',district:'Cuddalore',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Thiruvalluvar University',website:'gaccuddalore.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Autonomous), Karur',short:'GAC Karur',type:'State',district:'Karur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathidasan University',website:'gackarur.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Namakkal',short:'GAC Namakkal',type:'State',district:'Namakkal',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Periyar University',website:'gacnamakkal.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College for Women, Nilgiris',short:'GAC Women Nilgiris',type:'State',district:'Nilgiris',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathiar University',website:'gacwnilagiri.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Tamil (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Melur',short:'GAC Melur',type:'State',district:'Madurai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Madurai Kamaraj University',website:'gacmelur.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts and Science College, Thanjavur',short:'GASC Thanjavur',type:'State',district:'Thanjavur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathidasan University',website:'gasthanjavur.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Autonomous), Dharmapuri',short:'GAC Dharmapuri',type:'State',district:'Dharmapuri',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Periyar University',website:'gacdharma.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Vellore',short:'GAC Vellore',type:'State',district:'Vellore',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Thiruvalluvar University',website:'gacvellore.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Udhagamandalam (Ooty)',short:'GAC Ooty',type:'State',district:'Nilgiris',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathiar University',website:'gacooty.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts and Science College, Sivakasi',short:'GASC Sivakasi',type:'State',district:'Virudhunagar',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Madurai Kamaraj University',website:'gascsivakasi.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Ariyalur',short:'GAC Ariyalur',type:'State',district:'Ariyalur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathidasan University',website:'gacariyalur.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Krishnagiri',short:'GAC Krishnagiri',type:'State',district:'Krishnagiri',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Thiruvalluvar University',website:'gackrishnagiri.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Autonomous), Pudukkottai',short:'GAC Pudukkottai',type:'State',district:'Pudukkottai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathidasan University',website:'gacpudukkottai.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Perambalur',short:'GAC Perambalur',type:'State',district:'Perambalur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathidasan University',website:'gacperambalur.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts and Science College, Gobichettipalayam',short:'GASC Gobichettipalayam',type:'State',district:'Erode',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathiar University',website:'gascgobi.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Udumalpet',short:'GAC Udumalpet',type:'State',district:'Tiruppur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathiar University',website:'gacudumalpet.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Women), Ramanathapuram',short:'GAC Women Ramanathapuram',type:'State',district:'Ramanathapuram',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Madurai Kamaraj University',website:'gacwramanathapuram.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Women), Krishnagiri',short:'GAC Women Krishnagiri',type:'State',district:'Krishnagiri',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Thiruvalluvar University',website:'gacwkrishnagiri.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Women), Tirupur',short:'GAC Women Tirupur',type:'State',district:'Tiruppur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathiar University',website:'gacwtirupur.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Women), Sivagangai',short:'GAC Women Sivagangai',type:'State',district:'Sivagangai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Alagappa University',website:'gacwsivagangai.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Thoothukudi',short:'GAC Thoothukudi',type:'State',district:'Thoothukudi',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Manonmaniam Sundaranar University',website:'gactuticorin.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts and Science College, Kangeyam',short:'GASC Kangeyam',type:'State',district:'Tiruppur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathiar University',website:'gasckangeyam.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Autonomous), Kumbakonam',short:'GAC Kumbakonam',type:'State',district:'Thanjavur',state:'Tamil Nadu',
  naac:'A',nirf:'Govt Arts College TN',affil:'Bharathidasan University',website:'gackumbakonam.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts and Science College, Dindigul',short:'GASC Dindigul',type:'State',district:'Dindigul',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Madurai Kamaraj University',website:'gascdgl.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Kancheepuram',short:'GAC Kancheepuram',type:'State',district:'Kanchipuram',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'University of Madras',website:'gackancheepuram.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Chengalpattu',short:'GAC Chengalpattu',type:'State',district:'Chengalpattu',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'University of Madras',website:'gacchengalpattu.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Tirunelveli',short:'GAC Tirunelveli',type:'State',district:'Tirunelveli',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Manonmaniam Sundaranar University',website:'gactirunelveli.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Nagercoil',short:'GAC Nagercoil',type:'State',district:'Kanyakumari',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Manonmaniam Sundaranar University',website:'gacnagercoil.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Zoology (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Botany (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts and Science College, Villupuram',short:'GASC Villupuram',type:'State',district:'Villupuram',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Thiruvalluvar University',website:'gascvillupuram.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Mannargudi',short:'GAC Mannargudi',type:'State',district:'Thiruvarur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathidasan University',website:'gacmannargudi.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Paramakudi',short:'GAC Paramakudi',type:'State',district:'Ramanathapuram',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Madurai Kamaraj University',website:'gacparamakudi.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Usilampatti',short:'GAC Usilampatti',type:'State',district:'Madurai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Madurai Kamaraj University',website:'gacusilampatti.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College, Mayiladuthurai',short:'GAC Mayiladuthurai',type:'State',district:'Mayiladuthurai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathidasan University',website:'gacmayiladuthurai.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Women), Pudukkottai',short:'GAC Women Pudukkottai',type:'State',district:'Pudukkottai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathidasan University',website:'gacwpudukkottai.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Women), Dindigul',short:'GAC Women Dindigul',type:'State',district:'Dindigul',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Madurai Kamaraj University',website:'gacwdindigul.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Women), Salem',short:'GAC Women Salem',type:'State',district:'Salem',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Periyar University',website:'gacwsalem.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Women), Thanjavur',short:'GAC Women Thanjavur',type:'State',district:'Thanjavur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathidasan University',website:'gacwthanjavur.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Women), Erode',short:'GAC Women Erode',type:'State',district:'Erode',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Bharathiar University',website:'gacwerode.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Government Arts College (Women), Virudhunagar',short:'GAC Women Virudhunagar',type:'State',district:'Virudhunagar',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Arts College TN',affil:'Madurai Kamaraj University',website:'gacwvirudhunagar.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

// ──────────────────────────────────────────────
// GOVERNMENT AIDED
// ──────────────────────────────────────────────
{name:'Loyola College (Autonomous)',short:'Loyola',type:'Aided',district:'Chennai',state:'Tamil Nadu',
  naac:'A++',nirf:'Top Arts College TN',affil:'University of Madras',website:'loyolacollege.edu',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A (Economics, English, History, Tamil, Visual Communication, Social Work)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc (Physics, Chemistry, Mathematics, Computer Science, Statistics, Zoology, Botany)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Com (General, Computer Applications, Professional)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.B.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.C.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Stella Maris College (Autonomous)',short:'Stella Maris',type:'Aided',district:'Chennai',state:'Tamil Nadu',
  naac:'A++',nirf:'Top Women\'s College TN',affil:'University of Madras',website:'stellamariscollege.edu.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A (English, Tamil, History, Economics, Visual Communication, Social Work, French)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc (Physics, Chemistry, Maths, CS, Statistics, Zoology, Microbiology, IT)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Com (General, CA, Professional)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.B.A / B.C.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'PSG College of Technology (Autonomous)',short:'PSG Tech',type:'Aided',district:'Coimbatore',state:'Tamil Nadu',
  naac:'A++',nirf:'#2 TN Engg (after IITM)',affil:'Anna University',website:'psgtech.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, Civil, Mechanical, Production, Biomedical, Robotics & Automation)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.Tech (IT, Textile Technology)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'PSG College of Arts & Science (Autonomous)',short:'PSG CAS',type:'Aided',district:'Coimbatore',state:'Tamil Nadu',
  naac:'A++',nirf:'Top Arts College CBE',affil:'Bharathiar University',website:'psgcas.ac.in',
  streams:['Arts & Science','Management'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, CS, IT, Microbiology, Biochemistry, Zoology, Statistics)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A (Economics, English)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Com / B.B.A / B.C.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Thiagarajar College of Engineering (Autonomous)',short:'TCE Madurai',type:'Aided',district:'Madurai',state:'Tamil Nadu',
  naac:'A++',nirf:'Top Aided Engg TN',affil:'Anna University',website:'tce.edu',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, Civil, Mechanical, Chemical)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.Tech (IT)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Ayya Nadar Janaki Ammal College (Autonomous)',short:'ANJAC Sivakasi',type:'Aided',district:'Virudhunagar',state:'Tamil Nadu',
  naac:'A++',nirf:'Top Arts & Science TN',affil:'Madurai Kamaraj University',website:'anjac.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, CS, IT, Zoology, Botany, Statistics, Microbiology)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A (English, Tamil, History, Economics)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Com / B.B.A / B.C.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Mepco Schlenk Engineering College',short:'Mepco Schlenk',type:'Aided',district:'Virudhunagar',state:'Tamil Nadu',
  naac:'A+',nirf:'Ranked 101–150 Engineering',affil:'Anna University',website:'mepcoeng.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Information Technology (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Chemical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Bannari Amman Institute of Technology',short:'BIT Sathyamangalam',type:'Aided',district:'Erode',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Aided Engg TN',affil:'Anna University',website:'bitsathy.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Information Technology (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.Tech Textile Technology (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Sri Ramakrishna Engineering College',short:'SREC Coimbatore',type:'Aided',district:'Coimbatore',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Aided Engg TN',affil:'Anna University',website:'srec.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Information Technology (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Kongu Engineering College (Autonomous)',short:'KEC Erode',type:'Aided',district:'Erode',state:'Tamil Nadu',
  naac:'A++',nirf:'Top Engg Erode',affil:'Anna University',website:'kongu.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, Civil, Mechanical, Chemical)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.Tech (AI & DS, IT, Food Technology)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Nirmala College for Women (Autonomous)',short:'Nirmala CW',type:'Aided',district:'Coimbatore',state:'Tamil Nadu',
  naac:'A++',nirf:'Top Women\'s College CBE',affil:'Bharathiar University',website:'nirmalacollege.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, CS, IT, Zoology, Biochemistry, Microbiology)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A / B.Com / B.B.A / B.C.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Avinashilingam Institute for Home Science (Deemed)',short:'Avinashilingam',type:'Deemed',district:'Coimbatore',state:'Tamil Nadu',
  naac:'A++',nirf:'Top Women\'s Deemed',affil:'Deemed University — Women only',website:'avinuty.ac.in',
  streams:['Arts & Science','Education'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.Sc (Food Science & Nutrition, CS, Zoology, Physics, Chemistry, Maths)',exam:'Own Entrance + Merit',examCss:'ce-own'},
      {name:'B.A / B.Com / B.B.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
    {stream:'Education',programs:[
      {name:'B.Ed (Education)',exam:'Own Entrance',examCss:'ce-own'},
    ]},
  ]},


// ──────────────────────────────────────────────
// DEEMED UNIVERSITIES
// ──────────────────────────────────────────────


{name:'Bharathiar University',short:'BU Coimbatore',type:'State',district:'Coimbatore',state:'Tamil Nadu',
  naac:'A++',nirf:'Top University TN',affil:'State University (Affiliating)',website:'b-u.ac.in',
  streams:['Arts & Science','Management','Education'],
  programGroups:[
    {stream:'Arts & Science (University Departments)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, CS, Electronics, Statistics, Zoology, Botany)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A (Economics, Tamil, English, Commerce)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A / B.Com / B.C.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},


{name:'Nallamuthu Gounder Mahalingam College (Autonomous)',short:'NGM College Pollachi',type:'Aided',district:'Coimbatore',state:'Tamil Nadu',
  naac:'A++',nirf:'Top Arts & Science',affil:'Bharathiar University',website:'ngmcollege.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (CS, IT, Maths, Physics, Chemistry, Zoology, Botany, Biochemistry)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A (Tamil, English, Economics, History)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Com / B.B.A / B.C.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Pachaiyappa\'s College (Autonomous)',short:'Pachaiyappa\'s Chennai',type:'Aided',district:'Chennai',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Aided Arts College Chennai',affil:'University of Madras',website:'pachaiyappas.edu.in',
  streams:['Arts & Science'],
  specialNote:'One of India\'s oldest colleges (est. 1842) — premier aided autonomous college in Chennai.',
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Com (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'National College (Autonomous), Trichy',short:'National College Trichy',type:'Aided',district:'Trichy',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Aided Arts College Trichy',affil:'Bharathidasan University',website:'nationalcollege.edu.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Com (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'The American College (Autonomous), Madurai',short:'American College Madurai',type:'Aided',district:'Madurai',state:'Tamil Nadu',
  naac:'A',nirf:'Aided Arts College Madurai',affil:'Madurai Kamaraj University',website:'americancollege.edu.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Com (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Bishop Heber College (Autonomous), Trichy',short:'Bishop Heber Trichy',type:'Aided',district:'Trichy',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Aided Arts College Trichy',affil:'Bharathidasan University',website:'bhctry.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Com (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'St. Joseph\'s College (Autonomous), Trichy',short:'St. Joseph\'s Trichy',type:'Aided',district:'Trichy',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Aided Arts College Trichy',affil:'Bharathidasan University',website:'sjctni.edu',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Com (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Women\'s Christian College (Autonomous), Chennai',short:'WCC Chennai',type:'Aided',district:'Chennai',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Women\'s Aided College Chennai',affil:'University of Madras',website:'wcc.edu.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Com (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Ethiraj College for Women (Autonomous), Chennai',short:'Ethiraj College Chennai',type:'Aided',district:'Chennai',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Women\'s Aided College Chennai',affil:'University of Madras',website:'ethirajcollege.edu.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A History (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Com (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Lady Doak College (Autonomous), Madurai',short:'Lady Doak Madurai',type:'Aided',district:'Madurai',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Women\'s Aided College Madurai',affil:'Madurai Kamaraj University',website:'ladydoak.edu.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG) — Women only',programs:[
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Com (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Guru Nanak College (Autonomous), Chennai',short:'Guru Nanak College Chennai',type:'Aided',district:'Chennai',state:'Tamil Nadu',
  naac:'A',nirf:'Aided Arts College Chennai',affil:'University of Madras',website:'gnc.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Com (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Scott Christian College (Autonomous), Nagercoil',short:'Scott Christian Nagercoil',type:'Aided',district:'Kanyakumari',state:'Tamil Nadu',
  naac:'A',nirf:'Aided Arts College Kanyakumari',affil:'Manonmaniam Sundaranar University',website:'scottchristiancollege.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A Tamil (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.A Economics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Mathematics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Physics (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Chemistry (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
      {name:'B.Sc Computer Science (3 years)',exam:'University Merit Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Kumaraguru College of Technology (Autonomous)',short:'KCT Coimbatore',type:'Aided',district:'Coimbatore',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Aided Engg TN',affil:'Anna University',website:'kct.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Information Technology (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechatronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

{name:'K.S. Rangasamy College of Technology (Autonomous)',short:'KSRCT',type:'Aided',district:'Namakkal',state:'Tamil Nadu',
  naac:'A',nirf:'Aided Engg TN',affil:'Anna University',website:'ksrct.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E Civil Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Mechanical Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electronics & Communication Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Electrical & Electronics Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Computer Science & Engineering (4 years)',exam:'TNEA',examCss:'ce-tnea'},
      {name:'B.E Information Technology (4 years)',exam:'TNEA',examCss:'ce-tnea'},
    ]},
  ]},

// ──────────────────────────────────────────────
// PUDUCHERRY
// ──────────────────────────────────────────────
{name:'Pondicherry University',short:'PU',type:'Central',district:'Puducherry',state:'Puducherry',
  naac:'A+',nirf:'#55 University',affil:'Central University (under MoE)',website:'pondiuni.edu.in',
  streams:['Arts & Science','Engineering','Management','Law','Education'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, CS, Statistics, Earth Sciences, French Studies)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (English, Tamil, French, History, Economics)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Com / B.B.A',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, Mechanical)',exam:'CUET UG / JEE Main',examCss:'ce-cuet'},
    ]},
    {stream:'Law',programs:[
      {name:'B.A LLB (5-year Integrated)',exam:'CUET UG / CLAT',examCss:'ce-cuet'},
    ]},
  ]},

{name:'JIPMER — Jawaharlal Institute of Postgraduate Medical Education & Research',short:'JIPMER',type:'Central',district:'Puducherry',state:'Puducherry',
  naac:'A++',nirf:'#3 Medical',affil:'Autonomous Institute under MoH&FW',website:'jipmer.edu.in',
  streams:['Medical'],
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS',exam:'NEET UG (top 200 rank preferred)',examCss:'ce-neet'},
      {name:'B.Sc Nursing',exam:'JIPMER Nursing Entrance',examCss:'ce-own'},
      {name:'B.Sc (Physiotherapy, Radiology, MLT, OT)',exam:'JIPMER Paramedical Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Pondicherry Engineering College',short:'PEC',type:'State',district:'Puducherry',state:'Puducherry',
  naac:'A',nirf:'Not Ranked',affil:'Pondicherry University (Autonomous)',website:'pec.edu',
  streams:['Engineering'],
  specialNote:'Premier state-govt engineering college of Puducherry UT. Admissions via CENTAC (merit-based, Class 12 marks). TN students eligible.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E. Civil Engineering (4 years)',exam:'CENTAC Puducherry',examCss:'ce-own'},
      {name:'B.E. Mechanical Engineering (4 years)',exam:'CENTAC Puducherry',examCss:'ce-own'},
      {name:'B.E. Electrical & Electronics (4 years)',exam:'CENTAC Puducherry',examCss:'ce-own'},
      {name:'B.E. Electronics & Communication (4 years)',exam:'CENTAC Puducherry',examCss:'ce-own'},
      {name:'B.E. Computer Science (4 years)',exam:'CENTAC Puducherry',examCss:'ce-own'},
      {name:'B.E. Information Technology (4 years)',exam:'CENTAC Puducherry',examCss:'ce-own'},
      {name:'B.E. Chemical Engineering (4 years)',exam:'CENTAC Puducherry',examCss:'ce-own'},
    ]},
  ]},

{name:'Government Arts College, Puducherry',short:'GAC Puducherry',type:'State',district:'Puducherry',state:'Puducherry',
  naac:'A',nirf:'Not Ranked',affil:'Pondicherry University',website:'edu.py.gov.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.A (Tamil, English, History, Economics, French)',exam:'CENTAC Puducherry',examCss:'ce-own'},
      {name:'B.Sc (Physics, Chemistry, Mathematics, Computer Science)',exam:'CENTAC Puducherry',examCss:'ce-own'},
      {name:'B.Com',exam:'CENTAC Puducherry',examCss:'ce-own'},
    ]},
  ]},

{name:'Government Arts College for Women, Puducherry',short:'GACW Puducherry',type:'State',district:'Puducherry',state:'Puducherry',
  naac:'A',nirf:'Not Ranked',affil:'Pondicherry University',website:'edu.py.gov.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.A (Tamil, English, History, Economics)',exam:'CENTAC Puducherry',examCss:'ce-own'},
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Home Science)',exam:'CENTAC Puducherry',examCss:'ce-own'},
      {name:'B.Com',exam:'CENTAC Puducherry',examCss:'ce-own'},
    ]},
  ]},

{name:'Government Arts and Science College, Karaikal',short:'GASC Karaikal',type:'State',district:'Karaikal',state:'Puducherry',
  naac:'Accredited',nirf:'Not Ranked',affil:'Pondicherry University',website:'edu.py.gov.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.A (Tamil, English, History)',exam:'CENTAC Puducherry',examCss:'ce-own'},
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science)',exam:'CENTAC Puducherry',examCss:'ce-own'},
      {name:'B.Com',exam:'CENTAC Puducherry',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// SPECIALISED CENTRAL GOVT INSTITUTES
// (No NAAC A++/A+ but nationally important / unique in their field)
// ──────────────────────────────────────────────
{name:'IIHT Salem — Indian Institute of Handloom Technology',short:'IIHT Salem',type:'Central',district:'Salem',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Anna Univ Rank #4',affil:'Ministry of Textiles, Govt of India — affiliated Anna University',website:'iiht-salem.gov.in',
  streams:['Engineering'],
  specialNote:'Only government institute in TN dedicated to Handloom & Textile Technology. Estd 1960. One of 5 IIHTs in India.',
  programGroups:[
    {stream:'Handloom & Textile Technology',programs:[
      {name:'B.Tech Handloom & Textile Technology (4 years)',exam:'JEE Main / TNEA',examCss:'ce-jee'},
      {name:'Diploma in Textile Technology (3 years)',exam:'Merit (Class 10 marks)',examCss:'ce-merit'},
      {name:'Post Diploma in Textile Processing',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'NIFTEM-T — National Institute of Food Technology, Entrepreneurship & Management',short:'NIFTEM Thanjavur',type:'Central',district:'Thanjavur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'101–150 Engineering',affil:'Ministry of Food Processing Industries — Institute of National Importance',website:'niftem-t.ac.in',
  streams:['Engineering'],
  specialNote:'Only food technology Institute of National Importance in South India. Estd 1967. Formerly IIFPT / IICPT.',
  programGroups:[
    {stream:'Food Technology & Engineering',programs:[
      {name:'B.Tech Food Technology (4 years)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'IIM Trichy — Indian Institute of Management Tiruchirappalli',short:'IIM Trichy',type:'Central',district:'Trichy',state:'Tamil Nadu',
  naac:'Accredited',nirf:'#14 Management',affil:'Institute of National Importance — Ministry of Education',website:'iimtrichy.ac.in',
  streams:['Management'],
  specialNote:'One of the newer IIMs. Strong placement record. IPM (5-year) and MBA programs. Direct entry after Class 12 via IPM.',
  programGroups:[
    {stream:'Management',programs:[
      {name:'IPM — Integrated Programme in Management (5-year BBA + MBA)',exam:'IPMAT Trichy (own entrance)',examCss:'ce-own'},
    ]},
  ]},

{name:'IIIT Trichy — Indian Institute of Information Technology Tiruchirappalli',short:'IIIT Trichy',type:'Central',district:'Trichy',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Top IIITs',affil:'PPP Model IIIT — Ministry of Education (Govt of India)',website:'iiitt.ac.in',
  streams:['Engineering'],
  specialNote:'Specialised in IT, ECE and CS streams. Admission via JEE Main → JoSAA.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'AIIMS Madurai — All India Institute of Medical Sciences',short:'AIIMS Madurai',type:'Central',district:'Madurai',state:'Tamil Nadu',
  naac:'New — not yet accredited',nirf:'AIIMS Network',affil:'Ministry of Health & Family Welfare — Institute of National Importance',website:'aiimsmadurai.edu.in',
  streams:['Medical'],
  specialNote:'Established 2021. Newest AIIMS campus. Fully funded by Central Govt. Will match AIIMS Delhi standards over time.',
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'AIIMS Nursing Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Kalakshetra Foundation',short:'Kalakshetra',type:'Central',district:'Chennai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Unique Arts Institute',affil:'Autonomous Institute under Ministry of Culture, Govt of India',website:'kalakshetra.in',
  streams:['Arts & Science'],
  specialNote:'India\'s most prestigious classical arts institution. Estd 1936 by Rukmini Devi Arundale. Bharatanatyam, Carnatic Music, and traditional crafts. No equivalent exists anywhere else in India.',
  programGroups:[
    {stream:'Classical & Performing Arts',programs:[
      {name:'B.A Music (Carnatic — Vocal, Veena, Violin)',exam:'Audition + Merit',examCss:'ce-own'},
      {name:'B.A Dance (Bharatanatyam)',exam:'Audition + Merit',examCss:'ce-own'},
      {name:'Diploma in Traditional Arts & Crafts',exam:'Audition + Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Indian Maritime University — Chennai Campus',short:'IMU Chennai',type:'Central',district:'Chennai',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Maritime',affil:'Central University under Ministry of Ports, Shipping & Waterways',website:'imu.edu.in',
  streams:['Engineering'],
  specialNote:'Flagship campus of India\'s only maritime university. Graduates become Marine Engineers and Merchant Navy officers. High global salary.',
  programGroups:[
    {stream:'Maritime Engineering & Science',programs:[
      {name:'B.Tech Marine Engineering (4 years)',exam:'IMU CET',examCss:'ce-own'},
      {name:'B.Sc Nautical Science (3 years)',exam:'IMU CET',examCss:'ce-own'},
      {name:'B.Sc Ship Building & Repair (3 years)',exam:'IMU CET',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE UNIVERSITIES (AFFILIATING) — TN
// ──────────────────────────────────────────────
{name:'Alagappa University',short:'AU Karaikudi',type:'State',district:'Sivagangai',state:'Tamil Nadu',
  naac:'A+',nirf:'Top State Univ TN',affil:'State University — Affiliating (SE TN region)',website:'alagappauniversity.ac.in',
  streams:['Arts & Science','Management','Education'],
  programGroups:[
    {stream:'Arts & Science (University Departments)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, CS, IT, Zoology, Botany, Statistics, Biochemistry)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A (Tamil, English, Economics, History)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Com / B.B.A / B.C.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Sc Information Technology',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
    {stream:'Education',programs:[
      {name:'B.Ed (Education)',exam:'Tamil Nadu B.Ed Entrance / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Bharathidasan University',short:'BDU Trichy',type:'State',district:'Trichy',state:'Tamil Nadu',
  naac:'A+',nirf:'Top State Univ TN',affil:'State University — Affiliating (Central TN)',website:'bdu.ac.in',
  streams:['Arts & Science','Management','Education'],
  programGroups:[
    {stream:'Arts & Science (University Departments)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, CS, IT, Statistics, Zoology, Botany, Biochemistry)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A (Tamil, English, Economics, History, Sociology)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Com / B.B.A / B.C.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Madurai Kamaraj University',short:'MKU Madurai',type:'State',district:'Madurai',state:'Tamil Nadu',
  naac:'A+',nirf:'Top State Univ TN',affil:'State University — Affiliating (South TN)',website:'mkuniversity.ac.in',
  streams:['Arts & Science','Management','Law'],
  programGroups:[
    {stream:'Arts & Science (University Departments)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, CS, IT, Statistics, Zoology, Botany, Biochemistry, Microbiology)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A (Tamil, English, Economics, History, Sociology, Political Science)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Com / B.B.A / B.C.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
    {stream:'Law',programs:[
      {name:'B.A LLB / B.L (3-year)',exam:'TNLCET / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'University of Madras',short:'Univ of Madras',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'A+',nirf:'Top State Univ TN',affil:'State University — Oldest univ in TN (estd 1857)',website:'unom.ac.in',
  streams:['Arts & Science','Management','Law'],
  programGroups:[
    {stream:'Arts & Science (University Departments)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, CS, IT, Statistics, Zoology, Botany)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A (Tamil, English, Economics, History, Philosophy, Sociology)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Com / B.B.A / B.C.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
    {stream:'Law',programs:[
      {name:'B.L / B.A LLB',exam:'TNLCET / Merit',examCss:'ce-own'},
    ]},
  ]},

{name:'Periyar University',short:'Periyar Univ Salem',type:'State',district:'Salem',state:'Tamil Nadu',
  naac:'A++',nirf:'Top State Univ TN',affil:'State University — Affiliating (Salem, Namakkal, Dharmapuri districts)',website:'periyaruniversity.ac.in',
  streams:['Arts & Science','Management'],
  programGroups:[
    {stream:'Arts & Science (University Departments)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, CS, IT, Statistics, Zoology, Botany)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A (Tamil, English, Economics, History)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Com / B.B.A / B.C.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Manonmaniam Sundaranar University',short:'MSU Tirunelveli',type:'State',district:'Tirunelveli',state:'Tamil Nadu',
  naac:'A',nirf:'State Univ TN',affil:'State University — Affiliating (South TN: Tirunelveli, Thoothukudi, Kanyakumari)',website:'msuniv.ac.in',
  streams:['Arts & Science','Management','Law'],
  programGroups:[
    {stream:'Arts & Science (University Departments)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, CS, IT, Zoology, Botany)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A (Tamil, English, Economics, History)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.Com / B.B.A / B.C.A',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Tamil Nadu Agricultural University (TNAU)',short:'TNAU Coimbatore',type:'State',district:'Coimbatore',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Agricultural Univ',affil:'State Agricultural University under Govt of TN',website:'tnau.ac.in',
  streams:['Agriculture'],
  specialNote:'Largest agricultural university in TN. 19 constituent colleges & research institutes across TN. No written entrance exam — admission is merit-based on Class 12 marks via TNAU counselling (tnauonline.in). 50% of seats reserved for rural / agricultural-background students. The 15% all-India quota is admitted through CUET-UG (this replaced ICAR AIEEA UG from 2024-25).',
  programGroups:[
    {stream:'Agriculture & Allied Sciences',programs:[
      {name:'B.Sc (Hons) Agriculture (4 years)',exam:'Merit (Class 12 marks) — TNAU Counselling / CUET-UG (15% all-India quota)',examCss:'ce-merit'},
      {name:'B.Sc (Hons) Horticulture (4 years)',exam:'Merit (Class 12 marks) — TNAU Counselling / CUET-UG (15% all-India quota)',examCss:'ce-merit'},
      {name:'B.Tech Agricultural Engineering (4 years)',exam:'Merit (Class 12 marks) — TNAU Counselling / JEE Main',examCss:'ce-merit'},
      {name:'B.Sc Forestry (4 years)',exam:'Merit (Class 12 marks) — TNAU Counselling / CUET-UG (15% all-India quota)',examCss:'ce-merit'},
      {name:'B.Tech Food Technology (4 years)',exam:'Merit (Class 12 marks) — TNAU Counselling / JEE Main',examCss:'ce-merit'},
    ]},
  ]},

{name:'Forest College & Research Institute, Mettupalayam',short:'FCRI Mettupalayam',type:'State',district:'Coimbatore',state:'Tamil Nadu',
  naac:'A',nirf:'Specialised Forestry',affil:'Tamil Nadu Agricultural University (TNAU)',website:'fcri.tnau.ac.in',
  streams:['Agriculture'],
  specialNote:'India\'s premier forestry education and research institute in South India. 4-year B.Sc Forestry degree — leads directly to IFS (Indian Forest Service) and TNFD (TN Forest Department). Set in natural forest surroundings in Mettupalayam foothills.',
  programGroups:[
    {stream:'Forestry & Wildlife Sciences',programs:[
      {name:'B.Sc (Hons) Forestry (4 years)',exam:'Merit (Class 12 marks) — TNAU Counselling / CUET-UG (15% all-India quota)',examCss:'ce-merit'},
    ]},
  ]},

{name:'TANUVAS — Tamil Nadu Veterinary & Animal Sciences University',short:'TANUVAS Chennai',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'A',nirf:'Top Vet Univ',affil:'State Veterinary University under Govt of TN',website:'tanuvas.ac.in',
  streams:['Medical','Agriculture'],
  specialNote:'Only veterinary university in TN. Constituent colleges in Chennai, Vellore, Ooty, Namakkal, Tirunelveli.',
  programGroups:[
    {stream:'Veterinary & Animal Sciences',programs:[
      {name:'BVSc & AH — Bachelor of Veterinary Science & Animal Husbandry (5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

{name:'Tamil Nadu Dr. Jayalalithaa Fisheries University',short:'TNJFU Nagapattinam',type:'State',district:'Nagapattinam',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Specialised Univ',affil:'State Fisheries University under Govt of TN',website:'tnfu.ac.in',
  streams:['Agriculture'],
  specialNote:'Only fisheries university in TN. Constituent colleges in Nagapattinam, Chennai, Thoothukudi, Ponneri, Parakkai. No written entrance exam — admission is merit-based on Class 12 marks (PCB) via TNFU counselling. The 15% all-India quota is admitted through CUET-UG (this replaced ICAR AIEEA UG from 2024-25).',
  programGroups:[
    {stream:'Fisheries & Aquaculture',programs:[
      {name:'B.F.Sc — Bachelor of Fisheries Science (4 years)',exam:'Merit (Class 12 marks) — TNFU Counselling / CUET-UG (15% all-India quota)',examCss:'ce-merit'},
      {name:'B.Tech Fisheries Engineering (4 years)',exam:'Merit (Class 12 marks) — TNFU Counselling / JEE Main',examCss:'ce-merit'},
      {name:'B.Sc Nautical Science (3 years)',exam:'Merit (Class 12 marks) — TNFU Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Tamil Nadu National Law University',short:'TNNLU Trichy',type:'State',district:'Trichy',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Law Univ TN',affil:'State Law University under Govt of TN',website:'tnnlu.ac.in',
  streams:['Law'],
  specialNote:'TN\'s dedicated National Law University. Part of NLU consortium (CLAT). Established 2012.',
  programGroups:[
    {stream:'Law',programs:[
      {name:'BA LLB / BBA LLB (5-year Integrated)',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'Tamil University',short:'Tamil Univ Thanjavur',type:'State',district:'Thanjavur',state:'Tamil Nadu',
  naac:'A',nirf:'Specialised Univ',affil:'State University — dedicated to Tamil language & culture',website:'tamiluniversity.ac.in',
  streams:['Arts & Science'],
  specialNote:'Unique university dedicated entirely to Tamil language, literature, culture, folklore and music. Rare opportunity to study Tamil at the highest academic level.',
  programGroups:[
    {stream:'Tamil Language & Culture',programs:[
      {name:'B.A Tamil (Language & Literature)',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
      {name:'B.A Music (Tamil Classical Music — Carnatic)',exam:'Audition + Merit',examCss:'ce-own'},
      {name:'B.A Folk Arts & Culture',exam:'Merit (Class 12 marks)',examCss:'ce-merit'},
    ]},
  ]},

{name:'The Gandhigram Rural Institute (Deemed)',short:'Gandhigram',type:'Deemed',district:'Dindigul',state:'Tamil Nadu',
  naac:'A+',nirf:'Top Rural Deemed',affil:'Deemed University — Ministry of Education (Gandhian institutions)',website:'ruraluniv.ac.in',
  streams:['Arts & Science','Education'],
  specialNote:'Unique Gandhian institution focused on rural development, community science and social work. Unique B.Sc Rural Home Management and social development programs not found elsewhere.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Maths, Physics, Chemistry, CS, Zoology, Community Science, Rural Home Management)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Tamil, English, Economics, Social Work)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Com / B.B.A',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Education',programs:[
      {name:'B.Ed (Education)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

// ── GOVT MEDICAL COLLEGES (key ones) ──
{name:'Stanley Medical College & Hospital',short:'Stanley MC Chennai',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Medical TN',affil:'The Tamil Nadu Dr. MGR Medical University',website:'stanleymedicalcollege.edu.in',
  streams:['Medical'],
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Kilpauk Medical College & Hospital',short:'KMC Chennai',type:'State',district:'Chennai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Medical TN',affil:'The Tamil Nadu Dr. MGR Medical University',website:'kilpaukmedicalcollege.com',
  streams:['Medical'],
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Govt. Madurai Medical College & Rajaji Hospital',short:'MMC Madurai',type:'State',district:'Madurai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Top Govt Medical TN',affil:'The Tamil Nadu Dr. MGR Medical University',website:'maduraimedicalcollege.in',
  streams:['Medical'],
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years) — 250 seats',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'K.A.P. Viswanatham Govt. Medical College & Hospital (Trichy)',short:'KAPVMCH Trichy',type:'State',district:'Trichy',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Medical TN',affil:'The Tamil Nadu Dr. MGR Medical University',website:'kapvmch.edu.in',
  streams:['Medical'],
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

{name:'Govt. Coimbatore Medical College & Hospital',short:'CMCH Coimbatore',type:'State',district:'Coimbatore',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Medical TN',affil:'The Tamil Nadu Dr. MGR Medical University',website:'coimbatoremedicalcollege.com',
  streams:['Medical'],
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years) — 150 seats',exam:'NEET UG',examCss:'ce-neet'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Govt. Tirunelveli Medical College & Hospital',short:'TVMCH Tirunelveli',type:'State',district:'Tirunelveli',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Medical TN',affil:'The Tamil Nadu Dr. MGR Medical University',website:'tvmch.ac.in',
  streams:['Medical'],
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years) — 250 seats',exam:'NEET UG',examCss:'ce-neet'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Govt. Thanjavur Medical College & Hospital',short:'TMCH Thanjavur',type:'State',district:'Thanjavur',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Govt Medical TN',affil:'The Tamil Nadu Dr. MGR Medical University',website:'tanjavurmedicalcollege.tn.gov.in',
  streams:['Medical'],
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years) — 150 seats',exam:'NEET UG',examCss:'ce-neet'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — TN DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

// ── PUDUCHERRY ADDITIONS ──

{name:'CSIR-CECRI — Central Electrochemical Research Institute',short:'CECRI Karaikudi',type:'Central',district:'Sivagangai',state:'Tamil Nadu',
  naac:'A++',nirf:'TNEA Rank #9 (Anna Univ list)',affil:'CSIR (Council of Scientific & Industrial Research) — Ministry of Science & Technology, Govt of India. Affiliated Anna University.',website:'cecri.res.in',
  streams:['Engineering'],
  specialNote:'India\'s premier electrochemical research institute. Estd 1948 on 300-acre campus in Karaikudi. One of only 37 CSIR national labs. Published 5,500+ papers, 750 patents. Only institute in India offering B.Tech in Chemical & Electrochemical Engineering. Graduates recruited by Exide, Amara Raja, TVS, Hyundai, Shell. Direct gateway to cutting-edge battery, corrosion, and fuel cell research careers.',
  programGroups:[
    {stream:'Chemical & Electrochemical Engineering',programs:[
      {name:'B.Tech Chemical & Electrochemical Engineering (4 years) — 40 seats only',exam:'TNEA (TN students, Class 12 cutoff marks) / JEE Main (other state students)',examCss:'ce-tnea'},
    ]},
  ]},

{name:'Chennai Mathematical Institute (CMI)',short:'CMI Siruseri',type:'Deemed',district:'Chengalpattu',state:'Tamil Nadu',
  naac:'A',nirf:'Elite Research Institute',affil:'Deemed University (UGC Act 1956) — funded by DAE, ISRO, DST, DRDO & Infosys Foundation',website:'cmi.ac.in',
  streams:['Arts & Science'],
  specialNote:'One of India\'s most elite mathematics & theoretical sciences institutes. Founded 1989 by mathematician C.S. Seshadri. Only ~50 UG seats total — admission rivals IIT in difficulty. Maths Olympiad performance considered. Alumni at Chicago, Yale, Stanford, Harvard, TIFR, IISc. Only place in India where Maths + Physics + CS are taught at this depth together. ~30 students get 100% tuition waiver + ₹5,000/month fellowship.',
  programGroups:[
    {stream:'Mathematics, Physics & Computer Science',programs:[
      {name:'B.Sc (Hons) Mathematics & Computer Science (3 years) — ~20 seats',exam:'CMI Entrance Exam (own test)',examCss:'ce-own'},
      {name:'B.Sc (Hons) Mathematics & Physics (3 years) — ~20 seats',exam:'CMI Entrance Exam (own test)',examCss:'ce-own'},
      {name:'B.Sc (Hons) Mathematics with Minor in Data Science (3 years)',exam:'CMI Entrance Exam (own test)',examCss:'ce-own'},
    ]},
  ]},

{name:'National Forensic Sciences University — Chennai Campus',short:'NFSU Chennai',type:'Central',district:'Chennai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Top Forensic Sciences',affil:'National Forensic Sciences University (Institute of National Importance — MHA)',website:'nfsu.ac.in',
  streams:['Engineering','Arts & Science'],
  specialNote:'India\'s only national university dedicated to forensic sciences (est. 2020 as NUI). Chennai campus serves South India. Unique interdisciplinary programmes blending law, science and digital technology.',
  programGroups:[
    {stream:'Forensic & Security Sciences',programs:[
      {name:'B.Sc Forensic Science — 3 years',exam:'NFSU Entrance',examCss:'ce-own'},
      {name:'B.Sc Cyber Security & Digital Forensics — 3 years',exam:'NFSU Entrance',examCss:'ce-own'},
      {name:'B.Tech Computer Science (Cyber Security) — 4 years',exam:'NFSU Entrance',examCss:'ce-own'},
      {name:'B.Sc Behavioural Science & Forensic Psychology — 3 years',exam:'NFSU Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Madras School of Economics',short:'MSE Chennai',type:'Deemed',district:'Chennai',state:'Tamil Nadu',
  naac:'Accredited',nirf:'Premier Economics Research Institute',affil:'Deemed University — funded by Govt. of Tamil Nadu & Govt. of India',website:'mse.ac.in',
  streams:['Arts & Science','Management'],
  specialNote:'One of India\'s top economics research institutes. Founded 1995. Focuses on applied economics, policy, environment & finance. Strong industry & government linkages. Alumni in RBI, World Bank, academia worldwide.',
  programGroups:[
    {stream:'Economics (UG / Integrated)',programs:[
      {name:'Integrated M.A. Economics (5 years) — exit options: B.A. Hons after 3 years, B.A. Hons with Research after 4 years',exam:'MSEET (MSE Entrance Test)',examCss:'ce-own'},
    ]},
    {stream:'Economics & Finance (PG)',programs:[
      {name:'M.Sc Applied Economics (2 years)',exam:'MSEET (MSE Entrance Test)',examCss:'ce-own'},
      {name:'M.Sc Financial Economics (2 years)',exam:'MSEET (MSE Entrance Test)',examCss:'ce-own'},
      {name:'M.Sc Environmental Economics (2 years)',exam:'MSEET (MSE Entrance Test)',examCss:'ce-own'},
      {name:'M.Sc Actuarial Economics (2 years)',exam:'MSEET (MSE Entrance Test)',examCss:'ce-own'},
    ]},
  ]},


{name:'National Institute for Empowerment of Persons with Multiple Disabilities (NIEPMD)',short:'NIEPMD',type:'Central',district:'Chennai',state:'Tamil Nadu',
  naac:'',nirf:'',affil:'Ministry of Social Justice & Empowerment',website:'niepmd.tn.nic.in',
  streams:['Medical'],
  specialNote:'National institute specialising in cerebral palsy, autism, and deaf-blind rehabilitation. Offers allied health programmes through centralized MoSJE counselling.',
  programGroups:[
    {stream:'Allied Health & Rehabilitation',programs:[
      {name:'Bachelor of Physiotherapy / BPT (4.5 years)',exam:'MoSJE Counselling',examCss:'ce-own'},
      {name:'Bachelor of Occupational Therapy / BOT (4.5 years)',exam:'MoSJE Counselling',examCss:'ce-own'},
      {name:'Bachelor in Audiology & Speech-Language Pathology / BASLP (3 years)',exam:'MoSJE Counselling',examCss:'ce-own'},
    ]},
  ]},

{name:'Sardar Vallabhbhai Patel International School of Textiles and Management',short:'SVPITM Coimbatore',type:'Central',district:'Coimbatore',state:'Tamil Nadu',
  naac:'Accredited',nirf:'#1 Govt B-School Coimbatore (India Today 2024)',affil:'Autonomous Institute under Ministry of Textiles, Govt of India; in academic collaboration with Central University of Tamil Nadu (CUTN)',website:'svpistm.ac.in',
  streams:['Management','Arts & Science'],
  specialNote:'Only central-government textile school in South India. Ranked #1 in Coimbatore, #2 in TN and #7 in South India among Govt B-Schools (India Today 2024). Industry-linked programmes in textiles, fashion and retail management. SC/ST post-matric, Handloom Weavers\' Children and merit scholarships available.',
  programGroups:[
    {stream:'Arts & Science (Textiles & Fashion)',programs:[
      {name:'B.Sc Textiles and Fashion (3 years)',exam:'Own Entrance / Merit',examCss:'ce-own'},
      {name:'B.Sc Technical Textiles (3 years)',exam:'Own Entrance / Merit',examCss:'ce-own'},
      {name:'B.Sc Textile and Apparel Design (3 years)',exam:'Own Entrance / Merit',examCss:'ce-own'},
    ]},
    {stream:'Management',programs:[
      {name:'BBA Textile Business Analytics (3 years)',exam:'Own Entrance / Merit',examCss:'ce-own'},
    ]},
  ]},

];

// ── TO ADD MORE STATES ──
// Create a new file: data/colleges-ka.js, data/colleges-kl.js etc.
// Use the same COLLEGES array name and merge in index.html:
// const ALL_COLLEGES = [...COLLEGES_TN, ...COLLEGES_KA];
