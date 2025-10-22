document.addEventListener('DOMContentLoaded', () => {
  const skillButtons = Array.from(document.querySelectorAll('.skill-btn'));
  const contentSections = {
    vision: document.getElementById('vision-content'),
    rtl: document.getElementById('rtl-content'),
    mlai: document.getElementById('ml-ai-content'),
    others: document.getElementById('others-content')
  };

  function hideAllSections() {
    Object.values(contentSections).forEach(section => {
      if (!section) return;
      section.classList.add('hidden');
      section.classList.remove('show');
    });
  }

  function deactivateAllButtons() {
    skillButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
  }

  skillButtons.forEach(btn => {
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-pressed', 'false');

    btn.addEventListener('click', () => {
      const rawSkill = btn.dataset.skill;
      // map ml-ai to 'others' section because there is no dedicated ml-ai section
      const key = rawSkill === 'ml-ai' ? 'others' : rawSkill;
      const section = contentSections[key];

      const isActive = btn.classList.contains('active');

      if (isActive) {
        // deactivate current
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
        if (section) {
          section.classList.add('hidden');
          section.classList.remove('show');
        }
        return;
      }

      // activate clicked, deactivate others (single-select)
      deactivateAllButtons();
      hideAllSections();

      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      if (section) {
        section.classList.remove('hidden');
        section.classList.add('show');
        // scroll only when there is visible content
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // initial state: activate first button if present
  if (skillButtons.length > 0) {
    skillButtons[0].click();
  } else {
    hideAllSections();
  }
});

