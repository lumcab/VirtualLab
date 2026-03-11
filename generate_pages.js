#!/usr/bin/env node
/**
 * Generador de Páginas HTML para VirtualLab
 * Crea todas las páginas faltantes siguiendo las reglas de Copilot.md
 */

const fs = require('fs');
const path = require('path');

// Definición de contenidos por materia y periodo
const subjects = {
    fisica10: {
        color: '#3b82f6',
        colorName: 'fis10',
        colorCyber: '#facc15',
        topics: {
            periodo1: [
                { id: '1_intro_ciencia', name: 'Introducción a la Física', sections: [ 'Método Científico', 'Notación Científica', 'Magnitudes y Unidades', 'Cálculo de Errores' ] },
                { id: '2_magnitudes_vectores', name: 'Magnitudes y Vectores', sections: [ 'Magnitudes Escalares y Vectoriales', 'Operaciones con Vectores', 'Descomposición Vectorial', 'Producto Escalar' ] },
                { id: '3_cinematica', name: 'Cinemática', sections: [ 'MRU', 'MRUA', 'Caída Libre', 'Movimiento Parabólico' ] }
            ],
            periodo2: [
                { id: '1_estatica_dinamica', name: 'Estática y Dinámica', sections: [ 'Leyes de Newton', 'Diagramas DCL', 'Fuerzas', 'Equilibrio' ] },
                { id: '2_energia_trabajo', name: 'Trabajo y Energía', sections: [ 'Trabajo', 'Potencia', 'Energía Cinética', 'Energía Potencial' ] },
                { id: '3_impulso_gravitacion', name: 'Impulso y Gravitación', sections: [ 'Cantidad de Movimiento', 'Impulso', 'Colisiones', 'Ley de Gravitación' ] }
            ],
            periodo3: [
                { id: '1_hidrostatica', name: 'Hidrostática', sections: [ 'Presión', 'Densidad', 'Principio de Pascal', 'Principio de Arquímedes' ] },
                { id: '2_hidrodinamica', name: 'Hidrodinámica', sections: [ 'Caudal', 'Flujo Continuo', 'Números de Reynolds', 'Aplicaciones' ] },
                { id: '3_bernoulli', name: 'Teorema de Bernoulli', sections: [ 'Ecuación de Bernoulli', 'Ecuación de Continuidad', 'Aplicaciones Prácticas', 'Laboratorio' ] }
            ],
            periodo4: [
                { id: '1_temperatura_calor', name: 'Temperatura y Calor', sections: [ 'Temperatura', 'Escalas de Temperatura', 'Dilatación Térmica', 'Transferencia de Calor' ] },
                { id: '2_termodinamica', name: 'Termodinámica', sections: [ 'Leyes de la Termodinámica', 'Procesos Termodinámicos', 'Entropía', 'Aplicaciones' ] }
            ]
        }
    }
};

