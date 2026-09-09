/**
 * data/crops.js — capa de datos (data layer)
 *
 * Expone getCrops(): () => Crop[]
 *
 * Crop: { id, name, season, price, image, description }
 *
 * Decisión de arquitectura (Fase 0): el HTML de cultivos.html es la
 * ÚNICA fuente autorada del contenido (RNF-010, contenido accesible
 * sin JS). Este módulo no duplica ese contenido a mano — lo LEE del
 * DOM ya renderizado y lo transforma en objetos Crop limpios.
 *
 *   HOY:    getCrops() → lee [data-crop-id] del DOM → Crop[]
 *   MAÑANA: getCrops() → fetch('/api/crops')        → Crop[]
 *
 * filters.js consume el array que devuelve esta función y nunca
 * sabe (ni le importa) de dónde salió — por eso el reemplazo futuro
 * por una API no obliga a tocar la capa de lógica ni la de UI.
 *
 * Implementación pendiente de Fase 5 (todavía no existen crop cards
 * en el DOM — se escriben en Fase 4).
 */

export const getCrops = () => {
    // TODO (Fase 5):
    // return Array.from(document.querySelectorAll('[data-crop-id]')).map(card => ({
    //     id: card.dataset.cropId,
    //     name: card.dataset.name,
    //     season: card.dataset.season,
    //     price: Number(card.dataset.price),
    //     image: card.querySelector('img')?.getAttribute('src') ?? '',
    //     description: card.querySelector('[data-crop-description]')?.textContent.trim() ?? '',
    // }));
    return [];
};
