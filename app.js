// ═══════════════════════════════════════════
// HISTORYLEARN — Core Application
// ═══════════════════════════════════════════

const STORAGE = 'historylearn';

// ═══ STATE ═══
let done = new Set(JSON.parse(localStorage.getItem(`${STORAGE}-done`) || '[]'));
let collapsed = JSON.parse(localStorage.getItem(`${STORAGE}-collapsed`) || '{}');
let xp = parseInt(localStorage.getItem(`${STORAGE}-xp`) || '0');
let streak = parseInt(localStorage.getItem(`${STORAGE}-streak`) || '0');
let lastVisit = localStorage.getItem(`${STORAGE}-lastVisit`) || '';
let chatHistory = JSON.parse(localStorage.getItem(`${STORAGE}-chat`) || '[]');
let apiKey = localStorage.getItem(`${STORAGE}-apiKey`) || '';
let chatMode = 'tutor'; // 'tutor' or 'whatif'

// Streak logic
const today = new Date().toDateString();
if (lastVisit) {
  const last = new Date(lastVisit);
  const diff = Math.floor((new Date(today) - last) / 86400000);
  if (diff === 1) { streak++; }
  else if (diff > 1) { streak = 1; }
} else {
  streak = 1;
}
localStorage.setItem(`${STORAGE}-lastVisit`, today);
localStorage.setItem(`${STORAGE}-streak`, streak);

function save() {
  localStorage.setItem(`${STORAGE}-done`, JSON.stringify([...done]));
  localStorage.setItem(`${STORAGE}-xp`, xp);
  localStorage.setItem(`${STORAGE}-streak`, streak);
}

function addXP(amount) {
  xp += amount;
  document.getElementById('xp-val').textContent = xp;
  save();
}

// ═══════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    // Refresh AI panel if open so context updates
    const aiPanel = document.getElementById('ai-panel');
    if (aiPanel && aiPanel.classList.contains('visible')) renderAIPanel();
  });
});

// ═══════════════════════════════════════════
// THEME
// ═══════════════════════════════════════════
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('theme-btn').textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem(`${STORAGE}-theme`, isDark ? 'light' : 'dark');
}

// Load saved theme
(function() {
  const saved = localStorage.getItem(`${STORAGE}-theme`);
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-btn').textContent = '☀️';
  }
})();

// ═══════════════════════════════════════════
// SKILL TREE (DUO PATH)
// ═══════════════════════════════════════════
function toggleUnit(num) {
  collapsed[num] = !collapsed[num];
  localStorage.setItem(`${STORAGE}-collapsed`, JSON.stringify(collapsed));
  buildSkillTree();
}

let currentLesson = null;
let lastScrollY = 0;

function openLesson(unitNum, name, sub) {
  currentLesson = { unitNum, name, sub };
  lastScrollY = window.scrollY;

  document.getElementById('lesson-list').style.display = 'none';
  document.getElementById('lesson-reader').style.display = 'block';
  document.getElementById('lesson-title').textContent = name;
  document.getElementById('lesson-sub').textContent = sub;

  const content = L[name] || simpleContent(name, sub);
  document.getElementById('lesson-content').innerHTML = content;
  buildTopicDetails(name);

  const id = unitNum + '-' + name;
  const btn = document.getElementById('lesson-done-btn');
  if (done.has(id)) {
    btn.textContent = '✓ Already Complete — Close';
  } else {
    btn.textContent = '✓ Mark Complete & Continue';
  }

  window.scrollTo(0, 0);
}

function closeLesson() {
  document.getElementById('lesson-reader').style.display = 'none';
  document.getElementById('lesson-list').style.display = 'block';
  document.getElementById('ai-panel').classList.remove('visible');
  window.scrollTo(0, lastScrollY);
}

function getCurrentContext() {
  // Returns a human-readable context string for the AI
  if (currentLesson && document.getElementById('lesson-reader').style.display === 'block') {
    return { type: 'lesson', label: currentLesson.name, sub: currentLesson.sub };
  }
  const activeTab = document.querySelector('.tab-panel.active');
  if (activeTab) {
    const map = {
      'tab-explore': { type: 'explore', label: 'Browsing the curriculum' },
      'tab-map': { type: 'map', label: 'Viewing the coverage map' },
      'tab-timeline': { type: 'timeline', label: 'Browsing the timeline' },
      'tab-flashcards': { type: 'flashcards', label: 'Studying flashcards' },
      'tab-glossary': { type: 'glossary', label: 'Browsing the glossary' },
      'tab-sources': { type: 'sources', label: 'Reading primary sources' },
      'tab-resources': { type: 'resources', label: 'Browsing resources' },
      'tab-chat': { type: 'chat', label: 'In the chat tab' },
    };
    return map[activeTab.id] || { type: 'general', label: 'Exploring world history' };
  }
  return { type: 'general', label: 'Exploring world history' };
}

// ═══════════════════════════════════════════
// AI LESSON HELPER
// ═══════════════════════════════════════════
function toggleAIPanel() {
  const panel = document.getElementById('ai-panel');
  panel.classList.toggle('visible');
  if (panel.classList.contains('visible')) {
    renderAIPanel();
  }
}

function renderAIPanel() {
  const body = document.getElementById('ai-panel-body');
  const titleEl = document.getElementById('ai-panel-title');

  if (!apiKey) {
    titleEl.innerHTML = '✨ Connect AI';
    body.innerHTML = `
      <div style="padding:8px 0 4px">
        <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.6;margin-bottom:16px">
          Enter your Anthropic API key to activate the AI tutor. The key stays in your browser — it's never sent anywhere except directly to Anthropic.
        </p>
        <div class="ai-input-row">
          <input id="ai-apikey-input" type="password" placeholder="sk-ant-..." onkeydown="if(event.key==='Enter'){event.preventDefault();saveAPIKeyFromPanel()}">
          <button onclick="saveAPIKeyFromPanel()">Connect</button>
        </div>
        <p style="font-size:0.75rem;color:var(--muted);margin-top:14px;line-height:1.55">
          Get a key at <a href="https://console.anthropic.com/" target="_blank" rel="noopener" style="color:var(--gold);font-weight:600">console.anthropic.com</a>. Once connected, the ✨ button works from any tab in the app.
        </p>
      </div>`;
    setTimeout(() => document.getElementById('ai-apikey-input')?.focus(), 80);
    return;
  }

  const ctx = getCurrentContext();
  titleEl.innerHTML = '✨ AI Tutor';

  const contextChip = ctx.label ? `<div style="font-size:0.72rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;font-weight:700;margin-bottom:12px">📍 ${escapeHTML(ctx.label)}</div>` : '';

  // Different action sets per context
  let actions;
  if (ctx.type === 'lesson') {
    actions = [
      { type: 'hint',    icon: '💡', label: 'Get a Hint',        desc: 'Key insight for this topic' },
      { type: 'explain', icon: '📚', label: 'Explain Simply',    desc: 'Break it down plainly' },
      { type: 'connect', icon: '🔗', label: 'Make Connections',  desc: 'Link to other eras' },
      { type: 'ask',     icon: '💬', label: 'Ask a Question',    desc: 'Your own question' },
    ];
  } else {
    actions = [
      { type: 'suggest', icon: '🎯', label: 'What should I learn?', desc: 'Suggest a next topic based on your progress' },
      { type: 'quiz',    icon: '🧠', label: 'Quiz me',              desc: 'A quick question to test what you know' },
      { type: 'whatif',  icon: '🔮', label: 'What if?',             desc: 'Explore a counterfactual scenario' },
      { type: 'ask',     icon: '💬', label: 'Ask a Question',       desc: 'Any history question' },
    ];
  }

  body.innerHTML = `
    ${contextChip}
    <div class="ai-actions">
      ${actions.map(a => `
        <button class="ai-action-btn" onclick="aiAction('${a.type}')">
          <span class="ai-action-icon">${a.icon}</span>
          <span class="ai-action-label">${a.label}</span>
          <span class="ai-action-desc">${a.desc}</span>
        </button>`).join('')}
    </div>
    <div id="ai-response-area"></div>`;
}

