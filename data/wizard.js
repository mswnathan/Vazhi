// Vazhi — Home Wizard data
// Bilingual chip labels + strings for the 3-step home wizard.
// Step 3 chip data lives in data/subject-strengths.js (SUBJECT_STRENGTHS[]).

// ── Step 1: Class / stage ────────────────────────────────────────────────
// v1 is UG-only — "already a graduate" intentionally omitted (PG path deferred).
// Graduates should use the Talk to Us form for now.
const WZ_CLASS = [
  { id: 'class10',     en: 'Class 10',                ta: 'பத்தாம் வகுப்பு',     ico: '📘' },
  { id: 'class11_12',  en: 'Class 11 / 12',           ta: '11 / 12 வகுப்பு',     ico: '📗' },
  { id: 'finished12',  en: 'Just finished Class 12',  ta: '12 முடித்தேன்',        ico: '🎉' },
];

// ── Step 2: Subject combo (single-select) ─────────────────────────────────
// "subjects" ids match SUBJECT_STRENGTHS[].forSubjects[] in data/subject-strengths.js.
const WZ_SUBJ = [
  { id: 'PCM',     en: 'PCM',                          ta: 'PCM (கணிதம்+பௌதீகம்+வேதி)',      ico: '⚙' },
  { id: 'PCB',     en: 'PCB',                          ta: 'PCB (உயிரியல்+பௌதீகம்+வேதி)',    ico: '🧬' },
  { id: 'PCMB',    en: 'PCMB',                         ta: 'PCMB (அனைத்தும்)',                 ico: '🔬' },
  { id: 'Commerce',en: 'Commerce',                     ta: 'வணிகவியல்',                          ico: '📊' },
  { id: 'Arts',    en: 'Arts / Humanities',            ta: 'கலை / மனிதவியல்',                  ico: '🎨' },
  { id: 'unknown', en: "I don't know yet",             ta: 'எனக்குத் தெரியாது',                  ico: '🤔' },
];

// ── UI strings (bilingual) ────────────────────────────────────────────────
const WZ_T = {
  introTitle: { en: 'Find your path — in 3 steps',         ta: 'உங்கள் வழியை 3 படிகளில் கண்டுபிடியுங்கள்' },
  introSub:   { en: "We'll show the UG courses that match. Government and aided institutes only.",
                ta: 'பொருந்தும் பட்டப் படிப்புகளைக் காட்டுவோம். அரசு / உதவி பெற்ற நிறுவனங்கள் மட்டுமே.' },
  step1Q:     { en: 'Where are you now?',                  ta: 'எங்கு இருக்கிறீர்கள்?' },
  // Step 2 reads differently for Class 10 (still choosing) vs Class 11+ (already studying).
  step2Q_class10: { en: 'Which stream are you considering for Class 11–12?',
                    ta: '11–12 வகுப்புக்கு எந்த பிரிவு கருதுகிறீர்கள்?' },
  step2Q_class10Hint: { en: 'You haven\'t chosen yet — pick the one that interests you most.',
                        ta: 'இன்னும் தேர்ந்தெடுக்கவில்லை — மிகவும் ஆர்வம் உள்ளதைத் தேர்ந்தெடுக்கவும்.' },
  step2Q:     { en: 'What are your Class 12 subjects?',     ta: 'உங்கள் 12-ம் வகுப்பு பாடங்கள் என்ன?' },
  step3Q:     { en: 'What are you strongest in?',           ta: 'எதில் நீங்கள் வலிமையானவர்?' },
  step3Hint:  { en: 'Pick one — we\'ll show all the UG branches that lean on it.',
                ta: 'ஒன்றைத் தேர்ந்தெடுக்கவும் — அதையே சார்ந்த படிப்புகளை காட்டுவோம்.' },
  strengthDunno: { en: "I don't know my strength yet",       ta: 'எனக்கு என் வலிமை தெரியாது' },
  next:       { en: 'Next →',                                ta: 'அடுத்து →' },
  back:       { en: '← Back',                                ta: '← பின்செல்' },
  startOver:  { en: '← Start over',                          ta: '← மீண்டும் தொடங்கு' },
  pickAnother:{ en: 'Pick a different strength →',           ta: 'வேறு வலிமையை தேர்ந்தெடு →' },
  unknownCTA: { en: '🧠 Not sure what you like? Try our 5-min Know Yourself test',
                ta: '🧠 என்ன பிடிக்கும் என்று தெரியவில்லையா? 5 நிமிட சோதனை' },
};
