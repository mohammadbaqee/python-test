// ─── CONFIG ───────────────────────────────────────────────────────────────────
// Fill these in after setting up EmailJS (free at emailjs.com)
const EMAILJS_SERVICE_ID = 'service_bqwxuu6';
const EMAILJS_TEMPLATE_ID = 'template_4x1jh0o';
const EMAILJS_PUBLIC_KEY = 'RjYuUZAChX6lFrUjE';
const REPORT_EMAIL = 'smdbaqee@gmail.com'; // fallback if user doesn't type one

// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
  candidateName: '',
  reportEmail: '',
  examDate: '',
  selectedSectionIds: [],
  allSections: [],          // [{id, name, questions}]
  currentSectionIndex: 0,
  currentQuestionIndex: 0,
  answers: {},              // { questionId: value }
  flagged: new Set(),
  sectionResults: [],       // [{sectionId, name, score, total, timeTaken, answers}]
  sectionStartTime: null,
  timerInterval: null,
  reviewingAfterSection: false,
};

// ─── SECTION METADATA ────────────────────────────────────────────────────────
const SECTION_META = [
  { id: 1, name: 'Python Basics', icon: '📦', questions: typeof SECTION1_QUESTIONS !== 'undefined' ? SECTION1_QUESTIONS : [] },
  { id: 2, name: 'Control Flow', icon: '🔀', questions: typeof SECTION2_QUESTIONS !== 'undefined' ? SECTION2_QUESTIONS : [] },
  { id: 3, name: 'Functions', icon: '⚙️', questions: typeof SECTION3_QUESTIONS !== 'undefined' ? SECTION3_QUESTIONS : [] },
  { id: 4, name: 'Data Structures', icon: '🗂️', questions: typeof SECTION4_QUESTIONS !== 'undefined' ? SECTION4_QUESTIONS : [] },
  { id: 5, name: 'OOP', icon: '🏗️', questions: typeof SECTION5_QUESTIONS !== 'undefined' ? SECTION5_QUESTIONS : [] },
  { id: 6, name: 'File Handling', icon: '📁', questions: typeof SECTION6_QUESTIONS !== 'undefined' ? SECTION6_QUESTIONS.filter(q => q.sectionId === 6) : [] },
  { id: 7, name: 'Exception Handling', icon: '⚠️', questions: typeof SECTION6_QUESTIONS !== 'undefined' ? SECTION6_QUESTIONS.filter(q => q.sectionId === 7) : [] },
  { id: 8, name: 'Modules & Libraries', icon: '📚', questions: typeof SECTION8_QUESTIONS !== 'undefined' ? SECTION8_QUESTIONS.filter(q => q.sectionId === 8) : [] },
  { id: 9, name: 'Advanced Python', icon: '🚀', questions: typeof SECTION8_QUESTIONS !== 'undefined' ? SECTION8_QUESTIONS.filter(q => q.sectionId === 9) : [] },
  { id: 10, name: 'Interview & Placement', icon: '🎯', questions: typeof SECTION10_QUESTIONS !== 'undefined' ? SECTION10_QUESTIONS : [] },
];

// ─── INIT ─────────────────────────────────────────────────────────────────────
window.onload = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

// ─── SCREEN UTILS ────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ─── LANDING ─────────────────────────────────────────────────────────────────
function goToSectionSelect() {
  const name = document.getElementById('candidate-name').value.trim();
  const email = document.getElementById('report-email').value.trim();
  if (!name) { alert('Please enter your name.'); return; }
  if (!email) { alert('Please enter your email.'); return; }
  state.candidateName = name;
  state.reportEmail = email;
  state.examDate = new Date().toLocaleString();
  buildSectionGrid();
  showScreen('screen-sections');
}

// ─── SECTION SELECT ───────────────────────────────────────────────────────────
function buildSectionGrid() {
  const grid = document.getElementById('section-grid');
  grid.innerHTML = '';
  SECTION_META.forEach(sec => {
    if (!sec.questions.length) return;
    const card = document.createElement('div');
    card.className = 'section-card selected';
    card.dataset.id = sec.id;
    card.innerHTML = `<div class="s-icon">${sec.icon}</div><div class="s-name">${sec.name}</div><div class="s-count">${sec.questions.length} questions</div>`;
    card.onclick = () => card.classList.toggle('selected');
    grid.appendChild(card);
  });
}

function toggleAllSections() {
  const cards = document.querySelectorAll('.section-card');
  const allSelected = [...cards].every(c => c.classList.contains('selected'));
  cards.forEach(c => allSelected ? c.classList.remove('selected') : c.classList.add('selected'));
}

