// Vazhi — Career Guide Tab
// Keyword matching + career path rendering
// Reuses: courseCard() from explore.js, augCard() from after-ug.js, BS/badgeStyle from courses.js

// ── Group 4: search input thresholds ────────────────────────────────────
const CG_MIN_INPUT_LEN   = 2;   // show suggestions only after this many characters
const CG_SUBSTR_MIN_LEN  = 4;   // allow mid-word keyword matching only at this length
const CG_MAX_SUGGESTIONS = 6;   // max autocomplete suggestions shown
const CG_MAX_CAREER_HITS = 2;   // max career path results rendered per search
const CG_MAX_COURSES     = 4;   // max course cards shown in Step 3

// ── AUTOCOMPLETE ─────────────────────────────────────────────────────────

let cgSuggestIdx = -1; // for keyboard navigation

function cgLiveSearch() {
  const raw = (document.getElementById('cg-input').value || '').trim().toLowerCase();
  const box = document.getElementById('cg-suggestions');

  if (raw.length < CG_MIN_INPUT_LEN) {
    box.style.display = 'none';
    box.innerHTML = '';
    if (raw.length === 0) document.getElementById('cg-out').innerHTML = '';
    return;
  }

  // Match: title contains typed text, OR any keyword starts with typed text
  // For short inputs only use starts-with — avoids false positives
  // e.g. "ban" should not match "urban" or "husbandry"
  const matches = CAREER_MAP.filter(c => {
    const titleMatch = c.title.toLowerCase().includes(raw);
    const kwStartsWith = c.keywords.some(k => k.startsWith(raw));
    const kwContains = raw.length >= CG_SUBSTR_MIN_LEN && c.keywords.some(k => k.includes(raw));
    return titleMatch || kwStartsWith || kwContains;
  }).slice(0, CG_MAX_SUGGESTIONS);

  if (!matches.length) {
    box.style.display = 'none';
    return;
  }

  cgSuggestIdx = -1;
  box.innerHTML = matches.map((c, i) =>
    `<div class="cg-suggest-item" data-idx="${i}"
          onmousedown="cgSelectSuggestion('${c.id}')"
          onmouseenter="cgHighlight(${i})">
      <span class="cg-suggest-ico">${c.ico}</span>
      <span class="cg-suggest-title">${cgHighlightText(c.title, raw)}</span>
    </div>`
  ).join('');
  box.style.display = 'block';
}

// Highlight the matching part of the title
function cgHighlightText(title, raw) {
  const idx = title.toLowerCase().indexOf(raw);
  if (idx === -1) return title;
  return title.slice(0, idx) +
    `<strong>${title.slice(idx, idx + raw.length)}</strong>` +
    title.slice(idx + raw.length);
}

function cgHighlight(idx) {
  cgSuggestIdx = idx;
  document.querySelectorAll('.cg-suggest-item').forEach((el, i) =>
    el.classList.toggle('active', i === idx)
  );
}

function cgSelectSuggestion(id) {
  const career = CAREER_MAP.find(c => c.id === id);
  if (!career) return;
  document.getElementById('cg-input').value = career.title;
  document.getElementById('cg-suggestions').style.display = 'none';
  searchCareer();
}

// Keyboard navigation: ↑ ↓ Enter Escape
function cgKeyNav(e) {
  const box = document.getElementById('cg-suggestions');
  const items = box.querySelectorAll('.cg-suggest-item');
  if (box.style.display === 'none' || !items.length) {
    if (e.key === 'Enter') searchCareer();
    return;
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    cgHighlight(Math.min(cgSuggestIdx + 1, items.length - 1));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    cgHighlight(Math.max(cgSuggestIdx - 1, 0));
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (cgSuggestIdx >= 0 && items[cgSuggestIdx]) {
      items[cgSuggestIdx].dispatchEvent(new Event('mousedown'));
    } else {
      box.style.display = 'none';
      searchCareer();
    }
  } else if (e.key === 'Escape') {
    box.style.display = 'none';
    cgSuggestIdx = -1;
  }
}

// Close suggestions when clicking outside
document.addEventListener('click', e => {
  const wrap = document.getElementById('cg-suggestions');
  if (wrap && !wrap.contains(e.target) && e.target.id !== 'cg-input') {
    wrap.style.display = 'none';
  }
});

