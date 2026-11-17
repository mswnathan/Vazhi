// Vazhi — Announcements Section (Home Tab)
// Renders exam dates, results, counselling and application deadlines

// ── Group 4: date status thresholds ─────────────────────────────────
const ANN_SOON_DAYS = 7;   // ≤ this many days away → 'soon' (urgent highlight)
const ANN_NEAR_DAYS = 30;  // ≤ this many days away → 'near' (upcoming highlight)

let annFilter = 'all';
let annStateOnly = false;  // true = show only Tamil Nadu (State-level) announcements

// ── DATE HELPERS ─────────────────────────────────────────────────────────────
// Parse 'YYYY-MM-DD' as LOCAL midnight — avoids UTC off-by-one in IST (+5:30)
function annParseDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

// ── DATE STATUS ──────────────────────────────────────────────────────────────
function annStatus(entry) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const start = annParseDate(entry.date);
  const end   = entry.endDate ? annParseDate(entry.endDate) : annParseDate(entry.date);

  if (today > end) {
    const isDeadline = entry.category === 'application' || entry.category === 'admission';
    return { status: 'past', label: isDeadline ? 'Closed' : 'Completed' };
  }
  if (today >= start) {
    return { status: 'ongoing', label: 'Ongoing' };
  }
  const diff = Math.ceil((start - today) / 86400000);
  if (diff <= ANN_SOON_DAYS) return { status: 'soon', label: `In ${diff}d` };
  if (diff <= ANN_NEAR_DAYS) return { status: 'near', label: `In ${diff}d` };
  return { status: 'future', label: annFormatDate(start, entry.endDate) };
}

function annFormatDate(start, endDateStr) {
  const opts = { day: 'numeric', month: 'short' };
  const s = start.toLocaleDateString('en-IN', opts);
  if (!endDateStr) return s;
  const end = annParseDate(endDateStr);
  // Same month — show "22–31 Jan"
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${start.getDate()}–${end.getDate()} ${start.toLocaleDateString('en-IN', { month: 'short' })}`;
  }
  return `${s} – ${end.toLocaleDateString('en-IN', opts)}`;
}

// ── RENDER ───────────────────────────────────────────────────────────────────
function renderAnnouncements(filter) {
  if (filter !== undefined) annFilter = filter;

  const all = typeof ANNOUNCEMENTS !== 'undefined' ? ANNOUNCEMENTS : [];

  // Set "Updated: MMM YYYY" label from the most recent announcement date
  const updEl = document.getElementById('ann-updated');
  if (updEl && all.length) {
    const latest = all.reduce((mx, a) => a.date > mx ? a.date : mx, all[0].date);
    const d = new Date(latest);
    if (!isNaN(d)) {
      const m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()];
      updEl.textContent = `Updated: ${m} ${d.getFullYear()}`;
    }
  }

  // Apply category filter, then the Tamil Nadu-only toggle
  let filtered = annFilter === 'all' ? all : all.filter(a => a.category === annFilter);
  if (annStateOnly) filtered = filtered.filter(a => a.level === 'State' && a.state === 'Tamil Nadu');

  // Split into upcoming/ongoing and past
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const upcoming = [], past = [];
  filtered.forEach(a => {
    const end = a.endDate ? annParseDate(a.endDate) : annParseDate(a.date);
    if (today > end) past.push(a);
    else upcoming.push(a);
  });

  // Sort upcoming by date ascending
  upcoming.sort((a, b) => annParseDate(a.date) - annParseDate(b.date));
  // Sort closed by end date descending (most recently closed first)
  past.sort((a, b) => annParseDate(b.endDate || b.date) - annParseDate(a.endDate || a.date));

  const listEl      = document.getElementById('ann-list');
  const pastEl      = document.getElementById('ann-past');
  const openHdrEl   = document.getElementById('ann-open-hdr');
  const closedHdrEl = document.getElementById('ann-closed-hdr');
  if (!listEl) return;

  // Section 1 — Open & upcoming (always shown)
  if (openHdrEl) {
    openHdrEl.innerHTML = `<span class="ann-sec-title">🟢 Open &amp; upcoming</span>` +
      `<span class="ann-sec-count">${upcoming.length}</span>` +
      `<span class="ann-sec-sub">Apply or prepare — these are still ahead of you</span>`;
  }
  listEl.innerHTML = upcoming.length
    ? upcoming.map(a => annRow(a, false)).join('')
    : `<div class="ann-empty">No open or upcoming dates in this category.</div>`;

  // Section 2 — Already closed (visible; hidden only when there is nothing closed)
  if (closedHdrEl) {
    closedHdrEl.style.display = past.length ? '' : 'none';
    closedHdrEl.innerHTML = `<span class="ann-sec-title">🔴 Already closed</span>` +
      `<span class="ann-sec-count">${past.length}</span>` +
      `<span class="ann-sec-sub">Deadlines and exams that have passed — don't plan around these</span>`;
  }
  if (pastEl) {
    pastEl.innerHTML = past.map(a => annRow(a, true)).join('');
    pastEl.style.display = past.length ? '' : 'none';
  }
}

function annRow(a, isPast) {
  const { status, label } = annStatus(a);
  const badgeCls = `ann-badge-${status}`;
  const catLabel = { exam: 'Exam', result: 'Result', counselling: 'Counselling', application: 'Application', admission: 'Admission', news: 'News' }[a.category] || a.category;
  const priorityCls = a.priority === 'high' && !isPast ? ' ann-priority-high' : '';
  const pastCls = isPast ? ' ann-past-row' : '';

  // Tentative: prefix date badge with "~" and show a label tag (only for non-past entries)
  const isTentative = a.tentative && status !== 'past';
  const dateLabel = isTentative ? `~${label}` : label;
  const tentativeTag = isTentative
    ? `<span class="ann-tentative-tag">Tentative</span>`
    : '';

  const levelTag = a.level === 'State'
    ? `<span class="ann-level-badge ann-level-state">📍 ${a.state || 'State'}</span>`
    : a.level === 'National' ? `<span class="ann-level-badge ann-level-national">🇮🇳 National</span>` : '';

  return `<div class="ann-row${priorityCls}${pastCls}">
    <span class="ann-cat ann-cat-${a.category}">${catLabel}</span>
    <div class="ann-body">
      <div class="ann-title">${a.icon ? a.icon + ' ' : ''}${a.title}${tentativeTag}${levelTag}</div>
      <div class="ann-desc">${a.desc}${a.link ? ` <a href="https://${a.link}" target="_blank" rel="noopener" class="ann-link">↗ ${a.link}</a>` : ''}</div>
    </div>
    <div class="ann-date">
      <span class="ann-date-badge ${badgeCls}">${dateLabel}</span>
    </div>
  </div>`;
}

// ── FILTER ───────────────────────────────────────────────────────────────────
function setAnnFilter(cat) {
  annFilter = cat;
  document.querySelectorAll('.ann-filter-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat === cat)
  );
  renderAnnouncements();
}

// Quick toggle: show only Tamil Nadu (State-level) announcements — layers on
// top of whatever category filter is currently active.
function toggleAnnStateOnly(btn) {
  annStateOnly = !annStateOnly;
  if (btn) btn.classList.toggle('active', annStateOnly);
  renderAnnouncements();
}
