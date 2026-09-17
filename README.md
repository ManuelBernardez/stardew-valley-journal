# Stardew Valley Journal

Almanaque digital inspirado en Stardew Valley. Proyecto académico de
Programación 4 — HTML5 semántico, CSS3 moderno y JavaScript vanilla,
sin frameworks ni librerías de UI.

La fuente de verdad técnica y funcional del proyecto son las
especificaciones originales (documento de especificación completa,
UI page-by-page y wireframes). Este README no las reemplaza — es un
**addendum vivo** con las decisiones tomadas en Fase 0 que no están
en esos documentos, o que los ajustan, para no perder trazabilidad.

9. **Menú móvil (Fase 2)**: se evaluó `<details>/<summary>` nativo
   para que el botón funcionara sin JS, pero se descartó: Chromium
   calcula el ancho intrínseco de `<details>` según su estado real
   `[open]`, y ningún CSS logra mostrar el contenido mientras
   `[open]` es `false` sin romper el layout en desktop (bug
   reproducido, no teórico). Se usa el patrón botón + clase
   controlada por JS. Costo aceptado: sin JavaScript el botón del
   header queda inerte, pero la navegación completa del sitio sigue
   disponible sin JS a través del Footer (mismos 6 destinos).

## Estado actual

**Fase 2 — Global UI.** Header (con menú móvil), Footer, Button,
Card, Section Header y Breadcrumb implementados y aplicados en las 7
páginas. Contenido específico de cada página todavía pendiente
(Fase 3 Home, Fase 4 resto).

## Decisiones de Fase 0 (addendum a la especificación)

1. **Nombre del proyecto**: *Stardew Valley Journal* (los documentos
   de spec originales usan "Stardew Almanac" — se actualizó en todo
   el copy visible: títulos, footer, meta tags).

2. **Arquitectura de contenido/datasets** (Cultivos y Habitantes):
   el HTML es la única fuente autorada del contenido. No hay un
   dataset JS hardcodeado en paralelo. `js/data/crops.js` expone
   `getCrops()`, que lee las crop cards ya renderizadas en
   `cultivos.html` (vía `data-*`) y devuelve un array de objetos
   `Crop` limpios, desacoplados del DOM para el resto de la lógica.
   El día de mañana, `getCrops()` puede reemplazarse por
   `fetch('/api/crops')` sin tocar `filters.js`. `characters.js` no
   se crea todavía: Habitantes no tiene un requisito de
   filtrado/búsqueda obligatorio en v1, así que ese adaptador se
   agrega recién cuando exista una funcionalidad real que lo
   consuma (se evita código muerto).

3. **Presupuesto de imagen**: ninguna imagen final debe pesar más de
   **140 KB**. Se aplica a partir del reemplazo de placeholders por
   assets reales; se audita en Fase 6.

4. **Menú responsive**: el punto de colapso a menú hamburguesa no
   se ata a un breakpoint fijo — se define empíricamente por el
   ancho real que necesita el nav de 7 links con la tipografía
   definitiva, pudiendo activarse incluso en anchos "tablet" o
   "desktop angosto" si el espacio no alcanza.

5. **Alcance de contenido v1**: ~8-12 cultivos, ~6-8 personajes, los
   lugares ya nombrados en la spec (Pelican Town, Granja, Playa,
   Montaña + 1-2 destacados). Prioridad: calidad de implementación
   por sobre volumen de contenido.

6. **Imágenes durante el desarrollo**: placeholders visuales
   claramente identificados (no assets del juego, que son propiedad
   de ConcernedApe/Chucklefish; no se incorporan recursos externos
   sin consulta previa). Reemplazo por assets reales: pendiente de
   decisión conjunta.

7. **Fuentes**: Cormorant Garamond (500/600) e Inter (400/500/600),
   autohospedadas en `assets/fonts/` (vía paquetes Fontsource, licencia
   SIL Open Font License), no CDN de Google Fonts. Pesos elegidos:
   ~120 KB en total para las 5 fuentes.

8. **JavaScript**: módulos ES nativos (`<script type="module">`), sin
   bundler. `main.js` es el único `<script>` por página; importa
   `menu.js` siempre y carga `filters.js` con `import()` dinámico
   solo si el marcado de filtros de Cultivos existe en el DOM.

## Estructura de carpetas

```text
stardew-valley-journal/
├── index.html
├── pages/
│   ├── valle.html
│   ├── estaciones.html
│   ├── cultivos.html
│   ├── habitantes.html
│   ├── exploracion.html
│   └── sobre.html
├── css/
│   ├── style.css
│   └── pages/            (vacío — se completa si algún componente lo necesita)
├── js/
│   ├── main.js
│   ├── menu.js
│   ├── filters.js
│   └── data/
│       └── crops.js
├── assets/
│   ├── images/
│   │   ├── backgrounds/
│   │   ├── characters/
│   │   ├── crops/
│   │   ├── locations/
│   │   └── icons/
│   └── fonts/
├── favicon/
├── robots.txt
├── sitemap.xml
└── README.md
```

## Pendientes conocidos (no bloqueantes para Fase 1)

- `robots.txt` y `sitemap.xml` usan un dominio placeholder
  (`stardew-valley-journal.example`) — reemplazar antes de deploy.
- `favicon/favicon.svg` es un placeholder temporal generado con la
  paleta del Design System, no una marca definitiva.
- No hay `<link rel="canonical">` todavía: requiere dominio de
  producción definido.
