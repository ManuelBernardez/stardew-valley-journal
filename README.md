# Stardew Journal

Fanpage académica y no oficial sobre Stardew Valley, desarrollada con HTML5, CSS3 moderno y JavaScript vanilla.

## Navegación actual

El menú principal contiene Inicio, El Valle, Estaciones, Cultivos, Habitantes y Sobre. El submenú de **El Valle** contiene:

- Lugares → sección de lugares en `valle.html`
- La granja → `granja.html`
- Exploración → `exploracion.html`

`Exploración` dejó de ser una categoría de primer nivel, pero mantiene su página propia para profundizar en pesca, minería y descubrimiento.

## Organización

Los HTML están indentados y los estilos se centralizan en CSS. Se evita CSS inline y JavaScript inline.


## Arquitectura actual

`El Valle` funciona como contexto principal del sitio. Su submenú reúne `Lugares`, `La granja` y `Exploración`; las dos últimas cuentan con páginas propias para profundizar. La página `Valle` conecta además con `Estaciones`, reforzando la idea de un mundo que cambia con el tiempo.

## Estaciones

La sección de Estaciones funciona como índice visual y cada estación tiene su propia página: Primavera, Verano, Otoño e Invierno.
