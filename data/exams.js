// Vazhi — Entrance Exams Data
// Edit this file to add/update entrance exams
// Schema: {id, label, ico, color, bg, exams:[{name, full, body, level, freq, subjects, for, website, note, seats, institutes}]}

const EXAM_GROUPS=[
{id:'Agriculture',label:'Agriculture, Veterinary & Forestry',ico:'🌾',color:'#0D6640',bg:'#E8F8EF',exams:[
  {name:'ICAR AIEEA UG',full:'ICAR All India Entrance Exam for Admission (UG)',body:'NTA / ICAR',level:'National',freq:'Once a year (Jun)',subjects:['PCB','PCMB','PCM','PCM+CS'],for:'B.Sc Agriculture, Horticulture, Fisheries, Forestry at ICAR universities.',website:'icar.org.in',note:'ICAR scholarship seats at top agricultural universities.',seats:'~2,000 (ICAR quota)',institutes:[
    {name:'IARI New Delhi (IARI-PUSA)',city:'New Delhi',tier:'🏆 Premier Agri'},
    {name:'TNAU Coimbatore',city:'Coimbatore, TN',tier:'🏆 Premier Agri'},
    {name:'UAS Bengaluru & Dharwad',city:'Karnataka',tier:'⭐ Excellent'},
    {name:'NDUAT Faizabad',city:'UP',tier:'⭐ Excellent'},
    {name:'All central agricultural universities',city:'Pan India',tier:'✓ ICAR Network'},
  ]},
  {name:'RAJUVAS RPVT',full:'Rajasthan Pre-Veterinary Test',body:'RAJUVAS',level:'State',freq:'Once a year',subjects:['PCB','PCMB'],for:'BVSc & AH at veterinary colleges in Rajasthan.',website:'rajuvas.org',note:'',seats:'~500',institutes:[
    {name:'RAJUVAS Bikaner',city:'Bikaner, RJ',tier:'⭐ State Vet'},
  ]},
  {name:'Rajasthan JET',full:'Joint Entrance Test, Rajasthan',body:'Agriculture University Jodhpur',level:'State',freq:'Once a year',subjects:['PCB','PCMB','PCM'],for:'B.Sc Agriculture at Agriculture University colleges in Rajasthan.',website:'jetraj.com',note:'',seats:'~2,000+',institutes:[
    {name:'Agriculture University Jodhpur',city:'Jodhpur, RJ',tier:'⭐ State Agri'},
    {name:'Agriculture University Kota, Bikaner',city:'Rajasthan',tier:'✓ State Agri'},
  ]},
  {name:'TNJFU Entrance',full:'Tamil Nadu Dr. J. Jayalalithaa Fisheries University Entrance Examination',body:'Tamil Nadu Fisheries University (TNJFU)',level:'State',freq:'Once a year (Jun–Jul)',subjects:['PCB','PCMB','PCM','PCM+CS'],for:'B.F.Sc, B.Tech Fisheries Engineering, B.Sc Nautical Science at TNJFU constituent colleges across Tamil Nadu.',website:'tnfu.ac.in',note:'TN state quota seats. ICAR AIEEA UG also accepted for ICAR quota seats. Blue economy careers — fisheries, aquaculture, nautical science.',seats:'~500 seats total',institutes:[
    {name:'Fisheries College & Research Institute, Thoothukudi',city:'Thoothukudi, TN',tier:'🏆 Premier Fisheries'},
    {name:'Fisheries College & Research Institute, Nagapattinam',city:'Nagapattinam, TN',tier:'🏆 HQ Campus'},
    {name:'Dr. M.G.R. Fisheries College & Research Institute, Chennai',city:'Chennai, TN',tier:'⭐ Excellent'},
    {name:'Constituent Colleges — Ponneri, Parakkai',city:'Tamil Nadu',tier:'✓ TNJFU Network'},
  ]},
]},
{id:'Commerce',label:'Commerce & Professional Courses',ico:'💹',color:'#0D6640',bg:'#E8F8EF',exams:[
  {name:'CA Foundation',full:'Chartered Accountancy Foundation',body:'ICAI',level:'Professional',freq:'Twice a year (May & Nov)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'Entry to CA course — leads to CA Intermediate then CA Final.',website:'icai.org',note:'No stream restriction. Articleship at Big4, CA firms, corporates across India.',seats:'Open — no seat limit',institutes:[
    {name:'Big 4 — Deloitte, EY, PwC, KPMG (articleship)',city:'Pan India',tier:'🏆 Top Firms'},
    {name:'Mid-size CA firms (articleship)',city:'Pan India',tier:'⭐ Good exposure'},
    {name:'Corporates (internal audit articleship)',city:'Pan India',tier:'✓ Industry exposure'},
  ]},
  {name:'CS Foundation',full:'Company Secretary Foundation',body:'ICSI',level:'Professional',freq:'Twice a year (Jun & Dec)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'Entry to CS program — can be pursued alongside any UG degree.',website:'icsi.edu',note:'',seats:'Open',institutes:[
    {name:'ICSI Regional Offices — Training',city:'Delhi, Mumbai, Kolkata, Chennai',tier:'✓ Professional body'},
  ]},
  {name:'CMA Foundation',full:'Cost & Management Accountancy Foundation',body:'ICMAI',level:'Professional',freq:'Twice a year (Jun & Dec)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'Entry to Cost Accountancy.',website:'icmai.in',note:'',seats:'Open',institutes:[
    {name:'ICMAI Regional Centres',city:'Pan India',tier:'✓ Professional body'},
  ]},
]},
{id:'Defence',label:'Defence & Maritime',ico:'🪖',color:'#18160F',bg:'#EDEBE5',exams:[
  {name:'AISSEE',full:'All India Sainik School Entrance Examination',body:'NTA',level:'National',freq:'Once a year (Jan)',subjects:['PCM','PCM+CS','PCB','PCMB','Any'],for:'Class 6 & Class 9 entry to 33 Sainik Schools across India. The Sainik School → NDA pipeline is India\'s most structured defence career path.',website:'sainikschooladmission.in',note:'Not a direct UG exam — but starting at Class 6 in a Sainik School prepares students specifically for NDA. Tamil Nadu has Sainik School Amaravathinagar in Coimbatore.',seats:'~7,000 across all 33 schools',institutes:[
    {name:'Sainik School Amaravathinagar',city:'Coimbatore, TN',tier:'🏆 TN Sainik School'},
    {name:'Sainik School Rewari, Tilaiya, Kazhakootam + 30 more',city:'Pan India (33 schools)',tier:'✓ Sainik School Network'},
  ]},
  {name:'NDA & NA',full:'National Defence Academy & Naval Academy Examination',body:'UPSC',level:'National',freq:'Twice a year (Apr & Sep)',subjects:['PCM','PCM+CS','PCB','PCMB'],for:'Army, Navy & Air Force wings after Class 12. PCM mandatory for Navy & Air Force.',website:'upsc.gov.in',note:'PCM required for Navy & Air Force. Army open to all streams. SSB interview after written.',seats:'~400 per cycle',institutes:[
    {name:'National Defence Academy',city:'Khadakwasla, Pune, MH',tier:'🏆 Most Prestigious'},
    {name:'Naval Academy',city:'Ezhimala, Kerala',tier:'🏆 Naval Training'},
    {name:'Indian Military Academy (after NDA)',city:'Dehradun, UK',tier:'🏆 Army Commission'},
    {name:'Air Force Academy (after NDA)',city:'Dundigal, TS',tier:'🏆 Air Force Commission'},
  ]},
  {name:'IMU CET',full:'Indian Maritime University Common Entrance Test',body:'Indian Maritime University',level:'National',freq:'Once a year (May)',subjects:['PCM','PCM+CS'],for:'B.Tech Marine Engg, B.Sc Nautical Science, B.Sc Ship Building & other maritime programs.',website:'imu.edu.in',note:'PCM mandatory. Physical & medical fitness required. International career at sea. All maritime programs are DGS (Director General of Shipping) approved — this approval is mandatory for a career as a seafarer under Indian maritime law.',seats:'~2,000 total',institutes:[
    {name:'IMU Chennai',city:'Chennai, TN',tier:'🏆 Flagship Campus'},
    {name:'IMU Kolkata',city:'Kolkata, WB',tier:'⭐ Top Campus'},
    {name:'IMU Mumbai',city:'Mumbai, MH',tier:'⭐ Top Campus'},
    {name:'IMU Kochi',city:'Kochi, KL',tier:'⭐ Top Campus'},
    {name:'IMU Visakhapatnam',city:'Vizag, AP',tier:'✓ Good Campus'},
  ]},
  {name:'Coast Guard Navik / Yantrik',full:'Indian Coast Guard Navik & Yantrik Recruitment',body:'Indian Coast Guard',level:'National',freq:'Twice a year',subjects:['PCM','PCM+CS'],for:'Navik (GD & DB) & Yantrik (technical) entry in Indian Coast Guard after Class 12.',website:'joinindiancoastguard.cdac.in',note:'Written + physical + medical. PCM required for Yantrik technical branch.',seats:'~300 per cycle',institutes:[
    {name:'Coast Guard District HQs & Ships',city:'All coastal states',tier:'✓ After training at CG Academy'},
    {name:'Coast Guard Academy',city:'Azhikkal, KL',tier:'🏆 Training Academy'},
  ]},
]},
{id:'Design',label:'Design & Architecture',ico:'✏',color:'#855100',bg:'#FFF5E0',exams:[
  {name:'UCEED',full:'Undergraduate Common Entrance Exam for Design',body:'IIT Bombay',level:'National',freq:'Once a year (Jan)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'B.Des at IITs — open to all streams, no PCM requirement.',website:'uceed.iitb.ac.in',note:'Tests visual perception, drawing, logical reasoning. No PCM requirement — any stream eligible.',seats:'~180 total',institutes:[
    {name:'IIT Bombay (IDC School of Design)',city:'Mumbai, MH',tier:'🏆 Premier Design'},
    {name:'IIT Guwahati',city:'Guwahati, AS',tier:'🏆 Premier Design'},
    {name:'IIT Hyderabad',city:'Hyderabad, TS',tier:'⭐ Excellent'},
    {name:'IITDM Jabalpur',city:'Jabalpur, MP',tier:'✓ Good'},
  ]},
  {name:'NID DAT',full:'National Institute of Design Aptitude Test',body:'NID Ahmedabad',level:'National',freq:'Once a year (Jan)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'B.Des at NID campuses across India.',website:'admissions.nid.edu',note:'Studio test + written. Tests creative thinking, observation, design sense.',seats:'~350 total (all NIDs)',institutes:[
    {name:'NID Ahmedabad',city:'Ahmedabad, GJ',tier:'🏆 #1 Design School'},
    {name:'NID Gandhinagar',city:'Gandhinagar, GJ',tier:'🏆 Premier'},
    {name:'NID Bengaluru',city:'Bengaluru, KA',tier:'🏆 Premier'},
    {name:'NID Jorhat, Amaravati, Kurukshetra + others',city:'Pan India',tier:'✓ NID Network'},
  ]},
  {name:'NIFT Entrance',full:'National Institute of Fashion Technology Entrance',body:'NTA',level:'National',freq:'Once a year (Feb)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'B.Des & B.F.Tech at 17 NIFT campuses across India.',website:'nift.ac.in',note:'GAT (written) + CAT (creative ability) + situation test. Any stream eligible.',seats:'~4,000 (all NIFTs)',institutes:[
    {name:'NIFT New Delhi',city:'New Delhi',tier:'🏆 Top NIFT'},
    {name:'NIFT Mumbai',city:'Mumbai, MH',tier:'🏆 Top NIFT'},
    {name:'NIFT Bengaluru',city:'Bengaluru, KA',tier:'🏆 Top NIFT'},
    {name:'NIFT Chennai',city:'Chennai, TN',tier:'⭐ Excellent'},
    {name:'NIFT Hyderabad',city:'Hyderabad, TS',tier:'⭐ Excellent'},
    {name:'NIFT Kolkata, Gandhinagar, Patna + 11 more',city:'Pan India',tier:'✓ NIFT Network (17 campuses)'},
  ]},
  {name:'FDDI AIST',full:'Footwear Design & Development Institute All India Selection Test',body:'FDDI',level:'National',freq:'Once a year (Apr)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'B.Des Footwear Design, Fashion Design & Fashion Management at FDDI campuses.',website:'fddiindia.com',note:'',seats:'~1,000+',institutes:[
    {name:'FDDI Noida',city:'Noida, UP',tier:'⭐ Top FDDI'},
    {name:'FDDI Chennai',city:'Chennai, TN',tier:'⭐ Top FDDI'},
    {name:'FDDI Kolkata, Chhindwara, Fulapur, Rohtak + others',city:'Pan India',tier:'✓ FDDI Network'},
  ]},
]},
{id:'Engineering',label:'Engineering & Technology',ico:'⚙',color:'#1A4DD6',bg:'#EBF0FF',exams:[
  {name:'JEE Advanced',full:'Joint Entrance Examination Advanced',body:'IIT Council / NTA',level:'National',freq:'Once a year (May–June)',subjects:['PCM','PCM+CS','PCMB'],for:'B.Tech / B.E / B.S at all 23 IITs. Must qualify JEE Main first (top 2.5 lakh).',website:'jeeadv.ac.in',note:'Hardest engineering exam in India. ~1.8 lakh appear, ~17,000 qualify.',seats:'~17,000 (IITs)',institutes:[
    {name:'IIT Bombay',city:'Mumbai, MH',tier:'🏆 Premier'},
    {name:'IIT Delhi',city:'New Delhi',tier:'🏆 Premier'},
    {name:'IIT Madras',city:'Chennai, TN',tier:'🏆 Premier'},
    {name:'IIT Kanpur',city:'Kanpur, UP',tier:'🏆 Premier'},
    {name:'IIT Kharagpur',city:'Kharagpur, WB',tier:'🏆 Premier'},
    {name:'IIT Roorkee',city:'Roorkee, UK',tier:'🏆 Premier'},
    {name:'IIT Hyderabad',city:'Hyderabad, TS',tier:'🏆 Premier'},
    {name:'IIT Guwahati',city:'Guwahati, AS',tier:'🏆 Premier'},
    {name:'IIT BHU',city:'Varanasi, UP',tier:'⭐ Excellent'},
    {name:'IIT Indore',city:'Indore, MP',tier:'⭐ Excellent'},
    {name:'IIT Gandhinagar',city:'Gandhinagar, GJ',tier:'⭐ Excellent'},
    {name:'IIT Patna, Mandi, Tirupati + 11 more IITs',city:'Various',tier:'✓ Good'},
    {name:'IIST Thiruvananthapuram',city:'Kerala (via JEE Adv)',tier:'🚀 ISRO Guaranteed'},
  ]},
  {name:'JEE Main',full:'Joint Entrance Examination Main',body:'NTA',level:'National',freq:'Twice a year (Jan & Apr)',subjects:['PCM','PCM+CS','PCMB'],for:'NITs, IIITs, GFTIs, state colleges & gateway to JEE Advanced. Paper 2 for B.Arch & B.Planning.',website:'jeemain.nta.nic.in',note:'~12 lakh appear each session. Best of two scores counted. Rank < 2,500 for top NIT CSE.',seats:'~40,000 NITs + 15,000 IIITs + state',institutes:[
    {name:'NIT Trichy',city:'Tiruchirappalli, TN',tier:'🏆 Top NIT'},
    {name:'NIT Warangal',city:'Warangal, TS',tier:'🏆 Top NIT'},
    {name:'NIT Surathkal',city:'Mangaluru, KA',tier:'🏆 Top NIT'},
    {name:'NIT Calicut',city:'Kozhikode, KL',tier:'🏆 Top NIT'},
    {name:'NIT Rourkela',city:'Rourkela, OD',tier:'⭐ Excellent NIT'},
    {name:'IIIT Hyderabad',city:'Hyderabad, TS',tier:'🏆 Top IIIT'},
    {name:'IIIT Delhi',city:'New Delhi',tier:'🏆 Top IIIT'},
    {name:'IIIT Allahabad',city:'Prayagraj, UP',tier:'⭐ Excellent IIIT'},
    {name:'All 31 NITs across India',city:'Various states',tier:'✓ NIT Network'},
    {name:'All 26 IIITs (Govt & PPP)',city:'Various states',tier:'✓ IIIT Network'},
    {name:'DTU, NSUT, IGDTUW (Delhi)',city:'New Delhi',tier:'⭐ Excellent State'},
  ]},
  {name:'BITSAT',full:'BITS Admission Test',body:'BITS Pilani',level:'Private',freq:'Once a year (May–June)',subjects:['PCM','PCM+CS','PCMB'],for:'B.Tech / B.E / M.Sc (Hons) / B.Pharm at BITS Pilani, BITS Goa, BITS Hyderabad.',website:'bitsadmission.com',note:'Online test. 12th toppers with 75%+ aggregate can get direct admission (BITSAT score still needed).',seats:'~3,500 total',institutes:[
    {name:'BITS Pilani',city:'Pilani, RJ',tier:'🏆 Premier Private'},
    {name:'BITS Goa',city:'Goa',tier:'🏆 Premier Private'},
    {name:'BITS Hyderabad',city:'Hyderabad, TS',tier:'🏆 Premier Private'},
  ]},
  {name:'IIST Entrance',full:'Indian Institute of Space Science and Technology Admission',body:'IIST / ISRO',level:'National',freq:'Once a year (Jun, via JEE Advanced rank)',subjects:['PCM','PCM+CS'],for:'B.Tech at IIST Thiruvananthapuram — India\'s only dedicated space technology university under ISRO.',website:'iist.ac.in',note:'Admission via JEE Advanced rank + IIST cutoff. Graduates bonded to ISRO for 5 years of service. Fully funded by Govt of India — fees, hostel subsidised.',seats:'~120 seats',institutes:[
    {name:'IIST Thiruvananthapuram',city:'Thiruvananthapuram, KL',tier:'🚀 Govt Space Univ (ISRO)'},
  ]},
  {name:'MHT CET',full:'Maharashtra Common Entrance Test',body:'State CET Cell, Maharashtra',level:'State',freq:'Once a year (Apr–May)',subjects:['PCM','PCM+CS','PCMB'],for:'Engineering & Pharmacy colleges in Maharashtra.',website:'cetcell.mahacet.org',note:'PCM for Engineering. PCB for Pharmacy. Separate papers.',seats:'~1.5 lakh+',institutes:[
    {name:'COEP Technological University',city:'Pune, MH',tier:'🏆 Top Govt MH'},
    {name:'VJTI Mumbai',city:'Mumbai, MH',tier:'🏆 Top Govt MH'},
    {name:'ICT Mumbai',city:'Mumbai, MH',tier:'⭐ Excellent'},
    {name:'SPPU-affiliated colleges',city:'Pune region',tier:'✓ State colleges'},
    {name:'Mumbai University affiliated colleges',city:'Mumbai & suburbs',tier:'✓ State colleges'},
    {name:'All MH Govt & private engg colleges',city:'Maharashtra',tier:'✓ Wide access'},
  ]},
  {name:'KCET',full:'Karnataka Common Entrance Test',body:'KEA Karnataka',level:'State',freq:'Once a year (Apr–May)',subjects:['PCM','PCM+CS','PCMB'],for:'Govt & aided engineering, pharmacy, agriculture colleges in Karnataka.',website:'kea.kar.nic.in',note:'Kannada medium students get additional weightage.',seats:'~70,000+',institutes:[
    {name:'NIE Mysore',city:'Mysuru, KA',tier:'⭐ Excellent Govt'},
    {name:'All govt & aided engg colleges in KA',city:'Karnataka',tier:'✓ Wide access'},
  ]},
  {name:'WBJEE',full:'West Bengal Joint Entrance Exam',body:'WBJEEB',level:'State',freq:'Once a year (Apr)',subjects:['PCM','PCM+CS','PCMB'],for:'Engineering & pharmacy colleges in West Bengal.',website:'wbjeeb.nic.in',note:'',seats:'~30,000+',institutes:[
    {name:'Jadavpur University',city:'Kolkata, WB',tier:'🏆 Premier State'},
    {name:'IIEST Shibpur',city:'Howrah, WB',tier:'⭐ Excellent'},
    {name:'Presidency University',city:'Kolkata, WB',tier:'⭐ Excellent'},
    {name:'All WB govt & private engg colleges',city:'West Bengal',tier:'✓ Wide access'},
  ]},
  {name:'KEAM',full:'Kerala Engineering Architecture Medical',body:'CEE Kerala',level:'State',freq:'Once a year (Apr–May)',subjects:['PCM','PCM+CS','PCMB'],for:'Engineering, architecture & pharmacy colleges in Kerala.',website:'cee.kerala.gov.in',note:'',seats:'~30,000+',institutes:[
    {name:'College of Engineering Thiruvananthapuram (CET)',city:'TVM, KL',tier:'🏆 Top Govt KL'},
    {name:'NIT Calicut (via KEAM for KL quota)',city:'Kozhikode, KL',tier:'🏆 NIT'},
    {name:'CUSAT Cochin',city:'Kochi, KL',tier:'⭐ Excellent'},
    {name:'All Kerala govt & aided engg colleges',city:'Kerala',tier:'✓ Wide access'},
  ]},
  {name:'AP EAPCET',full:'AP Engineering Agriculture & Pharmacy CET',body:'JNTU Kakinada',level:'State',freq:'Once a year (May)',subjects:['PCM','PCM+CS','PCMB'],for:'Engineering, agriculture & pharmacy colleges in Andhra Pradesh.',website:'sche.ap.gov.in',note:'',seats:'~1 lakh+',institutes:[
    {name:'JNTU Kakinada',city:'Kakinada, AP',tier:'⭐ Top Govt AP'},
    {name:'AU College of Engineering',city:'Visakhapatnam, AP',tier:'⭐ Top Govt AP'},
    {name:'All AP govt & private engg colleges',city:'Andhra Pradesh',tier:'✓ Wide access'},
  ]},
  {name:'TS EAMCET',full:'Telangana State EAMCET',body:'JNTU Hyderabad',level:'State',freq:'Once a year (May)',subjects:['PCM','PCM+CS','PCMB'],for:'Engineering, agriculture & medicine in Telangana.',website:'eamcet.tsche.ac.in',note:'',seats:'~1.2 lakh+',institutes:[
    {name:'Osmania University',city:'Hyderabad, TS',tier:'⭐ Top Govt TS'},
    {name:'JNTU Hyderabad',city:'Hyderabad, TS',tier:'⭐ Top Govt TS'},
    {name:'All TS govt & aided engg colleges',city:'Telangana',tier:'✓ Wide access'},
  ]},
  {name:'TANCET',full:'Tamil Nadu Common Entrance Test',body:'Anna University',level:'State',freq:'Once a year (Mar)',subjects:['PCM','PCM+CS','PCMB'],for:'PG & lateral entry at Anna University affiliated colleges. UG admission in TN is via TNEA (Class 12 marks only).',website:'annauniv.edu/tancet',note:'For TN UG B.Tech — no entrance exam needed! TNEA counselling uses Class 12 cutoff marks.',seats:'TN UG via TNEA cutoff',institutes:[
    {name:'Anna University (MIT, CEG, ACT campuses)',city:'Chennai, TN',tier:'🏆 Top Govt TN'},
    {name:'PSG College of Technology',city:'Coimbatore, TN',tier:'🏆 Top Private TN'},
    {name:'Coimbatore Institute of Technology',city:'Coimbatore, TN',tier:'⭐ Excellent TN'},
    {name:'SSN College of Engineering',city:'Chennai, TN',tier:'⭐ Excellent TN'},
    {name:'All 500+ Anna University affiliated colleges',city:'Tamil Nadu',tier:'✓ Via TNEA cutoff marks'},
  ]},
  {name:'GUJCET',full:'Gujarat Common Entrance Test',body:'GSEB Gujarat',level:'State',freq:'Once a year (Mar–Apr)',subjects:['PCM','PCM+CS','PCMB'],for:'Engineering & pharmacy colleges in Gujarat.',website:'gseb.org',note:'',seats:'~60,000+',institutes:[
    {name:'LD College of Engineering',city:'Ahmedabad, GJ',tier:'🏆 Top Govt GJ'},
    {name:'DAIICT',city:'Gandhinagar, GJ',tier:'⭐ Excellent'},
    {name:'All GJ govt & aided engg colleges',city:'Gujarat',tier:'✓ Wide access'},
  ]},
  {name:'OJEE',full:'Odisha Joint Entrance Exam',body:'OJEE Board',level:'State',freq:'Once a year (May)',subjects:['PCM','PCM+CS','PCMB'],for:'Engineering, pharmacy & lateral entry programs in Odisha.',website:'ojee.nic.in',note:'',seats:'~20,000+',institutes:[
    {name:'BPUT-affiliated govt & aided colleges',city:'Odisha',tier:'✓ State colleges'},
  ]},
  {name:'NATA',full:'National Aptitude Test in Architecture',body:'Council of Architecture',level:'National',freq:'Twice a year',subjects:['PCM','PCM+CS','Any'],for:'B.Arch at architecture colleges across India (NITs use JEE Main Paper 2 instead).',website:'nata.in',note:'Tests drawing, aesthetic sensitivity & logical reasoning. No PCM requirement.',seats:'~10,000+ seats across India',institutes:[
    {name:'SPA Delhi (School of Planning & Architecture)',city:'New Delhi',tier:'🏆 Premier'},
    {name:'SPA Bhopal & Vijayawada',city:'MP & AP',tier:'🏆 Premier'},
    {name:'CEPT University',city:'Ahmedabad, GJ',tier:'🏆 Premier'},
    {name:'Chandigarh College of Architecture',city:'Chandigarh',tier:'⭐ Excellent'},
    {name:'500+ private architecture colleges',city:'Pan India',tier:'✓ Via NATA score'},
  ]},
]},
{id:'University',label:'Central & State University Admissions',ico:'🏛️',color:'#1A4DD6',bg:'#EEF2FF',exams:[
  {name:'CUET UG',full:'Common University Entrance Test (Undergraduate)',body:'NTA',level:'National',freq:'Once a year (May–Jun)',subjects:['PCM','PCB','PCMB','Commerce','Arts','Any'],for:'Class 12 students seeking admission to UG programs (BA, B.Sc, B.Com, B.Voc, B.Tech) at Central Universities and participating state universities across India.',website:'cuet.nta.nic.in',note:'Replaced individual university entrance tests for DU, JNU, BHU, Hyderabad Central, Pondicherry Central, AMU and 40+ others. Score valid for one year. Any stream eligible depending on domain subjects chosen.',seats:'~1 lakh+ seats across 250+ universities',institutes:[
    {name:'Delhi University (DU)',city:'New Delhi',tier:'🏆 Premier Central Univ'},
    {name:'JNU',city:'New Delhi',tier:'🏆 Premier Central Univ'},
    {name:'BHU (Banaras Hindu University)',city:'Varanasi, UP',tier:'🏆 Premier Central Univ'},
    {name:'Hyderabad Central University',city:'Hyderabad, TS',tier:'🏆 Premier Central Univ'},
    {name:'Pondicherry Central University',city:'Puducherry',tier:'⭐ In TN/PY scope'},
    {name:'AMU (Aligarh Muslim University)',city:'Aligarh, UP',tier:'⭐ Central Univ'},
    {name:'EFLU, TISS, Jamia Millia, NIT Arunachal + 240 more',city:'Pan India',tier:'✓ 250+ Participating Universities'},
  ]},
  {name:'TISS BAT',full:'Tata Institute of Social Sciences Bachelors Admission Test',body:'TISS',level:'Institute',freq:'Once a year (Jan–Feb)',subjects:['Any'],for:'Class 12 students seeking BA programs in Social Work, Development Studies, Education, and Applied Psychology at TISS.',website:'tiss.edu',note:'Centrally funded deemed university with subsidised fees. Highly competitive — tests general awareness, English & analytical reasoning. One of India\'s most prestigious social science institutions.',seats:'~300 seats across campuses',institutes:[
    {name:'TISS Mumbai (Main Campus)',city:'Mumbai, MH',tier:'🏆 Premier Deemed Univ'},
    {name:'TISS Hyderabad Off-Campus',city:'Hyderabad, TS',tier:'⭐ Off-Campus Centre'},
    {name:'TISS Guwahati Off-Campus',city:'Guwahati, AS',tier:'⭐ Off-Campus Centre'},
    {name:'TISS Tuljapur Off-Campus',city:'Osmanabad, MH',tier:'⭐ Off-Campus Centre'},
  ]},
  {name:'PUCET UG',full:'Pondicherry University Common Entrance Test (UG)',body:'Pondicherry University',level:'State',freq:'Once a year (Jun)',subjects:['PCM','PCB','Commerce','Arts','Any'],for:'Class 12 students seeking admission to B.Sc, BA, B.Com, BCA and integrated programs at Pondicherry University.',website:'pondiuni.edu.in',note:'Central University in Puducherry — directly relevant for TN/PY students. Also accepts CUET scores for some programs. Covers sciences, humanities, commerce, and computer applications.',seats:'~2,000 UG seats',institutes:[
    {name:'Pondicherry University',city:'Puducherry',tier:'🏆 Central Univ (in PY scope)'},
  ]},
]},
{id:'Arts',label:'Fine Arts, Performing Arts & Media',ico:'🎨',color:'#581F9E',bg:'#F2EBFF',exams:[
  {name:'FTII JET',full:'Film & Television Institute of India Joint Entrance Test',body:'FTII Pune',level:'National',freq:'Once a year (Mar)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'Film direction, cinematography, editing, sound, TV content at FTII Pune.',website:'ftiindia.com',note:'Written + interview. Tests cinematic awareness & creativity. No stream restriction.',seats:'~100',institutes:[
    {name:'FTII Pune',city:'Pune, MH',tier:'🏆 India\'s Premier Film School'},
  ]},
  {name:'SRFTI Entrance',full:'Satyajit Ray Film & Television Institute Entrance',body:'SRFTI Kolkata',level:'National',freq:'Once a year',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'Film & television production programs at SRFTI Kolkata.',website:'srfti.ac.in',note:'',seats:'~60',institutes:[
    {name:'Satyajit Ray Film & Television Institute',city:'Kolkata, WB',tier:'🏆 Premier Film School'},
  ]},
  {name:'NSD Entrance',full:'National School of Drama Entrance Test',body:'NSD New Delhi',level:'National',freq:'Once a year',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'3-year Theatre Arts diploma at NSD New Delhi.',website:'nsd.gov.in',note:'Audition + interview based. Any stream eligible.',seats:'~30',institutes:[
    {name:'National School of Drama',city:'New Delhi',tier:'🏆 Premier Theatre School'},
  ]},
  {name:'IIMC Entrance',full:'Indian Institute of Mass Communication Entrance',body:'IIMC New Delhi',level:'National',freq:'Once a year (Mar–Apr)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'PG Diploma in Journalism, Advertising, Hindi Journalism at IIMC. (UG: XIC, ACJ have own tests.)',website:'iimc.nic.in',note:'Primarily PG. For UG media — XIC Mumbai & ACJ Chennai conduct separate own tests.',seats:'~200 (PG programs)',institutes:[
    {name:'IIMC New Delhi (main)',city:'New Delhi',tier:'🏆 Premier Media School'},
    {name:'IIMC regional centres — Dhenkanal, Aizawl, Jammu, Amravati, Kottayam',city:'Pan India',tier:'✓ IIMC Network'},
    {name:'XIC Mumbai (UG — own test)',city:'Mumbai, MH',tier:'🏆 Top UG Media'},
    {name:'ACJ Chennai (UG — own test)',city:'Chennai, TN',tier:'🏆 Top UG Media'},
  ]},
]},
{id:'Hotel',label:'Hotel Management & Hospitality',ico:'🏨',color:'#855100',bg:'#FFF5E0',exams:[
  {name:'NCHM JEE',full:'National Council for Hotel Management Joint Entrance Exam',body:'NTA',level:'National',freq:'Once a year (Apr)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'B.Sc Hospitality & Hotel Administration at 21 Central IHMs. Any stream eligible.',website:'nchmct.org',note:'No stream restriction. Tests numerical ability, reasoning, English, GK.',seats:'~7,000 (all IHMs)',institutes:[
    {name:'IHM Pusa New Delhi',city:'New Delhi',tier:'🏆 #1 IHM'},
    {name:'IHM Mumbai',city:'Mumbai, MH',tier:'🏆 Top IHM'},
    {name:'IHM Bengaluru',city:'Bengaluru, KA',tier:'🏆 Top IHM'},
    {name:'IHM Chennai',city:'Chennai, TN',tier:'🏆 Top IHM'},
    {name:'IHM Hyderabad',city:'Hyderabad, TS',tier:'⭐ Excellent IHM'},
    {name:'IHM Kolkata',city:'Kolkata, WB',tier:'⭐ Excellent IHM'},
    {name:'IHM Chandigarh, Jaipur, Bhopal + 14 more IHMs',city:'Pan India',tier:'✓ IHM Network (21 IHMs)'},
  ]},
  {name:'IIAT',full:'IITTM Admission Aptitude Test',body:'Indian Institute of Tourism and Travel Management (Ministry of Tourism, Govt of India)',level:'National',freq:'Once a year (Apr)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'BBA (Tourism & Travel Management) — 3-year UG program at IITTM campuses: Gwalior, Bhubaneswar, Nellore (closest to TN), Noida, Goa.',website:'iittm.ac.in',note:'Any stream eligible. CUET-UG score also accepted as alternative to IIAT. Nearest campus to Tamil Nadu is Nellore, AP (~5–6 hrs from Chennai).',seats:'~300 across all campuses',institutes:[
    {name:'IITTM Gwalior (Main Campus)',city:'Gwalior, MP',tier:'🏆 Flagship'},
    {name:'IITTM Nellore (South India Campus)',city:'Nellore, AP',tier:'⭐ Nearest to TN'},
    {name:'IITTM Bhubaneswar',city:'Bhubaneswar, OD',tier:'⭐ Excellent'},
    {name:'IITTM Noida',city:'Noida, UP',tier:'⭐ Excellent'},
    {name:'IITTM Goa',city:'Goa',tier:'⭐ Excellent'},
  ]},
  {name:'AIHMCT WAT',full:'Army Institute of Hotel Management & Catering Technology Written Aptitude Test',body:'Army IHM Bengaluru',level:'Institute',freq:'Once a year',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'BHM at Army IHM, Bengaluru.',website:'aihmctbangalore.com',note:'',seats:'~120',institutes:[
    {name:'Army IHM Bengaluru',city:'Bengaluru, KA',tier:'⭐ Unique — Army HM'},
  ]},
]},
{id:'Law',label:'Law',ico:'⚖',color:'#18160F',bg:'#EDEBE5',exams:[
  {name:'CLAT',full:'Common Law Admission Test',body:'Consortium of National Law Universities',level:'National',freq:'Once a year (Dec)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'BA LLB / BBA LLB (5-year) at all 25 National Law Universities.',website:'consortiumofnlus.ac.in',note:'No stream restriction. Maths PCM background helps logical reasoning section.',seats:'~3,000 (all NLUs)',institutes:[
    {name:'NLSIU Bengaluru',city:'Bengaluru, KA',tier:'🏆 #1 NLU'},
    {name:'NALSAR Hyderabad',city:'Hyderabad, TS',tier:'🏆 #2 NLU'},
    {name:'NUJS Kolkata',city:'Kolkata, WB',tier:'🏆 #3 NLU'},
    {name:'NLU Jodhpur',city:'Jodhpur, RJ',tier:'🏆 Top 5 NLU'},
    {name:'NLIU Bhopal',city:'Bhopal, MP',tier:'⭐ Top 10 NLU'},
    {name:'RGNUL, GNLU, RMLNLU + 19 more NLUs',city:'Pan India',tier:'✓ NLU Network'},
  ]},
  {name:'AILET',full:'All India Law Entrance Test',body:'NLU Delhi',level:'National',freq:'Once a year (Dec)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'BA LLB at NLU Delhi only — ~80 seats, separate from CLAT.',website:'nludelhi.ac.in',note:'NLU Delhi is not in CLAT consortium. Separate exam required.',seats:'~80 (UG)',institutes:[
    {name:'NLU Delhi',city:'New Delhi',tier:'🏆 Premier NLU'},
  ]},
  {name:'MH CET Law',full:'Maharashtra CET for Law',body:'State CET Cell Maharashtra',level:'State',freq:'Once a year (May)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'5-year and 3-year law programs in Maharashtra.',website:'cetcell.mahacet.org',note:'',seats:'~5,000+',institutes:[
    {name:'Govt Law College Mumbai',city:'Mumbai, MH',tier:'🏆 Top Govt MH'},
    {name:'ILS Law College Pune',city:'Pune, MH',tier:'⭐ Excellent'},
    {name:'All MH law colleges',city:'Maharashtra',tier:'✓ Wide access'},
  ]},
  {name:'AP & TS LAWCET',full:'AP & Telangana Law Common Entrance Test',body:'SCHE AP / TSCHE',level:'State',freq:'Once a year',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'Law colleges in Andhra Pradesh & Telangana.',website:'lawcet.tsche.ac.in',note:'',seats:'~5,000+',institutes:[
    {name:'NALSAR Hyderabad (TS quota)',city:'Hyderabad, TS',tier:'🏆 Premier'},
    {name:'AU Law College',city:'Visakhapatnam, AP',tier:'⭐ Excellent'},
    {name:'All AP & TS law colleges',city:'AP & Telangana',tier:'✓ Wide access'},
  ]},
]},
{id:'Management',label:'Management, BBA & Integrated MBA',ico:'📊',color:'#0D6640',bg:'#E8F8EF',exams:[
  {name:'IPMAT Indore',full:'Integrated Program in Management Aptitude Test',body:'IIM Indore',level:'National',freq:'Once a year (May)',subjects:['PCM','PCM+CS','Commerce+Maths'],for:'5-year IPM — BBA + MBA from IIM Indore.',website:'iimindore.ac.in',note:'QA + VA sections. Maths heavily tested. ~50,000 appear for ~150 seats.',seats:'~150',institutes:[
    {name:'IIM Indore',city:'Indore, MP',tier:'🏆 IIM — MBA at 22'},
  ]},
  {name:'IPMAT Rohtak',full:'Integrated Program in Management Aptitude Test',body:'IIM Rohtak',level:'National',freq:'Once a year (May)',subjects:['PCM','PCM+CS','Commerce+Maths'],for:'5-year IPM at IIM Rohtak.',website:'iimrohtak.ac.in',note:'',seats:'~120',institutes:[
    {name:'IIM Rohtak',city:'Rohtak, HR',tier:'🏆 IIM — MBA at 22'},
  ]},
  {name:'JIPMAT',full:'Joint Integrated Program in Management Aptitude Test',body:'NTA',level:'National',freq:'Once a year (June)',subjects:['PCM','PCM+CS','Commerce+Maths'],for:'5-year IPM at IIM Jammu & IIM Bodh Gaya.',website:'jipmat.nta.nic.in',note:'One test, two IIM campuses.',seats:'~200 (both)',institutes:[
    {name:'IIM Jammu',city:'Jammu, J&K',tier:'🏆 IIM — MBA at 22'},
    {name:'IIM Bodh Gaya',city:'Bodh Gaya, BR',tier:'🏆 IIM — MBA at 22'},
  ]},
  {name:'UGAT',full:'Under Graduate Aptitude Test',body:'AIMA',level:'National',freq:'Once a year (May)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'BBA, BHM, BCA at AIMA-affiliated colleges.',website:'aima.in',note:'',seats:'Many seats across affiliates',institutes:[
    {name:'AIMA-affiliated BBA colleges',city:'Pan India',tier:'✓ Wide access'},
  ]},
]},
{id:'Medical',label:'Medical, Dental, Nursing & AYUSH',ico:'🩺',color:'#BC2D12',bg:'#FFEDE8',exams:[
  {name:'NEET UG',full:'National Eligibility cum Entrance Test Undergraduate',body:'NTA',level:'National',freq:'Once a year (May)',subjects:['PCB','PCMB'],for:'MBBS, BDS, BAMS, BHMS, BSMS, BUMS, BVSc & B.Sc Nursing at all govt & private colleges.',website:'neet.nta.nic.in',note:'Single exam for all medical UG. 24+ lakh appear. ~1.1 lakh govt MBBS seats.',seats:'~1.1 lakh MBBS (govt+pvt)',institutes:[
    {name:'AIIMS New Delhi',city:'New Delhi',tier:'🏆 #1 Medical'},
    {name:'AIIMS Bhopal, Bhubaneswar, Jodhpur, Patna, Rishikesh, Raipur + 15 more AIIMS',city:'Pan India',tier:'🏆 AIIMS Network'},
    {name:'JIPMER Puducherry',city:'Puducherry',tier:'🏆 Premier'},
    {name:'CMC Vellore',city:'Vellore, TN',tier:'🏆 Premier Private'},
    {name:'Madras Medical College',city:'Chennai, TN',tier:'⭐ Top Govt TN'},
    {name:'Govt Medical College Trivandrum, Kozhikode',city:'Kerala',tier:'⭐ Top Govt KL'},
    {name:'All 706 Medical Colleges (Govt + Private)',city:'Pan India',tier:'✓ Full network'},
  ]},
  {name:'AIIMS Nursing',full:'AIIMS B.Sc Nursing Entrance',body:'AIIMS New Delhi',level:'National',freq:'Once a year',subjects:['PCB','PCMB'],for:'B.Sc Nursing at all AIIMS campuses.',website:'aiimsexams.ac.in',note:'Separate from NEET. Most competitive nursing admission in India.',seats:'~700 (all AIIMS)',institutes:[
    {name:'AIIMS New Delhi',city:'New Delhi',tier:'🏆 Top Nursing'},
    {name:'AIIMS Bhopal, Bhubaneswar, Jodhpur, Patna, Rishikesh, Raipur + others',city:'Pan India',tier:'🏆 AIIMS Network'},
  ]},
  {name:'JIPMER Nursing',full:'JIPMER B.Sc Nursing Entrance',body:'JIPMER Puducherry',level:'National',freq:'Once a year',subjects:['PCB','PCMB'],for:'B.Sc Nursing at JIPMER Puducherry.',website:'jipmer.edu.in',note:'',seats:'~100',institutes:[
    {name:'JIPMER',city:'Puducherry',tier:'🏆 Premier'},
  ]},
  {name:'PGIMER Nursing',full:'PGIMER B.Sc Nursing Entrance',body:'PGIMER Chandigarh',level:'National',freq:'Once a year',subjects:['PCB','PCMB'],for:'B.Sc Nursing at PGIMER Chandigarh.',website:'pgimer.edu.in',note:'',seats:'~80',institutes:[
    {name:'PGIMER',city:'Chandigarh',tier:'🏆 Premier'},
  ]},
  {name:'CET-PWD',full:'Common Entrance Test for Persons with Disabilities',body:'Ministry of Social Justice & Empowerment — jointly conducted by PDUNIPPD / SVNIRTAR / NILD / NIEPMD / AYJNISHD / NIEPID / CRCSRE',level:'National',freq:'Once a year (May–Jun, exam in late Jun)',subjects:['PCB','PCMB','PCM','PCM+CS','Any'],for:'BPT, BOT, BPO and BASLP at the seven National Institutes & Regional Centres for Empowerment of Persons with Disabilities — for candidates with and without disabilities (PwD reservation as per RPwD Act). Eligibility: 10+2 Science with English as compulsory subject.',website:'admission.svnirtar.nic.in',note:'A single common counselling fills seats across all participating institutes. Apply online at the SVNIRTAR / PDUNIPPD admission portal.',seats:'~600 seats across institutes',institutes:[
    {name:'PDUNIPPD New Delhi',city:'New Delhi',tier:'🏆 Apex — Physical'},
    {name:'SVNIRTAR Cuttack',city:'Cuttack, OD',tier:'🏆 Apex — Locomotor'},
    {name:'NILD Kolkata',city:'Kolkata, WB',tier:'⭐ National — Locomotor'},
    {name:'NIEPMD Chennai',city:'Chennai, TN',tier:'🏆 Apex — Multiple Disabilities'},
    {name:'AYJNISHD Mumbai + Regional Centres (Kolkata, Secunderabad)',city:'Mumbai / Kolkata / Secunderabad',tier:'🏆 Apex — Speech & Hearing'},
    {name:'NIEPID Secunderabad',city:'Secunderabad, TS',tier:'🏆 Apex — Intellectual'},
    {name:'CRCSRE Guwahati',city:'Guwahati, AS',tier:'⭐ Regional Centre'},
    {name:'CRC Patna',city:'Patna, BR',tier:'⭐ Regional Centre'},
  ]},
  {name:'Uttarakhand Paramedical Entrance Examination',full:'Uttarakhand State Paramedical Entrance Examination',body:'Hemwati Nandan Bahuguna Uttarakhand Medical Education University, Dehradun',level:'State',freq:'Once a year',subjects:['PCB','PCMB','PCM','PCM+CS'],for:'Paramedical degree, diploma and certificate courses (BMLT, BPT, B.Sc Nursing diploma, X-ray technician, OT technician etc.) at govt and govt-aided paramedical institutes in Uttarakhand.',website:'hnbumu.ac.in',note:'State quota admission for Uttarakhand domicile + open seats. Conducted by HNBUMU under Uttarakhand Govt.',seats:'Varies by course',institutes:[
    {name:'HNB Uttarakhand Medical Education University',city:'Dehradun, UK',tier:'⭐ State Medical Univ'},
    {name:'Govt paramedical colleges across Uttarakhand',city:'Uttarakhand',tier:'✓ State govt network'},
  ]},
]},
{id:'Pharmacy',label:'Pharmacy',ico:'💊',color:'#0A686F',bg:'#E5FAFB',exams:[
  {name:'NEET UG (Pharmacy)',full:'National Eligibility cum Entrance Test — for B.Pharm at some states',body:'NTA',level:'National',freq:'Once a year (May)',subjects:['PCB','PCMB','PCM','PCM+CS'],for:'B.Pharm at govt pharmacy colleges in states like Andhra Pradesh, Telangana, Karnataka. Many private colleges also use NEET for B.Pharm screening.',website:'neet.nta.nic.in',note:'Not all states use NEET for B.Pharm — some use state CETs or merit. Always verify with the specific state/college.',seats:'Varies by state',institutes:[
    {name:'Govt pharmacy colleges in AP, TS, KA',city:'Various',tier:'✓ State Govt Pharmacy'},
    {name:'Private pharmacy colleges using NEET',city:'Pan India',tier:'✓ Many private colleges'},
  ]},
  {name:'State CETs for B.Pharm',full:'State-level B.Pharm entrance tests',body:'Various State Boards',level:'State',freq:'Once a year (Apr–Jun)',subjects:['PCB','PCMB','PCM','PCM+CS'],for:'B.Pharm at govt & private pharmacy colleges in each state. MHT CET (MH), KCET (KA), WBJEE (WB), KEAM (KL), AP EAPCET (AP), TS EAMCET (TS) — all have a Pharmacy paper.',website:'State exam websites',note:'Tamil Nadu: B.Pharm admission via TNEA counselling using Class 12 PCB/PCM marks. No separate pharmacy entrance in TN.',seats:'Varies',institutes:[
    {name:'Govt College of Pharmacy Chennai',city:'Chennai, TN',tier:'🏆 Top Govt Pharmacy TN'},
    {name:'PSG College of Pharmacy',city:'Coimbatore, TN',tier:'⭐ Top Private Pharmacy TN'},
    {name:'Govt & private pharmacy colleges — state-wise',city:'Pan India',tier:'✓ Via state CET'},
  ]},
  {name:'GPAT',full:'Graduate Pharmacy Aptitude Test',body:'NTA',level:'National',freq:'Once a year (Jan)',subjects:['PCB','PCMB'],for:'M.Pharm admissions (PG). Listed here as awareness — GPAT is the PG equivalent of JEE for pharmacy students after B.Pharm.',website:'gpat.nta.nic.in',note:'This is a PG exam, not UG. Included for awareness — students starting B.Pharm should know GPAT is the next step.',seats:'M.Pharm seats across India',institutes:[
    {name:'Jamia Hamdard + all AICTE-approved M.Pharm colleges (govt & aided)',city:'Pan India',tier:'✓ Via GPAT score'},
  ]},
]},
{id:'Security',label:'Cyber Security & National Security',ico:'🔒',color:'#8F2009',bg:'#FFEDE8',exams:[
  {name:'RRU Entrance',full:'Rashtriya Raksha University Entrance Examination',body:'Rashtriya Raksha University',level:'National',freq:'Once a year',subjects:['PCM','PCM+CS','Commerce','Arts','Any'],for:'B.Tech / BCA / BA in Cyber Security, Police Science, Border Management & Internal Security at India\'s only national security university.',website:'rru.ac.in',note:'Fully govt funded central university under Ministry of Home Affairs. Students get security clearance and strong pathway to intelligence, police & cyber defence roles.',seats:'~500 seats across programs',institutes:[
    {name:'Rashtriya Raksha University — Main Campus',city:'Gandhinagar, GJ',tier:'🏆 National Security University'},
    {name:'RRU Sub-Centres',city:'Pan India',tier:'✓ RRU Network'},
  ]},
  {name:'FACT',full:'Forensic Aptitude & Calibre Test',body:'National Forensic Sciences University (NFSU)',level:'National',freq:'Once a year',subjects:['PCM','PCB','Commerce','Arts','Any'],for:'UG admissions to B.Sc Forensic Sciences, BBA Cyber Security, BBA Security Management, B.Tech at NFSU Gandhinagar and its campuses across India.',website:'nfsu.ac.in',note:'NFSU is India\'s only national university dedicated to forensic sciences — established as a central university under Ministry of Home Affairs. Strong career pathway to CBI, Forensic Labs, Cyber Cells.',seats:'~2,000 across all NFSU campuses',institutes:[
    {name:'NFSU Gandhinagar (Main Campus)',city:'Gandhinagar, GJ',tier:'🏆 National Forensic University'},
    {name:'NFSU Delhi Campus',city:'New Delhi',tier:'⭐ NFSU Campus'},
    {name:'NFSU Goa Campus',city:'Goa',tier:'⭐ NFSU Campus'},
    {name:'NFSU Tripura Campus',city:'Agartala, TR',tier:'✓ NFSU Campus'},
  ]},
]},
{id:'Science',label:'Pure Science & Research',ico:'⚗',color:'#581F9E',bg:'#F2EBFF',exams:[
  {name:'IISER IAT',full:'IISER Aptitude Test',body:'IISERs (joint)',level:'National',freq:'Once a year (June)',subjects:['PCM','PCM+CS','PCMB'],for:'5-year BS-MS at all 7 IISERs.',website:'iiseradmission.in',note:'JEE Advanced & KVPY SX scores also accepted instead of IAT.',seats:'~2,800 total (all IISERs)',institutes:[
    {name:'IISER Pune',city:'Pune, MH',tier:'🏆 Top IISER'},
    {name:'IISER Kolkata',city:'Kolkata, WB',tier:'🏆 Top IISER'},
    {name:'IISER Mohali',city:'Mohali, PB',tier:'🏆 Top IISER'},
    {name:'IISER Bhopal',city:'Bhopal, MP',tier:'⭐ Excellent'},
    {name:'IISER Thiruvananthapuram',city:'Kerala',tier:'⭐ Excellent'},
    {name:'IISER Tirupati',city:'AP',tier:'⭐ Excellent'},
    {name:'IISER Berhampur',city:'OD',tier:'✓ Good'},
  ]},
  {name:'NEST',full:'National Entrance Screening Test',body:'NISER & UM-DAE CEBS',level:'National',freq:'Once a year (June)',subjects:['PCM','PCM+CS','PCMB'],for:'Integrated M.Sc at NISER Bhubaneswar & UM-DAE CEBS Mumbai.',website:'nestexam.in',note:'NISER is under Dept of Atomic Energy — strong BARC/ISRO pipeline.',seats:'~300 total',institutes:[
    {name:'NISER Bhubaneswar',city:'Bhubaneswar, OD',tier:'🏆 DAE Premier'},
    {name:'UM-DAE CEBS Mumbai',city:'Mumbai, MH',tier:'🏆 DAE Premier'},
  ]},
  {name:'ISI Admission Test',full:'Indian Statistical Institute Admission Test',body:'ISI',level:'Institute',freq:'Once a year (May)',subjects:['PCM','PCM+CS'],for:'B.Stat & B.Math at ISI Kolkata, Delhi, Bengaluru.',website:'isical.ac.in',note:'One of India\'s hardest exams. Extremely Maths-heavy. Alumni at top global universities & quant finance.',seats:'~130 total',institutes:[
    {name:'ISI Kolkata',city:'Kolkata, WB',tier:'🏆 Elite'},
    {name:'ISI Delhi',city:'New Delhi',tier:'🏆 Elite'},
    {name:'ISI Bengaluru',city:'Bengaluru, KA',tier:'🏆 Elite'},
  ]},
  {name:'CMI Entrance',full:'Chennai Mathematical Institute Entrance Test',body:'CMI Chennai',level:'Institute',freq:'Once a year (May)',subjects:['PCM','PCM+CS'],for:'B.Sc Hons in Mathematics, Physics & Computer Science.',website:'cmi.ac.in',note:'Very rigorous. Tests mathematical maturity. TIFR, global PhD alumni.',seats:'~80',institutes:[
    {name:'Chennai Mathematical Institute',city:'Chennai, TN',tier:'🏆 Elite Theory'},
  ]},
  {name:'Geologist Examination',full:'UPSC Geologist / Geo-Scientist Examination',body:'UPSC',level:'National',freq:'Once a year',subjects:['PCM','PCM+CS','PCMB'],for:'Entry to Geologist / Geo-Physicist / Hydro-Geologist posts at GSI, CGWB and Ministry of Mines. Open to B.Sc Geology / Applied Geology / Earth Sciences graduates.',website:'upsc.gov.in',note:'ISM Dhanbad (IIT ISM) is the premier institute for Applied Geology and Mining — the best preparation for this path.',seats:'~50–80 posts per year',institutes:[
    {name:'Geological Survey of India (GSI)',city:'Kolkata HQ + Pan India',tier:'🏆 Premier Govt — 165+ years old'},
    {name:'Central Ground Water Board (CGWB)',city:'New Delhi + Regional',tier:'⭐ Central Govt'},
    {name:'Ministry of Mines — Technical Cadre',city:'New Delhi',tier:'⭐ Central Govt'},
  ]},
  {name:'KVPY',full:'Kishore Vaigyanik Protsahan Yojana',body:'DST / IISc',level:'National',freq:'Once a year (Nov)',subjects:['PCM','PCM+CS','PCB','PCMB'],for:'Scholarship + direct IISc B.Sc Research entry via SX stream.',website:'kvpy.iisc.ac.in',note:'Fellowship + research mentorship. Being restructured in 2026 — verify current status.',seats:'~1,000 scholarships',institutes:[
    {name:'IISc Bengaluru (B.Sc Research)',city:'Bengaluru, KA',tier:'🏆 India\'s Top Research Univ'},
  ]},
]},
{id:'Sports',label:'Sports & Physical Education',ico:'🏅',color:'#BC2D12',bg:'#FFEDE8',exams:[
  {name:'LNIPE Entrance',full:'Lakshmibai National Institute of Physical Education Entrance',body:'LNIPE',level:'Institute',freq:'Once a year',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'B.P.Ed & B.Sc Health & Physical Education at LNIPE Gwalior & Guwahati.',website:'lnipe.edu.in',note:'Physical fitness test + written. Sports achievement given weightage.',seats:'~400',institutes:[
    {name:'LNIPE Gwalior',city:'Gwalior, MP',tier:'🏆 Premier PE Institute'},
    {name:'LNIPE Guwahati (NE campus)',city:'Guwahati, AS',tier:'🏆 Premier PE Institute'},
  ]},
  {name:'TNPESU Entrance',full:'Tamil Nadu Physical Education & Sports University Entrance',body:'TNPESU',level:'Institute',freq:'Once a year (Jun)',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'B.P.Ed, B.Sc Physical Education, B.Sc Yoga, B.Sc Sports Biomechanics at TNPESU.',website:'tnpesu.org',note:'Key for Tamil Nadu students. Written + physical efficiency test.',seats:'~500',institutes:[
    {name:'TNPESU Chennai (Main Campus)',city:'Chennai, TN',tier:'🏆 Top PE — South India'},
    {name:'TNPESU Regional Centres',city:'Tamil Nadu',tier:'✓ TNPESU Network'},
  ]},
  {name:'TS PECET',full:'Telangana State Physical Education CET',body:'Osmania University',level:'State',freq:'Once a year',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'B.P.Ed at PE colleges in Telangana.',website:'tspecet.tsche.ac.in',note:'',seats:'~1,000+',institutes:[
    {name:'Osmania University PE Dept',city:'Hyderabad, TS',tier:'⭐ Top Govt TS'},
    {name:'All TS BPEd colleges',city:'Telangana',tier:'✓ Wide access'},
  ]},
  {name:'NIS / NSNIS Selection',full:'National Institute of Sports Diploma Selection',body:'SAI / NSNIS Patiala',level:'Institute',freq:'Once a year',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'Diploma in Sports Coaching across 20+ disciplines at NSNIS Patiala & sub-centres.',website:'nsnis.org',note:'Selection based on sports achievement + physical tests. Not just a written exam.',seats:'~300+',institutes:[
    {name:'NSNIS Patiala',city:'Patiala, PB',tier:'🏆 Asia\'s Largest Sports Inst.'},
    {name:'SAI Regional Centres — Bengaluru, Kolkata, Gandhi Nagar, Bhopal',city:'Multi-city',tier:'✓ SAI Network'},
  ]},
]},
{id:'TeacherEd',label:'Teacher Education',ico:'📖',color:'#5B2D9E',bg:'#F2EBFF',exams:[
  {name:'NCET',full:'National Common Entrance Test',body:'NTA',level:'National',freq:'Once a year',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'4-year Integrated Teacher Education Programme (ITEP) at selected Central/State Universities, IITs, NITs, RIEs and Govt colleges. Replaces the old 2-year B.Ed after graduation.',website:'ncet.samarth.ac.in',note:'ITEP is a game-changer — students become school teachers with a 4-year integrated UG+teaching qualification directly after Class 12, instead of the old route of UG+2yr B.Ed.',seats:'~7,000 across participating institutes',institutes:[
    {name:'Central Universities — CUTN, BHU, JNU, Hyderabad',city:'Pan India',tier:'✓ Central University ITEP'},
    {name:'RIEs — Regional Institutes of Education (Mysore, Bhopal, Bhubaneswar, Ajmer, Shillong)',city:'Pan India',tier:'🏆 Premier Teacher Ed'},
    {name:'Selected NITs and State Govt colleges',city:'Pan India',tier:'✓ Via NCET'},
  ]},
  {name:'TN B.Ed Entrance',full:'Tamil Nadu B.Ed Entrance (State Level)',body:'TNTEU (Tamil Nadu Teachers Education University)',level:'State',freq:'Once a year',subjects:['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'],for:'2-year B.Ed at government & private teacher education colleges in Tamil Nadu. For graduates who want to become school teachers.',website:'tnteu.ac.in',note:'This is a PG-level entry (after graduation). Listed for awareness since many students plan their UG with teaching career in mind.',seats:'~25,000+ in TN',institutes:[
    {name:'Govt College of Education, Dharmapuri, Vellore, Coimbatore',city:'Tamil Nadu',tier:'⭐ Govt Teacher Ed'},
    {name:'Private B.Ed colleges in TN',city:'Tamil Nadu',tier:'✓ Wide access'},
  ]},
]},
];
