// Vazhi — Internships Tab
// Renders internship cards with type / stream / search filters.
// Data source: data/internships.js → INTERNSHIPS[]
// Reuses: BS (badge styles) from data/courses.js, sch-t-* CSS classes from scholarships

let intFilter = { type: 'all', stream: '', search: '' };

const INT_TYPE_LABEL = {
  Research:      '🔬 Research',
  Industrial:    '🏭 Industrial / PSU',
  Government:    '🏛 Government',
  International: '✈ International',
};

// ── INIT ─────────────────────────────────────────────────────────────────────

function populateInternshipFilters() {
  const sel = document.getElementById('int-stream');
  if (!sel || typeof INTERNSHIPS === 'undefined') return;
  const streams = new Set();
  INTERNSHIPS.forEach(i => i.ugStream.forEach(st => { if (st !== 'Any') streams.add(st); }));
  [...streams].sort().forEach(st => {
    const o = document.createElement('option');
    o.value = st; o.textContent = st;
    sel.appendChild(o);
  });
}

// ── RENDER ────────────────────────────────────────────────────────────────────

function renderInternships() {
  const out   = document.getElementById('int-out');
  const stats = document.getElementById('int-stats');
  if (!out || typeof INTERNSHIPS === 'undefined') return;

  const typ = intFilter.type;
  const str = (document.getElementById('int-stream')?.value || '').trim();
  const q   = (document.getElementById('int-search')?.value || '').toLowerCase().trim();

  const filtered = INTERNSHIPS.filter(i => {
    if (typ !== 'all' && i.type !== typ) return false;
    if (str && !i.ugStream.includes(str) && !i.ugStream.includes('Any')) return false;
    if (q && !`${i.name} ${i.short} ${i.body} ${i.for} ${i.note}`.toLowerCase().includes(q)) return false;
    return true;
  });

  if (stats) {
    const typTag = typ !== 'all' ? ` · ${INT_TYPE_LABEL[typ] || typ}` : '';
    const strTag = str ? ` · ${str}` : '';
    stats.innerHTML = `<b>${filtered.length}</b> internship${filtered.length !== 1 ? 's' : ''}${typTag}${strTag}`;
  }

  if (!filtered.length) {
    out.innerHTML = `<div style="text-align:center;padding:40px 16px;color:var(--text3)">No internships match your filters. <button class="btn-reset" style="margin-left:8px" onclick="resetIntFilters()">Reset</button></div>`;
    return;
  }

  out.innerHTML = `<div class="sch-t-grid">${filtered.map(intCard).join('')}</div>`;
}

// ── CARD TEMPLATE ─────────────────────────────────────────────────────────────

function intCard(i) {
  const bs = BS[i.bc] || BS.accent;

  const badge = i.badge
    ? `<span class="sch-t-badge" style="background:${bs.bg};color:${bs.c};border-color:${bs.bd}">${i.badge}</span>`
    : '';

  const streamTags = i.ugStream.includes('Any')
    ? `<span class="sch-t-tag">All streams</span>`
    : i.ugStream.map(st => `<span class="sch-t-tag">${st}</span>`).join('');

  let deadlineHtml = '';
  if (i.deadline) {
    const [y, m, d] = i.deadline.split('-').map(Number);
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

  const note = i.note
    ? `<div class="sch-t-note">⚠ ${i.note}</div>`
    : '';

  return `<div class="sch-t-card" style="border-left-color:${bs.bd}">
    <div class="sch-t-head">
      <span class="sch-t-level">${INT_TYPE_LABEL[i.type] || i.type}</span>
      ${badge}
    </div>
    <div class="sch-t-name">${i.name}</div>
    <div class="sch-t-body">${i.body}</div>
    <div class="sch-t-for">👤 ${i.for}</div>
    <div class="sch-t-tags">
      <span class="sch-t-tag">💰 ${i.stipend}</span>
      <span class="sch-t-tag">⏱ ${i.duration}</span>
      <span class="sch-t-tag">📅 ${i.season}</span>
      ${streamTags}
      ${deadlineHtml}
    </div>
    ${note}
    <a href="https://${i.website}" target="_blank" rel="noopener" class="sch-t-link">↗ ${i.website}</a>
  </div>`;
}

// ── FILTERS ───────────────────────────────────────────────────────────────────

function setIntFilter(type) {
  intFilter.type = type;
  document.querySelectorAll('.int-type-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.typ === type)
  );
  renderInternships();
}

function resetIntFilters() {
  intFilter = { type: 'all', stream: '', search: '' };
  document.querySelectorAll('.int-type-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.typ === 'all')
  );
  const strEl  = document.getElementById('int-stream');
  const srchEl = document.getElementById('int-search');
  if (strEl)  strEl.value  = '';
  if (srchEl) srchEl.value = '';
  renderInternships();
}
