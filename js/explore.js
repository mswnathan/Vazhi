// Vazhi — Explore Courses Tab (Tab 1)
// Renders course cards with filter logic

// ── RENDER ──
function renderExplore(){
  const subj=filters.subj, stream=filters.stream, search=filters.search.toLowerCase();
  let total=0, highDemand=0, national=0, trending=0;
  let html='';
  STREAMS.forEach(s=>{
    if(stream&&s.id!==stream) return;
    const courses=s.courses.filter(c=>{
      const sm=!subj||c.subjects.includes(subj)||c.subjects.includes('Any');
      const srch=!search||(c.name+c.exam+c.institutes+c.careers).toLowerCase().includes(search);
      return sm&&srch;
    });
    if(!courses.length) return;
    total+=courses.length;
    courses.forEach(c=>{
      if(c.market==='High') highDemand++;
      if(c.examLvl==='National') national++;
      if(c.trending) trending++;
    });
    const gc=view==='list'?'cards list':'cards';
    html+=`<div class="stream-sec">
      <div class="stream-hdr">
        <div class="stream-ico" style="background:${s.bg};color:${s.color}">${s.ico}</div>
        <div class="stream-title">${s.label}</div>
        <div class="stream-n">${courses.length} course${courses.length>1?'s':''}</div>
      </div>
      <div class="${gc}">${courses.map(c=>courseCard(c,subj)).join('')}</div>
    </div>`;
  });
  if(!total) html=`<div class="no-res"><h3>No courses found</h3><p>Try adjusting or resetting your filters.</p></div>`;
  document.getElementById('explore-out').innerHTML=html;
  const shown=total?`Showing <b>${total}</b> course${total>1?'s':''}`:'No results';
  document.getElementById('res-count').innerHTML=shown;
  const statsEl=document.getElementById('explore-stats');
  if(statsEl){
    statsEl.innerHTML=total?`<div class="col-stats-row">
      <div class="col-stat"><div class="col-stat-n">${total}</div><div class="col-stat-l">Total courses</div></div>
      <div class="col-stat"><div class="col-stat-n">${highDemand}</div><div class="col-stat-l">High demand</div></div>
      <div class="col-stat"><div class="col-stat-n">${national}</div><div class="col-stat-l">National exam</div></div>
      <div class="col-stat"><div class="col-stat-n">${trending}</div><div class="col-stat-l">Trending</div></div>
    </div>`:'';
  }
}

// ── Exam link helpers (built lazily from EXAM_GROUPS) ──
let _examWebMap=null;
function _buildExamWebMap(){
  const m={};
  (typeof EXAM_GROUPS!=='undefined'?EXAM_GROUPS:[]).forEach(g=>g.exams.forEach(e=>{m[e.name]=e.website;}));
  return m;
}
function _examLink(examStr){
  if(!_examWebMap) _examWebMap=_buildExamWebMap();
  for(const[name,site] of Object.entries(_examWebMap)){
    if(examStr.includes(name)) return `<a href="https://${site}" target="_blank" rel="noopener" class="card-exam-link">${name} ↗</a>`;
  }
  return null;
}
function _counselLink(exam){
  const e=exam.toLowerCase();
  if(e.includes('jee'))            return {label:'JoSAA counselling ↗',url:'josaa.nic.in'};
  if(e.includes('neet'))           return {label:'MCC NEET counselling ↗',url:'mcc.nic.in'};
  if(e.includes('clat'))           return {label:'Consortium of NLUs ↗',url:'consortiumofnlus.ac.in'};
  if(e.includes('cuet'))           return {label:'CUET admissions ↗',url:'cuet.samarth.ac.in'};
  if(e.includes('iiser iat')||e.includes('iiser')) return {label:'IISER admissions ↗',url:'iiseradmission.in'};
  if(e.includes('cat')||e.includes('iim')) return {label:'IIM CAT ↗',url:'iimcat.ac.in'};
  if(e.includes('tnea'))           return {label:'TNEA counselling ↗',url:'tneaonline.org'};
  if(e.includes('icar'))           return {label:'ICAR admissions ↗',url:'icar.org.in'};
  if(e.includes('nchm'))           return {label:'NCHMCT admissions ↗',url:'nchm.nic.in'};
  if(e.includes('isi'))            return {label:'ISI admissions ↗',url:'isical.ac.in/admissions'};
  if(e.includes('nest'))           return {label:'NEST admissions ↗',url:'nestexam.in'};
  return null;
}

