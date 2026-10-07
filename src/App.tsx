import { useEffect, useState, type FormEvent } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Braces,
  Check,
  Code2,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'
import './App.css'

const roles = [
  'Full-Stack Developer',
  'Product Builder',
  'DSA Problem Solver',
  'Competitive Programmer',
  'AI & Backend Enthusiast',
]

function RotatingRole() {
  const [activeRole, setActiveRole] = useState(0)

  useEffect(() => {
    const roleTimer = window.setInterval(() => setActiveRole((current) => (current + 1) % roles.length), 3200)
    return () => window.clearInterval(roleTimer)
  }, [])

  return <span key={roles[activeRole]} className="role-text" aria-live="polite" aria-atomic="true">{roles[activeRole]}</span>
}

function ScrollEffects() {
  useEffect(() => {
    const header = document.querySelector('.site-header')
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--scroll-progress', String(total > 0 ? window.scrollY / total : 0))
      header?.classList.toggle('site-header--scrolled', window.scrollY > 32)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}

const projects = [
  {
    name: 'QueryMind',
    tagline: 'Ask. Retrieve. Understand.',
    category: 'AI',
    type: 'Knowledge assistant',
    description:
      'An AI-powered knowledge platform that makes information retrieval feel like a focused conversation.',
    problem:
      'Important information gets buried across documents. QueryMind explores a more direct way to find and understand it.',
    features: ['RAG-based retrieval', 'Context-aware answers', 'AI API integration', 'Interactive product UI'],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'AI APIs', 'RAG'],
    visual: 'query',
  },
  {
    name: 'DocSync',
    tagline: 'Document checks, made clearer.',
    category: 'AI',
    type: 'Document intelligence',
    description:
      'A document compliance concept for helping students and institutions spot inconsistencies before submission.',
    problem:
      'Manual document review is repetitive and small mismatches can create avoidable delays.',
    features: ['OCR extraction concept', 'Field mismatch checks', 'Explainable risk signals', 'Role-aware workflows'],
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Redis', 'OCR'],
    visual: 'docsync',
  },
  {
    name: 'ScaleCart',
    tagline: 'Beyond CRUD. Built around the shopping flow.',
    category: 'Full-stack',
    type: 'E-commerce',
    description:
      'A responsive shopping experience for exploring product discovery, cart workflows, and backend APIs.',
    problem:
      'A useful commerce product depends on coherent journeys, not just a list of database operations.',
    features: ['Product browsing', 'Search and filtering', 'Cart management', 'Responsive workflows'],
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    visual: 'cart',
  },
  {
    name: 'Blinkit AI',
    tagline: 'Support that gets to the point.',
    category: 'AI',
    type: 'Customer experience',
    description:
      'A conversational support experience exploring how intent detection and knowledge retrieval can resolve common requests.',
    problem:
      'Customers want clear next steps without navigating a maze of help pages.',
    features: ['Conversational interface', 'Intent detection flow', 'Knowledge retrieval concepts', 'Customer-first journeys'],
    stack: ['React', 'JavaScript', 'Node.js', 'Express', 'AI', 'RAG'],
    visual: 'support',
  },
  {
    name: 'Therapist SaaS',
    tagline: 'A calmer digital workspace for care.',
    category: 'SaaS',
    type: 'Workflow platform',
    description:
      'A MERN-stack platform shaped around therapist and user workflows, with a dashboard-first product experience.',
    problem:
      'Care workflows deserve software that feels clear, dependable, and considerate of the people using it.',
    features: ['Authentication flows', 'Dashboard experience', 'REST API structure', 'Responsive product UI'],
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    visual: 'saas',
  },
  {
    name: 'AI Readiness',
    tagline: 'A practical starting point for adopting AI.',
    category: 'Full-stack',
    type: 'Interactive assessment',
    description:
      'An assessment experience that helps people reflect on AI readiness and explore relevant next steps.',
    problem:
      'AI adoption can feel abstract. A guided assessment can make the first questions more actionable.',
    features: ['Interactive questionnaire', 'Transparent scoring logic', 'AI-oriented suggestions', 'Responsive flow'],
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    visual: 'readiness',
  },
]

const techGroups = [
  { name: 'Languages', items: ['Java', 'Python', 'C', 'JavaScript'] },
  { name: 'Frontend', items: ['HTML', 'CSS', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs'] },
  { name: 'Data', items: ['MongoDB', 'PostgreSQL', 'Redis'] },
  { name: 'AI systems', items: ['RAG', 'AI APIs', 'Prompt Engineering', 'OCR concepts'] },
  { name: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Copilot', 'Cursor', 'ChatGPT', 'Claude'] },
]

const roadmap = [
  'Java fundamentals',
  'Arrays',
  'Sorting',
  'Searching',
  'Two pointers',
  'Hashing',
  'Strings',
  'Linked lists',
  'Stacks & queues',
  'Trees',
  'Graphs',
  'Dynamic programming',
]

const principles = [
  ['01', 'Understand', 'Understand the problem before writing the solution.'],
  ['02', 'Build', 'Turn ideas into functional, user-focused products.'],
  ['03', 'Optimize', 'Improve performance, scalability, and code quality.'],
  ['04', 'Iterate', 'Learn from mistakes, feedback, and real-world constraints.'],
]

const journey = [
  ['Foundation', 'Programming fundamentals and Java'],
  ['Problem solving', 'Structured DSA preparation with Java'],
  ['Building', 'Full-stack and AI-powered applications'],
  ['Product thinking', 'SaaS, AI, and enterprise-oriented ideas'],
  ['Leadership', 'Campus Ambassador and CP Club Coordinator'],
  ['Next', 'Product Engineering'],
]

const navItems = [
  ['About', 'about'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['DSA', 'dsa'],
  ['Contact', 'contact'],
]

function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`social-links${compact ? ' social-links--compact' : ''}`}>
      <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
        <Code2 size={17} aria-hidden="true" />
        {!compact && <span>GitHub</span>}
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <BriefcaseBusiness size={17} aria-hidden="true" />
        {!compact && <span>LinkedIn</span>}
      </a>
    </div>
  )
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function ProjectVisual({ kind }: { kind: string }) {
  return (
    <div className={`project-visual project-visual--${kind}`} aria-hidden="true">
      <div className="visual-window">
        <div className="visual-window__top"><span /><span /><span /><i>viresh / lab</i></div>
        {kind === 'query' && (
          <div className="query-preview">
            <div className="query-side"><b>Q</b><span /><span /><span /></div>
            <div className="query-main"><small>KNOWLEDGE BASE / 04 FILES</small><strong>What connects these ideas?</strong><div className="query-prompt">Ask your documents a question <span>Enter</span></div><p><em>AI</em> Based on your notes, three themes appear across the material.</p><div className="query-source">Found in: product-notes.pdf +2</div></div>
          </div>
        )}
        {kind === 'docsync' && (
          <div className="document-preview"><div className="doc-summary"><small>REVIEW QUEUE</small><strong>Document check</strong><span className="doc-status">IN REVIEW</span></div><div className="doc-row"><i>01</i><span>Name match</span><b>Clear</b></div><div className="doc-row doc-row--flag"><i>02</i><span>Date of birth</span><b>Review</b></div><div className="doc-row"><i>03</i><span>Address</span><b>Clear</b></div><div className="doc-meter"><span /></div></div>
        )}
        {kind === 'cart' && (
          <div className="shop-preview"><div className="shop-nav">scalecart <span>Search products...　⌕</span></div><div className="shop-copy"><small>OBJECTS FOR EVERY DAY</small><strong>Made for<br />the everyday.</strong><i>Explore collection　→</i></div><div className="shop-products"><span /><span /><span /></div></div>
        )}
        {kind === 'support' && (
          <div className="chat-preview"><div className="chat-label">blinkit / help desk</div><div className="chat-bubble">I need help with a recent order.</div><div className="chat-detect">INTENT DETECTED <b>Order issue</b></div><div className="chat-bubble chat-bubble--answer">I can help with that. Which part of your order needs attention?</div><div className="chat-entry">Write a message <span>↑</span></div></div>
        )}
        {kind === 'saas' && (
          <div className="saas-preview"><aside><b>care /</b><i /><i /><i /><i /></aside><div className="saas-main"><small>MONDAY, 12 MAY</small><strong>Good morning.</strong><div className="saas-panels"><span /><span /></div><div className="saas-list"><i /><i /><i /></div></div></div>
        )}
        {kind === 'readiness' && (
          <div className="readiness-preview"><small>AI READINESS / 03 OF 08</small><strong>Where could AI make your work easier?</strong><div><span>Research & synthesis</span><i>+</i></div><div><span>Repetitive workflows</span><i>+</i></div><div><span>Customer support</span><i>+</i></div></div>
        )}
      </div>
    </div>
  )
}

function App() {
  const [filter, setFilter] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
    }
  }, [filter])

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio message from ${form.get('name')}`)
    const body = encodeURIComponent(`From: ${form.get('name')} (${form.get('email')})\n\n${form.get('message')}`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
    setFormSent(true)
  }

  return (
    <div className="site-shell">
      <ScrollEffects />
      <div className="scroll-progress" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Viresh Ijeri, home"><span>V.</span><small>PORTFOLIO / 2026</small></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'main-nav main-nav--open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-connect" href="#contact">Let&apos;s talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-stage" aria-labelledby="hero-title">
          <div className="hero-stage__grid" aria-hidden="true" />
          <div className="hero-rail hero-rail--left">
            <article className="reference-panel experience-panel">
              <div className="panel-heading"><span>01 / EXPERIENCE</span><ArrowUpRight size={15} /></div>
              <div className="mini-entry"><span className="mini-icon"><Sparkles size={15} /></span><div><strong>Campus Ambassador</strong><small>UNLOX · Community & outreach</small><p>Connecting students with technical learning.</p></div></div>
              <div className="mini-entry"><span className="mini-icon"><Code2 size={15} /></span><div><strong>CP Club Coordinator</strong><small>Competitive Programming Club</small><p>Peer learning, problem-solving, and coding practice.</p></div></div>
              <a className="panel-link" href="#experience">Explore experience <ArrowRight size={14} /></a>
            </article>
            <div className="floating-note note-left"><span className="pulse-dot" /> OPEN TO INTERNSHIPS</div>
          </div>

          <article className="profile-card">
            <div className="profile-bar"><span>VIRESH IJERI</span><a href="#contact" aria-label="Open contact section"><Menu size={18} /></a></div>
            <div className="profile-content">
              <div className="portrait-mark" aria-label="VI monogram"><span>V</span><i>I</i><div className="portrait-orbit portrait-orbit--one" /><div className="portrait-orbit portrait-orbit--two" /><b>CS / 02</b></div>
              <span className="profile-intro">Computer Science Engineering student</span>
              <h1 id="hero-title">Viresh<br /><span>Ijeri.</span></h1>
              <div className="role-line"><span className="role-indicator" /> <RotatingRole /></div>
              <p className="profile-summary">Building useful software, one thoughtful iteration at a time.</p>
              <div className="profile-actions"><a className="button button--dark" href="#projects">Explore projects <ArrowDown size={15} /></a><a className="button button--light" href="#contact">Get in touch <ArrowUpRight size={15} /></a><a className="button button--light" href="/viresh-ijeri-resume.txt" download>Resume <ArrowDown size={14} /></a></div>
              <SocialLinks compact />
              <div className="profile-foot"><span>JAVA / REACT / AI</span><span>INDIA · 2026</span></div>
            </div>
          </article>

          <div className="hero-rail hero-rail--right">
            <article className="reference-panel projects-panel">
              <div className="panel-heading"><span>02 / SELECTED WORK</span><a href="#projects" aria-label="View all projects"><ArrowUpRight size={15} /></a></div>
              <h2>Recent<br />projects<span className="accent-period">.</span></h2>
              {projects.slice(0, 2).map((project) => <a className="project-teaser" key={project.name} href="#projects"><ProjectVisual kind={project.visual} /><div><strong>{project.name}</strong><span>{project.type} <ArrowUpRight size={12} /></span></div></a>)}
              <a className="panel-link" href="#projects">All six projects <ArrowRight size={14} /></a>
            </article>
            <div className="floating-note note-right"><Braces size={14} /> BUILD / LEARN / REPEAT</div>
          </div>
        </section>

        <section className="intro-strip">
          <span className="eyebrow">BUILDING WITH INTENT</span>
          <p>Full-Stack Developer <i /> Product Builder <i /> DSA Problem Solver <i /> AI & Backend Enthusiast</p>
          <a href="#about" aria-label="Scroll to about"><ArrowDown size={17} /></a>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading eyebrow="A LITTLE CONTEXT / 01" title="Beyond code. Building with purpose." />
          <div className="about-grid">
            <p className="about-lead reveal">I’m a Computer Science Engineering student interested in the craft behind useful software: understanding the problem, designing a clear experience, and building the systems that make it work.</p>
            <div className="about-copy reveal"><p>I build full-stack and AI-integrated projects while strengthening my fundamentals through structured Data Structures & Algorithms practice. I’m especially drawn to product teams where reliability, scalability, and the user experience matter together.</p><p>My current path brings together backend engineering, product-oriented development, competitive programming, and technical community leadership. I’m actively preparing for software engineering opportunities at product-focused companies.</p><a className="text-link" href="#journey">Explore my journey <ArrowUpRight size={15} /></a></div>
          </div>
          <div className="discipline-row reveal">{['Full-stack development', 'Backend engineering', 'Data structures & algorithms', 'AI-powered applications', 'Product engineering'].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div>
        </section>

        <section className="section build-section">
          <SectionHeading eyebrow="THE WORKING METHOD / 02" title="How I build." copy="The steps behind a considered product, from first question to a better next version." />
          <div className="principle-grid">{principles.map(([number, title, copy]) => <article className="principle-card reveal" key={number}><span>{number}</span><Code2 size={17} /><h3>{title}</h3><p>{copy}</p><i /></article>)}</div>
          <p className="build-quote reveal">“Every project is an opportunity to become a better engineer.”</p>
        </section>

        <section className="section tech-section" id="stack">
          <SectionHeading eyebrow="TOOLS I REACH FOR / 03" title="A toolkit in progress." copy="A growing set of tools for turning ideas into thoughtful, working software." />
          <div className="tech-groups">{techGroups.map((group, index) => <article className="tech-group reveal" key={group.name}><div className="tech-group__heading"><span>0{index + 1}</span><h3>{group.name}</h3><ArrowUpRight size={15} /></div><div className="tech-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading eyebrow="SELECTED WORK / 04" title="Products I’ve built." copy="From AI-powered applications to full-stack product concepts, each project starts with a problem worth understanding." />
          <div className="project-toolbar"><span>PROJECT INDEX <b>06</b></span><div className="filter-tabs" role="group" aria-label="Filter projects">{['All', 'AI', 'Full-stack', 'SaaS'].map((item) => <button key={item} className={filter === item ? 'filter-tab filter-tab--active' : 'filter-tab'} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div></div>
          <div className="project-grid">{visibleProjects.map((project) => <article className="project-card reveal" key={project.name}><ProjectVisual kind={project.visual} /><div className="project-card__body"><div className="project-meta"><span>{project.category.toUpperCase()} / {project.type.toUpperCase()}</span><span>0{projects.indexOf(project) + 1}</span></div><h3>{project.name}<span className="accent-period">.</span></h3><p className="project-tagline">{project.tagline}</p><p className="project-description">{project.description}</p><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><details className="case-study"><summary>View case study <ArrowUpRight size={14} /></summary><div className="case-study__content"><p><b>The problem</b>{project.problem}</p><p><b>Engineering focus</b></p><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><p className="case-study-note">Project details and implementation links can be added as the work is published.</p></div></details><div className="project-card__links"><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="#contact">Discuss project <ArrowUpRight size={14} /></a></div></div></article>)}</div>
          <p className="project-footnote">Project descriptions reflect intended scope and learning goals; replace with implementation details and live links as each project is published.</p>
        </section>

        <section className="architecture-band">
          <div className="section architecture-inner"><SectionHeading eyebrow="SYSTEMS, NOT JUST SCREENS / 05" title="Engineering behind the products." copy="Thinking through the handoffs between interface, services, data, and intelligent systems." /><div className="architecture-flow reveal"><div className="architecture-node"><span>01</span><Code2 size={18} /><b>Frontend</b><small>React / TypeScript</small></div><ArrowDown className="architecture-arrow" size={18} /><div className="architecture-node"><span>02</span><Braces size={18} /><b>API layer</b><small>REST / validation</small></div><ArrowDown className="architecture-arrow" size={18} /><div className="architecture-node"><span>03</span><Sparkles size={18} /><b>Backend services</b><small>Node.js / Spring Boot</small></div><ArrowDown className="architecture-arrow" size={18} /><div className="architecture-node"><span>04</span><span className="db-icon">◌</span><b>Data layer</b><small>PostgreSQL / MongoDB</small></div><ArrowDown className="architecture-arrow" size={18} /><div className="architecture-node architecture-node--accent"><span>05</span><Sparkles size={18} /><b>AI / external</b><small>RAG / OCR / APIs</small></div></div><div className="architecture-caption reveal"><span>DOCSYNC / CONCEPTUAL REQUEST PATH</span><p>User → React → Spring Boot → Validation Engine → OCR Service → PostgreSQL / Redis</p></div></div>
        </section>

        <section className="section dsa-section" id="dsa">
          <SectionHeading eyebrow="REASONING IN PRACTICE / 06" title="The problem-solving journey." copy="Strong software engineers don’t just build. They reason." />
          <div className="dsa-layout"><div className="dsa-copy reveal"><div className="dsa-label"><span className="pulse-dot" /> CURRENTLY IN PROGRESS</div><h3>Basics.<br />Brute force.<br /><span>Better.</span><br />Optimal.</h3><p>Strengthening DSA fundamentals in Java through structured problem solving, the Striver A2Z roadmap, and LeetCode practice.</p><div className="dsa-platforms"><a href="https://leetcode.com/" target="_blank" rel="noreferrer">View LeetCode <ArrowUpRight size={14} /></a><a href="https://github.com/" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={14} /></a><a href="#journey">View DSA journey <ArrowUpRight size={14} /></a></div></div><div className="roadmap reveal"><div className="roadmap-heading"><span>JAVA / DSA ROADMAP</span><span>01 — 12</span></div><ol>{roadmap.map((item, index) => <li key={item} className={index < 4 ? 'roadmap-step roadmap-step--current' : 'roadmap-step'}><span className="roadmap-index">{String(index + 1).padStart(2, '0')}</span><span>{item}</span>{index < 4 && <Check size={14} />}</li>)}</ol><a href="#now" className="text-link">Current learning focus <ArrowRight size={14} /></a></div></div>
        </section>

        <section className="section milestone-section">
          <SectionHeading eyebrow="MILESTONES / 07" title="Progress over posturing." copy="A few meaningful threads in the work so far, with room to keep growing." />
          <div className="milestone-grid">{[
            ['01', 'DSA practice', 'Consistent practice with Java and structured problem-solving patterns.'],
            ['02', 'LeetCode', 'Active practice focused on understanding brute-force, better, and optimal approaches.'],
            ['03', 'Generative AI', 'Completed a Generative AI learning program through Unlox.'],
            ['04', 'Full-stack', 'Hands-on development across MERN applications and AI-integrated products.'],
            ['05', 'Product engineering', 'Building around practical user problems, not only academic demonstrations.'],
          ].map(([number, title, copy]) => <article className="milestone reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight size={15} /></article>)}</div>
        </section>

        <section className="experience-band" id="experience">
          <div className="section experience-inner"><SectionHeading eyebrow="WORK & COMMUNITY / 08" title="Leadership beyond development." /><div className="experience-grid"><article className="experience-card reveal"><div className="experience-card__top"><span>01 / COMMUNITY</span><Sparkles size={18} /></div><p className="experience-org">UNLOX</p><h3>Campus<br />Ambassador</h3><p>Representing a learning ecosystem and helping students connect with technical learning opportunities.</p><ul><li>Student community engagement</li><li>Technical learning outreach</li><li>Communication and networking</li></ul></article><article className="experience-card experience-card--dark reveal"><div className="experience-card__top"><span>02 / LEADERSHIP</span><Code2 size={18} /></div><p className="experience-org">COMPETITIVE PROGRAMMING CLUB</p><h3>Active Member<br />& Coordinator</h3><p>Encouraging more students to take part in programming, structured practice, and peer learning.</p><ul><li>Support coding practice</li><li>Coordinate programming activities</li><li>Contribute to technical discussions</li></ul></article></div></div>
        </section>

        <section className="section journey-section" id="journey">
          <SectionHeading eyebrow="CHAPTERS SO FAR / 09" title="My engineering journey." />
          <div className="journey-list">{journey.map(([title, copy], index) => <article className={`journey-row reveal${index === journey.length - 1 ? ' journey-row--next' : ''}`} key={title}><span className="journey-index">{String(index + 1).padStart(2, '0')}</span><span className="journey-line" /><div><span className="journey-kicker">{index === journey.length - 1 ? 'THE DIRECTION' : `STAGE 0${index + 1}`}</span><h3>{title}</h3></div><p>{copy}</p><ArrowUpRight size={16} /></article>)}</div>
        </section>

        <section className="focus-band"><div className="section focus-inner"><div className="focus-copy reveal"><span className="eyebrow">THE DIRECTION / 10</span><h2>What I’m<br />building toward<span>.</span></h2><blockquote>“My goal is to become a product-focused software engineer who can take a problem from idea to production: designing the experience, building the backend, integrating intelligent systems, and continuously improving the product.”</blockquote></div><div className="focus-list reveal">{['Full-stack engineering', 'Backend development', 'AI integration', 'DSA & problem solving', 'System design', 'Cloud & DevOps', 'Product engineering'].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}<ArrowUpRight size={14} /></span>)}</div></div></section>

        <section className="section dashboard-section">
          <SectionHeading eyebrow="A QUICK READ / 11" title="Engineering dashboard." />
          <div className="dashboard-grid">{[
            ['PROJECTS', 'AI + SaaS + Full-stack', 'Building around real workflows'],
            ['CORE LANGUAGE', 'Java', 'Fundamentals & DSA practice'],
            ['DEVELOPMENT FOCUS', 'MERN + Spring Boot', 'Frontend, APIs, and services'],
            ['PROBLEM SOLVING', 'DSA + LeetCode', 'Structured practice in progress'],
            ['LEADERSHIP', 'Campus + CP Club', 'Community and peer learning'],
            ['CURRENT GOAL', 'Product engineering', 'Preparing for software roles'],
          ].map(([label, value, detail], index) => <article className="dashboard-item reveal" key={label}><div><span>{label}</span><span>0{index + 1}</span></div><h3>{value}</h3><p>{detail}</p></article>)}</div>
        </section>

        <section className="now-band" id="now"><div className="section now-inner"><div><span className="eyebrow">A SNAPSHOT / 12</span><h2>Currently<br />learning<span>.</span></h2><p>Curiosity is part of the toolkit.</p></div><div className="learning-board">{['Advanced Java', 'DSA with Java', 'Full-stack development', 'Backend engineering', 'Spring Boot', 'React', 'AI integration', 'RAG', 'Cloud & DevOps', 'System design fundamentals', 'Product-oriented development'].map((item, index) => <span className={index < 3 ? 'learning-chip learning-chip--active' : 'learning-chip'} key={item}><i />{item}</span>)}</div></div></section>

        <section className="contact-section" id="contact"><div className="section contact-inner"><div className="contact-copy reveal"><span className="eyebrow">START A CONVERSATION / 13</span><h2>Let’s build something meaningful<span>.</span></h2><p>Whether you’re a recruiter, developer, founder, student, or someone curious about technology, I’d be glad to connect.</p><SocialLinks /><a className="contact-email" href="mailto:?subject=Hello%20Viresh"><Mail size={16} /> Email me <ArrowUpRight size={14} /></a><a className="contact-email" href="/viresh-ijeri-resume.txt" download><ArrowDown size={16} /> Download resume <ArrowUpRight size={14} /></a></div><form className="contact-form reveal" onSubmit={submitContact}><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required placeholder="Your name" /><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /><label htmlFor="message">Message</label><textarea id="message" name="message" rows={4} required placeholder="What would you like to talk about?" /><button className="button button--dark" type="submit">{formSent ? 'Open your email app' : 'Send a message'} <ArrowUpRight size={15} /></button><p className="form-note">Your email app will open with a draft message.</p></form></div></section>
      </main>

      <footer className="site-footer"><div className="footer-main"><a className="footer-name" href="#top">Viresh Ijeri<span>.</span></a><p>Building products. Solving problems.<br />Becoming a better engineer.</p><div className="footer-nav">{[['Projects', 'projects'], ['About', 'about'], ['Experience', 'experience'], ['DSA', 'dsa'], ['Leadership', 'experience'], ['Contact', 'contact']].map(([label, id]) => <a key={label} href={`#${id}`}>{label}</a>)}</div><SocialLinks compact /></div><div className="footer-bottom"><span>© 2026 Viresh Ijeri. Built with curiosity and code.</span><a href="#top">BACK TO TOP <ArrowUp size={13} /></a></div></footer>
      <a className="back-to-top" href="#top" aria-label="Back to top"><ArrowUp size={18} /></a>
    </div>
  )
}

export default App