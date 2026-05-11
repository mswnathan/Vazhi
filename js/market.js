// Vazhi — Market Trends Tab (Tab 3)

function renderMarket(){
  // Trending
  document.getElementById('market-trending').innerHTML=`
    <div class="mcard">
      <div class="mcard-hdr"><span>🔥</span> Top ${TRENDING_COURSES.length} Trending Courses</div>
      ${TRENDING_COURSES.map(t=>{const b=BS[t.bc]||BS.accent;return`
        <div class="trend-item">
          <div class="trend-rank">#${t.rank}</div>
          <div class="trend-name">${t.name}</div>
          <div class="trend-badge" style="background:${b.bg};color:${b.c};border:1px solid ${b.bd}">${t.badge}</div>
        </div>`;}).join('')}
    </div>
    <div class="mcard">
      <div class="mcard-hdr"><span>📋</span> Why these are trending</div>
      ${TRENDING_COURSES.slice(0,7).map(t=>`
        <div class="trend-item">
          <div class="trend-name" style="font-size:12px;font-weight:600">#${t.rank} ${t.name}</div>
          <div style="font-size:11px;color:var(--text3)">${t.why}</div>
        </div>`).join('')}
    </div>`;

  // Salary chart
  const maxSal=Math.max(...SALARY_DATA.map(s=>s.max));
  document.getElementById('sal-chart').innerHTML=SALARY_DATA.map(s=>`
    <div class="sal-item">
      <div class="sal-field">${s.field}</div>
      <div class="sal-bar-wrap"><div class="sal-bar" style="width:${Math.round((s.max/maxSal)*100)}%"></div></div>
      <div class="sal-val">${s.label}</div>
    </div>`).join('');

  // Opportunities
  document.getElementById('opp-grid').innerHTML=OPPORTUNITIES.map(o=>`
    <div class="opp-card">
      <div class="opp-field">${o.field}</div>
      <div class="opp-reason">${o.reason}</div>
      <div class="opp-meter">
        <div class="opp-label" style="color:var(--accent);font-size:10px">Opportunity</div>
        <div class="opp-dots">${[1,2,3,4,5].map(i=>`<div class="dot${i<=o.score?' filled':''}"></div>`).join('')}</div>
      </div>
    </div>`).join('');
}
