window.RouteUtils = {
  rel(depth, path) { return `${'../'.repeat(depth)}${path}`; },
  currentPath() { return location.pathname.split('/').slice(-3).join('/'); },
  findTopic(subjectKey, periodKey, slug) {
    const period = SITE_MAP[subjectKey]?.periods?.[periodKey];
    return period?.topics?.find(t => t.slug === slug) || null;
  }
};
