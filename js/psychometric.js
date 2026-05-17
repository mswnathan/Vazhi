// Vazhi — Psychometric Test Logic (Holland RIASEC)
// Phase 2 redesign: forced-choice interest pairs, adaptive follow-up,
//                   behavioral-anchor skills, 4-section state machine.
// Reads: INTEREST_QUESTIONS, FOLLOWUP_QUESTIONS, SKILL_QUESTIONS, SKILL_LABELS,
//        WORKSTYLE_QUESTIONS, HOLLAND_CAREER_MAP, RIASEC_PROFILES from data/psychometric.js
// Reads: CAREER_MAP from data/career-guide.js

// ── STATE ────────────────────────────────────────────────────────────────────
let psyState = {
  phase:        'intro',  // 'intro'|'interest'|'transition-followup'|'followup'|
                          // 'transition-skills'|'skills'|'transition-workstyle'|'workstyle'|'results'
  grade:        null,    // null | '8-10' | '11-12'
  lang:         'en',    // 'en' | 'ta'
  name:         '',      // student name (optional, used in report)
  interestIdx:  0,
  followupQueue: [],      // flat list of follow-up question objects (with .forType added)
  followupIdx:  0,
  skillIdx:     0,
  workstyleIdx: 0,
  scores:       { R:0, I:0, A:0, S:0, E:0, C:0 },  // interest wins (0–10 each)
  subtypes:     {},       // { 'I': 'I-data', 'E': 'E-lead' }
  skills:       {},       // { numerical: avg, verbal: avg, ... } (0–4)
  skillRaw:     {},       // { 'sk-1': 2, 'sk-3': 4, ... }
  workBonus:    { R:0, I:0, A:0, S:0, E:0, C:0 },  // 0–2 wins per type
  // per-phase answer history for back-navigation
  interestAnswers:  [],  // winType | null (null = skipped)
  followupAnswers:  [],  // { forType }
  skillAnswers:     [],  // { qId }
  workstyleAnswers: [],  // typeWon
};

// ── ENTRY POINT ──────────────────────────────────────────────────────────────
function renderPsychometricTab() {
  if (window.VazhiAuth && VazhiAuth.isConfigured() && !VazhiAuth.getUser()) {
    return renderPsyAuthGate();
  }
  switch (psyState.phase) {
    case 'intro':                return renderPsychometricIntro();
    case 'interest':             return renderInterestQuestion();
    case 'transition-followup':  return renderTransition('followup');
    case 'followup':             return renderFollowupQuestion();
    case 'transition-skills':    return renderTransition('skills');
    case 'skills':               return renderSkillQuestion();
    case 'transition-workstyle': return renderTransition('workstyle');
    case 'workstyle':            return renderWorkstyleQuestion();
    case 'results':              return renderPsychometricResults();
  }
}

function psyEl() { return document.getElementById('tab-psychometric'); }

function renderPsyAuthGate() {
  const el = psyEl();
  if (!el) return;
  el.innerHTML = `
    <div class="psy-gate">
      <div class="psy-gate-ico">🔒</div>
      <h2>Sign in to take the Know Yourself test</h2>
      <p>Your answers and career report are saved to your account, so you can come back later, compare results over time, and share with your parents or mentor.</p>
      <button class="psy-gate-btn" onclick="VazhiAuth.openModal('signup')">Create free account</button>
      <button class="psy-gate-link" onclick="VazhiAuth.openModal('signin')">Already have an account? Sign in</button>
    </div>`;
  if (!renderPsyAuthGate._wired) {
    VazhiAuth.onAuthChange(u => { if (u) renderPsychometricTab(); });
    renderPsyAuthGate._wired = true;
  }
}

// ── LANGUAGE TOGGLE ──────────────────────────────────────────────────────────
function togglePsyLang() {
  psyState.lang = psyState.lang === 'en' ? 'ta' : 'en';
  renderPsychometricTab();
}

// ── PROGRESS DOTS ────────────────────────────────────────────────────────────
function renderProgressDots() {
  const L = psyState.lang;
  const phases = [
    { key:'interest',   labelEn:'Interests', labelTa:'ஆர்வம்' },
    { key:'followup',   labelEn:'Insight',   labelTa:'நுண்ணறிவு' },
    { key:'skills',     labelEn:'Skills',    labelTa:'திறன்கள்' },
    { key:'workstyle',  labelEn:'Style',     labelTa:'பாணி' },
  ];
  const cur = psyState.phase;
  const order = ['interest','followup','skills','workstyle'];
  const curIdx = order.indexOf(
    cur.startsWith('transition-') ? cur.replace('transition-','') : cur
  );

  return `<div class="psy-progress-dots">
    ${phases.map((p, i) => {
      const done   = i < curIdx;
      const active = i === curIdx;
      const cls    = done ? 'psy-dot done' : active ? 'psy-dot active' : 'psy-dot';
      const inner  = done ? '✓' : (i + 1);
      return `<div class="${cls}">
        <span class="psy-dot-ring">${inner}</span>
        <span class="psy-dot-label">${L === 'en' ? p.labelEn : p.labelTa}</span>
      </div>`;
    }).join('<div class="psy-dot-line"></div>')}
  </div>`;
}

// ── BACK NAVIGATION ───────────────────────────────────────────────────────────
function psyGoBack() {
  const phase = psyState.phase;
  if (phase === 'interest' && psyState.interestIdx > 0) {
    const prev = psyState.interestAnswers.pop();
    psyState.interestIdx--;
    if (prev !== null) psyState.scores[prev]--;
    renderInterestQuestion();
  } else if (phase === 'followup' && psyState.followupIdx > 0) {
    const prev = psyState.followupAnswers.pop();
    psyState.followupIdx--;
    if (prev) delete psyState.subtypes[prev.forType];
    renderFollowupQuestion();
  } else if (phase === 'skills' && psyState.skillIdx > 0) {
    const prev = psyState.skillAnswers.pop();
    psyState.skillIdx--;
    if (prev) delete psyState.skillRaw[prev.qId];
    renderSkillQuestion();
  } else if (phase === 'workstyle' && psyState.workstyleIdx > 0) {
    const prev = psyState.workstyleAnswers.pop();
    psyState.workstyleIdx--;
    if (prev !== null) psyState.workBonus[prev]--;
    renderWorkstyleQuestion();
  }
}

