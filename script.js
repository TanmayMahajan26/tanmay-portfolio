/* =========================================================
   Tanmay Mahajan — Portfolio Box
   All content lives in the data below — edit it here.
   ========================================================= */

const ME = {
  name: 'Tanmay Mahajan',
  email: 'tanmay261006@gmail.com',
  github: 'https://github.com/TanmayMahajan26',
  linkedin: 'https://www.linkedin.com/in/tanmay-mahajan-220ab826b/',
  location: 'Mumbai, India',
  resume: 'assets/Tanmay_Mahajan_Resume_MS.pdf',
  photo: 'assets/me.jpg', // e.g. 'assets/me.jpg' — leave empty to show initials
};

const PROJECTS = [
  {
    id: 'nexus360',
    name: 'Nexus360',
    tagline: 'AI identity resolution and Customer 360 platform',
    colors: ['#1f7a72', '#145650'],
    award: '1st Place · CODEISSANCE 2026',
    meta: {
      Category: 'AI · Data platform',
      Built: 'CODEISSANCE 2026, TSEC Codestorm',
      Result: '1st Place — Industry domain, Customer 360 problem statement',
    },
    links: [
      ['Live demo', 'https://codeissance-26-skill-issue.vercel.app/'],
      ['GitHub', 'https://github.com/TanmayMahajan26/CODEISSANCE_26_Skill-Issue'],
    ],
    flowTitle: 'The 7-stage matching pipeline',
    flow: ['Blocking', 'Deterministic', 'Fuzzy', 'Semantic', 'Weighted scoring', 'Decision', 'Golden record'],
    bullets: [
      'Built a 7-stage matching pipeline to unify customer records across Equity, Mutual Funds, Insurance, Loans and Wealth systems.',
      'Implemented conflict detection with explainable matches and an interactive identity graph.',
      'Added AI verification for high-risk cases, a what-if threshold simulator, audit trails and RBAC.',
    ],
    tags: ['Identity resolution', 'Explainable matching', 'Identity graph', 'RBAC', 'Audit trails'],
  },
  {
    id: 'synapse',
    name: 'SYNAPSE',
    tagline: 'Compiler and observability platform for AI agent workflows',
    colors: ['#c2410c', '#7c2d12'],
    award: '3.2x faster · 31% cheaper',
    meta: {
      Category: 'AI infrastructure · Compilers',
      Stack: 'Zero-dependency Python, Groq models',
      Result: '3.2x lower latency and 31% lower cost with identical outputs',
    },
    links: [['Watch the demo', 'https://drive.google.com/file/d/1quUxlf0JabOfA2Tj0aRxoeCU1s2ZCtsP/view?usp=sharing'], ['GitHub', 'https://github.com/TanmayMahajan26/Synapse']],
    stats: [['3.2x', 'lower latency'], ['31%', 'lower cost'], ['123', 'automated tests']],
    flowTitle: 'How a workflow gets compiled',
    flow: ['Agent workflow', 'Dependency graph', 'Parallelization', 'Caching', 'Model routing', 'Structural validation'],
    bullets: [
      'Built a zero-dependency Python compiler that turns AI agent workflows into dependency-aware graphs.',
      'Applied parallelization, caching and model routing, each checked by structural validation and 123 automated tests.',
      'Cut latency 3.2x and cost 31% with identical outputs on real Groq models.',
      'Added a safety guard so side-effecting steps are never cached, merged or reordered.',
    ],
    tags: ['Python', 'Compiler passes', 'Agent workflows', 'Observability', 'Groq', 'Model routing'],
  },
  {
    id: 'wellsync',
    name: 'WellSync AI',
    tagline: 'Full-stack health platform with live AI agents',
    colors: ['#e8603c', '#b9421f'],
    award: 'Top 4 Finalist · IIT Hyderabad',
    meta: {
      Category: 'Health · Multi-agent AI',
      Built: 'IIT Hyderabad AI Hackathon',
      Result: 'Top 4 Finalist — selected for the offline final round',
    },
    links: [['Live demo', 'https://wellsync-ai.vercel.app/']],
    bullets: [
      'Built using APIs with 5 live agents working together.',
      'Developed a dedicated Android application alongside the web platform.',
      'Implemented real-time health tracking on a scalable backend architecture.',
    ],
    tags: ['5 live agents', 'Android app', 'Flutter', 'Real-time tracking', 'REST APIs'],
  },
  {
    id: 'justicegrid',
    name: 'JusticeGrid',
    tagline: 'AI legal intelligence for India’s undertrial prisoner crisis',
    colors: ['#1c2a3a', '#3b526b'],
    award: 'Finalist · SPIT Airavat 3.0',
    meta: {
      Category: 'Legal tech · NLP',
      Stack: 'Next.js 14, FastAPI, Gemini 2.0 Flash',
      Result: 'Finalist — Sardar Patel Institute of Technology Airavat 3.0',
    },
    links: [['Live demo', 'https://skill-issue-airavat-3-0.vercel.app/']],
    bullets: [
      'Built a paralegal dashboard that surfaces high-priority undertrial cases.',
      'Wrote an S.479 BNSS eligibility engine to flag who may qualify for release.',
      'Combined multilingual NLP with adjournment-prediction ML.',
    ],
    tags: ['Next.js 14', 'FastAPI', 'Gemini 2.0 Flash', 'Multilingual NLP', 'Prediction ML'],
  },
  {
    id: 'zenthera',
    name: 'Zenthera',
    tagline: 'High-speed antimicrobial resistance prediction pipeline',
    colors: ['#6a4bbf', '#44308a'],
    award: 'Published paper',
    meta: {
      Category: 'Bioinformatics · Machine learning',
      Method: 'k-mer based genomic analysis + ML',
      Result: 'Published in IJRIAS',
    },
    links: [
      ['Live demo', 'http://zenthera-ml.onrender.com/'],
      ['Read the paper', 'https://rsisinternational.org/journals/ijrias/view/zenthera-a-high-speed-antimicrobial-resistance-prediction-pipeline-using-k-mer-analysis-and-tree-based-ensembles'],
    ],
    stats: [['148,000+', 'bacterial genome records'], ['92.4%', 'prediction accuracy']],
    bullets: [
      'Built a high-speed antimicrobial resistance (AMR) prediction pipeline using k-mer based genomic analysis and machine learning.',
      'Trained and evaluated on 148,000+ bacterial genome records, achieving 92.4% accuracy.',
    ],
    tags: ['k-mer analysis', 'Tree-based ensembles', 'Genomics', 'Python'],
  },
  {
    id: 'fra-tracker',
    name: 'FRA Tracker',
    tagline: 'Forest Rights Act monitoring system (Smart India Hackathon)',
    colors: ['#3d8b4f', '#27633a'],
    award: 'SIH',
    meta: {
      Category: 'GovTech · WebGIS',
      Built: 'Smart India Hackathon',
      Coverage: 'Madhya Pradesh, Tripura, Odisha, Telangana',
    },
    links: [],
    bullets: [
      'Developed an AI-powered FRA Atlas for Forest Rights Act data.',
      'Built a WebGIS-based Decision Support System (DSS) for integrated monitoring of FRA implementation across four states.',
    ],
    tags: ['WebGIS', 'Decision support', 'AI atlas'],
  },
];

