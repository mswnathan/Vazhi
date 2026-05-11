// Vazhi — Colleges Data: Chandigarh (UT)
// Edit this file to add/update Chandigarh colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_CH=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'Panjab University',short:'PU',type:'Central',district:'Chandigarh',state:'Chandigarh',
  naac:'A+',nirf:'Top 25 University',affil:'Panjab University (Central — Act of Parliament)',website:'puchd.ac.in',
  streams:['Engineering','Arts & Science','Law','Management'],
  specialNote:'One of India\'s oldest universities (est. 1882). Admission via JEE Main for engineering; CUET for arts/science.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.E (CSE, ECE, EEE, Mechanical, Civil, IT) — UIET',exam:'JEE Main / PU CET',examCss:'ce-jee'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) (Physics, Chemistry, Maths, Computer Science, Statistics)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) (English, History, Political Science, Economics, Sociology)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.Com (Hons)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Law',programs:[
      {name:'LL.B (3-year after UG)',exam:'PU CET Law',examCss:'ce-own'},
      {name:'B.A LL.B (Hons) — 5-year integrated',exam:'CLAT / PU CET',examCss:'ce-clat'},
    ]},
  ]},

{name:'PGIMER Chandigarh',short:'PGIMER',type:'Central',district:'Chandigarh',state:'Chandigarh',
  naac:'A++',nirf:'#2 Medical',affil:'Post Graduate Institute of Medical Education & Research (Institute of National Importance)',website:'pgimer.edu.in',
  streams:['Medical'],
  specialNote:'India\'s second-ranked medical institution. Primarily PG-dominant but offers UG-level allied health and nursing programmes.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'B.Sc Nursing (Hons) — 4 years',exam:'PGIMER Nursing Entrance',examCss:'ce-own'},
      {name:'B.Sc (Medical Lab Technology, Radiography, Physiotherapy, OT Technology)',exam:'PGIMER Allied Health Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'NIELIT Chandigarh',short:'NIELIT-CHD',type:'Central',district:'Chandigarh',state:'Chandigarh',
  naac:'Accredited',nirf:'Specialised IT Institute',affil:'National Institute of Electronics & IT — Chandigarh Centre (MeitY, Govt of India)',website:'nielit.gov.in/chandigarh',
  streams:['Engineering','Arts & Science'],
  specialNote:'Central govt autonomous institute under MeitY. One of NIELIT\'s largest regional centres. Offers formal degrees (BCA, M.Tech) alongside PG diplomas in emerging IT domains.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'BCA (Bachelor of Computer Applications) — 3 years',exam:'NIELIT Entrance / Merit',examCss:'ce-own'},
    ]},
    {stream:'Engineering & Technology (PG)',programs:[
      {name:'M.Tech Cyber Forensics & Information Security',exam:'GATE / NIELIT Entrance',examCss:'ce-gate'},
      {name:'M.Tech Embedded Systems',exam:'GATE / NIELIT Entrance',examCss:'ce-gate'},
      {name:'MCA (Master of Computer Applications) — 2 years (after BCA/BSc)',exam:'NIELIT Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'NIFT Chandigarh',short:'NIFT-CHD',type:'Central',district:'Chandigarh',state:'Chandigarh',
  naac:'Accredited',nirf:'Top Design',affil:'National Institute of Fashion Technology (Ministry of Textiles)',website:'nift.ac.in/chandigarh',
  streams:['Design'],
  programGroups:[
    {stream:'Design',programs:[
      {name:'B.Des (Fashion Design, Textile Design)',exam:'NIFT Entrance',examCss:'ce-own'},
      {name:'B.F.Tech (Apparel Production)',exam:'NIFT Entrance',examCss:'ce-own'},
    ]},
  ]},

];
