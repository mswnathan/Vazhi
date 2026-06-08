// Vazhi — Entrance Exams Tab (Tab 2 in new order)
// Render, filter and toggle logic for exam cards

// ── Group 2: exam level → colour (used in renderExams stats bar + examCard + pgExamCard) ──
const LEVEL_COLOR = {National:'#0F3098',State:'#0A5234',Private:'#6B3F00',Institute:'#451880',Professional:'#8F2009'};
const LEVEL_BG    = {National:'#EBF0FF',State:'#E8F8EF',Private:'#FFF5E0',Institute:'#F2EBFF',Professional:'#FFEDE8'};

// ── Group 2: exam level → CSS class (used in examCard + pgExamCard) ─────
const LEVEL_CSS = {National:'elvl-nat',State:'elvl-state',Private:'elvl-pvt',Institute:'elvl-inst',Professional:'elvl-prof'};

// ── Group 2: institute tier emoji → colour (used in examCard + pgExamCard) ──
const TIER_COLOR = {'🏆':'#0F3098','⭐':'#0A5234','✓':'#524E45','🚀':'#8F2009','🌍':'#451880'};
const TIER_BG    = {'🏆':'#EBF0FF','⭐':'#E8F8EF','✓':'#F5F3EE','🚀':'#FFEDE8','🌍':'#F2EBFF'};

// ── Group 4: display limits ──────────────────────────────────────────────
const INST_PREVIEW_COUNT = 3;  // institutes shown before "show more"
const SUBJ_PILL_MAX      = 5;  // max subject pills shown on a card

function renderExams(){
  const lvl=document.getElementById('ef-level').value;
  const stream=document.getElementById('ef-stream').value;
  const subj=document.getElementById('ef-subj').value;
  const search=document.getElementById('ef-search').value.toLowerCase();

  let totalExams=0;
  const lvlCount={National:0,State:0,Private:0,Institute:0,Professional:0};
  let html='';

  EXAM_GROUPS.forEach(g=>{
    if(stream && g.id!==stream) return;
    const exams=g.exams.filter(e=>{
      const lm=!lvl||e.level===lvl;
      const sm=!subj||e.subjects.includes(subj)||e.subjects.includes('Any');
      const srch=!search||(e.name+e.full+e.body+e.for+(e.note||'')).toLowerCase().includes(search);
      return lm&&sm&&srch;
    });
    if(!exams.length) return;
    totalExams+=exams.length;
    exams.forEach(e=>{ if(lvlCount[e.level]!==undefined) lvlCount[e.level]++; });

    html+=`<div class="exam-group">
      <div class="exam-group-hdr">
        <div class="exam-group-ico" style="background:${g.bg};color:${g.color}">${g.ico}</div>
        <div class="exam-group-title">${g.label}</div>
        <div class="exam-group-n">${exams.length} exam${exams.length>1?'s':''}</div>
      </div>
      <div class="exam-grid">${exams.map(e=>examCard(e)).join('')}</div>
    </div>`;
  });

  if(!totalExams){
    html=`<div class="no-res"><h3>No exams found</h3><p>Try adjusting or resetting your filters.</p></div>`;
  }

  document.getElementById('exam-out').innerHTML=html;

  document.getElementById('exam-stats-bar').innerHTML=`
    <div class="estat"><div class="estat-n">${totalExams}</div><div class="estat-l">Total shown</div></div>
    ${Object.entries(lvlCount).filter(([,v])=>v>0).map(([k,v])=>`
      <div class="estat" style="border-color:${LEVEL_BG[k]}">
        <div class="estat-n" style="color:${LEVEL_COLOR[k]}">${v}</div>
        <div class="estat-l">${k}</div>
      </div>`).join('')}`;
}

