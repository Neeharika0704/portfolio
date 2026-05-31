/* ============================================
   NEEHARIKA PEDIREDLA — PORTFOLIO SCRIPTS
   script.js | Vanilla JS | No dependencies
   ============================================ */

/* ——— LOADING SCREEN ——— */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 900);
});

/* ——— SCROLL PROGRESS BAR ——— */
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
});

/* ——— ACTIVE NAV HIGHLIGHT ——— */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => observer.observe(s));

/* ——— HAMBURGER MENU ——— */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

/* ——— BACK TO TOP ——— */
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 400);
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ——— TYPING EFFECT ——— */
// Edit the titles array to change what gets typed
const titles = [
  'Associate Software Engineer',
  'Java & Spring Boot Developer',
  'Full Stack Developer',
  'Backend Developer',
  'ML Enthusiast'
];
let ti = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed-text');
function typeEffect() {
  const word = titles[ti];
  if (!deleting) {
    typedEl.textContent = word.slice(0, ci + 1);
    ci++;
    if (ci === word.length) { deleting = true; setTimeout(typeEffect, 1800); return; }
  } else {
    typedEl.textContent = word.slice(0, ci - 1);
    ci--;
    if (ci === 0) { deleting = false; ti = (ti + 1) % titles.length; }
  }
  setTimeout(typeEffect, deleting ? 50 : 95);
}
typeEffect();

/* ——— SCROLL REVEAL ANIMATION ——— */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObserver.observe(el));

/* ——— PROJECT FILTER ——— */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

/* ——— CONTACT FORM SUBMIT (demo) ——— */
// Replace this with your form backend (Formspree, EmailJS, etc.)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#22C55E';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}
