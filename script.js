/* =========================================================
   Tanmay Mahajan — interactive portfolio.
   Content lives in data.js (loaded first).
   ========================================================= */

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
