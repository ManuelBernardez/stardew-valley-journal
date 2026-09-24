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

  const fields = [...form.querySelectorAll('input, textarea')];
  const submit = form.querySelector('.contact-form__submit');
  const messageField = form.querySelector('[name="message"]');
  const messageCount = form.querySelector('[data-message-count]');

  const errors = {
    name: form.querySelector('[data-contact-error="name"]'),
    email: form.querySelector('[data-contact-error="email"]'),
    message: form.querySelector('[data-contact-error="message"]')
  };

  const setStatus = (message, type = 'success') => {
    status.hidden = false;
    status.textContent = message;
    status.className = `contact-form__status is-visible is-${type}`;

    requestAnimationFrame(() => {
      status.focus({ preventScroll: true });
    });
  };

  const clearStatus = () => {
    status.hidden = true;
    status.textContent = '';
    status.className = 'contact-form__status';
  };

  const validateField = (field) => {
    const value = field.value.trim();
    let message = '';

    if (!value) {
      message = 'Este campo es obligatorio.';
    } else if (field.name === 'name' && value.length < 2) {
      message = 'Ingresá al menos 2 caracteres.';
    } else if (field.name === 'email' && field.validity.typeMismatch) {
      message = 'Ingresá un correo válido.';
    } else if (field.name === 'message' && value.length < 10) {
      message = 'El mensaje debe tener al menos 10 caracteres.';
    }

    const error = errors[field.name];
    const wrapper = field.closest('.contact-form__field');

    field.setAttribute('aria-invalid', String(Boolean(message)));

    if (message) {
      field.setCustomValidity(message);
      wrapper?.classList.add('has-error');

      if (error) {
        error.textContent = message;
        error.hidden = false;
      }
    } else {
      field.setCustomValidity('');
      wrapper?.classList.remove('has-error');

      if (error) {
        error.textContent = '';
        error.hidden = true;
      }
    }

    return !message;
  };

  const updateMessageCount = () => {
    if (!messageField || !messageCount) return;
    messageCount.textContent = messageField.value.length;
  };

  const resetFieldStates = () => {
    fields.forEach((field) => {
      field.setCustomValidity('');
      field.setAttribute('aria-invalid', 'false');

      const wrapper = field.closest('.contact-form__field');
      wrapper?.classList.remove('has-error');

      const error = errors[field.name];

      if (error) {
        error.textContent = '';
        error.hidden = true;
      }
    });

    updateMessageCount();
  };

  fields.forEach((field) => {
    field.addEventListener('blur', () => {
      validateField(field);
    });

    field.addEventListener('input', () => {
      if (!status.hidden) clearStatus();

      if (field.value.trim()) {
        validateField(field);
      } else {
        field.setCustomValidity('');
        field.setAttribute('aria-invalid', 'false');

        const wrapper = field.closest('.contact-form__field');
        wrapper?.classList.remove('has-error');

        const error = errors[field.name];

        if (error) {
          error.textContent = '';
          error.hidden = true;
        }
      }

      if (field === messageField) {
        updateMessageCount();
      }
    });
  });

  updateMessageCount();

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    clearStatus();

    const isValid = fields.every((field) => validateField(field));

    if (!isValid) {
      setStatus(
        'Revisá los campos marcados antes de continuar.',
        'error'
      );

      const firstInvalid = fields.find(
        (field) => field.getAttribute('aria-invalid') === 'true'
      );

      firstInvalid?.focus();
      return;
    }

    submit.disabled = true;
    submit.classList.add('is-loading');
    submit.textContent = 'Preparando anotación…';
    form.classList.add('is-submitting');

    window.setTimeout(() => {
      form.reset();
      resetFieldStates();

      submit.disabled = false;
      submit.classList.remove('is-loading');
      submit.textContent = 'Enviar mensaje';
      form.classList.remove('is-submitting');

      setStatus(
        '¡Listo! La anotación quedó registrada visualmente en esta página. Como esta es una demostración de GitHub Pages, no se envió ningún dato a un servidor.',
        'success'
      );
    }, 850);
  });
};