function startExam() {
  const selected = [...document.querySelectorAll('.section-card.selected')].map(c => +c.dataset.id);
  if (!selected.length) { alert('Please select at least one section.'); return; }
  state.selectedSectionIds = selected;
  state.allSections = SECTION_META.filter(s => selected.includes(s.id) && s.questions.length);
  state.currentSectionIndex = 0;
  state.currentQuestionIndex = 0;
  state.answers = {};
  state.flagged = new Set();
  state.sectionResults = [];
  loadCurrentSection();
}

// ─── EXAM ─────────────────────────────────────────────────────────────────────
function loadCurrentSection() {
  state.currentQuestionIndex = 0;
  state.sectionStartTime = Date.now();
  startTimer();
  renderQuestion();
  showScreen('screen-exam');
}

function currentSection() { return state.allSections[state.currentSectionIndex]; }
function currentQuestions() { return currentSection().questions; }
function currentQuestion() { return currentQuestions()[state.currentQuestionIndex]; }

function renderQuestion() {
  const sec = currentSection();
  const qs = currentQuestions();
  const q = currentQuestion();
  const idx = state.currentQuestionIndex;

  document.getElementById('candidate-display').textContent = state.candidateName;
  document.getElementById('section-label').textContent = sec.name;

  const pct = ((idx + 1) / qs.length) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${idx + 1} / ${qs.length}`;

  document.getElementById('q-number').textContent = `Q${idx + 1}`;

  const badge = document.getElementById('q-type-badge');
  badge.className = 'q-type-badge ' + q.type;
  badge.textContent = { mcq: 'MCQ', msq: 'Multiple Select', coding: 'Coding', short: 'Short Answer' }[q.type] || q.type.toUpperCase();

  const diff = document.getElementById('q-difficulty');
  diff.className = 'q-difficulty ' + (q.difficulty || 'easy');
  diff.textContent = (q.difficulty || 'easy').charAt(0).toUpperCase() + (q.difficulty || 'easy').slice(1);

  const flagBtn = document.getElementById('flag-btn');
  flagBtn.classList.toggle('flagged', state.flagged.has(q.id));

  document.getElementById('question-text').innerHTML = formatQuestion(q.question);

  document.getElementById('options-area').style.display = '';
  document.getElementById('coding-area').style.display = 'none';
  document.getElementById('short-area').style.display = 'none';

  if (q.type === 'mcq' || q.type === 'msq') {
    renderOptions(q);
  } else if (q.type === 'coding') {
    document.getElementById('options-area').style.display = 'none';
    document.getElementById('coding-area').style.display = '';
    const saved = state.answers[q.id] || '';
    document.getElementById('code-editor').value = saved || (q.starterCode || '');
  } else if (q.type === 'short') {
    document.getElementById('options-area').style.display = 'none';
    document.getElementById('short-area').style.display = '';
    document.getElementById('short-answer').value = state.answers[q.id] || '';
  }

  renderDots();
  document.getElementById('btn-prev').disabled = idx === 0;
  document.getElementById('btn-next').textContent = idx === qs.length - 1 ? 'Review →' : 'Next →';
}

function formatQuestion(text) {
  // Wrap code blocks
  return text.replace(/```[\s\S]*?```/g, m => `<pre><code>${escHtml(m.slice(3, -3))}</code></pre>`)
    .replace(/`([^`]+)`/g, (_, c) => `<code>${escHtml(c)}</code>`);
}

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderOptions(q) {
  const area = document.getElementById('options-area');
  area.innerHTML = '';
  const saved = state.answers[q.id] || [];
  const labels = ['A', 'B', 'C', 'D', 'E'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (saved.includes(i) ? ' selected' : '');
    btn.innerHTML = `<span class="option-label">${labels[i]}</span><span>${escHtml(opt)}</span>`;
    btn.onclick = () => selectOption(q, i, btn);
    area.appendChild(btn);
  });
}

function selectOption(q, i, btn) {
  if (q.type === 'mcq') {
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state.answers[q.id] = [i];
  } else {
    btn.classList.toggle('selected');
    const selected = [...document.querySelectorAll('.option-btn.selected')].map((b, _) => {
      return [...document.querySelectorAll('.option-btn')].indexOf(b);
    });
    state.answers[q.id] = selected;
  }
  renderDots();
}

function saveCurrentTextAnswer() {
  const q = currentQuestion();
  if (q.type === 'coding') state.answers[q.id] = document.getElementById('code-editor').value;
  if (q.type === 'short') state.answers[q.id] = document.getElementById('short-answer').value;
}

