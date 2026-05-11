// Vazhi — Career Report Page Logic
// Reads from localStorage('vazhi_report') and renders all sections.
// Companion to: report.html, css/report.css

// ── RIASEC metadata (mirrors data/psychometric.js) ────────────────────────
const RP_PROFILES = {
  R: {
    name_en:'Realistic — The Builder',      name_ta:'யதார்த்தம் — கட்டுபவர்',
    short_en:'The Builder',                 short_ta:'கட்டுபவர்',
    desc_en:'You are practical, hands-on, and action-oriented. You enjoy working with real tools, machines, or the natural world. You solve problems by doing — and you trust what you can see, touch, and build.',
    desc_ta:'நீங்கள் நடைமுறையானவர், கை வேலை விரும்புபவர். உண்மையான கருவிகள், இயந்திரங்கள் அல்லது இயற்கையுடன் வேலை செய்வதை விரும்புகிறீர்கள். செய்வதன் மூலம் சிக்கல்களை தீர்க்கிறீர்கள்.',
    traits_en:['Practical and hands-on','Action-oriented — you learn by doing','Good at working with tools, machines, or land','Comfortable with physical and outdoor work','Reliable and skilled with your hands'],
    traits_ta:['நடைமுறையானவர் மற்றும் கைவேலை விரும்புபவர்','செயல் மூலம் கற்பவர்','கருவிகள், இயந்திரங்களுடன் திறமையானவர்','உடல் மற்றும் வெளிப்புற வேலையில் வசதியானவர்','நம்பகமான மற்றும் திறமையான கரங்கள்'],
    color:'#c0392b', icon:'🔧',
  },
  I: {
    name_en:'Investigative — The Thinker',  name_ta:'விசாரணை — சிந்தனையாளர்',
    short_en:'The Thinker',                 short_ta:'சிந்தனையாளர்',
    desc_en:'You are curious, analytical, and drawn to deep questions. You love understanding how things work — at the level of science, data, or logic. You prefer thinking carefully before acting, and complex problems energise you.',
    desc_ta:'நீங்கள் ஆர்வமுள்ளவர், பகுப்பாய்வு செய்பவர். அறிவியல், தரவு அல்லது தர்க்க நிலையில் விஷயங்கள் எப்படி வேலை செய்கின்றன என்று தெரிந்துகொள்ள விரும்புகிறீர்கள்.',
    traits_en:['Curious and analytical','Loves researching and asking "why?"','Comfortable with complex ideas and data','Prefers thinking before acting','Energised by difficult problems'],
    traits_ta:['ஆர்வமுள்ளவர் மற்றும் பகுப்பாய்வு செய்பவர்','"ஏன்?" என்று கேட்டு ஆராய்பவர்','சிக்கலான யோசனைகளில் வசதியானவர்','செயல்படுவதற்கு முன் சிந்திக்கிறார்','கடினமான பிரச்சினைகளால் ஊக்கமடைகிறார்'],
    color:'#8e44ad', icon:'🔬',
  },
  A: {
    name_en:'Artistic — The Creator',       name_ta:'கலை — படைப்பாளர்',
    short_en:'The Creator',                 short_ta:'படைப்பாளர்',
    desc_en:'You are imaginative, expressive, and original. You want to create things that did not exist before — through design, writing, music, or storytelling. You value freedom and originality over rigid rules.',
    desc_ta:'நீங்கள் கற்பனையாளர், வெளிப்படுத்துபவர். வடிவமைப்பு, எழுத்து, இசை அல்லது கதைசொல்லல் மூலம் புதிய பொருட்களை உருவாக்க விரும்புகிறீர்கள்.',
    traits_en:['Imaginative and original','Expressive through art, writing, or design','Values creativity and freedom over rigid rules','Sees beauty and meaning in everyday things','Driven by self-expression'],
    traits_ta:['கற்பனையாளர் மற்றும் மூலமானவர்','கலை, எழுத்து அல்லது வடிவமைப்பு மூலம் வெளிப்படுத்துபவர்','சுதந்திரம் மற்றும் படைப்பாற்றலை மதிக்கிறார்','அன்றாட விஷயங்களில் அழகு காண்பவர்','சுய வெளிப்பாட்டால் இயக்கப்படுபவர்'],
    color:'#d81b60', icon:'🎨',
  },
  S: {
    name_en:'Social — The Helper',          name_ta:'சமூகம் — உதவியாளர்',
    short_en:'The Helper',                  short_ta:'உதவியாளர்',
    desc_en:'You are warm, empathetic, and people-oriented. You find meaning in helping, teaching, healing, or supporting others. You thrive when you can make a real difference in someone\'s life.',
    desc_ta:'நீங்கள் அன்பானவர், பச்சாதாபமுள்ளவர். மற்றவர்களுக்கு உதவுவதில், கற்பிப்பதில், குணப்படுத்துவதில் அர்த்தம் காண்கிறீர்கள்.',
    traits_en:['Warm, caring, and empathetic','Finds meaning in helping and teaching others','Strong listener and communicator','Thrives in team and community settings','Committed to making a difference'],
    traits_ta:['அன்பானவர், கவலைப்படுபவர், பச்சாதாபமுள்ளவர்','மற்றவர்களுக்கு உதவுவதில் அர்த்தம் காண்பவர்','சிறந்த கேட்பவர் மற்றும் தொடர்பாளர்','குழு மற்றும் சமூக சூழல்களில் செழிக்கிறார்','மாற்றம் கொண்டுவர அர்ப்பணிக்கிறார்'],
    color:'#27ae60', icon:'🤝',
  },
  E: {
    name_en:'Enterprising — The Leader',    name_ta:'முயற்சி — தலைவர்',
    short_en:'The Leader',                  short_ta:'தலைவர்',
    desc_en:'You are ambitious, persuasive, and action-oriented. You love taking charge, influencing people, and making things happen at scale. You are comfortable with risk and high-stakes decisions.',
    desc_ta:'நீங்கள் லட்சியமுள்ளவர், நம்பவைக்கும் தன்மையுடையவர். பொறுப்பேற்று, மனிதர்களை பாதித்து, பெரிய அளவில் செயல்படுத்துவதை விரும்புகிறீர்கள்.',
    traits_en:['Ambitious and goal-oriented','Comfortable leading and influencing people','Confident speaker and persuader','Takes initiative and calculated risks','Energised by competition and big goals'],
    traits_ta:['லட்சியமுள்ளவர் மற்றும் இலக்கு நோக்குடையவர்','மனிதர்களை வழிநடத்துவதில் வசதியானவர்','நம்பிக்கையுடன் பேசுபவர்','முயற்சியெடுப்பவர்','போட்டி மற்றும் பெரிய இலக்குகளால் ஊக்கமடைகிறார்'],
    color:'#e74c3c', icon:'🚀',
  },
  C: {
    name_en:'Conventional — The Organiser', name_ta:'மரபு — ஒழுங்கமைப்பாளர்',
    short_en:'The Organiser',               short_ta:'ஒழுங்கமைப்பாளர்',
    desc_en:'You are detail-oriented, structured, and reliable. You like clear systems, accurate data, and well-managed processes. Your precision and consistency are rare strengths that organisations deeply value.',
    desc_ta:'நீங்கள் விவரங்களில் கவனமுள்ளவர், கட்டமைக்கப்பட்டவர், நம்பகமானவர். தெளிவான முறைமைகள் மற்றும் துல்லியமான தரவை விரும்புகிறீர்கள்.',
    traits_en:['Detail-oriented and precise','Reliable and consistent — follows through','Comfortable with data, numbers, and systems','Organised and methodical in your work','Excellent at spotting errors and gaps'],
    traits_ta:['விவரங்களில் கவனமுள்ளவர் மற்றும் துல்லியமானவர்','நம்பகமானவர் — செயல்களை முடிக்கிறார்','தரவு, எண்கள் மற்றும் முறைமைகளில் வசதியானவர்','ஒழுங்கமைக்கப்பட்ட மற்றும் முறையான பணி','பிழைகளை கண்டுபிடிப்பதில் சிறந்தவர்'],
    color:'#2980b9', icon:'📋',
  },
};

