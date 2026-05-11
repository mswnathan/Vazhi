// Vazhi — Psychometric Test Data (Holland RIASEC Model)
// Phase 2 redesign: forced-choice interest pairs, adaptive follow-up,
//                   behavioral-anchor skills, workstyle forced-choice.

// ── WORKSTYLE QUESTIONS (5 forced-choice A/B pairs) ─────────────────────────
const WORKSTYLE_QUESTIONS = [

  { id:'ws-1', typeA:'R', typeB:'I',
    en_a:'Work with physical things — tools, machines, materials, the outdoor world',
    en_b:'Work with ideas and knowledge — research, analysis, theories',
    ta_a:'உடல் பொருட்களுடன் பணிபுரிவது — கருவிகள், இயந்திரங்கள், மூலப்பொருட்கள், வெளிப்புறம்',
    ta_b:'யோசனைகள் மற்றும் அறிவுடன் பணிபுரிவது — ஆராய்ச்சி, பகுப்பாய்வு, கோட்பாடுகள்' },

  { id:'ws-2', typeA:'E', typeB:'S',
    en_a:'Lead people — set direction, make decisions, drive outcomes',
    en_b:'Help people — support, teach, heal, or counsel them directly',
    ta_a:'மக்களை வழிநடத்துவது — திசையை நிர்ணயிப்பது, முடிவுகள் எடுப்பது, முடிவுகளை அடைவது',
    ta_b:'மக்களுக்கு நேரடியாக உதவுவது — ஆதரிப்பது, கற்பிப்பது, குணப்படுத்துவது அல்லது ஆலோசனை வழங்குவது' },

  { id:'ws-3', typeA:'A', typeB:'C',
    en_a:'Create and design — express original ideas, make things that did not exist before',
    en_b:'Organise and manage — keep systems accurate, consistent, and well-maintained',
    ta_a:'படைக்கவும் வடிவமைக்கவும் — அசல் யோசனைகளை வெளிப்படுத்துவது, முன்பு இல்லாத பொருட்களை உருவாக்குவது',
    ta_b:'ஒழுங்கமைக்கவும் நிர்வகிக்கவும் — முறைமைகளை துல்லியமாக, நிலையாக, நன்றாக பராமரிக்கவும்' },

  { id:'ws-4', typeA:'I', typeB:'E',
    en_a:'Work independently on deep, complex problems — focused, self-directed research',
    en_b:'Work with others toward goals — influencing, negotiating, building something together',
    ta_a:'ஆழமான, சிக்கலான பிரச்சினைகளில் சுதந்திரமாக பணிபுரிவது — கவனமான, சுய திசையில் ஆராய்ச்சி',
    ta_b:'இலக்குகளை நோக்கி மற்றவர்களுடன் பணிபுரிவது — பாதிப்பு ஏற்படுத்துவது, பேச்சுவார்த்தை, ஒன்றாக கட்டமைப்பது' },

  { id:'ws-5', typeA:'S', typeB:'C',
    en_a:'People-centred environments — relationships, community, human connection are central',
    en_b:'System-centred environments — accuracy, rules, structured data, and processes matter most',
    ta_a:'மக்கள் மையமான சூழல்கள் — உறவுகள், சமூகம், மனித தொடர்பு மையமானது',
    ta_b:'முறைமை மையமான சூழல்கள் — துல்லியம், விதிகள், கட்டமைக்கப்பட்ட தரவு மற்றும் செயல்முறைகள் முக்கியமானவை' },

];

// ── INTEREST QUESTIONS — CLASS 8 TO 10 (very simple language) ────────────────
// Covers all 15 RIASEC type-pairs × 2 = 30 questions.
// Prompt: "Which would you enjoy more?"

