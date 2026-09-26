(() => {
  const statistics = [...document.querySelectorAll('.proof-stats strong')]
    .map(element => {
      const match = element.textContent.trim().match(/^(\d+)(.*)$/);
      return match ? { element, target: Number(match[1]), suffix: match[2] } : null;
    })
    .filter(Boolean);

  if (!statistics.length) return;

  const showFinalValues = () => statistics.forEach(({ element, target, suffix }) => {
    element.textContent = `${target}${suffix}`;
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    showFinalValues();
    return;
  }

  statistics.forEach(({ element, suffix }) => {
    element.textContent = `0${suffix}`;
  });

  const animate = () => {
    const duration = 1500;
    const startedAt = performance.now();
    const tick = now => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      statistics.forEach(({ element, target, suffix }) => {
        element.textContent = `${Math.round(target * eased)}${suffix}`;
      });
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const section = document.querySelector('.proof-stats');
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      observer.disconnect();
      animate();
    }
  }, { threshold: 0.35 });

  observer.observe(section);
})();
