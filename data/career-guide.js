// Vazhi — Career Guide Data
// Schema: { id, keywords[], title, ico, bc, summary, class12:{subjects[], tip}, streamId, examNames[], augIds[], careers[] }
//
// streamId  → matches STREAMS[].id in data/courses.js  → pulls degree course cards
// examNames → matches exam .name in EXAM_GROUPS         → pulls exam info cards
// augIds    → matches AFTER_UG[].id in data/after-ug.js → pulls after-UG path cards
// bc        → badge colour key (coral|teal|green|purple|amber|accent)

const CAREER_MAP = [

  {
    id: 'doctor',
    keywords: ['doctor', 'mbbs', 'medicine', 'medical', 'physician', 'surgeon', 'hospital', 'neet', 'healthcare', 'dentist', 'bds', 'ayush', 'homeopath', 'ayurveda'],
    title: 'Become a Doctor',
    ico: '🩺',
    bc: 'coral',
    summary: 'Medicine is one of India\'s most respected and impactful careers. A single national exam — NEET-UG — is the gateway to MBBS, BDS, BAMS and other medical degrees at government colleges.',
    class12: {
      subjects: ['PCB', 'PCMB'],
      tip: 'Biology is mandatory. Physics & Chemistry are also tested in NEET. Aim for 650+ out of 720 for top govt medical colleges.',
    },
    class9_10: {
      stream: 'PCB',
      focus: ['Biology', 'Chemistry', 'Science'],
      tip: 'Biology is your most important subject from Class 9 itself. Build a genuine love for how the human body works — cells, systems, and disease.',
    },
    streamId: 'Medical',
    examNames: ['NEET-UG'],
    augIds: [],
    careers: ['General Physician', 'Surgeon', 'Specialist Doctor (Cardiologist / Neurologist / Orthopaedic)', 'Medical Researcher', 'Public Health Officer', 'Medical Professor'],
  },

  {
    id: 'engineer',
    keywords: ['engineer', 'engineering', 'iit', 'nit', 'tech', 'b.tech', 'b.e.', 'jee', 'mechanical', 'civil', 'electrical', 'electronics', 'chemical', 'aerospace'],
    title: 'Become an Engineer',
    ico: '⚙',
    bc: 'teal',
    summary: 'Engineering is the most popular science career in India. JEE Main opens 40,000+ NIT/IIIT seats; JEE Advanced opens all 23 IITs. State exams (TNEA, etc.) give access to lakhs of affordable govt college seats.',
    class12: {
      subjects: ['PCM', 'PCM+CS'],
      tip: 'PCM is mandatory. Computer Science as an elective is a bonus. Maths score matters most.',
    },
    class9_10: {
      stream: 'PCM',
      focus: ['Maths', 'Science', 'Physics basics'],
      tip: 'Algebra, geometry and basic physics are the building blocks of engineering. Solve extra Maths problems daily — consistency now pays off at JEE.',
    },
    streamId: 'Engineering',
    examNames: ['JEE Advanced', 'JEE Main', 'TNEA'],
    augIds: ['mtech', 'ies'],
    careers: ['Software Engineer', 'Civil / Mechanical / Electrical Engineer', 'ISRO / DRDO Scientist', 'PSU Engineer (BHEL, ONGC, NTPC)', 'IES Officer', 'Entrepreneur'],
  },

  {
    id: 'data-scientist',
    keywords: ['data scientist', 'machine learning', 'artificial intelligence', 'ai', 'ml', 'data science', 'data analyst', 'analytics', 'deep learning', 'nlp'],
    title: 'Data Scientist / AI Engineer',
    ico: '🤖',
    bc: 'accent',
    summary: 'Data Science and AI are the fastest-growing fields globally. Most pathways go through B.Tech CSE or B.Sc Statistics/Mathematics, followed by specialisation at PG level or through industry experience.',
    class12: {
      subjects: ['PCM', 'PCM+CS'],
      tip: 'Maths and CS are key. PCM+CS gives a head start in programming. ISI and CMI produce India\'s top data scientists.',
    },
    class9_10: {
      stream: 'PCM',
      focus: ['Maths', 'Computers', 'Logic puzzles'],
      tip: 'Maths is non-negotiable. If your school offers Computer Science in Class 9-10, take it. Start solving puzzles and learning basic Python online.',
    },
    streamId: 'Science',
    examNames: ['JEE Advanced', 'JEE Main', 'CUET UG', 'ISI Admission Test'],
    augIds: ['mtech', 'msc'],
    careers: ['Data Scientist', 'ML Engineer', 'AI Researcher', 'Data Analyst', 'Product Data Scientist', 'Quant Analyst'],
  },

  {
    id: 'lawyer',
    keywords: ['lawyer', 'law', 'advocate', 'legal', 'clat', 'nlu', 'judge', 'barrister', 'solicitor', 'attorney', 'legal officer', 'high court', 'supreme court'],
    title: 'Become a Lawyer',
    ico: '⚖',
    bc: 'amber',
    summary: 'Law is one of the most intellectually stimulating careers in India. The 5-year integrated BA LLB at National Law Universities (NLUs) via CLAT is the most prestigious entry. You can also do LLB after any UG degree.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'All streams are eligible for CLAT. English and logical reasoning matter most.',
    },
    class9_10: {
      stream: 'Arts',
      focus: ['English', 'Social Studies', 'Languages'],
      tip: 'Read newspapers, join debates and practice writing your opinions clearly. Language and logical argument are the foundation of a legal career.',
    },
    streamId: 'Law',
    examNames: ['CLAT', 'AILET'],
    augIds: ['llm'],
    careers: ['Advocate (High Court / Supreme Court)', 'Corporate Lawyer', 'Legal Advisor (Company / Govt)', 'Judge (after practice + judicial service exam)', 'Law Professor', 'Public Prosecutor'],
  },

  {
    id: 'ias',
    keywords: ['ias', 'ips', 'ifs', 'upsc', 'civil service', 'civil servant', 'collector', 'district collector', 'irs', 'irts', 'idas', 'central services', 'government officer'],
    title: 'Civil Servant — IAS / IPS / IFS',
    ico: '🏛',
    bc: 'accent',
    summary: 'The UPSC Civil Services Exam (IAS/IPS/IFS) is India\'s most prestigious career. Any graduate can attempt it — stream does not matter. Typically requires 1–3 years of dedicated preparation after graduation.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'Stream does not matter for UPSC. Focus on developing reading habits, current affairs and analytical thinking from Class 12 itself.',
    },
    class9_10: {
      stream: 'Arts',
      focus: ['Social Studies', 'Current Affairs', 'English'],
      tip: 'Develop a reading habit now. History, Geography and Civics in Class 9-10 are directly tested in UPSC Prelims. Read one newspaper article daily.',
    },
    streamId: 'Management',
    examNames: [],
    augIds: ['upsc'],
    careers: ['IAS — District Collector, Secretary, Cabinet Secretary', 'IPS — SP, DIG, DGP', 'IFS — Indian Ambassador abroad', 'IRS — Income Tax & Customs Officer', 'Other 24 Allied Services'],
  },

  {
    id: 'scientist',
    keywords: ['scientist', 'research', 'isro', 'drdo', 'barc', 'tifr', 'phd', 'researcher', 'nuclear', 'space scientist', 'igcar', 'csir', 'laboratory'],
    title: 'Research Scientist',
    ico: '🔬',
    bc: 'purple',
    summary: 'India has world-class research institutes — IISERs, IISc, TIFR, ISRO, BARC, IGCAR. A PhD is the core qualification. The journey: B.Sc / B.Tech → M.Sc / M.Tech → PhD → Scientist position.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB'],
      tip: 'Strong foundation in Physics, Chemistry, Maths or Biology. IISERs and IISc via KVPY / JEE are prime entry points.',
    },
    class9_10: {
      stream: 'PCM',
      focus: ['Maths', 'Science', 'Biology or Physics'],
      tip: 'Curiosity is your greatest asset. Read beyond textbooks — science magazines, Olympiad problems, and YouTube science channels. Winners of Science Olympiads go to IISERs.',
    },
    streamId: 'Science',
    examNames: ['IISER IAT', 'NEST', 'KVPY / INSPIRE SHE', 'JEE Advanced'],
    augIds: ['phd', 'isro-drdo', 'tifr', 'iisc'],
    careers: ['ISRO Scientist / Engineer', 'DRDO Scientist', 'BARC Scientific Officer', 'TIFR Researcher', 'CSIR Lab Scientist', 'University Professor & Researcher'],
  },

  {
    id: 'pilot',
    keywords: ['pilot', 'aviation', 'airline', 'flying', 'cockpit', 'air traffic', 'airways', 'indigo', 'air india', 'fly', 'aircraft'],
    title: 'Become a Pilot',
    ico: '✈',
    bc: 'teal',
    summary: 'Commercial pilots in India fly for airlines (IndiGo, Air India, Vistara). The path: Class 12 PCM → Flying Training (CPL at a DGCA-approved flying school) → Airline career. NDA/Air Force is a govt route.',
    class12: {
      subjects: ['PCM', 'PCM+CS'],
      tip: 'PCM mandatory. English proficiency is required by ICAO. Maths & Physics must be strong.',
    },
    class9_10: {
      stream: 'PCM',
      focus: ['Maths', 'Physics basics', 'English'],
      tip: 'Maths and Physics are mandatory for a pilot licence. Build English proficiency and physical fitness alongside academics — all three are checked at every stage.',
    },
    streamId: 'Defence',
    examNames: ['NDA & NA'],
    augIds: [],
    careers: ['Commercial Pilot (Airline)', 'Indian Air Force Officer', 'Flight Instructor', 'Air Traffic Controller', 'Helicopter Pilot', 'Charter / Corporate Pilot'],
  },

  {
    id: 'banker',
    keywords: ['banker', 'banking', 'sbi', 'ibps', 'rbi', 'bank po', 'probationary officer', 'clerk', 'nabard', 'finance', 'bank manager'],
    title: 'Banking & Finance Career',
    ico: '🏦',
    bc: 'green',
    summary: 'PSU Banking offers one of the most stable, well-paying careers in India. IBPS conducts exams for all PSU banks; SBI has its own. RBI Grade B is the most prestigious. Any graduate can apply.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'Commerce with Maths gives a head start. Any stream is eligible. Quantitative aptitude and English are the key exam sections.',
    },
    class9_10: {
      stream: 'Commerce',
      focus: ['Maths', 'English', 'Basic Accounting concepts'],
      tip: 'Build your quantitative aptitude from now. Commerce with Maths in Class 11-12 gives a strong head start for IBPS, SBI and RBI exams.',
    },
    streamId: 'Commerce',
    examNames: [],
    augIds: ['banking'],
    careers: ['Probationary Officer (PO)', 'Bank Manager / Branch Manager', 'RBI Grade B Officer', 'Credit / Loan Officer', 'NABARD Development Officer', 'Treasury & Forex Dealer'],
  },

  {
    id: 'ca',
    keywords: ['ca', 'chartered accountant', 'accountant', 'icai', 'audit', 'tax', 'finance', 'cfa', 'cma', 'cost accountant'],
    title: 'Chartered Accountant (CA)',
    ico: '📊',
    bc: 'amber',
    summary: 'CA is India\'s most respected finance qualification, conducted by ICAI. The path has 3 stages: Foundation → Intermediate → Final + 3-year Articleship. Can be done alongside any UG degree.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'Commerce with Maths is ideal but any stream can attempt CA Foundation. Accountancy and Maths in Class 12 are helpful.',
    },
    class9_10: {
      stream: 'Commerce',
      focus: ['Maths', 'Accountancy basics', 'Economics'],
      tip: 'You can register for CA Foundation right after Class 12. Commerce with Maths is the ideal preparation path — start building number sense and financial awareness now.',
    },
    streamId: 'Commerce',
    examNames: ['CA Foundation'],
    augIds: ['ca'],
    careers: ['Chartered Accountant (CA)', 'CFO / Finance Director', 'Tax Consultant', 'Auditor (Big4, Govt Audit)', 'Investment Banker', 'Financial Controller'],
  },

  {
    id: 'designer',
    keywords: ['designer', 'design', 'nid', 'uceed', 'ux', 'ui', 'product design', 'graphic design', 'fashion design', 'nift', 'animation', 'visual communication', 'interior design'],
    title: 'Designer — Product, UX, Fashion',
    ico: '✏',
    bc: 'purple',
    summary: 'India\'s top design institutes — NID, IIT B.Des (UCEED), NIFT — produce world-class designers. Design is open to ALL streams — no PCM required. Aptitude, creativity and observation skills matter most.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'No specific stream required. Develop your drawing, observation and creative thinking skills. Practice sketching daily.',
    },
    class9_10: {
      stream: 'Arts',
      focus: ['Drawing', 'Visual observation', 'Art / Craft'],
      tip: 'Sketch every day — draw what you see around you. Design aptitude is built through practice, not born overnight. Any stream is eligible for design colleges.',
    },
    streamId: 'Design',
    examNames: ['UCEED', 'NID DAT', 'NIFT Entrance', 'CEED'],
    augIds: [],
    careers: ['Product Designer', 'UX / UI Designer', 'Graphic Designer', 'Fashion Designer', 'Interior Designer', 'Animator / VFX Artist'],
  },

  {
    id: 'architect',
    keywords: ['architect', 'architecture', 'building design', 'urban planning', 'nata', 'b.arch', 'construction', 'urban designer'],
    title: 'Architect',
    ico: '🏛',
    bc: 'teal',
    summary: 'Architecture is a 5-year B.Arch degree combining design, engineering and art. NATA (National Aptitude Test in Architecture) is the primary exam. NITs, SPAs and CFTIs offer govt-funded B.Arch programs.',
    class12: {
      subjects: ['PCM', 'PCM+CS'],
      tip: 'PCM mandatory for B.Arch. Drawing and spatial thinking are equally important. NATA has both a drawing test and general aptitude section.',
    },
    class9_10: {
      stream: 'PCM',
      focus: ['Maths', 'Drawing / Art', 'Spatial thinking'],
      tip: 'Architecture needs both Maths and drawing skills. Practice sketching buildings and spaces from Class 9 itself — NATA tests drawing as much as academics.',
    },
    streamId: 'Design',
    examNames: ['NATA', 'JEE Main Paper 2 (BArch)'],
    augIds: [],
    careers: ['Architect', 'Urban Planner', 'Interior Designer', 'Landscape Architect', 'Construction Manager', 'Heritage Conservation Specialist'],
  },

  {
    id: 'sailor',
    keywords: ['sailor', 'merchant navy', 'maritime', 'ship', 'imu', 'seafarer', 'sea', 'nautical', 'marine engineer', 'deck officer', 'shipping'],
    title: 'Merchant Navy / Maritime Career',
    ico: '⚓',
    bc: 'teal',
    summary: 'Merchant Navy offers one of the highest-paying careers globally for engineers and navigators. IMU CET is the national exam for all DGS-approved maritime programs. International exposure from Day 1.',
    class12: {
      subjects: ['PCM', 'PCM+CS'],
      tip: 'PCM mandatory. Medical and physical fitness are strictly checked. English proficiency is required (STCW norms).',
    },
    class9_10: {
      stream: 'PCM',
      focus: ['Maths', 'Physics basics', 'English'],
      tip: 'PCM is mandatory for Merchant Navy. Build your physical fitness and English proficiency alongside academics — all three are checked strictly at every stage.',
    },
    streamId: 'Defence',
    examNames: ['IMU CET'],
    augIds: [],
    careers: ['Deck Officer → Captain / Chief Officer', 'Marine Engineer → Chief Engineer', 'Naval Architect', 'Port Manager / Harbour Master', 'Maritime Surveyor'],
  },

  {
    id: 'defence',
    keywords: ['army', 'navy', 'air force', 'nda', 'defence', 'military', 'soldier', 'tes', 'cds', 'sainik', 'coast guard', 'armed forces', 'army officer', 'navy officer'],
    title: 'Indian Armed Forces',
    ico: '🪖',
    bc: 'amber',
    summary: 'Serving in the Indian Army, Navy or Air Force is one of the most prestigious careers. NDA (after Class 12) is the primary gateway — provides a paid B.Tech/B.Sc degree while serving as an officer.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB'],
      tip: 'PCM required for Navy and Air Force. All streams for Army (NDA). Physical fitness and SSB interview (personality test) are equally important.',
    },
    class9_10: {
      stream: 'PCM',
      focus: ['Maths', 'Science', 'Physical fitness'],
      tip: 'Physical fitness is as important as academics for the armed forces. Start a fitness routine in Class 9. PCM is required for Navy and Air Force; Army accepts all streams.',
    },
    streamId: 'Defence',
    examNames: ['NDA & NA', 'Coast Guard Navik / Yantrik'],
    augIds: [],
    careers: ['Army Officer (Lieutenant → General)', 'Naval Officer', 'Air Force Pilot / Ground Duty Officer', 'Indian Coast Guard Officer', 'DRDO Defence Scientist (post-engineering)'],
  },

  {
    id: 'farmer',
    keywords: ['farmer', 'agriculture', 'agri', 'veterinary', 'horticulture', 'icar', 'farming', 'food science', 'animal husbandry', 'fisheries', 'forestry', 'agronomy'],
    title: 'Agricultural Officer / Agri-Scientist',
    ico: '🌾',
    bc: 'green',
    summary: 'Agriculture is a sunrise sector in India — from food technology to agri-tech startups. B.Sc Agriculture and B.V.Sc are 4-year govt-funded programs. ICAR AIEEA is the national exam for top central agri universities.',
    class12: {
      subjects: ['PCB', 'PCMB', 'PCM'],
      tip: 'Biology is important. PCB / PCMB gives access to veterinary programs. ICAR-funded colleges have near-zero fees + stipend.',
    },
    class9_10: {
      stream: 'PCB',
      focus: ['Biology', 'Science', 'Chemistry'],
      tip: 'Biology is the core of agricultural science. Agri-science opens careers in food technology, soil science and rural development — all high-impact, high-demand fields.',
    },
    streamId: 'Agriculture',
    examNames: ['ICAR AIEEA UG', 'TNAU Entrance (TNEAMET)'],
    augIds: [],
    careers: ['Agricultural Officer (State Govt)', 'Agronomist / Soil Scientist', 'Food Technologist', 'Veterinary Officer (Govt)', 'Agricultural Research Scientist', 'Agri-tech Entrepreneur'],
  },

  {
    id: 'pharmacist',
    keywords: ['pharmacist', 'pharmacy', 'pharma', 'niper', 'gpat', 'drug', 'medicine', 'pharmaceutical', 'b.pharm', 'drug inspector'],
    title: 'Pharmacist / Pharma Scientist',
    ico: '💊',
    bc: 'green',
    summary: 'B.Pharm / Pharm.D opens careers in drug manufacturing, hospital pharmacy, regulatory affairs and research. NIPER (National Institute of Pharmaceutical Education & Research) is India\'s top PG pharmacy institute.',
    class12: {
      subjects: ['PCB', 'PCMB', 'PCM'],
      tip: 'PCB or PCMB preferred. Chemistry is the core subject. Tamil Nadu has several govt pharmacy colleges with low fees.',
    },
    class9_10: {
      stream: 'PCB',
      focus: ['Chemistry', 'Biology', 'Science'],
      tip: 'Chemistry is the heart of pharmacy. Build your Chemistry fundamentals in Class 9-10 — it directly feeds into B.Pharm coursework and drug science.',
    },
    streamId: 'Paramedical',
    examNames: ['NEET-UG'],
    augIds: [],
    careers: ['Hospital Pharmacist', 'Drug Inspector (Govt)', 'Pharmaceutical Scientist / R&D', 'Regulatory Affairs Officer', 'Clinical Research Associate', 'Medical Sales Representative'],
  },

  {
    id: 'teacher',
    keywords: ['teacher', 'professor', 'academic', 'ugc', 'net', 'education', 'lecturer', 'tutor', 'school teacher', 'tet', 'teaching'],
    title: 'Teacher / Professor',
    ico: '📚',
    bc: 'teal',
    summary: 'Teaching at school level requires B.Ed after graduation. Teaching at college/university level requires a UG + PG degree + UGC-NET qualification. Government school teachers via TET are among the most stable jobs.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'Any stream — you teach the subject you love. Build deep expertise in your chosen subject throughout your UG and PG degrees.',
    },
    class9_10: {
      stream: 'Arts',
      focus: ['The subject you love', 'Languages', 'Communication'],
      tip: 'Choose the subject you are most passionate about and go deep. Teaching rewards genuine expertise and the ability to explain things clearly — both habits to build now.',
    },
    streamId: 'Arts',
    examNames: ['CUET UG'],
    augIds: ['ma', 'msc'],
    careers: ['Govt School Teacher (via TN TET)', 'College Lecturer (via UGC-NET)', 'Assistant Professor (University)', 'Research Associate (CSIR/UGC Fellowship)', 'Educational Administrator / Principal'],
  },

  {
    id: 'journalist',
    keywords: ['journalist', 'media', 'news', 'communication', 'mass media', 'reporter', 'anchor', 'film', 'cinema', 'broadcasting', 'public relations', 'pr'],
    title: 'Journalist / Media Professional',
    ico: '📰',
    bc: 'amber',
    summary: 'Journalism, Mass Communication and Visual Media open careers in news, film, PR and digital media. BA Mass Communication at IIMC, Symbiosis, AMU and central universities is the primary pathway.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'Any stream eligible. Arts or Humanities background is helpful. English writing skills and current affairs awareness are critical.',
    },
    class9_10: {
      stream: 'Arts',
      focus: ['English', 'Current Affairs', 'Writing'],
      tip: 'Read newspapers daily. Write a journal or blog. Journalism rewards those who observe, question and communicate clearly — all habits you can build right now.',
    },
    streamId: 'Arts',
    examNames: ['CUET UG', 'IIMC Entrance'],
    augIds: ['ma'],
    careers: ['News Reporter / Journalist', 'TV Anchor / RJ', 'Film / Documentary Maker', 'Digital Content Creator', 'PR & Communications Manager', 'Social Media Strategist'],
  },

  {
    id: 'geologist',
    keywords: ['geologist', 'geology', 'gsi', 'mining', 'mineral', 'earth science', 'geo-scientist', 'groundwater', 'cgwb', 'petroleum', 'oil', 'ism dhanbad'],
    title: 'Geologist / Geo-Scientist',
    ico: '🪨',
    bc: 'green',
    summary: 'Geologists map India\'s mineral and groundwater resources. The UPSC Geologist Examination opens Group A central govt positions at GSI (Geological Survey of India) — among the best technical govt careers.',
    class12: {
      subjects: ['PCM', 'PCMB'],
      tip: 'PCM is the base. B.Sc Geology or B.Tech Mining / Applied Geology is the UG degree path. IIT ISM Dhanbad is the premier institute.',
    },
    class9_10: {
      stream: 'PCM',
      focus: ['Maths', 'Science', 'Geography'],
      tip: 'Geography and basic earth science in Class 9-10 directly feed your geological understanding. PCM is the base — build it strong.',
    },
    streamId: 'Science',
    examNames: ['Geologist Examination (UPSC)', 'JEE Advanced', 'JEE Main'],
    augIds: ['geologist'],
    careers: ['Geologist — GSI (Geological Survey of India)', 'Hydro-Geologist — CGWB', 'Mining Engineer — Coal India / NMDC', 'Petroleum Geoscientist — ONGC / IOCL', 'Environmental Geologist'],
  },

  {
    id: 'insurance',
    keywords: ['insurance', 'lic', 'gic', 'niacl', 'actuarial', 'underwriter', 'risk', 'insurer', 'life insurance', 'general insurance', 'nia'],
    title: 'Insurance & Actuarial Career',
    ico: '🛡',
    bc: 'teal',
    summary: 'Insurance is a large, stable govt sector. LIC AAO, GIC Scale Officer and NIACL exams recruit thousands every year. Actuarial Science is one of the highest-paid niche careers globally.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'Commerce or Maths background helps for actuarial exams. Any graduate can appear for LIC AAO / GIC Scale Officer.',
    },
    class9_10: {
      stream: 'Commerce',
      focus: ['Maths', 'Statistics basics', 'Economics concepts'],
      tip: 'Maths and statistics are the backbone of actuarial science. Commerce + Maths is the ideal combination — start building number sense now.',
    },
    streamId: 'Commerce',
    examNames: [],
    augIds: ['insurance'],
    careers: ['LIC Assistant Administrative Officer (AAO)', 'GIC Scale Officer (Underwriter / Claims)', 'NIACL / UIIC Development Officer', 'Actuary (Institute of Actuaries of India)', 'Risk Manager', 'Claims Investigator'],
  },

  {
    id: 'social-work',
    keywords: ['social work', 'social worker', 'tiss', 'ngo', 'welfare', 'community', 'development', 'human rights', 'public policy', 'policy'],
    title: 'Social Worker / Policy Analyst',
    ico: '🤝',
    bc: 'coral',
    summary: 'TISS (Tata Institute of Social Sciences) is India\'s premier social work and public policy institute. Careers span NGOs, UN agencies, government welfare departments and policy think-tanks.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'Any stream eligible. Arts / Humanities gives broader context. Volunteering experience and social awareness strengthen your application.',
    },
    class9_10: {
      stream: 'Arts',
      focus: ['Social Studies', 'Languages', 'Environmental Science'],
      tip: 'Volunteer in community activities and develop empathy alongside academics. Arts / Humanities builds the broadest foundation for social work and public policy.',
    },
    streamId: 'Arts',
    examNames: ['TISSNET', 'CUET UG'],
    augIds: ['ma'],
    careers: ['Social Worker (NGO / UNICEF / UN)', 'Community Development Officer', 'Policy Analyst (Think Tank / Govt)', 'HR Manager', 'Counsellor / Therapist (with MSW)', 'IAS (Social Welfare dept)'],
  },

  // ── NICHE DESIGN CAREERS ──────────────────────────────────────────────

  {
    id: 'footwear-designer',
    keywords: ['footwear', 'shoe design', 'shoe designer', 'leather design', 'fddi', 'footwear design', 'shoe making', 'accessory design', 'leather goods'],
    title: 'Footwear Designer',
    ico: '👟',
    bc: 'amber',
    summary: 'Footwear Design is a specialised creative career. FDDI (Footwear Design & Development Institute) — a central govt institute under Ministry of Commerce — is India\'s premier institute for this field, with campuses across India including Chennai.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'Any stream eligible. Creative thinking, sketching and material sense matter most. FDDI AIST tests aptitude, not academic stream.',
    },
    class9_10: {
      stream: 'Arts',
      focus: ['Drawing', 'Art / Craft', 'Material observation'],
      tip: 'Develop your eye for design, materials and aesthetics. Sketch footwear, accessories and everyday objects. FDDI tests creative aptitude — any stream is eligible.',
    },
    streamId: 'Design',
    examNames: ['FDDI AIST'],
    augIds: [],
    careers: ['Footwear Designer (brands: Bata, Nike, Puma, Metro)', 'Leather Goods Designer', 'Accessory Designer (bags, belts, wallets)', 'Product Developer in Footwear Industry', 'Footwear Merchandiser / Buyer', 'Own Brand / Startup Founder'],
  },

  {
    id: 'fashion-designer',
    keywords: ['fashion', 'fashion designer', 'fashion design', 'clothing', 'garment', 'costume', 'apparel', 'textile design', 'nift', 'textile designer', 'stylist'],
    title: 'Fashion Designer / Stylist',
    ico: '👗',
    bc: 'coral',
    summary: 'Fashion Design is one of India\'s fastest-growing creative industries. NIFT (National Institute of Fashion Technology) has 17 campuses across India and is the top govt institute for fashion. Open to all streams — creativity is the entry ticket.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'Any stream eligible. Sketch daily. Develop awareness of fabrics, colours and fashion trends. Portfolio matters at admission.',
    },
    class9_10: {
      stream: 'Arts',
      focus: ['Drawing', 'Art', 'Fashion & Colour observation'],
      tip: 'Sketch daily. Observe fabrics, colours and clothing around you. NIFT tests your creative aptitude — not your stream. A strong portfolio built from Class 9 makes a difference.',
    },
    streamId: 'Design',
    examNames: ['NIFT Entrance'],
    augIds: [],
    careers: ['Fashion Designer (ready-to-wear, couture)', 'Textile Designer', 'Costume Designer (Film / TV)', 'Stylist / Personal Stylist', 'Fashion Buyer / Merchandiser', 'Fashion Illustrator'],
  },

  {
    id: 'interior-designer',
    keywords: ['interior', 'interior design', 'interior designer', 'space design', 'home design', 'decor', 'interior decoration', 'room design', 'furniture design'],
    title: 'Interior Designer',
    ico: '🛋',
    bc: 'teal',
    summary: 'Interior Design combines creativity with spatial problem-solving. India\'s booming real estate and hospitality sectors have created massive demand. B.Des (Interior Design) at NID and IITs, and B.Arch (with interior specialisation) are the top paths.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'Any stream eligible for B.Des. PCM required for B.Arch. Strong spatial thinking, drawing skills and colour sense are essential.',
    },
    class9_10: {
      stream: 'Arts',
      focus: ['Drawing', 'Spatial thinking', 'Art / Colour'],
      tip: 'Look at rooms and spaces with curiosity — ask yourself how you would redesign them. Sketching and spatial observation are your most important skills to develop now.',
    },
    streamId: 'Design',
    examNames: ['UCEED', 'NID DAT', 'NATA'],
    augIds: [],
    careers: ['Interior Designer (residential / commercial)', 'Set Designer (Film / TV / Events)', 'Exhibition Designer', 'Retail Space Designer', 'Furniture Designer', 'Visual Merchandiser'],
  },

  {
    id: 'animator',
    keywords: ['animator', 'animation', 'vfx', 'visual effects', 'game design', 'game designer', 'graphic designer', 'graphic design', 'motion graphics', 'film vfx', 'cgi', '3d design', 'digital art'],
    title: 'Animator / VFX & Game Designer',
    ico: '🎬',
    bc: 'purple',
    summary: 'India is a global hub for animation and VFX — studios like Tata Elxsi, Prime Focus, and DQ Entertainment employ thousands. Game Design is emerging fast with India\'s 600M+ smartphone users. NID and IIT B.Des programs are the top entry points.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'Any stream eligible. Build a portfolio of digital art or animations. Software skills (Blender, Maya, After Effects) are highly valued alongside the degree.',
    },
    class9_10: {
      stream: 'Arts',
      focus: ['Drawing', 'Digital art', 'Computers'],
      tip: 'Start creating digital art and short animations now — Blender and Krita are free. A portfolio built from Class 9 will open doors no exam score can match.',
    },
    streamId: 'Design',
    examNames: ['UCEED', 'NID DAT', 'CEED'],
    augIds: [],
    careers: ['2D / 3D Animator (Film / OTT)', 'VFX Artist (Bollywood, Hollywood studios in India)', 'Game Designer / Developer', 'Motion Graphics Designer', 'UI / UX Designer', 'AR / VR Experience Designer'],
  },

  // ── EMERGING TECH & FINANCE CAREERS ──────────────────────────────────

  {
    id: 'semiconductor-engineer',
    keywords: ['semiconductor', 'vlsi', 'chip', 'electronics', 'embedded', 'fpga', 'circuit design', 'eda', 'cadence', 'synopsys', 'qualcomm', 'nvidia chips'],
    title: 'Semiconductor / VLSI Engineer',
    ico: '💡',
    bc: 'teal',
    summary: 'India is becoming a global semiconductor hub with massive fab and design investments. VLSI design, embedded systems, and chip architecture engineers are in acute shortage — starting salaries ₹5–12 LPA (0–3 years), ₹12–30 LPA (3–5 years), ₹40–60+ LPA at senior/architect level. Top employers in India: Qualcomm, Nvidia, Intel, AMD, Broadcom, Samsung Semiconductor, Cadence, Synopsys, MediaTek, Renesas, Infineon. This is a 10-year boom sector with very low student awareness.',
    class12: {
      subjects: ['PCM', 'PCM+CS'],
      tip: 'Take Physics and Maths seriously — semiconductor physics and digital electronics are the foundation. Explore Arduino or Raspberry Pi projects in school itself.',
    },
    class9_10: {
      stream: 'PCM',
      focus: ['Maths', 'Physics', 'Electronics basics'],
      tip: 'Physics and Maths are the twin foundations of chip design. Try building simple circuits with Arduino or Raspberry Pi now — hands-on electronics gives you a massive head start.',
    },
    streamId: 'Engineering',
    examNames: ['JEE Main', 'JEE Advanced', 'GATE'],
    augIds: ['mtech'],
    careers: ['VLSI Design Engineer', 'Embedded Systems Engineer', 'Chip Verification Engineer', 'Analog Circuit Designer', 'FPGA Engineer', 'Semiconductor Process Engineer', 'Physical Design Engineer', 'DFT (Design for Test) Engineer', 'Applications Engineer — EDA Tools'],
  },

  {
    id: 'fintech-analyst',
    keywords: ['fintech', 'financial technology', 'data finance', 'banking tech', 'payment systems', 'bcom data science'],
    title: 'FinTech Analyst / Data Finance Professional',
    ico: '📊',
    bc: 'accent',
    summary: 'A plain B.Com is no longer enough in a world where banks, NBFCs, and startups run on data. FinTech roles require finance knowledge combined with Data Science, Python, or SQL. Students who pair a commerce background with data analytics skills are landing roles at ₹6–18 LPA — well above traditional finance starting salaries.',
    class12: {
      subjects: ['Commerce', 'PCM+CS'],
      tip: 'Start learning Excel and basic Python in Class 12. Understanding financial statements AND data will set you apart from pure Commerce or pure CS graduates.',
    },
    class9_10: {
      stream: 'Commerce',
      focus: ['Maths', 'Economics concepts', 'Computers'],
      tip: 'Start with basic Excel and financial literacy. Understanding money, data and technology together is the FinTech advantage — Commerce + Maths is the strongest combination.',
    },
    streamId: 'Commerce',
    examNames: ['CUET UG', 'CAT', 'IPMAT'],
    augIds: ['mba'],
    careers: ['FinTech Product Analyst', 'Credit Risk Analyst', 'Payments Engineer', 'Quantitative Analyst', 'Banking Data Scientist', 'RegTech Compliance Analyst'],
  },

  // ── OTHER NICHE CAREERS ───────────────────────────────────────────────

  {
    id: 'chef',
    keywords: ['chef', 'cook', 'culinary', 'hotel management', 'hospitality', 'restaurant', 'baking', 'pastry', 'food', 'hotel', 'tourism', 'catering', 'nchm'],
    title: 'Chef / Hospitality Manager',
    ico: '👨‍🍳',
    bc: 'amber',
    summary: 'Hotel Management and Culinary Arts is a thriving sector. NCHMCT JEE is the national exam for govt Hotel Management institutes (IHMs) — among the best hospitality schools in Asia. Both creative chefs and hotel managers are in huge demand globally.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'Any stream eligible. English communication and customer-facing personality are important. NCHMCT JEE has Reasoning, Aptitude and English sections.',
    },
    class9_10: {
      stream: 'Arts',
      focus: ['English communication', 'Science basics', 'Creativity'],
      tip: 'Any stream is eligible for hotel management. Develop your palate, experiment in the kitchen, and build strong English communication skills — personality matters as much as marks.',
    },
    streamId: 'Hotel',
    examNames: ['NCHM JEE'],
    augIds: [],
    careers: ['Executive Chef / Sous Chef (5-star hotels)', 'Pastry Chef / Baker', 'Hotel General Manager', 'Food & Beverage Manager', 'Restaurant Owner / Entrepreneur', 'Culinary Instructor'],
  },

  {
    id: 'nurse',
    keywords: ['nurse', 'nursing', 'physiotherapy', 'physiotherapist', 'paramedic', 'allied health', 'lab technician', 'radiology', 'optometry', 'speech therapy', 'occupational therapy'],
    title: 'Nurse / Allied Health Professional',
    ico: '🩻',
    bc: 'teal',
    summary: 'Nursing and Allied Health are among the most globally mobile careers — trained nurses and physiotherapists are in demand in the UK, Canada, Australia and the Gulf. B.Sc Nursing is a 4-year govt-funded program accessible via NEET-UG.',
    class12: {
      subjects: ['PCB', 'PCMB'],
      tip: 'Biology is mandatory. PCB or PCMB required. NEET-UG score is used for B.Sc Nursing admissions at central and state govt colleges.',
    },
    class9_10: {
      stream: 'PCB',
      focus: ['Biology', 'Chemistry', 'Science'],
      tip: 'Biology is mandatory for nursing and allied health. Build your empathy alongside your science — nursing is both a technical and deeply human career.',
    },
    streamId: 'Paramedical',
    examNames: ['NEET-UG'],
    augIds: [],
    careers: ['Staff Nurse (Govt Hospital / AIIMS / JIPMER)', 'Physiotherapist', 'Medical Lab Technician', 'Radiographer / Sonographer', 'Occupational Therapist', 'Nursing Officer (Central Govt — ESIC, Railways)'],
  },

  {
    id: 'cyber-security',
    keywords: ['cyber security', 'cybersecurity', 'ethical hacker', 'hacker', 'cyber', 'information security', 'network security', 'digital forensics', 'rru', 'cybercrime'],
    title: 'Cyber Security Expert',
    ico: '🔐',
    bc: 'accent',
    summary: 'Cyber Security is the fastest-growing tech career globally — India faces 3,000+ cyber attacks daily. Rashtriya Raksha University (RRU) is India\'s only national security university offering B.Tech Cyber Security. Also accessible via CSE at IITs/NITs.',
    class12: {
      subjects: ['PCM', 'PCM+CS'],
      tip: 'PCM or PCM+CS preferred. Computer Science as elective gives a head start. Logical thinking and problem-solving are core skills.',
    },
    class9_10: {
      stream: 'PCM',
      focus: ['Maths', 'Computers', 'Logical reasoning'],
      tip: 'If your school offers Computer Science in Class 9-10, take it. Start exploring basic networking, competitive programming and logical puzzles — these are the foundations of cyber security.',
    },
    streamId: 'Engineering',
    courseFilter: ['cyber', 'rru'],
    examNames: ['RRU Entrance Exam', 'JEE Main'],
    augIds: ['mtech'],
    careers: ['Ethical Hacker / Penetration Tester', 'Cyber Security Analyst', 'Digital Forensics Investigator', 'Security Engineer (CERT-In, NIC, Banks)', 'Chief Information Security Officer (CISO)', 'Cyber Crime Officer (Police)'],
  },

  {
    id: 'sports',
    keywords: ['sports', 'athlete', 'cricket', 'football', 'badminton', 'swimming', 'athletics', 'kabaddi', 'physical education', 'nis', 'sai', 'sports coach', 'fitness'],
    title: 'Sports Professional / Coach',
    ico: '🏅',
    bc: 'coral',
    summary: 'A career in sports can go two ways — competitive athlete or sports science / coaching. NIS Patiala (National Institute of Sports) and SAI (Sports Authority of India) are the top govt institutions. B.P.Ed opens govt teaching roles.',
    class12: {
      subjects: ['PCM', 'PCM+CS', 'PCB', 'PCMB', 'Commerce', 'Commerce+Maths', 'Arts'],
      tip: 'Any stream eligible. State / national level sports achievement is a strong advantage — many colleges have sports quota seats with relaxed cutoffs.',
    },
    class9_10: {
      stream: 'Arts',
      focus: ['Physical Education', 'Your chosen sport', 'Health & Fitness'],
      tip: 'State and national level achievement matters more than your academic stream. Specialise in one sport from Class 8-9 and train consistently — early specialisation is a major advantage.',
    },
    streamId: 'Sports',
    examNames: ['CUET UG'],
    augIds: [],
    careers: ['Professional Athlete / Player', 'Sports Coach (NIS certified)', 'Physical Education Teacher (govt schools)', 'Sports Physiotherapist', 'Sports Administrator (SAI, BCCI, State Associations)', 'Fitness Trainer / Personal Coach'],
  },

  {
    id: 'microbiologist',
    keywords: ['microbiologist', 'microbiology', 'bacteria', 'virus', 'pathogen', 'infectious disease', 'clinical microbiology', 'pharma QC', 'food safety', 'R&D', 'research scientist', 'CSIR', 'ICMR', 'lab scientist'],
    title: 'Microbiologist',
    ico: '🦠',
    bc: 'green',
    summary: 'Microbiologists study bacteria, viruses, fungi, and other microorganisms — in hospitals, pharma labs, food industries, public health agencies, and research institutions. India\'s pharmaceutical and biotech sectors are large employers; ICMR, CSIR labs, and DRDO also recruit microbiologists for public health and defence research.',
    class12: {
      subjects: ['PCB', 'PCMB'],
      tip: 'Strong Biology and Chemistry are essential. CUET UG opens central universities like DU, BHU, Hyderabad Central, and Pondicherry. IISERs via IISER IAT are the research-track gold standard.',
    },
    streamId: 'Science',
    examNames: ['CUET UG', 'IISER IAT', 'NEST'],
    augIds: ['phd', 'msc', 'isro-drdo'],
    careers: ['Clinical Microbiologist', 'Pharma QC Analyst', 'Public Health Researcher', 'Food Safety Scientist', 'Industrial Microbiologist', 'R&D Scientist (CSIR / ICMR)'],
  },

  {
    id: 'bioinformatics',
    keywords: ['bioinformatics', 'computational biology', 'genomics', 'biostatistics', 'medical data scientist', 'systems biology', 'genetic counselor', 'epidemiologist', 'life sciences data', 'proteomics', 'sequencing'],
    title: 'Bioinformatics / Life Sciences Data Scientist',
    ico: '🧬',
    bc: 'teal',
    summary: 'Bioinformatics sits at the intersection of biology, statistics, and computing — analysing genomic data, drug targets, protein structures, and disease patterns using algorithms and AI. India\'s pharmaceutical and biotech sectors (Sun Pharma, Dr. Reddy\'s, Biocon, CSIR labs, ICMR) actively recruit these specialists. Salaries start at ₹6–12 LPA and go to ₹20+ LPA in global genomics and pharma companies.',
    class12: {
      subjects: ['PCB', 'PCMB', 'PCM+CS'],
      tip: 'Biology + Computer Science / Mathematics is the ideal combination. PCMB or PCB with self-taught Python gives you the strongest foundation for bioinformatics UG programmes.',
    },
    streamId: 'Science',
    examNames: ['CUET UG', 'IISER IAT', 'NEST', 'JEE Main'],
    augIds: ['msc', 'phd', 'isro-drdo'],
    careers: ['Bioinformatics Scientist', 'Computational Biologist', 'Biostatistician', 'Medical Data Scientist', 'Genomics Analyst', 'Epidemiologist', 'Genetic Counselor', 'Systems Biology Researcher', 'AI in Healthcare Specialist'],
  },

  {
    id: 'clinical-research',
    keywords: ['clinical research', 'clinical trial', 'pharmacovigilance', 'drug safety', 'regulatory affairs', 'CRA', 'CRO', 'medical writing', 'clinical data', 'drug development', 'clinical scientist', 'toxicologist'],
    title: 'Clinical Research / Pharmacovigilance Professional',
    ico: '📋',
    bc: 'coral',
    summary: 'India is the world\'s third-largest clinical trial market. CROs (IQVIA, Syneos Health, PRA Health, Parexel) and pharma companies (Sun Pharma, Cipla, Dr. Reddy\'s, Lupin) hire Clinical Research Associates, Pharmacovigilance Scientists, and Regulatory Affairs Officers every year. Starting salaries ₹4–10 LPA; senior roles ₹15–25 LPA.',
    class12: {
      subjects: ['PCB', 'PCMB'],
      tip: 'Biology and Chemistry are the core foundations. B.Pharm, B.Sc Life Sciences, or MBBS/BDS are the most common entry points. Even a B.Sc Biotechnology works with the right post-graduate certification.',
    },
    streamId: 'Medical',
    examNames: ['NEET-UG', 'CUET UG', 'GPAT'],
    augIds: ['msc', 'phd'],
    careers: ['Clinical Research Associate (CRA)', 'Pharmacovigilance Scientist', 'Regulatory Affairs Officer', 'Clinical Trial Manager', 'Drug Safety Associate', 'Medical Science Liaison', 'Medical Writer', 'Toxicologist'],
  },

  {
    id: 'marine-biologist',
    keywords: ['marine biologist', 'marine biology', 'oceanographer', 'ocean', 'sea', 'marine life', 'coral reef', 'fisheries', 'coastal', 'marine conservation', 'aquatic biology', 'ocean science'],
    title: 'Marine Biologist',
    ico: '🐬',
    bc: 'teal',
    summary: 'Marine biologists study ocean ecosystems, marine organisms, coral reefs, and fisheries. India\'s long coastline and institutions like CMLRE, NCAOR, ICAR-CMFRI, and FSI actively recruit marine scientists. Career paths range from government research labs to international conservation bodies and the UN.',
    class12: {
      subjects: ['PCB', 'PCMB'],
      tip: 'CUSAT (Kochi), Goa University, Andhra University, and Annamalai University have dedicated Marine Science departments with coastal campuses. Admission via CUET UG or university-specific tests.',
    },
    streamId: 'Science',
    examNames: ['CUET UG', 'KEAM', 'IISER IAT'],
    augIds: ['phd', 'msc'],
    careers: ['Marine Biologist', 'Oceanographer', 'Fisheries Scientist', 'Coastal Zone Manager', 'Marine Conservationist', 'Research Scientist (NCAOR / CMLRE / ICAR-CMFRI)'],
  },

];
