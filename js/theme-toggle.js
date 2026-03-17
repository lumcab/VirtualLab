(function(){
  const root = document.documentElement;
  const stored = (window.StorageAPI && StorageAPI.get('virtuallab-theme', 'dark')) || 'dark';
  root.dataset.theme = stored;
  window.toggleTheme = function(){
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    if (window.StorageAPI) StorageAPI.set('virtuallab-theme', next);
    document.querySelectorAll('[data-theme-label]').forEach(node => node.textContent = next === 'light' ? 'Modo claro' : 'Modo oscuro');
  };
})();
