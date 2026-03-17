# Guía para futuras ampliaciones

## Regla principal
No inventar rutas ni contenidos por fuera del mapa definido en `js/site-map.js`.

## Convenciones
- Cada tema debe tener: teoría, interacción, mini quiz y navegación pedagógica.
- Las simulaciones deben reutilizar `simulator-engine.js` y `graph-engine.js`.
- Los componentes se cargan desde `components/` y tienen fallback inline.
- Mantener rutas relativas correctas según la profundidad de cada archivo.
- Priorizar rendimiento: sin librerías pesadas, sin dependencias externas.