// ── INTRO SCREEN ─────────────────────────────────────────────────────────────
function renderPsychometricIntro() {
  const L = psyState.lang;
  const u = window.VazhiAuth && VazhiAuth.getUser();
  const firstName = u ? ((u.displayName || u.email.split('@')[0] || '').trim().split(' ')[0]) : '';
  const t = {
    title:   firstName
      ? (L === 'en' ? `Discover Your Path, ${firstName}` : `உங்கள் எதிர்கால பாதையை கண்டுபிடியுங்கள், ${firstName}`)
      : (L === 'en' ? 'Discover Your Path' : 'உங்கள் எதிர்கால பாதையை கண்டுபிடியுங்கள்'),
    sub:     L === 'en'
      ? 'An honest, three-part assessment. Understand what drives you, what you\'re good at, and where your strengths lead — based on the Holland RIASEC model used by career counsellors worldwide.'
      : 'இது உங்களைப் பற்றி அறிய உதவும் ஒரு எளிய மதிப்பீடு. உங்களுக்கு என்ன பிடிக்கும், நீங்கள் எதில் திறமையுள்ளவர், எந்த துறை உங்களுக்கு பொருத்தம் என்பதை இது காட்டும்.',
    s1t:L==='en'?'Your Interests':'உங்களுக்கு பிடித்தவை',
    s1d:L==='en'?'Pick the option that appeals more — no experience needed':'உங்களுக்கு அதிகம் பிடித்ததை தேர்வு செய்யுங்கள். இதை முன்பு செய்த அனுபவம் இருக்க வேண்டியதில்லை.',
    s2t:L==='en'?'Your Strengths':'உங்கள் திறமைகள்',
    s2d:L==='en'?'Rate your abilities honestly — including "never tried this"':'நீங்கள் எதில் திறமையுள்ளவர் என்று சொல்லுங்கள். "இதுவரை செய்து பார்த்ததில்லை" என்பதையும் தேர்வு செய்யலாம்.',
    s3t:L==='en'?'Your Work Style':'நீங்கள் வேலை செய்ய விரும்பும் முறை',
    s3d:L==='en'?'5 quick preference pairs — what kind of environment fits you?':'நீங்கள் எப்படி வேலை செய்ய விரும்புகிறீர்கள் என்பதை அறிய சில எளிய கேள்விகள்.',
    m:  L==='en'?'Minutes':'நிமிடங்கள்',
    sec:L==='en'?'Sections':'பகுதிகள்',
    dim:L==='en'?'Dimensions':'விதமான ஆர்வங்கள்',
    btn:L==='en'?'Start →':'தொடங்கு →',
    note:L==='en'
      ? 'No right or wrong answers — honest responses give the most accurate results.'
      : 'சரியான அல்லது தவறான பதில்கள் இல்லை — நேர்மையான பதில்கள் மிகவும் துல்லியமான முடிவுகளை தருகின்றன.',
    lang:L==='en'?'தமிழில் படி':'Read in English',
    gradeQ: L==='en'?'What class are you currently in?':'நீங்கள் தற்போது எந்த வகுப்பில் படிக்கிறீர்கள்?',
    g8_10:  L==='en'?'Class 8 to 10':'Class 8 முதல் 10 வரை',
    g11_12: L==='en'?'Class 11 or 12':'Class 11 அல்லது 12',
    nameQ:  L==='en'?'Your name (optional — shown on your report)':'உங்கள் பெயர் (விரும்பினால் — report-ல் காட்டப்படும்)',
    namePh: L==='en'?'e.g. Sreeya':'எ.கா. சங்கவி',
  };

  psyEl().innerHTML = `
<div class="psycho-wrap">
  <div class="psy-lang-bar">
    <button class="psy-lang-btn" onclick="togglePsyLang()">${t.lang}</button>
  </div>
  <div class="psycho-intro-card">
    <div class="psycho-intro-icon">🧠</div>
    <h1 class="psycho-intro-title">${t.title}</h1>
    <p class="psycho-intro-sub">${t.sub}</p>

    <div class="psycho-intro-stats">
      <div class="psy-stat"><span class="psy-stat-n">~12</span><span class="psy-stat-l">${t.m}</span></div>
      <div class="psy-stat"><span class="psy-stat-n">3</span><span class="psy-stat-l">${t.sec}</span></div>
      <div class="psy-stat"><span class="psy-stat-n">6</span><span class="psy-stat-l">${t.dim}</span></div>
    </div>

    <div class="psycho-intro-steps">
      <div class="psy-step"><span class="psy-step-ico">🎯</span><div><strong>${t.s1t}</strong><p>${t.s1d}</p></div></div>
      <div class="psy-step"><span class="psy-step-ico">💪</span><div><strong>${t.s2t}</strong><p>${t.s2d}</p></div></div>
      <div class="psy-step"><span class="psy-step-ico">⚖️</span><div><strong>${t.s3t}</strong><p>${t.s3d}</p></div></div>
    </div>

    <div class="psy-grade-select">
      <p class="psy-grade-label">${t.gradeQ}</p>
      <div class="psy-grade-btns">
        <button class="psy-grade-btn${psyState.grade==='8-10'  ?' selected':''}" onclick="setPsyGrade('8-10')">${t.g8_10}</button>
        <button class="psy-grade-btn${psyState.grade==='11-12'?' selected':''}" onclick="setPsyGrade('11-12')">${t.g11_12}</button>
      </div>
    </div>

    ${(() => {
      const u = window.VazhiAuth && VazhiAuth.getUser();
      if (u) {
        const nm = (u.displayName || u.email.split('@')[0] || '').trim();
        psyState.name = nm;
        return '';
      }
      return `
    <div class="psy-name-row">
      <label class="psy-name-label">${t.nameQ}</label>
      <input class="psy-name-input" id="psy-name-input" type="text"
             placeholder="${t.namePh}" maxlength="60" value="${psyState.name}"
             oninput="psyState.name=this.value.trim()">
    </div>`;
    })()}

    <button class="psy-start-btn" onclick="startPsyTest()" ${!psyState.grade ? 'disabled' : ''}>${t.btn}</button>
    <p class="psycho-intro-note">${t.note}</p>
  </div>
</div>`;
}

