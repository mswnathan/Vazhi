// ── JoSAA Rank Predictor ─────────────────────────────────────────────

// ── Group 3: exam / institute type string constants ───────────────────
const EXAM_JEE_ADV  = 'JEE Advanced';
const EXAM_JEE_MAIN = 'JEE Main';
const INST_IIT      = 'IIT';

// ── Group 4: rank classification thresholds ───────────────────────────
const RANK_SAFE_FACTOR  = 0.85;  // rank ≤ worst closing rank × this → Safe
const RANK_GOOD_FACTOR  = 1.15;  // rank ≤ avg  closing rank × this → Good Match
const RANK_REACH_FACTOR = 1.40;  // rank ≤ avg  closing rank × this → Reach

// ── Group 4: trend detection thresholds (fractional change in closing rank) ──
const TREND_HARDER_THRESHOLD = -0.10;  // closing rank fell >10% → harder to get
const TREND_EASIER_THRESHOLD =  0.10;  // closing rank rose >10% → easier to get

// ── Group 4: sparkline SVG dimensions ────────────────────────────────
const SPARK_W   = 80;
const SPARK_H   = 24;
const SPARK_PAD = 2;

function jInit() {
  // Populate state dropdowns for both modes
  const unique = typeof JOSAA_META !== 'undefined'
    ? [...new Set(JOSAA_META.instState)].filter(Boolean).sort()
    : [];
  const opts = '<option value="">Any state</option>' + unique.map(s => `<option>${s}</option>`).join('');
  const s1 = document.getElementById('j-state');
  const s2 = document.getElementById('jr-state');
  if (s1) s1.innerHTML = opts;
  if (s2) s2.innerHTML = opts;
  jOnExamChange();
}

// ── Counselling system switcher (shared across all predictors) ────────
function cpSetSystem(sys) {
  document.querySelectorAll('.cp-sys-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.sys === sys)
  );
  document.querySelectorAll('.cp-sys-panel').forEach(p => {
    p.style.display = p.id === `cp-${sys}` ? '' : 'none';
  });
}

// ── Mode toggle (JoSAA predict vs explore) ───────────────────────────
function jSetMode(mode) {
  document.getElementById('j-form').style.display       = mode === 'predict' ? '' : 'none';
  document.getElementById('j-form-range').style.display = mode === 'explore' ? '' : 'none';
  document.querySelectorAll('.j-mode-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.mode === mode)
  );
  document.getElementById('j-results').innerHTML = '';
}

// ── When exam changes, restrict quota / instType options ─────────────
function jOnExamChange() {
  const exam = document.getElementById('j-exam').value;
  const quotaEl    = document.getElementById('j-quota');
  const instTypeEl = document.getElementById('j-insttype');
  if (exam === EXAM_JEE_ADV) {
    quotaEl.value = '2';
    [...quotaEl.options].forEach(o => { o.disabled = o.value !== '2'; });
    instTypeEl.value = INST_IIT;
    [...instTypeEl.options].forEach(o => { o.disabled = o.value !== '' && o.value !== INST_IIT; });
  } else {
    [...quotaEl.options].forEach(o => { o.disabled = false; });
    [...instTypeEl.options].forEach(o => { o.disabled = o.value === INST_IIT; });
    if (instTypeEl.value === INST_IIT) instTypeEl.value = '';
  }
}

// ── Filter rows by user inputs (predict mode) ────────────────────────
function jFilterRows(examType, quotaCode, seatCode, genderCode, instTypeFilter, stateFilter) {
  return JOSAA_ROWS.filter(r => {
    const iIdx = r[1];
    if (r[3] !== quotaCode)  return false;
    if (r[4] !== seatCode)   return false;
    if (r[5] !== genderCode) return false;
    const itype = JOSAA_META.instType[iIdx];
    if (examType === EXAM_JEE_ADV  && itype !== INST_IIT) return false;
    if (examType === EXAM_JEE_MAIN && itype === INST_IIT) return false;
    if (instTypeFilter && itype !== instTypeFilter)        return false;
    if (stateFilter && JOSAA_META.instState[iIdx] !== stateFilter) return false;
    return true;
  });
}

