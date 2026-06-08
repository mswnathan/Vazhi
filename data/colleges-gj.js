// Vazhi — Colleges Data: Gujarat
// Edit this file to add/update Gujarat colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_GJ=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Gandhinagar',short:'IITGN',type:'Central',district:'Gandhinagar',state:'Gujarat',
  naac:'A+',nirf:'Top 10 Engineering',affil:'Autonomous (Institute of National Importance)',website:'iitgn.ac.in',
  streams:['Engineering','Arts & Science','Design'],
  specialNote:'Known for liberal arts integrated engineering and strong research culture.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, EE, Mechanical, Civil, Chemical, Materials, Earth Sciences, Mathematics & Computing)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Design',programs:[
      {name:'B.Des',exam:'UCEED',examCss:'ce-own'},
    ]},
  ]},

{name:'SVNIT Surat',short:'SVNIT',type:'Central',district:'Surat',state:'Gujarat',
  naac:'A+',nirf:'Top 25 Engineering',affil:'National Institute of Technology',website:'svnit.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, IT, Mechanical, Civil, Chemical, Electrical)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'IISER Ahmedabad',short:'IISERA',type:'Central',district:'Ahmedabad',state:'Gujarat',
  naac:'Accredited',nirf:'Top Science Research',affil:'Institute of Science Education & Research (MoE)',website:'iisera.ac.in',
  streams:['Arts & Science'],
  specialNote:'Research-focused BS-MS. Strong in chemistry, biology and interdisciplinary sciences.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'BS-MS Dual Degree (Physics, Chemistry, Maths, Biology, Earth Sciences)',exam:'JEE Advanced / IAT / KVPY',examCss:'ce-jee'},
    ]},
  ]},

{name:'NLU Gandhi Nagar (GNLU)',short:'GNLU',type:'Central',district:'Gandhinagar',state:'Gujarat',
  naac:'A',nirf:'Top 10 Law',affil:'National Law University (Gujarat)',website:'gnlu.ac.in',
  streams:['Law'],
  specialNote:'Known for ADR (Alternative Dispute Resolution) and corporate law.',
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
      {name:'B.Sc LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'NID Ahmedabad',short:'NID',type:'Central',district:'Ahmedabad',state:'Gujarat',
  naac:'Accredited',nirf:'#1 Design',affil:'National Institute of Design (Ministry of Commerce)',website:'nid.edu',
  streams:['Design'],
  specialNote:'India\'s premier design institute. Highly competitive own entrance (NID DAT). Product, Communication and Textile Design.',
  programGroups:[
    {stream:'Design',programs:[
      {name:'B.Des (Industrial Design, Communication Design, Textile Design, Ceramic & Glass, Film & Video)',exam:'NID DAT',examCss:'ce-own'},
    ]},
  ]},

{name:'NIFT Gandhinagar',short:'NIFT-GNR',type:'Central',district:'Gandhinagar',state:'Gujarat',
  naac:'Accredited',nirf:'Top Design',affil:'National Institute of Fashion Technology (Ministry of Textiles)',website:'nift.ac.in/gandhinagar',
  streams:['Design'],
  programGroups:[
    {stream:'Design',programs:[
      {name:'B.Des (Fashion Design, Textile Design)',exam:'NIFT Entrance',examCss:'ce-own'},
      {name:'B.F.Tech (Apparel Production)',exam:'NIFT Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Central University of Gujarat (CUG)',short:'CUG',type:'Central',district:'Gandhinagar',state:'Gujarat',
  naac:'A',nirf:'Top University',affil:'Central University — UGC Act 2009',website:'cug.ac.in',
  streams:['Arts & Science','Law'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (English, Hindi, Gujarati, Sociology, Political Science)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'AIIMS Rajkot',short:'AIIMSRJ',type:'Central',district:'Rajkot',state:'Gujarat',
  naac:'Accredited',nirf:'Top Medical',affil:'All India Institute of Medical Sciences (Ministry of Health)',website:'aiimsrajkot.edu.in',
  streams:['Medical'],
  specialNote:'One of the new AIIMS under PM-AIIMS scheme. Highly competitive NEET cutoff.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'Government Medical College Ahmedabad (GMC Ahmedabad)',short:'GMCA',type:'State',district:'Ahmedabad',state:'Gujarat',
  naac:'A',nirf:'Top State Medical',affil:'Gujarat University / Gujarat Medical Education Research Society',website:'gmers.gujarat.gov.in',
  streams:['Medical'],
  specialNote:'Largest government medical college in Gujarat. NEET UG admission under Gujarat state quota.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — Gujarat DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — Gujarat DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — Gujarat DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — Gujarat DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — Gujarat DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Gujarat University',short:'GU',type:'State',district:'Ahmedabad',state:'Gujarat',
  naac:'A+',nirf:'Top State University',affil:'Gujarat University (State)',website:'gujaratuniversity.ac.in',
  streams:['Arts & Science','Management'],
  specialNote:'Largest affiliating university in Gujarat. Many top government colleges affiliated here. GUJCET / merit admission.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Biotechnology)',exam:'GUJCET / Merit',examCss:'ce-own'},
      {name:'B.A (English, Gujarati, History, Political Science, Economics)',exam:'Merit',examCss:'ce-merit'},
      {name:'B.Com',exam:'Merit',examCss:'ce-merit'},
    ]},
  ]},

{name:'Anand Agricultural University (AAU)',short:'AAU',type:'State',district:'Anand',state:'Gujarat',
  naac:'A',nirf:'Top Agriculture',affil:'Anand Agricultural University (State)',website:'aau.in',
  streams:['Agriculture'],
  specialNote:'Premier dairy and agriculture university of Gujarat. CUET-UG (15% all-India quota) / Gujarat state merit.',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Agriculture) — 4 years',exam:'CUET-UG (15% all-India quota) / GJ Merit',examCss:'ce-cuet'},
      {name:'B.Tech (Dairy Technology)',exam:'CUET-UG (15% all-India quota) / GJ Merit',examCss:'ce-cuet'},
      {name:'B.Sc (Horticulture)',exam:'CUET-UG (15% all-India quota) / GJ Merit',examCss:'ce-cuet'},
    ]},
  ]},

