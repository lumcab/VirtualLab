#!/bin/bash

echo "Iniciando la construcción del Laboratorio Virtual - I.E. Paulo VI..."

# 1. Crear directorios principales y subdirectorios de periodos
mkdir -p fisica_10/periodo_{1,2,3,4}
mkdir -p fisica_11/periodo_{1,2,3,4}
mkdir -p matematicas_6/periodo_{1,2,3,4}
mkdir -p geometria_6/periodo_{1,2,3,4}

# 2. Crear archivos index.html principales
touch index.html
touch fisica_10/index.html
touch fisica_11/index.html
touch matematicas_6/index.html
touch geometria_6/index.html

# 3. Crear archivos temáticos para Física 10°
# Periodo 1
touch fisica_10/periodo_1/1_intro_ciencia.html
touch fisica_10/periodo_1/2_magnitudes_vectores.html
touch fisica_10/periodo_1/3_cinematica.html
# Periodo 2
touch fisica_10/periodo_2/1_estatica_dinamica.html
touch fisica_10/periodo_2/2_energia_trabajo.html
touch fisica_10/periodo_2/3_impulso_gravitacion.html
# Periodo 3
touch fisica_10/periodo_3/1_hidrostatica.html
touch fisica_10/periodo_3/2_hidrodinamica.html
touch fisica_10/periodo_3/3_bernoulli.html
# Periodo 4
touch fisica_10/periodo_4/1_temperatura_calor.html
touch fisica_10/periodo_4/2_termodinamica.html

# 4. Crear archivos temáticos para Física 11°
# Periodo 1
touch fisica_11/periodo_1/1_mas.html
touch fisica_11/periodo_1/2_ondas_sonido.html
# Periodo 2
touch fisica_11/periodo_2/1_optica_naturaleza.html
touch fisica_11/periodo_2/2_refraccion_instrumentos.html
# Periodo 3
touch fisica_11/periodo_3/1_electrostatica.html
touch fisica_11/periodo_3/2_electrodinamica.html
# Periodo 4
touch fisica_11/periodo_4/1_magnetismo.html
touch fisica_11/periodo_4/2_electromagnetismo.html

# 5. Crear archivos temáticos para Matemáticas 6°
# Periodo 1
touch matematicas_6/periodo_1/1_sistemas_numeracion.html
touch matematicas_6/periodo_1/2_ecuaciones.html
touch matematicas_6/periodo_1/3_estadistica_intro.html
# Periodo 2
touch matematicas_6/periodo_2/1_divisibilidad.html
touch matematicas_6/periodo_2/2_operaciones_avanzadas.html
touch matematicas_6/periodo_2/3_tablas_graficos.html
# Periodo 3
touch matematicas_6/periodo_3/1_fracciones.html
touch matematicas_6/periodo_3/2_estadistica_aleatoria.html
# Periodo 4
touch matematicas_6/periodo_4/1_decimales.html
touch matematicas_6/periodo_4/2_razones_porcentajes.html
touch matematicas_6/periodo_4/3_probabilidad_conjuntos.html

# 6. Crear archivos temáticos para Geometría 6°
# Periodo 1
touch geometria_6/periodo_1/1_conceptos_basicos.html
touch geometria_6/periodo_1/2_construccion_rectas.html
# Periodo 2
touch geometria_6/periodo_2/1_angulos_conceptos.html
touch geometria_6/periodo_2/2_construccion_angulos.html
# Periodo 3
touch geometria_6/periodo_3/1_plano_cartesiano.html
touch geometria_6/periodo_3/2_poligonos.html
# Periodo 4
touch geometria_6/periodo_4/1_transformaciones_intro.html
touch geometria_6/periodo_4/2_transformaciones_lineales.html

echo "¡Estructura generada con éxito! Todos los directorios y archivos están listos."
