// Vazhi — Glossary Modal
// Opens a searchable list of 40+ key terms with Tamil translations

function openGlossary(prefill=''){
  const modal=document.getElementById('glossary-modal');
  if(!modal) return;
  modal.classList.add('open');
  document.body.style.overflow='hidden';
  const inp=document.getElementById('glossary-search-input');
  if(inp){ inp.value=prefill; inp.focus(); }
  renderGlossary(prefill);
}

function closeGlossary(){
  const modal=document.getElementById('glossary-modal');
  if(!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow='';
}

function renderGlossary(search=''){
  const q=search.trim().toLowerCase();
  const filtered=(typeof GLOSSARY!=='undefined'?GLOSSARY:[]).filter(g=>
    !q ||
    g.term.toLowerCase().includes(q) ||
    g.full.toLowerCase().includes(q) ||
    g.desc.toLowerCase().includes(q)
  );
  const list=document.getElementById('glossary-list');
  if(!list) return;
  if(!filtered.length){
    list.innerHTML=`<div class="glossary-empty">No terms found for "<em>${search}</em>"</div>`;
    return;
  }
  list.innerHTML=filtered.map(g=>`
    <div class="glossary-row">
      <div class="glossary-term">${g.term}</div>
      <div class="glossary-full">${g.full}</div>
      ${g.tamil?`<div class="glossary-tamil">${g.tamil}</div>`:''}
      <div class="glossary-desc">${g.desc}</div>
    </div>`).join('');
}

// Close when clicking the backdrop
document.addEventListener('click',e=>{
  const modal=document.getElementById('glossary-modal');
  if(modal && e.target===modal) closeGlossary();
});

// Close on Escape
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    const modal=document.getElementById('glossary-modal');
    if(modal && modal.classList.contains('open')) closeGlossary();
  }
});
