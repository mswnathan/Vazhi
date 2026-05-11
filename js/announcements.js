// Vazhi — Announcements Section (Home Tab)
// Renders exam dates, results, counselling and application deadlines

// ── Group 4: date status thresholds ─────────────────────────────────
const ANN_SOON_DAYS = 7;   // ≤ this many days away → 'soon' (urgent highlight)
const ANN_NEAR_DAYS = 30;  // ≤ this many days away → 'near' (upcoming highlight)

let annFilter = 'all';

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
    return { status: 'past', label: 'Completed' };
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

  // Apply category filter
  const filtered = annFilter === 'all' ? all : all.filter(a => a.category === annFilter);

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
  // Sort past by date descending (most recent first)
  past.sort((a, b) => annParseDate(b.date) - annParseDate(a.date));

  const listEl       = document.getElementById('ann-list');
  const pastEl       = document.getElementById('ann-past');
  const pastToggleEl = document.getElementById('ann-past-toggle');
  if (!listEl) return;

  if (!upcoming.length && !past.length) {
    listEl.innerHTML = `<div class="ann-empty">No announcements in this category yet.</div>`;
    if (pastEl)       pastEl.style.display = 'none';
    if (pastToggleEl) pastToggleEl.style.display = 'none';
    return;
  }

  listEl.innerHTML = upcoming.length
    ? upcoming.map(a => annRow(a, false)).join('')
    : `<div class="ann-empty">No upcoming dates in this category.</div>`;

  if (pastEl) {
    pastEl.innerHTML = past.length ? past.map(a => annRow(a, true)).join('') : '';
    // Reset visibility when filter changes
    pastEl.style.display = 'none';
  }
  if (pastToggleEl) {
    pastToggleEl.style.display = past.length ? '' : 'none';
    // Reset button text
    const btn = pastToggleEl.querySelector('button');
    if (btn) btn.textContent = '▸ Show completed / past dates';
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

  return `<div class="ann-row${priorityCls}${pastCls}">
    <span class="ann-cat ann-cat-${a.category}">${catLabel}</span>
    <div class="ann-body">
      <div class="ann-title">${a.icon ? a.icon + ' ' : ''}${a.title}${tentativeTag}</div>
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

// ── PAST TOGGLE ───────────────────────────────────────────────────────────────
function toggleAnnPast(btn) {
  const pastEl = document.getElementById('ann-past');
  if (!pastEl) return;
  const open = pastEl.style.display === 'none';
  pastEl.style.display = open ? '' : 'none';
  btn.textContent = open ? '▾ Hide completed / past dates' : '▸ Show completed / past dates';
}
