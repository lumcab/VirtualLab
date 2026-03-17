<div align="center">

# VirtualLab

**Laboratorio Virtual de Ciencias y Matemáticas**

![Estado](https://img.shields.io/badge/Estado-Activo-22c55e?style=for-the-badge)
![Arquitectura](https://img.shields.io/badge/Arquitectura-HTML%20%2B%20CSS%20%2B%20JS-7c3aed?style=for-the-badge)
![Licencia](https://img.shields.io/badge/Licencia-MIT-f59e0b?style=for-the-badge)
![Año](https://img.shields.io/badge/Año-2026-0ea5e9?style=for-the-badge)

Recursos interactivos para apoyar el aprendizaje de **Matemáticas**, **Geometría** y **Física** en distintos grados y períodos académicos.

</div>

---

## Descripción

**VirtualLab** es un sitio educativo estático creado por **Luis Miguel Cabrera** para organizar contenidos por materia, período y tema, con una experiencia visual moderna y ligera.

El proyecto está pensado para:

- presentar teoría de forma clara
- incluir interacciones en `canvas` y herramientas visuales
- acompañar cada tema con un mini quiz
- funcionar bien sin dependencias pesadas
- poder editarse fácilmente archivo por archivo

---

## Materias Disponibles

### Matemáticas 6°

- Período 1: Sistemas de numeración, Ecuaciones e inecuaciones, Introducción a la estadística
- Período 2: Múltiplos y divisores, Factores primos, MCM y MCD, Tablas y gráficos
- Período 3: Fracciones, Estadística y experimentos aleatorios
- Período 4: Decimales, Razones y porcentajes, Probabilidad y conjuntos

### Geometría 6°

- Período 1: Conceptos básicos de geometría, Construcción de rectas
- Período 2: Ángulos y construcción de ángulos
- Período 3: Plano cartesiano y polígonos
- Período 4: Transformaciones geométricas

### Física 10°

- Período 1: Introducción a la física, Magnitudes unidades y vectores, Cinemática
- Período 2: Estática y dinámica, Trabajo y energía, Impulso y gravitación
- Período 3: Hidrostática, Hidrodinámica, Ecuación de Bernoulli
- Período 4: Temperatura y calor, Termodinámica

### Física 11°

- Período 1: Movimiento armónico simple, Ondas y sonido, Sísmica y ondas sísmicas
- Período 2: Naturaleza de la luz, Refracción e instrumentos ópticos
- Período 3: Electrostática, Electrodinámica
- Período 4: Magnetismo, Electromagnetismo

---

## Qué Incluye Cada Tema

La estructura pedagógica del proyecto sigue una línea común:

- cabecera y contexto del tema
- teoría esencial
- interacción o simulador
- aplicación pedagógica o lectura guiada
- quiz corto
- navegación pedagógica entre temas

---

## Interacciones Destacadas

Algunas páginas ya incluyen experiencias interactivas como:

- conversor decimal, romano y binario
- flor mandala con regla, compás y transportador
- construcción de rectas paralelas, perpendiculares y secantes
- notación científica con lectura visual de escala
- suma de 2 o 3 vectores en forma gráfica y analítica
- conversor de magnitudes entre SI y sistema inglés/escolar
- comparador de MRU, MRUV y caída libre
- simulador de MAS, ondas y sonido
- sismograma didáctico con ondas `P`, `S` y superficiales

---

## Tecnologías

El proyecto usa una base simple y fácil de mantener:

- **HTML5** para la estructura
- **CSS3** para estilos globales, layout, componentes y temas
- **JavaScript vanilla** para navegación, quizzes y simulaciones
- **Canvas API** para visualizaciones e interacciones

No usa frameworks pesados ni procesos de build obligatorios.

---

## Estructura del Proyecto

```text
VirtualLab/
├── index.html
├── css/
│   ├── global.css
│   ├── layout.css
│   ├── components.css
│   └── themes.css
├── js/
│   ├── config.js
│   ├── main.js
│   ├── navigation.js
│   ├── router.js
│   ├── site-map.js
│   ├── storage.js
│   ├── theme-toggle.js
│   ├── quiz-engine.js
│   ├── graph-engine.js
│   └── simulator-engine.js
├── components/
│   ├── navbar.html
│   ├── sidebar.html
│   ├── footer.html
│   └── quiz-template.html
├── matematicas6/
├── geometria6/
├── fisica10/
└── fisica11/
```

---

## Navegación y Configuración

La información principal de materias, períodos y temas vive en:

- [js/site-map.js](./js/site-map.js)

La configuración general de marca vive en:

- [js/config.js](./js/config.js)

La shell compartida del sitio se renderiza desde:

- [js/navigation.js](./js/navigation.js)

---

## Diseño Actual

El sitio usa un sistema visual por temas:

- **Matemáticas**: ámbar
- **Geometría**: azul/cian
- **Física 10**: violeta pizarra
- **Física 11**: violeta/magenta

Además cuenta con:

- modo claro y oscuro
- fondos dinámicos suaves
- tarjetas con relieve y animaciones ligeras
- interacciones adaptadas a la paleta de cada materia

---

## Uso Local

Como es un proyecto estático, basta con abrir `index.html` en el navegador o servir la carpeta con un servidor local simple.

Ejemplo:

```bash
python3 -m http.server
```

Luego abre en el navegador:

```text
http://localhost:8000
```

---

## Convenciones del Proyecto

Para mantener consistencia:

- no inventar rutas fuera de `js/site-map.js`
- cada tema debe conservar teoría, interacción, quiz y navegación
- priorizar rendimiento y compatibilidad
- reutilizar los motores compartidos de simulación y gráfica cuando sea posible

Referencia interna:

- [Copilot.md](./Copilot.md)

---

## Autor

**Luis Miguel Cabrera**  
Proyecto educativo 2026

---

## Licencia

Este proyecto se distribuye bajo licencia **MIT**.
