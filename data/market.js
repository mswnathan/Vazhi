// Vazhi — Market Trends Data
// Edit this file to update trending courses, salary data, emerging opportunities

const TRENDING_COURSES=[
  {rank:1,name:'B.Tech CSE with AI/ML specialisation',why:'Every industry needs AI — demand exceeds supply by 4x',badge:'Explosive',bc:'coral'},
  {rank:2,name:'MBBS',why:'Healthcare expansion + doctor shortage post-COVID',badge:'Always High',bc:'green'},
  {rank:3,name:'IPM (IIM Indore / Rohtak)',why:'MBA from IIM at 22 — best shortcut in Indian education',badge:'Trending',bc:'accent'},
  {rank:4,name:'B.Sc Data Science',why:'11 million data professionals needed by 2026',badge:'High Demand',bc:'teal'},
  {rank:5,name:'NIFT — Fashion & Textile Design',why:'India becoming global fashion manufacturing hub',badge:'Rising',bc:'purple'},
  {rank:6,name:'B.Tech Aerospace — IIST',why:'Private space sector boom + ISRO guaranteed posting',badge:'Niche Star',bc:'coral'},
  {rank:7,name:'B.Sc Nursing (International)',why:'UK, Gulf, Australia actively recruiting Indian nurses',badge:'Global',bc:'teal'},
  {rank:8,name:'CA Foundation',why:'GST + global finance demand; only 3 lakh CAs for 1.4B people',badge:'Stable Star',bc:'green'},
  {rank:9,name:'Actuarial Science',why:'<500 Fellow Actuaries in India — massive shortage',badge:'Niche High Pay',bc:'purple'},
  {rank:10,name:'B.Sc Biotechnology / Genomics',why:'mRNA vaccines, CRISPR, Biotech India policy push',badge:'Emerging',bc:'green'},
  {rank:11,name:'B.Tech / BCA Cyber Security — RRU',why:'Cyber attacks on India up 300% YoY — only national security university offering this degree',badge:'High Demand',bc:'coral'},
  {rank:12,name:'Semiconductor & VLSI Design — B.Tech ECE / Engineering Physics',why:'India Semiconductor Mission: ₹76,000 cr govt push — massive talent shortage in chip design',badge:'India Mission',bc:'purple'},
  {rank:13,name:'B.Sc Blended Science (Physics + Chemistry + Maths)',why:'Flexible interdisciplinary degree opening paths across research, tech and global universities — rare in India',badge:'Emerging',bc:'teal'},
];

const SALARY_DATA=[
  {field:'IIT B.Tech (Top Branch)',min:12,max:35,label:'₹12–35 LPA'},
  {field:'CA / Chartered Accountancy',min:8,max:30,label:'₹8–30 LPA'},
  {field:'Actuarial Science',min:8,max:50,label:'₹8–50 LPA'},
  {field:'IPM → IIM MBA',min:12,max:40,label:'₹12–40 LPA'},
  {field:'MBBS (Post PG)',min:10,max:80,label:'₹10–80 LPA'},
  {field:'B.Des IIT (UX)',min:6,max:25,label:'₹6–25 LPA'},
  {field:'Merchant Navy',min:5,max:40,label:'₹5–40 LPA'},
  {field:'B.Sc Nursing Abroad',min:15,max:60,label:'₹15–60 LPA equiv'},
  {field:'NIT B.Tech',min:4,max:18,label:'₹4–18 LPA'},
  {field:'BPT Physiotherapy',min:3,max:12,label:'₹3–12 LPA'},
];

const OPPORTUNITIES=[
  {field:'Quantum Computing',reason:'National Quantum Mission — ₹6,000 Cr. Fewer than 200 trained people in India. Entry via IISERs / CMI.',score:5},
  {field:'AI / Machine Learning',reason:'Every sector needs AI engineers. 10x demand vs supply. IIT, IISER, private university grads all placed.',score:5},
  {field:'Space Technology',reason:'Private space sector: 200+ startups, ISRO scaling, IN-SPACe opened. IIST + Aerospace grads in demand.',score:4},
  {field:'Climate & Environmental Science',reason:'India committed ₹200 lakh Cr to net zero. Environmental scientists, green energy specialists in demand.',score:4},
  {field:'Genomics & Biotech',reason:'India BioE3 policy — 5x genomics research funding. Bioinformatics + biology combo rare but valuable.',score:4},
  {field:'Cybersecurity',reason:'14M+ daily cyber attacks on India. CEH and CISSP certified professionals earning ₹15-40 LPA starting.',score:5},
  {field:'UX / Product Design',reason:'UX is top-3 hired role in all tech companies. UCEED IIT designers getting ₹20–30 LPA starting.',score:4},
  {field:'Medical Physics / Radiology Tech',reason:'Healthcare sector growing 22% YoY. Every new hospital needs trained medical physicists and techs.',score:3},
  {field:'Sports Science & Analytics',reason:'IPL, ISL, Pro Kabaddi professionalising Indian sports. Performance analysts hired from US, now India building.',score:3},
  {field:'Actuarial Science',reason:'Only ~500 Fellow Actuaries for a country of 1.4B. Insurance, pension, risk sectors all growing.',score:5},
  {field:'Marine Engineering',reason:'India shipping tonnage +12% YoY. International salary equivalent ₹30-60 LPA after 3–4 years at sea.',score:4},
  {field:'Sustainable Architecture',reason:'Green building mandates, LEED certification demand, smart city projects. Architects + urban planners needed.',score:3},
  {field:'Semiconductor & Chip Design',reason:'India Semiconductor Mission: ₹76,000 Cr govt push. Micron, TATA, Foxconn fabs coming up — massive chip design talent shortage.',score:5},
  {field:'Electric Vehicle (EV) Technology',reason:'FAME-II policy + ₹18,000 Cr PLI. Tata, Ather, Ola Electric, Bharat Forge hiring B.Tech Mechanical & Electrical grads heavily.',score:5},
  {field:'Renewable Energy Technology',reason:'India target: 500 GW renewable by 2030. NTPC, SECI, ReNew hiring energy engineers — solar & wind boom just beginning.',score:4},
  {field:'Robotics & Automation',reason:'Manufacturing 4.0 + ISRO + DRDO driving demand. IITs & IISERs producing robotics researchers — fewer than 10,000 in India.',score:4},
  {field:'Drone Technology',reason:'India drone PLI scheme, DRDO UAV programme, 5,000+ startups by 2030. B.Tech ECE & Aerospace grads leading the field.',score:4},
  {field:'FinTech',reason:'India Stack + UPI processing $2 trillion/yr. SEBI sandbox, RBI innovation hub — CSE + Finance combo highly sought after.',score:4},
  {field:'Allied Health Specialisations',reason:'30+ clinical roles (Dialysis Tech, Physician Assistant, OT & Anaesthesia Tech, Medical Record Science) — every new corporate hospital needs a full allied health team. High demand, low awareness.',score:4},
];