function renderDots() {
  const qs = currentQuestions();
  const dots = document.getElementById('q-dots');
  dots.innerHTML = '';
  qs.forEach((q, i) => {
    const d = document.createElement('div');
    d.className = 'q-dot' +
      (i === state.currentQuestionIndex ? ' current' : '') +
      (state.flagged.has(q.id) ? ' flagged' : state.answers[q.id] ? ' answered' : '');
    d.title = `Q${i + 1}`;
    d.onclick = () => { saveCurrentTextAnswer(); state.currentQuestionIndex = i; renderQuestion(); };
    dots.appendChild(d);
  });
}

function prevQuestion() {
  saveCurrentTextAnswer();
  if (state.currentQuestionIndex > 0) { state.currentQuestionIndex--; renderQuestion(); }
}

function nextQuestion() {
  saveCurrentTextAnswer();
  const qs = currentQuestions();
  if (state.currentQuestionIndex < qs.length - 1) {
    state.currentQuestionIndex++;
    renderQuestion();
  } else {
    submitSection();
  }
}

function toggleFlag() {
  const q = currentQuestion();
  if (state.flagged.has(q.id)) state.flagged.delete(q.id);
  else state.flagged.add(q.id);
  document.getElementById('flag-btn').classList.toggle('flagged', state.flagged.has(q.id));
  renderDots();
}

// ─── TIMER ────────────────────────────────────────────────────────────────────
function startTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - state.sectionStartTime) / 1000);
    const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const s = String(elapsed % 60).padStart(2, '0');
    document.getElementById('exam-timer').textContent = `${m}:${s}`;
  }, 1000);
}

// ─── SUBMIT SECTION ──────────────────────────────────────────────────────────
function submitSection() {
  saveCurrentTextAnswer();
  clearInterval(state.timerInterval);
  const sec = currentSection();
  const timeTaken = Math.floor((Date.now() - state.sectionStartTime) / 1000);
  let score = 0;
  const answerLog = [];

  sec.questions.forEach(q => {
    const given = state.answers[q.id];
    let correct = false;
    if (q.type === 'mcq' || q.type === 'msq') {
      const g = (given || []).slice().sort().join(',');
      const c = (q.correct || []).slice().sort().join(',');
      correct = g === c;
      if (correct) score++;
    }
    answerLog.push({ q, given, correct });
  });

  state.sectionResults.push({
    sectionId: sec.id,
    name: sec.name,
    score,
    total: sec.questions.length,
    mcqTotal: sec.questions.filter(q => q.type === 'mcq' || q.type === 'msq').length,
    timeTaken,
    answerLog,
  });

  showSectionResult();
}

function showSectionResult() {
  const res = state.sectionResults[state.sectionResults.length - 1];
  document.getElementById('sr-section-name').textContent = res.name;
  const pct = Math.round((res.score / res.mcqTotal) * 100) || 0;
  document.getElementById('sr-score').textContent = `${res.score}/${res.mcqTotal}`;
  document.getElementById('sr-label').textContent = label(pct) + ` (${pct}% on auto-graded questions)`;

  const bd = document.getElementById('sr-breakdown');
  const mins = Math.floor(res.timeTaken / 60);
  const secs = res.timeTaken % 60;
  bd.innerHTML = `
    <div class="sr-row"><span>Total Questions</span><span>${res.total}</span></div>
    <div class="sr-row"><span>Auto-graded (MCQ/MSQ)</span><span>${res.mcqTotal}</span></div>
    <div class="sr-row"><span>Correct</span><span style="color:#22c55e">${res.score}</span></div>
    <div class="sr-row"><span>Wrong</span><span style="color:#ef4444">${res.mcqTotal - res.score}</span></div>
    <div class="sr-row"><span>Time Taken</span><span>${mins}m ${secs}s</span></div>
    <div class="sr-row"><span>Coding & Short Answer</span><span style="color:#f59e0b">Review answers</span></div>
  `;

  const isLast = state.currentSectionIndex >= state.allSections.length - 1;
  document.getElementById('btn-next-section').textContent = isLast ? 'See Final Results →' : 'Next Section →';
  showScreen('screen-section-result');
}

function label(pct) {
  if (pct >= 85) return '🌟 Excellent';
  if (pct >= 70) return '✅ Good';
  if (pct >= 50) return '📈 Average';
  return '📚 Needs Practice';
}

function reviewSection() {
  state.reviewingAfterSection = true;
  buildReview();
}

function exitReview() {
  showScreen('screen-section-result');
}

