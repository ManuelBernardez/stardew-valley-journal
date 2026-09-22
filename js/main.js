import { initMenu } from './menu.js';

const initHeader = () => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 18);
  update();
  window.addEventListener('scroll', update, { passive: true });
};

const initActiveLink = () => {
  const current = window.location.pathname.replace(/\\/g, '/');
  document.querySelectorAll('.nav-link[href]').forEach((link) => {
    const target = new URL(link.href, window.location.href).pathname.replace(/\\/g, '/');
    if (target === current) link.classList.add('is-active');

    const item = link.closest('.nav-item.has-submenu');
    if (!item) return;
    const submenuTargets = [...item.querySelectorAll('.submenu a[href]')].map((subLink) =>
      new URL(subLink.href, window.location.href).pathname.replace(/\\/g, '/')
    );
    if (submenuTargets.includes(current)) link.classList.add('is-active');
  });
};

const initReveal = () => {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -45px' });

  items.forEach((item) => observer.observe(item));
};

const initClickSpark = () => {
  const targets = document.querySelectorAll('a, button');
  targets.forEach((target) => {
    target.addEventListener('click', () => {
      const spark = document.createElement('span');
      spark.className = 'click-spark';
      spark.setAttribute('aria-hidden', 'true');
      spark.textContent = '✦';
      document.body.appendChild(spark);

      const rect = target.getBoundingClientRect();
      spark.style.left = `${rect.left + rect.width / 2}px`;
      spark.style.top = `${rect.top + rect.height / 2}px`;

      spark.addEventListener('animationend', () => spark.remove(), { once: true });
    });
  });
};

const initImageFallback = () => {
  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    img.addEventListener('error', () => {
      const fallback = document.createElement('div');
      fallback.className = 'image-fallback';
      fallback.textContent = img.dataset.fallback;
      img.replaceWith(fallback);
    }, { once: true });
  });
};

initHeader();
initMenu();
initActiveLink();
initImageFallback();
initReveal();
initClickSpark();
