// Vazhi — Firebase config
// 1. Create a Firebase project: https://console.firebase.google.com/
// 2. Enable: Authentication → Sign-in method → Email/Password + Google
// 3. Enable: Firestore Database (start in production mode, paste rules from agents/firestore.rules)
// 4. Project Settings → General → "Your apps" → Web app → copy config below.
// 5. Add your site domain under Authentication → Settings → Authorized domains.
//
// This file is safe to commit — Firebase web API keys are public identifiers,
// not secrets. Security is enforced by Firestore rules + authorized domains.

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAd9V_hGS48rZ674M3U3JgzjzOSE7SXoho",
  authDomain: "vazhi-89b4b.firebaseapp.com",
  projectId: "vazhi-89b4b",
  storageBucket: "vazhi-89b4b.firebasestorage.app",
  messagingSenderId: "646958377277",
  appId: "1:646958377277:web:ab398b3174a570fb443d54"
};