// ── GRADE SELECTOR ───────────────────────────────────────────────────────────
function setPsyGrade(g) {
  psyState.grade = g;
  renderPsychometricIntro();
}

// ── START TEST ───────────────────────────────────────────────────────────────
function startPsyTest() {
  psyState.phase        = 'interest';
  psyState.interestIdx  = 0;
  psyState.followupQueue = [];
  psyState.followupIdx  = 0;
  psyState.skillIdx     = 0;
  psyState.workstyleIdx = 0;
  psyState.scores           = { R:0, I:0, A:0, S:0, E:0, C:0 };
  psyState.subtypes         = {};
  psyState.skills           = {};
  psyState.skillRaw         = {};
  psyState.workBonus        = { R:0, I:0, A:0, S:0, E:0, C:0 };
  psyState.interestAnswers  = [];
  psyState.followupAnswers  = [];
  psyState.skillAnswers     = [];
  psyState.workstyleAnswers = [];
  renderInterestQuestion();
}

// ── INTEREST SECTION ─────────────────────────────────────────────────────────
function renderInterestQuestion() {
  const idx = psyState.interestIdx;
  const _qs = psyState.grade === '8-10' ? INTEREST_QUESTIONS_8_10 : INTEREST_QUESTIONS_11_12;
  if (idx >= _qs.length) {
    psyState.phase = 'transition-followup';
    return renderTransition('followup');
  }

  const questions = psyState.grade === '8-10' ? INTEREST_QUESTIONS_8_10 : INTEREST_QUESTIONS_11_12;
  const q = questions[idx];
  const L = psyState.lang;
  const prompt = L === 'en'
    ? 'Which would you enjoy more?'
    : 'எது உங்களுக்கு அதிகமாக பிடிக்கும்?';
  const sub = L === 'en'
    ? 'Pick whichever feels right — even if you have not tried either yet.'
    : 'முயற்சிக்காவிட்டாலும், எது நல்லது என்று தோன்றுகிறதோ அதை தேர்வு செய்யுங்கள்.';
  const orWord = L === 'en' ? 'or' : 'அல்லது';

  psyEl().innerHTML = `
<div class="psycho-wrap psycho-test-wrap">
  <div class="psy-lang-bar">
    <button class="psy-lang-btn" onclick="togglePsyLang()">${L === 'en' ? 'தமிழ்' : 'English'}</button>
  </div>
  ${renderProgressDots()}
  <div class="psy-choice-card">
    <p class="psy-choice-prompt">${prompt}</p>
    <p class="psy-q-sub">${sub}</p>
    <div class="psy-choice-btns">
      <button class="psy-choice-btn" onclick="psyAnswerInterest('${q.a.type}')">
        <span class="psy-choice-label">A</span>
        <span class="psy-choice-text">${L === 'ta' && q.a.text_ta ? `<span class="psy-ta">${q.a.text_ta}</span><span class="psy-en-sub">${q.a.text}</span>` : q.a.text}</span>
      </button>
      <div class="psy-choice-or">${orWord}</div>
      <button class="psy-choice-btn" onclick="psyAnswerInterest('${q.b.type}')">
        <span class="psy-choice-label">B</span>
        <span class="psy-choice-text">${L === 'ta' && q.b.text_ta ? `<span class="psy-ta">${q.b.text_ta}</span><span class="psy-en-sub">${q.b.text}</span>` : q.b.text}</span>
      </button>
    </div>
    <div class="psy-skip-row">
      ${idx > 0 ? `<button class="psy-back-btn" onclick="psyGoBack()">${L === 'en' ? '← Back' : '← திரும்பு'}</button>` : ''}
      <button class="psy-skip-btn" onclick="psySkipInterest()">${L === 'en' ? 'Skip this question →' : 'இந்த கேள்வியை தவிர்க்கவும் →'}</button>
    </div>
  </div>
</div>`;
}

function psyAnswerInterest(winType) {
  psyState.interestAnswers.push(winType);
  psyState.scores[winType]++;
  setTimeout(() => {
    psyState.interestIdx++;
    renderInterestQuestion();
  }, 180);
}

function psySkipInterest() {
  psyState.interestAnswers.push(null);
  psyState.interestIdx++;
  renderInterestQuestion();
}

