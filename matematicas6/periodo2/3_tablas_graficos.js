document.addEventListener('DOMContentLoaded', () =>
{
    // --- Lógica para la sección interactiva: Generador de Tabla y Gráfico ---

    const category1 = document.getElementById('category1');
    const value1 = document.getElementById('value1');
    const category2 = document.getElementById('category2');
    const value2 = document.getElementById('value2');
    const category3 = document.getElementById('category3');
    const value3 = document.getElementById('value3');
    const generateTable = document.getElementById('generateTable');
    const tableContainer = document.getElementById('tableContainer');
    const chartContainer = document.getElementById('chartContainer');

    if (generateTable) {
        generateTable.addEventListener('click', () =>
        {
            const cat1 = category1.value || 'Categoría 1';
            const val1 = parseInt(value1.value) || 0;
            const cat2 = category2.value || 'Categoría 2';
            const val2 = parseInt(value2.value) || 0;
            const cat3 = category3.value || 'Categoría 3';
            const val3 = parseInt(value3.value) || 0;

            const total = val1 + val2 + val3;

            // Generar Tabla
            const tableHTML = `
                <table class="w-full text-center bg-primary rounded">
                    <tr class="bg-math text-white">
                        <th class="p-2">Categoría</th>
                        <th class="p-2">Frecuencia</th>
                    </tr>
                    <tr><td class="p-2">${cat1}</td><td class="p-2">${val1}</td></tr>
                    <tr><td class="p-2">${cat2}</td><td class="p-2">${val2}</td></tr>
                    <tr><td class="p-2">${cat3}</td><td class="p-2">${val3}</td></tr>
                    <tr class="bg-secondary"><td class="p-2 font-bold">Total</td><td class="p-2 font-bold">${total}</td></tr>
                </table>
            `;
            tableContainer.innerHTML = tableHTML;

            // Generar Gráfico de Barras
            const maxVal = Math.max(val1, val2, val3) || 1;
            const barHeight1 = (val1 / maxVal) * 100;
            const barHeight2 = (val2 / maxVal) * 100;
            const barHeight3 = (val3 / maxVal) * 100;

            const chartHTML = `
                <div class="flex justify-center items-end gap-4 h-full">
                    <div class="flex flex-col items-center">
                        <div class="w-12 bg-math rounded-t" style="height: ${barHeight1}%"></div>
                        <span class="text-xs mt-1">${cat1}</span>
                        <span class="text-xs">${val1}</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-12 bg-blue-500 rounded-t" style="height: ${barHeight2}%"></div>
                        <span class="text-xs mt-1">${cat2}</span>
                        <span class="text-xs">${val2}</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-12 bg-green-500 rounded-t" style="height: ${barHeight3}%"></div>
                        <span class="text-xs mt-1">${cat3}</span>
                        <span class="text-xs">${val3}</span>
                    </div>
                </div>
            `;
            chartContainer.innerHTML = chartHTML;
        });
    }

    // --- Lógica para la sección de evaluación (Quiz) ---
    const TOPIC_ID = 'tablas-graficos';

    const questions = [
        {
            question: "¿Qué tipo de tabla muestra la frecuencia de dos o más variables cualitativas?",
            options: [ "Tabla de multiplicar", "Tabla de contingencia", "Tabla periódica", "Tabla de verdad" ],
            correct: 1,
            feedback: "Correcto. Las tablas de contingencia organizan datos cualitativos en filas y columnas."
        },
        {
            question: "En un gráfico de barras, ¿qué representa la altura de cada barra?",
            options: [ "El nombre de la categoría", "La frecuencia de la categoría", "El color de la categoría", "El orden alfabético" ],
            correct: 1,
            feedback: "¡Muy bien! La altura indica cuántas veces ocurre cada categoría."
        },
        {
            question: "¿Cuál es la principal ventaja de usar gráficos de barras?",
            options: [ "Son difíciles de leer", "Facilitan la comparación visual", "Ocupan mucho espacio", "Solo sirven para números" ],
            correct: 1,
            feedback: "Excelente. Los gráficos de barras permiten comparar frecuencias de manera rápida."
        },
        {
            question: "Las variables cualitativas se representan mejor en:",
            options: [ "Ecuaciones", "Gráficos de líneas", "Gráficos de barras", "Fórmulas matemáticas" ],
            correct: 2,
            feedback: "¡Perfecto! Los gráficos de barras son ideales para datos cualitativos."
        },
        {
            question: "En una tabla de contingencia, el 'total' generalmente se encuentra en:",
            options: [ "La esquina superior izquierda", "La esquina inferior derecha", "En el medio de la tabla", "Solo en las filas" ],
            correct: 1,
            feedback: "Correcto. Los totales se calculan para filas, columnas y el total general."
        }
    ];

    if (window.QuizSystem) {
        window.QuizSystem.registerQuestionBank(TOPIC_ID, questions);
        window.QuizSystem.initQuiz('quiz-container', TOPIC_ID, 4);
    }
});