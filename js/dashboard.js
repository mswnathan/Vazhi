// Vazhi — Personal Dashboard
// Renders a signed-in user's saved colleges, saved scholarships, upcoming
// deadlines, and a link to their Know Yourself report (device-only, never uploaded).
// Reuses window.VazhiAuth for all Firestore access — no data files loaded here.

(function () {
  const root = () => document.getElementById('dash-root');
  let wired = false;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  // ── Deadline parsing ────────────────────────────────────────────────
  // Scholarship `deadline` may be an ISO date ('2026-01-31'), free text, or ''.
  function parseDeadline(dl) {
    if (!dl) return null;
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dl.trim());
    if (!m) return null;
    return new Date(+m[1], +m[2] - 1, +m[3]);
  }
  function fmtDate(d) {
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  // ── Section renderers (exported for mock-data verification) ─────────
  function renderSavedColleges(docs) {
    if (!docs.length) {
      return emptyCard('🏛', 'No saved colleges yet',
        'Browse colleges and tap ♡ Save to build your shortlist.',
        'explore.html#colleges', 'Browse colleges →');
    }
    const cards = docs.map(c => `
      <div class="dash-card">
        <div class="dash-card-main">
          <div class="dash-card-name">${esc(c.name)}</div>
          <div class="dash-card-meta">${esc([c.type, c.district].filter(Boolean).join(' · '))}${c.state ? ' · ' + esc(c.state) : ''}</div>
        </div>
        <button class="dash-remove" data-sub="savedColleges" data-id="${esc(c.id)}" title="Remove">✕</button>
      </div>`).join('');
    return sectionShell('🏛', 'Saved colleges', docs.length,
      `<div class="dash-list">${cards}</div>`,
      'explore.html#colleges', 'Find more colleges →');
  }

  function renderSavedScholarships(docs) {
    if (!docs.length) {
      return emptyCard('💰', 'No saved scholarships yet',
        'Browse scholarships and tap ♡ Save to track them here.',
        'explore.html#scholarships', 'Browse scholarships →');
    }
    const cards = docs.map(s => {
      const d = parseDeadline(s.deadline);
      const dl = d ? `<span class="dash-tag dash-tag-dl">📅 Apply by ${fmtDate(d)}</span>`
                   : (s.deadline ? `<span class="dash-tag">📅 ${esc(s.deadline)}</span>` : '');
      return `
      <div class="dash-card">
        <div class="dash-card-main">
          <div class="dash-card-name">${esc(s.name)}</div>
          <div class="dash-card-meta">${s.amount ? '💰 ' + esc(s.amount) : ''}</div>
          <div class="dash-card-tags">${dl}${s.website ? `<a class="dash-tag dash-tag-link" href="https://${esc(s.website)}" target="_blank" rel="noopener">↗ site</a>` : ''}</div>
        </div>
        <button class="dash-remove" data-sub="savedScholarships" data-id="${esc(s.id)}" title="Remove">✕</button>
      </div>`;
    }).join('');
    return sectionShell('💰', 'Saved scholarships', docs.length,
      `<div class="dash-list">${cards}</div>`,
      'explore.html#scholarships', 'Find more scholarships →');
  }

  function renderDeadlines(scholarships) {
    const items = scholarships
      .map(s => ({ name: s.name, d: parseDeadline(s.deadline) }))
      .filter(x => x.d)
      .sort((a, b) => a.d - b.d);
    if (!items.length) return '';  // no dated deadlines — hide the section
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const rows = items.map(x => {
      const days = Math.ceil((x.d - today) / 86400000);
      const soon = days >= 0 && days <= 30;
      const past = days < 0;
      const when = past ? 'Passed' : days === 0 ? 'Today' : `in ${days} day${days === 1 ? '' : 's'}`;
      return `<div class="dash-dl-row${soon ? ' soon' : ''}${past ? ' past' : ''}">
        <span class="dash-dl-date">${fmtDate(x.d)}</span>
        <span class="dash-dl-name">${esc(x.name)}</span>
        <span class="dash-dl-when">${when}</span>
      </div>`;
    }).join('');
    return sectionShell('⏳', 'Upcoming deadlines', items.length,
      `<div class="dash-dl">${rows}</div>`, '', '');
  }

  function renderReport() {
    let data = null;
    try { data = JSON.parse(localStorage.getItem('vazhi_report') || 'null'); } catch (_) {}
    if (!data) {
      return emptyCard('🧠', 'Discover your strengths',
        'Take the 12-minute Know Yourself test to get a personal career report.',
        'explore.html#psychometric', 'Take the test →');
    }
    const top = (data.topTypes || data.top || []).slice(0, 3).map(esc).join(' · ');
    return sectionShell('🧠', 'Your career report', null,
      `<div class="dash-report">
        ${top ? `<div class="dash-report-types">${top}</div>` : ''}
        <div class="dash-card-meta">Saved on this device.</div>
      </div>`,
      'report.html', 'View full report →');
  }

  // ── Layout helpers ──────────────────────────────────────────────────
  function sectionShell(ico, title, count, inner, moreHref, moreLabel) {
    const cnt = (count || count === 0) ? ` <span class="dash-count">${count}</span>` : '';
    const more = moreHref ? `<a class="dash-more" href="${moreHref}">${moreLabel}</a>` : '';
    return `<section class="dash-section">
      <div class="dash-section-head"><h2>${ico} ${esc(title)}${cnt}</h2>${more}</div>
      ${inner}
    </section>`;
  }
  function emptyCard(ico, title, sub, href, label) {
    return `<section class="dash-section">
      <div class="dash-empty">
        <div class="dash-empty-ico">${ico}</div>
        <div class="dash-empty-title">${esc(title)}</div>
        <div class="dash-empty-sub">${esc(sub)}</div>
        <a class="dash-empty-cta" href="${href}">${esc(label)}</a>
      </div>
    </section>`;
  }

  // ── Main render ─────────────────────────────────────────────────────
  async function render() {
    const el = root();
    if (!el) return;

    if (window.VazhiAuth && VazhiAuth.isConfigured && !VazhiAuth.isConfigured()) {
      el.innerHTML = gatedHTML('Sign-in isn\'t configured for this site yet.');
      return;
    }
    const user = window.VazhiAuth && VazhiAuth.getUser();
    if (!user) {
      el.innerHTML = gatedHTML();
      return;
    }

    el.innerHTML = `<div class="dash-greeting">Welcome back, <b>${esc(user.displayName || (user.email || '').split('@')[0])}</b> 👋</div>
      <div class="dash-loading">Loading your saved items…</div>`;

    let colleges = [], scholarships = [];
    try {
      [colleges, scholarships] = await Promise.all([
        VazhiAuth.getSavedDocs('savedColleges'),
        VazhiAuth.getSavedDocs('savedScholarships')
      ]);
    } catch (e) {
      console.error('[dashboard] load failed', e);
      el.innerHTML = `<div class="dash-greeting">Welcome back 👋</div>
        <section class="dash-section"><div class="dash-empty"><div class="dash-empty-ico">⚠️</div>
        <div class="dash-empty-title">Couldn't load your saved items</div>
        <div class="dash-empty-sub">Please refresh the page.</div></div></section>`;
      return;
    }

    el.innerHTML =
      `<div class="dash-greeting">Welcome back, <b>${esc(user.displayName || (user.email || '').split('@')[0])}</b> 👋</div>`
      + renderDeadlines(scholarships)
      + renderSavedColleges(colleges)
      + renderSavedScholarships(scholarships)
      + renderReport();
  }

  function gatedHTML(msg) {
    return `<div class="dash-gate">
      <div class="dash-gate-ico">🔒</div>
      <h1 class="dash-gate-title">Your Vazhi dashboard</h1>
      <p class="dash-gate-sub">${esc(msg || 'Sign in to see your saved colleges, scholarships, deadlines and career report — all in one place.')}</p>
      ${msg ? '' : '<button class="dash-gate-btn" onclick="if(window.VazhiAuth)VazhiAuth.openModal(\'signin\')">Sign in / Create account</button>'}
      <a class="dash-gate-back" href="index.html">← Back to Vazhi</a>
    </div>`;
  }

  // ── Remove handler (event delegation) ───────────────────────────────
  document.addEventListener('click', async e => {
    const btn = e.target.closest && e.target.closest('.dash-remove');
    if (!btn) return;
    btn.disabled = true;
    try {
      await VazhiAuth.toggleSavedItem(btn.dataset.sub, btn.dataset.id, {});  // exists → delete
      const card = btn.closest('.dash-card');
      if (card) card.remove();
      render();  // re-render to refresh counts + deadlines
    } catch (err) { console.error(err); btn.disabled = false; }
  });

  // ── Boot ────────────────────────────────────────────────────────────
  function boot() {
    if (wired) { render(); return; }
    wired = true;
    if (window.VazhiAuth && VazhiAuth.onAuthChange) VazhiAuth.onAuthChange(() => render());
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  // Expose renderers for mock-data verification.
  window.VazhiDash = { render, renderSavedColleges, renderSavedScholarships, renderDeadlines, renderReport };
})();
