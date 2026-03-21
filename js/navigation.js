window.Navigation = {
  componentFallbacks: {
    header: '<header id="site-header" class="site-header"></header>',
    sidebar: '<aside id="site-sidebar" class="sidebar card"></aside>',
    footer: '<footer id="site-footer"></footer>'
  },
  brand() {
    return window.BrandConfig || {
      projectName: 'VirtualLab',
      projectSubtitle: 'Laboratorio Virtual de Ciencias y Matemáticas',
      author: 'Luis Miguel Cabrera',
      yearLabel: 'Proyecto educativo 2026'
    };
  },
  async mountShell(config) {
    const mounts = [
      ['header-mount', 'components/navbar.html', this.componentFallbacks.header],
      ['sidebar-mount', 'components/sidebar.html', this.componentFallbacks.sidebar],
      ['footer-mount', 'components/footer.html', this.componentFallbacks.footer]
    ];
    await Promise.all(mounts.map(async ([id, relPath, fallback]) => {
      const mount = document.getElementById(id);
      if (!mount) return;
      try {
        const response = await fetch(RouteUtils.rel(config.depth, relPath));
        mount.innerHTML = response.ok ? await response.text() : fallback;
      } catch {
        mount.innerHTML = fallback;
      }
    }));
    this.renderHeader(config);
    this.renderSidebar(config);
    this.renderFooter(config);
    this.renderPedagogicNav(config);
  },
  renderHeader(config) {
    const target = document.getElementById('site-header');
    if (!target) return;
    const brand = this.brand();
    const links = Object.entries(SITE_MAP).map(([key, item]) => `<a class="nav-link" href="${RouteUtils.rel(config.depth, `${key}/index.html`)}">${item.title}</a>`).join('');
    target.innerHTML = `
      <div class="container row">
        <a class="brand" href="${RouteUtils.rel(config.depth, 'index.html')}">
          <span class="brand-mark" aria-hidden="true">
            <span class="brand-atom">
              <span class="brand-orbit orbit-a"></span>
              <span class="brand-orbit orbit-b"></span>
              <span class="brand-orbit orbit-c"></span>
              <span class="brand-nucleus"></span>
            </span>
          </span>
          <span class="brand-copy">
            <strong>${brand.projectName}</strong>
            <small>${brand.projectSubtitle}</small>
          </span>
        </a>
        <nav class="main-nav">${links}</nav>
        <button class="btn theme-toggle" onclick="toggleTheme()">🌓 <span data-theme-label></span></button>
      </div>`;
    document.querySelectorAll('[data-theme-label]').forEach(node => node.textContent = document.documentElement.dataset.theme === 'light' ? 'Modo claro' : 'Modo oscuro');
  },
  renderSidebar(config) {
    const target = document.getElementById('site-sidebar');
    if (!target || !config.subjectKey) return;
    const subject = SITE_MAP[config.subjectKey];
    let html = `<div class="badge">${subject.icon} ${subject.title}</div><h3>${config.pageTitle || subject.title}</h3><p class="mini-note">${subject.description}</p>`;
    html += '<div class="period-list">';
    for (const [periodKey, period] of Object.entries(subject.periods)) {
      const activePeriod = periodKey === config.periodKey ? 'active' : '';
      html += `<div style="margin-top:.8rem;"><a class="${activePeriod}" href="${RouteUtils.rel(config.depth, `${config.subjectKey}/${periodKey}/index.html`)}"><strong>${period.title}</strong></a><div class="topic-list">`;
      for (const topic of period.topics) {
        const activeTopic = topic.slug === config.topicSlug ? 'active' : '';
        html += `<a class="${activeTopic}" href="${RouteUtils.rel(config.depth, `${config.subjectKey}/${periodKey}/${topic.slug}`)}">${topic.title}</a>`;
      }
      html += '</div></div>';
    }
    html += '</div>';
    target.innerHTML = html;
  },
  renderFooter(config) {
    const target = document.getElementById('site-footer');
    if (!target) return;
    const brand = this.brand();
    target.innerHTML = `
      <div class="container">
        <div class="card footer-card">
          <span class="badge">Proyecto educativo 2026</span>
          <p>Recursos interactivos para Ciencias y Matemáticas.</p>
          <p>Docente: ${brand.author}</p>
          <p><strong>${brand.projectName}</strong> &copy; 2026</p>
        </div>
      </div>`;
  },
  renderPedagogicNav(config) {
    const target = document.getElementById('pedagogic-nav');
    if (!target || !config.subjectKey || !config.periodKey || !config.topicSlug) return;
    const topics = SITE_MAP[config.subjectKey].periods[config.periodKey].topics;
    const idx = topics.findIndex(t => t.slug === config.topicSlug);
    const prev = idx > 0 ? topics[idx - 1] : null;
    const next = idx < topics.length - 1 ? topics[idx + 1] : null;
    target.innerHTML = `
      <a class="btn" href="${RouteUtils.rel(config.depth, 'index.html')}">🏠 Inicio</a>
      <a class="btn" href="${RouteUtils.rel(config.depth, `${config.subjectKey}/${config.periodKey}/index.html`)}">↩ Volver al período</a>
      ${prev ? `<a class="btn" href="${RouteUtils.rel(config.depth, `${config.subjectKey}/${config.periodKey}/${prev.slug}`)}">⟵ ${prev.title}</a>` : ''}
      ${next ? `<a class="btn" href="${RouteUtils.rel(config.depth, `${config.subjectKey}/${config.periodKey}/${next.slug}`)}">${next.title} ⟶</a>` : ''}`;
  }
};
