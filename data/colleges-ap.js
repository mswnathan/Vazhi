// Vazhi — Colleges Data: Andhra Pradesh
// Edit this file to add/update Andhra Pradesh colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_AP=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Tirupati',short:'IITTP',type:'Central',district:'Tirupati',state:'Andhra Pradesh',
  naac:'Accredited',nirf:'Emerging IIT',affil:'Autonomous (Institute of National Importance)',website:'iittp.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, EE, Mechanical, Civil, Chemical)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'NIT Andhra Pradesh',short:'NITAP',type:'Central',district:'Tadepalligudem',state:'Andhra Pradesh',
  naac:'Accredited',nirf:'Emerging NIT',affil:'National Institute of Technology',website:'nitandhra.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Metallurgical)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'IISER Tirupati',short:'IISERTP',type:'Central',district:'Tirupati',state:'Andhra Pradesh',
  naac:'Accredited',nirf:'Top Science Research',affil:'Institute of Science Education & Research (MoE)',website:'iisertirupati.ac.in',
  streams:['Arts & Science'],
  specialNote:'Research-focused BS-MS dual degree. Top choice for science students aiming for research careers.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'BS-MS Dual Degree (Physics, Chemistry, Maths, Biology, Earth & Climate)',exam:'JEE Advanced / IAT / KVPY',examCss:'ce-jee'},
    ]},
  ]},

{name:'IIIT Kurnool',short:'IIITKUR',type:'Central',district:'Kurnool',state:'Andhra Pradesh',
  naac:'Accredited',nirf:'Top IIIT',affil:'IIIT Kurnool (MoE PPP Scheme)',website:'iiitkurnool.ac.in',
  streams:['Engineering'],
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'Damodaram Sanjivayya National Law University (DSNLU)',short:'DSNLU',type:'Central',district:'Visakhapatnam',state:'Andhra Pradesh',
  naac:'Accredited',nirf:'Top NLU',affil:'National Law University (Andhra Pradesh)',website:'dsnlu.ac.in',
  streams:['Law'],
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'Central University of Andhra Pradesh (CUAP)',short:'CUAP',type:'Central',district:'Anantapur',state:'Andhra Pradesh',
  naac:'Accredited',nirf:'Top University',affil:'Central University — UGC Act 2009',website:'cuap.ac.in',
  streams:['Arts & Science','Management'],
  programGroups:[
    {stream:'Arts & Science (UG)',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (English, History, Political Science, Economics)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'Andhra University',short:'AU',type:'State',district:'Visakhapatnam',state:'Andhra Pradesh',
  naac:'A+',nirf:'Top 50 University',affil:'Andhra University (State)',website:'andhrauniversity.edu.in',
  streams:['Engineering','Arts & Science','Law','Management'],
  specialNote:'One of the oldest universities in South India (est. 1926). EAPCET / AU entrance admission.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical)',exam:'AP EAPCET',examCss:'ce-own'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science)',exam:'Merit / CUET UG',examCss:'ce-merit'},
      {name:'B.A (English, History, Economics, Political Science)',exam:'Merit / CUET UG',examCss:'ce-merit'},
    ]},
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'AP LAWCET',examCss:'ce-own'},
    ]},
  ]},

{name:'Sri Venkateswara University (SVU)',short:'SVU',type:'State',district:'Tirupati',state:'Andhra Pradesh',
  naac:'A+',nirf:'Top University',affil:'Sri Venkateswara University (State)',website:'svuniversity.edu.in',
  streams:['Engineering','Arts & Science','Medical'],
  specialNote:'Located in Tirupati — hosts SVU College of Engineering and Medical College. AP EAPCET admission.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil)',exam:'AP EAPCET',examCss:'ce-own'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Biotechnology)',exam:'Merit / CUET UG',examCss:'ce-merit'},
    ]},
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years) — Sri Venkateswara Medical College',exam:'NEET UG',examCss:'ce-neet'},
    ]},
    {stream:'Paramedical (Diploma) — Merit-based, no entrance exam',programs:[
      {name:'Diploma in Medical Lab Technology / DMLT (2 years)',exam:'Merit (Class 12 PCB marks) — AP DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Medical Radiography Technology / DMRT (2 years)',exam:'Merit (Class 12 PCB marks) — AP DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Operation Theatre Technology / DOTT (2 years)',exam:'Merit (Class 12 PCB marks) — AP DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Anaesthesia Technology (2 years)',exam:'Merit (Class 12 PCB marks) — AP DME Counselling',examCss:'ce-merit'},
      {name:'Diploma in Optometry (2 years)',exam:'Merit (Class 12 PCB marks) — AP DME Counselling',examCss:'ce-merit'},
    ]},
  ]},

