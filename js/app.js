// Vazhi — App State & Tab Switching
// Core navigation logic — rarely needs editing

// ── STATE ──
let view='grid', filters={subj:'',stream:'',search:''};
let ifSubj=null, ifAreas=new Set();
let _chips=[];
let findMode='interest';
let coursesMode='explore';

// ── TAB SWITCHING ──
function switchTab(t){
  // Reset Explore filters whenever navigating AWAY from Courses tab.
  // Exception: cgGoToStream() calls switchTab('courses') after pre-setting a filter — exempt.
  if(t!=='courses'){
    filters={subj:'',stream:'',search:''};
    ['f-subj','f-stream','f-search'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
    if(typeof updateChips==='function') updateChips();
  }
  // Reset scholarship filters whenever leaving the scholarships tab
  if(t!=='scholarships'){
    const schSrch=document.getElementById('sch-search');
    const schStr=document.getElementById('sch-stream');
    if(schSrch) schSrch.value='';
    if(schStr)  schStr.value='';
    if(typeof schFilter!=='undefined') schFilter={level:'all',stream:'',search:''};
    document.querySelectorAll('.sch-lvl-btn').forEach(b=>b.classList.toggle('active',b.dataset.lvl==='all'));
  }
  // Re-render scholarships with reset state when entering the tab
  if(t==='scholarships' && typeof renderScholarships==='function') renderScholarships();
  // Reset After UG filters whenever leaving the tab
  if(t!=='after-ug'){
    ['aug-ug','aug-cat','aug-search',
     'aug-pg-ef-stream','aug-pg-ef-search',
     'aug-pg-cf-type','aug-pg-cf-stream','aug-pg-cf-search'
    ].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  }
  // Reset to Pathways sub-tab and re-render when entering the tab
  if(t==='after-ug' && typeof setAugMode==='function') setAugMode('paths');
  // Clear Career Goal search whenever leaving the find tab
  if(t!=='find'){
    const cgInp=document.getElementById('cg-input');
    if(cgInp) cgInp.value='';
    const cgOut=document.getElementById('cg-out');
    if(cgOut) cgOut.innerHTML='';
    const cgSug=document.getElementById('cg-suggestions');
    if(cgSug){ cgSug.innerHTML=''; cgSug.style.display='none'; }
  }
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  const navBtn=document.querySelector(`[onclick="switchTab('${t}')"]`);
  if(navBtn) navBtn.classList.add('active');
  const tabEl=document.getElementById('tab-'+t);
  if(tabEl) tabEl.classList.add('active');
  // Show courses sub-nav only when Courses & Exams tab is active
  const csn=document.getElementById('courses-subnav');
  if(csn) csn.style.display=t==='courses'?'':'none';
  // Show filter bar only on Courses tab in explore mode
  const filterSec=document.getElementById('filter-section');
  if(filterSec) filterSec.classList.toggle('filter-active',t==='courses' && coursesMode==='explore');
  // Re-render when switching to courses/explore
  if(t==='courses' && coursesMode==='explore' && typeof renderExplore==='function') renderExplore();
  // Render psychometric tab whenever activated
  if(t==='psychometric' && typeof renderPsychometricTab==='function') renderPsychometricTab();
  window.scrollTo({top:0,behavior:'instant'});
  // Colleges is now a sub-mode of Courses — hide .main only in that sub-mode
  const showCollegesDiv=(t==='courses' && coursesMode==='colleges');
  const mainEl=document.querySelector('.main');
  if(mainEl) mainEl.style.display=showCollegesDiv?'none':'block';
  const colTab=document.getElementById('tab-colleges');
  if(colTab) colTab.classList.toggle('active',showCollegesDiv);
}

// ── FIND MY PATH SUB-MODES ──
function setFindMode(mode){
  findMode=mode;
  document.querySelectorAll('[data-fmode]').forEach(b=>b.classList.toggle('active',b.dataset.fmode===mode));
  document.getElementById('find-panel-interest').style.display=mode==='interest'?'':'none';
  document.getElementById('find-panel-career').style.display=mode==='career'?'':'none';
  if(mode==='interest' && typeof goIF1==='function') goIF1();
  if(mode==='interest'){
    const cgInp=document.getElementById('cg-input');
    if(cgInp) cgInp.value='';
    const cgOut=document.getElementById('cg-out');
    if(cgOut) cgOut.innerHTML='';
    const cgSug=document.getElementById('cg-suggestions');
    if(cgSug){ cgSug.innerHTML=''; cgSug.style.display='none'; }
  }
}

// ── COURSES & EXAMS SUB-MODES ──
function setCoursesMode(mode){
  coursesMode=mode;
  ['f-subj','f-stream','f-search',
   'ef-level','ef-stream','ef-subj','ef-search',
   'cf-state','cf-type','cf-stream','cf-exam','cf-district','cf-search'
  ].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  filters={subj:'',stream:'',search:''};
  if(typeof updateChips==='function') updateChips();
  document.querySelectorAll('[data-cmode]').forEach(b=>b.classList.toggle('active',b.dataset.cmode===mode));
  document.getElementById('courses-panel-explore').style.display=mode==='explore'?'':'none';
  document.getElementById('courses-panel-exams').style.display=mode==='exams'?'':'none';
  // Colleges sub-mode: proxy the hide-main + show-colleges behaviour
  const mainEl2=document.querySelector('.main');
  const colTab2=document.getElementById('tab-colleges');
  const inColleges=(mode==='colleges');
  if(mainEl2) mainEl2.style.display=inColleges?'none':'block';
  if(colTab2) colTab2.classList.toggle('active',inColleges);
  const filterSec=document.getElementById('filter-section');
  if(filterSec) filterSec.classList.toggle('filter-active',mode==='explore');
  if(mode==='explore' && typeof renderExplore==='function') renderExplore();
  if(mode==='exams' && typeof renderExams==='function') renderExams();
}

// ── SALARY: LPA → MONTHLY ──
function lpaToMonthly(salStr){
  const m=salStr.match(/₹([\d.]+)[–\-]([\d.]+)\s*LPA/);
  if(!m) return salStr;
  const lo=Math.round(parseFloat(m[1])*100000/12/1000);
  const hi=Math.round(parseFloat(m[2])*100000/12/1000);
  return salStr+` <span class="sal-monthly">(≈₹${lo}K–${hi}K/mo)</span>`;
}

// ── AFTER UG SUB-MODES ──
let augMode='paths';

function setAugMode(mode){
  augMode=mode;
  ['aug-ug','aug-cat','aug-search',
   'aug-pg-ef-stream','aug-pg-ef-search',
   'aug-pg-cf-type','aug-pg-cf-stream','aug-pg-cf-search'
  ].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.querySelectorAll('[data-augmode]').forEach(b=>b.classList.toggle('active',b.dataset.augmode===mode));
  document.getElementById('aug-panel-paths').style.display=mode==='paths'?'':'none';
  document.getElementById('aug-panel-pg-exams').style.display=mode==='pg-exams'?'':'none';
  document.getElementById('aug-panel-pg-colleges').style.display=mode==='pg-colleges'?'':'none';
  if(mode==='paths' && typeof renderAfterUG==='function') renderAfterUG();
  if(mode==='pg-exams' && typeof renderPGExamsForAug==='function') renderPGExamsForAug();
  if(mode==='pg-colleges' && typeof renderPGCollegesForAug==='function') renderPGCollegesForAug();
}

// ── EXAM → COLLEGES DEEP LINK ──
function goToCollegesForExam(examName){
  switchTab('courses');
  setCoursesMode('colleges');
  const el=document.getElementById('cf-exam');
  if(el) el.value=examName;
  renderColleges();
}

// ── SCHOLARSHIPS TOGGLE ──
function toggleScholarships(btn){
  const panel=btn.nextElementSibling;
  const arrow=btn.querySelector('.sch-arrow');
  const open=panel.style.display==='none';
  panel.style.display=open?'':'none';
  if(arrow) arrow.textContent=open?'▾':'▸';
}