function saveAPIKeyFromPanel() {
  const inp = document.getElementById('ai-apikey-input');
  const v = inp?.value.trim();
  if (!v) return;
  apiKey = v;
  localStorage.setItem(`${STORAGE}-apiKey`, v);
  updateAIButtonState();
  renderAIPanel();
  // Also refresh the Chat tab
  buildChat();
}

function showAPIKeySetup() {
  const panel = document.getElementById('ai-panel');
  if (!panel.classList.contains('visible')) panel.classList.add('visible');
  const body = document.getElementById('ai-panel-body');
  const titleEl = document.getElementById('ai-panel-title');
  titleEl.innerHTML = '⚙️ API Key';

  body.innerHTML = `
    <div style="padding:8px 0 4px">
      <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.6;margin-bottom:14px">
        ${apiKey ? 'Your API key is set. You can replace it or remove it below.' : 'Enter your Anthropic API key to activate AI features.'}
      </p>
      <div class="ai-input-row">
        <input id="ai-apikey-input" type="password" placeholder="${apiKey ? '•••• (click below to reveal or replace)' : 'sk-ant-...'}" onkeydown="if(event.key==='Enter'){event.preventDefault();saveAPIKeyFromPanel()}">
        <button onclick="saveAPIKeyFromPanel()">Save</button>
      </div>
      ${apiKey ? `<button class="btn btn-secondary" style="margin-top:14px" onclick="removeAPIKey()">Remove API key</button>` : ''}
      <p style="font-size:0.75rem;color:var(--muted);margin-top:14px;line-height:1.55">
        Get a key at <a href="https://console.anthropic.com/" target="_blank" rel="noopener" style="color:var(--gold);font-weight:600">console.anthropic.com</a>. Keys are stored only in your browser's localStorage.
      </p>
    </div>`;
}

function removeAPIKey() {
  apiKey = '';
  localStorage.removeItem(`${STORAGE}-apiKey`);
  updateAIButtonState();
  renderAIPanel();
  buildChat();
}

function updateAIButtonState() {
  const btn = document.getElementById('ai-helper-btn');
  if (!btn) return;
  if (!apiKey) {
    btn.classList.add('no-api-key');
    btn.title = 'AI Tutor — click to connect your API key';
  } else {
    btn.classList.remove('no-api-key');
    btn.title = 'AI Tutor — ask anything';
  }
}

async function aiAction(type) {
  const area = document.getElementById('ai-response-area');

  if (type === 'ask') {
    area.innerHTML = `
      <div class="ai-input-row">
        <input id="ai-question-input" placeholder="What do you want to know?" onkeydown="if(event.key==='Enter'){event.preventDefault();askAIQuestion()}">
        <button onclick="askAIQuestion()">Ask</button>
      </div>`;
    setTimeout(() => document.getElementById('ai-question-input')?.focus(), 80);
    return;
  }

  if (!apiKey) {
    area.innerHTML = `<div class="ai-response">To get AI-powered help, set up your API key in the <strong>Chat</strong> tab.</div>`;
    return;
  }

  area.innerHTML = `<div class="ai-response"><div class="ai-loading"><div class="ai-spinner"></div>Thinking...</div></div>`;

  const ctx = getCurrentContext();
  const topic = currentLesson ? currentLesson.name : '';
  const sub = currentLesson ? currentLesson.sub : '';

  // Build progress summary for "suggest"
  const doneList = [...done].map(id => {
    const idx = id.indexOf('-');
    return id.substring(idx + 1);
  });

  let prompt = '';
  if (type === 'hint') {
    prompt = `Give a short, focused hint about the topic "${topic}" (${sub}) to help a history student grasp the core idea. Start with the single most important insight. 2-3 sentences max. Use **bold** for key terms.`;
  } else if (type === 'explain') {
    prompt = `Explain the topic "${topic}" (${sub}) in plain, simple language — like talking to a smart friend who's never heard of it. Use an analogy if it helps. Keep it to 2 short paragraphs. Use **bold** for key terms.`;
  } else if (type === 'connect') {
    prompt = `List 3 interesting historical connections between "${topic}" (${sub}) and OTHER eras or events. Format as a short bulleted list. Each bullet is one vivid connection — cause, echo, or parallel. Start each with **bold** keywords.`;
  } else if (type === 'suggest') {
    const completedSummary = doneList.length > 0 ? `They have completed: ${doneList.slice(0, 15).join('; ')}${doneList.length > 15 ? '...' : ''}.` : 'They have not completed any topics yet.';
    prompt = `A student is using a world history learning app covering 7 eras from prehistory to today. ${completedSummary}\n\nSuggest ONE specific topic they should tackle next, and explain in 2-3 sentences why it's the right next step. Pick something that connects to what they've already learned, or fills an interesting gap. Use **bold** for the topic name.`;
  } else if (type === 'quiz') {
    const completedSummary = doneList.length > 0 ? `Topics they've studied: ${doneList.slice(0, 10).join('; ')}.` : 'They are just getting started.';
    prompt = `${completedSummary}\n\nAsk ONE sharp, interesting quiz question about world history. Make it thought-provoking, not just memorisation. Format:\n\n**Question:** <question>\n\nThen wait — don't give the answer yet. End with: *Reply with your guess!*`;
  } else if (type === 'whatif') {
    prompt = `Generate a vivid "What if?" counterfactual question about world history. Something genuinely interesting to think about — not trivial. Format:\n\n**What if:** <scenario>\n\nThen give 2-3 sentences exploring what might have changed. Use **bold** for key historical figures or events.`;
  }

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        system: 'You are a sharp, engaging world history tutor helping a student inside a lesson. Be concise, vivid, and specific. Use markdown: **bold** for key terms, bullet points where useful.',
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    const data = await res.json();
    if (data.content && data.content[0]) {
      area.innerHTML = `<div class="ai-response">${formatAI(data.content[0].text)}</div>`;
      addXP(3);
    } else {
      area.innerHTML = `<div class="ai-response">Error: ${escapeHTML(data.error?.message || 'Something went wrong.')}</div>`;
    }
  } catch (e) {
    area.innerHTML = `<div class="ai-response">Network error — check your connection.</div>`;
  }
}

