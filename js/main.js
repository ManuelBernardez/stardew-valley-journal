/**
 * main.js
 *
 * Punto de entrada único de JavaScript por página.
 * Se carga como <script type="module" src="js/main.js"> — un solo
 * <script> por HTML. Los módulos ES encapsulan su propio scope,
 * así que no hay variables globales sueltas (Regla 29).
 *
 * Responsabilidad:
 * 1. Inicializar el comportamiento del menú móvil (existe en todas
 *    las páginas, porque el Header es global).
 * 2. Cargar filters.js SOLO si el marcado de filtros de Cultivos
 *    está presente en el DOM, para no pesar en el resto del sitio
 *    (§13 "JavaScript debe utilizarse solamente cuando genere una
 *    mejora real de UX"; §18 "evitar scripts innecesarios").
 */

import { initMobileMenu } from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();

    const hasCropFilters = document.querySelector("[data-crop-filters]");
    if (hasCropFilters) {
        import("./filters.js").then(({ initCropFilters }) => {
            initCropFilters();
        });
    }
});