const RP_TYPE_LABELS = {
  R:{ en:'Realistic',     ta:'யதார்த்தம்' },
  I:{ en:'Investigative', ta:'விசாரணை' },
  A:{ en:'Artistic',      ta:'கலை' },
  S:{ en:'Social',        ta:'சமூகம்' },
  E:{ en:'Enterprising',  ta:'முயற்சி' },
  C:{ en:'Conventional',  ta:'மரபு' },
};

const RP_SUBTYPE_MAP = {
  en:{
    'R-fix':'Maintenance & Repair','R-build':'Construction & Civil','R-tech':'Technology & Operations','R-nature':'Agriculture & Environment',
    'I-data':'Data Science & Analytics','I-human':'Human & Social Sciences','I-discover':'Scientific Research','I-pattern':'Maths & Logic',
    'A-design':'Visual Design & Architecture','A-write':'Writing & Journalism','A-perform':'Music, Dance & Theatre','A-digital':'Digital Media & Animation',
    'S-teach':'Education & Training','S-care':'Healthcare & Counselling','S-community':'Social Work & Community','S-connect':'HR & Communications',
    'E-start':'Entrepreneurship','E-lead':'Leadership & Management','E-persuade':'Law, Sales & Negotiation','E-policy':'Policy & Civil Services',
    'C-finance':'Finance & Accounting','C-data':'Data Management','C-admin':'Administration & Operations','C-compliance':'Compliance & Quality Assurance',
  },
  ta:{
    'R-fix':'பராமரிப்பு & சரிசெய்தல்','R-build':'கட்டுமானம் & சிவில்','R-tech':'தொழில்நுட்பம் & இயக்கம்','R-nature':'விவசாயம் & சுற்றுச்சூழல்',
    'I-data':'தரவு அறிவியல்','I-human':'மனித & சமூக அறிவியல்','I-discover':'அறிவியல் ஆராய்ச்சி','I-pattern':'கணிதம் & தர்க்கம்',
    'A-design':'காட்சி வடிவமைப்பு','A-write':'எழுத்து & பத்திரிகை','A-perform':'இசை, நடனம் & கலை','A-digital':'டிஜிட்டல் ஊடகம்',
    'S-teach':'கல்வி & பயிற்சி','S-care':'சுகாதாரம் & ஆலோசனை','S-community':'சமூக சேவை','S-connect':'மனித வள & தகவல் தொடர்பு',
    'E-start':'தொழில்முனைவோர்','E-lead':'தலைமை & நிர்வாகம்','E-persuade':'சட்டம், விற்பனை & பேச்சுவார்த்தை','E-policy':'கொள்கை & அரசு சேவை',
    'C-finance':'நிதி & கணக்கு','C-data':'தரவு மேலாண்மை','C-admin':'நிர்வாகம் & இயக்கம்','C-compliance':'இணக்கம் & தர உறுதி',
  },
};

