// Vazhi — Colleges Data: North-East India
// Covers: Manipur, Meghalaya, Tripura, Sikkim, Arunachal Pradesh, Nagaland, Mizoram
// Edit this file to add/update North-East colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_NE=[

// ──────────────────────────────────────────────
// MEGHALAYA
// ──────────────────────────────────────────────
{name:'NEHU Shillong',short:'NEHU',type:'Central',district:'East Khasi Hills',state:'Meghalaya',
  naac:'A',nirf:'Top 75 University',affil:'North-Eastern Hill University (Central — est. 1973)',website:'nehu.ac.in',
  streams:['Arts & Science','Management','Education','Law'],
  specialNote:'Oldest and most prominent central university in the North-East. Spread across Shillong (main) and Tura (Meghalaya) campuses. Strong in Humanities, Tribal Studies and Environmental Science.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Computer Science, Biotechnology, Chemistry, Physics, Mathematics, Environmental Science',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) Sociology, Political Science, Economics, History, English, Khasi, Garo',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Law',programs:[
      {name:'LL.B (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'NIT Meghalaya',short:'NITMeg',type:'Central',district:'East Jaintia Hills',state:'Meghalaya',
  naac:'Accredited',nirf:'Top 100 Engineering',affil:'National Institute of Technology',website:'nitm.ac.in',
  streams:['Engineering'],
  specialNote:'Located in Sohra (Cherrapunjee area). One of the newer NITs with focus on sustainable infrastructure and civil engineering.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'IIM Shillong',short:'IIMSHIL',type:'Central',district:'East Khasi Hills',state:'Meghalaya',
  naac:'Accredited',nirf:'Top Management',affil:'Indian Institute of Management Shillong (Institute of National Importance)',website:'iimshillong.ac.in',
  streams:['Management'],
  specialNote:'India\'s first "green" IIM campus (est. 2008). Set amid rolling hills. PGP (MBA) is post-UG, but noted here for Class 12 students planning ahead. Strong focus on sustainability and tribal entrepreneurship.',
  programGroups:[
    {stream:'Management (Post-UG)',programs:[
      {name:'PGP (MBA equivalent) — 2 years',exam:'CAT',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// MANIPUR
// ──────────────────────────────────────────────
{name:'Manipur University',short:'MU',type:'Central',district:'Imphal West',state:'Manipur',
  naac:'A',nirf:'Top 100 University',affil:'Central University (converted 2005)',website:'manipuruniv.ac.in',
  streams:['Arts & Science','Management','Education'],
  specialNote:'Central University serving Manipur. Canchipur campus (Imphal). Strong in Meitei language, Social Sciences and Life Sciences.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Computer Science, Biotechnology, Physics, Chemistry, Mathematics',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) Economics, History, Political Science, Meitei, English, Sociology',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'NIT Manipur',short:'NITMan',type:'Central',district:'Imphal West',state:'Manipur',
  naac:'Accredited',nirf:'Top 100 Engineering',affil:'National Institute of Technology',website:'nitmanipur.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'RIMS Imphal',short:'RIMS',type:'State',district:'Imphal East',state:'Manipur',
  naac:'Accredited',nirf:'Top Government Medical',affil:'Regional Institute of Medical Sciences (State — est. 1972)',website:'rimsmanipur.ac.in',
  streams:['Medical'],
  specialNote:'Premier government medical college of North-East India. MBBS and nursing admissions through NEET UG.',
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years incl. internship)',exam:'NEET UG (state counselling)',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'NEET UG / State Entrance',examCss:'ce-neet'},
    ]},
  ]},

// ──────────────────────────────────────────────
// TRIPURA
// ──────────────────────────────────────────────
{name:'Tripura University',short:'TU',type:'Central',district:'Gomati',state:'Tripura',
  naac:'A',nirf:'Top 100 University',affil:'Central University (converted 2007)',website:'tripurauniv.ac.in',
  streams:['Arts & Science','Management','Education'],
  specialNote:'Suryamaninagar campus. Strong in Bengali & Kokborok studies, Computer Science and Social Work.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Computer Science, Physics, Chemistry, Mathematics, Biotechnology',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) Bengali, Kokborok, History, Political Science, Economics, English',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'NIT Tripura',short:'NITTrip',type:'Central',district:'West Tripura',state:'Tripura',
  naac:'A',nirf:'Top 80 Engineering',affil:'National Institute of Technology (est. 1965 as Tripura Engineering College)',website:'nit.ac.in',
  streams:['Engineering'],
  specialNote:'One of the older NITs in the North-East. Barjala campus (Agartala). Consistently good NIRF ranking for a NE institution.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Production)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

// ──────────────────────────────────────────────
// SIKKIM
// ──────────────────────────────────────────────
{name:'Sikkim University',short:'SU',type:'Central',district:'East Sikkim',state:'Sikkim',
  naac:'B++',nirf:'Top 150 University',affil:'Central University (UGC Act 2007)',website:'cus.ac.in',
  streams:['Arts & Science','Management','Education'],
  specialNote:'Tadong campus (Gangtok). Focus on Himalayan ecology, Tibetan & Sikkimese studies and peace studies.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Computer Science, Environmental Science, Botany, Zoology, Physics',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) English, Nepali, Limbu, Sikkimese History, Political Science',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'NIT Sikkim',short:'NITSikkim',type:'Central',district:'South Sikkim',state:'Sikkim',
  naac:'Accredited',nirf:'Top 100 Engineering',affil:'National Institute of Technology',website:'nitsikkim.ac.in',
  streams:['Engineering'],
  specialNote:'Ravangla campus at 2100 m altitude. Unique setting for research on Himalayan infrastructure and renewable energy.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

// ──────────────────────────────────────────────
// ARUNACHAL PRADESH
// ──────────────────────────────────────────────
{name:'Rajiv Gandhi University',short:'RGU',type:'Central',district:'Papum Pare',state:'Arunachal Pradesh',
  naac:'B+',nirf:'Top 150 University',affil:'Central University (converted 2007)',website:'rgu.ac.in',
  streams:['Arts & Science','Management','Education','Law'],
  specialNote:'Rono Hills campus (Itanagar). Only central university in Arunachal Pradesh. Strong in tribal studies, botany and zoology of the Eastern Himalayas.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Computer Science, Botany, Zoology, Chemistry, Physics, Mathematics',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) Economics, English, History, Political Science',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Law',programs:[
      {name:'LL.B (3 years)',exam:'CUET UG / Merit',examCss:'ce-merit'},
    ]},
  ]},

