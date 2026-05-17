// ── TNEA Cutoff Predictor ────────────────────────────────────────────
// Cutoff = aggregate of Class 12 PCM marks (out of 200). Higher = better.
// Categories: OC / BC / BCM / MBC / SC / SCA / ST.
// Stored cutoffs are int(mark × 100), so 199.75 → 19975.

// ── Mark-based classification thresholds (absolute marks, not ratios) ──
const TN_SAFE_MARGIN  = 1.0;  // mark ≥ worst historical − 1.0 → Safe
const TN_GOOD_MARGIN  = 3.0;  // mark ≥ average − 3.0 → Good
const TN_REACH_MARGIN = 6.0;  // mark ≥ average − 6.0 → Reach

// ── Trend thresholds (delta in marks across years) ────────────────────
const TN_TREND_HARDER = 1.0;  // cutoff rose by >1.0 mark → harder
const TN_TREND_EASIER = -1.0; // cutoff fell by >1.0 mark → easier

const TN_SPARK_W   = 80;
const TN_SPARK_H   = 24;
const TN_SPARK_PAD = 2;

function tnInit() {
  if (typeof TNEA_META === 'undefined') return;
  const districts = [...new Set(TNEA_META.collegeDistrict)].filter(Boolean).sort();
  const opts = '<option value="">Any district</option>' + districts.map(d => `<option>${d}</option>`).join('');
  const d1 = document.getElementById('tn-district');
  const d2 = document.getElementById('tnr-district');
  if (d1) d1.innerHTML = opts;
  if (d2) d2.innerHTML = opts;
}

function tnSetMode(mode) {
  document.getElementById('tn-form').style.display       = mode === 'predict' ? '' : 'none';
  document.getElementById('tn-form-range').style.display = mode === 'explore' ? '' : 'none';
  document.querySelectorAll('#cp-tnea .j-mode-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.mode === mode)
  );
  document.getElementById('tn-results').innerHTML = '';
}

function tnFilterRows(commCode, quotaCode, districtFilter, typeFilter) {
  return TNEA_ROWS.filter(r => {
    const cIdx = r[1];
    if (r[3] !== quotaCode) return false;
    if (r[4] !== commCode)  return false;
    if (districtFilter && TNEA_META.collegeDistrict[cIdx] !== districtFilter) return false;
    if (typeFilter && TNEA_META.collegeType[cIdx] !== typeFilter) return false;
    return true;
  });
}

function tnAggregate(rows) {
  const map = new Map();
  for (const r of rows) {
    const [year, cIdx, bIdx, , , cutoff] = r;
    const key = `${cIdx}|${bIdx}`;
    if (!map.has(key)) map.set(key, { cIdx, bIdx, years: {} });
    map.get(key).years[year] = { cutoff };
  }
  return [...map.values()];
}

// ── Classify (higher mark = better) ──────────────────────────────────
function tnClassify(prog, mark) {
  const cutoffs = Object.values(prog.years).map(y => y.cutoff / 100);
  if (!cutoffs.length) return null;
  const avg = cutoffs.reduce((a, b) => a + b, 0) / cutoffs.length;
  const min = Math.min(...cutoffs);
  if (mark >= min - TN_SAFE_MARGIN)  return 'safe';
  if (mark >= avg - TN_GOOD_MARGIN)  return 'good';
  if (mark >= avg - TN_REACH_MARGIN) return 'reach';
  return null;
}

// ── Trend (cutoff movement across years) ─────────────────────────────
function tnTrend(years) {
  const sorted = Object.keys(years).sort();
  if (sorted.length < 2) return 'stable';
  const first = years[sorted[0]].cutoff / 100;
  const last  = years[sorted[sorted.length - 1]].cutoff / 100;
  const delta = last - first;
  if (delta >  TN_TREND_HARDER) return 'harder';
  if (delta <  TN_TREND_EASIER) return 'easier';
  return 'stable';
}