const RP_SKILL_LABELS = {
  numerical:    { en:'Numerical',    ta:'எண்ணியல்',          color:'#1A4DD6' },
  verbal:       { en:'Verbal',       ta:'வாய்மொழி',          color:'#d81b60' },
  analytical:   { en:'Analytical',   ta:'பகுப்பாய்வு',        color:'#8e44ad' },
  spatial:      { en:'Spatial',      ta:'இட உணர்வு',          color:'#27ae60' },
  creative:     { en:'Creative',     ta:'படைப்பாற்றல்',        color:'#e74c3c' },
  social:       { en:'Social',       ta:'சமூகம்',              color:'#f39c12' },
  technical:    { en:'Technical',    ta:'தொழில்நுட்பம்',       color:'#c0392b' },
  conventional: { en:'Organised',    ta:'ஒழுங்கமைப்பு',        color:'#2980b9' },
  stability:    { en:'Calm & Focus', ta:'அமைதி & கவனம்',       color:'#16a085' },
};

const RP_SKILL_DESC = {
  en: {
    excellent:  'Excellent — this is one of your strongest abilities.',
    good:       'Good — you handle this comfortably and reliably.',
    average:    'Developing — you manage with effort; room to grow.',
    developing: 'Early stage — keep practising to build this skill.',
  },
  ta: {
    excellent:  'சிறந்தது — இது உங்கள் மிகவும் வலிமையான திறன்களில் ஒன்று.',
    good:       'நல்லது — வசதியாகவும் நம்பகமாகவும் செய்கிறீர்கள்.',
    average:    'வளர்ச்சியில் உள்ளது — முயற்சியுடன் சமாளிக்கிறீர்கள்.',
    developing: 'ஆரம்ப நிலை — தொடர்ந்து பயிற்சி செய்யுங்கள்.',
  },
};

