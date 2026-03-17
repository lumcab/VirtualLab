window.QuizEngine = {
  mount(root, questions, storageKey = 'default-quiz') {
    if (!root) return;
    const chosen = questions.slice(0, 5).map(q => ({ ...q }));
    let state = { index: 0, score: 0, done: false };
    const progress = () => Math.round((state.index / chosen.length) * 100);

    const render = () => {
      const question = chosen[state.index];
      if (!question) {
        root.innerHTML = `<div class="toolbar" style="justify-content:space-between;"><h3 class="section-title" style="font-size:1.35rem; margin:0;">Mini quiz completado</h3><span class="score-pill">Puntaje: ${state.score}/${chosen.length}</span></div><div class="progress"><span style="width:100%"></span></div><p class="muted">Tu progreso queda guardado localmente.</p><button class="btn" id="restart-quiz">Reiniciar</button>`;
        StorageAPI.set(`quiz:${storageKey}`, { score: state.score, total: chosen.length, date: new Date().toISOString() });
        document.getElementById('restart-quiz')?.addEventListener('click', () => { state = { index: 0, score: 0, done: false }; render(); });
        return;
      }
      root.innerHTML = `
        <div class="toolbar" style="justify-content:space-between;">
          <h3 class="section-title" style="font-size:1.35rem; margin:0;">Evaluación interactiva</h3>
          <span class="score-pill">${state.score} aciertos</span>
        </div>
        <div class="progress"><span style="width:${progress()}%"></span></div>
        <p><strong>Pregunta ${state.index + 1} de ${chosen.length}.</strong> ${question.prompt}</p>
        <div class="quiz-options">${question.options.map((option, i) => `<label class="quiz-item"><input class="quiz-option" type="radio" name="quiz-option" value="${i}"><span>${option}</span></label>`).join('')}</div>
        <div class="toolbar"><button class="btn" id="quiz-submit">Responder</button><span id="quiz-feedback" class="mini-note"></span></div>`;
      document.getElementById('quiz-submit').addEventListener('click', () => {
        const picked = root.querySelector('input[name="quiz-option"]:checked');
        const feedback = document.getElementById('quiz-feedback');
        if (!picked) { feedback.textContent = 'Selecciona una opción.'; return; }
        const correct = Number(picked.value) === question.answer;
        if (correct) state.score += 1;
        feedback.textContent = `${correct ? '✔ Correcto.' : '✘ Revisa.'} ${question.feedback}`;
        setTimeout(() => { state.index += 1; render(); }, 900);
      });
    };
    render();
  }
};
