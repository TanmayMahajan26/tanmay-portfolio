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

/* =========================================================
   Tray artwork — drawn here so the markup stays readable
   ========================================================= */
const ART = {
  tablet() {
    const C = { k: '#c792ea', f: '#82aaff', s: '#c3e88d', n: '#f78c6c', o: '#89ddff', t: '#d6deeb' };
    const lines = [
      [0, 'k22 f40 t8'], [1, 'o16 t30 s54'], [1, 'k18 f36 t10 n14'], [2, 't26 o12 s62'], [2, 'k14 t40'],
      [1, 'f30 t12 o22'], [0, 't6'], [0, 'k22 f34 t10'], [1, 'n18 t24 s40'], [1, 'k16 f28'], [2, 's70 t10'], [1, 't6'],
    ];
    const code = lines.map(([ind, toks], i) => {
      let x = 108 + ind * 14;
      const y = 50 + i * 15;
      const parts = toks.split(' ').map((tk) => {
        const w = +tk.slice(1);
        const r = `<rect x="${x}" y="${y}" width="${w}" height="6" rx="3" fill="${C[tk[0]]}" fill-opacity="${tk[0] === 't' ? 0.55 : 0.9}"/>`;
        x += w + 6;
        return r;
      });
      return `<rect x="92" y="${y}" width="8" height="6" rx="2" fill="#2a3340"/>${parts.join('')}`;
    }).join('');
    const side = [44, 30, 52, 38, 46, 28, 40, 34, 48, 30, 42, 36].map((w, i) => `<rect x="${i === 3 ? 20 : 26}" y="${50 + i * 15}" width="${w}" height="6" rx="3" fill="${i === 3 ? '#82aaff' : '#2c3644'}"/>`).join('');
    const bars = [22, 34, 18, 40, 30, 46].map((h, i) => `<rect x="${306 + i * 11}" y="${108 - h}" width="7" height="${h}" rx="2" fill="${i === 5 ? '#f78c6c' : '#3b6f8f'}"/>`).join('');
    return `<svg viewBox="0 0 400 280"><defs>
      <linearGradient id="tbBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#565c66"/><stop offset=".45" stop-color="#2b2f36"/><stop offset="1" stop-color="#17191d"/></linearGradient>
      <linearGradient id="tbGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <clipPath id="tbScr"><rect x="14" y="14" width="372" height="252" rx="12"/></clipPath></defs>
      <rect width="400" height="280" rx="24" fill="url(#tbBody)"/>
      <rect x="1.5" y="1.5" width="397" height="277" rx="22.5" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="1.5"/>
      <circle cx="7" cy="140" r="2.6" fill="#0a0c10" stroke="#3d434c"/>
      <g clip-path="url(#tbScr)">
        <rect x="14" y="14" width="372" height="252" fill="#0b0f15"/>
        <rect x="14" y="14" width="372" height="22" fill="#161b23"/>
        <circle cx="28" cy="25" r="3.5" fill="#ff5f57"/><circle cx="40" cy="25" r="3.5" fill="#febc2e"/><circle cx="52" cy="25" r="3.5" fill="#28c840"/>
        <rect x="150" y="20" width="100" height="10" rx="5" fill="#222935"/>
        <rect x="14" y="36" width="70" height="230" fill="#10151c"/>${side}${code}
        <rect x="292" y="46" width="84" height="74" rx="7" fill="#141b24"/><rect x="302" y="54" width="34" height="5" rx="2.5" fill="#3a4554"/>${bars}
        <rect x="292" y="128" width="84" height="60" rx="7" fill="#141b24"/>
        <path d="M300 176 L316 166 L330 170 L344 154 L358 158 L368 142" fill="none" stroke="#c3e88d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="14" y="246" width="372" height="20" fill="#3b6fd6"/><rect x="24" y="252" width="60" height="7" rx="3.5" fill="#fff" fill-opacity=".75"/><rect x="300" y="252" width="74" height="7" rx="3.5" fill="#fff" fill-opacity=".5"/>
        <polygon points="14,14 240,14 110,266 14,266" fill="url(#tbGlass)"/>
      </g></svg>`;
  },

  medal() {
    return `<svg viewBox="0 0 240 300"><defs>
      <linearGradient id="mdStrapL" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1d3d5c"/><stop offset="1" stop-color="#0f2236"/></linearGradient>
      <linearGradient id="mdStrapR" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#28507a"/><stop offset="1" stop-color="#16304a"/></linearGradient>
      <radialGradient id="mdGold" cx=".34" cy=".28" r=".85"><stop offset="0" stop-color="#fff6cf"/><stop offset=".32" stop-color="#f7cd55"/><stop offset=".72" stop-color="#d39a1e"/><stop offset="1" stop-color="#94640b"/></radialGradient>
      <linearGradient id="mdRim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffeaa8"/><stop offset=".5" stop-color="#c88f17"/><stop offset="1" stop-color="#7d5207"/></linearGradient>
      <linearGradient id="mdStar" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff3c2"/><stop offset="1" stop-color="#e3aa2c"/></linearGradient></defs>
      <path d="M36 0 H100 L142 150 L112 162 Z" fill="url(#mdStrapL)"/>
      <path d="M58 0 H76 L126 156 L118 159 Z" fill="#e8603c"/><path d="M80 0 H84 L130 154 L127 155 Z" fill="#fff" fill-opacity=".8"/>
      <path d="M204 0 H140 L98 150 L128 162 Z" fill="url(#mdStrapR)"/>
      <path d="M182 0 H164 L114 156 L122 159 Z" fill="#e8603c" fill-opacity=".92"/><path d="M160 0 H156 L110 154 L113 155 Z" fill="#fff" fill-opacity=".7"/>
      <path d="M98 150 L142 150 L128 162 L112 162 Z" fill="#000" fill-opacity=".35"/>
      <rect x="108" y="146" width="24" height="26" rx="7" fill="none" stroke="url(#mdRim)" stroke-width="6"/>
      <circle cx="120" cy="216" r="80" fill="url(#mdRim)"/>
      <circle cx="120" cy="216" r="71" fill="url(#mdGold)"/>
      <circle cx="120" cy="216" r="58" fill="none" stroke="#a87512" stroke-opacity=".6" stroke-width="2"/>
      <circle cx="120" cy="216" r="55" fill="none" stroke="#fff3c2" stroke-opacity=".35" stroke-width="1"/>
      <path transform="translate(1.8 2.4)" d="M120 178 L127.35 197.89 L148.53 198.73 L131.89 211.86 L137.63 232.27 L120 220.5 L102.37 232.27 L108.11 211.86 L91.47 198.73 L112.65 197.89 Z" fill="#7d5207" fill-opacity=".55"/>
      <path d="M120 178 L127.35 197.89 L148.53 198.73 L131.89 211.86 L137.63 232.27 L120 220.5 L102.37 232.27 L108.11 211.86 L91.47 198.73 L112.65 197.89 Z" fill="url(#mdStar)"/>
      <text x="120" y="256" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="11" letter-spacing="2" fill="#7d5207">2026</text>
      <path d="M64 180 A66 66 0 0 1 132 150" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="5" stroke-linecap="round"/></svg>`;
  },

  badge() {
    let x = 28;
    const bars = [];
    [3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 2, 1, 1, 3, 1, 2, 1, 2, 1, 3, 1].forEach((w, i) => {
      if (i % 2 === 0) bars.push(`<rect x="${x}" y="300" width="${w * 1.6}" height="34" fill="#1c2a3a"/>`);
      x += w * 1.6 + 2;
    });
    return `<svg viewBox="0 0 240 360"><defs>
      <linearGradient id="bdCard" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e6e3dc"/></linearGradient>
      <linearGradient id="bdClip" x1="0" x2="1"><stop offset="0" stop-color="#8f98a2"/><stop offset=".5" stop-color="#f1f3f5"/><stop offset="1" stop-color="#848d97"/></linearGradient>
      <clipPath id="bdPhoto"><rect x="26" y="124" width="86" height="104" rx="9"/></clipPath>
      <clipPath id="bdTop"><rect x="8" y="44" width="224" height="308" rx="16"/></clipPath></defs>
      <path d="M120 40 C 120 12 150 -16 210 -34" fill="none" stroke="#145650" stroke-width="30" stroke-linecap="butt"/>
      <path d="M120 40 C 120 12 150 -16 210 -34" fill="none" stroke="#2a9a8f" stroke-width="2" stroke-dasharray="6 5" stroke-opacity=".6"/>
      <rect x="104" y="26" width="32" height="24" rx="5" fill="url(#bdClip)"/><rect x="112" y="33" width="16" height="7" rx="3" fill="#5d656f"/>
      <rect x="8" y="44" width="224" height="308" rx="16" fill="url(#bdCard)"/>
      <g clip-path="url(#bdTop)"><rect x="8" y="44" width="224" height="62" fill="#1f7a72"/><rect x="8" y="100" width="224" height="6" fill="#e8603c"/></g>
      <rect x="96" y="56" width="48" height="10" rx="5" fill="#25282e"/>
      <text x="120" y="90" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="10" letter-spacing="2.4" fill="#fff" fill-opacity=".92">TANMAY.DEVS.SURF</text>
      <rect x="24" y="122" width="90" height="108" rx="10" fill="#d9d5cc"/>
      <image href="${ME.photo}" x="26" y="124" width="86" height="104" preserveAspectRatio="xMidYMid slice" clip-path="url(#bdPhoto)"/>
      <text x="124" y="146" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="22" fill="#1c2a3a">Tanmay</text>
      <text x="124" y="170" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="22" fill="#1c2a3a">Mahajan</text>
      <text x="124" y="190" font-family="Inter, sans-serif" font-size="11" fill="#55616f">Software Engineer</text>
      <rect x="124" y="200" width="88" height="18" rx="9" fill="#fdecc8"/><text x="168" y="212.5" text-anchor="middle" font-family="Inter, sans-serif" font-weight="600" font-size="9" fill="#8a5a00">AI · Full-Stack</text>
      <rect x="26" y="246" width="186" height="6" rx="3" fill="#e2ded4"/><rect x="26" y="260" width="140" height="6" rx="3" fill="#e2ded4"/><rect x="26" y="274" width="164" height="6" rx="3" fill="#ebe8e0"/>
      ${bars.join('')}
      <rect x="8.5" y="44.5" width="223" height="307" rx="15.5" fill="none" stroke="#000" stroke-opacity=".08"/></svg>`;
  },

  phone() {
    return `<svg viewBox="0 0 190 380"><defs>
      <linearGradient id="phBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5e646e"/><stop offset=".45" stop-color="#2d3138"/><stop offset="1" stop-color="#191b20"/></linearGradient>
      <radialGradient id="phWall" cx=".15" cy=".95" r="1.05"><stop offset="0" stop-color="#f08a5d"/><stop offset=".35" stop-color="#b8434a"/><stop offset=".7" stop-color="#3a1f3d"/><stop offset="1" stop-color="#10131b"/></radialGradient>
      <linearGradient id="phGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".18"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <clipPath id="phScr"><rect x="9" y="9" width="172" height="362" rx="27"/></clipPath></defs>
      <rect x="-2.5" y="92" width="4" height="34" rx="2" fill="#3a3f47"/><rect x="-2.5" y="136" width="4" height="34" rx="2" fill="#3a3f47"/><rect x="188.5" y="112" width="4" height="54" rx="2" fill="#3a3f47"/>
      <rect width="190" height="380" rx="34" fill="url(#phBody)"/>
      <rect x="1.5" y="1.5" width="187" height="377" rx="32.5" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="1.5"/>
      <rect x="9" y="9" width="172" height="362" rx="27" fill="#07090d"/>
      <g clip-path="url(#phScr)">
        <rect x="9" y="9" width="172" height="362" fill="url(#phWall)"/>
        <text x="95" y="66" text-anchor="middle" font-family="Inter, sans-serif" font-weight="500" font-size="11" fill="#fff" fill-opacity=".75">Mumbai · IST</text>
        <text x="95" y="108" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-weight="600" font-size="46" fill="#fff" fill-opacity=".94">10:24</text>
        <rect x="18" y="138" width="154" height="62" rx="15" fill="#fff" fill-opacity=".9"/>
        <rect x="28" y="150" width="24" height="24" rx="7" fill="#e8603c"/><path d="M33 157 h14 v10 h-14z M33 157 l7 6 7 -6" fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/>
        <text x="60" y="158" font-family="Inter, sans-serif" font-size="8.5" fill="#55616f">Mail · now</text>
        <text x="60" y="172" font-family="Inter, sans-serif" font-weight="700" font-size="11" fill="#1c2a3a">New message</text>
        <text x="60" y="187" font-family="Inter, sans-serif" font-size="9.5" fill="#55616f">Let’s build something</text>
        <circle cx="42" cy="338" r="15" fill="#fff" fill-opacity=".16"/><circle cx="148" cy="338" r="15" fill="#fff" fill-opacity=".16"/>
        <rect x="70" y="360" width="50" height="4" rx="2" fill="#fff" fill-opacity=".75"/>
        <polygon points="9,9 150,9 40,371 9,371" fill="url(#phGlass)"/>
      </g>
      <rect x="72" y="18" width="46" height="13" rx="6.5" fill="#000"/></svg>`;
  },

  clapper() {
    const stripes = (y, flip) => Array.from({ length: 8 }, (_, i) => {
      const x = 2 + i * 40;
      return flip
        ? `<polygon points="${x - 12},${y} ${x + 8},${y} ${x + 20},${y + 30} ${x},${y + 30}" fill="#f4f1ea"/>`
        : `<polygon points="${x},${y} ${x + 20},${y} ${x + 8},${y + 30} ${x - 12},${y + 30}" fill="#f4f1ea"/>`;
    }).join('');
    return `<svg viewBox="0 0 300 250"><defs>
      <linearGradient id="cbBody" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="#353a43"/><stop offset="1" stop-color="#14161a"/></linearGradient>
      <clipPath id="cbTop"><rect x="10" y="40" width="280" height="30" rx="4"/></clipPath>
      <clipPath id="cbMid"><rect x="10" y="78" width="280" height="30" rx="4"/></clipPath></defs>
      <rect x="10" y="78" width="280" height="30" rx="4" fill="#1b1e23"/><g clip-path="url(#cbMid)">${stripes(78, true)}</g>
      <g transform="rotate(-9 16 74)"><rect x="10" y="40" width="280" height="30" rx="4" fill="#1b1e23"/><g clip-path="url(#cbTop)">${stripes(40, false)}</g>
        <rect x="10.5" y="40.5" width="279" height="29" rx="3.5" fill="none" stroke="#fff" stroke-opacity=".12"/></g>
      <rect x="10" y="112" width="280" height="132" rx="8" fill="url(#cbBody)"/>
      <rect x="10.5" y="112.5" width="279" height="131" rx="7.5" fill="none" stroke="#fff" stroke-opacity=".1"/>
      <circle cx="18" cy="74" r="6" fill="#9aa3ad"/><circle cx="18" cy="74" r="2.4" fill="#4a5059"/>
      <g font-family="JetBrains Mono, monospace" font-size="9" letter-spacing="1.5" fill="#cfd4da" fill-opacity=".7">
        <text x="24" y="134">PROD.</text><text x="24" y="166">ROLE</text><text x="162" y="166">SEASON</text><text x="24" y="214">DIR · CAM · SOUND</text><text x="162" y="214">TAKE</text></g>
      <g font-family="Space Grotesk, sans-serif" font-weight="700" fill="#fff" fill-opacity=".92">
        <text x="72" y="136" font-size="17">TEDxCRCE</text><text x="24" y="186" font-size="13">EXEC. PRODUCER</text><text x="162" y="186" font-size="13">2025–26</text><text x="206" y="216" font-size="17">04</text></g>
      <g stroke="#e6e9ec" stroke-opacity=".28" stroke-width="1.5"><path d="M20 146 H280 M20 196 H280 M152 146 V236"/></g></svg>`;
  },

  keys() {
    const theme = {
      light: ['#cdc9c0', '#fbfaf6', '#e6e2d9', '#1c2a3a'],
      dark: ['#22252b', '#4b515b', '#33373f', '#e9edf2'],
      coral: ['#b8411f', '#f58a68', '#e2603c', '#fff'],
      teal: ['#11473f', '#36a497', '#1f7a72', '#fff'],
    };
    const key = (id, x, y, rot, t, label) => {
      const [side, top1, top2, ink] = theme[t];
      return `<g transform="translate(${x} ${y}) rotate(${rot} 36 36)">
        <rect x="2" y="7" width="72" height="72" rx="13" fill="#000" fill-opacity=".45" filter="url(#kcBlur)"/>
        <rect width="72" height="72" rx="13" fill="${side}"/>
        <rect x="7" y="5" width="58" height="56" rx="11" fill="url(#kc${id})"/>
        <linearGradient id="kc${id}" x1="0" y1="0" x2=".3" y2="1"><stop offset="0" stop-color="${top1}"/><stop offset="1" stop-color="${top2}"/></linearGradient>
        <text x="36" y="39" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="${label.length > 2 ? 14 : 17}" fill="${ink}">${label}</text></g>`;
    };
    return `<svg viewBox="0 0 260 190"><defs><filter id="kcBlur" x="-30%" y="-30%" width="160%" height="170%"><feGaussianBlur stdDeviation="3.5"/></filter></defs>
      ${key(1, 8, 12, -5, 'light', 'Py')}${key(2, 90, 4, 4, 'coral', 'JS')}${key(3, 172, 16, -3, 'dark', 'AI')}
      ${key(4, 38, 100, 6, 'teal', '{ }')}${key(5, 124, 104, -6, 'light', 'SQL')}</svg>`;
  },

  resume() {
    // a printed one-page résumé with a dog-eared corner
    const line = (x, y, w, c = '#d9d5cc') => `<rect x="${x}" y="${y}" width="${w}" height="4.5" rx="2.25" fill="${c}"/>`;
    const section = (y, rows) => `<rect x="20" y="${y}" width="44" height="6" rx="3" fill="#e8603c"/>${rows.map((w, i) => line(20, y + 14 + i * 10, w)).join('')}`;
    return `<svg viewBox="0 0 220 300"><defs>
      <linearGradient id="rsPaper" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".7" stop-color="#f4f2ec"/><stop offset="1" stop-color="#e7e3da"/></linearGradient>
      <linearGradient id="rsFold" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#d8d3c8"/><stop offset="1" stop-color="#fbfaf6"/></linearGradient></defs>
      <path d="M0 0 H186 L220 34 V300 H0 Z" fill="url(#rsPaper)"/>
      <path d="M186 0 V26 a8 8 0 0 0 8 8 H220 Z" fill="url(#rsFold)"/>
      <path d="M186 0 V26 a8 8 0 0 0 8 8 H220" fill="none" stroke="#000" stroke-opacity=".08"/>
      <text x="110" y="34" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-weight="700" font-size="17" letter-spacing=".5" fill="#1c2a3a">TANMAY MAHAJAN</text>
      <text x="110" y="48" text-anchor="middle" font-family="Inter, sans-serif" font-size="7.5" fill="#55616f">Mumbai · tanmay.devs.surf · GitHub · LinkedIn</text>
      <rect x="20" y="56" width="180" height="1.2" fill="#1c2a3a" fill-opacity=".5"/>
      ${section(66, [176, 150])}
      ${section(104, [180, 164, 120, 172, 140])}
      ${section(174, [168, 150, 176])}
      ${section(222, [160, 132])}
      <rect x="160" y="262" width="44" height="22" rx="5" fill="#d93a2b"/>
      <text x="182" y="277" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="11" fill="#fff">PDF</text>
      <path d="M0 0 H186 L220 34 V300 H0 Z" fill="none" stroke="#000" stroke-opacity=".07"/></svg>`;
  },
};

