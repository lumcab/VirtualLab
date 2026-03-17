window.App = {
  async initPage(config) {
    document.body.classList.add(`theme-${config.theme || 'blue'}`);
    document.body.dataset.pageDepth = String(config.depth || 0);
    if (config.subjectKey) document.body.dataset.subject = config.subjectKey;
    if (config.periodKey) document.body.dataset.period = config.periodKey;
    await Navigation.mountShell(config);
    const title = document.getElementById('hero-title');
    const subtitle = document.getElementById('hero-subtitle');
    if (title && config.pageTitle) title.textContent = config.pageTitle;
    if (subtitle && config.pageDescription) subtitle.textContent = config.pageDescription;
    document.querySelectorAll('.hero.card').forEach(node => node.classList.add('hero-card', 'hero-panel'));
    this.mountRevealAnimations();
  },
  mountRevealAnimations() {
    const targets = Array.from(document.querySelectorAll('.hero, .card, .topic-card, .calendar-card'));
    targets.forEach((node, index) => {
      if (!node.hasAttribute('data-reveal')) {
        node.setAttribute('data-reveal', '');
        node.style.transitionDelay = `${Math.min(index * 45, 280)}ms`;
      }
    });
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      targets.forEach(node => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    targets.forEach(node => observer.observe(node));
  }
};
