# Stardew Journal

Fanpage académica, no oficial, sobre **Stardew Valley**, desarrollada con HTML5, CSS3 y JavaScript vanilla para Programación 4. La propuesta visual combina almanaque rural, pixel art y una lectura editorial del Valle.

## Estado

Sitio estático preparado para GitHub Pages. No necesita build, servidor propio ni dependencias para la versión publicada. Incluye navegación responsive, buscador editorial, calendarios interactivos, seguimiento del Centro Cívico, páginas estacionales, formulario de contacto de demostración y una página 404.

## Estructura

```text
stardew-valley-journal/
├── index.html
├── 404.html
├── assets/
├── css/
│   ├── style.css
│   └── pages/
├── js/
│   ├── main.js
│   ├── menu.js
│   ├── calendar.js
│   └── tools.js
├── pages/
├── tools/
├── favicon/
├── robots.txt
├── .nojekyll
└── README.md
```

Los estilos específicos de cada página están en `css/pages/`; `css/style.css` contiene estilos globales.

## Funcionalidades

### Calendario

`pages/calendario.html` usa imágenes locales de las cuatro estaciones y coloca botones transparentes sobre las fechas con cumpleaños o eventos. La información aparece al seleccionar cada casilla.

### Centro Cívico

Permite marcar los objetos de los lotes estándar, consultar el progreso por lote/sala/general, buscar y filtrar. El estado se guarda en `localStorage` cuando el navegador lo permite.

### Buscador

El buscador del navbar consulta un pequeño índice editorial definido en `js/main.js`. No necesita API ni backend.

### Contacto

El formulario valida los campos desde HTML5 y muestra una confirmación de demostración en el cliente. GitHub Pages no ejecuta código de servidor, así que para recibir mensajes reales hace falta un servicio de formularios o backend.

## SEO y accesibilidad

Cada página tiene `lang="es"`, título y descripción propios, `meta robots`, metadatos básicos para compartir, favicon, headings jerárquicos, HTML semántico, `alt`, `aria-current`, skip link, foco visible y soporte para `prefers-reduced-motion`. Google recomienda títulos descriptivos y únicos por página, enlaces rastreables y metadatos claros.

No se fija todavía un `rel="canonical"` ni un `sitemap.xml` con URL absoluta porque esta instalación se publicará como **GitHub Pages Project Site** y la URL depende del usuario y del nombre final del repositorio. Google recomienda que el canonical apunte a la URL canónica real y que el sitemap sea consistente con ella.

## Recursos visuales

Los sprites de cultivos incluidos en el paquete se sirven desde `assets/images/crops/` y su procedencia figura en `assets/images/crops/SOURCES.md`. Para los cultivos que no estaban disponibles localmente se agregaron SVG ilustrativos de respaldo, evitando 404 en el sitio. Siete imágenes auxiliares de exploración/granja todavía usan URLs externas de la Wiki; conviene localizarlas en una siguiente pasada si querés que el repositorio sea completamente autosuficiente respecto de imágenes.

## Prueba local

```bash
python -m http.server 8000
```

Abrir `http://localhost:8000/`.

## GitHub Pages

Dejar `index.html` en la raíz del repositorio. En **Settings → Pages** se puede seleccionar **Deploy from a branch**, rama `main` y carpeta `/(root)`. GitHub Pages publica archivos estáticos y busca el `index.html` en la parte superior de la fuente de publicación.

Para actualizar el sitio después del primer despliegue:

```bash
git add .
git commit -m "Actualizar Stardew Journal"
git push
```

## Antes de la versión pública

Una vez creado el repositorio y conocida su URL final, agregar un `sitemap.xml` con las URLs reales, definir canonicals coherentes y, como mejora de robustez, descargar localmente las imágenes auxiliares que todavía dependen de la Wiki.

## Nota legal

Stardew Journal es una fanpage académica, no oficial y no está afiliada ni respaldada por ConcernedApe. Stardew Valley y sus materiales pertenecen a sus respectivos titulares. Las fuentes y atribuciones utilizadas por el proyecto se documentan en `CREDITS.md` y en los archivos `SOURCES.md` correspondientes a los recursos locales.


## Auditoría antes de publicar

El proyecto incluye una comprobación estática sin dependencias externas:

```bash
python tools/check_site.py
```

Debe terminar con `Errores: 0`. Las advertencias sobre imágenes externas son intencionales y sirven para recordar qué recursos todavía dependen de la Wiki.

## Sitemap

La URL final depende del usuario y del nombre del repositorio, por lo que `sitemap.xml` no se genera hasta conocer esa dirección. Una vez creado el repositorio, ejecutá:

```bash
python tools/make_sitemap.py https://USUARIO.github.io/REPOSITORIO/
```

Luego revisá `robots.txt`, hacé commit del sitemap y, si querés, agregá las etiquetas `rel=canonical` con esa misma URL base.
