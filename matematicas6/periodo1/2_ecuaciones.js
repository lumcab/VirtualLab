document.addEventListener('DOMContentLoaded', () => {
    // Lógica para la sección interactiva: Solucionador de Ecuaciones
    const equationInput = document.getElementById('equationInput');
    const solveBtn = document.getElementById('solveBtn');
    const stepsDiv = document.getElementById('steps');
    const stepsContainer = document.getElementById('steps-container');

    if (solveBtn) {
        solveBtn.addEventListener('click', () => {
            const equation = equationInput.value.replace(/\s+/g, ''); // Limpiar espacios
            solveEquation(equation);
        });
    }

    function solveEquation(eq) {
        stepsContainer.innerHTML = '';
        stepsDiv.classList.remove('hidden');

        // Regex para una ecuación simple: x [+-] num1 = num2
        const match = eq.match(/x([+-])(\d+)=(\d+)/);
        
        if (!match) {
            stepsContainer.innerHTML = '<p class="text-error">Formato de ecuación no reconocido. Usa "x + a = b" o "x - a = b".</p>';
            return;
        }

        const operator = match[1];
        const num1 = parseInt(match[2], 10);
        const num2 = parseInt(match[3], 10);

        let step1 = `<p><strong>Ecuación inicial:</strong> ${eq}</p>`;
        let step2, result;

        if (operator === '+') {
            step2 = `<p>Para despejar 'x', restamos ${num1} en ambos lados.</p><p class="pl-4">x = ${num2} - ${num1}</p>`;
            result = num2 - num1;
        } else { // operator === '-'
            step2 = `<p>Para despejar 'x', sumamos ${num1} en ambos lados.</p><p class="pl-4">x = ${num2} + ${num1}</p>`;
            result = num2 + num1;
        }

        const finalStep = `<p><strong>Resultado:</strong> <span class="bg-math/20 text-math p-1 rounded">x = ${result}</span></p>`;

        stepsContainer.innerHTML = [step1, step2, finalStep].join('');
    }

    // --- Lógica para la sección de evaluación (Quiz) ---
    const TOPIC_ID = 'ecuaciones';

    const questions = [
        {
            question: "En la ecuación x + 8 = 15, ¿cuál es el valor de x?",
            options: ["7", "8", "15", "23"],
            correct: 0,
            feedback: "Correcto. Si restamos 8 a ambos lados, 15 - 8 = 7."
        },
        {
            question: "Si 3x = 18, ¿cuál es el valor de x?",
            options: ["3", "6", "9", "18"],
            correct: 1,
            feedback: "¡Muy bien! Dividimos ambos lados por 3, y 18 / 3 = 6."
        },
        {
            question: "En la inecuación x - 5 > 10, ¿qué podemos decir de x?",
            options: ["x es menor que 15", "x es igual a 15", "x es mayor que 15", "x es 5"],
            correct: 2,
            feedback: "Excelente. Si sumamos 5 a ambos lados, x debe ser mayor que 15."
        },
        {
            question: "La expresión 'un número aumentado en 4 es igual a 20' se escribe como:",
            options: ["x - 4 = 20", "4x = 20", "x + 4 = 20", "x/4 = 20"],
            correct: 2,
            feedback: "'Aumentado en' significa suma. Por lo tanto, x + 4 = 20."
        },
        {
            question: "¿Cuál es el valor de x en la ecuación 2x + 1 = 11?",
            options: ["4", "5", "6", "10"],
            correct: 1,
            feedback: "¡Perfecto! Primero restas 1 (2x = 10), luego divides por 2 (x = 5)."
        }
    ];

    // Registrar el banco de preguntas y mostrar el quiz
    if (window.QuizSystem) {
        window.QuizSystem.registerQuestionBank(TOPIC_ID, questions);
        window.QuizSystem.initQuiz('quiz-container', TOPIC_ID, 4); // Mostrar 4 preguntas aleatorias
    }
});