async function askAIQuestion() {
  const input = document.getElementById('ai-question-input');
  if (!input) return;
  const q = input.value.trim();
  if (!q) return;

  const area = document.getElementById('ai-response-area');
  if (!apiKey) {
    area.innerHTML = `<div class="ai-response">To get AI-powered help, set up your API key in the <strong>Chat</strong> tab.</div>`;
    return;
  }

  area.innerHTML = `<div class="ai-response"><div class="ai-loading"><div class="ai-spinner"></div>Thinking...</div></div>`;

  const ctx = currentLesson ? `The student is currently studying: "${currentLesson.name}" — ${currentLesson.sub}.` : '';
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 600,
        system: 'You are a sharp, engaging world history tutor. Be concise and specific. Use **bold** for key terms and bullet points where useful. Aim for 2-3 short paragraphs.',
        messages: [{ role: 'user', content: `${ctx}\n\nQuestion: ${q}` }],
      }),
    });
    const data = await res.json();
    if (data.content && data.content[0]) {
      area.innerHTML = `<div class="ai-response">${formatAI(data.content[0].text)}</div>`;
      addXP(5);
    } else {
      area.innerHTML = `<div class="ai-response">Error: ${escapeHTML(data.error?.message || 'Something went wrong.')}</div>`;
    }
  } catch (e) {
    area.innerHTML = `<div class="ai-response">Network error — check your connection.</div>`;
  }
}

function formatAI(text) {
  return escapeHTML(text)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '• $1')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
}

function completeLessonAndClose() {
  if (currentLesson) {
    const id = currentLesson.unitNum + '-' + currentLesson.name;
    if (!done.has(id)) {
      done.add(id);
      addXP(25);
      save();
    }
  }
  closeLesson();
  buildSkillTree();
  buildCoverageMap();
  updateStats();
}

// Mini Quiz Handler
function checkMiniQuiz(btn) {
  const quiz = btn.closest('.mini-quiz');
  if (quiz.dataset.answered === 'true') return;
  quiz.dataset.answered = 'true';

  const isCorrect = btn.dataset.correct === 'true';
  const feedback = quiz.querySelector('.mini-quiz-feedback');
  const allBtns = quiz.querySelectorAll('.mini-quiz-opt');

  allBtns.forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === 'true') b.classList.add('correct');
    else if (b === btn && !isCorrect) b.classList.add('wrong');
  });

  if (isCorrect) {
    feedback.textContent = '✓ Correct!';
    feedback.className = 'mini-quiz-feedback show correct-fb';
    addXP(5);
  } else {
    feedback.textContent = '✗ Not quite. The correct answer is highlighted.';
    feedback.className = 'mini-quiz-feedback show wrong-fb';
  }
}

let currentView = 'journey';
let outlineCollapsed = JSON.parse(localStorage.getItem(`${STORAGE}-outlineCollapsed`) || '{}');

function setView(v) {
  currentView = v;
  document.querySelectorAll('.view-toggle-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === v);
  });
  document.getElementById('journey-view').classList.toggle('active', v === 'journey');
  document.getElementById('outline-view').classList.toggle('active', v === 'outline');
  if (v === 'outline') buildOutline();
}

function toggleOutlineEra(num) {
  outlineCollapsed[num] = !outlineCollapsed[num];
  localStorage.setItem(`${STORAGE}-outlineCollapsed`, JSON.stringify(outlineCollapsed));
  buildOutline();
}

