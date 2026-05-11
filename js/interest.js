// Vazhi — Find by Interest Tab (Tab 2)
// Step 1 → Step 2 → Step 3 flow logic

// ── Subject Picker (IGCSE / IB / any board) ────────────────────────────────

let pickerSelected = new Set();
let pickerOpen = false;

function toggleSubjPicker(){
  pickerOpen = !pickerOpen;
  const panel = document.getElementById('subj-picker');
  const btn   = document.getElementById('subj-picker-btn');
  const orRow = document.getElementById('subj-or-row');
  panel.classList.toggle('hidden', !pickerOpen);
  orRow.classList.toggle('hidden', pickerOpen);
  btn.textContent = pickerOpen
    ? '← Back to stream selection'
    : 'Studying IGCSE / IB or not sure which combination? Select your actual subjects →';
  if(pickerOpen){
    pickerSelected.clear();
    document.getElementById('subj-derived').classList.add('hidden');
    buildSubjectPickerUI();
  }
}

function buildSubjectPickerUI(){
  const categories = [...new Set(INDIVIDUAL_SUBJECTS.map(s => s.category))];
  document.getElementById('subj-chip-grid').innerHTML = categories.map(cat => `
    <div class="subj-cat-group">
      <div class="subj-cat-label">${cat}</div>
      <div class="subj-chips">${
        INDIVIDUAL_SUBJECTS.filter(s => s.category === cat).map(s =>
          `<button class="subj-chip${pickerSelected.has(s.id)?' selected':''}" id="chip-${s.id}" onclick="toggleSubjectChip('${s.id}')">${s.name}</button>`
        ).join('')
      }</div>
    </div>`).join('');
}

function toggleSubjectChip(id){
  if(pickerSelected.has(id)) pickerSelected.delete(id);
  else pickerSelected.add(id);
  const btn = document.getElementById('chip-' + id);
  if(btn) btn.classList.toggle('selected', pickerSelected.has(id));
  updateDerivedCombo();
}

function updateDerivedCombo(){
  const combo = deriveComboFromSubjects([...pickerSelected]);
  const wrap  = document.getElementById('subj-derived');
  const label = document.getElementById('subj-derived-label');
  if(combo){
    const g = SUBJECT_GROUPS.find(s => s.id === combo);
    label.textContent = `Your subjects match: ${g ? g.ico + ' ' + g.name : combo}`;
    wrap.classList.remove('hidden');
  } else {
    wrap.classList.add('hidden');
  }
}

function confirmSubjDerived(){
  const combo = deriveComboFromSubjects([...pickerSelected]);
  if(!combo) return;
  pickerOpen = false;
  document.getElementById('subj-picker').classList.add('hidden');
  document.getElementById('subj-or-row').classList.remove('hidden');
  document.getElementById('subj-picker-btn').textContent =
    'Studying IGCSE / IB or not sure which combination? Select your actual subjects →';
  pickerSelected.clear();
  selectSubj(combo);
}

// ── Subject Stream Cards ───────────────────────────────────────────────────

function buildSubjectCards(){
  const g=document.getElementById('scard-grid');
  g.innerHTML=SUBJECT_GROUPS.map(s=>`
    <div class="scard${ifSubj===s.id?' sel':''}" data-id="${s.id}" onclick="selectSubj('${s.id}')">
      <div class="sc-ico">${s.ico}</div>
      <div class="sc-name">${s.name}</div>
      <div class="sc-sub">${s.sub}</div>
    </div>`).join('');
}
function selectSubj(id){
  ifSubj=id==='Commerce+Maths'?'Commerce':id; ifAreas.clear();
  document.querySelectorAll('.scard').forEach(c=>c.classList.toggle('sel',c.dataset.id===id));
  goIF2();
}
function goIF1(){
  ifSubj=null; ifAreas.clear();
  document.querySelectorAll('.scard').forEach(c=>c.classList.remove('sel'));
  ['if1','if2','if3'].forEach(s=>document.getElementById(s).classList.remove('on'));
  document.getElementById('if1').classList.add('on');
}
function goIF2(){
  if(!ifSubj) return;
  ['if1','if2','if3'].forEach(s=>document.getElementById(s).classList.remove('on'));
  document.getElementById('if2').classList.add('on');
  document.getElementById('if2-subj-label').textContent=ifSubj;
  buildIACards();
}
function goIF2Fresh(){
  ifAreas.clear();
  goIF2();
}
function buildIACards(){
  const areas=INTEREST_AREAS[ifSubj]||INTEREST_AREAS['Any'];
  const g=document.getElementById('ia-grid');
  g.innerHTML=areas.map(a=>`
    <div class="iacard${ifAreas.has(a.id)?' sel':''}" data-id="${a.id}" onclick="toggleArea('${a.id}')">
      <div class="ia-ico">${a.ico}</div>
      <div class="ia-name">${a.name}</div>
      <div class="ia-desc">${a.desc}</div>
    </div>`).join('');
  updateIAInfo();
}
function toggleArea(id){
  if(ifAreas.has(id)) ifAreas.delete(id); else ifAreas.add(id);
  document.querySelectorAll('.iacard').forEach(c=>c.classList.toggle('sel',ifAreas.has(c.dataset.id)));
  updateIAInfo();
}
function updateIAInfo(){
  document.getElementById('ia-info').textContent=ifAreas.size===0?'Select at least one area':`${ifAreas.size} area${ifAreas.size>1?'s':''} selected`;
}
function showIFResults(){
  if(!ifAreas.size){document.getElementById('ia-info').textContent='Please select at least one area';return;}
  ['if1','if2','if3'].forEach(s=>document.getElementById(s).classList.remove('on'));
  document.getElementById('if3').classList.add('on');

  const areas=INTEREST_AREAS[ifSubj]||INTEREST_AREAS['Any'];
  const selAreas=areas.filter(a=>ifAreas.has(a.id));

  // tags
  document.getElementById('ir-tags').innerHTML=
    selAreas.map(a=>`<span class="ir-tag">${a.ico} ${a.name}</span>`).join('');

  // results
  const out=document.getElementById('ir-out');
  out.innerHTML=selAreas.map(area=>{
    // Special handling for "not sure yet" — show guidance + CTA instead of a fake course card
    if(area.id==='any-purpose'){
      return `<div class="ir-section">
        <div class="ir-sec-hdr">${area.ico} ${area.name}</div>
        <div class="insight-box">${area.insight}</div>
        <div class="ir-explore-cta">
          <p>Go back and select the fields that catch your eye — each one will show you real courses and career options. Or if you'd like to browse everything at once:</p>
          <button class="ir-explore-btn" onclick="switchTab('courses');setCoursesMode('explore')">Browse All Courses →</button>
        </div>
      </div>`;
    }
    const courses=area.courses;
    if(!courses.length) return '';
    return `<div class="ir-section">
      <div class="ir-sec-hdr">${area.ico} ${area.name}</div>
      <div class="insight-box">${area.insight}</div>
      <div class="cards">${courses.map(c=>courseCard(c,'')).join('')}</div>
    </div>`;
  }).join('');
}
