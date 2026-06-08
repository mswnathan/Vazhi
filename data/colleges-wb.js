// Vazhi — Colleges Data: West Bengal
// Edit this file to add/update West Bengal colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_WB=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Kharagpur',short:'IITKGP',type:'Central',district:'Kharagpur',state:'West Bengal',
  naac:'A++',nirf:'#4 Engineering · #5 Overall',affil:'Autonomous (Institute of National Importance — India\'s first IIT)',website:'iitkgp.ac.in',
  streams:['Engineering','Arts & Science','Design','Law'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Metallurgical, Aerospace, Ocean, Mining, Agri & Food)',exam:'JEE Advanced',examCss:'ce-jee'},
      {name:'B.Tech Biomedical Engineering (new 2026)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Design',programs:[
      {name:'B.Arch',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) (Integrated — Rajiv Gandhi School of IP Law)',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'IIEST Shibpur',short:'IIEST',type:'Central',district:'Howrah',state:'West Bengal',
  naac:'A',nirf:'Top 30 Engineering',affil:'Institute of Engineering & Management (Institute of National Importance)',website:'iiest.ac.in',
  streams:['Engineering'],
  specialNote:'One of India\'s oldest engineering institutes (est. 1856). Admission via JEE Main.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, IT, Mechanical, Civil, Chemical, Mining, Printing)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'NIT Durgapur',short:'NITDGP',type:'Central',district:'Durgapur',state:'West Bengal',
  naac:'A+',nirf:'Top 30 Engineering',affil:'National Institute of Technology',website:'nitdgp.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, IT, Mechanical, Civil, Chemical, Metallurgical, Biotechnology)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'IISER Kolkata',short:'IISERK',type:'Central',district:'Kalyani',state:'West Bengal',
  naac:'A++',nirf:'Top Science Research',affil:'Institute of Science Education & Research (MoE)',website:'iiserkol.ac.in',
  streams:['Arts & Science'],
  specialNote:'One of the first IISERs. Strong in physics, chemistry and biology research. BS-MS dual degree.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'BS-MS Dual Degree (Physics, Chemistry, Maths, Biology, Earth Sciences)',exam:'JEE Advanced / IAT / KVPY',examCss:'ce-jee'},
    ]},
  ]},

{name:'NUJS Kolkata',short:'NUJS',type:'Central',district:'Kolkata',state:'West Bengal',
  naac:'A',nirf:'Top 5 Law',affil:'The West Bengal National University of Juridical Sciences',website:'nujs.edu',
  streams:['Law'],
  specialNote:'Known for public international law and human rights. One of the premier NLUs.',
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'IIM Calcutta',short:'IIMC',type:'Central',district:'Kolkata',state:'West Bengal',
  naac:'A++',nirf:'#1 Management',affil:'Institute of National Importance',website:'iimcal.ac.in',
  streams:['Management'],
  specialNote:'India\'s top-ranked B-School. PGP (MBA) is post-UG. UG students note for future planning.',
  programGroups:[
    {stream:'Management (Post-UG)',programs:[
      {name:'PGP (MBA) — 2 years',exam:'CAT',examCss:'ce-own'},
    ]},
  ]},

{name:'Indian Statistical Institute (ISI) Kolkata',short:'ISI-KOL',type:'Central',district:'Kolkata',state:'West Bengal',
  naac:'A++',nirf:'Top Research',affil:'Institute of National Importance (Ministry of Statistics)',website:'isical.ac.in',
  streams:['Arts & Science'],
  specialNote:'The founding campus of ISI. India\'s best for statistics, maths and data science. Highly selective own entrance test.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Stat (Hons) — 3 years',exam:'ISI Admission Test',examCss:'ce-own'},
      {name:'B.Math (Hons) — 3 years',exam:'ISI Admission Test',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'Jadavpur University',short:'JU',type:'State',district:'Kolkata',state:'West Bengal',
  naac:'A++',nirf:'#11 Engineering · #14 University',affil:'Jadavpur University (State)',website:'jadavpur.edu',
  streams:['Engineering','Arts & Science'],
  specialNote:'Consistently top-ranked state university. Admission via WBJEE for engineering; JU own test for arts/science.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, IT, Mechanical, Civil, Chemical, Printing, Construction)',exam:'WBJEE',examCss:'ce-own'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Statistics)',exam:'JU Admission Test',examCss:'ce-own'},
      {name:'B.A (English, Bengali, Comparative Literature, Philosophy, History)',exam:'JU Admission Test',examCss:'ce-own'},
    ]},
  ]},

