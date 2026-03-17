window.App = {
  async initPage(config) {
    document.body.classList.add(`theme-${config.theme || 'blue'}`);
    await Navigation.mountShell(config);
    const title = document.getElementById('hero-title');
    const subtitle = document.getElementById('hero-subtitle');
    if (title && config.pageTitle) title.textContent = config.pageTitle;
    if (subtitle && config.pageDescription) subtitle.textContent = config.pageDescription;
  }
};
