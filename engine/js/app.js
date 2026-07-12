import './components/app-navbar.js';
import './components/app-footer.js';
import './components/app-section.js';
import './components/app-page.js';
import { config } from '../../assets/js/config.js';

/* Components are defined synchronously — DOM is already upgraded here
   since ES modules are deferred and run after parsing. */

const navbar   = document.querySelector('app-navbar');
const sections = () => document.querySelectorAll('.section[id]');
const navLinks = () => document.querySelectorAll('.nav-link[data-scroll]');

/* ── Smooth scroll — custom eased animation ── */
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(target) {
  const el = document.querySelector(target);
  if (!el) return;

  const start    = window.scrollY;
  const end      = el.getBoundingClientRect().top + start;
  const distance = end - start;
  const duration = 800; // ms
  let startTime  = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed  = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

/* ── Scroll link clicks ── */
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-scroll]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href?.startsWith('#')) return;
  e.preventDefault();
  smoothScrollTo(href);
  navbar.closeMenu();
});

/* ── Active link on scroll ── */
function onScroll() {
  const scrollY = window.scrollY + 10;
  let current   = sections()[0]?.id ?? '';

  sections().forEach(sec => {
    if (sec.offsetTop <= scrollY) current = sec.id;
  });

  navLinks().forEach(link => {
    const isActive = link.getAttribute('href') === `#${current}`;
    link.classList.toggle('active', isActive);
    if (isActive) {
      document.title = `${config.navbar.brand} | ${link.textContent.trim()}`;
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

