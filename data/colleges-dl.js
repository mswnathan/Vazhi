// Vazhi — Colleges Data: Delhi (NCT)
// Edit this file to add/update Delhi colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_DL=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Delhi',short:'IITD',type:'Central',district:'Delhi',state:'Delhi',
  naac:'A++',nirf:'#2 Engineering · #2 Overall',affil:'Autonomous (Institute of National Importance)',website:'iitd.ac.in',
  streams:['Engineering','Arts & Science','Design'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, EE, Mechanical, Civil, Chemical, Textile, Biochemical, Engineering Physics)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Design',programs:[
      {name:'B.Des (Design)',exam:'UCEED',examCss:'ce-own'},
    ]},
  ]},

{name:'NIT Delhi',short:'NITDL',type:'Central',district:'Delhi',state:'Delhi',
  naac:'Accredited',nirf:'Emerging NIT',affil:'National Institute of Technology',website:'nitdelhi.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'AIIMS New Delhi',short:'AIIMS',type:'Central',district:'Delhi',state:'Delhi',
  naac:'A++',nirf:'#1 Medical',affil:'All India Institute of Medical Sciences (Institute of National Importance)',website:'aiims.edu',
  streams:['Medical'],
  specialNote:'India\'s most prestigious medical institution. Ultra-competitive NEET cutoff — top 50 rank typically needed.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing (Hons)',exam:'AIIMS BSc Nursing Entrance',examCss:'ce-own'},
      {name:'B.Sc (Paramedical — Radiography, Optometry, Operation Theatre)',exam:'AIIMS BSc Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Jawaharlal Nehru University (JNU)',short:'JNU',type:'Central',district:'Delhi',state:'Delhi',
  naac:'A++',nirf:'#2 University',affil:'Central University — Act of Parliament 1966',website:'jnu.ac.in',
  streams:['Arts & Science'],
  specialNote:'India\'s premier research university for social sciences, humanities and international studies. Admission via CUET UG.',
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A (Hons) Foreign Languages (Chinese, French, German, Russian, Spanish, Arabic, Persian)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) International Studies',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'NLU Delhi (National Law University Delhi)',short:'NLUD',type:'Central',district:'Delhi',state:'Delhi',
  naac:'A+',nirf:'Top 3 Law',affil:'National Law University (Delhi)',website:'nludelhi.ac.in',
  streams:['Law'],
  specialNote:'Known for corporate law and intellectual property. Highly competitive CLAT cutoff.',
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'IIFT Delhi',short:'IIFT',type:'Central',district:'Delhi',state:'Delhi',
  naac:'A',nirf:'Top Management',affil:'Indian Institute of Foreign Trade (Deemed — Ministry of Commerce)',website:'iift.ac.in',
  streams:['Management'],
  specialNote:'Specialises in international business and trade. Post-UG MBA-IB. IIFT own entrance exam.',
  programGroups:[
    {stream:'Management (Post-UG)',programs:[
      {name:'MBA (International Business) — 2 years',exam:'IIFT Entrance / CAT',examCss:'ce-own'},
    ]},
  ]},

{name:'NIFT Delhi',short:'NIFT-DEL',type:'Central',district:'Delhi',state:'Delhi',
  naac:'Accredited',nirf:'Top Design',affil:'National Institute of Fashion Technology (Ministry of Textiles)',website:'nift.ac.in/delhi',
  streams:['Design'],
  programGroups:[
    {stream:'Design',programs:[
      {name:'B.Des (Fashion Design, Fashion Communication, Leather, Accessory, Textile)',exam:'NIFT Entrance',examCss:'ce-own'},
      {name:'B.F.Tech (Apparel Production)',exam:'NIFT Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'School of Planning & Architecture (SPA) Delhi',short:'SPA',type:'Central',district:'Delhi',state:'Delhi',
  naac:'A',nirf:'#1 Architecture',affil:'Autonomous (Central Govt — Ministry of Education)',website:'spa.ac.in',
  streams:['Design'],
  specialNote:'India\'s top architecture and planning school. Very competitive NATA + JEE Paper 2 admission.',
  programGroups:[
    {stream:'Design & Architecture',programs:[
      {name:'B.Arch — 5 years',exam:'JEE Main Paper 2 / NATA',examCss:'ce-nata'},
      {name:'B.Planning — 4 years',exam:'JEE Main Paper 2',examCss:'ce-jee'},
    ]},
  ]},

{name:'Indian Statistical Institute (ISI) Delhi',short:'ISI-DEL',type:'Central',district:'Delhi',state:'Delhi',
  naac:'A++',nirf:'Top Research',affil:'Institute of National Importance (Ministry of Statistics)',website:'isid.ac.in',
  streams:['Arts & Science'],
  specialNote:'Highly selective. B.Stat and B.Math programmes — India\'s best for statistics and mathematics. ISI Admission Test required.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Stat (Hons) — 3 years',exam:'ISI Admission Test',examCss:'ce-own'},
      {name:'B.Math (Hons) — 3 years',exam:'ISI Admission Test',examCss:'ce-own'},
    ]},
  ]},

