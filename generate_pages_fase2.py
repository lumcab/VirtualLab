#!/usr/bin/env python3
"""
Generador completo dePages para VirtualLab - Fase 2
Completa Física 11°, Geometría 6° y Matemáticas 6° período 3-4
"""

import os

os.chdir('/home/lumcab/Documentos/Programación/VirtualLab')

# Definición compileta de páginas a generar
pages_config = {
    'fisica11': {
        'color': '#a855f7',
        'color_name': 'fis11',
        'icon': 'fa-vial',
        'pages': {
            'periodo1': [
                {
                    'file': '1_mas.html',
                    'title': 'MAS (Movimiento Armónico Simple)',
                    'topics': [
                        {'name': 'Cinemática del MAS', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">x(t) = A cos(ωt + φ)<br>v(t) = -Aω sin(ωt + φ)<br>a(t) = -Aω² cos(ωt + φ)</div>'},
                        {'name': 'Dinámica del MAS', 'content': '<p class="mb-2"><strong class="text-fis11">Fuerza restoradora:</strong></p><div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">F = -kx<br>ω = √(k/m)</div>'},
                        {'name': 'Energía en M AS', 'content': '<p class="mb-2">La energía total es constante:</p><div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">E = ½kA² = cte</div>'},
                        {'name': 'Aplicaciones', 'content': '<ul class="list-disc list-inside text-sm text-slate-300 space-y-1"><li>Péndulo simple</li><li>Masa-resorte</li><li>Osciladores acoplados</li></ul>'}
                    ]
                }
            ],
            'periodo2': [
                {
                    'file': '1_optica_naturaleza.html',
                    'title': 'Óptica: Naturaleza de la Luz',
                    'topics': [
                        {'name': 'Teoría Corpuscular', 'content': '<p class="mb-2">La luz se comporta como partículas (fotones).</p><div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">E = hf = hc/λ<br>h = 6.63 × 10⁻³⁴ J·s</div>'},
                        {'name': 'Teoría Ondulatoria', 'content': '<p class="mb-2">La luz es una onda electromagnética.</p><div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">c = λf = 3 × 10⁸ m/s</div>'},
                        {'name': 'Dualidad Onda-Partícula', 'content': '<p class="text-sm text-slate-300">La luz presenta propiedades tanto de ondas como de partículas según el experimento realizado.</p>'},
                        {'name': 'Espectro Electromagnético', 'content': '<ul class="list-disc list-inside text-sm text-slate-300 space-y-1"><li>Radio (λ > 1 mm)</li><li>Microondas</li><li>Infrarrojo</li><li>Visible (400-700 nm)</li><li>Ultravioleta</li><li>Rayos X</li><li>Rayos Gamma (λ < 0.01 nm)</li></ul>'}
                    ]
                },
                {
                    'file': '2_refraccion_instrumentos.html',
                    'title': 'Refracción e Instrumentos Ópticos',
                    'topics': [
                        {'name': 'Refracción de la Luz', 'content': '<p class="mb-2"><strong class="text-fis11">Ley de Snell:</strong></p><div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">n₁ sin(θ₁) = n₂ sin(θ₂)</div>'},
                        {'name': 'Lentes Delgadas', 'content': '<p class="mb-2"><strong class="text-fis11">Ecuación de lentes:</strong></p><div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">1/f = 1/s + 1/s\'<br>A = h\'/h = -s\'/s</div>'},
                        {'name': 'Espejos', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">1/f = 1/s + 1/s\'<br>f = R/2</div>'},
                        {'name': 'Instrumentos Ópticos', 'content': '<ul class="list-disc list-inside text-sm text-slate-300 space-y-1"><li>Lupa (lente convergente)</li><li>Microscopio (múltiples lentes)</li><li>Telescopio (refractor/reflector)</li><li>Cámara fotográfica</li></ul>'}
                    ]
                }
            ],
            'periodo3': [
                {
                    'file': '1_electrostatica.html',
                    'title': 'Electrostática',
                    'topics': [
                        {'name': 'Carga Eléctrica', 'content': '<p class="mb-2"><strong class="text-fis11">Ley de Coulomb:</strong></p><div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">F = k(q₁q₂)/r²<br>k = 8.99 × 10⁹ N·m²/C²</div>'},
                        {'name': 'Campo Eléctrico', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">E = F/q = kQ/r²<br>[E] = N/C = V/m</div>'},
                        {'name': 'Potencial Eléctrico', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">V = W/q = kQ/r<br>[V] = Voltio (V) = J/C</div>'},
                        {'name': 'Capacitancia', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">C = Q/V<br>[C] = Faradio (F) = C/V</div>'}
                    ]
                },
                {
                    'file': '2_electrodinamica.html',
                    'title': 'Electrodinática',
                    'topics': [
                        {'name': 'Corriente Eléctrica', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">I = Q/t<br>[I] = Amperio (A) = C/s</div>'},
                        {'name': 'Resistencia Eléctrica', 'content': '<p class="mb-2"><strong class="text-fis11">Ley de Ohm:</strong></p><div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">V = I × R<br>R = ρ L/A</div>'},
                        {'name': 'Circuitos Eléctricos', 'content': '<p class="mb-2"><strong class="text-fis11">En serie:</strong> R_total = R₁ + R₂ + ...</p><p><strong class="text-fis11">En paralelo:</strong> 1/R_total = 1/R₁ + 1/R₂ + ...</p>'},
                        {'name': 'Potencia y Energía', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">P = IV = I²R = V²/R<br>E = P × t</div>'}
                    ]
                }
            ],
            'periodo4': [
                {
                    'file': '1_magnetismo.html',
                    'title': 'Magnetismo',
                    'topics': [
                        {'name': 'Campo Magnético', 'content': '<p class="mb-2">Fuerza magnética sobre carga en movimiento:</p><div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">F = qvB sin(θ)<br>[B] = Tesla (T)</div>'},
                        {'name': 'Fuerza de Lorentz', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">F = q(E + v × B)</div><p class="text-sm text-slate-300 mt-2">Combina fuerzas eléctrica y magnética.</p>'},
                        {'name': 'Fuentes de Campo Magnético', 'content': '<p class="mb-2"><strong class="text-fis11">Ley de Biot-Savart:</strong></p><div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">dB = (μ₀/4π)(Idl × r)/r³</div>'},
                        {'name': 'Aplicaciones', 'content': '<ul class="list-disc list-inside text-sm text-slate-300 space-y-1"><li>Motores eléctricos</li><li>Brújulas</li><li>Generadores</li><li>Transformadores</li></ul>'}
                    ]
                },
                {
                    'file': '2_electromagnetismo.html',
                    'title': 'Electromagnetismo',
                    'topics': [
                        {'name': 'Inducción Electromagnética', 'content': '<p class="mb-2"><strong class="text-fis11">Ley de Faraday:</strong></p><div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">ε = -dΦ/dt</div><p class="text-sm text-slate-300 mt-2">El flujo magnético variable produce f.e.m.</p>'},
                        {'name': ' Ley de Lenz', 'content': '<p class="text-sm text-slate-300">La corriente inducida se opone al cambio de flujo magnético.</p>'},
                        {'name': 'Circuitos RL', 'content': '<p class="mb-2"><strong class="text-fis11">Autoinducción:</strong></p><div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">L = Φ/I<br>[L] = Henrio (H)</div>'},
                        {'name': 'Ondas Electromagnéticas', 'content': '<p class="text-sm text-slate-300">Luz, radio, rayos X son todas ondas electromagnéticas descritas por las ecuaciones de Maxwell.</p>'}
                    ]
                }
            ]
        }
    },
    'geometria6': {
        'color': '#0ea5e9',
        'color_name': 'geo',
        'icon': 'fa-shapes',
        'pages': {
            'periodo1': [
                {
                    'file': '2_construccion_rectas.html',
                    'title': 'Construcción de Rectas',
                    'topics': [
                        {'name': 'Rectas Paralelas', 'content': '<p class="mb-2">Rectas que nunca se intersectan.</p><p class="text-sm text-slate-300">Se construyen manteniendo la misma distancia perpendicular.</p>'},
                        {'name': 'Rectas Perpendiculares', 'content': '<p class="mb-2">Rectas que se intersectan en ángulo de 90°.</p><p class="text-sm text-slate-300">Se construyen usando transportador o compás.</p>'},
                        {'name': 'Bisectriz de un Ángulo', 'content': '<p class="text-sm text-slate-300">Recta que divide un ángulo en dos partes iguales.</p>'},
                        {'name': 'Mediatriz de un Segmento', 'content': '<p class="text-sm text-slate-300">Recta perpendicular al punto medio de un segmento.</p>'}
                    ]
                }
            ],
            'periodo2': [
                {
                    'file': '1_angulos_conceptos.html',
                    'title': 'Ángulos: Conceptos',
                    'topics': [
                        {'name': 'Definición de Ángulo', 'content': '<p class="text-sm text-slate-300">Apertura entre dos rayos que comparten un origen (vértice).</p>'},
                        {'name': 'Clasificación de Ángulos', 'content': '<ul class="list-disc list-inside text-sm text-slate-300 space-y-1"><li>Agudo: 0° < θ < 90°</li><li>Recto: θ = 90°</li><li>Obtuso: 90° < θ < 180°</li><li>Llano: θ = 180°</li></ul>'},
                        {'name': 'Ángulos Complementarios', 'content': '<p class="text-sm text-slate-300">Dos ángulos que suman 90°.</p>'},
                        {'name': 'Ángulos Suplementarios', 'content': '<p class="text-sm text-slate-300">Dos ángulos que suman 180°.</p>'}
                    ]
                },
                {
                    'file': '2_construccion_angulos.html',
                    'title': 'Construcción de Ángulos',
                    'topics': [
                        {'name': 'Transportador', 'content': '<p class="text-sm text-slate-300">Instrumento para medir y construir ángulos con precisión.</p>'},
                        {'name': 'Compás', 'content': '<p class="text-sm text-slate-300">Herramienta para construir ángulos iguales y bisectrices.</p>'},
                        {'name': 'Copia de Ángulos', 'content': '<p class="text-sm text-slate-300">Procedimiento geométrico para reproducir un ángulo.</p>'},
                        {'name': 'Ángulos Especiales', 'content': '<ul class="list-disc list-inside text-sm text-slate-300 space-y-1"><li>30° (π/6)</li><li>45° (π/4)</li><li>60° (π/3)</li><li>90° (π/2)</li></ul>'}
                    ]
                }
            ],
            'periodo3': [
                {
                    'file': '1_plano_cartesiano.html',
                    'title': 'Plano Cartesiano',
                    'topics': [
                        {'name': 'Coordenadas', 'content': '<p class="mb-2">Pares (x, y) que ubican puntos en el plano.</p><p class="text-sm text-slate-300">x: eje horizontal (abscisa)<br>y: eje vertical (ordenada)</p>'},
                        {'name': 'Distancia entre Puntos', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">d = √[(x₂-x₁)² + (y₂-y₁)²]</div>'},
                        {'name': 'Punto Medio', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">M = ((x₁+x₂)/2, (y₁+y₂)/2)</div>'},
                        {'name': 'Ecuación de Recta', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">y = mx + b<br>m: pendiente <br>b: intersección con eje y</div>'}
                    ]
                },
                {
                    'file': '2_poligonos.html',
                    'title': 'Polígonos',
                    'topics': [
                        {'name': 'Definición', 'content': '<p class="text-sm text-slate-300">Figura cerrada formada por segmentos de recta llamados lados.</p>'},
                        {'name': 'Triangulos', 'content': '<ul class="list-disc list-inside text-sm text-slate-300 space-y-1"><li>Equilátero: 3 lados iguales</li><li>Isósceles: 2 lados iguales</li><li>Escaleno: 3 lados diferentes</li><li>Área = ½ × base × altura</li></ul>'},
                        {'name': 'Cuadriláteros', 'content': '<ul class="list-disc list-inside text-sm text-slate-300 space-y-1"><li>Cuadrado: 4 lados iguales, ángulos 90°</li><li>Rectángulo: lados opuestos iguales</li><li>Rombo: 4 lados iguales</li><li>Trapecio</li></ul>'},
                        {'name': 'Polígonos Regulares', 'content': '<p class="text-sm text-slate-300">Pentágono, hexágono, heptágono...<br>Todos los lados y ángulos iguales.</p>'}
                    ]
                }
            ],
            'periodo4': [
                {
                    'file': '1_transformaciones_intro.html',
                    'title': 'Transformaciones Geométricas: Intro',
                    'topics': [
                        {'name': 'Traslación', 'content': '<p class="text-sm text-slate-300">Movimiento de una figura sin rotación ni cambio de tamaño.</p><p class="text-sm text-slate-300 mt-2">Nueva posición = posición original + vector de traslación</p>'},
                        {'name': 'Rotación', 'content': '<p class="text-sm text-slate-300">Giro de una figura alrededor de un punto fijo (centro).</p><p class="text-sm text-slate-300 mt-2">Se define por ángulo y dirección (horaria/antihoraria)</p>'},
                        {'name': 'Reflexión', 'content': '<p class="text-sm text-slate-300">Espejo de una figura respecto a una recta (eje de simetría).</p>'},
                        {'name': 'Propiedades', 'content': '<p class="text-sm text-slate-300">Las transformaciones isométricas conservan distancias y ángulos.</p>'}
                    ]
                },
                {
                    'file': '2_transformaciones_lineales.html',
                    'title': 'Transformaciones Lineales',
                    'topics': [
                        {'name': 'Escalado', 'content': '<p class="text-sm text-slate-300">Multiplicación de coordenadas por un factor de escala k.</p><p class="text-sm text-slate-300 mt-2">Nueva coordenada = k × coordenada original</p>'},
                        {'name': 'Matriz de Transformación', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 text-center">[x\'] = [a b] [x]<br>[y\'] = [c d] [y]</div>'},
                        {'name': 'Composición de Transformaciones', 'content': '<p class="text-sm text-slate-300">Aplicación sucesiva de dos o más transformaciones.</p>'},
                        {'name': 'Aplicaciones', 'content': '<ul class="list-disc list-inside text-sm text-slate-300 space-y-1"><li>Gráficos por computadora</li><li>Animaciones</li><li>Ingeniería</li><li>Diseño</li></ul>'}
                    ]
                }
            ]
        }
    },
    'matematicas6': {
        'color': '#f59e0b',
        'color_name': 'math',
        'icon': 'fa-calculator',
        'pages': {
            'periodo3': [
                {
                    'file': '1_fracciones.html',
                    'title': 'Fracciones',
                    'topics': [
                        {'name': 'Concepto de Fracción', 'content': '<p class="mb-2">Partes de un todo: a/b (a: numerador, b: denominador)</p><p class="text-sm text-slate-300">Ejemplo: 3/4 = tres cuartos</p>'},
                        {'name': 'Fracciones Equivalentes', 'content': '<p class="text-sm text-slate-300">Fracciones que representan el mismo valor.</p><p class="text-sm text-slate-300 mt-2">2/4 = 3/6 = 4/8 = 1/2</p>'},
                        {'name': 'Operaciones con Fracciones', 'content': '<p class="text-sm text-slate-300"><strong>Suma:</strong> a/b + c/d = (ad + bc)/(bd)</p><p class="text-sm text-slate-300"><strong>Resta:</strong> a/b - c/d = (ad - bc)/(bd)</p><p class="text-sm text-slate-300"><strong>Multiplicación:</strong> (a/b) × (c/d) = ac/bd</p><p class="text-sm text-slate-300"><strong>División:</strong> (a/b) ÷ (c/d) = (a/b) × (d/c)</p>'},
                        {'name': 'Simplificación', 'content': '<p class="text-sm text-slate-300">Reducir fracción a su forma más simple.</p><p class="text-sm text-slate-300 mt-2">Dividir numerador y denominador por su MCD</p>'}
                    ]
                },
                {
                    'file': '2_estadistica_aleatoria.html',
                    'title': 'Estadística y Aleatoriedad',
                    'topics': [
                        {'name': 'Experimento Aleatorio', 'content': '<p class="text-sm text-slate-300">Ensayo cuyo resultado no se puede predecir con certeza.</p><p class="text-sm text-slate-300 mt-2">Ejemplo: Lanzar un dado</p>'},
                        {'name': 'Espacio Muestral', 'content': '<p class="text-sm text-slate-300">Conjunto de todos los posibles resultados.</p><p class="text-sm text-slate-300 mt-2">Dado: {1, 2, 3, 4, 5, 6}</p>'},
                        {'name': 'Evento o Suceso', 'content': '<p class="text-sm text-slate-300">Subconjunto del espacio muestral.</p><p class="text-sm text-slate-300 mt-2">Sacar un número par: {2, 4, 6}</p>'},
                        {'name': 'Probabilidad Clásica', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">P(A) = casos favorables / casos posibles</div>'}
                    ]
                }
            ],
            'periodo4': [
                {
                    'file': '1_decimales.html',
                    'title': 'Números Decimales',
                    'topics': [
                        {'name': 'Sistema Decimal', 'content': '<p class="text-sm text-slate-300">Base 10: cada posición representa una potencia de 10.</p><p class="text-sm text-slate-300 mt-2">3.14 = 3 + 0.1 + 0.04</p>'},
                        {'name': 'Conversión', 'content': '<p class="text-sm text-slate-300"><strong>Fracción a decimal:</strong> Dividir numerador entre denominador</p><p class="text-sm text-slate-300"><strong>Decimal a fracción:</strong> Usar potencias de 10</p>'},
                        {'name': 'Operaciones', 'content': '<ul class="list-disc list-inside text-sm text-slate-300 space-y-1"><li>Suma: alinear puntos decimales</li><li>Resta: alinear puntos decimales</li><li>Multiplicación: multiplicar ignorando decimales</li><li>División: usar algoritmo estándar</li></ul>'},
                        {'name': 'Redondeo', 'content': '<p class="text-sm text-slate-300">Aproximar a cifras significativas.</p><p class="text-sm text-slate-300 mt-2">3.14159... ≈ 3.14 (2 decimales)</p>'}
                    ]
                },
                {
                    'file': '2_razones_porcentajes.html',
                    'title': 'Razones y Porcentajes',
                    'topics': [
                        {'name': 'Razón', 'content': '<p class="text-sm text-slate-300">Comparación entre dos cantidades: a:b o a/b</p><p class="text-sm text-slate-300 mt-2">Ejemplo: 3:5 (3 de cada 5)</p>'},
                        {'name': 'Proporción', 'content': '<p class="text-sm text-slate-300">Igualdad entre dos razones: a/b = c/d</p>'},
                        {'name': 'Porcentaje', 'content': '<p class="text-sm text-slate-300">Razón sobre 100: p% = p/100</p><p class="text-sm text-slate-300 mt-2">50% = 50/100 = 0.5 = 1/2</p>'},
                        {'name': 'Cálculos de Porcentaje', 'content': '<p class="text-sm text-slate-300"><strong>Hallar p% de n:</strong> (p/100) × n</p><p class="text-sm text-slate-300"><strong>% que es a de b:</strong> (a/b) × 100%</p>'}
                    ]
                },
                {
                    'file': '3_probabilidad_conjuntos.html',
                    'title': 'Probabilidad y Conjuntos',
                    'topics': [
                        {'name': 'Teoría de Conjuntos', 'content': '<p class="text-sm text-slate-300"><strong>Unión (∪):</strong> Elementos en A o B</p><p class="text-sm text-slate-300"><strong>Intersección (∩):</strong> Elementos en A y B</p><p class="text-sm text-slate-300"><strong>Complemento:</strong> Elementos no en A</p>'},
                        {'name': 'Diagrama de Venn', 'content': '<p class="text-sm text-slate-300">Representación visual de conjuntos y sus relaciones.</p>'},
                        {'name': 'Probabilidad Condicional', 'content': '<div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">P(A|B) = P(A ∩ B) / P(B)</div>'},
                        {'name': 'Eventos Independientes', 'content': '<p class="text-sm text-slate-300">P(A y B) = P(A) × P(B)</p><p class="text-sm text-slate-300 mt-2">Dos eventos no se afectan mutuamente</p>'}
                    ]
                }
            ]
        }
    }
}

def generate_html_page(periodo_name, page_config, color, color_name, subject_key):
    """Genera HTML completo para un tema"""
    
    file_name = page_config['file']
    title = page_config['title']
    topics = page_config['topics']
    
    tabs_html = ''.join([
        f'''<button onclick="switchTab('tab{i}')" class="tab-btn {'active' if i == 0 else ''} px-4 py-2 rounded-full {'bg-' + color_name if i == 0 else 'bg-slate-600'} text-white font-bold text-sm hover:scale-105 transition-transform">
            <i class="fas fa-circle-{i}"></i> {topic['name'][:20]}
        </button>'''
        for i, topic in enumerate(topics)
    ])
    
    sections_html = ''.join([
        f'''<section id="tab-tab{i}" class="{'hidden' if i > 0 else ''} space-y-6 section-tab">
            <div class="glass p-6 rounded-xl border-t-4 border-{color_name}">
                <h3 class="text-2xl font-bold text-{color_name} mb-4">
                    <i class="fas fa-book"></i> {topic['name']}
                </h3>
                <div class="space-y-4 text-slate-300">
                    {topic['content']}
                </div>
            </div>
        </section>'''
        for i, topic in enumerate(topics)
    ])
    
    html = f'''<!DOCTYPE html>
<html lang="es" class="scroll-smooth" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | {subject_key.replace('6', '6°').replace('10', '10°').replace('11', '11°').title()} - {periodo_name}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../styles.css">
    <script>
        tailwind.config = {{
            theme: {{
                extend: {{
                    fontFamily: {{ tech: ['Orbitron', 'sans-serif'], body: ['Rajdhani', 'sans-serif'] }},
                    colors: {{ {color_name}: '{color}', neon: '#00f3ff', cyber: '#facc15', dark: '#050b14' }}
                }}
            }}
        }}
    </script>
    <style>
        body {{ font-family: 'Rajdhani', sans-serif; }}
        [data-theme="dark"] body {{ background-color: #050b14; color: #e2e8f0; }}
        [data-theme="light"] body {{ background-color: #f3f4f6; color: #1f2937; }}
        .glass {{ background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(59, 130, 246, 0.2); }}
        [data-theme="light"] .glass {{ background: rgba(255, 255, 255, 0.7); border-color: rgba(59, 130, 246, 0.3); }}
    </style>
</head>
<body class="pb-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">

    <nav class="border-b border-white/10 bg-dark/95 backdrop-blur-md sticky top-0 z-50">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="../index.html" class="text-xs font-bold text-slate-400 hover:text-{color_name} border border-slate-600 px-3 py-1 rounded transition-colors">
                <i class="fas fa-arrow-left"></i> Atrás
            </a>
            <span class="font-tech text-xl text-{color_name} tracking-widest">{title.upper()[:30]}</span>
            <button onclick="toggleTheme()" class="text-xs font-bold text-slate-400 hover:text-{color_name} border border-slate-600 px-3 py-1 rounded transition-colors">
                <i class="fas fa-moon"></i>
            </button>
        </div>
    </nav>

    <main class="container mx-auto px-4 py-8 max-w-5xl">

        <section class="glass p-8 rounded-2xl mb-8 border-l-4 border-{color_name}">
            <div class="flex items-center gap-4 mb-4">
                <i class="fas fa-book text-4xl text-{color_name}"></i>
                <div>
                    <h1 class="font-tech text-4xl text-{color_name} mb-2">{title}</h1>
                    <p class="text-slate-400">{periodo_name}</p>
                </div>
            </div>
            <p class="text-sm text-slate-300 leading-relaxed">Exploración didáctica de {title.lower()}.</p>
        </section>

        <div class="mb-6 flex flex-wrap gap-2 justify-center">
            {tabs_html}
        </div>

        {sections_html}
    </main>

    <section class="container mx-auto px-4 max-w-5xl mt-12">
        <div class="glass p-6 rounded-xl border-l-4 border-cyber">
            <h3 class="text-2xl font-bold text-cyber mb-6 flex items-center gap-2">
                <i class="fas fa-question-circle"></i> Prueba tu Conocimiento
            </h3>
            <div class="bg-slate-900/50 p-4 rounded">
                <p class="font-bold text-slate-300 mb-3">¿Qué has aprendido?</p>
                <p class="text-sm text-slate-400">Las evaluaciones interactivas estarán disponibles próximamente.</p>
            </div>
        </div>
    </section>

    <footer class="mt-16 border-t border-slate-700 pt-6 pb-4 px-4">
        <div class="container mx-auto max-w-5xl text-center text-slate-500 text-xs">
            <p class="mb-1">I.E. Paulo VI - Docente: Luis Miguel Cabrera - Laboratorio Virtual © 2026</p>
            <p>{title} | {periodo_name}</p>
        </div>
    </footer>

    <script src="../../app.js"></script>
    <script>
        function toggleTheme() {{
            const html = document.documentElement;
            const current = html.getAttribute('data-theme') || 'dark';
            const newTheme = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme-{file_name.split('.')[0]}', newTheme);
        }}

        window.addEventListener('load', () => {{
            const saved = localStorage.getItem('theme-{file_name.split('.')[0]}') || 'dark';
            document.documentElement.setAttribute('data-theme', saved);
        }});

        function switchTab(id) {{
            document.querySelectorAll('.section-tab').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('bg-{color_name}'));
            document.getElementById(id).classList.remove('hidden');
            event.currentTarget.classList.add('bg-{color_name}');
        }}
    </script>
</body>
</html>'''
    
    return html

# Generar todas las páginas
count = 0
for subject_key, subject in pages_config.items():
    for periodo_key, topics in subject['pages'].items():
        periodo_num = periodo_key.replace('periodo', '')
        periodo_name = f'Período {periodo_num}'
        
        for page in topics:
            filepath = f'{subject_key}/{periodo_key}/{page["file"]}'
            os.makedirs(os.path.dirname(filepath), exist_ok=True)
            
            html = generate_html_page(periodo_name, page, subject['color'], subject['color_name'], subject_key)
            
            with open(filepath, 'w') as f:
                f.write(html)
            
            print(f'✅ Creado: {filepath}')
            count += 1

print(f'\n✅ {count} páginas generadas exitosamente')
