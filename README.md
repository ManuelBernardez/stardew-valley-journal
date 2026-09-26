# [Stardew Journal](https://manuelbernardez.github.io/stardew-valley-journal/)

> Web académica no oficial inspirada en **Stardew Valley**, desarrollada en el marco de Programación IV: práctica de HTML5, CSS3 y JavaScript vanilla

[![HTML5](https://img.shields.io/badge/HTML5-vanilla-e76f00?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-responsive-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-f7df1e?style=flat-square&logo=javascript&logoColor=111111)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222222?style=flat-square&logo=github)](https://pages.github.com/)

**[→ Visitar Sitio Web](https://manuelbernardez.github.io/stardew-valley-journal/)**

## ✦ Sobre el proyecto

**Stardew Journal** es un sitio web estático multipágina inspirado en el formato de un cuaderno de campo del Valle.

El proyecto combina contenido editorial, navegación responsive e interacciones en JavaScript para explorar distintos aspectos de **Stardew Valley** sin utilizar frameworks ni backend propio.

### Incluye

- Galería interactiva de habitantes con fichas ampliadas.
- Buscador editorial local.
- Calendario interactivo de estaciones.
- Seguimiento del Centro Cívico con `localStorage`.
- Páginas dedicadas a cada estación.
- Formulario de contacto con validación y envío mediante Formspree.
- Navegación responsive con submenús y menú móvil.
- Diseño adaptativo para desktop, tablet y mobile.

## ✦ Stack

- **HTML5** — estructura semántica y accesible.
- **CSS3** — Grid, Flexbox, variables y diseño responsive.
- **JavaScript vanilla** — interacciones y componentes dinámicos.
- **localStorage** — persistencia del progreso del Centro Cívico.
- **Formspree** — envío del formulario de contacto.
- **GitHub Pages** — hosting y deployment.

No se utilizan frameworks ni librerías externas de JavaScript.

## ✦ Estructura

```text
stardew-valley-journal/
├── index.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── .nojekyll
│
├── assets/
│   ├── images/
│   └── favicon/
│
├── css/
│   ├── style.css
│   └── pages/
│
├── js/
│   ├── main.js
│   ├── menu.js
│   ├── calendar.js
│   ├── habitantes.js
│   └── tools.js
│
├── pages/
│
└── CREDITS.md
```

## ✦ Funcionalidades

| Módulo | Funcionalidad |
|---|---|
| Navegación | Navbar responsive, menú móvil y submenús por categoría |
| Habitantes | Galería con fichas modales, navegación entre personajes y contenido detallado |
| Calendario | Estaciones de 28 días, cumpleaños, festivales y hotspots interactivos |
| Centro Cívico | Seguimiento de salas y lotes con progreso persistente en `localStorage` |
| Contacto | Validación HTML5 y envío mediante Formspree |
| Buscador | Búsqueda local sobre el contenido editorial, sin API ni backend |
| Responsive | Layout adaptativo para desktop, tablet y mobile |


## ✦ Accesibilidad

El proyecto incorpora:

- HTML semántico y `lang="es"`.
- Jerarquía de encabezados consistente.
- Texto alternativo en imágenes.
- Un único `h1` por página.
- Navbar mobile con buscador y menú alineados al borde derecho.
- Soporte para `prefers-reduced-motion`.
- `alt` en imágenes y contenido decorativo marcado con `aria-hidden`.
- Skip link para navegación por teclado y estados de foco visibles.
- Estados ARIA en controles interactivos, `aria-label` y `aria-controls`.
- Navegación mediante teclado en componentes interactivos.
- Layout responsive sin anchos rígidos ni desbordamiento horizontal.

## ✦ SEO y publicación

El sitio está publicado mediante GitHub Pages: https://manuelbernardez.github.io/stardew-valley-journal/

Las imágenes del proyecto fueron redimensionadas y optimizadas manualmente
para web, buscando reducir su peso sin perder nitidez. Los recursos se sirven 
localmente y las imágenes de contenido utilizan carga diferida cuando corresponde.

Las páginas públicas incluyen:

- `rel="canonical"` con sus URLs definitivas.
- `sitemap.xml`.
- `robots.txt`.
- `.nojekyll`.
- Página `404.html`.

## ✦ Roadmap

- [x] Sitio multipágina responsive
- [x] Navegación y buscador
- [x] Galería interactiva de habitantes
- [x] Calendario
- [x] Progreso del Centro Cívico
- [x] Formulario de contacto
- [x] SEO básico
- [x] Accesibilidad
- [ ] Modo oscuro
- [ ] PWA / soporte offline

## ✦ Diseño visual

La interfaz está planteada como un cuaderno de campo del Valle, combinando papel envejecido, verdes de bosque, marrones de madera y detalles dorados.

### Paleta

| Color | Uso |
|---|---|
| `#2e4b31` | Verde bosque |
| `#5f3927` | Marrón profundo |
| `#d7ab54` | Dorado |
| `#f4eddc` | Papel |
| `#cbb995` | Líneas y detalles |

### Tipografía

- **Jersey 15** — títulos, marca y elementos de inspiración pixel-art.
- **Space Mono** — navegación, datos, etiquetas y contenido auxiliar.

### Componentes compartidos

`site-header` · `main-nav` · `nav-search` · `page-hero` · `journal-hero-plaque` · `card-surface` · `section` · `site-footer`


## ✦ Créditos

*Stardew Valley*, sus personajes, imágenes y demás materiales pertenecen a sus respectivos titulares.

Las fuentes y atribuciones del material utilizado se encuentran en `CREDITS.md` y en los archivos `SOURCES.md` correspondientes.