document.querySelectorAll('[data-art]').forEach((el) => {
  $('.obj__art', el).innerHTML = ART[el.dataset.art]();
});
const COUNTS = { projects: `${PROJECTS.length} projects`, awards: `${AWARDS.length} events`, experience: `${EXPERIENCE.length} roles` };
document.querySelectorAll('[data-count]').forEach((el) => { el.textContent = COUNTS[el.dataset.count]; });

/* =========================================================
   Desk clutter: only items near the cursor get nudged away,
   a few pixels at most, as if brushed by the hand
   ========================================================= */
if (matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) {
  const items = [...document.querySelectorAll('.desk-item')].map((el) => ({ el, px: 0, py: 0 }));
  const PUSH = 9; // max px
  const TILT = 2.2; // max deg
  let mx = -1e5, my = -1e5, queued = false;

  const nudge = () => {
    queued = false;
    for (const it of items) {
      const r = it.el.getBoundingClientRect();
      if (!r.width) continue;
      // centre without the current nudge, so the item doesn't chase itself
      const cx = r.left + r.width / 2 - it.px;
      const cy = r.top + r.height / 2 - it.py;
      const reach = Math.max(r.width, r.height) / 2 + 60;
      const dx = cx - mx, dy = cy - my;
      const d = Math.hypot(dx, dy) || 1;
      const f = d < reach ? (1 - d / reach) ** 1.5 : 0;
      it.px = (dx / d) * PUSH * f;
      it.py = (dy / d) * PUSH * f;
      it.el.style.setProperty('--px', `${it.px.toFixed(2)}px`);
      it.el.style.setProperty('--py', `${it.py.toFixed(2)}px`);
      it.el.style.setProperty('--pr', `${((dx * dy > 0 ? 1 : -1) * TILT * f).toFixed(2)}deg`);
    }
  };
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(nudge); } };
  window.addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; queue(); }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => { mx = my = -1e5; queue(); });
}
