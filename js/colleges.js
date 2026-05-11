// Vazhi — Colleges Tab
// Render, filter and toggle logic for college cards

// ── Group 3: mode string constants ──────────────────────────────────────
const COL_MODE_UG        = 'ug';
const COL_MODE_PG        = 'pg';
const COL_MODE_PREDICTOR = 'predictor';

// ── Group 3: NAAC grade constants ───────────────────────────────────────
const NAAC_APP = 'A++';
const NAAC_AP  = 'A+';

// ── Group 2: institution type → colour (shared across renderPGColleges & renderColleges) ──
const TYPE_COLOR = {Central:'#0F3098',State:'#0A5234',Aided:'#07515A',Deemed:'#451880',Private:'#6B3F00'};
const TYPE_BG    = {Central:'#EBF0FF',State:'#E8F8EF',Aided:'#E5FAFB',Deemed:'#F2EBFF',Private:'#FFF5E0'};

// ── Group 2: college type → CSS badge class ─────────────────────────────
const TYPE_CSS = {Central:'ct-central',State:'ct-state',Aided:'ct-aided',Deemed:'ct-deemed',Private:'ct-private'};

// ── Group 2: NAAC rating → CSS class ────────────────────────────────────
const NAAC_CSS = {[NAAC_APP]:'naac-app',[NAAC_AP]:'naac-ap'};

let colPrgState={};
let collegeMode=COL_MODE_UG;
let showSavedOnly=false;

function setCollegeMode(mode){
  collegeMode=mode;
  document.querySelectorAll('.col-mode-btn').forEach(b=>
    b.classList.toggle('active',b.dataset.mode===mode)
  );
  const dWrap=document.getElementById('cf-district-wrap');
  if(dWrap) dWrap.style.display=mode===COL_MODE_PG||mode===COL_MODE_PREDICTOR?'none':'';
  // Show/hide filter bar and college-out for predictor mode
  const colFilterBar=document.querySelector('.col-filter-bar');
  const colStatsRow=document.getElementById('col-stats');
  const colOut=document.getElementById('college-out');
  const predictorPanel=document.getElementById('col-panel-predictor');
  if(colFilterBar) colFilterBar.style.display=mode===COL_MODE_PREDICTOR?'none':'';
  if(colStatsRow) colStatsRow.style.display=mode===COL_MODE_PREDICTOR?'none':'';
  if(colOut) colOut.style.display=mode===COL_MODE_PREDICTOR?'none':'';
  if(predictorPanel) predictorPanel.style.display=mode===COL_MODE_PREDICTOR?'':'none';
  const sub=document.querySelector('.col-page-sub');
  if(sub) sub.textContent=mode===COL_MODE_PG
    ?'Central Universities · State Universities · INI/Deemed — PG programs across India'
    :mode===COL_MODE_PREDICTOR
    ?'Enter your rank or score to see which institutes are within reach'
    :'NAAC A++, A+, and all notable specialised institutes · Central, State, Aided, Private, Deemed';
  if(mode===COL_MODE_PG) renderPGColleges();
  else if(mode===COL_MODE_UG) renderColleges();
}

populateExamFilter();
updateDistrictFilter();