function tnSparkline(years) {
  const sorted = Object.keys(years).sort();
  if (sorted.length < 2) return '';
  const vals = sorted.map(y => years[y].cutoff);
  const max = Math.max(...vals), min = Math.min(...vals);
  const W = TN_SPARK_W, H = TN_SPARK_H, pad = TN_SPARK_PAD;
  const range = max - min || 1;
  // Higher cutoff = better, so flip Y so the line rises when cutoffs rise
  const pts = vals.map((v, i) => {
    const x = pad + (i / (vals.length - 1)) * (W - pad * 2);
    const y = pad + ((max - v) / range) * (H - pad * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  return `<svg class="j-spark-svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
    <polyline points="${pts}" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>`;
}

function tnCard(item) {
  const inst   = TNEA_META.collegeShort[item.cIdx] || TNEA_META.colleges[item.cIdx];
  const full   = TNEA_META.colleges[item.cIdx];
  const ctype  = TNEA_META.collegeType[item.cIdx];
  const distr  = TNEA_META.collegeDistrict[item.cIdx];
  const branch = TNEA_META.branches[item.bIdx];
  const sorted = Object.keys(item.years).sort();
  const latest = item.years[sorted[sorted.length - 1]];
  const trend  = tnTrend(item.years);
  const trendHtml = {
    harder: '<span class="j-trend j-trend-harder">↑ Cutoff rising</span>',
    easier: '<span class="j-trend j-trend-easier">↓ Cutoff falling</span>',
    stable: '<span class="j-trend j-trend-stable">→ Stable</span>',
  }[trend];
  const yrsLabel = sorted.length > 1 ? `${sorted[0]}–${sorted[sorted.length - 1]}` : sorted[0];
  const latestMark = (latest.cutoff / 100).toFixed(latest.cutoff % 100 === 0 ? 0 : 2);
  return `<div class="j-card">
    <div class="j-card-top">
      <div class="j-inst" title="${full.replace(/"/g, '&quot;')}">${inst}</div>
      <span class="j-itype">${ctype}</span>
    </div>
    <div class="j-prog">${branch}</div>
    <div class="j-meta">
      <span class="j-rank-range">Cutoff <b>${latestMark}</b> / 200 (${sorted[sorted.length-1]})</span>
      ${trendHtml}
    </div>
    <div class="j-spark-row">
      <span class="j-spark-label">${yrsLabel} cutoff</span>
      ${tnSparkline(item.years)}
    </div>
    <div class="j-state">${distr}</div>
  </div>`;
}

function tnBucket(label, emoji, cls, items) {
  if (!items.length) return '';
  // Sort by latest cutoff descending (highest first)
  const cards = items
    .sort((a, b) => {
      const aLatest = a.years[Object.keys(a.years).sort().pop()];
      const bLatest = b.years[Object.keys(b.years).sort().pop()];
      return bLatest.cutoff - aLatest.cutoff;
    })
    .map(tnCard).join('');
  return `<details class="j-bucket j-bucket-${cls}" open>
    <summary class="j-bucket-hdr">
      <span>${emoji} ${label}</span>
      <span class="j-bucket-count">${items.length} options</span>
    </summary>
    <div class="j-card-grid">${cards}</div>
  </details>`;
}

function tnPredict() {
  const markEl = document.getElementById('tn-mark');
  const mark   = parseFloat(markEl.value);
  if (isNaN(mark) || mark < 0 || mark > 200) {
    markEl.focus();
    document.getElementById('tn-results').innerHTML =
      '<p class="j-err">Please enter a cutoff mark between 0 and 200.</p>';
    return;
  }

  const commCode       = parseInt(document.getElementById('tn-comm').value, 10);
  const quotaCode      = parseInt(document.getElementById('tn-quota').value, 10);
  const districtFilter = document.getElementById('tn-district').value;
  const typeFilter     = document.getElementById('tn-type').value;

  const filtered = tnFilterRows(commCode, quotaCode, districtFilter, typeFilter);
  const programs = tnAggregate(filtered);

  const safe = [], good = [], reach = [];
  for (const prog of programs) {
    const bucket = tnClassify(prog, mark);
    if      (bucket === 'safe')  safe.push(prog);
    else if (bucket === 'good')  good.push(prog);
    else if (bucket === 'reach') reach.push(prog);
  }

  const total = safe.length + good.length + reach.length;
  if (!total) {
    document.getElementById('tn-results').innerHTML =
      `<p class="j-err">No matches for cutoff <b>${mark}</b> with these filters. Try a lower cutoff or different community.</p>`;
    return;
  }

  document.getElementById('tn-results').innerHTML =
    `<div class="j-summary">Cutoff <b>${mark}</b> / 200 — ${total} options found</div>` +
    tnBucket('Safe', '✅', 'safe',  safe)  +
    tnBucket('Good Match', '🎯', 'good',  good)  +
    tnBucket('Reach', '🚀', 'reach', reach);
}

// ════════════════════════════════════════════════════════════════════
// CUTOFF RANGE EXPLORER
// ════════════════════════════════════════════════════════════════════

function tnExplore() {
  const fromEl = document.getElementById('tnr-from');
  const toEl   = document.getElementById('tnr-to');
  const markFrom = parseFloat(fromEl.value);
  const markTo   = parseFloat(toEl.value);

  if (isNaN(markFrom) || isNaN(markTo) || markFrom > markTo) {
    document.getElementById('tn-results').innerHTML =
      '<p class="j-err">Enter a valid cutoff range — "From" must be less than "To".</p>';
    return;
  }

  const districtFilter = document.getElementById('tnr-district').value;
  const typeFilter     = document.getElementById('tnr-type').value;
  const quotaCode      = parseInt(document.getElementById('tnr-quota').value, 10);

  // Build map: (cIdx, bIdx, comm) → latest year row
  const latestMap = new Map();
  for (const r of TNEA_ROWS) {
    const [year, cIdx, bIdx, quota, comm, cutoff] = r;
    if (quota !== quotaCode) continue;
    if (districtFilter && TNEA_META.collegeDistrict[cIdx] !== districtFilter) continue;
    if (typeFilter && TNEA_META.collegeType[cIdx] !== typeFilter) continue;

    const key = `${cIdx}|${bIdx}|${comm}`;
    const existing = latestMap.get(key);
    if (!existing || year > existing.year) {
      latestMap.set(key, { year, cIdx, bIdx, comm, cutoff });
    }
  }

  const fromX100 = Math.round(markFrom * 100);
  const toX100   = Math.round(markTo * 100);

  // Find (cIdx, bIdx) combos where any community's cutoff falls in range
  const matchKeys = new Set();
  for (const row of latestMap.values()) {
    if (row.cutoff >= fromX100 && row.cutoff <= toX100) {
      matchKeys.add(`${row.cIdx}|${row.bIdx}`);
    }
  }

  if (!matchKeys.size) {
    document.getElementById('tn-results').innerHTML =
      `<p class="j-err">No programs with cutoff in <b>${markFrom}–${markTo}</b>. Try widening the range.</p>`;
    return;
  }

  // Group by college → branch → list of community rows
  const instMap = new Map();
  for (const row of latestMap.values()) {
    if (!matchKeys.has(`${row.cIdx}|${row.bIdx}`)) continue;
    if (!instMap.has(row.cIdx)) instMap.set(row.cIdx, new Map());
    const progMap = instMap.get(row.cIdx);
    if (!progMap.has(row.bIdx)) progMap.set(row.bIdx, []);
    progMap.get(row.bIdx).push(row);
  }

  const sortedInsts = [...instMap.entries()].sort((a, b) =>
    TNEA_META.colleges[a[0]].localeCompare(TNEA_META.colleges[b[0]])
  );

  let html = `<div class="j-summary">
    Cutoff range <b>${markFrom} – ${markTo}</b> / 200 &nbsp;·&nbsp;
    <b>${matchKeys.size}</b> programs across <b>${instMap.size}</b> colleges
    ${districtFilter ? `&nbsp;·&nbsp; District: <b>${districtFilter}</b>` : ''}
  </div>`;

  for (const [cIdx, progMap] of sortedInsts) {
    const instName = TNEA_META.collegeShort[cIdx] || TNEA_META.colleges[cIdx];
    const fullName = TNEA_META.colleges[cIdx];
    const ctype    = TNEA_META.collegeType[cIdx];
    const distr    = TNEA_META.collegeDistrict[cIdx];

    const progBlocks = [...progMap.entries()]
      .sort((a, b) => TNEA_META.branches[a[0]].localeCompare(TNEA_META.branches[b[0]]))
      .map(([bIdx, rows]) => tnRangeProgBlock(bIdx, rows, fromX100, toX100))
      .join('');

    html += `<div class="j-inst-group">
      <div class="j-inst-group-hdr">
        <div class="j-inst-group-name" title="${fullName.replace(/"/g, '&quot;')}">${instName}</div>
        <div class="j-inst-group-meta">
          <span class="j-itype">${ctype}</span>
          <span class="j-state-pill">${distr}</span>
        </div>
      </div>
      <div class="j-prog-list">${progBlocks}</div>
    </div>`;
  }

  document.getElementById('tn-results').innerHTML = html;
}

function tnRangeProgBlock(bIdx, rows, fromX100, toX100) {
  const branch = TNEA_META.branches[bIdx];
  rows.sort((a, b) => a.comm - b.comm);

  const tableRows = rows.map(r => {
    const commLabel = TNEA_META.communities[r.comm];
    const inRange   = r.cutoff >= fromX100 && r.cutoff <= toX100;
    const mark      = (r.cutoff / 100).toFixed(r.cutoff % 100 === 0 ? 0 : 2);
    return `<tr class="${inRange ? 'j-rt-in-range' : ''}">
      <td>${commLabel}</td>
      <td class="j-rt-num"><b>${mark}</b></td>
      <td class="j-rt-yr">${r.year}</td>
    </tr>`;
  }).join('');

  return `<div class="j-range-prog">
    <div class="j-range-prog-name">${branch}</div>
    <table class="j-range-table">
      <thead><tr><th>Community</th><th>Cutoff / 200</th><th>Yr</th></tr></thead>
      <tbody>${tableRows}</tbody>
    </table>
  </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof TNEA_META !== 'undefined') tnInit();
});
