// Vazhi — Home Wizard (3-step guided path finder)
// State machine modelled on js/interest.js step pattern.
// Phase 2: Step 3 asks for subject-strength and renders a slide-style
// categorised course list (data/subject-strengths.js).

let wzState = { step: 1, klass: null, subjects: null, strength: null };

// ── Mount the wizard scaffold into #wz-root ───────────────────────────────
function wzMount() {
  const root = document.getElementById('wz-root');
  if (!root) return;
  root.innerHTML = `
    <div class="wz-wrap">
      <div class="wz-head">
        <div class="wz-title">${WZ_T.introTitle.en}</div>
        <div class="wz-title-ta">${WZ_T.introTitle.ta}</div>
        <div class="wz-sub">${WZ_T.introSub.en} · ${WZ_T.introSub.ta}</div>
      </div>
      <div class="wz-dots" id="wz-dots"></div>
      <div class="wz-step on" id="wz-step-1"></div>
      <div class="wz-step" id="wz-step-2"></div>
      <div class="wz-step" id="wz-step-3"></div>
      <div class="wz-step" id="wz-step-result"></div>
    </div>`;
  wzGo(1);
}

function wzDots(active) {
  const dots = ['1', '2', '3', '✓'];
  return dots.map((d, i) => {
    const idx = i + 1;
    let cls = 'wz-dot';
    if (active === 'result' && i === 3) cls += ' active';
    else if (active === 'result' || idx < active) cls += ' done';
    else if (idx === active) cls += ' active';
    return `<span class="${cls}">${d}</span>`;
  }).join('<span class="wz-dot-line"></span>');
}

function wzGo(step) {
  wzState.step = step;
  ['wz-step-1', 'wz-step-2', 'wz-step-3', 'wz-step-result'].forEach(id =>
    document.getElementById(id).classList.remove('on'));
  document.getElementById('wz-dots').innerHTML =
    wzDots(step === 'result' ? 'result' : step);
  if (step === 1) wzRenderStep1();
  else if (step === 2) wzRenderStep2();
  else if (step === 3) wzRenderStep3();
  else if (step === 'result') wzRenderResult();
}

// ── Step 1: class ─────────────────────────────────────────────────────────
function wzRenderStep1() {
  const el = document.getElementById('wz-step-1');
  el.classList.add('on');
  el.innerHTML = `
    <div class="wz-q">${WZ_T.step1Q.en}</div>
    <div class="wz-q-ta">${WZ_T.step1Q.ta}</div>
    <div class="wz-chip-grid wz-chip-grid-3">
      ${WZ_CLASS.map(c => `
        <button class="wz-chip ${wzState.klass === c.id ? 'sel' : ''}"
                onclick="wzPickClass('${c.id}')">
          <span class="wz-chip-ico">${c.ico}</span>
          <span class="wz-chip-en">${c.en}</span>
          <span class="wz-chip-ta">${c.ta}</span>
        </button>`).join('')}
    </div>`;
}

function wzPickClass(id) {
  wzState.klass = id;
  wzGo(2);
}

// ── Step 2: subjects ──────────────────────────────────────────────────────
function wzRenderStep2() {
  const el = document.getElementById('wz-step-2');
  el.classList.add('on');
  const isClass10 = wzState.klass === 'class10';
  const q    = isClass10 ? WZ_T.step2Q_class10 : WZ_T.step2Q;
  const hint = isClass10
    ? `<div class="wz-hint">${WZ_T.step2Q_class10Hint.en} · ${WZ_T.step2Q_class10Hint.ta}</div>`
    : '';
  el.innerHTML = `
    <div class="wz-q">${q.en}</div>
    <div class="wz-q-ta">${q.ta}</div>
    ${hint}
    <div class="wz-chip-grid wz-chip-grid-3">
      ${WZ_SUBJ.map(s => `
        <button class="wz-chip ${wzState.subjects === s.id ? 'sel' : ''}"
                onclick="wzPickSubj('${s.id}')">
          <span class="wz-chip-ico">${s.ico}</span>
          <span class="wz-chip-en">${s.en}</span>
          <span class="wz-chip-ta">${s.ta}</span>
        </button>`).join('')}
    </div>
    <div id="wz-unknown-cta" class="wz-unknown-cta" style="display:none">
      <button class="wz-link-btn" onclick="wzGoPsychometric()">${WZ_T.unknownCTA.en}</button>
      <div class="wz-q-ta">${WZ_T.unknownCTA.ta}</div>
    </div>
    <div class="wz-nav">
      <button class="wz-back" onclick="wzGo(1)">${WZ_T.back.en}</button>
    </div>`;
}