// Workstyle pair descriptions
const RP_WS_PAIRS = [
  {
    typeA:'R', typeB:'I',
    label_en:{ A:'Works with physical things', B:'Works with ideas and knowledge' },
    label_ta:{ A:'உடல் பொருட்களுடன் பணிபுரிகிறார்', B:'யோசனைகள் மற்றும் அறிவுடன் பணிபுரிகிறார்' },
    ico: '⚙️',
  },
  {
    typeA:'E', typeB:'S',
    label_en:{ A:'Leads and directs people', B:'Supports and helps people directly' },
    label_ta:{ A:'மக்களை வழிநடத்துகிறார்', B:'மக்களுக்கு நேரடியாக உதவுகிறார்' },
    ico: '🤝',
  },
  {
    typeA:'A', typeB:'C',
    label_en:{ A:'Creates and designs freely', B:'Organises and maintains systems' },
    label_ta:{ A:'சுதந்திரமாக படைக்கிறார் மற்றும் வடிவமைக்கிறார்', B:'முறைமைகளை ஒழுங்கமைக்கிறார்' },
    ico: '🎨',
  },
  {
    typeA:'I', typeB:'E',
    label_en:{ A:'Deep independent research', B:'Working with others toward goals' },
    label_ta:{ A:'ஆழமான தனி ஆராய்ச்சி', B:'இலக்குகளை நோக்கி மற்றவர்களுடன் பணிபுரிகிறார்' },
    ico: '🔬',
  },
  {
    typeA:'S', typeB:'C',
    label_en:{ A:'People-centred environments', B:'System-centred environments' },
    label_ta:{ A:'மனித மையமான சூழல்கள்', B:'முறைமை மையமான சூழல்கள்' },
    ico: '🏢',
  },
];

// Card accent colours (mirrors app.js BS map)
const RP_BC = {
  coral:  { bg:'#FFF0EE', c:'#991B1B', bd:'#FCA5A5' },
  teal:   { bg:'#F0FFFE', c:'#0F766E', bd:'#99F6E4' },
  green:  { bg:'#F0FDF4', c:'#15803D', bd:'#86EFAC' },
  purple: { bg:'#FAF5FF', c:'#7E22CE', bd:'#D8B4FE' },
  amber:  { bg:'#FFFBEB', c:'#92400E', bd:'#FCD34D' },
  accent: { bg:'#EBF0FF', c:'#0F3098', bd:'#BDD0FF' },
};

// ── MAIN ENTRY ───────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const raw = localStorage.getItem('vazhi_report');
  const root = document.getElementById('report-root');

  if (!raw) {
    root.innerHTML = `
      <div class="report-missing">
        <h2>No report found</h2>
        <p>Please complete the Know Yourself test on Vazhi first, then click "View Full Report".</p>
        <a href="index.html">← Go to Vazhi</a>
      </div>`;
    return;
  }

  let d;
  try { d = JSON.parse(raw); } catch(e) {
    root.innerHTML = `<div class="report-missing"><h2>Report data is corrupted.</h2><a href="index.html">← Go to Vazhi</a></div>`;
    return;
  }

  renderReport(d, root);
});

function renderReport(d, root) {
  const L = d.lang || 'en';
  const isTa = L === 'ta';
  const top1 = d.top2[0];
  const top2 = d.top2[1];
  const p1 = RP_PROFILES[top1];
  const p2 = RP_PROFILES[top2];
  const name = d.name || (isTa ? 'மாணவர்' : 'Student');
  const isAnon = !d.name;
  const isEarlyGrade = d.grade === '8-10';

  root.innerHTML = `
    ${renderActionBar(L)}
    ${renderHeader(d, name, isAnon, p1, p2, top1, top2, L)}
    ${renderHollandSection(p1, p2, top1, top2, d.subtypes, L, isTa)}
    ${renderRiasecBars(d.normalised, top1, top2, L)}
    ${renderSkillsSection(d.skills, L, isTa)}
    ${renderWorkstyle(d.workBonus, L, isTa)}
    ${isEarlyGrade ? renderStreamSection(d.streamRec, L, isTa) : ''}
    ${renderCareers(d.careers, d.grade, L, isTa)}
    ${renderNextSteps(d.grade, top1, top2, L, isTa)}
    ${renderFooter(d, L, isTa)}
  `;

  // Animate bars after paint
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.querySelectorAll('[data-width]').forEach(el => {
      el.style.transition = 'width 1s cubic-bezier(0.4,0,0.2,1)';
      el.style.width = el.dataset.width;
    });
  }));
}

