// This file is auto-loaded by index.html AFTER all section files.
// It exists so app.js can reference a combined count if needed.
// All section arrays (SECTION1_QUESTIONS, SECTION2_QUESTIONS, etc.) are
// loaded directly from their individual files and read by SECTION_META in app.js.
const ALL_QUESTIONS_COUNT = (
  (typeof SECTION1_QUESTIONS  !== 'undefined' ? SECTION1_QUESTIONS.length  : 0) +
  (typeof SECTION2_QUESTIONS  !== 'undefined' ? SECTION2_QUESTIONS.length  : 0) +
  (typeof SECTION3_QUESTIONS  !== 'undefined' ? SECTION3_QUESTIONS.length  : 0) +
  (typeof SECTION4_QUESTIONS  !== 'undefined' ? SECTION4_QUESTIONS.length  : 0) +
  (typeof SECTION5_QUESTIONS  !== 'undefined' ? SECTION5_QUESTIONS.length  : 0) +
  (typeof SECTION6_QUESTIONS  !== 'undefined' ? SECTION6_QUESTIONS.length  : 0) +
  (typeof SECTION8_QUESTIONS  !== 'undefined' ? SECTION8_QUESTIONS.length  : 0) +
  (typeof SECTION10_QUESTIONS !== 'undefined' ? SECTION10_QUESTIONS.length : 0)
);
console.log(`Python Placement Exam loaded: ${ALL_QUESTIONS_COUNT} questions`);