// ── TRANSITION SCREENS ────────────────────────────────────────────────────────
function renderTransition(next) {
  const L = psyState.lang;
  let icon, titleEn, titleTa, subEn, subTa;

  if (next === 'followup') {
    // Build the follow-up queue now (based on top-2 interest types)
    const keys = determineFollowupKeys();
    psyState.followupKeys  = keys;
    psyState.followupQueue = keys.flatMap(k =>
      FOLLOWUP_QUESTIONS[k].map(q => ({ ...q, forType: k }))
    );
    psyState.followupIdx = 0;
    icon    = '🎯';
    titleEn = 'Great start!';
    titleTa = 'நல்ல தொடக்கம்!';
    subEn   = 'A few more questions to sharpen your profile. These help us understand the direction that fits you best — it only takes 2 minutes.';
    subTa   = 'உங்கள் சுயவிவரத்தை மேம்படுத்த இன்னும் சில கேள்விகள். இவை உங்களுக்கு மிகவும் பொருத்தமான திசையை புரிந்துகொள்ள உதவுகின்றன.';
  } else if (next === 'skills') {
    icon    = '💪';
    titleEn = 'Now, let\'s look at your strengths';
    titleTa = 'இப்போது, உங்கள் பலங்களை பார்ப்போம்';
    subEn   = 'Rate each ability honestly. If you have never tried something, just say so — that is completely fine.';
    subTa   = 'ஒவ்வொரு திறனையும் நேர்மையாக மதிப்பிடுங்கள். ஒன்றை முயற்சித்ததே இல்லையென்றால் அப்படியே சொல்லுங்கள் — அது முழுக்க சரியானதே.';
  } else {
    icon    = '⚖️';
    titleEn = 'Almost done!';
    titleTa = 'கிட்டத்தட்ட முடிந்தது!';
    subEn   = 'Last section — 5 quick questions about the kind of environment where you do your best work.';
    subTa   = 'கடைசி பகுதி — நீங்கள் சிறப்பாக பணிபுரியும் சூழலைப் பற்றி 5 விரைவான கேள்விகள்.';
  }

  const btnText = L === 'en' ? 'Continue →' : 'தொடரவும் →';

  psyEl().innerHTML = `
<div class="psycho-wrap psycho-test-wrap">
  <div class="psy-lang-bar">
    <button class="psy-lang-btn" onclick="togglePsyLang()">${L === 'en' ? 'தமிழ்' : 'English'}</button>
  </div>
  ${renderProgressDots()}
  <div class="psy-transition-screen">
    <div class="psy-transition-icon">${icon}</div>
    <h2 class="psy-transition-title">${L === 'en' ? titleEn : titleTa}</h2>
    <p class="psy-transition-sub">${L === 'en' ? subEn : subTa}</p>
    <button class="psy-transition-btn" onclick="psyStartNextSection('${next}')">${btnText}</button>
  </div>
</div>`;
}

function psyStartNextSection(next) {
  if (next === 'followup')  { psyState.phase = 'followup';             renderFollowupQuestion(); }
  else if (next === 'skills')    { psyState.phase = 'skills';          renderSkillQuestion(); }
  else                           { psyState.phase = 'workstyle';       renderWorkstyleQuestion(); }
}

// ── FOLLOW-UP SECTION ─────────────────────────────────────────────────────────
function determineFollowupKeys() {
  const sorted = Object.entries(psyState.scores).sort((a, b) => b[1] - a[1]);
  return [sorted[0][0], sorted[1][0]];
}

function renderFollowupQuestion() {
  const idx = psyState.followupIdx;
  if (idx >= psyState.followupQueue.length) {
    psyState.phase = 'transition-skills';
    return renderTransition('skills');
  }

  const q = psyState.followupQueue[idx];
  const L = psyState.lang;
  const total = psyState.followupQueue.length;

  psyEl().innerHTML = `
<div class="psycho-wrap psycho-test-wrap">
  <div class="psy-lang-bar">
    <button class="psy-lang-btn" onclick="togglePsyLang()">${L === 'en' ? 'தமிழ்' : 'English'}</button>
  </div>
  ${renderProgressDots()}
  <div class="psy-followup-card">
    <p class="psy-choice-prompt">${q.q}</p>
    <div class="psy-fu-options">
      ${q.options.map(opt => `
        <button class="psy-fu-option" onclick="psyAnswerFollowup('${q.forType}','${opt.subtype}')">
          ${opt.text}
        </button>`).join('')}
    </div>
    ${idx > 0 ? `<div class="psy-skip-row"><button class="psy-back-btn" onclick="psyGoBack()">${L === 'en' ? '← Back' : '← திரும்பு'}</button></div>` : ''}
  </div>
</div>`;
}

function psyAnswerFollowup(forType, subtype) {
  psyState.followupAnswers.push({ forType });
  psyState.subtypes[forType] = subtype;
  setTimeout(() => {
    psyState.followupIdx++;
    renderFollowupQuestion();
  }, 180);
}

// ── SKILLS SECTION ────────────────────────────────────────────────────────────
function renderSkillQuestion() {
  const idx = psyState.skillIdx;
  if (idx >= SKILL_QUESTIONS.length) {
    // Aggregate skill scores by domain
    const domainSums  = {};
    const domainCounts = {};
    SKILL_QUESTIONS.forEach(q => {
      const v = psyState.skillRaw[q.id];
      if (v == null) return;
      domainSums[q.domain]   = (domainSums[q.domain]   || 0) + v;
      domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
    });
    psyState.skills = {};
    Object.keys(domainSums).forEach(d => {
      psyState.skills[d] = domainSums[d] / domainCounts[d];
    });
    psyState.phase = 'transition-workstyle';
    return renderTransition('workstyle');
  }

  const q = SKILL_QUESTIONS[idx];
  const L = psyState.lang;
  const labels = SKILL_LABELS[L] || SKILL_LABELS.en;
  const qText  = L === 'en' ? q.q_en : q.q_ta;
  const prompt = L === 'en'
    ? 'How would you honestly rate yourself at this?'
    : 'இதில் நீங்கள் உங்களை எவ்வாறு மதிப்பிடுவீர்கள்?';

  psyEl().innerHTML = `
<div class="psycho-wrap psycho-test-wrap">
  <div class="psy-lang-bar">
    <button class="psy-lang-btn" onclick="togglePsyLang()">${L === 'en' ? 'தமிழ்' : 'English'}</button>
  </div>
  ${renderProgressDots()}
  <div class="psy-skill-card">
    <p class="psy-choice-prompt">${prompt}</p>
    <p class="psy-skill-activity">${qText}</p>
    <div class="psy-skill-anchors">
      ${labels.map((lbl, i) => `
        <button class="psy-anchor-btn" onclick="psyAnswerSkill('${q.id}', ${i})">
          <span class="psy-anchor-dot"></span>
          <span class="psy-anchor-text">${lbl}</span>
        </button>`).join('')}
    </div>
    ${idx > 0 ? `<div class="psy-skip-row"><button class="psy-back-btn" onclick="psyGoBack()">${L === 'en' ? '← Back' : '← திரும்பு'}</button></div>` : ''}
  </div>
</div>`;
}