function buildReview() {
  const res = state.sectionResults[state.sectionResults.length - 1];
  document.getElementById('review-section-name').textContent = res.name;
  document.getElementById('btn-exit-review').textContent = 'Back to Results →';
  const container = document.getElementById('review-questions');
  container.innerHTML = '';
  res.answerLog.forEach((entry, i) => {
    container.appendChild(buildReviewCard(entry, i));
  });
  showScreen('screen-review');
}

function buildReviewCard(entry, i) {
  const { q, given, correct } = entry;
  const div = document.createElement('div');
  div.className = 'review-q';

  const typeBadge = `<span class="q-type-badge ${q.type}">${{ mcq: 'MCQ', msq: 'Multi-Select', coding: 'Coding', short: 'Short Answer' }[q.type]}</span>`;
  const status = (q.type === 'mcq' || q.type === 'msq')
    ? (correct ? '<span style="color:#22c55e">✓ Correct</span>' : '<span style="color:#ef4444">✗ Wrong</span>')
    : '<span style="color:#f59e0b">Manual Review</span>';

  div.innerHTML = `
    <div class="rq-top">${typeBadge}<strong>Q${i + 1}</strong>${status}</div>
    <div class="rq-text">${formatQuestion(q.question)}</div>
  `;

  if (q.type === 'mcq' || q.type === 'msq') {
    const labels = ['A', 'B', 'C', 'D', 'E'];
    q.options.forEach((opt, idx) => {
      const isGiven = (given || []).includes(idx);
      const isCorrect = (q.correct || []).includes(idx);
      const cls = isCorrect ? 'correct' : (isGiven ? 'wrong' : 'neutral');
      const r = document.createElement('div');
      r.className = 'review-option ' + cls;
      r.textContent = `${labels[idx]}. ${opt}`;
      div.appendChild(r);
    });
    const exp = document.createElement('div');
    exp.className = 'explanation-box';
    exp.textContent = '💡 ' + (q.explanation || '');
    div.appendChild(exp);
  } else if (q.type === 'coding' || q.type === 'short') {
    const ya = document.createElement('div');
    ya.className = 'your-answer-box';
    ya.textContent = 'Your answer:\n' + (given || '(not answered)');
    div.appendChild(ya);
    const ma = document.createElement('div');
    ma.className = 'model-answer-box';
    ma.textContent = 'Model Answer:\n' + (q.modelAnswer || q.answer || '');
    div.appendChild(ma);
  }
  return div;
}

function nextSection() {
  if (state.currentSectionIndex >= state.allSections.length - 1) {
    showFinalResults();
  } else {
    state.currentSectionIndex++;
    loadCurrentSection();
  }
}

// ─── FINAL RESULTS ────────────────────────────────────────────────────────────
function showFinalResults() {
  const totalMcq = state.sectionResults.reduce((s, r) => s + r.mcqTotal, 0);
  const totalScore = state.sectionResults.reduce((s, r) => s + r.score, 0);
  const pct = totalMcq ? Math.round((totalScore / totalMcq) * 100) : 0;

  document.getElementById('final-name').textContent = state.candidateName;
  document.getElementById('overall-score').textContent = `${totalScore} / ${totalMcq}`;
  document.getElementById('overall-label').textContent = label(pct) + ` — ${pct}% on auto-graded questions`;

  // Section breakdown
  const bd = document.getElementById('section-breakdown');
  bd.innerHTML = '<h3>Section Breakdown</h3>';
  state.sectionResults.forEach(res => {
    const p = res.mcqTotal ? Math.round((res.score / res.mcqTotal) * 100) : 0;
    bd.innerHTML += `
      <div class="breakdown-row">
        <span class="breakdown-name">${res.name}</span>
        <div class="breakdown-bar-wrap"><div class="breakdown-bar" style="width:${p}%"></div></div>
        <span class="breakdown-score">${res.score}/${res.mcqTotal} (${p}%)</span>
      </div>`;
  });

  // Tips
  const weak = state.sectionResults.filter(r => r.mcqTotal && (r.score / r.mcqTotal) < 0.6).map(r => r.name);
  const tips = document.getElementById('tips-box');
  if (weak.length) {
    tips.innerHTML = `<h3>Focus Areas for Revision</h3><ul>${weak.map(w => `<li>${w} — score below 60%, needs more practice</li>`).join('')}</ul>`;
  } else {
    tips.innerHTML = `<h3>Great Work!</h3><ul><li>Strong performance across all sections. Focus on timed mock tests next.</li></ul>`;
  }

  showScreen('screen-final');
}