{name:'Jamia Millia Islamia (JMI)',short:'JMI',type:'Central',district:'Delhi',state:'Delhi',
  naac:'A++',nirf:'Top 10 University',affil:'Central University — Act of Parliament 1988',website:'jmi.ac.in',
  streams:['Engineering','Arts & Science','Law','Design'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Biotechnology)',exam:'JEE Main / JMI Entrance',examCss:'ce-jee'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.A (Hons) (English, History, Political Science, Sociology, Psychology)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Sc (Hons) (Computer Science, Physics, Chemistry, Maths)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Law',programs:[
      {name:'LL.B (3-year after UG)',exam:'JMI Entrance',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// UNIVERSITY OF DELHI — AIDED COLLEGES
// ──────────────────────────────────────────────
{name:'Miranda House (University of Delhi)',short:'MH-DU',type:'Aided',district:'Delhi',state:'Delhi',
  naac:'A++',nirf:'#1 College in India',affil:'University of Delhi (Aided)',website:'mirandahouse.ac.in',
  streams:['Arts & Science'],
  specialNote:'Consistently ranked #1 college in India (NIRF). Women-only. Admission via CUET UG.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.A (Hons) — English, History, Political Science, Economics, Sociology, Philosophy, Geography',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Sc (Hons) — Physics, Chemistry, Maths, Computer Science, Botany, Zoology',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'Hindu College (University of Delhi)',short:'Hindu-DU',type:'Aided',district:'Delhi',state:'Delhi',
  naac:'A++',nirf:'Top 5 College',affil:'University of Delhi (Aided)',website:'hinducollege.ac.in',
  streams:['Arts & Science'],
  specialNote:'One of DU\'s oldest and most prestigious colleges (est. 1899). Strong in humanities and sciences.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.A (Hons) — English, History, Political Science, Economics, Hindi, Sanskrit',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Sc (Hons) — Physics, Chemistry, Maths, Computer Science, Zoology, Botany',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Com (Hons)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'Lady Shri Ram College (University of Delhi)',short:'LSR',type:'Aided',district:'Delhi',state:'Delhi',
  naac:'A++',nirf:'Top 5 College',affil:'University of Delhi (Aided)',website:'lsr.edu.in',
  streams:['Arts & Science'],
  specialNote:'Women-only. Top-ranked for economics, psychology and mass communication. Admission via CUET UG.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.A (Hons) — Economics, Psychology, English, Political Science, History, Sociology',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Com (Hons)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'St. Stephen\'s College (University of Delhi)',short:'StStephens',type:'Aided',district:'Delhi',state:'Delhi',
  naac:'A++',nirf:'Top 10 College',affil:'University of Delhi (Aided)',website:'ststephens.edu',
  streams:['Arts & Science'],
  specialNote:'One of India\'s most prestigious liberal arts colleges (est. 1881). Admission via CUET UG + college interview.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.A (Hons) — English, History, Philosophy, Economics',exam:'CUET UG + Interview',examCss:'ce-cuet'},
      {name:'B.Sc (Hons) — Physics, Chemistry, Maths, Computer Science',exam:'CUET UG + Interview',examCss:'ce-cuet'},
    ]},
  ]},

{name:'Kirori Mal College (University of Delhi)',short:'KMC',type:'Aided',district:'Delhi',state:'Delhi',
  naac:'A+',nirf:'Top 15 College',affil:'University of Delhi (Aided)',website:'kmc.du.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.A (Hons) — English, Hindi, History, Political Science, Economics',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Sc (Hons) — Physics, Chemistry, Maths, Computer Science',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Com (Hons)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'Hansraj College (University of Delhi)',short:'HRC',type:'Aided',district:'Delhi',state:'Delhi',
  naac:'A+',nirf:'Top 15 College',affil:'University of Delhi (Aided)',website:'hansrajcollege.ac.in',
  streams:['Arts & Science'],
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.A (Hons) — Economics, English, History, Political Science',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Sc (Hons) — Physics, Chemistry, Maths, Computer Science, Electronics',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Com (Hons)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE — DELHI GOVT TECHNICAL
// ──────────────────────────────────────────────
{name:'Delhi Technological University (DTU)',short:'DTU',type:'State',district:'Delhi',state:'Delhi',
  naac:'A+',nirf:'Top 25 Engineering',affil:'Delhi Technological University (State — Autonomous)',website:'dtu.ac.in',
  streams:['Engineering'],
  specialNote:'Formerly Delhi College of Engineering. Admission via JEE Main + JAC Delhi rank.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, IT, Mechanical, Civil, Software, Environmental, Biotechnology, Mathematics & Computing)',exam:'JEE Main + JAC Delhi',examCss:'ce-jee'},
    ]},
  ]},