const INTEREST_QUESTIONS_8_10 = [

  // ── R–I ──
  { id:'ri-1', types:['R','I'],
    a:{ text:'Repairing or building things',          text_ta:'பொருட்களை சரி செய்வது அல்லது கட்டுவது',       type:'R' },
    b:{ text:'Learning how things work',              text_ta:'பொருட்கள் எப்படி வேலை செய்கின்றன என்று தெரிந்து கொள்வது', type:'I' } },

  { id:'ri-2', types:['R','I'],
    a:{ text:'Working with tools or machines',        text_ta:'கருவிகள் அல்லது இயந்திரங்களுடன் வேலை செய்வது', type:'R' },
    b:{ text:'Reading and finding answers',           text_ta:'படித்து பதில்களை கண்டுபிடிப்பது',             type:'I' } },

  // ── R–A ──
  { id:'ra-1', types:['R','A'],
    a:{ text:'Making useful things with your hands',  text_ta:'கைகளால் பயனுள்ள பொருட்கள் செய்வது',          type:'R' },
    b:{ text:'Making creative things',               text_ta:'புதிய creative விஷயங்கள் செய்வது',            type:'A' } },

  { id:'ra-2', types:['R','A'],
    a:{ text:'Fixing broken things',                 text_ta:'பழுதான பொருட்களை சரி செய்வது',                type:'R' },
    b:{ text:'Drawing, writing, or creating',        text_ta:'ஓவியம் வரைவது அல்லது உருவாக்குவது', type:'A' } },

  // ── R–S ──
  { id:'rs-1', types:['R','S'],
    a:{ text:'Working with tools outside or in a workshop', text_ta:'கருவிகளுடன் வெளியே வேலை செய்வது', type:'R' },
    b:{ text:'Teaching or helping people',           text_ta:'மற்றவர்களுக்கு உதவுவது அல்லது கற்பிப்பது',    type:'S' } },

  { id:'rs-2', types:['R','S'],
    a:{ text:'Taking care of plants, animals, or machines', text_ta:'செடி, விலங்கு அல்லது இயந்திரங்களை கவனிப்பது', type:'R' },
    b:{ text:'Taking care of people',               text_ta:'மனிதர்களை கவனித்து உதவுவது',                   type:'S' } },

  // ── R–E ──
  { id:'re-1', types:['R','E'],
    a:{ text:'Building or repairing things yourself', text_ta:'பொருட்களை நீங்களே கட்டுவது அல்லது சரி செய்வது', type:'R' },
    b:{ text:'Leading a group',                      text_ta:'ஒரு குழுவை வழிநடத்துவது',                    type:'E' } },

  { id:'re-2', types:['R','E'],
    a:{ text:'Doing physical work carefully',        text_ta:'உடல் உழைப்பு வேலை கவனமாக செய்வது',            type:'R' },
    b:{ text:'Sharing ideas with people',            text_ta:'உங்கள் கருத்துகளை மற்றவர்களுடன் பகிர்வது',    type:'E' } },

  // ── R–C ──
  { id:'rc-1', types:['R','C'],
    a:{ text:'Working with machines or tools',       text_ta:'கருவிகள் அல்லது இயந்திரங்களுடன் வேலை செய்வது', type:'R' },
    b:{ text:'Keeping records neat and correct',     text_ta:'பதிவுகளை சரியாக வைத்திருப்பது',               type:'C' } },

  { id:'rc-2', types:['R','C'],
    a:{ text:'Repairing things until they work well', text_ta:'ஒரு பொருள் சரியாக வேலை செய்யும் வரை சரி செய்வது', type:'R' },
    b:{ text:'Following steps carefully',            text_ta:'விதிமுறைகளை கவனமாக பின்பற்றுவது',             type:'C' } },

  // ── I–A ──
  { id:'ia-1', types:['I','A'],
    a:{ text:'Solving difficult questions',           text_ta:'கடினமான கேள்விகளுக்கு பதில் கண்டுபிடிப்பது',  type:'I' },
    b:{ text:'Making something new and creative',    text_ta:'புதிய creative விஷயங்கள் உருவாக்குவது',        type:'A' } },

  { id:'ia-2', types:['I','A'],
    a:{ text:'Finding out if something is true',     text_ta:'எது உண்மை என்று கண்டுபிடிப்பது',              type:'I' },
    b:{ text:'Showing ideas through art or music',   text_ta:'கலை அல்லது இசை மூலம் ideas காட்டுவது',    type:'A' } },

  // ── I–S ──
  { id:'is-1', types:['I','S'],
    a:{ text:'Solving problems by thinking deeply',  text_ta:'யோசித்து பிரச்சினைகளை தீர்ப்பது',             type:'I' },
    b:{ text:'Helping someone with their problems',  text_ta:'மற்றவர்களின் பிரச்சினைக்கு உதவுவது',          type:'S' } },

  { id:'is-2', types:['I','S'],
    a:{ text:'Learning how nature or science works', text_ta:'அறிவியல் அல்லது இயற்கை பற்றி கற்றுக்கொள்வது', type:'I' },
    b:{ text:'Understanding people and feelings',    text_ta:'மனிதர்களின் உணர்வுகளை புரிந்துகொள்வது',        type:'S' } },

  // ── I–E ──
  { id:'ie-1', types:['I','E'],
    a:{ text:'Studying and learning quietly',        text_ta:'அமைதியாக படித்து கற்றுக்கொள்வது',             type:'I' },
    b:{ text:'Working with people toward a goal',   text_ta:'மற்றவர்களுடன் சேர்ந்து வேலை செய்வது',          type:'E' } },

  { id:'ie-2', types:['I','E'],
    a:{ text:'Becoming an expert in one subject',   text_ta:'ஒரு துறையை நன்றாக புரிந்து கொள்வது',               type:'I' },
    b:{ text:'Starting and growing something new',  text_ta:'புதிதாக ஏதாவது முயற்சி செய்வது',         type:'E' } },

  // ── I–C ──
  { id:'ic-1', types:['I','C'],
    a:{ text:'Asking many questions and exploring ideas', text_ta:'நிறைய கேள்விகள் கேட்டு தெரிந்து கொள்வது', type:'I' },
    b:{ text:'Following clear rules and steps',     text_ta:'விதிமுறைகளை பின்பற்றுவது',                     type:'C' } },

  { id:'ic-2', types:['I','C'],
    a:{ text:'Testing and finding answers yourself', text_ta:'நீங்களே சோதித்து பதில் கண்டுபிடிப்பது',        type:'I' },
    b:{ text:'Checking work carefully for mistakes', text_ta:'தவறுகள் இல்லையா என்று சரிபார்ப்பது',          type:'C' } },

  // ── A–S ──
  { id:'as-1', types:['A','S'],
    a:{ text:'Creating art, stories, or designs',   text_ta:'ஓவியம், கதை அல்லது design செய்வது',            type:'A' },
    b:{ text:'Helping or teaching people',          text_ta:'மற்றவர்களுக்கு உதவுவது அல்லது கற்பிப்பது',    type:'S' } },

  { id:'as-2', types:['A','S'],
    a:{ text:'Spending time doing creative work',   text_ta:'creative வேலை செய்வதில் நேரம் செலவிடுவது',     type:'A' },
    b:{ text:'Spending time helping people',        text_ta:'மற்றவர்களுக்கு உதவுவதில் நேரம் செலவிடுவது',   type:'S' } },

  // ── A–E ──
  { id:'ae-1', types:['A','E'],
    a:{ text:'Working on your own creative ideas',  text_ta:'உங்கள் creative ideas மீது வேலை செய்வது',       type:'A' },
    b:{ text:'Leading a team to finish work',       text_ta:'ஒரு குழுவை வழிநடத்துவது',                      type:'E' } },

  { id:'ae-2', types:['A','E'],
    a:{ text:'Sharing ideas through art, writing, or video', text_ta:'art, writing அல்லது video மூலம் ideas பகிர்வது', type:'A' },
    b:{ text:'Speaking to people and leading them', text_ta:'மக்களிடம் பேசி வழிநடத்துவது',                 type:'E' } },

  // ── A–C ──
  { id:'ac-1', types:['A','C'],
    a:{ text:'Trying new ideas freely',             text_ta:'புதிய ideas முயற்சி செய்வது',                   type:'A' },
    b:{ text:'Following rules carefully',           text_ta:'விதிமுறைகளை கவனமாக பின்பற்றுவது',             type:'C' } },

  { id:'ac-2', types:['A','C'],
    a:{ text:'Doing things in your own way',        text_ta:'உங்கள் முறையில் வேலை செய்வது',                 type:'A' },
    b:{ text:'Following a proper process',          text_ta:'சரியான முறையை பின்பற்றுவது',                   type:'C' } },

  // ── S–E ──
  { id:'se-1', types:['S','E'],
    a:{ text:'Helping one person at a time',        text_ta:'ஒருவருக்கு ஒருவராக உதவுவது',                   type:'S' },
    b:{ text:'Leading a whole group',               text_ta:'ஒரு குழுவை வழிநடத்துவது',                      type:'E' } },

  { id:'se-2', types:['S','E'],
    a:{ text:'Caring for people who need help',     text_ta:'உதவி தேவைப்படும் மக்களுக்கு ஆதரவு அளிப்பது',  type:'S' },
    b:{ text:'Motivating people to achieve something', text_ta:'மற்றவர்களை ஊக்கப்படுத்துவது',               type:'E' } },

  // ── S–C ──
  { id:'sc-1', types:['S','C'],
    a:{ text:'Building good relationships with people', text_ta:'மக்களுடன் நல்ல உறவு உருவாக்குவது',          type:'S' },
    b:{ text:'Organising records and information',  text_ta:'பதிவுகள் மற்றும் தகவல்களை ஒழுங்காக வைத்திருப்பது', type:'C' } },

  { id:'sc-2', types:['S','C'],
    a:{ text:'Working closely with people',         text_ta:'மக்களுடன் நெருக்கமாக வேலை செய்வது',            type:'S' },
    b:{ text:'Doing work carefully and correctly',  text_ta:'வேலைகளை சரியாக செய்வது',                       type:'C' } },

  // ── E–C ──
  { id:'ec-1', types:['E','C'],
    a:{ text:'Starting new things and taking charge', text_ta:'புதிய விஷயங்களை ஆரம்பித்து பொறுப்பு எடுப்பது', type:'E' },
    b:{ text:'Keeping things organised and correct', text_ta:'எல்லாவற்றையும் ஒழுங்காக வைத்திருப்பது',        type:'C' } },

  { id:'ec-2', types:['E','C'],
    a:{ text:'Starting something new and growing it', text_ta:'புதிய விஷயங்களை ஆரம்பித்து வளர்ப்பது',        type:'E' },
    b:{ text:'Managing daily work carefully',       text_ta:'தினசரி வேலைகளை கவனமாக செய்வது',           type:'C' } },

];