function courseCard(c,activeSubj=''){
  const bs=BS[c.bc]||BS.accent;
  const els=c.examLvl;
  const elStyle=examLvlStyle(els);
  const mkt=c.market;
  const mc=mktClass(mkt);
  const pills=(c.subjects||[]).filter(s=>s!=='Any').slice(0,5).map(s=>`<span class="spill${activeSubj&&s===activeSubj?' match':''}">${s}</span>`).join('');
  const tband=c.trending?`<div class="trending-stripe">Trending</div>`:'';
  return `<div class="card${c.trending?' trending-card':''}">
    ${tband}
    <div class="card-top">
      <div class="card-name">${c.name}</div>
      <div class="cbadge" style="${badgeStyle(c.bc)}">${c.badge}</div>
    </div>
    <hr class="divider">
    <div class="crow"><div class="clbl">Exam</div><div class="cval">${c.exam} <span style="display:inline-block;margin-left:5px;font-size:9px;padding:2px 7px;border-radius:20px;font-weight:700;${elStyle}">${els}</span></div></div>
    <div class="crow"><div class="clbl">Institutes</div><div class="cval">${c.institutes}</div></div>
    <div class="crow"><div class="clbl">Careers</div><div class="cval"><strong>${c.careers}</strong></div></div>
    ${(()=>{const el=_examLink(c.exam);const cl=_counselLink(c.exam);return(el?`<div class="crow"><div class="clbl">Exam site</div><div class="cval">${el}</div></div>`:'')+(cl?`<div class="crow"><div class="clbl">Counselling</div><div class="cval"><a href="https://${cl.url}" target="_blank" rel="noopener" class="card-exam-link">${cl.label}</a></div></div>`:'');})()}
    <div class="meta-row">
      <span class="salary-tag">${typeof lpaToMonthly==='function'?lpaToMonthly(c.salary):c.salary}</span>
      <span class="market-tag ${mc}">${mkt} demand</span>
      ${c.trending&&c.trendReason?`<span style="font-size:10px;color:var(--text3);font-style:italic">${c.trendReason}</span>`:''}
    </div>
    <div class="subj-pills">${pills}</div>
    ${c.branches&&c.branches.length?`<div class="branches-wrap">
      <button class="branches-toggle" onclick="toggleBranches(this)">▸ Branches offered</button>
      <div class="branches-list" style="display:none">${c.branches.map(b=>`<span class="branch-tag">${b}</span>`).join('')}</div>
    </div>`:`<div class="single-degree-label">📋 Single unified degree — no branch selection at admission</div>`}
  </div>`;
}

// ── POPULATE FILTERS ──
const SUBJ_LABELS={
  'PCM':'PCM — Physics, Chemistry, Maths',
  'PCM+CS':'PCM + Computer Science',
  'PCB':'PCB — Physics, Chemistry, Biology',
  'PCMB':'PCMB — All four sciences',
  'Commerce+Maths':'Commerce with Maths',
  'Commerce':'Commerce (without Maths)',
  'Arts':'Arts / Humanities',
  'Any':'Any stream'
};
const SUBJ_ORDER=['PCM','PCM+CS','PCB','PCMB','Commerce+Maths','Commerce','Arts','Any'];

function populateExploreFilters(){
  const subj=document.getElementById('f-subj');
  if(subj&&subj.options.length<=1){
    SUBJ_ORDER.forEach(v=>{
      const o=document.createElement('option');
      o.value=v; o.textContent=SUBJ_LABELS[v]||v; subj.appendChild(o);
    });
  }
  const stream=document.getElementById('f-stream');
  if(stream&&stream.options.length<=1){
    STREAMS.forEach(s=>{
      const o=document.createElement('option');
      o.value=s.id; o.textContent=s.label; stream.appendChild(o);
    });
  }
}

// ── FILTERS ──
function applyFilters(){
  filters.subj=document.getElementById('f-subj').value;
  filters.stream=document.getElementById('f-stream').value;
  filters.search=document.getElementById('f-search').value;
  updateChips();
  renderExplore();
}
function updateChips(){
  const lbl={'PCM':'Subjects: PCM','PCM+CS':'Subjects: PCM+CS','PCB':'Subjects: PCB','PCMB':'Subjects: PCMB','Commerce+Maths':'Subjects: Commerce+Maths','Commerce':'Subjects: Commerce','Arts':'Subjects: Arts','Any':'Subjects: Any'};
  _chips=[];
  if(filters.subj) _chips.push({l:lbl[filters.subj]||filters.subj,clr:()=>{document.getElementById('f-subj').value='';filters.subj='';applyFilters();}});
  if(filters.stream) _chips.push({l:'Stream: '+filters.stream,clr:()=>{document.getElementById('f-stream').value='';filters.stream='';applyFilters();}});
  if(filters.search) _chips.push({l:`Search: "${filters.search}"`,clr:()=>{document.getElementById('f-search').value='';filters.search='';applyFilters();}});
  document.getElementById('chips').innerHTML=_chips.map((c,i)=>`<div class="chip">${c.l}<button onclick="clrChip(${i})">×</button></div>`).join('');
}
function clrChip(i){_chips[i].clr();}
function resetFilters(){
  document.getElementById('f-subj').value='';
  document.getElementById('f-stream').value='';
  document.getElementById('f-search').value='';
  filters={subj:'',stream:'',search:''};
  updateChips();
  renderExplore();
}
function toggleBranches(btn){
  const list=btn.nextElementSibling;
  const open=list.style.display==='flex';
  list.style.display=open?'none':'flex';
  btn.textContent=(open?'▸':'▾')+' Branches offered';
}
function setView(v){
  view=v;
  document.getElementById('vg').classList.toggle('on',v==='grid');
  document.getElementById('vl').classList.toggle('on',v==='list');
  renderExplore();
}