function examCard(e){
  const lvlClass=LEVEL_CSS[e.level]||'elvl-inst';
  const subjPills=e.subjects.filter(s=>s!=='Any').slice(0,SUBJ_PILL_MAX).map(s=>`<span class="epill">${s}</span>`).join('');
  const cardId='ec-'+Math.random().toString(36).slice(2,8);

  let instHtml='';
  if(e.institutes && e.institutes.length){
    const preview=e.institutes.slice(0,INST_PREVIEW_COUNT);
    const rest=e.institutes.slice(INST_PREVIEW_COUNT);
    const renderInst=i=>{
      const emoji=Object.keys(TIER_COLOR).find(k=>i.tier.startsWith(k))||'✓';
      const c=TIER_COLOR[emoji]||'#524E45';
      const bg=TIER_BG[emoji]||'#F5F3EE';
      return `<div class="inst-row">
        <div class="inst-name">${i.name}</div>
        <div class="inst-meta">
          <span class="inst-city">${i.city}</span>
          <span class="inst-tier" style="background:${bg};color:${c}">${i.tier}</span>
        </div>
      </div>`;
    };
    instHtml=`
      <div class="inst-section">
        <div class="inst-hdr" onclick="toggleInst('${cardId}')">
          <span class="inst-hdr-label">🏛 Where can I study?</span>
          <span class="inst-hdr-count">${e.institutes.length} institute${e.institutes.length>1?'s':''}</span>
          <span class="inst-toggle" id="tog-${cardId}">▼</span>
        </div>
        <div class="inst-list" id="${cardId}">
          ${preview.map(renderInst).join('')}
          ${rest.length?`<div class="inst-more" id="more-${cardId}" style="display:none">${rest.map(renderInst).join('')}</div>
          <button class="inst-show-more" id="smb-${cardId}" onclick="toggleMore('${cardId}')">+${rest.length} more institutes</button>`:''}
        </div>
        ${e.seats?`<div class="inst-seats">📊 Approx. seats: <strong>${e.seats}</strong></div>`:''}
      </div>`;
  }

  return `<div class="ecard">
    <div class="ecard-top">
      <div>
        <div class="ecard-name">${e.name}</div>
        <div class="ecard-full">${e.full}</div>
      </div>
      <div class="${lvlClass} elvl">${e.level}</div>
    </div>
    <hr class="divider">
    <div class="ecard-row"><div class="ecard-lbl">By</div><div class="ecard-val"><strong>${e.body}</strong></div></div>
    <div class="ecard-row"><div class="ecard-lbl">For</div><div class="ecard-val">${e.for}</div></div>
    <div class="ecard-row"><div class="ecard-lbl">Freq</div><div class="ecard-val">${e.freq}</div></div>
    <div class="ecard-row"><div class="ecard-lbl">Website</div><div class="ecard-val"><a href="https://${e.website}" target="_blank" style="color:var(--accent);text-decoration:none;font-weight:500">${e.website} ↗</a></div></div>
    ${e.explainer?`<div class="ecard-explainer">🧭 ${e.explainer}</div>`:''}
    ${e.note?`<div class="ecard-important">${e.note}</div>`:''}
    ${instHtml}
    <div class="ecard-pills">${subjPills}</div>
    <button class="ecard-college-btn" onclick="goToCollegesForExam('${e.name}')">🏫 Find colleges in our database →</button>
  </div>`;
}

function toggleInst(id){
  const el=document.getElementById(id);
  const tog=document.getElementById('tog-'+id);
  const open=el.style.display!=='none';
  el.style.display=open?'none':'block';
  tog.textContent=open?'▼':'▲';
}
function toggleMore(id){
  const el=document.getElementById('more-'+id);
  const btn=document.getElementById('smb-'+id);
  const open=el.style.display!=='none';
  el.style.display=open?'none':'block';
  btn.textContent=open?btn.dataset.orig||btn.textContent:'Show fewer';
  if(!btn.dataset.orig) btn.dataset.orig=btn.textContent;
}

function resetExamFilters(){
  document.getElementById('ef-level').value='';
  document.getElementById('ef-stream').value='';
  document.getElementById('ef-subj').value='';
  document.getElementById('ef-search').value='';
  renderExams();
}

// ── PG Exam render ───────────────────────────────────────────────────
function renderPGExams(){
  const lvl=document.getElementById('ef-level').value;
  const stream=document.getElementById('ef-stream').value;
  const search=document.getElementById('ef-search').value.toLowerCase();
  let total=0; let html='';

  PG_EXAM_GROUPS.forEach(g=>{
    if(stream && g.id!==stream) return;
    const exams=g.exams.filter(e=>{
      if(lvl && e.level!==lvl) return false;
      if(search){
        const hay=(e.name+e.full+e.body+e.for+(e.note||'')+
          e.papers.map(p=>p.name+' '+p.topics.join(' ')).join(' ')).toLowerCase();
        if(!hay.includes(search)) return false;
      }
      return true;
    });
    if(!exams.length) return;
    total+=exams.length;
    html+=`<div class="exam-group">
      <div class="exam-group-hdr">
        <div class="exam-group-title" style="margin-left:0">${g.label}</div>
        <div class="exam-group-n">${exams.length} exam${exams.length>1?'s':''}</div>
      </div>
      <div class="exam-grid">${exams.map(pgExamCard).join('')}</div>
    </div>`;
  });

  if(!total) html=`<div class="no-res"><h3>No exams found</h3><p>Try adjusting or resetting your filters.</p></div>`;
  document.getElementById('exam-out').innerHTML=html;
  document.getElementById('exam-stats-bar').innerHTML=
    `<div class="estat"><div class="estat-n">${total}</div><div class="estat-l">Total shown</div></div>`;
}