// ── Group rows by (instIdx, progIdx) collecting year data ───────────
function jAggregate(rows) {
  const map = new Map();
  for (const r of rows) {
    const [year, iIdx, pIdx, , , , or_, cr] = r;
    const key = `${iIdx}|${pIdx}`;
    if (!map.has(key)) map.set(key, { iIdx, pIdx, years: {} });
    map.get(key).years[year] = { or: or_, cr };
  }
  return [...map.values()];
}

// ── Safe / Good Match / Reach ────────────────────────────────────────
function jClassify(prog, rank) {
  const crs = Object.values(prog.years).map(y => y.cr).filter(Boolean);
  if (!crs.length) return null;
  const avg = crs.reduce((a, b) => a + b, 0) / crs.length;
  const max = Math.max(...crs);
  // Safe: rank is comfortably below the worst (highest) historical closing rank
  if (rank <= max * RANK_SAFE_FACTOR)  return 'safe';
  // Good: rank is near the average closing rank
  if (rank <= avg * RANK_GOOD_FACTOR)  return 'good';
  // Reach: rank is above average but within 40% of the average (historically some got in)
  if (rank <= avg * RANK_REACH_FACTOR) return 'reach';
  return null;
}

// ── Trend across years (based on closing rank movement) ─────────────
function jTrend(years) {
  const sorted = Object.keys(years).sort();
  if (sorted.length < 2) return 'stable';
  const first = years[sorted[0]].cr;
  const last  = years[sorted[sorted.length - 1]].cr;
  if (!first) return 'stable';
  const delta = (last - first) / first;
  if (delta < TREND_HARDER_THRESHOLD) return 'harder';
  if (delta > TREND_EASIER_THRESHOLD) return 'easier';
  return 'stable';
}