{name:'Institute of Infrastructure, Technology, Research and Management',short:'IITRAM Ahmedabad',type:'State',district:'Ahmedabad',state:'Gujarat',
  naac:'A',nirf:'Top State Tech',affil:'State University established by Govt of Gujarat (IITRAM Act 2013)',website:'iitram.ac.in',
  streams:['Engineering'],
  specialNote:'Gujarat state technical university focused on infrastructure engineering. B.Tech admission via JEE Main + ACPC counselling.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech Civil Engineering',exam:'JEE Main / ACPC',examCss:'ce-jee'},
      {name:'B.Tech Electrical Engineering',exam:'JEE Main / ACPC',examCss:'ce-jee'},
      {name:'B.Tech Mechanical Engineering',exam:'JEE Main / ACPC',examCss:'ce-jee'},
      {name:'B.Tech Computer Engineering',exam:'JEE Main / ACPC',examCss:'ce-jee'},
    ]},
  ]},

{name:'Indian Institute of Teacher Education',short:'IITE Gandhinagar',type:'State',district:'Gandhinagar',state:'Gujarat',
  naac:'A',nirf:'Top Teacher Education',affil:'State University established by Govt of Gujarat (IITE Act 2010)',website:'iite.ac.in',
  streams:['Education'],
  specialNote:'India\'s only state university dedicated exclusively to teacher education. Offers integrated B.A./B.Sc + B.Ed and M.A. + M.Ed programmes.',
  programGroups:[
    {stream:'Education',programs:[
      {name:'Integrated B.A. B.Ed (4 years)',exam:'IITE CET',examCss:'ce-own'},
      {name:'Integrated B.Sc B.Ed (4 years)',exam:'IITE CET',examCss:'ce-own'},
      {name:'B.Ed Special Education',exam:'IITE CET',examCss:'ce-own'},
    ]},
  ]},

{name:'Rashtriya Raksha University (RRU)',short:'RRU',type:'Central',district:'Gandhinagar',state:'Gujarat',
  naac:'',nirf:'',affil:'Ministry of Home Affairs, Govt of India (Institution of National Importance)',website:'rru.ac.in',
  streams:['Arts & Science'],
  specialNote:'India\'s only national security university — INI under Ministry of Home Affairs. Campuses in Gandhinagar (main), Lavad (Puducherry), Lucknow, Bhopal, Pasighat & Shivamogga. Admission through RCET (Rashtriya Raksha Common Entrance Test). Strong pathway to IPS, intelligence, cyber defence and PSU security roles.',
  programGroups:[
    {stream:'Security, Defence & Strategic Studies',programs:[
      {name:'B.A. Security Management (3 years)',exam:'RCET (RRU Entrance)',examCss:'ce-own'},
      {name:'B.A. Defence and Strategic Studies (3 years)',exam:'RCET (RRU Entrance)',examCss:'ce-own'},
      {name:'B.Sc. Defence and Strategic Studies (3 years)',exam:'RCET (RRU Entrance)',examCss:'ce-own'},
      {name:'B.A. International Relations and Security Studies (3 years)',exam:'RCET (RRU Entrance)',examCss:'ce-own'},
      {name:'B.A. Global Governance & Security Studies (3 years)',exam:'RCET (RRU Entrance)',examCss:'ce-own'},
      {name:'BBA and Bachelor of Legislative Law (3 years)',exam:'RCET (RRU Entrance)',examCss:'ce-own'},
      {name:'BBA — Corporate Security Management (3 years)',exam:'RCET (RRU Entrance)',examCss:'ce-own'},
      {name:'B.Sc. Physical Education & Sports (3 years)',exam:'RCET (RRU Entrance)',examCss:'ce-own'},
      {name:'B.A. Psychology — NCAHP (3 years)',exam:'RCET (RRU Entrance)',examCss:'ce-own'},
      {name:'B.A. Clinical Psychology — RCI (3 years)',exam:'RCET (RRU Entrance)',examCss:'ce-own'},
      {name:'Diploma in Police Science (1 year)',exam:'RCET (RRU Entrance)',examCss:'ce-own'},
    ]},
  ]},

];
