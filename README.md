<div align="center">

# 🔬 Laboratorio Virtual | I.E. Paulo VI

![Estado](https://img.shields.io/badge/Estado-Activo_y_Modular-success?style=for-the-badge&logo=statuspage)
![Versión](https://img.shields.io/badge/Versión-2.0.0-blue?style=for-the-badge&logo=git)
![Licencia](https://img.shields.io/badge/Licencia-MIT-yellow?style=for-the-badge&logo=open-source-initiative)
![Tech](https://img.shields.io/badge/Tech-HTML5_|_JS_Puro_|_Bash-38bdf8?style=for-the-badge&logo=javascript)

**Plataforma interactiva para la enseñanza de Ciencias Naturales y Matemáticas mediante simulaciones y evaluación en tiempo real.**

[Ver Demo (GitHub Pages)]() · [Reportar un Bug]() · [Solicitar Función]()

</div>

---

## 📋 Descripción

El **Laboratorio Virtual** es una suite de herramientas educativas web desarrollada para los estudiantes de la **Institución Educativa Paulo VI**. Este proyecto busca modernizar el aprendizaje en el aula mediante la gamificación, la visualización interactiva de conceptos abstractos y la evaluación continua.

En su versión 2.0.0, el sistema ha sido completamente reestructurado en una **arquitectura modular por periodos académicos**, evitando la sobrecarga cognitiva. Es un sistema ligero, estático y no requiere instalación, ideal para funcionar en equipos con recursos limitados o dispositivos móviles.

---

## 🚀 Módulos Académicos (Plan Anual)

El contenido está distribuido a lo largo de los 4 periodos académicos del año escolar para facilitar el aprendizaje progresivo.

### 📐 Matemáticas y Geometría (Grado 6°)
Fundamentos numéricos, lógicos y espaciales.

| Módulo | Directorio Base | Descripción Temática | Características Clave |
| :--- | :--- | :--- | :--- |
| **Matemáticas** | `/matematicas_6/` | Sistemas numéricos, divisibilidad, fracciones, decimales y estadística. | • Juegos de lógica binaria<br>• Calculadoras fraccionarias<br>• Quizzes al final de cada tema |
| **Geometría** | `/geometria_6/` | Geometría Euclidiana, ángulos, polígonos y transformaciones. | • Renderizado en Canvas API<br>• Herramientas de trazado virtual<br>• Interfaz táctil amigable |

### ⚛️ Ciencias Naturales: Física (Grados 10° y 11°)
Simuladores para fenómenos físicos, cinemática y electromagnetismo.

| Módulo | Directorio Base | Descripción Temática | Características Clave |
| :--- | :--- | :--- | :--- |
| **Física Mecánica (10°)** | `/fisica_10/` | Cinemática, dinámica, mecánica de fluidos y termodinámica. | • Simuladores de movimiento<br>• Diagramas de cuerpo libre<br>• Calculadora de calorimetría |
| **Ondas y Energía (11°)** | `/fisica_11/` | Movimiento armónico, ondas, óptica y electromagnetismo. | • Visualizador de efecto Doppler<br>• Trazador de rayos (Óptica)<br>• Circuitos virtuales (Ley Ohm) |

---

## 🛠️ Tecnologías Utilizadas

Este proyecto utiliza un stack **"Vanilla"** (sin frameworks pesados) para garantizar la máxima compatibilidad, velocidad de carga y facilidad de edición en entornos Linux y Windows.

* **Estructura:** HTML5 Semántico.
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (vía CDN) y CSS3 moderno.
* **Lógica e Interacción:** JavaScript (ES6+) nativo.
* **Automatización:** Scripts de Bash (`.sh`) para el andamiaje del proyecto.
* **Iconografía:** [FontAwesome 6](https://fontawesome.com/).
* **Tipografías:** Google Fonts (*Cinzel, Fredoka, Orbitron, Share Tech Mono*).

---

## 📂 Estructura del Proyecto

El repositorio sigue un modelo estricto de carpetas para mantener el orden por materia y periodo lectivo:

```text
Laboratorio_Virtual/
│
├── index.html               # 🏠 Dashboard principal y menú de navegación global
├── generador_archivos.sh    # ⚙️ Script para construir la estructura base
│
├── fisica_10/               # 📂 Módulos de Física 10°
│   ├── index.html           # Menú de la materia
│   ├── periodo_1/           # Páginas temáticas del Periodo 1
│   ├── periodo_2/           # Páginas temáticas del Periodo 2
│   └── ...
│
├── fisica_11/               # 📂 Módulos de Física 11°
├── matematicas_6/           # 📂 Módulos de Matemáticas 6°
├── geometria_6/             # 📂 Módulos de Geometría 6°
│
├── LICENSE                  # ⚖️ Archivo de Licencia MIT
└── README.md                # 📄 Documentación del proyecto
