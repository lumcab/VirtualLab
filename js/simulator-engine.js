window.SimulatorEngine = {
  resizeCanvas(canvas, height = 320) {
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(320, Math.round(rect.width));
    canvas.height = height;
  },
  mountSine(canvas, controls) {
    const draw = () => {
      this.resizeCanvas(canvas);
      GraphEngine.drawSine(canvas, Number(controls.amplitude.value), Number(controls.wavelength.value), performance.now() / 500);
      requestAnimationFrame(draw);
    };
    draw();
  },
  mountVectors(canvas, controls, output) {
    const redraw = () => {
      this.resizeCanvas(canvas, 340);
      const magA = Number(controls.magA.value), angA = Number(controls.angA.value) * Math.PI / 180;
      const magB = Number(controls.magB.value), angB = Number(controls.angB.value) * Math.PI / 180;
      const vectorA = { x: magA * Math.cos(angA) * 12, y: magA * Math.sin(angA) * 12 };
      const vectorB = { x: magB * Math.cos(angB) * 12, y: magB * Math.sin(angB) * 12 };
      const result = GraphEngine.drawVector(canvas, vectorA, vectorB);
      output.textContent = `R ≈ (${(result.x / 12).toFixed(2)}, ${(result.y / 12).toFixed(2)})`;
    };
    Object.values(controls).forEach(node => node.addEventListener('input', redraw));
    redraw();
    window.addEventListener('resize', redraw);
  },
  mountPendulum(canvas, lengthInput, output) {
    let t = 0;
    const draw = () => {
      this.resizeCanvas(canvas, 360);
      const ctx = canvas.getContext('2d');
      const { width, height } = canvas;
      ctx.clearRect(0,0,width,height);
      const L = Number(lengthInput.value) * 80;
      const angle = 0.5 * Math.sin(t);
      const ox = width / 2, oy = 30;
      const bobX = ox + L * Math.sin(angle), bobY = oy + L * Math.cos(angle);
      const styles = getComputedStyle(document.documentElement);
      const lineColor = styles.getPropertyValue('--line-strong').trim() || 'rgba(148,163,184,.35)';
      const accent = styles.getPropertyValue('--accent').trim() || '#1d7f9d';
      const text = styles.getPropertyValue('--canvas-text').trim() || '#183245';
      ctx.strokeStyle = lineColor; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(bobX, bobY); ctx.stroke();
      ctx.fillStyle = accent; ctx.beginPath(); ctx.arc(bobX, bobY, 18, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = text; ctx.fillText(`L = ${lengthInput.value} m`, 16, 24);
      output.textContent = `Periodo cualitativo: aumenta cuando la longitud crece.`;
      t += 0.03;
      requestAnimationFrame(draw);
    };
    draw();
  },
  mountBarChart(canvas, values) {
    const redraw = () => {
      this.resizeCanvas(canvas, 280);
      GraphEngine.drawBars(canvas, values);
    };
    redraw();
    window.addEventListener('resize', redraw);
    window.addEventListener('themechange', redraw);
  }
};