// ── Action bar ───────────────────────────────────────────────────────────────
function renderActionBar(L) {
  const isTa = L === 'ta';
  return `
  <div class="report-action-bar no-print">
    <button class="btn-back" onclick="window.close()">
      ${isTa ? '← Vazhi திரும்பு' : '← Back to Vazhi'}
    </button>
    <button class="btn-print" onclick="window.print()">
      🖨️ ${isTa ? 'Print / PDF சேமிக்க' : 'Print / Save as PDF'}
    </button>
  </div>`;
}

// ── Header ───────────────────────────────────────────────────────────────────
function renderHeader(d, name, isAnon, p1, p2, top1, top2, L) {
  const isTa = L === 'ta';
  const gradeLabel = d.grade === '8-10'
    ? (isTa ? 'வகுப்பு 8–10' : 'Class 8–10')
    : (isTa ? 'வகுப்பு 11–12' : 'Class 11–12');

  return `
  <div class="report-header">
    <div class="report-header-top">
      <div class="report-brand">
        வழி Vazhi <span>${isTa ? '· உங்கள் தொழில் அறிக்கை' : '· Career Report'}</span>
      </div>
      <div class="report-meta">
        ${gradeLabel}<br>
        ${d.date || ''}
      </div>
    </div>
    <div class="report-student-name${isAnon ? ' unnamed' : ''}">${name}</div>
    <div class="report-tagline">
      ${isTa
        ? `Holland Code: <strong>${d.hollandCode}</strong> · ${p1.short_ta} + ${p2.short_ta}`
        : `Holland Code: <strong>${d.hollandCode}</strong> · ${p1.short_en} + ${p2.short_en}`}
    </div>
    <div class="report-code-badges">
      <span class="report-code-badge" style="border-color:${p1.color}40">
        ${p1.icon} ${top1} ${isTa ? p1.short_ta : p1.short_en}
      </span>
      <span class="report-code-plus">+</span>
      <span class="report-code-badge" style="border-color:${p2.color}40">
        ${p2.icon} ${top2} ${isTa ? p2.short_ta : p2.short_en}
      </span>
    </div>
  </div>`;
}

// ── Section 1: Holland profile ────────────────────────────────────────────────
function renderHollandSection(p1, p2, top1, top2, subtypes, L, isTa) {
  const traits1 = isTa ? p1.traits_ta : p1.traits_en;
  const traits2 = isTa ? p2.traits_ta : p2.traits_en;
  const allTraits = [...traits1.slice(0,3), ...traits2.slice(0,2)];

  const smap = isTa ? RP_SUBTYPE_MAP.ta : RP_SUBTYPE_MAP.en;
  const sub1 = subtypes && subtypes[top1] ? smap[subtypes[top1]] : null;
  const sub2 = subtypes && subtypes[top2] ? smap[subtypes[top2]] : null;
  const subtypeRow = (sub1 || sub2) ? `
    <div class="report-subtype-row">
      <span class="report-subtype-lbl">${isTa ? 'உங்கள் சுயவிவரம் சாய்கிறது:' : 'Your profile leans toward:'}</span>
      ${sub1 ? `<span class="report-subtype-chip">${sub1}</span>` : ''}
      ${sub2 ? `<span class="report-subtype-chip">${sub2}</span>` : ''}
    </div>` : '';

  return `
  <div class="report-section">
    <div class="report-section-title">${isTa ? 'உங்கள் ஆர்வ சுயவிவரம்' : 'Your Interest Profile'}</div>
    <div class="report-holland-title">
      ${isTa ? `${p1.short_ta} + ${p2.short_ta}` : `${p1.short_en} + ${p2.short_en}`}
    </div>
    <div class="report-holland-sub">
      ${isTa ? `Holland குறியீடு ${top1+top2}` : `Holland Code ${top1+top2}`}
      &nbsp;·&nbsp;
      ${isTa ? '6 பரிமாணங்களில் முதல் 2' : 'Top 2 of 6 RIASEC dimensions'}
    </div>
    <div class="report-type-desc">${isTa ? p1.desc_ta : p1.desc_en}</div>
    <ul class="report-traits">
      ${allTraits.map(t => `<li class="report-trait">${t}</li>`).join('')}
    </ul>
    ${subtypeRow}
  </div>`;
}