// ── INTEREST QUESTIONS — CLASS 11 TO 12 (slightly more mature) ───────────────
const INTEREST_QUESTIONS_11_12 = [

  // ── R–I ──
  { id:'ri-1', types:['R','I'],
    a:{ text:'Repairing or building machines or equipment', text_ta:'இயந்திரங்கள் அல்லது பொருட்களை சரி செய்வது', type:'R' },
    b:{ text:'Understanding how things work',        text_ta:'விஷயங்கள் எப்படி வேலை செய்கின்றன என்று புரிந்துகொள்வது', type:'I' } },

  { id:'ri-2', types:['R','I'],
    a:{ text:'Working on practical tasks with tools', text_ta:'கருவிகளுடன் practical வேலை செய்வது',            type:'R' },
    b:{ text:'Studying and finding answers',         text_ta:'படித்து பதில்களை கண்டுபிடிப்பது',              type:'I' } },

  // ── R–A ──
  { id:'ra-1', types:['R','A'],
    a:{ text:'Building useful things',               text_ta:'பயனுள்ள பொருட்களை உருவாக்குவது',                type:'R' },
    b:{ text:'Creating designs or ideas',            text_ta:'புதிய ideas அல்லது designs உருவாக்குவது',        type:'A' } },

  { id:'ra-2', types:['R','A'],
    a:{ text:'Repairing machines or devices',        text_ta:'இயந்திரங்கள் அல்லது devices சரி செய்வது',        type:'R' },
    b:{ text:'Creating art, writing, or media',      text_ta:'art, writing அல்லது media உருவாக்குவது',         type:'A' } },

  // ── R–S ──
  { id:'rs-1', types:['R','S'],
    a:{ text:'Working with tools, machines, or land', text_ta:'கருவிகள், இயந்திரங்கள் அல்லது நிலத்துடன் வேலை செய்வது', type:'R' },
    b:{ text:'Teaching, guiding, or helping people', text_ta:'மக்களுக்கு உதவுவது அல்லது வழிகாட்டுவது',       type:'S' } },

  { id:'rs-2', types:['R','S'],
    a:{ text:'Taking care of machines, plants, or animals', text_ta:'இயந்திரங்கள், செடிகள் அல்லது விலங்குகளை கவனிப்பது', type:'R' },
    b:{ text:'Supporting people during difficulties', text_ta:'சிரமத்தில் இருக்கும் மக்களுக்கு உதவுவது',      type:'S' } },

  // ── R–E ──
  { id:'re-1', types:['R','E'],
    a:{ text:'Doing skilled practical work',         text_ta:'திறமையான practical வேலை செய்வது',               type:'R' },
    b:{ text:'Leading people and making decisions',  text_ta:'மக்களை வழிநடத்தி முடிவெடுப்பது',                type:'E' } },

  { id:'re-2', types:['R','E'],
    a:{ text:'Doing hands-on work carefully',        text_ta:'hands-on வேலை கவனமாக செய்வது',                  type:'R' },
    b:{ text:'Sharing ideas and influencing people', text_ta:'ideas பகிர்ந்து மக்களை ஊக்கப்படுத்துவது',        type:'E' } },

  // ── R–C ──
  { id:'rc-1', types:['R','C'],
    a:{ text:'Working with physical tools and equipment', text_ta:'கருவிகள் மற்றும் equipment-களுடன் வேலை செய்வது', type:'R' },
    b:{ text:'Managing records and information',    text_ta:'பதிவுகள் மற்றும் தகவல்களை நிர்வகிப்பது',         type:'C' } },

  { id:'rc-2', types:['R','C'],
    a:{ text:'Solving practical problems',           text_ta:'practical பிரச்சினைகளை தீர்ப்பது',               type:'R' },
    b:{ text:'Following systems and procedures carefully', text_ta:'systems மற்றும் procedures-ஐ பின்பற்றுவது', type:'C' } },

  // ── I–A ──
  { id:'ia-1', types:['I','A'],
    a:{ text:'Solving complex problems',             text_ta:'கடினமான பிரச்சினைகளை தீர்ப்பது',                type:'I' },
    b:{ text:'Creating something original',          text_ta:'புதிய creative விஷயங்கள் உருவாக்குவது',          type:'A' } },

  { id:'ia-2', types:['I','A'],
    a:{ text:'Studying facts to find the truth',    text_ta:'உண்மையை கண்டுபிடிக்க facts படிப்பது',            type:'I' },
    b:{ text:'Expressing ideas through creative work', text_ta:'creative வேலை மூலம் ideas வெளிப்படுத்துவது',   type:'A' } },

  // ── I–S ──
  { id:'is-1', types:['I','S'],
    a:{ text:'Thinking deeply to solve problems',   text_ta:'ஆழமாக யோசித்து பிரச்சினைகளை தீர்ப்பது',         type:'I' },
    b:{ text:'Helping people with their challenges', text_ta:'மக்களின் சிரமங்களுக்கு உதவுவது',                type:'S' } },

  { id:'is-2', types:['I','S'],
    a:{ text:'Learning how science, business, or nature works', text_ta:'science, business அல்லது nature பற்றி கற்றுக்கொள்வது', type:'I' },
    b:{ text:'Understanding people and behaviour',  text_ta:'மனிதர்களின் நடத்தை மற்றும் உணர்வுகளை புரிந்துகொள்வது', type:'S' } },

  // ── I–E ──
  { id:'ie-1', types:['I','E'],
    a:{ text:'Studying and researching independently', text_ta:'தனியாக படித்து ஆராய்ச்சி செய்வது',             type:'I' },
    b:{ text:'Working with people to achieve goals', text_ta:'மற்றவர்களுடன் சேர்ந்து இலக்கை அடைவது',          type:'E' } },

  { id:'ie-2', types:['I','E'],
    a:{ text:'Becoming highly skilled in one subject', text_ta:'ஒரு பாடத்தில் அதிக திறமை பெறுவது',             type:'I' },
    b:{ text:'Starting and growing projects or businesses', text_ta:'புதிய projects அல்லது business ஆரம்பிப்பது', type:'E' } },

  // ── I–C ──
  { id:'ic-1', types:['I','C'],
    a:{ text:'Exploring ideas and asking questions', text_ta:'கேள்விகள் கேட்டு ideas ஆராய்வது',                type:'I' },
    b:{ text:'Following clear methods and systems',  text_ta:'clear methods மற்றும் systems பின்பற்றுவது',       type:'C' } },

  { id:'ic-2', types:['I','C'],
    a:{ text:'Testing ideas and finding answers',   text_ta:'ideas சோதித்து பதில் கண்டுபிடிப்பது',             type:'I' },
    b:{ text:'Checking details and avoiding mistakes', text_ta:'details சரிபார்த்து தவறுகளை தவிர்ப்பது',       type:'C' } },

  // ── A–S ──
  { id:'as-1', types:['A','S'],
    a:{ text:'Creating art, content, or designs',   text_ta:'art, content அல்லது designs உருவாக்குவது',         type:'A' },
    b:{ text:'Teaching, guiding, or supporting people', text_ta:'மக்களை கற்பிப்பது அல்லது வழிகாட்டுவது',       type:'S' } },

  { id:'as-2', types:['A','S'],
    a:{ text:'Spending time on creative work',      text_ta:'creative வேலைகளில் நேரம் செலவிடுவது',             type:'A' },
    b:{ text:'Spending time helping others',        text_ta:'மற்றவர்களுக்கு உதவுவதில் நேரம் செலவிடுவது',      type:'S' } },

  // ── A–E ──
  { id:'ae-1', types:['A','E'],
    a:{ text:'Working on your own creative ideas',  text_ta:'உங்கள் creative ideas மீது வேலை செய்வது',          type:'A' },
    b:{ text:'Leading a team toward a goal',        text_ta:'ஒரு குழுவை இலக்கிற்கு வழிநடத்துவது',             type:'E' } },

  { id:'ae-2', types:['A','E'],
    a:{ text:'Sharing ideas through media, writing, or design', text_ta:'media, writing அல்லது design மூலம் ideas பகிர்வது', type:'A' },
    b:{ text:'Presenting ideas and influencing people', text_ta:'ideas சொல்லி மக்களை influence செய்வது',        type:'E' } },

  // ── A–C ──
  { id:'ac-1', types:['A','C'],
    a:{ text:'Working freely and trying new ideas', text_ta:'சுதந்திரமாக புதிய ideas முயற்சி செய்வது',          type:'A' },
    b:{ text:'Working carefully with rules and details', text_ta:'விதிமுறைகள் மற்றும் details-ஐ பின்பற்றுவது',  type:'C' } },

  { id:'ac-2', types:['A','C'],
    a:{ text:'Trying your own ideas and methods',   text_ta:'உங்கள் ideas மற்றும் methods முயற்சி செய்வது',     type:'A' },
    b:{ text:'Following proper steps and systems',  text_ta:'proper steps மற்றும் systems பின்பற்றுவது',         type:'C' } },

  // ── S–E ──
  { id:'se-1', types:['S','E'],
    a:{ text:'Helping people one-on-one',           text_ta:'ஒருவருக்கு ஒருவராக உதவுவது',                      type:'S' },
    b:{ text:'Leading groups and motivating people', text_ta:'குழுக்களை வழிநடத்துவது',                          type:'E' } },

  { id:'se-2', types:['S','E'],
    a:{ text:'Supporting people who need help',     text_ta:'உதவி தேவைப்படும் மக்களுக்கு ஆதரவு அளிப்பது',     type:'S' },
    b:{ text:'Encouraging people to achieve goals', text_ta:'மக்களை இலக்கை அடைய ஊக்கப்படுத்துவது',            type:'E' } },

  // ── S–C ──
  { id:'sc-1', types:['S','C'],
    a:{ text:'Building relationships with people',  text_ta:'மக்களுடன் நல்ல உறவு உருவாக்குவது',                type:'S' },
    b:{ text:'Organising records and information',  text_ta:'பதிவுகள் மற்றும் தகவல்களை ஒழுங்குபடுத்துவது',    type:'C' } },

  { id:'sc-2', types:['S','C'],
    a:{ text:'Working closely with people and their needs', text_ta:'மக்களுடன் நெருக்கமாக வேலை செய்வது',        type:'S' },
    b:{ text:'Working carefully with accuracy and process', text_ta:'வேலைகளை துல்லியமாக செய்வது',               type:'C' } },

  // ── E–C ──
  { id:'ec-1', types:['E','C'],
    a:{ text:'Taking charge and starting new ideas', text_ta:'பொறுப்பு எடுத்து புதிய விஷயங்கள் ஆரம்பிப்பது',   type:'E' },
    b:{ text:'Maintaining order and accuracy',      text_ta:'ஒழுங்கையும் சரியான செயல்பாட்டையும் பராமரிப்பது', type:'C' } },

  { id:'ec-2', types:['E','C'],
    a:{ text:'Starting and growing something new',  text_ta:'புதிய விஷயங்களை ஆரம்பித்து வளர்ப்பது',            type:'E' },
    b:{ text:'Managing work in a careful and organised way', text_ta:'வேலைகளை ஒழுங்காக நிர்வகிப்பது',          type:'C' } },

];

