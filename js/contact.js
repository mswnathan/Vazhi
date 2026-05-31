// Vazhi — "Talk to Vazhi" contact form
// Writes to Firestore `contact_requests` (if Firebase is configured), else falls
// back to a mailto: window. Designed for use *without* sign-in — rural users
// shouldn't have to create an account just to ask a question.
//
// Public API:
//   VazhiContact.mount(elementId, { source, prefillClass })
//   VazhiContact.openModal({ source })

(function () {
  const TO_EMAIL = 'mswnathan@gmail.com';

  function isFirebaseReady() {
    return typeof firebase !== 'undefined' &&
           firebase.apps && firebase.apps.length > 0 &&
           typeof firebase.firestore === 'function';
  }

  function formHTML(opts) {
    const cls = (opts && opts.prefillClass) || '';
    return `
      <div class="vc-card">
        <div class="vc-title">💬 Talk to Vazhi</div>
        <div class="vc-title-ta">எங்களை தொடர்பு கொள்ளுங்கள்</div>
        <div class="vc-sub">Have a question? Tell us a bit about yourself and we'll reply personally.</div>
        <form class="vc-form" onsubmit="return VazhiContact.submit(event)">
          <input type="hidden" name="source" value="${opts && opts.source || 'home-footer'}">
          <div class="vc-row">
            <input type="text" name="name" placeholder="Your name / உங்கள் பெயர்" required>
            <input type="text" name="klass" placeholder="Class / Year (e.g. Class 12)" value="${cls}">
          </div>
          <input type="text" name="district" placeholder="District / மாவட்டம்" required>
          <div class="vc-reach-label">How can we reach you? Give at least one ↓</div>
          <div class="vc-row">
            <input type="tel" name="phone" placeholder="Phone / WhatsApp">
            <input type="email" name="email" placeholder="Email">
          </div>
          <textarea name="question" placeholder="What would you like to ask?" rows="4" required></textarea>
          <div class="vc-actions">
            <button type="submit" class="vc-submit">Send / அனுப்பு →</button>
            <div class="vc-status" id="vc-status"></div>
          </div>
          <div class="vc-fine">We only use this to reply to you. Nothing is shared.</div>
        </form>
      </div>`;
  }

  function mount(elementId, opts) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.innerHTML = formHTML(opts || {});
  }

  function setStatus(form, msg, kind) {
    const el = form.querySelector('#vc-status');
    if (!el) return;
    el.textContent = msg || '';
    el.className = 'vc-status' + (kind ? ' vc-status-' + kind : '');
  }

  async function submit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const fd = new FormData(form);
    const data = {
      name:     (fd.get('name') || '').toString().trim(),
      klass:    (fd.get('klass') || '').toString().trim(),
      district: (fd.get('district') || '').toString().trim(),
      phone:    (fd.get('phone') || '').toString().trim(),
      email:    (fd.get('email') || '').toString().trim(),
      question: (fd.get('question') || '').toString().trim(),
      source:   (fd.get('source') || 'home-footer').toString(),
    };
    if (!data.phone && !data.email) {
      setStatus(form, 'Please give a phone or email so we can reply.', 'err');
      return false;
    }
    setStatus(form, 'Sending…');

    const submitBtn = form.querySelector('.vc-submit');
    if (submitBtn) submitBtn.disabled = true;

    try {
      if (isFirebaseReady()) {
        const db = firebase.firestore();
        const uid = (window.VazhiAuth && VazhiAuth.getUser && VazhiAuth.getUser()) ? VazhiAuth.getUser().uid : null;
        await db.collection('contact_requests').add({
          ...data,
          uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setStatus(form, '✓ Sent. We will reply soon. நன்றி!', 'ok');
        form.reset();
        if (submitBtn) submitBtn.disabled = false;
        return false;
      }
      throw new Error('firebase-not-ready');
    } catch (err) {
      console.warn('[VazhiContact] Firestore write failed, falling back to mailto:', err);
      openMailtoFallback(data);
      setStatus(form, 'Opened your email app as a fallback. You can also email ' + TO_EMAIL + '.', 'ok');
      if (submitBtn) submitBtn.disabled = false;
      return false;
    }
  }

  function openMailtoFallback(d) {
    const subject = 'Vazhi — Question from ' + (d.name || 'a visitor');
    const body =
      `Name: ${d.name}\n` +
      `Class / Year: ${d.klass}\n` +
      `District: ${d.district}\n` +
      `Phone: ${d.phone}\n` +
      `Email: ${d.email}\n\n` +
      `Question:\n${d.question}\n\n` +
      `— sent from Vazhi (${d.source})`;
    const href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  function openModal(opts) {
    let modal = document.getElementById('vc-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'vc-modal';
      modal.className = 'vc-modal';
      modal.innerHTML = `
        <div class="vc-modal-box">
          <button class="vc-modal-x" onclick="VazhiContact.closeModal()">✕</button>
          <div id="vc-modal-mount"></div>
        </div>`;
      modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
      document.body.appendChild(modal);
    }
    mount('vc-modal-mount', opts || { source: 'modal' });
    modal.classList.add('open');
  }

  function closeModal() {
    const m = document.getElementById('vc-modal');
    if (m) m.classList.remove('open');
  }

  window.VazhiContact = { mount, submit, openModal, closeModal };
})();
