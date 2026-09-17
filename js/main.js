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
