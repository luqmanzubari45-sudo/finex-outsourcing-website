(() => {
  const heading = document.querySelector('#hw-process .hw-section-heading');
  if (!heading) return;
  heading.insertAdjacentHTML('beforeend', `<div class="hw-process-support"><strong>One clear workflow from first conversation to ongoing delivery.</strong><p>You always know what happens next, who owns each step and how progress is reviewed.</p><a href="/contact/">Talk through your requirements <span aria-hidden="true">→</span></a></div>`);
})();
