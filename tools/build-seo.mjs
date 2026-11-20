// Builds the search- and AI-friendly parts of the site from data.js:
//   about/, projects/, projects/<id>/   plain HTML pages Google can index one by one
//   llms.txt, llms-full.txt             summaries for AI answer engines (llmstxt.org)
//   sitemap.xml                         every page with today's date
//   index.html                          structured data + text summary between seo markers
//
// Run from the repo root after editing data.js:   node tools/build-seo.mjs

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const SITE = 'https://tanmay.devs.surf';
const TODAY = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' }); // YYYY-MM-DD, IST

const D = vm.runInNewContext(
  fs.readFileSync(path.join(ROOT, 'data.js'), 'utf8') + ';({ME,PROJECTS,AWARDS,CERTS,EXPERIENCE,EDUCATION,SKILLS})'
);
const { ME, PROJECTS, AWARDS, CERTS, EXPERIENCE, EDUCATION, SKILLS } = D;

/* ---------------------------------------------------------- helpers */
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const text = (s) => String(s).replace(/<[^>]+>/g, '');
const hrefOf = (s) => (String(s).match(/href="([^"]+)"/) || [])[1];
const json = (o) => JSON.stringify(o, null, 2).replace(/<\//g, '<\\/');
const list = (arr) => (arr.length < 2 ? arr.join('') : `${arr.slice(0, -1).join(', ')} and ${arr[arr.length - 1]}`);
const write = (rel, content) => {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  console.log('wrote', rel);
};

const ROLE = 'Software Engineer, AI & Full-Stack Developer';
const CURRENT = EXPERIENCE[0];
const COLLEGE = EDUCATION[0];
const BIO = `Tanmay Mahajan is a software engineer and AI / full-stack developer based in ${ME.location}. Tanmay is studying ${COLLEGE.role} at ${COLLEGE.org} (Fr. CRCE, ${COLLEGE.when}), works as a ${CURRENT.role.split(' · ')[0]} at ${CURRENT.org}, and is Executive Producer of TEDxCRCE.`;
const BIO2 = `Tanmay builds AI products end to end: financial data platforms, risk-aware systems and tooling for AI agents. Most of them started at hackathons, including Nexus360, which won 1st place at CODEISSANCE 2026 (TSEC Codestorm).`;
const techList = [...SKILLS.Languages, ...SKILLS.Development.slice(0, 5), ...SKILLS['AI & cloud']];

/* ---------------------------------------------------------- shared structured data */
const PERSON_ID = `${SITE}/#person`;
const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: ME.name,
  givenName: 'Tanmay',
  familyName: 'Mahajan',
  url: `${SITE}/`,
  image: `${SITE}/assets/me.jpg`,
  email: `mailto:${ME.email}`,
  jobTitle: CURRENT.role.split(' · ')[0],
  description: `${ROLE}; Computer Engineering student at ${COLLEGE.org}, Mumbai.`,
  worksFor: { '@type': 'Organization', name: CURRENT.org, url: 'https://www.linkedin.com/company/the-xdevs/' },
  affiliation: { '@type': 'Organization', name: 'TEDxCRCE', url: 'https://www.linkedin.com/company/tedxcrce/' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: COLLEGE.org, url: 'https://frcrce.ac.in/' },
    { '@type': 'School', name: EDUCATION[1].org.replace('’', "'") },
  ],
  homeLocation: { '@type': 'Place', name: 'Mumbai, Maharashtra, India' },
  address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', addressCountry: 'IN' },
  knowsLanguage: SKILLS['Spoken languages'],
  knowsAbout: ['Software engineering', 'Full-stack development', 'Artificial intelligence', ...techList],
  award: AWARDS.map((a) => text(a.title)),
  hasCredential: CERTS.map((c) => ({
    '@type': 'EducationalOccupationalCredential',
    name: text(c.org),
    credentialCategory: 'certificate',
    recognizedBy: { '@type': 'Organization', name: c.role },
    url: hrefOf(c.org),
  })),
  sameAs: [ME.linkedin, ME.github],
};
const personRef = { '@type': 'Person', '@id': PERSON_ID, name: ME.name, url: `${SITE}/` };
const website = { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: ME.name, alternateName: 'Tanmay Mahajan Portfolio', inLanguage: 'en', publisher: { '@id': PERSON_ID } };
const crumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE}${url}` })),
});

/* ---------------------------------------------------------- FAQ (answer-engine friendly) */
const FAQ = [
  ['Who is Tanmay Mahajan?', `${BIO} ${BIO2}`],
  ['What projects has Tanmay Mahajan built?', `Tanmay Mahajan has built ${list(PROJECTS.map((p) => `${p.name} (${p.tagline.replace(/ \(.*\)$/, '')})`))}.`],
  ['Which hackathons has Tanmay Mahajan won or been a finalist in?', `${list(AWARDS.map((a) => text(a.title)))}.`],
  ['What technologies does Tanmay Mahajan work with?', `Languages: ${list(SKILLS.Languages)}. Development: ${list(SKILLS.Development)}. AI and cloud: ${list(SKILLS['AI & cloud'])}.`],
  ['Where does Tanmay Mahajan study?', `Tanmay Mahajan studies ${COLLEGE.role} at ${COLLEGE.org} in Mumbai (${COLLEGE.when}). Before that, Tanmay attended ${EDUCATION[1].org} (${EDUCATION[1].when}).`],
  ['Is Tanmay Mahajan open to internships or collaborations?', 'Yes. Tanmay is open to software and AI engineering internships, hackathon teams and collaborations.'],
  ['How can I contact Tanmay Mahajan?', `Email ${ME.email}, or message Tanmay on LinkedIn (${ME.linkedin}) or GitHub (${ME.github}).`],
];

/* ---------------------------------------------------------- page shell */
const ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%231c2a3a'/%3E%3Ctext x='16' y='22' font-family='Arial' font-weight='700' font-size='15' fill='%23f2b632' text-anchor='middle'%3ETM%3C/text%3E%3C/svg%3E`;