// Template base para generar html
function generateHTML(subject, periodo, topicData)
{
    const { color, colorName, colorCyber } = subject;
    const { id, name, sections } = topicData;

    const tabs = sections.map((sec, idx) =>
        `<button onclick="switchTab('sec${idx}')" class="tab-btn ${idx === 0 ? 'active' : ''} px-4 py-2 rounded-full ${idx === 0 ? `bg-${colorName}` : 'bg-slate-600'} text-white font-bold text-sm hover:scale-105 transition-transform">
            <i class="fas fa-circle-${idx + 1}"></i> ${sec}
        </button>`
    ).join('\n            ');

    const tabContent = sections.map((sec, idx) =>
        `<section id="tab-sec${idx}" class="${idx === 0 ? '' : 'hidden'} space-y-6 section-tab">
            <div class="glass p-6 rounded-xl border-t-4 border-${colorName}">
                <h3 class="text-2xl font-bold text-${colorName} mb-4">
                    <i class="fas fa-graduation-cap"></i> ${sec}
                </h3>
                <div class="space-y-4 text-slate-300">
                    <p>Contenido educativo sobre ${sec} en desarrollo.</p>
                    <div class="bg-slate-900/50 p-4 rounded border-l-4 border-${colorName}">
                        <h4 class="font-bold text-${colorName} mb-2">Conceptos clave:</h4>
                        <ul class="list-disc list-inside text-sm space-y-1">
                            <li>Fundamentos de ${sec}</li>
                            <li>Teoría y aplicaciones</li>
                            <li>Ejemplos prácticos</li>
                            <li>Problemas resueltos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>`
    ).join('\n\n        ');

    return `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name} | Física 10° - ${periodo}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../styles.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { tech: ['Orbitron', 'sans-serif'], body: ['Rajdhani', 'sans-serif'] },
                    colors: { ${colorName}: '${color}', neon: '#00f3ff', cyber: '${colorCyber}', dark: '#050b14' }
                }
            }
        }
    </script>
    <style>
        body { font-family: 'Rajdhani', sans-serif; }
        .glass { background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(${hex2rgb(color).join(',')}, 0.2); }
        [data-theme="dark"] body { background-color: #050b14; color: #e2e8f0; }
        [data-theme="light"] body { background-color: #f3f4f6; color: #1f2937; }
        [data-theme="light"] .glass { background: rgba(255, 255, 255, 0.7); }
    </style>
</head>
<body class="pb-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">

    <nav class="border-b border-white/10 bg-dark/95 backdrop-blur-md sticky top-0 z-50">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="../index.html" class="text-xs font-bold text-slate-400 hover:text-${colorName} border border-slate-600 px-3 py-1 rounded transition-colors">
                <i class="fas fa-arrow-left"></i> Física 10°
            </a>
            <span class="font-tech text-xl text-${colorName} tracking-widest">${name.toUpperCase()}</span>
            <button onclick="toggleTheme()" class="text-xs font-bold text-slate-400 hover:text-${colorName} border border-slate-600 px-3 py-1 rounded transition-colors">
                <i class="fas fa-moon"></i>
            </button>
        </div>
    </nav>

    <main class="container mx-auto px-4 py-8 max-w-5xl">

        <section class="glass p-8 rounded-2xl mb-8 border-l-4 border-${colorName}">
            <div class="flex items-center gap-4 mb-4">
                <i class="fas fa-book text-4xl text-${colorName}"></i>
                <div>
                    <h1 class="font-tech text-4xl text-${colorName} mb-2">${name}</h1>
                    <p class="text-slate-400">Física 10° - ${periodo}</p>
                </div>
            </div>
            <p class="text-sm text-slate-300 leading-relaxed">Exploración didáctica de los conceptos fundamentales de ${name.toLowerCase()}.</p>
        </section>

        <div class="mb-6 flex flex-wrap gap-2 justify-center">
            ${tabs}
        </div>

        ${tabContent}
    </main>

    <section class="container mx-auto px-4 max-w-5xl mt-12">
        <div class="glass p-6 rounded-xl border-l-4 border-cyber">
            <h3 class="text-2xl font-bold text-cyber mb-6 flex items-center gap-2">
                <i class="fas fa-question-circle"></i> Prueba tu Conocimiento
            </h3>
            <div class="bg-slate-900/50 p-4 rounded">
                <p class="font-bold text-slate-300 mb-3">¿Qué has aprendido sobre ${name.toLowerCase()}?</p>
                <p class="text-sm text-slate-400">Las evaluaciones interactivas estarán disponibles próximamente.</p>
            </div>
        </div>
    </section>

    <footer class="mt-16 border-t border-slate-700 pt-6 pb-4 px-4">
        <div class="container mx-auto max-w-5xl text-center text-slate-500 text-xs">
            <p class="mb-1">I.E. Paulo VI - Docente: Luis Miguel Cabrera - Laboratorio Virtual © 2026</p>
            <p>${name} | Física 10° - ${periodo}</p>
        </div>
    </footer>

    <script src="../../app.js"></script>
    <script>
        function toggleTheme() {
            const html = document.documentElement;
            const current = html.getAttribute('data-theme') || 'dark';
            const newTheme = current  === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme-${id}', newTheme);
        }

        window.addEventListener('load', () => {
            const saved = localStorage.getItem('theme-${id}') || 'dark';
            document.documentElement.setAttribute('data-theme', saved);
        });

        function switchTab(id) {
            document.querySelectorAll('.section-tab').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('bg-${colorName}'));
            document.getElementById('tab-' + id).classList.remove('hidden');
            event.currentTarget.classList.add('bg-${colorName}');
        }
    </script>
</body>
</html>`;
}

function hex2rgb(hex)
{
    const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[ 1 ], 16),
        parseInt(result[ 2 ], 16),
        parseInt(result[ 3 ], 16)
    ] : [ 0, 0, 0 ];
}

// Generar archivos
Object.entries(subjects).forEach(([ subjectKey, subject ]) =>
{
    Object.entries(subject.topics).forEach(([ periodKey, topics ]) =>
    {
        const periodNum = periodKey.replace('periodo', '');
        topics.forEach(topic =>
        {
            const filePath = path.join(__dirname, subjectKey, periodKey, `${topic.id}.html`);
            const dir = path.dirname(filePath);

            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            const html = generateHTML(subject, `Período ${periodNum}`, topic);
            fs.writeFileSync(filePath, html);
            console.log(`✅ Creado: ${filePath}`);
        });
    });
});

console.log('\n✅ Todas las páginas han sido generadas exitosamente');
