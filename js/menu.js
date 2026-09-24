/**
 * Inicializa el menú principal y su comportamiento responsive.
 * Se mantiene como script clásico (no ES module) para que el sitio también
 * funcione cuando los HTML se abren directamente desde el sistema de archivos.
 */
function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  const setMobileState = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    const label = toggle.querySelector('.sr-only');
    if (label) label.textContent = open ? 'Cerrar menú' : 'Abrir menú';
  };

  toggle.addEventListener('click', () => {
    setMobileState(!nav.classList.contains('is-open'));
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) setMobileState(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) setMobileState(false);
  });
}