function buildOutline() {
  const totalTopics = units.reduce((s, u) => s + u.nodes.length, 0);
  const totalSubtopics = units.reduce((s, u) => s + u.nodes.reduce((ss, n) => ss + (n.subtopics?.length || 0), 0), 0);
  const doneTopics = [...done].length;

  let h = `<div class="outline-summary">
    <div class="outline-stat"><div class="outline-stat-num">${units.length}</div><div class="outline-stat-label">Eras</div></div>
    <div class="outline-stat"><div class="outline-stat-num">${totalTopics}</div><div class="outline-stat-label">Topics</div></div>
    <div class="outline-stat"><div class="outline-stat-num">${totalSubtopics}</div><div class="outline-stat-label">Subtopics</div></div>
    <div class="outline-stat"><div class="outline-stat-num">${doneTopics}/${totalTopics}</div><div class="outline-stat-label">Completed</div></div>
  </div>`;

  units.forEach(u => {
    const isCollapsed = outlineCollapsed[u.unitNum] === true;
    const doneCount = u.nodes.filter(n => done.has(u.unitNum + '-' + n.name)).length;

    h += `<div class="outline-era">
      <div class="outline-era-header" style="background:${u.gradient}" onclick="toggleOutlineEra(${u.unitNum})">
        <div class="outline-era-header-inner">
          <div class="outline-era-label">Era ${u.unitNum} ${isCollapsed ? '▶' : '▼'}</div>
          <div class="outline-era-name">${u.label}</div>
          ${u.timespan ? `<div class="outline-era-timespan">${u.timespan}</div>` : ''}
        </div>
        <div class="outline-era-count">${doneCount}/${u.nodes.length}</div>
      </div>
      <div class="outline-era-body${isCollapsed ? ' collapsed' : ''}">`;

    u.nodes.forEach(n => {
      const id = u.unitNum + '-' + n.name;
      const d = done.has(id);
      const safeName = n.name.replace(/'/g, "\\'");
      const safeSub = n.sub.replace(/'/g, "\\'");

      h += `<div class="outline-topic" onclick="openLesson(${u.unitNum},'${safeName}','${safeSub}')">
        <div class="outline-topic-head">
          <span class="outline-topic-icon">${n.icon}</span>
          <span class="outline-topic-name">${n.name}</span>
          ${d ? '<span class="outline-topic-done-badge">✓ Done</span>' : ''}
        </div>
        <div class="outline-topic-sub">${n.sub}</div>`;

      if (n.subtopics && n.subtopics.length) {
        h += '<ul class="outline-subtopics">';
        n.subtopics.forEach(st => { h += `<li>${st}</li>`; });
        h += '</ul>';
      }

      h += '</div>';
    });

    h += '</div></div>';
  });

  document.getElementById('outline-content').innerHTML = h;
}

function buildSkillTree() {
  let h = '<div class="duo-path">';
  units.forEach(u => {
    const doneCount = u.nodes.filter(n => done.has(u.unitNum + '-' + n.name)).length;
    const isCollapsed = collapsed[u.unitNum] !== false;
    const allDone = doneCount === u.nodes.length;

    h += `<div class="duo-unit">
      <div class="duo-unit-header" style="background:${u.gradient};box-shadow:0 4px 0 ${u.shadow}" onclick="toggleUnit(${u.unitNum})">
        <div class="unit-label">Era ${u.unitNum} · ${doneCount}/${u.nodes.length} <span class="unit-toggle">${isCollapsed ? '▶' : '▼'}</span></div>
        <div class="unit-name">${u.label}</div>
        ${allDone ? '<div style="font-size:0.7rem;margin-top:4px;opacity:0.85">✓ Complete</div>' : ''}
      </div>
      <div class="duo-nodes${isCollapsed ? ' collapsed' : ''}">`;

    u.nodes.forEach(n => {
      const id = u.unitNum + '-' + n.name;
      const d = done.has(id);
      const cls = d ? 'done' : 'next';

      const checkSvg = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
      const checkBadge = `<div class="duo-checkmark"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>`;

      const safeName = n.name.replace(/'/g, "\\'");
      const safeSub = n.sub.replace(/'/g, "\\'");
      h += `<div class="duo-node ${cls}" onclick="openLesson(${u.unitNum},'${safeName}','${safeSub}')">
        <button class="duo-btn ${cls}">${d ? checkSvg : n.icon}${d ? checkBadge : ''}</button>
        <div class="duo-node-label">
          <div class="node-name">${n.name}</div>
          <div class="node-sub">${n.sub}</div>
        </div>
      </div>`;
    });

    h += '</div></div>';
  });
  h += '</div>';
  document.getElementById('skill-tree').innerHTML = h;
}

// ═══════════════════════════════════════════
// TIMELINE
// ═══════════════════════════════════════════
const timelineEvents = [
  { date: "c. 3500 BCE", title: "Birth of Writing", desc: "Cuneiform develops in Sumer — civilisation begins to record its history.", era: "ancient" },
  { date: "c. 2560 BCE", title: "Great Pyramid Built", desc: "The Great Pyramid of Giza is completed for Pharaoh Khufu.", era: "ancient" },
  { date: "508 BCE", title: "Athenian Democracy", desc: "Cleisthenes introduces democratic reforms in Athens.", era: "ancient" },
  { date: "334 BCE", title: "Alexander's Conquests", desc: "Alexander the Great begins his campaign, spreading Hellenistic culture from Greece to India.", era: "ancient" },
  { date: "221 BCE", title: "Qin Unifies China", desc: "Qin Shi Huang becomes the first emperor of a unified China.", era: "classical" },
  { date: "27 BCE", title: "Roman Empire Founded", desc: "Augustus becomes the first Roman Emperor, beginning the Pax Romana.", era: "classical" },
  { date: "30 CE", title: "Crucifixion of Jesus", desc: "The event that gave rise to Christianity, which would reshape the Western world.", era: "classical" },
  { date: "476 CE", title: "Fall of Rome", desc: "The last Western Roman Emperor is deposed — the ancient world ends.", era: "classical" },
  { date: "622 CE", title: "The Hijra", desc: "Muhammad's migration to Medina — Year 1 of the Islamic calendar.", era: "medieval" },
  { date: "800 CE", title: "Charlemagne Crowned", desc: "Charlemagne crowned Emperor of the Romans, reviving the idea of a European empire.", era: "medieval" },
  { date: "1066", title: "Norman Conquest", desc: "William the Conqueror defeats Harold at the Battle of Hastings.", era: "medieval" },
  { date: "1215", title: "Magna Carta", desc: "English barons force King John to accept limits on royal power.", era: "medieval" },
  { date: "1206", title: "Mongol Empire", desc: "Genghis Khan unites the Mongol tribes and begins building the largest land empire.", era: "medieval" },
  { date: "1347", title: "The Black Death", desc: "Plague devastates Europe, killing 30–60% of the population.", era: "medieval" },
  { date: "1440", title: "The Printing Press", desc: "Gutenberg's press revolutionises communication and fuels the Renaissance and Reformation.", era: "early-modern" },
  { date: "1492", title: "Columbus Reaches the Americas", desc: "Beginning of the Columbian Exchange and European colonisation.", era: "early-modern" },
  { date: "1517", title: "The 95 Theses", desc: "Martin Luther challenges the Catholic Church, sparking the Reformation.", era: "early-modern" },
  { date: "1776", title: "American Independence", desc: "The Declaration of Independence establishes a new nation built on Enlightenment principles.", era: "early-modern" },
  { date: "1789", title: "French Revolution", desc: "The storming of the Bastille begins a revolution that reshapes European politics.", era: "early-modern" },
  { date: "1804", title: "Haitian Independence", desc: "Haiti becomes the first free Black republic after a successful slave revolt.", era: "early-modern" },
  { date: "1837", title: "Victorian Era Begins", desc: "Queen Victoria's reign marks the height of the British Empire and industrialisation.", era: "nineteenth" },
  { date: "1848", title: "The Communist Manifesto", desc: "Marx and Engels publish a call for workers' revolution that shapes the 20th century.", era: "nineteenth" },
  { date: "1861", title: "American Civil War", desc: "The US divides over slavery — the war ends with abolition in 1865.", era: "nineteenth" },
  { date: "1868", title: "Meiji Restoration", desc: "Japan begins rapid modernisation and industrialisation under restored imperial rule.", era: "nineteenth" },
  { date: "1884", title: "Scramble for Africa", desc: "The Berlin Conference formalises European colonisation of Africa.", era: "nineteenth" },
  { date: "1914", title: "World War I Begins", desc: "The assassination of Archduke Franz Ferdinand triggers a global conflict.", era: "world-wars" },
  { date: "1917", title: "Russian Revolution", desc: "The Bolsheviks seize power — the Soviet Union is born.", era: "world-wars" },
  { date: "1929", title: "The Great Depression", desc: "The US stock market crashes, triggering a worldwide economic catastrophe.", era: "world-wars" },
  { date: "1939", title: "World War II Begins", desc: "Germany invades Poland — the deadliest conflict in human history unfolds.", era: "world-wars" },
  { date: "1945", title: "Atomic Bombs & UN Founded", desc: "Nuclear weapons end WWII. The United Nations is established to prevent future wars.", era: "world-wars" },
  { date: "1947", title: "Indian Independence", desc: "India gains independence from Britain, partitioned into India and Pakistan.", era: "contemporary" },
  { date: "1961", title: "Berlin Wall Built", desc: "The wall divides East and West Berlin — a symbol of Cold War division.", era: "contemporary" },
  { date: "1969", title: "Moon Landing", desc: "Apollo 11 lands on the Moon — 'one giant leap for mankind.'", era: "contemporary" },
  { date: "1989", title: "Berlin Wall Falls", desc: "The wall comes down — the Cold War begins to end.", era: "contemporary" },
  { date: "1991", title: "Soviet Union Collapses", desc: "The USSR dissolves into 15 independent states — the Cold War is over.", era: "contemporary" },
  { date: "1994", title: "End of Apartheid", desc: "Nelson Mandela becomes South Africa's first Black president.", era: "contemporary" },
  { date: "2001", title: "September 11 Attacks", desc: "Terrorist attacks on the US reshape global politics and security.", era: "contemporary" },
];

let timelineFilter = 'all';

function buildTimelineFilters() {
  const eras = [
    { id: 'all', label: 'All Eras' },
    { id: 'ancient', label: 'Ancient' },
    { id: 'classical', label: 'Classical' },
    { id: 'medieval', label: 'Medieval' },
    { id: 'early-modern', label: 'Early Modern' },
    { id: 'nineteenth', label: '19th Century' },
    { id: 'world-wars', label: 'World Wars' },
    { id: 'contemporary', label: 'Contemporary' },
  ];
  document.getElementById('timeline-filters').innerHTML = eras.map(e =>
    `<button class="filter-chip ${timelineFilter === e.id ? 'active' : ''}" onclick="setTimelineFilter('${e.id}')">${e.label}</button>`
  ).join('');
}

function setTimelineFilter(f) {
  timelineFilter = f;
  buildTimelineFilters();
  buildTimeline();
}

function buildTimeline() {
  const filtered = timelineFilter === 'all' ? timelineEvents : timelineEvents.filter(e => e.era === timelineFilter);

  if (filtered.length === 0) {
    document.getElementById('timeline-content').innerHTML = '<div class="empty-state"><div class="empty-icon">📅</div><p>No events for this era yet.</p></div>';
    return;
  }

  let h = '<div class="timeline-container"><div class="timeline-line"></div>';
  filtered.forEach(e => {
    h += `<div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-date">${e.date}</div>
        <div class="timeline-title">${e.title}</div>
        <div class="timeline-desc">${e.desc}</div>
      </div>
    </div>`;
  });
  h += '</div>';
  document.getElementById('timeline-content').innerHTML = h;
}

// ═══════════════════════════════════════════
// FLASHCARDS
// ═══════════════════════════════════════════
let fcDeckId = 'ancient';
let fcIndex = 0;
let fcFiltered = [];

function buildFCDeckSelect() {
  const sel = document.getElementById('fc-deck-select');
  sel.innerHTML = '<option value="all">All Decks</option>' +
    flashcardDecks.map(d => `<option value="${d.id}">${d.icon} ${d.name}</option>`).join('');
  sel.value = fcDeckId;
  sel.addEventListener('change', () => {
    fcDeckId = sel.value;
    fcIndex = 0;
    filterAndShowCards();
  });
}

function getActiveCards() {
  if (fcDeckId === 'all') {
    return flashcardDecks.flatMap(d => d.cards);
  }
  const deck = flashcardDecks.find(d => d.id === fcDeckId);
  return deck ? deck.cards : [];
}

function filterAndShowCards() {
  const search = (document.getElementById('fc-search').value || '').toLowerCase();
  const all = getActiveCards();
  fcFiltered = search ? all.filter(c => c.q.toLowerCase().includes(search) || c.a.toLowerCase().includes(search)) : all;
  if (fcIndex >= fcFiltered.length) fcIndex = 0;
  showCard();
}

function showCard() {
  const card = fcFiltered[fcIndex];
  const fcEl = document.getElementById('fc-card');
  fcEl.classList.remove('flipped');

  if (!card) {
    document.getElementById('fc-front-text').textContent = 'No cards found.';
    document.getElementById('fc-back-text').textContent = '';
    document.getElementById('fc-counter').textContent = '0 / 0';
    return;
  }

  document.getElementById('fc-front-text').textContent = card.q;
  document.getElementById('fc-back-text').textContent = card.a;
  document.getElementById('fc-counter').textContent = `${fcIndex + 1} / ${fcFiltered.length}`;
}

function flipCard() {
  document.getElementById('fc-card').classList.toggle('flipped');
}

function nextCard() {
  if (fcFiltered.length === 0) return;
  fcIndex = (fcIndex + 1) % fcFiltered.length;
  showCard();
}

function prevCard() {
  if (fcFiltered.length === 0) return;
  fcIndex = (fcIndex - 1 + fcFiltered.length) % fcFiltered.length;
  showCard();
}

function shuffleCards() {
  for (let i = fcFiltered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcFiltered[i], fcFiltered[j]] = [fcFiltered[j], fcFiltered[i]];
  }
  fcIndex = 0;
  showCard();
}

document.getElementById('fc-search').addEventListener('input', () => {
  fcIndex = 0;
  filterAndShowCards();
});

// Keyboard navigation for flashcards
document.addEventListener('keydown', (e) => {
  const activeTab = document.querySelector('.tab-panel.active');
  if (!activeTab || activeTab.id !== 'tab-flashcards') return;
  if (e.key === 'ArrowRight') nextCard();
  else if (e.key === 'ArrowLeft') prevCard();
  else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipCard(); }
});

// ═══════════════════════════════════════════
// GLOSSARY
// ═══════════════════════════════════════════
let glossaryFilter = 'All';

function buildGlossaryFilters() {
  const cats = ['All', ...new Set(glossaryData.map(g => g.category))];
  document.getElementById('glossary-filters').innerHTML = cats.map(c =>
    `<button class="filter-chip ${glossaryFilter === c ? 'active' : ''}" onclick="setGlossaryFilter('${c}')">${c}</button>`
  ).join('');
}

function setGlossaryFilter(f) {
  glossaryFilter = f;
  buildGlossaryFilters();
  buildGlossary();
}

function buildGlossary() {
  const search = (document.getElementById('glossary-search').value || '').toLowerCase();
  let items = glossaryData;

  if (glossaryFilter !== 'All') {
    items = items.filter(g => g.category === glossaryFilter);
  }
  if (search) {
    items = items.filter(g => g.term.toLowerCase().includes(search) || g.def.toLowerCase().includes(search));
  }

  if (items.length === 0) {
    document.getElementById('glossary-list').innerHTML = '<div class="empty-state"><div class="empty-icon">📖</div><p>No matching terms found.</p></div>';
    return;
  }

  document.getElementById('glossary-list').innerHTML = items.map(g =>
    `<div class="glossary-item">
      <div class="glossary-term">${g.term}<span class="glossary-cat">${g.category}</span></div>
      <div class="glossary-def">${g.def}</div>
    </div>`
  ).join('');
}

document.getElementById('glossary-search').addEventListener('input', buildGlossary);

// ═══════════════════════════════════════════
// PRIMARY SOURCES
// ═══════════════════════════════════════════
let sourcesFilter = 'all';

function buildSourcesFilters() {
  const eras = [
    { id: 'all', label: 'All Eras' },
    { id: 'ancient', label: 'Ancient' },
    { id: 'classical', label: 'Classical' },
    { id: 'medieval', label: 'Medieval' },
    { id: 'early-modern', label: 'Early Modern' },
    { id: 'nineteenth', label: '19th Century' },
    { id: 'world-wars', label: 'World Wars' },
    { id: 'contemporary', label: 'Contemporary' },
  ];
  document.getElementById('sources-filters').innerHTML = eras.map(e =>
    `<button class="filter-chip ${sourcesFilter === e.id ? 'active' : ''}" onclick="setSourcesFilter('${e.id}')">${e.label}</button>`
  ).join('');
}

function setSourcesFilter(f) {
  sourcesFilter = f;
  buildSourcesFilters();
  buildSources();
}

function toggleSource(id) {
  const el = document.getElementById('source-' + id);
  if (el) el.classList.toggle('expanded');
}

function buildSources() {
  const filtered = sourcesFilter === 'all' ? primarySources : primarySources.filter(s => s.era === sourcesFilter);

  if (filtered.length === 0) {
    document.getElementById('sources-list').innerHTML = '<div class="empty-state"><div class="empty-icon">📜</div><p>No sources for this era yet.</p></div>';
    return;
  }

  document.getElementById('sources-list').innerHTML = filtered.map(s =>
    `<div class="source-card" id="source-${s.id}" onclick="toggleSource('${s.id}')">
      <div class="source-meta">
        <span class="source-type-badge">${s.type}</span>
        <span class="source-date">${s.date}</span>
      </div>
      <div class="source-title">${s.title}</div>
      <div class="source-excerpt">${s.excerpt}</div>
      <div class="source-context">${s.context}</div>
      <div class="source-questions">
        <h4>Analysis Questions</h4>
        ${s.questions.map((q, i) => `<div class="source-question" data-num="${i + 1}.">${q}</div>`).join('')}
      </div>
      <div class="source-expand-hint">Click to reveal analysis questions</div>
    </div>`
  ).join('');
}

// ═══════════════════════════════════════════
// RESOURCES
// ═══════════════════════════════════════════
let resourcesFilter = 'all';
let resourcesTypeFilter = 'all';

function buildResourcesFilters() {
  const types = [
    { id: 'all', label: 'All' },
    { id: 'video', label: '🎬 Video' },
    { id: 'podcast', label: '🎙️ Podcast' },
    { id: 'book', label: '📚 Books' },
    { id: 'website', label: '🌐 Websites' },
  ];
  document.getElementById('resources-filters').innerHTML = types.map(t =>
    `<button class="filter-chip ${resourcesTypeFilter === t.id ? 'active' : ''}" onclick="setResourcesType('${t.id}')">${t.label}</button>`
  ).join('');
}

function setResourcesType(t) {
  resourcesTypeFilter = t;
  buildResourcesFilters();
  buildResources();
}

function buildResources() {
  let items = resourcesData;
  if (resourcesTypeFilter !== 'all') {
    items = items.filter(r => r.type === resourcesTypeFilter);
  }

  if (items.length === 0) {
    document.getElementById('resources-list').innerHTML = '<div class="empty-state"><div class="empty-icon">🔗</div><p>No resources for this filter.</p></div>';
    return;
  }

  document.getElementById('resources-list').innerHTML = '<div class="resource-grid">' + items.map(r =>
    `<a class="resource-card" href="${r.url}" target="_blank" rel="noopener noreferrer">
      <div class="resource-icon">${r.icon}</div>
      <div class="resource-title">${r.title}</div>
      <div class="resource-desc">${r.description}</div>
      <div class="resource-tags">
        <span class="resource-difficulty ${r.difficulty}">${r.difficulty}</span>
      </div>
    </a>`
  ).join('') + '</div>';
}

// ═══════════════════════════════════════════
// AI CHAT
// ═══════════════════════════════════════════

function buildChat() {
  if (!apiKey) {
    document.getElementById('chat-area').innerHTML = `
      <div class="api-setup">
        <h3>Connect Your AI Tutor</h3>
        <p>Enter your Anthropic API key to chat with an AI history tutor. Your key is stored locally in your browser and never sent anywhere except Anthropic's API.</p>
        <div class="api-input-wrap">
          <input type="password" id="api-key-input" placeholder="sk-ant-...">
          <button class="btn btn-primary" onclick="saveApiKey()">Connect</button>
        </div>
      </div>`;
    return;
  }

  let h = `
    <div class="chat-mode-bar">
      <button class="chat-mode-btn ${chatMode === 'tutor' ? 'active' : ''}" onclick="setChatMode('tutor')">📚 Tutor</button>
      <button class="chat-mode-btn ${chatMode === 'whatif' ? 'active' : ''}" onclick="setChatMode('whatif')">🔮 What If?</button>
    </div>
    <div class="chat-container">
      <div class="chat-messages" id="chat-messages">`;

  if (chatHistory.length === 0) {
    h += `<div class="chat-msg system">${chatMode === 'whatif' ? 'Ask a "What if?" question about history...' : 'Ask me anything about world history!'}</div>`;
  } else {
    chatHistory.forEach(m => {
      h += `<div class="chat-msg ${m.role}">${escapeHTML(m.content)}</div>`;
    });
  }

  h += `</div>
      <div class="chat-input-wrap">
        <textarea class="chat-input" id="chat-input" placeholder="${chatMode === 'whatif' ? 'What if the Roman Empire never fell?' : 'Ask about any historical topic...'}" rows="1" onkeydown="chatKeydown(event)"></textarea>
        <button class="chat-send-btn" id="chat-send" onclick="sendChat()">→</button>
      </div>
    </div>`;

  document.getElementById('chat-area').innerHTML = h;
  scrollChat();
}

function saveApiKey() {
  const key = document.getElementById('api-key-input').value.trim();
  if (key) {
    apiKey = key;
    localStorage.setItem(`${STORAGE}-apiKey`, key);
    updateAIButtonState();
    buildChat();
  }
}

function setChatMode(mode) {
  chatMode = mode;
  chatHistory = [];
  localStorage.setItem(`${STORAGE}-chat`, '[]');
  buildChat();
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
}

function scrollChat() {
  const el = document.getElementById('chat-messages');
  if (el) el.scrollTop = el.scrollHeight;
}

function chatKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendChat();
  }
}

