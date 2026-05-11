// Vazhi — Colleges Data: Jharkhand
// Edit this file to add/update Jharkhand colleges
// Schema: {name, short, type, district, state, naac, nirf, affil, website, streams, specialNote?, programGroups:[{stream, programs:[{name, exam, examCss}]}]}
// Types: Central | State | Aided | Deemed | Private
// examCss: ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm

const COLLEGES_JH=[

// ──────────────────────────────────────────────
// CENTRAL GOVERNMENT
// ──────────────────────────────────────────────
{name:'IIT (ISM) Dhanbad',short:'IIT ISM',type:'Central',district:'Dhanbad',state:'Jharkhand',
  naac:'A++',nirf:'#9 Engineering',affil:'Autonomous (Institute of National Importance — est. 1926 as Indian School of Mines)',website:'iitism.ac.in',
  streams:['Engineering','Arts & Science'],
  specialNote:'India\'s oldest mining & petroleum institution. Unique programmes in Mining, Petroleum, Applied Geology and Geophysics not found at other IITs.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Mining, Petroleum, Mineral, Mining Machinery, Environmental, Fuel & Mineral)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'Integrated M.Sc (Applied Geology, Applied Geophysics, Applied Mathematics, Applied Physics, Applied Chemistry)',exam:'JEE Advanced',examCss:'ce-jee'},
    ]},
  ]},

{name:'NIT Jamshedpur',short:'NITJSR',type:'Central',district:'East Singhbhum',state:'Jharkhand',
  naac:'A',nirf:'Top 40 Engineering',affil:'National Institute of Technology',website:'nitjsr.ac.in',
  streams:['Engineering'],
  specialNote:'Located in India\'s steel city. Strong in Metallurgical & Materials Engineering and Production Engineering.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Metallurgical & Materials, Production & Industrial)',exam:'JEE Main',examCss:'ce-jee'},
    ]},
  ]},

{name:'AIIMS Deoghar',short:'AIIMS Deoghar',type:'Central',district:'Deoghar',state:'Jharkhand',
  naac:'Accredited',nirf:'New AIIMS — Emerging',affil:'All India Institute of Medical Sciences (MoHFW)',website:'aiimsdeoghar.edu.in',
  streams:['Medical'],
  specialNote:'Newest AIIMS in Eastern India. Serves tribal and rural populations of Jharkhand and adjoining Bihar.',
  programGroups:[
    {stream:'Medical',programs:[
      {name:'MBBS (5.5 years incl. internship)',exam:'NEET UG',examCss:'ce-neet'},
      {name:'B.Sc Nursing (4 years)',exam:'AIIMS Nursing Entrance',examCss:'ce-own'},
    ]},
  ]},

{name:'Central University of Jharkhand',short:'CUJ',type:'Central',district:'Ranchi',state:'Jharkhand',
  naac:'B+',nirf:'Top 150 University',affil:'Central University (UGC Act 2009)',website:'cuj.ac.in',
  streams:['Engineering','Arts & Science','Management'],
  specialNote:'Focus on tribal studies, nano-science and environment. Unique B.Tech in Nanotechnology and Renewable Energy.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, Nanotechnology, Renewable Energy)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Arts & Science',programs:[
      {name:'B.Sc (Hons) Physics, Chemistry, Mathematics, Life Sciences, Environmental Sciences',exam:'CUET UG',examCss:'ce-cuet'},
      {name:'B.A (Hons) English, Hindi, Economics, Tribal Studies',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
    {stream:'Management',programs:[
      {name:'B.B.A (3 years)',exam:'CUET UG',examCss:'ce-cuet'},
    ]},
  ]},

{name:'NUSRL Ranchi',short:'NUSRL',type:'Central',district:'Ranchi',state:'Jharkhand',
  naac:'Accredited',nirf:'Top 15 Law',affil:'National University of Study & Research in Law (established by Jharkhand Act — NLU)',website:'nusrlranchi.ac.in',
  streams:['Law'],
  specialNote:'One of the newer NLUs. Focus on labour law, tribal rights and environmental law — relevant to Jharkhand\'s industrial and tribal context.',
  programGroups:[
    {stream:'Law',programs:[
      {name:'B.A LL.B (Hons) (5-year Integrated)',exam:'CLAT',examCss:'ce-clat'},
      {name:'B.B.A LL.B (Hons) (5-year Integrated)',exam:'CLAT',examCss:'ce-clat'},
    ]},
  ]},

// ──────────────────────────────────────────────
// STATE GOVERNMENT
// ──────────────────────────────────────────────
{name:'BIT Sindri',short:'BIT Sindri',type:'State',district:'Dhanbad',state:'Jharkhand',
  naac:'A',nirf:'Top 100 Engineering',affil:'Vinoba Bhave University (est. 1949 — one of India\'s oldest Govt engineering colleges)',website:'bitsindri.ac.in',
  streams:['Engineering'],
  specialNote:'Established 1949. One of eastern India\'s oldest government engineering colleges. Well-regarded alumni network in core industries.',
  programGroups:[
    {stream:'Engineering & Technology',programs:[
      {name:'B.Tech (CSE, ECE, EEE, Mechanical, Civil, Chemical, Mining, Production)',exam:'JEE Main (state counselling)',examCss:'ce-jee'},
    ]},
  ]},

];