function renderPGColleges(){
  const type=document.getElementById('cf-type').value;
  const stream=document.getElementById('cf-stream').value;
  const search=document.getElementById('cf-search').value.toLowerCase();

  const filtered=PG_COLLEGES.filter(c=>{
    const tm=!type||c.type===type;
    const stm=!stream||c.streams.some(s=>s.toLowerCase().includes(stream.toLowerCase()));
    const srch=!search||(c.name+c.short+c.district+c.state+
      c.programGroups.map(g=>g.programs.map(p=>p.name).join(' ')).join(' ')).toLowerCase().includes(search);
    return tm&&stm&&srch;
  });

  if(!filtered.length){
    document.getElementById('college-out').innerHTML=`<div class="col-no-res"><h3>No colleges found</h3><p>Try adjusting or resetting your filters.</p></div>`;
    document.getElementById('col-stats').innerHTML='';
    return;
  }

  const typeCnt={Central:0,State:0,Deemed:0};
  filtered.forEach(c=>{if(typeCnt[c.type]!==undefined)typeCnt[c.type]++;});
  document.getElementById('col-stats').innerHTML=`
    <div class="col-stat"><div class="col-stat-n">${filtered.length}</div><div class="col-stat-l">Total universities</div></div>
    ${Object.entries(typeCnt).filter(([,v])=>v>0).map(([k,v])=>`
      <div class="col-stat" style="border-color:${TYPE_BG[k]}">
        <div class="col-stat-n" style="color:${TYPE_COLOR[k]}">${v}</div>
        <div class="col-stat-l">${k} Univ.</div>
      </div>`).join('')}`;

  const order=['Central','State','Deemed'];
  const byType={};
  filtered.forEach(c=>{
    if(!byType[c.type]) byType[c.type]=[];
    byType[c.type].push(c);
  });
  const groupLabel={Central:'🏛 Central Universities',State:'🎓 State Universities',Deemed:'🔬 INI / Deemed Universities'};
  let html='';
  order.filter(t=>byType[t]?.length).forEach(t=>{
    html+=`<div class="col-district-sec">
      <div class="col-district-hdr">
        <div class="col-district-name">${groupLabel[t]}</div>
        <div class="col-district-n">${byType[t].length} institution${byType[t].length>1?'s':''}</div>
      </div>
      <div class="col-grid">${byType[t].map(c=>collegeCard(c,'pg')).join('')}</div>
    </div>`;
  });
  document.getElementById('college-out').innerHTML=html;
}

function allColleges(){
  return [...COLLEGES,
    ...(typeof COLLEGES_KA!=='undefined'?COLLEGES_KA:[]),
    ...(typeof COLLEGES_KL!=='undefined'?COLLEGES_KL:[]),
    ...(typeof COLLEGES_AP!=='undefined'?COLLEGES_AP:[]),
    ...(typeof COLLEGES_TS!=='undefined'?COLLEGES_TS:[]),
    ...(typeof COLLEGES_MH!=='undefined'?COLLEGES_MH:[]),
    ...(typeof COLLEGES_DL!=='undefined'?COLLEGES_DL:[]),
    ...(typeof COLLEGES_RJ!=='undefined'?COLLEGES_RJ:[]),
    ...(typeof COLLEGES_WB!=='undefined'?COLLEGES_WB:[]),
    ...(typeof COLLEGES_UP!=='undefined'?COLLEGES_UP:[]),
    ...(typeof COLLEGES_BR!=='undefined'?COLLEGES_BR:[]),
    ...(typeof COLLEGES_GJ!=='undefined'?COLLEGES_GJ:[]),
    ...(typeof COLLEGES_MP!=='undefined'?COLLEGES_MP:[]),
    ...(typeof COLLEGES_PB!=='undefined'?COLLEGES_PB:[]),
    ...(typeof COLLEGES_CH!=='undefined'?COLLEGES_CH:[]),
    ...(typeof COLLEGES_AS!=='undefined'?COLLEGES_AS:[]),
    ...(typeof COLLEGES_OD!=='undefined'?COLLEGES_OD:[]),
    ...(typeof COLLEGES_UK!=='undefined'?COLLEGES_UK:[]),
    ...(typeof COLLEGES_JH!=='undefined'?COLLEGES_JH:[]),
    ...(typeof COLLEGES_HR!=='undefined'?COLLEGES_HR:[]),
    ...(typeof COLLEGES_HP!=='undefined'?COLLEGES_HP:[]),
    ...(typeof COLLEGES_JK!=='undefined'?COLLEGES_JK:[]),
    ...(typeof COLLEGES_GA!=='undefined'?COLLEGES_GA:[]),
    ...(typeof COLLEGES_CG!=='undefined'?COLLEGES_CG:[]),
    ...(typeof COLLEGES_NE!=='undefined'?COLLEGES_NE:[])];
}

