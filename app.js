/**
 * VIRTUAL-LAB PVI - JavaScript Global
 * Funcionalidades compartidas para todo el sitio
 */

// ============================================
// SISTEMA DE MODO OSCURO/CLARO
// ============================================

const ThemeManager = {
    init() {
        // Verificar preferencia guardada (default: light)
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
        
        // Crear botón de toggle si no existe
        if (!document.getElementById('theme-toggle')) {
            this.createToggleButton();
        }
    },
    
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateToggleIcon(theme);
    },
    
    toggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    },
    
    createToggleButton() {
        const btn = document.createElement('button');
        btn.id = 'theme-toggle';
        btn.className = 'theme-toggle';
        btn.innerHTML = '<i class="fas fa-moon"></i>';
        btn.onclick = () => this.toggle();
        document.body.appendChild(btn);
    },
    
    updateToggleIcon(theme) {
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.innerHTML = theme === 'dark' 
                ? '<i class="fas fa-sun"></i>' 
                : '<i class="fas fa-moon"></i>';
        }
    }
};

// ============================================
// SISTEMA DE QUIZZES ALEATORIOS
// ============================================

const QuizSystem = {
    // Banco de preguntas por tema
    questionBanks: {},
    
    // Registrar un banco de preguntas para un tema
    registerQuestionBank(topicId, questions) {
        this.questionBanks[topicId] = questions;
    },
    
    // Inicializar un quiz en una página
    initQuiz(containerId, topicId, numQuestions = 5) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const questions = this.questionBanks[topicId];
        if (!questions || questions.length === 0) {
            container.innerHTML = '<p class="text-center text-muted">Quiz no disponible</p>';
            return;
        }
        
        // Seleccionar preguntas aleatorias
        const selectedQuestions = this.getRandomQuestions(questions, numQuestions);
        
        // Generar HTML del quiz
        this.renderQuiz(container, selectedQuestions, topicId);
    },
    
    // Obtener preguntas aleatorias
    getRandomQuestions(questions, count) {
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, questions.length));
    },
    
    // Renderizar el quiz
    renderQuiz(container, questions, topicId) {
        let html = '<form id="quiz-form">';
        
        questions.forEach((q, index) => {
            html += `
                <div class="quiz-question" data-question="${index}">
                    <p><strong>${index + 1}.</strong> ${q.question}</p>
                    <div class="quiz-options">
                        ${q.options.map((opt, optIndex) => `
                            <label class="quiz-option" onclick="QuizSystem.selectOption(this, ${index}, ${optIndex})">
                                <input type="radio" name="q${index}" value="${optIndex}">
                                <span>${opt}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        html += `
            <div class="text-center mt-6">
                <button type="button" class="btn btn-primary" onclick="QuizSystem.checkAnswers('${topicId}')">
                    <i class="fas fa-check-circle"></i> Verificar Respuestas
                </button>
                <button type="button" class="btn btn-secondary" onclick="QuizSystem.initQuiz('quiz-container', '${topicId}')">
                    <i class="fas fa-sync"></i> Nuevas Preguntas
                </button>
            </div>
        </form>
        
        <div id="quiz-result" class="quiz-result hidden"></div>
        `;
        
        container.innerHTML = html;
    },
    
    // Seleccionar opción
    selectOption(label, questionIndex, optionIndex) {
        const questionDiv = label.closest('.quiz-question');
        questionDiv.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        label.classList.add('selected');
        label.querySelector('input').checked = true;
    },
    
    // Verificar respuestas
    checkAnswers(topicId) {
        const questions = this.questionBanks[topicId];
        const selectedQuestions = this.getCurrentQuestions();
        
        let correct = 0;
        const form = document.getElementById('quiz-form');
        
        selectedQuestions.forEach((q, index) => {
            const selected = form.querySelector(`input[name="q${index}"]:checked`);
            const questionDiv = form.querySelector(`[data-question="${index}"]`);
            const options = questionDiv.querySelectorAll('.quiz-option');
            
            options.forEach((opt, optIndex) => {
                opt.classList.remove('correct', 'incorrect');
                if (optIndex === q.correct) {
                    opt.classList.add('correct');
                } else if (selected && parseInt(selected.value) === optIndex && optIndex !== q.correct) {
                    opt.classList.add('incorrect');
                }
            });
            
            if (selected && parseInt(selected.value) === q.correct) {
                correct++;
            }
        });
        
        // Mostrar resultado
        const resultDiv = document.getElementById('quiz-result');
        const percentage = Math.round((correct / selectedQuestions.length) * 100);
        
        resultDiv.classList.remove('hidden', 'success', 'fail');
        
        if (percentage >= 60) {
            resultDiv.classList.add('success');
            resultDiv.innerHTML = `
                <h3><i class="fas fa-trophy"></i> ¡Excelente!</h3>
                <p>Obtuviste ${correct} de ${selectedQuestions.length} correctas (${percentage}%)</p>
            `;
            this.throwConfetti();
        } else {
            resultDiv.classList.add('fail');
            resultDiv.innerHTML = `
                <h3><i class="fas fa-redo"></i> Sigue Practicando</h3>
                <p>Obtuviste ${correct} de ${selectedQuestions.length} correctas (${percentage}%)</p>
            `;
        }
    },
    
    // Obtener preguntas actuales del DOM
    getCurrentQuestions() {
        const questionDivs = document.querySelectorAll('.quiz-question');
        const indices = Array.from(questionDivs).map(div => parseInt(div.dataset.question));
        // Esto es una simplificación - en producción necesitaríamos guardar las preguntas seleccionadas
        return [];
    },
    
    // Efecto confetti
    throwConfetti() {
        const colors = ['#00f3ff', '#facc15', '#22c55e', '#a855f7', '#f472b6'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animation = `confetti-fall ${Math.random() * 2 + 2}s linear forwards`;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 4000);
        }
    }
};

