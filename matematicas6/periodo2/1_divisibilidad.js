document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para la sección interactiva: Calculadora de MCD y MCM ---
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultsDiv = document.getElementById('results');
    const mcdResult = document.getElementById('mcdResult');
    const mcmResult = document.getElementById('mcmResult');

    // Función para calcular el MCD (Algoritmo de Euclides)
    function calcularMCD(a, b) {
        let temp;
        while (b !== 0) {
            temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Función para calcular el MCM
    function calcularMCM(a, b) {
        if (a === 0 || b === 0) return 0;
        return Math.abs(a * b) / calcularMCD(a, b);
    }

    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            const num1 = parseInt(num1Input.value, 10);
            const num2 = parseInt(num2Input.value, 10);

            if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
                alert('Por favor, ingresa dos números enteros y positivos.');
                resultsDiv.classList.add('hidden');
                return;
            }

            mcdResult.textContent = calcularMCD(num1, num2);
            mcmResult.textContent = calcularMCM(num1, num2);
            resultsDiv.classList.remove('hidden');
        });
    }

    // --- Lógica para la sección de evaluación (Quiz) ---
    const TOPIC_ID = 'divisibilidad';

    const questions = [
        {
            question: "¿Cuál de los siguientes números es divisible por 3?",
            options: ["103", "205", "309", "401"],
            correct: 2,
            feedback: "Correcto. La suma de las cifras de 309 (3+0+9=12) es un múltiplo de 3."
        },
        {
            question: "El Máximo Común Divisor (MCD) de 15 y 20 es:",
            options: ["3", "4", "5", "10"],
            correct: 2,
            feedback: "¡Muy bien! 5 es el número más grande que puede dividir a 15 y 20 exactamente."
        },
        {
            question: "El Mínimo Común Múltiplo (MCM) de 4 y 6 es:",
            options: ["2", "12", "24", "4"],
            correct: 1,
            feedback: "Excelente. 12 es el número más pequeño que es múltiplo tanto de 4 como de 6."
        },
        {
            question: "La descomposición en factores primos de 28 es:",
            options: ["4 x 7", "2 x 14", "2² x 7", "2 x 3 x 5"],
            correct: 2,
            feedback: "Perfecto. 28 se descompone en 2 x 2 x 7, que se escribe como 2² x 7."
        },
        {
            question: "Un número es divisible por 10 si...",
            options: ["Es par", "Termina en 0", "La suma de sus cifras es 10", "Termina en 5"],
            correct: 1,
            feedback: "Correcto. La regla de divisibilidad por 10 es que el número debe terminar en 0."
        }
    ];

    if (window.QuizSystem) {
        window.QuizSystem.registerQuestionBank(TOPIC_ID, questions);
        window.QuizSystem.initQuiz('quiz-container', TOPIC_ID, 4);
    }
});
