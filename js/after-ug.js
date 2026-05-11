// Vazhi — After UG Tab
// Renders pathway cards with filter logic
// Also hosts PG Exams and PG Universities sub-panels (moved here from Courses & Exams / Colleges)

// ── PG EXAMS (for After UG tab) ──────────────────────────────────────
function renderPGExamsForAug(){
  if(typeof PG_EXAM_GROUPS==='undefined'||typeof pgExamCard==='undefined') return;
  const stream=(document.getElementById('aug-pg-ef-stream')||{}).value||'';
  const search=((document.getElementById('aug-pg-ef-search')||{}).value||'').toLowerCase();
  let total=0; let html='';
  PG_EXAM_GROUPS.forEach(g=>{
    if(stream && g.id!==stream) return;
    const exams=search ? g.exams.filter(e=>{
      const hay=(e.name+e.full+e.body+(e.for||'')+(e.note||'')+
        (e.papers||[]).map(p=>p.name+' '+p.topics.join(' ')).join(' ')).toLowerCase();
      return hay.includes(search);
    }) : g.exams;
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
  if(!total) html=`<div class="no-res"><h3>No PG exams found</h3><p>Try adjusting filters.</p></div>`;
  document.getElementById('aug-pg-exam-out').innerHTML=html;
  document.getElementById('aug-pg-exam-stats').innerHTML=
    `<div class="estat"><div class="estat-n">${total}</div><div class="estat-l">PG exams shown</div></div>`;
}

function resetAugPGExamFilters(){
  const s=document.getElementById('aug-pg-ef-stream'); if(s) s.value='';
  const q=document.getElementById('aug-pg-ef-search'); if(q) q.value='';
  renderPGExamsForAug();
}

// ── PG UNIVERSITIES (for After UG tab) ──────────────────────────────
function renderPGCollegesForAug(){
  if(typeof PG_COLLEGES==='undefined'||typeof collegeCard==='undefined') return;
  const typeFilter=(document.getElementById('aug-pg-cf-type')||{}).value||'';
  const stream=(document.getElementById('aug-pg-cf-stream')||{}).value||'';
  const search=((document.getElementById('aug-pg-cf-search')||{}).value||'').toLowerCase();

  const filtered=PG_COLLEGES.filter(c=>{
    // 'Deemed' filter option matches both Deemed and INI types
    const tm=!typeFilter||(typeFilter==='Deemed'
      ?(c.type==='Deemed'||c.type==='INI')
      :c.type===typeFilter);
    const stm=!stream||c.streams.some(s=>s.toLowerCase().includes(stream.toLowerCase()));
    const srch=!search||(c.name+c.short+c.state+
      c.programGroups.map(g=>g.programs.map(p=>p.name).join(' ')).join(' ')).toLowerCase().includes(search);
    return tm&&stm&&srch;
  });

  // Stats bar
  const cnt={Central:0,State:0,'INI/Deemed':0};
  filtered.forEach(c=>{
    if(c.type==='Central') cnt.Central++;
    else if(c.type==='State') cnt.State++;
    else cnt['INI/Deemed']++;
  });
  // 'INI/Deemed' is a display key that combines Deemed + INI types; map to Deemed colours
  const pgTypeCols={Central:TYPE_COLOR.Central,State:TYPE_COLOR.State,'INI/Deemed':TYPE_COLOR.Deemed};
  const pgTypeBgs ={Central:TYPE_BG.Central,   State:TYPE_BG.State,   'INI/Deemed':TYPE_BG.Deemed};
  document.getElementById('aug-col-stats').innerHTML=`
    <div class="col-stat"><div class="col-stat-n">${filtered.length}</div><div class="col-stat-l">Universities shown</div></div>
    ${Object.entries(cnt).filter(([,v])=>v>0).map(([k,v])=>`
      <div class="col-stat" style="border-color:${pgTypeBgs[k]}">
        <div class="col-stat-n" style="color:${pgTypeCols[k]}">${v}</div>
        <div class="col-stat-l">${k}</div>
      </div>`).join('')}`;

  if(!filtered.length){
    document.getElementById('aug-college-out').innerHTML=
      `<div class="col-no-res"><h3>No universities found</h3><p>Try adjusting filters.</p></div>`;
    return;
  }

  // Group by type
  const byType={Central:[],State:[],Other:[]};
  filtered.forEach(c=>{
    if(c.type==='Central') byType.Central.push(c);
    else if(c.type==='State') byType.State.push(c);
    else byType.Other.push(c);
  });
  const groupLabel={Central:'🏛 Central Universities',State:'🎓 State Universities',Other:'🔬 INI / Deemed Universities'};
  let html='';
  ['Central','State','Other'].filter(t=>byType[t].length).forEach(t=>{
    html+=`<div class="col-district-sec">
      <div class="col-district-hdr">
        <div class="col-district-name">${groupLabel[t]}</div>
        <div class="col-district-n">${byType[t].length} institution${byType[t].length>1?'s':''}</div>
      </div>
      <div class="col-grid">${byType[t].map(c=>collegeCard(c,'pg')).join('')}</div>
    </div>`;
  });
  document.getElementById('aug-college-out').innerHTML=html;
}

const PG_TYPE_LABELS={Central:'Central University',State:'State University',Deemed:'INI / Deemed',INI:'INI / Deemed'};
const PG_TYPE_ORDER=['Central','State','Deemed','INI'];
const PG_STREAM_LABELS={Engineering:'Engineering',Management:'Management','Arts & Science':'Arts & Science',Medical:'Medical',Law:'Law'};
const AUG_UG_LABELS={'B.Tech/B.E.':'B.Tech / B.E.','B.Sc':'B.Sc','B.A./B.Com':'B.A. / B.Com','MBBS':'MBBS','LLB/LLB(Hons)':'LLB / LLB (Hons)'};
const AUG_UG_ORDER=['B.Tech/B.E.','B.Sc','B.A./B.Com','MBBS','LLB/LLB(Hons)'];

function populateAfterUGFilters(){
  // UG Degree — fixed ordered list
  const ugSel=document.getElementById('aug-ug');
  if(ugSel&&ugSel.options.length<=1){
    AUG_UG_ORDER.forEach(v=>{
      const o=document.createElement('option'); o.value=v; o.textContent=AUG_UG_LABELS[v]||v; ugSel.appendChild(o);
    });
  }
  // Category — from AUG_CATEGORIES
  const catSel=document.getElementById('aug-cat');
  if(catSel&&catSel.options.length<=1){
    AUG_CATEGORIES.forEach(c=>{
      const o=document.createElement('option'); o.value=c.id; o.textContent=c.ico+' '+c.label; catSel.appendChild(o);
    });
  }
  // PG Exam stream — from PG_EXAM_GROUPS
  const pgStreamSel=document.getElementById('aug-pg-ef-stream');
  if(pgStreamSel&&pgStreamSel.options.length<=1&&typeof PG_EXAM_GROUPS!=='undefined'){
    PG_EXAM_GROUPS.forEach(g=>{
      const o=document.createElement('option'); o.value=g.id; o.textContent=g.label; pgStreamSel.appendChild(o);
    });
  }
}

function populateAugPGFilters(){
  if(typeof PG_COLLEGES==='undefined') return;
  // Type
  const typeSel=document.getElementById('aug-pg-cf-type');
  if(typeSel&&typeSel.options.length<=1){
    const seen=new Set(PG_COLLEGES.map(c=>c.type));
    PG_TYPE_ORDER.filter(t=>seen.has(t)).forEach(t=>{
      const o=document.createElement('option'); o.value=t; o.textContent=PG_TYPE_LABELS[t]||t; typeSel.appendChild(o);
    });
  }
  // Stream
  const streamSel=document.getElementById('aug-pg-cf-stream');
  if(streamSel&&streamSel.options.length<=1){
    const seen=new Set(PG_COLLEGES.flatMap(c=>c.streams||[]));
    Object.keys(PG_STREAM_LABELS).filter(s=>seen.has(s)).forEach(s=>{
      const o=document.createElement('option'); o.value=s; o.textContent=PG_STREAM_LABELS[s]||s; streamSel.appendChild(o);
    });
  }
}

function resetAugPGCollegeFilters(){
  const t=document.getElementById('aug-pg-cf-type'); if(t) t.value='';
  const s=document.getElementById('aug-pg-cf-stream'); if(s) s.value='';
  const q=document.getElementById('aug-pg-cf-search'); if(q) q.value='';
  renderPGCollegesForAug();
}

const AUG_CATEGORIES = [
  { id: 'Higher Education', label: 'Higher Education', ico: '🎓' },
  { id: 'Research',         label: 'Research',         ico: '🔬' },
  { id: 'Government Jobs',  label: 'Government Jobs',  ico: '🏛' },
  { id: 'Professional',     label: 'Professional',     ico: '📜' },
  { id: 'Study Abroad',     label: 'Study Abroad',     ico: '✈️' },
];

const AUG_EXAM_LINKS = {
  'GATE':'gate.iitm.ac.in',
  'CAT':'iimcat.ac.in',
  'XAT':'xatonline.in',
  'GMAT':'mba.com/gmat',
  'SNAP':'snaptest.org',
  'NMAT':'nmat.org',
  'MAT':'aima.in',
  'IIT JAM':'jam.iitm.ac.in',
  'CUET-PG':'pgcuet.samarth.ac.in',
  'CLAT-PG':'consortiumofnlus.ac.in',
  'AILET-PG':'nludelhi.ac.in',
  'NIMCET':'nimcet.in',
  'TISSNET':'tiss.edu/admissions',
  'CSIR-NET':'csirnet.nta.nic.in',
  'UGC-NET':'ugcnet.nta.nic.in',
  'JEST':'jest.org.in',
  'DBT-JRF':'dbtjrf.co.in',
  'TIFR GS (own exam)':'tifr.res.in',
  'ISRO ICRB':'isro.gov.in/careers',
  'DRDO CEPTAM / SET':'drdo.gov.in',
  'BARC OCES/DGFS':'barc.gov.in',
  'CSIR-NET':'csirnet.nta.nic.in',
  'UPSC CSE (Prelims + Mains + Interview)':'upsc.gov.in',
  'UPSC Engineering Services Examination (ESE / IES)':'upsc.gov.in',
  'UPSC Geologist Examination':'upsc.gov.in',
  'SSC CGL':'ssc.nic.in',
  'SSC CHSL':'ssc.nic.in',
  'SSC MTS':'ssc.nic.in',
  'IBPS PO':'ibps.in',
  'IBPS Clerk':'ibps.in',
  'SBI PO':'sbi.co.in/careers',
  'SBI Clerk':'sbi.co.in/careers',
  'RBI Grade B':'rbi.org.in/careers',
  'NABARD':'nabard.org/careers',
  'GRE':'ets.org/gre',
  'TOEFL / IELTS':'ets.org/toefl',
  'ICAI Foundation':'icai.org',
  'ICAI Intermediate':'icai.org',
  'ICAI Final':'icai.org',
  'ICSI Foundation':'icsi.edu',
  'ICSI Executive':'icsi.edu',
  'ICSI Professional':'icsi.edu',
  'CMA Foundation':'icmai.in',
  'LIC AAO (Life Insurance Corporation)':'licindia.in',
  'GIC Scale Officer (General Insurance Corporation)':'gicofindia.com',
  'NIACL AO / Assistant (New India Assurance)':'newindia.co.in',
  'UIIC AO (United India Insurance)':'uiic.co.in',
};

const AUG_BS = {
  coral:  { bg:'#FFEDE8', color:'#BC2D12', border:'#F5B8AA' },
  teal:   { bg:'#E5FAFB', color:'#0A686F', border:'#9FD5D9' },
  green:  { bg:'#E8F8EF', color:'#0D6640', border:'#9FD9BC' },
  purple: { bg:'#F2EBFF', color:'#581F9E', border:'#C9B0F0' },
  amber:  { bg:'#FFF5E0', color:'#855100', border:'#F5C97A' },
  accent: { bg:'#E6F7F6', color:'#065750', border:'#9FD9D5' },
};

// ── Render ────────────────────────────────────────────────────────────
function renderAfterUG() {
  const ugFilter   = document.getElementById('aug-ug').value;
  const catFilter  = document.getElementById('aug-cat').value;
  const search     = (document.getElementById('aug-search').value || '').toLowerCase();

  let total = 0;
  let html  = '';

  for (const cat of AUG_CATEGORIES) {
    if (catFilter && cat.id !== catFilter) continue;

    const entries = AFTER_UG.filter(e => {
      if (e.category !== cat.id) return false;
      if (ugFilter && !e.ugFor.includes(ugFilter) && !e.ugFor.includes('Any')) return false;
      if (search) {
        const hay = (e.name + e.field + e.exams.join(' ') + e.institutes + e.careers + e.note).toLowerCase();
        if (!hay.includes(search)) return false;
      }
      return true;
    });

    if (!entries.length) continue;
    total += entries.length;

    html += `<div class="aug-section">
      <div class="aug-sec-hdr">
        <span class="aug-sec-ico">${cat.ico}</span>
        <span class="aug-sec-title">${cat.label}</span>
        <span class="aug-sec-count">${entries.length}</span>
      </div>
      <div class="aug-cards">${entries.map(augCard).join('')}</div>
    </div>`;
  }

  if (!total) {
    html = `<div class="no-res"><h3>No pathways found</h3><p>Try adjusting or resetting your filters.</p></div>`;
  }

  document.getElementById('aug-out').innerHTML = html;
  document.getElementById('aug-count').innerHTML = total
    ? `Showing <b>${total}</b> pathway${total > 1 ? 's' : ''}`
    : 'No results';
}

// ── Card ──────────────────────────────────────────────────────────────
function augCard(e) {
  const bs = AUG_BS[e.bc] || AUG_BS.accent;
  const badge = e.badge ? `<span class="aug-badge" style="background:${bs.bg};color:${bs.color};border-color:${bs.border}">${e.badge}</span>` : '';
  const examPills = e.exams.map(x => {
    const url = AUG_EXAM_LINKS[x];
    return url
      ? `<a href="https://${url}" target="_blank" rel="noopener" class="aug-exam-pill aug-exam-link">${x} ↗</a>`
      : `<span class="aug-exam-pill">${x}</span>`;
  }).join('');
  const ugPills   = e.ugFor.map(u => `<span class="aug-ug-pill">${u}</span>`).join('');
  const note = e.note ? `<div class="aug-note">${e.note}</div>` : '';
  const examNote = e.examNote ? `<div class="aug-exam-note">${e.examNote}</div>` : '';

  return `<div class="aug-card" style="border-left:4px solid ${bs.color}">
    <div class="aug-card-top">
      <div class="aug-name">${e.name}</div>
      ${badge}
    </div>
    <div class="aug-field">${e.field} · ${e.duration}</div>

    <div class="aug-row">
      <span class="aug-lbl">Open to</span>
      <div class="aug-pills">${ugPills}</div>
    </div>

    <div class="aug-row">
      <span class="aug-lbl">Exam${e.exams.length > 1 ? 's' : ''}</span>
      <div class="aug-pills">${examPills}</div>
    </div>
    ${examNote}

    <div class="aug-row">
      <span class="aug-lbl">Institutes</span>
      <span class="aug-val">${e.institutes}</span>
    </div>

    <div class="aug-row">
      <span class="aug-lbl">Careers</span>
      <span class="aug-val">${e.careers}</span>
    </div>

    <div class="aug-card-footer">
      <span class="aug-salary">${typeof lpaToMonthly==='function'?lpaToMonthly(e.salary):e.salary}</span>
      <span class="aug-market aug-mkt-${e.market.toLowerCase()}">${e.market} demand</span>
    </div>
    ${note}
  </div>`;
}

// ── Reset ─────────────────────────────────────────────────────────────
function resetAfterUGFilters() {
  document.getElementById('aug-ug').value     = '';
  document.getElementById('aug-cat').value    = '';
  document.getElementById('aug-search').value = '';
  renderAfterUG();
}