// ============================================
// UTILIDADES MATEMÁTICAS
// ============================================

const MathUtils = {
    // Redondear a n decimales
    round(num, decimals = 2) {
        return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
    },
    
    // Generar número aleatorio en rango
    random(min, max) {
        return Math.random() * (max - min) + min;
    },
    
    // Generar número entero aleatorio
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    // Convertir grados a radianes
    toRadians(degrees) {
        return degrees * Math.PI / 180;
    },
    
    // Convertir radianes a grados
    toDegrees(radians) {
        return radians * 180 / Math.PI;
    },
    
    // Formato de número científico
    toScientific(num, decimals = 2) {
        if (num === 0) return '0';
        const exp = Math.floor(Math.log10(Math.abs(num)));
        const mantissa = num / Math.pow(10, exp);
        return `${this.round(mantissa, decimals)} × 10<sup>${exp}</sup>`;
    }
};

// ============================================
// UTILIDADES DE CANVAS
// ============================================

const CanvasUtils = {
    // Configurar canvas para alta resolución
    setupCanvas(canvas) {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        
        return { ctx, width: rect.width, height: rect.height };
    },
    
    // Dibujar flecha
    drawArrow(ctx, x1, y1, x2, y2, color = '#00f3ff', width = 2) {
        const angle = Math.atan2(y2 - y1, x2 - x1);
        const headLength = 10;
        
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = width;
        
        // Línea
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        
        // Cabeza de flecha
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(
            x2 - headLength * Math.cos(angle - Math.PI / 6),
            y2 - headLength * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
            x2 - headLength * Math.cos(angle + Math.PI / 6),
            y2 - headLength * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fill();
    },
    
    // Dibujar cuadrícula
    drawGrid(ctx, width, height, spacing = 50, color = 'rgba(255,255,255,0.1)') {
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        
        ctx.beginPath();
        for (let x = 0; x <= width; x += spacing) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
        }
        for (let y = 0; y <= height; y += spacing) {
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
        }
        ctx.stroke();
    },
    
    // Dibujar ejes cartesianos
    drawAxes(ctx, cx, cy, width, height, color = 'rgba(255,255,255,0.3)') {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        // Eje X
        ctx.moveTo(0, cy);
        ctx.lineTo(width, cy);
        // Eje Y
        ctx.moveTo(cx, 0);
        ctx.lineTo(cx, height);
        ctx.stroke();
    }
};

// ============================================
// ANIMACIONES
// ============================================

const Animations = {
    // Animar valor numérico
    animateNumber(element, start, end, duration = 1000, suffix = '') {
        const startTime = performance.now();
        
        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing ease-out
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * easeOut;
            
            element.textContent = MathUtils.round(current) + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };
        
        requestAnimationFrame(update);
    },
    
    // Efecto de escritura
    typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        
        type();
    }
};

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar tema
    ThemeManager.init();
    
    // Agregar clase de animación a elementos
    document.querySelectorAll('.glass-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-fade-in');
    });
});

// Exportar para uso global
window.ThemeManager = ThemeManager;
window.QuizSystem = QuizSystem;
window.MathUtils = MathUtils;
window.CanvasUtils = CanvasUtils;
window.Animations = Animations;
