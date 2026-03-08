document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para la sección interactiva: Calculadora ---

    // Potenciación
    const powBase = document.getElementById('powBase');
    const powExp = document.getElementById('powExp');
    const calcPow = document.getElementById('calcPow');
    const powResult = document.getElementById('powResult');
    if (calcPow) {
        calcPow.addEventListener('click', () => {
            const base = parseFloat(powBase.value);
            const exp = parseFloat(powExp.value);
            if (!isNaN(base) && !isNaN(exp)) {
                powResult.textContent = Math.pow(base, exp);
            } else {
                powResult.textContent = "Error";
            }
        });
    }

    // Radicación (Raíz Cuadrada)
    const sqrtNum = document.getElementById('sqrtNum');
    const calcSqrt = document.getElementById('calcSqrt');
    const sqrtResult = document.getElementById('sqrtResult');
    if (calcSqrt) {
        calcSqrt.addEventListener('click', () => {
            const num = parseFloat(sqrtNum.value);
            if (!isNaN(num) && num >= 0) {
                sqrtResult.textContent = Math.sqrt(num).toFixed(3);
            } else {
                sqrtResult.textContent = "Error";
            }
        });
    }

    // Logaritmación (Base 2)
    const logNum = document.getElementById('logNum');
    const calcLog = document.getElementById('calcLog');
    const logResult = document.getElementById('logResult');
    if (calcLog) {
        calcLog.addEventListener('click', () => {
            const num = parseFloat(logNum.value);
            if (!isNaN(num) && num > 0) {
                logResult.textContent = Math.log2(num).toFixed(3);
            } else {
                logResult.textContent = "Error";
            }
        });
    }

    // --- Lógica para la sección de evaluación (Quiz) ---
    const TOPIC_ID = 'operaciones-avanzadas';

    const questions = [
        {
            question: "¿Cuál es el resultado de 3⁴ (3 elevado a la cuarta)?",
            options: ["12", "27", "64", "81"],
            correct: 3,
            feedback: "Correcto. 3 x 3 x 3 x 3 = 81."
        },
        {
            question: "La raíz cuadrada de 49 (√49) es:",
            options: ["6", "7", "8", "49"],
            correct: 1,
            feedback: "¡Muy bien! Porque 7 x 7 = 49."
        },
        {
            question: "¿Qué operación es la inversa de la potenciación?",
            options: ["Suma", "División", "Radicación", "Multiplicación"],
            correct: 2,
            feedback: "Excelente. La radicación nos ayuda a encontrar la base de una potencia."
        },
        {
            question: "El valor de log₂(16) es:",
            options: ["2", "4", "8", "16"],
            correct: 1,
            feedback: "¡Perfecto! Buscamos el exponente al que hay que elevar 2 para obtener 16, y es 4 (2⁴ = 16)."
        },
        {
            question: "El resultado de 10² es:",
            options: ["20", "100", "1000", "10"],
            correct: 1,
            feedback: "Correcto. 10 x 10 = 100."
        }
    ];

    if (window.QuizSystem) {
        window.QuizSystem.registerQuestionBank(TOPIC_ID, questions);
        window.QuizSystem.initQuiz('quiz-container', TOPIC_ID, 4);
    }
});