const COL_TYPE_LABELS={Central:'Central Government',State:'State Government',Aided:'Government Aided',Deemed:'Deemed University'};
const COL_TYPE_ORDER=['Central','State','Aided','Deemed'];
const COL_STREAM_LABELS={Engineering:'Engineering & Technology',Medical:'Medical & Health','Arts & Science':'Arts & Science',Law:'Law',Management:'Management',Design:'Design & Architecture',Agriculture:'Agriculture, Fisheries & Vet',Education:'Education'};

function populateCollegeFilters(){
  const colleges=allColleges();
  // State
  const stateSel=document.getElementById('cf-state');
  if(stateSel&&stateSel.options.length<=1){
    [...new Set(colleges.map(c=>c.state))].sort().forEach(s=>{
      const o=document.createElement('option'); o.value=s; o.textContent=s; stateSel.appendChild(o);
    });
  }
  // Type
  const typeSel=document.getElementById('cf-type');
  if(typeSel&&typeSel.options.length<=1){
    const seen=new Set(colleges.map(c=>c.type));
    COL_TYPE_ORDER.filter(t=>seen.has(t)).forEach(t=>{
      const o=document.createElement('option'); o.value=t; o.textContent=COL_TYPE_LABELS[t]||t; typeSel.appendChild(o);
    });
  }
  // Stream
  const streamSel=document.getElementById('cf-stream');
  if(streamSel&&streamSel.options.length<=1){
    const seen=new Set(colleges.flatMap(c=>c.streams||[]));
    Object.keys(COL_STREAM_LABELS).filter(s=>seen.has(s)).forEach(s=>{
      const o=document.createElement('option'); o.value=s; o.textContent=COL_STREAM_LABELS[s]||s; streamSel.appendChild(o);
    });
  }
}

function populateExamFilter(){
  const examSet=new Set();
  allColleges().forEach(c=>{
    c.programGroups.forEach(g=>{
      g.programs.forEach(p=>{
        p.exam.split('/').forEach(e=>examSet.add(e.trim()));
      });
    });
  });
  const sel=document.getElementById('cf-exam');
  if(!sel) return;
  while(sel.options.length>1) sel.remove(1);
  [...examSet].sort().forEach(exam=>{
    const opt=document.createElement('option');
    opt.value=exam; opt.textContent=exam;
    sel.appendChild(opt);
  });
}