// ── Section 2: RIASEC bars ────────────────────────────────────────────────────
function renderRiasecBars(normalised, top1, top2, L) {
  const isTa = L === 'ta';
  const order = ['R','I','A','S','E','C'];
  const bars = order.map(t => {
    const pct   = normalised[t] || 0;
    const prof  = RP_PROFILES[t];
    const lbl   = RP_TYPE_LABELS[t];
    const isTop = t === top1 || t === top2;
    return `
      <div class="report-bar-row${isTop ? ' top-type' : ''}">
        <div class="report-bar-label">
          <span>${prof.icon}</span>
          <span class="report-bar-type-code" style="color:${prof.color}">${t}</span>
          <span>${isTa ? lbl.ta : lbl.en}</span>
        </div>
        <div class="report-bar-track">
          <div class="report-bar-fill" data-width="${pct}%"
               style="width:0%;background:${prof.color}${isTop ? '' : '88'}"></div>
        </div>
        <span class="report-bar-pct">${pct}%</span>
      </div>`;
  }).join('');

  return `
  <div class="report-section">
    <div class="report-section-title">${isTa ? 'RIASEC சுயவிவரம்' : 'RIASEC Interest Chart'}</div>
    <div class="report-bars">${bars}</div>
  </div>`;
}

// ── Section 3: Skills ─────────────────────────────────────────────────────────
function renderSkillsSection(skills, L, isTa) {
  if (!skills || Object.keys(skills).length === 0) return '';

  const descs = isTa ? RP_SKILL_DESC.ta : RP_SKILL_DESC.en;
  const rows = Object.entries(skills).map(([domain, avg]) => {
    const pct   = Math.round((avg / 4) * 100);
    const meta  = RP_SKILL_LABELS[domain];
    if (!meta) return '';
    const level = pct >= 75 ? 'excellent' : pct >= 50 ? 'good' : pct >= 25 ? 'average' : 'developing';
    const badge = isTa
      ? { excellent:'சிறந்தது', good:'நல்லது', average:'வளர்ச்சியில்', developing:'ஆரம்பம்' }[level]
      : { excellent:'Excellent', good:'Good', average:'Average', developing:'Developing' }[level];
    return `
      <div class="report-skill-row">
        <div class="report-skill-header">
          <span class="report-skill-name">${isTa ? meta.ta : meta.en}</span>
          <span class="report-skill-badge skill-${level}">${badge} ${pct}%</span>
        </div>
        <div class="report-skill-track">
          <div class="report-skill-fill" data-width="${pct}%"
               style="width:0%;background:${meta.color}"></div>
        </div>
        <div class="report-skill-desc">${descs[level]}</div>
      </div>`;
  }).join('');

  return `
  <div class="report-section">
    <div class="report-section-title">${isTa ? 'உங்கள் திறன் சுயவிவரம்' : 'Your Aptitude Profile'}</div>
    <div class="report-skill-grid">${rows}</div>
  </div>`;
}

