(function(){
  const root = document.documentElement;
  const stored = (window.StorageAPI && StorageAPI.get('virtuallab-theme', 'light')) || 'light';
  root.dataset.theme = stored;
  function notifyThemeChange() {
    if (window.App && typeof window.App.syncThemeVars === 'function') {
      window.App.syncThemeVars();
    }
    window.dispatchEvent(new Event('resize'));
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: root.dataset.theme } }));
  }
  window.toggleTheme = function(){
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    if (window.StorageAPI) StorageAPI.set('virtuallab-theme', next);
    document.querySelectorAll('[data-theme-label]').forEach(node => node.textContent = next === 'light' ? 'Modo claro' : 'Modo oscuro');
    notifyThemeChange();
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', notifyThemeChange, { once: true });
  } else {
    notifyThemeChange();
  }
})();