// ── FOLLOW-UP QUESTIONS (keyed by Holland type, 2 questions each) ─────────────
// Triggered adaptively for the top-2 scoring types after the interest block.
// Each option maps to a subtype used to refine the final profile.

const FOLLOWUP_QUESTIONS = {

  R: [
    { id:'fu-R-1', forType:'R',
      q:'When you imagine building or creating something, what feels most satisfying?',
      options:[
        { text:'Fixing something broken and making it work again',            subtype:'R-fix'    },
        { text:'Constructing a new structure or object from raw materials',   subtype:'R-build'  },
        { text:'Operating and mastering complex machines or technology',      subtype:'R-tech'   },
        { text:'Working with nature — farming, forestry, or environmental work', subtype:'R-nature' },
      ]
    },
    { id:'fu-R-2', forType:'R',
      q:'Which work environment excites you most?',
      options:[
        { text:'A repair workshop or field service centre',                   subtype:'R-fix'    },
        { text:'A construction site or civil engineering project',            subtype:'R-build'  },
        { text:'A factory floor, control room, or technical facility',        subtype:'R-tech'   },
        { text:'Outdoors — fields, forests, marine or rural environments',    subtype:'R-nature' },
      ]
    },
  ],

  I: [
    { id:'fu-I-1', forType:'I',
      q:'What excites you most about investigating or discovering things?',
      options:[
        { text:'Finding patterns and insights hidden in data or numbers',        subtype:'I-data'     },
        { text:'Understanding how people think, feel, and behave',              subtype:'I-human'    },
        { text:'Discovering new phenomena — physics, chemistry, biology',       subtype:'I-discover' },
        { text:'Solving complex logical or mathematical puzzles',                subtype:'I-pattern'  },
      ]
    },
    { id:'fu-I-2', forType:'I',
      q:'If you had a full day to do research, what would you explore?',
      options:[
        { text:'A large dataset — looking for patterns and building models',         subtype:'I-data'     },
        { text:'A psychology or social question about human behaviour',              subtype:'I-human'    },
        { text:'A science experiment — testing a hypothesis under controlled conditions', subtype:'I-discover' },
        { text:'A maths or logic proof — following the reasoning to its conclusion', subtype:'I-pattern'  },
      ]
    },
  ],

  A: [
    { id:'fu-A-1', forType:'A',
      q:'Which type of creative work excites you most?',
      options:[
        { text:'Designing visual things — logos, interfaces, spaces, or illustrations', subtype:'A-design'  },
        { text:'Writing — stories, scripts, poetry, journalism, or blogs',             subtype:'A-write'   },
        { text:'Performing — music, dance, theatre, or acting',                        subtype:'A-perform' },
        { text:'Digital creation — animation, video, game design, or digital art',     subtype:'A-digital' },
      ]
    },
    { id:'fu-A-2', forType:'A',
      q:'When expressing yourself creatively, which feels most natural?',
      options:[
        { text:'Through visuals — drawing, photography, or graphic design', subtype:'A-design'  },
        { text:'Through words — writing, storytelling, or screenwriting',   subtype:'A-write'   },
        { text:'Through sound or movement — music, singing, or dance',      subtype:'A-perform' },
        { text:'Through technology — editing, animating, or building digital content', subtype:'A-digital' },
      ]
    },
  ],

  S: [
    { id:'fu-S-1', forType:'S',
      q:'Which way of helping people feels most meaningful to you?',
      options:[
        { text:'Teaching, coaching, or mentoring — building others\' knowledge and skills', subtype:'S-teach'     },
        { text:'Counselling, healing, or welfare — supporting emotional or physical wellbeing', subtype:'S-care'  },
        { text:'Community work — driving social change and serving groups in need',          subtype:'S-community' },
        { text:'Connecting people — HR, communications, or facilitation roles',             subtype:'S-connect'   },
      ]
    },
    { id:'fu-S-2', forType:'S',
      q:'Which setting would feel most fulfilling to work in?',
      options:[
        { text:'A school, college, or training centre',                              subtype:'S-teach'     },
        { text:'A hospital, clinic, or welfare organisation',                        subtype:'S-care'      },
        { text:'An NGO, community initiative, or government welfare programme',      subtype:'S-community' },
        { text:'An organisation\'s HR, communications, or people experience team',  subtype:'S-connect'   },
      ]
    },
  ],

  E: [
    { id:'fu-E-1', forType:'E',
      q:'What energises you most about leading or taking charge?',
      options:[
        { text:'Building something from nothing and watching it grow',             subtype:'E-start'    },
        { text:'Leading a large team and guiding an organisation\'s direction',    subtype:'E-lead'     },
        { text:'Persuading people, closing deals, and winning arguments',          subtype:'E-persuade' },
        { text:'Shaping policy, governance, or public outcomes at scale',          subtype:'E-policy'   },
      ]
    },
    { id:'fu-E-2', forType:'E',
      q:'Which role sounds most like your future?',
      options:[
        { text:'Founder or entrepreneur — building your own venture from scratch',         subtype:'E-start'    },
        { text:'CEO or senior manager — leading and growing an existing organisation',     subtype:'E-lead'     },
        { text:'Lawyer, negotiator, or sales leader — winning through persuasion',         subtype:'E-persuade' },
        { text:'IAS officer, politician, or policy advisor — shaping how society works',   subtype:'E-policy'   },
      ]
    },
  ],

  C: [
    { id:'fu-C-1', forType:'C',
      q:'Which type of precision work feels most satisfying?',
      options:[
        { text:'Working with numbers — accounting, auditing, or financial analysis', subtype:'C-finance'    },
        { text:'Managing information — databases, records, or data systems',         subtype:'C-data'       },
        { text:'Handling processes — administration, coordination, or operations',   subtype:'C-admin'      },
        { text:'Ensuring correctness — legal compliance, quality control, standards',subtype:'C-compliance' },
      ]
    },
    { id:'fu-C-2', forType:'C',
      q:'Which role sounds most like you?',
      options:[
        { text:'Chartered Accountant, auditor, or financial analyst',                subtype:'C-finance'    },
        { text:'Data analyst, records manager, or database administrator',            subtype:'C-data'       },
        { text:'Administrative officer, operations coordinator, or office manager',   subtype:'C-admin'      },
        { text:'Compliance officer, legal analyst, or quality assurance specialist',  subtype:'C-compliance' },
      ]
    },
  ],

};

