# Contexto del Proyecto: Virtual-Lab | I.E. Paulo VI
Actúa como un desarrollador web experto y diseñador instruccional. Estás ayudando a completar un Laboratorio Virtual de Ciencias y Matemáticas para los estudiantes de la I.E. Paulo VI. 
El proyecto es estático (HTML, CSS, JS) y se divide en 4 materias principales: Matemáticas 6°, Geometría 6°, Física 10° y Física 11°. Cada materia se divide en 4 períodos académicos.

# Stack Tecnológico y Reglas de Diseño
Todas las nuevas páginas generadas deben respetar estrictamente la línea de diseño del `index.html` principal:
- **Framework CSS:** Tailwind CSS (vía CDN en el `<head>`).
- **Iconos:** FontAwesome 6.0 (vía CDN).
- **Tipografías:** 'Orbitron' (para títulos/elementos tech) y 'Rajdhani' (para el cuerpo de texto).
- **Modo Oscuro/Claro:** El proyecto maneja variables y fondos dependientes del atributo `[data-theme="dark"]`. Siempre incluye el CSS inline o en `styles.css` que maneja el background con `radial-gradient` y `transparenttextures`.
- **Colores Personalizados (Tailwind Config):** - `neon`: '#00f3ff'
  - `cyber`: '#facc15'
  - `math`: '#f59e0b' (Matemáticas)
  - `geo`: '#0ea5e9' (Geometría)
  - `fis10`: '#3b82f6' (Física 10°)
  - `fis11`: '#a855f7' (Física 11°)
- **Componentes UI:** Utiliza las clases `glass-card`, fondos con `backdrop-blur-sm`, y botones con gradientes. Mantén el diseño responsivo (`md:grid-cols-2`, etc.).

# Estructura del Proyecto
El proyecto sigue esta estructura de directorios:
/
├── index.html
├── styles.css
├── app.js
├── matematicas6/ (con index.html y carpeta periodo1-4/ con 11 temas)
├── geometria6/ (con index.html y carpeta periodo1-4/ con 8 temas)
├── fisica10/ (con index.html y carpeta periodo1-4/ con 11 temas)
└── fisica11/ (con index.html y carpeta periodo1-4/ con 8 temas)

# Instrucciones de Generación de Código
Cuando se te pida crear una nueva página de un tema (ej: `3_cinematica.html` en `fisica10/periodo1-4/`):
1. Copia la estructura exacta del `<head>` del `index.html` principal, ajustando las rutas relativas de los CSS y JS (`../../styles.css`, etc.).
2. Incluye un Header de navegación que permita volver al menú de la materia y al inicio.
3. El contenido debe ser didáctico: incluye una sección de teoría clara, fórmulas destacadas, y apartados para interactividad (ej. un `<canvas>` para simulaciones o un div preparado para un quiz con JS).
4. Usa los colores específicos de la materia para los bordes y acentos (ej. text-fis10 para Física 10°).
5. Incluye siempre el footer estandarizado: "I.E. Paulo VI - Docente: Luis Miguel Cabrera - Laboratorio Virtual © 2026".

# Malla Curricular y Temas Pendientes
[INSTRUCCIÓN PARA GEMINI: Basa el contenido de las páginas solicitadas en el siguiente temario]

**FÍSICA**
**GRADO DÉCIMO**
PRIMER PERIODO
Introducción a la Física
• Método científico (cómo se construye la ciencia)
• Notación científica
• Magnitudes y unidades físicas
• Vectores
• Funciones y sus gráficas
• Cálculo de errores en las mediciones
Cinemática
• Movimiento en una dirección
• Movimiento rectilíneo
• Caída Libre
• Movimiento parabólico
• Movimiento circular

SEGUNDO PERIODO
Estática (Condición de Equilibrio)
• Diagramas de Cuerpo Libre (DCL).
• Tipos de fuerzas (Peso, Normal, Tensión, Fricción).
Dinámica (Leyes de Newton)
• Trabajo y potencia
• Energía mecánica (Cinética y Potencial)
• Impulso y cantidad de movimiento
• Ley de la Gravitación Universal

TERCER PERIODO
Hidrostática 
• Presión y Densidad.
• Presión Hidrostática
• Principios de Pascal (Prensa hidráulica)
• Principio de Arquímedes (Fuerza de Empuje y flotación)
Hidrodinámica 
• Viscosidad
• Caudal
• Flujo laminar
• Flujo Turbulento
• Ecuación de Bernoulli
• Ecuación de Continuidad

