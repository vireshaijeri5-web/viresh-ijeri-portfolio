/**
 * VIRESH IJERI — PERSONAL PORTFOLIO SCRIPT
 * Clean, lightweight, and natural interactivity
 */

const projects = [
  {
    name: 'QueryMind',
    category: 'AI',
    type: 'AI / RAG / FULL-STACK',
    pitch: 'Ask. Retrieve. Understand.',
    description: 'An AI-powered knowledge interaction platform designed to make information retrieval intelligent and conversational across document repositories.',
    problem: 'Useful knowledge gets buried across documents. QueryMind explores a more direct way to find and understand it.',
    features: ['Retrieval-Augmented Generation', 'Context-aware responses', 'AI API integration', 'Product-oriented UX'],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI APIs', 'RAG'],
    repoUrl: 'https://github.com/',
  },
  {
    name: 'DocSync',
    category: 'AI',
    type: 'AI / DOCUMENT INTELLIGENCE',
    pitch: 'A clearer path to document readiness.',
    description: 'A document-compliance concept to help students and institutions identify inconsistencies before submission.',
    problem: 'Manual document checks are repetitive, and small mismatches can cause avoidable delays.',
    features: ['OCR-based extraction', 'Name and date checks', 'Explainable review signals', 'Role-aware workflows'],
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Redis', 'OCR'],
    repoUrl: 'https://github.com/',
  },
  {
    name: 'ScaleCart',
    category: 'Full-stack',
    type: 'FULL-STACK / E-COMMERCE',
    pitch: 'Beyond CRUD. Designed around the shopping flow.',
    description: 'A responsive e-commerce project exploring product discovery, cart workflows, and reliable backend APIs.',
    problem: 'A useful commerce experience depends on coherent journeys, not only database operations.',
    features: ['Product browsing', 'Search and filtering', 'Cart management', 'Responsive workflows'],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    repoUrl: 'https://github.com/',
  },
  {
    name: 'Blinkit AI',
    category: 'AI',
    type: 'AI / CUSTOMER EXPERIENCE',
    pitch: 'Customer support that gets to the point.',
    description: 'A conversational support experience exploring intent detection and knowledge retrieval for common customer requests.',
    problem: 'Customers need clear next steps without navigating a maze of help pages.',
    features: ['Conversational UI', 'Intent detection flow', 'Knowledge retrieval concepts', 'Customer-focused journeys'],
    stack: ['React', 'JavaScript', 'Node.js', 'Express.js', 'AI', 'RAG'],
    repoUrl: 'https://github.com/',
  },
  {
    name: 'Therapist SaaS',
    category: 'SaaS',
    type: 'MERN / SAAS / PRODUCT',
    pitch: 'A calmer digital workspace for care.',
    description: 'A MERN-stack platform shaped around therapist and client workflows, with a dashboard-first experience.',
    problem: 'Care workflows deserve software that feels clear, dependable, and considerate of its users.',
    features: ['Authentication flows', 'Dashboard experience', 'REST API structure', 'Responsive product UI'],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    repoUrl: 'https://github.com/',
  },
  {
    name: 'AI Readiness',
    category: 'Full-stack',
    type: 'AI / MERN / PRODUCTIVITY',
    pitch: 'A practical starting point for adopting AI.',
    description: 'An interactive assessment concept to help teams reflect on AI readiness and explore actionable next steps.',
    problem: 'AI adoption can feel abstract. A guided assessment can make early questions more concrete.',
    features: ['Interactive questionnaire', 'Transparent scoring logic', 'AI-oriented suggestions', 'Responsive flow'],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    repoUrl: 'https://github.com/',
  },
]

const stackCategories = [
  {
    title: 'Languages',
    index: '01',
    tags: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frontend',
    index: '02',
    tags: ['HTML5', 'CSS3', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    index: '03',
    tags: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'JWT Auth'],
  },
  {
    title: 'Data & Caching',
    index: '04',
    tags: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL'],
  },
  {
    title: 'AI Systems',
    index: '05',
    tags: ['RAG Architecture', 'AI APIs', 'Prompt Engineering', 'OCR Concepts'],
  },
  {
    title: 'Developer Tools',
    index: '06',
    tags: ['Git', 'GitHub', 'VS Code', 'Copilot', 'Cursor', 'Postman'],
  },
]

const roadmapTopics = [
  'Java fundamentals', 'Arrays & Two Pointers', 'Sorting algorithms', 'Searching & Binary Search',
  'Hashing & HashMaps', 'Strings & Parsing', 'Linked Lists', 'Stacks & Queues',
  'Trees & BSTs', 'Graphs & Traversals', 'Dynamic Programming', 'System Thinking'
]