// ── SKILL QUESTIONS (15 self-assessment questions) ───────────────────────────
// Domains: numerical, verbal, analytical, spatial, creative, social, technical,
//          conventional, stability (10 domains, 1–2 questions each).

const SKILL_QUESTIONS = [
  { id:'sk-1',  domain:'numerical',
    q_en:'Working with numbers, percentages, and data tables',
    q_ta:'எண்கள், சதவீதங்கள் மற்றும் தரவு அட்டவணைகளுடன் வேலை செய்வது' },

  { id:'sk-2',  domain:'numerical',
    q_en:'Solving maths problems — algebra, geometry, or statistics',
    q_ta:'கணிதப் பிரச்சினைகளை தீர்ப்பது — இயற்கணிதம், வடிவியல் அல்லது புள்ளியியல்' },

  { id:'sk-3',  domain:'verbal',
    q_en:'Writing clearly and persuasively — essays, emails, or reports',
    q_ta:'தெளிவாகவும் நம்பவைக்கும் விதத்திலும் எழுதுவது — கட்டுரைகள், மின்னஞ்சல்கள் அல்லது அறிக்கைகள்' },

  { id:'sk-4',  domain:'verbal',
    q_en:'Speaking confidently in front of others — presenting or explaining ideas',
    q_ta:'மற்றவர்கள் முன்னிலையில் நம்பிக்கையுடன் பேசுவது — யோசனைகளை சமர்ப்பிப்பது அல்லது விளக்குவது' },

  { id:'sk-5',  domain:'analytical',
    q_en:'Breaking a complex problem into parts and reasoning through it logically',
    q_ta:'சிக்கலான பிரச்சினையை பகுதிகளாக பிரித்து தர்க்கரீதியாக தீர்ப்பது' },

  { id:'sk-6',  domain:'analytical',
    q_en:'Spotting errors, patterns, or inconsistencies in information that others miss',
    q_ta:'மற்றவர்கள் கவனிக்காத தகவல்களில் பிழைகள், வடிவங்கள் அல்லது முரண்பாடுகளை கண்டறிவது' },

  { id:'sk-7',  domain:'spatial',
    q_en:'Visualising 3D structures, maps, or layouts clearly in your mind',
    q_ta:'3D கட்டமைப்புகள், வரைபடங்கள் அல்லது தளவமைப்புகளை மனதில் தெளிவாக கற்பனை செய்வது' },

  { id:'sk-8',  domain:'creative',
    q_en:'Generating original ideas that others have not thought of',
    q_ta:'மற்றவர்கள் சிந்திக்காத அசல் யோசனைகளை உருவாக்குவது' },

  { id:'sk-9',  domain:'creative',
    q_en:'Expressing yourself through drawing, music, writing, or design',
    q_ta:'வரைதல், இசை, எழுத்து அல்லது வடிவமைப்பு மூலம் உங்களை வெளிப்படுத்துவது' },

  { id:'sk-10', domain:'social',
    q_en:'Understanding how others feel and responding with genuine empathy',
    q_ta:'மற்றவர்கள் எப்படி உணர்கிறார்கள் என்று புரிந்துகொண்டு உண்மையான பச்சாதாபத்துடன் பதிலளிப்பது' },

  { id:'sk-11', domain:'social',
    q_en:'Explaining something complex clearly to someone who does not know it yet',
    q_ta:'தெரியாத ஒருவருக்கு சிக்கலான விஷயத்தை தெளிவாக விளக்குவது' },

  { id:'sk-12', domain:'technical',
    q_en:'Using tools, machines, or technology accurately and safely',
    q_ta:'கருவிகள், இயந்திரங்கள் அல்லது தொழில்நுட்பத்தை துல்லியமாகவும் பாதுகாப்பாகவும் பயன்படுத்துவது' },

  { id:'sk-13', domain:'conventional',
    q_en:'Catching small errors, gaps, or inconsistencies that others overlook',
    q_ta:'மற்றவர்கள் கவனிக்காத சிறிய பிழைகள், இடைவெளிகள் அல்லது முரண்பாடுகளை கண்டுபிடிப்பது' },

  { id:'sk-14', domain:'conventional',
    q_en:'Keeping tasks, schedules, and files organised in a clear, reliable system',
    q_ta:'பணிகள், அட்டவணைகள் மற்றும் கோப்புகளை தெளிவான, நம்பகமான முறையில் ஒழுங்கமைத்து வைப்பது' },

  { id:'sk-15', domain:'stability',
    q_en:'Staying calm and focused under pressure or in uncertain situations',
    q_ta:'அழுத்தம் அல்லது நிச்சயமற்ற சூழல்களில் அமைதியாகவும் கவனத்துடனும் இருப்பது' },
];