const AWARDS = [
  { medal: '1st', gold: true, title: '1st Place — CODEISSANCE 2026, TSEC Codestorm', text: 'Won with Nexus360 in the Industry domain (Customer 360 problem statement).', project: 'nexus360' },
  { medal: 'Top 4', title: 'Top 4 Finalist — IIT Hyderabad AI Hackathon', text: 'Selected for the offline final round; built WellSync AI.', project: 'wellsync' },
  { medal: 'Finalist', title: 'Finalist — SPIT Airavat 3.0', text: 'Sardar Patel Institute of Technology. Built JusticeGrid for India’s undertrial prisoner crisis.', project: 'justicegrid' },
  { medal: 'Finalist', title: 'Grand Finale Finalist — Bit N Build ’26', text: 'International hackathon by Google Developer Groups on Campus, Fr. CRCE (Nov 2026).' },
  { medal: '24 hr', title: 'Visa 24hr AI Hackathon — IIT Madras', text: 'Selected for the offline hackathon round at Shaastra 2026.' },
];

const cert = (title, url) => `<a href="${url}" target="_blank" rel="noopener">${title}</a>`;
const CERTS = [
  { when: 'Oct 2026', org: cert('Google Cloud Engineering Certificate', 'https://www.credly.com/badges/dce1b63a-8854-475b-be57-c53f3a7a40ef/linked_in_profile'), role: 'Google' },
  { when: 'Oct 2026', org: cert('AWS Academy Graduate — Cloud Architecting', 'https://www.credly.com/badges/d591a997-7c9f-40eb-8bc4-7fd58229d11d/linked_in_profile'), role: 'Amazon Web Services' },
  { when: 'Jul 2025', org: cert('Data Analytics Job Simulation', 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_QarCZFQEKrnwwJ6Q3_1751643421900_completion_certificate.pdf'), role: 'Deloitte Australia · Forage' },
  { when: 'Jun 2025', org: cert('Cyber Job Simulation', 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_QarCZFQEKrnwwJ6Q3_1751306194128_completion_certificate.pdf'), role: 'Deloitte Australia · Forage' },
  { when: 'Jun 2025', org: cert('Introduction to Generative AI', 'https://www.cloudskillsboost.google/public_profiles/90940190-f7e6-4ac6-807f-bee8d645b695/badges/16419714'), role: 'Google Cloud Skills Boost' },
  { when: 'Jun 2025', org: cert('Introduction to Large Language Models', 'https://www.cloudskillsboost.google/public_profiles/90940190-f7e6-4ac6-807f-bee8d645b695/badges/16419994'), role: 'Google Cloud Skills Boost' },
  { when: 'Jun 2025', org: cert('Introduction to Responsible AI', 'https://www.cloudskillsboost.google/public_profiles/90940190-f7e6-4ac6-807f-bee8d645b695/badges/16420070'), role: 'Google Cloud Skills Boost' },
];

const EXPERIENCE = [
  { when: 'Oct 2026 – Present', org: 'THE xDEVS', role: 'Full Stack Developer Intern · Mumbai, hybrid' },
  { when: 'June 2026 – Present', org: 'TEDxCRCE', role: 'Executive Producer', text: 'Leading event-day production — content, stage management, technology and video — including AV needs, camera operators and livestream.' },
  { when: 'Jan 2026 – May 2026', org: 'Virtue Crennovative Solutions', role: 'Video & Content Editor · Internship, remote', text: 'Edited and produced video content for digital platforms; created social media visuals and collaborated with marketing teams.' },
  { when: 'May 2025 – May 2026', org: 'TEDxCRCE', role: 'Social Media Manager', text: 'Led social media strategy across Instagram and LinkedIn, creating content and analysing engagement metrics.' },
];

const EDUCATION = [
  { when: '2024 – 2028', org: 'Fr. Conceicao Rodrigues College of Engineering', role: 'B.E. Computer Engineering' },
  { when: '2022 – 2024', org: 'St. Xavier’s International School & Jr College', role: 'Junior college' },
  { when: '2009 – 2022', org: 'Smt. Kantaben Chandulal Gandhi English School', role: 'School' },
];

const SKILLS = {
  Languages: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'Dart'],
  Development: ['MERN stack', 'Next.js', 'FastAPI', 'Flutter', 'REST APIs', 'HTML', 'CSS'],
  'AI & cloud': ['LLM APIs (Gemini, Claude)', 'AI agent workflows', 'Machine learning', 'AWS cloud architecting', 'Google Cloud'],
  'Database & tools': ['SQL', 'Git', 'GitHub', 'Postman'],
  'Beyond code': ['Problem solving (DSA)', 'Team collaboration', 'Communication', 'Content planning', 'Social media marketing', 'Video editing'],
  'Spoken languages': ['English', 'Hindi', 'Marathi', 'Sanskrit'],
};

/* =========================================================
   Views
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const ext = 'target="_blank" rel="noopener"';
const cover = (p, big) =>
  `<div class="cover ${big ? 'cover--big' : ''}" style="--c1:${p.colors[0]};--c2:${p.colors[1]}"><span class="cover__mark">${p.name}</span></div>`;
const timeline = (items) =>
  `<ol class="timeline">${items.map((e) => `<li><time>${e.when}</time><b>${e.org}</b><em>${e.role}</em>${e.text ? `<p>${e.text}</p>` : ''}</li>`).join('')}</ol>`;

const VIEWS = {
  projects: () => `
    <p class="eyebrow">Projects</p>
    <h2 id="sheetTitle">Things I’ve built</h2>
    <p class="lede">Mostly born at hackathons, all shipped end to end — AI pipelines, an agent-workflow compiler, full-stack platforms and the odd research paper.</p>
    <div class="grid">
      ${PROJECTS.map((p) => `
        <button class="pcard" data-open="projects/${p.id}">
          ${cover(p)}
          <span class="pcard__body">
            <span class="ribbon">★ ${p.award}</span>
            <b>${p.name}</b>
            <span>${p.tagline}</span>
            <span class="pcard__more">View project →</span>
          </span>
        </button>`).join('')}
    </div>`,

  project: (p) => `
    <button class="back" data-open="projects">← Back to projects</button>
    ${cover(p, true)}
    <p class="eyebrow">${p.meta.Category}</p>
    <h2 id="sheetTitle">${p.name}</h2>
    <p class="lede">${p.tagline}</p>
    ${p.links.length ? `<div class="btn-row">${p.links.map(([label, url], i) => `<a class="btn ${i ? 'btn--ghost' : ''}" href="${url}" ${ext}>${label} ↗</a>`).join('')}</div>` : ''}
    <dl class="meta">${Object.entries(p.meta).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    ${p.stats ? `<h3>By the numbers</h3><div class="stats">${p.stats.map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join('')}</div>` : ''}
    ${p.flow ? `<h3>${p.flowTitle}</h3><ol class="flow">${p.flow.map((s) => `<li>${s}</li>`).join('')}</ol>` : ''}
    <h3>What I built</h3>
    <ul class="bullets">${p.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
    <h3>Highlights</h3>
    <ul class="chips">${p.tags.map((t) => `<li class="chip">${t}</li>`).join('')}</ul>`,

  awards: () => `
    <p class="eyebrow">Achievements</p>
    <h2 id="sheetTitle">Hackathons</h2>
    <p class="lede">Building under a deadline is my favourite way to learn.</p>
    <div class="awards">
      ${AWARDS.map((a) => `
        <div class="award ${a.gold ? 'award--gold' : ''}">
          <span class="award__medal">${a.medal}</span>
          <b>${a.title}</b>
          <span>${a.text} ${a.project ? `<button data-open="projects/${a.project}">See the project →</button>` : ''}</span>
        </div>`).join('')}
    </div>
    <h3>Certifications</h3>
    ${timeline(CERTS)}`,

  about: () => `
    <p class="eyebrow">Profile</p>
    <h2 id="sheetTitle">About me</h2>
    <div class="about" style="margin-top:26px">
      <aside class="idcard">
        <div class="idcard__top">BUILDER PASS</div>
        <div class="avatar">${ME.photo ? `<img src="${ME.photo}" alt="${ME.name}, software engineer" width="400" height="400" />` : 'TM'}</div>
        <dl>
          <div><dt>Name</dt><dd>${ME.name}</dd></div>
          <div><dt>Focus</dt><dd>AI &amp; full-stack development</dd></div>
          <div><dt>Now</dt><dd>Full Stack Developer Intern, THE xDEVS</dd></div>
          <div><dt>Education</dt><dd>B.E. Computer Engineering, Fr. CRCE</dd></div>
          <div><dt>Based in</dt><dd>${ME.location}</dd></div>
          <div><dt>Speaks</dt><dd>English, Hindi, Marathi, Sanskrit</dd></div>
          <div><dt>Social</dt><dd><a href="${ME.github}" ${ext}>GitHub</a> · <a href="${ME.linkedin}" ${ext}>LinkedIn</a></dd></div>
        </dl>
      </aside>
      <div>
        <p class="lede" style="color:var(--ink)">Hi, I’m Tanmay — a Computer Engineering student focused on AI and full-stack development.</p>
        <p>I like taking an idea from a blank repo to something people can actually use — financial data platforms, risk-aware systems and tooling for AI agents. A lot of that happens at hackathons, where I’ve built identity-resolution pipelines, multi-agent health platforms and legal-intelligence dashboards against the clock, and won one along the way.</p>
        <p>Right now I’m a Full Stack Developer Intern at THE xDEVS in Mumbai. Away from the editor, I produce TEDxCRCE — running content, stage, tech and video on event day — and edit video.</p>
        <div class="btn-row">
          <button class="btn" data-open="experience">View experience →</button>
          <a class="btn btn--ghost" href="${ME.resume}" ${ext}>Résumé ↗</a>
        </div>
        <h3>Education</h3>
        ${timeline(EDUCATION)}
      </div>
    </div>`,

  experience: () => `
    <p class="eyebrow">Experience</p>
    <h2 id="sheetTitle">Where I’ve worked</h2>
    <p class="lede">Shipping code as an intern, and running a stage — production and storytelling are the other half of how I work.</p>
    <h3>Roles</h3>
    ${timeline(EXPERIENCE)}`,

  skills: () => `
    <p class="eyebrow">Technical skills</p>
    <h2 id="sheetTitle">What’s in the toolbox</h2>
    <div class="skillset">
      ${Object.entries(SKILLS).map(([group, list]) => `
        <div><h3>${group}</h3><ul class="chips">${list.map((s) => `<li class="chip">${s}</li>`).join('')}</ul></div>`).join('')}
    </div>`,

  contact: () => `
    <p class="eyebrow">Contact</p>
    <h2 id="sheetTitle">Let’s build something</h2>
    <p class="lede">Internships, hackathon teams, collaborations — my inbox is open.</p>
    <div class="contact-list">
      <a href="mailto:${ME.email}?subject=Hello%20Tanmay"><span><small>Email</small><b>${ME.email}</b></span><i>→</i></a>
      <a href="${ME.linkedin}" ${ext}><span><small>LinkedIn</small><b>in/tanmay-mahajan</b></span><i>↗</i></a>
      <a href="${ME.github}" ${ext}><span><small>GitHub</small><b>TanmayMahajan26</b></span><i>↗</i></a>
      <a href="${ME.resume}" ${ext}><span><small>Résumé</small><b>Download PDF</b></span><i>↓</i></a>
    </div>
    <p class="signoff">— thanks for opening the box!</p>`,
};

/* =========================================================
   Behaviour
   ========================================================= */
const body = document.body;
const overlay = $('#overlay');
const sheet = $('#sheet');
const sheetBody = $('#sheetBody');
const menu = $('.nav__menu');
const toggle = $('#projectsToggle');
let lastFocus = null;

// projects dropdown
$('#projectsMenu').innerHTML =
  `<button role="menuitem" data-open="projects">All projects <small>${PROJECTS.length}</small></button><hr />` +
  PROJECTS.map((p) => `<button role="menuitem" data-open="projects/${p.id}">${p.name} <small>${p.meta.Category.split(' · ')[0]}</small></button>`).join('');

function setMenu(on) {
  menu.classList.toggle('is-on', on);
  toggle.setAttribute('aria-expanded', on);
}

function openBox() { body.classList.add('is-open'); }

function closeBox() {
  closeSheet();
  body.classList.remove('is-open');
  $('#lid').focus({ preventScroll: true });
}

function render(route) {
  const [key, sub] = route.split('/');
  if (key === 'projects' && sub) {
    const p = PROJECTS.find((x) => x.id === sub);
    return p ? VIEWS.project(p) : VIEWS.projects();
  }
  return VIEWS[key] ? VIEWS[key]() : null;
}

function openSheet(route, push = true) {
  const html = render(route);
  if (!html) return;
  openBox();
  setMenu(false);
  if (overlay.hidden) lastFocus = document.activeElement;
  sheetBody.innerHTML = html;
  sheetBody.scrollTop = 0;
  overlay.hidden = false;
  // focus the scrolling area so arrow keys, Space and Page Up/Down scroll it
  sheetBody.focus({ preventScroll: true });
  if (push && location.hash.slice(1) !== route) history.pushState(null, '', '#' + route);
}

function closeSheet(push = true) {
  if (overlay.hidden) return;
  overlay.hidden = true;
  if (push && location.hash) history.pushState(null, '', location.pathname + location.search);
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
}

// one click handler for everything that opens a view
document.addEventListener('click', (e) => {
  const opener = e.target.closest('[data-open]');
  if (opener) {
    e.preventDefault();
    openSheet(opener.dataset.open);
    return;
  }
  if (!e.target.closest('.nav__menu')) setMenu(false);
});

$('#lid').addEventListener('click', openBox);
$('#rebox').addEventListener('click', closeBox);
$('#homeBtn').addEventListener('click', closeBox);
$('#sheetClose').addEventListener('click', () => closeSheet());
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeSheet(); });
toggle.addEventListener('click', () => setMenu(!menu.classList.contains('is-on')));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (menu.classList.contains('is-on')) setMenu(false);
    else closeSheet();
  }
  // keep Tab inside the open sheet
  if (e.key === 'Tab' && !overlay.hidden) {
    const f = [...sheet.querySelectorAll('a[href], button')];
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === sheet || document.activeElement === sheetBody)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

// deep links: #projects, #projects/nexus360, #about …
function fromHash() {
  const route = decodeURIComponent(location.hash.slice(1));
  if (route === 'open') openBox();
  else if (route && render(route)) openSheet(route, false);
  else closeSheet(false);
}
window.addEventListener('popstate', fromHash);
fromHash();

// desk clutter drifts gently away from the cursor
const scene = $('#scene');
if (matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) {
  window.addEventListener('pointermove', (e) => {
    scene.style.setProperty('--mx', (0.5 - e.clientX / innerWidth).toFixed(3));
    scene.style.setProperty('--my', (0.5 - e.clientY / innerHeight).toFixed(3));
  });
}
