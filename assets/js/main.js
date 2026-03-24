// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = (i * 0.08) + 's';
      e.target.classList.add('visible');

      // Animate language bars
      e.target.querySelectorAll('.lang-fill').forEach((bar) => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Stagger skill cards individually
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 100);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card').forEach((el) => skillObserver.observe(el));

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navBackdrop = document.querySelector('.nav-backdrop');

const closeNav = () => {
  if (!navLinks || !navToggle) return;
  navLinks.classList.remove('open');
  navBackdrop && navBackdrop.classList.remove('active');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
};

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    if (isOpen) {
      navBackdrop && navBackdrop.classList.add('active');
      document.body.classList.add('nav-open');
    } else {
      navBackdrop && navBackdrop.classList.remove('active');
      document.body.classList.remove('nav-open');
    }
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });
}

if (navBackdrop) {
  navBackdrop.addEventListener('click', closeNav);
}