function psyAnswerSkill(qId, value) {
  psyState.skillAnswers.push({ qId });
  psyState.skillRaw[qId] = value;
  setTimeout(() => {
    psyState.skillIdx++;
    renderSkillQuestion();
  }, 180);
}

// ── WORKSTYLE SECTION ─────────────────────────────────────────────────────────
function renderWorkstyleQuestion() {
  const idx = psyState.workstyleIdx;
  if (idx >= WORKSTYLE_QUESTIONS.length) {
    psyState.phase = 'results';
    return renderPsychometricResults();
  }

  const q = WORKSTYLE_QUESTIONS[idx];
  const L = psyState.lang;
  const optA   = L === 'en' ? q.en_a : q.ta_a;
  const optB   = L === 'en' ? q.en_b : q.ta_b;
  const prompt = L === 'en' ? 'Which appeals more to you?' : 'உங்களுக்கு எது அதிகமாக ஈர்க்கிறது?';
  const sub    = L === 'en'
    ? 'Pick whichever feels more like you — even if both partially fit.'
    : 'இரண்டும் ஓரளவு பொருந்தினாலும், உங்களுக்கு அதிகமாக பொருந்துவதை தேர்வு செய்யுங்கள்.';
  const orWord = L === 'en' ? 'or' : 'அல்லது';

  psyEl().innerHTML = `
<div class="psycho-wrap psycho-test-wrap">
  <div class="psy-lang-bar">
    <button class="psy-lang-btn" onclick="togglePsyLang()">${L === 'en' ? 'தமிழ்' : 'English'}</button>
  </div>
  ${renderProgressDots()}
  <div class="psy-choice-card">
    <p class="psy-choice-prompt">${prompt}</p>
    <p class="psy-q-sub">${sub}</p>
    <div class="psy-choice-btns">
      <button class="psy-choice-btn" onclick="psyAnswerWorkstyle('${q.typeA}')">
        <span class="psy-choice-label">A</span>
        <span class="psy-choice-text">${optA}</span>
      </button>
      <div class="psy-choice-or">${orWord}</div>
      <button class="psy-choice-btn" onclick="psyAnswerWorkstyle('${q.typeB}')">
        <span class="psy-choice-label">B</span>
        <span class="psy-choice-text">${optB}</span>
      </button>
    </div>
    ${idx > 0 ? `<div class="psy-skip-row"><button class="psy-back-btn" onclick="psyGoBack()">${L === 'en' ? '← Back' : '← திரும்பு'}</button></div>` : ''}
  </div>
</div>`;
}

function psyAnswerWorkstyle(typeWon) {
  psyState.workstyleAnswers.push(typeWon);
  psyState.workBonus[typeWon]++;
  setTimeout(() => {
    psyState.workstyleIdx++;
    renderWorkstyleQuestion();
  }, 180);
}

// ── SCORING ──────────────────────────────────────────────────────────────────
function computeNormalisedScores() {
  const types = ['R','I','A','S','E','C'];

  // Each type can win 0–10 interest questions; workstyle adds 0–2 bonus per type.
  // Combined raw: interest contributes 80%, workstyle 20% of each type's ceiling.
  const MAX_INTEREST  = 10;
  const MAX_WORKSTYLE = 2;

  const raw = {};
  types.forEach(t => {
    raw[t] = (psyState.scores[t] / MAX_INTEREST)    * 80
           + (psyState.workBonus[t] / MAX_WORKSTYLE) * 20;
  });

  const max = Math.max(...Object.values(raw));
  const normalised = {};
  types.forEach(t => {
    normalised[t] = max > 0 ? Math.round((raw[t] / max) * 100) : 0;
  });

  const sorted = Object.entries(normalised).sort((a, b) => b[1] - a[1]);
  return { normalised, sorted };
}

