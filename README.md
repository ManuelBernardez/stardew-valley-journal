# Stardew Journal

> Una guía visual y académica no oficial de **Stardew Valley**, pensada como proyecto de portfolio frontend con HTML5, CSS3 y JavaScript vanilla.

[![HTML5](https://img.shields.io/badge/HTML5-vanilla-e76f00?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-responsive-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-f7df1e?style=flat-square&logo=javascript&logoColor=111111)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222222?style=flat-square&logo=github)](https://pages.github.com/)

## ✦ Sobre el proyecto

Stardew Journal es un sitio estático multipágina con navegación responsive, buscador editorial, calendario interactivo, seguimiento del Centro Cívico, páginas de estaciones, galería de habitantes y formulario de contacto de demostración.

No requiere framework, build, base de datos ni servidor propio para su versión publicada.

[Visitar Stardew Journal](https://manuelbernardez.github.io/stardew-valley-journal/)

## ✦ Estructura

```text
stardew-valley-journal/
├── index.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── .nojekyll
├── assets/
│   ├── images/
│   └── favicon/
├── css/
│   ├── style.css
│   └── pages/
├── js/
│   ├── main.js
│   ├── menu.js
│   ├── calendar.js
│   └── tools.js
├── pages/
│
└── CREDITS.md
```

## ✦ Funcionalidades principales

| Módulo | Qué hace |
|---|---|
| **Habitantes** | Galería de personajes con imágenes locales y estilo rústico unificado. |
| **Navegación** | Navbar responsive, menú hamburguesa y submenús por categoría. |
| **Buscador** | Índice editorial local, sin API ni backend. En mobile el panel se adapta al viewport. |
| **Calendario** | 4 estaciones, 28 días, cumpleaños y festivales con hotspots interactivos. |
| **Centro Cívico** | Salas y lotes con progreso persistido en `localStorage`. |
| **Contacto** | Validación HTML5 + formulario funcional. |
| **Responsive** | Layouts adaptativos para desktop, tablet y mobile. |

## ✦ Tecnologías

- HTML5 semántico
- CSS3
- JavaScript vanilla
- CSS Grid + Flexbox
- Diseño responsive Mobile First
- `localStorage`
- Formspree AJAX para el formulario de contacto
- GitHub Pages

## ✦ Sistema visual

Se buscó crear un **cuaderno de campo del valle**: papel envejecido, verdes y marrones (bosque y madera), detalles dorados y tipografía inspirada en el pixel art original.

**Paleta:**

`#2e4b31` Verde bosque · `#5f3927` Marrón profundo · `#d7ab54` Dorado · `#f4eddc` Papel · `#cbb995` Línea

**Tipografía:**

- **Jersey 15** para títulos, marca y elementos con identidad pixel-art.
- **Space Mono** para lectura, navegación, labels y datos.

**Componentes compartidos:**

`site-header` · `main-nav` · `nav-search` · `page-hero` · `journal-hero-plaque` · `card-surface` · `section` · `site-footer`

## ✦ Accesibilidad y responsive

La última pasada incluye:

- `lang="es"`, títulos y descriptions únicos.
- Un único `h1` por página.
- `alt` en imágenes y contenido decorativo marcado con `aria-hidden`.
- Skip link y foco visible.
- Controles interactivos con nombres accesibles y estados ARIA.
- Soporte para `prefers-reduced-motion`.
- Navbar mobile con buscador y menú alineados al borde derecho.
- Panel de búsqueda limitado al viewport para evitar desbordes horizontales.
- Grillas que colapsan progresivamente sin anchos rígidos.

## ✦ SEO y publicación

La publicación definitiva está configurada para:

```text
https://manuelbernardez.github.io/stardew-valley-journal/
```

Cada página pública tiene `rel="canonical"` con su URL definitiva. El proyecto también incluye:

- `sitemap.xml` con las 13 URLs públicas.
- `robots.txt` apuntando al sitemap.
- `.nojekyll` para publicación estática desde GitHub Pages.
- `404.html` para rutas inexistentes.

## ✦ Créditos y uso

Stardew Journal es un proyecto académico no oficial. **Stardew Valley** y sus materiales pertenecen a sus respectivos titulares. Las fuentes y atribuciones del material visual se detallan en `CREDITS.md` y en los `SOURCES.md` correspondientes.
