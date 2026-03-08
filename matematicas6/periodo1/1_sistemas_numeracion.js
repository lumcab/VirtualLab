document.addEventListener('DOMContentLoaded', () => {
    // Lógica para la sección interactiva
    const decimalInput = document.getElementById('decimalInput');
    const convertBtn = document.getElementById('convertBtn');
    const resultsDiv = document.getElementById('results');
    const romanResult = document.getElementById('romanResult');
    const binaryResult = document.getElementById('binaryResult');

    function toRoman(num) {
        if (isNaN(num) || num < 1 || num > 3999) return "Número inválido";
        const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const syb = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        let result = "";
        for (let i = 0; i < val.length; i++) {
            while (num >= val[i]) {
                result += syb[i];
                num -= val[i];
            }
        }
        return result;
    }

    function toBinary(num) {
        if (isNaN(num) || num < 0) return "Número inválido";
        if (num === 0) return "0";
        return num.toString(2);
    }

    if (convertBtn) {
        convertBtn.addEventListener('click', () => {
            const num = parseInt(decimalInput.value, 10);
            if (isNaN(num) || num < 1 || num > 3999) {
                alert('Por favor, ingresa un número válido entre 1 y 3999.');
                resultsDiv.classList.add('hidden');
                return;
            }
            
            romanResult.textContent = toRoman(num);
            binaryResult.textContent = toBinary(num);
            resultsDiv.classList.remove('hidden');
        });
    }

    // --- Lógica para la sección de evaluación (Quiz) ---
    const TOPIC_ID = 'sistemas-numeracion';

    const questions = [
        {
            question: "¿Qué sistema de numeración utiliza solo los dígitos 0 y 1?",
            options: ["Decimal", "Romano", "Binario", "Maya"],
            correct: 2,
            feedback: "Correcto. El sistema binario es la base de la computación moderna."
        },
        {
            question: "En el sistema romano, ¿qué letra representa el número 100?",
            options: ["L", "C", "D", "M"],
            correct: 1,
            feedback: "¡Así es! 'C' viene de la palabra latina 'centum' que significa cien."
        },
        {
            question: "¿Cuál es el valor del número binario 1010 en sistema decimal?",
            options: ["8", "10", "12", "16"],
            correct: 1,
            feedback: "Excelente. (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (0 * 2^0) = 8 + 0 + 2 + 0 = 10."
        },
        {
            question: "El número 23 en romano se escribe...",
            options: ["XXIII", "XVVIII", "IIXXIII", "XXIIII"],
            correct: 0,
            feedback: "Correcto. Se escribe como la suma de 10 + 10 + 1 + 1 + 1."
        },
        {
            question: "¿Qué civilización utilizaba un sistema de numeración vigesimal (base 20)?",
            options: ["Egipcia", "Romana", "China", "Maya"],
            correct: 3,
            feedback: "¡Muy bien! Los mayas desarrollaron un sofisticado sistema de base 20."
        },
        {
            question: "¿Cuál de estos no es un número primo?",
            options: ["7", "13", "21", "29"],
            correct: 2,
            feedback: "Correcto. 21 no es primo porque es divisible por 3 y 7."
        },
        {
            question: "El número 1101 en binario, ¿a qué número decimal equivale?",
            options: ["11", "13", "15", "9"],
            correct: 1,
            feedback: "¡Perfecto! Equivale a 8 + 4 + 0 + 1 = 13."
        }
    ];

    // Registrar el banco de preguntas en el sistema de quizzes global
    if (window.QuizSystem) {
        window.QuizSystem.registerQuestionBank(TOPIC_ID, questions);
        window.QuizSystem.initQuiz('quiz-container', TOPIC_ID, 5); // Mostrar 5 preguntas aleatorias
    }
});
