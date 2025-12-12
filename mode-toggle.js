(function () {
    const toggle = document.getElementById('liteToggle');
    const body = document.body;

    const setLiteMode = (enabled) => {
        body.classList.toggle('lite-mode', enabled);
        localStorage.setItem('lite-mode', enabled ? '1' : '0');

        // Убираем сложные анимации у блоков, чтобы облегчить рендер.
        if (enabled) {
            document.querySelectorAll('section, .project, .team-card, .metric-card').forEach((el) => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'none';
            });
        }
    };

    const saved = localStorage.getItem('lite-mode') === '1';
    if (saved) {
        setLiteMode(true);
    }

    if (toggle) {
        toggle.checked = saved;
        toggle.setAttribute('aria-checked', saved.toString());

        toggle.addEventListener('change', (event) => {
            const enabled = event.target.checked;
            setLiteMode(enabled);
            toggle.setAttribute('aria-checked', enabled.toString());
        });
    }
})();