{name:'JNTU Kakinada',short:'JNTUK',type:'State',district:'Kakinada',state:'Andhra Pradesh',
  naac:'A',nirf:'Top State Engineering',affil:'Jawaharlal Nehru Technological University Kakinada',website:'jntuk.edu.in',
  streams:['Engineering'],
  specialNote:'Major affiliating technical university for Coastal AP region. EAPCET admission.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, IT, Chemical)',exam:'AP EAPCET',examCss:'ce-own'},
    ]},
  ]},

{name:'JNTU Anantapur',short:'JNTUA',type:'State',district:'Anantapur',state:'Andhra Pradesh',
  naac:'A',nirf:'Top State Engineering',affil:'Jawaharlal Nehru Technological University Anantapur',website:'jntua.edu.in',
  streams:['Engineering'],
  specialNote:'Major affiliating technical university for Rayalaseema region. EAPCET admission.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, IT)',exam:'AP EAPCET',examCss:'ce-own'},
    ]},
  ]},

{name:'RGUKT Andhra Pradesh (IIIT AP — Multiple Campuses)',short:'RGUKT-AP',type:'State',district:'Nuzvid',state:'Andhra Pradesh',
  naac:'Accredited',nirf:'Unique State Scheme',affil:'Rajiv Gandhi University of Knowledge Technologies',website:'rgukt.ac.in',
  streams:['Engineering'],
  specialNote:'Exclusively for rural AP students who studied in Govt/AP residential schools. 6-year Integrated B.Tech (2-year PUC + 4-year B.Tech). No JEE needed — merit via SSC marks. Campuses: Nuzvid, Srikakulam, RK Valley, Ongole.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'6-year Integrated B.Tech (CSE, ECE, Mechanical, Civil) — Nuzvid campus',exam:'SSC Merit (AP Govt school students only)',examCss:'ce-merit'},
      {name:'6-year Integrated B.Tech — Srikakulam campus',exam:'SSC Merit (AP Govt school students only)',examCss:'ce-merit'},
      {name:'6-year Integrated B.Tech — RK Valley campus',exam:'SSC Merit (AP Govt school students only)',examCss:'ce-merit'},
    ]},
  ]},

{name:'Dr. YSR Horticultural University',short:'DRYSRHU',type:'State',district:'Guntur',state:'Andhra Pradesh',
  naac:'Accredited',nirf:'Top Horticulture',affil:'Dr. Y.S.R. Horticultural University (State)',website:'drysrhu.edu.in',
  streams:['Agriculture'],
  specialNote:'Only dedicated horticultural university in Andhra Pradesh. CUET-UG (15% all-India quota) / AP merit admission.',
  programGroups:[
    {stream:'Agriculture, Fisheries & Vet',programs:[
      {name:'B.Sc (Horticulture) — 4 years',exam:'CUET-UG (15% all-India quota) / AP Merit',examCss:'ce-cuet'},
      {name:'B.Sc (Floriculture & Landscape Architecture)',exam:'CUET-UG (15% all-India quota) / AP Merit',examCss:'ce-cuet'},
    ]},
  ]},