function wzPickSubj(id) {
  wzState.subjects = id;
  if (id === 'unknown') {
    const cta = document.getElementById('wz-unknown-cta');
    if (cta) cta.style.display = 'block';
    document.querySelectorAll('#wz-step-2 .wz-chip').forEach(b => b.classList.remove('sel'));
    const me = [...document.querySelectorAll('#wz-step-2 .wz-chip')]
      .find(b => b.getAttribute('onclick') === `wzPickSubj('unknown')`);
    if (me) me.classList.add('sel');
    setTimeout(() => wzGo(3), 900);
    return;
  }
  wzGo(3);
}

function wzGoPsychometric() {
  if (typeof switchTab === 'function') switchTab('psychometric');
}

// ── Step 3: subject-strength chips (filtered by subject pick) ─────────────
function wzFilteredStrengths() {
  const subj = wzState.subjects || 'unknown';
  const all = typeof SUBJECT_STRENGTHS !== 'undefined' ? SUBJECT_STRENGTHS : [];
  return all.filter(s => s.forSubjects.includes(subj));
}

function wzRenderStep3() {
  const el = document.getElementById('wz-step-3');
  el.classList.add('on');
  const strengths = wzFilteredStrengths();
  el.innerHTML = `
    <div class="wz-q">${WZ_T.step3Q.en}</div>
    <div class="wz-q-ta">${WZ_T.step3Q.ta}</div>
    <div class="wz-hint">${WZ_T.step3Hint.en} · ${WZ_T.step3Hint.ta}</div>
    <div class="wz-chip-grid wz-chip-grid-3">
      ${strengths.map(s => `
        <button class="wz-chip wz-chip-tall ${wzState.strength === s.id ? 'sel' : ''}"
                data-sid="${s.id}"
                onclick="wzPickStrength('${s.id}')">
          <span class="wz-chip-ico">${s.ico}</span>
          <span class="wz-chip-en">${s.en}</span>
          <span class="wz-chip-ta">${s.ta}</span>
        </button>`).join('')}
      <button class="wz-chip wz-chip-tall wz-chip-dunno"
              onclick="wzGoPsychometric()">
        <span class="wz-chip-ico">🧠</span>
        <span class="wz-chip-en">${WZ_T.strengthDunno.en}</span>
        <span class="wz-chip-ta">${WZ_T.strengthDunno.ta}</span>
      </button>
    </div>
    <div class="wz-nav">
      <button class="wz-back" onclick="wzGo(2)">${WZ_T.back.en}</button>
    </div>`;
}

function wzPickStrength(id) {
  wzState.strength = id;
  wzGo('result');
}

// ── Match a course name to existing STREAMS / EXAM_GROUPS entries ─────────
// Returns { exam: examName } if a deep-link is safe to render, else null.
const WZ_EXAM_ALIASES = {
  'jee main': 'JEE Main', 'jee advanced': 'JEE Advanced',
  'tnea': 'TNEA', 'neet-ug': 'NEET-UG', 'neet': 'NEET-UG',
  'cuet-ug': 'CUET-UG', 'cuet': 'CUET-UG',
  'clat': 'CLAT', 'ailet': 'AILET', 'nata': 'NATA',
  'iat': 'IISER IAT', 'nest': 'NEST', 'icar': 'ICAR AIEEA',
  'imu cet': 'IMU CET', 'nchmct jee': 'NCHMCT JEE',
  'nda': 'UPSC NDA',
};

function wzNormaliseExam(examString) {
  if (!examString) return null;
  const head = examString.split('/')[0].trim().toLowerCase();
  for (const k of Object.keys(WZ_EXAM_ALIASES)) {
    if (head === k || head.startsWith(k)) return WZ_EXAM_ALIASES[k];
  }
  return null;
}