function shell({ url, title, desc, depth, graph, body }) {
  const up = '../'.repeat(depth);
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}" />
  <meta name="author" content="${ME.name}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${SITE}${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${ME.name}" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(desc)}" />
  <meta property="og:url" content="${SITE}${url}" />
  <meta property="og:image" content="${SITE}/assets/og.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" href="${ICON}" />
  <link rel="stylesheet" href="${up}pages.css" />
  <script type="application/ld+json">
${json({ '@context': 'https://schema.org', '@graph': graph })}
  </script>
</head>
<body>
  <header class="top">
    <a class="brand" href="${up}">${ME.name}</a>
    <nav aria-label="Main">
      <a href="${up}about/">About</a>
      <a href="${up}projects/">Projects</a>
      <a href="${up}">Interactive portfolio</a>
    </nav>
  </header>
  <main>
${body}
  </main>
  <footer class="foot">
    <p><b>${ME.name}</b> · ${esc(ROLE)} · ${ME.location}</p>
    <p><a href="mailto:${ME.email}">${ME.email}</a> · <a href="${ME.linkedin}" rel="me">LinkedIn</a> · <a href="${ME.github}" rel="me">GitHub</a> · <a href="${up}${ME.resume}">Résumé (PDF)</a></p>
  </footer>
</body>
</html>
`;
}

const crumbNav = (items) =>
  `<nav class="crumbs" aria-label="Breadcrumb">${items.map(([name, href]) => (href ? `<a href="${href}">${esc(name)}</a>` : `<span aria-current="page">${esc(name)}</span>`)).join(' <i>›</i> ')}</nav>`;
const tl = (items) => `<ol class="tl">${items.map((e) => `<li><time>${e.when}</time><b>${e.org}</b><em>${e.role}</em>${e.text ? `<p>${e.text}</p>` : ''}</li>`).join('')}</ol>`;

/* ---------------------------------------------------------- /about/ */
write('about/index.html', shell({
  url: '/about/',
  depth: 1,
  title: `About Tanmay Mahajan — ${ROLE}`,
  desc: `${BIO}`.slice(0, 158),
  graph: [
    website,
    person,
    { '@type': 'AboutPage', '@id': `${SITE}/about/#page`, url: `${SITE}/about/`, name: `About ${ME.name}`, isPartOf: { '@id': `${SITE}/#website` }, mainEntity: { '@id': PERSON_ID }, dateModified: TODAY },
    { '@type': 'FAQPage', '@id': `${SITE}/about/#faq`, mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    crumbs([['Home', '/'], ['About', '/about/']]),
  ],
  body: `    ${crumbNav([['Home', '../'], ['About']])}
    <section class="hero">
      <img src="../assets/me.jpg" alt="${ME.name}, software engineer" width="168" height="168" />
      <div>
        <p class="eyebrow">About</p>
        <h1>${ME.name}</h1>
        <p class="lead">${esc(ROLE)} · ${ME.location}</p>
      </div>
    </section>
    <p>${esc(BIO)}</p>
    <p>${esc(BIO2)}</p>
    <p class="btns"><a class="btn" href="../${ME.resume}">Download résumé</a><a class="btn btn--ghost" href="../projects/">See the projects</a></p>

    <h2>Experience</h2>
    ${tl(EXPERIENCE)}

    <h2>Projects</h2>
    <ul class="cards">${PROJECTS.map((p) => `<li><a href="../projects/${p.id}/"><b>${p.name}</b><span>${esc(p.tagline)}</span><small>${esc(p.award)}</small></a></li>`).join('')}</ul>

    <h2>Hackathons and awards</h2>
    <ul class="plain">${AWARDS.map((a) => `<li><b>${a.title}</b> — ${a.text}${a.project ? ` <a href="../projects/${a.project}/">See the project</a>` : ''}</li>`).join('')}</ul>

    <h2>Education</h2>
    ${tl(EDUCATION)}

    <h2>Certifications</h2>
    ${tl(CERTS)}

    <h2>Skills</h2>
    <dl class="skills">${Object.entries(SKILLS).map(([g, l]) => `<div><dt>${g}</dt><dd>${l.join(', ')}</dd></div>`).join('')}</dl>

    <h2 id="faq">Frequently asked questions</h2>
    <div class="faq">${FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>

    <h2>Contact</h2>
    <p>Email <a href="mailto:${ME.email}">${ME.email}</a>, or find Tanmay on <a href="${ME.linkedin}" rel="me">LinkedIn</a> and <a href="${ME.github}" rel="me">GitHub</a>.</p>`,
}));

