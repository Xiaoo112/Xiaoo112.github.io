// Scroll fade-in
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  }),
  { threshold: 0.08 }
);
document.querySelectorAll('.fade-in').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 60}ms`;
  observer.observe(el);
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
const navObs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const a = document.querySelector(`nav a[href="#${e.target.id}"]`);
      if (a) a.classList.add('active');
    }
  }),
  { rootMargin: '-35% 0px -60% 0px' }
);
sections.forEach(s => navObs.observe(s));
