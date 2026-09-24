/**
 * Comportamiento global compartido por las páginas del sitio.
 * Incluye navegación, estados activos, pequeñas mejoras visuales y buscador del navbar.
 */
const SEARCH_INDEX = [
  { title: 'El Valle', href: 'pages/valle.html', tags: 'pueblo pelícano historia mapa lugares joja comunidad' },
  { title: 'La granja', href: 'pages/granja.html', tags: 'cultivos animales edificios invernadero mapas diseño herramientas producción' },
  { title: 'Exploración', href: 'pages/exploracion.html', tags: 'pesca minería bosque playa minas recursos exploración' },
  { title: 'Centro Cívico', href: 'pages/centro-civico.html', tags: 'lotes junimos comunidad joja proyectos requisitos temporadas peces cultivos' },
  { title: 'Habitantes', href: 'pages/habitantes.html', tags: 'abigail leah sebastian robin lewis willy sam penny marnie linus clint rasmodius amistad regalos cumpleaños' },
  { title: 'Estaciones', href: 'pages/estaciones.html', tags: 'primavera verano otoño invierno calendario consejos temporada cultivos' },
  { title: 'Primavera', href: 'pages/primavera.html', tags: 'fresa salmonberry festival huevo danza flores cultivos primavera' },
  { title: 'Verano', href: 'pages/verano.html', tags: 'luau medusas trucha arándano melón cultivos verano desierto' },
  { title: 'Otoño', href: 'pages/otono.html', tags: 'feria spirits eve calabaza arándano otoño cultivos cosecha' },
  { title: 'Invierno', href: 'pages/invierno.html', tags: 'festival hielo mercado nocturno pesca minas invierno forrajeo' },
  { title: 'Calendario', href: 'pages/calendario.html', tags: 'festivales cumpleaños fechas 28 días eventos estaciones' },
  { title: 'Contacto', href: 'pages/contacto.html', tags: 'contacto mensaje formulario consulta proyecto' },
];

const initHeader = () => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 18);
  update();
  window.addEventListener('scroll', update, { passive: true });
};

const initActiveLink = () => {
  const current = window.location.pathname.replace(/\\/g, '/');
  document.querySelectorAll('.main-nav a[href]').forEach((link) => {
    const target = new URL(link.href, window.location.href).pathname.replace(/\\/g, '/');
    if (target === current) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });

  document.querySelectorAll('.nav-item.has-submenu').forEach((item) => {
    const submenuTargets = [...item.querySelectorAll('.submenu a[href]')].map((subLink) =>
      new URL(subLink.href, window.location.href).pathname.replace(/\\/g, '/')
    );
    if (submenuTargets.includes(current)) {
      const parentLink = item.querySelector(':scope > .nav-link[href]');
      parentLink?.classList.add('is-active');
    }
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

const resolveSiteHref = (href) => {
  const inPages = /\/pages\//.test(window.location.pathname.replace(/\\/g, '/'));
  return `${inPages ? '../' : ''}${href}`;
};

const initNavSearch = () => {
  const toggle = document.querySelector('.nav-search-toggle');
  const panel = document.querySelector('#site-search-panel');
  const input = document.querySelector('[data-site-search-input]');
  const results = document.querySelector('[data-site-search-results]');
  const form = document.querySelector('[data-site-search-form]');
  if (!toggle || !panel || !input || !results || !form) return;

  const close = () => {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  };
  const open = () => {
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    window.requestAnimationFrame(() => {
      if (typeof input.focus === 'function') input.focus({ preventScroll: true });
    });
  };
  const render = () => {
    const normalized = input.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    results.replaceChildren();
    if (!normalized) {
      return;
    }
    const matches = SEARCH_INDEX.filter((item) => {
      const hay = `${item.title} ${item.tags}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      return hay.includes(normalized);
    }).slice(0, 7);
    if (!matches.length) {
      const empty = document.createElement('p');
      empty.textContent = 'No encontramos una coincidencia. Probá con otro término.';
      results.append(empty);
      return;
    }
    matches.forEach((item) => {
      const link = document.createElement('a');
      link.className = 'nav-search-result';
      link.href = resolveSiteHref(item.href);
      const title = document.createElement('strong');
      title.textContent = item.title;
      const hint = document.createElement('span');
      hint.textContent = item.tags.split(' ').slice(0, 4).join(' · ');
      link.append(title, hint);
      results.append(link);
    });
  };
  toggle.addEventListener('click', () => panel.hidden ? open() : close());
  input.addEventListener('input', render);
  form.addEventListener('submit', (event) => event.preventDefault());
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-search')) close();
  });
};

initHeader();
const bootMenu = () => { if (typeof initMenu === 'function') initMenu(); };
if (typeof initMenu === 'function') bootMenu();
else document.addEventListener('DOMContentLoaded', bootMenu, { once: true });
initActiveLink();
initImageFallback();
initReveal();
initClickSpark();
initNavSearch();

const initDemoContactForm = () => {
  const form = document.querySelector('[data-contact-form]');
  const status = document.querySelector('[data-contact-status]');
  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.reset();
    status.hidden = false;
    status.textContent = '¡Mensaje enviado! Esta es una demostración local: el sitio confirma el envío, pero no transmite datos a un servidor.';
    status.classList.add('is-visible');
    status.focus({ preventScroll: true });
  });
};
initDemoContactForm();
