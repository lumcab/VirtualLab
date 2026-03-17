window.GraphEngine = {
  drawAxes(ctx, width, height) {
    ctx.clearRect(0,0,width,height);
    ctx.strokeStyle = 'rgba(148,163,184,.45)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, height/2); ctx.lineTo(width - 20, height/2);
    ctx.moveTo(width/2, 20); ctx.lineTo(width/2, height - 20);
    ctx.stroke();
  },
  drawVector(canvas, vectorA, vectorB) {
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    this.drawAxes(ctx, width, height);
    const origin = { x: width/2, y: height/2 };
    const vectors = [
      { ...vectorA, color: '#22d3ee', label: 'A' },
      { ...vectorB, color: '#a855f7', label: 'B' }
    ];
    const result = { x: vectorA.x + vectorB.x, y: vectorA.y + vectorB.y, color: '#22c55e', label: 'R' };
    vectors.push(result);
    vectors.forEach(v => {
      ctx.strokeStyle = v.color; ctx.fillStyle = v.color; ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(origin.x + v.x, origin.y - v.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(origin.x + v.x, origin.y - v.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillText(v.label, origin.x + v.x + 6, origin.y - v.y - 6);
    });
    return result;
  },
  drawSine(canvas, amplitude, wavelength, phase = 0) {
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    this.drawAxes(ctx, width, height);
    ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 3; ctx.beginPath();
    for (let x = 0; x < width; x++) {
      const y = height/2 - amplitude * Math.sin((x / wavelength) + phase);
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  },
  drawBars(canvas, values) {
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    const isLight = document.documentElement.dataset.theme === 'light';
    const textColor = isLight ? '#243129' : '#f3efe8';
    const mutedColor = isLight ? '#435247' : '#d8d2c7';
    ctx.clearRect(0,0,width,height);
    const max = Math.max(...values.map(v => v.value), 1);
    const barW = (width - 60) / values.length;
    ctx.font = 'bold 15px Verdana';
    values.forEach((item, i) => {
      const h = (item.value / max) * (height - 60);
      ctx.fillStyle = ['#22d3ee', '#38bdf8', '#a855f7', '#f59e0b'][i % 4];
      ctx.fillRect(30 + i * barW, height - h - 30, barW - 16, h);
      ctx.fillStyle = textColor;
      ctx.fillText(item.label, 30 + i * barW, height - 10);
      ctx.fillStyle = mutedColor;
      ctx.fillText(String(item.value), 30 + i * barW + 8, height - h - 40);
    });
  }
};