// ==========================================
// RENDERERS
// ==========================================

// Render Projects
let activeFilter = 'All'

function renderProjects() {
  const grid = document.querySelector('#project-grid')
  if (!grid) return

  const visible = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase())

  grid.innerHTML = visible.map((p, idx) => {
    const stackBadges = p.stack.map(s => `<span>${s}</span>`).join('')
    return `
      <article class="project-card reveal">
        <div class="project-cover">
          <div class="project-cover__meta">
            <span>PROJECT / ${String(idx + 1).padStart(2, '0')}</span>
            <span>${p.category.toUpperCase()}</span>
          </div>
          <div>
            <h3 class="project-cover__name">${p.name}</h3>
            <p class="project-cover__pitch">${p.pitch}</p>
          </div>
        </div>

        <div class="project-card__body">
          <p class="project-description">${p.description}</p>
          <div class="project-tags" aria-label="Technology stack">${stackBadges}</div>
          <div class="project-card__links">
            <a href="${p.repoUrl}" target="_blank" rel="noreferrer">View Code ↗</a>
            <a href="#architecture">Architecture ↗</a>
          </div>
        </div>
      </article>
    `
  }).join('')

  observeReveals(grid.querySelectorAll('.reveal'))
}

// Render Toolkit
function renderToolkit() {
  const grid = document.querySelector('#stack-grid')
  if (!grid) return

  grid.innerHTML = stackCategories.map(cat => `
    <article class="stack-group reveal">
      <h3 class="stack-title">
        <span>${cat.index}</span>
        ${cat.title}
      </h3>
      <div class="stack-tags">
        ${cat.tags.map(t => `<span>${t}</span>`).join('')}
      </div>
    </article>
  `).join('')

  observeReveals(grid.querySelectorAll('.reveal'))
}

// Render Roadmap
function renderRoadmap() {
  const list = document.querySelector('#roadmap-list')
  if (!list) return

  list.innerHTML = roadmapTopics.map((topic, idx) => `
    <li class="${idx < 4 ? 'is-current' : ''}">
      <b>${String(idx + 1).padStart(2, '0')}</b>
      <span>${topic}</span>
    </li>
  `).join('')
}

// ==========================================
// SCROLL & REVEAL OBSERVERS
// ==========================================
let revealObserver = null

function observeReveals(elements = document.querySelectorAll('.reveal:not(.is-visible)')) {
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-visible'))
    return
  }

  revealObserver ??= new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  elements.forEach(el => revealObserver.observe(el))
}

function handleScroll() {
  const header = document.querySelector('.site-header')
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0
  document.documentElement.style.setProperty('--scroll-progress', String(progress))
  header?.classList.toggle('is-scrolled', window.scrollY > 24)
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderProjects()
  renderToolkit()
  renderRoadmap()
  observeReveals()

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  // Rotating Role Animation in Hero
  const roleNames = ['Full-Stack Developer', 'Product Builder', 'DSA Problem Solver', 'Competitive Programmer', 'AI & Backend Enthusiast']
  const roleTarget = document.querySelector('#role-name')
  let roleIndex = 0

  window.setInterval(() => {
    if (!roleTarget) return
    roleIndex = (roleIndex + 1) % roleNames.length
    roleTarget.style.opacity = '0'
    roleTarget.style.transform = 'translateY(-4px)'
    roleTarget.style.transition = 'all 0.2s ease'
    
    setTimeout(() => {
      roleTarget.textContent = roleNames[roleIndex]
      roleTarget.style.opacity = '1'
      roleTarget.style.transform = 'translateY(0)'
    }, 200)
  }, 3200)

  // Project Category Filter
  document.querySelectorAll('#filter-tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter
      document.querySelectorAll('#filter-tabs button').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      renderProjects()
    })
  })

  // Mobile Menu
  const menuButton = document.querySelector('.menu-toggle')
  const primaryNav = document.querySelector('.primary-nav')
  menuButton?.addEventListener('click', () => {
    primaryNav?.classList.toggle('is-open')
  })
  primaryNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => primaryNav.classList.remove('is-open'))
  })

  // Contact Form
  const contactForm = document.querySelector('#contact-form')
  const formStatus = document.querySelector('#form-status')

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.querySelector('#name')?.value.trim()
    const email = document.querySelector('#email')?.value.trim()
    const message = document.querySelector('#message')?.value.trim()

    if (!name || !email || !message) return

    if (formStatus) {
      formStatus.textContent = '✓ Opening your email client to dispatch message...'
    }

    const subject = encodeURIComponent(`Portfolio Message from ${name}`)
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)
    const mailLink = `mailto:viresh.ijeri@example.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      window.location.href = mailLink
    }, 600)
  })
})