// ── Sparkline: closing rank across years (SVG) ───────────────────────
function jSparkline(years) {
  const sorted = Object.keys(years).sort();
  if (sorted.length < 2) return '';
  const vals = sorted.map(y => years[y].cr);
  const max = Math.max(...vals), min = Math.min(...vals);
  const W = SPARK_W, H = SPARK_H, pad = SPARK_PAD;
  const range = max - min || 1;
  const pts = vals.map((v, i) => {
    const x = pad + (i / (vals.length - 1)) * (W - pad * 2);
    const y = pad + ((v - min) / range) * (H - pad * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  return `<svg class="j-spark-svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
    <polyline points="${pts}" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>`;
}

// ── Predict mode: single rank card ───────────────────────────────────
function jCard(item) {
  const inst  = JOSAA_META.institutes[item.iIdx];
  const prog  = JOSAA_META.programs[item.pIdx];
  const itype = JOSAA_META.instType[item.iIdx];
  const state = JOSAA_META.instState[item.iIdx];
  const sorted = Object.keys(item.years).sort();
  const latest = item.years[sorted[sorted.length - 1]];
  const trend  = jTrend(item.years);
  const trendHtml = {
    harder: '<span class="j-trend j-trend-harder">↓ More competitive</span>',
    easier: '<span class="j-trend j-trend-easier">↑ Easier to get</span>',
    stable: '<span class="j-trend j-trend-stable">→ Stable</span>',
  }[trend];
  const yrsLabel = sorted.length > 1 ? `${sorted[0]}–${sorted[sorted.length - 1]}` : sorted[0];
  return `<div class="j-card">
    <div class="j-card-top">
      <div class="j-inst">${inst}</div>
      <span class="j-itype">${itype}</span>
    </div>
    <div class="j-prog">${prog}</div>
    <div class="j-meta">
      <span class="j-rank-range">OR ${latest.or.toLocaleString('en-IN')} – CR <b>${latest.cr.toLocaleString('en-IN')}</b> (${sorted[sorted.length-1]})</span>
      ${trendHtml}
    </div>
    <div class="j-spark-row">
      <span class="j-spark-label">${yrsLabel} closing rank</span>
      ${jSparkline(item.years)}
    </div>
    <div class="j-state">${state}</div>
  </div>`;
}

// ── Predict mode: bucket section ─────────────────────────────────────
function jBucket(label, emoji, cls, items) {
  if (!items.length) return '';
  const cards = items
    .sort((a, b) => {
      const aLatest = a.years[Object.keys(a.years).sort().pop()];
      const bLatest = b.years[Object.keys(b.years).sort().pop()];
      return aLatest.cr - bLatest.cr;
    })
    .map(jCard).join('');
  return `<details class="j-bucket j-bucket-${cls}" open>
    <summary class="j-bucket-hdr">
      <span>${emoji} ${label}</span>
      <span class="j-bucket-count">${items.length} options</span>
    </summary>
    <div class="j-card-grid">${cards}</div>
  </details>`;
}

// ── Main predict function ─────────────────────────────────────────────
function jPredict() {
  const rankEl = document.getElementById('j-rank');
  const rank   = parseInt(rankEl.value, 10);
  if (!rank || rank < 1) {
    rankEl.focus();
    document.getElementById('j-results').innerHTML = '<p class="j-err">Please enter your rank first.</p>';
    return;
  }

  const examType       = document.getElementById('j-exam').value;
  const quotaCode      = parseInt(document.getElementById('j-quota').value, 10);
  const seatCode       = parseInt(document.getElementById('j-seat').value, 10);
  const genderCode     = parseInt(document.getElementById('j-gender').value, 10);
  const instTypeFilter = document.getElementById('j-insttype').value;
  const stateFilter    = document.getElementById('j-state').value;

  const filtered = jFilterRows(examType, quotaCode, seatCode, genderCode, instTypeFilter, stateFilter);
  const programs = jAggregate(filtered);

  const safe = [], good = [], reach = [];
  for (const prog of programs) {
    const bucket = jClassify(prog, rank);
    if      (bucket === 'safe')  safe.push(prog);
    else if (bucket === 'good')  good.push(prog);
    else if (bucket === 'reach') reach.push(prog);
  }

  const total = safe.length + good.length + reach.length;
  if (!total) {
    document.getElementById('j-results').innerHTML =
      `<p class="j-err">No results for rank <b>${rank.toLocaleString('en-IN')}</b> with these filters. Try a higher rank or different category.</p>`;
    return;
  }

  document.getElementById('j-results').innerHTML =
    `<div class="j-summary">Rank <b>${rank.toLocaleString('en-IN')}</b> — ${total} options found</div>` +
    jBucket('Safe', '✅', 'safe',  safe)  +
    jBucket('Good Match', '🎯', 'good',  good)  +
    jBucket('Reach', '🚀', 'reach', reach);
}

// ════════════════════════════════════════════════════════════════════
// RANK RANGE EXPLORER
// ════════════════════════════════════════════════════════════════════

function jExplore() {
  const fromEl = document.getElementById('jr-from');
  const toEl   = document.getElementById('jr-to');
  const rankFrom = parseInt(fromEl.value, 10);
  const rankTo   = parseInt(toEl.value, 10);

  if (!rankFrom || !rankTo || rankFrom > rankTo) {
    document.getElementById('j-results').innerHTML =
      '<p class="j-err">Enter a valid rank range — "From" must be less than "To".</p>';
    return;
  }

  const examType    = document.getElementById('jr-exam').value;
  const stateFilter = document.getElementById('jr-state').value;
  const genderCode  = parseInt(document.getElementById('jr-gender').value, 10);

  // Build map: (iIdx, pIdx, quota, seat) → latest year row
  const latestMap = new Map();
  for (const r of JOSAA_ROWS) {
    const [year, iIdx, pIdx, quota, seat, gender, or_, cr] = r;

    // Exam type guard
    const itype = JOSAA_META.instType[iIdx];
    if (examType === EXAM_JEE_ADV  && itype !== INST_IIT) continue;
    if (examType === EXAM_JEE_MAIN && itype === INST_IIT) continue;

    // Gender filter
    if (gender !== genderCode) continue;

    // Quota filter:
    //   AI quota (2): always include
    //   HS quota (0): include only for institutes in the selected home state
    //   OS quota (1): include only when no home state is set
    if (quota === 0 && (!stateFilter || JOSAA_META.instState[iIdx] !== stateFilter)) continue;
    if (quota === 1 && stateFilter) continue;

    const key = `${iIdx}|${pIdx}|${quota}|${seat}`;
    const existing = latestMap.get(key);
    if (!existing || year > existing.year) {
      latestMap.set(key, { year, iIdx, pIdx, quota, seat, or: or_, cr });
    }
  }

  // Find (iIdx, pIdx) combos where any category's CR falls in range
  const matchKeys = new Set();
  for (const row of latestMap.values()) {
    if (row.cr >= rankFrom && row.cr <= rankTo) {
      matchKeys.add(`${row.iIdx}|${row.pIdx}`);
    }
  }

  if (!matchKeys.size) {
    document.getElementById('j-results').innerHTML =
      `<p class="j-err">No programs with closing rank in <b>${rankFrom.toLocaleString('en-IN')}–${rankTo.toLocaleString('en-IN')}</b>. Try widening the range.</p>`;
    return;
  }

  // Group by institute → program → list of category rows
  const instMap = new Map();
  for (const row of latestMap.values()) {
    if (!matchKeys.has(`${row.iIdx}|${row.pIdx}`)) continue;
    if (!instMap.has(row.iIdx)) instMap.set(row.iIdx, new Map());
    const progMap = instMap.get(row.iIdx);
    if (!progMap.has(row.pIdx)) progMap.set(row.pIdx, []);
    progMap.get(row.pIdx).push(row);
  }

  // Render
  const sortedInsts = [...instMap.entries()].sort((a, b) =>
    JOSAA_META.institutes[a[0]].localeCompare(JOSAA_META.institutes[b[0]])
  );

  let html = `<div class="j-summary">
    Rank range <b>${rankFrom.toLocaleString('en-IN')} – ${rankTo.toLocaleString('en-IN')}</b> &nbsp;·&nbsp;
    <b>${matchKeys.size}</b> programs across <b>${instMap.size}</b> institutes
    ${stateFilter ? `&nbsp;·&nbsp; Home state: <b>${stateFilter}</b>` : ''}
  </div>`;

  for (const [iIdx, progMap] of sortedInsts) {
    const instName = JOSAA_META.institutes[iIdx];
    const itype    = JOSAA_META.instType[iIdx];
    const state    = JOSAA_META.instState[iIdx];

    const progBlocks = [...progMap.entries()]
      .sort((a, b) => JOSAA_META.programs[a[0]].localeCompare(JOSAA_META.programs[b[0]]))
      .map(([pIdx, rows]) => jRangeProgBlock(pIdx, rows, rankFrom, rankTo))
      .join('');

    html += `<div class="j-inst-group">
      <div class="j-inst-group-hdr">
        <div class="j-inst-group-name">${instName}</div>
        <div class="j-inst-group-meta">
          <span class="j-itype">${itype}</span>
          <span class="j-state-pill">${state}</span>
        </div>
      </div>
      <div class="j-prog-list">${progBlocks}</div>
    </div>`;
  }

  document.getElementById('j-results').innerHTML = html;
}

// ── Range explorer: one program block with category table ────────────
function jRangeProgBlock(pIdx, rows, rankFrom, rankTo) {
  const prog = JOSAA_META.programs[pIdx];
  rows.sort((a, b) => a.seat - b.seat || a.quota - b.quota);

  const tableRows = rows.map(r => {
    const seatLabel  = JOSAA_META.seatType[r.seat];
    const quotaLabel = JOSAA_META.quota[r.quota];
    const inRange    = r.cr >= rankFrom && r.cr <= rankTo;
    return `<tr class="${inRange ? 'j-rt-in-range' : ''}">
      <td>${seatLabel}</td>
      <td class="j-rt-quota">${quotaLabel}</td>
      <td class="j-rt-num">${r.or.toLocaleString('en-IN')}</td>
      <td class="j-rt-num"><b>${r.cr.toLocaleString('en-IN')}</b></td>
      <td class="j-rt-yr">${r.year}</td>
    </tr>`;
  }).join('');

  return `<div class="j-range-prog">
    <div class="j-range-prog-name">${prog}</div>
    <table class="j-range-table">
      <thead><tr><th>Category</th><th>Quota</th><th>Opening</th><th>Closing</th><th>Yr</th></tr></thead>
      <tbody>${tableRows}</tbody>
    </table>
  </div>`;
}

// ── Init ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (typeof JOSAA_META !== 'undefined') jInit();
});