// ── SKILL LABELS (5 behavioral anchor texts) ─────────────────────────────────
// Values 0–4 (0 = never tried, 4 = strongest ability).

const SKILL_LABELS = {
  en: [
    'Never really tried this — hard to say',
    'I find this genuinely difficult',
    'I manage when I put in effort',
    'I do this comfortably and reliably',
    'This is one of my strongest abilities',
  ],
  ta: [
    'இதை முயற்சித்ததே இல்லை — சொல்வது கடினம்',
    'இது என்னால் மிகவும் கஷ்டமாக உள்ளது',
    'முயற்சி செய்தால் சமாளிக்கிறேன்',
    'இதை நான் வசதியாகவும் நம்பகமாகவும் செய்கிறேன்',
    'இது என் மிகவும் வலிமையான திறன்களில் ஒன்று',
  ],
};

// ─── HOLLAND CODE → CAREER MAPPING ──────────────────────────────────────────
// Key: top-2 Holland codes (ordered by score)
// Value: array of career IDs from CAREER_MAP in data/career-guide.js

const HOLLAND_CAREER_MAP = {
  // Realistic + Investigative
  'RI': ['engineer', 'semiconductor-engineer', 'scientist', 'data-scientist', 'geologist', 'farmer'],
  'IR': ['scientist', 'data-scientist', 'geologist', 'engineer', 'semiconductor-engineer'],
  // Realistic + Artistic
  'RA': ['architect', 'designer', 'animator', 'chef', 'interior-designer'],
  'AR': ['architect', 'animator', 'interior-designer', 'designer', 'footwear-designer'],
  // Realistic + Social
  'RS': ['farmer', 'nurse', 'sports', 'pharmacist', 'defence'],
  'SR': ['nurse', 'farmer', 'sports', 'social-work', 'pharmacist'],
  // Realistic + Enterprising
  'RE': ['defence', 'pilot', 'sailor', 'engineer', 'chef'],
  'ER': ['defence', 'pilot', 'sailor', 'engineer', 'banker'],
  // Realistic + Conventional
  'RC': ['engineer', 'semiconductor-engineer', 'farmer', 'geologist'],
  'CR': ['ca', 'banker', 'engineer', 'semiconductor-engineer', 'insurance'],
  // Investigative + Artistic
  'IA': ['data-scientist', 'architect', 'animator', 'designer', 'scientist'],
  'AI': ['designer', 'animator', 'architect', 'data-scientist', 'interior-designer'],
  // Investigative + Social
  'IS': ['doctor', 'pharmacist', 'scientist', 'nurse', 'social-work'],
  'SI': ['doctor', 'nurse', 'pharmacist', 'teacher', 'social-work'],
  // Investigative + Enterprising
  'IE': ['data-scientist', 'ias', 'lawyer', 'fintech-analyst', 'scientist'],
  'EI': ['ias', 'lawyer', 'fintech-analyst', 'data-scientist', 'banker'],
  // Investigative + Conventional
  'IC': ['data-scientist', 'fintech-analyst', 'geologist', 'ca', 'insurance'],
  'CI': ['ca', 'banker', 'fintech-analyst', 'data-scientist', 'insurance'],
  // Artistic + Social
  'AS': ['teacher', 'journalist', 'fashion-designer', 'social-work', 'designer'],
  'SA': ['teacher', 'journalist', 'sports', 'social-work', 'nurse'],
  // Artistic + Enterprising
  'AE': ['journalist', 'fashion-designer', 'designer', 'animator', 'footwear-designer'],
  'EA': ['journalist', 'fashion-designer', 'designer', 'animator', 'chef'],
  // Artistic + Conventional
  'AC': ['interior-designer', 'designer', 'footwear-designer', 'fashion-designer', 'architect'],
  'CA': ['ca', 'interior-designer', 'designer', 'banker', 'footwear-designer'],
  // Social + Enterprising
  'SE': ['ias', 'lawyer', 'social-work', 'teacher', 'journalist'],
  'ES': ['ias', 'lawyer', 'social-work', 'journalist', 'banker'],
  // Social + Conventional
  'SC': ['teacher', 'nurse', 'social-work', 'banker', 'ca'],
  'CS': ['ca', 'banker', 'insurance', 'teacher', 'nurse'],
  // Enterprising + Conventional
  'EC': ['banker', 'ca', 'fintech-analyst', 'insurance', 'ias'],
  'CE': ['ca', 'banker', 'fintech-analyst', 'insurance', 'lawyer'],
};

