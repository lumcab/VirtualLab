#!/usr/bin/env python3
"""
Generador de Páginas Completas para VirtualLab
Crea todas las páginas faltantes con contenido didáctico completo
"""

import os
import json

os.chdir('/home/lumcab/Documentos/Programación/VirtualLab')

# Definición de páginas a generar
pages_config = {
    'fisica10': {
        'color': '#3b82f6',
        'color_name': 'fis10',
        'icon': 'fa-microscope',
        'pages': {
            'periodo1': [
                {
                    'file': '3_cinematica.html',
                    'title': 'Cinemática',
                    'topics': [
                        {
                            'name': 'MRU (Movimiento Rectilíneo Uniforme)',
                            'content': '''
                            <p class="mb-3"><strong class="text-fis10">Definición:</strong> Movimiento en línea recta con velocidad constante.</p>
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                v = d / t<br>
                                d = v × t
                            </div>
                            <p class="text-sm text-slate-300">Ejemplo: Un auto viaja a 60 km/h durante 2 horas. ¿Cuánta distancia recorre?</p>
                            <p class="text-sm text-cyan-400 mt-2">Solución: d = 60 × 2 = 120 km</p>
                            '''
                        },
                        {
                            'name': 'MRUA (Movimiento Rectilíneo Uniformemente Acelerado)',
                            'content': '''
                            <p class="mb-3"><strong class="text-fis10">Definición:</strong> Movimiento con aceleración constante.</p>
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                a = Δv / Δt<br>
                                v = v₀ + at<br>
                                d = v₀t + ½at²
                            </div>
                            '''
                        },
                        {
                            'name': 'Caída Libre',
                            'content': '''
                            <p class="mb-3"><strong class="text-fis10">Condición:</strong> Aceleración gravitatoria g = 9.8 m/s²</p>
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                h = ½gt²<br>
                                v = gt<br>
                                v² = 2gh
                            </div>
                            '''
                        },
                        {
                            'name': 'Movimiento Parabólico',
                            'content': '''
                            <p class="mb-3"><strong class="text-fis10">Componentes:</strong> Horizontal (MRU) + Vertical (MRUA)</p>
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                x = v₀ₓ × t<br>
                                y = v₀ᵧ × t - ½gt²<br>
                                Rango: R = (v₀² sin(2θ)) / g
                            </div>
                            '''
                        }
                    ]
                }
            ],
            'periodo2': [
                {
                    'file': '1_estatica_dinamica.html',
                    'title': 'Estática y Dinámica',
                    'topics': [
                        {
                            'name': 'Leyes de Newton',
                            'content': '''
                            <p class="mb-3"><strong class="text-fis10">1ª Ley (Inercia):</strong> Todo cuerpo permanece en reposo si no actúa fuerza neta.</p>
                            <p class="mb-3"><strong class="text-fis10">2ª Ley (Fundamental):</strong> F = m × a</p>
                            <p class="mb-3"><strong class="text-fis10">3ª Ley (Acción-Reacción):</strong> Toda acción tiene una reacción igual y opuesta.</p>
                            '''
                        },
                        {
                            'name': 'Diagramas de Cuerpo Libre (DCL)',
                            'content': '''
                            <p class="mb-3">Representación gráfica de todas las fuerzas actuando sobre un cuerpo.</p>
                            <ul class="list-disc list-inside text-sm text-slate-300 space-y-1">
                                <li>Peso (W = mg)</li>
                                <li>Normal (N)</li>
                                <li>Tensión (T)</li>
                                <li>Fricción (f)</li>
                            </ul>
                            '''
                        },
                        {
                            'name': 'Equilibrio de Fuerzas',
                            'content': '''
                            <p class="mb-3"><strong class="text-fis10">Condición de Equilibrio:</strong> ΣF = 0</p>
                            <p class="text-sm text-slate-300">Un cuerpo está en equilibrio cuando la suma de fuerzas es cero.</p>
                            '''
                        }
                    ]
                },
                {
                    'file': '2_energia_trabajo.html',
                    'title': 'Trabajo y Energía',
                    'topics': [
                        {
                            'name': 'Trabajo (W)',
                            'content': '''
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                W = F × d × cos(θ)<br>
                                [W] = Julio (J) = N·m
                            </div>
                            <p class="text-sm text-slate-300">El trabajo es la energía transferida por una fuerza.</p>
                            '''
                        },
                        {
                            'name': 'Potencia (P)',
                            'content': '''
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                P = W / t = F × v<br>
                                [P] = Watio (W) = J/s
                            </div>
                            '''
                        },
                        {
                            'name': 'Energía Cinética y Potencial',
                            'content': '''
                            <p class="mb-2"><strong class="text-cyan-400">Energía Cinética:</strong></p>
                            <div class="bg-black/50 p-2 rounded font-mono text-sm text-yellow-400 mb-3">
                                EC = ½ m v²
                            </div>
                            <p class="mb-2"><strong class="text-green-400">Energía Potencial Gravitatoria:</strong></p>
                            <div class="bg-black/50 p-2 rounded font-mono text-sm text-yellow-400">
                                EP = m g h
                            </div>
                            '''
                        }
                    ]
                },
                {
                    'file': '3_impulso_gravitacion.html',
                    'title': 'Impulso y Gravitación',
                    'topics': [
                        {
                            'name': 'Cantidad de Movimiento (p)',
                            'content': '''
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                p = m × v<br>
                                [p] = kg·m/s
                            </div>
                            '''
                        },
                        {
                            'name': 'Impulso (I)',
                            'content': '''
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                I = F × Δt = Δp
                            </div>
                            <p class="text-sm text-slate-300">El impulso cambia la cantidad de movimiento.</p>
                            '''
                        },
                        {
                            'name': 'Ley de Gravitación Universal',
                            'content': '''
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                F = G (m₁ × m₂) / r²<br>
                                G = 6.67 × 10⁻¹¹ N·m²/kg²
                            </div>
                            '''
                        }
                    ]
                }
            ],
            'periodo3': [
                {
                    'file': '1_hidrostatica.html',
                    'title': 'Hidrostática',
                    'topics': [
                        {
                            'name': 'Presión (P)',
                            'content': '''
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                P = F / A<br>
                                [P] = Pascal (Pa) = N/m²
                            </div>
                            '''
                        },
                        {
                            'name': 'Densidad (ρ)',
                            'content': '''
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                ρ = m / V<br>
                                [ρ] = kg/m³
                            </div>
                            '''
                        },
                        {
                            'name': 'Presión Hidrostática',
                            'content': '''
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                P = ρ g h
                            </div>
                            <p class="text-sm text-slate-300">La presión aumenta con la profundidad.</p>
                            '''
                        },
                        {
                            'name': 'Principio de Arquímedes',
                            'content': '''
                            <p class="mb-2">La fuerza de empuje es igual al peso del fluido desplazado:</p>
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">
                                Fe = ρ g V
                            </div>
                            '''
                        }
                    ]
                },
                {
                    'file': '2_hidrodinamica.html',
                    'title': 'Hidrodinámica',
                    'topics': [
                        {
                            'name': 'Caudal (Q)',
                            'content': '''
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                Q = A × v<br>
                                [Q] = m³/s
                            </div>
                            '''
                        },
                        {
                            'name': 'Ecuación de Continuidad',
                            'content': '''
                            <p class="mb-2">El caudal es constante en una tubería:</p>
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">
                                Q₁ = Q₂<br>
                                A₁v₁ = A₂v₂
                            </div>
                            '''
                        },
                        {
                            'name': 'Flujo Laminar y Turbulento',
                            'content': '''
                            <p class="mb-2"><strong class="text-fis10">Número de Reynolds:</strong></p>
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">
                                Re = (ρ v d) / η
                            </div>
                            '''
                        }
                    ]
                },
                {
                    'file': '3_bernoulli.html',
                    'title': 'Teorema de Bernoulli',
                    'topics': [
                        {
                            'name': 'Ecuación de Bernoulli',
                            'content': '''
                            <p class="mb-2">La energía total en un fluido es constante:</p>
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                P + ½ρv² + ρgh = constante
                            </div>
                            <p class="text-sm text-slate-300">Presión + Energía cinética + Energía potencial = cte</p>
                            '''
                        },
                        {
                            'name': 'Aplicaciones del Teorema',
                            'content': '''
                            <ul class="list-disc list-inside text-sm text-slate-300 space-y-1">
                                <li>Tubo de Pitot (medidor de velocidad)</li>
                                <li>Efecto Magnus (curvas en deportes)</li>
                                <li>Alas de avión (principio de sustentación)</li>
                                <li>Atomizadores</li>
                            </ul>
                            '''
                        }
                    ]
                }
            ],
            'periodo4': [
                {
                    'file': '1_temperatura_calor.html',
                    'title': 'Temperatura y Calor',
                    'topics': [
                        {
                            'name': 'Temperatura',
                            'content': '''
                            <p class="mb-2"><strong class="text-fis10">Escalas de Temperatura:</strong></p>
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 space-y-1">
                                <p>Celsius: °C</p>
                                <p>Fahrenheit: °F = (°C × 9/5) + 32</p>
                                <p>Kelvin: K = °C + 273.15</p>
                            </div>
                            '''
                        },
                        {
                            'name': 'Calor (Q)',
                            'content': '''
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mb-3">
                                Q = m c ΔT<br>
                                [Q] = Julio (J)
                            </div>
                            <p class="text-sm text-slate-300">c: calor específico de la sustancia</p>
                            '''
                        },
                        {
                            'name': 'Dilatación Térmica',
                            'content': '''
                            <p class="mb-2"><strong class="text-fis10">Dilatación Lineal:</strong></p>
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400">
                                ΔL = L₀ α ΔT
                            </div>
                            '''
                        },
                        {
                            'name': 'Transferencia de Calor',
                            'content': '''
                            <ul class="list-disc list-inside text-sm text-slate-300 space-y-1">
                                <li><strong>Conducción:</strong> Dentro de sólidos</li>
                                <li><strong>Convección:</strong> En fluidos (aire/agua)</li>
                                <li><strong>Radiación:</strong> Por ondas electromagnéticas</li>
                            </ul>
                            '''
                        }
                    ]
                },
                {
                    'file': '2_termodinamica.html',
                    'title': 'Termodinámica',
                    'topics': [
                        {
                            'name': 'Leyes de la Termodinámica',
                            'content': '''
                            <p class="mb-2"><strong class="text-fis10">1ª Ley (Conservación):</strong></p>
                            <p class="text-sm text-slate-300 mb-3">ΔU = Q - W (La energía no se crea ni se destruye)</p>
                            <p class="mb-2"><strong class="text-fis10">2ª Ley (Entropía):</strong></p>
                            <p class="text-sm text-slate-300">La entropía del universo siempre aumenta</p>
                            '''
                        },
                        {
                            'name': 'Procesos Termodinámicos',
                            'content': '''
                            <ul class="list-disc list-inside text-sm text-slate-300 space-y-1">
                                <li><strong>Isotérmico:</strong> T = cte</li>
                                <li><strong>Adiabático:</strong> Q = 0 (sin intercambio de calor)</li>
                                <li><strong>Isobarico:</strong> P = cte</li>
                                <li><strong>Isocórico:</strong> V = cte</li>
                            </ul>
                            '''
                        },
                        {
                            'name': 'Ciclo de Carnot',
                            'content': '''
                            <p class="text-sm text-slate-300">El ciclo más eficiente posible entre dos temperaturas:</p>
                            <div class="bg-black/50 p-3 rounded font-mono text-sm text-yellow-400 mt-2">
                                η = (TH - TC) / TH
                            </div>
                            '''
                        }
                    ]
                }
            ]
        }
    }
}