async function sendChat() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg) return;

  input.value = '';
  chatHistory.push({ role: 'user', content: msg });

  const messagesEl = document.getElementById('chat-messages');
  // Remove system placeholder
  const sysMsg = messagesEl.querySelector('.chat-msg.system');
  if (sysMsg) sysMsg.remove();

  messagesEl.innerHTML += `<div class="chat-msg user">${escapeHTML(msg)}</div>`;
  messagesEl.innerHTML += `<div class="chat-msg assistant" id="chat-loading" style="opacity:0.6">Thinking...</div>`;
  scrollChat();

  const sendBtn = document.getElementById('chat-send');
  sendBtn.disabled = true;

  const systemPrompt = chatMode === 'whatif'
    ? `You are a creative and knowledgeable world history expert who explores counterfactual "What if?" scenarios. When the user poses a hypothetical, explore it thoughtfully — consider what might have changed, use real historical context to ground your speculation, and explain the ripple effects. Be engaging, vivid, and educational. Keep responses concise (2-3 paragraphs) but insightful.`
    : `You are a friendly, knowledgeable world history tutor. You explain historical events, people, and concepts clearly and engagingly. Use analogies and connections between events to help understanding. Keep responses concise (2-3 paragraphs) unless the user asks for more detail. If relevant, mention connections to other historical periods or themes.`;

  try {
    const apiMessages = chatHistory.map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.content }));

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: systemPrompt,
        messages: apiMessages,
      }),
    });

    const data = await res.json();
    const loadingEl = document.getElementById('chat-loading');

    if (data.content && data.content[0]) {
      const reply = data.content[0].text;
      chatHistory.push({ role: 'assistant', content: reply });
      localStorage.setItem(`${STORAGE}-chat`, JSON.stringify(chatHistory));
      if (loadingEl) loadingEl.outerHTML = `<div class="chat-msg assistant">${escapeHTML(reply)}</div>`;
    } else {
      const errMsg = data.error?.message || 'Something went wrong. Check your API key.';
      if (loadingEl) loadingEl.outerHTML = `<div class="chat-msg system">${escapeHTML(errMsg)}</div>`;
      chatHistory.pop(); // remove the user message that failed
    }
  } catch (err) {
    const loadingEl = document.getElementById('chat-loading');
    if (loadingEl) loadingEl.outerHTML = `<div class="chat-msg system">Network error — check your connection and API key.</div>`;
    chatHistory.pop();
  }

  sendBtn.disabled = false;
  scrollChat();
}