async function renderColleges(){
  const state=document.getElementById('cf-state').value;
  const type=document.getElementById('cf-type').value;
  const stream=document.getElementById('cf-stream').value;
  const exam=document.getElementById('cf-exam').value;
  const district=document.getElementById('cf-district').value;
  const search=document.getElementById('cf-search').value.toLowerCase();

  const savedSet=showSavedOnly && window.VazhiAuth ? await VazhiAuth.getSavedIds() : null;

  // Filter
  const filtered=allColleges().filter(c=>{
    const sm=!state||c.state===state;
    const tm=!type||c.type===type;
    const stm=!stream||c.streams.some(s=>s.toLowerCase().includes(stream.toLowerCase()));
    const em=!exam||c.programGroups.some(g=>g.programs.some(p=>p.exam.includes(exam)));
    const dm=!district||c.district===district;
    const srch=!search||(c.name+c.short+c.district+c.state+c.programGroups.map(g=>g.programs.map(p=>p.name).join(' ')).join(' ')).toLowerCase().includes(search);
    const savedMatch=!savedSet||savedSet.has((c.short||c.name).toLowerCase().replace(/[^a-z0-9]+/g,'-'));
    return sm&&tm&&stm&&em&&dm&&srch&&savedMatch;
  });

  if(!filtered.length){
    const emptyMsg=showSavedOnly
      ? `<div class="col-no-res"><h3>No saved colleges yet</h3><p>Click the ♡ Save button on any college card to add it to your shortlist.</p></div>`
      : `<div class="col-no-res"><h3>No colleges found</h3><p>Try adjusting or resetting your filters.</p></div>`;
    document.getElementById('college-out').innerHTML=emptyMsg;
    document.getElementById('col-stats').innerHTML='';
    return;
  }

  // Stats
  const typeCnt={Central:0,State:0,Aided:0,Deemed:0,Private:0};
  const naacCnt={[NAAC_APP]:0,[NAAC_AP]:0};
  filtered.forEach(c=>{if(typeCnt[c.type]!==undefined)typeCnt[c.type]++;if(naacCnt[c.naac]!==undefined)naacCnt[c.naac]++;});
  document.getElementById('col-stats').innerHTML=`
    <div class="col-stat"><div class="col-stat-n">${filtered.length}</div><div class="col-stat-l">Total colleges</div></div>
    <div class="col-stat" style="border-color:${TYPE_BG.Central}"><div class="col-stat-n" style="color:${TYPE_COLOR.Central}">${naacCnt[NAAC_APP]+naacCnt[NAAC_AP]}</div><div class="col-stat-l">NAAC A++ & A+</div></div>
    ${Object.entries(typeCnt).filter(([,v])=>v>0).map(([k,v])=>`<div class="col-stat" style="border-color:${TYPE_BG[k]}"><div class="col-stat-n" style="color:${TYPE_COLOR[k]}">${v}</div><div class="col-stat-l">${k}</div></div>`).join('')}`;

  // Group by district
  const byDistrict={};
  filtered.forEach(c=>{
    const d=c.district;
    if(!byDistrict[d]) byDistrict[d]=[];
    byDistrict[d].push(c);
  });

  let html='';
  Object.entries(byDistrict).sort((a,b)=>a[0].localeCompare(b[0])).forEach(([dist,colleges])=>{
    html+=`<div class="col-district-sec">
      <div class="col-district-hdr">
        <div class="col-district-name">📍 ${dist}, ${colleges[0].state}</div>
        <div class="col-district-n">${colleges.length} college${colleges.length>1?'s':''}</div>
      </div>
      <div class="col-grid">${colleges.map(c=>collegeCard(c)).join('')}</div>
    </div>`;
  });
  document.getElementById('college-out').innerHTML=html;
}

function collegeCard(c,mode='ug'){
  const tid='cp-'+c.short.replace(/[^a-z0-9]/gi,'');
  const typeCls=TYPE_CSS[c.type]||'ct-private';
  const naacCls=NAAC_CSS[c.naac]||'naac-other';
  const totalProgs=c.programGroups.reduce((a,g)=>a+g.programs.length,0);

  const progRows=c.programGroups.map(g=>`
    <div class="col-stream-grp">
      <div class="col-stream-lbl">${g.stream}</div>
      ${g.programs.map(p=>`
        <div class="col-prog-row">
          <div class="col-prog-name">${p.name}</div>
          <div class="col-prog-exam ${p.examCss}">${p.exam}</div>
        </div>`).join('')}
    </div>`).join('');

  const saveId = (c.short||c.name).toLowerCase().replace(/[^a-z0-9]+/g,'-');
  return `<div class="col-card">
    <div class="col-card-hdr">
      <div class="col-card-toprow">
        <div class="col-card-name">${c.name}</div>
        <button class="vz-save-btn" data-save-id="${saveId}" data-save-college='${encodeURIComponent(JSON.stringify({name:c.name,short:c.short,state:c.state,district:c.district,type:c.type}))}' onclick="vzToggleSaveCollege(this)">♡ Save</button>
        <div class="col-type-badge ${typeCls}">${c.type}</div>
      </div>
      <div class="col-card-meta">
        <span class="col-naac ${naacCls}">NAAC ${c.naac}</span>
        <span class="col-meta-tag">📍 ${c.district}</span>
        <span class="col-meta-tag">🏅 <strong>${c.nirf}</strong></span>
        <span class="col-meta-tag">🔗 ${c.affil}</span>
      </div>
      ${c.specialNote?`<div class="col-special-note">💡 ${c.specialNote}</div>`:''}
      <a class="col-website-link" href="https://${c.website}" target="_blank">🌐 ${c.website} ↗</a>
    </div>
    <div class="col-programs-hdr" onclick="toggleCollegeProgs('${tid}')">
      <span class="col-prg-label">📚 ${mode==='pg'?'PG':'UG'} Programs offered</span>
      <span class="col-prg-count">${totalProgs} program${totalProgs>1?'s':''}</span>
      <span class="col-prg-tog" id="ctog-${tid}">▼</span>
    </div>
    <div class="col-programs-list" id="${tid}">
      ${progRows}
    </div>
  </div>`;
}

