/* =========================================================
   Tanmay Mahajan — portfolio content.
   Single source of truth: used by the interactive site (script.js)
   and by tools/build-seo.mjs, which generates the text pages,
   sitemap and llms.txt. Edit here, then run: node tools/build-seo.mjs
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