{name:'Netaji Subhas University of Technology (NSUT)',short:'NSUT',type:'State',district:'Delhi',state:'Delhi',
  naac:'A',nirf:'Top 50 Engineering',affil:'NSUT Delhi (State — Autonomous)',website:'nsut.ac.in',
  streams:['Engineering'],
  specialNote:'Formerly Netaji Subhas Institute of Technology (NSIT). JAC Delhi admission.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, IT, Mechanical, Instrumentation & Control, Manufacturing, Electronics & Communication)',exam:'JEE Main + JAC Delhi',examCss:'ce-jee'},
    ]},
  ]},

{name:'Indira Gandhi Delhi Technical University for Women (IGDTUW)',short:'IGDTUW',type:'State',district:'Delhi',state:'Delhi',
  naac:'A',nirf:'Top 50 Engineering',affil:'Delhi Govt Statutory University (est. 1998)',website:'igdtuw.ac.in',
  streams:['Engineering'],
  specialNote:'India\'s first and only technical university exclusively for women. Admission via JEE Main + JAC Delhi. Strong industry tie-ups; vibrant start-up culture on campus.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, IT, Electrical, Mechanical, Applied Mathematics)',exam:'JEE Main + JAC Delhi',examCss:'ce-jee'},
    ]},
  ]},

{name:'Pandit Deendayal Upadhyaya National Institute for Persons with Physical Disabilities (PDUNIPPD)',short:'PDUNIPPD',type:'Central',district:'Delhi',state:'Delhi',
  naac:'Accredited',nirf:'Specialised Rehabilitation',affil:'Ministry of Social Justice & Empowerment, Govt of India',website:'iphnewdelhi.edu.in',
  streams:['Medical'],
  specialNote:'Premier national institute for disability rehabilitation and special education. Offers professional courses for those seeking careers in special education, prosthetics & orthotics, and vocational rehabilitation.',
  programGroups:[
    {stream:'Medical & Rehabilitation',programs:[
      {name:'B.Ed Special Education (Visual / Hearing / Intellectual Disability) — 2 years',exam:'Entrance Test + Interview',examCss:'ce-own'},
      {name:'B.Sc Prosthetics & Orthotics — 4 years',exam:'Entrance Test',examCss:'ce-own'},
      {name:'Diploma in Vocational Rehabilitation — 1 year',exam:'Merit',examCss:'ce-merit'},
    ]},
  ]},

{name:'Indraprastha Institute of Information Technology Delhi (IIIT-D)',short:'IIITD',type:'State',district:'Delhi',state:'Delhi',
  naac:'A+',nirf:'Top Engineering',affil:'IIIT Delhi (Statutory University — Delhi Govt)',website:'iiitd.ac.in',
  streams:['Engineering'],
  specialNote:'Research-focused CS and ECE institute. Merit-only via JEE Main — no donation seats.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, Computational Biology, Mathematics & Computing, Social Sciences & Humanities in Technology)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},


{name:'Pt. Deendayal Upadhyaya National Institute for Persons with Physical Disabilities (PDU-NIPPPD)',short:'PDU-NIPPPD',type:'Central',district:'Delhi',state:'Delhi',
  naac:'',nirf:'',affil:'Ministry of Social Justice & Empowerment',website:'nipppd.nic.in',
  streams:['Medical'],
  specialNote:'One of India\'s oldest rehabilitation institutes (est. 1955). Offers BPT, BOT, BPO through centralized MoSJE counselling.',
  programGroups:[
    {stream:'Allied Health & Rehabilitation',programs:[
      {name:'Bachelor of Physiotherapy / BPT (4.5 years)',exam:'MoSJE Counselling',examCss:'ce-own'},
      {name:'Bachelor of Occupational Therapy / BOT (4.5 years)',exam:'MoSJE Counselling',examCss:'ce-own'},
      {name:'Bachelor in Prosthetics & Orthotics / BPO (4.5 years)',exam:'MoSJE Counselling',examCss:'ce-own'},
    ]},
  ]},

];