async function vzToggleSaveCollege(btn){
  if(window.VazhiAuth && VazhiAuth.isConfigured() && !VazhiAuth.getUser()){
    VazhiAuth.openModal('signin');
    return;
  }
  const college=JSON.parse(decodeURIComponent(btn.dataset.saveCollege));
  const nowSaved=await VazhiAuth.toggleSaved(college);
  btn.classList.toggle('saved',nowSaved);
  btn.innerHTML=nowSaved?'♥ Saved':'♡ Save';
  vzUpdateShortlistToggle();
  if(showSavedOnly && collegeMode===COL_MODE_UG) renderColleges();
}

async function vzRefreshSavedButtons(){
  if(!window.VazhiAuth) return;
  const ids=await VazhiAuth.getSavedIds();
  document.querySelectorAll('.vz-save-btn[data-save-id]').forEach(b=>{
    const saved=ids.has(b.dataset.saveId);
    b.classList.toggle('saved',saved);
    b.innerHTML=saved?'♥ Saved':'♡ Save';
  });
  vzUpdateShortlistToggle();
}

async function vzUpdateShortlistToggle(){
  const btn=document.getElementById('cf-shortlist-toggle');
  if(!btn||!window.VazhiAuth) return;
  const ids=await VazhiAuth.getSavedIds();
  btn.querySelector('.vz-shortlist-count').textContent=ids.size;
  btn.classList.toggle('active',showSavedOnly);
}

function vzToggleShortlist(){
  showSavedOnly=!showSavedOnly;
  vzUpdateShortlistToggle();
  if(collegeMode===COL_MODE_UG) renderColleges();
}

if(window.VazhiAuth) VazhiAuth.onAuthChange(()=>vzRefreshSavedButtons());
else document.addEventListener('DOMContentLoaded',()=>{ if(window.VazhiAuth) VazhiAuth.onAuthChange(()=>vzRefreshSavedButtons()); });

function toggleCollegeProgs(id){
  const el=document.getElementById(id);
  const tog=document.getElementById('ctog-'+id);
  const open=el.style.display==='block';
  el.style.display=open?'none':'block';
  tog.textContent=open?'▼':'▲';
}

function updateDistrictFilter(){
  const state=document.getElementById('cf-state').value;
  const sel=document.getElementById('cf-district');
  const prev=sel.value;
  while(sel.options.length>1) sel.remove(1);
  const districts=[...new Set(
    allColleges()
      .filter(c=>!state||c.state===state)
      .map(c=>c.district)
  )].sort();
  districts.forEach(d=>{
    const opt=document.createElement('option');
    opt.value=d; opt.textContent=d;
    sel.appendChild(opt);
  });
  sel.value=districts.includes(prev)?prev:'';
}

function resetCollegeFilters(){
  ['cf-state','cf-type','cf-stream','cf-exam','cf-district'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('cf-search').value='';
  showSavedOnly=false;
  vzUpdateShortlistToggle();
  if(collegeMode===COL_MODE_PG) renderPGColleges(); else renderColleges();
}