// ─── RIASEC TYPE PROFILES ────────────────────────────────────────────────────
// Shown on the results page to explain the student's top Holland types.

const RIASEC_PROFILES = {
  R: {
    name_en: 'Realistic — The Builder',
    name_ta: 'யதார்த்தம் — கட்டுபவர்',
    short_en: 'The Builder',
    short_ta: 'கட்டுபவர்',
    desc_en: 'You are practical, hands-on, and action-oriented. You enjoy working with real tools, machines, or the natural world. You solve problems by doing, not just thinking — and you trust what you can see, touch, and build.',
    desc_ta: 'நீங்கள் நடைமுறையானவர், கை வேலை விரும்புபவர், செயல் நோக்குடையவர். உண்மையான கருவிகள், இயந்திரங்கள் அல்லது இயற்கை உலகுடன் வேலை செய்வதை ரசிக்கிறீர்கள். செய்வதன் மூலம் சிக்கல்களை தீர்க்கிறீர்கள் — நீங்கள் பார்க்கலாம், தொடலாம், கட்டலாம் என்பதை நம்புகிறீர்கள்.',
    color: '#c0392b',
    icon: '🔧',
  },
  I: {
    name_en: 'Investigative — The Thinker',
    name_ta: 'விசாரணை — சிந்தனையாளர்',
    short_en: 'The Thinker',
    short_ta: 'சிந்தனையாளர்',
    desc_en: 'You are curious, analytical, and drawn to deep questions. You love understanding how things work — at the level of physics, biology, data, or code. You prefer thinking carefully before acting, and you are energised by complex problems that most people give up on.',
    desc_ta: 'நீங்கள் ஆர்வமுள்ளவர், பகுப்பாய்வு செய்பவர், ஆழமான கேள்விகளில் ஈர்க்கப்படுபவர். இயற்பியல், உயிரியல், தரவு அல்லது குறியீடு நிலையில் விஷயங்கள் எப்படி வேலை செய்கின்றன என்று புரிந்துகொள்ள விரும்புகிறீர்கள். செயல்படுவதற்கு முன் கவனமாக சிந்திக்கிறீர்கள், மிகவும் கடினமான சிக்கல்களால் ஊக்கமடைகிறீர்கள்.',
    color: '#8e44ad',
    icon: '🔬',
  },
  A: {
    name_en: 'Artistic — The Creator',
    name_ta: 'கலை — படைப்பாளர்',
    short_en: 'The Creator',
    short_ta: 'படைப்பாளர்',
    desc_en: 'You are imaginative, expressive, and original. You want to create things that did not exist before — through design, writing, music, or storytelling. You value freedom and originality over rules and routines, and you see the world through an aesthetic lens.',
    desc_ta: 'நீங்கள் கற்பனையாளர், வெளிப்படுத்துபவர், மூலமானவர். வடிவமைப்பு, எழுத்து, இசை அல்லது கதைசொல்லல் மூலம் முன்பு இல்லாத பொருட்களை உருவாக்க விரும்புகிறீர்கள். விதிகள் மற்றும் வழக்கங்களை விட சுதந்திரம் மற்றும் அசல்தன்மையை மதிக்கிறீர்கள்.',
    color: '#d81b60',
    icon: '🎨',
  },
  S: {
    name_en: 'Social — The Helper',
    name_ta: 'சமூகம் — உதவியாளர்',
    short_en: 'The Helper',
    short_ta: 'உதவியாளர்',
    desc_en: 'You are warm, empathetic, and people-oriented. You find meaning in helping, teaching, healing, or supporting others. You thrive when you can genuinely make a difference in someone\'s life — and you read people\'s feelings naturally and with care.',
    desc_ta: 'நீங்கள் அன்பானவர், பச்சாதாபமுள்ளவர், மனித நேயமுடையவர். மற்றவர்களுக்கு உதவுவதில், கற்பிப்பதில், குணப்படுத்துவதில் அர்த்தம் காண்கிறீர்கள். யாரோ ஒருவரின் வாழ்வில் உண்மையில் மாற்றம் கொண்டு வர முடியும்போது செழிக்கிறீர்கள்.',
    color: '#27ae60',
    icon: '🤝',
  },
  E: {
    name_en: 'Enterprising — The Leader',
    name_ta: 'முயற்சி — தலைவர்',
    short_en: 'The Leader',
    short_ta: 'தலைவர்',
    desc_en: 'You are ambitious, persuasive, and action-oriented. You love taking charge, influencing people, and making things happen at scale. You are comfortable with competition, risk, and high-stakes decisions — and you are energised by leading others toward a big goal.',
    desc_ta: 'நீங்கள் லட்சியமுள்ளவர், நம்பவைக்கும் தன்மையுடையவர், செயல் நோக்குடையவர். பொறுப்பேற்று, மனிதர்களை பாதித்து, பெரிய அளவில் செயல்படுத்துவதை விரும்புகிறீர்கள். போட்டி, ஆபத்து மற்றும் முக்கியமான முடிவுகளில் வசதியாக இருக்கிறீர்கள்.',
    color: '#e74c3c',
    icon: '🚀',
  },
  C: {
    name_en: 'Conventional — The Organiser',
    name_ta: 'மரபு — ஒழுங்கமைப்பாளர்',
    short_en: 'The Organiser',
    short_ta: 'ஒழுங்கமைப்பாளர்',
    desc_en: 'You are detail-oriented, structured, and reliable. You like clear systems, accurate data, and well-managed processes. You thrive when things are done correctly and consistently — and your precision and follow-through are rare strengths that organisations deeply value.',
    desc_ta: 'நீங்கள் விவரங்களில் கவனமுள்ளவர், கட்டமைக்கப்பட்டவர், நம்பகமானவர். தெளிவான முறைமைகள், துல்லியமான தரவு மற்றும் நன்றாக நிர்வகிக்கப்பட்ட செயல்முறைகளை விரும்புகிறீர்கள். உங்கள் துல்லியம் மற்றும் தொடர்ச்சி நிறுவனங்கள் மதிக்கும் அரிய பலங்கள்.',
    color: '#2980b9',
    icon: '📋',
  },
};