function wzCanDeepLink(course) {
  return !!wzNormaliseExam(course.exam);
}

// ── Result step: slide-style categorised list ─────────────────────────────
function wzRenderResult() {
  const el = document.getElementById('wz-step-result');
  el.classList.add('on');
  const strength = (typeof SUBJECT_STRENGTHS !== 'undefined' ? SUBJECT_STRENGTHS : [])
    .find(s => s.id === wzState.strength);

  if (!strength) {
    el.innerHTML = `<div class="wz-soft-note">No matching strength selected.</div>`;
    return;
  }

  const groups = strength.groups.map((g, gi) => `
    <div class="ss-group">
      <div class="ss-group-label">${g.label.en} · <span class="ss-group-label-ta">${g.label.ta}</span></div>
      <ul class="ss-course-list">
        ${g.courses.map((c, ci) => {
          const linkable = wzCanDeepLink(c);
          return `<li class="ss-course-row" data-gi="${gi}" data-ci="${ci}">
            <button class="ss-course-toggle" onclick="wzToggleCourse(${gi}, ${ci})">
              <span class="ss-course-name">${c.name}</span>
              <span class="ss-course-exam">${c.exam || ''}</span>
              <span class="ss-course-caret">▸</span>
            </button>
            <div class="ss-course-detail" id="ss-detail-${gi}-${ci}" style="display:none">
              <div class="ss-detail-line">📝 Entrance route: <strong>${c.exam || 'Not specified'}</strong></div>
              ${linkable
                ? `<button class="ss-see-colleges" onclick="wzSeeColleges('${wzNormaliseExam(c.exam)}')">🏛 See colleges that offer this →</button>`
                : `<div class="ss-detail-soft">Limited govt colleges run this branch — message us via Talk to Vazhi for the current list.</div>`}
            </div>
          </li>`;
        }).join('')}
      </ul>
    </div>`).join('');

  el.innerHTML = `
    <div class="ss-header">
      <div class="ss-header-ico">${strength.ico}</div>
      <div class="ss-header-text">
        <div class="ss-header-title">${strength.en}</div>
        <div class="ss-header-title-ta">${strength.ta}</div>
        <div class="ss-header-tagline">${strength.tagline.en}</div>
        <div class="ss-header-tagline-ta">${strength.tagline.ta}</div>
      </div>
    </div>
    <div class="ss-groups">${groups}</div>
    <div class="wz-nav wz-nav-result">
      <button class="wz-back" onclick="wzReset()">${WZ_T.startOver.en}</button>
      <button class="wz-link-btn" onclick="wzGo(3)">${WZ_T.pickAnother.en}</button>
    </div>
    <div class="wz-contact-inline" id="wz-contact-inline"></div>`;

  if (typeof VazhiContact !== 'undefined') {
    VazhiContact.mount('wz-contact-inline', {
      source: 'wizard',
      prefillClass: wzClassLabel(),
    });
  }
}

function wzToggleCourse(gi, ci) {
  const panel = document.getElementById(`ss-detail-${gi}-${ci}`);
  const row = panel?.closest('.ss-course-row');
  const caret = row?.querySelector('.ss-course-caret');
  if (!panel) return;
  const open = panel.style.display !== 'none';
  panel.style.display = open ? 'none' : 'block';
  if (caret) caret.textContent = open ? '▸' : '▾';
  if (row) row.classList.toggle('open', !open);
}

function wzSeeColleges(examName) {
  if (typeof goToCollegesForExam === 'function') {
    goToCollegesForExam(examName);
  } else if (typeof switchTab === 'function') {
    switchTab('courses');
  }
}

function wzClassLabel() {
  const c = WZ_CLASS.find(x => x.id === wzState.klass);
  return c ? c.en : '';
}

function wzReset() {
  wzState = { step: 1, klass: null, subjects: null, strength: null };
  wzGo(1);
}

// ── Public deep-link helper (called from tab-intro-banners) ───────────────
function wzGoFromTab() {
  if (typeof switchTab === 'function') switchTab('home');
  setTimeout(() => {
    const el = document.getElementById('wz-root');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

// ── Boot ──────────────────────────────────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', wzMount);
} else {
  wzMount();
}