// ── STREAM FALLBACK MAP ───────────────────────────────────────────────────
// When no exact career match is found, try to match to a broad stream
// and redirect the student to the Explore Courses tab pre-filtered.

const STREAM_FALLBACK = [
  { keywords: ['design', 'art', 'creative', 'sketch', 'visual', 'draw', 'craft', 'colour', 'color', 'textile', 'fabric', 'pattern', 'nid', 'nift', 'uceed', 'jewel', 'jewellery', 'ceramic', 'pottery'], streamId: 'Design', label: 'Design & Architecture', ico: '✏' },
  { keywords: ['engineering', 'tech', 'code', 'coding', 'software', 'hardware', 'robotics', 'automobile', 'iit', 'nit', 'jee', 'computer', 'programming', 'developer'], streamId: 'Engineering', label: 'Engineering & Technology', ico: '⚙' },
  { keywords: ['medical', 'health', 'biology', 'mbbs', 'neet', 'medicine', 'clinic', 'treatment', 'patient', 'surgery', 'dental', 'ayurveda', 'homeopathy'], streamId: 'Medical', label: 'Medical & Health Sciences', ico: '🩺' },
  { keywords: ['law', 'legal', 'court', 'clat', 'advocate', 'barrister', 'solicitor', 'constitution', 'justice', 'judge', 'rights'], streamId: 'Law', label: 'Law', ico: '⚖' },
  { keywords: ['management', 'business', 'mba', 'bba', 'marketing', 'entrepreneur', 'startup', 'hr', 'finance', 'commerce', 'economics', 'strategy'], streamId: 'Management', label: 'Management & Business', ico: '📊' },
  { keywords: ['agriculture', 'farming', 'farm', 'crop', 'soil', 'irrigation', 'horticulture', 'agronomy', 'veterinary', 'animal', 'fisheries', 'forestry', 'food processing'], streamId: 'Agriculture', label: 'Agriculture & Allied Sciences', ico: '🌾' },
  { keywords: ['hotel', 'hospitality', 'tourism', 'travel', 'catering', 'food', 'beverage', 'housekeeping', 'resort', 'airline cabin'], streamId: 'Hotel', label: 'Hotel & Hospitality', ico: '🏨' },
  { keywords: ['sports', 'athlete', 'cricket', 'football', 'badminton', 'swimming', 'tennis', 'kabaddi', 'volleyball', 'fitness', 'physical', 'gym', 'coaching'], streamId: 'Sports', label: 'Sports & Physical Education', ico: '🏅' },
  { keywords: ['defence', 'army', 'navy', 'military', 'airforce', 'maritime', 'sailor', 'coast guard', 'paramilitary', 'crpf', 'bsf'], streamId: 'Defence', label: 'Defence & Maritime', ico: '🪖' },
  { keywords: ['science', 'physics', 'chemistry', 'maths', 'mathematics', 'research', 'iiser', 'tifr', 'laboratory', 'experiment', 'quantum', 'astrophysics', 'biology', 'microbiology', 'biochemistry'], streamId: 'Science', label: 'Pure Science & Research', ico: '🔬' },
  { keywords: ['arts', 'music', 'dance', 'theatre', 'drama', 'painting', 'sculpture', 'photography', 'film making', 'cinema', 'media', 'journalism', 'radio', 'television'], streamId: 'Arts', label: 'Fine Arts, Performing Arts & Media', ico: '🎨' },
  { keywords: ['paramedical', 'nursing', 'physiotherapy', 'pharmacy', 'radiology', 'optometry', 'speech', 'audiology', 'lab tech', 'health tech', 'dialysis'], streamId: 'Paramedical', label: 'Paramedical & Allied Health', ico: '🏥' },
];

function cgFindStreamFallback(raw) {
  for (const s of STREAM_FALLBACK) {
    if (s.keywords.some(k => raw.includes(k))) return s;
  }
  return null;
}