{name:'Acharya Nagarjuna University',short:'ANU',type:'State',district:'Guntur',state:'Andhra Pradesh',
  naac:'A+',nirf:'Top 100 University',affil:'Acharya Nagarjuna University (State — AP)',website:'nagarjunauniversity.ac.in',
  streams:['Arts & Science','Engineering','Law','Medical'],
  specialNote:'Major state university (est. 1976) serving Guntur, Krishna, and West Godavari districts. Affiliates over 300 colleges. Wide range of UG programmes across all streams.',
  programGroups:[
    {stream:'Arts & Humanities',programs:[
      {name:'B.A (Economics, History, Political Science, Sociology, English) — 3 years',exam:'CUET UG / University Merit',examCss:'ce-cuet'},
    ]},
    {stream:'Science & Technology',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Botany, Zoology, Computer Science) — 3 years',exam:'CUET UG / University Merit',examCss:'ce-cuet'},
    ]},
    {stream:'Commerce & Management',programs:[
      {name:'B.Com / BBA — 3 years',exam:'CUET UG / University Merit',examCss:'ce-cuet'},
    ]},
    {stream:'Law',programs:[
      {name:'B.A LL.B / BBA LL.B (5 years)',exam:'CLAT / AP LAWCET',examCss:'ce-clat'},
    ]},
  ]},

{name:'Dravidian University',short:'Dravidian Univ Kuppam',type:'State',district:'Chittoor',state:'Andhra Pradesh',
  naac:'Accredited',nirf:'State University',affil:'State University established by Govt of Andhra Pradesh (1997)',website:'dravidianuniversity.ac.in',
  streams:['Arts & Science','Commerce'],
  specialNote:'State university focused on Dravidian languages, culture and humanities. UG admission via AP merit / CUET UG for select programmes.',
  programGroups:[
    {stream:'Arts & Humanities',programs:[
      {name:'B.A Telugu / Tamil / Kannada / Malayalam (Dravidian languages)',exam:'University Merit / CUET UG',examCss:'ce-merit'},
      {name:'B.A History / Sociology / Political Science',exam:'University Merit / CUET UG',examCss:'ce-merit'},
    ]},
    {stream:'Science & Technology',programs:[
      {name:'B.Sc (Computer Science, Maths, Physics, Chemistry)',exam:'University Merit',examCss:'ce-merit'},
    ]},
  ]},

{name:'Yogi Vemana University',short:'Yogi Vemana Univ',type:'State',district:'Kadapa',state:'Andhra Pradesh',
  naac:'A+',nirf:'State University',affil:'State University established by Govt of Andhra Pradesh (2006)',website:'yogivemanauniversity.ac.in',
  streams:['Arts & Science','Commerce'],
  specialNote:'AP state university in Rayalaseema region. Strong in basic sciences and Telugu studies.',
  programGroups:[
    {stream:'Science & Technology',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Botany, Zoology)',exam:'University Merit / CUET UG',examCss:'ce-merit'},
    ]},
    {stream:'Arts & Humanities',programs:[
      {name:'B.A Telugu / English / History / Economics',exam:'University Merit',examCss:'ce-merit'},
    ]},
    {stream:'Commerce & Management',programs:[
      {name:'B.Com / BBA',exam:'University Merit',examCss:'ce-merit'},
    ]},
  ]},

{name:'Andhra Kesari University',short:'Andhra Kesari Univ',type:'State',district:'Prakasam (Ongole)',state:'Andhra Pradesh',
  naac:'Accredited',nirf:'State University',affil:'State University established by Govt of Andhra Pradesh (2022) — named after T. Prakasam',website:'aku.edu.in',
  streams:['Arts & Science','Commerce'],
  specialNote:'New AP state university in Prakasam district. UG programmes via constituent and affiliated colleges in the region.',
  programGroups:[
    {stream:'Arts & Humanities',programs:[
      {name:'B.A Telugu / English / History / Economics / Political Science',exam:'University Merit',examCss:'ce-merit'},
    ]},
    {stream:'Science & Technology',programs:[
      {name:'B.Sc (Physics, Chemistry, Maths, Computer Science, Biotechnology)',exam:'University Merit',examCss:'ce-merit'},
    ]},
    {stream:'Commerce & Management',programs:[
      {name:'B.Com / BBA',exam:'University Merit',examCss:'ce-merit'},
    ]},
  ]},

];