/* ---------------------------------------------------------- /projects/ */
write('projects/index.html', shell({
  url: '/projects/',
  depth: 1,
  title: `Projects by Tanmay Mahajan — AI & full-stack work`,
  desc: `Projects by Tanmay Mahajan: ${PROJECTS.map((p) => p.name).join(', ')}. AI pipelines, full-stack platforms and hackathon wins.`,
  graph: [
    website,
    personRef,
    { '@type': 'CollectionPage', '@id': `${SITE}/projects/#page`, url: `${SITE}/projects/`, name: `Projects by ${ME.name}`, isPartOf: { '@id': `${SITE}/#website` }, about: { '@id': PERSON_ID } },
    { '@type': 'ItemList', itemListElement: PROJECTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/projects/${p.id}/`, name: p.name })) },
    crumbs([['Home', '/'], ['Projects', '/projects/']]),
  ],
  body: `    ${crumbNav([['Home', '../'], ['Projects']])}
    <p class="eyebrow">Projects</p>
    <h1>Projects by Tanmay Mahajan</h1>
    <p class="lead">Mostly born at hackathons, all shipped end to end: AI pipelines, an agent-workflow compiler, full-stack platforms and a published research paper.</p>
    <ul class="cards">${PROJECTS.map((p) => `<li><a href="${p.id}/"><b>${p.name}</b><span>${esc(p.tagline)}</span><small>${esc(p.meta.Category)} · ${esc(p.award)}</small></a></li>`).join('')}</ul>`,
}));

/* ---------------------------------------------------------- /projects/<id>/ */
const PAPER = {
  zenthera: {
    '@type': 'ScholarlyArticle',
    headline: 'Zenthera: A High-Speed Antimicrobial Resistance Prediction Pipeline Using K-mer Analysis and Tree-Based Ensembles',
    url: PROJECTS.find((p) => p.id === 'zenthera').links.find(([l]) => /paper/i.test(l))[1],
    isPartOf: { '@type': 'Periodical', name: 'International Journal of Research and Innovation in Applied Science (IJRIAS)' },
    author: personRef,
  },
};

for (const p of PROJECTS) {
  const others = PROJECTS.filter((x) => x.id !== p.id);
  const url = `/projects/${p.id}/`;
  const work = {
    '@type': 'CreativeWork',
    '@id': `${SITE}${url}#work`,
    name: p.name,
    headline: `${p.name} — ${p.tagline}`,
    description: `${p.tagline}. ${text(p.bullets.join(' '))}`,
    url: `${SITE}${url}`,
    genre: p.meta.Category,
    keywords: p.tags.join(', '),
    creator: personRef,
    author: personRef,
    ...(p.links.length ? { sameAs: p.links.map(([, u]) => u) } : {}),
    ...(/place|finalist/i.test(p.award) ? { award: p.meta.Result || p.award } : {}),
  };
  write(`projects/${p.id}/index.html`, shell({
    url,
    depth: 2,
    title: `${p.name} by Tanmay Mahajan — ${p.tagline.replace(/ \(.*\)$/, '')}`,
    desc: `${p.name}, built by Tanmay Mahajan: ${p.tagline}. ${p.award}.`.slice(0, 160),
    graph: [
      website,
      personRef,
      { '@type': 'WebPage', '@id': `${SITE}${url}#page`, url: `${SITE}${url}`, name: `${p.name} by ${ME.name}`, isPartOf: { '@id': `${SITE}/#website` }, mainEntity: { '@id': `${SITE}${url}#work` }, dateModified: TODAY },
      work,
      ...(PAPER[p.id] ? [PAPER[p.id]] : []),
      crumbs([['Home', '/'], ['Projects', '/projects/'], [p.name, url]]),
    ],
    body: `    ${crumbNav([['Home', '../../'], ['Projects', '../'], [p.name]])}
    <p class="eyebrow">${esc(p.meta.Category)}</p>
    <h1>${p.name}</h1>
    <p class="lead">${esc(p.tagline)}</p>
    <p class="by">A project by <a href="../../about/">Tanmay Mahajan</a> · <span class="ribbon">${esc(p.award)}</span></p>
    ${p.links.length ? `<p class="btns">${p.links.map(([l, u], i) => `<a class="btn ${i ? 'btn--ghost' : ''}" href="${u}" rel="noopener">${esc(l)} ↗</a>`).join('')}</p>` : ''}
    <dl class="meta">${Object.entries(p.meta).map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
    ${p.stats ? `<h2>By the numbers</h2><ul class="stats">${p.stats.map(([n, l]) => `<li><b>${n}</b><span>${esc(l)}</span></li>`).join('')}</ul>` : ''}
    ${p.flow ? `<h2>${esc(p.flowTitle)}</h2><ol class="flow">${p.flow.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>` : ''}
    <h2>What Tanmay built</h2>
    <ul class="plain">${p.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
    <h2>Highlights</h2>
    <ul class="chips">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    <p class="btns"><a class="btn btn--ghost" href="../../#projects/${p.id}">Open in the interactive portfolio</a></p>
    <h2>More projects by Tanmay Mahajan</h2>
    <ul class="cards">${others.map((o) => `<li><a href="../${o.id}/"><b>${o.name}</b><span>${esc(o.tagline)}</span></a></li>`).join('')}</ul>`,
  }));
}

/* ---------------------------------------------------------- llms.txt / llms-full.txt */
const llms = `# Tanmay Mahajan

> ${BIO} ${BIO2}

Canonical site: ${SITE}/

## Pages

- [About Tanmay Mahajan](${SITE}/about/): bio, experience, education, hackathons, certifications, skills and FAQ
- [Projects by Tanmay Mahajan](${SITE}/projects/): all projects
${PROJECTS.map((p) => `- [${p.name}](${SITE}/projects/${p.id}/): ${p.tagline} (${p.award})`).join('\n')}
- [Full text for AI assistants](${SITE}/llms-full.txt)

## Profiles

- [LinkedIn](${ME.linkedin})
- [GitHub](${ME.github})
- [Résumé (PDF)](${SITE}/${ME.resume})
- Email: ${ME.email}
`;
write('llms.txt', llms);

const full = `# Tanmay Mahajan — ${ROLE}

${BIO}

${BIO2}

Website: ${SITE}/ · LinkedIn: ${ME.linkedin} · GitHub: ${ME.github} · Email: ${ME.email}

## Experience

${EXPERIENCE.map((e) => `- **${e.role}**, ${e.org} (${e.when})${e.text ? `: ${e.text}` : ''}`).join('\n')}

## Education

${EDUCATION.map((e) => `- ${e.role}, ${e.org} (${e.when})`).join('\n')}

## Projects

${PROJECTS.map((p) => `### ${p.name} — ${p.tagline}

${p.award}. ${Object.entries(p.meta).map(([k, v]) => `${k}: ${v}`).join('. ')}.

${p.bullets.map((b) => `- ${b}`).join('\n')}
${p.links.length ? `\nLinks: ${p.links.map(([l, u]) => `[${l}](${u})`).join(' · ')}` : ''}
Page: ${SITE}/projects/${p.id}/`).join('\n\n')}

## Hackathons and awards

${AWARDS.map((a) => `- **${text(a.title)}**: ${a.text}`).join('\n')}

## Certifications

${CERTS.map((c) => `- ${text(c.org)} — ${c.role} (${c.when})${hrefOf(c.org) ? `: ${hrefOf(c.org)}` : ''}`).join('\n')}

## Skills

${Object.entries(SKILLS).map(([g, l]) => `- ${g}: ${l.join(', ')}`).join('\n')}

## FAQ

${FAQ.map(([q, a]) => `**${q}**\n${a}`).join('\n\n')}
`;
write('llms-full.txt', full);

/* ---------------------------------------------------------- sitemap */
const urls = ['/', '/about/', '/projects/', ...PROJECTS.map((p) => `/projects/${p.id}/`)];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${SITE}${u}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </url>`).join('\n')}
</urlset>
`);

/* ---------------------------------------------------------- index.html: structured data + text summary */
const homeGraph = [
  website,
  { '@type': 'ProfilePage', '@id': `${SITE}/#profilepage`, url: `${SITE}/`, name: `${ME.name} — ${ROLE}`, isPartOf: { '@id': `${SITE}/#website` }, mainEntity: { '@id': PERSON_ID }, dateModified: TODAY },
  person,
];
const summary = `    <header class="sr-only">
      <h1>${ME.name} — ${esc(ROLE)}</h1>
      <p>${esc(BIO)}</p>
      <p>${esc(BIO2)} <a href="about/">More about Tanmay Mahajan</a>.</p>
      <h2>Projects by Tanmay Mahajan</h2>
      <ul>
${PROJECTS.map((p) => `        <li><a href="projects/${p.id}/">${p.name}</a> — ${esc(p.tagline)}. ${esc(p.award)}.</li>`).join('\n')}
      </ul>
      <h2>Skills</h2>
      <p>${esc(list(techList))}.</p>
      <h2>Contact Tanmay Mahajan</h2>
      <p>Email <a href="mailto:${ME.email}">${ME.email}</a>, or find Tanmay on <a href="${ME.linkedin}" rel="me">LinkedIn</a> and <a href="${ME.github}" rel="me">GitHub</a>. <a href="${ME.resume}">Download résumé (PDF)</a>.</p>
    </header>`;

let index = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const swap = (src, name, content) => {
  const re = new RegExp(`(<!-- seo:${name} -->)[\\s\\S]*?(<!-- /seo:${name} -->)`);
  if (!re.test(src)) throw new Error(`index.html is missing the seo:${name} markers`);
  return src.replace(re, `$1\n${content}\n    $2`);
};
index = swap(index, 'jsonld', `  <script type="application/ld+json">\n${json({ '@context': 'https://schema.org', '@graph': homeGraph })}\n  </script>`);
index = swap(index, 'summary', summary);
write('index.html', index);