// ═══════════════════════════════════════════
// STATS
// ═══════════════════════════════════════════
function updateStats() {
  document.getElementById('xp-val').textContent = xp;
  document.getElementById('streak-val').textContent = streak;
}

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════
function init() {
  updateStats();
  updateAIButtonState();
  buildSkillTree();
  buildCoverageMap();
  buildTimelineFilters();
  buildTimeline();
  buildFCDeckSelect();
  filterAndShowCards();
  buildGlossaryFilters();
  buildGlossary();
  buildSourcesFilters();
  buildSources();
  buildResourcesFilters();
  buildResources();
  buildChat();
}

// ═══════════════════════════════════════════
// TOPIC DETAILS (causes/effects/figures/connections/source)
// ═══════════════════════════════════════════
function buildTopicDetails(name) {
  const el = document.getElementById('topic-details');
  const d = (typeof topicDetails !== 'undefined') ? topicDetails[name] : null;

  if (!d) {
    el.innerHTML = `<div class="topic-details"><div class="td-section" style="text-align:center;color:var(--muted);font-size:0.85rem">
      More detail (causes, key figures, connections, primary sources) coming soon for this topic.
    </div></div>`;
    return;
  }

  let h = '<div class="topic-details">';

  if (d.causes?.length || d.effects?.length) {
    h += `<div class="td-section">
      <div class="td-title">🔮 Causal Chain</div>
      <div class="td-chain">`;
    if (d.causes?.length) {
      h += `<div class="td-chain-col causes"><h5>What led to this</h5><ul>${d.causes.map(c => `<li>${c}</li>`).join('')}</ul></div>`;
    }
    if (d.effects?.length) {
      h += `<div class="td-chain-col effects"><h5>What came after</h5><ul>${d.effects.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
    }
    h += `</div></div>`;
  }

  if (d.figures?.length) {
    h += `<div class="td-section">
      <div class="td-title">👥 Key Figures</div>
      <div class="td-figures">`;
    d.figures.forEach(f => {
      h += `<div class="td-figure">
        <div class="td-figure-name">${f.name}</div>
        <div class="td-figure-dates">${f.dates}</div>
        <div class="td-figure-role">${f.role}</div>
        <div class="td-figure-why">${f.why}</div>
      </div>`;
    });
    h += `</div></div>`;
  }

  if (d.connections?.length) {
    h += `<div class="td-section">
      <div class="td-title">🔗 Connections</div>
      <div style="font-size:0.82rem;color:var(--muted);margin-bottom:12px">This topic is directly linked to:</div>
      <div class="td-connections">`;
    d.connections.forEach(c => {
      const found = findNodeByName(c);
      if (found) {
        const safeName = c.replace(/'/g, "\\'");
        const safeSub = (found.node.sub || '').replace(/'/g, "\\'");
        h += `<span class="td-connection-chip" onclick="openLesson(${found.unitNum},'${safeName}','${safeSub}')">${found.node.icon} ${c}</span>`;
      } else {
        h += `<span class="td-connection-chip">${c}</span>`;
      }
    });
    h += `</div></div>`;
  }

  if (d.sourceSnippet) {
    h += `<div class="td-section">
      <div class="td-title">📜 Primary Source</div>
      <div class="td-source">"${d.sourceSnippet.text}"
        <div class="td-source-attribution">— ${d.sourceSnippet.attribution}</div>
      </div>
    </div>`;
  }

  h += '</div>';
  el.innerHTML = h;
}

function findNodeByName(name) {
  for (const u of units) {
    for (const n of u.nodes) {
      if (n.name === name) return { unitNum: u.unitNum, node: n };
    }
  }
  return null;
}

// ═══════════════════════════════════════════
// COVERAGE MAP (era × region grid)
// ═══════════════════════════════════════════
function buildCoverageMap() {
  const el = document.getElementById('coverage-content');
  if (!el) return;

  const allRegions = REGIONS;
  const totalTopics = units.reduce((s, u) => s + u.nodes.length, 0);
  const doneTopics = [...done].length;
  const pct = totalTopics ? Math.round((doneTopics / totalTopics) * 100) : 0;

  let h = `<div class="coverage-summary">
    <div>
      <div class="coverage-summary-big">${doneTopics}/${totalTopics}</div>
      <div class="coverage-summary-label">Topics completed (${pct}%)</div>
    </div>
    <div class="coverage-progress">
      <div class="coverage-progress-fill" style="width:${pct}%"></div>
    </div>
  </div>`;

  // Build grid
  const cols = allRegions.length + 1; // +1 for era label column
  h += `<div class="coverage-wrap"><div class="coverage-grid" style="grid-template-columns:minmax(160px,1.4fr) repeat(${allRegions.length},1fr)">`;

  // Header row
  h += `<div class="coverage-cell header"></div>`;
  allRegions.forEach(r => {
    h += `<div class="coverage-cell header">${r}</div>`;
  });

  // One row per era
  units.forEach(u => {
    h += `<div class="coverage-cell row-header">${u.label}<div class="cov-timespan">${u.timespan || ''}</div></div>`;
    allRegions.forEach(r => {
      const matchingTopics = u.nodes.filter(n => (n.regions || []).includes(r));
      const total = matchingTopics.length;
      const doneHere = matchingTopics.filter(n => done.has(u.unitNum + '-' + n.name)).length;

      let cls = 'empty';
      if (total > 0) {
        if (doneHere === total) cls = 'complete';
        else if (doneHere > 0) cls = 'partial';
        else cls = 'available';
      }

      if (total === 0) {
        h += `<div class="coverage-cell data empty">—</div>`;
      } else {
        h += `<div class="coverage-cell data ${cls}"><span class="cov-num">${doneHere}</span><span class="cov-denom">of ${total}</span></div>`;
      }
    });
  });

  h += `</div></div>`;

  h += `<div class="coverage-legend">
    <div class="coverage-legend-item"><div class="coverage-legend-swatch" style="background:var(--bg-subtle);border:1px solid var(--border-strong)"></div>No topics</div>
    <div class="coverage-legend-item"><div class="coverage-legend-swatch" style="background:rgba(${getComputedStyle(document.documentElement).getPropertyValue('--accent-rgb')},0.08)"></div>Available, not started</div>
    <div class="coverage-legend-item"><div class="coverage-legend-swatch" style="background:linear-gradient(135deg,rgba(111,175,79,0.12),rgba(111,175,79,0.22))"></div>Partial progress</div>
    <div class="coverage-legend-item"><div class="coverage-legend-swatch" style="background:linear-gradient(135deg,rgba(111,175,79,0.35),rgba(111,175,79,0.55))"></div>Fully complete</div>
  </div>`;

  el.innerHTML = h;
}

// ═══════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════
function openSearch() {
  document.getElementById('search-modal').classList.add('visible');
  setTimeout(() => {
    const i = document.getElementById('search-input');
    i.value = '';
    i.focus();
    renderSearchResults('');
  }, 50);
}

function closeSearch() {
  document.getElementById('search-modal').classList.remove('visible');
}

document.getElementById('search-input').addEventListener('input', (e) => {
  renderSearchResults(e.target.value);
});

document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('search-modal');
  if (e.key === '/' && !modal.classList.contains('visible') && !/input|textarea/i.test(e.target.tagName)) {
    e.preventDefault();
    openSearch();
  } else if (e.key === 'Escape' && modal.classList.contains('visible')) {
    closeSearch();
  }
});

function highlight(text, q) {
  if (!q) return escapeHTML(text);
  const safe = escapeHTML(text);
  const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
  return safe.replace(re, '<mark>$1</mark>');
}

function renderSearchResults(q) {
  const el = document.getElementById('search-results');
  const query = q.trim().toLowerCase();

  if (!query) {
    el.innerHTML = `<div class="search-hint">Type to search across lessons, glossary, sources & flashcards.<br>Press <strong>Esc</strong> to close · <strong>/</strong> to open.</div>`;
    return;
  }

  // 1. Topics (units)
  const topicMatches = [];
  units.forEach(u => {
    u.nodes.forEach(n => {
      const hay = (n.name + ' ' + n.sub + ' ' + (n.subtopics || []).join(' ')).toLowerCase();
      if (hay.includes(query)) {
        topicMatches.push({ u, n });
      }
    });
  });

  // 2. Glossary
  const gMatches = (typeof glossaryData !== 'undefined' ? glossaryData : []).filter(g =>
    g.term.toLowerCase().includes(query) || g.def.toLowerCase().includes(query)
  );

  // 3. Sources
  const sMatches = (typeof primarySources !== 'undefined' ? primarySources : []).filter(s =>
    s.title.toLowerCase().includes(query) || s.excerpt.toLowerCase().includes(query) || s.context.toLowerCase().includes(query)
  );

  // 4. Flashcards
  const fMatches = [];
  (typeof flashcardDecks !== 'undefined' ? flashcardDecks : []).forEach(d => {
    d.cards.forEach(c => {
      if ((c.q + ' ' + c.a).toLowerCase().includes(query)) fMatches.push({ deck: d, card: c });
    });
  });

  const total = topicMatches.length + gMatches.length + sMatches.length + fMatches.length;
  if (total === 0) {
    el.innerHTML = `<div class="search-empty">No matches for "${escapeHTML(q)}"</div>`;
    return;
  }

  let h = '';

  if (topicMatches.length) {
    h += `<div class="search-group"><div class="search-group-label">Topics (${topicMatches.length})</div>`;
    topicMatches.slice(0, 6).forEach(({ u, n }) => {
      const safeName = n.name.replace(/'/g, "\\'");
      const safeSub = n.sub.replace(/'/g, "\\'");
      h += `<div class="search-result" onclick="closeSearch();document.querySelector('[data-tab=explore]').click();openLesson(${u.unitNum},'${safeName}','${safeSub}')">
        <div class="search-result-icon">${n.icon}</div>
        <div class="search-result-body">
          <div class="search-result-title">${highlight(n.name, query)}</div>
          <div class="search-result-sub">${u.label} · ${highlight(n.sub, query)}</div>
        </div>
      </div>`;
    });
    h += '</div>';
  }

  if (gMatches.length) {
    h += `<div class="search-group"><div class="search-group-label">Glossary (${gMatches.length})</div>`;
    gMatches.slice(0, 5).forEach(g => {
      h += `<div class="search-result" onclick="closeSearch();document.querySelector('[data-tab=glossary]').click()">
        <div class="search-result-icon">📖</div>
        <div class="search-result-body">
          <div class="search-result-title">${highlight(g.term, query)}</div>
          <div class="search-result-sub">${highlight(g.def, query)}</div>
        </div>
      </div>`;
    });
    h += '</div>';
  }

  if (sMatches.length) {
    h += `<div class="search-group"><div class="search-group-label">Primary Sources (${sMatches.length})</div>`;
    sMatches.slice(0, 4).forEach(s => {
      h += `<div class="search-result" onclick="closeSearch();document.querySelector('[data-tab=sources]').click()">
        <div class="search-result-icon">📜</div>
        <div class="search-result-body">
          <div class="search-result-title">${highlight(s.title, query)}</div>
          <div class="search-result-sub">${s.date} · ${highlight(s.context, query)}</div>
        </div>
      </div>`;
    });
    h += '</div>';
  }

  if (fMatches.length) {
    h += `<div class="search-group"><div class="search-group-label">Flashcards (${fMatches.length})</div>`;
    fMatches.slice(0, 4).forEach(({ deck, card }) => {
      h += `<div class="search-result" onclick="closeSearch();document.querySelector('[data-tab=flashcards]').click()">
        <div class="search-result-icon">🃏</div>
        <div class="search-result-body">
          <div class="search-result-title">${highlight(card.q, query)}</div>
          <div class="search-result-sub">${deck.name} · ${highlight(card.a, query)}</div>
        </div>
      </div>`;
    });
    h += '</div>';
  }

  el.innerHTML = h;
}

init();