CUARTO PERIODO
Termodinámica
• Temperatura y calor
• Escalas de Temperatura
• Equilibrio térmico
• Transferencia de calor
• Calorimetría 
• Capacidad Calorífica
•Calor específico
• Calor Latente
• Cambios de fase
• Punto de fusión
• Punto de ebullición
• Proceso isotérmico

**GRADO UNDÉCIMO**
PRIMER PERIODO
Movimiento Armónico Simple (MAS)
• Cinemática y dinámica del MAS
• Péndulo simple y sistema masa-resorte
• Energía en sistemas oscilantes (Conservación)
Ondas y Sonido
• Naturaleza y propagación de ondas
• Sonido y sus características (Tono, timbre, intensidad)
• Efecto Doppler
• Sistemas resonantes (Cuerdas y tubos sonoros)

SEGUNDO PERIODO
Óptica Geométrica y Física
• La luz y su naturaleza (Dualidad onda-partícula)
• Reflexión de la luz (Espejos planos y esféricos)
• Refracción de la luz (Ley de Snell, reflexión total interna)
• Instrumentos ópticos (Lupas, microscopios, telescopios)
• Óptica geométrica y formación de imágenes

TERCER PERIODO
Electricidad: Carga y Campo
• Carga y materia (Ley de Coulomb)
• Campo eléctrico y líneas de fuerza
• Potencial eléctrico 
• Capacidad eléctrica (Condensadores)
Electrodinámica
• Resistencia eléctrica (Ley de Ohm)
• Circuitos eléctricos (Serie, paralelo, mixto)
• Energía y potencia eléctrica
• Leyes de Kirchhoff
• El microscopio.
• El telescopio.

CUARTO PERIODO
Magnetismo
• Campo magnético (Imanes y corrientes)
• Flujo de Campo Magnético
• Fuerza magnética sobre cargas en movimiento
Electromagnetismo
• Magnetismo inducido
• Inducción Electromagnética (Ley de Faraday-Lenz)
• Aplicaciones: El motor eléctrico y el generador.

**MATEMÁTICAS SEXTO**
PRIMER PERIODO
	Sistemas de numeración (Romano, Binarios, Mayas, Egipcios, Chinos)
	Conjunto de números naturales
	Múltiplos y divisores
	Números primos y compuestos
	Ecuaciones e inecuaciones
Estadística
	Conceptos generales 
	Población
	Muestra
	Variables y su clasificación.
	Caracterización de variables cualitativas.

SEGUNDO PERIODO
	Múltiplos y divisores de un número.
	Criterios de divisibilidad.
	Descomposición de números en su factor primo.
	Mínimo común múltiplo, y máximo común divisor.
	Potenciación de números naturales y sus propiedades.
	Radicación y logaritmación de números naturales.
Estadística
	Caracterización de dos variables cualitativas.
	Tablas de contingencia.
	Tablas de contingencia de frecuencias relativas.
	Tablas marginales.
	Gráficos de barras para dos variables cualitativas.

TERCER PERIODO
	Las fracciones
	Operaciones entre fracciones
	Suma y resta.
	Multiplicación. 
	División.
	Transforma número fraccionario a decimal.
	Transformar número decimal a fraccionario.
Estadística
	Experimento aleatorio.
	Experimento determinista.
	Espacio muestral
	Evento 
	Suceso 
	Problemas de aplicación

CUARTO PERIODO
	Números decimales.
	Orden en los números decimales.
	Operaciones entre números decimales.
	Adicción y sustracción.
	Multiplicación.
	División.
	Solución de problemas con números decimales.
	Razones y proporciones.
	Porcentajes.
Estadística
	Concepto de probabilidad.
	Probabilidad clásica.
	Operaciones entre conjuntos.
	Probabilidad conjuntiva.
	Tabla de frecuencia para datos agrupados.

**GEOMETRÍA SEXTO**
PRIMER PERIODO
	Conceptos básicos de la geometría.
	Punto
	Recta
	Plano
	Construcción de rectas
Paralelas
Perpendiculares
Secantes 

SEGUNDO PERIODO
	Conceptos básicos del ángulo.
	Clasificación de los ángulos.
	Según su medida.
	Según su posición.
	Construcción de los ángulos (regla, transportador).

TERCER PERIODO
	Polígonos.
	Clasificación de los polígonos.
	Regulares.
	Irregulares.
	Construcción de triángulos.
	Construcción de cuadriláteros.

CUARTO PERIODO
	Plano cartesiano.
	Transformaciones lineales.
	Traslación.
	Reflexión.
	Rotación.
	Homotecias.