// ── PG Exam card ──────────────────────────────────────────────────────
function pgExamCard(e){
  const lvlClass=LEVEL_CSS[e.level]||'elvl-inst';
  const cardId='pg-'+Math.random().toString(36).slice(2,8);

  // Papers / syllabus section
  const multiPaper=e.papers.length>1||(e.papers.length===1&&e.papers[0].code!=='');
  let papersHtml='';
  if(multiPaper){
    papersHtml=`<div class="pg-papers">
      ${e.papers.map(p=>`<div class="pg-paper-row">
        ${p.code?`<span class="pg-paper-code">${p.code}</span>`:''}
        <div class="pg-topic-pills">${p.topics.map(t=>`<span class="pg-topic-pill">${t}</span>`).join('')}</div>
      </div>`).join('')}
    </div>`;
  } else if(e.papers.length===1){
    papersHtml=`<div class="pg-topic-pills" style="margin-top:4px">
      ${e.papers[0].topics.map(t=>`<span class="pg-topic-pill">${t}</span>`).join('')}
    </div>`;
  }

  let instHtml='';
  if(e.institutes&&e.institutes.length){
    const preview=e.institutes.slice(0,INST_PREVIEW_COUNT);
    const rest=e.institutes.slice(INST_PREVIEW_COUNT);
    const renderInst=i=>{
      const emoji=Object.keys(TIER_COLOR).find(k=>i.tier.startsWith(k))||'✓';
      return `<div class="inst-row">
        <div class="inst-name">${i.name}</div>
        <div class="inst-meta">
          <span class="inst-city">${i.city}</span>
          <span class="inst-tier" style="background:${TIER_BG[emoji]};color:${TIER_COLOR[emoji]}">${i.tier}</span>
        </div>
      </div>`;
    };
    instHtml=`<div class="inst-section">
      <div class="inst-hdr" onclick="toggleInst('${cardId}')">
        <span class="inst-hdr-label">🏛 Where can I study?</span>
        <span class="inst-hdr-count">${e.institutes.length} institute${e.institutes.length>1?'s':''}</span>
        <span class="inst-toggle" id="tog-${cardId}">▼</span>
      </div>
      <div class="inst-list" id="${cardId}">
        ${preview.map(renderInst).join('')}
        ${rest.length?`<div class="inst-more" id="more-${cardId}" style="display:none">${rest.map(renderInst).join('')}</div>
        <button class="inst-show-more" id="smb-${cardId}" onclick="toggleMore('${cardId}')">+${rest.length} more</button>`:''}
      </div>
      ${e.seats?`<div class="inst-seats">📊 Approx. seats: <strong>${e.seats}</strong></div>`:''}
    </div>`;
  }

  return `<div class="ecard">
    <div class="ecard-top">
      <div>
        <div class="ecard-name">${e.name}</div>
        <div class="ecard-full">${e.full}</div>
      </div>
      <div class="${lvlClass} elvl">${e.level}</div>
    </div>
    <hr class="divider">
    <div class="ecard-row"><div class="ecard-lbl">By</div><div class="ecard-val"><strong>${e.body}</strong></div></div>
    <div class="ecard-row"><div class="ecard-lbl">For</div><div class="ecard-val">${e.for}</div></div>
    <div class="ecard-row"><div class="ecard-lbl">Freq</div><div class="ecard-val">${e.freq}</div></div>
    <div class="ecard-row"><div class="ecard-lbl">Website</div><div class="ecard-val"><a href="https://${e.website}" target="_blank" style="color:var(--accent);text-decoration:none;font-weight:500">${e.website} ↗</a></div></div>
    ${e.note?`<div class="ecard-important">${e.note}</div>`:''}
    <div class="ecard-row" style="margin-top:4px">
      <div class="ecard-lbl">Syllabus</div>
      <div style="flex:1">${papersHtml}</div>
    </div>
    ${instHtml}
  </div>`;
}

// ── POPULATE EXAM FILTER DROPDOWNS ──
const EXAM_LEVEL_LABELS={
  National:'National', State:'State', Private:'Private University',
  Institute:'Institute / University', Professional:'Professional Body'
};
const EXAM_SUBJ_LABELS={
  'PCM':'PCM','PCM+CS':'PCM + CS','PCB':'PCB','PCMB':'PCMB',
  'Commerce':'Commerce','Arts':'Arts','Any':'Any stream'
};
const EXAM_SUBJ_ORDER=['PCM','PCM+CS','PCB','PCMB','Commerce','Arts','Any'];

function populateExamDropdowns(){
  // Level — collect unique levels from data in display order
  const levelSel=document.getElementById('ef-level');
  if(levelSel&&levelSel.options.length<=1){
    const seen=new Set();
    EXAM_GROUPS.forEach(g=>g.exams.forEach(e=>seen.add(e.level)));
    Object.keys(EXAM_LEVEL_LABELS).filter(l=>seen.has(l)).forEach(l=>{
      const o=document.createElement('option');
      o.value=l; o.textContent=EXAM_LEVEL_LABELS[l]; levelSel.appendChild(o);
    });
  }
  // Stream — from EXAM_GROUPS order
  const streamSel=document.getElementById('ef-stream');
  if(streamSel&&streamSel.options.length<=1){
    EXAM_GROUPS.forEach(g=>{
      const o=document.createElement('option');
      o.value=g.id; o.textContent=g.label; streamSel.appendChild(o);
    });
  }
  // Subjects
  const subjSel=document.getElementById('ef-subj');
  if(subjSel&&subjSel.options.length<=1){
    EXAM_SUBJ_ORDER.forEach(v=>{
      const o=document.createElement('option');
      o.value=v; o.textContent=EXAM_SUBJ_LABELS[v]||v; subjSel.appendChild(o);
    });
  }
}
