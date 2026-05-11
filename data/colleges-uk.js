// Vazhi — Colleges Data: Uttarakhand
// Edit this file to add/update Uttarakhand colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_UK=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT Roorkee',short:'IITR',type:'Central',district:'Haridwar',state:'Uttarakhand',
  naac:'A++',nirf:'#6 Engineering · #9 Overall',affil:'Autonomous (Institute of National Importance — India\'s oldest technical university, est. 1847)',website:'iitr.ac.in',
  streams:['Engineering','Design','Arts & Science'],
  specialNote:'India\'s oldest technical institution. Unique programmes in Earthquake Engineering, Geophysics and Paper Technology.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Metallurgical, Geophysics, Earthquake Engineering, Paper Technology, Polymer Science)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Design',programs:[
      {name:'B.Arch',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'NIT Uttarakhand',short:'NITUK',type:'Central',district:'Pauri Garhwal',state:'Uttarakhand',
  naac:'Accredited',nirf:'Top 100 Engineering',affil:'National Institute of Technology',website:'nituk.ac.in',
  streams:['Engineering'],
  specialNote:'Located in Srinagar (Garhwal). Newer NIT with focus on hill-area infrastructure and computing.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'AIIMS Rishikesh',short:'AIIMS Rishikesh',type:'Central',district:'Dehradun',state:'Uttarakhand',
  naac:'Accredited',nirf:'Top 10 Medical',affil:'All India Institute of Medical Sciences (MoHFW)',website:'aiimsrishikesh.edu.in',
  streams:['Medical'],
  specialNote:'One of the six new AIIMS (PMSSY phase-1). Serves Uttarakhand, Himachal Pradesh and adjoining hill regions.',
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years incl. internship)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'AIIMS Nursing Entrance',examCss:'ce-own'},
      {name:'B.Sc (Paramedical — Physiotherapy, OT, Radiology)',exam:'AIIMS Paramedical Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'HNB Garhwal University',short:'HNBGU',type:'Central',district:'Pauri Garhwal',state:'Uttarakhand',
  naac:'A+',nirf:'Top 100 University',affil:'Central University (converted 2009 — UGC)',website:'hnbgu.ac.in',
  streams:['Arts & Science','Management','Education'],
  specialNote:'Only Central University in Uttarakhand. Strong in Himalayan geology, environmental sciences and humanities.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Physics, Chemistry, Mathematics, Geology, Biotechnology, Computer Science)',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) English, Hindi, History, Geography, Economics, Political Science',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Education',programs:[
      {name:'B.Ed (2 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'Forest Research Institute (FRI)',short:'FRI Dehradun',type:'Central',district:'Dehradun',state:'Uttarakhand',
  naac:'A',nirf:'Top Forestry',affil:'Deemed University under ICFRE (Ministry of Environment, Forest & Climate Change)',website:'fri.icfre.gov.in',
  streams:['Arts & Science'],
  specialNote:'India\'s premier forestry institution (est. 1906). One of the largest research institutes in the world. Stunning heritage campus.',
  programGroups:[
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Forestry (4 years)',exam:'ICAR AIEEA / Own Entrance',examCss:'ce-icar'},
    ]},
  ]},

{name:'IIM Kashipur',short:'IIMK',type:'Central',district:'Udham Singh Nagar',state:'Uttarakhand',
  naac:'Accredited',nirf:'Top 20 Management',affil:'Indian Institute of Management (MoE — Autonomous)',website:'iimkashipur.ac.in',
  streams:['Management'],
  specialNote:'Newer IIM with strong industry connect in the Uttarakhand industrial corridor (SIDCUL). MBA via CAT.',
  programGroups:[
    {stream:'Management',programs:[
      {name:'MBA (2 years)',exam:'CAT',examCss:'ce-own'},
    ]},
  ]},


{name:'Late Jagjivan Ram Government Medical College, Uttarakhand',short:'LJR Medical College',type:'State',district:'Dehradun',state:'Uttarakhand',
  naac:'',nirf:'',affil:'Hemwati Nandan Bahuguna Medical Education University (State)',website:'hnbumu.ac.in',
  streams:['Medical'],
  specialNote:'Government medical college under Uttarakhand state government. MBBS admission through NEET UG Uttarakhand state counselling.',
  programGroups:[
    {stream:'Medical & Health',programs:[
      {name:'MBBS (5.5 years)',exam:'NEET UG',examCss:'ce-neet'},
    ]},
  ]},

];