// ── Section 4: Work style ─────────────────────────────────────────────────────
function renderWorkstyle(workBonus, L, isTa) {
  if (!workBonus) return '';
  const totalBonus = Object.values(workBonus).reduce((a,b)=>a+b,0);
  if (totalBonus === 0) return '';

  const items = RP_WS_PAIRS.map(pair => {
    const wonA  = workBonus[pair.typeA] > workBonus[pair.typeB];
    const wonB  = workBonus[pair.typeB] > workBonus[pair.typeA];
    if (!wonA && !wonB) return ''; // tied — skip
    const lbl  = isTa ? pair.label_ta : pair.label_en;
    const won  = wonA ? lbl.A : lbl.B;
    const lost = wonA ? lbl.B : lbl.A;
    return `
      <div class="report-ws-item">
        <span class="report-ws-ico">${pair.ico}</span>
        <span class="report-ws-text">
          ${isTa ? 'நீங்கள்' : 'You prefer'} <strong>${won}</strong>
          ${isTa ? 'விரும்புகிறீர்கள்' : `over ${lost}`}${isTa ? ` — ${lost}-ஐ விட` : ''}.
        </span>
      </div>`;
  }).filter(Boolean).join('');

  if (!items) return '';

  return `
  <div class="report-section">
    <div class="report-section-title">${isTa ? 'உங்கள் பணி பாணி' : 'Your Work Style'}</div>
    <div class="report-workstyle-items">${items}</div>
  </div>`;
}

// ── Section 5: Stream (8-10 only) ─────────────────────────────────────────────
function renderStreamSection(streamRec, L, isTa) {
  if (!streamRec) return '';
  const sm  = streamRec.stream;
  const sd  = streamRec.streamDet;
  const sdAlt = streamRec.altDet;
  if (!sm || !sd) return '';

  const focusTags = (sm.focus || []).map(f =>
    `<span class="report-focus-tag">${f}</span>`).join('');

  return `
  <div class="report-section">
    <div class="report-section-title">
      ${isTa ? 'வகுப்பு 11-ல் தேர்வு செய்யும் பிரிவு' : 'Recommended Stream for Class 11'}
    </div>
    <div class="report-stream-card" style="border-left-color:${sd.color}">
      <span class="report-stream-badge" style="background:${sd.color}">
        ${sd.icon} ${sd.label}
      </span>
      <div class="report-stream-subjects">${(sd.subjects||[]).join(' · ')}</div>
      <div class="report-stream-leads">→ ${sd.leads}</div>
      <div class="report-stream-tip">${isTa ? sd.tip_ta : sd.tip_en}</div>
    </div>
    ${sm.tip ? `<div class="report-stream-tip" style="margin-bottom:10px">${sm.tip}</div>` : ''}
    <div class="report-focus-tags">${focusTags}</div>
    ${sdAlt ? `<p class="report-stream-alt">
      ${isTa ? 'மாற்றாக பரிசீலிக்கவும்:' : 'Also consider:'}
      <strong>${sdAlt.label}</strong> — ${sm.altNote || ''}
    </p>` : ''}
  </div>`;
}

// ── Section 6: Careers ────────────────────────────────────────────────────────
function renderCareers(careers, grade, L, isTa) {
  if (!careers || careers.length === 0) return '';
  const isEarlyGrade = grade === '8-10';

  const cards = careers.slice(0,6).map(c => {
    const bc = RP_BC[c.bc] || RP_BC.accent;
    const roles = isEarlyGrade
      ? (c.class9_10 ? c.class9_10.tip : (c.class12 ? c.class12.tip : ''))
      : (c.careers || []).slice(0,3).join(' · ');

    return `
      <div class="report-career-card" style="border-top-color:${bc.bd};background:${bc.bg}">
        <div class="report-career-ico">${c.ico}</div>
        <div class="report-career-body">
          <div class="report-career-title" style="color:${bc.c}">${c.title}</div>
          <div class="report-career-roles">${roles}</div>
          <a class="report-career-link no-print"
             href="index.html#career-${c.id}" target="_blank">
            ${isTa ? 'Vazhi-ல் ஆராயுங்கள் →' : 'Explore on Vazhi →'}
          </a>
        </div>
      </div>`;
  }).join('');

  return `
  <div class="report-section">
    <div class="report-section-title">
      ${isTa ? 'உங்களுக்கு பொருத்தமான தொழில்கள்' : 'Career Matches'}
    </div>
    <div class="report-career-grid">${cards}</div>
  </div>`;
}

