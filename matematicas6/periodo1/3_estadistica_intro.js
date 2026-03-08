document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para la sección interactiva: Drag and Drop ---
    const draggables = document.querySelectorAll('.draggable');
    const dropzones = document.querySelectorAll('.dropzone');
    const resetButton = document.getElementById('reset-drag-btn');
    const draggableContainer = document.getElementById('draggable-items');
    
    const correctAnswers = {
        'drag-1': 'drop-poblacion',
        'drag-2': 'drop-variable',
        'drag-3': 'drop-muestra'
    };

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    dropzones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault();
            zone.classList.add('hovered');
        });
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('hovered');
        });
        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.classList.remove('hovered');
            const dragging = document.querySelector('.dragging');
            if (zone.children.length === 0) { // Permitir solo un elemento por zona
                zone.innerHTML = ''; // Limpiar texto "Arrastra aquí"
                zone.appendChild(dragging);
                checkDrop(dragging.id, zone.id);
            }
        });
    });

    function checkDrop(draggableId, dropzoneId) {
        const dropzone = document.getElementById(dropzoneId);
        if (correctAnswers[draggableId] === dropzoneId) {
            dropzone.classList.add('correct');
            dropzone.classList.remove('incorrect');
            dropzone.firstElementChild.style.cursor = 'default';
        } else {
            dropzone.classList.add('incorrect');
            dropzone.classList.remove('correct');
        }
        
        // Comprobar si todo está correcto
        if (document.querySelectorAll('.dropzone.correct').length === 3) {
            resetButton.classList.remove('hidden');
        }
    }
    
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            dropzones.forEach(zone => {
                zone.innerHTML = '<span class="text-muted">Arrastra aquí</span>';
                zone.classList.remove('correct', 'incorrect');
            });
            draggables.forEach(item => {
                draggableContainer.appendChild(item);
                item.style.cursor = 'grab';
            });
            resetButton.classList.add('hidden');
        });
    }

    // --- Lógica para la sección de evaluación (Quiz) ---
    const TOPIC_ID = 'estadistica-intro';

    const questions = [
        {
            question: "Si queremos estudiar la estatura de todos los estudiantes de un colegio, ¿quién es la población?",
            options: ["Solo los estudiantes de 6°", "Todos los estudiantes del colegio", "Los profesores", "La estatura promedio"],
            correct: 1,
            feedback: "Correcto. La población es el grupo completo que nos interesa estudiar."
        },
        {
            question: "Para saber la comida favorita de los habitantes de una ciudad, se encuesta a 100 personas. Estas 100 personas son la...",
            options: ["Población", "Variable", "Muestra", "Estadística"],
            correct: 2,
            feedback: "¡Así es! La muestra es una parte representativa de la población total."
        },
        {
            question: "¿Cuál de las siguientes es una variable CUALITATIVA?",
            options: ["La edad de una persona", "El número de goles en un partido", "La marca de un celular", "El peso de un objeto"],
            correct: 2,
            feedback: "Correcto. La marca es una cualidad o categoría, no un número que se pueda medir."
        },
        {
            question: "¿Cuál de las siguientes es una variable CUANTITATIVA?",
            options: ["El color de pelo", "El sabor de un helado", "La temperatura en grados Celsius", "El tipo de música preferido"],
            correct: 2,
            feedback: "¡Muy bien! La temperatura es una característica que se mide con números."
        },
        {
            question: "Un subconjunto de la población se denomina:",
            options: ["Variable", "Dato", "Muestra", "Total"],
            correct: 2,
            feedback: "Exacto, una muestra es una porción seleccionada de la población."
        }
    ];

    if (window.QuizSystem) {
        window.QuizSystem.registerQuestionBank(TOPIC_ID, questions);
        window.QuizSystem.initQuiz('quiz-container', TOPIC_ID, 4);
    }
});
