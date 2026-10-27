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
