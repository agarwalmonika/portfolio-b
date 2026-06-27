// ============================================
//   MONIKA PORTFOLIO — main.js
// ============================================

// ── Typewriter Effect ──────────────────────
const phrases = [
  'MERN Stack Developer',
  'ECE Engineer',
  'React.js Enthusiast',
  'Full Stack Learner',
  'IndiaSkilss Bronze Medalist'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEl = document.getElementById('typewriter');

function typeWriter() {
  if (!typeEl) return;
  const current = phrases[phraseIndex];

  if (isDeleting) {
    typeEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typeEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 400;
  }

  setTimeout(typeWriter, speed);
}
typeWriter();

// ── Navbar: scroll effect + active link ───
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // scrolled class
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  // scroll-to-top button
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', window.scrollY > 400);

  // active nav link highlight
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });

  // fade-in-up animations
  document.querySelectorAll('.fade-in-up').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
});

// ── Hamburger menu ─────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinksEl.classList.toggle('open');
});

// Close menu when a link is clicked
navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinksEl.classList.remove('open');
  });
});

// ── Scroll to top ──────────────────────────
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Load Skills from API ───────────────────
async function loadSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  try {
    const res = await fetch('/api/portfolio/skills');
    const data = await res.json();

    if (!data.success || !data.data.length) {
      grid.innerHTML = '<p style="color:var(--text-muted);text-align:center">No skills found. Visit /api/portfolio/seed first.</p>';
      return;
    }

    grid.innerHTML = '';
    data.data.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.dataset.category = skill.category;
      card.innerHTML = `
        <div class="skill-icon"><i class="${skill.icon || 'fas fa-code'}"></i></div>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-bar">
          <div class="skill-fill" data-level="${skill.level}"></div>
        </div>
        <div class="skill-level">${skill.level}%</div>
      `;
      grid.appendChild(card);
    });

    // Animate bars after render
    setTimeout(() => {
      document.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.level + '%';
      });
    }, 200);

  } catch (err) {
    console.error('Skills load error:', err);
    grid.innerHTML = '<p style="color:var(--text-muted);text-align:center">Could not load skills.</p>';
  }
}

// ── Skills Filter ──────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.skill-card').forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});

// ── Load Projects from API ─────────────────
async function loadProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const icons = ['fa-globe', 'fa-shopping-cart', 'fa-users', 'fa-tasks', 'fa-robot', 'fa-code'];

  try {
    const res = await fetch('/api/portfolio/projects');
    const data = await res.json();

    if (!data.success || !data.data.length) {
      grid.innerHTML = '<p style="color:var(--text-muted);text-align:center">No projects found. Visit /api/portfolio/seed first.</p>';
      return;
    }

    grid.innerHTML = '';
    data.data.forEach((project, i) => {
      const icon = icons[i % icons.length];
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-header">
          <div class="project-icon"><i class="fas ${icon}"></i></div>
          <div class="project-links">
            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-link" title="GitHub"><i class="fab fa-github"></i></a>` : ''}
            ${project.liveUrl && project.liveUrl !== '#' ? `<a href="${project.liveUrl}" target="_blank" class="project-link" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>` : ''}
          </div>
        </div>
        <div class="project-title">${project.title}</div>
        <div class="project-desc">${project.description}</div>
        <div class="project-stack">
          ${project.techStack.map(t => `<span class="stack-tag">${t}</span>`).join('')}
        </div>
      `;
      grid.appendChild(card);
    });

  } catch (err) {
    console.error('Projects load error:', err);
    grid.innerHTML = '<p style="color:var(--text-muted);text-align:center">Could not load projects.</p>';
  }
}

// ── Contact Form ───────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear old errors
    clearErrors();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Client-side validation
    let valid = true;

    if (name.length < 2) {
      showError('nameError', 'Name must be at least 2 characters');
      valid = false;
    }
    if (!isValidEmail(email)) {
      showError('emailError', 'Please enter a valid email address');
      valid = false;
    }
    if (!subject) {
      showError('subjectError', 'Subject is required');
      valid = false;
    }
    if (message.length < 10) {
      showError('messageError', 'Message must be at least 10 characters');
      valid = false;
    }

    if (!valid) return;

    // Show loading state
    const btnText = document.getElementById('btnText');
    const btnLoading = document.getElementById('btnLoading');
    const submitBtn = document.getElementById('submitBtn');
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });

      const data = await res.json();

      if (data.success) {
        contactForm.reset();
        document.getElementById('formSuccess').style.display = 'block';
        setTimeout(() => {
          document.getElementById('formSuccess').style.display = 'none';
        }, 5000);
      } else {
        // Server validation errors
        if (data.errors) {
          data.errors.forEach(err => {
            const fieldMap = { name: 'nameError', email: 'emailError', subject: 'subjectError', message: 'messageError' };
            if (fieldMap[err.path]) showError(fieldMap[err.path], err.msg);
          });
        } else {
          document.getElementById('formError').style.display = 'block';
        }
      }
    } catch (err) {
      console.error('Form submit error:', err);
      document.getElementById('formError').style.display = 'block';
    } finally {
      btnText.style.display = 'flex';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
    }
  });
}

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.classList.add('visible'); }
}

function clearErrors() {
  document.querySelectorAll('.form-error').forEach(el => {
    el.textContent = '';
    el.classList.remove('visible');
  });
  document.getElementById('formSuccess').style.display = 'none';
  document.getElementById('formError').style.display = 'none';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── Smooth scroll for nav links ────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── Intersection Observer (fade-in-up) ─────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// ── Init ───────────────────────────────────
loadSkills();
loadProjects();