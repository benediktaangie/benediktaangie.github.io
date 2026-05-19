/* ═══════════════════════════════════════════════
   ANGIE — Website JavaScript
   Handles: scroll animations, nav, portfolio filter
   ═══════════════════════════════════════════════ */

// ── SCROLL REVEAL ──
// Makes elements fade in as you scroll down
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger the animation slightly for each element
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── ACTIVE NAV LINK ──
// Highlights the nav link for the section you're currently viewing
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });

sections.forEach(s => navObserver.observe(s));

// ── MOBILE NAV TOGGLE ──
const toggle = document.querySelector('.nav-toggle');
const navLinks2 = document.querySelector('.nav-links');
if (toggle && navLinks2) {
  toggle.addEventListener('click', () => {
    const open = navLinks2.style.display === 'flex';
    navLinks2.style.display = open ? 'none' : 'flex';
    navLinks2.style.flexDirection = 'column';
    navLinks2.style.position = 'absolute';
    navLinks2.style.top = '60px';
    navLinks2.style.left = '0';
    navLinks2.style.right = '0';
    navLinks2.style.background = 'rgba(8,8,8,0.98)';
    navLinks2.style.padding = '16px 0 24px';
    navLinks2.style.borderBottom = '0.5px solid rgba(255,255,255,0.07)';
    if (open) navLinks2.style.display = 'none';
  });
  // Close nav when a link is clicked on mobile
  navLinks2.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { navLinks2.style.display = 'none'; });
  });
}

// ── PORTFOLIO FILTER ──
// Only runs on portfolio.html
const filterBtns = document.querySelectorAll('.filter-btn');
const portItems = document.querySelectorAll('.port-item');

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      portItems.forEach(item => {
        if (filter === 'all' || item.dataset.cat === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

// ── SMOOTH SCROLL for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