{name:'NIT Arunachal Pradesh',short:'NITArP',type:'Central',district:'Papum Pare',state:'Arunachal Pradesh',
  naac:'Accredited',nirf:'Top 100 Engineering',affil:'National Institute of Technology',website:'nitap.ac.in',
  streams:['Engineering'],
  specialNote:'Yupia campus (Papum Pare). Newer NIT in a biodiversity-rich state. Focus areas include hydro-power, environment and computing.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

// ──────────────────────────────────────────────
// NAGALAND
// ──────────────────────────────────────────────
{name:'Nagaland University',short:'NU',type:'Central',district:'Zunheboto',state:'Nagaland',
  naac:'B+',nirf:'Top 150 University',affil:'Central University (est. 1994)',website:'nagalanduniversity.ac.in',
  streams:['Arts & Science','Management','Education'],
  specialNote:'Multi-campus university (Lumami, Kohima, Medziphema). Known for biodiversity and NE tribal cultural studies.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Computer Science, Biotechnology, Environmental Science)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (English, Political Science, History, Economics, Nagamese)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'NIT Nagaland',short:'NITNag',type:'Central',district:'Dimapur',state:'Nagaland',
  naac:'Accredited',nirf:'Top 100 Engineering',affil:'National Institute of Technology',website:'nitnagaland.ac.in',
  streams:['Engineering'],
  specialNote:'Chumukedima campus (near Dimapur). Gateway NIT for students from Nagaland and neighbouring NE states.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

// ──────────────────────────────────────────────
// MIZORAM
// ──────────────────────────────────────────────
{name:'Mizoram University',short:'MZU',type:'Central',district:'Aizawl',state:'Mizoram',
  naac:'A',nirf:'Top 100 University',affil:'Central University (est. 2001)',website:'mzu.edu.in',
  streams:['Arts & Science','Management','Education'],
  specialNote:'Tanhril campus (Aizawl). One of the better-ranked NE central universities. Strong in Mizo studies, Biochemistry and Computer Applications.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Computer Science, Biochemistry, Biotechnology, Mathematics, Physics',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) Mizo, English, History, Political Science, Economics',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'NIT Mizoram',short:'NITMiz',type:'Central',district:'Aizawl',state:'Mizoram',
  naac:'Accredited',nirf:'Top 100 Engineering',affil:'National Institute of Technology',website:'nitmz.ac.in',
  streams:['Engineering'],
  specialNote:'Chaltlang campus (Aizawl). Serves Mizoram\'s growing IT and infrastructure sector.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'RIPANS — Regional Institute of Paramedical & Nursing Sciences',short:'RIPANS',type:'State',district:'Aizawl',state:'Mizoram',
  naac:'Accredited',nirf:'Top Allied Health Institute',affil:'Government of Mizoram — Health & Family Welfare Department',website:'ripans.mizoram.gov.in',
  streams:['Medical'],
  specialNote:'Mizoram\'s only government paramedical and nursing institute. Primary feeder for the state\'s healthcare workforce. Admission via NEET UG / state merit.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'B.Sc Nursing (4 years)',exam:'NEET UG / State Merit',examCss:'ce-neet'},
      {name:'B.Sc (Medical Lab Technology, Radiography, OT Technology)',exam:'State Merit',examCss:'ce-merit'},
      {name:'Diploma in Pharmacy (D.Pharm)',exam:'State Merit',examCss:'ce-merit'},
    ]},
  ]},

];
