// Mobile menu
const toggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.getElementById('mobile-nav');
if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    mobileNav.classList.toggle('hidden', open);
  });
  mobileNav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.add('hidden');
    }
  });
}

// Footer year
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

// Hero slideshow (cross-fade every 6 s; paused for reduced motion)
const slides = document.querySelectorAll('.hero-slide');
if (slides.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('is-active');
    slides[current].setAttribute('aria-hidden', 'true');
    current = (current + 1) % slides.length;
    slides[current].classList.add('is-active');
    slides[current].removeAttribute('aria-hidden');
  }, 6000);
}

// FAQ: smooth open/close, one answer open at a time, and the opened
// question scrolls smoothly to just below the sticky header.
const faqItems = [...document.querySelectorAll('details.faq-item')];
const faqReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function faqClosedHeight(item) {
  return item.querySelector('summary').offsetHeight + (item.offsetHeight - item.clientHeight);
}

function faqAnimate(item, from, to, done) {
  if (item.faqAnim) item.faqAnim.cancel();
  item.style.overflow = 'hidden';
  item.faqAnim = item.animate(
    { height: [`${from}px`, `${to}px`] },
    { duration: faqReduceMotion ? 0 : 350, easing: 'cubic-bezier(.4, 0, .2, 1)' },
  );
  item.faqAnim.onfinish = () => {
    item.style.overflow = '';
    item.faqAnim = null;
    if (done) done();
  };
}

function faqClose(item) {
  const from = item.offsetHeight;
  item.classList.add('is-closing');
  faqAnimate(item, from, faqClosedHeight(item), () => {
    item.open = false;
    item.classList.remove('is-closing');
  });
}

function faqOpen(item) {
  const others = faqItems.filter((o) => o !== item && o.open && !o.classList.contains('is-closing'));
  // Answers closing above this question move it up; scroll to where it will end up.
  let shift = 0;
  others.forEach((o) => {
    if (o.compareDocumentPosition(item) & Node.DOCUMENT_POSITION_FOLLOWING) shift += o.offsetHeight - faqClosedHeight(o);
  });
  others.forEach(faqClose);

  const from = item.offsetHeight;
  item.classList.remove('is-closing');
  item.open = true;
  faqAnimate(item, from, item.scrollHeight + (item.offsetHeight - item.clientHeight));

  const header = document.querySelector('header');
  const top = item.getBoundingClientRect().top + window.scrollY - shift - (header ? header.offsetHeight : 0) - 16;
  window.scrollTo({ top: Math.max(0, top), behavior: faqReduceMotion ? 'auto' : 'smooth' });
}

faqItems.forEach((item) => {
  item.querySelector('summary').addEventListener('click', (e) => {
    e.preventDefault();
    if (item.open && !item.classList.contains('is-closing')) faqClose(item);
    else faqOpen(item);
  });
});

// Review mode: add #review to any URL to outline copy that needs clinic approval.
// Remembered for the browser tab so it stays on while clicking between pages.
try {
  if (location.hash === '#review') sessionStorage.setItem('cpapfit-review', '1');
  if (location.hash === '#noreview') sessionStorage.removeItem('cpapfit-review');
  if (sessionStorage.getItem('cpapfit-review')) document.documentElement.classList.add('review-mode');
} catch {
  if (location.hash === '#review') document.documentElement.classList.add('review-mode');
}

// Contact form: sends to the PHP handler, shows the result inline.
const form = document.getElementById('contact-form');
if (form) {
  const status = document.getElementById('form-status');
  const button = form.querySelector('button[type="submit"]');
  const show = (ok, text) => {
    status.textContent = text;
    status.className = ok
      ? 'mt-4 rounded-lg bg-brand-green/15 p-4 text-green-ink'
      : 'mt-4 rounded-lg bg-warn-bg p-4 text-warn-ink';
  };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    button.disabled = true;
    button.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        form.reset();
        show(true, 'Thank you. We received your message and will contact you shortly.');
      } else {
        show(false, data.error || 'Sorry, your message could not be sent. Please call us at (416) 901-0348 or (905) 597-8884.');
      }
    } catch {
      show(false, 'Sorry, your message could not be sent. Please call us at (416) 901-0348 or (905) 597-8884.');
    } finally {
      button.disabled = false;
      button.textContent = 'Send message';
      if (window.turnstile) window.turnstile.reset();
    }
  });
}
