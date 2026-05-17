// Vazhi — Colleges Data: Chhattisgarh
// Edit this file to add/update Chhattisgarh colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_CG=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'NIT Raipur',short:'NITRAIPUR',type:'Central',district:'Raipur',state:'Chhattisgarh',
  naac:'A+',nirf:'Top 40 Engineering',affil:'National Institute of Technology (est. 1956 as Govt. Engineering College)',website:'nitrr.ac.in',
  streams:['Engineering'],
  specialNote:'One of India\'s older engineering colleges. Strong in Mining, Metallurgical and Information Technology. Well-connected to the mineral-rich CG industry.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, IT, Mechanical, Civil, Chemical, Mining, Metallurgical, Biomedical)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'AIIMS Raipur',short:'AIIMS Raipur',type:'Central',district:'Raipur',state:'Chhattisgarh',
  naac:'Accredited',nirf:'Top 10 Medical',affil:'All India Institute of Medical Sciences (MoHFW — PMSSY phase 1)',website:'aiimsraipur.edu.in',
  streams:['Medical'],
  specialNote:'One of the six original new AIIMS under PMSSY. Serves Chhattisgarh and large tribal belt of Central India.',
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years incl. internship)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'AIIMS Nursing Entrance',examCss:'ce-own'},
      {name:'B.Sc (Paramedical — Physiotherapy, OT, Radiology, Dental Hygiene)',exam:'AIIMS Paramedical Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'HNLU Raipur',short:'HNLU',type:'Central',district:'Raipur',state:'Chhattisgarh',
  naac:'B+',nirf:'Top 15 Law',affil:'Hidayatullah National Law University (NLU — CG Act 2003)',website:'hnlu.ac.in',
  streams:['Law'],
  specialNote:'Named after Justice M. Hidayatullah — first Muslim Chief Justice and Vice-President of India. Focus on tribal rights and forest law.',
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) (5-year Integrated)',exam:'CLAT',examCss:'ce-clat'},
      {name:'B.B.A LL.B (Hons) (5-year Integrated)',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

{name:'Central University of Chhattisgarh',short:'CUCg',type:'Central',district:'Bilaspur',state:'Chhattisgarh',
  naac:'B+',nirf:'Top 150 University',affil:'Central University (UGC Act 2009)',website:'cuc.ac.in',
  streams:['Arts & Science','Management','Education'],
  specialNote:'Located in Koni, Bilaspur. Focus on tribal studies, forest management and environmental science.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Computer Science, Environmental Science, Physics, Chemistry, Mathematics',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) Economics, English, Hindi, History',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Education',programs:[
      {name:'B.Ed (2 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'IIM Raipur',short:'IIMRPR',type:'Central',district:'Raipur',state:'Chhattisgarh',
  naac:'Accredited',nirf:'Top 15 Management',affil:'Indian Institute of Management (MoE — Autonomous)',website:'iimraipur.ac.in',
  streams:['Management'],
  specialNote:'One of the second-generation IIMs. Strong focus on rural management, natural resources and Central India industries.',
  programGroups:[
    {stream:'Management',programs:[
      {name:'MBA (2 years)',exam:'CAT',examCss:'ce-own'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'IGKV Raipur',short:'IGKV',type:'State',district:'Raipur',state:'Chhattisgarh',
  naac:'A',nirf:'Top Agriculture',affil:'Indira Gandhi Krishi Vishwavidyalaya (State — ICAR recognised)',website:'igkv.ac.in',
  streams:['Arts & Science'],
  specialNote:'Chhattisgarh\'s premier agricultural university. Known as the "Rice Bowl of India" — IGKV leads research on paddy varieties and tribal farming practices.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Agriculture (4 years)',exam:'CUET-UG (15% all-India quota)',examCss:'ce-cuet'},
      {name:'B.Sc (Hons) Horticulture (4 years)',exam:'CUET-UG (15% all-India quota)',examCss:'ce-cuet'},
      {name:'B.Tech Agricultural Engineering',exam:'CUET-UG (15% all-India quota)',examCss:'ce-cuet'},
    ]},
  ]},

];
