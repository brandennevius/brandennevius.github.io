(() => {
  document.querySelectorAll('[role="tablist"]').forEach(tablist => {
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];
    function activate(tab, focus = false) {
      for (const item of tabs) {
        const active = item === tab;
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
        document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
      }
      if (focus) tab.focus();
    }
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== undefined) { event.preventDefault(); activate(tabs[next], true); }
      });
    });
  });
  document.querySelectorAll('[data-open-tab]').forEach(link => {
    link.addEventListener('click', () => document.getElementById(link.dataset.openTab)?.click());
  });
  const dialog = document.getElementById('screen-dialog');
  const enlarged = document.getElementById('screen-image');
  const caption = document.getElementById('screen-caption');
  document.querySelectorAll('[data-zoom]').forEach(button => {
    button.addEventListener('click', () => {
      const source = button.querySelector('img');
      enlarged.src = source.currentSrc || source.src;
      enlarged.alt = source.alt;
      caption.textContent = button.closest('figure')?.querySelector('figcaption')?.textContent || 'PowerStrongAI workspace';
      dialog.showModal();
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
})();