def generate_page_html(subject_key, periodo, page_config, color, color_name):
    """Genera el HTML completo para una página"""
    
    file_name = page_config['file']
    title = page_config['title']
    topics = page_config['topics']
    
    # Generar tabs
    tabs_html = ''.join([
        f'''<button onclick="switchTab('tab{i}')" class="tab-btn {'active' if i == 0 else ''} px-4 py-2 rounded-full {'bg-' + color_name if i == 0 else 'bg-slate-600'} text-white font-bold text-sm hover:scale-105 transition-transform">
            <i class="fas fa-circle-{i}"></i> {topic['name'][:20]}
        </button>'''
        for i, topic in enumerate(topics)
    ])
    
    # Generar contenido de tabs
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
    <title>{title} | Física 10° - {periodo}</title>
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
                <i class="fas fa-arrow-left"></i> Física 10°
            </a>
            <span class="font-tech text-xl text-{color_name} tracking-widest">{title.upper()}</span>
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
                    <p class="text-slate-400">Física 10° - {periodo}</p>
                </div>
            </div>
            <p class="text-sm text-slate-300 leading-relaxed">Exploración didáctica de los conceptos fundamentales de {title.lower()}.</p>
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
                <p class="font-bold text-slate-300 mb-3">¿Qué has aprendido sobre {title.lower()}?</p>
                <p class="text-sm text-slate-400">Las evaluaciones interactivas estarán disponibles próximamente.</p>
            </div>
        </div>
    </section>

    <footer class="mt-16 border-t border-slate-700 pt-6 pb-4 px-4">
        <div class="container mx-auto max-w-5xl text-center text-slate-500 text-xs">
            <p class="mb-1">I.E. Paulo VI - Docente: Luis Miguel Cabrera - Laboratorio Virtual © 2026</p>
            <p>{title} | Física 10° - {periodo}</p>
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
    for periodo_key, periodo_pages in subject['pages'].items():
        periodo_num = periodo_key.replace('periodo', '')
        periodo_name = f'Período {periodo_num}'
        
        for page in periodo_pages:
            filename = page['file']
            filepath = f'{subject_key}/{periodo_key}/{filename}'
            
            # Crear directorio si no existe
            os.makedirs(os.path.dirname(filepath), exist_ok=True)
            
            # Generar HTML
            html = generate_page_html(subject_key, periodo_name, page, subject['color'], subject['color_name'])
            
            # Guardar archivo
            with open(filepath, 'w') as f:
                f.write(html)
            
            print(f'✅ Creado: {filepath}')
            count += 1

print(f'\n✅ {count} páginas creadas exitosamente')