{name:'Presidency University Kolkata',short:'PU-KOL',type:'State',district:'Kolkata',state:'West Bengal',
  naac:'A+',nirf:'Top University',affil:'Presidency University (State — Autonomous)',website:'presiuniv.ac.in',
  streams:['Arts & Science'],
  specialNote:'Historic institution (est. 1817). India\'s first Western-style college. Strong liberal arts and sciences tradition.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Statistics, Computer Science, Geology)',exam:'Presidency Entrance Test',examCss:'ce-own'},
      {name:'B.A (Economics, English, Bengali, History, Sociology, Political Science, Philosophy)',exam:'Presidency Entrance Test',examCss:'ce-own'},
    ]},
  ]},

{name:'Medical College Kolkata',short:'MCK',type:'State',district:'Kolkata',state:'West Bengal',
  naac:'A',nirf:'Top State Medical',affil:'West Bengal University of Health Sciences (WBUHS)',website:'medicalcollegekolkata.in',
  streams:['Medical'],
  specialNote:'One of India\'s oldest medical colleges (est. 1835). NEET UG admission under WB state quota.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing',exam:'NEET UG / WB Merit',examCss:'ce-neet'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — WB DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — WB DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — WB DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — WB DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — WB DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'Bidhan Chandra Krishi Viswavidyalaya (BCKV)',short:'BCKV',type:'State',district:'Nadia',state:'West Bengal',
  naac:'A',nirf:'Top Agriculture',affil:'Bidhan Chandra Krishi Viswavidyalaya (State)',website:'bckv.edu.in',
  streams:['Agriculture'],
  specialNote:'Premier state agricultural university. CUET-UG (15% all-India quota) / WB state merit admission.',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Agriculture) — 4 years',exam:'CUET-UG (15% all-India quota) / WB Merit',examCss:'ce-cuet'},
      {name:'B.Sc (Horticulture)',exam:'CUET-UG (15% all-India quota) / WB Merit',examCss:'ce-cuet'},
      {name:'B.F.Sc (Fisheries)',exam:'CUET-UG (15% all-India quota) / WB Merit',examCss:'ce-cuet'},
    ]},
  ]},


{name:'National Institute for Locomotor Disabilities (NILD)',short:'NILD',type:'Central',district:'Kolkata',state:'West Bengal',
  naac:'',nirf:'',affil:'Ministry of Social Justice & Empowerment',website:'nild.edu.in',
  streams:['Medical'],
  specialNote:'Premier national institute for locomotor disability rehabilitation (est. 1978). Offers allied health professional programmes. Admission through centralized MoSJE counselling.',
  programGroups:[
    {stream:'Allied Health & Rehabilitation',programs:[
      {name:'Bachelor of Physiotherapy / BPT (4.5 years)',exam:'MoSJE CET',examCss:'ce-own'},
      {name:'Bachelor of Occupational Therapy / BOT (4.5 years)',exam:'MoSJE CET',examCss:'ce-own'},
      {name:'Bachelor in Prosthetics & Orthotics / BPO (4.5 years)',exam:'MoSJE CET',examCss:'ce-own'},
    ]},
  ]},

{name:'Visva-Bharati University',short:'Visva-Bharati',type:'Central',district:'Birbhum',state:'West Bengal',
  naac:'A',nirf:'Top Central University',affil:'Central University — Act of Parliament 1951 (founded by Rabindranath Tagore, 1921)',website:'visvabharati.ac.in',
  streams:['Arts & Science'],
  specialNote:'Founded by Rabindranath Tagore at Santiniketan. Unique residential university blending Indian and global traditions, with strong programmes in fine arts, music, and humanities at Kala-Bhavana and Sangit-Bhavana.',
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.A (English, Bengali, Hindi, Sanskrit, History, Political Science, Philosophy, Economics)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Sc (Physics, Chemistry, Maths, Botany, Zoology, Computer Science, Statistics)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Com (Hons)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Fine Arts & Music',programs:[
      {name:'BFA (Painting, Sculpture, Graphic Art, Design, History of Art) — Kala-Bhavana',exam:'CUET UG + Practical',examCss:'ce-cuet'},
      {name:'B.Mus (Hindustani Vocal, Rabindra Sangit, Sitar, Tabla, Esraj) — Sangit-Bhavana',exam:'CUET UG + Audition',examCss:'ce-cuet'},
    ]},
  ]},

];
