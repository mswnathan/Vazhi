// Vazhi — Scholarships Tab
// Renders scholarship cards with level / stream / search filters.
// Data source: data/scholarships.js → SCHOLARSHIPS[]
// Reuses: BS (badge styles) from data/courses.js

let schFilter = { level: 'all', stream: '', search: '' };

const SCH_LEVEL_LABEL = {
  Central:       '🏛 Central Govt',
  State:         '🌏 State Govt',
  Corporate:     '🏢 Corporate',
  International: '✈ International',
};

// ── INIT ─────────────────────────────────────────────────────────────────────

function populateScholarshipFilters() {
  const sel = document.getElementById('sch-stream');
  if (!sel || typeof SCHOLARSHIPS === 'undefined') return;
  const streams = new Set();
  SCHOLARSHIPS.forEach(s => s.ugStream.forEach(st => { if (st !== 'Any') streams.add(st); }));
  [...streams].sort().forEach(st => {
    const o = document.createElement('option');
    o.value = st; o.textContent = st;
    sel.appendChild(o);
  });
}

// ── RENDER ────────────────────────────────────────────────────────────────────

function renderScholarships() {
  const out   = document.getElementById('sch-out');
  const stats = document.getElementById('sch-stats');
  if (!out || typeof SCHOLARSHIPS === 'undefined') return;

  const lvl = schFilter.level;
  const str = (document.getElementById('sch-stream')?.value || '').trim();
  const q   = (document.getElementById('sch-search')?.value || '').toLowerCase().trim();

  const filtered = SCHOLARSHIPS.filter(s => {
    if (lvl !== 'all' && s.level !== lvl) return false;
    if (str && !s.ugStream.includes(str) && !s.ugStream.includes('Any')) return false;
    if (q && !`${s.name} ${s.short} ${s.body} ${s.for} ${s.note}`.toLowerCase().includes(q)) return false;
    return true;
  });

  if (stats) {
    const lvlTag = lvl !== 'all' ? ` · ${SCH_LEVEL_LABEL[lvl] || lvl}` : '';
    const strTag = str ? ` · ${str}` : '';
    stats.innerHTML = `<b>${filtered.length}</b> scholarship${filtered.length !== 1 ? 's' : ''}${lvlTag}${strTag}`;
  }

  if (!filtered.length) {
    out.innerHTML = `<div style="text-align:center;padding:40px 16px;color:var(--text3)">No scholarships match your filters. <button class="btn-reset" style="margin-left:8px" onclick="resetSchFilters()">Reset</button></div>`;
    return;
  }

  out.innerHTML = `<div class="sch-t-grid">${filtered.map(schCard).join('')}</div>`;
}

// ── CARD TEMPLATE ─────────────────────────────────────────────────────────────

function schCard(s) {
  const bs = BS[s.bc] || BS.accent;

  const badge = s.badge
    ? `<span class="sch-t-badge" style="background:${bs.bg};color:${bs.c};border-color:${bs.bd}">${s.badge}</span>`
    : '';

  const streamTags = s.ugStream.includes('Any')
    ? `<span class="sch-t-tag">All streams</span>`
    : s.ugStream.map(st => `<span class="sch-t-tag">${st}</span>`).join('');

  const pctTag = s.class12Pct > 0
    ? `<span class="sch-t-tag">Min ${s.class12Pct}% (Cl. 12)</span>`
    : '';

  let deadlineHtml = '';
  if (s.deadline) {
    const [y, m, d] = s.deadline.split('-').map(Number);
    const dlDate = new Date(y, m - 1, d);
    const today  = new Date(); today.setHours(0, 0, 0, 0);
    if (today > dlDate) {
      deadlineHtml = `<span class="sch-t-tag sch-t-dl-past">📅 Applications Closed</span>`;
    } else {
      const diff = Math.ceil((dlDate - today) / 86400000);
      const fmt  = dlDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
      const cls  = diff <= 30 ? ' sch-t-dl-soon' : '';
      deadlineHtml = `<span class="sch-t-tag${cls}">📅 Apply by ${fmt}</span>`;
    }
  } else {
    deadlineHtml = `<span class="sch-t-tag">📅 Check website for deadline</span>`;
  }

  const note = s.note
    ? `<div class="sch-t-note">⚠ ${s.note}</div>`
    : '';

  return `<div class="sch-t-card" style="border-left-color:${bs.bd}">
    <div class="sch-t-head">
      <span class="sch-t-level">${SCH_LEVEL_LABEL[s.level] || s.level}</span>
      ${badge}
    </div>
    <div class="sch-t-name">${s.name}</div>
    <div class="sch-t-body">${s.body}</div>
    <div class="sch-t-for">👤 ${s.for}</div>
    <div class="sch-t-tags">
      <span class="sch-t-tag">💰 ${s.amount}</span>
      <span class="sch-t-tag">⏱ ${s.duration}</span>
      ${pctTag}
      ${streamTags}
      ${deadlineHtml}
    </div>
    ${note}
    <a href="https://${s.website}" target="_blank" rel="noopener" class="sch-t-link">↗ ${s.website}</a>
  </div>`;
}

// ── FILTERS ───────────────────────────────────────────────────────────────────

function setSchFilter(level) {
  schFilter.level = level;
  document.querySelectorAll('.sch-lvl-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lvl === level)
  );
  renderScholarships();
}

function resetSchFilters() {
  schFilter = { level: 'all', stream: '', search: '' };
  document.querySelectorAll('.sch-lvl-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lvl === 'all')
  );
  const strEl  = document.getElementById('sch-stream');
  const srchEl = document.getElementById('sch-search');
  if (strEl)  strEl.value  = '';
  if (srchEl) srchEl.value = '';
  renderScholarships();
}