// ─── PDF ──────────────────────────────────────────────────────────────────────
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageW = 210, pageH = 297, margin = 20;
  let y = margin;

  const addLine = (text, size = 11, bold = false, color = [0, 0, 0]) => {
    if (y > pageH - margin) { doc.addPage(); y = margin; }
    doc.setFontSize(size);
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setTextColor(...color);
    doc.text(text, margin, y);
    y += size * 0.5 + 2;
  };

  const totalMcq = state.sectionResults.reduce((s, r) => s + r.mcqTotal, 0);
  const totalScore = state.sectionResults.reduce((s, r) => s + r.score, 0);
  const pct = totalMcq ? Math.round((totalScore / totalMcq) * 100) : 0;

  addLine('PYTHON PLACEMENT PREP — EXAM REPORT', 16, true, [99, 102, 241]);
  y += 4;
  addLine(`Candidate: ${state.candidateName}`, 12, true);
  addLine(`Date: ${state.examDate}`, 11, false, [100, 100, 100]);
  addLine(`Overall Score: ${totalScore}/${totalMcq} (${pct}%)`, 13, true);
  y += 4;

  addLine('SECTION BREAKDOWN', 12, true, [99, 102, 241]);
  y += 2;
  state.sectionResults.forEach(res => {
    const p = res.mcqTotal ? Math.round((res.score / res.mcqTotal) * 100) : 0;
    const mins = Math.floor(res.timeTaken / 60), secs = res.timeTaken % 60;
    addLine(`${res.name}: ${res.score}/${res.mcqTotal} (${p}%) — Time: ${mins}m${secs}s`, 11);
  });
  y += 6;

  addLine('DETAILED ANSWER REVIEW', 12, true, [99, 102, 241]);
  y += 2;

  state.sectionResults.forEach(res => {
    addLine(`— ${res.name.toUpperCase()} —`, 11, true, [99, 102, 241]);
    res.answerLog.forEach((entry, i) => {
      const { q, given, correct } = entry;
      if (y > pageH - 30) { doc.addPage(); y = margin; }
      const statusMark = (q.type === 'mcq' || q.type === 'msq') ? (correct ? '✓' : '✗') : '~';
      const shortQ = (q.question || '').replace(/```[\s\S]*?```/g, '[code]').substring(0, 90);
      addLine(`Q${i + 1} [${statusMark}] ${shortQ}`, 9, false,
        (q.type === 'mcq' || q.type === 'msq') ? (correct ? [34, 197, 94] : [239, 68, 68]) : [245, 158, 11]);
      if (q.type === 'coding' || q.type === 'short') {
        const ans = (given || '(blank)').substring(0, 100);
        addLine(`  Your: ${ans}`, 8, false, [148, 163, 184]);
      }
    });
    y += 3;
  });

  doc.save(`Python_Exam_${state.candidateName.replace(/\s+/g, '_')}.pdf`);
}

// ─── EMAIL REPORT ─────────────────────────────────────────────────────────────
function emailReport() {
  const totalMcq = state.sectionResults.reduce((s, r) => s + r.mcqTotal, 0);
  const totalScore = state.sectionResults.reduce((s, r) => s + r.score, 0);
  const pct = totalMcq ? Math.round((totalScore / totalMcq) * 100) : 0;

  const breakdown = state.sectionResults.map(r => {
    const p = r.mcqTotal ? Math.round((r.score / r.mcqTotal) * 100) : 0;
    return `${r.name}: ${r.score}/${r.mcqTotal} (${p}%)`;
  }).join('\n');

  const params = {
    to_email: state.reportEmail,
    candidate_name: state.candidateName,
    exam_date: state.examDate,
    overall_score: `${totalScore}/${totalMcq} (${pct}%)`,
    performance: label(pct),
    breakdown: breakdown,
  };

  const statusEl = document.getElementById('email-status') || (() => {
    const el = document.createElement('p');
    el.id = 'email-status';
    el.className = 'email-status';
    document.querySelector('.final-actions').after(el);
    return el;
  })();

  statusEl.textContent = 'Sending report...';
  statusEl.className = 'email-status';

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
    .then(() => {
      statusEl.textContent = `✓ Report sent to ${state.reportEmail}`;
      statusEl.className = 'email-status success';
    })
    .catch(err => {
      console.error(err);
      statusEl.textContent = '✗ Email failed. Please download the PDF instead.';
      statusEl.className = 'email-status error';
    });
}

// ─── RESTART ──────────────────────────────────────────────────────────────────
function restartExam() {
  state.answers = {};
  state.flagged = new Set();
  state.sectionResults = [];
  showScreen('screen-landing');
}