function cgGoToStream(streamId) {
  // Switch to Courses tab in explore mode and pre-filter by stream
  document.getElementById('f-stream').value = streamId;
  switchTab('courses');
  setCoursesMode('explore');
  applyFilters();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── SEARCH ──────────────────────────────────────────────────────────────

function searchCareer() {
  const raw = (document.getElementById('cg-input').value || '').trim().toLowerCase();
  if (raw.length < CG_MIN_INPUT_LEN) return;
  document.getElementById('cg-suggestions').style.display = 'none';

  // Score each CAREER_MAP entry by keyword hits
  // Short keywords (< 4 chars) must match as whole words to avoid false positives
  const words = raw.split(/\s+/);
  const scored = CAREER_MAP.map(c => {
    const hits = c.keywords.filter(k => {
      if (k.length < CG_SUBSTR_MIN_LEN) return words.includes(k);   // whole-word match only for short keys
      return raw.includes(k) || k.includes(raw);    // substring match for longer keys
    });
    return { entry: c, score: hits.length };
  }).filter(r => r.score > 0).sort((a, b) => b.score - a.score);

  const out = document.getElementById('cg-out');

  if (!scored.length) {
    // Try stream fallback before giving up
    const fallback = cgFindStreamFallback(raw);
    if (fallback) {
      out.innerHTML = `<div class="cg-fallback">
        <div class="cg-fallback-ico">${fallback.ico}</div>
        <div class="cg-fallback-body">
          <h3 class="cg-fallback-title">Looks like you're interested in <strong>${fallback.label}</strong></h3>
          <p class="cg-fallback-sub">We don't have a specific career page for "<em>${raw}</em>" yet — but we have all the courses, exams and colleges for this field.</p>
          <button class="cg-btn" style="margin-top:12px" onclick="cgGoToStream('${fallback.streamId}')">
            Browse ${fallback.label} courses →
          </button>
        </div>
      </div>`;
    } else {
      out.innerHTML = `<div class="cg-no-match">
        <div style="font-size:2rem;margin-bottom:12px">🤔</div>
        <h3>We couldn't find a path for "<em>${raw}</em>"</h3>
        <p style="margin:8px 0 16px;font-size:13px">Try one of these careers:</p>
        <div class="cg-chips" style="justify-content:center">
          ${['Doctor','Engineer','IAS Officer','Scientist','Footwear Designer','Fashion Designer','Chef','Nurse','Animator','Cyber Security'].map(k=>
            `<span class="cg-chip" onclick="chipSearch('${k.toLowerCase()}')">${k}</span>`
          ).join('')}
        </div>
      </div>`;
    }
    return;
  }

  // Show top 2 matches max
  out.innerHTML = scored.slice(0, CG_MAX_CAREER_HITS).map(r => renderCareerPath(r.entry)).join('');
}

function chipSearch(keyword) {
  const inp = document.getElementById('cg-input');
  inp.value = keyword;
  searchCareer();
  // Scroll to results
  document.getElementById('cg-out').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── DATA LOOKUPS ─────────────────────────────────────────────────────────

// Find courses in a stream, optionally filtered by keyword list in courseFilter
function cgGetCourses(streamId, courseFilter) {
  if (!streamId) return [];
  const stream = (typeof STREAMS !== 'undefined' ? STREAMS : []).find(s => s.id === streamId);
  if (!stream) return [];
  if (courseFilter && courseFilter.length) {
    const filtered = stream.courses.filter(c =>
      courseFilter.some(f => c.name.toLowerCase().includes(f.toLowerCase()))
    );
    return filtered.length ? filtered : stream.courses; // fallback to all if nothing matches
  }
  return stream.courses;
}

// Find exam objects by name(s) across EXAM_GROUPS
function cgGetExams(examNames) {
  if (!examNames || !examNames.length) return [];
  const allExamGroups = typeof EXAM_GROUPS !== 'undefined' ? EXAM_GROUPS : [];
  const results = [];
  examNames.forEach(name => {
    for (const grp of allExamGroups) {
      const found = grp.exams.find(e => e.name === name);
      if (found) { results.push(found); break; }
    }
  });
  return results;
}

// Find After UG entries by id
function cgGetAugEntries(augIds) {
  if (!augIds || !augIds.length) return [];
  const augData = typeof AFTER_UG !== 'undefined' ? AFTER_UG : [];
  return augIds.map(id => augData.find(e => e.id === id)).filter(Boolean);
}

// ── RENDER CAREER PATH ────────────────────────────────────────────────────

function renderCareerPath(c) {
  const bs = BS[c.bc] || BS.accent;
  const headerStyle = `background:${bs.bg};border-bottom:2px solid ${bs.bd}`;
  const titleColor = `color:${bs.c}`;

  // Step 1 — Class 12 Subjects
  const step1 = `<div class="cg-step">
    <div class="cg-step-label">📚 Step 1 — Class 12 Subjects</div>
    <div class="cg-subj-pills">
      ${c.class12.subjects.map(s => `<span class="cg-subj-pill">${s}</span>`).join('')}
    </div>
    <div class="cg-tip">${c.class12.tip}</div>
  </div>`;

  // Step 2 — Key Entrance Exams
  const exams = cgGetExams(c.examNames);
  let step2 = '';
  if (exams.length) {
    step2 = `<div class="cg-step">
      <div class="cg-step-label">📝 Step 2 — Key Entrance Exam${exams.length > 1 ? 's' : ''}</div>
      <div class="cg-exam-list">
        ${exams.map(e => cgExamCard(e)).join('')}
      </div>
      <div class="cg-tab-jump"><button class="cg-tab-link" onclick="switchTab('courses');setCoursesMode('exams')">📝 See all Entrance Exams →</button></div>
    </div>`;
  } else if (c.examNames && c.examNames.length) {
    // Exam names provided but not found in EXAM_GROUPS — show as text
    step2 = `<div class="cg-step">
      <div class="cg-step-label">📝 Step 2 — Key Entrance Exams</div>
      <div class="cg-subj-pills">
        ${c.examNames.map(n => `<span class="cg-subj-pill" style="background:var(--bg2);color:var(--text1);border-color:var(--border)">${n}</span>`).join('')}
      </div>
    </div>`;
  }

  // Step 3 — Degree Programs
  const courses = cgGetCourses(c.streamId, c.courseFilter);
  let step3 = '';
  if (courses.length) {
    const showCourses = courses.slice(0, CG_MAX_COURSES);
    step3 = `<div class="cg-step">
      <div class="cg-step-label">🎓 Step 3 — Degree Programs</div>
      <div class="cg-course-grid">
        ${showCourses.map(cc => courseCard(cc, '')).join('')}
      </div>
      ${courses.length > CG_MAX_COURSES ? `<div class="cg-tab-jump"><button class="cg-tab-link" onclick="cgGoToStream('${c.streamId}')">📚 See all ${c.streamId} courses →</button></div>` : ''}
    </div>`;
  }

  // Step 4 — After UG
  const augEntries = cgGetAugEntries(c.augIds);
  let step4 = '';
  if (augEntries.length) {
    step4 = `<div class="cg-step">
      <div class="cg-step-label">🚀 Step 4 — After Your Degree</div>
      <div class="aug-cards">
        ${augEntries.map(e => augCard(e)).join('')}
      </div>
      <div class="cg-tab-jump"><button class="cg-tab-link" onclick="switchTab('after-ug')">🚀 See all After UG pathways →</button></div>
    </div>`;
  }

  // Step 5 — Careers
  const step5 = `<div class="cg-step">
    <div class="cg-step-label">💼 Careers you can aim for</div>
    <div class="cg-careers-row">
      ${c.careers.map(cr => `<span class="cg-career-tag">✓ ${cr}</span>`).join('')}
    </div>
  </div>`;

  return `<div class="cg-path">
    <div class="cg-path-hdr" style="${headerStyle}">
      <div class="cg-path-ico">${c.ico}</div>
      <div>
        <div class="cg-path-title" style="${titleColor}">${c.title}</div>
        <div class="cg-path-summary">${c.summary}</div>
      </div>
    </div>
    ${step1}
    ${step2}
    ${step3}
    ${step4}
    ${step5}
  </div>`;
}

// Compact exam info card for Step 2
function cgExamCard(e) {
  return `<div class="cg-exam-card">
    <div class="cg-exam-name">${e.name}</div>
    <div class="cg-exam-full">${e.full}</div>
    <div class="cg-exam-meta">
      <span class="cg-exam-body">By ${e.body}</span>
      <span class="cg-exam-freq">${e.freq}</span>
      <a href="https://${e.website}" target="_blank" rel="noopener" class="cg-exam-link">↗ Official site</a>
    </div>
    ${e.note ? `<div class="cg-exam-note">${e.note}</div>` : ''}
  </div>`;
}
