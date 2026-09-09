/**
 * filters.js
 *
 * Búsqueda, filtrado y ordenamiento de cultivos (página Cultivos).
 * Solo se carga cuando cultivos.html está presente (import dinámico
 * desde main.js) — nunca pesa en el resto del sitio.
 *
 * Implementación pendiente de Fase 5, una vez que cultivos.html
 * tenga las crop cards escritas en HTML (Fase 4) y js/data/crops.js
 * pueda leerlas del DOM.
 *
 * Arquitectura (aprobada en Fase 0):
 * - Este módulo NUNCA toca el DOM directamente para leer datos —
 *   solo consume el array de objetos Crop que devuelve getCrops().
 * - filterCrops(crops, filters), sortCrops(crops, key) y
 *   searchCrops(crops, query) son funciones puras: reciben datos,
 *   devuelven datos. El día que getCrops() lea de una API en vez
 *   del DOM, este archivo no cambia.
 * - initCropFilters() es la única función que sí toca el DOM: toma
 *   el resultado ya filtrado/ordenado y muestra/oculta/reordena las
 *   cards que ya existen en el HTML (nunca las genera de cero).
 */

import { getCrops } from "./data/crops.js";

export const initCropFilters = () => {
    const crops = getCrops();
    // TODO (Fase 5): conectar inputs de búsqueda/estación/orden,
    // aplicar filterCrops/searchCrops/sortCrops sobre `crops`, y
    // reflejar el resultado en las cards existentes + región
    // aria-live con el conteo de resultados (§7.7).
    void crops;
};