// ── Section 7: Next Steps ─────────────────────────────────────────────────────
function renderNextSteps(grade, top1, top2, L, isTa) {
  const isEarlyGrade = grade === '8-10';
  const p1 = RP_PROFILES[top1];
  const p2 = RP_PROFILES[top2];

  let steps;
  if (isEarlyGrade) {
    steps = isTa ? [
      `உங்கள் ஆசிரியரிடம் "${p1.short_ta}" மற்றும் "${p2.short_ta}" ஆர்வங்களைப் பற்றி பேசுங்கள்.`,
      'Vazhi-ல் உள்ள "Explore Courses" பகுதியில் உங்கள் ஆர்வமுள்ள படிப்புகளை பாருங்கள்.',
      'மேலே பரிந்துரைக்கப்பட்ட பிரிவில் உள்ள பாடங்களை தீவிரமாக கற்றுக்கொள்ளுங்கள்.',
      'ஒரு career guide புத்தகம் அல்லது YouTube channel பாருங்கள் — real-world stories கேளுங்கள்.',
      'வகுப்பு 12-ல் Vazhi-க்கு திரும்பி college மற்றும் exam guidance பெறுங்கள்.',
    ] : [
      `Talk to a teacher or family member about your top interests: "${p1.short_en}" and "${p2.short_en}".`,
      'Explore the "Explore Courses" tab on Vazhi — browse fields that match your interests.',
      'Focus on the subjects in the recommended stream — build a strong foundation now.',
      'Watch a career documentary or YouTube channel about a career that interests you.',
      'Come back to Vazhi in Class 12 for full college and exam guidance.',
    ];
  } else {
    steps = isTa ? [
      `"${p1.short_ta}" மற்றும் "${p2.short_ta}" ஆர்வங்களுடன் தொடர்புடைய UG படிப்புகளை Vazhi-ல் ஆராயுங்கள்.`,
      'உங்கள் top career-களுக்கு தேவையான entrance exams-ஐ Vazhi "Entrance Exams" tab-ல் பாருங்கள்.',
      'Vazhi College Predictor-ஐ பயன்படுத்தி rank மற்றும் college options புரிந்துகொள்ளுங்கள்.',
      'அந்த துறைகளில் பணிபுரிபவர்களிடம் பேசுங்கள் — LinkedIn அல்லது school alumni மூலம்.',
      'Vazhi "Know Yourself" test-ஐ 6 மாதங்கள் பிறகு மீண்டும் எடுங்கள் — உங்கள் ஆர்வங்கள் மாறும்.',
    ] : [
      `Explore UG courses related to "${p1.short_en}" and "${p2.short_en}" in Vazhi's Explore tab.`,
      'Check the Entrance Exams tab on Vazhi for exams relevant to your top career paths.',
      'Use the Vazhi College Predictor to understand your rank range and college options.',
      'Talk to someone working in one of your matched careers — LinkedIn or school alumni.',
      'Retake the Know Yourself test in 6 months — your interests will sharpen over time.',
    ];
  }

  return `
  <div class="report-section">
    <div class="report-section-title">
      ${isTa ? 'உங்கள் அடுத்த படிகள்' : 'Your Next Steps'}
    </div>
    <div class="report-steps">
      ${steps.map((s,i) => `
        <div class="report-step">
          <span class="report-step-num">${i+1}</span>
          <span class="report-step-text">${s}</span>
        </div>`).join('')}
    </div>
  </div>`;
}

// ── Footer ────────────────────────────────────────────────────────────────────
function renderFooter(d, L, isTa) {
  return `
  <div class="report-footer">
    <strong>${isTa ? 'வழி Vazhi' : 'Vazhi வழி'}</strong> · vazhi.in ·
    ${isTa ? 'இலவச கல்வி வழிகாட்டி, இந்திய மாணவர்களுக்காக' : 'Free education guidance for Indian students'}
    <br>
    ${isTa ? 'அறிக்கை உருவாக்கப்பட்டது' : 'Report generated'}:
    ${d.date || new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}
    <p class="report-disclaimer">
      ${isTa
        ? 'இந்த அறிக்கை ஒரு தொடக்க புள்ளி — இறுதி தீர்ப்பு அல்ல. பல தொழில் பாதைகளை ஆராயுங்கள், அந்த துறைகளில் பணிபுரிபவர்களிடம் பேசுங்கள், மற்றும் உங்கள் சொந்த தீர்ப்பையும் நம்புங்கள்.'
        : 'This report is a starting point — not a final verdict. Explore several paths, talk to people in those fields, and trust your own judgement too. Your interests and strengths will keep evolving.'}
    </p>
  </div>`;
}