// ── RESULTS SCREEN ────────────────────────────────────────────────────────────
function renderPsychometricResults() {
  psyState.phase = 'results';
  const { normalised, sorted } = computeNormalisedScores();
  const L    = psyState.lang;
  const top1 = sorted[0][0];
  const top2 = sorted[1][0];
  const code = top1 + top2;

  const p1 = RIASEC_PROFILES[top1];
  const p2 = RIASEC_PROFILES[top2];

  // Career matches
  const careerIds = HOLLAND_CAREER_MAP[code] || HOLLAND_CAREER_MAP[top2 + top1] || [];
  const careers = careerIds
    .map(id => (typeof CAREER_MAP !== 'undefined' ? CAREER_MAP.find(c => c.id === id) : null))
    .filter(Boolean)
    .slice(0, 6);

  // RIASEC bars
  const typeOrder  = ['R','I','A','S','E','C'];
  const typeLabels = {
    R:{ en:'Realistic',     ta:'யதார்த்தம்' },
    I:{ en:'Investigative', ta:'விசாரணை' },
    A:{ en:'Artistic',      ta:'கலை' },
    S:{ en:'Social',        ta:'சமூகம்' },
    E:{ en:'Enterprising',  ta:'முயற்சி' },
    C:{ en:'Conventional',  ta:'மரபு' },
  };

  const barsHTML = typeOrder.map(t => {
    const pct   = normalised[t];
    const prof  = RIASEC_PROFILES[t];
    const isTop = t === top1 || t === top2;
    return `
      <div class="psy-bar-row${isTop ? ' psy-bar-top' : ''}">
        <div class="psy-bar-meta">
          <span class="psy-bar-icon">${prof.icon}</span>
          <span class="psy-bar-code" style="color:${prof.color}">${t}</span>
          <span class="psy-bar-name">${typeLabels[t][L]}</span>
        </div>
        <div class="psy-bar-track">
          <div class="psy-bar-fill" data-pct="${pct}" style="width:0%;background:${prof.color}"></div>
        </div>
        <span class="psy-bar-pct">${pct}%</span>
      </div>`;
  }).join('');

  // Subtype refinement chip
  const sub1 = psyState.subtypes[top1];
  const sub2 = psyState.subtypes[top2];
  const subtypeMap = {
    'R-fix':'Maintenance & Repair','R-build':'Construction & Civil','R-tech':'Technology & Operations','R-nature':'Agriculture & Environment',
    'I-data':'Data Science & Analytics','I-human':'Human & Social Sciences','I-discover':'Scientific Research','I-pattern':'Maths & Logic',
    'A-design':'Visual Design & Architecture','A-write':'Writing & Journalism','A-perform':'Music, Dance & Theatre','A-digital':'Digital Media & Animation',
    'S-teach':'Education & Training','S-care':'Healthcare & Counselling','S-community':'Social Work & Community','S-connect':'HR & Communications',
    'E-start':'Entrepreneurship','E-lead':'Leadership & Management','E-persuade':'Law, Sales & Negotiation','E-policy':'Policy & Civil Services',
    'C-finance':'Finance & Accounting','C-data':'Data Management','C-admin':'Administration & Operations','C-compliance':'Compliance & Quality Assurance',
  };
  const subtypeMapTa = {
    'R-fix':'பராமரிப்பு & சரிசெய்தல்','R-build':'கட்டுமானம் & சிவில்','R-tech':'தொழில்நுட்பம் & இயக்கம்','R-nature':'விவசாயம் & சுற்றுச்சூழல்',
    'I-data':'தரவு அறிவியல்','I-human':'மனித & சமூக அறிவியல்','I-discover':'அறிவியல் ஆராய்ச்சி','I-pattern':'கணிதம் & தர்க்கம்',
    'A-design':'காட்சி வடிவமைப்பு','A-write':'எழுத்து & பத்திரிகை','A-perform':'இசை, நடனம் & கலை','A-digital':'டிஜிட்டல் ஊடகம்',
    'S-teach':'கல்வி & பயிற்சி','S-care':'சுகாதாரம் & ஆலோசனை','S-community':'சமூக சேவை','S-connect':'மனித வள & தகவல் தொடர்பு',
    'E-start':'தொழில்முனைவோர்','E-lead':'தலைமை & நிர்வாகம்','E-persuade':'சட்டம், விற்பனை & பேச்சுவார்த்தை','E-policy':'கொள்கை & அரசு சேவை',
    'C-finance':'நிதி & கணக்கு','C-data':'தரவு மேலாண்மை','C-admin':'நிர்வாகம் & இயக்கம்','C-compliance':'இணக்கம் & தர உறுதி',
  };
  const map = L === 'en' ? subtypeMap : subtypeMapTa;
  let subtypeHTML = '';
  if (sub1 || sub2) {
    const chips = [sub1, sub2].filter(Boolean).map(s =>
      `<span class="psy-subtype-chip">${map[s] || s}</span>`
    ).join('');
    const heading = L === 'en' ? 'Your profile leans toward' : 'உங்கள் சுயவிவரம் இந்த திசையில் சாய்கிறது';
    subtypeHTML = `<div class="psy-subtype-row"><span class="psy-subtype-heading">${heading}:</span>${chips}</div>`;
  }

  // Skills aptitude bars
  const domainLabels = {
    numerical:   { en:'Numerical',    ta:'எண்ணியல்' },
    verbal:      { en:'Verbal',       ta:'வாய்மொழி' },
    analytical:  { en:'Analytical',   ta:'பகுப்பாய்வு' },
    spatial:     { en:'Spatial',      ta:'இட உணர்வு' },
    creative:    { en:'Creative',     ta:'படைப்பாற்றல்' },
    social:      { en:'Social',       ta:'சமூகம்' },
    technical:   { en:'Technical',    ta:'தொழில்நுட்பம்' },
    conventional:{ en:'Organised',    ta:'ஒழுங்கமைப்பு' },
    stability:   { en:'Calm & Focus', ta:'அமைதி & கவனம்' },
  };
  const domainColors = {
    numerical:'#1A4DD6', verbal:'#d81b60', analytical:'#8e44ad', spatial:'#27ae60',
    creative:'#e74c3c', social:'#f39c12', technical:'#c0392b', conventional:'#2980b9', stability:'#16a085',
  };
  const skillsHTML = Object.keys(psyState.skills).length > 0 ? `
    <div class="psy-skills-section">
      <h3 class="psy-sec-heading">${L === 'en' ? 'Your Aptitude Profile' : 'உங்கள் திறன் சுயவிவரம்'}</h3>
      <div class="psy-skill-bars">
        ${Object.entries(psyState.skills).map(([domain, avg]) => {
          const pct  = Math.round((avg / 4) * 100);
          const lbl  = domainLabels[domain];
          const col  = domainColors[domain] || '#888';
          return `<div class="psy-skill-bar-row">
            <span class="psy-skill-bar-label">${lbl ? lbl[L] : domain}</span>
            <div class="psy-skill-bar-track">
              <div class="psy-skill-bar-fill" data-pct="${pct}" style="width:0%;background:${col}"></div>
            </div>
            <span class="psy-skill-bar-pct">${pct}%</span>
          </div>`;
        }).join('')}
      </div>
    </div>` : '';

  const hollandTitle = L === 'en' ? `${p1.short_en} + ${p2.short_en}` : `${p1.short_ta} + ${p2.short_ta}`;
  const hollandSub   = L === 'en'
    ? `Holland Code <strong>${code}</strong> · Your top 2 of 6 dimensions`
    : `Holland குறியீடு <strong>${code}</strong> · உங்கள் 6 பரிமாணங்களில் முதல் 2`;
  const desc = L === 'en' ? p1.desc_en : p1.desc_ta;

  const isEarlyGrade = psyState.grade === '8-10';

  // ── Save to localStorage for report.html ────────────────────────────────────
  try {
    const reportData = {
      name:       psyState.name || '',
      grade:      psyState.grade,
      lang:       L,
      date:       new Date().toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }),
      scores:     psyState.scores,
      workBonus:  psyState.workBonus,
      subtypes:   psyState.subtypes,
      skills:     psyState.skills,
      normalised,
      top2:       [top1, top2],
      hollandCode: code,
      careers:    careers.map(c => ({
        id:      c.id,
        title:   c.title,
        ico:     c.ico,
        bc:      c.bc,
        careers: c.careers || [],
        summary: c.summary || '',
        class9_10: c.class9_10 || null,
        class12:   c.class12   || null,
        keywords:  c.keywords  || [],
      })),
      streamRec: isEarlyGrade ? {
        stream:    CLASS11_STREAM_MAP[top1],
        streamDet: STREAM_DETAILS[CLASS11_STREAM_MAP[top1].stream],
        altDet:    STREAM_DETAILS[CLASS11_STREAM_MAP[top1].alt],
      } : null,
    };
    localStorage.setItem('vazhi_report', JSON.stringify(reportData));
  } catch(e) { /* storage unavailable — skip silently */ }

  // ── Early-grade bottom section ───────────────────────────────────────────
  let bottomHTML = '';
  if (isEarlyGrade) {
    const sm    = CLASS11_STREAM_MAP[top1];
    const sd    = STREAM_DETAILS[sm.stream];
    const sdAlt = STREAM_DETAILS[sm.alt];
    const isClass10 = false; // merged into '8-10' group

    const earlyCardsHTML = careers.map(c => {
      const bs  = (typeof BS !== 'undefined' && BS[c.bc]) ? BS[c.bc] : { bg:'#EBF0FF', c:'#0F3098', bd:'#BDD0FF' };
      const tip = c.class9_10 ? c.class9_10.tip : (c.class12 ? c.class12.tip : '');
      return `
        <div class="psy-career-card" style="border-top:3px solid ${bs.bd};background:${bs.bg}"
             onclick="openCareerFromPsy('${c.id}')">
          <div class="psy-cc-ico">${c.ico}</div>
          <div class="psy-cc-body">
            <div class="psy-cc-title" style="color:${bs.c}">${c.title}</div>
            <div class="psy-cc-roles">${tip}</div>
          </div>
          <div class="psy-cc-arrow">→</div>
        </div>`;
    }).join('');

    bottomHTML = `
  <div class="psy-stream-section">
    <h3 class="psy-sec-heading">${L === 'en' ? (isClass10 ? 'Recommended Class 11 Stream' : 'Stream to aim for in Class 11') : (isClass10 ? 'பரிந்துரைக்கப்பட்ட வகுப்பு 11 பிரிவு' : 'வகுப்பு 11-ல் தேர்வு செய்யும் பிரிவு')}</h3>
    <div class="psy-stream-card" style="border-left:4px solid ${sd.color}">
      <div class="psy-stream-badge" style="background:${sd.color}">${sd.icon} ${sd.label}</div>
      <div class="psy-stream-subjects">${(sd.subjects || []).join(' · ')}</div>
      <div class="psy-stream-leads">→ ${sd.leads}</div>
      <div class="psy-stream-tip">${L === 'en' ? sd.tip_en : sd.tip_ta}</div>
    </div>
    <p class="psy-stream-alt">${L === 'en' ? `Also consider <strong>${sdAlt ? sdAlt.label : sm.alt}</strong> — ${sm.altNote}` : `மாற்றாக <strong>${sdAlt ? sdAlt.label : sm.alt}</strong> பரிசீலிக்கவும் — ${sm.altNote}`}</p>
  </div>

  <div class="psy-focus-section">
    <h3 class="psy-sec-heading">${L === 'en' ? 'Subjects to build strength in now' : 'இப்போது வலுப்படுத்த வேண்டிய பாடங்கள்'}</h3>
    <p class="psy-stream-tip">${sm.tip}</p>
    <div class="psy-focus-tags">${sm.focus.map(f => `<span class="psy-focus-tag">${f}</span>`).join('')}</div>
  </div>

  <div class="psy-careers-section">
    <h3 class="psy-sec-heading">${L === 'en' ? 'Career paths that match your profile' : 'உங்கள் சுயவிவரத்திற்கு பொருத்தமான தொழில் பாதைகள்'}</h3>
    <div class="psy-career-grid">${earlyCardsHTML}</div>
  </div>

  <div class="psy-results-cta">
    <button class="psy-cta-report" onclick="window.open('report.html','_blank')">
      ${L === 'en' ? '📄 View Full Report →' : '📄 முழு Report பார்க்க →'}
    </button>
    <button class="psy-cta-primary" onclick="switchTab('find')">
      ${L === 'en' ? '🔍 Explore All Careers →' : '🔍 அனைத்து தொழில்களையும் ஆராயுங்கள் →'}
    </button>
    <button class="psy-cta-secondary" onclick="retakePsyTest()">
      ${L === 'en' ? '↺ Retake' : '↺ மீண்டும் எடுங்கள்'}
    </button>
  </div>
  <div class="psy-forward-link" onclick="switchTab('courses')">${L === 'en' ? 'Come back in Class 12 for college &amp; exam guidance →' : 'கல்லூரி மற்றும் தேர்வு வழிகாட்டுதலுக்கு வகுப்பு 12-ல் திரும்பவும் →'}</div>`;

  } else {
    // ── Standard Class 11-12 bottom section ──────────────────────────────
    const cardsHTML = careers.map(c => {
      const bs    = (typeof BS !== 'undefined' && BS[c.bc]) ? BS[c.bc] : { bg:'#EBF0FF', c:'#0F3098', bd:'#BDD0FF' };
      const roles = (c.careers || []).slice(0, 3).join(' · ');
      return `
        <div class="psy-career-card" style="border-top:3px solid ${bs.bd};background:${bs.bg}"
             onclick="openCareerFromPsy('${c.id}')">
          <div class="psy-cc-ico">${c.ico}</div>
          <div class="psy-cc-body">
            <div class="psy-cc-title" style="color:${bs.c}">${c.title}</div>
            <div class="psy-cc-roles">${roles}</div>
          </div>
          <div class="psy-cc-arrow">→</div>
        </div>`;
    }).join('');

    bottomHTML = `
  <div class="psy-careers-section">
    <h3 class="psy-sec-heading">${L === 'en' ? 'Careers that suit you' : 'உங்களுக்கு பொருத்தமான தொழில்கள்'}</h3>
    <p class="psy-careers-sub">${L === 'en'
      ? `Based on your ${p1.short_en} + ${p2.short_en} profile — click any card to explore the full career path.`
      : `உங்கள் ${p1.short_ta} + ${p2.short_ta} சுயவிவரத்தின் அடிப்படையில் — முழு தொழில் பாதையை பார்க்க எந்த அட்டையிலும் கிளிக் செய்யுங்கள்.`}
    </p>
    <div class="psy-career-grid">${cardsHTML}</div>
  </div>

  <div class="psy-results-cta">
    <button class="psy-cta-report" onclick="window.open('report.html','_blank')">
      ${L === 'en' ? '📄 View Full Report →' : '📄 முழு Report பார்க்க →'}
    </button>
    <button class="psy-cta-primary" onclick="switchTab('find')">
      ${L === 'en' ? '🔍 Explore All Careers →' : '🔍 அனைத்து தொழில்களையும் ஆராயுங்கள் →'}
    </button>
    <button class="psy-cta-secondary" onclick="retakePsyTest()">
      ${L === 'en' ? '↺ Retake' : '↺ மீண்டும் எடுங்கள்'}
    </button>
  </div>`;
  }

  psyEl().innerHTML = `
<div class="psycho-wrap psycho-results-wrap">
  <div class="psy-lang-bar">
    <button class="psy-lang-btn" onclick="togglePsyLang()">${L === 'en' ? 'தமிழ்' : 'English'}</button>
  </div>

  <div class="psy-results-hero">
    <div class="psy-results-code-badges">
      <span class="psy-code-badge" style="background:${p1.color}">${p1.icon} ${top1}</span>
      <span class="psy-code-plus">+</span>
      <span class="psy-code-badge" style="background:${p2.color}">${p2.icon} ${top2}</span>
    </div>
    <h2 class="psy-results-title">${hollandTitle}</h2>
    <p class="psy-results-holland-sub">${hollandSub}</p>
    <p class="psy-results-desc">${desc}</p>
  </div>

  <div class="psy-bars-section">
    <h3 class="psy-sec-heading">${L === 'en' ? 'Your RIASEC Profile' : 'உங்கள் RIASEC சுயவிவரம்'}</h3>
    <div class="psy-bars">${barsHTML}</div>
    ${subtypeHTML}
  </div>

  ${skillsHTML}

  ${bottomHTML}

  <p class="psy-disclaimer">
    ${L === 'en'
      ? 'These results are a starting point — not a verdict. Your interests and strengths will keep evolving. Explore several paths, talk to people in those fields, and trust your own judgement too.'
      : 'இந்த முடிவுகள் ஒரு தொடக்க புள்ளி — இறுதி தீர்ப்பு அல்ல. பல தொழில் பாதைகளை ஆராய்ந்து, அந்த துறைகளில் பணிபுரிபவர்களிடம் பேசுங்கள், உங்கள் சொந்த தீர்ப்பையும் நம்புங்கள்.'}
  </p>
</div>`;

  // Animate RIASEC bars
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll('.psy-bar-fill').forEach(el => {
        el.style.transition = 'width 0.9s cubic-bezier(0.4,0,0.2,1)';
        el.style.width = el.dataset.pct + '%';
      });
      document.querySelectorAll('.psy-skill-bar-fill').forEach(el => {
        el.style.transition = 'width 0.8s cubic-bezier(0.4,0,0.2,1)';
        el.style.width = el.dataset.pct + '%';
      });
    });
  });
}

// ── NAVIGATION FROM RESULTS ───────────────────────────────────────────────────
function openCareerFromPsy(careerId) {
  switchTab('find');
  if (typeof setFindMode === 'function') setFindMode('career');
  if (typeof cgSelectSuggestion === 'function') cgSelectSuggestion(careerId);
}

function retakePsyTest() {
  psyState = {
    phase:'intro', grade: null, lang: psyState.lang, name: psyState.name,
    interestIdx:0, followupQueue:[], followupIdx:0, skillIdx:0, workstyleIdx:0,
    scores:{ R:0, I:0, A:0, S:0, E:0, C:0 }, subtypes:{}, skills:{}, skillRaw:{},
    workBonus:{ R:0, I:0, A:0, S:0, E:0, C:0 },
  };
  renderPsychometricIntro();
}