// ─── CLASS 11 STREAM MAP ─────────────────────────────────────────────────────
// Maps top Holland type → Class 11 stream recommendation for Class 8-10 students.

const CLASS11_STREAM_MAP = {
  R: {
    stream:  'PCM',
    alt:     'PCB',
    altNote: 'PCB if you prefer life sciences over machines',
    focus:   ['Maths', 'Science', 'Physics basics'],
    tip:     'Strengthen your Maths and Science fundamentals now — Class 9-10 is when the real engineering foundation is built.',
  },
  I: {
    stream:  'PCM',
    alt:     'PCB',
    altNote: 'PCB if you are drawn to biology and research',
    focus:   ['Maths', 'Science', 'Computer basics'],
    tip:     'Build strong problem-solving habits. Learn to read science deeply — not just for exams, but out of genuine curiosity.',
  },
  A: {
    stream:  'Arts',
    alt:     'Commerce',
    altNote: 'Commerce if you enjoy design + business together',
    focus:   ['Languages', 'Social Studies', 'Art / Music'],
    tip:     'Read widely, write often, and explore drawing, music or theatre. Creativity is a skill you build — start now.',
  },
  S: {
    stream:  'Arts',
    alt:     'Commerce',
    altNote: 'Commerce if you want to work in HR or the development sector',
    focus:   ['Languages', 'Social Studies', 'Environmental Science'],
    tip:     'Develop your communication skills — join debates, school clubs and volunteer activities. These shape your future career.',
  },
  E: {
    stream:  'Commerce',
    alt:     'PCM',
    altNote: 'PCM if you want to combine leadership with tech or engineering',
    focus:   ['Maths', 'Social Studies', 'English'],
    tip:     'Practice speaking in front of groups. Take on leadership roles in school — class leader, event organiser, sports captain.',
  },
  C: {
    stream:  'Commerce',
    alt:     'PCM',
    altNote: 'PCM if you prefer engineering over finance careers',
    focus:   ['Maths', 'Accounts basics', 'Computers'],
    tip:     'Build your number sense and attention to detail. Excel, basic accounting and logical puzzles are great starting points.',
  },
};

// ─── STREAM DETAILS ──────────────────────────────────────────────────────────
// Full description of each Class 11 stream shown in the early-guidance results panel.

const STREAM_DETAILS = {
  PCM: {
    label:    'Science — PCM',
    subjects: ['Physics', 'Chemistry', 'Maths', '+ 1 elective (CS / Biology / Economics)'],
    leads:    'Engineering · Architecture · Data Science · Defence · Pilot',
    exams:    'JEE Main, JEE Advanced, NATA, NDA, BITSAT, TNEA',
    color:    '#1A4DD6',
    icon:     '⚙',
    tip_en:   'The broadest science stream. Opens the most competitive exams. Maths must be a genuine strength.',
    tip_ta:   'மிகவும் விரிவான அறிவியல் பிரிவு. மிக போட்டியான தேர்வுகளை திறக்கிறது. கணிதம் உண்மையான பலமாக இருக்க வேண்டும்.',
  },
  PCB: {
    label:    'Science — PCB',
    subjects: ['Physics', 'Chemistry', 'Biology', '+ 1 elective (Maths / CS)'],
    leads:    'Medicine · Dentistry · Nursing · Pharmacy · Biotechnology · Veterinary',
    exams:    'NEET-UG, ICAR AIEEA, Nursing entrances',
    color:    '#27ae60',
    icon:     '🩺',
    tip_en:   'Required for medical and life science careers. NEET-UG is the single gateway — one exam, massive opportunity.',
    tip_ta:   'மருத்துவம் மற்றும் உயிர் அறிவியல் தொழில்களுக்கு அவசியம். NEET-UG ஒரே நுழைவாயில் — ஒரு தேர்வு, பெரிய வாய்ப்பு.',
  },
  Commerce: {
    label:    'Commerce',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Maths (strongly recommended)', 'English'],
    leads:    'CA · MBA · Banking · Finance · Law · FinTech · Insurance',
    exams:    'CA Foundation, CAT, CLAT, CUET, IPMAT, IBPS',
    color:    '#e67e22',
    icon:     '📊',
    tip_en:   'Commerce with Maths is the most powerful combination. Opens both finance and management pathways.',
    tip_ta:   'கணிதத்துடன் வாணிகம் மிகவும் சக்திவாய்ந்த கலவை. நிதி மற்றும் மேலாண்மை இரண்டு பாதைகளையும் திறக்கிறது.',
  },
  Arts: {
    label:    'Arts / Humanities',
    subjects: ['History / Geography / Pol. Science', 'Languages', 'Psychology / Sociology (optional)'],
    leads:    'Law · Civil Services (IAS/IPS) · Journalism · Design · Social Work · Teaching',
    exams:    'CLAT, UPSC CSE, CUET, IIMC Entrance, TISSNET, NID / NIFT',
    color:    '#8e44ad',
    icon:     '🏛',
    tip_en:   'The most underrated stream. Produces IAS officers, lawyers, journalists, designers and policy leaders.',
    tip_ta:   'மிகவும் குறைத்து மதிப்பிடப்பட்ட பிரிவு. IAS அதிகாரிகள், வழக்கறிஞர்கள், பத்திரிகையாளர்கள் மற்றும் கொள்கை தலைவர்களை உருவாக்குகிறது.',
  },
};
