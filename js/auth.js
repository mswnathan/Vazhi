// Vazhi — Auth + user data layer
// Wraps Firebase Auth (Email/Password + Google) and Firestore per-user storage.
// Falls back to localStorage for "save college" when Firebase is not configured,
// so the site keeps working before a project is set up.

(function () {
  const CFG = typeof FIREBASE_CONFIG !== 'undefined' ? FIREBASE_CONFIG : null;
  const CONFIGURED = CFG && CFG.apiKey && CFG.apiKey !== 'REPLACE_ME';

  let auth = null, db = null, currentUser = null;
  const listeners = [];

  // ── Init ──────────────────────────────────────────────────────────────
  function init() {
    if (!CONFIGURED) {
      console.info('[Vazhi auth] Firebase not configured — running in localStorage-only mode. Edit js/firebase-config.js to enable sign-in.');
      mountUI();
      return;
    }
    if (typeof firebase === 'undefined') {
      console.warn('[Vazhi auth] Firebase SDK not loaded.');
      return;
    }
    firebase.initializeApp(CFG);
    auth = firebase.auth();
    db = firebase.firestore();
    auth.onAuthStateChanged(u => {
      currentUser = u;
      savedIdsCache = null;
      renderHeaderButton();
      listeners.forEach(fn => { try { fn(u); } catch (e) { console.error(e); } });
    });
    mountUI();
  }

  // ── Public API ────────────────────────────────────────────────────────
  function onAuthChange(fn) { listeners.push(fn); if (currentUser !== null) fn(currentUser); }
  function getUser() { return currentUser; }

  async function signUpEmail(email, password, displayName) {
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    if (displayName) {
      await cred.user.updateProfile({ displayName });
      // onAuthStateChanged doesn't re-fire on profile updates — refresh the UI manually.
      currentUser = auth.currentUser;
      renderHeaderButton();
      listeners.forEach(fn => { try { fn(currentUser); } catch (e) { console.error(e); } });
    }
    await db.collection('users').doc(cred.user.uid).set({
      email, displayName: displayName || '', createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    try { await cred.user.sendEmailVerification(); } catch (_) {}
    return cred.user;
  }

  async function signInEmail(email, password) {
    const cred = await auth.signInWithEmailAndPassword(email, password);
    return cred.user;
  }

  async function signInGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const cred = await auth.signInWithPopup(provider);
    await db.collection('users').doc(cred.user.uid).set({
      email: cred.user.email, displayName: cred.user.displayName || '',
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    return cred.user;
  }

  async function resetPassword(email) { await auth.sendPasswordResetEmail(email); }
  async function signOut() {
    const m = document.getElementById('vz-user-menu');
    if (m) m.classList.remove('open');
    await auth.signOut();
  }

  // ── Saved colleges (per-user; localStorage fallback for guests) ──────
  const LS_KEY = 'vazhi_saved_colleges';
  let savedIdsCache = null;  // Set<id> — invalidated on auth change

  function getLocalSaved() {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch (_) { return []; }
  }
  function setLocalSaved(arr) { localStorage.setItem(LS_KEY, JSON.stringify(arr)); }

  async function getSavedIds() {
    if (savedIdsCache) return savedIdsCache;
    if (currentUser && db) {
      const snap = await db.collection('users').doc(currentUser.uid)
        .collection('savedColleges').get();
      savedIdsCache = new Set(snap.docs.map(d => d.id));
    } else {
      savedIdsCache = new Set(getLocalSaved());
    }
    return savedIdsCache;
  }

  async function isSaved(collegeId) {
    const ids = await getSavedIds();
    return ids.has(collegeId);
  }

  async function toggleSaved(college) {
    const id = collegeIdOf(college);
    const ids = await getSavedIds();
    if (currentUser && db) {
      const ref = db.collection('users').doc(currentUser.uid)
        .collection('savedColleges').doc(id);
      if (ids.has(id)) { await ref.delete(); ids.delete(id); return false; }
      await ref.set({
        name: college.name, short: college.short, state: college.state,
        district: college.district, type: college.type,
        savedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      ids.add(id); return true;
    }
    if (ids.has(id)) { ids.delete(id); setLocalSaved([...ids]); return false; }
    ids.add(id); setLocalSaved([...ids]); return true;
  }

  function collegeIdOf(c) {
    return (c.short || c.name).toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }

  // ── UI: header button + modal ────────────────────────────────────────
  function mountUI() {
    if (document.getElementById('vz-auth-btn')) return;
    const nav = document.querySelector('header.site-header .header-inner');
    if (!nav) return;
    const btn = document.createElement('button');
    btn.id = 'vz-auth-btn';
    btn.className = 'vz-auth-btn';
    btn.onclick = () => currentUser ? openMenu() : openModal('signin');
    nav.appendChild(btn);

    const menu = document.createElement('div');
    menu.id = 'vz-user-menu';
    menu.className = 'vz-user-menu';
    menu.innerHTML = `
      <div class="vz-user-menu-name" id="vz-user-menu-name"></div>
      <div class="vz-user-menu-email" id="vz-user-menu-email"></div>
      <hr>
      <button onclick="VazhiAuth.signOut()">Sign out</button>`;
    document.body.appendChild(menu);
    document.addEventListener('click', e => {
      if (menu.contains(e.target)) return;
      if (e.target.closest && e.target.closest('#vz-auth-btn')) return;
      menu.classList.remove('open');
    });

    document.body.insertAdjacentHTML('beforeend', modalHTML());
    renderHeaderButton();
  }

  function renderHeaderButton() {
    const btn = document.getElementById('vz-auth-btn');
    if (!btn) return;
    if (currentUser) {
      const initial = (currentUser.displayName || currentUser.email || '?')[0].toUpperCase();
      btn.innerHTML = `<span class="vz-auth-avatar">${initial}</span>`;
      btn.classList.add('signed-in');
      const nm = document.getElementById('vz-user-menu-name');
      const em = document.getElementById('vz-user-menu-email');
      if (nm) nm.textContent = currentUser.displayName || currentUser.email.split('@')[0];
      if (em) em.textContent = currentUser.email || '';
    } else {
      btn.innerHTML = `<span class="vz-auth-icon">👤</span><span class="vz-auth-label">Sign in</span>`;
      btn.classList.remove('signed-in');
    }
  }

  function openMenu() {
    const m = document.getElementById('vz-user-menu');
    const btn = document.getElementById('vz-auth-btn');
    const r = btn.getBoundingClientRect();
    m.style.top = (r.bottom + 8) + 'px';
    m.style.right = (window.innerWidth - r.right) + 'px';
    m.classList.toggle('open');
  }

  function openModal(tab) {
    if (!CONFIGURED) {
      alert('Sign-in is not yet configured for this site. Check js/firebase-config.js.');
      return;
    }
    document.getElementById('vz-auth-modal').classList.add('open');
    setAuthTab(tab || 'signin');
    setAuthError('');
  }
  function closeModal() { document.getElementById('vz-auth-modal').classList.remove('open'); }
  function setAuthTab(tab) {
    document.querySelectorAll('.vz-auth-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    document.getElementById('vz-form-signin').style.display = tab === 'signin' ? '' : 'none';
    document.getElementById('vz-form-signup').style.display = tab === 'signup' ? '' : 'none';
    document.getElementById('vz-form-reset').style.display = tab === 'reset' ? '' : 'none';
    setAuthError('');
  }
  function setAuthError(msg) {
    const e = document.getElementById('vz-auth-err');
    if (e) { e.textContent = msg || ''; e.style.display = msg ? 'block' : 'none'; }
  }

  function modalHTML() {
    return `
    <div class="vz-auth-modal" id="vz-auth-modal" onclick="if(event.target===this)VazhiAuth.closeModal()">
      <div class="vz-auth-box">
        <button class="vz-auth-x" onclick="VazhiAuth.closeModal()">✕</button>
        <div class="vz-auth-title">Welcome to Vazhi வழி</div>
        <div class="vz-auth-sub">Sign in to save colleges, track your psychometric report, and personalise your career guide.</div>

        <div class="vz-auth-tabs">
          <button class="vz-auth-tab active" data-tab="signin" onclick="VazhiAuth.setTab('signin')">Sign in</button>
          <button class="vz-auth-tab" data-tab="signup" onclick="VazhiAuth.setTab('signup')">Create account</button>
        </div>

        <button class="vz-auth-google" onclick="VazhiAuth.googleSignIn()">
          <span class="vz-google-g">G</span> Continue with Google
        </button>
        <div class="vz-auth-or"><span>or</span></div>

        <form id="vz-form-signin" onsubmit="VazhiAuth.submitSignIn(event)">
          <input type="email" name="email" placeholder="Email" required>
          <input type="password" name="password" placeholder="Password" required>
          <button type="submit" class="vz-auth-primary">Sign in</button>
          <button type="button" class="vz-auth-link" onclick="VazhiAuth.setTab('reset')">Forgot password?</button>
        </form>

        <form id="vz-form-signup" style="display:none" onsubmit="VazhiAuth.submitSignUp(event)">
          <input type="text" name="name" placeholder="Your name" required>
          <input type="email" name="email" placeholder="Email" required>
          <input type="password" name="password" placeholder="Password (min 6 chars)" required minlength="6">
          <button type="submit" class="vz-auth-primary">Create account</button>
          <div class="vz-auth-fine">By creating an account you agree to our terms. We'll never share your email.</div>
        </form>

        <form id="vz-form-reset" style="display:none" onsubmit="VazhiAuth.submitReset(event)">
          <div class="vz-auth-fine">Enter your email and we'll send a reset link.</div>
          <input type="email" name="email" placeholder="Email" required>
          <button type="submit" class="vz-auth-primary">Send reset link</button>
          <button type="button" class="vz-auth-link" onclick="VazhiAuth.setTab('signin')">← Back to sign in</button>
        </form>

        <div class="vz-auth-err" id="vz-auth-err"></div>
      </div>
    </div>`;
  }

  // ── Form handlers ────────────────────────────────────────────────────
  async function submitSignIn(ev) {
    ev.preventDefault(); setAuthError('');
    const f = ev.target;
    try { await signInEmail(f.email.value.trim(), f.password.value); closeModal(); }
    catch (e) { setAuthError(prettyErr(e)); }
  }
  async function submitSignUp(ev) {
    ev.preventDefault(); setAuthError('');
    const f = ev.target;
    try { await signUpEmail(f.email.value.trim(), f.password.value, f.name.value.trim()); closeModal(); }
    catch (e) { setAuthError(prettyErr(e)); }
  }
  async function submitReset(ev) {
    ev.preventDefault(); setAuthError('');
    const f = ev.target;
    try { await resetPassword(f.email.value.trim()); setAuthError('✓ Reset link sent. Check your email.'); }
    catch (e) { setAuthError(prettyErr(e)); }
  }
  async function googleSignIn() {
    setAuthError('');
    try { await signInGoogle(); closeModal(); }
    catch (e) { setAuthError(prettyErr(e)); }
  }
  function prettyErr(e) {
    const c = e && e.code || '';
    if (c === 'auth/email-already-in-use') return 'That email is already registered. Try signing in.';
    if (c === 'auth/invalid-email') return 'That email looks invalid.';
    if (c === 'auth/weak-password') return 'Password is too weak (use at least 6 characters).';
    if (c === 'auth/user-not-found' || c === 'auth/wrong-password' || c === 'auth/invalid-credential') return 'Email or password is incorrect.';
    if (c === 'auth/popup-closed-by-user') return 'Sign-in popup closed.';
    return e.message || 'Something went wrong. Try again.';
  }

  // ── Expose ───────────────────────────────────────────────────────────
  window.VazhiAuth = {
    init, onAuthChange, getUser, signOut,
    openModal, closeModal, setTab: setAuthTab,
    submitSignIn, submitSignUp, submitReset, googleSignIn,
    isSaved, toggleSaved, getSavedIds, isConfigured: () => CONFIGURED
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
